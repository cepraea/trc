---
documento_id: TST-CASE-008
tipo: caso-teste
versao: 1.0.0
caminho_canonico: testes/casos/TST-CASE-008.md
criado_em: 2026-11-14
atualizado_em: 2026-11-15
fase_documento: draft
status_aprovacao: revisao
status_implementacao: implementado
---

# TST-CASE-008 — Registros de execução

## Contrato do documento

| Propriedade      | Definição                                                                 |
| ---------------- | ------------------------------------------------------------------------- |
| Papel            | especificar a completude de cada registro novo de execução                |
| Objetivo         | impedir resultado sem configuração, evidência, hash, fase ou executor     |
| Escopo           | arquivos `TST-RUN-*` criados sob `testes/execucoes`                       |
| Caminho canônico | `testes/casos/TST-CASE-008.md`                                            |
| Autoridade       | define campos mínimos; não permite ao autor emitir validação independente |
| Contexto mínimo  | caso, governança e registro avaliado                                      |
| Dependências     | esquema da seção `Esquema do registro de execução` da governança          |
| Restrições       | registro fechado não é reescrito; correção cria sucessor                  |
| Riscos mitigados | execução irreproduzível, resultado inventado e evidência desconectada     |

## Especificação executável

| Campo             | Valor                                                                         |
| ----------------- | ----------------------------------------------------------------------------- |
| ID                | `TST-CASE-008`                                                                |
| Estado            | `green_desenvolvimento`                                                       |
| Requisito         | `TST-REQ-008`                                                                 |
| Decisão           | `TST-DEC-008`                                                                 |
| Finalidade        | provar que cada execução é auditável e reproduzível                           |
| Objeto            | contrato e campos de `TST-RUN-*`                                              |
| Pré-condições     | ao menos um registro de execução existe                                       |
| Configuração      | `TST-CFG-001`                                                                 |
| Entrada           | diretório `testes/execucoes`                                                  |
| Procedimento      | enumerar registros; conferir contrato, campos, evidências existentes e hashes |
| Oráculo           | esquema obrigatório da governança                                             |
| Esperado          | zero registro incompleto ou referência órfã                                   |
| PASS              | todos os registros possuem campos e destinos válidos                          |
| FAIL              | nenhum registro ou qualquer campo, evidência ou hash ausente                  |
| Falso positivo    | campo vazio satisfazer presença textual                                       |
| Controle positivo | exigir valor não vazio e formato por campo                                    |
| Falso negativo    | primeira execução não possuir hash anterior                                   |
| Controle negativo | primeiro registro usa literal controlado `GENESIS`                            |
| Sucesso           | registro completo com evidência existente                                     |
| Borda             | primeira execução aceita `GENESIS`, nunca ausência                            |
| Falha esperada    | resultado sem saída obtida ou evidência                                       |
| Vínculo inverso   | matriz: `TST-REQ-008` e `TST-DEC-008` retornam para este caso                 |
