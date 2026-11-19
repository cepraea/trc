---
documento_id: TST-CASE-004
tipo: caso-teste
versao: 1.0.0
caminho_canonico: testes/casos/TST-CASE-004.md
criado_em: 2026-11-14
atualizado_em: 2026-11-15
fase_documento: draft
status_aprovacao: revisao
status_implementacao: implementado
---

# TST-CASE-004 — Preservação de comentários HTML

## Contrato do documento

| Propriedade      | Definição                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| Papel            | especificar regressão byte a byte dos comentários HTML existentes                                |
| Objetivo         | impedir remoção ou alteração silenciosa dos comentários protegidos                               |
| Escopo           | blocos HTML existentes em `rastreabilidade-tecnica.md` na linha de base                          |
| Caminho canônico | `testes/casos/TST-CASE-004.md`                                                                   |
| Autoridade       | define baseline e comparação; não autoriza editar comentários                                    |
| Contexto mínimo  | caso, baseline e arquivo técnico                                                                 |
| Dependências     | `TST-CFG-001-BASELINE`                                                                           |
| Restrições       | comentários novos são permitidos, mas não podem alterar a sequência protegida sem decisão humana |
| Riscos mitigados | exclusão, edição ou normalização invisível de comentário                                         |

## Especificação executável

| Campo             | Valor                                                                                |
| ----------------- | ------------------------------------------------------------------------------------ |
| ID                | `TST-CASE-004`                                                                       |
| Estado            | `green_desenvolvimento`                                                              |
| Requisito         | `TST-REQ-004`                                                                        |
| Decisão           | `TST-DEC-004`                                                                        |
| Finalidade        | demonstrar preservação exata dos comentários existentes                              |
| Objeto            | extração ordenada entre `<!--` e `-->`                                               |
| Pré-condições     | baseline com contagem e SHA-256                                                      |
| Configuração      | `TST-CFG-001` e baseline associado                                                   |
| Entrada           | `rastreabilidade-tecnica.md`                                                         |
| Procedimento      | extrair comentários; contar aberturas; calcular SHA-256; comparar                    |
| Oráculo           | valores capturados antes das correções                                               |
| Esperado          | 9 blocos e hash `3d587570...d64db6a`                                                 |
| PASS              | contagem e hash idênticos                                                            |
| FAIL              | qualquer divergência                                                                 |
| Falso positivo    | comentários diferentes produzirem mesma contagem                                     |
| Controle positivo | combinar contagem com SHA-256                                                        |
| Falso negativo    | mudança de fim de linha pelo ambiente                                                |
| Controle negativo | configuração fixa locale; comparação no mesmo workspace e revisão da política de EOL |
| Sucesso           | extração idêntica                                                                    |
| Borda             | texto visível entre comentários não altera hash                                      |
| Falha esperada    | mudar um caractere dentro de comentário                                              |
| Vínculo inverso   | matriz: `TST-REQ-004` e `TST-DEC-004` retornam para este caso                        |
