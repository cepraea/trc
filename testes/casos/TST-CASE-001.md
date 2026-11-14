---
documento_id: TST-CASE-001
tipo: caso-teste
status: green-desenvolvimento
caminho_canonico: testes/casos/TST-CASE-001.md
versao: 1.0.0
---

# TST-CASE-001 — Contratos documentais

## Contrato do documento

| Propriedade | Definição |
| --- | --- |
| Papel | especificar o teste determinístico de contratos documentais |
| Objetivo | provar que cada documento gerenciado fornece contexto e regras de manutenção suficientes |
| Escopo | Markdown versionado, exceto `AGENTS.md`, evidências geradas e conteúdo temporário |
| Caminho canônico | `testes/casos/TST-CASE-001.md` |
| Autoridade | orienta a implementação do caso, mas não concede aceite ao próprio autor |
| Contexto mínimo | este caso, `TST-REQ-001`, `TST-DEC-001` e `TST-CFG-001` |
| Dependências | matriz canônica, governança e inventário de documentos |
| Restrições | não editar `AGENTS.md`; não inferir contrato apenas do frontmatter |
| Riscos mitigados | documento sem propósito, autoridade, contexto, dependência ou risco explícito |

## Especificação executável

| Campo | Valor |
| --- | --- |
| ID | `TST-CASE-001` |
| Estado | `green_desenvolvimento` |
| Requisito | `TST-REQ-001` |
| Decisão | `TST-DEC-001` |
| Finalidade | tornar verificável o requisito individual de cada documento |
| Objeto | seção `Contrato do documento` de cada Markdown gerenciado |
| Pré-condições | arquivos legíveis; configuração carregada; inventário determinístico |
| Configuração | `TST-CFG-001` |
| Entrada | conjunto de Markdown fora de `.git`, `tmp` e diretórios de evidência |
| Procedimento | localizar contrato e conferir as nove propriedades canônicas |
| Oráculo | lista normativa de propriedades em `TST-REQ-001` e decisão `TST-DEC-001` |
| Esperado | zero documento sem contrato ou propriedade |
| PASS | todos os documentos aplicáveis possuem exatamente um contrato e todas as propriedades |
| FAIL | contrato ausente, repetido ou incompleto |
| Falso positivo | palavras semelhantes fora da tabela poderiam ser contadas |
| Controle positivo | exigir linhas canônicas `| Propriedade | Definição |` e `| <campo> |` dentro da seção |
| Falso negativo | documento de autoridade imutável seria cobrado embora o agente não possa editá-lo |
| Controle negativo | exceção explícita e única para `AGENTS.md` |
| Sucesso | documento completo |
| Borda | documento com frontmatter completo, mas sem contrato visível, deve falhar |
| Falha esperada | documento sem `Caminho canônico` deve falhar |
| Vínculo inverso | matriz: `TST-REQ-001` e `TST-DEC-001` retornam para este caso |
