# Criar app de handebol

## GATE DE QUALIDADE OBRIGATÓRIO (MARKDOWN)

Você NUNCA deve dar uma tarefa envolvendo arquivos `.md` como concluída sem
antes validar o código.

Ao finalizar a edição/criação de qualquer arquivo `.md`:

1. Execute no terminal: `npm run agent:lint`
2. Analise o resultado:
   - Se retornar vazio/sucesso: A tarefa está 100% concluída.
   - Se retornar logs com a tag `<erros>`: Você DEVE corrigir as falhas antes de
     prosseguir.

REGRAS DE CORREÇÃO (STRICT MODE):

- Altere APENAS as linhas exatas indicadas nos blocos de erro.
- NUNCA reescreva o restante do documento.
- Não resuma seções nem remova conteúdo válido apenas para se livrar do erro.
- Se receber o aviso de "ÚLTIMA TENTATIVA", seja estritamente conservador. Se o
  limite for ultrapassado, pare de tentar e marque a tarefa como
  FAILED_MANUAL_REVIEW.

<orientacao_de_produto>

A abordagem indicada é tratar a IA como uma **consultora sênior de produto
digital, tecnologia e desempenho esportivo**, e não apenas como uma ferramenta
que transforma ideias em textos ou gera listas de funcionalidades.

Ela deve investigar o problema, formular soluções, explicar como funcionariam,
identificar oportunidades de automação, comparar alternativas e propor
diferenciais. As decisões finais sobre o produto permanecem com você.

A referência de mercado já demonstra que funcionalidades isoladas, como controle
de presença, calendário e comunicação, estão disponíveis no Spond, enquanto
análise de vídeos, relatórios e feedback técnico fazem parte do Hudl. Portanto,
apenas reunir essas funcionalidades não constituiria, por si só, uma inovação.

A oportunidade mais interessante é **integrar a rotina do atleta, a metodologia
do treinador e a inteligência específica do handebol de praia em uma experiência
contínua**, em vez de criar várias ferramentas que exigem registros repetidos.

</orientacao_de_produto>

<descricao_conceitual status="PROPOSTA" versao="0.1">

<WritingBlock id="58371" variant="document"># Plataforma Inteligente de Handebol
de Praia **Documento de concepção funcional — Versão inicial 0.1**

**Natureza:** proposta de produto para discussão, não especificação aprovada.

## 1. Conceito do aplicativo

O aplicativo será concebido como um ecossistema digital especializado em
handebol de praia, capaz de conectar atletas e treinadores, organizar atividades
esportivas, acompanhar a evolução individual e coletiva e transformar
informações da rotina de treinamento e competição em recomendações práticas.

Seu objetivo não será simplesmente armazenar dados, mas ajudar cada usuário a
realizar suas atividades com menos esforço, maior organização e melhor acesso à
informação.

A plataforma deverá oferecer experiências diferentes para atletas e treinadores,
compartilhando as informações necessárias sem exigir que os usuários realizem
repetidamente as mesmas tarefas.

A inteligência artificial atuará como um assistente contextual, capaz de
compreender o histórico esportivo, interpretar registros, responder perguntas,
identificar padrões e sugerir intervenções.

**Princípio de produto:** cada informação registrada deve, sempre que possível,
gerar uma utilidade concreta para quem a forneceu.

## 2. Experiência do atleta

### 2.1. Meu espaço esportivo

Ao acessar o aplicativo, o atleta encontra um ambiente personalizado que reúne
as informações mais relevantes para seu momento esportivo.

Em vez de apresentar imediatamente uma grande quantidade de gráficos e números,
a interface prioriza o que o atleta precisa saber ou fazer naquele momento.

A página inicial pode mostrar o próximo treinamento, atividades pendentes,
informações da equipe, orientações do treinador e evolução dos objetivos
individuais.

**Exemplo de utilização:**

Uma atleta abre o aplicativo pela manhã e encontra:

> Bom dia! Seu próximo treino será amanhã, às 18h. Você já confirmou
> disponibilidade. Há uma atividade técnica de finalização para revisar e um
> novo comentário do seu treinador sobre o último jogo.

A atleta pode consultar as orientações, assistir aos vídeos e registrar suas
atividades sem precisar navegar por diferentes sistemas.

### 2.2. Identidade e trajetória esportiva

Cada atleta terá um perfil estruturado com informações esportivas, histórico de
equipes, posições, competições, resultados, conquistas, vídeos e evolução ao
longo do tempo.

O perfil poderá funcionar como um passaporte esportivo digital.

O sistema deve permitir distinguir informações públicas, dados compartilhados
com uma equipe e registros privados.

Uma atleta poderá participar de diferentes equipes ao longo da carreira sem
perder seu histórico pessoal, respeitados os direitos de acesso e a origem dos
registros.

### 2.3. Desenvolvimento individual

O atleta poderá acompanhar objetivos técnicos, físicos e táticos definidos em
conjunto com o treinador.

Para cada objetivo, o aplicativo apresentará atividades, explicações, vídeos de
referência e registros da evolução.

A IA poderá propor exercícios e conteúdos relacionados às necessidades
registradas, deixando explícito quando se tratar de uma recomendação automática.

### 2.4. Motivação e engajamento

A plataforma poderá valorizar consistência, aprendizagem, participação e
evolução, sem reduzir o desempenho esportivo a rankings de gols.

Marcos pessoais, acompanhamento de metas e feedback visual oferecerão estímulos
para manter o envolvimento.

Os mecanismos de gamificação deverão incentivar comportamentos saudáveis,
evitando recompensar excesso de treinamento ou comparar injustamente atletas com
funções diferentes.

## 3. Experiência do treinador

### 3.1. Central de comando esportivo

O treinador terá uma visão integrada de sua equipe e dos acontecimentos
relevantes.

A página inicial poderá mostrar o planejamento semanal, disponibilidade dos
atletas, atividades concluídas, partidas futuras e situações que precisam de sua
atenção.

A proposta é substituir a necessidade de consultar simultaneamente mensagens,
planilhas, calendários, fichas individuais e anotações dispersas.

### 3.2. Planejamento inteligente de treinamentos

O treinador informa os objetivos de um período, as características da equipe, a
frequência dos treinos e os recursos disponíveis.

A IA poderá apresentar propostas de sessões com justificativas técnicas e
alternativas de exercícios.

Cada sessão terá objetivos, duração, atividades, organização dos participantes,
materiais necessários e critérios para observar a execução.

O treinador poderá editar, rejeitar ou aprovar a proposta. Após o treino, os
registros poderão alimentar o planejamento seguinte.

### 3.3. Acompanhamento individual e coletivo

O treinador poderá consultar a evolução de seus atletas em diferentes dimensões:

- Técnica: execução e eficiência de fundamentos.
- Tática: tomada de decisão e comportamento em situações de jogo.
- Física: resultados de avaliações e indicadores de treinamento.
- Participação: presença, disponibilidade e atividades realizadas.
- Desenvolvimento: evolução dos objetivos definidos.

A plataforma deverá preservar o contexto de cada informação. Um resultado
isolado não deverá ser apresentado como prova de melhora ou piora do desempenho.

### 3.4. Apoio às decisões esportivas

O aplicativo poderá auxiliar na comparação de atletas, análise de combinações de
jogo e identificação de necessidades de treinamento.

As análises deverão mostrar quais dados foram utilizados e quais critérios
produziram cada sugestão.

A decisão de escalação, seleção ou convocação continuará pertencendo ao
treinador.

## 4. Núcleos de funcionalidades

| Núcleo                     | Funcionamento proposto                                                 |
| -------------------------- | ---------------------------------------------------------------------- |
| Gestão de equipes          | Elencos, funções, permissões, categorias e histórico de participação.  |
| Agenda inteligente         | Treinamentos, jogos, eventos, disponibilidade e avisos de alterações.  |
| Planejamento técnico       | Sessões, exercícios, progressões, objetivos e biblioteca metodológica. |
| Monitoramento esportivo    | Registros individuais, avaliações, carga percebida e evolução.         |
| Scout especializado        | Registro e análise de ações específicas do handebol de praia.          |
| Vídeo e desempenho         | Vídeos associados a eventos, atletas, períodos e indicadores.          |
| Laboratório tático         | Representação de situações de ataque, defesa e transições.             |
| Assistente de IA           | Consultas, relatórios, interpretações e recomendações contextuais.     |
| Comunicação                | Orientações, mensagens, feedback e confirmação de recebimento.         |
| Perfil esportivo           | Trajetória, conquistas, competências e conteúdos compartilháveis.      |
| Biblioteca de aprendizagem | Fundamentos, regras, exercícios e conteúdos técnicos.                  |
| Gestão de competições      | Jogos, adversários, resultados, histórico e análises.                  |
| Relatórios                 | Sínteses individuais, coletivas e comparações por período.             |
| Administração              | Convites, permissões, privacidade, exportação e controle dos dados.    |

## 5. Diferenciais tecnológicos propostos

### 5.1. Copiloto de treinamento

Um assistente capaz de relacionar planejamento, execução, avaliações e
resultados competitivos.

**Funcionamento:** a IA identifica que determinada situação técnica aparece com
frequência nos registros de partidas. Ela recupera evidências associadas e
sugere exercícios para trabalhar essa situação.

Após novas sessões ou partidas, o aplicativo permite comparar os indicadores e
verificar se houve mudança.

O diferencial é fechar o ciclo entre observação, intervenção e reavaliação.

### 5.2. Laboratório tático interativo

O treinador poderá representar movimentações, posicionamentos, substituições e
situações específicas do handebol de praia.

Será possível criar cenários, salvar sequências e compartilhar explicações com
os atletas.

A IA poderá auxiliar na descrição de alternativas táticas e apontar fatores para
observação. Simulações preditivas de resultados dependerão de modelos e dados
efetivamente validados.

### 5.3. Scout orientado às regras da modalidade

O módulo de scout considerará a estrutura real do handebol de praia, com
períodos independentes, gols de diferentes pontuações, situações de
superioridade, ações de especialistas e goleiros, Gol de Ouro e shoot-out.

A interface deve permitir o registro rápido de eventos durante a partida, com
botões e comandos adequados à dinâmica da modalidade.

Cada ocorrência poderá receber contexto: atleta envolvido, momento, resultado,
classificação da ação e referência de vídeo.

### 5.4. Vídeo conectado ao conhecimento esportivo

Ao consultar uma estatística, o treinador poderá acessar os trechos de vídeo que
originaram aquele indicador.

Por exemplo, selecionar os arremessos de uma atleta em uma competição e
visualizar as jogadas correspondentes.

A IA poderá auxiliar na organização dos vídeos e na identificação preliminar de
eventos. Classificações automáticas deverão permitir revisão humana,
especialmente quando a imagem for insuficiente.

### 5.5. Assistente pessoal do atleta

A atleta poderá fazer perguntas em linguagem natural:

> Quais aspectos do meu jogo devo priorizar nesta semana?

O sistema consultará informações acessíveis à atleta, apresentará uma síntese e
explicará de quais registros surgiram as recomendações.

Sem registros suficientes, deverá informar a ausência de evidência em vez de
inventar avaliações.

### 5.6. Inteligência ambiental

Como o handebol de praia ocorre em ambiente externo, a plataforma poderá
relacionar programação e condições climáticas.

A funcionalidade poderá informar previsão de calor, chuva e vento, apoiando
ajustes logísticos e o planejamento das sessões.

A recomendação final de segurança e realização do treinamento deverá observar
condições reais e orientações profissionais.

### 5.7. Funcionamento sem conexão

Operações importantes, especialmente registros de partida e consulta de
informações previamente disponibilizadas, deverão ser consideradas para
utilização sem internet.

Os registros poderão ser sincronizados quando a conexão retornar.

A interface deverá identificar alterações pendentes e permitir resolver
conflitos sem perda silenciosa de informações.

## 6. Jornada integrada de utilização

### Antes do treinamento

O treinador define os objetivos e confirma a programação.

A plataforma solicita a disponibilidade dos atletas, consolida as respostas e
apresenta a composição prevista do grupo.

Com essas informações, a IA poderá propor adaptações ao treinamento, sujeitas à
aprovação do treinador.

### Durante o treinamento

O treinador consulta as atividades e registra observações de maneira
simplificada.

Os atletas participam normalmente, sem que o uso do aplicativo se transforme em
uma distração durante as atividades.

### Depois do treinamento

Os atletas registram as informações solicitadas, como percepção de esforço e
comentários.

O treinador confirma o que foi realizado e acrescenta suas avaliações.

A plataforma consolida os registros e organiza as informações relevantes para a
próxima sessão.

### Durante uma competição

A comissão técnica poderá utilizar um modo de partida para registrar eventos,
consultar informações e acompanhar indicadores previamente configurados.

O registro deverá ser rápido, preservar a continuidade do jogo e não depender de
uma conexão constante.

### Depois da competição

O sistema relaciona os registros da partida com os vídeos disponíveis, produz
relatórios e apresenta oportunidades de análise.

O treinador valida suas conclusões e poderá transformá-las em novos objetivos e
atividades.

## 7. Experiência visual e usabilidade

A interface deverá ser concebida prioritariamente para uso em dispositivos
móveis, incluindo ambientes externos com alta luminosidade.

Características recomendadas:

- Navegação simples e ações prioritárias facilmente identificáveis.
- Informação organizada conforme o papel e o contexto do usuário.
- Fotografias e vídeos esportivos utilizados com finalidade informativa.
- Tipografia legível e contraste adequado.
- Redução de preenchimentos repetidos.
- Feedback imediato após cada ação importante.
- Acessibilidade e suporte a diferentes necessidades de interação.
- Continuidade da experiência entre celular, tablet e computador.

O conceito visual deve transmitir identidade esportiva, profissionalismo,
dinamismo e tecnologia, sem depender de elementos decorativos genéricos.

## 8. Modelo de inteligência artificial

A IA poderá operar em quatro níveis distintos.

**Nível 1 — Assistência:** responde perguntas, explica funcionalidades e
recupera informações.

**Nível 2 — Automação:** organiza eventos, gera lembretes, consolida registros e
produz resumos com base em regras definidas.

**Nível 3 — Recomendação:** interpreta informações disponíveis, identifica
padrões e apresenta sugestões justificadas.

**Nível 4 — Análise avançada:** explora cenários, realiza comparações e utiliza
modelos analíticos validados quando houver dados suficientes.

Cada funcionalidade deverá indicar se apresenta um fato registrado, um cálculo,
uma inferência da IA ou uma sugestão.

A IA não deverá diagnosticar lesões nem substituir decisões técnicas ou clínicas
que dependam de profissionais responsáveis.

## 9. Privacidade, controle e confiança

O aplicativo deverá distinguir os dados pertencentes à experiência individual do
atleta daqueles produzidos no contexto de uma equipe.

O compartilhamento de informações deverá respeitar permissões, finalidade de
utilização e regras aplicáveis de proteção de dados.

Registros clínicos, quando fizerem parte do produto, deverão possuir controles
específicos e não ser automaticamente expostos a treinadores ou outros atletas.

As decisões relevantes realizadas com auxílio de IA deverão preservar as fontes
utilizadas, as alterações feitas e a intervenção humana.

## 10. Evolução do produto

O conceito completo não implica implementar todas as funcionalidades
simultaneamente.

Uma evolução possível seria:

**Etapa inicial — Utilidade cotidiana:** perfil, equipes, agenda,
disponibilidade, planejamento, comunicação e registros essenciais.

**Etapa de inteligência esportiva:** acompanhamento de desempenho, scout, vídeos
associados a eventos, relatórios e assistente contextual.

**Etapa avançada — Diferenciação:** laboratório tático, recomendações
personalizadas, automações mais complexas e modelos analíticos especializados.

Essa divisão é uma proposta de implantação, não uma decisão sobre o escopo ou a
ordem definitiva de desenvolvimento.

## 11. Critério central de qualidade

Uma funcionalidade será considerada relevante quando apresentar claramente:

**Problema real → Solução proposta → Funcionamento → Benefício para o usuário →
Evidência de que resolveu o problema.**

O aplicativo não deve ser avaliado apenas pela quantidade de funcionalidades ou
pela presença de IA, mas pela redução de trabalho, clareza das informações,
qualidade da experiência e contribuição para o desenvolvimento esportivo.
</WritingBlock>

</descricao_conceitual>

<avaliacao_consultiva>

## O que torna essa proposta diferente?

A proposta acima é um ponto de partida. A diferenciação mais relevante está em
quatro capacidades combinadas:

## Inteligência contínua

O aplicativo utiliza o que aconteceu em treinos e jogos para ajudar a preparar o
próximo ciclo de trabalho.

---

## Especialização real na modalidade

A lógica esportiva deve refletir o handebol de praia, inclusive suas situações
táticas e regras vigentes.

---

## Experiência compartilhada

Atletas e treinadores utilizam os mesmos registros autorizados, mas recebem
informações apropriadas às suas funções.

---

## Menos operação, mais esporte

A tecnologia reduz tarefas administrativas e facilita decisões, sem exigir que o
usuário se torne um operador de planilhas e relatórios.

## Referências e sustentação

A proposta é compatível com direções já observadas no mercado, mas sua eficácia
comercial e esportiva ainda precisa ser validada com usuários.

A versão das regras da IHF vigente desde **1º de abril de 2026** é uma
referência essencial para um módulo específico de handebol de praia. Ela inclui,
entre outras atualizações, regras sobre jogo passivo e situações dos últimos 15
segundos.[3][4]

Para o uso de IA no esporte, o Comitê Olímpico Internacional publicou em 2026 um
referencial voltado à transparência, proteção de dados, confiabilidade e
responsabilidade, princípios aplicáveis à concepção do assistente esportivo.[4]

Se o público incluir crianças ou adolescentes, também será necessário considerar
a LGPD e o ECA Digital, inclusive os requisitos específicos de proteção de dados
e segurança de usuários menores de idade.[1][3]

</avaliacao_consultiva>

<conclusao>

**Estado: SUSTENTADO PARCIALMENTE.** As referências verificadas sustentam a
existência das soluções de mercado e a necessidade de respeitar regras
esportivas e de proteção de dados. As funcionalidades diferenciadas constituem
propostas de produto; não foram implementadas, testadas com atletas ou validadas
comercialmente.

A descrição apresentada estabelece uma concepção funcional inicial, ainda sem
transformar possibilidades em requisitos aprovados.

O trabalho de consultoria deve prosseguir principalmente a partir de uma
questão: **quais problemas dos atletas e treinadores são suficientemente
importantes para justificar a adoção frequente do aplicativo?**

É essa resposta que permitirá transformar uma plataforma tecnologicamente
sofisticada em um produto realmente desejado pelo público.

</conclusao>

### Estrutura do Documento Mestre do Aplicativo de Handebol de Praia

Recomendo um **Documento Mestre de Concepção e Especificação do Sistema**,
organizado em oito partes.

Ele deve responder progressivamente:

1. Por que o aplicativo deve existir?
2. Para quem será desenvolvido?
3. Quais problemas deve resolver?
4. Que soluções e diferenciais oferecerá?
5. Como cada funcionalidade funcionará?
6. Como os usuários interagirão com o aplicativo?
7. Como dados, automações e inteligência artificial funcionarão?
8. Quais condições permitirão implementar e verificar o sistema?

A estrutura seguinte constitui o índice mestre proposto. Nenhuma funcionalidade
mencionada está automaticamente aprovada para implementação.

Organização geral

{#each [ ["I","Fundamentos do produto","01–07"], ["II","Mercado e
experiência","08–11"], ["III","Funcionalidades","12–13"], ["IV","Funcionamento e
inteligência","14–18"], ["V","Segurança e tecnologia","19–21"],
["VI","Sustentabilidade do produto","22–23"], ["VII","Implementação e
validação","24–26"], ["VIII","Referências e anexos","27"] ] as p}

PARTE {p[0]}

{p[2]}

{p[1]}

{/each}

---

27 seções principais, com subdivisões para cada domínio funcional e suas
operações.

```markdown
<WritingBlock id="74631" variant="document"># DOCUMENTO MESTRE DE CONCEPÇÃO E
ESPECIFICAÇÃO DO SISTEMA

## Plataforma Inteligente de Handebol de Praia

**Tipo:** estrutura documental proposta **Estado:** PROPOSTA — não aprovada
**Finalidade:** orientar a descrição completa do produto, seu funcionamento,
seus diferenciais e seus requisitos.

---

### PARTE I — FUNDAMENTOS E IDENTIDADE DO PRODUTO

## 01. Identificação e controle documental

**Objetivo:** estabelecer a identidade e a governança do documento.

### Subseções

1.1. Nome do produto e identificação do projeto. 1.2. Propósito do documento.
1.3. Versão, data e estado de elaboração. 1.4. Responsáveis e autoridade
decisória. 1.5. Histórico de alterações. 1.6. Terminologia e convenções
utilizadas. 1.7. Fontes e documentos de referência. 1.8. Classificação das
informações: evidência, decisão, inferência, hipótese e proposta.

## 02. Resumo executivo

**Objetivo:** apresentar uma visão completa e compreensível do aplicativo.

### Subseções

2.1. Apresentação geral do aplicativo. 2.2. Problema central que pretende
resolver. 2.3. Público-alvo. 2.4. Proposta de valor para atletas. 2.5. Proposta
de valor para treinadores. 2.6. Principais capacidades do produto. 2.7.
Diferenciais competitivos. 2.8. Papel da inteligência artificial. 2.9.
Benefícios e resultados esperados. 2.10. Visão de evolução futura.

## 03. Contexto e diagnóstico dos problemas

**Objetivo:** identificar e compreender problemas concretos antes de definir as
soluções.

### Subseções

3.1. Contexto do handebol de praia. 3.2. Rotina esportiva dos atletas. 3.3.
Rotina operacional e técnica dos treinadores. 3.4. Problemas de comunicação e
organização. 3.5. Dificuldades de planejamento de treinamentos. 3.6. Problemas
relacionados ao desempenho e sua avaliação. 3.7. Fragmentação dos dados
esportivos. 3.8. Limitações das soluções atualmente utilizadas. 3.9.
Necessidades não atendidas. 3.10. Priorização dos problemas por impacto,
frequência e relevância.

Cada problema deverá possuir descrição, público afetado, contexto, consequência
e evidência disponível.

## 04. Público-alvo, usuários e partes interessadas

**Objetivo:** definir quem utilizará ou será afetado pelo aplicativo.

### Subseções

4.1. Atletas de diferentes níveis e categorias. 4.2. Treinadores e integrantes
de comissões técnicas. 4.3. Gestores de equipes e organizações esportivas. 4.4.
Profissionais especializados, quando incluídos no escopo. 4.5. Responsáveis
legais, quando aplicável. 4.6. Perfis de usuário e necessidades específicas.
4.7. Objetivos, dificuldades e expectativas por perfil. 4.8. Níveis de
experiência digital. 4.9. Contextos de uso: praia, deslocamento, casa e
competição. 4.10. Acessibilidade e necessidades de inclusão.

## 05. Visão, posicionamento e proposta de valor

**Objetivo:** explicar o que o aplicativo pretende representar para seus
usuários.

### Subseções

5.1. Visão do produto. 5.2. Missão e finalidade. 5.3. Problemas prioritários a
resolver. 5.4. Benefícios exclusivos para atletas. 5.5. Benefícios exclusivos
para treinadores. 5.6. Diferenciação em relação a ferramentas genéricas. 5.7.
Especialização no handebol de praia. 5.8. Princípios de inovação tecnológica.
5.9. Personalidade e posicionamento da marca. 5.10. Visão de longo prazo.

## 06. Objetivos e resultados mensuráveis

**Objetivo:** estabelecer como avaliar o valor efetivamente entregue pelo
aplicativo.

### Subseções

6.1. Objetivos estratégicos. 6.2. Objetivos por público-alvo. 6.3. Resultados
esportivos que o produto pretende apoiar. 6.4. Resultados operacionais
esperados. 6.5. Indicadores de experiência e satisfação. 6.6. Indicadores de
adoção e utilização. 6.7. Redução pretendida de tarefas manuais. 6.8. Critérios
para avaliar o sucesso das soluções. 6.9. Métodos de medição dos resultados.

## 07. Escopo e limites do produto

**Objetivo:** identificar o que faz parte da proposta e o que não faz.

### Subseções

7.1. Capacidades previstas. 7.2. Capacidades em análise. 7.3. Funcionalidades
aprovadas. 7.4. Funcionalidades excluídas. 7.5. Restrições estabelecidas. 7.6.
Dependências relevantes. 7.7. Premissas pendentes de validação. 7.8. Limites de
responsabilidade da IA. 7.9. Critérios para inclusão de novas funcionalidades.

---

### PARTE II — MERCADO, EXPERIÊNCIA E INTERAÇÃO

## 08. Análise de mercado e oportunidades de inovação

**Objetivo:** encontrar oportunidades reais de diferenciação.

### Subseções

8.1. Panorama de aplicativos esportivos. 8.2. Soluções voltadas aos atletas.
8.3. Soluções utilizadas por treinadores. 8.4. Plataformas de treinamento e
gestão esportiva. 8.5. Ferramentas de análise de desempenho e vídeo. 8.6.
Aplicações atuais de inteligência artificial no esporte. 8.7. Comparação das
funcionalidades existentes. 8.8. Problemas não resolvidos satisfatoriamente.
8.9. Oportunidades específicas do handebol de praia. 8.10. Soluções inovadoras
propostas. 8.11. Benefícios, limitações e viabilidade de cada inovação. 8.12.
Diferenciais competitivos prioritários.

A análise deverá distinguir funcionalidades comuns de mercado, práticas
consolidadas e propostas realmente diferenciadas.

## 09. Experiência do usuário e princípios de design

**Objetivo:** descrever como será a experiência de utilização.

### Subseções

9.1. Filosofia de experiência do aplicativo. 9.2. Princípios de simplicidade e
eficiência. 9.3. Personalização por perfil de usuário. 9.4. Uso prioritário em
dispositivos móveis. 9.5. Legibilidade em ambientes externos. 9.6. Organização e
hierarquia das informações. 9.7. Redução de etapas e preenchimentos manuais.
9.8. Acessibilidade. 9.9. Linguagem, identidade visual e comunicação. 9.10.
Feedback das ações. 9.11. Tratamento de erros e estados vazios. 9.12.
Experiência sem conexão. 9.13. Diretrizes de interação com a IA.

## 10. Arquitetura da informação e navegação

**Objetivo:** especificar como o conteúdo do aplicativo estará organizado.

### Subseções

10.1. Estrutura geral das áreas do aplicativo. 10.2. Navegação dos atletas.
10.3. Navegação dos treinadores. 10.4. Navegação dos administradores. 10.5.
Menus e seções principais. 10.6. Telas iniciais personalizadas. 10.7. Busca e
filtros. 10.8. Organização das telas secundárias. 10.9. Relações entre telas e
funcionalidades. 10.10. Mapa de navegação. 10.11. Estados e transições das
interfaces.

## 11. Jornadas completas dos usuários

**Objetivo:** descrever experiências reais, do início ao resultado.

### Subseções

11.1. Primeiro acesso e cadastro. 11.2. Configuração do perfil esportivo. 11.3.
Entrada e participação em equipes. 11.4. Rotina diária do atleta. 11.5. Rotina
diária do treinador. 11.6. Planejamento de uma semana de treinamentos. 11.7.
Confirmação de disponibilidade. 11.8. Participação em um treinamento. 11.9.
Preparação de uma competição. 11.10. Registro e análise de uma partida. 11.11.
Consulta à evolução esportiva. 11.12. Solicitação de recomendações à IA. 11.13.
Compartilhamento de informações. 11.14. Tratamento de dificuldades e erros.
11.15. Encerramento de uma participação ou vínculo.

Cada jornada deverá representar ações do usuário, respostas do sistema,
informações necessárias e resultado obtido.

---

### PARTE III — DESCRIÇÃO COMPLETA DAS FUNCIONALIDADES

## 12. Mapa geral de funcionalidades

**Objetivo:** apresentar todos os domínios funcionais propostos e sua relação
com os problemas identificados.

### Subseções

12.1. Inventário de funcionalidades. 12.2. Classificação por domínio de negócio.
12.3. Funcionalidades para atletas. 12.4. Funcionalidades para treinadores.
12.5. Funcionalidades compartilhadas. 12.6. Funcionalidades administrativas.
12.7. Funcionalidades de IA e automação. 12.8. Dependências e integrações entre
funcionalidades. 12.9. Relação entre cada funcionalidade e o problema resolvido.
12.10. Estado de decisão e prioridade de cada proposta.

## 13. Especificação funcional detalhada dos módulos

**Objetivo:** descrever integralmente o funcionamento de cada módulo.

### 13.1. Contas, autenticação e acesso

Cadastro, login, recuperação de acesso, perfis, vínculos e gerenciamento da
conta.

### 13.2. Perfil e identidade esportiva

Informações individuais, posições, trajetória, histórico, realizações e
apresentação do atleta.

### 13.3. Equipes e elencos

Criação de equipes, convites, categorias, organização de integrantes, papéis e
histórico de participação.

### 13.4. Agenda e disponibilidade

Treinamentos, jogos, compromissos, confirmação de disponibilidade, presença e
notificações.

### 13.5. Planejamento técnico e metodológico

Organização de sessões, objetivos, exercícios, progressões, ciclos e atividades
de treinamento.

### 13.6. Desenvolvimento individual do atleta

Objetivos pessoais, tarefas, recomendações, acompanhamento de evolução e
feedback.

### 13.7. Avaliação e monitoramento esportivo

Avaliações técnicas, táticas e físicas, registros de treinamento, questionários
e comparações históricas.

### 13.8. Scout e estatísticas de handebol de praia

Registro de ações de jogo, pontuações, desempenho individual e coletivo, filtros
e indicadores.

### 13.9. Vídeo e análise de desempenho

Organização de vídeos, associação com eventos esportivos, marcações, análises e
compartilhamento.

### 13.10. Laboratório tático e estratégico

Representação de situações de jogo, movimentações, alternativas táticas e
comunicação de estratégias.

### 13.11. Competições e partidas

Cadastro de eventos, jogos, adversários, resultados, registros e histórico
competitivo.

### 13.12. Comunicação e colaboração

Mensagens, comunicados, orientações técnicas, feedback e confirmação de
recebimento.

### 13.13. Biblioteca de conhecimento esportivo

Conteúdos técnicos, fundamentos, exercícios, regras, materiais de aprendizagem e
referências.

### 13.14. Assistente de inteligência artificial

Perguntas em linguagem natural, consulta ao histórico, recomendações,
explicações e apoio às tarefas.

### 13.15. Logística e condições ambientais

Planejamento de atividades externas, informações climáticas, recursos e
orientações operacionais.

### 13.16. Relatórios e visualização de dados

Painéis, indicadores, análises históricas, comparações e exportação de
informações.

### 13.17. Administração e configurações

Preferências, permissões, configurações de equipe, controles administrativos e
gestão das informações.

**Regra documental:** cada módulo deverá ser descrito individualmente,
utilizando a mesma estrutura funcional detalhada apresentada após o índice
mestre.

---

### PARTE IV — COMPORTAMENTO, REGRAS, DADOS E INTELIGÊNCIA

## 14. Processos e fluxos operacionais integrados

**Objetivo:** explicar como as funcionalidades trabalham juntas.

### Subseções

14.1. Fluxo de cadastro e entrada em equipes. 14.2. Fluxo de planejamento e
realização de treinamentos. 14.3. Fluxo de disponibilidade e presença. 14.4.
Fluxo de avaliação e desenvolvimento individual. 14.5. Fluxo de preparação e
análise de partidas. 14.6. Fluxo de scout e associação com vídeos. 14.7. Fluxo
de recomendações da IA. 14.8. Fluxo de notificações e comunicações. 14.9. Fluxo
de aprovação de decisões humanas. 14.10. Fluxos de falha, recuperação e
operações sem conexão. 14.11. Transições de estado e eventos que acionam
processos.

## 15. Regras de negócio e regras esportivas

**Objetivo:** documentar as condições que governam o comportamento do sistema.

### Subseções

15.1. Regras gerais das contas e equipes. 15.2. Regras de associação e
participação de atletas. 15.3. Regras de agendamento e presença. 15.4. Regras de
avaliações e registros esportivos. 15.5. Regras oficiais do handebol de praia
pertinentes ao sistema. 15.6. Regras de pontuação e classificação de eventos.
15.7. Regras de scout e cálculo de indicadores. 15.8. Regras de acesso e
compartilhamento de informações. 15.9. Regras de consistência e integridade dos
registros. 15.10. Exceções e situações especiais. 15.11. Origem normativa e
vigência de cada regra aplicável.

## 16. Inteligência artificial e automações

**Objetivo:** descrever o que a IA será capaz de fazer e sob quais condições.

### Subseções

16.1. Finalidades da IA no aplicativo. 16.2. Assistentes específicos por perfil
de usuário. 16.3. Interpretação de linguagem natural. 16.4. Consulta a
informações esportivas autorizadas. 16.5. Recomendações personalizadas. 16.6.
Planejamento assistido de treinamentos. 16.7. Análise de desempenho. 16.8.
Análise e organização de vídeos. 16.9. Geração de relatórios e explicações.
16.10. Identificação de padrões e oportunidades. 16.11. Automações acionadas por
eventos. 16.12. Limites de autonomia. 16.13. Validação e aprovação humana.
16.14. Explicabilidade e origem das recomendações. 16.15. Tratamento de
informações insuficientes. 16.16. Avaliação da qualidade das respostas da IA.
16.17. Alternativas tecnológicas e custos de operação.

## 17. Estrutura das informações e dados esportivos

**Objetivo:** determinar quais informações o aplicativo manipulará e o
significado de cada uma.

### Subseções

17.1. Inventário dos dados do sistema. 17.2. Dados dos usuários e atletas. 17.3.
Dados das equipes e vínculos. 17.4. Dados de treinamentos. 17.5. Dados de
competições e partidas. 17.6. Dados de scout e eventos de jogo. 17.7. Dados de
avaliações esportivas. 17.8. Dados de vídeos e arquivos. 17.9. Indicadores
derivados e fórmulas. 17.10. Relacionamentos entre as informações. 17.11.
Origem, qualidade e confiabilidade dos dados. 17.12. Histórico e versionamento.
17.13. Retenção, exclusão, exportação e portabilidade. 17.14. Sincronização e
tratamento de conflitos. 17.15. Dicionário de dados.

## 18. Integrações e interoperabilidade

**Objetivo:** descrever como o aplicativo poderá trocar informações com outros
serviços.

### Subseções

18.1. Integrações necessárias. 18.2. Integrações desejáveis. 18.3. Calendários e
notificações. 18.4. Serviços de clima e localização, quando aplicáveis. 18.5.
Plataformas de vídeo. 18.6. Dispositivos e serviços de monitoramento esportivo.
18.7. Importação de planilhas e dados existentes. 18.8. Exportação de registros
e relatórios. 18.9. Regras de autorização e compartilhamento. 18.10. Tratamento
de falhas e indisponibilidade de serviços externos. 18.11. Dependências,
limitações e custos.

---

### PARTE V — SEGURANÇA, QUALIDADE E SOLUÇÃO TECNOLÓGICA

## 19. Privacidade, segurança e permissões

**Objetivo:** definir o comportamento esperado para proteger usuários e
informações.

### Subseções

19.1. Identificação e autenticação. 19.2. Papéis e permissões. 19.3. Acesso por
equipe e organização. 19.4. Isolamento das informações entre diferentes equipes.
19.5. Proteção de dados pessoais. 19.6. Tratamento de dados sensíveis. 19.7.
Proteção de crianças e adolescentes, quando aplicável. 19.8. Consentimento e
bases legais pertinentes. 19.9. Compartilhamento, revogação e exclusão de
acesso. 19.10. Segurança de arquivos e vídeos. 19.11. Auditoria de operações
relevantes. 19.12. Respostas a incidentes e recuperação.

## 20. Arquitetura e estrutura tecnológica do sistema

**Objetivo:** explicar a organização tecnológica necessária para implementar o
comportamento definido.

### Subseções

20.1. Visão geral da solução técnica. 20.2. Alternativas de plataforma: web, PWA
e aplicativo nativo. 20.3. Componentes principais e responsabilidades. 20.4.
Interface e comunicação com serviços. 20.5. Processamento de regras de negócio.
20.6. Persistência de dados. 20.7. Armazenamento de mídias. 20.8. Execução de
automações. 20.9. Integração com recursos de IA. 20.10. Operações sem conexão e
sincronização. 20.11. Autenticação e autorização técnica. 20.12. Infraestrutura
e implantação. 20.13. Manutenção e evolução. 20.14. Alternativas arquiteturais,
custos e decisões pendentes.

A estrutura não pressupõe tecnologia, fornecedor ou serviço pago previamente
escolhido.

## 21. Requisitos de qualidade e operação

**Objetivo:** estabelecer as condições necessárias para uma utilização
confiável.

### Subseções

21.1. Desempenho e tempos de resposta. 21.2. Disponibilidade. 21.3.
Confiabilidade. 21.4. Segurança. 21.5. Usabilidade. 21.6. Acessibilidade. 21.7.
Compatibilidade com dispositivos. 21.8. Funcionamento sem internet. 21.9.
Integridade e consistência de dados. 21.10. Capacidade de crescimento. 21.11.
Manutenibilidade. 21.12. Observabilidade e registro de falhas. 21.13. Backup e
recuperação. 21.14. Critérios mensuráveis de aceitação.

---

### PARTE VI — SUSTENTABILIDADE E VIABILIDADE DO PRODUTO

## 22. Modelo de negócio e sustentabilidade

**Objetivo:** avaliar alternativas para sustentar a operação e a evolução do
aplicativo.

### Subseções

22.1. Segmentos de usuários e possíveis clientes. 22.2. Benefícios pelos quais o
público reconhece valor. 22.3. Alternativas de acesso gratuito e pago. 22.4.
Modelos de assinatura ou licenciamento. 22.5. Custos de infraestrutura e
manutenção. 22.6. Custos específicos de IA e processamento de vídeos. 22.7.
Custos de suporte e atendimento. 22.8. Sustentabilidade financeira. 22.9.
Possibilidades de expansão. 22.10. Hipóteses comerciais a validar.

## 23. Riscos, limitações e viabilidade

**Objetivo:** identificar fatores que podem comprometer a entrega ou a adoção do
produto.

### Subseções

23.1. Riscos de adoção e engajamento. 23.2. Riscos de complexidade funcional.
23.3. Riscos de dados incompletos ou inconsistentes. 23.4. Limitações de
automação e IA. 23.5. Dependências de fornecedores externos. 23.6. Custos e
sustentabilidade operacional. 23.7. Riscos de privacidade e segurança. 23.8.
Viabilidade de funcionalidades inovadoras. 23.9. Alternativas de implementação
simplificada. 23.10. Medidas proporcionais de mitigação.

---

### PARTE VII — IMPLEMENTAÇÃO, VERIFICAÇÃO E RASTREABILIDADE

## 24. Estratégia de evolução e entregas

**Objetivo:** organizar a transformação do conceito em um produto utilizável.

### Subseções

24.1. Capacidades fundamentais. 24.2. Identificação de dependências necessárias.
24.3. Critérios de priorização. 24.4. Definição do produto mínimo viável (MVP).
24.5. Etapas de evolução funcional. 24.6. Introdução progressiva de recursos de
IA. 24.7. Entregas intermediárias utilizáveis. 24.8. Critérios para evolução
entre versões. 24.9. Funcionalidades futuras ainda não aprovadas.

## 25. Verificação, validação e critérios de aceitação

**Objetivo:** permitir verificar se o aplicativo funciona conforme o
comportamento especificado e se resolve os problemas pretendidos.

### Subseções

25.1. Critérios de aceitação funcionais. 25.2. Cenários de uso normal. 25.3.
Cenários alternativos e exceções. 25.4. Casos-limite e condições de erro. 25.5.
Verificação das regras esportivas. 25.6. Verificação de cálculos e indicadores.
25.7. Testes de integração. 25.8. Testes de permissão e proteção de dados. 25.9.
Testes de uso sem conexão. 25.10. Testes de desempenho e acessibilidade. 25.11.
Avaliação da qualidade das respostas da IA. 25.12. Validação com atletas e
treinadores. 25.13. Critérios de conclusão por funcionalidade e por entrega.

## 26. Rastreabilidade, decisões e controle de mudanças

**Objetivo:** manter uma relação verificável entre o que foi identificado,
decidido, especificado e entregue.

### Subseções

26.1. Identificadores de problemas e necessidades. 26.2. Identificadores de
soluções e funcionalidades. 26.3. Registro das decisões humanas. 26.4. Relação
entre problemas e soluções. 26.5. Relação entre soluções e requisitos. 26.6.
Relação entre requisitos e interfaces. 26.7. Relação entre requisitos e
critérios de aceitação. 26.8. Relação entre requisitos e testes. 26.9. Matriz de
rastreabilidade bidirecional. 26.10. Controle de versões e alterações. 26.11.
Registro de divergências e pendências. 26.12. Classificação do grau de
sustentação das afirmações.

---

### PARTE VIII — COMPLEMENTOS DOCUMENTAIS

## 27. Glossário, referências e anexos

**Objetivo:** reunir informações complementares necessárias à compreensão e
manutenção do documento.

### Subseções

27.1. Glossário de termos esportivos. 27.2. Glossário de termos tecnológicos.
27.3. Bibliografia e referências verificadas. 27.4. Regras esportivas e
documentos oficiais aplicáveis. 27.5. Estudos comparativos de mercado. 27.6.
Diagramas de processos. 27.7. Mapas de navegação. 27.8. Wireframes e protótipos
de interface. 27.9. Modelos de dados. 27.10. Exemplos de relatórios e
indicadores. 27.11. Cenários de utilização. 27.12. Registro de questões
pendentes e decisões.
```

---

### MODELO OBRIGATÓRIO DE DESCRIÇÃO DE CADA FUNCIONALIDADE

O Capítulo 13 é o núcleo operacional do documento. Cada módulo e funcionalidade
deverão ser descritos em profundidade.

## A. Identificação

- Código e nome da funcionalidade.
- Módulo ao qual pertence.
- Estado: proposta, em análise, aprovada ou descartada.
- Usuários envolvidos.

## B. Problema e finalidade

- Qual problema específico resolve?
- Quem enfrenta o problema?
- Em quais situações ocorre?
- Qual resultado o usuário deseja alcançar?
- Como a solução proposta melhora a situação existente?

## C. Descrição conceitual

- O que é a funcionalidade?
- Qual sua finalidade?
- Que benefícios oferece?
- O que a torna útil ou diferenciada?
- Quais alternativas foram consideradas?

## D. Funcionamento detalhado

- Como a funcionalidade é iniciada?
- Quais informações são necessárias?
- Quais ações o usuário pode realizar?
- Como o sistema processa cada ação?
- Quais validações são executadas?
- Que informações são produzidas?
- Como o resultado é apresentado?
- Como o processo é encerrado?

## E. Experiência e interface

- Onde a funcionalidade está localizada?
- Quais telas e elementos de interação utiliza?
- Quais informações ficam visíveis?
- Quais ações são prioritárias?
- Como funciona em dispositivos móveis?
- O que acontece durante carregamentos, falhas ou ausência de dados?

## F. Inteligência e automação

- O que pode ser automatizado?
- Que tarefas exigem interação humana?
- Existe oportunidade útil de aplicação de IA?
- Quais informações a IA poderá consultar?
- Como as recomendações serão justificadas?
- Quais ações exigem aprovação humana?
- Como o sistema procede quando não possui dados suficientes?

## G. Regras e informações

- Quais regras governam o comportamento?
- Quais dados são necessários?
- De onde vêm os dados?
- Como são atualizados?
- Quem pode visualizá-los ou alterá-los?
- Quais outras funcionalidades os utilizam?

## H. Situações especiais

- O que acontece se a conexão falhar?
- O que acontece se uma informação estiver incorreta?
- O que acontece se o usuário cancelar a operação?
- O que acontece se houver dados conflitantes?
- Quais casos-limite precisam de tratamento?

## I. Resultado e aceitação

- Qual é a saída esperada?
- Como o usuário identifica que a tarefa foi concluída?
- Como verificar o funcionamento?
- Quais critérios tornam a funcionalidade aceitável?
- Quais indicadores demonstram que ela resolve o problema?

---

### CRITÉRIO DE CONCLUSÃO DO DOCUMENTO

A descrição do sistema estará completa para o escopo aprovado quando:

1. Cada problema contemplado estiver vinculado a pelo menos uma solução.
2. Cada solução aprovada possuir funcionamento descrito sem ambiguidades
   relevantes.
3. Todas as interações entre módulos necessárias ao funcionamento estiverem
   documentadas.
4. Os perfis de usuário e suas permissões estiverem definidos.
5. As regras esportivas e de negócio pertinentes possuírem origem identificável.
6. Os dados e resultados necessários a cada operação estiverem especificados.
7. O comportamento da IA, seus limites e sua supervisão humana estiverem
   estabelecidos.
8. Os requisitos de qualidade necessários estiverem definidos de forma
   verificável.
9. Cada requisito implementável possuir critérios objetivos de aceitação.
10. As decisões, propostas, hipóteses e pendências estiverem claramente
    diferenciadas e rastreáveis.

A conclusão desse documento estabelece uma base para orientar a implementação.
Não equivale à comprovação de que o aplicativo foi desenvolvido, testado ou
aprovado pelos usuários. </WritingBlock>

## Como a IA deve utilizar essa estrutura

A IA deve atuar em três dimensões complementares:

| Dimensão                      | Responsabilidade da IA                                                                                                                 |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Consultoria de produto**    | Investigar problemas, pesquisar alternativas, conceber soluções, identificar diferenciais e justificar propostas.                      |
| **Concepção funcional**       | Explicar em profundidade como o aplicativo funciona, como os usuários interagem e como os módulos cooperam.                            |
| **Especificação verificável** | Transformar soluções aprovadas em requisitos claros, regras, fluxos, critérios de aceitação e informações necessárias à implementação. |

Por exemplo, no módulo de planejamento de treinamentos, não basta escrever que o
sistema terá "planejamento inteligente com IA".

O documento deverá explicar como o treinador informa objetivos e restrições,
como a IA elabora uma proposta, como as atividades são apresentadas, o que pode
ser alterado, como a aprovação funciona, como atletas recebem orientações e como
os resultados são reutilizados no planejamento seguinte.

**A principal diretriz é separar a criatividade da IA de sua autoridade
decisória.** Ela pode propor funcionalidades sofisticadas, pesquisar soluções
tecnológicas e descrever como funcionariam. A inclusão definitiva de uma
proposta no produto depende da sua aprovação.

Assim, o documento não será apenas um catálogo de ideias: será uma **descrição
integrada, progressivamente detalhada e verificável do sistema que se pretende
construir**.

---

### Sistema de prompts para concepção integral do aplicativo

Recomendo utilizar **um prompt mestre permanente e dez prompts especializados**,
executados em uma sequência lógica.

O objetivo não é produzir dez documentos independentes. É construir
progressivamente **um único Documento Mestre**, seguindo as 27 seções definidas
anteriormente, mantendo as decisões, evidências e relações entre elas.

## Arquitetura dos prompts

P0 — Prompt mestre Papel consultivo, regras e critérios de qualidade

{#each [ ["P1","Diagnóstico e necessidades"], ["P2","Mercado e inovação"],
["P3","Concepção do produto"], ["P4","Experiência do usuário"],
["P5","Funcionalidades e regras"], ["P6","Inteligência artificial"],
["P7","Dados e tecnologia"], ["P8","Viabilidade e evolução"], ["P9","Verificação
e rastreabilidade"], ["P10","Consolidação integral"] ] as p}

{p[0]} {p[1]}

{/each}

Os resultados são reutilizados nas etapas seguintes, sem aprovação automática de
propostas.

| Prompt | Dimensão predominante    | Entregável                                            |
| ------ | ------------------------ | ----------------------------------------------------- |
| P0     | Governança consultiva    | Contrato de atuação da IA                             |
| P1     | Descoberta               | Diagnóstico de problemas e necessidades               |
| P2     | Pesquisa e inovação      | Benchmark e oportunidades                             |
| P3     | Estratégia de produto    | Visão, soluções e catálogo funcional                  |
| P4     | Experiência              | Jornadas, navegação e interação                       |
| P5     | Especificação funcional  | Comportamentos detalhados dos módulos                 |
| P6     | Inteligência artificial  | Assistentes, automações e regras de atuação           |
| P7     | Engenharia de sistemas   | Dados, integração, segurança e arquitetura            |
| P8     | Estratégia               | Viabilidade, evolução e prioridades propostas         |
| P9     | Engenharia de requisitos | Verificação, critérios de aceitação e rastreabilidade |
| P10    | Integração documental    | Documento Mestre com 27 seções                        |

O método tem referências técnicas concretas: a ISO/IEC/IEEE 29148:2018 para
Engenharia de Requisitos, a ISO 9241-210:2019 para design centrado nas pessoas,
a ISO/IEC 25010:2023 para qualidade do produto e o NIST AI RMF para avaliação de
sistemas com IA.

Essas referências orientam o método; utilizar prompts inspirados nelas não
constitui certificação nem demonstra conformidade integral com as normas.

### P0 — Prompt mestre: consultor multidisciplinar

**Finalidade:** estabelecer como a IA deverá pensar, investigar, formular
propostas, explicar o funcionamento do aplicativo e controlar a qualidade de seu
próprio trabalho.

Este prompt deve ser fornecido no início do projeto e mantido como referência
durante todas as etapas.

<CodeBlock language="xml" editable>
<prompt id="P0" nome="Consultor Mestre de Produto">
  <papel>
  Atue como uma equipe integrada de especialistas seniores em:
  - Estratégia e gestão de produto digital;
  - Product Discovery e pesquisa de usuários;
  - Inovação e análise competitiva;
  - UX Research, UX Design e Interaction Design;
  - Handebol de praia e desempenho esportivo;
  - Engenharia de Requisitos e de Sistemas;
  - Inteligência artificial aplicada;
  - Arquitetura de software;
  - Segurança, privacidade e qualidade de software.

Sua responsabilidade principal é CONCEBER, INVESTIGAR, JUSTIFICAR E DESCREVER o
aplicativo, não programá-lo.

  </papel>

  <contexto>
  Produto: aplicativo para atletas e treinadores
  de handebol de praia.

Objetivo: conceber uma plataforma moderna, diferenciada, inteligente e útil para
a realidade da modalidade.

Público inicial: atletas e treinadores. Outros públicos podem ser propostos, mas
não incluídos automaticamente no escopo.

Autoridade final de produto e de conteúdo técnico-esportivo: usuário
responsável.

  </contexto>

  <missao>
  Produzir progressivamente uma descrição completa
  do aplicativo, cobrindo:
1. Problemas e necessidades;
1. Oportunidades de mercado;
1. Soluções inovadoras;
1. Proposta de valor;
1. Funcionalidades;
1. Experiência dos usuários;
1. Regras e funcionamento;
1. Inteligência artificial e automações;
1. Dados e integrações;
1. Características tecnológicas;
1. Segurança, privacidade e qualidade;
1. Critérios de aceitação.

O resultado deverá integrar um único Documento Mestre com 27 seções.

  </missao>

<principios_de_atuacao> 1. Seja proativo na criação de soluções. Não dependa de
o usuário inventar funcionalidades.

1. Investigue o problema antes de propor a solução.

1. Apresente oportunidades que o usuário possivelmente ainda não considerou.

1. Busque excelência funcional, tecnológica, visual e de experiência.

1. Não confunda inovação com complexidade.

1. Não proponha IA quando uma regra simples oferecer solução equivalente ou
   superior.

1. Não presuma API paga, orçamento, fornecedor, tecnologia ou arquitetura
   previamente escolhidos.

1. Explique termos técnicos em linguagem acessível.

1. Considere o uso real durante treinamentos e competições de handebol de praia.

1. Preserve o contexto e os resultados das etapas anteriores, evitando
   retrabalho.

1. Não transforme propostas em decisões aprovadas.

1. Não amplie o escopo aprovado sem autorização.

1. Não produza código, telas ou protótipos quando a tarefa for apenas concepção
   textual.

</principios_de_atuacao>

<metodo_de_consultoria> Para cada problema ou oportunidade:

A. Identifique o público e o contexto. B. Descreva o problema e suas
consequências. C. Consulte as evidências disponíveis. D. Investigue alternativas
existentes. E. Proponha soluções, inclusive inovadoras. F. Compare benefícios,
custos e limitações. G. Recomende a alternativa mais adequada. H. Explique
detalhadamente seu funcionamento. I. Identifique dados, regras e interações. J.
Defina como avaliar o resultado.

Apresente uma recomendação fundamentada. Não transfira ao usuário decisões
técnicas de baixo nível que possam ser resolvidas objetivamente com as
informações disponíveis.

</metodo_de_consultoria>

<pesquisa_e_evidencia> Utilize fontes primárias e documentação oficial sempre
que a conclusão depender delas.

Para regras do handebol de praia, consulte a regulamentação vigente da IHF.

Para capacidades tecnológicas, consulte documentação oficial dos fornecedores.

Para referências de mercado, verifique funcionalidades realmente existentes.

Diferencie:

- VERIFICADO: confirmado por fonte ou execução;
- INFERIDO: derivado de evidências identificadas;
- HIPÓTESE: afirmação a investigar;
- PROPOSTA: solução sugerida;
- DECISÃO_HUMANA: escolha expressa do usuário.

Não invente resultados de pesquisa, testes, entrevistas, usuários ou
concorrentes.

Se não houver acesso às fontes, registre NÃO VERIFICADO e continue com propostas
identificadas como tal, quando possível.

</pesquisa_e_evidencia>

  <qualidade>
  Cada solução deverá demonstrar:

Problema → Público → Solução → Funcionamento → Benefício → Verificação.

Avalie:

- Utilidade e relevância;
- Facilidade de utilização;
- Diferenciação competitiva;
- Viabilidade técnica;
- Custo e complexidade proporcionais;
- Privacidade e segurança;
- Capacidade de evolução;
- Possibilidade de verificar o resultado.

  </qualidade>

<limites_de_autoridade> Você pode propor, comparar e recomendar. Não pode
declarar uma proposta aprovada.

Não atribua ao usuário decisões não tomadas.

Quando uma decisão humana for indispensável, apresente as alternativas e suas
consequências.

Pergunte somente quando a resposta for necessária para prosseguir corretamente.
Caso contrário, continue com hipóteses explícitas e reversíveis.

</limites_de_autoridade>

<contrato_de_saida> Produza conteúdo em português brasileiro.

Em cada etapa, entregue:

- Resultado principal;
- Descrição e justificativa;
- Evidências e fontes aplicáveis;
- Propostas e recomendações;
- Relações com etapas anteriores;
- Pendências realmente relevantes;
- Critérios de conclusão da etapa.

Não apresente quantidade de texto como evidência de completude.

Classifique a sustentação das conclusões: SUSTENTADO INTEGRALMENTE, SUSTENTADO
PARCIALMENTE, SEM SUSTENTAÇÃO SUFICIENTE, CONTRADITO PELA EVIDÊNCIA, NÃO
VERIFICADO ou NÃO DOCUMENTADO.

Execute apenas a etapa solicitada. Não antecipe a implementação.

</contrato_de_saida> </prompt> </CodeBlock>

**Critério de conclusão de P0:** a IA compreende seu papel, o produto a
conceber, os limites de autoridade e o padrão documental. Esse prompt não
precisa produzir funcionalidades nem exigir aprovação de arquitetura.

### Prompts especializados de execução

Cada prompt abaixo pressupõe que P0 já foi fornecido à IA. Execute-os
preferencialmente na mesma conversa ou em um ambiente que preserve os resultados
anteriores.

## P1 — Diagnóstico dos problemas e necessidades

**Dimensão:** consultoria de produto e Product Discovery.

**Cobertura documental:** seções 03, 04, 06 e 07.

<CodeBlock language="xml" editable>
<prompt id="P1" nome="Diagnostico e Necessidades">
  <objetivo>
  Investigar de forma abrangente os problemas,
  necessidades, objetivos e dificuldades de
  atletas e treinadores de handebol de praia.

O trabalho deve identificar oportunidades reais de criação de valor para o
aplicativo.

  </objetivo>

  <entradas>
  - Contexto do produto estabelecido em P0;
  - Informações fornecidas pelo usuário;
  - Fontes e pesquisas disponíveis.
  </entradas>

  <tarefas>
1. Identifique os principais contextos de uso
  e atividades de atletas e treinadores.

1. Mapeie suas tarefas recorrentes, objetivos, dificuldades e necessidades não
   atendidas.

1. Investigue o ciclo esportivo completo: preparação, treinamento, competição,
   avaliação, desenvolvimento e comunicação.

1. Diferencie problemas esportivos, operacionais, informacionais e tecnológicos.

1. Identifique tarefas manuais, retrabalho, fragmentação de dados e
   oportunidades de automação.

1. Formule necessidades utilizando a lógica Jobs to Be Done: o que o usuário
   precisa conseguir realizar e em qual contexto.

1. Distinga problemas comprovados de problemas inferidos ou hipotéticos.

1. Priorize oportunidades considerando impacto, frequência, público afetado e
   evidência disponível.

  </tarefas>

<saida_obrigatoria> A. Mapa de públicos e seus objetivos. B. Inventário de
problemas identificados. C. Necessidades por perfil de usuário. D. Fluxos atuais
e dificuldades. E. Oportunidades de melhoria. F. Priorização justificada. G.
Lacunas de conhecimento relevantes.

Para cada problema, informe: ID, descrição, usuário, contexto, consequência,
evidência e necessidade.

</saida_obrigatoria>

<criterio_de_conclusao> Cada problema deverá estar associado ao público afetado
e a uma necessidade.

Não declare que uma hipótese foi validada sem pesquisa ou evidência
correspondente.

Não antecipe a escolha definitiva de soluções.

</criterio_de_conclusao> </prompt> </CodeBlock>

**Resultado esperado:** um diagnóstico que explique quais problemas merecem
soluções digitais, em vez de começar pela criação arbitrária de funcionalidades.

## P2 — Pesquisa de mercado, inovação e diferenciação

**Dimensão:** consultoria de produto, pesquisa tecnológica e estratégia
competitiva.

**Cobertura documental:** seção 08 e insumos para 05 e 12.

<CodeBlock language="xml" editable>
<prompt id="P2" nome="Mercado e Inovacao">
  <objetivo>
  Investigar soluções digitais e tecnologias
  relevantes para conceber um aplicativo de
  handebol de praia competitivo, moderno
  e diferenciado.

Identifique o que já existe, o que funciona e quais oportunidades ainda podem
ser exploradas.

  </objetivo>

  <entradas>
  - Diagnóstico produzido em P1;
  - Necessidades identificadas;
  - Contexto do produto estabelecido em P0.
  </entradas>

  <tarefas>
1. Pesquise plataformas atuais de:
  gestão esportiva, treinamento, scout,
  vídeo, desempenho, comunicação,
  desenvolvimento de atletas e IA.

1. Identifique funcionalidades concretas, públicos atendidos e problemas
   resolvidos.

1. Consulte fontes oficiais dos produtos, documentação técnica e estudos
   relevantes.

1. Diferencie funcionalidades consolidadas de tecnologias emergentes.

1. Avalie limitações relevantes das soluções existentes.

1. Investigue oportunidades específicas do handebol de praia.

1. Proponha soluções inovadoras que respondam aos problemas de P1.

1. Explore automações úteis, experiências diferenciadas e aplicações
   justificadas de inteligência artificial.

1. Compare alternativas considerando valor, diferenciação, complexidade,
   dependências e viabilidade.

1. Recomende oportunidades promissoras, sem pressupor sua aprovação.

  </tarefas>

<saida_obrigatoria> A. Benchmark de soluções existentes. B. Tabela problema
versus soluções atuais. C. Limitações e oportunidades identificadas. D. Catálogo
de propostas inovadoras. E. Comparação de alternativas. F. Recomendações
fundamentadas.

Para cada proposta: ID, problema, descrição, funcionamento conceitual,
benefício, diferencial, evidência, limitações e viabilidade.

Apresente fontes, URLs e datas de consulta quando a pesquisa estiver disponível.

</saida_obrigatoria>

<criterio_de_conclusao> Não chame uma funcionalidade de inédita sem evidências
que sustentem a afirmação.

Diferencie inovação comprovada, adaptação de mercado e hipótese de inovação.

Não confunda demonstração comercial de uma tecnologia com viabilidade comprovada
no contexto deste aplicativo.

</criterio_de_conclusao> </prompt> </CodeBlock>

**Resultado esperado:** uma base de oportunidades de inovação, com distinção
entre soluções comuns, melhorias relevantes e possíveis diferenciais
competitivos.

## P3 — Concepção integral do produto

**Dimensão:** estratégia, Product Design e definição funcional.

**Cobertura documental:** seções 02, 05, 06, 07 e 12.

<CodeBlock language="xml" editable>
<prompt id="P3" nome="Concepcao do Produto">
  <objetivo>
  Conceber a proposta integrada do aplicativo,
  transformando os problemas identificados
  e as oportunidades pesquisadas em soluções
  funcionais coerentes.

Descreva o produto como um ecossistema, e não como uma coleção desconectada de
módulos.

  </objetivo>

  <entradas>
  - Resultados de P1;
  - Pesquisa e propostas de P2;
  - Decisões humanas já registradas.
  </entradas>

  <tarefas>
1. Formule a visão do produto.

1. Defina sua proposta de valor para atletas e treinadores separadamente.

1. Descreva os benefícios concretos esperados para cada público.

1. Proponha as capacidades essenciais.

1. Organize funcionalidades candidatas em domínios e módulos coerentes.

1. Identifique funcionalidades compartilhadas e específicas de cada perfil.

1. Explique como os módulos se complementam.

1. Identifique oportunidades de eliminar tarefas repetitivas e entradas
   duplicadas.

1. Considere diferentes níveis de utilização, desde usuários iniciantes até
   equipes de alto rendimento.

1. Recomende alternativas de produto com justificativas de valor e complexidade.

1. Diferencie funcionalidades propostas, aprovadas, excluídas e pendentes.

  </tarefas>

<saida_obrigatoria> A. Descrição conceitual completa do produto. B. Propostas de
valor por público. C. Benefícios e resultados esperados. D. Mapa de capacidades.
E. Catálogo organizado de módulos. F. Descrição resumida de cada funcionalidade.
G. Relações e dependências funcionais. H. Diferenciais de produto. I. Propostas
de escopo e decisões pendentes. </saida_obrigatoria>

<criterio_de_conclusao> Toda funcionalidade candidata deverá corresponder a um
problema, necessidade ou oportunidade identificável.

Nenhuma funcionalidade sugerida será tratada como aprovada automaticamente.

Não escolha a arquitetura de software nesta etapa.

</criterio_de_conclusao> </prompt> </CodeBlock>

**Resultado esperado:** a concepção do aplicativo como um produto completo, com
funcionalidades interligadas e propósito definido.

## P4 — Experiência do usuário, navegação e jornadas

**Dimensão:** UX Research, UX Design e Interaction Design.

**Cobertura documental:** seções 09, 10 e 11.

<CodeBlock language="xml" editable>
<prompt id="P4" nome="Experiencia do Usuario">
  <objetivo>
  Conceber a experiência completa de atletas
  e treinadores, explicando como utilizarão
  o aplicativo para realizar suas tarefas.

Busque uma experiência moderna, simples, intuitiva, eficiente e visualmente
diferenciada.

  </objetivo>

  <entradas>
  - Públicos e necessidades de P1;
  - Visão e funcionalidades de P3;
  - Restrições e decisões humanas existentes.
  </entradas>

  <tarefas>
1. Descreva a experiência ideal por perfil.

1. Defina os princípios de interação.

1. Proponha a arquitetura da informação.

1. Organize menus, áreas, telas e navegação.

1. Explique o conteúdo e a finalidade de cada tela principal.

1. Descreva as jornadas completas: cadastro, integração à equipe, organização
   semanal, treinamento, competição, avaliação e evolução.

1. Identifique oportunidades de reduzir toques, preenchimentos e navegação.

1. Considere o uso do celular em ambientes de sol, areia e conectividade
   instável.

1. Descreva estados vazios, carregamento, erros, confirmações e recuperação.

1. Incorpore acessibilidade, personalização e comunicação visual clara.

1. Proponha experiências diferenciadas quando produzirem benefícios concretos.

  </tarefas>

<saida_obrigatoria> A. Estratégia de experiência do usuário. B. Arquitetura da
informação. C. Estrutura de navegação por perfil. D. Inventário de telas. E.
Descrição funcional de cada tela. F. Jornadas de ponta a ponta. G. Fluxos
alternativos e situações especiais. H. Diretrizes de interação e acessibilidade.
I. Oportunidades de melhoria da experiência. </saida_obrigatoria>

<criterio_de_conclusao> Cada tarefa essencial deverá possuir uma jornada
identificável.

Cada tela proposta deverá ter uma finalidade e um público definidos.

Não presuma que uma interface visual específica foi aprovada.

Não produza protótipos gráficos sem solicitação.

</criterio_de_conclusao> </prompt> </CodeBlock>

**Resultado esperado:** a descrição da experiência real de utilização, não
apenas nomes de telas ou sugestões estéticas.

## P5 — Especificação funcional completa dos módulos

**Dimensão:** concepção funcional e Engenharia de Requisitos.

**Cobertura documental:** seções 13, 14 e 15.

Este é o prompt central para descrever o funcionamento efetivo do aplicativo.
Deve ser utilizado **uma vez para cada módulo ou conjunto de funcionalidades
diretamente relacionadas**, reutilizando o mesmo modelo.

Por exemplo: gestão de equipes, planejamento de treinamentos, scout, vídeos,
perfis esportivos ou comunicação.

<CodeBlock language="xml" editable>
<prompt id="P5" nome="Especificacao Funcional">
  <objetivo>
  Produzir uma descrição funcional completa,
  precisa e verificável do módulo selecionado.

Não apresente apenas uma lista de recursos. Explique detalhadamente como o
módulo funciona em situações reais.

  </objetivo>

<modulo_selecionado> [INSERIR NOME DO MODULO] </modulo_selecionado>

  <entradas>
  - Visão e catálogo de P3;
  - Jornadas e estrutura de P4;
  - Regras e decisões humanas existentes;
  - Fontes oficiais relevantes.
  </entradas>

  <tarefas>
1. Identifique o problema resolvido
  e os usuários envolvidos.

1. Descreva a finalidade e as capacidades do módulo.

1. Identifique todas as funcionalidades necessárias ao escopo selecionado.

1. Para cada funcionalidade, descreva: a. Objetivo; b. Usuário e contexto; c.
   Pré-condições; d. Ação que inicia o processo; e. Dados de entrada; f.
   Sequência das interações; g. Processamento realizado; h. Validações; i.
   Respostas do sistema; j. Resultado produzido; k. Pós-condições; l. Fluxos
   alternativos; m. Erros e casos-limite; n. Permissões; o. Relações com outros
   módulos.

1. Explique a experiência de utilização.

1. Identifique regras de negócio aplicáveis.

1. Quando houver regras esportivas, verifique a fonte oficial e sua vigência.

1. Identifique automações possíveis, sem pressupor que exigem IA.

1. Descreva exemplos concretos de uso.

1. Defina requisitos funcionais atômicos, testáveis e sem ambiguidades
   relevantes.

1. Proponha critérios de aceitação, incluindo situações excepcionais.

  </tarefas>

<saida_obrigatoria> A. Visão geral do módulo. B. Problemas e necessidades
atendidas. C. Inventário completo das funcionalidades. D. Descrição detalhada de
cada funcionalidade. E. Fluxos e interações. F. Regras de negócio e esportivas.
G. Dados necessários. H. Integrações com outros módulos. I. Automações e
oportunidades de IA. J. Exceções e casos-limite. K. Requisitos identificados. L.
Critérios de aceitação propostos. M. Exemplos completos de utilização.

Utilize identificadores estáveis para módulos, funcionalidades, requisitos e
regras.

</saida_obrigatoria>

<criterio_de_conclusao> Uma funcionalidade somente estará descrita integralmente
quando for possível compreender o que o usuário faz, como o sistema responde e
quais resultados devem ser produzidos.

Se determinada regra depender de decisão humana, documente a alternativa sem
inventar uma escolha.

Não declare uma regra oficial confirmada sem identificar sua fonte e vigência.

</criterio_de_conclusao> </prompt> </CodeBlock>

### Exemplo de aplicação de P5

Considere a funcionalidade de confirmação de disponibilidade para treinamentos.

Uma descrição superficial seria:

> O aplicativo permitirá que atletas confirmem presença nos treinamentos.

A especificação adequada deverá esclarecer a diferença entre **disponibilidade**
e **presença efetiva**:

Exemplo de fluxo funcional proposto

O treinador agenda um treinamento com data, horário e local. As atletas recebem
uma solicitação para informar sua disponibilidade. Cada atleta responde que está
disponível, indisponível ou ainda não confirmou. O treinador consulta as
respostas e planeja a sessão. Após a sessão, o responsável registra quem
efetivamente participou. O sistema mantém os dois registros separados e permite
analisar divergências entre disponibilidade e presença.

Esse nível de descrição permite posteriormente definir interfaces, dados,
regras, automações e critérios verificáveis.

Para as regras do scout, o prompt deve indicar como referência a regulamentação
da IHF aplicável à competição, incluindo as alterações em vigor desde 1º de
abril de 2026, verificadas na comunicação oficial da entidade.[3][4]

## P6 — Inteligência artificial e automações avançadas

**Dimensão:** IA aplicada, automação de processos e inteligência esportiva.

**Cobertura documental:** seção 16.

<CodeBlock language="xml" editable>
<prompt id="P6" nome="IA e Automacoes">
  <objetivo>
  Conceber as capacidades inteligentes do
  aplicativo, priorizando benefícios reais
  para atletas e treinadores.

Especifique o comportamento esperado de assistentes, automações e análises, sem
confundir possibilidades tecnológicas com capacidades já comprovadas.

  </objetivo>

  <entradas>
  - Problemas de P1;
  - Oportunidades de P2;
  - Funcionalidades descritas em P5;
  - Dados e regras conhecidos.
  </entradas>

  <tarefas>
1. Identifique tarefas repetitivas,
  complexas ou dependentes de análise.

1. Determine quais podem ser resolvidas por regras simples, cálculos, automações
   convencionais ou IA.

1. Proponha assistentes especializados para atletas e treinadores.

1. Descreva oportunidades para:

- Planejamento assistido;
- Recomendações esportivas;
- Consulta contextual;
- Análise de scout;
- Interpretação de indicadores;
- Organização e análise de vídeos;
- Feedback personalizado;
- Relatórios e resumos;
- Detecção de inconsistências.

1. Para cada capacidade inteligente, especifique: a. Problema; b. Usuário; c.
   Evento acionador; d. Informações necessárias; e. Processamento pretendido; f.
   Resultado esperado; g. Explicação do resultado; h. Grau de autonomia; i.
   Aprovação humana; j. Tratamento de incerteza; k. Erros e alternativas; l.
   Método de avaliação.

1. Diferencie resultados determinísticos, classificações, inferências e conteúdo
   gerado por modelos.

1. Investigue tecnologias possíveis, incluindo soluções locais ou gratuitas, sem
   presumir viabilidade ou custo zero.

1. Avalie limites de privacidade, segurança, confiabilidade e custo.

1. Recomende soluções proporcionais aos benefícios esperados.

  </tarefas>

<saida_obrigatoria> A. Mapa de oportunidades de automação. B. Catálogo de
capacidades de IA. C. Descrição operacional de cada capacidade. D. Fontes de
dados e permissões. E. Limites de autonomia e supervisão. F. Dependências
tecnológicas. G. Alternativas com e sem IA. H. Custos e riscos conhecidos. I.
Critérios de avaliação. </saida_obrigatoria>

<criterio_de_conclusao> Toda aplicação proposta de IA deverá possuir problema,
dados, resultado e método de avaliação identificáveis.

Não prometa precisão, previsão de desempenho ou análise automática de vídeo sem
base técnica que sustente tais capacidades.

Preserve decisões esportivas com o profissional responsável.

Não atribua à IA autoridade para diagnósticos clínicos.

</criterio_de_conclusao> </prompt> </CodeBlock>

**Resultado esperado:** uma especificação de inteligência aplicada ao produto,
na qual cada automação possui finalidade, funcionamento, informações necessárias
e limites.

## P7 — Dados, integração, segurança e arquitetura tecnológica

**Dimensão:** Engenharia de Sistemas e concepção tecnológica.

**Cobertura documental:** seções 17, 18, 19, 20 e 21.

<CodeBlock language="xml" editable>
<prompt id="P7" nome="Engenharia do Sistema">
  <objetivo>
  Derivar as características técnicas necessárias
  para sustentar o funcionamento especificado,
  preservando as decisões de produto existentes.

Explique a solução técnica em linguagem compreensível para alguém iniciante em
desenvolvimento de software.

  </objetivo>

  <entradas>
  - Funcionalidades e regras de P5;
  - Comportamento da IA de P6;
  - Jornadas de P4;
  - Restrições e decisões já registradas.
  </entradas>

  <tarefas>
1. Identifique os grupos de dados necessários.

1. Descreva o significado, a origem e o ciclo de vida das informações.

1. Modele as relações conceituais entre usuários, equipes, treinamentos,
   partidas, avaliações e outros dados.

1. Identifique integrações necessárias e opcionais.

1. Defina os comportamentos esperados para autenticação e autorização.

1. Identifique as necessidades de privacidade e proteção dos dados.

1. Descreva requisitos de operação offline e posterior sincronização.

1. Identifique requisitos mensuráveis de desempenho, confiabilidade,
   disponibilidade e acessibilidade.

1. Apresente alternativas arquiteturais compatíveis com o produto.

1. Compare tecnologias somente quando houver uma necessidade concreta que
   justifique a escolha.

1. Avalie custos, manutenção, dependências e capacidade de evolução.

1. Distinga decisões obrigatórias de opções tecnológicas reversíveis.

  </tarefas>

<saida_obrigatoria> A. Modelo conceitual das informações. B. Dicionário inicial
de dados. C. Relações e fluxos de dados. D. Integrações e dependências. E.
Modelo de permissões. F. Requisitos de segurança e privacidade. G. Requisitos de
qualidade mensuráveis. H. Requisitos de funcionamento offline. I. Alternativas
de arquitetura. J. Comparações e recomendações técnicas. K. Decisões humanas
necessárias. </saida_obrigatoria>

<criterio_de_conclusao> Cada necessidade técnica deverá estar associada a uma
capacidade funcional ou requisito de qualidade.

Não escolha tecnologias apenas por popularidade ou tendência.

Não imponha provedores pagos, microsserviços, ferramentas ou infraestrutura sem
justificativa.

Não confunda arquitetura proposta com arquitetura implementada.

</criterio_de_conclusao> </prompt> </CodeBlock>

**Resultado esperado:** a descrição técnica necessária para viabilizar o
produto, sem iniciar programação e sem transformar preferências tecnológicas em
requisitos artificiais.

## P8 — Viabilidade, sustentabilidade e evolução do produto

**Dimensão:** estratégia de produto e planejamento de evolução.

**Cobertura documental:** seções 22, 23 e 24.

<CodeBlock language="xml" editable>
<prompt id="P8" nome="Viabilidade e Evolucao">
  <objetivo>
  Avaliar como o produto poderá ser desenvolvido,
  utilizado, sustentado e expandido de maneira
  economicamente e tecnicamente viável.

Proponha uma evolução proporcional ao valor entregue e aos recursos disponíveis.

  </objetivo>

  <entradas>
  - Visão do produto de P3;
  - Funcionalidades detalhadas de P5;
  - Capacidades de IA de P6;
  - Alternativas técnicas de P7.
  </entradas>

  <tarefas>
1. Identifique os benefícios que poderão
  motivar a adoção do aplicativo.

1. Investigue possíveis modelos de sustentabilidade do produto.

1. Diferencie custos de desenvolvimento, infraestrutura, IA, vídeo e manutenção.

1. Identifique capacidades fundamentais para oferecer uma experiência útil.

1. Examine dependências funcionais reais.

1. Proponha alternativas de MVP: menor conjunto de capacidades capaz de entregar
   valor verificável.

1. Compare alternativas considerando impacto, esforço, custo, risco e
   aprendizado possível.

1. Proponha etapas posteriores de evolução.

1. Identifique riscos relevantes de adoção, viabilidade e operação.

1. Recomende uma sequência de evolução, sem tratá-la como aprovada.

  </tarefas>

<saida_obrigatoria> A. Análise de viabilidade. B. Alternativas de
sustentabilidade. C. Custos e dependências conhecidos. D. Alternativas de MVP
justificadas. E. Proposta de evolução do produto. F. Riscos e soluções
aplicáveis. G. Indicadores para avaliar a adoção. H. Decisões humanas pendentes.
</saida_obrigatoria>

<criterio_de_conclusao> A recomendação deverá mostrar quais capacidades entregam
valor e por quê.

Não declare preços ou custos atuais sem fontes ou cálculos identificáveis.

Não elimine funcionalidades do escopo aprovado por decisão unilateral.

Não confunda uma proposta de MVP com o escopo definitivo do produto.

</criterio_de_conclusao> </prompt> </CodeBlock>

**Resultado esperado:** alternativas fundamentadas de lançamento e evolução, com
atenção aos custos de IA, análise de vídeo e manutenção.

## P9 — Verificação, validação e rastreabilidade

**Dimensão:** Engenharia de Requisitos, qualidade e controle de consistência.

**Cobertura documental:** seções 25 e 26.

<CodeBlock language="xml" editable>
<prompt id="P9" nome="Verificacao e Rastreabilidade">
  <objetivo>
  Verificar a coerência e a completude da
  descrição produzida nas etapas anteriores.

Preparar critérios objetivos para avaliar as funcionalidades e os requisitos,
sem declarar testes não executados.

  </objetivo>

  <entradas>
  - Resultados de P1 a P8;
  - Decisões humanas registradas;
  - Estrutura das 27 seções do Documento Mestre.
  </entradas>

  <tarefas>
1. Verifique se cada funcionalidade
  corresponde a um problema ou necessidade.

1. Verifique se os comportamentos estão suficientemente descritos.

1. Identifique conflitos entre fluxos, regras, interfaces, dados e permissões.

1. Identifique requisitos ambíguos, contraditórios ou não verificáveis.

1. Proponha correções específicas, preservando decisões humanas.

1. Estruture a rastreabilidade: problema → necessidade → solução → decisão →
   funcionalidade → requisito → interface/processo → critério de aceitação.

1. Estabeleça critérios verificáveis para os requisitos implementáveis.

1. Descreva cenários normais, alternativos e casos-limite relevantes.

1. Para cada teste proposto, identifique: entrada, execução esperada, oráculo,
   resultado aceitável e condição de parada.

1. Diferencie verificações documentais de testes reais do software.

1. Classifique pendências conforme seu efeito no escopo e no aceite.

  </tarefas>

<saida_obrigatoria> A. Matriz de rastreabilidade bidirecional. B. Inventário de
requisitos. C. Critérios de aceitação. D. Cenários de verificação. E.
Inconsistências identificadas. F. Correções propostas. G. Lacunas de
especificação. H. Pendências classificadas. I. Conclusão sobre a qualidade
documental. </saida_obrigatoria>

<criterio_de_conclusao> Não declare requisitos completos quando houver
comportamentos essenciais ainda indefinidos.

Não apresente testes propostos como testes executados.

Uma correção documental não poderá alterar uma decisão humana aprovada sem
autorização.

Encerre a revisão ao satisfazer os critérios documentais definidos. Não crie
ciclos ilimitados de auditoria.

</criterio_de_conclusao> </prompt> </CodeBlock>

**Resultado esperado:** especificações rastreáveis, coerentes e acompanhadas de
critérios de aceitação, distinguindo validação documental de funcionamento
efetivamente comprovado.

## P10 — Consolidação do Documento Mestre completo

**Dimensão:** integração das três dimensões principais — consultoria, concepção
funcional e especificação.

**Cobertura documental:** seções 01 a 27.

<CodeBlock language="xml" editable>
<prompt id="P10" nome="Consolidacao Integral">
  <objetivo>
  Integrar os resultados produzidos pelos
  prompts P1 a P9 em um Documento Mestre
  de Concepção e Especificação do Sistema.

O documento deverá apresentar uma visão integrada, coerente e suficientemente
detalhada do aplicativo de handebol de praia.

  </objetivo>

  <entradas>
  - Prompt mestre P0;
  - Entregas disponíveis de P1 a P9;
  - Estrutura documental de 27 seções;
  - Decisões expressas do usuário;
  - Fontes e referências verificadas.
  </entradas>

<estrutura_obrigatoria> PARTE I - FUNDAMENTOS DO PRODUTO 01. Identificação e
controle documental 02. Resumo executivo 03. Contexto e diagnóstico 04.
Público-alvo e usuários 05. Visão e proposta de valor 06. Objetivos e
resultados 07. Escopo e limites

PARTE II - MERCADO E EXPERIÊNCIA

1. Mercado e inovação
1. Experiência do usuário
1. Arquitetura da informação
1. Jornadas dos usuários

PARTE III - FUNCIONALIDADES

1. Mapa de funcionalidades
1. Especificação funcional dos módulos

PARTE IV - COMPORTAMENTO E INTELIGÊNCIA

1. Fluxos operacionais integrados
1. Regras de negócio e esportivas
1. IA e automações
1. Dados e informações
1. Integrações e interoperabilidade

PARTE V - QUALIDADE E TECNOLOGIA

1. Privacidade e segurança
1. Arquitetura tecnológica
1. Requisitos de qualidade

PARTE VI - VIABILIDADE

1. Modelo de negócio
1. Riscos e viabilidade

PARTE VII - IMPLEMENTAÇÃO E VERIFICAÇÃO

1. Evolução do produto
1. Verificação e aceitação
1. Rastreabilidade e decisões

PARTE VIII - COMPLEMENTOS

1. Glossário, referências e anexos

</estrutura_obrigatoria>

  <tarefas>
1. Reúna os conteúdos disponíveis.

1. Organize cada informação na seção documental correspondente.

1. Preserve descrições funcionais completas, exemplos, fluxos e critérios de
   aceitação.

1. Elimine duplicações desnecessárias sem perder informações relevantes.

1. Preserve identificadores e relações entre problemas, soluções e requisitos.

1. Identifique divergências e indique a correção proposta, quando necessária.

1. Diferencie claramente: fatos, hipóteses, propostas, recomendações e decisões
   humanas.

1. Não preencha lacunas por invenção.

1. Se houver informação insuficiente, identifique a seção como pendente e
   indique o conteúdo necessário.

1. Produza um documento legível, estruturado e tecnicamente preciso.

1. Mantenha exemplos concretos para explicar funcionalidades complexas.

1. Preserve fontes e sua relação com as afirmações documentadas.

  </tarefas>

  <entregavel>
  Documento Mestre completo em Markdown,
  estruturado nas 27 seções estabelecidas.

Cada seção deverá conter:

- Descrição e conteúdo pertinente;
- Detalhamento proporcional ao assunto;
- Identificadores e referências aplicáveis;
- Estado das propostas e decisões;
- Lacunas relevantes, se existirem.

Se o tamanho exigir entregas parciais, divida o documento por seções numeradas,
mantendo a continuidade do conteúdo. Não resuma artificialmente capítulos apenas
para caber em uma única resposta.

  </entregavel>

<criterio_de_conclusao> O documento deverá: - Cobrir o escopo aprovado; -
Descrever os comportamentos necessários; - Preservar regras e decisões; -
Relacionar problemas e funcionalidades; - Identificar dados e fluxos
relevantes; - Especificar IA e automações; - Apresentar requisitos
verificáveis; - Preservar rastreabilidade; - Indicar lacunas não resolvidas.

Declare se o documento está: SUSTENTADO INTEGRALMENTE, SUSTENTADO PARCIALMENTE,
SEM SUSTENTAÇÃO SUFICIENTE, CONTRADITO PELA EVIDÊNCIA, NÃO VERIFICADO ou NÃO
DOCUMENTADO.

Justifique a classificação e diferencie a completude documental da implementação
efetiva do aplicativo.

</criterio_de_conclusao> </prompt> </CodeBlock>

**Resultado esperado:** o Documento Mestre consolidado, com as 27 seções,
preservando o conteúdo desenvolvido pela IA consultora e as decisões tomadas
durante a concepção.

---

### Procedimento de utilização dos prompts

**1. Inicie uma conversa dedicada à concepção do aplicativo.**

Envie P0 uma única vez. Em seguida, envie P1. A IA começará identificando os
problemas e as necessidades dos usuários.

**2. Desenvolva progressivamente a concepção.**

Execute P2, P3 e P4, aproveitando os resultados já produzidos. A IA deverá
apresentar propostas fundamentadas, sem exigir aprovação de cada detalhe
exploratório.

**3. Aprofunde cada módulo utilizando P5.**

Substitua `[INSERIR NOME DO MODULO]` pelo módulo desejado e execute P5
separadamente para cada módulo do catálogo. É nessa etapa que a descrição deixa
de ser conceitual e passa a especificar comportamentos detalhados.

**4. Complete os aspectos inteligentes e tecnológicos.**

Execute P6, P7 e P8. A IA especificará automações, alternativas tecnológicas,
requisitos de qualidade e possibilidades de evolução.

**5. Verifique e consolide o documento.**

Execute P9 para verificar as especificações e P10 para integrar o material nas
27 seções do Documento Mestre.

## Critérios de qualidade que orientam a consultoria

A IA deverá consultar, quando pertinentes, os seguintes referenciais:

| Referência                                                                                                                                                      | Aplicação                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [ISO/IEC/IEEE 29148:2018](https://www.iso.org/standard/72089.html)                                                                                              | Clareza, estrutura e qualidade dos requisitos.      |
| [ISO 9241-210:2019](https://www.iso.org/standard/77520.html)                                                                                                    | Concepção centrada nos usuários.                    |
| [ISO 9241-115:2024](https://www.iso.org/standard/80773.html)                                                                                                    | Design de interação, interfaces e navegação.        |
| [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html)                                                                                                   | Características de qualidade do software.           |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/)                                                                                                                       | Acessibilidade das interfaces digitais.             |
| [NIST AI RMF — Perfil de IA Generativa](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) | Confiabilidade e gestão de riscos da IA.            |
| [IHF — Regras de Handebol de Praia](https://www.ihf.info/media-center/news/new-rules-beach-handball-and-wheelchair-handball-be-observed-1-april-and-1-july)     | Fundamentação das regras específicas da modalidade. |

## Conclusão

O conjunto P0–P10 constitui um **processo completo de consultoria e
especificação documental** para o objetivo estabelecido.

Sua principal vantagem é permitir que a IA utilize criatividade e conhecimento
tecnológico na formulação de soluções, sem perder a ligação com os problemas dos
usuários, o funcionamento do aplicativo e os critérios de qualidade.

A qualidade final não pode ser garantida apenas pela redação dos prompts. A
garantia operacional vem da combinação de evidências, revisão das decisões
relevantes, especificação detalhada e validação posterior com atletas e
treinadores.

**Próxima ação recomendada:** executar P0 e P1, permitindo que a IA comece pela
investigação das necessidades e avance até a concepção do produto, sem escolher
antecipadamente tecnologias ou limitar a inovação a uma lista predefinida de
funcionalidades.

**Fontes:**

1. [ISO/IEC/IEEE 29148:2018 - Systems and software engineering — Life cycle processes — Requirements engineering](https://www.iso.org/standard/72089.html)
   (<www.iso.org>)
2. [ISO/IEC 25010:2023 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model](https://www.iso.org/standard/78176.html)
   (<www.iso.org>)
3. [IHF | New rules for beach handball and wheelchair handball to be observed from 1 April and 1 July](https://www.ihf.info/media-center/news/new-rules-beach-handball-and-wheelchair-handball-be-observed-1-april-and-1-july)
   (<www.ihf.info>)
4. [International Handball Federation](https://www.ihf.info/sites/default/files/2026-04/09B%20-%20Rules%20of%20the%20Game_Beach%20Handball_E.pdf)
   (<www.ihf.info>)

---

[1]: https://www.iso.org/standard/72089.html
[3]:
  https://www.ihf.info/media-center/news/new-rules-beach-handball-and-wheelchair-handball-be-observed-1-april-and-1-july
[4]:
  https://www.ihf.info/sites/default/files/2026-04/09B%20-%20Rules%20of%20the%20Game_Beach%20Handball_E.pdf
