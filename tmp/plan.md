# PLAN.md

O repositório ainda não está alinhado ao novo `AGENTS.md`. A auditoria foi somente leitura; nenhum arquivo foi alterado e a suíte antiga não foi executada como evidência.

## Situação atual

Conforme:

- [AGENTS.md](/home/davis/selecao-brasileira/AGENTS.md:1) tem 56 linhas e não foi editado.
- Os comentários HTML permanecem preservados.
- Os 69 códigos não registrados de atletas foram removidos; não há mais ocorrências do padrão `[A-Z][0-9]{2}`.
- Os IDs e âncoras `WA-*` existentes continuam preservados.

Não conforme:

### 1. A suíte antiga ainda é apresentada como válida

Apesar de ter sido invalidada, ainda existem afirmações de aprovação em:

- [rastreabilidade-tecnica.md](/home/davis/selecao-brasileira/rastreabilidade-tecnica.md:94);
- [regras-rastreabilidade.md](/home/davis/selecao-brasileira/regras-rastreabilidade.md:250);
- [regras-rastreabilidade.md](/home/davis/selecao-brasileira/regras-rastreabilidade.md:915);
- [testar-rastreabilidade.sh](/home/davis/selecao-brasileira/scripts/testar-rastreabilidade.sh:311);
- [validar-rastreabilidade.sh](/home/davis/selecao-brasileira/scripts/validar-rastreabilidade.sh:536).

Os scripts devem ser classificados como `legado-inválido` e retirados do processo de aceite até serem substituídos. Não é recomendável apagá-los imediatamente, pois seus cenários podem ser migrados como requisitos para a nova suíte.

### 2. Não existe registro completo dos testes

Não foram encontrados artefatos persistentes de:

- configuração da execução;
- ambiente e versões utilizadas;
- executor e data;
- entrada e fixture;
- resultado obtido;
- saída bruta;
- critério exato de `PASS`;
- critério exato de `FAIL`;
- oráculo do teste;
- falso positivo e falso negativo conhecidos;
- defeito relacionado;
- versão ou hash do objeto testado;
- evidência da fase Red, Green e Refactor.

As tabelas atuais contêm cenário, resultado esperado e cobertura, mas não constituem a matriz completa exigida.

### 3. Deve existir uma governança canônica de testes

Antes de criar novos testes, é necessário definir um esquema obrigatório contendo, no mínimo:

| Campo | Obrigatoriedade |
| --- | --- |
| ID único do teste | obrigatória |
| requisito e decisão de origem | obrigatória |
| finalidade | obrigatória |
| objeto sob teste | obrigatória |
| pré-condições | obrigatória |
| configuração e ambiente | obrigatória |
| entrada ou fixture | obrigatória |
| procedimento | obrigatória |
| oráculo | obrigatória |
| resultado esperado | obrigatória |
| critério de `PASS` | obrigatória |
| critério de `FAIL` | obrigatória |
| riscos de falso positivo/negativo | obrigatória |
| resultado obtido | obrigatória por execução |
| evidência bruta | obrigatória por execução |
| executor, data e versão | obrigatória por execução |
| status e defeito relacionado | obrigatória |

Também são necessários:

- matriz requisito → decisão → teste → execução → evidência;
- matriz inversa teste → requisito;
- registro imutável de cada execução;
- manifesto de configuração;
- política de retenção das evidências;
- validação independente do autor.

### 4. O TDD precisa começar antes da nova implementação

Não é possível declarar retroativamente que os scripts antigos seguiram TDD. O procedimento correto é:

1. registrar formalmente a invalidação da suíte antiga;
2. especificar critérios e oráculos;
3. criar o novo teste;
4. registrar sua falha inicial — Red;
5. implementar o comportamento mínimo;
6. registrar a aprovação — Green;
7. refatorar;
8. registrar nova execução integral;
9. obter validação independente.

### 5. Permanecem 24 links genéricos

Ainda existem links que apontam para arquivos inteiros:

- 7 em `rastreabilidade-tecnica.md`;
- 16 em `regras-rastreabilidade.md`;
- 1 em `tecnicas-rastreabilidade.md`.

Eles violam a exigência de navegação cirúrgica. Links Markdown devem apontar para uma seção específica. Referências a scripts devem usar caminho canônico mais marcador estável e pesquisável no VS Code.

### 6. Faltam contratos documentais

Cada documento precisa declarar explicitamente:

- papel;
- objetivo;
- escopo;
- caminho canônico;
- autoridade sobre os agentes;
- contexto mínimo;
- restrições;
- riscos;
- dependências;
- regras de manutenção.

O frontmatter também precisa ser padronizado: atualmente existem variantes como `criado em`, `atualizado_em`, `historico` e `histórico`.

### 7. Não há árvore nem rotas de contexto

Ainda falta um catálogo canônico contendo:

- árvore completa do repositório;
- função de cada caminho;
- dependências;
- ordem mínima de leitura;
- rotas por tipo de tarefa;
- arquivos proibidos para alteração;
- artefatos obrigatórios para cada validação.

### 8. `grupo-whatsapp.md` ainda possui inconsistências

Embora os IDs não registrados tenham sido removidos:

- Niterói declara 6 atletas, mas possui 7 registros, em [grupo-whatsapp.md](/home/davis/selecao-brasileira/grupo-whatsapp.md:79);
- “A confirmar” declara 19, mas possui 26 registros, em [grupo-whatsapp.md](/home/davis/selecao-brasileira/grupo-whatsapp.md:96);
- Nicolle Flores aparece em duas seções;
- o título de A. BUD'S está malformado;
- não existe critério rastreável para inclusão, confirmação ou mudança de seção.

Esses dados não devem ser corrigidos por inferência; precisam ser confrontados com a fonte autorizada.

### 9. Não existe histórico determinístico de alterações

A pasta `.git` existe, mas não é um repositório Git válido. Sem versionamento ou mecanismo equivalente, não é possível provar:

- ordem Red-Green-Refactor;
- autoria;
- estado testado;
- diferenças entre execuções;
- preservação dos comentários e vínculos.

## Ordem recomendada

1. Marcar formalmente a suíte atual como inválida.
2. Criar a governança e o esquema dos testes.
3. Estabelecer versionamento ou registro imutável equivalente.
4. Criar testes Red para contratos, links, árvore, comentários e `grupo-whatsapp.md`.
5. Corrigir os documentos sem alterar IDs `WA-*`.
6. Criar a nova suíte rastreável.
7. Registrar Green e Refactor.
8. Executar validação independente.
9. Somente então retomar o aceite automatizado.

## Que novos problemas esta solução pode criar?

Apagar imediatamente os scripts antigos eliminaria cenários úteis; por isso, devem ser preservados como legado inválido até a migração. Alterar títulos pode quebrar âncoras; portanto, os links devem usar âncoras existentes ou novas âncoras estáveis sem renomear unidades publicadas. Corrigir contagens do grupo por suposição poderia falsificar os dados; essas correções devem aguardar evidência autorizada.

## Registro de execução do plano

| Etapa | Estado | Evidência |
| --- | --- | --- |
| 1. Invalidar formalmente a suíte antiga | concluída em 2026-11-13 | avisos nos documentos técnicos, norma e cabeçalhos dos scripts; alegações de aprovação removidas |
| 2. Criar governança e esquema dos testes | concluída em 2026-11-13 | `governanca-testes.md`, versão 1.0.0 |
| 3. Estabelecer histórico determinístico | pendente | `.git` existente não contém repositório válido |
| 4. Criar testes Red | pendente | proibido iniciar antes da conclusão das etapas 2 e 3 |
| 5. Corrigir documentos | pendente | aguardando evidência Red |
| 6. Criar nova suíte rastreável | pendente | aguardando casos governados |
| 7. Registrar Green e Refactor | pendente | aguardando nova suíte |
| 8. Validação independente | pendente | deve ser realizada por parte diferente do autor |
| 9. Retomar aceite automatizado | pendente | depende de todas as etapas anteriores |
