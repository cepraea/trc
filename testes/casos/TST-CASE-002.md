---
documento_id: TST-CASE-002
tipo: caso-teste
status: green-desenvolvimento
caminho_canonico: testes/casos/TST-CASE-002.md
versao: 1.0.0
---

# TST-CASE-002 — Links internos cirúrgicos

## Contrato do documento

| Propriedade | Definição |
| --- | --- |
| Papel | especificar o teste de destinos internos específicos |
| Objetivo | impedir links ativos que abram apenas o arquivo inteiro |
| Escopo | links Markdown relativos para `.md` e `.sh` fora de blocos de código |
| Caminho canônico | `testes/casos/TST-CASE-002.md` |
| Autoridade | define o detector de links genéricos; aceite continua independente |
| Contexto mínimo | este caso, `TST-REQ-002`, `TST-DEC-002` e configuração |
| Dependências | sintaxe Markdown e âncoras compatíveis com VS Code |
| Restrições | não tratar exemplo em bloco de código como link ativo |
| Riscos mitigados | navegação genérica, falso destino e auditoria não cirúrgica |

## Especificação executável

| Campo | Valor |
| --- | --- |
| ID | `TST-CASE-002` |
| Estado | `green_desenvolvimento` |
| Requisito | `TST-REQ-002` |
| Decisão | `TST-DEC-002` |
| Finalidade | provar que cada link local contém localização específica |
| Objeto | destino de cada link Markdown interno ativo |
| Pré-condições | Markdown legível; blocos cercados reconhecíveis |
| Configuração | `TST-CFG-001` |
| Entrada | todos os documentos gerenciados |
| Procedimento | ignorar blocos cercados; extrair links relativos; exigir fragmento não vazio |
| Oráculo | regra 3.4 de `AGENTS.md` materializada por ausência de destino local sem `#` |
| Esperado | zero link interno genérico |
| PASS | toda referência interna ativa aponta para fragmento específico |
| FAIL | ao menos um destino `.md` ou `.sh` sem fragmento |
| Falso positivo | exemplo literal em bloco de código ser interpretado como navegação |
| Controle positivo | rastrear estado dentro/fora de cerca de código |
| Falso negativo | múltiplos links na mesma linha não serem todos analisados |
| Controle negativo | iterar todas as ocorrências da linha |
| Sucesso | link `arquivo.md#secao` |
| Borda | link externo ou texto em bloco de código não entra no escopo |
| Falha esperada | link `arquivo.md` sem fragmento |
| Vínculo inverso | matriz: `TST-REQ-002` e `TST-DEC-002` retornam para este caso |
