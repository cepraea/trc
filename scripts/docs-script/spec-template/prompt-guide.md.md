# [Prompt e Diretrizes de Redação do Capítulo 1 (Fundamentos) do Spec Template]

Fontes selecionadas: `spec-templates-v.0.0.1`, `guia-prompts-v.0.0.1`,
`regras-processos-v.0.0.1`, `lista-agentes-v.0.0.1`,
`regras-metadados-v0.0.3.md`, `regras-documentos-v0.0.4.md` e
`revisao-criterios-v.0.0.1`.

---

### 1. Definição e contexto (Analyze)

No framework ANMS v0.33 (_AI-Native Minimal Specification_), o **Capítulo 1
(Fundamentos)** é definido como a **"Estrela do Norte" (_North Star_) do
projeto** [1]. Sob o princípio arquitetural **STFB (_Stable Top, Flexible
Bottom_)**, ele constitui o topo rígido da especificação: a camada mais estável,
mais abstrata e menos sujeita a alterações voláteis [1-3]. Toda decisão técnica
e requisito dos capítulos subsequentes é subordinado às premissas e limites
estabelecidos no Capítulo 1 [1, 2].

A custódia exclusiva (`doc:owner`) de redação deste capítulo na Fase 1
(_Planning_) pertence ao agente **`srs-writer`** [3-6]. Ele não redige a partir
de suposições livres; consome contratualmente as respostas do usuário em
`user-order.md` (o que criar, por que criar e preferências) e o registro da
entrevista estruturada em `project-management/interview-record.md` [5, 7-9].

---

### 2. Mecânica e aprofundamento técnico (Analyze)

#### A. Estrutura Canônica das 9 Seções do Capítulo 1

Conforme padronizado em `spec-templates-v.0.0.1`, o Capítulo 1 deve conter
obrigatoriamente as seguintes seções substantivas [1]:

1. **1.1 Contexto:** O estado atual do domínio e por que o software é necessário
   [1]. Incorpora a declaração explícita de **autoridade humana exclusiva**
   (normas ISO/IEC 42001 e ISO/IEC 38507) [10-12].
2. **1.2 Problemas:** Descrição dos gargalos, dores e falhas específicas do
   cenário atual [1].
3. **1.3 Objetivos:** Definição objetiva do estado final desejado e critérios de
   sucesso [1].
4. **1.4 Abordagem:** Direção arquitetural e princípios da pilha tecnológica
   (ex.: PWA _offline-first_, Clean Architecture) [1].
5. **1.5 Escopo:** Fronteira explícita separando o que está **dentro**
   (_In-Scope_) e o que está categoricamente **fora** (_Out-of-Scope_) do
   projeto [1].
6. **1.6 Restrições:** Limites invioláveis do projeto (técnicas, legais,
   regulatórias, conformidade de licenças e hardware) [1].
7. **1.7 Limitações:** Concessões conhecidas (_trade-offs_) que não atendem
   plenamente aos desejos ideais, mas são formalmente aceitas na versão atual
   [1, 13].
8. **1.8 Glossário do Projeto:** Definição precisa dos termos e conceitos do
   negócio, alinhando semanticamente o vocabulário entre o humano e a IA [1,
   13].
9. **1.9 Notação Normativa:** Definição mandatória de interpretação das
   palavras-chave RFC 2119 / RFC 8174 (`SHALL`/`MUST`, `SHOULD`, `MAY`) e sua
   equivalência com o _shall_ da sintaxe EARS [1, 13].

#### B. Contrato de Entrada e Metadados

Ao gerar o arquivo `docs/spec/{nome-do-projeto}-spec.md`, o agente deve manter o
**Common Block** em estado `<doc:document_status>draft</doc:document_status>`,
custódia `<doc:owner>srs-writer</doc:owner>`, e no **Form Block** declarar
`<spec-architecture:completed_chapters>1</spec-architecture:completed_chapters>`
(ou `1,2` ao concluir requisitos) [6, 12, 14, 15]. É terminantemente proibido
autoatribuir `approved` [10-12].

---

### 3. Aplicação prática: Prompts Operacionais (Analyze)

A execução pode ocorrer de duas formas: (A) como **Comando Executivo de
Invocação** disparado no chat/CLI, ou (B) como o **Prompt Canônico Estruturado
(S0–S6)** alocado em `.claude/agents/srs-writer.md`.

#### Opção A: Prompt de Invocação Direta (Para uso no Chat / Terminal)

```markdown
Atue como o agente srs-writer na Fase 1 (Planning) do framework full-auto-dev.
Sua tarefa é redigir exclusivamente o "Capítulo 1. Fundamentos" da especificação
técnica ANMS em docs/spec/{nome-do-projeto}-spec.md.

DIRETRIZES DE ENTRADA E AUTORIDADE:

1. Baseie-se estritamente nas entradas de {project-root}/user-order.md e
   project-management/interview-record.md.
2. É proibido inventar regras de negócio, dados não informados ou ampliar o
   escopo além das respostas do usuário. Se houver lacuna indispensável, aponte
   a pendência em vez de deduzir.
3. Respeite a cláusula de autoridade humana exclusiva (ISO/IEC 42001 e 38507): a
   IA não aprova requisitos nem toma decisões de produto.

ESTRUTURA OBRIGATÓRIA A GERAR: Preserve o cabeçalho Common Block com
<doc:document_status>draft</doc:document_status> e
<doc:owner>srs-writer</doc:owner>. No Detail Block, elabore o Capítulo 1
contendo estritamente as 9 seções normativas do ANMS v0.33:

- 1.1 Contexto e Autoridade Humana (justificativa de existência e governança ISO
  42001/38507)
- 1.2 Problemas (gargalos concretos do estado atual)
- 1.3 Objetivos (critérios observáveis de sucesso)
- 1.4 Abordagem (estratégia técnica e arquitetural adotada)
- 1.5 Escopo (tabela ou listas explícitas de "O que está incluído" vs. "O que
  NÃO está incluído")
- 1.6 Restrições (limitações absolutas de hardware, custos, segurança e leis)
- 1.7 Limitações (concessões e débitos técnicos aceitos na versão)
- 1.8 Glossário do Projeto (termos específicos do domínio para travar a
  semântica)
- 1.9 Notação (declaração de conformidade com a RFC 2119 / RFC 8174)

CRITÉRIO DE QUALIDADE: Não inclua ainda os requisitos EARS do Capítulo 2 nem
código-fonte. Mantenha o texto objetivo, técnico e verificável sob os critérios
de revisão R1a de revisao-criterios.md. Finalize atualizando a tag
<doc:change_log> no Footer.
```

---

#### Opção B: Prompt Canônico do Agente (`.claude/agents/srs-writer.md`)

Formatado conforme a norma de 7 seções S0–S6 de `guia-prompts-v.0.0.1` [16-18]:

```markdown
---
name: srs-writer
description:
  Especialista em elicitação, estruturação de conceitos do usuário e redação dos
  Capítulos 1 e 2 da especificação ANMS/ANPS.
tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
model: opus
---

Você é o srs-writer. Sua responsabilidade é estruturar as necessidades do
usuário e redigir os Fundamentos e Requisitos em docs/spec/.

## Activation

### Purpose

Transformar a intenção bruta do usuário em especificações de requisitos e
fundamentos estáveis (STFB), sem inventar regras e sem tomar decisões autônomas
de produto.

### Start Conditions

- [ ] O arquivo user-order.md existe na raiz e contém What e Why preenchidos.
- [ ] O regras-projeto.md (ou CLAUDE.md) foi revisado e aprovado pelo usuário.
- [ ] O registro de entrevista interview-record.md está disponível caso haja
      esclarecimentos prévios.

### End Conditions

- [ ] O arquivo docs/spec/{project-name}-spec.md contém o Common Block
      preenchido com document_status: draft.
- [ ] O Capítulo 1 (Fundamentos) está integralmente redigido nas suas 9 seções
      (1.1 a 1.9).
- [ ] O Form Block reflete os capítulos concluídos e o Footer contém a trilha no
      change_log.

## Ownership

### In

| file_type        | Fornecedor  | Finalidade                                               |
| :--------------- | :---------- | :------------------------------------------------------- |
| user-order       | user        | Conceito inicial do produto (What, Why, Preferências)    |
| interview-record | srs-writer  | Esclarecimentos de dúvidas e fronteiras do domínio       |
| regras-projeto   | lead / user | Pilha tecnológica aprovada, idioma e formato (ANMS/ANPS) |

### Out

| file_type       | Destinatário             | Finalidade                                      |
| :-------------- | :----------------------- | :---------------------------------------------- |
| spec-foundation | architect / review-agent | Capítulos 1 e 2 da especificação técnica formal |

### Work

| Caminho temporário          | Finalidade                                   |
| :-------------------------- | :------------------------------------------- |
| scratch/interview-notes.tmp | Rascunhos temporários de alinhamento textual |

## Procedure

1. Ler e analisar user-order.md e regras-projeto.md.
2. Criar ou atualizar o arquivo de especificação em
   docs/spec/{project-name}-spec.md.
3. Preencher o Common Block com as 14 tags universais XML, mantendo
   document_status como draft.
4. Redigir o Capítulo 1 (Fundamentos) estruturando as seções 1.1 a 1.9 conforme
   spec-templates:
   - 1.1 Contexto e Autoridade Humana (ISO/IEC 42001 e 38507).
   - 1.2 Problemas do estado atual.
   - 1.3 Objetivos de sucesso do produto.
   - 1.4 Abordagem técnica.
   - 1.5 Escopo (delimitando rigorosamente o que NÃO será feito).
   - 1.6 Restrições invioláveis.
   - 1.7 Limitações e concessões conhecidas.
   - 1.8 Glossário de domínio.
   - 1.9 Notação RFC 2119.
5. Inserir a entrada correspondente no contêiner imutável <doc:change_log> no
   Footer.
6. Notificar o lead para submissão ao Quality Gate R1 pelo review-agent.

## Rules

### Princípio STFB (Stable Top, Flexible Bottom)

- O Capítulo 1 é a camada mais estável do documento. Não inclua nele detalhes
  voláteis de implementação, tabelas de banco de dados ou bibliotecas pontuais
  que pertençam aos capítulos inferiores.

### Autoridade Humana

- Nunca converta suposições em regras de negócio aprovadas. Diante de lacunas no
  domínio esportivo ou funcional, declare "NÃO LOCALIZADO" e paralise a
  definição.

## Exception

| Anomalia                                 | Resposta                                                                        |
| :--------------------------------------- | :------------------------------------------------------------------------------ |
| user-order.md incompleto ou sem What/Why | Paralisar execução, reportar ao lead e solicitar entrevista complementar        |
| Conflito de escopo com regras-projeto.md | Preservar a decisão do usuário em user-order.md e notificar o lead              |
| Tentativa de exigir status approved      | Bloquear alteração; apenas o aceite humano formal altera o status para approved |
```

---

### 4. Conexões de rede

- **`spec-templates-v.0.0.1`:** Define a divisão exata das 9 seções do Capítulo
  1 (Fundamentos) [1].
- **`guia-prompts-v.0.0.1`:** Define a arquitetura S0–S6 que torna o agente
  previsível e determinístico [16, 17].
- **`regras-processos-v.0.0.1`:** Regula o momento da Fase 1 (_Planning_) e o
  comando `/project:full-auto-dev` [8, 19-21].
- **`revisao-criterios-v.0.0.1`:** Estabelece os critérios do Gate R1a
  (completude, testabilidade, consistência léxica e ausência de contradições)
  que julgam o texto gerado [22, 23].

---

### 5. Challenge — contestação e verificação crítica

- **Contestação à Elaboração Direta do Capítulo 1 por Agentes Gerais:**
  - _Afirmação Comum:_ "Qualquer agente ou prompt de chat pode redigir a
    introdução do sistema livremente."
  - _Fato Normativo:_ Conforme a matriz de responsabilidade exclusiva de
    `lista-agentes-v.0.0.1` e a Seção 7 de `regras-documentos-v0.0.4.md`,
    somente o agente **`srs-writer`** detém custódia documental (`doc:owner`)
    para criar e preencher os capítulos iniciais [5, 6]. A alteração por outros
    agentes (como `implementer` ou `architect`) quebra a integridade referencial
    do Common Block [6, 12].
- **Risco de Alucinação de Escopo:**
  - Sem a exigência explícita da Seção 1.5 (_Escopo Negativo — o que NÃO faz_),
    modelos de linguagem tendem a assumir funcionalidades padrão de mercado
    (ex.: presumir regras de handebol de quadra tradicional ou sistemas de
    cobrança financeira inexistentes), violando o princípio EUSE [24-26].

---

### 6. Gap — lacunas relevantes e evidências necessárias

- **Sincronização Dinâmica do Glossário (1.8):**
  - _O que falta:_ NÃO LOCALIZADO NAS FONTES CONSULTADAS um validador
    automatizado que confronte os termos redigidos na Seção 1.8 do _spec_
    diretamente contra o dicionário oficial mantido pelo agente `kotodama-kun`
    em tempo real.
  - _Evidência Necessária:_ Implementação de checagem do `kotodama-kun`
    integrada ao Gate R1 para validar se os substantivos do Capítulo 1 respeitam
    o `glossario.md` antes da aprovação da Fase 1 [4, 23, 27].

---

### 7. Síntese de sustentação — conclusão, classificação e fontes

- **Estrutura das 9 Seções do Capítulo 1:** SUSTENTADO INTEGRALMENTE por
  `spec-templates-v.0.0.1` (Cap. 1, Seções 1.1 a 1.9) [1].
- **Papel e Custódia do `srs-writer`:** SUSTENTADO INTEGRALMENTE por
  `regras-processos-v.0.0.1` (§4.2), `lista-agentes-v.0.0.1` (§1, §2) e
  `regras-documentos-v0.0.4.md` (§7) [4-6, 8].
- **Arquitetura S0–S6 do Prompt:** SUSTENTADO INTEGRALMENTE por
  `guia-prompts-v.0.0.1` (§2, §3) [16, 17].
- **Cláusula de Governança Humana (ISO 42001/38507):** SUSTENTADO INTEGRALMENTE
  por `CLAUDE.md-v.0.0.1`, `gov-rastreabilidade-v0.0.1` e
  `regras-metadados-v0.0.3.md` (§4) [10, 12, 28].

---

SUGESTÃO DE ACERVO Tema: Prompt e especificação operacional para elaboração do
Capítulo 1 (Fundamentos) do Spec Template (ANMS) Valor de reutilização:
Padronização da instrução executiva do agente srs-writer para garantir redação
determinística do topo estável (STFB) Fontes originais:
`spec-templates-v.0.0.1`, `guia-prompts-v.0.0.1`, `regras-processos-v.0.0.1` e
`lista-agentes-v.0.0.1` Estado da sustentação: SUSTENTADO INTEGRALMENTE Estado
de curadoria: CANDIDATO Ação: submeter à aprovação e, se autorizada, salvar como
nota.

---

# you asked

message time: 2026-11-14 13:55:55

Qual é o prompt para o agente escrever o capítulo 2?

---

# notebooklm response

## [Prompt e Diretrizes de Redação do Capítulo 2 (Requisitos de Software — Sintaxe EARS) do Spec Template]

Fontes selecionadas: `spec-templates-v.0.0.1`,
`tecnicas-rastreabilidade-v.0.0.1`, `guia-prompts-v.0.0.1`,
`lista-agentes-v.0.0.1`, `regras-processos-v.0.0.1`,
`regras-metadados-v0.0.3.md`, `regras-documentos-v0.0.4.md` e
`revisao-criterios-v.0.0.1`.

---

### 1. Definição e contexto (Analyze)

No modelo ANMS v0.33 (_AI-Native Minimal Specification_), o **Capítulo 2
(Requisitos)** traduz os objetivos de negócio, problemas e limites de escopo
definidos no Capítulo 1 em **obrigações técnicas formais e verificáveis** [1-3].
Ele situa-se logo abaixo do topo estável (STFB), funcionando como o alicerce
contratual para o design da arquitetura (Capítulo 3), para os cenários
executáveis em BDD/Gherkin (Capítulo 4) e para a estratégia de testes
(Capítulo 5) [4-7].

A custódia exclusiva (`doc:owner`) para redigir o Capítulo 2 na Fase 1
(_Planning_) pertence formalmente ao agente **`srs-writer`** [8, 9]. Ele opera
sob estrita exigência de formulação sintática padronizada: os requisitos não
podem ser redigidos em prosa livre; devem empregar compulsoriamente a sintaxe
**EARS (_Easy Approach to Requirements Syntax_)**, fórmulas matemáticas e
tabelas de parâmetros, com identificadores persistentes (`REQ-*` ou `FR-*`) e
critérios numéricos mensuráveis [3, 10-13].

---

### 2. Mecânica e aprofundamento técnico (Analyze)

#### A. Estrutura Canônica das Seções do Capítulo 2

Conforme padronizado em `spec-templates-v.0.0.1` e
`tecnicas-rastreabilidade-v.0.0.1`, o Capítulo 2 deve ser dividido em duas
grandes seções substantivas [3, 14]:

1. **2.1 Requisitos Funcionais:** Comportamentos, regras operacionais e serviços
   que o sistema deve fornecer [3].
2. **2.2 Requisitos Não Funcionais (NFRs):** Propriedades de qualidade
   observáveis e mensuráveis (tempo de resposta, disponibilidade, segurança da
   informação, acessibilidade WCAG 2.1 AA e escalabilidade) [3, 11, 15, 16].

#### B. Os Cinco Padrões Obrigatórios da Sintaxe EARS

Cada requisito deve adotar explicitamente uma das modalidades canônicas da
sintaxe EARS estabelecidas por Alistair Mavin et al., com o uso obrigatório da
palavra-chave **`SHALL`** (sinônimo normativo de RFC 2119 / RFC 8174) [3, 10,
12, 13]:

- **1. Ubíquo (_Ubiquitous_):** Requisito ou propriedade fundamental que é
  permanentemente válida em todo o ciclo de vida do software [3, 13].  
  _Sintaxe:_ `The [System] shall [Response].` /
  `O [Sistema] SHALL [Ação/Propriedade].` [3, 13]
- **2. Orientado a Eventos (_Event-Driven_):** Requisito disparado por um
  gatilho, ação do usuário ou mensagem externa [3].  
  _Sintaxe:_ `When [Trigger], the [System] shall [Response].` /
  `Quando [Gatilho], o [Sistema] SHALL [Resposta].` [3]
- **3. Orientado a Estados (_State-Driven_):** Requisito que vigora
  exclusivamente enquanto o sistema se encontra em um modo ou estado específico
  [3].  
  _Sintaxe:_ `While [In State], the [System] shall [Response].` /
  `Enquanto [No Estado], o [Sistema] SHALL [Resposta].` [3]
- **4. Comportamento Indesejado (_Unwanted Behavior_):** Requisito de
  programação defensiva e tratamento de exceções, falhas ou entradas anômalas
  [3, 17].  
  _Sintaxe:_ `If [Trigger/Condition], then the [System] shall [Response].` /
  `Se [Condição/Falha], então o [Sistema] SHALL [Resposta segura].` [3, 17]
- **5. Recurso Opcional (_Optional Feature_):** Requisito condicionado à
  presença de um módulo, licença ou configuração específica [3].  
  _Sintaxe:_ `Where [Feature is included], the [System] shall [Response].` /
  `Onde [Recurso ativado], o [Sistema] SHALL [Resposta].` [3]
- **6. Complexo (_Complex_ — Combinação autorizada):** Combinação de estado e
  evento disparador [3, 17].  
  _Sintaxe:_ `When [Trigger], while [In State], the [System] shall [Response].`
  / `Quando [Gatilho], enquanto [No Estado], o [Sistema] SHALL [Resposta].` [3,
  18]

#### C. Critérios de Qualidade e Exclusão (Quality Gate R1)

O agente deve satisfazer as exigências de revisão das perspectivas **R1a** e
**R1b** de `revisao-criterios-v.0.0.1` [11, 19]:

- **Eliminação de Termos Vagos:** Rejeição absoluta de adjetivos como "rápido",
  "adequado", "amigável", "em tempo hábil" ou "conforme apropriado" [11, 19].
- **Mensurabilidade Numérica:** Todos os NFRs devem conter grandezas exatas
  (ex.: "em até 200 ms", "taxa de erro < 1%", "99,9% de disponibilidade") [11,
  20].
- **Voz Ativa e Sujeito Claro:** Evitar a voz passiva ("os dados são
  processados"); declarar explicitamente quem realiza a ação ("o PWA grava os
  lançamentos no IndexedDB local") [21].
- **Cobertura de Exceções:** Todo requisito funcional deve prever respostas para
  timeout, concorrência, permissões negadas ou dados inválidos [21].

#### D. Metadados e Trilha de Auditoria

- O Form Block no topo do arquivo deve ser atualizado para:
  `<spec-architecture:completed_chapters>1,2</spec-architecture:completed_chapters>`
  [22, 23].
- O Footer deve receber uma nova linha no contêiner imutável `<doc:change_log>`
  com timestamp UTC e descrição da ação [24-26].

---

### 3. Aplicação prática e exemplos documentados: Prompts Operacionais (Analyze)

#### Opção A: Prompt de Invocação Direta (Para uso no Chat ou CLI do Claude Code)

```markdown
Atue como o agente srs-writer na Fase 1 (Planning) do framework full-auto-dev.
Sua tarefa é elaborar exclusivamente o "Capítulo 2. Requisitos de Software" no
arquivo docs/spec/{nome-do-projeto}-spec.md, dando continuidade ao Capítulo 1 já
existente.

DIRETRIZES DE ENTRADA E SUBORDINAÇÃO:

1. Baseie-se estritamente no Capítulo 1 (Fundamentos, Escopo e Limitações) e nas
   necessidades declaradas em user-order.md.
2. É proibido inventar regras de negócio ou inferir permissões não autorizadas.
   Requisitos de domínio que apresentarem lacunas devem ser assinalados como
   pendências, sem dedução autônoma.
3. Não adentre em decisões de implementação detalhada (bancos de dados,
   frameworks ou código) que pertencem aos Capítulos 3 a 6 (princípio STFB).

ESTRUTURA OBRIGATÓRIA A GERAR: No Detail Block, adicione o Capítulo 2
estruturado nas seções:

### Capítulo 2. Requisitos de Software (Sintaxe EARS)

#### 2.1 Requisitos Funcionais

Formule os requisitos operacionais do sistema com identificadores estáveis no
formato: `[REQ-{DOMINIO}-{NNN} | {Padrão EARS}]: {Fórmula EARS com SHALL}`

Obrigatório cobrir os 5 padrões canônicos da sintaxe EARS:

- Ubíquo: O sistema SHALL...
- Event-Driven: Quando [gatilho], o sistema SHALL...
- State-Driven: Enquanto [estado], o sistema SHALL...
- Unwanted Behavior: Se [falha/erro], então o sistema SHALL...
- Opcional: Onde [funcionalidade ativada], o sistema SHALL...

#### 2.2 Requisitos Não Funcionais (NFRs)

Defina os requisitos de qualidade com métricas numéricas verificáveis:

- Desempenho e Latência (ex.: tempo de resposta P99 em ms).
- Segurança da Informação (ex.: higienização de entradas, mitigação OWASP Top
  10, criptografia).
- Disponibilidade e Modo Offline (ex.: persistência local, tolerância a
  desconexões).
- Acessibilidade (ex.: conformidade obrigatória com WCAG 2.1 AA).

REGRAS DE FORMATAÇÃO E METADADOS:

1. Atualize a tag do Form Block:
   <spec-architecture:completed_chapters>1,2</spec-architecture:completed_chapters>.
2. Insira uma nova entrada <entry> append-only no contêiner <doc:change_log> do
   Footer registrando a inclusão do Capítulo 2.
3. Mantenha <doc:document_status>draft</doc:document_status> (proibido
   autoaprovar).

CRITÉRIOS DE QUALIDADE: Elimine termos vagos ("adequado", "rápido"). O texto
deve estar apto a receber veredito PASS na revisão R1a e R1b do review-agent.
```

---

#### Opção B: Prompt Canônico do Agente (`.claude/agents/srs-writer.md` — Módulo Capítulo 2)

Estruturado conforme a norma canônica de 7 seções S0–S6 de
`guia-prompts-v.0.0.1` [27-29]:

```markdown
---
name: srs-writer
description:
  Especialista em elicitação, estruturação de conceitos do usuário e redação dos
  Capítulos 1 e 2 da especificação ANMS/ANPS.
tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
model: opus
---

Você é o srs-writer. Sua responsabilidade é estruturar as necessidades do
usuário e redigir os Fundamentos e Requisitos em docs/spec/.

## Activation

### Purpose

Converter o escopo do Capítulo 1 e a intenção do usuário em requisitos de
software atômicos, testáveis e não ambíguos, formulados sob a sintaxe EARS e em
conformidade com o Quality Gate R1.

### Start Conditions

- [ ] docs/spec/{project-name}-spec.md contém o Capítulo 1 preenchido e
      coerente.
- [ ] user-order.md está aprovado e sem pendências bloqueantes de What/Why.
- [ ] O glossário do projeto (Seção 1.8) está consolidado para garantir
      consistência terminológica.

### End Conditions

- [ ] O Capítulo 2 (Requisitos) está redigido com as Seções 2.1 (Funcionais) e
      2.2 (Não Funcionais).
- [ ] 100% dos requisitos possuem identificador persistente
      ([REQ-{DOMINIO}-{NNN}]) e rótulo de padrão EARS.
- [ ] A palavra-chave SHALL é empregada rigorosamente em todas as declarações de
      obrigação.
- [ ] O Form Block registra completed_chapters como "1,2".
- [ ] O Footer contém a nova entrada registrada em <doc:change_log>.

## Ownership

### In

| file_type                | Fornecedor  | Finalidade                                              |
| :----------------------- | :---------- | :------------------------------------------------------ |
| spec-foundation (Cap. 1) | srs-writer  | Escopo, limites negativos, contexto e glossário         |
| user-order               | user        | Necessidades primárias e preferências de implantação    |
| regras-projeto           | lead / user | Definição da stack tecnológica e processos condicionais |

### Out

| file_type                    | Destinatário             | Finalidade                                          |
| :--------------------------- | :----------------------- | :-------------------------------------------------- |
| spec-foundation (Cap. 1 e 2) | architect / review-agent | Base formal para design arquitetural e oráculos BDD |

### Work

| Caminho temporário             | Finalidade                                        |
| :----------------------------- | :------------------------------------------------ |
| scratch/requirements-draft.tmp | Extração preliminar de regras e consolidação EARS |

## Procedure

1. Ler o Capítulo 1 de docs/spec/{project-name}-spec.md, confirmando os limites
   de escopo (o que faz e o que NÃO faz).
2. Decompor cada funcionalidade descrita no escopo em requisitos atômicos e
   singulares.
3. Formular cada requisito funcional (Seção 2.1) adotando rigorosamente a
   sintaxe EARS:
   - Identificar requisitos permanentes como Ubíquos: O sistema SHALL...
   - Identificar ações disparadas por eventos como Event-Driven: Quando
     [gatilho], o sistema SHALL...
   - Identificar modos operacionais como State-Driven: Enquanto [estado], o
     sistema SHALL...
   - Identificar falhas, limites e anomalias como Unwanted Behavior: Se [falha],
     então o sistema SHALL...
   - Identificar variações opcionais como Opcionais: Onde [recurso], o sistema
     SHALL...
4. Formular os requisitos não funcionais (Seção 2.2) com critérios quantitativos
   mensuráveis para desempenho, segurança, disponibilidade e acessibilidade WCAG
   2.1 AA.
5. Executar autoverificação contra os critérios R1a e R1b (eliminar voz passiva,
   duplas negações e adjetivos vagos).
6. Atualizar o Form Block para
   <spec-architecture:completed_chapters>1,2</spec-architecture:completed_chapters>.
7. Anexar o registro da alteração na tag <doc:change_log> no Footer.
8. Submeter o artefato ao review-agent para validação do Gate R1.

## Rules

### Regras Mandatórias da Sintaxe EARS

- É terminantemente proibido redigir requisitos em formato de narrativa livre ou
  bullets soltos sem a palavra-chave SHALL.
- Requisitos negativos ("O sistema não deve...") são proibidos a menos que
  declarem explicitamente o comportamento substitutivo seguro via padrão
  Unwanted Behavior ("Se..., então o sistema SHALL...").

### Separação de Camadas (STFB)

- Os requisitos descrevem O QUE o sistema faz e sob quais condições mensuráveis,
  nunca COMO o código interno ou tabelas específicas devem ser implementados.
  Detalhes de bibliotecas ou classes internas pertencem ao arquiteto no
  Capítulo 3.

## Exception

| Anomalia                                       | Resposta                                                                              |
| :--------------------------------------------- | :------------------------------------------------------------------------------------ |
| Requisito do usuário ambíguo ou contraditório  | Interromper a formulação, registrar a pendência no handoff e solicitar esclarecimento |
| Requisito dependente de regra esportiva omissa | Aplicar parada obrigatória: registrar como dúvida sem deduzir regras de negócio       |
| NFR sem meta numérica viável                   | Inserir marcador explícito de quantificação prevista para a fase de design técnico    |
```

---

### 4. Conexões de rede

- **`spec-templates-v.0.0.1`:** Define a estrutura do Capítulo 2 e a tabela
  comparativa dos padrões EARS [3].
- **`tecnicas-rastreabilidade-v.0.0.1`:** Fundamenta a taxonomia formal da
  sintaxe EARS baseada nas publicações de Alistair Mavin e nas normas IEEE [12,
  13].
- **`revisao-criterios-v.0.0.1`:** Fornece a lista de verificação R1a e R1b
  (eliminando termos não testáveis e ambiguidades léxicas) [11, 19].
- **`regras-metadados-v0.0.3.md`:** Governa o preenchimento do Common Block,
  Form Block e Footer _append-only_ [25, 30, 31].
- **`gov-rastreabilidade-v0.0.1`:** Prescreve a atribuição mandatória de IDs
  persistentes (`REQ-*`) para rastreamento a montante e jusante [32, 33].

---

### 5. Challenge — contestação e verificação crítica

- **Contestação à Suficiência da Sintaxe EARS Isolada:**
  - _Afirmação Comum:_ "Apenas redigir requisitos em EARS garante que o software
    será implementado corretamente."
  - _Contestação Probatória das Fontes:_ As fontes
    `tecnicas-rastreabilidade-v.0.0.1` e `GitHub - Arquitetura Repo` registram
    explicitamente que a sintaxe EARS reduz ambiguidades textuais, mas **não
    cria automaticamente vínculos de rastreabilidade nem garante, por si só, que
    a regra do domínio seja verdadeira** [18, 34, 35]. Um requisito pode estar
    sintaticamente impecável em EARS e descrever uma regra de pontuação
    esportiva incorreta [34]. Daí a necessidade de subordinar o Capítulo 2 à
    validação humana e aos oráculos do Capítulo 4 (BDD) [34, 36, 37].
- **Risco de Poluição da Camada Superior com Detalhes de Implementação:**
  - O `srs-writer` frequentemente tende a antecipar estruturas de software (ex.:
    "O sistema SHALL criar uma tabela SQL no PostgreSQL..."). Isso viola
    frontalmente o princípio STFB (_Stable Top, Flexible Bottom_) e a norma
    ISO/IEC/IEEE 29148, devendo ser sumariamente reprovado pelo `review-agent`
    [4, 10, 38].

---

### 6. Gap — lacunas relevantes e evidências necessárias

- **Linter de Conformidade EARS Integrado à CLI:**
  - _O que falta:_ NÃO LOCALIZADO NAS FONTES CONSULTADAS um analisador léxico
    formal capaz de validar automaticamente regras gramaticais da língua
    portuguesa nos 5 padrões EARS antes da intervenção do modelo de linguagem
    (embora tenhamos acabado de gerar o script auxiliar
    `validate-spec-template.py`).
  - _Evidência Necessária:_ Incorporação formal do script de validação de
    pré-commit à suíte canônica do repositório de governança.

---

### 7. Síntese de sustentação — conclusão, classificação e fontes

- **Estrutura e Seções do Capítulo 2:** SUSTENTADO INTEGRALMENTE por
  `spec-templates-v.0.0.1` (§ ANMS v0.33, Cap. 2).
- **Cinco Padrões da Sintaxe EARS:** SUSTENTADO INTEGRALMENTE por
  `spec-templates-v.0.0.1` (§ Padrões EARS) e `tecnicas-rastreabilidade-v.0.0.1`
  (§5.1).
- **Critérios de Qualidade R1a e R1b:** SUSTENTADO INTEGRALMENTE por
  `revisao-criterios-v.0.0.1` (§ R1).
- **Custódia Exclusiva do `srs-writer`:** SUSTENTADO INTEGRALMENTE por
  `lista-agentes-v.0.0.1` (§1, §2) e `regras-documentos-v0.0.4.md` (§7).

---

SUGESTÃO DE ACERVO Tema: Prompt canônico e diretrizes operacionais para redação
do Capítulo 2 (Requisitos EARS) do Spec Template ANMS Valor de reutilização:
Padronização técnica do comando executivo para geração de requisitos funcionais
e NFRs pelo agente srs-writer Fontes originais: `spec-templates-v.0.0.1`,
`tecnicas-rastreabilidade-v.0.0.1`, `guia-prompts-v.0.0.1`,
`lista-agentes-v.0.0.1` e `revisao-criterios-v.0.0.1` Estado da sustentação:
SUSTENTADO INTEGRALMENTE Estado de curadoria: CANDIDATO Ação: submeter à
aprovação e, se autorizada, salvar como nota.

---

# you asked

message time: 2026-11-14 13:57:38

Qual é o prompt para o agente escrever o capítulo 3?

---

# notebooklm response

## [Prompt e Diretrizes de Redação do Capítulo 3 (Arquitetura Lógica e Componentes) do Spec Template]

Fontes selecionadas: `spec-templates-v.0.0.1`, `regras-processos-v.0.0.1`,
`lista-agentes-v.0.0.1`, `guia-prompts-v.0.0.1`, `revisao-criterios-v.0.0.1`,
`regras-adr.md-v.0.0.1`, `regras-metadados-v0.0.3.md`,
`regras-documentos-v0.0.4.md` e `tecnicas-rastreabilidade-v.0.0.1`.

---

### 1. Definição e contexto (Analyze)

No framework ANMS v0.33 (_AI-Native Minimal Specification_), o **Capítulo 3
(Arquitetura)** marca o início da **"Base Flexível" (_Flexible Bottom_)** do
princípio estrutural **STFB (_Stable Top, Flexible Bottom_)**. Enquanto os
Capítulos 1 e 2 definem _o que_ o sistema deve resolver sob a custódia do
`srs-writer`, o Capítulo 3 estabelece _como_ o sistema se organiza internamente
para atender a essas obrigações sem acoplamento indevido.

A elaboração deste capítulo ocorre na **Fase 2 (Design Preliminar)** e **Fase 3
(Detalhamento Técnico)**. Conforme a matriz de responsabilidade exclusiva de
`lista-agentes-v.0.0.1` e a Seção 7 de `regras-documentos-v0.0.4.md`, a
**custódia documental (`doc:owner`) é transferida formalmente para o agente
`architect`**. O arquiteto projeta a divisão modular, diagramas estruturais em
Mermaid, interfaces públicas, contratos de dados e decisões arquiteturais
integradas (ADRs).

---

### 2. Mecânica e aprofundamento técnico (Analyze)

#### A. Estrutura Canônica das Seções do Capítulo 3

Conforme padronizado em `spec-templates-v.0.0.1` e `revisao-criterios-v.0.0.1`,
o Capítulo 3 deve conter obrigatoriamente as seguintes seções substantivas:

1. **3.1 Diagramas Estruturais da Arquitetura:**
   - Representação visual em código textual **Mermaid** (`flowchart`,
     `sequenceDiagram` ou C4 de componentes).
   - Delimitação gráfica estrita das fronteiras entre Camada de Apresentação/UI,
     Camada de Aplicação/Casos de Uso, Camada de Domínio/Regras de Negócio e
     Camada de Infraestrutura/Adaptadores.
2. **3.2 Componentes e Responsabilidades:**
   - Decomposição modular mapeando cada componente para seu respectivo caminho
     no repositório (`src/{modulo}`).
   - Atribuição de responsabilidade única (princípio SRP do SOLID) para cada
     módulo.
3. **3.3 Contratos e Interfaces de Dados:**
   - Assinaturas de métodos públicos, esquemas JSON Schema ou interfaces
     TypeScript.
   - Modelos de entrada/saída (DTOs) com tratamento explícito de erros e
     respostas de exceção.
4. **3.4 Decisões Arquiteturais Integradas (ADRs):**
   - Justificativa formal de escolhas estruturantes no padrão enxuto
     **Y-Statement** (_"No contexto de [C], diante de [D], decidimos por [O],
     para alcançar [B], aceitando [T]"_), em estrita consonância com
     `regras-adr.md-v.0.0.1` e apontando para os arquivos em `docs/adrs/`.

#### B. Critérios de Qualidade e Exclusão (Quality Gate R2)

O agente deve satisfazer as exigências de revisão das perspectivas **R2a**
(Arquitetura) e **R2b** (Design Detalhado) de `revisao-criterios-v.0.0.1`:

- **Adesão à Clean Architecture:** O domínio não pode importar nem depender de
  frameworks, bancos de dados, bibliotecas web ou APIs externas. As dependências
  apontam exclusivamente para dentro (_Regra da Dependência_).
- **Ausência de Vazamento de Abstração:** Detalhes de infraestrutura (ex.:
  IndexedDB, LocalStorage, Fetch) devem ser encapsulados atrás de interfaces e
  adaptadores.
- **Proibição de Extrapolação de Requisitos:** O Capítulo 3 deve implementar
  estritamente os requisitos expressos no Capítulo 2 (`REQ-*`), sendo proibido
  criar componentes ou endpoints que não rastreiem para uma obrigação formal.

#### C. Metadados e Trilha de Auditoria

- **Transferência de Custódia no Common Block:** O campo `<doc:owner>` deve ser
  atualizado de `srs-writer` para `architect`.
- **Atualização do Form Block:**
  - `<spec-architecture:completed_chapters>` deve ser atualizado para `1,2,3`.
  - Preenchimento métrico de `<spec-architecture:component_count>` e
    `<spec-architecture:api_endpoint_count>`.
- **Trilha no Footer:** Nova entrada append-only em `<doc:change_log>`
  registrando a intervenção do `architect`.

---

### 3. Aplicação prática e exemplos documentados: Prompts Operacionais (Analyze)

#### Opção A: Prompt de Invocação Direta (Para uso no Chat ou CLI do Claude Code)

```markdown
Atue como o agente architect nas Fases 2 e 3 (Design e Detalhamento Técnico) do
framework full-auto-dev. Sua tarefa é elaborar exclusivamente o "Capítulo 3.
Arquitetura Lógica e Componentes" no arquivo
docs/spec/{nome-do-projeto}-spec.md, assumindo a custódia técnica do documento.

DIRETRIZES DE ENTRADA E SUBORDINAÇÃO:

1. Baseie-se estritamente nos Capítulos 1 e 2 já aprovados em
   docs/spec/{nome-do-projeto}-spec.md e nas decisões em docs/adrs/.
2. Respeite o princípio STFB (Stable Top, Flexible Bottom): o design de
   componentes deve implementar 100% dos requisitos EARS (REQ-*), sem extrapolar
   escopo e sem criar serviços desconectados dos requisitos.
3. Aplique compulsoriamente os princípios de Clean Architecture e SOLID: o
   núcleo de domínio deve ser puro e desacoplado de bibliotecas externas e
   persistência.

ESTRUTURA OBRIGATÓRIA A GERAR: No Detail Block, adicione o Capítulo 3 contendo
as seções:

### Capítulo 3. Arquitetura Lógica e Componentes (Base Flexível)

#### 3.1 Diagrama Estrutural (Mermaid)

Gere diagramas textuais Mermaid representando:

- O fluxo de dados entre UI, Camada de Aplicação, Domínio e Adaptadores de
  Infraestrutura.
- A fronteira de isolamento e adaptadores de persistência local/rede.

#### 3.2 Componentes e Responsabilidades

Detalhe cada módulo técnico em tabela ou tópicos padronizados:

- Nome do Componente e Responsabilidade Única.
- Caminho mapeado no código-fonte (ex.: `src/domain/...`, `src/infra/...`).
- Lista de requisitos atendidos (traces: REQ-...).

#### 3.3 Contratos e Interfaces de Dados

- Esquemas de dados canônicos (interfaces TypeScript ou esquemas JSON).
- Assinaturas de endpoints, métodos de serviço e contratos de comunicação.
- Definição tipada de erros e exceções arquiteturais.

#### 3.4 Decisões Arquiteturais Integradas (ADRs)

- Síntese das decisões centrais registradas em formato Y-Statement referenciando
  os arquivos em docs/adrs/.

REGRAS DE FORMATAÇÃO E METADADOS XML:

1. Atualize a custódia no Common Block: <doc:owner>architect</doc:owner>.
2. Atualize o Form Block:
   <spec-architecture:completed_chapters>1,2,3</spec-architecture:completed_chapters>
   <spec-architecture:component_count>{TOTAL_DE_COMPONENTES}</spec-architecture:component_count>
   <spec-architecture:api_endpoint_count>{TOTAL_DE_ENDPOINTS}</spec-architecture:api_endpoint_count>
3. Insira no Footer uma nova linha <entry> append-only no contêiner
   <doc:change_log> registrando a conclusão do Capítulo 3 pelo architect.
4. Mantenha <doc:document_status>draft</doc:document_status>.

CRITÉRIO DE QUALIDADE: O design estrutural deve estar plenamente apto a receber
veredito PASS nos critérios de qualidade R2a e R2b do review-agent.
```

---

#### Opção B: Prompt Canônico do Agente (`.claude/agents/architect.md` — Módulo Capítulo 3)

Estruturado conforme a norma de 7 seções S0–S6 de `guia-prompts-v.0.0.1`:

```markdown
---
name: architect
description:
  Especialista em design de sistemas, modelagem Clean Architecture e redação dos
  Capítulos 3 a 6 da especificação ANMS.
tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
model: opus
---

Você é o architect. Sua responsabilidade é projetar a estrutura técnica,
interfaces e diagramas da especificação ANMS em docs/spec/, assegurando
modularidade e aderência a Clean Architecture.

## Activation

### Purpose

Transformar os requisitos funcionais e não funcionais do Capítulo 2 em uma
arquitetura de software modular, testável e desacoplada, estruturando o Capítulo
3 de docs/spec/{project-name}-spec.md.

### Start Conditions

- [ ] O arquivo docs/spec/{project-name}-spec.md contém os Capítulos 1 e 2
      revisados com PASS no Gate R1.
- [ ] As principais decisões técnicas foram registradas no padrão Y-Statement em
      docs/adrs/.
- [ ] A stack tecnológica está homologada em regras-projeto.md (ou CLAUDE.md).

### End Conditions

- [ ] O campo doc:owner do Common Block foi atualizado para "architect".
- [ ] O Capítulo 3 está redigido cobrindo: 3.1 (Diagrama Mermaid), 3.2
      (Componentes), 3.3 (Contratos/Interfaces) e 3.4 (ADRs integradas).
- [ ] O Form Block registra completed_chapters como "1,2,3" e contabiliza
      component_count e api_endpoint_count.
- [ ] A trilha append-only no Footer registra a inclusão em <doc:change_log>.

## Ownership

### In

| file_type                    | Fornecedor       | Finalidade                                   |
| :--------------------------- | :--------------- | :------------------------------------------- |
| spec-foundation (Cap. 1 e 2) | srs-writer       | Requisitos EARS e limites de escopo          |
| adr                          | architect / user | Decisões arquiteturais fundamentadas         |
| regras-projeto               | lead / user      | Definições de stack e restrições de ambiente |

### Out

| file_type                  | Destinatário                           | Finalidade                                     |
| :------------------------- | :------------------------------------- | :--------------------------------------------- |
| spec-architecture (Cap. 3) | architect (próx. fases) / review-agent | Estrutura técnica para redação de BDD e testes |

### Work

| Caminho temporário             | Finalidade                                         |
| :----------------------------- | :------------------------------------------------- |
| scratch/architecture-draft.tmp | Rascunhos de diagramas e decomposição de contratos |

## Procedure

1. Ler os Capítulos 1 e 2 de docs/spec/{project-name}-spec.md, mapeando cada
   [REQ-*].
2. Atualizar o cabeçalho Common Block: alterar <doc:owner> para "architect".
3. Desenhar o diagrama arquitetural Mermaid (Seção 3.1) segregando UI, Domínio e
   Infraestrutura.
4. Identificar os componentes modulares (Seção 3.2), vinculando a
   responsabilidade de cada um ao caminho em src/ e aos requisitos que atende.
5. Especificar as interfaces de contratos de dados (Seção 3.3) com tipagem
   estrita e DTOs.
6. Resumir as decisões em Y-Statements (Seção 3.4) apontando para docs/adrs/.
7. Atualizar o Form Block: completed_chapters para "1,2,3", preenchendo
   component_count e api_endpoint_count.
8. Registrar a nova linha <entry> no contêiner imutável <doc:change_log> no
   Footer.
9. Submeter ao review-agent para auditoria do Gate R2a.

## Rules

### Regra da Dependência (Clean Architecture)

- Nenhuma entidade ou caso de uso de domínio pode depender de bibliotecas
  externas, drivers de banco de dados ou detalhes de interface. As setas de
  dependência nos diagramas Mermaid devem apontar estritamente para o centro
  (domínio).

### Proibição de Extrapolação de Escopo

- É proibido criar módulos, filas ou serviços que não possuam vínculo direto com
  pelo menos um requisito do Capítulo 2.

### Imutabilidade de Status

- O status do documento permanece obrigatoriamente como "draft".

## Exception

| Anomalia                                            | Resposta                                                                         |
| :-------------------------------------------------- | :------------------------------------------------------------------------------- |
| Requisito do Cap. 2 inviável tecnicamente na stack  | Paralisar o design, notificar o lead e solicitar abertura de Change Request (CR) |
| Dependência circular detectada entre componentes    | Refatorar aplicando Inversão de Dependência (DIP) antes de prosseguir            |
| Conflito com diretrizes de hardware local (ex: RAM) | Isolar execução em contêineres/nuvem conforme arquitetura homologada             |
```

---

### 4. Conexões de rede

- **`spec-templates-v.0.0.1`:** Define a estrutura dos tópicos de arquitetura
  lógica no modelo ANMS.
- **`revisao-criterios-v.0.0.1`:** Estabelece os critérios de avaliação R2a
  (Arquitetura) e R2b (Design Detalhado), exigindo coesão modular, baixo
  acoplamento e tratamento de concorrência.
- **`regras-adr.md-v.0.0.1`:** Provê o padrão Y-Statement e o critério de pronto
  (DoD E/C/A/D/R) que sustentam a Seção 3.4.
- **`regras-metadados-v0.0.3.md`:** Governa os campos do Form Block
  `spec-architecture:` (`component_count`, `api_endpoint_count`).
- **`lista-agentes-v.0.0.1`:** Regulamenta a transferência formal de custódia
  (`doc:owner`) do `srs-writer` para o `architect`.

---

### 5. Challenge — contestação e verificação crítica

- **Contestação: "O arquiteto pode introduzir microsserviços ou bancos
  relacionais complexos livremente."**
  - _Evidência em Contrário:_ As regras de `spec-templates-v.0.0.1` e
    `revisao-criterios-v.0.0.1` exigem alinhamento rigoroso com as restrições
    declaradas no Capítulo 1 (ex.: limites de hardware de 8 GB RAM e premissas
    EUD/EUSE de `GitHub - Arquitetura Repo`). Desenhos arquiteturais
    superdimensionados que ignorem o orçamento de hardware da máquina do usuário
    ou introduzam custos de infraestrutura não autorizados violam o Gate R2a.
- **Risco de Pseudodiagramas:**
  - Agentes de IA frequentemente geram diagramas Mermaid sintaticamente válidos,
    mas semanticamente vazios (apenas caixas genéricas "Frontend -> Backend ->
    DB"). O prompt bloqueia isso ao exigir que cada caixa represente um módulo
    mapeado para um diretório real em `src/` com rastreabilidade explícita para
    `REQ-*`.

---

### 6. Gap — lacunas relevantes e evidências necessárias

- **Validador de Sintaxe Mermaid em CI/CD:**
  - _O que falta:_ NÃO LOCALIZADO NAS FONTES CONSULTADAS um script de pré-commit
    para validar automaticamente se os blocos ` ```mermaid ` contidos na
    especificação não possuem erros de sintaxe de renderização antes de chegarem
    ao repositório.
  - _Evidência Necessária:_ Integração da CLI do Mermaid
    (`@mermaid-js/mermaid-cli`) na esteira de validação do Codespaces para
    verificar os diagramas do Capítulo 3.

---

### 7. Síntese de sustentação — conclusão, classificação e fontes

- **Estrutura e Tópicos do Capítulo 3:** SUSTENTADO INTEGRALMENTE por
  `spec-templates-v.0.0.1` (§ ANMS v0.33, Cap. 3).
- **Transferência de Custódia para o `architect`:** SUSTENTADO INTEGRALMENTE por
  `lista-agentes-v.0.0.1` (§1, §2), `regras-processos-v.0.0.1` (§4.3) e
  `regras-documentos-v0.0.4.md` (§7).
- **Critérios de Qualidade R2a e R2b (Clean Architecture):** SUSTENTADO
  INTEGRALMENTE por `revisao-criterios-v.0.0.1` (§ R2).
- **Padronização de ADRs em Y-Statement:** SUSTENTADO INTEGRALMENTE por
  `regras-adr.md-v.0.0.1` (§1, §2) e `tecnicas-rastreabilidade-v.0.0.1` (§5.3).

---

SUGESTÃO DE ACERVO Tema: Prompt canônico e diretrizes operacionais para redação
do Capítulo 3 (Arquitetura Lógica e Componentes) do Spec Template ANMS Valor de
reutilização: Padronização técnica do comando executivo para geração de
arquitetura, diagramas Mermaid e interfaces pelo agente architect Fontes
originais: `spec-templates-v.0.0.1`, `regras-processos-v.0.0.1`,
`lista-agentes-v.0.0.1`, `revisao-criterios-v.0.0.1` e `regras-adr.md-v.0.0.1`
Estado da sustentação: SUSTENTADO INTEGRALMENTE Estado de curadoria: CANDIDATO
Ação: submeter à aprovação e, se autorizada, salvar como nota.

---

# you asked

message time: 2026-11-14 13:59:05

Qual é o prompt para o agente escrever o capítulo 4?

---

# notebooklm response

## [Prompt e Diretrizes de Redação do Capítulo 4 (Especificação Concreta e Cenários BDD/Gherkin) do Spec Template]

Fontes selecionadas: `spec-templates-v.0.0.1` [1-5],
`tecnicas-rastreabilidade-v.0.0.1` [6, 7], `regras-processos-v.0.0.1` [8-11],
`lista-agentes-v.0.0.1` [12, 13], `guia-prompts-v.0.0.1` [14-21],
`revisao-criterios-v.0.0.1` [22-24], `regras-metadados-v0.0.3.md` [25-29],
`regras-documentos-v0.0.4.md` [30, 31] e `script-validador-BDD-v.0.0.1` [32-34].

---

### 1. Definição e contexto (Analyze)

No framework ANMS v0.33 (_AI-Native Minimal Specification_), o **Capítulo 4
(Especificação)** representa a camada mais dinâmica e concreta da especificação
de software, orientada pelo princípio estrutural **STFB (_Stable Top, Flexible
Bottom_)** [1, 5, 35]. Enquanto o Capítulo 2 fixa as obrigações formais em
sintaxe EARS e o Capítulo 3 modela a topologia modular e as interfaces [36, 37],
o Capítulo 4 contém definições em um nível de granularidade que os agentes
implementadores e ferramentas de automação podem traduzir diretamente em código
e testes executáveis [1, 38, 39].

A elaboração deste capítulo é executada na **Fase 3 (Projeto / Design)** sob a
custódia exclusiva (`doc:owner`) do agente **`architect`** [10, 12, 13, 38]. A
sua Seção 4.1 (Cenários em Gherkin) é **fixa e mandatória** em todos os
projetos, definindo os critérios de aceite do UAT (_User Acceptance Testing_)
que funcionam como **oráculos técnicos determinísticos** [2, 32, 40]. As seções
subsequentes (4.2 em diante) são modulares e selecionadas conforme a natureza do
sistema (telas, APIs, esquemas de banco de dados, máquinas de estados ou
algoritmos) [1, 4].

---

### 2. Mecânica e aprofundamento técnico (Analyze)

#### A. Estrutura Canônica das Seções do Capítulo 4

Conforme padronizado em `spec-templates-v.0.0.1` [1-4]:

1. **4.1 Cenários (Gherkin) — Seção Fixa:**
   - Concretiza os requisitos funcionais do Capítulo 2 (`REQ-*` ou `FR-*`) em
     critérios de aceite verificáveis [2, 41].
   - Utiliza a sintaxe padronizada do Gherkin: `Feature` (Funcionalidade),
     `Background` (Contexto comum), `Rule` (Regra de negócio), e `Scenario`
     (Cenário) [3, 5].
   - Obrigatoriedade de anotação de rastreabilidade explícita em cada cenário:
     `(traces: REQ-{DOMINIO}-{NNN})` [2, 5].
   - Adota a tríade léxica padronizada: `Dado` (_Given_), `Quando` (_When_),
     `Então` (_Then_), além dos complementos `E` (_And_) e `Mas` (_But_) [3, 5,
     33].
   - Registro adjacente de status de homologação logo abaixo do cenário: `PASS`,
     `CONDITIONAL`, `FAIL` ou `SKIP`, com campo estruturado para `Observação`
     [2, 3, 5].
2. **Seções Candidatas Modulares (A partir da 4.2):**
   - **4.2 Mapa de Elementos da Interface:** Mapeamento de rotas, componentes de
     UI, campos de formulário e interações de tela (aplicável a PWAs e
     aplicações web/mobile) [4].
   - **4.3 Definições de Esquemas e Dados:** Esquemas de tabelas relacionais,
     estruturas JSON ou coleções locais (IndexedDB/LocalStorage) [4].
   - **4.4 Transições de Estado e Ciclo de Vida:** Máquinas de estado finito
     para fluxos complexos, prevenindo estados intermediários inválidos
     (_glitches_) [4, 24].
   - **4.5 Tratamento Sistemático de Erros:** Catálogo tipado de códigos de
     erro, mensagens seguras voltadas ao usuário e saídas estruturadas para
     auditoria [4, 42, 43].

#### B. Critérios de Qualidade e Exclusão (Quality Gate R2 / R4 / R5)

O agente executor deve satisfazer os requisitos de auditoria do `review-agent`
em `revisao-criterios-v.0.0.1` [22-24, 44]:

- **Rastreabilidade Total:** 100% dos requisitos funcionais do Capítulo 2 devem
  ter correspondência em pelo menos um cenário Gherkin no Capítulo 4 [2, 41,
  45].
- **Independência de Estado:** Cada cenário Gherkin deve ser autocontido e
  idempotente, sem depender da execução prévia de outro cenário [45].
- **Prevenção de Glitches de Estado:** Cenários de concorrência ou transição
  múltipla devem assegurar atomicidade formal na especificação [24].
- **Oráculos Computáveis:** O `Então` (_Then_) deve prescrever asserções exatas
  e mensuráveis (ex.: "pontuação computada igual a 2"), vedando asserções
  subjetivas como "o sistema processa com sucesso" [3, 33, 46, 47].

#### C. Atualização de Metadados e Trilha de Auditoria

- **Form Block:** O campo `<spec-architecture:completed_chapters>` deve ser
  mantido atualizado registrando o progresso (`1,2,3,4` ou `1,2,3,4,5,6`) [26,
  48].
- **Footer Append-Only:** Adição compulsória de uma nova entrada `<entry>` no
  histórico `<doc:change_log>` registrando a ação do agente `architect` com
  timestamp UTC [26, 29, 49].
- **Status Documental:** Permanência em
  `<doc:document_status>draft</doc:document_status>` [26, 28].

---

### 3. Aplicação prática: Prompts Operacionais (Analyze)

#### Opção A: Prompt de Invocação Direta (Para uso no Chat ou CLI do Claude Code)

````markdown
Atue como o agente architect na Fase 3 (Projeto / Design) do framework
full-auto-dev. Sua tarefa é redigir exclusivamente o "Capítulo 4. Especificação
Concreta e Cenários BDD" no arquivo docs/spec/{nome-do-projeto}-spec.md, dando
continuidade aos Capítulos 1, 2 e 3 existentes.

DIRETRIZES DE ENTRADA E SUBORDINAÇÃO:

1. Baseie-se estritamente nos requisitos EARS do Capítulo 2 ([REQ-*]) e na
   estrutura de componentes e interfaces do Capítulo 3.
2. Cada requisito funcional deve ser concretizado em cenários de teste de
   aceitação (UAT) no formato Gherkin na Seção 4.1.
3. Respeite as regras oficiais do domínio (REGRAS_DOMINIO.md): é proibido
   inventar regras de negócio, exceções ou comportamentos não acordados com o
   especialista.
4. Mantenha os cenários como oráculos determinísticos aptos a serem consumidos
   por runners automatizados de CI/CD.

ESTRUTURA OBRIGATÓRIA A GERAR: No Detail Block, adicione o Capítulo 4 contendo a
seção mandatória e as seções modulares pertinentes:

### Capítulo 4. Especificação

#### 4.1 Cenários (Gherkin)

Estruture os critérios de aceite em blocos canônicos:

```gherkin
Funcionalidade: [Nome da Funcionalidade]

  Contexto:
    Dado [Pré-condição comum a todos os cenários]

  Regra: [Regra de negócio esportiva ou operacional]

    Cenário: SC-001 [Nome do Cenário de Sucesso] (traces: REQ-{DOMINIO}-{NNN})
      Dado [Pré-condição específica]
      Quando [Ação ou evento disparador]
      Então [Resultado esperado mensurável]
      E [Efeito colateral ou persistência observada]

    Cenário: SC-002 [Nome do Cenário de Exceção/Falha] (traces: REQ-{DOMINIO}-{NNN})
      Dado [Estado inicial do sistema]
      Quando [Tentativa inválida ou falha de sistema]
      Então [Mensagem de erro padronizada e bloqueio seguro]
      Mas [Ação indevida que NÃO deve ocorrer]
```
````

Resultado: PENDENTE (PASS / CONDITIONAL / FAIL / SKIP) Observação:

#### 4.2 Mapa de Elementos da Interface (UI)

(Aplicável a interfaces de usuário/PWA):

- Tabela mapeando telas, rotas, componentes interativos, formulários e eventos
  de disparo.

#### 4.3 Esquemas de Dados e Persistência

- Estrutura tipada de entidades, modelos IndexedDB / LocalStorage ou tabelas de
  banco de dados.

#### 4.4 Tratamento Sistemático de Erros

- Catálogo de exceções mapeando código de erro, causa-raiz, mensagem ao usuário
  e ação de recuperação.

REGRAS DE FORMATAÇÃO E METADADOS XML:

1. No Form Block, atualize a tag:
   <spec-architecture:completed_chapters>1,2,3,4</spec-architecture:completed_chapters>.
2. No Footer, anexe uma nova linha <entry> append-only no contêiner
   <doc:change_log> registrando a conclusão do Capítulo 4 pelo architect.
3. Mantenha <doc:document_status>draft</doc:document_status> (autoaprovação
   estritamente proibida).

CRITÉRIO DE QUALIDADE: Os cenários devem cobrir 100% dos requisitos funcionais,
sem ambiguidades léxicas, prontos para veredito PASS na revisão R2/R4 do
review-agent.

````

---

#### Opção B: Prompt Canônico do Agente (`.claude/agents/architect.md` — Módulo Capítulo 4)
Formatado conforme o padrão de 7 seções S0–S6 de `guia-prompts-v.0.0.1` [14-21]:

```markdown
---
name: architect
description: Especialista em design de sistemas, modelagem de arquitetura e redação dos Capítulos 3 a 6 da especificação ANMS.
tools:
- Read
- Write
- Edit
- Glob
- Grep
model: opus
---

Você é o architect.
Sua responsabilidade é detalhar a especificação técnica e oráculos BDD em docs/spec/, concretizando os requisitos em cenários executáveis.

## Activation
### Purpose
Traduzir os requisitos EARS do Capítulo 2 e o design do Capítulo 3 em cenários executáveis Gherkin e especificações detalhadas de UI/dados no Capítulo 4 de docs/spec/{project-name}-spec.md.

### Start Conditions
- [ ] docs/spec/{project-name}-spec.md contém os Capítulos 1, 2 e 3 redigidos e consistentes.
- [ ] O glossário de termos e regras canônicas do domínio esportivo está acessível.
- [ ] O cabeçalho Common Block possui doc:owner definido como "architect".

### End Conditions
- [ ] O Capítulo 4 (Especificação) contém a Seção 4.1 (Cenários Gherkin) e as seções candidatas necessárias (4.2 UI, 4.3 Dados, 4.4 Erros).
- [ ] 100% dos cenários Gherkin possuem anotação de rastreabilidade vinculada: (traces: REQ-...).
- [ ] Cada cenário define seu bloco de status (PASS/CONDITIONAL/FAIL/SKIP) e observações.
- [ ] O Form Block registra completed_chapters incluindo o Capítulo 4.
- [ ] O contêiner <doc:change_log> no Footer contém a nova entrada append-only.

## Ownership
### In
| file_type | Fornecedor | Finalidade |
| :--- | :--- | :--- |
| spec-foundation (Cap. 2) | srs-writer | Requisitos funcionais (EARS) para conversão em UAT |
| spec-architecture (Cap. 3) | architect | Componentes, contratos de dados e fluxos de processo |
| regras-dominio | user / governance | Oráculo canônico de regras desportivas/negócio |

### Out
| file_type | Destinatário | Finalidade |
| :--- | :--- | :--- |
| spec-architecture (Cap. 4) | test-engineer / implementer / review-agent | Oráculos computáveis para testes de CI/CD e codificação |

### Work
| Caminho temporário | Finalidade |
| :--- | :--- |
| scratch/gherkin-scenarios.tmp | Rascunhos de validação de passos Gherkin |

## Procedure
1. Ler os requisitos do Capítulo 2 e a arquitetura do Capítulo 3 em docs/spec/{project-name}-spec.md.
2. Identificar cada regra de negócio e decompor em cenários UAT na Seção 4.1.
3. Redigir os blocos Gherkin com a tríade Dado/Quando/Então:
   - Inserir a linha de rastreabilidade (traces: REQ-{DOMINIO}-{NNN}) no cabeçalho de cada Scenario.
   - Detalhar o caminho feliz (sucesso) e os caminhos de borda/exceção.
   - Inserir o modelo de resultado (PASS / CONDITIONAL / FAIL / SKIP) e Observação abaixo de cada bloco.
4. Elaborar as seções complementares aplicáveis:
   - 4.2 Mapa de elementos da interface (telas, eventos, rotas do PWA).
   - 4.3 Esquema de persistência local / contratos de banco de dados.
   - 4.4 Tabela de códigos de erro e tratamento defensivo de exceções.
5. Atualizar o Form Block para <spec-architecture:completed_chapters>1,2,3,4</spec-architecture:completed_chapters>.
6. Gravar a nova entrada <entry> no contêiner append-only <doc:change_log> no Footer.
7. Notificar o lead para acionamento do review-agent nos portões R2 e R4.

## Rules
### Rastreabilidade Bidirecional Obrigatória
- Nenhum cenário Gherkin pode existir sem a anotação explícita (traces: REQ-...). Nenhum requisito funcional do Capítulo 2 pode ficar sem cenário correspondente.
### Oráculos Determinísticos
- Asserções no Então (Then) devem ser matematicamente verificáveis por asserções em código (ex.: igualdade de valores, transição de estado, emissão de evento). É vedado o uso de termos genéricos.
### Autoridade de Domínio
- Diante de lacuna em regra de negócio ou desportiva, aplicar parada obrigatória: registrar a pendência no PR/handoff sem deduzir regras não documentadas.

## Exception
| Anomalia | Resposta |
| :--- | :--- |
| Requisito do Cap. 2 ambíguo ou sem critério verificável | Interromper redação do cenário, reportar pendência ao srs-writer para ajuste no Cap. 2 |
| Incompatibilidade entre cenário BDD e componente do Cap. 3 | Refatorar interfaces do Cap. 3 ou emitir solicitação de alinhamento arquitetural |
| Tentativa de autoatribuição de status approved | Bloquear alteração; o documento deve permanecer com document_status como draft |
````

---

### 4. Conexões de rede

- **`spec-templates-v.0.0.1`:** Define a obrigatoriedade da Seção 4.1 (Cenários
  Gherkin) e o catálogo de seções candidatas (4.2 a 4.x) [2, 4].
- **`tecnicas-rastreabilidade-v.0.0.1`:** Estabelece o padrão de marcação de
  rastreabilidade bidirecional `(traces: REQ-...)` e a sintaxe canônica do
  Gherkin [2, 7].
- **`script-validador-BDD-v.0.0.1`:** Atua como o consumidor computacional em
  CI/CD dos blocos ` ```gherkin ` do Capítulo 4, traduzindo-os em asserções
  automatizadas [32, 33, 50].
- **`revisao-criterios-v.0.0.1`:** Provê os critérios de revisão R2 (princípios
  de design), R4 (concorrência e estados) e R6 (qualidade e cobertura de testes)
  [22, 24, 44, 45].
- **`regras-processos-v.0.0.1`:** Regula a transição da Fase 3 (_Design_) para a
  Fase 4 (_Implementation_) condicionada ao PASS do `review-agent` [8, 10, 51].

---

### 5. Challenge — contestação e verificação crítica

- **Contestação: "Os cenários Gherkin substituem a necessidade de testes de
  código em `tests/`."**
  - _Evidência em Contrário:_ Conforme documentado em
    `tecnicas-rastreabilidade-v.0.0.1` [7], _um cenário Gherkin escrito na
    especificação não é evidência de teste executado_. O Capítulo 4 define a
    expectativa e o critério de aceite (o oráculo); a comprovação operacional
    exige que o `test-engineer` e o `implementer` escrevam os testes
    automatizados correspondentes em `tests/` e que a esteira registre a saída
    real (`EXIT_CODE = 0`) vinculada ao commit SHA [45, 52, 53].
- **Risco de Cenários Frágeis (_Happy-Path Only_):**
  - Sem a exigência explícita de cenários com as cláusulas `Mas` (_But_) e
    tratamento de erros (Seção 4.4), agentes de IA tendem a especificar apenas
    fluxos perfeitos [3, 45, 54]. O prompt mitiga essa fraqueza exigindo
    cenários de exceção para cada funcionalidade [45, 54].

---

### 6. Gap — lacunas relevantes e evidências necessárias

- **Sincronização Mecânica entre Cenários do Spec e Arquivo de Regras do
  Domínio:**
  - _O que falta:_ NÃO LOCALIZADO NAS FONTES CONSULTADAS um script utilitário
    automatizado que verifique se os cenários Gherkin redigidos na Seção 4.1 do
    `spec-template` divergem semanticamente do arquivo de regras mantido no
    Repositório B (`docs/regras-canonicas/REGRAS_DOMINIO.md`) [33, 55].
  - _Evidência Necessária:_ Implementação de um verificador de diff de cenários
    acoplado ao validador independente para assegurar que a especificação de
    software reflita com fidelidade o repositório cofre de governança [33, 56].

---

### 7. Síntese de sustentação — conclusão, classificação e fontes

- **Estrutura Obrigatória da Seção 4.1 (Gherkin/BDD):** SUSTENTADO INTEGRALMENTE
  por `spec-templates-v.0.0.1` (Cap. 4, Seções 4.1 e 4.2) [1-4].
- **Rastreabilidade por Marcadores `(traces: REQ-...)`:** SUSTENTADO
  INTEGRALMENTE por `spec-templates-v.0.0.1` [2] e
  `tecnicas-rastreabilidade-v.0.0.1` (§5.2) [7].
- **Custódia Exclusiva do Agente `architect`:** SUSTENTADO INTEGRALMENTE por
  `lista-agentes-v.0.0.1` (§1, §2) [12, 13] e `regras-documentos-v0.0.4.md` (§7)
  [31].
- **Arquitetura S0–S6 do Prompt Operacional:** SUSTENTADO INTEGRALMENTE por
  `guia-prompts-v.0.0.1` (§2, §3) [14-21].

---

SUGESTÃO DE ACERVO Tema: Prompt canônico e diretrizes operacionais para redação
do Capítulo 4 (Especificação e Cenários BDD) do Spec Template ANMS Valor de
reutilização: Padronização técnica do comando executivo para geração de oráculos
Gherkin, mapas de UI e contratos de persistência pelo agente architect Fontes
originais: `spec-templates-v.0.0.1`, `tecnicas-rastreabilidade-v.0.0.1`,
`regras-processos-v.0.0.1`, `guia-prompts-v.0.0.1` e `lista-agentes-v.0.0.1`
Estado da sustentação: SUSTENTADO INTEGRALMENTE Estado de curadoria: CANDIDATO
Ação: submeter à aprovação e, se autorizada, salvar como nota.

---

# you asked

message time: 2026-11-14 14:01:35

Que é o prompt para o agente escrever o capítulo 5?

---

# notebooklm response

## [Prompt e Diretrizes de Redação do Capítulo 5 (Estratégia de Testes e Matriz de Homologação) do Spec Template]

Fontes selecionadas: `spec-templates-v.0.0.1`, `regras-processos-v.0.0.1`,
`lista-agentes-v.0.0.1`, `guia-prompts-v.0.0.1`, `revisao-criterios-v.0.0.1`,
`tecnicas-rastreabilidade-v.0.0.1`, `regras-metadados-v0.0.3.md`,
`regras-documentos-v0.0.4.md` e `CLAUDE.md-v.0.0.1`.

---

### 1. Definição e contexto (Analyze)

No framework ANMS v0.33 (_AI-Native Minimal Specification_), o **Capítulo 5
(Estratégia de Testes)** constitui a política mestra de garantia da qualidade e
verificação operacional do sistema, posicionando-se na base flexível (_Flexible
Bottom_) do princípio arquitetural **STFB (_Stable Top, Flexible Bottom_)** [1,
2]. Enquanto o Capítulo 2 estabelece as obrigações formais (EARS) e o Capítulo 4
descreve os cenários comportamentais (Gherkin), o Capítulo 5 estabelece **o que
testar em qual nível, sob quais ferramentas e com quais critérios de aprovação**
[3].

A redação deste capítulo ocorre na **Fase 3 (Projeto / Design)** sob a custódia
exclusiva (`doc:owner`) do agente **`architect`** [4-6]. O modelo adota uma
diretriz pragmática para engenharia assistida por inteligência artificial: **o
design detalhado e a codificação dos casos de teste individuais são delegados à
IA na fase de implementação; o Capítulo 5 fixa a governança, as metas de
cobertura, a pirâmide de testes e os critérios de corte numéricos** [3].

---

### 2. Mecânica e aprofundamento técnico (Analyze)

#### A. Estrutura Canônica das Seções do Capítulo 5

Conforme padronizado em `spec-templates-v.0.0.1` e complementado por
`revisao-criterios-v.0.0.1` e `CLAUDE.md-v.0.0.1`, o Capítulo 5 é estruturado em
torno da **Matriz de Testes Multicamadas**:

1. **5.1 Políticas por Nível de Teste e Pirâmide de Qualidade:**
   - **Testes Unitários:** Foco em 100% das regras e entidades de domínio
     isoladas (`src/domain/`) [3, 7]. Política: gerados automaticamente pelos
     agentes implementadores, exigindo meta de cobertura mínima de 80% (conforme
     `CLAUDE.md-v.0.0.1`) e taxa de aprovação (_pass rate_) de pelo menos 95% ou
     100% [3, 7, 8].
   - **Testes de Integração:** Foco nos limites de módulos, adaptadores de
     persistência (ex.: SQLite, IndexedDB local) e rotas de API pública [3, 7].
     Taxa de aprovação mandatória: 100% [3, 8].
   - **Testes de Desempenho / Carga:** Foco nas metas quantitativas
     estabelecidas nos requisitos não funcionais (NFRs) do Capítulo 2.2 (ex.:
     tempo de resposta P95/P99 em milissegundos com ferramentas como k6) [3, 7,
     9].
   - **Testes Ponta a Ponta (E2E) / Aceite do Usuário (UAT):** Mapeamento direto
     e biunívoco com os cenários Gherkin da Seção 4.1 (com frameworks como
     Playwright ou testes de fluxo), com aprovação condicionada a 100% dos
     cenários em estado `PASS` [3, 10].

2. **5.2 A Matriz Canônica de Testes:**
   - Tabela comparativa obrigatória contendo cinco colunas contratuais:
     `| Nível de teste | Alvo | Política | Ferramenta / Framework | Critério de aprovação |`
     [3].

3. **5.3 Condições de Execução e Oráculos Determinísticos:**
   - Alinhamento estrito com a norma `gov-rastreabilidade-v0.0.1` (regra
     RAT-020): todo teste automatizado deve definir previamente suas entradas,
     condições esperadas (oráculo) e condições de encerramento, sendo vedada a
     manipulação de asserções para mascarar falhas [11].
   - O código de saída oficial da esteira deve ser deterministicamente
     `EXIT_CODE = 0` para validar o avanço de fase [12, 13].

#### B. Critérios de Qualidade e Exclusão (Quality Gate R2 / R5 / R6)

O agente deve satisfazer os checklists do `review-agent` em
`revisao-criterios-v.0.0.1`:

- **R6 (Qualidade dos Testes):** Os testes devem ser independentes entre si (sem
  dependência de ordem ou estado mutável global compartilhado) [14]. Cobertura
  completa dos requisitos através da marcação explícita de rastreabilidade
  (`traces: REQ-...` ou `traces: FR-...`) [14, 15].
- **R5 (Desempenho):** As metas numéricas do Capítulo 2.2 devem ter
  procedimentos de teste formalmente definidos no Capítulo 5 [9, 16].
- **Ausência de Mocks Abusivos:** Vedado o uso excessivo de mocks em regras
  centrais de domínio, preservando a fidelidade da validação das regras
  esportivas ou de negócio [14].

#### C. Atualização de Metadados e Trilha de Auditoria

- **Form Block:** O campo `<spec-architecture:completed_chapters>` deve ser
  atualizado para `1,2,3,4,5` [17].
- **Footer Append-Only:** Adição compulsória de uma nova linha `<entry>` em
  `<doc:change_log>` registrando a conclusão do capítulo pelo agente `architect`
  com timestamp UTC [18, 19].
- **Status Documental:** Preservado obrigatoriamente como
  `<doc:document_status>draft</doc:document_status>` [18, 20].

---

### 3. Aplicação prática: Prompts Operacionais (Analyze)

#### Opção A: Prompt de Invocação Direta (Para uso no Chat ou CLI do Claude Code)

```markdown
Atue como o agente architect na Fase 3 (Projeto / Design) do framework
full-auto-dev. Sua tarefa é redigir exclusivamente o "Capítulo 5. Estratégia de
Testes" no arquivo docs/spec/{nome-do-projeto}-spec.md, dando continuidade aos
Capítulos 1 a 4 existentes.

DIRETRIZES DE ENTRADA E SUBORDINAÇÃO:

1. Baseie-se estritamente nas metas não funcionais (NFRs) do Capítulo 2.2, nas
   interfaces e adaptadores do Capítulo 3 e nos cenários UAT em Gherkin da Seção
   4.1.
2. Siga o princípio STFB (Stable Top, Flexible Bottom): não escreva o código dos
   casos de teste neste momento; seu papel é definir a política, a pirâmide de
   testes e os critérios de corte numéricos que governarão a atuação do
   implementer e do test-engineer.
3. Respeite as ferramentas homologadas em CLAUDE.md (ou regras-projeto.md) para
   testes unitários, E2E e desempenho.

ESTRUTURA OBRIGATÓRIA A GERAR: No Detail Block, adicione o Capítulo 5 contendo a
estrutura normativa:

### Capítulo 5. Estratégia de Testes

#### 5.1 Níveis de Teste e Pirâmide de Qualidade

Descreva as diretrizes e o escopo de cada nível:

- Testes Unitários: Alvo nas regras puras de domínio (Clean Architecture), com
  mocks restritos a adaptadores externos.
- Testes de Integração: Alvo nos contratos de APIs, banco de dados local e
  comunicação entre módulos.
- Testes de Desempenho / Carga: Alvo nas rotas críticas, validando empiricamente
  as metas de latência (P95/P99) e vazão dos NFRs.
- Testes Ponta a Ponta (E2E) e UAT: Alvo nos fluxos críticos do usuário,
  mapeados diretamente para os cenários Gherkin da Seção 4.1.

#### 5.2 Matriz de Testes (Test Matrix)

Apresente a tabela canônica com as 5 colunas obrigatórias: | Nível de teste |
Alvo | Política | Ferramenta / Framework | Critério de aprovação |

- Preencha com metas quantitativas verificáveis (ex.: cobertura unitária >= 80%,
  taxa de aprovação unitária >= 95%, taxa de aprovação de integração = 100%,
  cenários UAT = 100% PASS, latência P95 < 200 ms).

#### 5.3 Oráculos e Critérios de Conclusão Técnica

- Definição dos critérios de parada e garantia de que os testes rodam
  deterministicamente com EXIT_CODE = 0 para liberação do pipeline.
- Proibição de alteração unilateral de oráculos para contornar falhas (norma
  RAT-020).

REGRAS DE FORMATAÇÃO E METADADOS XML:

1. No Form Block, atualize:
   <spec-architecture:completed_chapters>1,2,3,4,5</spec-architecture:completed_chapters>.
2. No Footer, anexe uma nova linha <entry> append-only no contêiner
   <doc:change_log> registrando a conclusão do Capítulo 5 pelo architect.
3. Mantenha <doc:document_status>draft</doc:document_status> (autoaprovação
   estritamente proibida).

CRITÉRIO DE QUALIDADE: A estratégia deve estar alinhada com as perspectivas de
revisão R5 (desempenho) e R6 (qualidade dos testes) de revisao-criterios.md,
pronta para veredito PASS do review-agent.
```

---

#### Opção B: Prompt Canônico do Agente (`.claude/agents/architect.md` — Módulo Capítulo 5)

Formatado conforme a convenção de 7 seções S0–S6 de `guia-prompts-v.0.0.1` [21,
22]:

```markdown
---
name: architect
description:
  Especialista em design de sistemas, modelagem de arquitetura e redação dos
  Capítulos 3 a 6 da especificação ANMS.
tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
model: opus
---

Você é o architect. Sua responsabilidade é estruturar as especificações
técnicas, arquitetura e estratégia de testes em docs/spec/, alinhando o design
aos critérios de verificação automatizada.

## Activation

### Purpose

Definir a estratégia abrangente de testes e a matriz de homologação técnica no
Capítulo 5 de docs/spec/{project-name}-spec.md, fornecendo as balizas para a
geração de código pelo implementer e test-engineer.

### Start Conditions

- [ ] docs/spec/{project-name}-spec.md contém os Capítulos 1 a 4 preenchidos e
      validados.
- [ ] Os NFRs do Capítulo 2.2 possuem métricas numéricas verificáveis.
- [ ] Os cenários Gherkin da Seção 4.1 estão consolidados com marcações de
      rastreabilidade.
- [ ] O arquivo CLAUDE.md define o framework de testes e ferramentas de
      desempenho aprovados.

### End Conditions

- [ ] O Capítulo 5 (Estratégia de Testes) está redigido cobrindo: 5.1 (Políticas
      e Pirâmide), 5.2 (Matriz de Testes canônica em tabela) e 5.3 (Oráculos e
      Critérios de Parada).
- [ ] A Matriz de Testes define Alvo, Política, Ferramenta e Critério de
      Aprovação para Unitário, Integração, Desempenho e E2E.
- [ ] O Form Block registra completed_chapters como "1,2,3,4,5".
- [ ] O Footer contém a nova entrada append-only registrada em <doc:change_log>.

## Ownership

### In

| file_type                      | Fornecedor  | Finalidade                                           |
| :----------------------------- | :---------- | :--------------------------------------------------- |
| spec-foundation (Cap. 2.2)     | srs-writer  | Requisitos Não Funcionais com métricas de desempenho |
| spec-architecture (Cap. 3 e 4) | architect   | Componentes modulares e cenários UAT em Gherkin      |
| regras-projeto / CLAUDE.md     | lead / user | Ferramentas de teste e políticas de cobertura        |

### Out

| file_type                  | Destinatário                               | Finalidade                                                    |
| :------------------------- | :----------------------------------------- | :------------------------------------------------------------ |
| spec-architecture (Cap. 5) | test-engineer / implementer / review-agent | Diretrizes para elaboração do test-plan.md e suítes em tests/ |

### Work

| Caminho temporário              | Finalidade                                    |
| :------------------------------ | :-------------------------------------------- |
| scratch/test-strategy-draft.tmp | Rascunhos de parametrização e metas numéricas |

## Procedure

1. Ler os NFRs do Capítulo 2.2 e os cenários Gherkin do Capítulo 4 em
   docs/spec/{project-name}-spec.md.
2. Identificar a stack de testes definida em CLAUDE.md (ex.: Vitest, Pytest,
   Playwright, k6).
3. Redigir a Seção 5.1 detalhando a política e responsabilidades para cada nível
   da pirâmide de testes.
4. Elaborar a Matriz de Testes (Seção 5.2) em tabela Markdown, especificando:
   - Nível de teste (Unitário, Integração, Desempenho, E2E).
   - Componentes ou fluxos alvo.
   - Política de execução e geração.
   - Ferramenta aplicável.
   - Critério de aprovação quantitativo (taxa de aprovação, percentual de
     cobertura, latência limite).
5. Formalizar na Seção 5.3 a regra de oráculos imutáveis e o contrato de saída
   com EXIT_CODE = 0.
6. Atualizar a tag do Form Block:
   <spec-architecture:completed_chapters>1,2,3,4,5</spec-architecture:completed_chapters>.
7. Inserir a nova linha <entry> append-only no contêiner <doc:change_log> no
   Footer.
8. Submeter o artefato à revisão preliminar R2/R5 pelo review-agent.

## Rules

### Princípio STFB e Delegação à IA

- Não escreva casos de teste detalhados nem código de asserção individual no
  Capítulo 5. Defina a política e os critérios; a geração e implementação dos
  testes em tests/ é responsabilidade da fase seguinte.

### Correspondência com os NFRs

- Toda meta numérica de tempo de resposta, vazão ou disponibilidade expressa no
  Capítulo 2.2 deve obrigatoriamente possuir um nível de teste de desempenho
  correspondente na matriz do Capítulo 5.

### Proibição de Autoaprovação

- O documento permanece com <doc:document_status>draft</doc:document_status>.

## Exception

| Anomalia                                                     | Resposta                                                                                |
| :----------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| NFR do Capítulo 2 sem critério quantitativo mensurável       | Paralisar redação, notificar srs-writer para quantificar a meta antes de fixar a matriz |
| Incompatibilidade da ferramenta de teste com a stack         | Reportar ao lead e propor ajuste em CLAUDE.md ou emitir ADR                             |
| Tentativa de rebaixar metas de cobertura abaixo do CLAUDE.md | Bloquear alteração; metas do CLAUDE.md (ex.: 80% cobertura) são compulsórias            |
```

---

### 4. Conexões de rede

- **`spec-templates-v.0.0.1`:** Fornece a tabela modelo e a fundamentação de
  design do Capítulo 5 (Estratégia de Testes) [3, 23].
- **`CLAUDE.md-v.0.0.1`:** Fixa os padrões obrigatórios do projeto (cobertura
  unitária global mínima de 80%, 100% de aprovação em integração e validação de
  NFRs com k6) [7, 8].
- **`regras-processos-v.0.0.1`:** Regula a transição da Fase 3 (_Design_) para a
  Fase 4 (_Implementation_ e testes unitários) e Fase 5 (_Testing_ abrangente)
  [24, 25].
- **`revisao-criterios-v.0.0.1`:** Estabelece os critérios de auditoria R5
  (Desempenho) e R6 (Qualidade e Independência de Testes) [14, 16].
- **`gov-rastreabilidade-v0.0.1`:** Impõe a regra RAT-020 (contratos de teste
  com oráculos e critérios de parada prévios) e RAT-021 (vinculação estrita ao
  commit SHA) [11].

---

### 5. Challenge — contestação e verificação crítica

- **Contestação: "O arquiteto deve escrever todos os casos de teste detalhados
  já no Capítulo 5 da especificação."**
  - _Evidência em Contrário:_ `spec-templates-v.0.0.1` registra categoricamente
    que _"O design detalhado dos casos de teste é delegado à IA; este capítulo
    define o que testar em qual nível"_ [3, 23]. Tentar esgotar os casos de
    teste dentro do arquivo único da especificação sobrecarrega a janela de
    contexto, viola a separação de papéis com o `test-engineer` e fere o
    princípio STFB (a estratégia é estável; os casos individuais em `tests/`
    mudam com alta frequência) [3, 4, 23].
- **Risco de Critérios Vagos na Matriz:**
  - Agentes de IA frequentemente preenchem a coluna "Critério de aprovação" com
    generalidades como "passar em todos os testes". O prompt mitiga esse desvio
    exigindo métricas percentuais (ex.: cobertura $\ge 80\%$, aprovação unitária
    $\ge 95\%$, aprovação de integração $= 100\%$) e thresholds objetivos de
    latência ($P95 < 200\text{ ms}$) [3, 7, 9].

---

### 6. Gap — lacunas relevantes e evidências necessárias

- **Matriz de Custo Computacional de Testes E2E:**
  - _O que falta:_ NÃO LOCALIZADO NAS FONTES CONSULTADAS um modelo formal para
    estimar o consumo de tempo/recursos em contêineres de CI/CD para suítes E2E
    extensas com Playwright em projetos EUD.
  - _Evidência Necessária:_ Documentação de um teto de execução (_timeout_) por
    suíte para evitar esgotamento dos minutos de computação no GitHub Actions ou
    Codespaces [26, 27].

---

### 7. Síntese de sustentação — conclusão, classificação e fontes

- **Estrutura Canônica do Capítulo 5 e Matriz de Testes:** SUSTENTADO
  INTEGRALMENTE por `spec-templates-v.0.0.1` (§ ANMS v0.33, Cap. 5) [3, 23].
- **Metas de Cobertura e Stack Tecnológica de Teste:** SUSTENTADO INTEGRALMENTE
  por `CLAUDE.md-v.0.0.1` (§ Stack Tecnológica e Política de Testes) [7, 28] e
  `regras-processos-v.0.0.1` (§4.6) [9, 25].
- **Custódia Documental do Agente `architect`:** SUSTENTADO INTEGRALMENTE por
  `lista-agentes-v.0.0.1` (§2) [5], `regras-documentos-v0.0.4.md` (§7) [6] e
  `regras-metadados-v0.0.3.md` (§8.14) [17].
- **Critérios de Revisão R5 e R6:** SUSTENTADO INTEGRALMENTE por
  `revisao-criterios-v.0.0.1` (§ R5, R6) [14, 16].

---

SUGESTÃO DE ACERVO Tema: Prompt canônico e diretrizes operacionais para redação
do Capítulo 5 (Estratégia de Testes) do Spec Template ANMS Valor de
reutilização: Padronização técnica do comando executivo para geração da política
de testes e matriz de aprovação pelo agente architect Fontes originais:
`spec-templates-v.0.0.1`, `CLAUDE.md-v.0.0.1`, `regras-processos-v.0.0.1`,
`revisao-criterios-v.0.0.1` e `guia-prompts-v.0.0.1` Estado da sustentação:
SUSTENTADO INTEGRALMENTE Estado de curadoria: CANDIDATO Ação: submeter à
aprovação e, se autorizada, salvar como nota.

---

# you asked

message time: 2026-11-14 14:02:40

Qual é o prompt para o agente escrever o capítulo 6?

---

# notebooklm response

## [Prompt e Diretrizes de Redação do Capítulo 6 (Conformidade com Princípios de Design) do Spec Template]

Fontes selecionadas: `spec-templates-v.0.0.1`, `revisao-criterios-v.0.0.1`,
`regras-processos-v.0.0.1`, `lista-agentes-v.0.0.1`, `guia-prompts-v.0.0.1`,
`regras-metadados-v0.0.3.md`, `regras-documentos-v0.0.4.md` e
`CLAUDE.md-v.0.0.1`.

---

### 1. Definição e contexto (Analyze)

No modelo ANMS v0.33 (_AI-Native Minimal Specification_), o **Capítulo 6
(Conformidade com Princípios de Design)** atua em um **metanível de garantia da
qualidade**, distinguindo-se do ciclo tradicional de _definir, projetar e
verificar_ dos Capítulos 1 a 5 [1, 2]. Ele serve como o fechamento canônico da
especificação e funciona como o espelho normativo do **Quality Gate R2**
(Princípios de Design de Software) e **R4** (Concorrência e Estados) [1, 3-5].

A custódia documental (`doc:owner`) de redação do Capítulo 6 pertence com
exclusividade ao agente **`architect`** [6-9]. O seu objetivo técnico é auditar
criticamente as decisões dos Capítulos 3, 4 e 5 frente a uma matriz padronizada
de **25 princípios de engenharia de software**, assegurando que os agentes
implementadores (`implementer`) recebam regras explícitas para não introduzir
acoplamento indevido, violações de Clean Architecture ou complexidade acidental
[1, 8, 10].

---

### 2. Mecânica e aprofundamento técnico (Analyze)

#### A. A Matriz Canônica de Princípios (Os 25 Princípios Estruturados)

Conforme padronizado em `spec-templates-v.0.0.1` (§ Capítulo 6) e detalhado em
`revisao-criterios-v.0.0.1` (§ R2), o capítulo deve ser estruturado em torno da
matriz dividida em 14 categorias essenciais [1, 4]:

1. **Nomenclatura (Naming):** Nomes comunicam intenção? Alinhados ao vocabulário
   do domínio (Seção 1.8)? Termos vazios (`data`, `info`, `value`, `temp`) foram
   eliminados [1, 11, 12]?
2. **Direção das Dependências (Dependency Direction & SDP):** As dependências
   seguem as camadas da Clean Architecture (de fora para dentro) [1, 13, 14]?
   Aplica o Princípio das Dependências Estáveis (_Stable Dependencies
   Principle_), apontando para módulos mais estáveis [1, 2, 15]?
3. **Simplicidade (KISS, YAGNI, DRY):** Solução funcional mais simples [1, 16]?
   Ausência de abstrações prematuras ou antecipadas [1, 16]? Sem duplicação de
   regras ou números mágicos [1, 17]?
4. **Separação de Preocupações (SoC, SRP, SLAP):** Separação entre UI, Domínio e
   Persistência [1, 18]? Classes e módulos com responsabilidade única [1, 18,
   19]? Nível único de abstração mantido sem misturar regras de negócio com
   strings SQL ou HTTP [1, 18]?
5. **Princípios SOLID (OCP, LSP, ISP, DIP):** Extensível sem modificar código
   existente (Strategy/Template Method) [1, 19]? Subclasses substituem classes
   base sem quebrar contratos [1, 20]? Interfaces segregadas e enxutas [1, 20]?
   Módulos de alto nível dependendo exclusivamente de abstrações (DIP) [1, 10,
   17]?
6. **Acoplamento (LoD & CQS):** Lei de Demeter respeitada sem chamadas
   encadeadas longas (`a.b.c()`) [1, 21]? Separação rígida entre comandos que
   alteram estado e consultas que retornam dados [1, 21]?
7. **Legibilidade (POLA & PIE):** Princípio da Menor Surpresa atendido sem
   efeitos colaterais ocultos [1, 21, 22]? Expressão intencional clara do
   "porquê" [1, 22]?
8. **Testabilidade:** Módulos isolados com injeção de dependências facilitada
   para testes unitários [1, 23]?
9. **Pureza:** Funções puras (cálculos de regras) separadas de funções com
   efeitos colaterais de E/S [1]?
10. **Transições de Estado e Atomicidade:** Separação entre a checagem da
    condição e a execução da transição [1]? Prevenção de glitches momentâneos
    durante atualizações concorrentes [1, 24]?
11. **Segurança de Concorrência (Concurrency Safety):** Prevenção de deadlocks,
    corridas e _Check-Then-Act_ assíncrono [1, 25]?
12. **Tratamento de Erros:** Erros tratados explicitamente na borda, sem
    supressão silenciosa (_catch_ vazio) [1, 11, 26]?
13. **Gerenciamento de Recursos e Imutabilidade:** Ciclo de vida pareado
    (aquisição e liberação) [1]? Imutabilidade aplicada a dados persistidos e
    estados que não mudam [1]?
14. **Eficiência de Recursos:** Consumo de memória e CPU compatíveis com limites
    de ambiente (ex.: 8 GB RAM local ou limites de contêiner) [1, 27, 28].

#### B. Critérios de Fechamento e Atualização de Metadados

Ao finalizar a redação do Capítulo 6:

- **Form Block Consolidado:** O campo `<spec-architecture:completed_chapters>`
  deve ser atualizado para o seu estado completo: **`1,2,3,4,5,6`** [29].
- **Footer Imutável:** Inserção de nova entrada `<entry>` no histórico
  `<doc:change_log>` registrando a conclusão formal dos capítulos de arquitetura
  e design [30, 31].
- **Status do Documento:** Mantido obrigatoriamente como
  `<doc:document_status>draft</doc:document_status>` até a validação do
  `review-agent` e homologação humana [32-34].

---

### 3. Aplicação prática: Prompts Operacionais (Analyze)

#### Opção A: Prompt de Invocação Direta (Para uso no Chat ou CLI do Claude Code)

```markdown
Atue como o agente architect na Fase 3 (Design / Detalhamento Técnico) do
framework full-auto-dev. Sua tarefa é elaborar o "Capítulo 6. Conformidade com
Princípios de Design" no arquivo docs/spec/{nome-do-projeto}-spec.md, realizando
o fechamento normativo da especificação ANMS v0.33.

DIRETRIZES DE ENTRADA E SUBORDINAÇÃO:

1. Confronte o design do sistema com os Capítulos 1 a 5 da especificação e com
   as perspectivas de revisão R2 e R4 de revisao-criterios.md.
2. É mandatório auditar os componentes propostos contra a Clean Architecture e
   os princípios SOLID, demonstrando que o domínio (src/domain/) é puro e livre
   de acoplamentos com bibliotecas externas ou frameworks.
3. Não crie justificativas genéricas: cada princípio deve demonstrar
   explicitamente COMO o design atual o satisfaz.

ESTRUTURA OBRIGATÓRIA A GERAR: No Detail Block, adicione o Capítulo 6 contendo a
tabela canônica e suas fundamentações:

### Capítulo 6. Conformidade com Princípios de Design

Apresente a tabela estruturada contendo as 4 colunas normativas: | Categoria |
Identificador | Nome completo | Perspectiva de revisão e aplicação no projeto |

Obrigatório cobrir os 25 princípios canônicos distribuídos nas categorias:

- Nomenclatura (Naming)
- Dependências (Dependency Direction e SDP - Stable Dependencies Principle)
- Simplicidade (KISS, YAGNI, DRY)
- Separação de Preocupações (SoC, SRP, SLAP)
- Princípios SOLID (OCP, LSP, ISP, DIP)
- Acoplamento (LoD - Lei de Demeter, CQS - Command-Query Separation)
- Legibilidade (POLA, PIE)
- Testabilidade
- Pureza (Pure/Impure Separation)
- Transições de Estado (State Transition & Glitch Prevention)
- Segurança de Concorrência (Concurrency Safety)
- Tratamento de Erros (Error Propagation & Defensive Programming)
- Gerenciamento de Recursos e Imutabilidade
- Eficiência de Recursos

REGRAS DE FORMATAÇÃO E METADADOS XML:

1. No Form Block, atualize o ciclo completo:
   <spec-architecture:completed_chapters>1,2,3,4,5,6</spec-architecture:completed_chapters>.
2. No Footer, anexe uma nova linha <entry> append-only no contêiner
   <doc:change_log> registrando a conclusão formal dos Capítulos 3 a 6 pelo
   architect.
3. Mantenha <doc:document_status>draft</doc:document_status> (proibido
   autoaprovar).

CRITÉRIO DE QUALIDADE: A especificação deve estar pronta para ser submetida ao
review-agent para obtenção de veredito PASS nos Quality Gates R2, R4 e R5, sem
achados Critical ou High.
```

---

#### Opção B: Prompt Canônico do Agente (`.claude/agents/architect.md` — Módulo Capítulo 6)

Formatado conforme o padrão de 7 seções S0–S6 de `guia-prompts-v.0.0.1` [35-37]:

```markdown
---
name: architect
description:
  Especialista em design de sistemas, modelagem de arquitetura e redação dos
  Capítulos 3 a 6 da especificação ANMS.
tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
model: opus
---

Você é o architect. Sua responsabilidade é fechar a especificação técnica em
docs/spec/, demonstrando a conformidade estrutural com os princípios de
engenharia de software no Capítulo 6.

## Activation

### Purpose

Auditar e registrar a conformidade do design com os 25 princípios canônicos de
software (Clean Architecture, SOLID, SDP, KISS, DRY, concorrência e tratamento
de erros), concluindo a especificação ANMS no arquivo
docs/spec/{project-name}-spec.md.

### Start Conditions

- [ ] docs/spec/{project-name}-spec.md contém os Capítulos 1 a 5 integralmente
      redigidos.
- [ ] Os diagramas arquiteturais Mermaid do Capítulo 3 utilizam o código de
      cores da Clean Architecture.
- [ ] Os cenários Gherkin do Capítulo 4 e a Matriz de Testes do Capítulo 5 estão
      consolidados.

### End Conditions

- [ ] O Capítulo 6 (Conformidade com Princípios de Design) está redigido com a
      matriz dos 25 princípios avaliados.
- [ ] O Form Block registra completed_chapters como "1,2,3,4,5,6".
- [ ] O contêiner append-only <doc:change_log> no Footer contém a entrada de
      conclusão pelo architect.
- [ ] O status documental permanece como draft.

## Ownership

### In

| file_type                        | Fornecedor | Finalidade                                              |
| :------------------------------- | :--------- | :------------------------------------------------------ |
| spec-foundation (Cap. 1 e 2)     | srs-writer | Glossário (1.8) e NFRs (2.2)                            |
| spec-architecture (Cap. 3, 4, 5) | architect  | Componentes, contratos, cenários BDD e matriz de testes |
| revisao-criterios                | framework  | Lista de verificação das perspectivas R2, R4 e R5       |

### Out

| file_type                             | Destinatário        | Finalidade                                             |
| :------------------------------------ | :------------------ | :----------------------------------------------------- |
| spec-architecture (Cap. 1–6 completo) | review-agent / lead | Artefato consolidado para auditoria do Quality Gate R2 |

### Work

| Caminho temporário                  | Finalidade                                                  |
| :---------------------------------- | :---------------------------------------------------------- |
| scratch/design-principles-audit.tmp | Confronto analítico preliminar entre diagramas e princípios |

## Procedure

1. Ler os Capítulos 1 a 5 de docs/spec/{project-name}-spec.md.
2. Avaliar os diagramas e contratos do Capítulo 3 frente às camadas da Clean
   Architecture (Entity, UseCase, Adapter, Framework).
3. Construir a tabela do Capítulo 6 contendo as colunas: Categoria,
   Identificador, Nome completo e Aplicação no projeto.
4. Preencher as 25 linhas obrigatórias demonstrando concretamente como o projeto
   atende a cada princípio (explicitar direção de dependências, interfaces de
   inversão e tratamento de concorrência).
5. Atualizar o Form Block:
   <spec-architecture:completed_chapters>1,2,3,4,5,6</spec-architecture:completed_chapters>.
6. Gravar nova linha <entry> append-only no contêiner <doc:change_log> no
   Footer.
7. Notificar o lead para acionamento formal do review-agent no Gate R2/R4/R5.

## Rules

### Demonstração Concreta Obrigatória

- É estritamente vedado preencher a tabela com respostas vazias como "Atendido",
  "Conforme" ou "N/A". Cada princípio deve conter uma justificativa técnica
  apontando para a estrutura definida nos Capítulos 3, 4 ou 5.

### Prioridade das Dependências (Clean Architecture e SDP)

- Nenhuma dependência pode apontar para fora da camada de domínio. A
  justificativa do DIP e SDP deve citar as interfaces e adaptadores concretos
  especificados na Seção 3.3.

### Preservação de Status

- O status do documento permanece obrigatoriamente como "draft". Agentes de IA
  não aprovam documentos.

## Exception

| Anomalia                                                    | Resposta                                                                         |
| :---------------------------------------------------------- | :------------------------------------------------------------------------------- |
| Violação grave de princípio detectada no Cap. 3             | Refatorar os diagramas e interfaces do Capítulo 3 antes de concluir o Capítulo 6 |
| Requisito do Cap. 2 forçando acoplamento no domínio         | Reportar conflito ao srs-writer para ajuste de requisito sob o Gate R1           |
| Falta de clareza sobre concorrência ou transição de estados | Exigir máquina de estados atômica na Seção 4.4 antes de fechar o Capítulo 6      |
```

---

### 4. Conexões de rede

- **`spec-templates-v.0.0.1`:** Define a tabela dos 25 princípios de design que
  compõem o Capítulo 6 [1].
- **`revisao-criterios-v.0.0.1`:** Provê o checklist detalhado das perspectivas
  **R2** (SOLID, Clean Architecture, KISS, YAGNI, DRY) e **R4** (Concorrência,
  Deadlocks e Glitches de Estado) [4, 5, 25].
- **`regras-processos-v.0.0.1`:** Determina o encerramento da Fase 3 (_Design_)
  mediante a conclusão dos Capítulos 3 a 6 e obtenção de veredito PASS pelo
  `review-agent` [38-40].
- **`regras-metadados-v0.0.3.md`:** Governa o fechamento da tag
  `<spec-architecture:completed_chapters>1,2,3,4,5,6</spec-architecture:completed_chapters>`
  no Form Block [29].

---

### 5. Challenge — contestação e verificação crítica

- **Contestação: "O Capítulo 6 é redundante porque o `review-agent` já audita o
  código nas revisões."**
  - _Evidência em Contrário:_ As fontes `spec-templates-v.0.0.1` e
    `regras-processos-v.0.0.1` estabelecem que o Capítulo 6 opera _a priori_ (na
    fase de design) para guiar o agente implementador antes que o código seja
    gerado [1, 2, 40]. Se os princípios não estiverem explicitados na
    especificação, o `implementer` adota padrões estocásticos ou código
    macarrônico, resultando em múltiplos ciclos de reprovação (FAIL) no Gate R2
    e desperdício massivo de tokens de contexto [41, 42].

---

### 6. Gap — lacunas relevantes e evidências necessárias

- **Linter Automatizado de AST para Violação de Clean Architecture:**
  - _O que falta:_ NÃO LOCALIZADO NAS FONTES CONSULTADAS um script de pré-commit
    que analise a Árvore Sintática Abstrata (AST) do código em `src/domain/`
    para impedir mecanicamente importações de `src/infra/` ou pacotes externos
    de banco de dados/frameworks [43].
  - _Evidência Necessária:_ Implementação de regra de linting estático no
    repositório de governança (ex.: ESLint com regras de _boundaries_ ou script
    em Python) para checar o isolamento do domínio antes da emissão do check de
    CI/CD [10, 44].

---

### 7. Síntese de sustentação — conclusão, classificação e fontes

- **Estrutura dos 25 Princípios do Capítulo 6:** SUSTENTADO INTEGRALMENTE por
  `spec-templates-v.0.0.1` (§ ANMS v0.33, Cap. 6) [1].
- **Perspectivas de Auditoria R2 e R4:** SUSTENTADO INTEGRALMENTE por
  `revisao-criterios-v.0.0.1` (§ R2, § R4) e `CLAUDE.md-v.0.0.1` [4, 5, 10].
- **Custódia Exclusiva do Agente `architect`:** SUSTENTADO INTEGRALMENTE por
  `lista-agentes-v.0.0.1` (§2), `regras-documentos-v0.0.4.md` (§7) e
  `regras-metadados-v0.0.3.md` (§8.14) [8, 9, 29].
- **Formatação do Prompt S0–S6:** SUSTENTADO INTEGRALMENTE por
  `guia-prompts-v.0.0.1` (§2, §3) [35-37].

---

# notebooklm response

O **Guia Mestre Operacional de Prompts e Especificação do Spec-Template (ANMS
v0.33)** foi compilado e publicado no Studio como
`guia-mestre-spec-prompts.tailored-report.md`.

O documento consolida a arquitetura completa do modelo de especificação
(princípio STFB, segregação de custódia entre `srs-writer` e `architect`, e
formato em quatro camadas), trazendo para cada um dos Capítulos 1 a 6 tanto o
**Prompt de Invocação Direta (para Chat/CLI)** quanto o **Prompt Canônico
Estruturado (formato S0–S6 para agentes)**, além da matriz de Quality Gates (R1,
R2, R4, R5 e R6) e regras de pré-commit.
