---
documento_id: TST-CASE-007
tipo: caso-teste
status: green-desenvolvimento
caminho_canonico: testes/casos/TST-CASE-007.md
versao: 1.0.0
---

# TST-CASE-007 — Quarentena da automação legada

## Contrato do documento

| Propriedade | Definição |
| --- | --- |
| Papel | especificar a retirada da suíte antiga do processo de aceite |
| Objetivo | impedir que resultado legado seja confundido com evidência válida |
| Escopo | dois scripts legados e afirmações normativas ou técnicas sobre aprovação |
| Caminho canônico | `testes/casos/TST-CASE-007.md` |
| Autoridade | proíbe uso para aceite, preservando inventário para migração |
| Contexto mínimo | banners dos scripts e estado declarado na norma e documento técnico |
| Dependências | governança, seção `Estado da automação anterior` |
| Restrições | não apagar cenários antes da migração rastreável |
| Riscos mitigados | falso aceite, perda de cenário histórico e TDD retroativo |

## Especificação executável

| Campo | Valor |
| --- | --- |
| ID | `TST-CASE-007` |
| Estado | `green_desenvolvimento` |
| Requisito | `TST-REQ-007` |
| Decisão | `TST-DEC-007` |
| Finalidade | tornar inequívoco que o legado não valida o estado atual |
| Objeto | cabeçalho dos scripts e afirmações de estado nos documentos |
| Pré-condições | arquivos preservados e legíveis |
| Configuração | `TST-CFG-001` |
| Entrada | scripts, norma e documento técnico |
| Procedimento | exigir banner; rejeitar frases que declarem 22 testes aprovados ou gate legado vigente |
| Oráculo | estado `legado-invalido` definido pela governança |
| Esperado | banners presentes e nenhuma alegação ativa de aprovação |
| PASS | legado inequivocamente isolado |
| FAIL | banner ausente ou documento usar legado como prova |
| Falso positivo | aviso existir, mas outro trecho ainda conceder aceite |
| Controle positivo | procurar também alegações proibidas em todos os documentos normativos |
| Falso negativo | texto equivalente não previsto escapar |
| Controle negativo | combinar padrões com revisão independente obrigatória |
| Sucesso | script preservado com banner e documentação de invalidação |
| Borda | referência histórica é permitida quando nega valor de aceite |
| Falha esperada | frase `22 testes automatizados aprovados` |
| Vínculo inverso | matriz: `TST-REQ-007` e `TST-DEC-007` retornam para este caso |
