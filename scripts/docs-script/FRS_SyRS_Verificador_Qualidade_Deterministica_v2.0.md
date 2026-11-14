---
titulo: "FRS/SyRS — Verificador determinístico de qualidade e rastreabilidade"
tipo: "especificacao-funcional-e-de-sistema"
versao: "2.0-proposta"
data: "2026-11-14"
status: "PROPOSTA — COMPARACAO_DOCUMENTAL_VALIDADA — SCRIPT_NAO_IMPLEMENTADO"
fonte_base: "FRS_SyRS_Verificador_Qualidade_Deterministica_v1.0.md"
fonte_inventario: "lista de 50 extensoes enviada pelo usuario em 2026-11-14"
artefato_alvo: "scripts/verificar-qualidade.py (proposto; nao confirmado existente)"
ambiente_alvo: "VS Code 1.146.0; WSL Ubuntu; Python 3; repo selecao-brasileira (dados anteriormente fornecidos)"
path_proposto: "FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md"
---

# FRS/SyRS — Verificador determinístico de qualidade e rastreabilidade

**Papel:** especificar o comportamento verificável e a integração do futuro orquestrador.  
**Objetivo:** transformar erros e avisos dos provedores aplicáveis em relatório determinístico, sem simular funcionalidades de extensões.  
**Escopo:** tarefas de edição/criação de Markdown e dependências explicitamente afetadas; não é uma varredura universal de todas as extensões.  
**Path canônico proposto:** `FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md`.  
**Rastreabilidade documental:** [BRD/URS](./BRD_URS_Verificador_Qualidade.md#brd-root) ↔ esta FRS/SyRS ↔ [Especificação Técnica](./Especificacao_Tecnica_Completa.md#tec-root).

## FRS-ROOT

## 1. Glossário, objetivo e restrições

- **Linter:** analisa texto/código segundo regras de conformidade; não precisa reformatar arquivos.
- **Formatador:** aplica ou compara estilos; `--check` é não mutante, `--write` não é permitido no gate.
- **Diagnóstico VS Code:** evento de um provedor na sessão do editor; não é automaticamente acessível ao Python.
- **CLI:** programa executável no terminal; a extensão VS Code correspondente não prova sua existência.
- **Snapshot:** conjunto declarado de arquivos, configuração, versão e hashes analisados.
- **Gate fail-closed:** retorno `0` proibido se uma verificação obrigatória estiver inconclusiva.

**Objetivo do usuário:** ao finalizar criação/edição de `.md`, o agente executa o script Python, recebe diagnósticos rastreáveis e faz correções autorizadas, repetindo a verificação até `exit 0` ou até identificar bloqueio justificável. O script não edita arquivos.

**Invariantes:** preservar `AGENTS.md` contra edição por agentes; preservar comentários HTML, IDs, âncoras e vínculos existentes; não instalar dependências nem usar rede implicitamente; não presumir acerto sem oráculo/teste independente.

**Limite material:** zero diagnósticos não comprova autenticidade do conteúdo, correção de software ou cobertura integral de extensões sem prova de ativação e frescor. O gate é limitado à política, arquivos e provedores requeridos.

## FONTES

**2. Fontes e classes de evidência**

| ID | Fonte | O que sustenta | Classe |
|---|---|---|---|
| INT-01 | Regras obrigatórias entregues pelo usuário | Preservação de Markdown/HTML e decisões fundamentadas | Regra fornecida |
| INT-02 | `regras-rastreabilidade.md` entregue anteriormente | IDs WA/ENT, rastreabilidade e suas fases | Documento fornecido |
| INT-03 | `AGENTS.md` entregue anteriormente | TDD, testes determinísticos e proibição de edição por agentes | Documento fornecido |
| INT-04 | Diagnóstico do Codex entregue anteriormente | Histórico: 863 violações, 23 arquivos, falhas AG↔EV | Relato de execução |
| INT-05 | Manifesto AdocMD Forge 1.4.4 entregue anteriormente | `validateLinks` é comando VS Code, sem CLI demonstrada | Manifesto fornecido |
| INV-EXT-001 | Lista de 50 IDs/versões de extensões enviada em 14/11/2026 | Inventário declarado das extensões | Saída de terminal fornecida |
| DOC-01 | FRS/SyRS v1.0 anexada | Baseline de 25 FR, 11 NFR, 24 testes | Documento de entrada |
| EXT-01 | [markdownlint-cli2 / CLI e configurações](https://github.com/DavidAnson/markdownlint-cli2/blob/main/README.md) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-02 | [VS Code API / languages.getDiagnostics](https://code.visualstudio.com/api/references/vscode-api#languages) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-03 | [VS Code / validação de links Markdown](https://code.visualstudio.com/docs/languages/markdown#_link-validation) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-04 | [Pyright / CLI](https://github.com/microsoft/pyright/blob/main/docs/command-line.md) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-05 | [Pyright / Pylance](https://github.com/microsoft/pyright/blob/main/docs/installation.md) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-06 | [Prettier / CLI](https://prettier.io/docs/cli) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-07 | [Cargo / formatos de mensagens](https://doc.rust-lang.org/cargo/reference/external-tools.html) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-08 | [rustfmt / verificação](https://github.com/rust-lang/rustfmt#verifying-code-is-formatted) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-09 | [NASA SWE-052](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695427/SWE-052+-+Bidirectional+Traceability) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-10 | [ESLint / CLI](https://eslint.org/docs/latest/use/command-line-interface) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-11 | [Spectral / CLI](https://github.com/stoplightio/spectral/blob/develop/docs/guides/2-cli.md) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-12 | [Redocly / CLI lint](https://redocly.com/docs/cli/commands/lint) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-13 | [Red Hat / servidor de YAML](https://github.com/redhat-developer/yaml-language-server) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-14 | [Red Hat / vscode-yaml](https://github.com/redhat-developer/vscode-yaml) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-15 | [vscode-markdownlint / paridade com CLI](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-16 | [Prettier / extensão](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-17 | [Prettier ESLint / extensão](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |
| EXT-18 | [Rust Clippy / execução](https://github.com/rust-lang/rust-clippy) | Capacidade técnica documentada no tema indicado; não comprova instalação local | Documentação externa |


### INV-EXT-001

**Fonte:** inventário de 50 extensões fornecido pelo usuário nesta solicitação; espelho integral na tabela da seção 3.2 deste documento. **Limite:** instalação declarada, não execução local comprovada.

### INT-01

**Fonte interna:** documento ou registro correspondente identificado na tabela de fontes acima; utilizar o texto original e respeitar a vigência.

### INT-02

**Fonte interna:** documento ou registro correspondente identificado na tabela de fontes acima; utilizar o texto original e respeitar a vigência.

### INT-03

**Fonte interna:** documento ou registro correspondente identificado na tabela de fontes acima; utilizar o texto original e respeitar a vigência.

### INT-04

**Fonte interna:** documento ou registro correspondente identificado na tabela de fontes acima; utilizar o texto original e respeitar a vigência.

### INT-05

**Fonte interna:** documento ou registro correspondente identificado na tabela de fontes acima; utilizar o texto original e respeitar a vigência.

### EXT-01

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-02

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-03

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-04

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-05

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-06

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-07

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-08

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-09

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-10

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-11

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-12

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-13

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-14

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-15

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-16

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-17

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

### EXT-18

**Fonte especializada:** link oficial identificado na tabela de fontes acima; capacidade documentada, não execução local.

**Regra de validação de afirmações:** documentação de produto comprova capacidade; lista de extensões comprova somente uma instalação declarada; a execução/teste comprova comportamento no snapshot; a norma do repositório é distinta da documentação do fabricante.

## 3. Comparação entre v1.0 e as 50 extensões

### 3.1 Correções documentais introduzidas na v2.0

| ID | Situação da v1.0 | Ajuste normativo da v2.0 | Referência |
|---|---|---|---|
| DELTA-01 | ESLint não figurava individualmente no catálogo | Adicionado adaptador condicional JS/TS, com CLI distinta da extensão | EXT-10, FR-027 |
| DELTA-02 | Spectral e Redocly não eram discriminados | Separados por ruleset/perfil, sem execução duplicada automática | EXT-11/12, FR-028 |
| DELTA-03 | YAML não estava como provedor específico | Adicionado diagnóstico YAML via ponte ou controle equivalente comprovado | EXT-13/14, FR-028 |
| DELTA-04 | Prettier constava sem distinguir outros formatadores | Prettier ESLint e Prettier SQL classificados como formatação, não lint universal | EXT-16/17, FR-029 |
| DELTA-05 | Rust e rust-analyzer constavam na v1.0 sem presença comprovada na lista | Registrados como ferramentas externas/provedores não listados; habilitação condicionada a projeto Rust real | EXT-07/08/18, FR-035 |
| DELTA-06 | Pyright e Pylance já eram separados; faltava testá-los contra a lista | Confirmados dois IDs de extensão, sem presumir duas CLIs | EXT-04/05, FR-031 |
| DELTA-07 | Inventário de fontes por provedor incompleto | Matriz exaustiva 50/50, sem classificar extensões de IA ou preview como linters | INV-EXT-001, FR-026 |
| DELTA-08 | Cobertura e zero do gate confundíveis com todos os problemas do editor | Status por provedor e ponte VS Code condicional, com frescor verificável | EXT-02, FR-032/036 |

### INVENTARIO

### 3.2 Classificação funcional — 50 entradas declaradas

**Critério:** D-MD = diagnóstico específico de Markdown; D-COD = análise de linguagens; D-EST = YAML/esquema; D-API = validação especializada OpenAPI; D-COND = diagnósticos de domínio condicionado; FORMAT = formatador/verificador de estilo; OUTRO = sem função de lint geral estabelecida pelo inventário. As categorias identificam **possível pertinência**, não disponibilidade de executável no WSL.

| Nº | Extensão e versão informadas | Classe | Função relevante | Inclusão no gate |
|---:|---|---|---|---|
| 1 | `42crunch.vscode-openapi@5.11.0` | D-API | Segurança/qualidade API | Capacidade, autorização e autenticação a confirmar |
| 2 | `adamraichu.pdf-viewer@1.1.2` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 3 | `anthropic.claude-code@2.1.301` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 4 | `bierner.markdown-preview-github-styles@2.2.0` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 5 | `bradlc.vscode-tailwindcss@0.16.0` | D-COND | Tailwind CSS | Diagnósticos específicos se houver projeto e contrato |
| 6 | `buckethsu.adocmd-forge@1.4.4` | D-MD | Diagnóstico Markdown/links | VS Code: ponte condicionada; não há CLI comprovada |
| 7 | `christian-kohler.npm-intellisense@1.4.5` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 8 | `csholmq.excel-to-markdown-table@1.4.0` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 9 | `cweijan.dbclient-jdbc@1.4.6` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 10 | `cweijan.vscode-postgresql-client2@9.0.2` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 11 | `davidanson.vscode-markdownlint@0.62.1` | D-MD | Lint Markdown | CLI markdownlint-cli2 separada, após verificação |
| 12 | `dbaeumer.vscode-eslint@3.0.34` | D-COD | JS/TS | ESLint CLI quando projeto aplicável |
| 13 | `esbenp.prettier-vscode@12.4.0` | FORMAT | Formatação Markdown e outros | CLI prettier --check independente |
| 14 | `faubulous.mentor@0.7.1` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 15 | `focus-space.docx-markdown-converter@1.5.1` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 16 | `frenco.vscode-notion@2.0.1` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 17 | `github.vscode-github-actions@0.32.3` | D-COND | GitHub Actions | Apoio/diagnóstico de workflow, sem CLI presumida |
| 18 | `github.vscode-pull-request-github@0.178.0` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 19 | `google.colab@0.9.7` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 20 | `google.geminicodeassist@2.104.0` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 21 | `grapecity.gc-excelviewer@4.2.67` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 22 | `hanifmifta.adocs@0.0.2` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 23 | `inferrinizzard.prettier-sql-vscode@1.6.0` | FORMAT | Formatação SQL | Somente se SQL aplicável e CLI homologada |
| 24 | `janekwinkler.vscode-owl-ms@1.3.0` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 25 | `luckyxmobile.document-md-converter@0.5.4` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 26 | `ms-azuretools.vscode-containers@2.5.3` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 27 | `ms-azuretools.vscode-docker@2.0.0` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 28 | `ms-ceintl.vscode-language-pack-pt-br@1.131.2026090407` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 29 | `ms-pyright.pyright@1.1.414` | D-COD | Python, tipos | CLI pyright quando disponível |
| 30 | `ms-python.debugpy@2026.6.0` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 31 | `ms-python.python@2026.10.0` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 32 | `ms-python.vscode-pylance@2026.4.1` | D-COD | Python, diagnósticos editor | Ponte VS Code ou Pyright com cobertura distinta |
| 33 | `ms-python.vscode-python-envs@1.42.0` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 34 | `ms-toolsai.jupyter@2025.9.1` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 35 | `ms-toolsai.jupyter-keymap@1.1.2` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 36 | `ms-toolsai.jupyter-renderers@1.3.0` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 37 | `ms-toolsai.vscode-jupyter-cell-tags@0.1.9` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 38 | `ms-toolsai.vscode-jupyter-slideshow@0.1.6` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 39 | `ms-vscode-remote.remote-containers@0.473.0` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 40 | `ms-vscode.live-server@0.4.20` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 41 | `openai.chatgpt@26.51111.21308` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 42 | `openai.codex-audio@26.1111.21308` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 43 | `qwtel.sqlite-viewer@26.9.1` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 44 | `redhat.vscode-yaml@2.0.0` | D-EST | YAML/esquemas | Ponte VS Code ou validador YAML separado comprovado |
| 45 | `redocly.openapi-vs-code@0.16.1` | D-API | OpenAPI | Redocly CLI independente quando escolhida |
| 46 | `rvest.vs-code-prettier-eslint@6.0.0` | FORMAT | Formatação JS/TS | Não duplicar ESLint+Prettier como 3ª checagem sem requisito |
| 47 | `saoudrizwan.claude-dev@4.1.26` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 48 | `stoplight.spectral@1.1.4` | D-API | OpenAPI/AsyncAPI | Spectral CLI independente e ruleset |
| 49 | `yzane.markdown-pdf@2.2.0` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |
| 50 | `yzhang.markdown-all-in-one@3.6.3` | OUTRO | Ferramenta sem lint geral demonstrado | Fora do gate padrão; reavaliar se surgir requisito |

**Total auditável do inventário fornecido:** 50 entradas únicas; nenhuma outra extensão incluída como instalada por inferência. Classificações baseadas no ID/nome foram confrontadas com as capacidades oficiais das ferramentas principais. Capacidades especializadas sem fonte suficiente permanecem condicionais.

### 3.3 Provedores que devem participar por perfil

| Perfil | Entradas da lista | Integração executável comprovada por documentação | Regra de acionamento |
|---|---|---|---|
| Markdown — básico | `davidanson.vscode-markdownlint`, `buckethsu.adocmd-forge` | markdownlint-cli2 é CLI separada; AdocMD é comando/diagnóstico do VS Code | Em toda tarefa `.md`; AdocMD exige ponte se captura literal obrigatória |
| Formatação Markdown | `esbenp.prettier-vscode` | Prettier CLI `--check`, não linha/coluna garantidas | Se formatador incluído na política de Markdown |
| Python | `ms-pyright.pyright`, `ms-python.vscode-pylance` | Pyright `--outputjson` independente; Pylance via VS Code | Somente projeto Python afetado/mapeado ou revisão global exigida |
| JS/TS | `dbaeumer.vscode-eslint` | ESLint CLI `--format json` separada | Somente projeto JS/TS afetado/mapeado |
| YAML | `redhat.vscode-yaml` | Language Server com diagnósticos; CLI equivalente não comprovada por instalação | YAML/esquema aplicável; captura literal requer ponte |
| OpenAPI | `stoplight.spectral`, `redocly.openapi-vs-code` | CLI Spectral/Redocly são pacotes separados | Seleção de ruleset por projeto, sem duplicação automática |
| Segurança OpenAPI | `42crunch.vscode-openapi` | Não comprovada CLI local nem acesso sem credencial | Somente com perfil autorizado e capacidade demonstrada |
| Especialidades | `bradlc.vscode-tailwindcss`, `github.vscode-github-actions` | Diagnósticos editor condicionados ao tipo de projeto | Não são gate Markdown universal |
| Formatadores adicionais | `rvest.vs-code-prettier-eslint`, `inferrinizzard.prettier-sql-vscode` | Não tratar extensão como CLI independente | Somente se JS/TS/SQL exigir verificação de estilo homologada |

**Diferentes ferramentas para OpenAPI não são necessariamente substitutas perfeitas:** se o usuário aprovar um ruleset, ele integra o gate; executar vários pode ser justificado por regras complementares, mas não se presume.  
**Markdown All in One, pré-visualização, conversores e agentes de IA:** não constituem novos linters do gate por estarem instalados.

### 3.4 Funcionalidades presentes na FRS v1.0, mas ausentes da lista de extensões

| Elemento v1.0 | Confronto com a lista | Decisão correta |
|---|---|---|
| `markdownlint-cli2` | Não é entrada da lista; a extensão markdownlint não o instala como CLI do projeto | Verificar CLI e versão separadamente |
| CLI Prettier | Não é entrada da lista; existe a extensão Prettier | Verificar CLI separadamente |
| CLI Pyright | A extensão `ms-pyright.pyright` está na lista; executável CLI não comprovado | Verificar CLI separadamente |
| Rust Cargo, Clippy, rustfmt | Não há extensão `rust-analyzer` ou Rust identificada | Exigir apenas quando projeto Rust aplicável e executável presente |
| `rust-analyzer` | Não consta entre as 50 extensões | Não alegar diagnósticos do rust-analyzer |
| Validador próprio de links/âncoras | Não é uma extensão declarada | Reutilizar o gate do repositório e complementar lacunas verificadas |
| Scripts de rastreabilidade WA/ENT | Não aparecem na lista (são scripts do repositório, não extensões) | Inspecionar e não tratar testes legados como aceite global |
| Ponte `languages.getDiagnostics()` | Não é extensão instalada nem executável | Arquitetura condicional, sujeita a aprovação |
| Orquestrador Python `scripts/verificar-qualidade.py` | Artefato futuro, não listado; existência não comprovada | Não afirmar implementação |

A lista de extensões e a lista de executáveis/scripts pertencem a categorias diferentes. Ausência da primeira não demonstra impossibilidade de executar a segunda; presença da primeira não demonstra disponibilidade da segunda.

## 4. Contrato funcional (IDs FR preservados da v1.0)

Todos os requisitos permanecem **propostos**. A redação dos FR-001 a FR-025 foi preservada da v1.0, salvo revisão editorial indicada em comentário explicativo, para não perder rastreabilidade.

### FR-001

**Obrigação:** Quando a execução iniciar, o sistema DEVE identificar raiz Git/workspace, diretório de trabalho, versão do Python e escopo solicitado; caso não consiga, DEVE falhar sem alegar validação.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-03](#int-03).  
**Testes relacionados:** nenhum (lacuna de cobertura a resolver).  
**Desenho técnico:** [TEC-001](./Especificacao_Tecnica_Completa.md#tec-001).

### FR-002

**Obrigação:** O sistema DEVE enumerar de modo determinístico os arquivos do escopo (`changed`, `all` ou seleção explícita), incluindo novos arquivos não rastreados quando aplicável, e registrar a lista efetiva.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-01](#int-01), [INV-EXT-001](#inv-ext-001).  
**Testes relacionados:** [TST-017](#tst-017).  
**Desenho técnico:** [TEC-002](./Especificacao_Tecnica_Completa.md#tec-002).

### FR-003

**Obrigação:** O sistema DEVE resolver um registro explícito de verificadores exigidos, com comando, versão, escopo, configuração, diretório de execução, timeout e política de severidade.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-03](#int-03).  
**Testes relacionados:** nenhum (lacuna de cobertura a resolver).  
**Desenho técnico:** [TEC-001](./Especificacao_Tecnica_Completa.md#tec-001).

### FR-004

**Obrigação:** O sistema DEVE executar verificadores por processo filho sem `shell=True`, sem instalação implícita, sem correção automática e sem alterar o conteúdo dos arquivos.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-01](#int-01).  
**Testes relacionados:** [TST-021](#tst-021).  
**Desenho técnico:** [TEC-001](./Especificacao_Tecnica_Completa.md#tec-001), [TEC-007](./Especificacao_Tecnica_Completa.md#tec-007).

### FR-005

**Obrigação:** Sempre que Markdown estiver no escopo, o sistema DEVE executar markdownlint-cli2, se exigido, com a configuração e versão previstas; divergências CLI/editor DEVEM ser identificadas quando a comparação for requerida.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [EXT-01](#ext-01), [EXT-15](#ext-15).  
**Testes relacionados:** [TST-002](#tst-002).  
**Desenho técnico:** [TEC-010](./Especificacao_Tecnica_Completa.md#tec-010).

### FR-006

**Obrigação:** O sistema DEVE coletar stdout, stderr, código de saída, duração, versão e estado de cada provedor, preservando o texto original e a origem do diagnóstico.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-03](#int-03), [EXT-01](#ext-01).  
**Testes relacionados:** nenhum (lacuna de cobertura a resolver).  
**Desenho técnico:** [TEC-006](./Especificacao_Tecnica_Completa.md#tec-006).

### FR-007

**Obrigação:** O sistema DEVE normalizar diagnósticos em estrutura estável contendo provedor, regra, severidade, mensagem, arquivo relativo, localização quando fornecida, evidência e remediação classificada.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-01](#int-01), [EXT-02](#ext-02).  
**Testes relacionados:** [TST-002](#tst-002), [TST-007](#tst-007), [TST-016](#tst-016).  
**Desenho técnico:** [TEC-006](./Especificacao_Tecnica_Completa.md#tec-006), [TEC-008](./Especificacao_Tecnica_Completa.md#tec-008).

### FR-008

**Obrigação:** O sistema DEVE distinguir localização exata fornecida pelo provedor de localização apenas no arquivo; NÃO DEVE fabricar linha, coluna ou causa raiz ausentes.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-01](#int-01).  
**Testes relacionados:** [TST-010](#tst-010), [TST-022](#tst-022).  
**Desenho técnico:** [TEC-006](./Especificacao_Tecnica_Completa.md#tec-006).

### FR-009

**Obrigação:** O sistema DEVE classificar cada remediação como `DETERMINISTICA`, `PROPOSTA_A_REVISAR` ou `NAO_DETERMINADA`; somente a primeira pode afirmar transformação mecânica comprovada.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-01](#int-01).  
**Testes relacionados:** nenhum (lacuna de cobertura a resolver).  
**Desenho técnico:** [TEC-006](./Especificacao_Tecnica_Completa.md#tec-006).

### FR-010

**Obrigação:** Para links Markdown locais, o sistema DEVE verificar destinos/fragmentos de acordo com o algoritmo de âncora declarado, incluindo casos cruzando arquivos e extensões conhecidas; qualquer diferença entre VS Code, AdocMD e GitHub deve ser reportada, não escondida.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-02](#int-02), [EXT-03](#ext-03).  
**Testes relacionados:** [TST-003](#tst-003), [TST-004](#tst-004).  
**Desenho técnico:** [TEC-004](./Especificacao_Tecnica_Completa.md#tec-004).

### FR-011

**Obrigação:** Para relações bidirecionais incluídas no escopo, o sistema DEVE verificar existência, reciprocidade, identidade tipada da relação e duplicidade indevida usando as regras aprovadas do repositório.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-02](#int-02), [EXT-09](#ext-09).  
**Testes relacionados:** [TST-005](#tst-005), [TST-006](#tst-006), [TST-020](#tst-020).  
**Desenho técnico:** [TEC-004](./Especificacao_Tecnica_Completa.md#tec-004).

### FR-012

**Obrigação:** O sistema DEVE executar testes/validadores existentes exigidos pelo contrato, preservando seu resultado integral, e marcar como não homologados os que já constarem assim na governança.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-02](#int-02), [INT-04](#int-04).  
**Testes relacionados:** nenhum (lacuna de cobertura a resolver).  
**Desenho técnico:** [TEC-004](./Especificacao_Tecnica_Completa.md#tec-004).

### FR-013

**Obrigação:** O sistema DEVE permitir verificadores Python/Rust somente onde o escopo e o mapeamento do projeto determinarem aplicabilidade; verificadores não aplicáveis DEVEM ser reportados, nunca contados como aprovação de verificações exigidas.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [EXT-04](#ext-04), [EXT-07](#ext-07).  
**Testes relacionados:** [TST-007](#tst-007), [TST-011](#tst-011), [TST-025](#tst-025).  
**Desenho técnico:** [TEC-002](./Especificacao_Tecnica_Completa.md#tec-002).

### FR-014

**Obrigação:** Quando um provedor exigido não puder ser executado, estiver indisponível, falhar ao exportar, expirar ou gerar resposta ilegível, o sistema DEVE emitir falha de infraestrutura e impedir retorno `0`.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-03](#int-03).  
**Testes relacionados:** [TST-008](#tst-008), [TST-012](#tst-012), [TST-013](#tst-013), [TST-018](#tst-018), [TST-026](#tst-026), [TST-037](#tst-037).  
**Desenho técnico:** [TEC-005](./Especificacao_Tecnica_Completa.md#tec-005).

### FR-015

**Obrigação:** O sistema DEVE detectar se arquivos de entrada ou configurações mudaram durante a rodada, por hashes antes/depois; se mudarem, DEVE invalidar a rodada para aceite.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-03](#int-03).  
**Testes relacionados:** [TST-014](#tst-014).  
**Desenho técnico:** [TEC-005](./Especificacao_Tecnica_Completa.md#tec-005), [TEC-007](./Especificacao_Tecnica_Completa.md#tec-007).

### FR-016

**Obrigação:** O sistema DEVE apresentar resumo de terminal com arquivo:linha:coluna quando houver, código da regra, mensagem, proveniência, indicação de correção e referência de evidência.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-01](#int-01).  
**Testes relacionados:** nenhum (lacuna de cobertura a resolver).  
**Desenho técnico:** [TEC-006](./Especificacao_Tecnica_Completa.md#tec-006), [TEC-008](./Especificacao_Tecnica_Completa.md#tec-008).

### FR-017

**Obrigação:** O sistema DEVE emitir relatório estruturado reproduzível em JSON quando solicitado, com lista ordenada de provedores, diagnósticos, verificações e estados; omitir dados sensíveis desnecessários.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-01](#int-01).  
**Testes relacionados:** [TST-016](#tst-016), [TST-023](#tst-023).  
**Desenho técnico:** [TEC-006](./Especificacao_Tecnica_Completa.md#tec-006), [TEC-007](./Especificacao_Tecnica_Completa.md#tec-007), [TEC-008](./Especificacao_Tecnica_Completa.md#tec-008).

### FR-018

**Obrigação:** O sistema DEVE retornar `0` somente quando todos os verificadores exigidos forem executados e aprovados, não houver diagnósticos bloqueantes, os dados estiverem completos e a rodada estiver estável.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-03](#int-03).  
**Testes relacionados:** [TST-001](#tst-001), [TST-024](#tst-024).  
**Desenho técnico:** [TEC-005](./Especificacao_Tecnica_Completa.md#tec-005), [TEC-009](./Especificacao_Tecnica_Completa.md#tec-009).

### FR-019

**Obrigação:** O sistema DEVE retornar `1` para violações diagnosticadas e `2` para execução incompleta/erro operacional; em caso simultâneo, prevalece `2`, preservando os diagnósticos já coletados.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-03](#int-03).  
**Testes relacionados:** [TST-018](#tst-018).  
**Desenho técnico:** [TEC-005](./Especificacao_Tecnica_Completa.md#tec-005).

### FR-020

**Obrigação:** O sistema NÃO DEVE modificar `AGENTS.md`, comentários HTML, títulos, IDs, links, dados pessoais ou qualquer arquivo verificado.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-01](#int-01), [INT-03](#int-03).  
**Testes relacionados:** [TST-001](#tst-001), [TST-015](#tst-015).  
**Desenho técnico:** [TEC-007](./Especificacao_Tecnica_Completa.md#tec-007).

### FR-021

**Obrigação:** Após correções externas pelo agente, uma nova execução DEVE reavaliar o estado atual, sem reutilizar um PASS anterior para os arquivos alterados.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-03](#int-03).  
**Testes relacionados:** [TST-019](#tst-019).  
**Desenho técnico:** [TEC-005](./Especificacao_Tecnica_Completa.md#tec-005), [TEC-009](./Especificacao_Tecnica_Completa.md#tec-009).

### FR-022

**Obrigação:** Quando for exigida captura de diagnósticos do editor, o sistema DEVE exigir identificação da ponte, disponibilidade dos provedores requeridos e comprovação de que o snapshot corresponde aos arquivos salvos; sem isso, código `2`.  
**Prioridade:** Condicional obrigatória.
**Origem/Evidência:** [EXT-02](#ext-02), [INT-05](#int-05).  
**Testes relacionados:** [TST-008](#tst-008), [TST-009](#tst-009), [TST-028](#tst-028), [TST-031](#tst-031).  
**Desenho técnico:** [TEC-003](./Especificacao_Tecnica_Completa.md#tec-003).

### FR-023

**Obrigação:** O sistema DEVE documentar para cada problema a relação `diagnóstico → regra → evidência → ação recomendada → verificação de aceite`, sem confundir hipótese com causa comprovada.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-01](#int-01), [INT-02](#int-02).  
**Testes relacionados:** nenhum (lacuna de cobertura a resolver).  
**Desenho técnico:** [TEC-006](./Especificacao_Tecnica_Completa.md#tec-006), [TEC-009](./Especificacao_Tecnica_Completa.md#tec-009).

### FR-024

**Obrigação:** O sistema DEVE produzir resumo de rastreabilidade `requisito de verificação → teste executado → resultado`, incluindo falhas e verificações omitidas.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-03](#int-03).  
**Testes relacionados:** nenhum (lacuna de cobertura a resolver).  
**Desenho técnico:** [TEC-006](./Especificacao_Tecnica_Completa.md#tec-006), [TEC-009](./Especificacao_Tecnica_Completa.md#tec-009).

### FR-025

**Obrigação:** O sistema DEVE encerrar a rodada de forma finita, com timeout por verificador, sem relançamento indefinido e sem declarar DONE por conta própria; a decisão de tarefa concluída é do processo de agente conforme contrato.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-03](#int-03).  
**Testes relacionados:** [TST-013](#tst-013).  
**Desenho técnico:** [TEC-001](./Especificacao_Tecnica_Completa.md#tec-001).

### FR-026

**Obrigação:** O sistema DEVE manter catálogo explícito dos provedores observados no inventário de extensões, registrando ID, versão informada, classe funcional, aplicabilidade, mecanismo de captura, disponibilidade de CLI e decisão de ativação; instalação de extensão não comprova CLI disponível.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INV-EXT-001](#inv-ext-001), [EXT-15](#ext-15).  
**Testes relacionados:** [TST-038](#tst-038).  
**Desenho técnico:** [TEC-003](./Especificacao_Tecnica_Completa.md#tec-003).

### FR-027

**Obrigação:** O sistema DEVE integrar ESLint quando o escopo incluir JavaScript/TypeScript sujeito à configuração do projeto; usar CLI preexistente e formato estruturado quando suportado; ausência de projeto JS/TS corresponde a NOT_APPLICABLE, não PASS.  
**Prioridade:** Condicional.
**Origem/Evidência:** [INV-EXT-001](#inv-ext-001), [EXT-10](#ext-10).  
**Testes relacionados:** [TST-025](#tst-025), [TST-026](#tst-026), [TST-039](#tst-039).  
**Desenho técnico:** [TEC-010](./Especificacao_Tecnica_Completa.md#tec-010).

### FR-028

**Obrigação:** O sistema DEVE distinguir os diagnósticos YAML de validação de esquema, o lint Spectral e o lint Redocly; executar apenas os perfis aplicáveis explicitamente configurados aos artefatos YAML/OpenAPI, evitando duplicação automática.  
**Prioridade:** Condicional.
**Origem/Evidência:** [INV-EXT-001](#inv-ext-001), [EXT-11](#ext-11), [EXT-12](#ext-12), [EXT-13](#ext-13).  
**Testes relacionados:** [TST-027](#tst-027), [TST-028](#tst-028).  
**Desenho técnico:** [TEC-010](./Especificacao_Tecnica_Completa.md#tec-010).

### FR-029

**Obrigação:** O sistema DEVE distinguir formatadores (Prettier, Prettier ESLint e Prettier SQL) de linters; a verificação read-only de estilo somente será obrigatória para tipos de arquivo contemplados por política aprovada.  
**Prioridade:** Condicional.
**Origem/Evidência:** [INV-EXT-001](#inv-ext-001), [EXT-06](#ext-06), [EXT-16](#ext-16), [EXT-17](#ext-17).  
**Testes relacionados:** [TST-010](#tst-010), [TST-029](#tst-029).  
**Desenho técnico:** [TEC-010](./Especificacao_Tecnica_Completa.md#tec-010).

### FR-030

**Obrigação:** O sistema DEVE reconhecer que 42Crunch, Tailwind CSS e GitHub Actions podem gerar diagnósticos especializados no editor, mas somente registrar tais provedores como obrigatórios após demonstrar escopo, canal de captura e precondições de acesso.  
**Prioridade:** Condicional.
**Origem/Evidência:** [INV-EXT-001](#inv-ext-001).  
**Testes relacionados:** [TST-034](#tst-034).  
**Desenho técnico:** [TEC-010](./Especificacao_Tecnica_Completa.md#tec-010).

### FR-031

**Obrigação:** Antes de executar um provedor, o sistema DEVE comprovar a disponibilidade do executável específico e sua versão/configuração; extensão instalada, binário em cache e documentação de capacidade não podem substituir essa verificação.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INV-EXT-001](#inv-ext-001), [EXT-01](#ext-01), [EXT-10](#ext-10).  
**Testes relacionados:** [TST-027](#tst-027), [TST-035](#tst-035).  
**Desenho técnico:** [TEC-003](./Especificacao_Tecnica_Completa.md#tec-003), [TEC-007](./Especificacao_Tecnica_Completa.md#tec-007).

### FR-032

**Obrigação:** O sistema DEVE oferecer um relatório de cobertura por provedor e por tipo de arquivo com estados REQUIRED_PASS, REQUIRED_FAIL, UNAVAILABLE, NOT_APPLICABLE, OPTIONAL_SKIPPED e NOT_VERIFIED; um provedor obrigatório não pode desaparecer do denominador.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-03](#int-03), [INV-EXT-001](#inv-ext-001).  
**Testes relacionados:** [TST-036](#tst-036), [TST-037](#tst-037).  
**Desenho técnico:** [TEC-003](./Especificacao_Tecnica_Completa.md#tec-003), [TEC-005](./Especificacao_Tecnica_Completa.md#tec-005).

### FR-033

**Obrigação:** O sistema DEVE resolver conflitos de formatação e diagnósticos sobrepostos conforme política explícita, preservando cada observação e a proveniência; não suprimir regras por escolha autônoma.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-01](#int-01), [EXT-15](#ext-15).  
**Testes relacionados:** [TST-006](#tst-006), [TST-030](#tst-030), [TST-035](#tst-035).  
**Desenho técnico:** [TEC-004](./Especificacao_Tecnica_Completa.md#tec-004).

### FR-034

**Obrigação:** Para alterações de Markdown, o sistema DEVE executar as verificações Markdown obrigatórias e ampliar o subgrafo de dependências documentais (links de ida/volta) necessário para validar os vínculos afetados, independentemente de os destinos terem sido editados.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-02](#int-02), [EXT-09](#ext-09).  
**Testes relacionados:** [TST-020](#tst-020), [TST-033](#tst-033).  
**Desenho técnico:** [TEC-002](./Especificacao_Tecnica_Completa.md#tec-002), [TEC-004](./Especificacao_Tecnica_Completa.md#tec-004).

### FR-035

**Obrigação:** O sistema DEVE registrar a causa da não aplicabilidade de Rust, SQL, APIs ou código Python/JavaScript, sem classificar a ausência de extensão ou de projeto como cobertura aprovada; Cargo/Clippy/rustfmt não são presumidos instalados.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INV-EXT-001](#inv-ext-001), [EXT-07](#ext-07), [EXT-18](#ext-18).  
**Testes relacionados:** [TST-011](#tst-011), [TST-012](#tst-012), [TST-032](#tst-032), [TST-039](#tst-039), [TST-040](#tst-040).  
**Desenho técnico:** [TEC-002](./Especificacao_Tecnica_Completa.md#tec-002).

### FR-036

**Obrigação:** O sistema DEVE distinguir execução de CLIs do snapshot da interface Problems: somente uma ponte oficial/testada poderá importar diagnósticos VS Code, com proveniência, arquivos cobertos, frescor, autorização e estado de acesso preservados.  
**Prioridade:** Condicional.
**Origem/Evidência:** [EXT-02](#ext-02), [INT-05](#int-05).  
**Testes relacionados:** [TST-009](#tst-009), [TST-031](#tst-031).  
**Desenho técnico:** [TEC-003](./Especificacao_Tecnica_Completa.md#tec-003).

### FR-037

**Obrigação:** O sistema DEVE verificar se provedores classificados como formatadores alterariam os arquivos apenas por comparação read-only, nunca executando --write, --fix nem ações equivalentes no gate.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [EXT-06](#ext-06).  
**Testes relacionados:** [TST-029](#tst-029).  
**Desenho técnico:** [TEC-007](./Especificacao_Tecnica_Completa.md#tec-007).

### FR-038

**Obrigação:** O sistema DEVE impedir que uma tarefa com Markdown obtenha exit 0 quando uma checagem normativa obrigatória de vínculos, que depende de outro arquivo, permanecer inconclusiva.  
**Prioridade:** Obrigatório.
**Origem/Evidência:** [INT-02](#int-02), [INT-03](#int-03).  
**Testes relacionados:** [TST-033](#tst-033).  
**Desenho técnico:** [TEC-004](./Especificacao_Tecnica_Completa.md#tec-004), [TEC-005](./Especificacao_Tecnica_Completa.md#tec-005).

## 5. Política de escopo e retorno

- `changed`: arquivos criados/modificados, incluindo untracked e os destinos/dependentes de vínculo necessários ao teste; não implica varrer código Python/JS/Rust indiscriminadamente.
- `all`: baseline completa, se exigida pelo usuário ou pela alteração normativa; defeitos antigos dentro do escopo bloqueiam, a menos que exista exceção autorizada explícita.
- `--files`: conjunto explícito; expandir apenas relações obrigatórias. A escolha de alcance exige decisão humana.
- `NOT_APPLICABLE` requer justificativa por tipo de arquivo, configuração e impacto; `UNAVAILABLE` em provedor obrigatório não pode virar PASS.
- `0` = todas as checagens requeridas realizadas e aprovadas no snapshot; `1` = violação bloqueante e nenhuma execução obrigatória inconclusiva; `2` = falha de cobertura, ferramenta, parser, snapshot ou configuração. Em caso simultâneo, prevalece `2`, preservando erros encontrados.
- Uma ferramenta pode retornar `0` com avisos; o orquestrador decide de acordo com a política de severidade aprovada, após capturar as ocorrências, não apenas pelo código nativo.

## 6. Requisitos de qualidade e operação

### NFR-001

**Propriedade:** Reprodutibilidade.  
**Critério:** Mesmo snapshot, versões, parâmetros e ferramentas devem produzir a mesma classificação e ordenação, salvo dados não determinísticos identificados em metadados.

### NFR-002

**Propriedade:** Não mutação.  
**Critério:** SHA-256 dos arquivos versionados/incluídos antes e depois deve permanecer idêntico em uma rodada de verificação; qualquer divergência invalida o resultado.

### NFR-003

**Propriedade:** Localização.  
**Critério:** Cada diagnóstico deve possuir ao menos arquivo ou identificador de etapa; linha e coluna só quando observadas; links de código navegáveis no terminal podem usar `arquivo:linha:coluna`, não como referência documental permanente.

### NFR-004

**Propriedade:** Portabilidade.  
**Critério:** Python 3 padrão, terminal WSL e VS Code; nenhum caminho absoluto fixo da máquina deve integrar as referências persistentes.

### NFR-005

**Propriedade:** Privacidade.  
**Critério:** Logs não devem incluir tokens, segredos, telefones, mensagens integrais ou dados sensíveis; registrar somente fragmentos mínimos e versões de ferramenta.

### NFR-006

**Propriedade:** Falha segura.  
**Critério:** Erro, timeout, incompatibilidade de parser ou ausência de provedor obrigatório não pode produzir `0`.

### NFR-007

**Propriedade:** Controle de custo.  
**Critério:** Nenhuma chamada de API paga, download ou instalação automática; reutilizar ferramentas já instaladas e aprovadas.

### NFR-008

**Propriedade:** Rastreabilidade.  
**Critério:** Cada requisito de aceitação deve possuir teste com oráculo independente e registro de resultado; testes sintéticos devem cobrir falhas positivas e negativas.

### NFR-009

**Propriedade:** Coerência de snapshot.  
**Critério:** Detectar arquivos não salvos quando o editor fizer parte do contrato e rejeitar diagnósticos de estado obsoleto ou sem prova de atualização.

### NFR-010

**Propriedade:** Preservação.  
**Critério:** Não alterar vínculos existentes, IDs, comentários HTML ou configuração do VS Code.

### NFR-011

**Propriedade:** Observabilidade.  
**Critério:** Registrar erros por etapa, comando seguro, versão, status, código nativo, duração e motivo de falha de captura.

### NFR-012

**Propriedade:** Paridade controlada.  
**Critério:** Versões e configurações CLI e editor devem ser registradas; diferença deve ser explicitada, sem exigir equivalência fictícia entre ferramentas distintas.

### NFR-013

**Propriedade:** Economia de execução.  
**Critério:** Somente verificações aplicáveis ao escopo ou obrigatórias por impacto são executadas; reutilização de resultados somente quando hash, configuração e versão forem equivalentes e a regra permitir.

### NFR-014

**Propriedade:** Interoperabilidade de diagnósticos.  
**Critério:** O esquema de saída deve identificar fonte CLI/VS_CODE, regra, severidade nativa e efetiva, localizações observadas, status de cobertura e sugestão classificada.

### NFR-015

**Propriedade:** Auditabilidade do catálogo.  
**Critério:** O inventário de provedores deve ser versionado, não descoberto para execução arbitrária; extensão instalada não concede autorização para baixar ou invocar executáveis externos.

## 7. Contratos de interface e diagnóstico

**Ponto de entrada futuro** (não implementado):

```bash
python3 scripts/verificar-qualidade.py --scope changed --format text
```

Opções previstas: `--scope changed|all`, `--files ...`, `--format text|json`, `--providers ...`, `--help`; o perfil de provedores deverá estar registrado na política, não decidido por descoberta arbitrária.  
A interface `VS_CODE` é condicional: `vscode.languages.getDiagnostics()` fornece diagnósticos do editor, mas sem garantia automática de análise de todos os arquivos, de estado salvo ou de atualização; integração deve comprovar cobertura/frescor ou emitir `2`.

**Campos obrigatórios de cada diagnóstico:** `provider_id`, `provider_version`, `origin` (CLI/VS_CODE/REPOSITORY), `rule`, `native_severity`, `effective_severity`, `message`, `relative_file`, `line`, `column`, `suggestion_class`, `suggestion`, `evidence_id`. Campos ausentes são `null` e não valores inventados.  
**Classes de remediação:** `DETERMINISTICA`, `PROPOSTA_A_REVISAR`, `NAO_DETERMINADA`. Localização do sintoma não comprova causa raiz.

## 8. Critérios de aceite — testes e oráculos

Os testes `TST-001` a `TST-024` da v1.0 são preservados e ampliados, com novos casos focados na diferença entre instalação, CLI e pertinência por tipo de arquivo. Não representam execução efetuada.

### TST-001

**Entrada/oráculo:** Markdown válido; provedores exigidos executados e PASS.  
**Resultado esperado:** Exit `0`; relatório completo; nenhuma mutação.
**Requisitos verificados:** [FR-018](#fr-018), [FR-020](#fr-020).

### TST-002

**Entrada/oráculo:** MD013 ou outra regra configurada infringida.  
**Resultado esperado:** Exit `1`; arquivo/regra e posição quando fornecida.
**Requisitos verificados:** [FR-005](#fr-005), [FR-007](#fr-007).

### TST-003

**Entrada/oráculo:** Markdown válido, mas arquivo destino inexistente.  
**Resultado esperado:** Exit `1` no verificador de links.
**Requisitos verificados:** [FR-010](#fr-010).

### TST-004

**Entrada/oráculo:** Arquivo existe e fragmento não corresponde ao título.  
**Resultado esperado:** Exit `1`; distinguir `missing-anchor` de `missing-file`.
**Requisitos verificados:** [FR-010](#fr-010).

### TST-005

**Entrada/oráculo:** Vínculo A→B sem recíproca B→A.  
**Resultado esperado:** Exit `1`; ambos os IDs identificados.
**Requisitos verificados:** [FR-011](#fr-011).

### TST-006

**Entrada/oráculo:** Mesma aresta semântica duplicada indevidamente.  
**Resultado esperado:** Exit `1`; não confundir referências repetidas de apresentação.
**Requisitos verificados:** [FR-011](#fr-011), [FR-033](#fr-033).

### TST-007

**Entrada/oráculo:** Pyright disponível; diagnóstico JSON com posição zero-based.  
**Resultado esperado:** Normalização correta para linha/coluna 1-based; exit conforme severidade.
**Requisitos verificados:** [FR-007](#fr-007), [FR-013](#fr-013).

### TST-008

**Entrada/oráculo:** Pylance exigido; ponte VS Code ausente.  
**Resultado esperado:** Exit `2`; causa `PROVIDER_UNAVAILABLE`.
**Requisitos verificados:** [FR-014](#fr-014), [FR-022](#fr-022).

### TST-009

**Entrada/oráculo:** AdocMD Forge exigido; snapshot desatualizado.  
**Resultado esperado:** Exit `2`; não afirmar cobertura completa.
**Requisitos verificados:** [FR-022](#fr-022), [FR-036](#fr-036).

### TST-010

**Entrada/oráculo:** Prettier `--check` aponta apenas arquivo divergente.  
**Resultado esperado:** Exit `1`; não inventar linha/coluna/solução única.
**Requisitos verificados:** [FR-008](#fr-008), [FR-029](#fr-029).

### TST-011

**Entrada/oráculo:** Rust não existe no projeto e não é exigido.  
**Resultado esperado:** `NOT_APPLICABLE`; sem execução, sem falso PASS.
**Requisitos verificados:** [FR-013](#fr-013), [FR-035](#fr-035).

### TST-012

**Entrada/oráculo:** Rust exigido e `cargo` ausente.  
**Resultado esperado:** Exit `2`; sem instalação implícita.
**Requisitos verificados:** [FR-014](#fr-014), [FR-035](#fr-035).

### TST-013

**Entrada/oráculo:** Provedor falha por timeout ou saída não analisável.  
**Resultado esperado:** Exit `2`; preservar erro e evidência.
**Requisitos verificados:** [FR-014](#fr-014), [FR-025](#fr-025).

### TST-014

**Entrada/oráculo:** Arquivo muda durante execução.  
**Resultado esperado:** Exit `2` e `snapshot.stable=false`.
**Requisitos verificados:** [FR-015](#fr-015).

### TST-015

**Entrada/oráculo:** Arquivo com comentário HTML antes/depois.  
**Resultado esperado:** Conteúdo e hash preservados após verificação.
**Requisitos verificados:** [FR-020](#fr-020).

### TST-016

**Entrada/oráculo:** Diagnósticos idênticos em ordem diferente.  
**Resultado esperado:** Mesmo conjunto/códigos e ordenação no relatório normalizado.
**Requisitos verificados:** [FR-007](#fr-007), [FR-017](#fr-017).

### TST-017

**Entrada/oráculo:** Arquivos recém-criados sem git add.  
**Resultado esperado:** Incluídos no escopo `changed`.
**Requisitos verificados:** [FR-002](#fr-002).

### TST-018

**Entrada/oráculo:** Ferramenta exigida ausente e outro provedor detecta erro.  
**Resultado esperado:** Exit `2`; erro conhecido também reportado.
**Requisitos verificados:** [FR-014](#fr-014), [FR-019](#fr-019).

### TST-019

**Entrada/oráculo:** Erro corrigido entre duas rodadas, sem mudança de política.  
**Resultado esperado:** Segunda rodada reflui estado e só retorna `0` se tudo aprovado.
**Requisitos verificados:** [FR-021](#fr-021).

### TST-020

**Entrada/oráculo:** Link de retorno AG↔EV resolvido e IDs estáveis.  
**Resultado esperado:** Zero referências órfãs no subgrafo verificado, preservação de IDs e comentários.
**Requisitos verificados:** [FR-011](#fr-011), [FR-034](#fr-034).

### TST-021

**Entrada/oráculo:** Arquivo fora da raiz via link simbólico ou path traversal.  
**Resultado esperado:** Rejeitar acesso não autorizado, exit `2`.
**Requisitos verificados:** [FR-004](#fr-004).

### TST-022

**Entrada/oráculo:** Campo de diagnóstico ausente (coluna/código).  
**Resultado esperado:** Representar `null`/`not_provided`, sem valor inventado.
**Requisitos verificados:** [FR-008](#fr-008).

### TST-023

**Entrada/oráculo:** Saída de ferramenta contém segredo sintético.  
**Resultado esperado:** Relatório redigido sem vazamento, preservando erro e posição possível.
**Requisitos verificados:** [FR-017](#fr-017).

### TST-024

**Entrada/oráculo:** Falhas pré-existentes no escopo integral.  
**Resultado esperado:** Exit `1`; nenhuma supressão implícita.
**Requisitos verificados:** [FR-018](#fr-018).

### TST-025

**Entrada/oráculo:** Extensão ESLint instalada sem CLI nem projeto JS/TS.  
**Resultado esperado:** NOT_APPLICABLE para Markdown sem dependência; não instalar pacote nem contar PASS.
**Requisitos verificados:** [FR-013](#fr-013), [FR-027](#fr-027).

### TST-026

**Entrada/oráculo:** Projeto JS/TS aplicável, ESLint requerido e CLI ausente.  
**Resultado esperado:** Exit 2, provider_unavailable; nenhum pacote instalado.
**Requisitos verificados:** [FR-014](#fr-014), [FR-027](#fr-027).

### TST-027

**Entrada/oráculo:** Spectral e Redocly instalados como extensões, nenhuma CLI disponível.  
**Resultado esperado:** Registrar instalações separadamente; não executar comando inexistente; se requerido, exit 2.
**Requisitos verificados:** [FR-028](#fr-028), [FR-031](#fr-031).

### TST-028

**Entrada/oráculo:** YAML com erro de esquema no VS Code e sem ponte.  
**Resultado esperado:** Se captura literal requerida, exit 2; não alegar validação por Prettier.
**Requisitos verificados:** [FR-022](#fr-022), [FR-028](#fr-028).

### TST-029

**Entrada/oráculo:** Prettier --check detecta divergência em Markdown configurado.  
**Resultado esperado:** Exit 1, arquivo identificado; linha/coluna nulos quando não fornecidos.
**Requisitos verificados:** [FR-029](#fr-029), [FR-037](#fr-037).

### TST-030

**Entrada/oráculo:** Prettier e markdownlint relatam o mesmo arquivo com regras diferentes.  
**Resultado esperado:** Manter dois diagnósticos com proveniência; não deduplicar por arquivo.
**Requisitos verificados:** [FR-033](#fr-033).

### TST-031

**Entrada/oráculo:** Pyright CLI aponta 1 erro; Pylance VS Code indisponível.  
**Resultado esperado:** Pyright FAIL; Pylance UNAVAILABLE se obrigatório; estado global exit 2.
**Requisitos verificados:** [FR-022](#fr-022), [FR-036](#fr-036).

### TST-032

**Entrada/oráculo:** Ferramentas Rust não constam da lista; nenhum projeto Cargo.toml.  
**Resultado esperado:** NOT_APPLICABLE; nenhuma instalação implícita.
**Requisitos verificados:** [FR-035](#fr-035).

### TST-033

**Entrada/oráculo:** Arquivo .md com link para outro .md não alterado e sem retorno.  
**Resultado esperado:** Expandir verificação ao destino; exit 1 de rastreabilidade.
**Requisitos verificados:** [FR-034](#fr-034), [FR-038](#fr-038).

### TST-034

**Entrada/oráculo:** Extensão 42Crunch presente, requer autenticação e perfil não aprovado.  
**Resultado esperado:** OPTIONAL_SKIPPED/NOT_VERIFIED, sem rede ou credenciais; não bloquear sem requisito.
**Requisitos verificados:** [FR-030](#fr-030).

### TST-035

**Entrada/oráculo:** CLI e extensão markdownlint com versões diferentes.  
**Resultado esperado:** Registrar divergência; só bloquear se paridade for exigida na política.
**Requisitos verificados:** [FR-031](#fr-031), [FR-033](#fr-033).

### TST-036

**Entrada/oráculo:** Ferramenta opcional ausente e checagens obrigatórias aprovadas.  
**Resultado esperado:** Exit 0 possível, com opcional explicitamente NOT_VERIFIED ou OPTIONAL_SKIPPED.
**Requisitos verificados:** [FR-032](#fr-032).

### TST-037

**Entrada/oráculo:** Prov. requerido devolve código 0 mas saída/parser inconclusivos.  
**Resultado esperado:** Exit 2; não transformar ausência de diagnósticos em PASS.
**Requisitos verificados:** [FR-014](#fr-014), [FR-032](#fr-032).

### TST-038

**Entrada/oráculo:** Relatório do inventário de extensões contém IDs de todos os 50 itens recebidos.  
**Resultado esperado:** 50/50 IDs encontrados, 0 nomes inventados, categorias exaustivas e disjuntas.
**Requisitos verificados:** [FR-026](#fr-026).

### TST-039

**Entrada/oráculo:** CLI de JS configurada sem artefatos JS alterados nem dependência documental.  
**Resultado esperado:** NOT_APPLICABLE; sem varredura JS desnecessária.
**Requisitos verificados:** [FR-027](#fr-027), [FR-035](#fr-035).

### TST-040

**Entrada/oráculo:** Arquivo Markdown com bloco de código Rust sem Cargo project.  
**Resultado esperado:** Não executar Clippy por mero bloco fenced; avaliar somente conforme política explicitamente definida.
**Requisitos verificados:** [FR-035](#fr-035).

## 9. Matriz de rastreabilidade bidirecional da especificação

Esta matriz cria vínculos navegáveis entre documentos novos; os IDs dos documentos antigos não são alterados. O retorno da especificação técnica aponta para cada FR/NFR e teste. O documento de negócio aponta para FRs; esta matriz aponta de volta para o BRD.

| Origem (necessidade) | Requisitos cobertos | Testes principais | Projeto técnico |
|---|---|---|---|
| [BR-001](./BRD_URS_Verificador_Qualidade.md#br-001) | [FR-018](#fr-018), [FR-019](#fr-019), [FR-021](#fr-021) | [TST-001](#tst-001), [TST-018](#tst-018), [TST-019](#tst-019) | [TEC-005](./Especificacao_Tecnica_Completa.md#tec-005) |
| [BR-002](./BRD_URS_Verificador_Qualidade.md#br-002) | [FR-011](#fr-011), [FR-020](#fr-020), [FR-034](#fr-034) | [TST-005](#tst-005), [TST-015](#tst-015), [TST-020](#tst-020), [TST-033](#tst-033) | [TEC-004](./Especificacao_Tecnica_Completa.md#tec-004) |
| [BR-003](./BRD_URS_Verificador_Qualidade.md#br-003) | [FR-006](#fr-006), [FR-007](#fr-007), [FR-016](#fr-016), [FR-017](#fr-017) | [TST-007](#tst-007), [TST-016](#tst-016), [TST-022](#tst-022) | [TEC-006](./Especificacao_Tecnica_Completa.md#tec-006) |
| [BR-004](./BRD_URS_Verificador_Qualidade.md#br-004) | [FR-001](#fr-001), [FR-003](#fr-003), [FR-004](#fr-004) | [TST-001](#tst-001), [TST-013](#tst-013) | [TEC-001](./Especificacao_Tecnica_Completa.md#tec-001) |
| [BR-005](./BRD_URS_Verificador_Qualidade.md#br-005) | [FR-014](#fr-014), [FR-015](#fr-015), [FR-022](#fr-022), [FR-032](#fr-032) | [TST-008](#tst-008), [TST-014](#tst-014), [TST-018](#tst-018), [TST-037](#tst-037) | [TEC-005](./Especificacao_Tecnica_Completa.md#tec-005) |
| [BR-006](./BRD_URS_Verificador_Qualidade.md#br-006) | [FR-002](#fr-002), [FR-013](#fr-013), [FR-035](#fr-035) | [TST-011](#tst-011), [TST-032](#tst-032), [TST-039](#tst-039) | [TEC-002](./Especificacao_Tecnica_Completa.md#tec-002) |
| [BR-007](./BRD_URS_Verificador_Qualidade.md#br-007) | [FR-010](#fr-010), [FR-011](#fr-011), [FR-034](#fr-034), [FR-038](#fr-038) | [TST-003](#tst-003), [TST-004](#tst-004), [TST-005](#tst-005), [TST-033](#tst-033) | [TEC-004](./Especificacao_Tecnica_Completa.md#tec-004) |
| [BR-008](./BRD_URS_Verificador_Qualidade.md#br-008) | [FR-008](#fr-008), [FR-009](#fr-009), [FR-023](#fr-023) | [TST-010](#tst-010), [TST-022](#tst-022) | [TEC-006](./Especificacao_Tecnica_Completa.md#tec-006) |
| [BR-009](./BRD_URS_Verificador_Qualidade.md#br-009) | [FR-017](#fr-017), [FR-020](#fr-020) | [TST-015](#tst-015), [TST-023](#tst-023) | [TEC-007](./Especificacao_Tecnica_Completa.md#tec-007) |
| [BR-010](./BRD_URS_Verificador_Qualidade.md#br-010) | [FR-022](#fr-022), [FR-026](#fr-026), [FR-036](#fr-036) | [TST-008](#tst-008), [TST-009](#tst-009), [TST-028](#tst-028) | [TEC-003](./Especificacao_Tecnica_Completa.md#tec-003) |
| [BR-011](./BRD_URS_Verificador_Qualidade.md#br-011) | [FR-012](#fr-012), [FR-033](#fr-033) | [TST-006](#tst-006), [TST-030](#tst-030) | [TEC-004](./Especificacao_Tecnica_Completa.md#tec-004) |
| [BR-012](./BRD_URS_Verificador_Qualidade.md#br-012) | [FR-004](#fr-004), [FR-031](#fr-031), [FR-037](#fr-037) | [TST-012](#tst-012), [TST-026](#tst-026), [TST-036](#tst-036) | [TEC-007](./Especificacao_Tecnica_Completa.md#tec-007) |

**Verificação de cobertura documental:** todos os IDs FR/NFR/TST da v1.0 permanecem identificáveis; cada requisito novo tem justificativa em DELTA-01..08 e pelo menos um caso de teste aplicável no conjunto; a reciprocidade de arquivos novos é verificável pela navegação Markdown (ainda não homologada no VS Code do usuário).

## 10. Incertezas, riscos e decisões humanas

| Código | Tema | Estado | Efeito sobre implementação |
|---|---|---|---|
| DH-01 | Captura literal de Problems ou equivalentes CLI | DECISÃO_HUMANA | Ponte VS Code é requisito condicional, não ferramenta presumida |
| DH-02 | Escopo padrão `changed`/`all` e raízes dependentes | DECISÃO_HUMANA | Define quantidade de arquivos e alcance do DONE |
| DH-03 | Severidade de warnings e conflito Prettier/markdownlint | DECISÃO_HUMANA | Define quais avisos bloqueiam retorno `0` |
| NV-01 | Executáveis disponíveis no WSL | NÃO VERIFICADO | Exige descoberta read-only antes de implementar perfis |
| NV-02 | Versões e configurações efetivas no VS Code após lista | NÃO VERIFICADO | Lista comprova versões declaradas, não resultado de ferramenta |
| NV-03 | Funcionamento de bridge/validador de links atual | NÃO VERIFICADO | Teste antes de usar como oráculo de aceite |

**Que novos problemas pode criar?** Configuração concorrente entre linters, falsos positivos de links, diagnóstico stale no VS Code, execução desnecessária de linters de outra linguagem, gasto de instalação acidental, alteração de vínculos por auto-fix. **Controles:** catálogo explícito; escopo restrito e justificado; check read-only; compare hashes; teste de regressão bidirecional; `exit 2` para cobertura obrigatória incerta.

## 11. Critérios de conclusão e escopo de validação desta versão

- [x] Baseline documental FR 25/NFR 11/TST 24 preservada nos respectivos IDs.
- [x] Lista fornecida de 50 extensões inventariada, com classes funcionais e limites.
- [x] Diferenças v1.0/v2.0 relacionadas a ferramentas adicionadas na lista documentadas.
- [x] Ferramentas externas presentes na FRS mas não na lista distinguidas de extensões instaladas.
- [x] Fontes oficiais linkadas e separadas dos dados informados pelo usuário.
- [ ] Script e testes executados em `~/selecao-brasileira` — NÃO REALIZADO.
- [ ] Implementação da ponte VS Code — NÃO REALIZADA; depende de DH-01.
- [ ] Homologação do gate pelo responsável — NÃO REALIZADA.

**Classificação:** SUSTENTADO INTEGRALMENTE para confronto textual dos 50 IDs e preservação de IDs de requisitos; SUSTENTADO PARCIALMENTE para capacidades técnicas (documentadas, não executadas); NÃO VERIFICADO para integração operacional.
