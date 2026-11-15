#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const EXIT_SUCCESS = 0;
const EXIT_LINT_ERROR = 1;
const EXIT_EXECUTION_ERROR = 2;

const NPX_COMMAND = process.platform === 'win32' ? 'npx.cmd' : 'npx';

const args = process.argv.slice(2);

const FIX_MODE = args.includes('--fix') || process.env.npm_config_fix === 'true';

const JSON_MODE = args.includes('--json') || process.env.npm_config_json === 'true';

const SUGGESTION_MAP = {
  MD012: 'Remover linhas em branco consecutivas',
  MD022: 'Adicionar linha em branco antes e depois do heading',
  MD024: 'Renomear ou remover o heading duplicado',
  MD025: 'Manter apenas um heading H1 (#) por documento',
  MD032: 'Adicionar linha em branco antes e depois da lista',
  MD034: 'Converter a URL nua em um link Markdown',
  MD036: 'Substituir texto em negrito por heading Markdown (## Título)',
  MD040: 'Adicionar a linguagem ao bloco de código',
  MD047: 'Adicionar uma linha em branco ao final do arquivo',
  MD056: 'Corrigir a quantidade de colunas da tabela para coincidir com o cabeçalho'
};

const RULE_SEVERITY = {
  MD036: 'warning',
  MD056: 'error',
  MD022: 'error',
  MD012: 'warning',
  MD025: 'error'
};

const RESULT = {
  success: true,
  fatal: false,
  fixMode: FIX_MODE,
  timestamp: new Date().toISOString(),
  autofix: null,
  summary: createSummary([]),
  files: [],
  errors: []
};

function log(...messages) {
  if (!JSON_MODE) {
    console.log(...messages);
  }
}

function fail(message) {
  const failure = {
    success: false,
    fatal: true,
    fixMode: FIX_MODE,
    timestamp: new Date().toISOString(),
    message
  };

  if (JSON_MODE) {
    process.stdout.write(JSON.stringify(failure, null, 2));
  } else {
    console.error(message);
  }

  process.exit(EXIT_EXECUTION_ERROR);
}

function fileExists(filePath) {
  try {
    fs.accessSync(filePath);
    return true;
  } catch {
    return false;
  }
}

function readLines(file) {
  try {
    return fs.readFileSync(file, 'utf8').split(/\r?\n/);
  } catch {
    return [];
  }
}

function createContext(file, lineNumber) {
  if (!fileExists(file)) {
    return null;
  }

  const lines = readLines(file);

  const start = Math.max(0, lineNumber - 2);

  const end = Math.min(lines.length, lineNumber + 1);

  const context = [];

  for (let index = start; index < end; index++) {
    context.push(`${String(index + 1).padStart(4)} | ${lines[index]}`);
  }

  return context.join('\n');
}

function ruleCode(rule) {
  const match = String(rule).match(/^MD\d+/);

  return match ? match[0] : String(rule);
}

function suggestionFor(rule) {
  return SUGGESTION_MAP[ruleCode(rule)] || 'Revisão manual necessária';
}

function severityFor(rule) {
  const code = ruleCode(rule);
  return RULE_SEVERITY[rule] ?? RULE_SEVERITY[code] ?? 'error';
}

function countTableColumns(rowText) {
  const trimmed = String(rowText).trim();
  if (!trimmed.includes('|')) {
    return 0;
  }

  const normalized = trimmed.replace(/^\|/, '').replace(/\|$/, '');

  if (!normalized.trim()) {
    return 0;
  }

  return normalized.split(/(?<!\\)\|/).length;
}

function findExpectedTableColumns(lines, lineIndex, description) {
  const expectedMatch = String(description).match(/Expected:\s*(\d+)/i);

  if (expectedMatch) {
    return Number(expectedMatch[1]);
  }

  let cursor = lineIndex;

  while (cursor > 0 && lines[cursor - 1].trim().includes('|')) {
    cursor--;
  }

  return countTableColumns(lines[cursor]);
}

function buildAdjustedTableRow(rawLine, expectedColumns) {
  const trimmed = String(rawLine).trim();
  const normalized = trimmed.replace(/^\|/, '').replace(/\|$/, '');

  const cells = normalized ? normalized.split(/(?<!\\)\|/).map((cell) => cell.trim()) : [];

  if (expectedColumns <= 0) {
    return trimmed;
  }

  if (cells.length < expectedColumns) {
    while (cells.length < expectedColumns) {
      cells.push(cells.length === 1 ? 'Valor' : `Coluna ${cells.length + 1}`);
    }
  } else if (cells.length > expectedColumns) {
    cells.length = expectedColumns;
  }

  return `| ${cells.join(' | ')} |`;
}

function createConcreteFix(file, lineNumber, rule, description) {
  if (!fileExists(file) || !lineNumber) {
    return null;
  }

  const lines = readLines(file);
  const lineIndex = lineNumber - 1;

  if (lineIndex < 0 || lineIndex >= lines.length) {
    return null;
  }

  const rawLine = lines[lineIndex];
  const code = ruleCode(rule);

  if (code === 'MD036') {
    const cleanText = rawLine
      .trim()
      .replace(/^(\*\*|__)(.*)\1$/, '$2')
      .replace(/^(\*|_)(.*)\1$/, '$2')
      .trim();

    return {
      type: 'before-after',
      before: cleanText,
      after: `## ${cleanText}`,
      formatted: ['Correção sugerida', '', 'ANTES', cleanText, '', 'DEPOIS', `## ${cleanText}`].join('\n')
    };
  }

  if (code === 'MD056') {
    const expectedColumns = findExpectedTableColumns(lines, lineIndex, description);

    const problemLine = rawLine.trim();
    const possibleFix = buildAdjustedTableRow(rawLine, expectedColumns);

    return {
      type: 'table-columns',
      expectedColumns,
      problemLine,
      possibleFix,
      formatted: [
        `Tabela possui ${expectedColumns} colunas esperadas.`,
        'Linha problemática:',
        problemLine,
        'Possível correção:',
        possibleFix
      ].join('\n')
    };
  }

  if (code === 'MD025') {
    const afterLine = rawLine.replace(/^(\s*)#(\s+)/, '$1##$2');

    return {
      type: 'before-after',
      before: rawLine.trim(),
      after: afterLine.trim(),
      formatted: ['Correção sugerida', '', 'ANTES', rawLine.trim(), '', 'DEPOIS', afterLine.trim()].join('\n')
    };
  }

  if (code === 'MD034') {
    const afterLine = rawLine.replace(/(https?:\/\/[^\s)>]+)/g, '<$1>');

    return {
      type: 'before-after',
      before: rawLine.trim(),
      after: afterLine.trim(),
      formatted: ['Correção sugerida', '', 'ANTES', rawLine.trim(), '', 'DEPOIS', afterLine.trim()].join('\n')
    };
  }

  if (code === 'MD040') {
    const trimmed = rawLine.trim();
    const afterLine = trimmed === '```' ? '```text' : `${trimmed}text`;

    return {
      type: 'before-after',
      before: trimmed,
      after: afterLine,
      formatted: ['Correção sugerida', '', 'ANTES', trimmed, '', 'DEPOIS', afterLine].join('\n')
    };
  }

  return null;
}

function commandOutput(result) {
  return [result.stdout, result.stderr].filter(Boolean).join('\n');
}

function runCommand(commandArgs, allowedStatuses = [0]) {
  const result = spawnSync(NPX_COMMAND, commandArgs, {
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024
  });

  if (result.error) {
    throw new Error(`Erro executando npx ${commandArgs.join(' ')}: ${result.error.message}`);
  }

  if (result.signal) {
    throw new Error(`Comando interrompido pelo sinal ${result.signal}: npx ${commandArgs.join(' ')}`);
  }

  if (!allowedStatuses.includes(result.status)) {
    const output = commandOutput(result).trim();

    throw new Error(
      [`Comando falhou com código ${result.status}: npx ${commandArgs.join(' ')}`, output].filter(Boolean).join('\n')
    );
  }

  return {
    status: result.status,
    output: commandOutput(result)
  };
}

function parseMarkdownlintOutput(output) {
  const errors = [];

  const lines = output
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const pattern = /^(.+?):(\d+)(?::(\d+))?\s+error\s+([^\s]+)\s+(.+)$/;

  for (const line of lines) {
    const match = line.match(pattern);

    if (!match) {
      continue;
    }

    const [, file, lineNumber, columnNumber, rule, description] = match;

    const numericLine = Number(lineNumber);

    errors.push({
      tool: 'markdownlint',
      severity: severityFor(rule),
      file,
      absoluteFile: path.resolve(file),
      line: numericLine,
      column: columnNumber ? Number(columnNumber) : null,
      rule,
      description,
      reason: ruleCode(rule),
      suggestion: suggestionFor(rule),
      concreteFix: createConcreteFix(file, numericLine, rule, description),
      context: createContext(file, numericLine)
    });
  }

  return errors;
}

function collectMarkdownlintErrors() {
  const result = runCommand(['markdownlint-cli2', '**/*.md'], [0, 1]);

  return parseMarkdownlintOutput(result.output);
}

function extractPrettierFiles(output) {
  const files = new Set();

  const lines = output
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    if (!line.startsWith('[warn]')) {
      continue;
    }

    const value = line.replace(/^\[warn\]\s*/, '').trim();

    if (!value || value.startsWith('Code style issues found') || value.startsWith('Ignored unknown option')) {
      continue;
    }

    files.add(value);
  }

  return [...files];
}

function checkPrettierFile(file) {
  const result = runCommand(['prettier', file, '--check'], [0, 1]);

  return {
    formatted: result.status === 0,
    output: result.output
  };
}

function collectPrettierErrors() {
  const result = runCommand(['prettier', '.', '--check'], [0, 1]);

  const files = extractPrettierFiles(result.output);

  const errors = [];

  for (const file of files) {
    const individual = checkPrettierFile(file);

    if (individual.formatted) {
      continue;
    }

    errors.push({
      tool: 'prettier',
      severity: 'warning',
      file,
      absoluteFile: path.resolve(file),
      line: null,
      column: null,
      rule: 'FORMATTING',
      description: 'Arquivo fora do padrão Prettier',
      reason: 'formatting',
      suggestion: `Executar prettier --write "${file}"`,
      concreteFix: null,
      context: null
    });
  }

  return errors;
}

function collectErrors() {
  return [...collectMarkdownlintErrors(), ...collectPrettierErrors()];
}

function runAutofix() {
  runCommand(['markdownlint-cli2', '**/*.md', '--fix'], [0, 1]);

  runCommand(['prettier', '.', '--write'], [0, 1]);
}

function createSummary(errors) {
  const summary = {
    markdownlint: {
      errors: 0
    },
    prettier: {
      errors: 0
    },
    severity: {
      error: 0,
      warning: 0
    },
    rules: {},
    total: errors.length
  };

  const ruleCounts = new Map();

  for (const error of errors) {
    if (error.tool === 'markdownlint') {
      summary.markdownlint.errors++;
    }

    if (error.tool === 'prettier') {
      summary.prettier.errors++;
    }

    if (Object.hasOwn(summary.severity, error.severity)) {
      summary.severity[error.severity]++;
    }

    ruleCounts.set(error.rule, (ruleCounts.get(error.rule) || 0) + 1);
  }

  const sortedRules = [...ruleCounts.entries()].sort((left, right) => {
    if (left[0] === 'FORMATTING') {
      return 1;
    }

    if (right[0] === 'FORMATTING') {
      return -1;
    }

    if (right[1] !== left[1]) {
      return right[1] - left[1];
    }

    return left[0].localeCompare(right[0]);
  });

  for (const [rule, count] of sortedRules) {
    summary.rules[rule] = count;
  }

  return summary;
}

function createToolCounts(errors) {
  return {
    markdownlint: errors.filter((error) => error.tool === 'markdownlint').length,
    prettier: errors.filter((error) => error.tool === 'prettier').length,
    total: errors.length
  };
}

function buildStructuredFiles(errors) {
  const fileGroups = new Map();

  for (const error of errors) {
    if (!fileGroups.has(error.file)) {
      fileGroups.set(error.file, {
        file: error.file,
        absoluteFile: error.absoluteFile,
        errorCount: 0,
        rules: new Map()
      });
    }

    const fileGroup = fileGroups.get(error.file);

    fileGroup.errorCount++;

    const ruleKey = `${error.tool}:${error.rule}`;

    if (!fileGroup.rules.has(ruleKey)) {
      fileGroup.rules.set(ruleKey, {
        tool: error.tool,
        rule: error.rule,
        severity: error.severity,
        description: error.description,
        reason: error.reason,
        suggestion: error.suggestion,
        errorCount: 0,
        occurrences: []
      });
    }

    const ruleGroup = fileGroup.rules.get(ruleKey);

    ruleGroup.errorCount++;

    ruleGroup.occurrences.push({
      line: error.line,
      column: error.column,
      context: error.context,
      concreteFix: error.concreteFix
    });
  }

  return [...fileGroups.values()]
    .sort((left, right) => left.file.localeCompare(right.file))
    .map((fileGroup) => ({
      file: fileGroup.file,
      absoluteFile: fileGroup.absoluteFile,
      errorCount: fileGroup.errorCount,
      rules: [...fileGroup.rules.values()].sort((left, right) => left.rule.localeCompare(right.rule))
    }));
}

function printAutofixSummary() {
  if (!RESULT.autofix) {
    return;
  }

  log('');
  log('='.repeat(80));
  log('AUTOFIX');
  log(`${RESULT.autofix.corrected} problemas corrigidos`);
  log('VALIDAÇÃO FINAL');
  log(`MarkdownLint: ${RESULT.autofix.remaining.markdownlint}`);
  log(`Prettier: ${RESULT.autofix.remaining.prettier}`);
  log(`Total: ${RESULT.autofix.remaining.total}`);
  log('='.repeat(80));
}

function printOccurrences(ruleGroup) {
  for (const occurrence of ruleGroup.occurrences) {
    if (occurrence.line) {
      const column = occurrence.column ? `, coluna ${occurrence.column}` : '';

      log(`  - linha ${occurrence.line}${column}`);
    } else {
      log('  - arquivo completo');
    }

    if (occurrence.context) {
      log('');
      log(occurrence.context);
      log('');
    }

    if (occurrence.concreteFix && occurrence.concreteFix.formatted) {
      log(occurrence.concreteFix.formatted);
      log('');
    }
  }
}

function printHumanReport() {
  printAutofixSummary();

  log('');
  log('='.repeat(80));

  log(FIX_MODE ? 'VALIDAÇÃO FINAL — DETALHES' : 'AGENT LINT REPORT');

  log('='.repeat(80));

  if (RESULT.files.length === 0) {
    log('');
    log('✅ Nenhum problema encontrado.');
  }

  for (const fileGroup of RESULT.files) {
    log('');
    log(`Arquivo: ${fileGroup.file}`);

    log(`Caminho absoluto: ${fileGroup.absoluteFile}`);

    log(`${fileGroup.errorCount} erro(s)`);

    for (const ruleGroup of fileGroup.rules) {
      log('');
      log(`${ruleGroup.severity.toUpperCase()}`);

      log(`${ruleGroup.rule} — ${ruleGroup.errorCount} ocorrência(s)`);

      log(`Descrição: ${ruleGroup.description}`);

      log(`Correção: ${ruleGroup.suggestion}`);

      printOccurrences(ruleGroup);
    }
  }

  log('');
  log('='.repeat(80));
  log('RESUMO');

  log(`MarkdownLint: ${RESULT.summary.markdownlint.errors}`);

  log(`Prettier: ${RESULT.summary.prettier.errors}`);

  log(`Errors: ${RESULT.summary.severity.error}`);

  log(`Warnings: ${RESULT.summary.severity.warning}`);

  log(`Total: ${RESULT.summary.total}`);

  const ruleEntries = Object.entries(RESULT.summary.rules);

  if (ruleEntries.length > 0) {
    log('');
    log('REGRAS');

    for (const [rule, count] of ruleEntries) {
      log(`${rule}: ${count}`);
    }
  }

  log('='.repeat(80));
}

function finalize(errors) {
  RESULT.errors = errors;
  RESULT.summary = createSummary(errors);
  RESULT.files = buildStructuredFiles(errors);
  RESULT.success = errors.length === 0;
}

try {
  if (FIX_MODE) {
    const before = collectErrors();

    runAutofix();

    const remaining = collectErrors();

    RESULT.autofix = {
      before: createToolCounts(before),
      corrected: Math.max(0, before.length - remaining.length),
      remaining: createToolCounts(remaining)
    };

    finalize(remaining);
  } else {
    finalize(collectErrors());
  }

  if (JSON_MODE) {
    process.stdout.write(JSON.stringify(RESULT, null, 2));
  } else {
    printHumanReport();
  }

  process.exit(RESULT.success ? EXIT_SUCCESS : EXIT_LINT_ERROR);
} catch (error) {
  fail(error instanceof Error ? error.message : String(error));
}
