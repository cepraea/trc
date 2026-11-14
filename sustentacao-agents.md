# Sustentação técnica e matriz bidirecional do AGENTS.md

**Papel:** matriz de proveniência, fundamentação, classificação e
verificabilidade das regras dos agentes.  
**Objetivo:** demonstrar a relação entre regra, decisão do usuário, fonte
especializada, justificativa e critério de verificação.  
**Escopo:** `AG-01` a `AG-14` do arquivo
[AGENTS.md](./AGENTS.md#agentsmd-diretrizes-centrais-dos-agentes); não substitui
a norma operacional de rastreabilidade.  
**Caminho canônico pretendido:** `./sustentacao-agents.md`.  
**Status:** proposta documental verificada localmente, ainda não implantada ou
validada no repositório real.  
**Data da pesquisa:** 2026-11-13.

## Glossário

- **Afirmação:** enunciado cuja sustentação precisa ser avaliada.
- **Evidência:** trecho de fonte localizada, registro de decisão ou resultado de
  execução que suporta ou contradiz uma afirmação.
- **Premissa:** fato ou condição necessária para que a inferência seja válida.
- **Justificativa:** explicação explícita de como as evidências e premissas
  sustentam a regra.
- **Regra normativa:** instrução aprovada pelo proprietário do projeto; não se
  confunde com uma obrigação universal de normas externas.
- **Oráculo:** resultado esperado, definido independentemente da implementação
  sob teste.
- **Reciprocidade:** relação registrada nos dois sentidos e com tipos inversos
  coerentes.

## Fontes identificadas e seu alcance

### Fontes internas fornecidas pelo usuário

- **INT-01 — Regras obrigatórias:** primeiro texto da conversa, diretrizes
  documentais, intervenção cirúrgica, reciprocidade e preservação de comentários
  HTML. Fonte de **decisão do usuário**, não comprovação de software.
- **INT-02 — Regras de rastreabilidade bidirecional:** anexo
  `Markdown colado(20261113-110034).md`, seções 1–29; especialmente §§ 4–10,
  15–18, 22–24, 28–29. Fonte de **norma interna declarada vigente**; execução
  dos validadores não observada.
- **INT-03 — AGENTS.md fornecido:** terceiro texto da conversa, seções 1–4 e
  Formato de saída. Fonte de **diretrizes explícitas do usuário**; o original
  apresentado não foi modificado.

Os identificadores `INT-*` designam estas fontes apresentadas na conversa. Como
os textos INT-01/INT-03 não foram entregues como arquivos do repositório, não se
inventa caminho interno para eles. Para auditoria durável no repositório, sua
origem deverá ser preservada pelo responsável autorizado. O segundo texto tem
caminho de anexo conhecido, mas não um caminho canônico comprovado no
repositório.

### Fontes externas oficiais e especializadas

- **EXT-01 — AGENTS.md (formato aberto):**
  [repositório do formato, README](https://github.com/agentsmd/agents.md#readme).
  Fundamenta a função de instrução de contexto e procedimentos de agentes; não
  impõe as políticas particulares do usuário.
- **EXT-02 — GitHub Docs, instruções de agentes:**
  [Adding repository custom instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions#creating-custom-instructions).
  Orienta localização, escopo e utilidade de `AGENTS.md`; sua implementação é
  específica ao Copilot.
- **EXT-03 — OpenAI Codex, reconhecimento do AGENTS.md:**
  [documentação de AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md.md#how-codex-discovers-guidance).
  Confirma descoberta e precedência no Codex; não garante suporte idêntico em
  todo agente.
- **EXT-04 — NASA SWE-052:**
  [Bidirectional Traceability](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695427/SWE-052+-+Bidirectional+Traceability).
  Sustenta conexões requisitos–projeto–código–verificações e análise de lacunas;
  aplicação ao projeto é **adaptação técnica**, não imposição regulatória NASA.
- **EXT-05 — NASA SWE-080:**
  [Track and Evaluate Changes](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695459/SWE-080+-+Track+and+Evaluate+Changes).
  Sustenta rastreamento de mudanças e análise de impacto; não prova ausência de
  regressão.
- **EXT-06 — NASA SWE-194:**
  [Delivery Requirements Verification](https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695529/SWE-194+-+Delivery+Requirements+Verification).
  Sustenta vínculo entre requisito, procedimento e resultado de verificação; não
  exige ferramentas específicas deste repositório.
- **EXT-07 — ISTQB, glossário:**
  [Standard Glossary of Terms Used in Software Testing, versão 4.8.1, 2026](https://nstqb.org/istqbGlossary.pdf).
  Define oráculo, independência, TDD e regressão. Referência terminológica; não
  é evidência de testes executados.

## Metodo reutilizavel de classificacao

Para **cada afirmação A**, registrar a cadeia:
`A → F (fonte/localizador) → P (premissa verificável) → J (inferência fundamentada) → C (conclusão e limite) → V (verificação ou revisão)`.
Não substituir uma relação causal por mera coincidência textual.

1. **Identificar a natureza:** `DECISÃO_HUMANA`, `NORMA_INTERNA`,
   `FATO_EXTERNO`, `OBSERVAÇÃO_EXECUTADA`, `INFERÊNCIA` ou `PROPOSTA`.
2. **Localizar evidência:** URL de seção, âncora Markdown específica, ID de
   decisão ou log com versão, comando e resultado. Sem localizador, marcar
   lacuna; nunca inventar link.
3. **Avaliar autoridade e aplicabilidade:** decisão humana define o que se quer;
   documentação oficial define capacidades ou obrigações em seu próprio escopo;
   teste executado demonstra somente o que foi testado.
4. **Explicitar premissa:** por exemplo, “o script existe na raiz do repositório
   e foi executado sobre este commit”. Se a premissa não foi observada, não
   concluir execução.
5. **Testar a inferência:** verificar se a evidência realmente sustenta toda a
   afirmação, se existe contradição e se há parte não coberta.
6. **Classificar a conclusão:**
   - `SUSTENTADO INTEGRALMENTE`: todos os elementos relevantes estão respaldados
     por evidências suficientes para o escopo declarado.
   - `SUSTENTADO PARCIALMENTE`: parte relevante está respaldada, com limites
     discriminados.
   - `SEM SUSTENTAÇÃO SUFICIENTE`: evidências existentes não permitem concluir.
   - `CONTRADITO PELA EVIDÊNCIA`: há evidência válida incompatível com a
     afirmação.
   - `NÃO VERIFICADO`: há hipótese ou declaração ainda sem execução/consulta
     necessária.
   - `NÃO DOCUMENTADO`: não foi localizado registro documental que descreva o
     elemento; não significa impossibilidade nem falsidade.
7. **Vincular verificação:**
   `ID de regra → ID de critério → caso de teste → execução/resultado`, com link
   de volta no caso de teste/artefato ao ID de regra. Não declarar vínculo
   implementado antes da existência real do destino.
8. **Tratar mudanças:** atualizar regra e matriz juntas; consultar relações em
   ambos os sentidos; verificar órfãos, duplicatas e regressão. O mesmo conjunto
   de evidências não deve ser contado como fontes independentes.

### Exemplo de classificação

**A:** “A nova entidade ATL-0001 está integrada e rastreável”. **F:**
especificação `INT-02`, §§ 17 e 23. **P:** cadastro e scripts `ENT-*`
efetivamente existem e os testes retornam `0`. **J:** a norma exige
reciprocidade e validação; descrever essa exigência não demonstra sua execução.
**C:** `NÃO VERIFICADO` no repositório real. **V:** inspecionar cadastro, links
de ida/volta, execução e saída dos validadores, e revisar a identidade humana.
Não converter `C` em aprovação só por haver texto normativo.

## Matriz bidirecional

Cada registro `EV-AG-*` abaixo aponta de volta à regra específica em
`AGENTS.md`; cada regra aponta a seu registro aqui. A coluna **Verificação
proposta** descreve o que demonstraria conformidade, **não** afirma teste
executado no projeto.

| Regra (retorno)                                                        | Base interna                         | Base externa   | Justificativa e limite                                                                                  | Verificação proposta                                                |
| ---------------------------------------------------------------------- | ------------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [AG-01](./AGENTS.md#ag-01-protecao-da-governanca)                      | INT-03, proibição inicial            | EXT-03         | Autorização do proprietário; hierarquia de instruções externa não é anulada                             | revisão de diff confirma AGENTS não alterado por agente             |
| [AG-02](./AGENTS.md#ag-02-autorizacao-e-unidade-de-trabalho)           | INT-01, INT-03 §§ abertura/1         | EXT-05         | Mudança precisa de autorização, escopo e motivo documentados                                            | cada tarefa tem decisão, DONE e histórico                           |
| [AG-03](./AGENTS.md#ag-03-contexto-minimo-e-rotas-verificadas)         | INT-03 §§ abertura/4                 | EXT-02         | Contexto e comandos específicos reduzem exploração; caminhos do projeto não conhecidos aqui             | checagem de caminhos e escopo antes da execução                     |
| [AG-04](./AGENTS.md#ag-04-documentos-com-funcao-explicita)             | INT-01, INT-03 §1, INT-02 §10.5      | EXT-01         | Documento tem função definida; HTML é decisão particular do usuário                                     | inspeção do papel/escopo e diff de comentários                      |
| [AG-05](./AGENTS.md#ag-05-afirmacao-evidencia-e-justificativa)         | INT-01, INT-02 §§7,14,16             | EXT-04, EXT-06 | Origem e resultado precisam ser distintos; norma externa não comprova fato interno                      | revisão da cadeia A→F→P→J→C→V                                       |
| [AG-06](./AGENTS.md#ag-06-ids-e-referencias-precisas)                  | INT-02 §§4,5,17,29, INT-03 §3        | EXT-04         | Identificador estável e destino preciso permitem percorrer relações                                     | teste de ID/âncora e link específico no VS Code                     |
| [AG-07](./AGENTS.md#ag-07-reciprocidade-materializada)                 | INT-01, INT-02 §§18,22,25, INT-03 §3 | EXT-04         | Relações devem existir nos dois sentidos, com tipo explícito                                            | comparar arestas e inversas; rejeitar órfãos/duplicatas             |
| [AG-08](./AGENTS.md#ag-08-nao-confundir-especificacao-com-implantacao) | INT-02 §§17.1,20–23,28               | EXT-06         | Declarações de implantação dependem de resultados observados                                            | inspecionar cadastro ENT, revisão e scripts antes de declarar PASS  |
| [AG-09](./AGENTS.md#ag-09-impacto-e-alteracao-minima)                  | INT-01, INT-03 §2                    | EXT-05         | Impacto deve ser avaliado; risco residual não pode ser negado por promessa                              | diff restrito, testes de impacto e riscos concretos                 |
| [AG-10](./AGENTS.md#ag-10-testes-antes-do-codigo)                      | INT-03 §4.3                          | EXT-07         | TDD é decisão humana; teste anterior precisa de oráculo verificável                                     | evidência de teste falhando antes da correção e passando depois     |
| [AG-11](./AGENTS.md#ag-11-verificacao-reproduzivel-e-independente)     | INT-03 §§4.1–4.4                     | EXT-06, EXT-07 | Execução é necessária; independência não equivale a proibir toda ferramenta escrita pelo agente         | oráculo independente, negativos, logs e revisão                     |
| [AG-12](./AGENTS.md#ag-12-regressao-e-gates-de-aceite)                 | INT-02 §§9,15,17,23,28               | EXT-06, EXT-07 | RT existente é relato da norma; ENT futuro não pode ser executado como obrigatório antes da implantação | verificar existência, executar scripts aplicáveis e guardar códigos |
| [AG-13](./AGENTS.md#ag-13-navegacao-e-compatibilidade-vs-code)         | INT-01, INT-02 §5, INT-03 §§1,3      | EXT-01, EXT-02 | Link por trecho e ID facilita navegação; comportamento real exige teste na instalação                   | abrir links a partir do workspace no VS Code                        |
| [AG-14](./AGENTS.md#ag-14-evidencias-e-conclusao)                      | INT-01, INT-03 Formato de saída      | EXT-05, EXT-06 | Relatório precisa separar decisão, evidência, resultado e pendências                                    | verificar evidências, resultados, limites e estado DONE             |

## Registros de fundamentacao por regra

### EV-AG-01

**Afirmação:** agente não altera sua própria governança. **Evidência:** INT-03;
EXT-03 (precedência). **Premissa:** a restrição é aprovada pelo proprietário.
**Justificativa:** separa a autorização normativa da execução. **Conclusão:**
`SUSTENTADO INTEGRALMENTE` como regra requerida; aplicação no ambiente
`NÃO VERIFICADO`. **Retorno:**
[AG-01](./AGENTS.md#ag-01-protecao-da-governanca).

### EV-AG-02

**Afirmação:** ação precisa de decisão e DONE. **Evidência:** INT-01/03; EXT-05.
**Premissa:** ação é mudança no projeto. **Justificativa:** rastrear intenção e
impacto evita escopo implícito. **Conclusão:** `SUSTENTADO INTEGRALMENTE` como
diretriz. **Retorno:**
[AG-02](./AGENTS.md#ag-02-autorizacao-e-unidade-de-trabalho).

### EV-AG-03

**Afirmação:** somente contexto e rotas necessárias. **Evidência:** INT-03;
EXT-02. **Premissa:** a estrutura real está disponível para inspeção.
**Justificativa:** reduz navegação desnecessária sem inventar arquivos.
**Conclusão:** `SUSTENTADO PARCIALMENTE`; caminhos concretos `NÃO VERIFICADO`.
**Retorno:** [AG-03](./AGENTS.md#ag-03-contexto-minimo-e-rotas-verificadas).

### EV-AG-04

**Afirmação:** documentos com função e comentários preservados. **Evidência:**
INT-01/03, INT-02 §10.5; EXT-01. **Premissa:** documento efetivamente criado ou
editado. **Justificativa:** função explícita facilita localização e auditoria;
HTML é restrição local. **Conclusão:** `SUSTENTADO INTEGRALMENTE` como decisão.
**Retorno:** [AG-04](./AGENTS.md#ag-04-documentos-com-funcao-explicita).

### EV-AG-05

**Afirmação:** cadeia de evidência sem confundir declaração com fato.
**Evidência:** INT-02 §§7,14; EXT-04/06. **Premissa:** origem e resultado são
localizáveis. **Justificativa:** permite reconstruir e contestar conclusão.
**Conclusão:** `SUSTENTADO INTEGRALMENTE` como procedimento proposto; execuções
`NÃO VERIFICADO`. **Retorno:**
[AG-05](./AGENTS.md#ag-05-afirmacao-evidencia-e-justificativa).

### EV-AG-06

**Afirmação:** IDs persistentes e links específicos. **Evidência:** INT-02
§§4–5,29; EXT-04. **Premissa:** âncora segue mecanismo Markdown do editor.
**Justificativa:** estabilidade permite retrocesso e impacto. **Conclusão:**
`SUSTENTADO INTEGRALMENTE` na norma; VS Code real `NÃO VERIFICADO`. **Retorno:**
[AG-06](./AGENTS.md#ag-06-ids-e-referencias-precisas).

### EV-AG-07

**Afirmação:** vínculos recíprocos obrigatórios. **Evidência:** INT-01/03,
INT-02 §§18,22,25; EXT-04. **Premissa:** relações tipadas e destinos existem.
**Justificativa:** rejeita aresta incompleta. **Conclusão:**
`SUSTENTADO INTEGRALMENTE` como requisito; dados reais `NÃO VERIFICADO`.
**Retorno:** [AG-07](./AGENTS.md#ag-07-reciprocidade-materializada).

### EV-AG-08

**Afirmação:** ENT não implantado. **Evidência:** INT-02 §17.1 e §23.
**Premissa:** não há nova evidência de implantação que substitua a linha de base
declarada. **Justificativa:** norma é explícita na separação. **Conclusão:**
`SUSTENTADO INTEGRALMENTE` como estado **declarado**; estado real
`NÃO VERIFICADO`. **Retorno:**
[AG-08](./AGENTS.md#ag-08-nao-confundir-especificacao-com-implantacao).

### EV-AG-09

**Afirmação:** intervenções mínimas exigem análise de impacto. **Evidência:**
INT-01/03; EXT-05. **Premissa:** alterações e dependentes foram identificados.
**Justificativa:** reduz risco de regressão; não elimina matematicamente todos
os riscos. **Conclusão:** `SUSTENTADO INTEGRALMENTE` como regra. **Retorno:**
[AG-09](./AGENTS.md#ag-09-impacto-e-alteracao-minima).

### EV-AG-10

**Afirmação:** TDD Red–Green–Refactor para comportamento testável.
**Evidência:** INT-03 §4.3; EXT-07. **Premissa:** comportamento dispõe de
oráculo determinístico. **Justificativa:** falha anterior evita teste puramente
confirmatório. **Conclusão:** `SUSTENTADO INTEGRALMENTE` como decisão; aplicação
`NÃO VERIFICADO`. **Retorno:**
[AG-10](./AGENTS.md#ag-10-testes-antes-do-codigo).

### EV-AG-11

**Afirmação:** validação independente de autoavaliação. **Evidência:** INT-03
§4; EXT-07. **Premissa:** existe fonte independente para oráculo ou revisão.
**Justificativa:** script criado pelo agente pode conter o mesmo equívoco do
código. **Conclusão:** `SUSTENTADO PARCIALMENTE`; independência efetiva depende
da execução. **Retorno:**
[AG-11](./AGENTS.md#ag-11-verificacao-reproduzivel-e-independente).

### EV-AG-12

**Afirmação:** regressão RT e ENT conforme estado de implantação. **Evidência:**
INT-02 §§9,15,23,28; EXT-06/07. **Premissa:** scripts estão disponíveis e são
executados. **Justificativa:** não confundir futura extensão com automação
vigente. **Conclusão:** `SUSTENTADO INTEGRALMENTE` na especificação; execução
`NÃO VERIFICADO`. **Retorno:**
[AG-12](./AGENTS.md#ag-12-regressao-e-gates-de-aceite).

### EV-AG-13

**Afirmação:** navegação pontual compatível com VS Code. **Evidência:**
INT-01/03, INT-02 §5; EXT-01/02. **Premissa:** paths/âncoras resolvem no
workspace. **Justificativa:** referência precisa permite fiscalização.
**Conclusão:** `SUSTENTADO PARCIALMENTE` até teste de navegação. **Retorno:**
[AG-13](./AGENTS.md#ag-13-navegacao-e-compatibilidade-vs-code).

### EV-AG-14

**Afirmação:** entrega demonstra evidências, DONE e ações. **Evidência:** INT-03
Formato de saída; EXT-05/06. **Premissa:** logs e decisões foram conservados.
**Justificativa:** evita alegar projeto concluído por PASS local. **Conclusão:**
`SUSTENTADO INTEGRALMENTE` como contrato de relatório. **Retorno:**
[AG-14](./AGENTS.md#ag-14-evidencias-e-conclusao)

## Criterios objetivos para validar estes dois arquivos

1. Todas as regras `AG-01..AG-14` aparecem uma vez como título no AGENTS, com
   link para sua seção `EV-AG-xx` neste arquivo.
2. Todos os `EV-AG-*` aparecem uma vez como título aqui e contêm link de volta
   para `AG-xx`.
3. Caminhos relativos e fragmentos dos links **entre estes dois arquivos**
   resolvem para títulos únicos; links para arquivos ainda não instalados são
   tratados separadamente, não considerados validados.
4. `AGENTS.md` possui no máximo 200 linhas físicas; comentários HTML dos textos
   de origem não foram alterados.
5. Fontes externas estão identificadas por URL e escopo de aplicabilidade; links
   externos podem exigir conectividade para verificação posterior.
6. Estes controles são verificações **editoriais locais**; não substituem a
   execução de `RT-*`, `ENT-*` nem avaliação independente do funcionamento real
   do projeto.

## Riscos que a solucao pode criar e controles

| Risco concreto                                                   | Consequência                                    | Controle adotado                                                                |
| ---------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------- |
| Instalar proposta sobre `AGENTS.md` existente                    | violar proibição e perder instruções anteriores | entrega separada; instalação apenas por responsável autorizado após diff        |
| Fazer referência a caminhos existentes apenas no texto normativo | links quebrados                                 | marcar dependência de implantação e verificar caminhos antes de instalar        |
| Tratar scripts futuros ENT como já implementados                 | falsa aprovação                                 | execução condicional expressa no AG-12                                          |
| Autovalidação do agente                                          | erro comum entre implementação e verificador    | oráculo documentado, testes negativos e revisão independente                    |
| Vínculo apenas textual sem destino real                          | órfão                                           | não declarar cobertura operacional; conferência de reciprocidade no repositório |
| Exigir testes irrelevantes em alteração editorial                | custo e testes artificiais                      | distinguir alteração comportamental de edição sem código                        |

## Situacao e criterio de encerramento

**Entregue:** proposta de dois documentos, vínculos editoriais recíprocos e
matriz de fundamentos. **Não executado:** instalação no repositório, testes
reais `RT-*`/`ENT-*`, teste gráfico de navegação no VS Code e conferência
independente do ambiente. Os últimos itens não são pressupostos de redação
destes documentos, mas seriam obrigatórios para declarar a implantação
operacional concluída.
