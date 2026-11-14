---
documento_id: TST-CASE-005
tipo: caso-teste
status: bloqueado
caminho_canonico: testes/casos/TST-CASE-005.md
versao: 1.0.0
---

# TST-CASE-005 — Integridade do grupo

## Contrato do documento

| Propriedade | Definição |
| --- | --- |
| Papel | especificar validações estruturais do cadastro textual do grupo |
| Objetivo | detectar totais divergentes, título malformado, ID não registrado e nome duplicado entre estados |
| Escopo | seção `Relação de Atletas por Clube` de `grupo-whatsapp.md` |
| Caminho canônico | `testes/casos/TST-CASE-005.md` |
| Autoridade | detecta divergências; não autoriza decidir vínculo esportivo ou apagar atleta |
| Contexto mínimo | caso, documento do grupo e decisão sobre qualquer duplicidade encontrada |
| Dependências | fonte humana autorizada para correção semântica |
| Restrições | nenhuma correção factual automática |
| Riscos mitigados | total decorativo, pessoa em estados incompatíveis e falso ID |

## Especificação executável

| Campo | Valor |
| --- | --- |
| ID | `TST-CASE-005` |
| Estado | `bloqueado` por decisão humana sobre a duplicidade de Nicolle |
| Requisito | `TST-REQ-005` |
| Decisão | `TST-DEC-005` |
| Finalidade | provar coerência observável da lista final |
| Objeto | títulos quantificados e itens de atleta |
| Pré-condições | estrutura Markdown legível |
| Configuração | `TST-CFG-001` |
| Entrada | `grupo-whatsapp.md` |
| Procedimento | validar título; contar itens até próximo título; normalizar nome; detectar repetição; procurar IDs legados |
| Oráculo | número declarado igual à contagem e nome exato presente em um único estado |
| Esperado | zero divergência, duplicata ou código `[A-Z][0-9]{2}` |
| PASS | todas as propriedades satisfeitas |
| FAIL | título malformado, total diferente, nome repetido ou código legado |
| Falso positivo | homônimos distintos serem tratados como a mesma pessoa |
| Controle positivo | falha por nome idêntico é encaminhada à revisão humana, sem fusão automática |
| Falso negativo | variação ortográfica esconder duplicidade |
| Controle negativo | registrar limitação; resolução semântica permanece humana |
| Sucesso | seção com total exato e nomes únicos |
| Borda | seção sem total é permitida apenas como agrupador sem itens diretos |
| Falha esperada | Niterói `6` com sete itens e `A confirmar` `19` com 26 itens |
| Vínculo inverso | matriz: `TST-REQ-005` e `TST-DEC-005` retornam para este caso |
