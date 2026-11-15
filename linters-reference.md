# Linters Reference

## Resumo

| Tecnologia | Detectada |
|------------|------------|
| eslint | ❌ |
| prettier | ✅ |
| markdownlint | ✅ |
| biome | ❌ |
| typescript | ❌ |

## Estatísticas

| Métrica | Valor |
|----------|--------|
| JSON analisados | 6 |
| JSON válidos | 4 |
| Pastas | 2 |

## Índice

- [Linters Reference](#linters-reference)
  - [Resumo](#resumo)
  - [Estatísticas](#estatísticas)
  - [Índice](#índice)
- [.vscode](#vscode)
  - [frontmatter-schema.json](#frontmatter-schemajson)
  - [settings.json](#settingsjson)
- [Raiz](#raiz)
  - [.markdownlint-cli2.jsonc](#markdownlint-cli2jsonc)
  - [.prettierignore](#prettierignore)
  - [.prettierrc](#prettierrc)
  - [package.json](#packagejson)

---

<a id="folder-vscode"></a>
# .vscode

<a id="file-vscode-frontmatter-schema-json"></a>
## frontmatter-schema.json

**Arquivo:** `.vscode/frontmatter-schema.json`

| Métrica | Valor |
|----------|--------|
| Linhas | 25 |
| Caracteres | 1332 |

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Schema Frontmatter de Qualidade Documental",
  "type": "object",
  "properties": {
    "documento_id": {
      "type": "string",
      "pattern": "^[A-Z0-9]+-[A-Z0-9]+-[0-9]+$"
    },
    "tipo": {
      "type": "string"
    },
    "versao": {
      "type": "string",
      "pattern": "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?(?:\\+[\\da-z\\-]+(?:\\.[\\da-z\\-]+)*)?$"
    },
    "caminho_canonico": {
      "type": "string",
      "pattern": "\\.md$"
    },
    "criado_em": {
      "type": "string",
      "format": "date"
    },
    "atualizado_em": {
      "type": "string",
      "format": "date"
    },
    "fase_documento": {
      "type": "string",
      "enum": [
        "draft",
        "proposta",
        "final",
        "obsoleto"
      ]
    },
    "status_aprovacao": {
      "type": "string",
      "enum": [
        "pendente",
        "revisao",
        "homologado",
        "rejeitado"
      ]
    },
    "status_implementacao": {
      "type": "string",
      "enum": [
        "n/a",
        "pendente",
        "em-progresso",
        "implementado"
      ]
    },
    "autoridade": {
      "type": "string"
    },
    "documentos_relacionados": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "repositorio_alvo": {
      "type": "string"
    }
  },
  "required": [
    "documento_id",
    "tipo",
    "versao",
    "caminho_canonico",
    "criado_em",
    "atualizado_em",
    "fase_documento",
    "status_aprovacao",
    "status_implementacao"
  ],
  "additionalProperties": false
}
```


[↑ Voltar ao índice](#índice)

---

<a id="file-vscode-settings-json"></a>
## settings.json

**Arquivo:** `.vscode/settings.json`

| Métrica | Valor |
|----------|--------|
| Linhas | 8 |
| Caracteres | 138 |


```json
{
  "yaml.schemas": {
    "./.vscode/frontmatter-schema.json": [
      "*.md",
      "**/*.md"
    ]
  },
  "yaml.customTags": [
    "!include scalar"
  ]
}
```


[↑ Voltar ao índice](#índice)

---

<a id="folder-raiz"></a>
# Raiz

<a id="file-markdownlint-cli2-jsonc"></a>
## .markdownlint-cli2.jsonc

**Arquivo:** `.markdownlint-cli2.jsonc`

| Métrica | Valor |
|----------|--------|
| Linhas | 52 |
| Caracteres | 1884 |


```json
// Configuração do markdownlint para o repositório selecao-brasileira
// Autoridade: DEC-DH-03-markdownlint (scripts/docs-script/DEC-DH-03-markdownlint.md)
// Versão: 1.0.0 — 2026-11-14
//
// Regras habilitadas: padrão + sobreposições abaixo.
// Regras desabilitadas com justificativa explícita exigida por DH-03.
{
  // Lista de pastas que a ferramenta não deve ler
  "ignores": [
    "dist/**",
    "build/**",
    ".claude/**",
    ".temp/**",
    ".vscode/**",
    "node_modules/**",
    ".draft/**",
    ".gitignore",
    ".prettierignore"
  ],

  "config": {
    // MD013 — line-length
    // Desabilitado: o repositório é de documentação com tabelas, links e
    // citações de código que legitimamente excedem 80 caracteres.
    // 778 ocorrências nos arquivos principais; nenhuma indica defeito real.
    // Referência: DEC-DH-03 seção 3, item MD013.
    "MD013": false,

    // MD033 — no-inline-html
    // Desabilitado: AG-04 e NFR-010 exigem preservação de comentários HTML
    // existentes nos arquivos Markdown. Adicionalmente, spec-template-empty.md
    // utiliza tags XML de template (<doc:change_log>, <entry>) que são parte
    // intencional da estrutura do arquivo.
    // Referência: DEC-DH-03 seção 3, item MD033.
    "MD033": false,

    // MD041 — first-line-heading
    // Desabilitado: arquivos de especificação e template iniciam com frontmatter
    // YAML ou blocos XML antes do primeiro heading H1. Exigir H1 na primeira
    // linha quebraria todos os arquivos com frontmatter.
    // Referência: DEC-DH-03 seção 3, item MD041.
    "MD041": false,

    // MD060 — table-column-style
    // Desabilitado: o estilo de alinhamento de colunas de tabela é variado de
    // forma intencional nos documentos existentes; forçar uniformidade geraria
    // diff sem valor semântico.
    // Referência: DEC-DH-03 seção 3, item MD060.
    "MD060": false
  }
}

```


[↑ Voltar ao índice](#índice)

---

<a id="file-prettierignore"></a>
## .prettierignore

**Arquivo:** `.prettierignore`

| Métrica | Valor |
|----------|--------|
| Linhas | 11 |
| Caracteres | 104 |


```json
# .prettierignore
node_modules/**
dist/**
build/**
.claude/**
.temp/**
.vscode/**

.draft/**
.gitignore

```


[↑ Voltar ao índice](#índice)

---

<a id="file-prettierrc"></a>
## .prettierrc

**Arquivo:** `.prettierrc`

| Métrica | Valor |
|----------|--------|
| Linhas | 16 |
| Caracteres | 252 |


```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "trailingComma": "none",
  "overrides": [
    {
      "files": [
        "*.md"
      ],
      "options": {
        "printWidth": 80,
        "proseWrap": "always"
      }
    }
  ]
}
```


[↑ Voltar ao índice](#índice)

---

<a id="file-package-json"></a>
## package.json

**Arquivo:** `package.json`

| Métrica | Valor |
|----------|--------|
| Linhas | 12 |
| Caracteres | 249 |


```json
{
  "scripts": {
    "lint:md": "markdownlint-cli2 \"**/*.md\"",
    "fix:md": "markdownlint-cli2 \"**/*.md\" --fix",
    "format": "prettier --write ."
  },
  "devDependencies": {
    "markdownlint-cli2": "^0.24.1",
    "prettier": "^3.10.1"
  }
}
```


[↑ Voltar ao índice](#índice)

---
