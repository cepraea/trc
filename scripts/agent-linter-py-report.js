#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const EXIT_SUCCESS = 0;
const EXIT_LINT_ERROR = 1;
const EXIT_EXECUTION_ERROR = 2;

const MAX_RETRIES = 3;
const MAX_BATCH_ERRORS = 10;

const RETRY_STATE_FILE = path.resolve(process.cwd(), '.temp', 'agent-py-retries.json');
const args = process.argv.slice(2);
const JSON_MODE = args.includes('--json') || process.env.npm_config_json === 'true';
const RESET_RETRIES = args.includes('--reset-retries');
const TARGET_FILES = args.filter(arg => !arg.startsWith('--'));

class MaxRetriesExceededError extends Error {
  constructor(file, attempts, maxRetries = MAX_RETRIES) {
    super(`Limite máximo de tentativas excedido para "${file}" (${attempts}/${maxRetries}). Status: FAILED_MANUAL_REVIEW`);
    this.name = 'MaxRetriesExceededError';
    this.file = file;
    this.attempts = attempts;
    this.maxRetries = maxRetries;
    this.status = 'FAILED_MANUAL_REVIEW';
  }
}

const retryCounters = new Map();

function log(...messages) {
  if (!JSON_MODE) console.log(...messages);
}

function fail(error) {
  const isMaxRetries = error instanceof MaxRetriesExceededError;
  const message = error instanceof Error ? error.message : String(error);
  
  if (JSON_MODE) {
    process.stdout.write(JSON.stringify({ success: false, fatal: true, message }, null, 2));
  } else {
    console.error(message);
  }
  process.exit(EXIT_EXECUTION_ERROR);
}

function loadPersistedRetries() {
  if (RESET_RETRIES || !fs.existsSync(RETRY_STATE_FILE)) return;
  try {
    const parsed = JSON.parse(fs.readFileSync(RETRY_STATE_FILE, 'utf8'));
    for (const [file, count] of Object.entries(parsed)) {
      if (typeof count === 'number' && count > 0) retryCounters.set(file, count);
    }
  } catch {}
}

function savePersistedRetries() {
  try {
    fs.mkdirSync(path.dirname(RETRY_STATE_FILE), { recursive: true });
    const serialized = Object.fromEntries([...retryCounters].filter(([_, v]) => v > 0));
    fs.writeFileSync(RETRY_STATE_FILE, JSON.stringify(serialized, null, 2), 'utf8');
  } catch {}
}

function getAttempts(file) {
  return retryCounters.get(file) || 0;
}

function recordFileCheckResult(file, hasErrors) {
  if (!hasErrors) {
    retryCounters.delete(file);
    return { attempts: 0, status: 'PASSED', isLastAttempt: false };
  }
  const attempts = getAttempts(file);
  if (attempts >= MAX_RETRIES) {
    retryCounters.set(file, attempts);
    savePersistedRetries();
    throw new MaxRetriesExceededError(file, attempts, MAX_RETRIES);
  }
  const nextAttempts = attempts + 1;
  retryCounters.set(file, nextAttempts);
  return { attempts, nextAttempts, status: attempts === MAX_RETRIES - 1 ? 'LAST_ATTEMPT' : 'RETRYING', isLastAttempt: attempts === MAX_RETRIES - 1 };
}

function readLines(file) {
  try { return fs.readFileSync(file, 'utf8').split(/\r?\n/); } catch { return []; }
}

function createContext(file, lineNumber) {
  if (!fs.existsSync(file) || !lineNumber) return null;
  const lines = readLines(file);
  const start = Math.max(0, lineNumber - 2);
  const end = Math.min(lines.length, lineNumber + 1);
  return lines.slice(start, end).map((l, i) => `${String(start + i + 1).padStart(4)} | ${l}`).join('\n');
}

// ==========================================
// INTEGRAÇÃO PYTHON: RUFF & PYRIGHT
// ==========================================

function runCommand(command, ignoreExitCode = false) {
  try {
    return execSync(command, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
  } catch (error) {
    if (ignoreExitCode && error.stdout) return error.stdout;
    throw error;
  }
}

function getPythonTargetFiles(files) {
  return files.length > 0 ? files.join(' ') : '.';
}

function runAutoFix(targetArgs) {
  try {
    // Fase 1: Ruff auto-fix e format
    runCommand(`npx @astral-sh/ruff check --fix ${targetArgs}`, true);
    runCommand(`npx @astral-sh/ruff format ${targetArgs}`, true);
  } catch (e) {
    // Falha silenciosa no auto-fix para não quebrar o pipeline
  }
}

function runValidation(targetArgs) {
  const errors = [];

  // Fase 2A: Ruff Linter (Estrutura e Estilo)
  try {
    const ruffOut = runCommand(`npx @astral-sh/ruff check --output-format=json ${targetArgs}`, true);
    const ruffErrors = JSON.parse(ruffOut || '[]');
    for (const err of ruffErrors) {
      errors.push({
        tool: 'ruff',
        severity: 'warning',
        file: path.relative(process.cwd(), err.filename),
        line: err.location.row,
        column: err.location.column,
        rule: err.code,
        description: err.message,
        context: createContext(err.filename, err.location.row)
      });
    }
  } catch {}

  // Fase 2B: Pyright (Tipagem)
  try {
    const pyrightOut = runCommand(`npx pyright --outputjson ${targetArgs}`, true);
    const pyrightData = JSON.parse(pyrightOut || '{}');
    const diagnostics = pyrightData.generalDiagnostics || [];
    for (const diag of diagnostics) {
      if (diag.severity === 'information') continue;
      
      const filePath = path.relative(process.cwd(), diag.file);
      const line = diag.range.start.line + 1; // Pyright é 0-indexed
      errors.push({
        tool: 'pyright',
        severity: diag.severity === 'error' ? 'error' : 'warning',
        file: filePath,
        line: line,
        column: diag.range.start.character + 1,
        rule: diag.rule || 'TypeCheck',
        description: diag.message,
        context: createContext(diag.file, line)
      });
    }
  } catch {}

  return errors;
}

function buildStructuredFiles(errors) {
  const fileGroups = new Map();
  for (const error of errors) {
    if (!fileGroups.has(error.file)) {
      fileGroups.set(error.file, {
        file: error.file,
        totalErrors: 0,
        displayedErrors: 0,
        truncated: false,
        allOccurrences: [],
      });
    }
    const fileGroup = fileGroups.get(error.file);
    fileGroup.totalErrors++;
    fileGroup.allOccurrences.push(error);
  }

  const structured = [];
  for (const fileGroup of fileGroups.values()) {
    const retryState = recordFileCheckResult(fileGroup.file, fileGroup.totalErrors > 0);
    const batchedErrors = fileGroup.allOccurrences.slice(0, MAX_BATCH_ERRORS);
    
    structured.push({
      file: fileGroup.file,
      errorCount: fileGroup.totalErrors,
      truncated: fileGroup.totalErrors > MAX_BATCH_ERRORS,
      attempts: retryState.attempts,
      isLastAttempt: retryState.isLastAttempt,
      errors: batchedErrors
    });
  }
  
  savePersistedRetries();
  return structured;
}

function formatAgentFriendlyReport(files) {
  if (files.length === 0) return '✅ Nenhum problema estrutural ou de tipagem encontrado no Python.';

  const lines = [];
  if (files.some(f => f.isLastAttempt)) {
    lines.push('⚠️ ALERTA CRÍTICO: ESTA É A SUA ÚLTIMA TENTATIVA PARA CORRIGIR ESTE ARQUIVO. SEJA ESTRITAMENTE CONSERVADOR.\n');
  }

  for (const fileGroup of files) {
    lines.push(`Arquivo: ${fileGroup.file}`);
    lines.push(`${fileGroup.errorCount} erro(s)`);
    lines.push('<erros>');

    for (const err of fileGroup.errors) {
      lines.push('');
      lines.push(`[${err.tool.toUpperCase()}] ${err.severity.toUpperCase()} - Regra: ${err.rule}`);
      lines.push(`Descrição: ${err.description}`);
      lines.push(`  - linha ${err.line}, coluna ${err.column}`);
      if (err.context) {
        lines.push('');
        lines.push(err.context);
      }
    }

    lines.push('</erros>');
    if (fileGroup.truncated) {
      lines.push('(Existem mais erros neste arquivo. Corrija estes primeiro para prosseguirmos)');
    }
    lines.push('');
  }

  lines.push('INSTRUÇÕES OBRIGATÓRIAS:');
  lines.push('1. Altere APENAS as linhas indicadas nos blocos acima.');
  lines.push('2. Preserve a lógica de negócio; apenas corrija tipagens ou sintaxe.');
  
  return lines.join('\n');
}

async function runGate() {
  loadPersistedRetries();
  const targetArgs = getPythonTargetFiles(TARGET_FILES);
  
  runAutoFix(targetArgs);
  const errors = runValidation(targetArgs);
  const structuredFiles = buildStructuredFiles(errors);
  const prompt = formatAgentFriendlyReport(structuredFiles);
  
  return { success: errors.length === 0, prompt };
}

if (require.main === module) {
  runGate().then(result => {
    log(result.prompt);
    process.exit(result.success ? EXIT_SUCCESS : EXIT_LINT_ERROR);
  }).catch(fail);
}