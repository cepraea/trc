---
documento_id: 'DOC-TRACE-REF-001'
tipo: 'referencia-tecnica'
versao: '1.0.0'
caminho_canonico: 'tecnicas-rastreabilidade.md'
criado_em: '2026-11-12'
atualizado_em: '2026-11-13'
fase_documento: 'final'
status_aprovacao: 'homologado'
status_implementacao: 'n/a'
---

# Técnicas estruturadas de marcação e rastreabilidade de requisitos e artefatos de engenharia

## Contrato do documento

| Propriedade      | Definição                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| Papel            | referência conceitual das técnicas que sustentam a norma                                             |
| Objetivo         | explicar por que identificadores, metadados, vínculos, decisões e evidências são necessários         |
| Escopo           | fundamentos de rastreabilidade de requisitos, arquitetura, testes e configuração                     |
| Caminho canônico | `tecnicas-rastreabilidade.md`                                                                        |
| Autoridade       | princípios `RT-TECH-*` governam agentes somente quando possuem correspondência normativa             |
| Contexto mínimo  | contrato, princípio marcado e seção conceitual diretamente relacionada                               |
| Dependências     | matriz normativa `RT-TECH-*` e fontes técnicas citadas junto às afirmações                           |
| Restrições       | exemplos não são requisitos; técnica não implantada não pode ser declarada como evidência            |
| Riscos mitigados | escolha sem justificativa, excesso de técnica, conceito tratado como implementação e decisão perdida |

**Domínio:** Engenharia de Sistemas e Software  
**Área central:** Engenharia de Requisitos  
**Especialização operacional:** Rastreabilidade bidirecional de requisitos e
artefatos de engenharia ao longo do ciclo de vida  
**Disciplinas complementares:** Engenharia de Arquitetura, Gestão de Decisões,
Modelagem Formal, Gestão de Configuração e Verificação e Validação

## Convenção de marcação normativa

As marcações `RT-TECH-*` identificam princípios técnicos essenciais que
sustentam a
[matriz normativa correspondente](./regras-rastreabilidade.md#162-principios-tecnicos-que-sustentam-a-norma).
O mesmo marcador deve existir nos dois lados. Exemplos, referências
bibliográficas e técnicas opcionais permanecem sem marca quando não impõem
obrigação ao repositório.

## Glossário de referência

- **Marcação estruturada (_structured markup_):** identificação e classificação
  de elementos por identificadores, atributos, etiquetas ou estruturas
  interpretáveis por pessoas e ferramentas.
- **Identificador persistente:** código único que continua identificando o mesmo
  elemento quando seu conteúdo ou localização muda.
- **Artefato de engenharia:** elemento produzido ou utilizado no
  desenvolvimento, como requisito, decisão, especificação, modelo, componente ou
  teste.
- **Vínculo de rastreabilidade (_trace link_):** relação explícita entre
  elementos identificados.
- **Metadados:** propriedades estruturadas de um elemento, como origem, versão,
  estado e relações.
- **Proveniência:** indicação da origem de uma informação e do contexto em que
  foi produzida.
- **Rastreabilidade bidirecional:** capacidade de percorrer os relacionamentos
  desde sua origem até os produtos derivados e em sentido inverso.
- **Rastreabilidade semântica:** uso de relações cujo significado é
  explicitamente definido, distinguindo, por exemplo, derivação, restrição,
  satisfação e verificação.
- **Análise de impacto:** investigação dos elementos que podem ser afetados por
  uma alteração.

## Introdução — Para que serve a rastreabilidade?

Imagine uma empresa que utiliza um sistema de gestão desenvolvido ao longo de
vários anos. Uma regra de negócio muda, e alguém precisa alterar uma
funcionalidade. O código existe, mas ninguém consegue determinar com segurança
por que ele foi escrito daquela maneira, qual decisão autorizou esse
comportamento, quais outras funcionalidades dependem dele e quais restrições não
podem ser violadas.

Nesse cenário, uma alteração aparentemente pequena pode provocar defeitos,
interromper processos, exigir retrabalho e aumentar custos. Durante uma
auditoria, a empresa também pode ter dificuldade para demonstrar qual exigência
originou determinado controle e quais evidências mostram seu funcionamento.

**Princípio essencial `RT-TECH-001` — A rastreabilidade deve preservar
proveniência e relações entre origem, regra, implementação e evidência.**

**A rastreabilidade preserva as relações entre necessidades, requisitos,
decisões, invariantes, especificações, implementação e evidências.** Seu
propósito é permitir responder perguntas como: **por que isso existe, quem
autorizou, o que depende disso, como foi implementado e o que foi efetivamente
verificado?**

| Situação                          | Problema sem rastreabilidade                                     | Utilidade da rastreabilidade                                                          |
| --------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Refatoração de software           | Alteração de comportamento sem conhecimento de suas dependências | Consultar requisitos, restrições e testes relacionados antes de modificar componentes |
| Mudança de regra de negócio       | Alcance da mudança desconhecido                                  | Identificar artefatos potencialmente afetados                                         |
| Auditoria ou conformidade         | Dificuldade para demonstrar a origem e a aplicação de controles  | Relacionar exigências, controles e evidências identificadas                           |
| Troca de equipe                   | Perda das justificativas de escolhas anteriores                  | Recuperar decisões e seu contexto                                                     |
| Desenvolvimento com agentes de IA | Implementação que ignora regras e restrições relevantes          | Fornecer vínculos explícitos para orientar mudanças e revisões                        |

A rastreabilidade **não garante, por si só, ausência de defeitos, conformidade
legal ou correção da implementação**. Ela oferece uma estrutura para analisar
mudanças, detectar lacunas e examinar evidências. A
[NASA — _Requirements Management_, seção 6.2](https://www.nasa.gov/reference/6-2-requirements-management/)
descreve a rastreabilidade bidirecional, o controle de mudanças e a manutenção
de vínculos entre requisitos, projetos e verificações.

---

## 1. Classificação das técnicas estruturadas

A Engenharia de Requisitos utiliza técnicas complementares para identificar
elementos, explicitar suas relações e manter a rastreabilidade durante o ciclo
de vida. **Marcar um requisito, relacioná-lo a outros artefatos e comprovar sua
implementação são operações distintas.** A
[ISO/IEC/IEEE 29148:2018 — Engenharia de Requisitos](https://www.iso.org/standard/72089.html)
aborda os processos e os itens de informação associados à engenharia de
requisitos. A
[NASA — _Requirements Management_](https://www.nasa.gov/reference/6-2-requirements-management/)
trata expressamente da rastreabilidade bidirecional e de sua manutenção.

| Categoria                         | Técnicas principais                                               | Finalidade                                                           |
| --------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1. Identificação                  | IDs únicos e persistentes, espaços de nomes, âncoras              | Identificar inequivocamente cada elemento                            |
| 2. Marcação documental            | Etiquetas semânticas, atributos e metadados                       | Classificar elementos e registrar propriedades                       |
| 3. Especificação estruturada      | EARS, modelos de requisitos e Gherkin                             | Reduzir ambiguidades e explicitar comportamentos                     |
| 4. Relacionamento semântico       | Vínculos tipados, dependências, derivação, satisfação e restrição | Definir o significado das relações                                   |
| 5. Rastreabilidade tabular        | RTM e matrizes de cobertura e conformidade                        | Exibir associações, lacunas e cobertura                              |
| 6. Rastreabilidade por modelos    | Grafos, SysML e modelos de dependência                            | Representar relações complexas                                       |
| 7. Rastreabilidade de decisões    | ADR, registros de decisão e vínculos de autorização               | Preservar escolhas, justificativas e consequências                   |
| 8. Rastreabilidade de mudanças    | Linhas de base, versionamento e análise de impacto                | Controlar a evolução dos artefatos                                   |
| 9. Rastreabilidade de verificação | Testes vinculados, resultados e evidências                        | Distinguir o que foi especificado do que foi efetivamente verificado |
| 10. Interoperabilidade            | ReqIF e OSLC                                                      | Compartilhar elementos e relações entre ferramentas                  |
| 11. Controle automatizado         | Validação de referências, esquemas e grafos                       | Identificar inconsistências reproduzíveis                            |

**Natureza da classificação:** esta é uma taxonomia operacional que reúne
técnicas de diferentes disciplinas; não é uma lista normativa única publicada
por ISO, NASA ou OMG.

## 2. Técnicas de marcação e identificação

### 2.1. Identificadores únicos e persistentes

Cada unidade rastreável recebe um identificador inequívoco. Uma convenção
possível é:

| Identificador ilustrativo | Tipo de elemento          |
| ------------------------- | ------------------------- |
| `SRC-001`                 | Fonte de origem           |
| `NEC-001`                 | Necessidade               |
| `REQ-001`                 | Requisito                 |
| `DEC-001`                 | Decisão                   |
| `INV-001`                 | Invariante                |
| `ESP-001`                 | Elemento da especificação |
| `CMP-001`                 | Componente                |
| `TST-001`                 | Teste                     |
| `EVD-001`                 | Evidência                 |

Esses prefixos são **exemplos de convenção**, não identificadores impostos por
norma. Na gestão de requisitos, identificação inequívoca e manutenção das
relações permitem reconhecer um elemento ao longo de suas alterações; ver a
[NASA — _Requirements Management_](https://www.nasa.gov/reference/6-2-requirements-management/).

Propriedades recomendadas:

**Princípio essencial `RT-TECH-002` — Toda unidade rastreável deve possuir ID
único, persistente e não reutilizável.**

- **Unicidade:** elementos diferentes não compartilham o mesmo identificador.
- **Persistência:** o ID não muda apenas porque o texto ou o arquivo mudou.
- **Não reutilização:** um ID descontinuado não identifica outro elemento.

### 2.2. Marcação semântica e metadados

**Princípio essencial `RT-TECH-013` — Metadados rastreáveis devem usar
vocabulário controlado, cardinalidade explícita e validação que lhes atribua
função operacional.**

Um identificador pode ser acompanhado de propriedades e relações estruturadas.
Em um arquivo Markdown, por exemplo, pode-se utilizar _frontmatter_ YAML:

```yaml
---
id: REQ-001
tipo: requisito
titulo: Restricao_de_acesso
estado: proposto
origem:
  - SRC-001
derivado_de:
  - NEC-001
restringido_por:
  - INV-001
decisao_relacionada:
  - DEC-001
versao: '0.1'
---
```

YAML é uma **forma de representação de dados**. Os nomes dos campos acima são
convenções ilustrativas que precisam de definições de significado e validação no
contexto do projeto. O preenchimento desses campos não comprova a correção do
requisito nem a legitimidade de suas relações.

### 2.3. Marcação da localização precisa da fonte

Registrar apenas o nome do documento de origem pode ser insuficiente. Uma
referência mais precisa identifica a versão, a seção e o trecho de origem:

```yaml
id: SRC-001
documento: 'regras-de-acesso.md'
versao: '1.2'
secao: '4.3'
trecho: 'paragrafo-07'
```

**Princípio essencial `RT-TECH-003` — A localização da fonte deve usar
referência estável e preservar o contexto de versão.**

Quando o documento muda, números de linha ou parágrafo podem perder
estabilidade. Por isso, localização textual deve ser vinculada a uma versão ou
referência estável.

## 3. Técnicas de relacionamento semântico

### 3.1. Vínculos tipados (_typed traceability links_)

**Princípio essencial `RT-TECH-004` — Todo vínculo deve declarar um tipo com
significado definido, não apenas associar dois IDs.**

Um vínculo tipado registra **que tipo de relação** une dois elementos, e não
apenas que ambos estão associados. O
[OASIS OSLC Requirements Management 2.1 — Vocabulary, seção 3.1.2](https://docs.oasis-open-projects.org/oslc-op/rm/v2.1/ps02/requirements-management-vocab.html)
define propriedades como `constrainedBy`, `decomposes`, `implementedBy`,
`satisfiedBy`, `satisfies`, `specifiedBy` e `validatedBy`.

O quadro seguinte é uma **proposta de vocabulário em português**, não uma
tradução normativa integral do OSLC:

| Relação            | Significado                                    | Exemplo de vínculo |
| ------------------ | ---------------------------------------------- | ------------------ |
| `deriva_de`        | Elemento originado de outro                    | REQ-001 → NEC-001  |
| `justificada_por`  | Justificativa documental identificada          | REQ-001 → SRC-001  |
| `autorizada_por`   | Decisão de autoridade aplicável                | REQ-001 → DEC-001  |
| `restringida_por`  | Condição limitadora                            | REQ-001 → INV-001  |
| `especificada_por` | Artefato que detalha o requisito               | REQ-001 → ESP-001  |
| `satisfeita_por`   | Elemento de solução relacionado ao atendimento | REQ-001 → CMP-001  |
| `verificada_por`   | Procedimento de verificação associado          | REQ-001 → TST-001  |
| `substitui`        | Sucessão entre elementos                       | DEC-002 → DEC-001  |
| `depende_de`       | Dependência necessária                         | REQ-002 → REQ-001  |

Exemplo de vínculo declarado:

```yaml
id: LINK-001
origem: REQ-001
tipo: restringida_por
destino: INV-001
justificativa: >
  A condição definida em INV-001 limita o comportamento de REQ-001.
estado: proposto
```

**Princípio essencial `RT-TECH-005` — Integridade estrutural e correção
semântica devem ser avaliadas separadamente.**

Há duas verificações diferentes:

- **Integridade estrutural:** os identificadores existem e a relação está
  prevista no metamodelo.
- **Correção semântica:** a relação declarada corresponde ao significado dos
  elementos e está sustentada.

A primeira pode ser verificada por regras determinísticas. A segunda requer
exame das definições, decisões e evidências pertinentes.

### 3.2. Ontologias e metamodelos de rastreabilidade

**Princípio essencial `RT-TECH-006` — Um metamodelo deve definir classes,
relações permitidas e restrições de integridade.**

Um metamodelo define categorias de elementos e quais relações podem existir
entre elas. Também pode estabelecer condições de integridade, como:

| Regra proposta                  | Restrição                                                                   |
| ------------------------------- | --------------------------------------------------------------------------- |
| Requisito → origem              | A origem deve existir ou a derivação precisa ser explicitamente justificada |
| Decisão → autorização           | A decisão deve registrar autoridade e estado aplicáveis                     |
| Invariante → comportamento      | A relação precisa identificar o comportamento restringido                   |
| Teste → requisito               | A associação deve indicar o critério observável                             |
| Evidência → execução            | O registro precisa identificar o resultado efetivamente obtido              |
| Decisão substituída → sucessora | A sucessão não deve criar circularidade incompatível com seu significado    |

O metamodelo permite rejeitar relacionamentos estruturalmente inválidos, mas não
substitui a avaliação da correção ou da autoridade da decisão.

## 4. Técnicas de rastreabilidade tabular e por grafos

**Princípio essencial `RT-TECH-007` — A cobertura deve ser consultável nos
sentidos direto e inverso, por matriz ou grafo equivalente.**

### 4.1. Matriz de Rastreabilidade de Requisitos (RTM)

A _Requirements Traceability Matrix_ (RTM) apresenta relações entre requisitos,
origem, especificação e verificação. A
[NASA — _Requirements Management_, seção 6.2.1.2.3](https://www.nasa.gov/reference/6-2-requirements-management/)
descreve o registro da rastreabilidade em matrizes ou ferramentas de modelagem.

| Requisito | Origem  | Decisão | Invariante | Especificação | Teste   |
| --------- | ------- | ------- | ---------- | ------------- | ------- |
| REQ-001   | NEC-001 | DEC-001 | INV-001    | ESP-001       | TST-001 |
| REQ-002   | NEC-002 | —       | INV-002    | ESP-002       | TST-002 |
| REQ-003   | NEC-003 | DEC-002 | —          | ESP-003       | —       |

As linhas são **hipotéticas**. Uma célula vazia indica ausência daquela relação
na matriz, e não necessariamente descumprimento. A obrigatoriedade do vínculo
depende do tipo de elemento, da fase e dos critérios do projeto.

### 4.2. Grafos de rastreabilidade

Um grafo representa **elementos como nós** e **relações tipadas como arestas**.
Uma cadeia conceitual poderia conter:

```text
NEC-001 ──deriva──> REQ-001 ──especificada_por──> ESP-001
                         │                          │
                         ├──restringida_por──> INV-001
                         │
                         └──verificada_por──> TST-001 ──produz──> EVD-001
```

A orientação das setas nesse exemplo é apenas parte da convenção declarada. Para
percursos inversos, consulta-se a relação no sentido contrário sem presumir que
seu significado também seja invertido.

Grafos permitem perguntar, por exemplo, quais requisitos e testes são afetados
por uma decisão ou quais componentes dependem de uma determinada restrição. A
[ISO/IEC/IEEE 42010:2022 — _Architecture description_](https://www.iso.org/standard/74393.html)
trata dos elementos e das relações em descrições de arquitetura; a
[OMG — SysML 2.0](https://www.omg.org/spec/SysML/2.0) é uma referência para
modelagem estruturada de sistemas.

## 5. Técnicas de escrita e especificação estruturada

### 5.1. EARS — _Easy Approach to Requirements Syntax_

EARS emprega padrões linguísticos para tornar requisitos textuais mais uniformes
e menos ambíguos. Foi apresentada por **Alistair Mavin, Philip Wilkinson, Adrian
Harwood e Mark Novak** no artigo _Easy Approach to Requirements Syntax (EARS)_,
publicado na conferência IEEE Requirements Engineering de 2009. As cinco
modalidades abaixo foram conferidas no
[guia EARS do próprio Alistair Mavin — seção _The EARS Patterns_](https://alistairmavin.com/ears/)
e na
[referência acadêmica da Universidade de Manchester](https://research.manchester.ac.uk/en/publications/easy-approach-to-requirements-syntax-ears/).

Os padrões originais utilizam palavras-chave em inglês. As formulações em
português abaixo são **adaptações explicativas**, e os exemplos são
ilustrativos, não citações literais.

**1. Ubiquitous — requisito permanente:**

Aplica-se quando a propriedade ou o comportamento exigido é permanente, sem
gatilho específico.

- **Forma:** `O [sistema] deverá [resposta ou propriedade].`
- **Exemplo:**
  `O sistema deverá impedir alterações de registros por usuários sem autorização.`
- **Distinção:** não utiliza um evento disparador; nem todo requisito permanente
  precisa ser formalizado como invariante matemático.

**2. Event-driven — orientado a evento:**

Especifica a resposta exigida quando um evento acontece.

- **Forma:** `Quando [evento], o [sistema] deverá [resposta].`
- **Exemplo:**
  `Quando um usuário autorizado confirmar uma alteração, o sistema deverá registrar a autoria e o horário da operação.`
- **Distinção:** o gatilho é uma ocorrência, não um estado que permanece
  verdadeiro.

**3. State-driven — orientado a estado:**

Especifica o comportamento exigido enquanto uma condição se mantém.

- **Forma:** `Enquanto [estado], o [sistema] deverá [resposta].`
- **Exemplo:**
  `Enquanto um registro estiver em revisão, o sistema deverá impedir sua exclusão.`
- **Distinção:** a aplicabilidade acompanha a duração do estado.

**4. Optional feature — funcionalidade opcional:**

Especifica um comportamento exigido em configurações ou produtos que incluem
determinada funcionalidade.

- **Forma:**
  `Onde [funcionalidade estiver incluída], o [sistema] deverá [resposta].`
- **Exemplo:**
  `Nas configurações que incluam o módulo de auditoria avançada, o sistema deverá disponibilizar relatórios detalhados de alterações.`
- **Distinção:** _opcional_ descreve a presença da funcionalidade; quando ela
  está presente e o requisito se aplica, seu cumprimento não se torna
  facultativo.

**5. Unwanted behaviour — comportamento indesejado:**

Especifica a resposta exigida diante de uma falha, entrada inválida ou outra
situação não desejada.

- **Forma:** `Se [condição indesejada], então o [sistema] deverá [resposta].`
- **Exemplo:**
  `Se forem fornecidas credenciais inválidas, então o sistema deverá rejeitar a autenticação.`
- **Distinção:** define a reação à condição indesejada, sem presumir que toda
  falha seja evitável.

**Requisitos complexos — combinação de padrões:**

EARS também admite requisitos com mais de uma condição ou palavra-chave,
conforme o
[guia do autor — _Complex requirements_](https://alistairmavin.com/ears/).

- **Forma combinada:**
  `Enquanto [estado], quando [evento], o [sistema] deverá [resposta].`
- **Exemplo:**
  `Enquanto um registro estiver bloqueado, quando um usuário tentar modificá-lo, o sistema deverá rejeitar a operação.`

**Princípio essencial `RT-TECH-008` — Texto estruturado ou cenário escrito não
substitui vínculo rastreável nem evidência de execução.**

As modalidades EARS orientam a escrita do requisito. **Elas não criam
automaticamente vínculos de rastreabilidade, nem demonstram que o sistema atende
ao requisito.**

### 5.2. Gherkin e marcação por etiquetas

Gherkin estrutura exemplos de comportamento por meio de cenários e permite
associar etiquetas (_tags_) a eles. A sintaxe e os mecanismos de etiquetas
constam da
[documentação oficial Cucumber — _Gherkin Reference_](https://cucumber.io/docs/gherkin/reference/).

```gherkin
# language: pt
@REQ-001 @INV-001
Funcionalidade: Proteção de registros

  Cenário: Bloquear alteração não autorizada
    Dado que o usuário não possui permissão
    E que existe um registro protegido
    Quando ele tenta modificar o registro
    Então o sistema rejeita a operação
    E o registro permanece inalterado
```

As etiquetas `@REQ-001` e `@INV-001` constituem uma **convenção de ligação**
entre cenários e identificadores. Gherkin descreve comportamentos; a execução
real depende de definições de passos e de um ambiente de testes. **Um cenário
escrito não é evidência de um teste executado.**

## 6. Técnicas para decisões, invariantes e mudanças

### 6.1. _Architecture Decision Records_ (ADR)

ADRs registram decisões de arquitetura, contexto, justificativas, estado e
consequências. O
[_Architectural Decision Record Framework_ do governo do Reino Unido, publicado em 2025](https://www.gov.uk/government/publications/architectural-decision-record-framework/architectural-decision-record-framework),
apresenta essa prática como instrumento de visibilidade, rastreabilidade e
governança.

| Campo ilustrativo | Finalidade                                     |
| ----------------- | ---------------------------------------------- |
| ID                | Identificação persistente                      |
| Contexto          | Problema que exige decisão                     |
| Alternativas      | Opções consideradas                            |
| Decisão           | Escolha realizada                              |
| Autoridade        | Quem podia aprová-la                           |
| Justificativa     | Critérios e evidências considerados            |
| Consequências     | Impactos e compromissos                        |
| Estado            | Proposta, aceita, substituída etc.             |
| Relações          | Requisitos, invariantes e componentes afetados |

Os campos constituem um **modelo ilustrativo de registro**, não uma reprodução
obrigatória do framework citado.

### 6.2. Contratos formais e invariantes

Para propriedades cujo cumprimento exige verificação rigorosa, podem ser usados
contratos e métodos formais. O
[SWEBOK v4.0a — IEEE Computer Society](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4)
reúne áreas de conhecimento relativas a requisitos, construção, arquitetura e
métodos de engenharia de software.

| Técnica               | Aplicação                                                             |
| --------------------- | --------------------------------------------------------------------- |
| Pré-condições         | Condições necessárias antes da operação                               |
| Pós-condições         | Propriedades que devem valer após a operação                          |
| Invariantes de estado | Propriedades que devem permanecer verdadeiras nos estados pertinentes |
| Lógica temporal       | Propriedades de comportamento ao longo do tempo                       |
| _Model checking_      | Verificação sistemática de propriedades em um modelo                  |

Exemplo conceitual:

```text
INV-001

Para todo registro protegido:
  se a alteração foi efetivada,
  então seu autor possuía permissão válida
  no momento da operação.
```

Um invariante pode restringir vários requisitos e componentes. A verificação
formal demonstra propriedades **sob hipóteses e modelos definidos**, não
automaticamente o comportamento de toda implementação em produção.

### 6.3. Versionamento, linhas de base e análise de impacto

**Princípio essencial `RT-TECH-009` — Mudanças devem preservar histórico, linha
de base, vínculos e análise de impacto.**

A gestão de configuração preserva versões e alterações relevantes. A
[NASA — _Requirements Management_](https://www.nasa.gov/reference/6-2-requirements-management/)
descreve controle de mudanças, linhas de base e manutenção das relações de
requisitos.

| Técnica                    | Finalidade                                          |
| -------------------------- | --------------------------------------------------- |
| Linha de base (_baseline_) | Fixar uma versão aprovada como referência           |
| Histórico de alterações    | Registrar a evolução dos artefatos                  |
| Versionamento de vínculos  | Identificar quais versões estavam relacionadas      |
| Análise de impacto         | Investigar os elementos afetados                    |
| Suspeição de vínculos      | Sinalizar relações para reavaliação após alterações |
| Gestão de substituição     | Preservar sucessão de decisões e especificações     |

## 7. Técnicas de interoperabilidade

Há padrões específicos para representar, trocar ou integrar requisitos e modelos
entre ferramentas.

| Padrão                                        | Finalidade                                                        | Fonte oficial                                                                                                                   |
| --------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **ReqIF** — _Requirements Interchange Format_ | Intercâmbio de requisitos, atributos e relações entre ferramentas | [OMG — ReqIF 1.2](https://www.omg.org/spec/ReqIF)                                                                               |
| **OSLC Requirements Management**              | Vocabulário e integração de recursos e vínculos de engenharia     | [OASIS — OSLC RM 2.1, Vocabulary](https://docs.oasis-open-projects.org/oslc-op/rm/v2.1/ps02/requirements-management-vocab.html) |
| **SysML 2.0** — _Systems Modeling Language_   | Modelagem de sistemas e de relações entre elementos               | [OMG — SysML 2.0](https://www.omg.org/spec/SysML/2.0)                                                                           |

As finalidades são distintas. Nenhum desses padrões é obrigatório apenas porque
um projeto registra requisitos em arquivos Markdown. A adoção depende de uma
necessidade concreta de interoperabilidade, integração ou modelagem.

## 8. Técnicas de verificação da rastreabilidade

**Princípio essencial `RT-TECH-010` — Unicidade, referências, tipos, cobertura e
rastreabilidade inversa devem ser verificáveis automaticamente quando
determinísticos.**

Manter a rastreabilidade exige verificar o estado dos vínculos, não apenas
armazená-los. O
[SEBoK — _Requirements Management_](https://sebokwiki.org/wiki/Requirements_Management)
descreve a gestão de requisitos como atividade transversal ao ciclo de vida,
incluindo linhas de base, mudanças e relações com outros artefatos.

| Controle                | O que identifica                                 | Automatização possível                        |
| ----------------------- | ------------------------------------------------ | --------------------------------------------- |
| Unicidade dos IDs       | Identificadores duplicados                       | Alta                                          |
| Integridade referencial | Referências a elementos inexistentes             | Alta                                          |
| Validade de tipos       | Relações proibidas pelo metamodelo               | Alta                                          |
| Rastreabilidade inversa | Elementos sem relações de origem esperadas       | Alta                                          |
| Ciclos indevidos        | Relações circulares proibidas por suas regras    | Alta                                          |
| Cobertura               | Requisitos sem vínculos obrigatórios para a fase | Alta, com regras definidas                    |
| Consistência de versões | Vínculos entre versões incompatíveis             | Alta, com metadados suficientes               |
| Autoridade decisória    | Decisões sem autorização competente              | Parcial; depende de evidência de aprovação    |
| Consistência semântica  | Relações incoerentes com o conteúdo              | Depende de revisão ou técnicas formais        |
| Conformidade observada  | Requisitos efetivamente atendidos                | Depende de execução e avaliação de evidências |

**Princípio essencial `RT-TECH-011` — Aprovação estrutural, aprovação semântica
e evidência do produto são conclusões distintas.**

É necessário separar três tipos de conclusão:

1. **PASS estrutural:** identificadores e vínculos obedecem às regras de
   integridade.
2. **PASS semântico:** as relações examinadas têm significado correto e
   sustentado.
3. **PASS de verificação do produto:** evidências de execução demonstram
   atendimento aos critérios aplicáveis.

**Um resultado não substitui os outros.** PASS local em um controle também não
aprova automaticamente todo o sistema.

## 9. Combinação proporcional de técnicas

**Princípio essencial `RT-TECH-012` — Técnicas devem ser adotadas
proporcionalmente e não podem ser declaradas implementadas sem evidência.**

Em um ambiente de Markdown, Obsidian, Git e desenvolvimento com agentes de IA,
uma composição operacional possível é:

| Técnica                   | Prioridade proposta        | Justificativa                                          |
| ------------------------- | -------------------------- | ------------------------------------------------------ |
| IDs persistentes          | Essencial                  | Permitem referenciar cada artefato                     |
| Metadados estruturados    | Essencial                  | Tornam propriedades e vínculos processáveis            |
| Links semânticos tipados  | Essencial                  | Preservam o significado dos relacionamentos            |
| Matriz de rastreabilidade | Essencial                  | Permite consultar associações e cobertura              |
| ADR                       | Conforme aplicação         | Preserva decisões arquiteturais e consequências        |
| Versionamento Git         | Essencial no repositório   | Preserva histórico de alterações                       |
| Validação de integridade  | Recomendado                | Detecta erros estruturais recorrentes                  |
| EARS/Gherkin              | Conforme tipo de requisito | Estrutura requisitos e cenários                        |
| Grafo de rastreabilidade  | Conforme complexidade      | Facilita análise de dependências                       |
| Métodos formais           | Conforme criticidade       | Permitem analisar propriedades específicas             |
| ReqIF/OSLC/SysML          | Sob demanda                | Atendem necessidades de interoperabilidade e modelagem |

**Natureza da recomendação:** a tabela é uma proposta de composição técnica e
não afirma que as práticas já estejam implementadas ou homologadas em um projeto
específico.

### Fontes primárias e localizações verificáveis

As URLs abaixo identificam publicações concretas, e os vínculos aparecem também
junto às afirmações pertinentes ao longo do texto. Os endereços são links
diretos para as páginas das organizações responsáveis ou dos autores, **não
substitutos sintéticos de citações**.

| Fonte                                                                                                                                                                            | Instituição ou autoria            | Localização aplicável                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------- |
| [ISO/IEC/IEEE 29148:2018](https://www.iso.org/standard/72089.html)                                                                                                               | ISO/IEC/IEEE                      | Página da norma e resumo público (_Abstract_)                                            |
| [NASA — _Requirements Management_](https://www.nasa.gov/reference/6-2-requirements-management/)                                                                                  | NASA                              | Seção 6.2, especialmente 6.2.1.2.3, _Conduct Expectations and Requirements Traceability_ |
| [SEBoK — _Requirements Management_](https://sebokwiki.org/wiki/Requirements_Management)                                                                                          | SEBoK                             | _Purpose and Definition_; _Configuration Management and Change Control_                  |
| [EARS — Guia do autor](https://alistairmavin.com/ears/)                                                                                                                          | Alistair Mavin                    | _The EARS Patterns_; _Complex requirements_                                              |
| [EARS — Artigo de 2009](https://research.manchester.ac.uk/en/publications/easy-approach-to-requirements-syntax-ears/)                                                            | Mavin, Wilkinson, Harwood e Novak | Registro da publicação e resumo acadêmico                                                |
| [OASIS — OSLC RM 2.1 Vocabulary](https://docs.oasis-open-projects.org/oslc-op/rm/v2.1/ps02/requirements-management-vocab.html)                                                   | OASIS Open                        | Seção 3.1.2, _Properties in this namespace_                                              |
| [Cucumber — _Gherkin Reference_](https://cucumber.io/docs/gherkin/reference/)                                                                                                    | Cucumber                          | _Keywords_; _Tags_; _Localisation_                                                       |
| [GOV.UK — _Architectural Decision Record Framework_](https://www.gov.uk/government/publications/architectural-decision-record-framework/architectural-decision-record-framework) | Governo do Reino Unido            | _Introduction_ e orientações sobre registros de decisão                                  |
| [ISO/IEC/IEEE 42010:2022](https://www.iso.org/standard/74393.html)                                                                                                               | ISO/IEC/IEEE                      | Página da norma e resumo público (_Abstract_)                                            |
| [SWEBOK v4.0a](https://www.computer.org/education/bodies-of-knowledge/software-engineering/v4)                                                                                   | IEEE Computer Society             | Página oficial da edição                                                                 |
| [ReqIF 1.2](https://www.omg.org/spec/ReqIF)                                                                                                                                      | Object Management Group           | _Specification Documents_                                                                |
| [SysML 2.0](https://www.omg.org/spec/SysML/2.0)                                                                                                                                  | Object Management Group           | _Specification Documents_                                                                |

**Limite documental:** as páginas públicas das normas ISO identificam o
documento e seu escopo, mas não comprovam cláusulas específicas do texto
integral não consultado. Não há chamadas editoriais sintéticas de fontes neste
documento final. Quando uma correspondência original não é identificável,
nenhuma fonte é atribuída por conjectura: cita-se a publicação efetivamente
pertinente à afirmação ou elimina-se a chamada sem sustentação.

### Conclusão

A unidade fundamental de uma rastreabilidade tecnicamente estruturada não é o
documento nem a tabela: **é o elemento identificado e a relação semanticamente
definida entre elementos**. A matriz apresenta relações; o grafo permite
percorrê-las; o controle de versões preserva seu contexto; e a verificação
determina o que as relações e evidências efetivamente sustentam.

**SUSTENTADO INTEGRALMENTE:** identificação, gestão de requisitos,
rastreabilidade bidirecional e manutenção de vínculos estão documentadas por
fontes competentes, especialmente NASA, SEBoK e ISO/IEC/IEEE 29148.

**SUSTENTADO INTEGRALMENTE:** EARS dispõe de cinco padrões fundamentais e
combinações complexas, conforme o guia do autor e a publicação original.

**PROPOSTA OPERACIONAL:** combinar identificadores persistentes, metadados,
vínculos tipados, rastreabilidade tabular e controles proporcionais de
integridade e verificação, sem confundir vínculo documental com conformidade
demonstrada.
