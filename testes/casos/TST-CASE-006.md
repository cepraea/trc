---
documento_id: TST-CASE-006
tipo: caso-teste
status: green-desenvolvimento
caminho_canonico: testes/casos/TST-CASE-006.md
versao: 1.0.0
---

# TST-CASE-006 — Preservação das unidades WA

## Contrato do documento

| Propriedade | Definição |
| --- | --- |
| Papel | especificar regressão dos IDs e âncoras publicados |
| Objetivo | impedir que o alinhamento documental quebre unidades antigas |
| Escopo | títulos e campos `ID da conversa` e `ID da mensagem` |
| Caminho canônico | `testes/casos/TST-CASE-006.md` |
| Autoridade | protege unidades existentes; mudança exige decisão anterior específica |
| Contexto mínimo | caso, baseline e fonte de mensagens |
| Dependências | `TST-CFG-001-BASELINE` |
| Restrições | não renumerar, reutilizar ou normalizar IDs publicados |
| Riscos mitigados | quebra de links e perda de identidade histórica |

## Especificação executável

| Campo | Valor |
| --- | --- |
| ID | `TST-CASE-006` |
| Estado | `green_desenvolvimento` |
| Requisito | `TST-REQ-006` |
| Decisão | `TST-DEC-006` |
| Finalidade | demonstrar que a intervenção não alterou IDs antigos |
| Objeto | linhas de títulos `WA-*` e campos de ID |
| Pré-condições | hashes anteriores disponíveis |
| Configuração | `TST-CFG-001` e baseline associado |
| Entrada | `mensagens-treinadores.md` |
| Procedimento | extrair conjuntos ordenados e comparar SHA-256 |
| Oráculo | hashes capturados antes das correções |
| Esperado | hashes iguais aos valores do baseline |
| PASS | ambos os hashes coincidem |
| FAIL | qualquer diferença de valor, ordem, presença ou duplicação |
| Falso positivo | alteração fora das linhas protegidas passar |
| Controle positivo | escopo corresponde exatamente ao requisito de preservação de IDs |
| Falso negativo | mudança legítima autorizada ser bloqueada |
| Controle negativo | criar nova decisão e baseline versionado antes de mudança legítima |
| Sucesso | edição documental sem tocar IDs |
| Borda | inclusão textual fora das unidades não muda hash |
| Falha esperada | renumerar uma mensagem |
| Vínculo inverso | matriz: `TST-REQ-006` e `TST-DEC-006` retornam para este caso |
