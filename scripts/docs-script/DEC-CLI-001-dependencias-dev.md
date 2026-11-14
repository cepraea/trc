---
documento_id: DEC-CLI-001
tipo: decisao
status: implantado
caminho_canonico: scripts/docs-script/DEC-CLI-001-dependencias-dev.md
versao: 1.1.0
data: '2026-11-14'
implantado_em: '2026-11-14T18:45:00-03:00'
autoridade: usuario-davi-sermenho
---

# DEC-CLI-001 — Instalação de markdownlint-cli2 e prettier como dependências de desenvolvimento

## Contrato do documento

| Propriedade      | Definição                                                                                                                                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Papel            | registrar a decisão humana que autoriza a instalação de `markdownlint-cli2` e `prettier` como dependências de desenvolvimento do projeto                                                                          |
| Objetivo         | permitir que o orquestrador Python do gate ([TEC-001](./Especificacao_Tecnica_Completa.md#tec-001)) invoque esses executáveis sem depender da ponte VS Code para cobertura de Markdown                            |
| Escopo           | repositório `selecao-brasileira`; dependências de desenvolvimento (`devDependencies`) no `package.json` do projeto                                                                                                |
| Caminho canônico | `scripts/docs-script/DEC-CLI-001-dependencias-dev.md`                                                                                                                                                             |
| Autoridade       | decisão tomada por `davi.sermenho@gmail.com` em 2026-11-14; agentes não podem revogar ou ampliar esta decisão                                                                                                     |
| Contexto mínimo  | este documento, [INV-CLI-001](./INV-CLI-001-disponibilidade.md#inv-cli-001) e [BRD/URS](./BRD_URS_Verificador_Qualidade.md#brd-root)                                                                              |
| Dependências     | investigação [INV-CLI-001](./INV-CLI-001-disponibilidade.md#inv-cli-001); requisito [BR-012](./BRD_URS_Verificador_Qualidade.md#br-012); [FR-031](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-031) |
| Restrições       | instalação limitada a `devDependencies`; proibido instalar globalmente sem nova decisão; `--save-prod` proibido; rede de download necessária na etapa de instalação, não na execução do gate                      |
| Riscos mitigados | gate sem cobertura de Markdown por ausência de CLI; falso PASS por ferramenta inexistente                                                                                                                         |

## DEC-CLI-001

## 1. Problema que esta decisão resolve

A investigação [INV-CLI-001](./INV-CLI-001-disponibilidade.md#inv-cli-001)
demonstrou, por execução real no ambiente WSL em 2026-11-14, que:

1. `markdownlint-cli2` não está instalada no `PATH` do ambiente.
2. `prettier` não está instalada no `PATH` do ambiente.
3. `npx` está bloqueado por sistema de arquivos somente-leitura (EROFS),
   impedindo instalação dinâmica.
4. O AdocMD Forge (`validateLinks`) não tem CLI — é exclusivamente um comando VS
   Code.
5. `pyright@1.1.413` e `@redocly/cli@2.30.3` já estão instalados globalmente via
   `nvm`.

Sem `markdownlint-cli2`, o gate de qualidade documental não possui ferramenta
CLI para lint de Markdown, que é o tipo de arquivo primário deste repositório. O
requisito [BR-004](./BRD_URS_Verificador_Qualidade.md#br-004) ("um ponto de
entrada em Python, sem APIs pagas") e o
[FR-031](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-031)
("comprovar disponibilidade do executável antes de executar") não podem ser
satisfeitos sem essa CLI.

## 2. Alternativas consideradas

| Alternativa                                     | Descrição                                                                     | Razão para rejeitar                                                                                                   |
| ----------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| A — Ponte VS Code (DH-01 Opção B)               | Usar extensão-ponte para capturar diagnósticos do editor                      | Complexidade maior; requer editor aberto; snapshot pode ficar obsoleto; não resolve ausência de CLI para markdownlint |
| B — Instalar globalmente via `nvm`              | `npm install -g markdownlint-cli2 prettier`                                   | Altera o ambiente global compartilhado; não rastreável no projeto; fora do escopo de `devDependencies`                |
| C — `devDependencies` no projeto (esta decisão) | `npm install --save-dev markdownlint-cli2 prettier` cria `package.json` local | Rastreável no repositório; isolado ao projeto; executáveis em `node_modules/.bin/` acessíveis ao orquestrador         |
| D — Aguardar indefinidamente                    | Manter gate sem cobertura de Markdown                                         | Viola BR-001 (DONE comprovável) e BR-005 (nenhum sucesso falso)                                                       |

## 3. Decisão autorizada

**O usuário autoriza:**

1. Criar `package.json` na raiz do repositório com `devDependencies` para:
   - `markdownlint-cli2` (versão estável mais recente disponível na instalação)
   - `prettier` (versão estável mais recente disponível na instalação)

2. Executar `npm install --save-dev` uma única vez, mediante acesso de escrita
   ao `node_modules/` local, fora do ambiente sandbox onde EROFS impede o cache
   do npm.

3. O orquestrador Python deve invocar os executáveis via caminho local
   (`./node_modules/.bin/markdownlint-cli2` e `./node_modules/.bin/prettier`) ou
   verificar `PATH` expandido com `node_modules/.bin/`, **nunca** via `npx` em
   tempo de execução do gate.

4. `node_modules/` deve ser adicionado ao `.gitignore` (já presente no estado
   atual do repositório).

**O usuário NÃO autoriza:**

- Instalação global (`npm install -g`) sem nova decisão explícita.
- Uso de `npx` como mecanismo de invocação no gate (viola FR-004: sem instalação
  implícita).
- Instalação de qualquer outro pacote npm não listado nesta decisão.
- Uso de `--fix`, `--write` ou `--auto-fix` pelos linters no gate (viola
  FR-037).

## 4. Justificativa técnica

**Por que `devDependencies` é a abordagem correta:**

- Rastreabilidade: `package.json` versionado no repositório documenta a
  dependência de forma auditável.
- Isolamento: `node_modules/` local não afeta outros projetos no ambiente.
- Reprodutibilidade: outro desenvolvedor que clonar o repositório executa
  `npm install` e obtém as mesmas versões.
- Compatibilidade com BR-012 ("não instalar dependências sem autorização"): esta
  decisão é a autorização.
- Compatibilidade com NFR-007 ("nenhuma chamada de API paga, download ou
  instalação automática"): a instalação é manual, única e pré-autorizda; o gate
  em si nunca instala.

**Por que markdownlint-cli2 (e não markdownlint):**

A extensão `davidanson.vscode-markdownlint@0.62.1` utiliza internamente o mesmo
motor que `markdownlint-cli2`. A
[documentação oficial](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
(fonte EXT-15 da FRS/SyRS v2.0) confirma paridade de comportamento quando ambos
usam a mesma configuração. `markdownlint-cli2` é a CLI de segunda geração
recomendada para uso programático.

**Por que prettier:**

A extensão `esbenp.prettier-vscode@12.4.0` usa a CLI `prettier` como backend. Ao
compartilhar a mesma instalação (`./node_modules/.bin/prettier`), o gate
reproduz exatamente o comportamento da extensão, satisfazendo o requisito de
paridade
([NFR-012](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#nfr-012)).

## 5. Impacto no estado das decisões DH-*

| Decisão                          | Estado antes | Estado depois desta decisão                                                                                                               |
| -------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| DH-01 (ponte VS Code ou CLIs?)   | ABERTA       | **PARCIALMENTE FECHADA**: CLIs disponíveis para markdownlint e prettier; AdocMD Forge permanece somente via ponte (opcional, condicional) |
| DH-02 (escopo changed/all?)      | ABERTA       | Não alterada                                                                                                                              |
| DH-03 (severidades bloqueantes?) | ABERTA       | Não alterada; pré-condição de disponibilidade de CLI agora satisfeita                                                                     |

## 6. Cadeia de rastreabilidade

| Elemento                   | Referência                                                                                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Investigação de origem     | [INV-CLI-001](./INV-CLI-001-disponibilidade.md#inv-cli-001)                                                                                            |
| Requisito de negócio       | [BR-004](./BRD_URS_Verificador_Qualidade.md#br-004), [BR-012](./BRD_URS_Verificador_Qualidade.md#br-012)                                               |
| Requisito funcional        | [FR-031](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-031), [FR-005](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-005)     |
| Requisito não-funcional    | [NFR-007](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#nfr-007), [NFR-012](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#nfr-012) |
| Componente técnico afetado | [TEC-003](./Especificacao_Tecnica_Completa.md#tec-003) (registro e ativação de provedores)                                                             |

## 7. Critério de conclusão (DONE)

- [x] `package.json` criado na raiz com `devDependencies` para
      `markdownlint-cli2` e `prettier`.
- [x] `npm install` executado com saída `0` e
      `node_modules/.bin/markdownlint-cli2` acessível.
- [x] `npm install` executado com saída `0` e `node_modules/.bin/prettier`
      acessível.
- [x] `node_modules/` confirmado no `.gitignore`.
- [x] `markdownlint-cli2 --version` e `prettier --version` executados e versões
      registradas.
- [x] FR-031 satisfeito: executável comprovado antes do primeiro uso no gate.

**DONE desta decisão:** SUSTENTADO INTEGRALMENTE — todos os critérios
satisfeitos em 2026-11-14.

## 8. Evidência de implantação

| Campo                                | Valor                                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Executor                             | usuário `davis` no terminal integrado do VS Code                                                       |
| Comando                              | `npm install --save-dev markdownlint-cli2 prettier`                                                    |
| Data e hora                          | `2026-11-14T18:45:00-03:00` (aproximado)                                                               |
| Saída do npm                         | `added 89 packages in 5s` / exit `0`                                                                   |
| Versão instalada — markdownlint-cli2 | `v0.24.1` (markdownlint `v0.42.1`)                                                                     |
| Versão instalada — prettier          | `3.10.1`                                                                                               |
| Executável verificado                | `./node_modules/.bin/markdownlint-cli2 --version` → `markdownlint-cli2 v0.24.1`                        |
| Executável verificado                | `./node_modules/.bin/prettier --version` → `3.10.1`                                                    |
| `.gitignore` atualizado              | `node_modules/` adicionado por agente em 2026-11-14                                                    |
| Teste de fumaça                      | `./node_modules/.bin/markdownlint-cli2 AGENTS.md` → 42 issues (MD013); exit `0` (ferramenta funcional) |
| `package.json` resultante            | `{"devDependencies": {"markdownlint-cli2": "^0.24.1", "prettier": "^3.10.1"}}`                         |
| FR-031                               | PASS — executável localizado e versão obtida antes de qualquer uso pelo gate                           |
