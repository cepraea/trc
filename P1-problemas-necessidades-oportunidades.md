# P1 — Investigação de Problemas, Necessidades e Oportunidades (Handebol de Praia)

15 de nov. de 2026 · @Davi

## Escopo, método e legenda de evidências

Este documento entrega E01–E10 do P1 sob o contrato P0, e não contém entrevistas
nem dados primários de atletas ou treinadores: nenhuma foi realizada. A base é o
escopo informado pelo responsável (atletas e treinadores de handebol de praia,
com conhecimento especializado dele na modalidade) e fontes públicas listadas ao
final, citadas como [F01], [F02] etc.

**Consequência central:** o que está VERIFICADO descreve o esporte, suas regras,
seus riscos e sua estrutura competitiva. A dor dos usuários brasileiros é, na
maior parte, INFERIDA ou HIPÓTESE, e está marcada como tal em cada item.

| Rótulo         | Significado                                                                                  | Uso aqui                                                        |
| -------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| VER-D          | Verificado, diretamente aplicável: fonte pública sobre handebol de praia                     | Sempre com [Fnn]                                                |
| VER-A          | Verificado em contexto semelhante: handebol indoor, vôlei de praia, ferramentas de terceiros | Apoia plausibilidade; não prova o problema no handebol de praia |
| INF            | Inferido: conclusão derivada de evidências identificadas                                     | Raciocínio explicitado                                          |
| HIP            | Hipótese ainda não validada                                                                  | Depende das questões do E08                                     |
| PROPOSTA       | Direção sugerida por mim                                                                     | Nunca é requisito aprovado                                      |
| DECISÃO_HUMANA | Determinação expressa do responsável                                                         | Neste P1: apenas o escopo (atletas e treinadores)               |

Limites da base de evidências:

- A literatura científica encontrada concentra-se em alto rendimento e em
  contextos europeus, com amostras pequenas (por exemplo, 24 atletas no estudo
  de GPS e tempo-movimento [F03]; nove atletas no estudo de GPS feminino [F04]).
- Para o Brasil, as fontes encontradas são notícias sobre o circuito da CBHb
  [F11]. Não há dados sobre rotina de clubes, base ou amadores.
- Ferramentas de terceiros foram apenas localizadas, não avaliadas. A análise
  competitiva pertence ao P2.
- Não usei pontuações numéricas nem percentuais próprios. Todo número citado vem
  de uma fonte indicada.

<a id="p01-e10"></a>

## E10 — Síntese executiva e recomendação

O handebol de praia está bem descrito em regras, riscos e demandas físicas, mas
quase nada foi encontrado sobre a rotina e as dores dos usuários brasileiros.
Por isso a recomendação não é escolher funcionalidades: é fechar três lacunas
curtas antes do P2.

**Principais achados:**

1. O esporte difere do indoor de formas que podem importar ao produto: quatro
   atletas em quadra, dois sets de 10 minutos, `shoot-out` no empate, gols em
   aéra com valor dobrado e goleiro que pode atacar [F03]. As regras foram
   atualizadas em abril de 2026 [F02]. VER-D.
2. A evidência mais forte está em saúde e carga: lesões concentradas em membros
   inferiores e por sobrecarga [F05] [F06] [F07] e esforço intermitente com uma
   aceleração a cada 23 a 27 segundos [F03]. VER-D, de contextos sobretudo
   europeus e amostras pequenas.
3. O circuito brasileiro tem várias categorias, equipes de vários estados e
   etapas em cidades diferentes [F11]. Isso sugere carga de logística e de
   informação para clubes e base, mas a rotina real é INF.
4. A maior parte das necessidades parte do treinador, enquanto o atleta aparece
   como fonte de dados (E06). Só uma necessidade é específica do atleta, o que
   aponta falta da voz do atleta, não ausência de necessidades.
5. Dois eixos atravessam vários problemas: registrar o que acontece (PRB-01) e
   manter o histórico do atleta ao longo do tempo (OPP-04). INF.
6. Já existem ferramentas de terceiros para estatística e cronometragem de
   handebol de praia [F12], para `scouting` de vôlei de praia [F13] e
   plataformas de handebol em geral [F14]. Não foram avaliadas; compará-las é
   trabalho do P2.

Recomendação (PROPOSTA, não decisão):

1. Responder Q-01, Q-02 e Q-09 do E08, em poucas linhas cada. Isso define o
   público inicial e transforma hipóteses em observação documentada.
2. Seguir ao P2 com foco nos três problemas de prioridade Alta (PRB-04, PRB-03,
   PRB-01), mantendo os demais como hipóteses abertas.
3. Planejar, para uma etapa posterior, a validação com usuários reais, incluindo
   atletas, que são a maior lacuna desta investigação.
4. Não fixar funcionalidades nem tecnologias antes dessa validação mínima.

<a id="p01-e01"></a>

## E01 — Perfil e segmentação dos públicos

Os dois públicos confirmados são atletas e treinadores (DECISÃO_HUMANA). A
segmentação abaixo é uma PROPOSTA de trabalho para organizar diferenças de
objetivo, experiência, categoria e contexto competitivo, e precisa ser validada
pelo responsável (Q-01, no E08). As notícias do circuito da CBHb citam
categorias infantil, cadete, juvenil, júnior e adulto, em disputas masculinas e
femininas [F11].

**Atletas:**

| ID    | Perfil                                                         | Objetivo dominante                                          | Contexto e rotina                                          | Evidência                                         |
| ----- | -------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------- |
| ATL-1 | Atleta de seleção ou alto rendimento                           | Desempenho máximo em competições nacionais e internacionais | Preparação por ciclos, calendário internacional            | VER-D: competições IHF existem [F02]. Rotina: INF |
| ATL-2 | Atleta de clube no circuito nacional (adulto, júnior, juvenil) | Competir e evoluir ao longo das etapas                      | Etapas em cidades distintas, com equipes de vários estados | VER-D: estrutura do circuito [F11]. Rotina: INF   |
| ATL-3 | Atleta de base (infantil, cadete, juvenil)                     | Desenvolvimento técnico e físico, progressão de categoria   | Idade escolar; menores de idade (atenção a dados pessoais) | VER-D: categorias existem [F11]. Objetivo: INF    |
| ATL-4 | Atleta que alterna indoor e praia                              | Manter desempenho e saúde entre duas modalidades            | Praia muitas vezes concentrada na entressafra do indoor    | VER-D: [F06]. Rotina: INF                         |
| ATL-5 | Atleta recreativo ou amador                                    | Prática social, torneios locais                             | Sem informação nas fontes                                  | HIP                                               |

Dentro de cada segmento há diferenças por função em quadra (por exemplo, goleiro
e especialista). A literatura registra incidência de lesões diferente por
posição, com zagueiros centrais e especialistas no topo [F05]. VER-D.

**Treinadores:**

| ID    | Perfil                                                        | Objetivo dominante                                        | Contexto e rotina                                                                          | Evidência                             |
| ----- | ------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------- |
| TRE-1 | Treinador de seleção ou alto rendimento, com comissão técnica | Resultado, análise de adversário, gestão de carga         | Comissão com `staff` médico: equipes médicas reportaram lesões em campeonato europeu [F05] | VER-D (contexto europeu). Brasil: INF |
| TRE-2 | Treinador de clube no circuito                                | Preparar a equipe para as etapas e gerir o elenco         | Possivelmente acumula funções (técnico, logística, inscrição)                              | INF                                   |
| TRE-3 | Treinador de base                                             | Formação e progressão dos atletas                         | Categorias de base; vínculo com responsáveis                                               | INF                                   |
| TRE-4 | Treinador que atua em indoor e praia                          | Adaptar método e carga a atletas que alternam modalidades | Decorre de ATL-4                                                                           | HIP                                   |
| TRE-5 | Treinador ou organizador amador                               | Reunir o grupo e jogar                                    | Sem informação nas fontes                                                                  | HIP                                   |

Públicos adicionais propostos (não confirmados), que entram somente se um
problema dos públicos iniciais depender deles:

- Preparador físico, fisioterapeuta ou `staff` médico: relevante para PRB-04,
  PRB-05 e PRB-07. Quem cumpre esse papel nas equipes brasileiras é desconhecido
  (Q-06).
- Responsáveis legais de atletas menores: relevante para PRB-11 e para
  privacidade (Q-08).
- Organização e arbitragem de torneios: relevante para PRB-10, de forma
  marginal.

Diferenças que provavelmente mais alteram necessidades (INF):

- Nível de estrutura: comissão técnica completa versus treinador que acumula
  funções.
- Idade: atletas menores de idade exigem cuidado adicional com dados.
- Acumulação de modalidades: indoor e praia na mesma temporada.
- Função em quadra, por seus riscos e demandas distintos.

<a id="p01-e02"></a>

## E02 — Mapa da rotina esportiva e das atividades

A temporada gira em torno de um calendário de etapas e torneios, e se repete
como ciclo contínuo em seis fases. Apenas o formato de jogo e a estrutura
competitiva estão verificados; a rotina de cada fase é um mapa de trabalho (INF)
a ser corrigido pelo responsável.

Fatos verificados que moldam a rotina:

- Jogo com quatro atletas em quadra, um deles goleiro, em areia de 27 m por 12
  m; dois sets de 10 minutos e `shoot-out` em caso de empate. Gols de aérea
  valem o dobro, o arremesso com giro de 360 graus é permitido e o goleiro pode
  atacar [F03]. VER-D.
- As regras valem para ambos os sexos, exceto o tamanho da bola, e as infrações
  são punidas contra o atleta, não como falta coletiva [F01]. VER-D.
- As regras da IHF para handebol de praia mudaram em 1.º de abril de 2026: jogo
  passivo, ações antidesportivas nos segundos finais, chute na cabeça do goleiro
  e equipamentos [F02]. VER-D.
- O circuito da CBHb reúne equipes de vários estados em etapas sediadas em
  cidades diferentes, e um participante do circuito descreve a preparação como
  algo que começa quando o calendário é divulgado, no início do ano [F11].
  VER-D.

| Fase                                                       | O que o atleta faz                                          | O que o treinador faz                                                                      | Evidência                                                                   |
| ---------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| 1. Planejamento da temporada                               | Conhece calendário, metas e função                          | Define grupo, metas, ciclos e etapas-alvo                                                  | Calendário inicial: VER-D [F11]. Resto: INF                                 |
| 2. Preparação (treinos na areia, em quadra ou em academia) | Treina técnica, força, resistência e gestos específicos     | Planeja e conduz sessões; avalia o grupo                                                   | Demanda intermitente: VER-D [F03]. Rotina: INF                              |
| 3. Pré-competição                                          | Confirma inscrição e deslocamento; descansa                 | Inscreve equipe e atletas; confere regras vigentes; estuda adversários; organiza logística | Regras: VER-D [F02]. Etapas em outros estados: VER-D [F11]. Resto: INF      |
| 4. Dia de jogo e torneio                                   | Aquece, hidrata-se, joga vários jogos e recupera entre eles | Define escalação e trocas, usa tempo técnico, ajusta entre sets, registra o jogo           | Formato e tempo técnico: VER-D [F03] [F01]. Calor e hidratação: HIP         |
| 5. Pós-jogo e pós-torneio                                  | Recupera-se; comunica dores e lesões                        | Revisa o jogo, dá retorno, registra lesões, ajusta o plano                                 | 61% das lesões em estudo espanhol ocorreram em competição [F07]. Resto: INF |
| 6. Entressafra e transição entre modalidades               | Alterna com o indoor; retorna de lesão                      | Reavalia o elenco; reconvoca; planeja a transição                                          | Praia costuma ocorrer na entressafra do indoor: VER-D [F06]. Resto: INF     |

O ciclo recomeça após a fase 6. Lacunas conhecidas, todas HIP: frequência e
local dos treinos, como equipes sem estrutura se comunicam, como o grupo é
convocado e que registros existem hoje. Elas alimentam Q-02 e Q-09 no E08.

<a id="p01-e03"></a>

## E03 — Inventário de problemas

Foram identificados 14 problemas. Nenhum está comprovado como dor dos usuários
brasileiros: o que as fontes verificam é o contexto (riscos, demandas, regras,
estrutura competitiva). Cada linha diz o que é fato e o que é inferência ou
hipótese. A relevância é preliminar e qualitativa (Alta, Média ou A validar),
sem pontuação numérica. Problemas não são funcionalidades: um problema listado
não obriga o produto a tratá-lo.

| ID     | Público           | Contexto e descrição                                                                                                                                                                                                                                                                                                                                     | Consequência                                                                | Origem e evidência                                                                                                                                                                                    | Relev. prel. |
| ------ | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| PRB-01 | TRE-1 a 3         | Jogo e treino: registrar o que ocorre em jogos curtos, intermitentes, ao ar livre e na areia, sem perder o foco da condução do jogo                                                                                                                                                                                                                      | Análise posterior incompleta; decisões baseadas na memória                  | INF. Análise notacional é tema de pesquisa [F09] e há `software` de estatística dedicado ao esporte [F12] (VER-D de que existe a prática). Como treinadores brasileiros registram hoje: sem evidência | Alta         |
| PRB-02 | TRE               | Interpretar eficiência de ataque com pontuação diferenciada: gols de aérea valem o dobro [F03], então gols totais e percentual de arremesso, vindos do indoor, podem não refletir a produção de pontos                                                                                                                                                   | Escolhas de arremessadores e tática mal calibradas                          | VER-D da regra [F03]; que as métricas do indoor distorcem é INF. Eficiência de arremesso é tema de estudo [F09]                                                                                       | Média        |
| PRB-03 | TRE-1 a 4, ATL    | Gerir carga em esporte intermitente: uma aceleração a cada 23 a 27 s [F03]; em atletas femininas, 62,82% do tempo acima de 80% da FC máxima [F04]. Faltam referências: a literatura diz que o conhecimento sobre as demandas é baixo [F03] e que o monitoramento por tecnologia é limitado [F04]                                                         | Treino e recuperação ajustados sem referência; sobrecarga ou subcarga (INF) | VER-D para as demandas (amostras pequenas, Espanha; resumidas em revisão de 2024 [F10]). Ausência de monitoramento nas equipes brasileiras: HIP                                                       | Alta         |
| PRB-04 | ATL, TRE          | Lesões comuns, sobretudo em membros inferiores e por sobrecarga. Estudo espanhol: 54,2% em membros inferiores, 23,7% em isquiotibiais, 26,3% com dor crônica por lesão recorrente [F07]. Mais torneios por ano e mais meses de prática se associam a mais lesões [F06]. Em campeonato europeu, 49,3 lesões com afastamento por 1.000 horas de jogo [F05] | Afastamento, dor crônica, queda de desempenho                               | VER-D. Definições de lesão diferem entre estudos [F05] [F06]; não comparáveis diretamente. Quanto ao papel do produto na prevenção: HIP                                                               | Alta         |
| PRB-05 | TRE, `staff`, ATL | Histórico de lesões e retorno ao jogo fragmentado: estudos dependem de relato do próprio atleta por questionário [F07], e uma pesquisa com 651 atletas não pôde separar lesões de indoor e de praia [F06]                                                                                                                                                | Decisões de retorno sem histórico; recorrência                              | INF, a partir de VER-D sobre os métodos dos estudos. Prática das equipes brasileiras: sem evidência                                                                                                   | Média        |
| PRB-06 | ATL-4, TRE-4      | Carga acumulada entre indoor e praia: a sobrecarga pode ter nascido no indoor e aparecer na praia [F06]. A prática de praia na entressafra se associou, em outro estudo, a menos lesões no indoor, citado em [F06]; o problema é a falta de visão da carga total, não a praia                                                                            | Sobrecarga não percebida (INF)                                              | VER-D parcial [F06]; ninguém ver a carga total é INF                                                                                                                                                  | Média        |
| PRB-07 | ATL, TRE          | Calor e hidratação em torneios com jogos consecutivos. Existem um estudo sobre perda de líquidos em quatro jogos seguidos sob alta temperatura e umidade e uma revisão da EHF sobre lesões, sobretreino e desidratação em atletas femininas (apenas títulos vistos em listas de referências [F07] [F08]; conteúdos não lidos)                            | Queda de desempenho e risco à saúde (HIP)                                   | HIP com indícios. O conteúdo dos estudos precisa ser lido antes de qualquer conclusão                                                                                                                 | Média        |
| PRB-08 | TRE, ATL          | Acompanhar mudanças de regras. Desde 1.º de abril de 2026 há novas regras para jogo passivo (até quatro passes após o aviso), sanção nos 15 segundos finais, chute na cabeça do goleiro e equipamentos [F02]                                                                                                                                             | Punições evitáveis e perda de posse (INF)                                   | VER-D de que as regras mudaram; que equipes ficam desalinhadas é INF                                                                                                                                  | Média        |
| PRB-09 | TRE               | Preparar o jogo contra adversários em um circuito com dezenas de equipes de vários estados (59 equipes em uma etapa) [F11], com pouca informação disponível sobre cada uma                                                                                                                                                                               | Preparação baseada em memória ou vídeo informal (HIP)                       | HIP. Um fornecedor afirma que a qualidade dos dados no handebol é fraca [F14] (afirmação comercial, não verificada)                                                                                   | Média        |
| PRB-10 | TRE-2, TRE-3      | Logística e burocracia de competição: etapas em cidades diferentes [F11] e fichas de inscrição de associações que alimentam sistemas de súmula [F12]. Repetição de dados de equipe e atletas a cada etapa é provável                                                                                                                                     | Retrabalho e erros de cadastro (INF)                                        | INF a partir de VER-D da estrutura. Esforço real: sem evidência                                                                                                                                       | Média        |
| PRB-11 | TRE-3, ATL-3      | Acompanhar a evolução do atleta entre categorias e temporadas. As categorias de base existem [F11]; não há fonte sobre como o histórico é mantido ou perdido                                                                                                                                                                                             | Perda de histórico ao trocar de clube ou categoria (HIP)                    | HIP; VER-D só da estrutura de categorias. Envolve menores de idade                                                                                                                                    | A validar    |
| PRB-12 | ATL               | Receber retorno individual claro sobre o próprio desempenho e o que melhorar                                                                                                                                                                                                                                                                             | Evolução mais lenta; desmotivação (HIP)                                     | HIP, sem fonte                                                                                                                                                                                        | A validar    |
| PRB-13 | TRE               | Decidir e comunicar durante o jogo: dois sets de 10 minutos e tempo técnico [F03] [F01] deixam pouca janela; o ambiente aberto pode dificultar a comunicação                                                                                                                                                                                             | Ajustes tardios ou não comunicados (HIP)                                    | HIP; VER-D só do formato                                                                                                                                                                              | A validar    |
| PRB-14 | TRE-2, TRE-5, ATL | Coordenar treinos e presença do grupo, dependentes de areia disponível, clima e horários                                                                                                                                                                                                                                                                 | Treinos esvaziados; falta de continuidade (HIP)                             | HIP, sem fonte                                                                                                                                                                                        | A validar    |

<a id="p01-e04"></a>

## E04 — Inventário de necessidades

Os 14 problemas se traduzem em 12 necessidades, formuladas sem citar solução.
Todas são INF: derivam de problemas que ainda não foram validados com usuários,
então herdam a fragilidade da evidência de origem. Estrutura: "Quando
[contexto], o usuário precisa [objetivo], para [resultado]".

| ID     | Necessidade                                                                                                                                                                | Dificuldade atual                                                            | Condição de satisfação                                                               | Origem                 |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------- |
| NEC-01 | Quando acompanha um jogo ou treino, o treinador precisa captar o que ocorreu com fidelidade suficiente, para analisar depois e decidir ajustes                             | Ritmo intermitente, ambiente aberto, atenção dividida com a condução do jogo | O treinador consegue reconstituir os fatos relevantes do jogo sem ter perdido o jogo | PRB-01                 |
| NEC-02 | Quando avalia a eficiência de atletas e da equipe, o treinador precisa de uma leitura coerente com a pontuação do handebol de praia, para escolher tática e arremessadores | Métricas herdadas do indoor ignoram gols de aérea e outras particularidades  | A leitura de eficiência reflete a pontuação real e é compreendida pelo treinador     | PRB-02                 |
| NEC-03 | Quando planeja treinos e torneios com vários jogos, o treinador precisa conhecer a carga que o grupo suporta, para ajustar treino e recuperação                            | Poucas referências publicadas e pouco monitoramento acessível                | O treinador decide carga e descanso com informação em que confia                     | PRB-03, PRB-06         |
| NEC-04 | Quando um atleta tem risco de lesão ou volta de uma, o treinador e o atleta precisam do histórico e da situação atual, para decidir prevenção, uso em jogo e retorno       | Histórico disperso entre pessoas, modalidades e temporadas (INF)             | A decisão de retorno e de prevenção considera o histórico completo do atleta         | PRB-04, PRB-05, PRB-06 |
| NEC-05 | Quando competem sob calor em jogos consecutivos, atletas e treinadores precisam manter hidratação e exposição sob controle, para preservar saúde e rendimento              | Pouca informação e pouca rotina estabelecida (HIP)                           | Sem episódios evitáveis de queda por calor ou desidratação                           | PRB-07                 |
| NEC-06 | Quando as regras mudam, treinadores e atletas precisam saber o que mudou e o que isso exige, para adaptar treino, jogo e comportamento                                     | Mudanças dispersas em documentos técnicos, em outras línguas                 | A equipe aplica a regra vigente sem punição evitável                                 | PRB-08                 |
| NEC-07 | Quando prepara um jogo, o treinador precisa de informação sobre o adversário, para definir plano de jogo                                                                   | Pouca informação acessível sobre cada equipe (HIP)                           | O treinador chega ao jogo com informação útil e confiável sobre o adversário         | PRB-09                 |
| NEC-08 | Quando inscreve e desloca a equipe para etapas, o treinador precisa cumprir exigências formais com pouco esforço, para dedicar tempo ao esporte                            | Repetição de dados e prazos (INF)                                            | A inscrição e a documentação da etapa não consomem tempo desproporcional             | PRB-10                 |
| NEC-09 | Quando acompanha atletas ao longo das categorias, o treinador precisa de uma visão contínua da evolução, para orientar a formação                                          | Histórico perdido ao mudar de clube ou categoria (HIP)                       | A evolução do atleta pode ser consultada ao longo de temporadas                      | PRB-11                 |
| NEC-10 | Quando quer melhorar, o atleta precisa de retorno claro sobre o próprio desempenho, para saber o que fazer diferente                                                       | Retorno depende da disponibilidade do treinador (HIP)                        | O atleta entende o que melhorou, o que não e o próximo passo                         | PRB-12                 |
| NEC-11 | Quando conduz o jogo nos tempos curtos entre posses, sets e tempos técnicos, o treinador precisa decidir e comunicar rapidamente, para ajustar a equipe a tempo            | Pouca janela e ambiente ruidoso (HIP)                                        | Os ajustes chegam aos atletas dentro da janela disponível                            | PRB-13                 |
| NEC-12 | Quando organiza treinos e convoca o grupo, o treinador precisa saber quem vem, onde e quando, para manter continuidade                                                     | Dependência de clima, areia e disponibilidade (HIP)                          | O grupo se reúne com previsibilidade e o treinador sabe quem está disponível         | PRB-14                 |

<a id="p01-e05"></a>

## E05 — Mapa de oportunidades de melhoria

Foram mapeadas 13 oportunidades. São direções de melhoria (PROPOSTA), escritas
sem definir funcionalidade, tecnologia ou ferramenta, e nenhuma está aprovada no
escopo. A coluna "Condição ou risco" diz o que precisa ser verdade para a
oportunidade valer a pena.

| ID     | Tipo                          | Oportunidade                                                                                                             | Necessidades                         | Por que importa                                                                                                                                        | Condição ou risco                                                                                          |
| ------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| OPP-01 | Simplificação                 | Reduzir o esforço de registrar o que acontece em jogo e treino, em condições adversas (sol, areia, pressa)               | NEC-01                               | O registro é porta de entrada para análise, retorno ao atleta e preparação de adversário                                                               | Só vale se hoje o registro for escasso ou custoso (Q-02)                                                   |
| OPP-02 | Melhor decisão                | Ler desempenho com critérios nativos do handebol de praia (pontuação, funções, sets), em vez de adaptar o indoor         | NEC-02, NEC-01                       | É onde o esporte difere do indoor [F03] e pode ser diferencial                                                                                         | Depende de definir com o responsável quais indicadores importam                                            |
| OPP-03 | Decisão e personalização      | Dar visão de carga e recuperação sem exigir equipamento caro                                                             | NEC-03                               | A carga é o fio que liga desempenho e lesão [F03] [F06]                                                                                                | Não pressupõe sensores nem serviços pagos (P0, princípio 10); valor depende do que a equipe consegue medir |
| OPP-04 | Continuidade de informação    | Manter o histórico do atleta através de modalidades, categorias e temporadas                                             | NEC-04, NEC-09, NEC-03               | Histórico fragmentado é um problema transversal (PRB-05, PRB-06, PRB-11)                                                                               | Dados de saúde e de menores exigem cuidado de privacidade desde a concepção                                |
| OPP-05 | Eliminação de retrabalho      | Reaproveitar dados de equipe e atletas em inscrições e documentos de competição                                          | NEC-08                               | A burocracia se repete a cada etapa [F11]                                                                                                              | Depende de como CBHb e federações recebem as informações (Q-07)                                            |
| OPP-06 | Aprendizagem                  | Manter treinadores e atletas atualizados sobre regras vigentes                                                           | NEC-06                               | As regras mudaram em abril de 2026 [F02] e mudarão de novo                                                                                             | Exige conteúdo confiável e atualizado; risco de ficar desatualizado                                        |
| OPP-07 | Melhor decisão                | Apoiar ajustes em janelas curtas de jogo                                                                                 | NEC-11                               | Dois sets de 10 minutos deixam pouco tempo [F03]                                                                                                       | Hipótese; pode ser mais barata resolver sem tecnologia (Q-04)                                              |
| OPP-08 | Aprendizagem e personalização | Dar ao atleta retorno individual compreensível                                                                           | NEC-10                               | Aproxima o atleta do próprio desenvolvimento                                                                                                           | Depende de haver dados confiáveis (OPP-01); risco de sobrecarregar o treinador                             |
| OPP-09 | Coordenação                   | Facilitar a combinação de treinos, presença e convocação                                                                 | NEC-12                               | Grupos amadores e pequenos perdem continuidade (HIP)                                                                                                   | Muitas ferramentas genéricas já existem; diferencial incerto                                               |
| OPP-10 | Personalização                | Orientar sobre calor, hidratação e exposição em torneios                                                                 | NEC-05                               | Torneios têm jogos consecutivos ao ar livre                                                                                                            | Falta ler os estudos citados em PRB-07; evitar orientação médica sem base                                  |
| OPP-11 | Novas formas de gerar valor   | Preparar adversários com informação que a própria comunidade já produz                                                   | NEC-07                               | O circuito reúne dezenas de equipes [F11]                                                                                                              | Hipótese. Compartilhar dados entre equipes concorrentes exige aceitação e regras claras                    |
| OPP-12 | Redução de barreiras          | Baixa barreira de uso em contextos de poucos recursos: ao ar livre, sem estrutura, com pouco tempo                       | Transversal (NEC-01, NEC-08, NEC-12) | Uma ferramenta de vôlei de praia já trata de sincronização após trabalho sem conexão [F13], o que sugere que conectividade em arena é um fator prático | Depende de Q-03 (conectividade e dispositivos nos locais)                                                  |
| OPP-13 | Novas formas de gerar valor   | Gerar conhecimento local sobre o handebol de praia brasileiro, onde a literatura vem em grande parte de outros contextos | NEC-02, NEC-03                       | O conhecimento publicado é descrito como escasso [F03] e baseado em amostras pequenas [F03] [F04]                                                      | Hipótese. Exige volume e qualidade de dados, e consentimento dos atletas                                   |

<a id="p01-e06"></a>

## E06 — Necessidades comuns e específicas de atletas e treinadores

Seis necessidades são comuns aos dois públicos, cinco são do treinador e apenas
uma é específica do atleta. Esse desequilíbrio é INF e provavelmente reflete as
fontes (escritas pela ótica da ciência do esporte, da medicina e da comissão
técnica), não a realidade. A voz do atleta é a maior lacuna desta etapa.

| Necessidade                             | Atletas                                                          | Treinadores             | Leitura                 |
| --------------------------------------- | ---------------------------------------------------------------- | ----------------------- | ----------------------- |
| NEC-01 Captar o jogo                    | Beneficiário indireto                                            | Executor e beneficiário | Específica do treinador |
| NEC-02 Ler eficiência                   | Beneficiário indireto                                            | Executor e beneficiário | Específica do treinador |
| NEC-03 Conhecer a carga                 | Beneficiário e fonte de informação (esforço percebido, descanso) | Executor e beneficiário | Comum                   |
| NEC-04 Histórico de lesões e retorno    | Beneficiário e fonte (dor, histórico)                            | Beneficiário            | Comum                   |
| NEC-05 Calor e hidratação               | Executor e beneficiário                                          | Beneficiário            | Comum                   |
| NEC-06 Regras vigentes                  | Beneficiário                                                     | Beneficiário            | Comum                   |
| NEC-07 Informação sobre o adversário    | Beneficiário indireto                                            | Executor e beneficiário | Específica do treinador |
| NEC-08 Inscrição e documentação         | Fonte de dados e documentos                                      | Executor e beneficiário | Específica do treinador |
| NEC-09 Evolução ao longo das categorias | Beneficiário (histórico dele)                                    | Beneficiário            | Comum                   |
| NEC-10 Retorno individual               | Beneficiário                                                     | Executor                | Específica do atleta    |
| NEC-11 Decisão em jogo                  | Beneficiário indireto                                            | Executor e beneficiário | Específica do treinador |
| NEC-12 Organizar treinos                | Beneficiário                                                     | Executor e beneficiário | Comum                   |

Observações:

- Em várias necessidades o treinador é quem quer o resultado e o atleta é quem
  fornece o dado (NEC-03, NEC-04, NEC-08). Isso cria risco de assimetria: o
  atleta carrega o esforço sem ver benefício. INF.
- NEC-04 e NEC-09 envolvem dados de saúde e de menores de idade, o que muda o
  que é aceitável coletar, e não só o que é útil. O tratamento jurídico deverá
  ser analisado por quem tem competência na área, em etapa posterior.
- O peso relativo das necessidades provavelmente muda por segmento: para TRE-1,
  NEC-03, NEC-04 e NEC-07 tendem a pesar mais; para TRE-5 e TRE-2, NEC-08 e
  NEC-12. INF, a validar com o responsável (Q-01).
- Estudo com 651 atletas descreve que a maioria provavelmente joga também indoor
  [F06]. Se o público brasileiro for assim, NEC-03 e NEC-04 tornam-se mais
  comuns a atletas e treinadores de ambas as modalidades (Q-05).

<a id="p01-e07"></a>

## E07 — Priorização preliminar

Três problemas lideram a prioridade preliminar para investigação: lesões
(PRB-04), carga (PRB-03) e registro do jogo (PRB-01). Nenhum problema é
"comprovado" para usuários brasileiros; a prioridade combina consequência,
recorrência provável e força da evidência de contexto, sem pontuação numérica.
Prioridade indica o que investigar primeiro, não o que construir primeiro, e não
é decisão de escopo.

| ID     | Problema                              | Consequência                       | Recorrência provável         | Evidência                                          | Prioridade prel. | Hipótese que a sustenta                                             |
| ------ | ------------------------------------- | ---------------------------------- | ---------------------------- | -------------------------------------------------- | ---------------- | ------------------------------------------------------------------- |
| PRB-04 | Lesões comuns e por sobrecarga        | Física; afastamento e dor crônica  | A cada torneio e temporada   | VER-D de contexto, a mais forte                    | Alta             | As equipes não têm forma estruturada de prevenir e acompanhar (HIP) |
| PRB-03 | Gestão de carga sem referências       | Desempenho e risco de lesão        | Contínua                     | VER-D das demandas; ausência de monitoramento: HIP | Alta             | As equipes brasileiras monitoram pouco a carga (HIP)                |
| PRB-01 | Registro de jogo e treino             | Alimenta vários outros problemas   | Todo jogo e treino           | INF                                                | Alta             | O registro hoje é escasso ou custoso (HIP)                          |
| PRB-02 | Eficiência com pontuação diferenciada | Tática e escolhas de atletas       | Todo jogo analisado          | VER-D da regra; resto INF                          | Média            | Treinadores usam métricas herdadas do indoor (HIP)                  |
| PRB-05 | Histórico de lesões fragmentado       | Recorrência e retorno mal decidido | Por lesão                    | INF                                                | Média            | O registro não é contínuo (HIP)                                     |
| PRB-06 | Carga entre indoor e praia            | Sobrecarga não percebida           | Ao longo da temporada        | VER-D parcial; resto INF                           | Média            | Parte relevante do público alterna modalidades (Q-05)               |
| PRB-07 | Calor e hidratação                    | Saúde e rendimento                 | Em torneios                  | HIP com indícios                                   | Média            | Torneios têm calor sem rotina de hidratação (HIP)                   |
| PRB-08 | Mudanças de regras                    | Punição e perda de posse           | A cada mudança e a cada jogo | VER-D da mudança; resto INF                        | Média            | Equipes demoram a incorporar as mudanças (HIP)                      |
| PRB-09 | Preparar adversário                   | Plano de jogo                      | Por jogo                     | HIP                                                | Média            | Informação sobre adversários é escassa (HIP)                        |
| PRB-10 | Burocracia de competição              | Tempo e erros                      | A cada etapa                 | INF                                                | Média            | Dados são repetidos a cada etapa (HIP)                              |
| PRB-11 | Evolução entre categorias             | Histórico perdido                  | A cada mudança               | HIP                                                | A validar        | Histórico não acompanha o atleta (HIP)                              |
| PRB-12 | Retorno individual ao atleta          | Evolução mais lenta                | Contínua                     | HIP                                                | A validar        | Atletas recebem pouco retorno (HIP)                                 |
| PRB-13 | Decisão em jogo                       | Ajustes tardios                    | Todo jogo                    | HIP                                                | A validar        | A janela de decisão é o gargalo (HIP)                               |
| PRB-14 | Organização de treinos                | Falta de continuidade              | Semanal                      | HIP                                                | A validar        | Grupos pequenos perdem treinos por falta de coordenação (HIP)       |

Dentro de "Média" não há ordem. O que mais pode mudar este quadro: o público
inicial escolhido (Q-01), como o registro é feito hoje (Q-02), quantos atletas
alternam modalidades (Q-05) e quais problemas o responsável já observou
diretamente (Q-09).

<a id="p01-e08"></a>

## E08 — Questões de investigação

Nove questões poderiam mudar conclusões ou prioridades. Em sua maioria são
respondíveis pelo próprio responsável, que conhece a modalidade; as demais pedem
observação de campo ou consulta a atletas e treinadores. Não são um questionário
inicial, e o trabalho segue sem elas, com a fragilidade já assinalada.

| ID   | Questão                                                                                                                               | O que pode mudar                                                   | Como responder                                                           |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Q-01 | Qual é o público inicial prioritário: seleção e alto rendimento, clubes do circuito, base ou amadores?                                | E01, E06 e toda a priorização do E07                               | Decisão do responsável                                                   |
| Q-02 | Como treinadores brasileiros registram hoje dados de jogo e de treino (papel, planilha, vídeo, nada) e o que não conseguem registrar? | Relevância de PRB-01 e PRB-02; OPP-01 e OPP-12                     | Experiência do responsável; conversa com treinadores de perfis distintos |
| Q-03 | Que conexão e que aparelhos existem nos locais de jogo e de treino?                                                                   | OPP-12 e barreiras de uso                                          | Observação de campo do responsável                                       |
| Q-04 | Que decisões o treinador toma entre sets e em tempo técnico, e que informação gostaria de ter nesse momento?                          | PRB-13, NEC-11, OPP-07                                             | Experiência do responsável; conversa com treinadores                     |
| Q-05 | Que parcela dos atletas e treinadores atua também no indoor na mesma temporada?                                                       | PRB-06 e NEC-03, NEC-04                                            | Experiência do responsável; levantamento simples com atletas             |
| Q-06 | Quem cuida da saúde e da preparação física nas equipes (profissional, o próprio treinador, ninguém)?                                  | PRB-04, PRB-05, PRB-07 e o público adicional de `staff`            | Experiência do responsável                                               |
| Q-07 | O que a CBHb e as federações exigem em inscrição e súmula, e em que formato?                                                          | PRB-10, NEC-08, OPP-05                                             | Regulamentos da CBHb; consulta à confederação                            |
| Q-08 | Quantos usuários iniciais prováveis são menores de idade e quem autoriza o uso de seus dados?                                         | ATL-3, PRB-11, privacidade das fases seguintes                     | Responsável; análise jurídica especializada em etapa posterior           |
| Q-09 | Quais problemas do E03 o responsável já observou diretamente, em que situação e com que frequência?                                   | Eleva itens de HIP ou INF para evidência observada; reordena o E07 | Registro das observações do responsável, com contexto                    |

Q-09 é a de maior efeito: uma observação documentada do responsável ("vi isso
acontecer em tal torneio") vale mais do que qualquer fonte de contexto que eu
tenha reunido para os problemas HIP. Sem ela, os problemas HIP (PRB-07, PRB-09 e
PRB-11 a PRB-14) seguem sem fundamento além de plausibilidade.

<a id="p01-e09"></a>

## E09 — Matriz de rastreabilidade inicial

Cada problema leva a uma necessidade e a ao menos uma oportunidade; cada
necessidade aponta para ao menos um problema; cada oportunidade aponta para ao
menos uma necessidade. A cadeia termina em "oportunidade": decisão humana,
especificação e critério de aceitação ainda não existem para nenhum item.

| Problema | Usuário afetado              | Necessidade    | Oportunidade                  | Origem e evidência               |
| -------- | ---------------------------- | -------------- | ----------------------------- | -------------------------------- |
| PRB-01   | TRE-1, TRE-2, TRE-3          | NEC-01         | OPP-01, OPP-02, OPP-12        | INF; [F09] [F12]                 |
| PRB-02   | TRE-1, TRE-2                 | NEC-02         | OPP-02, OPP-13                | VER-D da regra [F03]; INF; [F09] |
| PRB-03   | TRE-1 a TRE-4, ATL-1 a ATL-4 | NEC-03         | OPP-03, OPP-13                | VER-D [F03] [F04]; HIP           |
| PRB-04   | ATL-1 a ATL-4, TRE-1 a TRE-4 | NEC-04         | OPP-03, OPP-04                | VER-D [F05] [F06] [F07]          |
| PRB-05   | TRE-1, TRE-2, `staff`, ATL   | NEC-04         | OPP-04                        | INF; [F06] [F07]                 |
| PRB-06   | ATL-4, TRE-4                 | NEC-03, NEC-04 | OPP-03, OPP-04                | VER-D parcial [F06]; INF         |
| PRB-07   | ATL, TRE                     | NEC-05         | OPP-10                        | HIP; títulos em [F07] [F08]      |
| PRB-08   | TRE, ATL                     | NEC-06         | OPP-06                        | VER-D [F02]; INF                 |
| PRB-09   | TRE                          | NEC-07         | OPP-11 (e OPP-01 como insumo) | HIP; [F11] [F14]                 |
| PRB-10   | TRE-2, TRE-3                 | NEC-08         | OPP-05, OPP-12                | INF; [F11] [F12]                 |
| PRB-11   | TRE-3, ATL-3                 | NEC-09         | OPP-04                        | HIP; [F11]                       |
| PRB-12   | ATL                          | NEC-10         | OPP-08                        | HIP                              |
| PRB-13   | TRE                          | NEC-11         | OPP-07                        | HIP; [F01] [F03]                 |
| PRB-14   | TRE-2, TRE-5, ATL            | NEC-12         | OPP-09, OPP-12                | HIP                              |

Cobertura: 14 problemas, 12 necessidades e 13 oportunidades, todos com
identificador estável e sem órfãos. IDs não são reaproveitados: se um item for
descartado, seu ID fica registrado como descartado.

## Índice de evidências da validação do tutorial

Os registros abaixo identificam as evidências usadas em
[P01-VAL-001](./P0-P1-tutorial.md#registro-de-validacao-das-acoes-p0p1) e
materializam o retorno para cada ação classificada.

### P01-EV-P1-001

A seção **Escopo, método e legenda de evidências** registra os públicos
confirmados, a ausência de entrevistas e dados primários, as classes VER-D,
VER-A, INF, HIP, PROPOSTA e DECISÃO_HUMANA, além da limitação de que nove das 14
fontes não tiveram a página completa aberta. O diagnóstico mantém tecnologia e
funcionalidades fora do escopo aprovado.

**Retorno:** sustenta [`P01-ACT-01-02`](./P0-P1-tutorial.md#p01-act-01-02),
[`P01-ACT-03-02`](./P0-P1-tutorial.md#p01-act-03-02) e
[`P01-ACT-04-02`](./P0-P1-tutorial.md#p01-act-04-02).

### P01-EV-P1-002

O documento contém os dez entregáveis exigidos: [E01](#p01-e01),
[E02](#p01-e02), [E03](#p01-e03), [E04](#p01-e04), [E05](#p01-e05),
[E06](#p01-e06), [E07](#p01-e07), [E08](#p01-e08), [E09](#p01-e09) e
[E10](#p01-e10). Essa constatação demonstra cobertura estrutural, não validação
das dores com atletas e treinadores.

**Retorno:** sustenta [`P01-ACT-04-01`](./P0-P1-tutorial.md#p01-act-04-01).

### P01-EV-P1-003

A seção [E08](#p01-e08) mantém Q-09 como questão de maior efeito e requer
observações documentadas do responsável. Os documentos auditados não contêm
resposta a Q-09 nem registro de revisão humana com problemas confirmados,
corrigidos ou rejeitados.

**Retorno:** sustenta [`P01-ACT-05-01`](./P0-P1-tutorial.md#p01-act-05-01) e
[`P01-ACT-05-02`](./P0-P1-tutorial.md#p01-act-05-02).

### P01-EV-P1-004

Este arquivo preserva o diagnóstico em Markdown. A [matriz E09](#p01-e09)
registra 14 problemas, 12 necessidades e 13 oportunidades com IDs estáveis,
relações e classes de evidência; E08 preserva as pendências.

**Retorno:** sustenta [`P01-ACT-06-01`](./P0-P1-tutorial.md#p01-act-06-01).

### P01-EV-P1-005

A [síntese E10](#p01-e10) recomenda seguir ao P2, mas não registra sua execução.
A [matriz E09](#p01-e09) declara que a cadeia termina em oportunidade e que
decisão humana, especificação e critério de aceitação ainda não existem.

**Retorno:** sustenta [`P01-ACT-07-01`](./P0-P1-tutorial.md#p01-act-07-01) e
[`P01-ACT-07-02`](./P0-P1-tutorial.md#p01-act-07-02).

---

## Glossário de Termos Especializados do Handebol de Praia

_Legenda de abreviações gramaticais: s. m. = substantivo masculino; s. m. e f. =
substantivo masculino e feminino._

**Gol de aérea (In-flight)** _s. m._

Gol marcado no ar por um atleta que controla a bola — vinda de um passe de
companheiro ou de um rebote na trave, no goleiro ou na defesa adversária — e
finaliza direto à meta enquanto está suspenso. Não é permitido que o próprio
jogador passe ou lance a bola para si mesmo para executar a jogada. Concede 2
pontos à equipe apenas se o atleta no ar controlar a bola e arremessar; dar um
tapa ou empurrar a bola para o gol vale apenas 1 ponto.

**Gol de giro (Spin Shot)** _s. m._

Arremesso realizado com uma rotação completa do corpo no ar (360 graus) antes da
finalização à meta. Considera-se um giro completo e correto quando os pés do
jogador no momento da impulsão apontam diretamente em direção ao gol, devendo a
bola sair da mão do atleta antes que qualquer parte do seu corpo toque a areia.
É bonificado com 2 pontos.

**Especialista** _s. m. e f._

Jogador de linha encarregado de substituir o goleiro na fase ofensiva da equipe.
Utiliza um uniforme idêntico ao do goleiro da própria equipe para se diferenciar
dos demais jogadores de linha. Qualquer gol marcado por ele ou pelo goleiro na
meta adversária concede 2 pontos, enquanto um eventual gol contra marcado por
ele vale apenas 1 ponto.

---

## Fontes

Consultadas em 15/11/2026. Abri a página completa de F02, F03, F05, F06 e F07.
As demais foram lidas apenas nos trechos retornados pela busca, e os dados delas
devem ser conferidos nas páginas antes de qualquer uso externo.

- [[F01] IHF, Regras do jogo de handebol de praia (edição de outubro
  de 2021)][1]
- [[F02] IHF, novas regras de handebol de praia a partir de 1.º de abril de 2026
  (13/03/2026)][2]
- [[F03] Pueo et al. (2017), tempo-movimento e frequência cardíaca no handebol
  de praia de elite, Journal of Sports Science and Medicine][3]
- [[F04] Análise por GPS das demandas físicas de atletas femininas de elite em
  campeonato espanhol, Sensors (2021)][4]
- [[F05] Achenbach et al. (2018), lesões no Campeonato Europeu de Handebol de
  Praia de 2017][5]
- [[F06] Levantamento com 651 atletas de handebol de praia: incidência de lesões
  e retorno ao esporte][6]
- [[F07] Penichet-Tomás et al. (2019), incidência de lesões em atletas espanhóis
  de elite; lista de referências em investiga.upo.es][7]
- [[F08] Hatzimanouil et al. (2017), lesões em atletas de elite de handebol de
  praia, Journal of Human Sport and Exercise][8]
- [[F09] Iannaccone et al. (2022), análise notacional do handebol de praia,
  Human Movement][9]
- [[F10] Cardinale, Cortis e Fusco (2024), Beach handball, Aspetar Sports
  Medicine Journal][10]
- [[F11] Notícias do Circuito Brasileiro e da Copa Brasil de Handebol de Praia
  da CBHb, jornal A União (PB): circuito começa, 59 equipes, encerramento em
  novembro de 2025, Copa Brasil][11]
- [[F12] Longman Sportsoft: sistemas de estatística e cronometragem de handebol,
  incluindo handebol de praia][12]
- [[F13] Beach Data 2.0, aplicativo de scouting de vôlei de praia; modo offline
  em appfollow][13]
- [[F14] handball.ai, plataforma de análise para handebol (afirmações comerciais
  do fornecedor)][14]

[1]: https://www.ihf.info
[2]: https://www.ihf.info
[3]: https://www.jssm.org
[4]: https://www.mdpi.com/journal/sensors
[5]: https://pubmed.ncbi.nlm.nih.gov/
[6]: https://pubmed.ncbi.nlm.nih.gov/
[7]: https://investiga.upo.es
[8]: https://www.jhse.ua.es
[9]: https://www.termedia.pl/Journal/Human_Movement
[10]: https://www.aspetar.com/journal/
[11]: https://auniao.pb.gov.br
[12]: https://www.longmansportsoft.com
[13]: https://appfollow.io
[14]: https://handball.ai
