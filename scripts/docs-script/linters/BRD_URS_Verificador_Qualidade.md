---
titulo: 'BRD/URS — Gate de qualidade documental e rastreabilidade'
tipo: 'especificacao-de-requisitos-de-negocio-e-do-usuario'
versao: '1.0-proposta'
data: '2026-11-14'
status: 'PROPOSTA — NAO_HOMOLOGADO — NAO_IMPLEMENTADO'
repositorio_referido: '~/selecao-brasileira (relato do usuario)'
path_proposto: 'BRD_URS_Verificador_Qualidade.md'
---

# BRD/URS — Gate de qualidade documental e rastreabilidade

**Papel:** definir necessidades, benefícios, limites e aceite do usuário; não
escolher ferramentas sem fundamento.  
**Objetivo:** permitir encerrar tarefas de criação/edição de Markdown com
evidência determinística de conformidade documental e vínculos preservados.  
**Escopo:** repositório `selecao-brasileira`, VS Code + WSL, agentes que
produzem arquivos Markdown.  
**Documentos relacionados:**
[FRS/SyRS v2.0](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#frs-root)
e
[Especificação Técnica Completa](./Especificacao_Tecnica_Completa.md#tec-root).  
**Autoridade:**
decisões de implantação, escopo, severidade e uso de ponte com VS Code são
reservadas ao usuário.

## BRD-ROOT

## 1. Glossário e proposição

- **BRD:** descreve o problema, necessidades e resultados de negócio.
- **URS:** descreve os comportamentos esperados pelo usuário.
- **Gate:** checagem que bloqueia o DONE quando falha uma obrigação aplicável.
- **Provedor:** ferramenta que gera diagnósticos; extensão instalada e CLI são
  coisas distintas.
- **Evidência:** registro de execução ou documento-fonte capaz de sustentar uma
  conclusão limitada.
- **DONE:** conclusão da tarefa dentro de escopo aceito; não significa
  homologação de todo o projeto.

**Proposição central:** transformar os problemas apresentados pelos
verificadores aplicáveis em resultados localizáveis, acionáveis e reproduzíveis,
permitindo correção cirúrgica e reteste antes de encerrar uma tarefa de
Markdown.

## 2. Problema, necessidade e evidência

| Origem | Registro disponível                                                                                        | Limite                                                                    |
| ------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| USR-01 | Pedido atual: agente executa script ao finalizar criação/edição de Markdown e só declara DONE com exit `0` | Decisão do usuário sobre objetivo; não é implementação                    |
| USR-02 | Inventário de **50 extensões** copiado do terminal VS Code                                                 | Evidência declarativa de instalação; não de CLI, configuração ou execução |
| USR-03 | Auditoria anteriormente fornecida: 863 ocorrências em 23 Markdown, 848 MD013, âncoras AG↔EV quebradas      | Relato histórico; não reproduzido nesta entrega                           |
| USR-04 | Regras prévias: preservar `AGENTS.md`, comentários HTML, IDs e vínculos bidirecionais                      | Norma fornecida pelo usuário; implementação precisa ser verificada        |
| DOC-01 | FRS/SyRS v1.0 anexada, 25 FR, 11 NFR e 24 TST                                                              | Baseline documental; não indica script existente                          |

**Problema de negócio:** agentes podem concluir tarefas apesar de diagnósticos
relevantes, ou tentar correções que apagam a rastreabilidade.  
**Resultado esperado:** um relatório unificado e um código de saída que
correspondam à cobertura exigida, sem atribuir aos linters capacidades que eles
não possuem.

## 3. Atores e responsabilidades

| Ator                    | Interesse                                                                       | Autoridade                                         |
| ----------------------- | ------------------------------------------------------------------------------- | -------------------------------------------------- |
| Usuário/proprietário    | Definir regras, prioridades, escopo e critérios de aceite                       | Aprovar políticas e alterações normativas          |
| Agente executor         | Criar/alterar Markdown, executar gate, corrigir violações permitidas e retestar | Não editar `AGENTS.md`; não mudar política de gate |
| Revisor humano          | Avaliar vínculos semânticos, identidade e exceções                              | Decisão quando evidência não determina correção    |
| Script orquestrador     | Executar checagens, registrar origem e emitir código de saída                   | Nenhuma autoridade para editar arquivos            |
| Linters e verificadores | Produzir diagnósticos próprios                                                  | Não decidem DONE global                            |

## 4. Requisitos de negócio

### BR-001

**Nome:** DONE comprovável.  
**Necessidade:** A tarefa que criar/alterar Markdown não poderá receber DONE
pelo agente sem gate obrigatório completo e retorno `0`.  
**Rastreio para requisitos funcionais:**
[FR-018](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-018),
[FR-019](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-019),
[FR-021](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-021).

### BR-002

**Nome:** Correções cirúrgicas.  
**Necessidade:** As intervenções devem preservar IDs, comentários HTML, vínculos
e comportamentos válidos; impacto deve ser comprovado por reteste.  
**Rastreio para requisitos funcionais:**
[FR-011](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-011),
[FR-020](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-020),
[FR-034](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-034).

### BR-003

**Nome:** Evidência reproduzível.  
**Necessidade:** A saída deve revelar ferramenta, versão, configuração, escopo,
arquivo, posição quando disponível, resultado e limites.  
**Rastreio para requisitos funcionais:**
[FR-006](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-006),
[FR-007](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-007),
[FR-016](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-016),
[FR-017](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-017).

### BR-004

**Nome:** Um ponto de entrada.  
**Necessidade:** O agente deve executar um comando orquestrador em Python, em
terminal WSL compatível com VS Code, sem APIs pagas.  
**Rastreio para requisitos funcionais:**
[FR-001](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-001),
[FR-003](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-003),
[FR-004](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-004).

### BR-005

**Nome:** Nenhum sucesso falso.  
**Necessidade:** Ferramentas obrigatórias ausentes, snapshots desatualizados ou
parsing inválido devem bloquear aceite.  
**Rastreio para requisitos funcionais:**
[FR-014](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-014),
[FR-015](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-015),
[FR-022](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-022),
[FR-032](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-032).

### BR-006

**Nome:** Cobertura proporcional.  
**Necessidade:** Somente verificadores pertinentes ao escopo e impacto da tarefa
devem ser exigidos; não varrer projetos não afetados.  
**Rastreio para requisitos funcionais:**
[FR-002](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-002),
[FR-013](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-013),
[FR-035](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-035).

### BR-007

**Nome:** Rastreabilidade ponta a ponta.  
**Necessidade:** Links, âncoras e relações tipadas afetadas devem ser
verificados nos dois sentidos, inclusive arquivos dependentes não editados.  
**Rastreio para requisitos funcionais:**
[FR-010](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-010),
[FR-011](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-011),
[FR-034](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-034),
[FR-038](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-038).

### BR-008

**Nome:** Sem soluções inventadas.  
**Necessidade:** O relatório deve distinguir diagnóstico, hipótese de causa,
sugestão de correção e correção mecanicamente demonstrada.  
**Rastreio para requisitos funcionais:**
[FR-008](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-008),
[FR-009](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-009),
[FR-023](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-023).

### BR-009

**Nome:** Proteção de dados.  
**Necessidade:** Logs não podem divulgar integralmente mensagens, contatos,
senhas ou tokens presentes em documentos, ferramentas e ambiente.  
**Rastreio para requisitos funcionais:**
[FR-017](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-017),
[FR-020](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-020).

### BR-010

**Nome:** Integrações reais.  
**Necessidade:** A cobertura de extensões VS Code somente pode ser declarada
quando existir integração técnica comprovada; CLI alternativa não é o mesmo
provedor.  
**Rastreio para requisitos funcionais:**
[FR-022](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-022),
[FR-026](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-026),
[FR-036](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-036).

### BR-011

**Nome:** Reaproveitamento.  
**Necessidade:** Scripts legados e configurações existentes devem ser avaliados
e reaproveitados sem atribuir homologação a testes reprovados para aceite.  
**Rastreio para requisitos funcionais:**
[FR-012](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-012),
[FR-033](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-033).

### BR-012

**Nome:** Compatibilidade e custo.  
**Necessidade:** Não instalar dependências ou usar rede, tokens e serviços sem
autorização; manter solução adequada a VS Code/WSL.  
**Rastreio para requisitos funcionais:**
[FR-004](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-004),
[FR-031](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-031),
[FR-037](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-037).

## 5. Requisitos do usuário e cenários de uso

| ID     | História/ação do usuário                                                   | Aceite observável                                              | FR correspondente                                                        |
| ------ | -------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------ |
| URS-01 | Como agente, executo o gate depois de salvar `.md`                         | Terminal e exit code verificáveis                              | [FR-018](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-018) |
| URS-02 | Como agente, consulto a origem exata da violação                           | Exibe provedor, regra, arquivo/linha/coluna quando disponíveis | [FR-008](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-008) |
| URS-03 | Como agente, corrijo uma falha e reexecuto                                 | Nova rodada não reutiliza PASS obsoleto                        | [FR-021](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-021) |
| URS-04 | Como responsável, sei quais ferramentas foram de fato acionadas            | Relatório distingue REQUIRED, UNAVAILABLE e NOT_APPLICABLE     | [FR-032](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-032) |
| URS-05 | Como revisor, comparo ida e volta de um link                               | Validador identifica relação unilateral                        | [FR-011](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-011) |
| URS-06 | Como responsável, não confundo extensão com executável                     | Versão e comando comprovados ou cobertura inconclusiva         | [FR-031](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-031) |
| URS-07 | Como revisor, comparo verificações Python/JS/API somente quando aplicáveis | Nenhum lint de linguagem aleatória por editar `.md`            | [FR-013](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-013) |
| URS-08 | Como revisor, mantenho fontes e histórico                                  | Hash e diff preservados no gate; nenhuma correção automática   | [FR-020](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fr-020) |

## 6. Fronteiras e critérios de decisão

**Incluído:** diagnóstico sintático/estilo de Markdown, links/âncoras,
rastreabilidade, relatório, execução seletiva de linters para artefatos
diretamente afetados ou explicitamente relacionados.  
**Excluído:** modificar código pelo próprio gate, instalar CLIs automaticamente,
capturar magicamente a aba Problems sem ponte VS Code, aprovar autenticidade
histórica, varrer projetos arbitrários, resolver semanticamente toda falha sem
julgamento humano.  
**Nota:** a instalação de uma extensão (lista do usuário) não comprova que sua
CLI está instalada ou disponível ao Python.

**Decisões reservadas ao usuário:**

- DH-01 — Captura literal da aba Problems (com ponte VS Code) ou verificadores
  CLI equivalentes e cobertura distinta.
- DH-02 — Política de escopo padrão (`changed` ou `all`) e expansão de
  dependências; não equivale a silenciar problemas antigos.
- DH-03 — Severidades bloqueantes e escolha entre formatadores/rulesets
  concorrentes.

Nenhuma dessas decisões deve ser tomada automaticamente em nome do usuário. A
configuração técnica deve registrar os valores escolhidos antes da implantação.

## 7. Critérios de aceite do produto

- [ ] AC-01 — Uma chamada do orquestrador identifica o escopo e os provedores
      requeridos, sem instala-los.
- [ ] AC-02 — Um problema de Markdown gera `1` com localização observada e
      regra.
- [ ] AC-03 — Link ou retorno sem destino gera `1` com identificação do vínculo.
- [ ] AC-04 — Ferramenta obrigatória ausente gera `2`, mesmo que outras tenham
      dado PASS.
- [ ] AC-05 — Todos os verificadores requeridos aprovados no snapshot estável
      geram `0`.
- [ ] AC-06 — Logs omitem credenciais e dados pessoais; arquivos não são
      alterados pelo gate.
- [ ] AC-07 — A lista efetiva de provedores distingue extensão, CLI,
      configuração e aplicabilidade.
- [ ] AC-08 — Testes sintéticos positivos e negativos têm oráculos previamente
      definidos.
- [ ] AC-09 — Propostas são testadas com regressão de links/IDs/comentários
      HTML.
- [ ] AC-10 — Se a ponte VS Code for requerida, sua cobertura e frescor precisam
      ser provados; se não, não alegar captura integral.

## 8. Riscos e contramedidas

| Risco                                                           | Consequência                                               | Contramedida                                              |
| --------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------- |
| Tomar instalação de extensão por instalação CLI                 | Comando inexistente ou dependência baixada silenciosamente | Comprovar executável e versão antes do gate               |
| Tratar Prettier como linter semântico                           | DONE falso de links e conteúdo                             | Check de formatação separado de verificação de links      |
| Corrigir 863 violações legadas para concluir uma tarefa pequena | Expansão indevida de escopo e regressões                   | Política por escopo e impacto; pendência legada explícita |
| Forçar todos os validadores de todas as linguagens              | Gargalo e erros irrelevantes                               | Matriz de aplicabilidade e motivo de não aplicabilidade   |
| Alterar título para satisfazer âncora                           | Quebrar referências preexistentes                          | Comparar ida/retorno, preservar IDs e executar testes     |

## 9. Sustentação e estado

- **Decisões do usuário:** USR-01 e USR-04; texto das três fontes fornecidas na
  conversa.
- **Inventário declarado:** USR-02; ver matriz completa da FRS/SyRS.
- **Documentação técnica:** lista de
  [fontes externas](./FRS_SyRS_Verificador_Qualidade_Deterministica_v2.0.md#fontes).
- **Resultado da implementação:** NÃO VERIFICADO; nenhum script Python ou
  integração VS Code foi implementado nesta entrega.

**DONE desta URS/BRD:** necessidades, fronteiras, decisões humanas e critérios
de aceite especificados; status PROPOSTA, não homologado.
