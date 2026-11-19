#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const EXIT_SUCCESS = 0;
const EXIT_LINT_ERROR = 1;
const EXIT_EXECUTION_ERROR = 2;

const MAX_RETRIES = 3;
const MAX_BATCH_ERRORS = 10;

const RETRY_STATE_FILE = path.resolve(
  process.cwd(),
  '.temp',
  'agent-lint-retries.json'
);

const FRONTMATTER_SCHEMA_PATH = path.resolve(
  process.cwd(),
  '.vscode',
  'frontmatter-schema.json'
);

const args = process.argv.slice(2);

const JSON_MODE =
  args.includes('--json') ||
  process.env.npm_config_json === 'true';

const RESET_RETRIES = args.includes('--reset-retries');

const TARGET_FILES = args.filter(
  arg => !arg.startsWith('--')
);

const SUGGESTION_MAP = {
  MD012: 'Remover linhas em branco consecutivas',
  MD022: 'Adicionar linha em branco antes e depois do heading',
  MD024: 'Renomear ou remover o heading duplicado',
  MD025: 'Manter apenas um heading H1 (#) por documento',
  MD026: 'Remover pontuação final do heading',
  MD030: 'Usar exatamente 1 espaço após o marcador de lista',
  MD032: 'Adicionar linha em branco antes e depois da lista',
  MD034: 'Converter a URL nua em um link Markdown',
  MD036: 'Substituir texto em negrito por heading Markdown (## Título)',
  MD040: 'Adicionar a linguagem ao bloco de código',
  MD047: 'Adicionar uma linha em branco ao final do arquivo',
  MD051:
    'Corrigir o fragmento (#anchor) para apontar para um heading ou <a id="..."> existente no documento',
  MD056: 'Corrigir a quantidade de colunas da tabela para coincidir com o cabeçalho',
  'missing-anchor':
    'Criar a âncora de destino (<a id="..."></a> ou heading) ou atualizar o link para uma âncora existente',
  'missing-file':
    'Corrigir o caminho relativo do link para apontar para um arquivo existente no repositório',
  'frontmatter-schema':
    'Ajustar os campos do YAML Front Matter para cumprir o contrato .vscode/frontmatter-schema.json'
};

const RULE_SEVERITY = {
  MD036: 'warning',
  MD056: 'error',
  MD022: 'error',
  MD012: 'warning',
  MD025: 'error',
  MD051: 'error',
  'missing-anchor': 'error',
  'missing-file': 'error',
  'frontmatter-schema': 'error'
};

class MaxRetriesExceededError extends Error {
  constructor(file, attempts, maxRetries = MAX_RETRIES) {
    super(
      `Limite máximo de tentativas excedido para "${file}" (${attempts}/${maxRetries}). Status: FAILED_MANUAL_REVIEW`
    );
    this.name = 'MaxRetriesExceededError';
    this.file = file;
    this.attempts = attempts;
    this.maxRetries = maxRetries;
    this.status = 'FAILED_MANUAL_REVIEW';
  }
}

const retryCounters = new Map();

const RESULT = {
  success: true,
  fatal: false,
  timestamp: new Date().toISOString(),
  maxRetries: MAX_RETRIES,
  files: [],
  errors: []
};

function log(...messages) {
  if (!JSON_MODE) {
    console.log(...messages);
  }
}

function fail(error) {
  const isMaxRetries = error instanceof MaxRetriesExceededError;
  const message =
    error instanceof Error ? error.message : String(error);

  const failure = {
    success: false,
    fatal: true,
    errorType: isMaxRetries
      ? 'MaxRetriesExceededError'
      : 'ExecutionError',
    status: isMaxRetries ? error.status : 'FAILED',
    file: isMaxRetries ? error.file : null,
    attempts: isMaxRetries ? error.attempts : null,
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

function loadPersistedRetries() {
  if (RESET_RETRIES || !fileExists(RETRY_STATE_FILE)) {
    return;
  }

  try {
    const raw = fs.readFileSync(RETRY_STATE_FILE, 'utf8');
    const parsed = JSON.parse(raw);

    if (parsed && typeof parsed === 'object') {
      for (const [file, count] of Object.entries(parsed)) {
        if (typeof count === 'number' && count > 0) {
          retryCounters.set(file, count);
        }
      }
    }
  } catch {}
}

function savePersistedRetries() {
  try {
    const dir = path.dirname(RETRY_STATE_FILE);
    fs.mkdirSync(dir, { recursive: true });

    const serialized = {};
    for (const [file, count] of retryCounters.entries()) {
      if (count > 0) {
        serialized[file] = count;
      }
    }

    fs.writeFileSync(
      RETRY_STATE_FILE,
      JSON.stringify(serialized, null, 2),
      'utf8'
    );
  } catch {}
}

function getAttempts(file) {
  return retryCounters.get(file) || 0;
}

function recordFileCheckResult(file, hasErrors) {
  if (!hasErrors) {
    retryCounters.delete(file);
    return {
      attempts: 0,
      status: 'PASSED',
      isLastAttempt: false
    };
  }

  const attempts = getAttempts(file);

  if (attempts >= MAX_RETRIES) {
    retryCounters.set(file, attempts);
    savePersistedRetries();
    throw new MaxRetriesExceededError(
      file,
      attempts,
      MAX_RETRIES
    );
  }

  const nextAttempts = attempts + 1;
  retryCounters.set(file, nextAttempts);

  const isLastAttempt = attempts === MAX_RETRIES - 1;

  return {
    attempts,
    nextAttempts,
    status: isLastAttempt ? 'LAST_ATTEMPT' : 'RETRYING',
    isLastAttempt
  };
}

function createContext(file, lineNumber) {
  if (!fileExists(file) || !lineNumber) {
    return null;
  }

  const lines = readLines(file);
  const start = Math.max(0, lineNumber - 2);
  const end = Math.min(lines.length, lineNumber + 1);
  const context = [];

  for (let index = start; index < end; index++) {
    context.push(
      `${String(index + 1).padStart(4)} | ${lines[index]}`
    );
  }

  return context.join('\n');
}

function ruleCode(rule) {
  const text = String(rule);
  const mdMatch = text.match(/^MD\d+/);
  if (mdMatch) {
    return mdMatch[0];
  }

  if (text.startsWith('ADOCMD/')) {
    return text.slice('ADOCMD/'.length);
  }

  return text;
}

function suggestionFor(rule) {
  const code = ruleCode(rule);
  return (
    SUGGESTION_MAP[rule] ||
    SUGGESTION_MAP[code] ||
    'Revisão manual necessária'
  );
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

  const normalized = trimmed
    .replace(/^\|/, '')
    .replace(/\|$/, '');

  if (!normalized.trim()) {
    return 0;
  }

  return normalized.split(/(?<!\\)\|/).length;
}

function findExpectedTableColumns(
  lines,
  lineIndex,
  description
) {
  const expectedMatch = String(description).match(
    /Expected:\s*(\d+)/i
  );

  if (expectedMatch) {
    return Number(expectedMatch[1]);
  }

  let cursor = lineIndex;

  while (
    cursor > 0 &&
    lines[cursor - 1].trim().includes('|')
  ) {
    cursor--;
  }

  return countTableColumns(lines[cursor]);
}

function buildAdjustedTableRow(rawLine, expectedColumns) {
  const trimmed = String(rawLine).trim();
  const normalized = trimmed
    .replace(/^\|/, '')
    .replace(/\|$/, '');

  const cells = normalized
    ? normalized
        .split(/(?<!\\)\|/)
        .map(cell => cell.trim())
    : [];

  if (expectedColumns <= 0) {
    return trimmed;
  }

  if (cells.length < expectedColumns) {
    while (cells.length < expectedColumns) {
      cells.push(
        cells.length === 1
          ? 'Valor'
          : `Coluna ${cells.length + 1}`
      );
    }
  } else if (cells.length > expectedColumns) {
    cells.length = expectedColumns;
  }

  return `| ${cells.join(' | ')} |`;
}

function createConcreteFix(
  file,
  lineNumber,
  rule,
  description
) {
  if (!fileExists(file) || !lineNumber) {
    return null;
  }

  const lines = readLines(file);
  const lineIndex = lineNumber - 1;

  if (lineIndex < 0 || lineIndex >= lines.length) {
    return null;
  }

  const rawLine = lines[lineIndex];
  const trimmedLine = rawLine.trim();
  const code = ruleCode(rule);

  if (code === 'MD036') {
    const cleanText = trimmedLine
      .replace(/^(\*\*|__)(.*)\1$/, '$2')
      .replace(/^(\*|_)(.*)\1$/, '$2')
      .trim();

    if (!cleanText) {
      return null;
    }

    const beforeLine = rawLine;
    const afterLine = `## ${cleanText}`;

    return {
      type: 'before-after',
      before: beforeLine,
      after: afterLine,
      formatted: [
        'Correção sugerida',
        '',
        'ANTES',
        beforeLine,
        '',
        'DEPOIS',
        afterLine
      ].join('\n')
    };
  }

  if (code === 'MD056') {
    const expectedColumns = findExpectedTableColumns(
      lines,
      lineIndex,
      description
    );

    const possibleFix = buildAdjustedTableRow(
      rawLine,
      expectedColumns
    );

    return {
      type: 'table-columns',
      expectedColumns,
      problemLine: rawLine,
      possibleFix,
      formatted: [
        `Tabela possui ${expectedColumns} colunas esperadas.`,
        'Linha problemática:',
        rawLine,
        'Possível correção:',
        possibleFix
      ].join('\n')
    };
  }

  if (code === 'MD026') {
    const cleanedHeading = rawLine.replace(
      /([.,;:!?\u3002\uff0c\uff1b\uff1a\uff01\uff1f]+)(\s*#*\s*)$/,
      '$2'
    );

    if (cleanedHeading === rawLine) {
      return null;
    }

    return {
      type: 'before-after',
      before: rawLine,
      after: cleanedHeading,
      formatted: [
        'Correção sugerida',
        '',
        'ANTES',
        rawLine,
        '',
        'DEPOIS',
        cleanedHeading
      ].join('\n')
    };
  }

  if (code === 'MD025') {
    if (!/^\s*#\s+/.test(rawLine)) {
      return null;
    }

    const afterLine = rawLine.replace(
      /^(\s*)#(\s+)/,
      '$1##$2'
    );

    if (afterLine === rawLine) {
      return null;
    }

    return {
      type: 'before-after',
      before: rawLine,
      after: afterLine,
      formatted: [
        'Correção sugerida',
        '',
        'ANTES',
        rawLine,
        '',
        'DEPOIS',
        afterLine
      ].join('\n')
    };
  }

  if (code === 'MD040') {
    if (!/^(\s*)(`{3,}|~{3,})\s*$/.test(rawLine)) {
      return null;
    }

    const afterLine = rawLine.replace(
      /^(\s*)(`{3,}|~{3,})\s*$/,
      '$1$2text'
    );

    return {
      type: 'before-after',
      before: rawLine,
      after: afterLine,
      formatted: [
        'Correção sugerida',
        '',
        'ANTES',
        rawLine,
        '',
        'DEPOIS',
        afterLine
      ].join('\n')
    };
  }

  return null;
}

async function loadCli2Main() {
  try {
    const mod = await import('markdownlint-cli2');
    if (typeof mod.main === 'function') {
      return mod.main;
    }
    if (typeof mod.default === 'function') {
      return mod.default;
    }
    if (typeof mod.default?.main === 'function') {
      return mod.default.main;
    }
  } catch {}

  const mod = require('markdownlint-cli2');
  if (typeof mod.main === 'function') {
    return mod.main;
  }
  if (typeof mod === 'function') {
    return mod;
  }

  throw new Error(
    'Não foi possível carregar a API programática do markdownlint-cli2.'
  );
}

function readGitignorePatterns() {
  const gitignorePath = path.resolve(
    process.cwd(),
    '.gitignore'
  );

  if (!fileExists(gitignorePath)) {
    return [];
  }

  return fs
    .readFileSync(gitignorePath, 'utf8')
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'));
}

function readCli2ConfigObject() {
  const configPath = path.resolve(
    process.cwd(),
    '.markdownlint-cli2.jsonc'
  );

  if (!fileExists(configPath)) {
    return {};
  }

  const raw = fs.readFileSync(configPath, 'utf8');

  try {
    const jsoncParser = require('jsonc-parser');
    return jsoncParser.parse(raw) || {};
  } catch {
    return {};
  }
}

function buildEffectiveIgnores() {
  const cli2Config = readCli2ConfigObject();
  const baseIgnores = Array.isArray(cli2Config.ignores)
    ? cli2Config.ignores
    : [];
  const gitignorePatterns = readGitignorePatterns();

  return [
    ...new Set([
      ...baseIgnores,
      ...gitignorePatterns,
      '.git/**',
      'node_modules/**'
    ])
  ];
}

async function resolveTargetMarkdownFiles(
  targetGlobs = TARGET_FILES.length > 0
    ? TARGET_FILES
    : ['**/*.md']
) {
  const ignores = buildEffectiveIgnores();

  try {
    const globbyMod = await import('globby');
    const globbyFn = globbyMod.globby || globbyMod.default;

    if (typeof globbyFn === 'function') {
      return await globbyFn(targetGlobs, {
        gitignore: true,
        ignore: ignores,
        dot: true
      });
    }
  } catch {}

  return targetGlobs;
}

async function runPrettierSilently(files) {
  if (!Array.isArray(files) || files.length === 0) {
    return;
  }

  let prettier;
  try {
    prettier = await import('prettier');
  } catch {
    prettier = require('prettier');
  }

  const prettierApi = prettier.default || prettier;

  for (const relativeFile of files) {
    const fullPath = path.resolve(
      process.cwd(),
      relativeFile
    );

    if (!fileExists(fullPath)) {
      continue;
    }

    try {
      const info = await prettierApi.getFileInfo(fullPath, {
        ignorePath: path.resolve(
          process.cwd(),
          '.prettierignore'
        )
      });

      if (info.ignored || !info.inferredParser) {
        continue;
      }

      const source = fs.readFileSync(fullPath, 'utf8');
      const resolvedConfig =
        (await prettierApi.resolveConfig(fullPath)) || {};

      const formatted = await prettierApi.format(source, {
        ...resolvedConfig,
        filepath: fullPath
      });

      if (formatted !== source) {
        fs.writeFileSync(fullPath, formatted, 'utf8');
      }
    } catch {}
  }
}

async function runMarkdownlintCli2Pass({
  fix = false,
  targetGlobs = TARGET_FILES.length > 0
    ? TARGET_FILES
    : ['**/*.md']
}) {
  const markdownlintCli2 = await loadCli2Main();
  const capturedResults = [];
  const ignores = buildEffectiveIgnores();
  const argv = fix
    ? ['--fix', ...targetGlobs]
    : [...targetGlobs];

  const captureFormatter = options => {
    if (options && Array.isArray(options.results)) {
      capturedResults.push(...options.results);
    }
  };

  await markdownlintCli2({
    directory: process.cwd(),
    argv,
    logMessage: () => {},
    logError: () => {},
    optionsDefault: {
      gitignore: true,
      ignores
    },
    optionsOverride: {
      fix,
      gitignore: true,
      noBanner: true,
      noProgress: true,
      outputFormatters: [[captureFormatter]]
    }
  });

  return capturedResults;
}

function githubHeadingSlug(rawHeadingText) {
  const stripped = String(rawHeadingText)
    .replace(/\s+#+\s*$/, '')
    .replace(/\{#[A-Za-z0-9_.:-]+\}\s*$/, '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/<[^>]+>/g, '')
    .trim()
    .toLowerCase();

  return stripped
    .replace(/[^\p{L}\p{M}\p{N}\s_-]/gu, '')
    .replace(/\s+/g, '-');
}

function collectDefinedAnchors(lines) {
  const anchors = new Set();
  const slugCounts = new Map();
  let inFence = false;
  let fenceMarker = null;

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    const trimmed = line.trim();

    const fenceMatch = trimmed.match(/^(`{3,}|~{3,})/);
    if (fenceMatch) {
      const markerChar = fenceMatch[1][0];
      const markerLen = fenceMatch[1].length;

      if (!inFence) {
        inFence = true;
        fenceMarker = { char: markerChar, len: markerLen };
      } else if (
        fenceMarker &&
        markerChar === fenceMarker.char &&
        markerLen >= fenceMarker.len
      ) {
        inFence = false;
        fenceMarker = null;
      }
      continue;
    }

    if (inFence) {
      continue;
    }

    // 1. HTML attributes id="..." or name="..." (ex: <a id="p01-e01"></a>)
    const htmlIdRegex =
      /\b(?:id|name)\s*=\s*["']([^"'#\s]+)["']/gi;
    let htmlMatch;
    while ((htmlMatch = htmlIdRegex.exec(line)) !== null) {
      anchors.add(htmlMatch[1]);
      anchors.add(htmlMatch[1].toLowerCase());
    }

    // 2. AsciiDoc / Markdown explicit anchors: [[anchor-id]], [#anchor-id], {#anchor-id}
    const adocDoubleBracketRegex =
      /\[\[([A-Za-z0-9_.:-]+)(?:,[^\]]*)?\]\]/g;
    let adocMatch;
    while (
      (adocMatch = adocDoubleBracketRegex.exec(line)) !==
      null
    ) {
      anchors.add(adocMatch[1]);
      anchors.add(adocMatch[1].toLowerCase());
    }

    const shorthandAnchorRegex =
      /(?:\[#|\{#)([A-Za-z0-9_.:-]+)[\]}]/g;
    let shortMatch;
    while (
      (shortMatch = shorthandAnchorRegex.exec(line)) !==
      null
    ) {
      anchors.add(shortMatch[1]);
      anchors.add(shortMatch[1].toLowerCase());
    }

    // 3. ATX Headings (# Heading)
    const headingMatch = line.match(/^\s{0,3}(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const baseSlug = githubHeadingSlug(headingMatch[2]);
      if (baseSlug) {
        const seen = slugCounts.get(baseSlug) || 0;
        slugCounts.set(baseSlug, seen + 1);
        const finalSlug =
          seen === 0 ? baseSlug : `${baseSlug}-${seen}`;
        anchors.add(finalSlug);
        anchors.add(baseSlug);
      }
    }
  }

  return anchors;
}

function maskInlineCodeSpans(line) {
  return String(line).replace(/(`+)([^`]*?)\1/g, match =>
    ' '.repeat(match.length)
  );
}

function collectAdocMdForgeAnchorErrorsForFile(
  file,
  lines,
  definedAnchors
) {
  const errors = [];
  let inFence = false;
  let fenceMarker = null;

  for (let index = 0; index < lines.length; index++) {
    const rawLine = lines[index];
    const trimmed = rawLine.trim();

    const fenceMatch = trimmed.match(/^(`{3,}|~{3,})/);
    if (fenceMatch) {
      const markerChar = fenceMatch[1][0];
      const markerLen = fenceMatch[1].length;

      if (!inFence) {
        inFence = true;
        fenceMarker = { char: markerChar, len: markerLen };
      } else if (
        fenceMarker &&
        markerChar === fenceMarker.char &&
        markerLen >= fenceMarker.len
      ) {
        inFence = false;
        fenceMarker = null;
      }
      continue;
    }

    if (inFence) {
      continue;
    }

    const scanLine = maskInlineCodeSpans(rawLine);

    // 1. Links Markdown para âncoras internas: [texto](#anchor)
    const mdLinkRegex =
      /\[[^\]]*\]\(\s*(#[A-Za-z0-9_.:-]+)(?:\s+"[^"]*")?\s*\)/g;
    let match;

    while ((match = mdLinkRegex.exec(scanLine)) !== null) {
      const fullTarget = match[1];
      const anchorName = fullTarget.slice(1);
      const exists =
        definedAnchors.has(anchorName) ||
        definedAnchors.has(anchorName.toLowerCase());

      if (!exists) {
        const targetOffset = match[0].indexOf(fullTarget);
        const startColumn = match.index + targetOffset + 1;
        const lineNumber = index + 1;
        const rule = 'ADOCMD/missing-anchor';
        const description = `Âncora interna não encontrada no documento: ${fullTarget} (找不到文件內 anchor：${fullTarget})`;

        errors.push({
          tool: 'adocmd-forge',
          severity: severityFor(rule),
          file,
          absoluteFile: path.resolve(file),
          line: lineNumber,
          column: startColumn,
          rule,
          description,
          reason: 'missing-anchor',
          suggestion: suggestionFor(rule),
          concreteFix: null,
          context: createContext(file, lineNumber)
        });
      }
    }

    // 2. Links HTML <a href="#anchor">
    const htmlHrefRegex =
      /\bhref\s*=\s*["'](#[A-Za-z0-9_.:-]+)["']/gi;
    let hrefMatch;

    while (
      (hrefMatch = htmlHrefRegex.exec(scanLine)) !== null
    ) {
      const fullTarget = hrefMatch[1];
      const anchorName = fullTarget.slice(1);
      const exists =
        definedAnchors.has(anchorName) ||
        definedAnchors.has(anchorName.toLowerCase());

      if (!exists) {
        const targetOffset =
          hrefMatch[0].indexOf(fullTarget);
        const startColumn =
          hrefMatch.index + targetOffset + 1;
        const lineNumber = index + 1;
        const rule = 'ADOCMD/missing-anchor';
        const description = `Âncora interna não encontrada no documento: ${fullTarget} (找不到文件內 anchor：${fullTarget})`;

        errors.push({
          tool: 'adocmd-forge',
          severity: severityFor(rule),
          file,
          absoluteFile: path.resolve(file),
          line: lineNumber,
          column: startColumn,
          rule,
          description,
          reason: 'missing-anchor',
          suggestion: suggestionFor(rule),
          concreteFix: null,
          context: createContext(file, lineNumber)
        });
      }
    }

    // 3. Referências cruzadas AsciiDoc <<anchor-id>> ou <<anchor-id,label>>
    const adocXrefRegex =
      /<<#?([A-Za-z0-9_.:-]+)(?:,[^>]*)?>>/g;
    let xrefMatch;

    while (
      (xrefMatch = adocXrefRegex.exec(scanLine)) !== null
    ) {
      const anchorName = xrefMatch[1];
      const fullTarget = `#${anchorName}`;
      const exists =
        definedAnchors.has(anchorName) ||
        definedAnchors.has(anchorName.toLowerCase());

      if (!exists) {
        const startColumn = xrefMatch.index + 1;
        const lineNumber = index + 1;
        const rule = 'ADOCMD/missing-anchor';
        const description = `Âncora interna não encontrada no documento: ${fullTarget} (找不到文件內 anchor：${fullTarget})`;

        errors.push({
          tool: 'adocmd-forge',
          severity: severityFor(rule),
          file,
          absoluteFile: path.resolve(file),
          line: lineNumber,
          column: startColumn,
          rule,
          description,
          reason: 'missing-anchor',
          suggestion: suggestionFor(rule),
          concreteFix: null,
          context: createContext(file, lineNumber)
        });
      }
    }
  }

  return errors;
}

function validateFrontmatterAgainstSchema(file, lines) {
  if (!fileExists(FRONTMATTER_SCHEMA_PATH)) {
    return [];
  }

  if (lines.length === 0 || lines[0].trim() !== '---') {
    return [];
  }

  let closingLineIndex = -1;
  for (let index = 1; index < lines.length; index++) {
    if (
      lines[index].trim() === '---' ||
      lines[index].trim() === '...'
    ) {
      closingLineIndex = index;
      break;
    }
  }

  if (closingLineIndex === -1) {
    return [];
  }

  let schema;
  try {
    schema = JSON.parse(
      fs.readFileSync(FRONTMATTER_SCHEMA_PATH, 'utf8')
    );
  } catch {
    return [];
  }

  const yamlLines = lines.slice(1, closingLineIndex);
  const yamlText = yamlLines.join('\n');

  let parsedFrontmatter;
  try {
    const jsYaml = require('js-yaml');
    const IncludeScalarType = new jsYaml.Type('!include', {
      kind: 'scalar',
      construct: data => (data !== null ? String(data) : '')
    });
    const customSchema = jsYaml.DEFAULT_SCHEMA.extend([
      IncludeScalarType
    ]);
    parsedFrontmatter = jsYaml.load(yamlText, {
      schema: customSchema
    });
  } catch (yamlError) {
    const lineNumber =
      (yamlError &&
        yamlError.mark &&
        typeof yamlError.mark.line === 'number'
        ? yamlError.mark.line + 2
        : 1);
    const rule = 'ADOCMD/frontmatter-schema';
    return [
      {
        tool: 'adocmd-forge',
        severity: severityFor(rule),
        file,
        absoluteFile: path.resolve(file),
        line: lineNumber,
        column: 1,
        rule,
        description: `Erro de sintaxe no Front Matter YAML: ${yamlError.message}`,
        reason: 'frontmatter-schema',
        suggestion: suggestionFor(rule),
        concreteFix: null,
        context: createContext(file, lineNumber)
      }
    ];
  }

  if (
    !parsedFrontmatter ||
    typeof parsedFrontmatter !== 'object' ||
    Array.isArray(parsedFrontmatter)
  ) {
    return [];
  }

  const errors = [];
  const properties = schema.properties || {};
  const requiredFields = Array.isArray(schema.required)
    ? schema.required
    : [];

  const findKeyLine = keyName => {
    const keyRegex = new RegExp(
      `^\\s*${keyName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*:`
    );
    for (let idx = 1; idx < closingLineIndex; idx++) {
      if (keyRegex.test(lines[idx])) {
        return idx + 1;
      }
    }
    return 1;
  };

  for (const reqKey of requiredFields) {
    if (
      !Object.hasOwn(parsedFrontmatter, reqKey) ||
      parsedFrontmatter[reqKey] === undefined ||
      parsedFrontmatter[reqKey] === null
    ) {
      const rule = 'ADOCMD/frontmatter-schema';
      errors.push({
        tool: 'adocmd-forge',
        severity: severityFor(rule),
        file,
        absoluteFile: path.resolve(file),
        line: 1,
        column: 1,
        rule,
        description: `Campo obrigatório ausente no Front Matter: "${reqKey}"`,
        reason: 'frontmatter-schema',
        suggestion: suggestionFor(rule),
        concreteFix: null,
        context: createContext(file, 1)
      });
    }
  }

  if (schema.additionalProperties === false) {
    for (const key of Object.keys(parsedFrontmatter)) {
      if (!Object.hasOwn(properties, key)) {
        const lineNumber = findKeyLine(key);
        const rule = 'ADOCMD/frontmatter-schema';
        errors.push({
          tool: 'adocmd-forge',
          severity: severityFor(rule),
          file,
          absoluteFile: path.resolve(file),
          line: lineNumber,
          column: 1,
          rule,
          description: `Propriedade não permitida no Front Matter (additionalProperties: false): "${key}"`,
          reason: 'frontmatter-schema',
          suggestion: suggestionFor(rule),
          concreteFix: null,
          context: createContext(file, lineNumber)
        });
      }
    }
  }

  for (const [key, propSchema] of Object.entries(
    properties
  )) {
    if (!Object.hasOwn(parsedFrontmatter, key)) {
      continue;
    }

    const rawValue = parsedFrontmatter[key];
    const lineNumber = findKeyLine(key);
    const rule = 'ADOCMD/frontmatter-schema';

    const value =
      rawValue instanceof Date
        ? rawValue.toISOString().slice(0, 10)
        : rawValue;

    if (propSchema.type === 'string') {
      if (typeof value !== 'string') {
        errors.push({
          tool: 'adocmd-forge',
          severity: severityFor(rule),
          file,
          absoluteFile: path.resolve(file),
          line: lineNumber,
          column: 1,
          rule,
          description: `Campo "${key}" deve ser do tipo string`,
          reason: 'frontmatter-schema',
          suggestion: suggestionFor(rule),
          concreteFix: null,
          context: createContext(file, lineNumber)
        });
        continue;
      }

      if (
        propSchema.pattern &&
        !new RegExp(propSchema.pattern).test(value)
      ) {
        errors.push({
          tool: 'adocmd-forge',
          severity: severityFor(rule),
          file,
          absoluteFile: path.resolve(file),
          line: lineNumber,
          column: 1,
          rule,
          description: `Campo "${key}" ("${value}") não atende ao padrão exigido: ${propSchema.pattern}`,
          reason: 'frontmatter-schema',
          suggestion: suggestionFor(rule),
          concreteFix: null,
          context: createContext(file, lineNumber)
        });
      }

      if (
        propSchema.format === 'date' &&
        !/^\d{4}-\d{2}-\d{2}$/.test(value)
      ) {
        errors.push({
          tool: 'adocmd-forge',
          severity: severityFor(rule),
          file,
          absoluteFile: path.resolve(file),
          line: lineNumber,
          column: 1,
          rule,
          description: `Campo "${key}" ("${value}") deve estar no formato de data YYYY-MM-DD`,
          reason: 'frontmatter-schema',
          suggestion: suggestionFor(rule),
          concreteFix: null,
          context: createContext(file, lineNumber)
        });
      }

      if (
        Array.isArray(propSchema.enum) &&
        !propSchema.enum.includes(value)
      ) {
        errors.push({
          tool: 'adocmd-forge',
          severity: severityFor(rule),
          file,
          absoluteFile: path.resolve(file),
          line: lineNumber,
          column: 1,
          rule,
          description: `Valor inválido em "${key}" ("${value}"). Valores permitidos: ${propSchema.enum.join(', ')}`,
          reason: 'frontmatter-schema',
          suggestion: suggestionFor(rule),
          concreteFix: null,
          context: createContext(file, lineNumber)
        });
      }
    } else if (propSchema.type === 'array') {
      if (!Array.isArray(value)) {
        errors.push({
          tool: 'adocmd-forge',
          severity: severityFor(rule),
          file,
          absoluteFile: path.resolve(file),
          line: lineNumber,
          column: 1,
          rule,
          description: `Campo "${key}" deve ser uma lista (array)`,
          reason: 'frontmatter-schema',
          suggestion: suggestionFor(rule),
          concreteFix: null,
          context: createContext(file, lineNumber)
        });
      }
    }
  }

  return errors;
}

function collectAdocMdForgeErrors(targetFiles, existingErrors = []) {
  const errors = [];

  // Evita duplicar exatamente o mesmo arquivo:linha:coluna já reportado por MD051
  const existingAnchorLocations = new Set(
    existingErrors
      .filter(err => ruleCode(err.rule) === 'MD051')
      .map(err => `${err.file}:${err.line}:${err.column || 0}`)
  );

  for (const file of targetFiles) {
    if (!fileExists(file)) {
      continue;
    }

    const lines = readLines(file);
    const definedAnchors = collectDefinedAnchors(lines);
    const anchorErrors =
      collectAdocMdForgeAnchorErrorsForFile(
        file,
        lines,
        definedAnchors
      );

    for (const anchorErr of anchorErrors) {
      const locationKey = `${anchorErr.file}:${anchorErr.line}:${anchorErr.column || 0}`;
      if (!existingAnchorLocations.has(locationKey)) {
        errors.push(anchorErr);
      }
    }

    const frontmatterErrors =
      validateFrontmatterAgainstSchema(file, lines);
    errors.push(...frontmatterErrors);
  }

  return errors;
}

function transformResultsToErrors(results) {
  const errors = [];

  for (const issue of results) {
    const file = issue.fileName;
    const rule = Array.isArray(issue.ruleNames)
      ? issue.ruleNames.join('/')
      : String(issue.ruleName || 'UNKNOWN');
    const line = issue.lineNumber || null;
    const column =
      Array.isArray(issue.errorRange) &&
      issue.errorRange.length > 0
        ? issue.errorRange[0]
        : null;

    const description = [
      issue.ruleDescription,
      issue.errorDetail
    ]
      .filter(Boolean)
      .join(' - ');

    errors.push({
      tool: 'markdownlint',
      severity: severityFor(rule),
      file,
      absoluteFile: path.resolve(file),
      line,
      column,
      rule,
      description,
      reason: ruleCode(rule),
      suggestion: suggestionFor(rule),
      concreteFix: createConcreteFix(
        file,
        line,
        rule,
        issue.errorDetail || description
      ),
      context: createContext(file, line)
    });
  }

  return errors;
}

async function executeTwoPassPipeline(
  targetGlobs = TARGET_FILES.length > 0
    ? TARGET_FILES
    : ['**/*.md']
) {
  const targetFiles =
    await resolveTargetMarkdownFiles(targetGlobs);

  // 1ª Passagem (Auto-fix silencioso): Prettier -> markdownlint-cli2 --fix
  await runPrettierSilently(targetFiles);

  await runMarkdownlintCli2Pass({
    fix: true,
    targetGlobs
  });

  // 2ª Passagem (Validação): markdownlint-cli2 + AdocMD Forge
  const secondPassResults = await runMarkdownlintCli2Pass({
    fix: false,
    targetGlobs
  });

  const markdownlintErrors =
    transformResultsToErrors(secondPassResults);

  const adocMdForgeErrors = collectAdocMdForgeErrors(
    targetFiles,
    markdownlintErrors
  );

  const errors = [
    ...markdownlintErrors,
    ...adocMdForgeErrors
  ];

  return {
    targetFiles,
    errors
  };
}

function buildStructuredFiles(errors, targetFiles = []) {
  const fileGroups = new Map();

  for (const error of errors) {
    if (!fileGroups.has(error.file)) {
      fileGroups.set(error.file, {
        file: error.file,
        absoluteFile: error.absoluteFile,
        totalErrors: 0,
        displayedErrors: 0,
        truncated: false,
        attempts: 0,
        status: 'PENDING',
        isLastAttempt: false,
        allOccurrences: [],
        rules: new Map()
      });
    }

    const fileGroup = fileGroups.get(error.file);
    fileGroup.totalErrors++;
    fileGroup.allOccurrences.push(error);
  }

  for (const cleanFile of targetFiles) {
    if (!fileGroups.has(cleanFile)) {
      recordFileCheckResult(cleanFile, false);
    }
  }

  const structured = [];

  const sortedFileGroups = [
    ...fileGroups.values()
  ].sort((left, right) =>
    left.file.localeCompare(right.file)
  );

  for (const fileGroup of sortedFileGroups) {
    const retryState = recordFileCheckResult(
      fileGroup.file,
      fileGroup.totalErrors > 0
    );

    fileGroup.attempts = retryState.attempts;
    fileGroup.status = retryState.status;
    fileGroup.isLastAttempt = retryState.isLastAttempt;

    const batchedErrors = fileGroup.allOccurrences.slice(
      0,
      MAX_BATCH_ERRORS
    );

    fileGroup.displayedErrors = batchedErrors.length;
    fileGroup.truncated =
      fileGroup.totalErrors > MAX_BATCH_ERRORS;

    for (const error of batchedErrors) {
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
        description: error.description,
        context: error.context,
        concreteFix: error.concreteFix
      });
    }

    structured.push({
      file: fileGroup.file,
      absoluteFile: fileGroup.absoluteFile,
      errorCount: fileGroup.totalErrors,
      displayedErrorCount: fileGroup.displayedErrors,
      truncated: fileGroup.truncated,
      attempts: fileGroup.attempts,
      status: fileGroup.status,
      isLastAttempt: fileGroup.isLastAttempt,
      rules: [...fileGroup.rules.values()].sort(
        (left, right) =>
          left.rule.localeCompare(right.rule)
      )
    });
  }

  savePersistedRetries();
  return structured;
}

function formatAgentFriendlyReport(files) {
  if (files.length === 0) {
    return '✅ Nenhum problema estrutural encontrado.';
  }

  const lines = [];
  const hasLastAttempt = files.some(
    fileGroup => fileGroup.isLastAttempt
  );

  if (hasLastAttempt) {
    lines.push(
      '⚠️ ALERTA CRÍTICO: ESTA É A SUA ÚLTIMA TENTATIVA PARA CORRIGIR ESTE ARQUIVO. SEJA ESTRITAMENTE CONSERVADOR.'
    );
    lines.push('');
  }

  for (let index = 0; index < files.length; index++) {
    const fileGroup = files[index];

    if (index > 0) {
      lines.push('');
    }

    lines.push(`Arquivo: ${fileGroup.file}`);
    lines.push(
      `Caminho absoluto: ${fileGroup.absoluteFile}`
    );
    lines.push(`${fileGroup.errorCount} erro(s)`);
    lines.push('<erros>');

    for (const ruleGroup of fileGroup.rules) {
      lines.push('');
      lines.push(ruleGroup.severity.toUpperCase());
      lines.push(
        `${ruleGroup.rule} — ${ruleGroup.errorCount} ocorrência(s)`
      );
      lines.push(`Descrição: ${ruleGroup.description}`);
      lines.push(`Correção: ${ruleGroup.suggestion}`);

      for (const occurrence of ruleGroup.occurrences) {
        if (occurrence.line) {
          const column = occurrence.column
            ? `, coluna ${occurrence.column}`
            : '';
          const detailSuffix =
            occurrence.description &&
            occurrence.description !== ruleGroup.description
              ? ` (${occurrence.description})`
              : '';
          lines.push(
            `  - linha ${occurrence.line}${column}${detailSuffix}`
          );
        } else {
          lines.push('  - arquivo completo');
        }

        if (occurrence.context) {
          lines.push('');
          lines.push(occurrence.context);
          lines.push('');
        }

        if (
          occurrence.concreteFix &&
          occurrence.concreteFix.formatted
        ) {
          lines.push(occurrence.concreteFix.formatted);
          lines.push('');
        }
      }
    }

    lines.push('</erros>');

    if (fileGroup.truncated) {
      lines.push(
        '(Existem mais erros neste arquivo. Corrija estes primeiro para prosseguirmos)'
      );
    }
  }

  lines.push('');
  lines.push('INSTRUÇÕES OBRIGATÓRIAS:');
  lines.push(
    '1. Altere APENAS as linhas indicadas nos blocos acima.'
  );
  lines.push(
    '2. Não reescreva ou resuma o restante do documento.'
  );
  lines.push(
    '3. Não adicione textos explicativos, retorne apenas o conteúdo corrigido.'
  );

  return lines.join('\n');
}

async function runGate(options = {}) {
  const targetGlobs =
    options.files ||
    (TARGET_FILES.length > 0 ? TARGET_FILES : ['**/*.md']);

  loadPersistedRetries();

  const { targetFiles, errors } =
    await executeTwoPassPipeline(targetGlobs);

  const structuredFiles = buildStructuredFiles(
    errors,
    targetFiles
  );

  RESULT.errors = errors;
  RESULT.files = structuredFiles;
  RESULT.success = errors.length === 0;
  RESULT.prompt = formatAgentFriendlyReport(
    structuredFiles
  );

  return RESULT;
}

if (require.main === module) {
  (async () => {
    try {
      await runGate();

      if (JSON_MODE) {
        process.stdout.write(
          JSON.stringify(RESULT, null, 2)
        );
      } else {
        log(RESULT.prompt);
      }

      process.exit(
        RESULT.success ? EXIT_SUCCESS : EXIT_LINT_ERROR
      );
    } catch (error) {
      fail(error);
    }
  })();
}

module.exports = {
  MAX_RETRIES,
  MAX_BATCH_ERRORS,
  RULE_SEVERITY,
  MaxRetriesExceededError,
  runGate,
  executeTwoPassPipeline,
  collectAdocMdForgeErrors,
  formatAgentFriendlyReport
};