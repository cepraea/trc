# P1 — Investigação Completa de Problemas, Necessidades e Oportunidades — versão 1.0

<relatorio>

## Glossário granular e recursivo

<glossario>

**Substantivos e conceitos centrais**

- **Product Discovery**: investigação estruturada anterior à definição do produto, destinada a compreender usuários, atividades, problemas, necessidades, evidências e oportunidades antes de decidir funcionalidades.
- **Problema**: condição existente que dificulta um resultado relevante para o usuário; sua existência não implica que o aplicativo deva resolvê-la.
- **Necessidade**: resultado que o usuário precisa alcançar, formulado independentemente da solução.
- **Jobs to Be Done — JTBD**: forma de expressar uma necessidade a partir do contexto, objetivo e resultado procurado: “Quando [contexto], preciso [objetivo], para [resultado]”.
- **Oportunidade**: espaço potencial de criação de valor associado a uma necessidade; não equivale a funcionalidade aprovada.
- **Evidência diretamente aplicável**: informação produzida sobre handebol de praia ou pela experiência documentada do responsável no contexto investigado.
- **Evidência análoga**: informação válida em modalidade, organização ou contexto semelhante, útil para plausibilidade, mas incapaz de provar a situação no público-alvo.
- **Inferência**: conclusão derivada explicitamente de evidências identificadas.
- **Hipótese**: afirmação plausível ainda dependente de investigação.
- **Observação do responsável**: experiência declarada e registrada pelo responsável pelo produto; comprova que o fenômeno foi vivenciado naquele contexto, mas não sua prevalência na população.
- **Sustentação**: grau em que a evidência permite afirmar uma conclusão. Este relatório usa **SUSTENTADO INTEGRALMENTE**, **SUSTENTADO PARCIALMENTE**, **SEM SUSTENTAÇÃO SUFICIENTE**, **CONTRADITO PELA EVIDÊNCIA**, **NÃO VERIFICADO** e **NÃO DOCUMENTADO**.
- **Handebol de praia**: modalidade regulamentada pela IHF cuja edição vigente das regras é de **1º de abril de 2026**. citeturn673224view0turn437086search0
- **Gol de aérea / in-flight**: finalização aérea que, quando executada conforme a regra, recebe pontuação especial no handebol de praia.
- **Especialista**: jogador de linha que participa da configuração ofensiva em função específica da modalidade.
- **Carga**: conjunto de demandas impostas ao atleta por treino e competição; pode ser estimada por variáveis externas, fisiológicas e perceptivas.
- **Rastreabilidade**: vínculo explícito entre problema, usuário, necessidade, oportunidade e evidência.

**Expressões compostas, verbos e ações**

- **Registrar o jogo**: preservar acontecimentos relevantes da partida ou treino de maneira suficientemente fiel para posterior análise.
- **Gerir carga**: ajustar estímulo, recuperação e exposição competitiva a partir de informação sobre o atleta e a atividade.
- **Acompanhar evolução**: manter contexto longitudinal suficiente para comparar desenvolvimento entre sessões, etapas, categorias ou temporadas.
- **Preparar adversário**: reunir e transformar informação confiável sobre outra equipe em conhecimento útil à preparação.
- **Tomar decisão em jogo**: interpretar a situação competitiva e comunicar um ajuste dentro das janelas curtas disponíveis.
- **Coordenar equipe**: organizar disponibilidade, treino, competição, deslocamento e outras dependências coletivas.
- **Validar problema**: obter evidência suficiente de ocorrência, relevância e contexto no público que se pretende atender; não é sinônimo de confirmar uma solução.

**Proposição central do P1**

O aplicativo só deve ser concebido depois de compreender **o que atletas e treinadores de handebol de praia precisam conseguir realizar, quais obstáculos efetivamente interferem nesses resultados e quais oportunidades justificam investigação posterior**; funcionalidades, módulos e tecnologia permanecem deliberadamente fora desta etapa.

</glossario>

## Base contratual, método e evidências

<base_metodologica>

O contrato **P0 está disponível nos insumos acessíveis e foi aplicado**. Ele determina que o produto tem como público inicial atletas e treinadores; outros públicos não entram automaticamente no escopo; a autoridade final de produto e conteúdo técnico-esportivo permanece com o responsável; problemas devem ser investigados antes das soluções; propostas não podem ser convertidas em decisões; e tecnologia, arquitetura, fornecedor, API paga ou orçamento não podem ser presumidos. Portanto, a lacuna de P0 prevista no pedido **não existe**. fileciteturn1file0

Também existe um diagnóstico P1 anterior, revisado em 16 de novembro de 2026, contendo E01–E10, 14 problemas, 12 necessidades e 13 oportunidades. Esse material foi tratado aqui como **insumo existente**, não como verdade autojustificada. A revisão registra ainda observações diretas do responsável para PRB-01 a PRB-14 e explicita que tais relatos representam a experiência dele, não prevalência entre atletas e treinadores brasileiros. fileciteturn1file1 fileciteturn5file0

A pesquisa externa atualizou pontos materiais. A edição oficial das regras IHF vigente desde **1º de abril de 2026** introduziu, entre outros ajustes, mudanças em jogo passivo, sanções nos 15 segundos finais, impactos na cabeça do goleiro e equipamentos. A própria IHF declara que todas as competições IHF desde essa data utilizam as novas regras. citeturn437086search0turn851084view0 O Mundial de 2026, disputado em Zagreb de 23 a 28 de junho, já ocorreu sob esse regime; o Brasil participou tanto no masculino quanto no feminino, e a seleção masculina terminou em segundo lugar. citeturn580274search3turn580274search1

A literatura disponível confirma que as demandas do handebol de praia são intermitentes. Em uma amostra de 24 atletas de elite espanhóis, houve aceleração corporal em média a cada 23 segundos nos homens e 27 segundos nas mulheres; outro estudo com nove atletas da seleção espanhola feminina observou 62,82% ± 14,73% do tempo de jogo acima de 80% da frequência cardíaca máxima. Esses estudos sustentam a existência de demandas físicas específicas, mas não permitem inferir automaticamente a rotina ou o monitoramento de equipes brasileiras. citeturn437086search5turn437086search2

A atualização mais importante em saúde vem de um estudo publicado em 2025 com **651 atletas de 43 países**. Ele encontrou 174 lesões relatadas retrospectivamente em cinco anos, incidência global de 53,5 por 1.000 atletas/ano e 9,0 por 1.000 horas de partida; 75% declararam nenhuma lesão no período pesquisado. Membros inferiores foram a região mais atingida, e maior idade, mais meses por ano de prática e maior número de torneios estiveram associados a maior risco. Portanto, a formulação genérica anterior de que “lesões são comuns no handebol de praia” é **CONTRADITA PELA EVIDÊNCIA mais recente**; o problema real continua sendo relevante por consequência, recorrência individual e necessidade de acompanhar exposição e retorno, não porque exista alta incidência global demonstrada. citeturn882399search3turn882399search8

Há ainda evidência específica, porém pequena, de hidratação. Um estudo com somente cinco atletas universitárias durante torneio internacional observou desidratação após o segundo jogo apesar de disponibilidade de líquidos; outro experimento com 12 jogadoras de handebol, apenas seis delas nas partidas simuladas de praia, detectou redução média de 1,3% de massa corporal. Isso torna calor/hidratação um risco plausível e pesquisável, mas não sustenta prevalência nem protocolos para o público brasileiro. citeturn882399search0turn882399search1

A análise notacional também é diretamente pertinente: estudo de nove partidas e 559 arremessos demonstrou que tipo de finalização, região de arremesso e área do gol podem ser registrados e relacionados à eficiência. O estudo sustenta o **valor analítico potencial do registro**, mas não prova que treinadores brasileiros atualmente tenham dificuldade em registrá-lo. citeturn882399search2

<legenda_evidencia>

| Código usado | Significado |
|---|---|
| VER-D | Evidência diretamente aplicável ao handebol de praia ou observação humana documentada no contexto explicitado |
| VER-A | Evidência de contexto análogo |
| INF | Inferência explícita derivada das evidências |
| HIP | Hipótese a investigar |
| DECISÃO_HUMANA | Determinação registrada do responsável |
| PROPOSTA | Direção de melhoria ainda não aprovada |

</legenda_evidencia>

</base_metodologica>

## Públicos e ciclo esportivo — E01 e E02

<e01_publicos>

Os **usuários confirmados** pelo P0 são atletas e treinadores. A segmentação abaixo é analítica, não uma decisão de escopo. A modalidade possui contextos reais que vão de seleções internacionais a clubes; as próprias listas oficiais do Mundial de 2026 mostram atletas brasileiros vinculados a clubes de diversos estados e com funções distintas, além de comissões técnicas com treinador, auxiliar e fisioterapeuta. Isso comprova heterogeneidade de contexto, não que todos os segmentos tenham as mesmas necessidades. citeturn580274search7turn580274search8

| ID | Público / contexto | Objetivo predominante | Condições que podem alterar necessidades | Estado |
|---|---|---|---|---|
| ATL-01 | Atleta de seleção / alto rendimento | Maximizar desempenho e disponibilidade competitiva | calendário internacional, comissão multidisciplinar, função especializada | VER-D quanto à existência; necessidades detalhadas INF |
| ATL-02 | Atleta de clube competitivo | Evoluir, participar de etapas e manter desempenho | estrutura do clube, deslocamentos, frequência competitiva | VER-D quanto à existência de clubes; rotina INF |
| ATL-03 | Atleta em formação / base | Desenvolver capacidades e progredir esportivamente | idade, categoria, mudança de equipe, participação de responsáveis | SUSTENTADO PARCIALMENTE |
| ATL-04 | Atleta que combina praia e indoor | Conciliar exposição e desenvolvimento nas modalidades | calendário sobreposto ou sequencial, diferentes demandas | SUSTENTADO PARCIALMENTE |
| ATL-05 | Atleta recreativo / participação local | Prática, socialização e competição eventual | menor estrutura e frequência irregular | NÃO VERIFICADO para o público inicial |
| TRE-01 | Treinador de seleção / alto rendimento | Preparar, selecionar, analisar e decidir com suporte de comissão | divisão de funções, maior disponibilidade de dados | VER-D quanto ao contexto |
| TRE-02 | Treinador de clube com estrutura reduzida | Preparar equipe acumulando funções esportivas e operacionais | pouco staff e atenção dividida | VER-D local pela observação do responsável; prevalência NÃO VERIFICADA |
| TRE-03 | Treinador de formação | Desenvolver atletas longitudinalmente | mudança de categoria, maturação, responsáveis | SUSTENTADO PARCIALMENTE |
| TRE-04 | Treinador atuando em indoor e praia | Adaptar planejamento às duas modalidades | calendário e disponibilidade de atletas | HIP |
| TRE-05 | Treinador / coordenador de grupo recreativo | Manter grupo ativo e organizar sessões | irregularidade de horários e estrutura | HIP |

O contraste entre **TRE-01 e TRE-02 é especialmente relevante**. Na experiência registrada pelo responsável, o clube possui apenas um treinador e não realiza registros táticos/estatísticos durante treinos ou partidas porque instrução, monitoramento e análise consomem a capacidade disponível. Na seleção, a mesma dor praticamente desaparece porque existe analista de desempenho dedicado. Isso transforma “registro em quadra” de um problema genérico de clima em um problema de **estrutura de trabalho, atenção e divisão de funções**. A conclusão é **SUSTENTADA INTEGRALMENTE no contexto relatado** e **NÃO VERIFICADA quanto à prevalência entre clubes brasileiros**. fileciteturn5file1

Públicos adicionais somente se tornam pertinentes quando participam diretamente de uma necessidade dos dois públicos iniciais. Preparadores físicos, fisioterapeutas ou profissionais médicos podem ser atores de PRB-03 a PRB-07; responsáveis legais tornam-se pertinentes quando houver atletas menores; organização e arbitragem podem ser dependências de PRB-08 e PRB-10. Nenhum deles é incluído como público primário neste P1, em conformidade com P0. fileciteturn1file0

</e01_publicos>

<e02_rotina>

A unidade útil de análise não é apenas “o jogo”, mas um **ciclo esportivo contínuo**. O formato competitivo cria janelas curtas de observação e decisão; as novas regras de 2026 ampliam ainda a necessidade de atualização normativa. citeturn437086search0turn851084view0

| Fase do ciclo | Atleta tenta realizar | Treinador tenta realizar | Informação potencialmente necessária | Evidência / estado |
|---|---|---|---|---|
| Planejamento | compreender calendário, metas e participação | definir grupo, prioridades, exposição e objetivos | calendário, disponibilidade, histórico | rotina INF |
| Preparação | desenvolver capacidades físicas, técnicas e táticas | planejar estímulos, observar resposta, ajustar preparação | carga, disponibilidade, evolução, condição | demandas físicas VER-D; processo brasileiro INF citeturn437086search5turn437086search2 |
| Pré-competição | chegar apto e preparado | confirmar grupo, regras, adversário e logística | regras vigentes, elenco, deslocamento, adversário | regras VER-D; demais parcialmente documentados |
| Competição | executar função, recuperar entre jogos e adaptar-se | observar, decidir, substituir, comunicar e eventualmente registrar | placar/contexto, eventos, situação física, adversário | formato/regras VER-D; práticas locais variáveis citeturn851084view0turn437086search0 |
| Pós-jogo / torneio | recuperar, compreender desempenho e comunicar condição | revisar, dar retorno e ajustar preparação | fatos do jogo, carga, dores, decisões tomadas | análise notacional é viável e útil em pesquisa; rotina INF citeturn882399search2 |
| Transição / nova temporada | recuperar, mudar categoria/equipe/modalidade | preservar conhecimento e replanejar | histórico longitudinal | problema de continuidade ainda SUSTENTADO PARCIALMENTE |

A consequência metodológica é que “antes, durante e depois” não são fluxos independentes. Registro de partida pode alimentar feedback; exposição competitiva pode alimentar planejamento; alteração de regra pode mudar treino; histórico pode atravessar temporadas. A oportunidade mais forte, portanto, tende a estar em **continuidade da informação e redução do esforço cognitivo**, não necessariamente em digitalizar cada atividade.

</e02_rotina>

## Problemas, necessidades e oportunidades — E03, E04 e E05

<e03_problemas>

Os IDs históricos foram preservados para não romper a rastreabilidade existente. A pesquisa atualiza a interpretação de PRB-04 e PRB-07 e torna explícita a diferença entre ocorrência local e generalização populacional. O arquivo P1 revisado registra observação do responsável para todos os PRB-01 a PRB-14, mas essa observação não equivale a pesquisa representativa. fileciteturn5file0

| ID | Público | Contexto e problema | Consequência | Origem / classe de evidência | Sustentação | Relevância preliminar |
|---|---|---|---|---|---|---|
| PRB-01 | TRE | Registrar acontecimentos de treino/jogo enquanto conduz a equipe pode exceder a capacidade disponível em comissão reduzida | memória incompleta e menor base para análise posterior | observação direta do responsável + pesquisa de análise notacional fileciteturn5file1 citeturn882399search2 | **SUSTENTADO INTEGRALMENTE localmente; PARCIALMENTE no público** | Alta |
| PRB-02 | TRE | Avaliar desempenho sem incorporar particularidades de pontuação, função e situação do handebol de praia pode gerar leitura inadequada | interpretação tática menos útil | regras e análise notacional VER-D; inadequação das métricas usadas na prática INF citeturn882399search2turn851084view0 | **SUSTENTADO PARCIALMENTE** | Alta/Média |
| PRB-03 | TRE, ATL | Planejar carga e recuperação com referências limitadas ou pouco individualizadas | sobre/subexposição e decisões menos fundamentadas | demandas físicas verificadas; prática brasileira de monitoramento não quantificada citeturn437086search5turn437086search2 | **SUSTENTADO PARCIALMENTE** | Alta |
| PRB-04 | ATL, TRE | Acompanhar risco, ocorrência e retorno após lesões | indisponibilidade, recorrência e decisões de retorno ruins | estudo internacional 2025 demonstra lesões e fatores de risco, mas incidência geral baixa citeturn882399search3turn882399search8 | problema **SUSTENTADO**; formulação “lesões comuns” **CONTRADITA PELA EVIDÊNCIA** | Alta pela consequência, não pela prevalência |
| PRB-05 | ATL, TRE, staff | Histórico de lesão/retorno pode ficar fragmentado entre pessoas e temporadas | contexto incompleto em decisões futuras | relato existente + inferência; literatura não mede fragmentação das equipes brasileiras | **SUSTENTADO PARCIALMENTE** | Média |
| PRB-06 | ATL-04, TRE-04 | A carga total pode ser difícil de compreender quando o atleta transita entre praia e indoor | exposição acumulada invisível | plausibilidade fisiológica; prevalência brasileira desconhecida | **SEM SUSTENTAÇÃO SUFICIENTE para prevalência** | Média |
| PRB-07 | ATL, TRE | Jogos repetidos ao ar livre podem exigir manejo adequado de fluidos e recuperação | desidratação e queda de condição em determinados contextos | estudos muito pequenos detectaram alterações de hidratação citeturn882399search0turn882399search1 | **SUSTENTADO PARCIALMENTE** | Média |
| PRB-08 | ATL, TRE | Mudanças nas regras precisam ser entendidas e incorporadas à prática | sanções ou decisões incompatíveis com regra vigente | mudança oficial substancial em 1/4/2026 citeturn437086search0turn851084view0 | mudança **SUSTENTADA INTEGRALMENTE**; dificuldade dos usuários **PARCIALMENTE** | Alta/Média |
| PRB-09 | TRE | Preparar adversários pode depender de informação dispersa ou informal | plano de jogo baseado em informação incompleta | existência de circuito/equipes verificada; escassez da informação segue HIP | **SEM SUSTENTAÇÃO SUFICIENTE** | Média |
| PRB-10 | TRE | Inscrição, documentos e logística competitiva podem impor trabalho operacional repetitivo | tempo desviado da preparação esportiva e risco de erro | eventos e deslocamentos são reais; retrabalho específico não foi demonstrado | **SUSTENTADO PARCIALMENTE** | Média |
| PRB-11 | TRE-03, ATL-03 | Evolução longitudinal pode perder continuidade entre categoria, equipe ou temporada | decisões de desenvolvimento sem histórico | ocorrência local relatada; prevalência não estudada | **SUSTENTADO PARCIALMENTE** | Média/A validar |
| PRB-12 | ATL | Atleta pode não receber feedback individual com clareza/frequência suficiente | menor compreensão do próprio desenvolvimento | relato do responsável; voz direta de atletas ausente | **SUSTENTADO PARCIALMENTE** | A validar |
| PRB-13 | TRE | Janelas curtas de competição restringem tempo para interpretar e comunicar ajustes | decisão chega tarde ou com baixa clareza | formato competitivo VER-D; dificuldade vivenciada documentada, prevalência não medida | **SUSTENTADO PARCIALMENTE** | Média |
| PRB-14 | TRE, ATL | Coordenar disponibilidade, horário e presença pode consumir esforço e reduzir continuidade | sessões incompletas ou incerteza operacional | observação local; evidência populacional ausente | **SUSTENTADO PARCIALMENTE** | Média/A validar |

A evidência disponível **não sustenta criar novos problemas apenas para ampliar o inventário**. Os 14 cobrem quatro classes suficientes para a próxima etapa: problemas de captura/conhecimento; planejamento e saúde; coordenação/continuidade; e decisão/aprendizagem.

</e03_problemas>

<e04_necessidades>

| ID | JTBD / necessidade independente de solução | Dificuldade atual | Condição de satisfação | Origem |
|---|---|---|---|---|
| NEC-01 | Quando acompanha treino ou jogo, o treinador precisa preservar os acontecimentos relevantes sem abandonar sua função principal, para poder analisar e aprender depois | atenção concorrente e, em equipes pequenas, falta de pessoa dedicada | fatos relevantes podem ser reconstituídos sem prejudicar a condução | PRB-01 |
| NEC-02 | Quando avalia desempenho, o treinador precisa interpretá-lo segundo a lógica própria do handebol de praia, para tomar decisões coerentes com a modalidade | informação bruta pode não representar valor tático | análise traduz a situação competitiva de forma compreensível | PRB-02 |
| NEC-03 | Quando planeja estímulo e recuperação, treinador e atleta precisam compreender exposição e resposta, para ajustar a preparação | referências limitadas e informação potencialmente incompleta | decisão de carga possui contexto suficiente e compreensível | PRB-03, PRB-06 |
| NEC-04 | Quando há lesão, risco ou retorno, atleta e equipe técnica precisam conhecer contexto relevante e evolução, para decidir com segurança esportiva | histórico pode estar fragmentado | decisão considera estado atual e histórico pertinente | PRB-04, PRB-05, PRB-06 |
| NEC-05 | Quando joga repetidamente sob condições ambientais exigentes, o atleta precisa manter hidratação e recuperação adequadas ao contexto, para preservar condição e segurança | resposta individual varia e evidência específica ainda é limitada | estado pode ser acompanhado sem transformar hipótese em orientação clínica | PRB-07 |
| NEC-06 | Quando uma regra muda, atletas e treinadores precisam compreender o que mudou e as implicações práticas, para treinar e competir pela regra vigente | atualização normativa exige interpretação | equipe atua de acordo com a edição vigente | PRB-08 |
| NEC-07 | Quando prepara um confronto, o treinador precisa obter informação útil e confiável sobre o adversário, para formular o plano de jogo | informação pode estar dispersa | preparação utiliza informação suficientemente atual e confiável | PRB-09 |
| NEC-08 | Quando participa de uma etapa, o treinador precisa cumprir obrigações administrativas sem trabalho desproporcional, para preservar tempo esportivo | possível repetição e dispersão de dados | obrigações são concluídas com previsibilidade e baixa duplicação | PRB-10 |
| NEC-09 | Quando acompanha desenvolvimento por várias temporadas, treinador e atleta precisam manter continuidade suficiente, para compreender evolução | mudança de categoria/equipe pode romper contexto | evolução pode ser interpretada longitudinalmente | PRB-11 |
| NEC-10 | Quando quer melhorar, o atleta precisa compreender o próprio desempenho e o próximo foco de desenvolvimento | feedback pode depender do tempo do treinador | atleta entende desempenho, evolução e próximo passo | PRB-12 |
| NEC-11 | Quando precisa ajustar a equipe em competição, o treinador precisa interpretar e comunicar rapidamente, para que a mudança ainda produza efeito | janela temporal curta | informação relevante chega dentro da janela de decisão | PRB-13 |
| NEC-12 | Quando organiza atividade coletiva, treinador e atletas precisam alinhar disponibilidade, local e horário, para que a sessão ocorra com continuidade | coordenação manual e disponibilidade variável | participantes sabem o combinado e o treinador conhece a disponibilidade real | PRB-14 |

Nenhuma NEC descreve tela, módulo, automação, IA, sensor ou tecnologia. Portanto, **E04 está SUSTENTADO INTEGRALMENTE como tradução dos problemas**, mas a importância relativa das NECs continua dependente do segmento que será priorizado.

</e04_necessidades>

<e05_oportunidades>

As oportunidades abaixo são direções de valor e preservam os IDs do diagnóstico existente. Elas não são funcionalidades aprovadas. fileciteturn6file1 fileciteturn6file7

| ID | Direção de oportunidade | Necessidades | Valor potencial | Condição para permanecer candidata |
|---|---|---|---|---|
| OPP-01 | Reduzir drasticamente o esforço necessário para preservar acontecimentos de treino/jogo | NEC-01 | cria matéria-prima para análise e feedback | precisa funcionar no contexto de treinador sobrecarregado |
| OPP-02 | Tornar a interpretação de desempenho nativa da lógica do handebol de praia | NEC-01, NEC-02 | evita importar indicadores sem significado suficiente | critérios esportivos devem ser definidos pelo responsável e validados |
| OPP-03 | Facilitar compreensão proporcional de exposição, carga e recuperação | NEC-03 | melhora decisão sem pressupor tecnologia cara | só vale com dados suficientemente confiáveis e esforço baixo |
| OPP-04 | Preservar continuidade do contexto do atleta ao longo do tempo | NEC-03, NEC-04, NEC-09 | reduz fragmentação entre temporadas, categorias e contextos | exige definição futura de governança e privacidade |
| OPP-05 | Eliminar repetição evitável em atividades administrativas | NEC-08 | devolve tempo ao trabalho esportivo | depende de comprovar quais dados são realmente repetidos |
| OPP-06 | Facilitar atualização prática sobre regras vigentes | NEC-06 | reduz distância entre mudança normativa e comportamento | informação deve permanecer vinculada à fonte oficial vigente |
| OPP-07 | Reduzir tempo entre observação, interpretação e ajuste competitivo | NEC-11 | aumenta chance de a informação ainda ser útil | não assumir que tecnologia supera métodos simples |
| OPP-08 | Aumentar clareza e frequência do retorno individual ao atleta | NEC-10 | melhora aprendizagem e dá valor direto ao atleta | depende de informação confiável e carga adicional mínima ao treinador |
| OPP-09 | Reduzir esforço de coordenação coletiva | NEC-12 | melhora previsibilidade de atividade | precisa demonstrar valor superior ao processo/ferramenta já usada |
| OPP-10 | Melhorar compreensão contextual de hidratação, exposição e recuperação | NEC-05 | pode apoiar prevenção de situações evitáveis | evidência atual é pequena; não transformar em prescrição clínica |
| OPP-11 | Transformar informação já produzida em conhecimento útil de adversários | NEC-07 | melhora preparação sem pressupor coleta proprietária | disponibilidade, qualidade e permissões ainda desconhecidas |
| OPP-12 | Reduzir barreiras operacionais no ambiente real de praia | NEC-01, NEC-08, NEC-12 | evita que esforço de uso destrua o valor do produto | conexão, dispositivos, sol, areia e tempo precisam ser observados em campo |
| OPP-13 | Construir conhecimento longitudinal específico do handebol de praia brasileiro | NEC-02, NEC-03 | reduz dependência exclusiva de estudos pequenos e estrangeiros | exige dados de qualidade, governança e uso ético; não é justificativa para coleta indiscriminada |

OPP-10 recebeu sustentação adicional nesta pesquisa: há evidência direta, embora muito limitada, de alteração de hidratação em contexto de torneio de praia. citeturn882399search0turn882399search1 OPP-06 também se fortaleceu, porque a IHF efetivamente introduziu uma revisão de regras relevante em abril de 2026. citeturn437086search0 OPP-01 permanece particularmente forte no contexto do clube descrito pelo responsável, no qual a ausência de analista torna o registro inviável durante a atividade. fileciteturn5file1

</e05_oportunidades>

## Necessidades compartilhadas, prioridades, questões e rastreabilidade — E06 a E09

<e06_comuns_especificas>

O diagnóstico apresenta uma assimetria importante: boa parte das necessidades é formulada pela ótica do treinador, enquanto o atleta frequentemente aparece como beneficiário ou fonte de informação. O próprio P1 anterior reconhece que isso provavelmente reflete as fontes disponíveis e que a voz direta de atletas é a maior lacuna. fileciteturn6file7

| Necessidade | Atleta | Treinador | Classificação |
|---|---|---|---|
| NEC-01 Captar acontecimentos | beneficiário posterior | executor e beneficiário | predominantemente treinador |
| NEC-02 Interpretar desempenho | beneficiário indireto | executor e beneficiário | predominantemente treinador |
| NEC-03 Compreender carga | beneficiário e participante | decisor/beneficiário | comum |
| NEC-04 Contexto de lesão/retorno | principal beneficiário e fonte | usuário da informação | comum |
| NEC-05 Hidratação/recuperação contextual | principal beneficiário | apoio/decisão | comum |
| NEC-06 Regra vigente | executor em quadra | instrutor/decisor | comum |
| NEC-07 Preparar adversário | beneficiário indireto | executor | treinador |
| NEC-08 Cumprir obrigações competitivas | fornece parte dos dados | executor frequente | predominantemente treinador |
| NEC-09 Continuidade de evolução | beneficiário | acompanhante/decisor | comum |
| NEC-10 Feedback individual | principal beneficiário | produtor/mediador | predominantemente atleta |
| NEC-11 Ajuste durante jogo | executa ajuste | interpreta e comunica | comum |
| NEC-12 Coordenação coletiva | informa disponibilidade | coordena | comum |

A principal conclusão de E06 é **SUSTENTADA PARCIALMENTE**: necessidades compartilhadas são evidentes, mas a distribuição acima ainda carrega viés de perspectiva. Não é aceitável interpretar a existência de apenas uma necessidade claramente centrada no atleta como evidência de que atletas tenham poucas necessidades; isso é antes um sinal de insuficiência de dados primários desse público.

</e06_comuns_especificas>

<e07_priorizacao>

A priorização foi refeita qualitativamente. “Alta” significa investigar antes por combinação de impacto, recorrência plausível, dependências e força da evidência; **não significa construir primeiro**.

| Faixa | IDs | Fundamentação |
|---|---|---|
| **Alta — núcleo de Discovery** | PRB-01, PRB-03, PRB-04, PRB-08 | PRB-01 tem evidência humana direta forte no clube; PRB-03 possui base científica clara sobre demandas; PRB-04 possui consequência relevante e literatura recente substancial, embora a incidência global seja baixa; PRB-08 tem mudança normativa objetiva e recente. fileciteturn5file1 citeturn437086search5turn882399search3turn437086search0 |
| **Média — relevantes, mas dependentes de contexto** | PRB-02, PRB-05, PRB-06, PRB-07, PRB-09, PRB-10, PRB-13, PRB-14 | problemas plausíveis ou observados, mas prevalência, intensidade ou processo atual não estão suficientemente descritos |
| **A validar com voz direta do atleta / base** | PRB-11, PRB-12 | podem ser centrais para valor ao atleta, mas a evidência disponível é excessivamente indireta |

O maior ajuste frente ao diagnóstico anterior é PRB-04: a prioridade permanece alta por consequência e ligação com carga/retorno, porém **não porque o handebol de praia tenha demonstrado alta incidência de lesões**. O estudo de 651 atletas aponta justamente uma incidência global considerada baixa. citeturn882399search3

PRB-01 sobe em importância relativa porque existe um contraste causalmente informativo na experiência do responsável: mesma modalidade, mas dificuldade intensa quando um treinador acumula funções e dificuldade praticamente ausente quando existe analista dedicado. Isso sugere que a verdadeira variável de segmentação pode ser **capacidade operacional da comissão**, mais do que nível competitivo ou clima. fileciteturn5file1

</e07_priorizacao>

<e08_questoes>

Somente questões capazes de alterar conclusão, prioridade ou escopo conceitual permanecem abertas. Q-09, que perguntava quais problemas o responsável havia observado, **já foi respondida** para PRB-01 a PRB-14 e não é mais pendência. fileciteturn5file3

| ID | Questão ainda material | Efeito sobre decisão |
|---|---|---|
| Q-01 | Qual contexto deve orientar a primeira concepção: clube com comissão reduzida, seleção/alto rendimento, base ou combinação explicitamente definida? | muda E01, peso dos PRBs e desenho futuro da proposta de valor |
| Q-02 | Além do contexto já documentado do responsável, como treinadores de outros perfis registram hoje treinos/jogos e o que deixam de registrar? | determina generalização de PRB-01/02 e potencial de OPP-01/02 |
| Q-03 | Quais são conexão, dispositivo disponível, posição física e tempo efetivamente utilizável na areia? | pode tornar OPP-12 central ou irrelevante |
| Q-04 | Quais decisões precisam ser tomadas durante set, intervalo, tempo técnico e pós-jogo, e quais informações realmente mudariam essas decisões? | decide relevância real de PRB-13/OPP-07 |
| Q-05 | Quão frequente é a dupla participação praia/indoor entre os usuários que se pretende atender primeiro? | altera PRB-06 e NEC-03/04 |
| Q-06 | Quem executa preparação física, prevenção, acompanhamento de lesão e retorno nos diferentes contextos? | determina se staff é dependência ou público futuro |
| Q-07 | Quais dados/documentos CBHb e federações realmente exigem, onde há duplicação e quem os preenche? | pode validar ou rebaixar PRB-10/OPP-05 |
| Q-08 | Qual parcela do público inicial é menor de idade e quais relações de responsabilidade precisam ser consideradas? | altera importância de ATL-03/NEC-09 e condiciona etapas posteriores |
| Q-10 | O que atletas consideram hoje insuficiente em feedback, desenvolvimento, histórico e autonomia? | pode reorganizar profundamente E06/E07 e revelar problemas ainda ausentes sem inventá-los antecipadamente |

Q-10 é acrescentada porque existe uma lacuna material não coberta pela pesquisa atual: nenhum conjunto representativo de atletas foi ouvido. Essa questão pode modificar de fato a concepção; não é um questionário genérico.

</e08_questoes>

<e09_rastreabilidade>

| Problema | Usuário | Necessidade | Oportunidade | Origem / evidência |
|---|---|---|---|---|
| PRB-01 | TRE | NEC-01 | OPP-01, OPP-02, OPP-12 | relato direto + análise notacional fileciteturn5file1 citeturn882399search2 |
| PRB-02 | TRE | NEC-02 | OPP-02, OPP-13 | regras + análise notacional citeturn882399search2turn851084view0 |
| PRB-03 | TRE, ATL | NEC-03 | OPP-03, OPP-13 | estudos de demanda física citeturn437086search5turn437086search2 |
| PRB-04 | ATL, TRE | NEC-04 | OPP-03, OPP-04 | epidemiologia 2025 citeturn882399search3turn882399search8 |
| PRB-05 | ATL, TRE, staff | NEC-04 | OPP-04 | observação/inferência; prevalência não verificada |
| PRB-06 | ATL-04, TRE-04 | NEC-03, NEC-04 | OPP-03, OPP-04 | inferência; frequência no público não verificada |
| PRB-07 | ATL, TRE | NEC-05 | OPP-10 | estudos pequenos de hidratação citeturn882399search0turn882399search1 |
| PRB-08 | ATL, TRE | NEC-06 | OPP-06 | regras IHF 2026 citeturn437086search0turn673224view0 |
| PRB-09 | TRE | NEC-07 | OPP-11 | HIP; existência de competição/equipes não prova dificuldade |
| PRB-10 | TRE | NEC-08 | OPP-05, OPP-12 | eventos reais + processo administrativo ainda não verificado |
| PRB-11 | TRE-03, ATL-03 | NEC-09 | OPP-04 | relato/inferência; voz da base insuficiente |
| PRB-12 | ATL | NEC-10 | OPP-08 | relato do responsável; atletas ainda não pesquisados diretamente |
| PRB-13 | TRE | NEC-11 | OPP-07 | formato/regras + observação local |
| PRB-14 | TRE, ATL | NEC-12 | OPP-09, OPP-12 | observação local; generalização não verificada |

A cadeia encerra corretamente em **oportunidade**. Não há nesta etapa decisão humana aprovando solução, funcionalidade, módulo, interface, dado obrigatório, arquitetura ou tecnologia. Isso preserva o limite definido pelo P0. fileciteturn1file0

</e09_rastreabilidade>

## Síntese executiva, conclusão e DONE — E10

<e10_sintese>

O diagnóstico é **SUSTENTADO PARCIALMENTE como retrato do público amplo e SUSTENTADO INTEGRALMENTE como base para prosseguir ao próximo estágio de concepção sem escolher funcionalidades**. A diferença é importante: existem evidências suficientes para delimitar problemas e oportunidades que merecem investigação, mas não para afirmar prevalência populacional ou determinar uma solução única.

A conclusão mais forte deste P1 é que **capacidade de registrar, preservar e transformar a experiência esportiva em informação útil atravessa grande parte das necessidades**, mas o valor depende muito da estrutura do usuário. O caso documentado do responsável mostra que uma comissão reduzida pode não conseguir registrar nada durante o jogo, enquanto uma seleção com analista dedicado praticamente elimina essa dificuldade. Assim, o problema não deve ser formulado como “falta um aplicativo de scout”, mas como “em determinados contextos, o treinador precisa preservar informação sem abandonar tarefas prioritárias”. fileciteturn5file1

O segundo eixo é **continuidade longitudinal**: carga, saúde, desenvolvimento, feedback e mudança de categoria/modalidade dependem de contexto acumulado. A pesquisa não demonstra que todo esse histórico esteja atualmente perdido no Brasil; portanto, OPP-04 permanece uma direção transversal de alto potencial, não uma necessidade tecnológica comprovada.

O terceiro eixo é **especificidade da modalidade**. As demandas intermitentes, as regras próprias e a revisão normativa de abril de 2026 tornam inadequado assumir que necessidades e indicadores do handebol indoor possam simplesmente ser reutilizados. Estudos específicos de beach handball já demonstram demandas físicas e padrões de finalização que podem informar decisões futuras. citeturn437086search5turn437086search2turn882399search2turn437086search0

Em saúde, a pesquisa exige correção de uma premissa anterior. Lesões existem e podem ter consequências relevantes, especialmente em membros inferiores, mas o melhor estudo disponível encontrou **baixa incidência global**. Portanto, PRB-04 permanece relevante para acompanhamento e retorno, porém não deve justificar produto com narrativa de que o esporte é amplamente lesionante. citeturn882399search3turn882399search8 Calor/hidratação permanece **SUSTENTADO PARCIALMENTE**, porque há resultados específicos mas amostras extremamente pequenas. citeturn882399search0turn882399search1

A maior lacuna continua sendo **a voz direta dos atletas e a diversidade de treinadores**. O responsável forneceu observações valiosas para todos os 14 problemas, o que é evidência humana legítima para sua experiência, mas não substitui investigação de outros contextos. fileciteturn5file0 Em particular, o atual inventário contém muitas necessidades operacionalizadas pelo treinador e poucas formuladas diretamente a partir da perspectiva do atleta; isso limita a segurança com que se pode definir a futura proposta de valor para esse público. fileciteturn6file7

<recomendacao>

**Recomendação para a próxima etapa:** prosseguir para a concepção/benchmark subsequente usando **PRB-01, PRB-03, PRB-04 e PRB-08 como núcleo de investigação**, mantendo PRB-11/12 deliberadamente abertos até incorporar a perspectiva dos atletas. O foco da etapa seguinte deve comparar maneiras existentes de atender NEC-01, NEC-02, NEC-03, NEC-04 e NEC-06 e verificar quais alternativas reduzem trabalho, melhoram decisão ou preservam continuidade; **não deve partir de módulos predeterminados nem converter OPP-01–OPP-13 em funcionalidades aprovadas**.

Essa recomendação é **SUSTENTADA PARCIALMENTE**: a direção é respaldada por evidência científica, regras atuais e experiência documentada do responsável, mas a ordem final de valor entre segmentos permanece sensível a Q-01, Q-02 e Q-10.

</recomendacao>

<lacunas_nao_bloqueantes>

| Lacuna | Estado | Consequência |
|---|---|---|
| prevalência dos 14 problemas entre equipes brasileiras | NÃO VERIFICADO | impede generalização; não impede P2 |
| experiência direta de atletas de diferentes níveis | NÃO DOCUMENTADO de forma suficiente | pode alterar E06/E07 |
| processo real de inscrição/documentação CBHb/federações | NÃO VERIFICADO | PRB-10 não deve orientar solução ainda |
| infraestrutura real de conectividade/dispositivos na areia | NÃO VERIFICADO | OPP-12 permanece condicional |
| distribuição praia + indoor no público pretendido | NÃO VERIFICADO | PRB-06 não pode ser tratado como universal |
| composição típica das comissões técnicas brasileiras | NÃO VERIFICADO | segmentação por capacidade operacional precisa ser validada |

</lacunas_nao_bloqueantes>

<done>

**E01:** concluído — atletas e treinadores confirmados; segmentos adicionais tratados como propostas.

**E02:** concluído — ciclo contínuo da temporada mapeado antes, durante e depois de atividades.

**E03:** concluído — 14 problemas com IDs estáveis, público, contexto, consequência, origem, evidência e relevância; PRB-04 corrigido pela literatura de 2025.

**E04:** concluído — 12 necessidades independentes de solução e vinculadas aos problemas.

**E05:** concluído — 13 oportunidades descritas como direções de melhoria, sem funcionalidades aprovadas.

**E06:** concluído — necessidades comuns e específicas comparadas; viés de perspectiva do treinador explicitado.

**E07:** concluído — prioridade qualitativa revisada sem pontuação fictícia.

**E08:** concluído — apenas perguntas capazes de modificar conclusões/prioridades foram mantidas; Q-09 reconhecida como já respondida.

**E09:** concluído — rastreabilidade PRB → usuário → NEC → OPP → evidência preservada.

**E10:** concluído — síntese e recomendação produzidas; nenhuma arquitetura, tecnologia, módulo ou funcionalidade foi aprovada.

**Estado de conclusão do P1:** **SUSTENTADO INTEGRALMENTE quanto ao cumprimento estrutural e metodológico dos entregáveis E01–E10; SUSTENTADO PARCIALMENTE quanto à validação populacional das dores.** Essa limitação não bloqueia a próxima etapa porque P1 é diagnóstico e priorização preliminar, não validação estatística do mercado.

</done>

</e10_sintese>

</relatorio>