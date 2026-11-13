---
documento_id: DOC-TEST-GOV-001
tipo: governanca-testes
status: vigente
caminho_canonico: governanca-testes.md
versao: 1.0.0
atualizado_em: 2026-11-13
---

# Governança determinística de testes

## Contrato do documento

| Propriedade | Definição |
| --- | --- |
| Papel | fonte normativa para criação, execução, registro, revisão e aceite de testes |
| Objetivo | impedir testes sem critério, oráculo, configuração, evidência ou rastreabilidade |
| Escopo | testes documentais, estruturais, de integração e de regressão deste repositório |
| Caminho canônico | `governanca-testes.md` |
| Autoridade | agentes devem obedecer a este documento antes de criar ou executar teste; aceite independente continua obrigatório |
| Contexto mínimo | esta seção, a matriz de rastreabilidade aplicável, o caso de teste e sua configuração |
| Dependências | diretrizes centrais na seção `Validação Obrigatória no Espaço Determinístico` de `AGENTS.md` |
| Restrições | não apagar comentários HTML; não aceitar autoavaliação; não declarar TDD retroativo; não usar suíte legada como evidência |
| Riscos mitigados | falso positivo, falso negativo, teste órfão, execução irreproduzível, resultado sem evidência e aprovação pelo próprio autor |

## 1. Estado da automação anterior

Os arquivos `scripts/validar-rastreabilidade.sh` e `scripts/testar-rastreabilidade.sh` possuem estado `legado-invalido`. Seus cenários podem ser estudados e migrados, mas suas saídas não podem:

- aprovar alteração;
- comprovar requisito;
- ser registradas como fase Green;
- substituir validação independente;
- sustentar afirmação de cobertura.

A migração deve criar um novo caso, explicar por que o cenário testa o critério, executar Red antes da implementação e preservar a relação com o marcador legado apenas como proveniência.

## 2. Identificadores controlados

| Unidade | Formato | Finalidade |
| --- | --- | --- |
| requisito de teste | `TST-REQ-NNN` | obrigação verificável |
| decisão de teste | `TST-DEC-NNN` | autoriza abordagem, oráculo e restrições |
| caso de teste | `TST-CASE-NNN` | especifica cenário executável |
| configuração | `TST-CFG-NNN` | fixa ambiente, versões e parâmetros |
| execução | `TST-RUN-AAAAMMDD-NNN` | identifica uma execução imutável |
| evidência | `TST-EVD-AAAAMMDD-NNN-NNN` | identifica saída ou artefato observado |
| defeito | `TST-DEF-NNN` | registra divergência investigável |
| validação independente | `TST-VAL-AAAAMMDD-NNN` | registra decisão de pessoa ou sistema independente |

IDs publicados não podem ser reutilizados, renumerados ou transferidos.

## 3. Estados normativos

### 3.1 Estado do caso

| Estado | Significado |
| --- | --- |
| `proposto` | caso ainda não revisado |
| `red_confirmado` | falha esperada foi executada e registrada antes da implementação |
| `implementado` | código mínimo foi escrito, sem aceite independente |
| `green_desenvolvimento` | execução do autor atingiu o esperado, sem valor de aceite |
| `refatorado` | refatoração executada e regressão de desenvolvimento registrada |
| `validado_independentemente` | parte independente confirmou caso, execução e evidência |
| `bloqueado` | pré-condição ou autoridade externa impede continuação |
| `obsoleto` | caso foi substituído, preservando histórico e sucessor |

### 3.2 Resultado da execução

| Resultado | Critério exato |
| --- | --- |
| `PASS` | todas as pré-condições foram satisfeitas, o objeto correto foi exercitado, o oráculo foi avaliado e cada observação coincidiu com o esperado |
| `FAIL` | ao menos uma observação divergiu do esperado ou o comportamento proibido foi aceito |
| `ERROR` | o caso não alcançou o objeto testado por falha de ambiente, configuração, ferramenta ou fixture |
| `SKIP` | execução não realizada por condição previamente autorizada e registrada; nunca equivale a `PASS` |

Código de saída isolado não basta. A classificação exige evidência do objeto exercitado e do oráculo avaliado.

## 4. Esquema obrigatório do caso de teste

Cada `TST-CASE-*` deve registrar:

| Campo | Cardinalidade | Regra |
| --- | --- | --- |
| ID | `1..1` | único e persistente |
| título | `1..1` | comportamento observável |
| estado | `1..1` | vocabulário da seção 3.1 |
| requisitos de origem | `1..*` | IDs existentes |
| decisão de teste | `1..1` | `TST-DEC-*` que justifica abordagem e oráculo |
| finalidade | `1..1` | por que o caso é necessário |
| objeto sob teste | `1..1` | caminho e unidade específica, nunca arquivo inteiro sem localização |
| dependências | `0..*` | requisitos, funções, documentos e fixtures afetados |
| pré-condições | `1..*` | condições verificáveis antes da execução |
| configuração | `1..1` | `TST-CFG-*` existente |
| entrada ou fixture | `1..*` | conteúdo controlado e identificável |
| procedimento | `1..*` | passos determinísticos e ordenados |
| oráculo | `1..1` | regra independente que determina o resultado correto |
| observações esperadas | `1..*` | valores, mensagens ou relações observáveis |
| critério de PASS | `1..1` | condição completa e inequívoca |
| critério de FAIL | `1..1` | divergências que reprovam |
| risco de falso positivo | `1..1` | como o teste poderia passar sem validar o requisito |
| controle de falso positivo | `1..1` | mecanismo para eliminar ou detectar o risco |
| risco de falso negativo | `1..1` | como o teste poderia falhar com comportamento correto |
| controle de falso negativo | `1..1` | mecanismo para eliminar ou detectar o risco |
| cenário de sucesso | `1..*` | ao menos um |
| cenário de borda | `1..*` | ao menos um |
| falha esperada | `1..*` | ao menos uma |
| vínculos inversos | `1..*` | requisitos e decisões devem listar o caso de retorno |

Caso sem qualquer campo obrigatório é inválido e não pode ser executado para aceite.

## 5. Prova de validade do teste

Um caso somente valida o resultado final quando demonstra toda a cadeia:

```text
necessidade
  → requisito observável
  → decisão e restrição
  → objeto realmente exercitado
  → estímulo controlado
  → observação capturada
  → oráculo independente
  → critério de PASS/FAIL
  → evidência persistente
  → validação independente
```

O registro deve explicar por que a observação é necessária e suficiente para o requisito. Testar apenas implementação interna, mensagem de log ou código de saída é insuficiente quando o resultado final depende de arquivo, vínculo ou comportamento diferente.

## 6. Esquema da configuração

Cada `TST-CFG-*` deve fixar:

- sistema operacional e arquitetura;
- shell e versão;
- ferramentas e versões;
- locale e timezone;
- diretório de execução;
- caminhos de entrada;
- variáveis permitidas, sem segredos;
- permissões relevantes;
- limites e timeouts;
- política de arquivos temporários;
- versão ou hash dos objetos testados;
- comando exato de execução.

Mudança em qualquer item cria nova versão ou novo ID de configuração.

## 7. Esquema do registro de execução

Cada `TST-RUN-*` deve conter:

| Campo | Obrigatoriedade |
| --- | --- |
| ID da execução | obrigatória |
| fase `red`, `green`, `refactor` ou `independent-validation` | obrigatória |
| executor e papel | obrigatória |
| data, hora e timezone | obrigatória |
| configuração | obrigatória |
| casos solicitados e efetivamente executados | obrigatória |
| hashes dos objetos, casos e fixtures | obrigatória |
| comando exato | obrigatória |
| resultado por caso | obrigatória |
| resultado esperado e obtido | obrigatória |
| evidências vinculadas | obrigatória |
| saída padrão e saída de erro | obrigatória quando produzidas |
| defeitos abertos | obrigatória quando houver `FAIL` inesperado ou `ERROR` |
| riscos e limitações observados | obrigatória |
| hash do registro anterior | obrigatória após a primeira execução |
| hash do próprio registro | obrigatória após fechamento |

Registros fechados não devem ser editados. Correção cria novo registro que referencia o anterior e explica a substituição.

## 8. Evidências

Evidência deve ser mínima, suficiente, reproduzível e não expor dados pessoais desnecessários. Cada `TST-EVD-*` registra:

- caso e execução de origem;
- tipo MIME ou formato;
- caminho canônico;
- método de captura;
- hash SHA-256;
- interpretação permitida;
- limitações;
- política de retenção.

Saída produzida pelo próprio teste não é oráculo independente por si só. Sempre que possível, o resultado deve ser calculado por fonte ou método distinto do código testado.

## 9. TDD obrigatório

### 9.1 Red

Antes da implementação:

1. criar requisito, decisão, configuração e caso;
2. executar contra o estado anterior;
3. confirmar que a falha ocorre pela razão prevista;
4. registrar execução e evidência;
5. impedir implementação se o caso passar prematuramente ou falhar por motivo diferente.

### 9.2 Green

Implementar somente o mínimo necessário. Executar o caso e toda regressão aplicável. Resultado do autor recebe estado `green_desenvolvimento`, nunca aceite final.

### 9.3 Refactor

Refatorar sem alterar o comportamento requerido. Registrar nova execução integral e comparar evidências relevantes com Green.

## 10. Validação independente

O autor do teste ou da implementação não pode emitir `TST-VAL-*` para o próprio trabalho. A validação independente deve:

1. conferir a matriz bidirecional;
2. reproduzir a configuração;
3. confirmar hashes e comandos;
4. avaliar se o oráculo é independente;
5. inspecionar riscos de falso resultado;
6. executar ou testemunhar os casos necessários;
7. registrar decisão `aprovado`, `reprovado` ou `inconclusivo` com justificativa.

Sem `TST-VAL-*` aprovado, a execução permanece evidência de desenvolvimento.

## 11. Matriz bidirecional obrigatória

A matriz canônica deve permitir as consultas:

| Origem | Destino obrigatório | Pergunta respondida |
| --- | --- | --- |
| requisito | decisão e casos | como este requisito é demonstrado? |
| decisão | requisito, casos e restrições | por que esta abordagem foi autorizada? |
| caso | requisito, decisão, configuração e execuções | o que este teste realmente prova? |
| execução | casos, configuração e evidências | o que foi executado e observado? |
| evidência | execução e caso | de qual observação isto é prova? |
| defeito | execução, caso e correção | onde a divergência surgiu e foi resolvida? |
| validação | execução e evidências | quem confirmou o resultado sem autoavaliação? |

Referência presente em apenas um lado é órfã. Aresta repetida é duplicada. Ambas invalidam a matriz.

## 12. Estrutura canônica dos artefatos de teste

```text
governanca-testes.md
testes/
├── matriz-testes.md
├── configuracoes/
│   └── TST-CFG-NNN.env
├── casos/
│   └── TST-CASE-NNN.md
├── execucoes/
│   └── TST-RUN-AAAAMMDD-NNN.md
├── evidencias/
│   └── TST-EVD-AAAAMMDD-NNN-NNN.txt
└── validacoes/
    └── TST-VAL-AAAAMMDD-NNN.md
```

`tmp/` serve apenas para planejamento, fixtures efêmeras e resultados intermediários. Evidência necessária para auditoria deve ser promovida para `testes/` antes do fechamento da execução.

## 13. Retenção e integridade

- casos, matrizes, registros, validações e evidências aceitas são permanentes;
- fixtures temporárias sem valor probatório devem ser eliminadas ao final;
- dados pessoais devem ser minimizados ou mascarados;
- cada evidência e registro recebe SHA-256;
- execuções formam cadeia pelo hash do registro anterior;
- versionamento é preferencial; enquanto indisponível, a cadeia é apenas mecanismo de detecção de alteração e não substitui custódia externa;
- a validação independente deve conservar cópia ou referência externa do hash aprovado.

## 14. Critério para reativar automação de aceite

A automação somente pode voltar ao estado `vigente` quando:

- todos os casos possuem esquema completo;
- a matriz não contém órfãos ou duplicatas;
- Red, Green e Refactor possuem registros distintos;
- configurações e evidências possuem hashes;
- cenários de sucesso, borda e falha foram exercitados;
- riscos de falso resultado foram controlados;
- validação independente está aprovada;
- os documentos deixaram de atribuir validade à suíte legada.

## 15. Riscos residuais e respostas

| Risco | Resposta obrigatória |
| --- | --- |
| documentação e teste divergirem | matriz bidirecional e revisão independente |
| hash local ser refeito após adulteração | custódia do hash pela parte independente ou versionamento externo |
| teste confirmar apenas o próprio código | oráculo por fonte ou método distinto |
| suite crescer sem contexto frugal | rotas de contexto por caso e configuração explícita |
| registro expor dado pessoal | evidência mínima, máscara e revisão de privacidade |
| migração perder cenário legado | inventário legado associado ao novo caso antes da retirada |
