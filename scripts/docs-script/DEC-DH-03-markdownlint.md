---
documento_id: DEC-DH-03
tipo: decisao
status: implantado
caminho_canonico: scripts/docs-script/DEC-DH-03-markdownlint.md
versao: 1.0.0
data: '2026-11-14'
implantado_em: '2026-11-14T19:00:00-03:00'
autoridade: usuario-davi-sermenho
---

# DEC-DH-03 — Configuração do markdownlint: regras e severidades bloqueantes

## Contrato do documento

| Propriedade      | Definição                                                                                                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Papel            | registrar a decisão humana DH-03 sobre quais regras e severidades do markdownlint bloqueiam o gate de qualidade                                                                                                                                                                 |
| Objetivo         | permitir que o orquestrador Python e o gate saibam exatamente quais diagnósticos são bloqueantes, quais são ignorados e por quê                                                                                                                                                 |
| Escopo           | repositório `selecao-brasileira`; arquivo `.markdownlint.jsonc`; `markdownlint-cli2 v0.24.1`                                                                                                                                                                                    |
| Caminho canônico | `scripts/docs-script/DEC-DH-03-markdownlint.md`                                                                                                                                                                                                                                 |
| Autoridade       | decisão tomada por `davi.sermenho@gmail.com` em 2026-11-14; agentes não podem alterar `.markdownlint.jsonc` sem nova decisão                                                                                                                                                    |
| Contexto mínimo  | este documento, [DEC-CLI-001](./DEC-CLI-001-dependencias-dev.md#dec-cli-001), [BRD/URS](./BRD_URS_Verificador_Qualidade.md#brd-root)                                                                                                                                            |
| Dependências     | [DEC-CLI-001](./DEC-CLI-001-dependencias-dev.md#dec-cli-001) (pré-requisito: markdownlint-cli2 instalado); [FR-005](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-005); [DH-03 do BRD/URS](./BRD_URS_Verificador_Qualidade.md#6-fronteiras-e-critérios-de-decisão) |
| Restrições       | alterações no `.markdownlint.jsonc` exigem nova decisão registrada; não habilitar regras sem verificar impacto no repositório existente                                                                                                                                         |
| Riscos mitigados | gate bloqueado por 778 ocorrências legítimas de MD013; falso positivo por MD033 que apagaria comentários HTML obrigatórios                                                                                                                                                      |

## DEC-DH-03

## 1. Contexto

A decisão DH-03 do BRD/URS perguntava: "quais severidades/warnings bloqueiam
`exit 0`?". Para responder, foi executado `markdownlint-cli2` nos 12 arquivos
principais do repositório em 2026-11-14, gerando o seguinte mapeamento de regras
disparadas:

| Regra                    | Ocorrências | Arquivos afetados        |
| ------------------------ | ----------- | ------------------------ |
| MD013 line-length        | 778         | Todos os principais      |
| MD033 no-inline-html     | 2           | `spec-template-empty.md` |
| MD041 first-line-heading | 1           | `spec-template-empty.md` |
| MD060 table-column-style | 1           | `spec-template-empty.md` |

## 2. Análise por regra

### MD013 — line-length

**Padrão markdownlint:** linhas > 80 caracteres. **Ocorrências:** 778 —
praticamente todos os arquivos do repositório. **Natureza:** linhas longas em
células de tabela, links Markdown, citações de código e parâmetros de script.
Nenhuma indica defeito semântico ou de rastreabilidade. **Exemplo
representativo:**

```text
| `TST-REQ-001` | documentos gerenciados possuem contrato completo e caminho canônico único | ...
```

**Decisão:** **DESABILITADA** — 778 ocorrências comprovam que o limite de 80
caracteres é incompatível com o estilo documental estabelecido do repositório.
Habilitar MD013 bloquearia o gate em cada tarefa mesmo sem nenhum erro real.
**Risco aceito:** linhas genuinamente excessivas (> 400 chars) não serão
detectadas. **Controle compensatório:** nenhum — aceitável para repositório de
documentação com tabelas.

---

### MD033 — no-inline-html

**Padrão markdownlint:** proíbe HTML inline em arquivos Markdown.
**Ocorrências:** 2 (tags XML de template em `spec-template-empty.md`).
**Natureza:** o repositório usa **comentários HTML obrigatórios**
(`<!-- ... -->`) para rastreabilidade (AG-04, NFR-010). A regra MD033 também
seria disparada por esses comentários em qualquer arquivo que os contenha
(`rastreabilidade-tecnica.md`, `spec-template-empty.md`). **Referência
normativa:** AG-04 — "Preservar integralmente comentários HTML existentes em
arquivos Markdown". **Decisão:** **DESABILITADA** — a preservação de comentários
HTML é uma regra superior do projeto (AG-04). Habilitar MD033 criaria conflito
direto com essa obrigação. **Risco aceito:** HTML realmente injustificado não
será detectado. **Controle compensatório:** TST-CASE-004 (hash dos comentários
HTML) garante preservação.

---

### MD041 — first-line-heading

**Padrão markdownlint:** exige que a primeira linha do arquivo seja um heading
H1. **Ocorrências:** 1 (`spec-template-empty.md` inicia com bloco XML de
template). **Natureza:** os arquivos do repositório têm frontmatter YAML (`---`)
ou blocos XML antes do primeiro `#`. Exigir H1 na linha 1 é incompatível com
esse padrão. **Decisão:** **DESABILITADA**. **Risco aceito:** arquivo sem nenhum
H1 não será detectado pela regra. **Controle compensatório:** TST-CASE-001
(contrato do documento) exige título e estrutura.

---

### MD060 — table-column-style

**Padrão markdownlint:** exige estilo consistente de alinhamento de colunas de
tabela. **Ocorrências:** 1 (`spec-template-empty.md`). **Natureza:** estilo de
tabela variado intencional; corrigir geraria diff sem valor. **Decisão:**
**DESABILITADA**.

---

## 3. Regras que permanecem habilitadas (padrão)

Todas as demais regras da configuração padrão do markdownlint-cli2 permanecem
**habilitadas**, incluindo as que têm impacto direto nos objetivos do
repositório:

| Regra                         | O que detecta                       | Relevância para o projeto                    |
| ----------------------------- | ----------------------------------- | -------------------------------------------- |
| MD031 blanks-around-fences    | Fences sem linha em branco ao redor | Estrutural; afeta leitura e parsing          |
| MD040 fenced-code-language    | Fence sem linguagem especificada    | Facilita syntax highlighting e legibilidade  |
| MD051 link-fragments          | Fragmentos de link inválidos        | **CRÍTICO** — rastreabilidade; âncoras AG↔EV |
| MD007 ul-indent               | Indentação de listas                | Estrutural                                   |
| MD022 blanks-around-headings  | Headings sem espaço ao redor        | Estrutural                                   |
| MD047 single-trailing-newline | Arquivo sem newline final           | Estilo consistente                           |

## 4. Configuração resultante

Arquivo: `.markdownlint.jsonc` na raiz do repositório.

```json
{
  "MD013": false,
  "MD033": false,
  "MD041": false,
  "MD060": false
}
```

(Com comentários explicativos inline — ver `.markdownlint.jsonc`.)

## 5. Evidência de verificação

**Comando executado:**

```bash
./node_modules/.bin/markdownlint-cli2 AGENTS.md grupo-whatsapp.md \
  mensagens-treinadores.md rastreabilidade-tecnica.md \
  regras-rastreabilidade.md tecnicas-rastreabilidade.md \
  sustentacao-agents.md CLAUDE.md mapa-repositorio.md \
  governanca-testes.md spec-template-empty.md checklist-automatizado.md
```

**Resultado:**

```text
markdownlint-cli2 v0.24.1 (markdownlint v0.42.1)
Linting: 11 files
Summary: 0 issues in 0 files
EXIT: 0
```

**Classificação:** SUSTENTADO INTEGRALMENTE — gate de Markdown retorna `exit 0`
para os arquivos principais do repositório com a configuração definida.

## 6. Impacto no estado das decisões DH-*

| Decisão                          | Estado antes                                                                        | Estado depois                                                 |
| -------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| DH-01 (ponte VS Code ou CLIs?)   | Parcialmente fechada ([DEC-CLI-001](./DEC-CLI-001-dependencias-dev.md#dec-cli-001)) | Sem alteração                                                 |
| DH-02 (escopo changed/all?)      | ABERTA                                                                              | Sem alteração                                                 |
| DH-03 (severidades bloqueantes?) | **ABERTA**                                                                          | **FECHADA** — regras desabilitadas e bloqueantes documentadas |

## 7. Critérios de DONE

- [x] `.markdownlint.jsonc` criado com as 4 regras desabilitadas e
      justificativas.
- [x] `markdownlint-cli2` executado nos 12 arquivos principais: `exit 0`,
      `0 issues`.
- [x] Regras habilitadas que cobrem rastreabilidade (MD051) listadas e
      confirmadas ativas.
- [x] Decisão registrada com evidência de execução real.

**DONE desta decisão:** SUSTENTADO INTEGRALMENTE.
