---
documento_id: DEC-DH-02
tipo: decisao
versao: 1.0.0
caminho_canonico: scripts/docs-script/DEC-DH-02-escopo.md
criado_em: '2026-11-14'
atualizado_em: '2026-11-14'
fase_documento: proposta
status_aprovacao: pendente
status_implementacao: pendente
autoridade: usuario-davi-sermenho
---

# DEC-DH-02 — Escopo do gate: `changed` vs `all` + padrões de exclusão

## Contrato do documento

| Propriedade      | Definição                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Papel            | registrar a decisão humana DH-02 sobre o escopo de arquivos varridos pelo gate de qualidade                                                       |
| Objetivo         | definir se o gate varre apenas arquivos alterados na tarefa (`changed`) ou todos os arquivos do repositório (`all`), e quais exclusões se aplicam |
| Escopo           | repositório `selecao-brasileira`; módulo `workspace` do orquestrador Python ([TEC-002])                                                           |
| Caminho canônico | `scripts/docs-script/DEC-DH-02-escopo.md`                                                                                                         |
| Autoridade       | decisão tomada por `davi.sermenho@gmail.com`; agentes não implementam antes da aprovação                                                          |
| Contexto mínimo  | este documento, [DEC-DH-03], [DEC-CLI-001], [INV-CLI-001]                                                                                         |
| Decisão atual    | ABERTA — evidências compiladas em 2026-11-14; aguarda homologação                                                                                 |

## 1. Contexto e pergunta original (DH-02 do BRD/URS)

A decisão DH-02 perguntava: o gate varre **os arquivos alterados na tarefa
(`changed`)** ou **todos os arquivos do repositório (`all`)**?

A recomendação anterior dizia "usar `changed` porque `all` forcaria varrer 19
arquivos não relacionados com a tarefa, incluindo os da suite de spec
(`scripts/docs-script/`) que têm suas próprias ocorrências."

O usuário solicitou verificação: **quais são exatamente essas ocorrências e qual
o impacto de não escaneá-las?**

## 2. Levantamento completo — 34 arquivos do repositório

Executado em 2026-11-14 com `markdownlint-cli2 v0.24.1` e a configuração
`.markdownlint.jsonc` vigente (DEC-DH-03).

### 2.1 Categorias de arquivos

| Categoria                                                | Qtd    | Arquivos                            | Violações |
| -------------------------------------------------------- | ------ | ----------------------------------- | --------- |
| Core operacional (rastreabilidade, governança, grupo)    | 11     | AGENTS.md, CLAUDE.md, e 9 outros    | **0**     |
| Docs novos desta sessão (DEC/INV)                        | 3      | DEC-CLI-001, DEC-DH-03, INV-CLI-001 | **0**     |
| Spec modificado                                          | 1      | spec-template-empty.md              | **0**     |
| `testes/` (casos, defeitos, execuções, matriz)           | 13     | TST-CASE-* etc.                     | **2**     |
| `scripts/docs-script/linters/` (cópias de spec)          | 3      | BRD, FRS, Espec (cópias)            | **1**     |
| `scripts/docs-script/spec-template/` (framework externo) | 4      | historico.md, guia-prompts.md etc.  | **2 165** |
| **TOTAL**                                                | **35** |                                     | **2 168** |

### 2.2 Detalhe das violações por arquivo

| Arquivo                                                | Violações | Regras disparadas                           | Natureza                                                     |
| ------------------------------------------------------ | --------- | ------------------------------------------- | ------------------------------------------------------------ |
| `testes/casos/TST-CASE-001.md`                         | 1         | MD056 — colunas de tabela                   | Tabela com excesso de colunas                                |
| `testes/defeitos/TST-DEF-001.md`                       | 1         | MD056 — colunas de tabela                   | Tabela com excesso de colunas                                |
| `scripts/docs-script/linters/FRS_SyRS_*.md`            | 1         | MD036 — ênfase como heading                 | Cópia de spec com `**texto**` em lugar de `###`              |
| `scripts/docs-script/spec-template/guia-prompts.md`    | 17        | MD004 — estilo de lista (`*` em vez de `-`) | Framework `full-auto-dev`; convenção própria                 |
| `scripts/docs-script/spec-template/historico.md`       | 2 039     | MD004, MD035, MD022, MD032, MD009, MD025... | Framework `full-auto-dev`; 6 138 linhas de histórico externo |
| `scripts/docs-script/spec-template/prompt-guide.md.md` | 109       | MD025, MD047, MD024...                      | Framework `full-auto-dev`                                    |

## 3. Achado crítico — A dicotomia `changed`/`all` não é a questão central

### 3.1 O que `changed` abrange na prática

O `git status --short` desta sessão retorna como "changed" (modificados ou
novos):

```text
D checklist-automatizado.md                           ← deletado (não existe no disco)
D scripts/docs-script/BRD_URS_Verificador*.md         ← deletado
D scripts/docs-script/Especificacao_Tecnica*.md       ← deletado
D scripts/docs-script/FRS_SyRS*.md                    ← deletado
M spec-template-empty.md                              ← modificado
?? scripts/docs-script/DEC-CLI-001-dependencias-dev.md
?? scripts/docs-script/DEC-DH-03-markdownlint.md
?? scripts/docs-script/INV-CLI-001-disponibilidade.md
?? scripts/docs-script/linters/                       ← diretório novo inteiro
?? scripts/docs-script/spec-template/                 ← diretório novo inteiro
```

**Implicação:** o escopo `changed` incluiria os diretórios `linters/` e
`spec-template/` porque foram criados nesta sessão (untracked). O gate varreria
`historico.md` (2 039 violações) mesmo numa tarefa que apenas edita `AGENTS.md`.

### 3.2 Comparação de escopos

| Escopo                                 | Arquivos scaneados | Violações encontradas | Resultado do gate                           |
| -------------------------------------- | ------------------ | --------------------- | ------------------------------------------- |
| `all`                                  | 35 MD              | 2 168                 | **exit 1** — bloqueado por `spec-template/` |
| `changed` (com untracked)              | ~11 MD             | 2 165                 | **exit 1** — bloqueado por `spec-template/` |
| `changed` (só git diff, sem untracked) | 1 MD               | 0                     | **exit 0** — mas não valida novos arquivos  |
| `changed` **+ exclusões** (ver §4)     | variável           | 0–3                   | **exit 0** ou bloqueado por violação real   |

**Conclusão:** a escolha `changed` vs `all` tem impacto secundário. O vetor de
bloqueio é `scripts/docs-script/spec-template/`, presente em QUALQUER escopo que
inclua arquivos novos (untracked). A decisão central é sobre **exclusões de
escopo**.

## 4. Análise de impacto — o que acontece se NÃO se excluir

### 4.1 `scripts/docs-script/spec-template/` — 2 165 violações

**Natureza do diretório:** contém artefatos importados do framework
`full-auto-dev` (outro projeto), com convenções de estilo próprias (`*` para
listas, `---` para HR, headings duplicados intencionais). O arquivo
`historico.md` tem 6 138 linhas e registra o histórico completo de
desenvolvimento do framework externo — não é um documento operacional do
`selecao-brasileira`.

**Impacto de não excluir:**

- Qualquer tarefa que crie um arquivo novo → gate bloqueado permanentemente por
  2 165 violações não relacionadas à tarefa.
- Correção exigiria reformatar 8 363 linhas de documentação importada sem valor
  para o projeto.
- Contradiz FR-003 ("gate não bloqueia DONE por artefatos fora do escopo da
  tarefa").

**Impacto de excluir:**

- Violações do framework externo não são detectadas.
- Risco aceito: aceitável — esses arquivos não são operados pelo gate nem
  versionados como docs canônicos do `selecao-brasileira`.

### 4.2 `scripts/docs-script/linters/` — 1 violação

**Natureza:** cópias snapshot das especificações (BRD/URS, FRS/SyRS, Espec
Técnica) movidas para subdiretório. A violação (MD036 em `FRS_SyRS_*.md`) é
herdada do documento original.

**Impacto de não excluir:** gate bloqueado por 1 violação em cópia; a correção
exige tocar a cópia sem tocar o original — cria divergência.

**Impacto de excluir:** cópias não são validadas. Risco baixo se o original for
validado.

### 4.3 `testes/` — 2 violações (MD056)

**Natureza:** MD056 detecta tabelas com número de colunas inconsistente. Em
`TST-CASE-001.md` e `TST-DEF-001.md` há tabelas com 7 e 4 colunas onde o
cabeçalho define 2 — real defeito estrutural nos documentos de teste.

**Impacto de não excluir:** gate bloquearia qualquer tarefa que toque esses 2
arquivos (e somente eles). A violação é real e correção é simples (ajustar o
cabeçalho da tabela).

**Impacto de excluir `testes/`:** defeitos estruturais em tabelas de teste não
são detectados.

## 5. Alternativas de decisão

| Opção                                                                               | Descrição                                         | Violações restantes            | Risco                                         |
| ----------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------ | --------------------------------------------- |
| **A — `changed` + excluir `spec-template/`**                                        | Varre alterados; ignora spec-template             | 3 (testes + linters copy)      | Baixo — framework externo fora do escopo      |
| **B — `changed` + excluir `spec-template/` + `linters/`**                           | Exclui ambos os diretórios de cópia/framework     | 2 (TST-CASE-001 e TST-DEF-001) | Baixo — cópias de spec não são docs canônicos |
| **C — `changed` + excluir `spec-template/` + `linters/` + corrigir 2 do `testes/`** | Opção B + corrigir MD056 nos 2 arquivos de teste  | 0                              | Zero — gate limpo desde o início              |
| **D — `all` + exclusões equivalentes a C**                                          | Varre tudo exceto os excluídos; baseline completo | 0 após correção dos 2          | Mais amplo; útil como baseline periódico      |

**Recomendação do agente:** Opção C — `changed` com exclusões e correção dos 2
defeitos reais em `testes/`. Justificativa: (a) `spec-template/` e `linters/`
são diretórios de material externo/cópia, não documentos operacionais; (b) os 2
defeitos MD056 em `testes/` são reais e simples de corrigir; (c) o gate começa
com exit 0 imediato, permitindo validar o fluxo antes de adicionar mais regras.

## 6. Padrões de exclusão propostos

Se aprovada a Opção B ou C, o orquestrador Python deve aplicar:

```python
EXCLUDE_PATTERNS = [
    "scripts/docs-script/spec-template/**",
    "scripts/docs-script/linters/**",
]
```

Esses padrões são configuráveis; mudança exige nova decisão registrada.

## 7. Estado das decisões DH-* após esta análise

| Decisão                          | Estado                                                  |
| -------------------------------- | ------------------------------------------------------- |
| DH-01 (ponte VS Code ou CLIs?)   | Parcialmente fechada (DEC-CLI-001)                      |
| **DH-02 (escopo changed/all?)**  | **ABERTA — aguarda escolha entre opções A/B/C/D acima** |
| DH-03 (severidades bloqueantes?) | Fechada (DEC-DH-03)                                     |

## 8. Critérios de DONE desta decisão

- [ ] Usuário escolhe entre as opções A / B / C / D (ou variante textual).
- [ ] Padrões de exclusão confirmados e registrados neste documento.
- [ ] Se Opção C ou D: correção dos 2 defeitos MD056 em `testes/` executada e
      evidenciada.
- [ ] Gate executa `exit 0` com o escopo e exclusões definidos.
- [ ] `status` atualizado para `implantado`.
