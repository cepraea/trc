---
documento_id: TST-DEF-001
tipo: defeito-teste
versao: 1.0.0
caminho_canonico: testes/defeitos/TST-DEF-001.md
criado_em: 2026-11-14
atualizado_em: 2026-11-15
fase_documento: final
status_aprovacao: revisao
status_implementacao: implementado
---

# TST-DEF-001 — Falso negativo na detecção dos hashes

## Contrato do documento

| Propriedade      | Definição                                                                   |
| ---------------- | --------------------------------------------------------------------------- |
| Papel            | registrar e controlar um falso negativo do `TST-CASE-008`                   |
| Objetivo         | impedir alteração silenciosa do teste para esconder uma falha               |
| Escopo           | detecção do campo ou seção de hashes em registros `TST-RUN-*`               |
| Caminho canônico | `testes/defeitos/TST-DEF-001.md`                                            |
| Autoridade       | autoriza corrigir somente o detector descrito; não concede aceite           |
| Contexto mínimo  | este defeito, caso `TST-CASE-008`, execução 002 e registro 001              |
| Dependências     | governança e evidência `TST-EVD-20261113-002-001`                           |
| Restrições       | não editar o registro Red fechado; manter exigência de hashes não vazios    |
| Riscos mitigados | mascaramento de falha, reescrita histórica e detector excessivamente rígido |

## Diagnóstico

| Campo                 | Valor                                                                        |
| --------------------- | ---------------------------------------------------------------------------- |
| Defeito               | `TST-DEF-001`                                                                |
| Execução de origem    | `TST-RUN-20261113-002`                                                       |
| Caso                  | `TST-CASE-008`                                                               |
| Observado             | o detector relatou ausência de `Hashes dos objetos`                          |
| Esperado              | aceitar a seção `## Hashes dos objetos` contendo tabela não vazia            |
| Causa                 | implementação procurava apenas a linha `Hashes dos objetos`                  |
| Classificação         | falso negativo do teste                                                      |
| Impacto               | Green global bloqueado por motivo diferente do requisito                     |
| Correção autorizada   | aceitar campo canônico ou seção canônica e exigir ao menos uma linha de hash |
| Regressão obrigatória | registro sem campo e sem seção continua falhando                             |
| Estado                | fechado por `TST-RUN-20261113-003`, no qual `TST-CASE-008` passou            |
