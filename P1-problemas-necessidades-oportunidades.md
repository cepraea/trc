# P1 — Investigação de Problemas, Necessidades e Oportunidades (Handebol de Praia)

15 de nov. de 2026 · @Davi

**Revisão de sustentação em 16/11/2026:** fontes F01, F04 e F08–F14 conferidas e
rastreadas em [Registro de auditoria documental](#p1-auditoria-fontes). Esta
revisão não substitui os relatos do responsável nem altera os IDs existentes.

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
  de GPS e tempo-movimento [F03]; nove atletas da seleção espanhola no estudo de
  GPS feminino [F04], com 46 observações de jogo das mesmas atletas).
- Para o Brasil, [F11] reúne reportagens sobre eventos específicos de 2025; tais
  matérias não são regulamentos da CBHb nem uma amostra representativa da rotina
  dos clubes, da base ou dos amadores.
- Foram conferidas páginas de fornecedores que descrevem funções de seus
  produtos [F12] [F13] [F14], sem testes funcionais nem comprovação de eficácia.
  A análise competitiva pertence ao P2.
- Não usei pontuações numéricas nem percentuais próprios. Todo número citado vem
  de uma fonte indicada.

<a id="p01-e10"></a>

## E10 — Síntese executiva e recomendação

As regras, riscos e demandas físicas do handebol de praia são descritos nas
fontes consultadas. O responsável também documentou experiências próprias sobre
a rotina e os problemas no Brasil, mas ainda não houve validação representativa
com atletas e outros treinadores. Por isso a recomendação não é escolher
funcionalidades: é fechar três lacunas curtas antes do P2.

**Principais achados:**

1. O esporte difere do indoor de formas que podem importar ao produto: quatro
   atletas em quadra, dois sets de 10 minutos, `shoot-out` no empate, gols em
   aéra com valor dobrado e goleiro que pode atacar [F03]. As regras foram
   atualizadas em abril de 2026 [F02]. VER-D.
2. Há evidência científica delimitada sobre saúde e carga: lesões concentradas
   em membros inferiores e por sobrecarga [F05] [F06] [F07] e esforço
   intermitente com uma aceleração a cada 23 a 27 segundos [F03]. VER-D, de
   contextos sobretudo europeus e amostras pequenas.
3. O circuito brasileiro tem várias categorias, equipes de vários estados e
   etapas em cidades diferentes [F11] ([P1-EV-F11-003](#p1-ev-f11-003)). Isso
   sugere carga de logística e de informação para clubes e base, mas a rotina
   real é INF.
4. A maior parte das necessidades parte do treinador, enquanto o atleta aparece
   como fonte de dados (E06). Só uma necessidade é específica do atleta, o que
   aponta falta da voz do atleta, não ausência de necessidades.
5. Dois eixos atravessam vários problemas: registrar o que acontece (PRB-01) e
   manter o histórico do atleta ao longo do tempo (OPP-04). INF.
6. Fornecedores descrevem sistemas de estatística e cronometragem de handebol de
   praia [F12], aplicativo de `scouting` de vôlei de praia com modo offline
   declarado [F13] e plataforma de análise de handebol [F14]. Suas funções são
   declaradas comercialmente; nenhuma foi testada ou teve eficácia comprovada
   nesta investigação. Compará-las é trabalho do P2.
   [P1-EV-F12-001](#p1-ev-f12-001) [P1-EV-F13-001](#p1-ev-f13-001)
   [P1-EV-F14-001](#p1-ev-f14-001).

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
pelo responsável (Q-01, no E08). As reportagens de 2025 distinguem as categorias
infantil, cadete, júnior e adulto na etapa final do Circuito Brasileiro, e
juvenil e adulto na Copa Brasil; não demonstram que todas estiveram em cada
evento [F11].

**Atletas:**

| ID    | Perfil                                                         | Objetivo dominante                                          | Contexto e rotina                                          | Evidência                                         |
| ----- | -------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------- |
| ATL-1 | Atleta de seleção ou alto rendimento                           | Desempenho máximo em competições nacionais e internacionais | Preparação por ciclos, calendário internacional            | VER-D: competições IHF existem [F02]. Rotina: INF |
| ATL-2 | Atleta de clube no circuito nacional (adulto, júnior, juvenil) | Competir e evoluir ao longo das etapas                      | Etapas em cidades distintas, com equipes de vários estados | VER-D: estrutura do circuito [F11]. Rotina: INF   |
| ATL-3 | Atleta de base (infantil, cadete, juvenil)                     | Desenvolvimento técnico e físico, progressão de categoria   | Idade escolar; menores de idade (atenção a dados pessoais) | VER-D: categorias existem [F11]. Objetivo: INF    |
| ATL-4 | Atleta que alterna indoor e praia                              | Manter desempenho e saúde entre duas modalidades            | Praia muitas vezes concentrada na entressafra do indoor    | VER-D: [F06]. Rotina: INF                         |
| ATL-5 | Atleta recreativo ou amador                                    | Prática social, torneios locais                             | Sem informação nas fontes                                  | HIP                                               |

Dentro de cada segmento há diferenças por função em quadra (por exemplo, goleiro
e especialista). O estudo europeu [F05] encontrou diferenças de incidência de
lesões por posição, com defensores centrais e especialistas no topo; VER-D
apenas para aquela amostra.

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
- A edição oficial IHF de 1.º de abril de 2026 estabelece aplicabilidade a ambos
  os sexos (exceto tamanho da bola) e punições individuais, não faltas coletivas
  [F01]. VER-D. [P1-EV-F01-001](#p1-ev-f01-001).
- As regras da IHF para handebol de praia mudaram em 1.º de abril de 2026: jogo
  passivo, ações antidesportivas nos segundos finais, chute na cabeça do goleiro
  e equipamentos [F02]. VER-D.
- O circuito da CBHb reúne equipes de vários estados em etapas sediadas em
  cidades diferentes, e uma atleta entrevistada em reportagem de 05/11/2025
  relata que sua preparação começou após a divulgação do calendário [F11]. VER-D
  quanto à declaração específica; extrapolação para todos os clubes: INF.
  [P1-EV-F11-002](#p1-ev-f11-002).

| Fase                                                       | O que o atleta faz                                          | O que o treinador faz                                                                      | Evidência                                                                                       |
| ---------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 1. Planejamento da temporada                               | Conhece calendário, metas e função                          | Define grupo, metas, ciclos e etapas-alvo                                                  | Calendário inicial: VER-D [F11]. Resto: INF                                                     |
| 2. Preparação (treinos na areia, em quadra ou em academia) | Treina técnica, força, resistência e gestos específicos     | Planeja e conduz sessões; avalia o grupo                                                   | Demanda intermitente: VER-D [F03]. Rotina: INF                                                  |
| 3. Pré-competição                                          | Confirma inscrição e deslocamento; descansa                 | Inscreve equipe e atletas; confere regras vigentes; estuda adversários; organiza logística | Regras: VER-D [F02]. Etapas em outros estados: VER-D [F11]. Resto: INF                          |
| 4. Dia de jogo e torneio                                   | Aquece, hidrata-se, joga vários jogos e recupera entre eles | Define escalação e trocas, usa tempo técnico, ajusta entre sets, registra o jogo           | Formato e tempo técnico: VER-D [F03] [F01]. Calor e hidratação: HIP (F08 não prova causalidade) |
| 5. Pós-jogo e pós-torneio                                  | Recupera-se; comunica dores e lesões                        | Revisa o jogo, dá retorno, registra lesões, ajusta o plano                                 | 61% das lesões em estudo espanhol ocorreram em competição [F07]. Resto: INF                     |
| 6. Entressafra e transição entre modalidades               | Alterna com o indoor; retorna de lesão                      | Reavalia o elenco; reconvoca; planeja a transição                                          | Praia costuma ocorrer na entressafra do indoor: VER-D [F06]. Resto: INF                         |

O ciclo recomeça após a fase 6. Lacunas conhecidas, todas HIP: frequência e
local dos treinos, como equipes sem estrutura se comunicam, como o grupo é
convocado e que registros existem hoje. Elas alimentam Q-02 e Q-09 no E08.

<a id="p01-e03"></a>

## E03 — Inventário de problemas

Foram identificados 14 problemas. O responsável registrou observações pessoais
para PRB-01 a PRB-14 em Q-09; essas declarações documentam sua experiência, sem
estabelecer prevalência entre usuários brasileiros. As fontes públicas verificam
sobretudo contexto (riscos, demandas, regras e estrutura competitiva). Cada
linha distingue fato, inferência e hipótese. A relevância é preliminar e
qualitativa (Alta, Média ou A validar), sem pontuação numérica. Problemas não
são funcionalidades: um problema listado não obriga o produto a tratá-lo.

| ID     | Público           | Contexto e descrição                                                                                                                                                                                                                                                                                                                                        | Consequência                                                                | Origem e evidência                                                                                                                                                                                                                                                                                                   | Relev. prel. |
| ------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| PRB-01 | TRE-1 a 3         | Jogo e treino: registrar o que ocorre em jogos curtos, intermitentes, ao ar livre e na areia, sem perder o foco da condução do jogo                                                                                                                                                                                                                         | Análise posterior incompleta; decisões baseadas na memória                  | INF. Pesquisa [F09] analisou nove partidas (559 arremessos), e fornecedor [F12] descreve `software` dedicado ao esporte (VER-D para pesquisa; declaração comercial para ferramenta). Não demonstram, por si, como treinadores brasileiros registram. [P1-EV-F09-001](#p1-ev-f09-001) [P1-EV-F12-001](#p1-ev-f12-001) | Alta         |
| PRB-02 | TRE               | Interpretar eficiência de ataque com pontuação diferenciada: gols de aérea valem o dobro [F03], então gols totais e percentual de arremesso, vindos do indoor, podem não refletir a produção de pontos                                                                                                                                                      | Escolhas de arremessadores e tática mal calibradas                          | VER-D da regra [F03]; que as métricas do indoor distorcem é INF. Eficiência de arremesso foi mensurada [F09] em nove partidas; não foi testada a suposta distorção de métricas de indoor. [P1-EV-F09-002](#p1-ev-f09-002)                                                                                            | Média        |
| PRB-03 | TRE-1 a 4, ATL    | Gerir carga em esporte intermitente: uma aceleração a cada 23 a 27 s [F03]; em nove atletas espanholas de elite, 62,82 ± 14,73% do tempo de jogo acima de 80% da FC máxima [F04]. Faltam referências: a literatura diz que o conhecimento sobre as demandas é baixo [F03] mas [F04] não comprova falta de monitoramento nas equipes brasileiras             | Treino e recuperação ajustados sem referência; sobrecarga ou subcarga (INF) | VER-D na amostra espanhola para as demandas; VER-A para extrapolação e síntese de [F10]. Falta de monitoramento no Brasil: HIP. [P1-EV-F04-001](#p1-ev-f04-001) [P1-EV-F04-002](#p1-ev-f04-002) [P1-EV-F10-001](#p1-ev-f10-001)                                                                                      | Alta         |
| PRB-04 | ATL, TRE          | Lesões comuns, sobretudo em membros inferiores e por sobrecarga. Estudo espanhol: 54,2% em membros inferiores, 23,7% em isquiotibiais, 26,3% com dor crônica por lesão recorrente [F07]. Mais torneios por ano e mais meses de prática se associam a mais lesões [F06]. Em campeonato europeu, 49,3 lesões com afastamento por 1.000 horas de jogo [F05]    | Afastamento, dor crônica, queda de desempenho                               | VER-D. Definições de lesão diferem entre estudos [F05] [F06]; não comparáveis diretamente. Quanto ao papel do produto na prevenção: HIP. Estudo europeu complementar [F08] (122 atletas; retrospectivo): [P1-EV-F08-001](#p1-ev-f08-001)                                                                             | Alta         |
| PRB-05 | TRE, `staff`, ATL | Histórico de lesões e retorno ao jogo fragmentado: estudos dependem de relato do próprio atleta por questionário [F07], e uma pesquisa com 651 atletas não pôde separar lesões de indoor e de praia [F06]                                                                                                                                                   | Decisões de retorno sem histórico; recorrência                              | INF, a partir de VER-D sobre os métodos dos estudos. Prática das equipes brasileiras: sem evidência                                                                                                                                                                                                                  | Média        |
| PRB-06 | ATL-4, TRE-4      | Carga acumulada entre indoor e praia: a sobrecarga pode ter nascido no indoor e aparecer na praia [F06]. A prática de praia na entressafra se associou, em outro estudo, a menos lesões no indoor, citado em [F06]; o problema é a falta de visão da carga total, não a praia                                                                               | Sobrecarga não percebida (INF)                                              | VER-D parcial [F06]; ninguém ver a carga total é INF                                                                                                                                                                                                                                                                 | Média        |
| PRB-07 | ATL, TRE          | Calor e hidratação em torneios com jogos consecutivos. O estudo de lesões [F08] menciona desidratação e calor na discussão como fatores possíveis, sem medi-los nem demonstrar causalidade. Uma revisão da EHF consta da bibliografia de [F08], mas não foi conferida como fonte autônoma; não manter número de jogos ou taxa de desidratação sem evidência | Queda de desempenho e risco à saúde (HIP)                                   | HIP para efeito de calor e desidratação nesta população; [F08] não oferece teste direto; análise de contexto adicional em [F10]. [P1-EV-F08-002](#p1-ev-f08-002)                                                                                                                                                     | Média        |
| PRB-08 | TRE, ATL          | Acompanhar mudanças de regras. Desde 1.º de abril de 2026 há novas regras para jogo passivo (até quatro passes após o aviso), sanção nos 15 segundos finais, chute na cabeça do goleiro e equipamentos [F02]                                                                                                                                                | Punições evitáveis e perda de posse (INF)                                   | VER-D de que as regras mudaram; que equipes ficam desalinhadas é INF                                                                                                                                                                                                                                                 | Média        |
| PRB-09 | TRE               | Preparar o jogo contra adversários em um circuito com dezenas de equipes de vários estados (59 equipes previstas na etapa final de 2025 em João Pessoa) [F11], com pouca informação disponível sobre cada uma                                                                                                                                               | Preparação baseada em memória ou vídeo informal (HIP)                       | HIP. O fornecedor [F14] afirma, sem evidência independente, que os dados do handebol têm baixa qualidade. A notícia de [F11] não atesta falta de dados sobre adversários. [P1-EV-F11-001](#p1-ev-f11-001) [P1-EV-F14-001](#p1-ev-f14-001) [P1-EV-F14-002](#p1-ev-f14-002)                                            | Média        |
| PRB-10 | TRE-2, TRE-3      | Logística e burocracia de competição: eventos em cidades distintas descritos em [F11]; o fornecedor [F12] declara que seu próprio sistema importa formulários de inscrição de associações. Isso não comprova exigências da CBHb nem repetição de cadastros em cada etapa                                                                                    | Retrabalho e erros de cadastro (INF)                                        | VER-D para os eventos noticiados; informações do sistema: fornecedor; repetição de dados: HIP. [P1-EV-F11-003](#p1-ev-f11-003) [P1-EV-F11-004](#p1-ev-f11-004) [P1-EV-F12-002](#p1-ev-f12-002)                                                                                                                       | Média        |
| PRB-11 | TRE-3, ATL-3      | Acompanhar a evolução do atleta entre categorias e temporadas. As categorias de base existem [F11]; não há fonte sobre como o histórico é mantido ou perdido                                                                                                                                                                                                | Perda de histórico ao trocar de clube ou categoria (HIP)                    | HIP sobre perda de histórico; VER-D apenas da existência de categorias em eventos de 2025. [P1-EV-F11-001](#p1-ev-f11-001). Envolve menores de idade                                                                                                                                                                 | A validar    |
| PRB-12 | ATL               | Receber retorno individual claro sobre o próprio desempenho e o que melhorar                                                                                                                                                                                                                                                                                | Evolução mais lenta; desmotivação (HIP)                                     | HIP, sem fonte                                                                                                                                                                                                                                                                                                       | A validar    |
| PRB-13 | TRE               | Decidir e comunicar durante o jogo: dois sets de 10 minutos e tempo técnico [F03] [F01] deixam pouca janela; o ambiente aberto pode dificultar a comunicação                                                                                                                                                                                                | Ajustes tardios ou não comunicados (HIP)                                    | HIP para dificuldade de comunicação; VER-D para períodos e tempo técnico na edição de 2026 [F01]. [P1-EV-F01-001](#p1-ev-f01-001)                                                                                                                                                                                    | A validar    |
| PRB-14 | TRE-2, TRE-5, ATL | Coordenar treinos e presença do grupo, dependentes de areia disponível, clima e horários                                                                                                                                                                                                                                                                    | Treinos esvaziados; falta de continuidade (HIP)                             | HIP, sem fonte                                                                                                                                                                                                                                                                                                       | A validar    |

<a id="p01-respostas-davi"></a>

## RESPOSTAS DAVI SERMENHO

Davi Sermenho é o de responsável pelo produto e treinador/gestor técnico
(atuando na liderança da investigação de problemas, necessidades e oportunidades
— etapas P0, P1 e P2).

### PRB-01 — Registro tático na areia

1. **Observação direta:** Você já vivenciou a dificuldade de anotar e registrar
   dados táticos ou estatísticos durante os jogos ou treinos ao ar livre?

   - Sim

2. **Situação (X):** Em qual torneio, etapa ou condição climática (ex.: sol
   forte, vento, chuva) isso ocorreu?

   - **(Pelo Clube):** Em razão de a comissão técnica ser composta por apenas um
     treinador, os registros táticos e estatísticos não são realizados em nenhum
     treino, etapa ou torneio. Devido ao grande volume de atribuições sob
     responsabilidade do treinador, outras demandas tornam-se prioritárias. Essa
     limitação independe dos fatores climáticos, uma vez que as regras oficiais
     estabelecem a viabilidade de realização das partidas sob tais condições.
   - **(Pela Seleção):** A dificuldade no registro de dados táticos ou
     estatísticos durante treinos e jogos ao ar livre é virtualmente
     inexistente. A comissão técnica conta com um analista de desempenho
     dedicado exclusivamente a essa atribuição, o qual pode atuar sem restrições
     climáticas. Diferente do treinador, do auxiliar técnico e do
     fisioterapeuta, o analista não precisa permanecer à beira da quadra,
     podendo se abrigar das intempéries sem ter seu trabalho afetado.

3. **Frequência (Y):** Isso acontece em todos os jogos, apenas em partidas
   decisivas ou raramente?

   - **(No Clube):** Essa limitação para tomar notas e compilar dados táticos ou
     estatísticos em treinos e partidas ao ar livre é constante. Ela ocorre
     tanto em confrontos decisivos quanto em jogos comuns e sessões de treino,
     já que é inviável instruir, monitorar e analisar o desempenho das atletas
     e, simultaneamente, efetuar os registros táticos.
   - **(Na Seleção):** Por outro lado, o entrave para registrar dados táticos e
     estatísticas durante atividades e partidas ao ar livre é virtualmente
     inexistente, ocorrendo apenas em cenários pontuais e excepcionais, como:
     - Falha total de equipamentos eletrônicos sob tempestade severa:
       **Exemplo:** Uma súbita tempestade com raios e ventos destrutivos que
       obrigue a interrupção imediata da partida e a retirada às pressas da
       comissão técnica e dos equipamentos sensíveis (laptops, câmeras e tripés)
       para uma área totalmente coberta, suspendendo temporariamente a captação
       de imagens por alguns minutos até a realocação.
     - Queda de energia na arena ou falha na rede de transmissão interna:
       **Exemplo:** Em jogos oficiais de grande porte transmitidos por
       streaming, se houver um blecaute total na estrutura provisória da arena
       que afete as fontes de alimentação das baterias dos equipamentos de
       vídeo, forçando o analista a registrar dados manualmente em papel por um
       curto intervalo até o restabelecimento do sistema.
     - Visibilidade severamente comprometida por intempéries extremas:
       **Exemplo:** Uma rajada de vento atípica carregada de areia (um vendaval
       na praia) que atinja diretamente as lentes das câmeras principais
       posicionadas nas torres elevadas, exigindo que o operador desça para
       limpar ou reposicionar o equipamento durante o andamento de um set.
     - Fora essas exceções físicas e operacionais de grande impacto, na Seleção
       o trabalho do analista transcorre sem os gargalos diários enfrentados por
       equipes de clube, onde o treinador precisa acumular a função de comandar
       a equipe e tentar anotar dados simultaneamente.

---

### PRB-02 — Distorção de estatísticas de ataque (gols de aérea)

1. Observação direta: Você já percebeu que avaliar uma equipe ou atleta apenas
   pelo percentual de arremessos do indoor gera escolhas táticas erradas por não
   considerar o valor dobrado dos gols de aérea?

   - Sim. Avaliar uma equipe ou atleta apenas pelo total de gols ou percentual
     bruto de arremessos gera escolhas táticas erradas, pois desconsidera que,
     no handebol de praia, o gol de aérea, o gol de giro e o gol do
     especialista, vale o dobro (2 pontos).

2. Situação (X): Em qual jogo ou momento da competição essa leitura distorcida
   prejudicou a tomada de decisão?

   - Em uma partida decisiva do campeonato nacional, a comissão técnica
     valorizou um arremessador de tiro de 7 metros ou da linha de 6m com base
     apenas no volume de gols acumulados, enquanto o atleta especialista em
     aéreas — que decidia o placar com menos arremessos, mas com pontuação
     dobrada — acabou subutilizado nas jogadas finais."

3. Frequência (Y): Com que frequência essa distorção de dados afeta o
   planejamento tático?

   - Isso ocorre com frequência recorrente em torneios onde as planilhas
     estatísticas e súmulas não ponderam automaticamente o peso real da
     pontuação diferenciada. Além disso, as súmulas não são divulgas pela
     confederação brasileira e as federações locais. Apenas a IHF faz essa
     divulgação.

---

### PRB-03 — Gestão de carga e exaustão física

1. Observação direta: Você já presenciou atletas com queda drástica de
   rendimento ou sinais de exaustão por falta de monitoramento adequado de carga
   no esporte intermitente?

   - Sim. Em torneios curtos e intensos com múltiplos jogos no mesmo dia (ex.:
     3.º ou 4.º jogo), a queda acentuada de rendimento físico e técnico é
     claramente perceptível sem a devida gestão de rotação e carga.

2. Situação (X): Em qual fase da temporada ou torneio específico (ex.: 3º ou 4º
   jogo do dia) essa exaustão ficou evidente?

   - Etapas do circuito estadual do Rio de Janeiro: 8 equipes divididas em 2
     grupos → semi final → final. Total de 5 jogos corridos por equipes em um
     único dia. Jogos alternados por naipes (masculino e feminino), sem pausa
     para almoço ou lanche. Início 8:00 término 16h.
   - Circuito Brasileiro de Handebol de Praia, último dia de competição: último
     jogo do main round → semifinal → final. os 3 jogos mais desgastantes
     ocorrem no último dia, também com alternância entre os naipes, porém a
     distância entre semifinal e final é mais curta pois só existe 1 jogo de
     “descanso” (disputa de 3º e 4º).
   - Durante a disputa de fases decisivas (main-round, semifinais e finais) os
     atletas apresentaram queda vertiginosa nas frequências de salto e sprints
     no 2.º set e shoot-out.

3. Frequência (Y): Com que frequência a falta de controle de carga compromete o
   desempenho do grupo?

   - Ocorre com frequência alta em equipes de clube sem comissão técnica ampla
     ou sem ferramentas de controle de carga interna/externa, impactando a
     consistência das equipes do início ao fim das etapas.

---

### PRB-04 — Incidência de lesões em membros inferiores

1. **Observação direta:** Você já observou atletas sofrendo lesões recorrentes
   (ex.: isquiotibiais, tornozelos) ou dores crônicas associadas ao acúmulo de
   torneios?

   - Sim. As lesões e dores crônicas nos membros inferiores ocorrem com
     frequência em razão de colisões físicas após bloqueios aéreos e quedas
     desequilibradas sobre as pernas e pés do atacante após a finalização.

2. **Situação (X):** Qual foi o caso mais marcante de lesão ou afastamento
   registrado na sua equipe ou circuito?

   - O caso mais marcante envolveu atletas de ataque e defesa após disputas
     aéreas na linha de 6 metros, resultando em quedas com impacto direto sobre
     os membros inferiores e afastamento das quadras.

3. **Frequência (Y):** Com que frequência lesões decorrentes de sobrecarga
   afetam o grupo por temporada?

   - Acontece com frequência constante ao longo de todas as temporadas, sendo um
     risco inerente às disputas intensas de bloqueio aéreo e aterrissagens em
     contato físico na areia.

---

### PRB-05 — Fragmentação do histórico de lesões

1. Observação direta: Você já teve dificuldades em autorizar o retorno de um
   atleta ao jogo por não ter um histórico clínico/físico estruturado,
   dependendo apenas do relato verbal do atleta?

   - Sim. Há dificuldades em gerenciar o histórico clínico e o retorno seguro
     dos atletas à quadra devido à ausência de um sistema integrado de dados
     físicos e médicos, o que muitas vezes obriga a comissão a depender apenas
     do relato verbal do próprio atleta.

2. Situação (X): Em qual momento a ausência desse histórico gerou incerteza ou
   precipitação no retorno?

   - Ocorre com frequência quando um atleta retorna de um período de recuperação
     e relata estar "pronto para jogar", mas a comissão técnica e o departamento
     médico carecem de métricas objetivas ou de um prontuário unificado para
     cruzar a carga de treinos e o histórico da lesão anterior.

3. Frequência (Y): Com que frequência você lida com atletas sem histórico médico
   consolidado?

   - Acontece de forma recorrente ao longo da temporada, especialmente em
     equipes que não contam com suporte multidisciplinar permanente ou
     plataformas centralizadas de saúde esportiva.

---

### PRB-06 — Sobrecarga na transição indoor/praia

1. Observação direta: Você já observou atletas chegando para a temporada de
   areia já lesionados ou sobrecarregados do piso rígido da quadra?

   - Sim. Atletas que transitam diretamente do piso rígido da quadra para a
     areia frequentemente apresentam sobrecarga física ou sinais de desgaste
     acumulado, pois o volume de treinos e jogos em pisos diferentes nem sempre
     é gerido de forma integrada entre as modalidades.

2. Situação (X): Em qual período do ano ou campeonato essa transição entre
   quadra e areia mais causou problemas?

   - Ocorre principalmente no início da temporada de praia ou durante a
     entressafra, quando os atletas encerram o calendário competitivo indoor e
     iniciam imediatamente os treinamentos na areia, acumulando o impacto
     articular anterior com as novas exigências de esforço na superfície
     instável.

3. Frequência (Y): Isso é um problema recorrente a cada mudança de temporada?

   - Acontece de forma recorrente a cada mudança de temporada, afetando o
     planejamento físico dos atletas que acumulam duplas jornadas ou transições
     rápidas entre as duas modalidades.

---

### PRB-07 — Calor extremo e hidratação

1. Observação direta: Além do caso de Niterói-RJ, você observou outros episódios
   de desidratação ou risco térmico?

   - Sim. Episódios de estresse térmico, queda acentuada de rendimento e
     desidratação severa ocorrem frequentemente quando jogos consecutivos são
     agendados nos horários de pico solar sem a devida infraestrutura de
     resfriamento da areia.

2. Situação (X): Em quais outras etapas ou locais o calor extremo prejudicou a
   saúde/desempenho?

   - Além do evento de Niterói-RJ (temperatura \> 40°C e paralisação), em etapas
     do Circuito Brasileiro realizadas em regiões de clima tropical úmido, a
     falta de irrigação periódica da areia causou bolhas nos pés dos atletas e
     tonturas em partidas disputadas entre 11h e 14h.

3. Frequência (Y): Com que frequência o calor e a falta de infraestrutura para
   resfriar a areia impactam os torneios?

   - Ocorre com frequência alta durante as etapas de verão e primavera no
     circuito nacional e estadual, impactando diretamente o bem-estar e a
     integridade física dos atletas.

---

### PRB-08 — Desalinhamento com novas regras da IHF

1. Observação direta: Sua equipe ou adversários já foram penalizados ou
   prejudicados por desatualização em relação às mudanças recentes de regras
   (ex.: jogo passivo, sanções finais)?

   - Sim. Equipes e comissões técnicas frequentemente demonstram desalinhamento
     com as atualizações recentes de regras da IHF, resultando em punições
     evitáveis e perda de posse de bola em momentos cruciais.

2. Situação (X): Em qual partida ou torneio ocorreu um lance decisivo afetado
   por essa falta de alinhamento?

   - Durante os 15 segundos finais de uma partida eliminatória do Circuito
     Brasileiro, a equipe cometeu uma falta tática sem o devido conhecimento da
     gravidade das novas sanções disciplinares diretas da IHF, resultando em
     tiro de 7 metros decisivo para o adversário.

3. Frequência (Y): Com que frequência as atualizações de regras causam confusão
   na quadra?

   - Acontece com frequência média, concentrando-se principalmente nas primeiras
     etapas após a publicação oficial de novas diretrizes pela IHF.

---

### PRB-09 — Preparação contra adversários desconhecidos

1. Observação direta: Você já precisou definir a estratégia de um jogo decisivo
   sem nenhuma informação ou estatística prévia do adversário, baseando-se
   apenas na memória ou em vídeos informais?

   - Sim. A falta de banco de dados ou estatísticas consolidadas obriga os
     treinadores a estruturar planos de jogo contra equipes de outros estados de
     forma totalmente empírica.

2. Situação (X): Em qual etapa ou circuito com grande quantidade de equipes essa
   falta de dados ocorreu?

   - Nas fases classificatórias do Circuito Brasileiro, com mais de 50 equipes
     participantes, o confronto contra adversários de polos distantes ocorreu
     sem qualquer padrão tático conhecido previamente.

3. Frequência (Y): Com que frequência você enfrenta equipes sem histórico de
   dados disponível?

   - Ocorre com frequência alta em âmbito nacional e regional devido à ausência
     de repositórios centrais de dados estatísticos de partidas.

---

### PRB-10 — Burocracia e retrabalho logístico

1. Observação direta: Você ou sua comissão técnica já perderam tempo excessivo
   preenchendo fichas repetitivas de inscrição e dados de atletas a cada etapa?

   - Sim. O preenchimento manual e redundante de cadastros para federações e
     confederação consome tempo que deveria ser destinado ao preparo técnico e
     tático.

2. Situação (X): Em qual competição o acúmulo de burocracia logística mais gerou
   retrabalho ou erros cadastrais?

   - Na transição de etapas intermunicipais, em que cada federação local exige
     formulários em formatos próprios, levando a erros na emissão de súmulas
     oficiais.

3. Frequência (Y): Isso acontece em todas as etapas do circuito ou apenas em
   eventos específicos?

   - Acontece em todas as etapas do circuito de clubes que exigem validação
     cadastral presencial ou em sistemas legados desintegrados.

---

### PRB-11 — Perda de histórico na transição de categorias

1. Observação direta: Você já observou a perda total de registros de desempenho
   e histórico físico quando atletas migram das categorias de base
   (cadete/juvenil) para a adulta?

   - Sim. Não existe acompanhamento longitudinal de dados longitudinal entre
     categorias de base e a categoria adulta, fazendo com que métricas físicas e
     técnicas sejam reiniciadas a cada mudança.

2. Situação (X): Cite um exemplo de atleta cuja transição foi dificultada pela
   falta desse histórico prévio.

   - Atletas promovidos da equipe juvenil para a adulta sem registro de volume
     de carga acumulado e histórico de lesões, resultando em sobrecarga precoce
     na pré-temporada.

3. Frequência (Y): Com que frequência essa descontinuidade de dados ocorre na
   formação dos atletas?

   - Ocorre de forma constante a cada ciclo anual de transição de faixa etária
     dos atletas nas equipes de base.

---

### PRB-12 — Ausência de retorno (feedback) individual

1. Observação direta: Você já percebeu desmotivação ou evolução mais lenta em
   atletas devido à falta de relatórios e retornos individuais claros sobre o
   desempenho deles?

   - Sim. A ausência de estatísticas individuais periódicas dificulta o
     alinhamento de expectativas e a evolução focada dos atletas da equipe.

2. Situação (X): Em qual momento da temporada a falta de feedback estruturado
   causou ruído ou insatisfação?

   - Ao final de etapas decisivas, quando cortes ou substituições na equipe
     titular precisam ser feitos sem embasamento de dados quantitativos de
     eficiência individual.

3. Frequência (Y): Com que frequência a rotina da equipe impede a entrega de
   feedbacks individuais?

   - Acontece com frequência recorrente em clubes sem equipe analítica dedicada.

---

### PRB-13 — Dificuldade de comunicação em jogo

1. Observação direta: Você já teve orientações táticas frustradas ou não
   comunicadas durante o jogo devido à curta duração dos sets (10 min), barulho
   da torcida ou vento?

   - Sim. O tempo exíguo dos sets e fatores ambientais comprometem severamente a
     passagem de instruções da comissão técnica durante as partidas.

2. Situação (X): Em qual partida decisiva a janela de tempo técnico foi
   insuficiente para ajustar a equipe?

   - Em uma final de set decidida nos últimos 30 segundos, onde o vento forte e
     o barulho da arena impediram que a troca de posicionamento defensivo fosse
     compreendida a tempo.

3. Frequência (Y): Com que frequência o ambiente externo impede a comunicação
   tática eficiente?

   - Ocorre com frequência alta em todas as competições ao ar livre com grande
     presença de público e ruído ambiente.

---

### PRB-14 — Desafios de coordenação de treinos e logística

1. Observação direta: Você já enfrentou treinos esvaziados ou desgastes
   excessivos decorrentes de horários, disponibilidade de quadra de areia ou
   logística de alojamento/deslocamento nas etapas?

   - Sim. A escassez de infraestrutura adequada é um dos gargalos centrais na
     rotina das equipes. Principalmente durante os dias úteis no período noturno
     (após a jornada de trabalho e estudo dos atletas e comissão), torna-se
     extremamente difícil encontrar quadras de areia com as dimensões oficiais
     recomendadas para o handebol de praia e que contem com iluminação
     artificial apropriada. Essa limitação de horários e locais gera frequentes
     treinos esvaziados, baixa adesão do grupo e descontinuidade direta na
     preparação física e tática, afetando severamente o cumprimento de um
     cronograma de treinos contínuo e um planejamento estruturado para a
     temporada.

2. Situação (X): Em qual cidade ou torneio as limitações de infraestrutura e
   hospedagem mais impactaram a rotina da equipe?

   - Em etapas disputadas fora dos grandes centros urbanos — como em São Miguel
     do Iguaçu (onde as acomodações se assemelhavam a um motel), Paranaguá e
     Cascavel, os longos e desgastantes deslocamentos entre o alojamento e a
     arena de jogo prejudicaram diretamente a rotina dos atletas, além de
     reduzirem o tempo disponível para aquecimento. Nesses locais, as partidas
     eram realizadas em campos de areia localizados em praças públicas. O
     impacto desses trajetos extensos em etapas distantes dos grandes centros
     refletiu-se no desgaste físico da equipe e no comprometimento da preparação
     pré-jogo.

3. Frequência (Y): Com que frequência a falta de infraestrutura de areia ou
   logística compromete a continuidade dos treinos?

   - Acontece de forma recorrente em equipes amadoras e semiprofissionais ao
     longo de toda a temporada. A indisponibilidade de locais adequados e a
     inconsistência na logística geram um impacto continuado na assiduidade dos
     atletas, prejudicando o ritmo de treino e o alinhamento tático do grupo.

**Nota de confronto normativo dos relatos humanos (16/11/2026):** no relato de
PRB-08 permanece a expressão “tiro de 7 metros”, conforme registrada pelo
responsável. A regra aplicável do handebol de praia (IHF, edição de 01/04/2026,
Regras 8:11 e 14:1) prevê **tiro de 6 metros** nas circunstâncias normativas
descritas. A descrição original não foi alterada; sem vídeo/súmula não é
possível reconstituir a sanção aplicada no episódio.
[P1-EV-F01-002](#p1-ev-f01-002).

<a id="p01-e04"></a>

## E04 — Inventário de necessidades

Os 14 problemas se traduzem em 12 necessidades, formuladas sem citar solução.
São necessidades derivadas (INF/PROPOSTA), não requisitos aprovados. Os relatos
do responsável em Q-09 documentam experiências próprias, mas não constituem
validação representativa com atletas e treinadores. Estrutura: "Quando
[contexto], o usuário precisa [objetivo], para [resultado]".

| ID     | Necessidade                                                                                                                                                                | Dificuldade atual                                                                       | Condição de satisfação                                                               | Origem                 |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------- |
| NEC-01 | Quando acompanha um jogo ou treino, o treinador precisa captar o que ocorreu com fidelidade suficiente, para analisar depois e decidir ajustes                             | Ritmo intermitente, ambiente aberto, atenção dividida com a condução do jogo            | O treinador consegue reconstituir os fatos relevantes do jogo sem ter perdido o jogo | PRB-01                 |
| NEC-02 | Quando avalia a eficiência de atletas e da equipe, o treinador precisa de uma leitura coerente com a pontuação do handebol de praia, para escolher tática e arremessadores | Métricas herdadas do indoor ignoram gols de aérea e outras particularidades             | A leitura de eficiência reflete a pontuação real e é compreendida pelo treinador     | PRB-02                 |
| NEC-03 | Quando planeja treinos e torneios com vários jogos, o treinador precisa conhecer a carga que o grupo suporta, para ajustar treino e recuperação                            | Literatura de amostras pequenas; acesso ao monitoramento pelas equipes não quantificado | O treinador decide carga e descanso com informação em que confia                     | PRB-03, PRB-06         |
| NEC-04 | Quando um atleta tem risco de lesão ou volta de uma, o treinador e o atleta precisam do histórico e da situação atual, para decidir prevenção, uso em jogo e retorno       | Histórico disperso entre pessoas, modalidades e temporadas (INF)                        | A decisão de retorno e de prevenção considera o histórico completo do atleta         | PRB-04, PRB-05, PRB-06 |
| NEC-05 | Quando competem sob calor em jogos consecutivos, atletas e treinadores precisam manter hidratação e exposição sob controle, para preservar saúde e rendimento              | Pouca informação e pouca rotina estabelecida (HIP)                                      | Sem episódios evitáveis de queda por calor ou desidratação                           | PRB-07                 |
| NEC-06 | Quando as regras mudam, treinadores e atletas precisam saber o que mudou e o que isso exige, para adaptar treino, jogo e comportamento                                     | Mudanças dispersas em documentos técnicos, em outras línguas                            | A equipe aplica a regra vigente sem punição evitável                                 | PRB-08                 |
| NEC-07 | Quando prepara um jogo, o treinador precisa de informação sobre o adversário, para definir plano de jogo                                                                   | Pouca informação acessível sobre cada equipe (HIP)                                      | O treinador chega ao jogo com informação útil e confiável sobre o adversário         | PRB-09                 |
| NEC-08 | Quando inscreve e desloca a equipe para etapas, o treinador precisa cumprir exigências formais com pouco esforço, para dedicar tempo ao esporte                            | Repetição de dados e prazos (INF)                                                       | A inscrição e a documentação da etapa não consomem tempo desproporcional             | PRB-10                 |
| NEC-09 | Quando acompanha atletas ao longo das categorias, o treinador precisa de uma visão contínua da evolução, para orientar a formação                                          | Histórico perdido ao mudar de clube ou categoria (HIP)                                  | A evolução do atleta pode ser consultada ao longo de temporadas                      | PRB-11                 |
| NEC-10 | Quando quer melhorar, o atleta precisa de retorno claro sobre o próprio desempenho, para saber o que fazer diferente                                                       | Retorno depende da disponibilidade do treinador (HIP)                                   | O atleta entende o que melhorou, o que não e o próximo passo                         | PRB-12                 |
| NEC-11 | Quando conduz o jogo nos tempos curtos entre posses, sets e tempos técnicos, o treinador precisa decidir e comunicar rapidamente, para ajustar a equipe a tempo            | Pouca janela e ambiente ruidoso (HIP)                                                   | Os ajustes chegam aos atletas dentro da janela disponível                            | PRB-13                 |
| NEC-12 | Quando organiza treinos e convoca o grupo, o treinador precisa saber quem vem, onde e quando, para manter continuidade                                                     | Dependência de clima, areia e disponibilidade (HIP)                                     | O grupo se reúne com previsibilidade e o treinador sabe quem está disponível         | PRB-14                 |

<a id="p01-e05"></a>

## E05 — Mapa de oportunidades de melhoria

Foram mapeadas 13 oportunidades. São direções de melhoria (PROPOSTA), escritas
sem definir funcionalidade, tecnologia ou ferramenta, e nenhuma está aprovada no
escopo. A coluna "Condição ou risco" diz o que precisa ser verdade para a
oportunidade valer a pena.

| ID     | Tipo                          | Oportunidade                                                                                                             | Necessidades                         | Por que importa                                                                                                                                                                                                                                  | Condição ou risco                                                                                             |
| ------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| OPP-01 | Simplificação                 | Reduzir o esforço de registrar o que acontece em jogo e treino, em condições adversas (sol, areia, pressa)               | NEC-01                               | O registro é porta de entrada para análise, retorno ao atleta e preparação de adversário                                                                                                                                                         | Só vale se hoje o registro for escasso ou custoso (Q-02)                                                      |
| OPP-02 | Melhor decisão                | Ler desempenho com critérios nativos do handebol de praia (pontuação, funções, sets), em vez de adaptar o indoor         | NEC-02, NEC-01                       | É onde o esporte difere do indoor [F03] e pode ser diferencial                                                                                                                                                                                   | Depende de definir com o responsável quais indicadores importam                                               |
| OPP-03 | Decisão e personalização      | Dar visão de carga e recuperação sem exigir equipamento caro                                                             | NEC-03                               | A carga é o fio que liga desempenho e lesão [F03] [F06]                                                                                                                                                                                          | Não pressupõe sensores nem serviços pagos (P0, princípio 10); valor depende do que a equipe consegue medir    |
| OPP-04 | Continuidade de informação    | Manter o histórico do atleta através de modalidades, categorias e temporadas                                             | NEC-04, NEC-09, NEC-03               | Histórico fragmentado é um problema transversal (PRB-05, PRB-06, PRB-11)                                                                                                                                                                         | Dados de saúde e de menores exigem cuidado de privacidade desde a concepção                                   |
| OPP-05 | Eliminação de retrabalho      | Reaproveitar dados de equipe e atletas em inscrições e documentos de competição                                          | NEC-08                               | Há custos e deslocamentos relatados em competições de 2025 [F11]; a repetição de cadastros a cada etapa segue HIP. [P1-EV-F11-004](#p1-ev-f11-004)                                                                                               | Depende de como CBHb e federações recebem as informações (Q-07)                                               |
| OPP-06 | Aprendizagem                  | Manter treinadores e atletas atualizados sobre regras vigentes                                                           | NEC-06                               | As regras mudaram em abril de 2026 [F02] e mudarão de novo                                                                                                                                                                                       | Exige conteúdo confiável e atualizado; risco de ficar desatualizado                                           |
| OPP-07 | Melhor decisão                | Apoiar ajustes em janelas curtas de jogo                                                                                 | NEC-11                               | Dois sets de 10 minutos deixam pouco tempo [F03]                                                                                                                                                                                                 | Hipótese; pode ser mais barata resolver sem tecnologia (Q-04)                                                 |
| OPP-08 | Aprendizagem e personalização | Dar ao atleta retorno individual compreensível                                                                           | NEC-10                               | Aproxima o atleta do próprio desenvolvimento                                                                                                                                                                                                     | Depende de haver dados confiáveis (OPP-01); risco de sobrecarregar o treinador                                |
| OPP-09 | Coordenação                   | Facilitar a combinação de treinos, presença e convocação                                                                 | NEC-12                               | Grupos amadores e pequenos perdem continuidade (HIP)                                                                                                                                                                                             | Muitas ferramentas genéricas já existem; diferencial incerto                                                  |
| OPP-10 | Personalização                | Orientar sobre calor, hidratação e exposição em torneios                                                                 | NEC-05                               | Torneios têm jogos consecutivos ao ar livre                                                                                                                                                                                                      | F08 foi conferida e não comprova causalidade térmica; requer evidência específica antes de orientação clínica |
| OPP-11 | Novas formas de gerar valor   | Preparar adversários com informação que a própria comunidade já produz                                                   | NEC-07                               | Uma etapa final do circuito em João Pessoa previa 59 equipes de nove estados em 2025 [F11]. [P1-EV-F11-001](#p1-ev-f11-001)                                                                                                                      | Hipótese. Compartilhar dados entre equipes concorrentes exige aceitação e regras claras                       |
| OPP-12 | Redução de barreiras          | Baixa barreira de uso em contextos de poucos recursos: ao ar livre, sem estrutura, com pouco tempo                       | Transversal (NEC-01, NEC-08, NEC-12) | O fornecedor de Beach Data 2.0 declara uso offline e posterior sincronização para vôlei de praia [F13] (VER-A da solução análoga); isso não demonstra problemas de conectividade em arenas de handebol de praia. [P1-EV-F13-001](#p1-ev-f13-001) | Depende de Q-03 (conectividade e dispositivos nos locais)                                                     |
| OPP-13 | Novas formas de gerar valor   | Gerar conhecimento local sobre o handebol de praia brasileiro, onde a literatura vem em grande parte de outros contextos | NEC-02, NEC-03                       | A revisão de 2024 descreve pesquisas ainda limitadas [F10]; [F04] examina nove atletas espanholas. A escassez específica de estudos brasileiros não foi quantificada [F03] [F04]. [P1-EV-F10-001](#p1-ev-f10-001)                                | Hipótese. Exige volume e qualidade de dados, e consentimento dos atletas                                      |

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
(PRB-04), carga (PRB-03) e registro do jogo (PRB-01). Os relatos do responsável
documentam experiências próprias, mas não estabelecem prevalência entre usuários
brasileiros. A prioridade combina consequências, recorrência provável e
evidência de contexto, sem pontuação numérica. Prioridade indica o que
investigar primeiro, não o que construir primeiro, e não é decisão de escopo.

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

Q-09 foi respondida pelo responsável em
[RESPOSTAS DAVI SERMENHO](#p01-respostas-davi), com observação, situação e
frequência para PRB-01 a PRB-14. Esse relato humano documentado sustenta a
ocorrência na experiência do responsável, mas não representa validação de todo o
público de atletas e treinadores.

<a id="p01-e09"></a>

## E09 — Matriz de rastreabilidade inicial

Cada problema leva a uma necessidade e a ao menos uma oportunidade; cada
necessidade aponta para ao menos um problema; cada oportunidade aponta para ao
menos uma necessidade. A cadeia termina em "oportunidade": decisão humana,
especificação e critério de aceitação ainda não existem para nenhum item.

| Problema | Usuário afetado              | Necessidade    | Oportunidade                  | Origem e evidência                                                                                                     |
| -------- | ---------------------------- | -------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| PRB-01   | TRE-1, TRE-2, TRE-3          | NEC-01         | OPP-01, OPP-02, OPP-12        | INF; [F09] [F12] [P1-EV-F09-001](#p1-ev-f09-001) [P1-EV-F12-001](#p1-ev-f12-001)                                       |
| PRB-02   | TRE-1, TRE-2                 | NEC-02         | OPP-02, OPP-13                | VER-D da regra [F03]; INF; [F09] [P1-EV-F09-002](#p1-ev-f09-002)                                                       |
| PRB-03   | TRE-1 a TRE-4, ATL-1 a ATL-4 | NEC-03         | OPP-03, OPP-13                | VER-D [F03] [F04]; HIP [P1-EV-F04-001](#p1-ev-f04-001) [P1-EV-F04-002](#p1-ev-f04-002) [P1-EV-F10-001](#p1-ev-f10-001) |
| PRB-04   | ATL-1 a ATL-4, TRE-1 a TRE-4 | NEC-04         | OPP-03, OPP-04                | VER-D [F05] [F06] [F07] [P1-EV-F08-001](#p1-ev-f08-001)                                                                |
| PRB-05   | TRE-1, TRE-2, `staff`, ATL   | NEC-04         | OPP-04                        | INF; [F06] [F07]                                                                                                       |
| PRB-06   | ATL-4, TRE-4                 | NEC-03, NEC-04 | OPP-03, OPP-04                | VER-D parcial [F06]; INF                                                                                               |
| PRB-07   | ATL, TRE                     | NEC-05         | OPP-10                        | HIP; [F08] discute hipóteses térmicas sem medi-las [P1-EV-F08-002](#p1-ev-f08-002)                                     |
| PRB-08   | TRE, ATL                     | NEC-06         | OPP-06                        | VER-D [F02]; INF                                                                                                       |
| PRB-09   | TRE                          | NEC-07         | OPP-11 (e OPP-01 como insumo) | HIP; [F11] [F14] [P1-EV-F11-001](#p1-ev-f11-001) [P1-EV-F14-001](#p1-ev-f14-001) [P1-EV-F14-002](#p1-ev-f14-002)       |
| PRB-10   | TRE-2, TRE-3                 | NEC-08         | OPP-05, OPP-12                | INF; [F11] [F12] [P1-EV-F11-003](#p1-ev-f11-003) [P1-EV-F11-004](#p1-ev-f11-004) [P1-EV-F12-002](#p1-ev-f12-002)       |
| PRB-11   | TRE-3, ATL-3                 | NEC-09         | OPP-04                        | HIP; [F11] [P1-EV-F11-001](#p1-ev-f11-001)                                                                             |
| PRB-12   | ATL                          | NEC-10         | OPP-08                        | HIP                                                                                                                    |
| PRB-13   | TRE                          | NEC-11         | OPP-07                        | HIP; [F01] [F03] [P1-EV-F01-001](#p1-ev-f01-001)                                                                       |
| PRB-14   | TRE-2, TRE-5, ATL            | NEC-12         | OPP-09, OPP-12                | HIP                                                                                                                    |

Cobertura: 14 problemas, 12 necessidades e 13 oportunidades, todos com
identificador estável e sem órfãos. IDs não são reaproveitados: se um item for
descartado, seu ID fica registrado como descartado.

## Índice de evidências da validação do tutorial

Os registros abaixo identificam as evidências usadas em
[P01-VAL-001](./P0-P1-tutorial.md#registro-de-validacao-das-acoes-p0p1) e
[P01-VAL-002](./P0-P1-tutorial.md#p01-val-002), materializando o retorno para
cada ação classificada.

### P01-EV-P1-001

A seção **Escopo, método e legenda de evidências** registra os públicos
confirmados, a ausência de entrevistas e dados primários e as classes VER-D,
VER-A, INF, HIP, PROPOSTA e DECISÃO_HUMANA. Historicamente, na linha de base de
15/11/2026, nove das 14 fontes não tinham a página completa aberta; a revisão
subsequente está documentada em [auditoria](#p1-auditoria-fontes). O diagnóstico
mantém tecnologia e funcionalidades fora do escopo aprovado.

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

**Estado histórico:** evidência superada por [`P01-EV-P1-006`](#p01-ev-p1-006).
Na linha de base de `P01-VAL-001`, anterior à inclusão das respostas humanas, a
seção [E08](#p01-e08) mantinha Q-09 sem resposta documentada.

**Retorno histórico:** sustentou
[`P01-ACT-05-01`](./P0-P1-tutorial.md#p01-act-05-01) e
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

### P01-EV-P1-006

A seção [RESPOSTAS DAVI SERMENHO](#p01-respostas-davi) registra observação
direta, situação e frequência para PRB-01 a PRB-14. O registro materializa a
revisão e o envio das observações do responsável. Sua força probatória é
limitada à experiência declarada por Davi Sermenho e não deve ser generalizada
para todo o público sem validação adicional com atletas e outros treinadores.

**Retorno:** sustenta [`P01-ACT-05-01`](./P0-P1-tutorial.md#p01-act-05-01) e
[`P01-ACT-05-02`](./P0-P1-tutorial.md#p01-act-05-02) em
[`P01-VAL-002`](./P0-P1-tutorial.md#p01-val-002).

---

## Glossário de Termos Especializados do Handebol de Praia

Legenda de abreviações gramaticais: s. m. = substantivo masculino; s. m. e f. =
substantivo masculino e feminino.

**Gol de aérea (In-flight)** s. m.

Gol marcado no ar por um atleta que controla a bola — vinda de um passe de
companheiro ou de um rebote na trave, no goleiro ou na defesa adversária — e
finaliza direto à meta enquanto está suspenso. Não é permitido que o próprio
jogador passe ou lance a bola para si mesmo para executar a jogada. Concede 2
pontos à equipe apenas se o atleta no ar controlar a bola e arremessar; dar um
tapa ou empurrar a bola para o gol vale apenas 1 ponto.

**Gol de giro (Spin Shot)** s. m.

Arremesso realizado com uma rotação completa do corpo no ar (360 graus) antes da
finalização à meta. Considera-se um giro completo e correto quando os pés do
jogador no momento da impulsão apontam diretamente em direção ao gol, devendo a
bola sair da mão do atleta antes que qualquer parte do seu corpo toque a areia.
É bonificado com 2 pontos.

**Especialista** s. m. e f.

Jogador de linha encarregado de substituir o goleiro na fase ofensiva da equipe.
Utiliza um uniforme idêntico ao do goleiro da própria equipe para se diferenciar
dos demais jogadores de linha. Qualquer gol marcado por ele ou pelo goleiro na
meta adversária concede 2 pontos, enquanto um eventual gol contra marcado por
ele vale apenas 1 ponto.

---

<a id="p1-auditoria-fontes"></a>

## Auditoria de sustentação das fontes F01, F04 e F08–F14 — 16/11/2026

**Objeto:** conferir as fontes e os vínculos já usados neste P1; não validar
novamente os 14 problemas nem propor funcionalidades. **Base:** arquivo anexado
de 15/11/2026; os números de linha no inventário abaixo são da **versão anterior
à presente revisão** e servem para reproduzir o levantamento. As respostas
humanas de PRB-01 a PRB-14 foram preservadas como **relatos**, não como medições
de campo independentes.

### Inventário de ocorrências e dependências (versão de entrada)

| Fonte | Linhas originais de uso (exclui índice de referências)                    | Afirmações e elementos dependentes                                           | Evidências de retorno                                                                                      |
| ----- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| F01   | 150, 164, 197, 797                                                        | E02: aplicabilidade e punições, tempo técnico; PRB-13 → NEC-11 → OPP-07; E09 | [F01-001](#p1-ev-f01-001), [F01-002](#p1-ev-f01-002)                                                       |
| F04   | 30, 187, 673, 787                                                         | Limite da amostra; PRB-03 → NEC-03 → OPP-03/13; E07/E09                      | [F04-001](#p1-ev-f04-001), [F04-002](#p1-ev-f04-002)                                                       |
| F08   | 191, 791                                                                  | PRB-07 → NEC-05 → OPP-10; E09; menções indiretas a estudos sobre calor       | [F08-001](#p1-ev-f08-001), [F08-002](#p1-ev-f08-002)                                                       |
| F09   | 185, 186, 785, 786                                                        | PRB-01/02 → NEC-01/02 → OPP-01/02/13; E09                                    | [F09-001](#p1-ev-f09-001), [F09-002](#p1-ev-f09-002)                                                       |
| F10   | 187                                                                       | PRB-03; contexto adicional de PRB-07; NEC-03, OPP-13                         | [F10-001](#p1-ev-f10-001)                                                                                  |
| F11   | 32, 58, 89, 96, 97, 156, 161, 163, 193, 194, 195, 665, 671, 793, 794, 795 | E01/E02/E10; PRB-09/10/11 → NEC-07/08/09 → OPP-05/11; E09                    | [F11-001](#p1-ev-f11-001), [F11-002](#p1-ev-f11-002), [F11-003](#p1-ev-f11-003), [F11-004](#p1-ev-f11-004) |
| F12   | 66, 185, 194, 785, 794                                                    | E10; PRB-01/10 → NEC-01/08 → OPP-01/05; E09                                  | [F12-001](#p1-ev-f12-001), [F12-002](#p1-ev-f12-002)                                                       |
| F13   | 66, 672                                                                   | E10; OPP-12 (NEC-01/08/12)                                                   | [F13-001](#p1-ev-f13-001)                                                                                  |
| F14   | 67, 193, 793                                                              | E10; PRB-09 → NEC-07 → OPP-11; E09                                           | [F14-001](#p1-ev-f14-001), [F14-002](#p1-ev-f14-002)                                                       |

Outras ocorrências nas linhas históricas 912–940 pertenciam somente à
**bibliografia**; a linha 11 era um exemplo de sintaxe `[F01]` e não uma
atribuição factual. A tabela foi gerada a partir de todas as ocorrências
literais dos nove identificadores na versão de entrada.

### Identidade, autoridade, versão e URL exata

**Data de acesso de todas as fontes relacionadas a seguir: 16/11/2026.**
`CONFERIDA_INTEGRALMENTE` descreve a abertura do conteúdo publicado e a
conferência das passagens pertinentes — não uma auditoria metodológica
independente, nem prova de funcionamento de software.

| Fonte | Identidade bibliográfica e versão                                                                                                                                                                                                                                                                                     | Endereço direto e autoridade                                                                                                                                                                                                            | Estado                                                                                                |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| F01   | International Handball Federation (IHF). _IX. Rules of the Game: b) Beach Handball_. Edição **1 April 2026** (substitui a edição de 2021 mencionada no P1 original).                                                                                                                                                  | [PDF normativo IHF](https://www.ihf.info/sites/default/files/2026-04/09B%20-%20Rules%20of%20the%20Game_Beach%20Handball_E.pdf); órgão internacional responsável pelas regras                                                            | `OBSOLETA_OU_SUBSTITUÍDA` para 2021; edição 2026 `CONFERIDA_INTEGRALMENTE`                            |
| F04   | Juan Antonio Sánchez-Sáez; Javier Sánchez-Sánchez; Alejandro Martínez-Rodríguez; José Luis Felipe; Jorge García-Unanue; Daniel Lara-Cobos. _Global Positioning System Analysis of Physical Demands in Elite Women’s Beach Handball Players in an Official Spanish Championship_. **Sensors**, 21(3), 850, 27/01/2021. | [DOI 10.3390/s21030850](https://doi.org/10.3390/s21030850), [texto integral PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC7866123/); periódico Sensors (MDPI), autores confirmados no artigo                                            | `CONFERIDA_INTEGRALMENTE` (cópia PMC; página MDPI apresentou limite de acesso)                        |
| F08   | Dimitrios Hatzimanouil; Efthymios Papasoulis; Ioannis Terzidis; Angelos Kanioglou; Angeliki Mavropoulou; Kostas Natsis. _Injuries in elite athletes of beach handball_. **Journal of Human Sport and Exercise**, 12(3), 689–697, 2017.                                                                                | [DOI 10.14198/jhse.2017.123.13](https://doi.org/10.14198/jhse.2017.123.13), [PDF integral espelhado em Redalyc](https://www.redalyc.org/pdf/3010/301053359013.pdf); Universidade de Alicante, título/autores compatíveis com publicação | `CONFERIDA_INTEGRALMENTE` em texto integral extraído; pré-visualização gráfica do PDF bloqueada (403) |
| F09   | Alice Iannaccone; Andrea Fusco; Daniele Conte; Cristina Cortis. _Notational analysis of beach handball_. **Human Movement**, 23(1), 69–79, edição 2022; publicação on-line em 17/12/2020.                                                                                                                             | [DOI 10.5114/hm.2021.101757](https://doi.org/10.5114/hm.2021.101757), [periódico e PDF](https://hummov.awf.wroc.pl/Notational-analysis-of-beach-handball,130277,0,2.html)                                                               | `CONFERIDA_INTEGRALMENTE`                                                                             |
| F10   | Marco Cardinale; Cristina Cortis; Andrea Fusco. _Beach Handball_. **Aspetar Sports Medicine Journal**, vol. 13, _Targeted Topic – Sports Medicine in Handball_, 26/08/2024. Artigo de síntese, sem DOI identificado.                                                                                                  | [Artigo integral Aspetar](https://journal.aspetar.com/en/journals/volume-13-targeted-topic-sports-medicine-in-handball/beach-handball); autores e publicador identificados; não foi estabelecida revisão por pares                      | `CONFERIDA_INTEGRALMENTE`                                                                             |
| F11-A | **A União**, _Circuito Brasileiro reúne 59 equipes_, publicado em 30/10/2025; autoria individual não indicada na página acessada.                                                                                                                                                                                     | [Matéria](https://auniao.pb.gov.br/noticias/caderno_esporte/circuito-brasileiro-reune-59-equipes); jornal A União (PB), **reportagem, não regulamento CBHb**                                                                            | `CONFERIDA_INTEGRALMENTE`                                                                             |
| F11-B | **A União**, Camilla Barbosa, _Circuito Brasileiro será encerrado hoje_, 05/11/2025.                                                                                                                                                                                                                                  | [Matéria](https://auniao.pb.gov.br/noticias/caderno_esporte/circuito-brasileiro-sera-encerrado-hoje)                                                                                                                                    | `CONFERIDA_INTEGRALMENTE`                                                                             |
| F11-C | **A União**, Camilla Barbosa, _Copa Brasil em João Pessoa_, 21/08/2025.                                                                                                                                                                                                                                               | [Matéria](https://auniao.pb.gov.br/noticias/caderno_esporte/copa-brasil-em-joao-pessoa)                                                                                                                                                 | `CONFERIDA_INTEGRALMENTE`                                                                             |
| F12   | **Longman Sportsoft**, _Software_, página comercial sem data editorial; versões exibidas: _Beach Handball Statistics System_ V1.1 (18/05/2026), _Beach Handball Timing & Scoring_ V1.1 (02/03/2026), _Data Management_ V2.4 (20/04/2026).                                                                             | [Catálogo de produtos](https://www.handball.cc/Software_EN.aspx); fabricante descreve seus próprios produtos                                                                                                                            | `CONFERIDA_INTEGRALMENTE` como declaração comercial                                                   |
| F13   | **CGI IT Czech Republic s.r.o.** (desenvolvedor listado), _Beach Data 2.0_, App Store; versão exibida 3.0.1 (07/06/2024), descrição sem data editorial separada.                                                                                                                                                      | [Ficha do aplicativo](https://apps.apple.com/br/app/beach-data-2-0/id1514578825), [descrição do fornecedor](https://www.beach-data.com/features); vôlei de praia, não handebol                                                          | `CONFERIDA_INTEGRALMENTE` como declaração comercial                                                   |
| F14   | **handball.ai** (identidade empresarial jurídica não estabelecida), _Lead Before Play_, página comercial sem data editorial indicada; copyright 2026.                                                                                                                                                                 | [Página do fornecedor](https://handball.ai/lead-before-play/); oferta de análise para handebol geral                                                                                                                                    | `CONFERIDA_INTEGRALMENTE` como declaração comercial                                                   |

### Registros de evidência: afirmação ↔ fonte

Cada `P1-EV-*` é novo e **não substitui** `P01-EV-P1-001` a `006`. Os campos
`Dependências` contêm links de retorno ao elemento do P1 (e, quando aplicável,
seções). Natureza `VER-D` sempre significa aplicabilidade **ao fato estritamente
documentado**, não à rotina de todas as equipes brasileiras.

<a id="p1-ev-f01-001"></a>

#### P1-EV-F01-001

```yaml
ID: P1-EV-F01-001
Fonte: F01
Afirmações_sustentadas: 'E02; PRB-13; NEC-11; OPP-07; E09'
Localização_na_fonte:
  'Preâmbulo p. 3; Regra 1:1 p. 4; Regra 2:4 p. 8; Regra 2:17 p. 10; Regra 9 pp.
  21–23'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-D
Sustentação: SUSTENTADO INTEGRALMENTE
```

**Correspondência:** IHF de 2026 estabelece escopo para homens e mulheres
(exceto bola), punições individuais, quadra, períodos de 10 min e um tempo
técnico por período.

**Limitações:** Norma vigente nas competições IHF; não comprova que a duração,
por si, prejudique a comunicação em clubes.

**Retorno:** [E02](#p01-e02); [PRB-13](#p01-e03); [NEC-11](#p01-e04);
[OPP-07](#p01-e05); [E09](#p01-e09).

<a id="p1-ev-f01-002"></a>

#### P1-EV-F01-002

```yaml
ID: P1-EV-F01-002
Fonte: F01
Afirmações_sustentadas: 'Relato PRB-08; E02'
Localização_na_fonte:
  'Regras 8:11 e 14:1; esclarecimento de últimos 15 segundos, pp. 18–21 e 27,
  55–56'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-D
Sustentação: CONTRADITO PELA EVIDÊNCIA
```

**Correspondência:** Em sanções normativas por interferência relevante nos 15
segundos finais a regra especifica tiro de 6 m. O depoimento preservado menciona
7 m.

**Limitações:** Divergência normativa sobre medida do tiro, não prova de que
episódio relatado não aconteceu; sem súmula/vídeo não reconstituir o caso.

**Retorno:** [Relato PRB-08](#p01-respostas-davi); [E02](#p01-e02).

<a id="p1-ev-f04-001"></a>

#### P1-EV-F04-001

```yaml
ID: P1-EV-F04-001
Fonte: F04
Afirmações_sustentadas: 'PRB-03; NEC-03; OPP-03/13; E07/E09'
Localização_na_fonte:
  'Seções 2.2 (Subjects), 2.3 (Procedures), 3 (Results), Figura 3, Conclusões'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-D
Sustentação: SUSTENTADO INTEGRALMENTE
```

**Correspondência:** Nove jogadoras espanholas de elite, 46 observações em seis
jogos por equipe em dois dias, GPS 15 Hz, acelerômetro 100 Hz e cinta FC. 62,82
± 14,73% do tempo acima de 80% da FC máxima.

**Limitações:** Estudo observacional, mesma equipe e país; não representa todas
as mulheres, idades, níveis ou equipes do Brasil; shoot-out excluído.

**Retorno:** [PRB-03](#p01-e03); [NEC-03](#p01-e04); [OPP-03/13](#p01-e05);
[E09](#p01-e09).

<a id="p1-ev-f04-002"></a>

#### P1-EV-F04-002

```yaml
ID: P1-EV-F04-002
Fonte: F04
Afirmações_sustentadas: 'PRB-03; NEC-03'
Localização_na_fonte: 'Seções 1, 2.3, 4 e 5'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: HIP
Sustentação: SEM SUSTENTAÇÃO SUFICIENTE
```

**Correspondência:** A pesquisa utilizou monitoramento tecnológico; não estima
quantas equipes brasileiras carecem de sensores ou de monitoramento.

**Limitações:** Ausência de medição de adoção tecnológica em equipes brasileiras
não implica inexistência de monitoramento.

**Retorno:** [PRB-03](#p01-e03); [NEC-03](#p01-e04).

<a id="p1-ev-f08-001"></a>

#### P1-EV-F08-001

```yaml
ID: P1-EV-F08-001
Fonte: F08
Afirmações_sustentadas: 'PRB-04; contexto E10'
Localização_na_fonte:
  'Métodos pp. 690–691; Tabelas 2–5 pp. 691–693; discussão e conclusão pp.
  694–695'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-D
Sustentação: SUSTENTADO INTEGRALMENTE
```

**Correspondência:** 122 atletas (72 mulheres, 50 homens) do European Beach Tour
2014 responderam questionário retrospectivo de lesões nos 24 meses anteriores;
predominam lesões de membros inferiores, especialmente joelhos, e mecanismos por
contato com adversários.

**Limitações:** Autorreporte retrospectivo; taxa de resposta 122/200; seleção de
elite europeia; não identifica causalidade por calor.

**Retorno:** [PRB-04](#p01-e03); [E10](#p01-e10).

<a id="p1-ev-f08-002"></a>

#### P1-EV-F08-002

```yaml
ID: P1-EV-F08-002
Fonte: F08
Afirmações_sustentadas: 'PRB-07; NEC-05; OPP-10; E09'
Localização_na_fonte:
  'Discussão p. 694; referências p. 695, Garcia e Bebetsos (2014)'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: HIP
Sustentação: SEM SUSTENTAÇÃO SUFICIENTE
```

**Correspondência:** Calor, fadiga e desidratação aparecem como causas possíveis
discutidas, não medidas como exposição, nem comparadas com desfecho. A revisão
EHF aparece apenas como referência.

**Limitações:** Não confirma episódios de desidratação, perda de líquidos em
quatro jogos, frequência ou relação causal.

**Retorno:** [PRB-07](#p01-e03); [NEC-05](#p01-e04); [OPP-10](#p01-e05);
[E09](#p01-e09).

<a id="p1-ev-f09-001"></a>

#### P1-EV-F09-001

```yaml
ID: P1-EV-F09-001
Fonte: F09
Afirmações_sustentadas: 'PRB-01/02; NEC-01/02; OPP-01/02'
Localização_na_fonte:
  'Resumo; Métodos e resultados do artigo pp. 69–79; Tabelas de arremessos'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-D
Sustentação: SUSTENTADO INTEGRALMENTE
```

**Correspondência:** Foram examinadas 9 partidas e 559 arremessos (353
masculinos, 206 femininos), com categorias de tipo e área do arremesso;
eficiência definida como gols/arremessos ×100.

**Limitações:** Recorte de partidas de fases decisivas; não há teste de
facilidade de uso do produto nem de prática dos treinadores brasileiros.

**Retorno:** [PRB-01/02](#p01-e03); [NEC-01/02](#p01-e04);
[OPP-01/02](#p01-e05).

<a id="p1-ev-f09-002"></a>

#### P1-EV-F09-002

```yaml
ID: P1-EV-F09-002
Fonte: F09
Afirmações_sustentadas: 'PRB-02; NEC-02; OPP-02'
Localização_na_fonte: 'Resumo/Methods: indicador de eficiência de arremesso'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: INF
Sustentação: SEM SUSTENTAÇÃO SUFICIENTE
```

**Correspondência:** O artigo usa eficiência de arremesso como razão
gols/arremessos, mas não compara métricas indoor e praia e não demonstra efeito
causal de uso de métricas inadequadas em decisões táticas.

**Limitações:** A regra de pontuação é diretamente verificável em F01; a
alegação sobre erros de decisão precisa de relato/observação própria.

**Retorno:** [PRB-02](#p01-e03); [NEC-02](#p01-e04); [OPP-02](#p01-e05).

<a id="p1-ev-f10-001"></a>

#### P1-EV-F10-001

```yaml
ID: P1-EV-F10-001
Fonte: F10
Afirmações_sustentadas: 'PRB-03; PRB-07; OPP-13'
Localização_na_fonte:
  'Performance Demands; Injury Prevention; Conclusion; referências 4, 16, 22–23'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-A
Sustentação: SUSTENTADO PARCIALMENTE
```

**Correspondência:** Síntese de demandas físicas e de estudos ainda limitados,
com menção a calor e jogos sucessivos; compila dados de outros trabalhos,
inclusive F04.

**Limitações:** Revisão narrativa, não estudo primário; não quantifica escassez
absoluta nem demonstra falta de monitoramento nas equipes brasileiras. Revisão
por pares não documentada.

**Retorno:** [PRB-03/07](#p01-e03); [OPP-13](#p01-e05).

<a id="p1-ev-f11-001"></a>

#### P1-EV-F11-001

```yaml
ID: P1-EV-F11-001
Fonte: F11-A/C
Afirmações_sustentadas: 'E01; PRB-09/11; OPP-11'
Localização_na_fonte:
  'F11-A, parágrafos iniciais da notícia 30/10/2025; F11-C, notícia 21/08/2025'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-D
Sustentação: SUSTENTADO INTEGRALMENTE
```

**Correspondência:** Etapa final de 2025 anunciava 59 equipes de nove estados
nas categorias infantil, cadete, júnior e adulto; Copa Brasil de agosto de 2025
disputou juvenil e adulto.

**Limitações:** 59 equipes eram previsão/estimativa para um evento específico; a
reportagem não comprova efetiva participação de todas nem mesmo perfil em 2026.

**Retorno:** [E01](#p01-e01); [PRB-09/11](#p01-e03); [OPP-11](#p01-e05).

<a id="p1-ev-f11-002"></a>

#### P1-EV-F11-002

```yaml
ID: P1-EV-F11-002
Fonte: F11-B
Afirmações_sustentadas: 'E02 (planejamento)'
Localização_na_fonte:
  'Notícia 05/11/2025, entrevista com atleta Camila Oliveira'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-D
Sustentação: SUSTENTADO PARCIALMENTE
```

**Correspondência:** Entrevistada afirma que sua equipe se prepara desde o
início do ano com a publicação do calendário.

**Limitações:** Uma fala individual contextual, não padrão obrigatório do
circuito inteiro.

**Retorno:** [E02](#p01-e02).

<a id="p1-ev-f11-003"></a>

#### P1-EV-F11-003

```yaml
ID: P1-EV-F11-003
Fonte: F11-A/C
Afirmações_sustentadas: 'PRB-09/10; OPP-11'
Localização_na_fonte:
  'F11-A início: etapa final 2025 em João Pessoa; F11-C entrevista de Rossana
  Marques ao final'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-D
Sustentação: SUSTENTADO PARCIALMENTE
```

**Correspondência:** Notícias confirmam etapas e deslocamento entre estados;
entrevistada relaciona mais etapas a maior custo de viagem e relata
classificação da Copa Brasil para a final.

**Limitações:** Reportagem baseada em falas; não mede custos e não demonstra
burocracia, frequência de retrabalho ou rotinas de todas as equipes.

**Retorno:** [PRB-09/10](#p01-e03); [OPP-11](#p01-e05).

<a id="p1-ev-f11-004"></a>

#### P1-EV-F11-004

```yaml
ID: P1-EV-F11-004
Fonte: F11
Afirmações_sustentadas: 'PRB-10; NEC-08; OPP-05'
Localização_na_fonte:
  'Três reportagens F11-A/B/C: não localizadas exigências cadastrais detalhadas'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: HIP
Sustentação: NÃO DOCUMENTADO
```

**Correspondência:** Não houve evidência documental de que CBHb/federações
exijam recadastro repetitivo a cada etapa; deslocamentos e custos são outra
proposição.

**Limitações:** Necessária consulta a regulamentos/formulários e registros de
inscrições se houver pretensão de afirmar burocracia como fato geral.

**Retorno:** [PRB-10](#p01-e03); [NEC-08](#p01-e04); [OPP-05](#p01-e05).

<a id="p1-ev-f12-001"></a>

#### P1-EV-F12-001

```yaml
ID: P1-EV-F12-001
Fonte: F12
Afirmações_sustentadas: 'E10; PRB-01; OPP-01'
Localização_na_fonte:
  'Catálogo Software: parágrafos Beach Handball Statistics V1.1 e Timing &
  Scoring V1.1; News, entradas 18/05 e 02/03/2026'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-D
Sustentação: SUSTENTADO INTEGRALMENTE
```

**Correspondência:** O fabricante anuncia ferramentas de estatística técnica e
cronometragem/placar específicas de handebol de praia.

**Limitações:** Sustenta existência de oferta declarada, não desempenho, adoção
ou eficácia em campo; conteúdo comercial.

**Retorno:** [E10](#p01-e10); [PRB-01](#p01-e03); [OPP-01](#p01-e05).

<a id="p1-ev-f12-002"></a>

#### P1-EV-F12-002

```yaml
ID: P1-EV-F12-002
Fonte: F12
Afirmações_sustentadas: 'PRB-10; NEC-08; OPP-05'
Localização_na_fonte:
  'Catálogo Software: parágrafo Longman Data Management System V2.4'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-A
Sustentação: SUSTENTADO PARCIALMENTE
```

**Correspondência:** O fornecedor diz que seu produto pode importar dados de
formulários de associações e exportar para seus sistemas. Não diz que CBHb
utiliza tal sistema.

**Limitações:** Outra operação/fornecedor, sem prova de procedimentos
federativos do Brasil.

**Retorno:** [PRB-10](#p01-e03); [NEC-08](#p01-e04); [OPP-05](#p01-e05).

<a id="p1-ev-f13-001"></a>

#### P1-EV-F13-001

```yaml
ID: P1-EV-F13-001
Fonte: F13
Afirmações_sustentadas: 'E10; OPP-12; NEC-01/08/12'
Localização_na_fonte:
  'App Store, descrição do aplicativo, parágrafo "offline mode"; site do
  fabricante, seção Data Synchronization and Sharing'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-A
Sustentação: SUSTENTADO INTEGRALMENTE
```

**Correspondência:** Aplicativo Beach Data para vôlei de praia declara registro
offline e posterior sincronização quando houver internet.

**Limitações:** Verifica a declaração funcional do produto análogo; não é teste
realizado, nem prova de conectividade ruim em handebol de praia.

**Retorno:** [E10](#p01-e10); [OPP-12](#p01-e05); [NEC-01/08/12](#p01-e04).

<a id="p1-ev-f14-001"></a>

#### P1-EV-F14-001

```yaml
ID: P1-EV-F14-001
Fonte: F14
Afirmações_sustentadas: 'E10; PRB-09'
Localização_na_fonte:
  'Página Lead Before Play, seções Our Goal / For Whom is the App'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: VER-A
Sustentação: SUSTENTADO INTEGRALMENTE
```

**Correspondência:** handball.ai apresenta produto voltado a análise
estatística, scouting e banco de dados para handebol; existência de oferta
declarada.

**Limitações:** Produto para handebol geral, não evidência de adaptação ao
handebol de praia, nem validação operacional.

**Retorno:** [E10](#p01-e10); [PRB-09](#p01-e03).

<a id="p1-ev-f14-002"></a>

#### P1-EV-F14-002

```yaml
ID: P1-EV-F14-002
Fonte: F14
Afirmações_sustentadas: 'PRB-09; NEC-07; OPP-11; E09'
Localização_na_fonte:
  'Página Lead Before Play, parágrafo introdutório sobre qualidade de dados'
Estado_da_conferência: CONFERIDA_INTEGRALMENTE
Natureza: HIP
Sustentação: SEM SUSTENTAÇÃO SUFICIENTE
```

**Correspondência:** O fornecedor alega que a qualidade dos dados no handebol é
baixa; não apresenta desenho amostral, medidas ou auditoria independente.

**Limitações:** Afirmação publicitária sobre handebol geral, não constatação
sobre adversários no circuito brasileiro.

**Retorno:** [PRB-09](#p01-e03); [NEC-07](#p01-e04); [OPP-11](#p01-e05);
[E09](#p01-e09).

<a id="p1-auditoria-acao-42"></a>

### Subsídios para P01-VAL-003 — revisão documental de F01, F04 e F08–F14

- **Data:** 16/11/2026.
- **AÇÃO 4.2 — situação no P1:** `SUSTENTADO PARCIALMENTE` como fechamento para
  **uso externo**, pois falta a revisão independente. **Conferência documental
  das nove fontes:** realizada na extensão descrita nos registros acima; o
  conteúdo das publicações e páginas foi localizado, respeitando as classes de
  natureza e sustentação de cada afirmação.
- **Fonte normativa obsoleta substituída:** F01/2021 → F01/01-04-2026.
- **Fontes recuperadas:** F04, F08, F09, F10, F11 (três matérias), F12, F13 e
  F14; resultados comerciais marcados como declarações do fornecedor.
- **Alegações que não passaram integralmente:** F04 (ausência de monitoramento
  no Brasil), F08 (calor/desidratação como causa observada), F09 (distorção
  tática por métricas herdadas), F11 (retrabalho burocrático recorrente), F14
  (baixa qualidade dos dados como fato). Correspondentes afirmações tratadas
  como INF/HIP ou restritas, sem apagar relatos humanos.
- **Contradição preservada:** relato PRB-08 cita tiro de 7 metros; norma vigente
  prevê 6 metros no caso descrito; não inferir o resultado do lance.
- **Revisão independente por segunda pessoa:** `NÃO VERIFICADO` — **BLOQUEANTE**
  apenas para declarar que a correspondência está _externamente validada_.
- **Tutoriais históricos:** `P01-VAL-001` e `P01-VAL-002` permanecem intocados.
  A nova validação foi materializada em
  [`P01-VAL-003`](./P0-P1-tutorial.md#p01-val-003); esta seção fornece seus
  subsídios e o vínculo de retorno.
- **Condição de encerramento:** segunda pessoa reproduzir fonte → localização →
  trecho/paráfrase → afirmação e registrar aprovação/discordância, sem
  transformar não documentado em negado nem extrapolar de fontes comerciais.

**Relação com registros anteriores:** [P01-EV-P1-001](#p01-ev-p1-001),
[P01-EV-P1-006](#p01-ev-p1-006),
[`P01-VAL-001`](./P0-P1-tutorial.md#registro-de-validacao-das-acoes-p0p1),
[`P01-VAL-002`](./P0-P1-tutorial.md#p01-val-002) e
[`P01-VAL-003`](./P0-P1-tutorial.md#p01-val-003).

---

## Fontes

**Estado histórico de 15/11/2026:** as páginas integrais de F02, F03, F05, F06 e
F07 haviam sido abertas; F01, F04, F08–F14 só tinham trechos de busca. **Revisão
de 16/11/2026:** confira o registro de auditoria acima para fonte exata, estado
da conferência, delimitação e rastreabilidade. A revisão independente por
segunda pessoa continua pendente; não declarar validação externa integral apenas
com os registros gerados pelo agente.

- [[F01] International Handball Federation, _IX. Rules of the Game: b) Beach
  Handball_, edição 1.º de abril de 2026 (substitui edição de 2021)][1]
- [[F02] IHF, novas regras de handebol de praia a partir de 1.º de abril de 2026
  (13/03/2026)][2]
- [[F03] Pueo et al. (2017), tempo-movimento e frequência cardíaca no handebol
  de praia de elite, Journal of Sports Science and Medicine][3]
- [[F04] Sánchez-Sáez et al. (2021), _Global Positioning System Analysis of
  Physical Demands in Elite Women’s Beach Handball Players in an Official
  Spanish Championship_, Sensors 21(3):850][4]
- [[F05] Achenbach et al. (2018), lesões no Campeonato Europeu de Handebol de
  Praia de 2017][5]
- [[F06] Levantamento com 651 atletas de handebol de praia: incidência de lesões
  e retorno ao esporte][6]
- [[F07] Penichet-Tomás et al. (2019), incidência de lesões em atletas espanhóis
  de elite; lista de referências em investiga.upo.es][7]
- [[F08] Hatzimanouil et al. (2017), _Injuries in elite athletes of beach
  handball_, Journal of Human Sport and Exercise 12(3):689–697][8]
- [[F09] Iannaccone et al. (2022), _Notational analysis of beach handball_,
  Human Movement 23(1):69–79][9]
- [[F10] Cardinale, Cortis e Fusco (2024), _Beach Handball_, Aspetar Sports
  Medicine Journal 13][10]
- [[F11] A União (PB), _Circuito Brasileiro reúne 59 equipes_ (30/10/2025); mais
  duas notícias identificadas na auditoria][11]
- [[F12] Longman Sportsoft, _Software_: Beach Handball Statistics V1.1
  (18/05/2026), Timing & Scoring V1.1 (02/03/2026) e Data Management V2.4
  (20/04/2026)][12]
- [[F13] CGI IT Czech Republic s.r.o., _Beach Data 2.0_, App Store (versão
  exibida 3.0.1, 07/06/2024), modo offline declarado][13]
- [[F14] handball.ai, _Lead Before Play_, descrição e alegações comerciais do
  fornecedor (data de publicação não indicada)][14]

[1]:
  https://www.ihf.info/sites/default/files/2026-04/09B%20-%20Rules%20of%20the%20Game_Beach%20Handball_E.pdf
[2]: https://www.ihf.info
[3]: https://www.jssm.org
[4]: https://doi.org/10.3390/s21030850
[5]: https://pubmed.ncbi.nlm.nih.gov/
[6]: https://pubmed.ncbi.nlm.nih.gov/
[7]: https://investiga.upo.es
[8]: https://doi.org/10.14198/jhse.2017.123.13
[9]: https://doi.org/10.5114/hm.2021.101757
[10]:
  https://journal.aspetar.com/en/journals/volume-13-targeted-topic-sports-medicine-in-handball/beach-handball
[11]:
  https://auniao.pb.gov.br/noticias/caderno_esporte/circuito-brasileiro-reune-59-equipes
[12]: https://www.handball.cc/Software_EN.aspx
[13]: https://apps.apple.com/br/app/beach-data-2-0/id1514578825
[14]: https://handball.ai/lead-before-play/
