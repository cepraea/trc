---
documento_id: TST-CASE-003
tipo: caso-teste
status: green-desenvolvimento
caminho_canonico: testes/casos/TST-CASE-003.md
versao: 1.0.0
---

# TST-CASE-003 — Árvore e rotas de contexto

## Contrato do documento

| Propriedade | Definição |
| --- | --- |
| Papel | especificar a comparação entre árvore real, catálogo e rotas mínimas |
| Objetivo | permitir auditoria completa sem carregar contexto irrelevante |
| Escopo | arquivos permanentes gerenciados, excluindo `.git`, diretórios de agente, `tmp` e evidências dinâmicas |
| Caminho canônico | `testes/casos/TST-CASE-003.md` |
| Autoridade | define a comparação de conjuntos para mapa do repositório |
| Contexto mínimo | caso, matriz, configuração e catálogo esperado |
| Dependências | mapa canônico ainda a implementar |
| Restrições | não exigir que cada execução dinâmica seja enumerada na árvore estática |
| Riscos mitigados | arquivo invisível à auditoria e leitura excessiva de contexto |

## Especificação executável

| Campo | Valor |
| --- | --- |
| ID | `TST-CASE-003` |
| Estado | `green_desenvolvimento` |
| Requisito | `TST-REQ-003` |
| Decisão | `TST-DEC-003` |
| Finalidade | provar correspondência entre estrutura real e documentada |
| Objeto | seção de árvore e tabela de rotas do mapa canônico |
| Pré-condições | inventário de arquivos disponível |
| Configuração | `TST-CFG-001` |
| Entrada | arquivos permanentes e `mapa-repositorio.md` |
| Procedimento | comparar conjuntos; verificar rota para documentação, dados, testes e scripts |
| Oráculo | igualdade entre inventário filtrado e caminhos declarados, mais quatro rotas obrigatórias |
| Esperado | nenhuma ausência ou sobra e todas as rotas presentes |
| PASS | conjuntos iguais e rotas completas |
| FAIL | mapa ausente, caminho omitido, caminho inexistente ou rota ausente |
| Falso positivo | texto citar caminho fora da árvore e satisfazer busca simples |
| Controle positivo | extrair somente tabela canônica delimitada |
| Falso negativo | evidência dinâmica legítima surgir depois do mapa |
| Controle negativo | excluir diretórios dinâmicos por regra explícita |
| Sucesso | caminho real aparece uma vez no catálogo |
| Borda | diretório vazio é declarado como categoria, não como arquivo |
| Falha esperada | novo arquivo permanente não catalogado |
| Vínculo inverso | matriz: `TST-REQ-003` e `TST-DEC-003` retornam para este caso |
