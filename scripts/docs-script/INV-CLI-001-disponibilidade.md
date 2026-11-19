---
documento_id: INV-CLI-001
tipo: investigacao
versao: 1.0.0
caminho_canonico: scripts/docs-script/INV-CLI-001-disponibilidade.md
criado_em: '2026-11-14'
atualizado_em: '2026-11-14'
fase_documento: final
status_aprovacao: homologado
status_implementacao: n/a
---

# INV-CLI-001 — Disponibilidade de CLIs para o gate de qualidade

## Contrato do documento

| Propriedade      | Definição                                                                                                                                                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Papel            | registrar a pesquisa de disponibilidade de executáveis CLI no ambiente WSL, com linha do tempo, evidências e conclusões                                                                                                  |
| Objetivo         | fundamentar a decisão de instalar dependências de desenvolvimento ausentes ([DEC-CLI-001](./DEC-CLI-001-dependencias-dev.md#dec-cli-001))                                                                                |
| Escopo           | ambiente WSL do projeto `selecao-brasileira`; extensões VS Code instaladas; executáveis disponíveis no `PATH` via `nvm`                                                                                                  |
| Caminho canônico | `scripts/docs-script/INV-CLI-001-disponibilidade.md`                                                                                                                                                                     |
| Autoridade       | investigação de suporte a decisão; não autoriza instalação por si mesma                                                                                                                                                  |
| Contexto mínimo  | este documento, [BRD/URS](./BRD_URS_Verificador_Qualidade.md#brd-root), [FRS/SyRS v2.0](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#frs-root) e [DEC-CLI-001](./DEC-CLI-001-dependencias-dev.md#dec-cli-001) |
| Dependências     | inventário INV-EXT-001 (50 extensões), DH-01 do BRD/URS                                                                                                                                                                  |
| Restrições       | registrar somente o que foi observado por execução real; não inferir disponibilidade de documentação ou extensão instalada                                                                                               |
| Riscos mitigados | conclusão sem evidência; confundir presença de extensão com disponibilidade de CLI; afirmar sucesso falso do gate                                                                                                        |

## 1. Motivo da investigação

A especificação
[FRS/SyRS v2.0](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#frs-root)
foi elaborada sem acesso ao terminal do ambiente real. Suas afirmações sobre
ferramentas (FR-031: "verificar disponibilidade do executável antes de
executar") e a recomendação técnica
([TEC-003](./Especificacao_Tecnica_Completa.md#tec-003): "localizar executável
no PATH efetivo WSL") dependem de informações que a documentação classifica
explicitamente como NÃO VERIFICADAS (NV-01: "executáveis disponíveis no WSL").

A decisão DH-01 do BRD/URS ("ponte VS Code ou CLIs equivalentes?") não pode ser
tomada sem saber quais CLIs existem de fato. Esta investigação preenche essa
lacuna.

## 2. Linha do tempo das ações

### 2026-11-13 — Sessão inicial

**Ação:** usuário perguntou como listar extensões instaladas no VS Code/WSL.
**Resultado:** orientação para executar `code --list-extensions --show-versions`
no terminal integrado do VS Code. **Estado da investigação:** iniciada
implicitamente; inventário de extensões ainda não verificado.

### 2026-11-14T16:30-03:00 — Revisão da documentação

**Ação:** leitura dos três documentos da suite de especificação
([BRD/URS](./BRD_URS_Verificador_Qualidade.md#brd-root),
[FRS/SyRS v2.0](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#frs-root),
[Especificação Técnica](./Especificacao_Tecnica_Completa.md#tec-root)).
**Resultado:** identificadas afirmações com status NÃO VERIFICADO sobre CLIs e
AdocMD Forge. **Decisão pendente identificada:** DH-01 requer conhecimento de
quais CLIs existem.

### 2026-11-14T16:33-03:00 — Verificação das extensões

**Ação executada:**

````bash
code --list-extensions --show-versions 2>/dev/null | sort

```text
**Resultado observado:** 50 extensões listadas; inventário coincide exatamente com INV-EXT-001 da FRS/SyRS v2.0.
**Classificação:** SUSTENTADO — inventário documental é fiel ao ambiente real.

### 2026-11-14T16:33-03:00 — Verificação de CLIs no PATH

**Ação executada:**

```bash
which markdownlint-cli2 markdownlint prettier pyright eslint spectral redocly 2>&1
which node npm npx 2>&1
python3 --version 2>&1

```text
**Resultado observado:**

```text
/home/davis/.nvm/versions/node/v24.14.1/bin/pyright
/home/davis/.nvm/versions/node/v24.14.1/bin/redocly
/home/davis/.nvm/versions/node/v24.14.1/bin/node
/home/davis/.nvm/versions/node/v24.14.1/bin/npm
/home/davis/.nvm/versions/node/v24.14.1/bin/npx
Python 3.12.3

```text
`markdownlint-cli2`, `markdownlint`, `prettier`, `eslint` e `spectral`: **sem saída** (não encontrados no PATH).

### 2026-11-14T16:33-03:00 — Tentativa de instalação via npx

**Ação executada:**

```bash
npx markdownlint-cli2 --version 2>&1
npx prettier --version 2>&1

```text
**Resultado observado:**

```text
npm error code EROFS
npm error syscall open
npm error path /home/davis/.npm/_cacache/tmp/f213aa7a
npm error errno EROFS
npm error rofs EROFS: read-only file system, open '/home/davis/.npm/_cacache/tmp/...'

```text
**Classificação:** falha de sistema de arquivos; `npx` não pode baixar ou executar pacotes
não pré-instalados porque o cache do npm é somente-leitura neste ambiente.

### 2026-11-14T16:34-03:00 — Levantamento dos pacotes npm globais instalados

**Ação executada:**

```bash
npm list -g --depth=0 2>&1
ls /home/davis/.nvm/versions/node/v24.14.1/bin/ | grep -E "markdownlint|prettier|eslint|spectral"

```text
**Resultado observado (npm list -g):**

```text
├── @anthropic-ai/claude-code@2.1.251
├── @anthropic-ai/sandbox-runtime@0.0.81
├── @beads/bd@1.2.2
├── @openai/codex@0.160.0
├── @redocly/cli@2.30.3
├── agent-browser@0.27.0
├── corepack@0.34.6
├── npm@11.11.0
├── pyright@1.1.413
└── vercel@54.1.0

```text
**Resultado do ls no bin:** somente `redocly` listado; nenhum dos demais encontrado.

**Conclusão parcial:** somente `pyright@1.1.413` e `@redocly/cli@2.30.3` estão pré-instalados.
`markdownlint-cli2`, `prettier`, `eslint` e `spectral` **não estão instalados**.

### 2026-11-14T16:34-03:00 — Verificação de versões confirmadas

**Ação executada:**

```bash
pyright --version 2>&1
redocly --version 2>&1

```text
**Resultado observado:**

```text
pyright 1.1.413
2.30.3

```text
**Classificação:** CONFIRMADO — executáveis funcionais com versões verificadas.

### 2026-11-14T16:35-03:00 — Inspeção do package.json do AdocMD Forge

**Ação executada:**

```bash
python3 -c "
import json
with open('/home/davis/.vscode-server/extensions/buckethsu.adocmd-forge-1.4.4/package.json') as f:
    pkg = json.load(f)
print('bin:', pkg.get('bin'))
cmds = pkg.get('contributes', {}).get('commands', [])
print(f'VS Code commands ({len(cmds)}):')
for c in cmds: print(f'  {c.get(\"command\")}')
"

```text
**Resultado observado:**

```text
bin: None
VS Code commands (21):
  adocmdForge.openPreview
  adocmdForge.refreshPreview
  ...
  adocmdForge.validateLinks
  adocmdForge.exportHtml
  ...

```text
**Classificação:** CONFIRMADO — `bin: None`; `validateLinks` é exclusivamente comando VS Code;
afirmação da FRS/SyRS v2.0 (INT-05) é **correta e verificada por evidência de execução**.

### 2026-11-14T16:36-03:00 — Execução do script de conformidade

**Ação executada:**

```bash
bash scripts/testar-conformidade-repositorio.sh 2>&1 | tail -50

```text
**Resultado observado:**

```text
FAIL [TST-CASE-001] contratos documentais incompletos (7 arquivos)
PASS [TST-CASE-002] links internos possuem localização específica
FAIL [TST-CASE-003] árvore ou rotas incompletas (caminhos não catalogados)
PASS [TST-CASE-004] comentários HTML preservados
FAIL [TST-CASE-005] estrutura do grupo incoerente (nome duplicado)
PASS [TST-CASE-006] IDs e âncoras WA preservados
PASS [TST-CASE-007] automação legada isolada do aceite
PASS [TST-CASE-008] registros de execução completos
SUMMARY total=8 pass=5 fail=3 config=TST-CFG-001

```text

### 2026-11-14T16:37-03:00 — Análise de âncoras quebradas

**Ação executada:** script Python analisou links internos dos 12 arquivos fora de `testes/` e `scripts/docs-script/`.
**Resultado observado:** 9 âncoras quebradas identificadas em `CLAUDE.md`, `regras-rastreabilidade.md` e `tecnicas-rastreabilidade.md`.

### 2026-11-14T16:38-03:00 — Execução do validador de rastreabilidade

**Ação executada:**

```bash
bash scripts/validar-rastreabilidade.sh 2>&1 | tail -10

```text
**Resultado observado:**

```text
Conversas: 8 / Âncoras válidas: 8 / Mensagens: 31
VALIDO: estrutura e links bidirecionais correspondem aos registros-fonte.

```text
**Classificação:** WA/RT preservado; script legado confirma integridade estrutural da rastreabilidade de mensagens.

## 3. Resultado consolidado da pesquisa

| Ferramenta | Hipótese da documentação | Resultado verificado | Evidência |
| --- | --- | --- | --- |
| `markdownlint-cli2` | "verificar CLI separadamente" | **NÃO INSTALADA**; `npx` bloqueado por EROFS | `which` sem saída; `npm list -g` |
| `prettier` | "verificar CLI separadamente" | **NÃO INSTALADA**; `npx` bloqueado por EROFS | `which` sem saída; `npm list -g` |
| `pyright` | "verificar CLI separadamente" | **INSTALADO** v1.1.413 | `which` + versão verificada |
| `redocly` | "verificar CLI separadamente" | **INSTALADO** v2.30.3 | `which` + versão verificada |
| `eslint` | "verificar CLI separadamente" | **NÃO INSTALADO** | `which` sem saída |
| `spectral` | "verificar CLI separadamente" | **NÃO INSTALADO** | `which` sem saída |
| `AdocMD validateLinks` | "sem CLI demonstrada" | **CONFIRMADO**: `bin: None` | `package.json` inspecionado |
| `npx` (instalação dinâmica) | não mencionado na spec | **BLOQUEADO** (EROFS) | log npm erro EROFS |

## 4. Cadeia afirmação → evidência → conclusão

**Afirmação A1:** "markdownlint-cli2 não está disponível para execução no terminal deste ambiente."
**Evidência:** `which markdownlint-cli2` sem saída; `npm list -g` não contém o pacote; `npx markdownlint-cli2` falha com EROFS.
**Premissa:** um executável ausente no `PATH` e não instalado globalmente não pode ser invocado por subprocesso Python sem `shell=True`.
**Conclusão:** o adaptador `markdownlint` descrito na Especificação Técnica (TEC-003) **não pode ser executado** no estado atual do ambiente.
**Limite:** o ambiente de CI ou outro perfil de instalação pode ter `markdownlint-cli2` disponível; esta conclusão é válida somente para o WSL deste workspace em 2026-11-14.

**Afirmação A2:** "`npx` não pode ser usado como substituto de instalação neste ambiente."
**Evidência:** erro EROFS ao tentar `npx markdownlint-cli2` e `npx prettier`; cache `/home/davis/.npm/_cacache/tmp/` é somente-leitura.
**Premissa:** EROFS é uma restrição de sistema de arquivos, não de rede; não pode ser contornado por configuração de proxy ou token.
**Conclusão:** a única forma de disponibilizar `markdownlint-cli2` e `prettier` como executáveis locais é por instalação prévia com escrita autorizada — `npm install --save-dev` no diretório do projeto — ou instalação global pelo usuário fora do sandbox.
**Limite:** se o sandbox for alterado (permissões de escrita no npm cache), `npx` voltaria a funcionar.

## 5. Estado final

| Critério | Estado |
| --- | --- |
| Inventário de extensões verificado | CONFIRMADO |
| CLIs obrigatórias para gate Markdown | INCOMPLETO — markdownlint-cli2 e prettier ausentes |
| CLIs disponíveis para gate Python/OpenAPI | CONFIRMADO — pyright e redocly instalados |
| AdocMD Forge sem CLI | CONFIRMADO |
| Âncoras quebradas no repositório | 9 identificadas |
| Script de conformidade | 5 PASS / 3 FAIL |
| Decisão derivada necessária | [DEC-CLI-001](./DEC-CLI-001-dependencias-dev.md#dec-cli-001) |

**DONE desta investigação:** linha do tempo, evidências e cadeia lógica registradas;
conclusão encaminhada para [DEC-CLI-001](./DEC-CLI-001-dependencias-dev.md#dec-cli-001).
````
