# Glossário de Termos Especializados do Handebol de Praia

_Legenda de abreviações gramaticais: s. m. \= substantivo masculino; s. m. e f.
\= substantivo masculino e feminino._

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

**Requisito** _s. m._

enunciado que expressa uma necessidade, capacidade, propriedade, condição ou
restrição que deve ser satisfeita. A ISO/IEC/IEEE 29148:2018 continua sendo, em
13/11/2026, a edição publicada vigente; uma edição 3 está apenas em estágio de
Draft International Standard. citeturn177043search0turn177043search1
Requisito de alto nível: requisito situado próximo das necessidades de negócio,
das partes interessadas ou das capacidades do sistema, ainda sem descer
desnecessariamente para interface, arquitetura, algoritmo ou implementação.
“Alto nível” não significa vago; significa preservar o que/por quê autorizado
antes do como detalhado. A NASA recomenda requisitos no nível apropriado e sem
detalhes de implementação desnecessários. citeturn186702search1 Correção:
nesta pesquisa, propriedade composta por fidelidade à necessidade autorizada,
conformidade com o domínio, qualidade técnica da especificação e evidência
suficiente para aprovação. Essa decomposição é também a referência congelada no
oráculo do usuário, mas o próprio oráculo determina que ela é critério de
avaliação, não prova científica da eficácia do AI-REF. fileciteturn1file0
Verificação: pergunta “o requisito está escrito de modo tecnicamente adequado
segundo os critérios definidos?”. Pode tratar clareza, singularidade,
ambiguidade, consistência, verificabilidade e rastreabilidade. Validação:
pergunta “este é o requisito certo, correspondente ao sistema pretendido pelas
partes interessadas?”. A definição oficial da ISO distingue explicitamente
validação de requisitos como confirmação de que eles definem o sistema correto
conforme a intenção dos stakeholders. citeturn186702search2 Autoridade:
pessoa, decisão ou fonte autorizada a determinar uma necessidade, regra ou
restrição. Um LLM pode propor uma interpretação; não adquire autoridade sobre
uma decisão de negócio apenas por formular uma frase plausível. Ground truth /
verdade de referência: conjunto de respostas ou julgamentos usados como
referência independente para medir a saída da IA. Em português operacional,
equivale ao “gabarito” contra o qual o resultado será comparado. Oráculo
congelado: ground truth e regras de avaliação fixados antes de observar o
resultado que será julgado, para impedir que o critério seja alterado
retroativamente. Grounding: obrigar a geração a permanecer apoiada em fontes
fornecidas ou recuperadas, em vez de depender apenas do conhecimento interno do
modelo. RAG — Retrieval-Augmented Generation: geração apoiada em recuperação de
documentos relevantes. É uma técnica de grounding; não é, por si, prova de que a
informação recuperada é autorizada, completa ou correta. Rastreabilidade:
ligação verificável entre requisito e suas fontes, necessidades, decisões,
requisitos derivados e evidências de validação. A NASA exige manutenção da
rastreabilidade bidirecional durante a gestão de requisitos.
citeturn726075search2 Precisão: entre os itens produzidos pela IA, proporção
dos que são realmente corretos segundo o oráculo definido. Recall / cobertura:
entre os itens corretos que deveriam ser encontrados, proporção efetivamente
encontrada. F1: média harmônica entre precisão e recall; é útil quando ambos
importam, mas pode esconder consequências muito diferentes entre um requisito
omitido e um requisito inventado. Alucinação/invenção: conteúdo apresentado como
requisito, fato ou restrição sem sustentação na autoridade ou fonte válida
correspondente. LLM-as-a-Judge: uso de outro LLM, ou do próprio modelo, para
avaliar requisitos. Pode ser útil como filtro de baixo custo, mas não constitui
automaticamente validação independente. Baseline: referência fixa contra a qual
versões ou resultados posteriores são comparados. Expressões compostas, verbos e
ações Elicitar requisitos: descobrir necessidades, restrições, objetivos e
pressupostos junto a stakeholders e fontes de domínio. Gerar requisitos:
converter material de entrada em candidatos a requisitos. Refinar requisitos:
melhorar forma, decomposição, precisão ou verificabilidade sem introduzir
decisões não autorizadas. Verificar requisitos: testar características da
especificação contra critérios predefinidos. Validar requisitos: confirmar com
autoridade e evidência que o conteúdo representa a necessidade correta. Congelar
o oráculo: fixar entradas de referência, rótulos, métricas, regras de decisão e
critérios de parada antes da avaliação. Avaliar independentemente: comparar o
resultado contra uma referência que não foi criada ou ajustada pelo mesmo
processo gerador para fazê-lo passar. Proposição central do prompt A pergunta
não é “como fazer a IA escrever requisitos que parecem bons?”, mas como
organizar geração, grounding, controle de autoridade, verificação, validação e
mensuração de modo que requisitos de alto nível tenham probabilidade muito
elevada de estar corretos — sem afirmar essa confiabilidade antes que ela seja
demonstrada em um teste independente e pré-especificado.

<resposta_central> Glossário essencial Substantivos e conceitos centrais

Requisito correto: uma necessidade ou capacidade especificada fielmente, sem
distorções, omissões materiais ou decisões inventadas. Requisito de alto nível:
descreve o que o sistema precisa proporcionar e por quê, sem antecipar
desnecessariamente como será implementado. Grounding: utilização de fontes
identificáveis para fundamentar aquilo que a IA escreve. Oráculo: referência
independente utilizada para determinar se o resultado está correto.
Confiabilidade: probabilidade de produzir e aprovar requisitos corretos,
demonstrada por resultados de avaliação.

Expressões compostas

Gerar requisitos: produzir propostas de requisitos a partir de informações
fornecidas. Verificar requisitos: avaliar se estão tecnicamente bem
especificados. Validar requisitos: confirmar se representam as necessidades e
decisões corretas.

Proposição central: explicar o que a pesquisa descobriu, quais conclusões são
sustentadas e como utilizar esses conhecimentos para alcançar o objetivo
original. Glossário essencial Procedimento operacional: sequência de instruções
que determina entradas, ações, saídas, verificações e condições de conclusão.
Especificação executável: instruções suficientemente precisas para que a IA
realize uma tarefa sem inventar decisões. Oráculo de requisitos: referência que
permite verificar se os requisitos produzidos correspondem às necessidades e
decisões autorizadas.

Proposição central: determinar se os resultados obtidos já permitem executar, de
ponta a ponta, a escrita de requisitos corretos e de alto nível com IA.

Glossário granular Substantivos e conceitos centrais

Contrato de saída: especificação dos arquivos, campos e evidências que devem ser
entregues ao concluir o trabalho. Matriz de rastreabilidade: registro das
relações entre requisitos, necessidades, decisões e fontes originais. Baseline:
versão identificada dos requisitos e das decisões usadas como referência. Rodada
de refinamento: ciclo de correção de defeitos específicos identificados na
formulação ou na V&V. Critério de parada: condição objetiva que determina quando
encerrar uma rodada ou interromper o refinamento.

Expressões compostas

Encerrar o refinamento: cessar as alterações automáticas, registrando o motivo e
a situação dos requisitos. Aprovar a especificação: registrar a aceitação do
conjunto pela autoridade competente. Controlar alterações: preservar a versão
anterior e identificar exatamente o que mudou.

Proposição central: definir como o AI-REF entrega seus requisitos de alto nível,
demonstra sua origem e encerra o refinamento sem confundir conclusão da tarefa
com aprovação do produto.

Glossário granular Substantivos e conceitos centrais

Oráculo operacional: conjunto de critérios fixados antecipadamente para
determinar o estado de cada requisito. Gabarito: referência que descreve os
resultados esperados para situações conhecidas, permitindo verificar se o
procedimento de classificação funciona. Critério de aceite: condição objetiva
que precisa ser demonstrada antes de uma aprovação. Baseline: versão
identificada e controlada de um requisito ou conjunto de requisitos. Evidência
de aprovação: registro verificável de uma decisão tomada por quem possui
autoridade. Pendência bloqueante: informação ou decisão ausente que impede
aprovar o objeto avaliado.

Expressões compostas

Pré-congelar o oráculo: fixar regras, versões e expectativas antes de avaliar os
resultados. Classificar um requisito: aplicar os critérios definidos às
evidências, sem alterar os critérios para obter um resultado desejado. Autorizar
uma alteração: registrar uma decisão que modifica uma referência anteriormente
aprovada.

Proposição central: criar o instrumento de decisão que recebe os resultados da
V&V e classifica cada requisito como APROVADO, PENDENTE ou REPROVADO, sem
atribuir autoridade decisória à própria IA.

Fundamentação técnica oficial A NASA — Technical Requirements Definition orienta
a examinar se os requisitos estão corretamente escritos, possuem
rastreabilidade, utilizam pressupostos válidos, satisfazem os stakeholders e são
verificáveis. A NASA — How to Write a Good Requirement oferece critérios para
avaliar necessidade, correção, singularidade e rastreabilidade. A NASA — How to
Write a Good Requirement oferece critérios para avaliar necessidade, correção,
singularidade e rastreabilidade. A NASA — Requirements Management estabelece o
controle das relações entre necessidades, requisitos derivados e evidências,
inclusive a identificação de requisitos sem justificativa suficiente. NASA NASA
NASA A NASA — Requirements Management estabelece o controle das relações entre
necessidades, requisitos derivados e evidências, inclusive a identificação de
requisitos sem justificativa suficiente. NASA NASA NASA

Glossário operacional Termo Definição Consolidação Transformar os fundamentos do
AI-REF em instruções precisas, coerentes e executáveis. Procedimento operacional
Define entradas, operações, responsáveis, saídas, verificações e condições de
conclusão. Contrato de execução Regras que a IA deve cumprir para realizar a
tarefa sem extrapolar sua autoridade. Oráculo Referência independente utilizada
para determinar a correção de um resultado. Gate de aprovação Condição que
determina se um requisito pode ser aceito ou deve permanecer pendente ou
reprovado.

Proposição central: identificar o trabalho estritamente necessário para
converter o AI-REF em um procedimento utilizável para escrever requisitos de
software corretos e de alto nível com IA.

Glossário granular Substantivos e conceitos centrais

Pacote de entrada: conjunto estruturado de informações que a IA recebe antes de
escrever os requisitos. Fonte: documento, entrevista, registro ou evidência que
fornece informações sobre o projeto. Autoridade normativa: capacidade de uma
fonte impor uma obrigação aplicável ao projeto. Pode decorrer de legislação,
regulamento, contrato ou decisão interna competente. Fonte informativa: material
que contribui para compreender o problema, mas não autoriza, por si só, criar
obrigações. Proveniência: identificação exata de onde veio determinada
informação. Aplicabilidade: confirmação de que uma obrigação se aplica à
situação, ao projeto e ao período considerado.

Expressões compostas

Qualificar uma fonte: verificar origem, conteúdo, versão, vigência, autoridade e
aplicabilidade. Registrar uma decisão: preservar quem decidiu, o que foi
decidido, quando, com qual alcance e em qual evidência. Preparar a entrada da
IA: organizar informações em um formato definido, sem converter hipóteses em
decisões.

Proposição central: estabelecer um modelo de entrada preciso, reutilizável e
verificável para fornecer objetivos, entrevistas, decisões, regras de domínio e
restrições à IA. Glossário granular Substantivos e conceitos centrais

Formulação: transformação de necessidades e decisões autorizadas em declarações
de requisitos. Requisito de negócio: objetivo, resultado ou condição que
justifica a iniciativa. Requisito de stakeholder: necessidade que determinada
parte interessada precisa satisfazer para alcançar o objetivo de negócio.
Requisito de sistema: capacidade ou qualidade que o sistema precisa oferecer
para atender aos requisitos superiores. Nível de abstração: grau de detalhamento
de uma declaração. Alto nível não significa redação vaga. Candidato: requisito
formulado, mas ainda não aprovado.

Expressões compostas

Derivar um requisito: produzir uma declaração sustentada por uma necessidade ou
obrigação anterior, preservando seu significado. Evitar implementação prematura:
não introduzir decisões de interface, armazenamento, algoritmos ou arquitetura
que não sejam necessárias e autorizadas. Preservar rastreabilidade: manter a
ligação entre a formulação, a necessidade e suas fontes originais.

Proposição central: transformar as necessidades autorizadas da etapa de
interpretação em requisitos de negócio, stakeholders e sistema, mantendo
rigorosamente o alto nível de abstração.

Glossário granular Substantivos e conceitos centrais

Verificação: avaliação da qualidade técnica de um requisito, incluindo clareza,
singularidade, consistência, completude e rastreabilidade. Validação:
confirmação de que o requisito representa a necessidade e a intenção corretas da
autoridade competente. Fidelidade à fonte: correspondência entre cada obrigação
formulada e o conteúdo que a fundamenta. Contradição: incompatibilidade entre
afirmações aplicáveis ao mesmo contexto. Singularidade: propriedade de um
requisito que expressa uma unidade de obrigação, sem reunir comportamentos
independentes. Completude reversa: conferência que parte das necessidades e
decisões autorizadas para verificar se todas receberam tratamento adequado.
Rastreabilidade bidirecional: capacidade de navegar do requisito até sua origem
e da origem até os requisitos ou decisões relacionados.

Expressões compostas

Verificar sustentação: comparar o significado de cada requisito com sua
evidência original. Validar a intenção: confirmar com a autoridade responsável
se a interpretação corresponde ao resultado pretendido. Congelar o oráculo:
fixar os critérios e resultados esperados antes de avaliar os candidatos.

Proposição central: estabelecer um procedimento executável de V&V para os
requisitos candidatos produzidos pelo AI-REF, sem alterar decisões anteriores ou
introduzir requisitos novos. Glossário granular Substantivos e conceitos
centrais

Inventário qualificado: conjunto de objetivos, entrevistas, decisões, regras e
restrições cujas fontes e autoridades já foram identificadas. Necessidade bruta:
necessidade expressa ou sugerida pelo material original, ainda sem confirmação
de que deva se tornar requisito. Fato documentado: afirmação cuja presença no
documento original foi confirmada. Isso não significa necessariamente que seja
verdadeira fora daquele documento. Hipótese: explicação ou possibilidade ainda
não comprovada. Ambiguidade: expressão que admite interpretações materialmente
diferentes. Lacuna: informação necessária que não foi encontrada ou não está
suficientemente definida. Requisito candidato: formulação preliminar de uma
capacidade, condição ou restrição, ainda sujeita à verificação e aprovação.

Expressões compostas

Preservar significado: manter atores, ações, condições, exceções, negações,
quantidades e limites estabelecidos na origem. Normalizar necessidades:
transformar declarações heterogêneas em registros comparáveis, sem alterar seu
conteúdo. Identificar decisões pendentes: reconhecer escolhas que dependem de
autoridade humana e que não podem ser resolvidas por inferência da IA.

Proposição central: transformar o inventário qualificado do AI-REF em
necessidades identificáveis e candidatos a requisitos de alto nível, preservando
a origem e a autoridade de cada informação.

Glossário granular Substantivos e conceitos centrais Inventário qualificado:
conjunto de objetivos, entrevistas, decisões, regras e restrições cujas fontes e
autoridades já foram identificadas. Necessidade bruta: necessidade expressa ou
sugerida pelo material original, ainda sem confirmação de que deva se tornar
requisito. Fato documentado: afirmação cuja presença no documento original foi
confirmada. Isso não significa necessariamente que seja verdadeira fora daquele
documento. Hipótese: explicação ou possibilidade ainda não comprovada.
Ambiguidade: expressão que admite interpretações materialmente diferentes.
Lacuna: informação necessária que não foi encontrada ou não está suficientemente
definida. Requisito candidato: formulação preliminar de uma capacidade, condição
ou restrição, ainda sujeita à verificação e aprovação. Expressões compostas
Preservar significado: manter atores, ações, condições, exceções, negações,
quantidades e limites estabelecidos na origem. Normalizar necessidades:
transformar declarações heterogêneas em registros comparáveis, sem alterar seu
conteúdo. Identificar decisões pendentes: reconhecer escolhas que dependem de
autoridade humana e que não podem ser resolvidas por inferência da IA.
Proposição central: transformar o inventário qualificado do AI-REF em
necessidades identificáveis e candidatos a requisitos de alto nível, preservando
a origem e a autoridade de cada informação. Glossário essencial Procedimento
operacional: sequência de instruções que determina entradas, ações, saídas,
verificações e condições de conclusão. Especificação executável: instruções
suficientemente precisas para que a IA realize uma tarefa sem inventar decisões.
Oráculo de requisitos: referência que permite verificar se os requisitos
produzidos correspondem às necessidades e decisões autorizadas. Proposição
central: determinar se os resultados obtidos já permitem executar, de ponta a
ponta, a escrita de requisitos corretos e de alto nível com IA. Glossário
operacional Termo Definição Consolidação Transformar os fundamentos do AI-REF em
instruções precisas, coerentes e executáveis. Procedimento operacional Define
entradas, operações, responsáveis, saídas, verificações e condições de
conclusão. Contrato de execução Regras que a IA deve cumprir para realizar a
tarefa sem extrapolar sua autoridade. Oráculo Referência independente utilizada
para determinar a correção de um resultado. Gate de aprovação Condição que
determina se um requisito pode ser aceito ou deve permanecer pendente ou
reprovado.

Proposição central: identificar o trabalho estritamente necessário para
converter o AI-REF em um procedimento utilizável para escrever requisitos de
software corretos e de alto nível com IA. <glossario>

## Glossário granular e recursivo

- **Substantivos e conceitos centrais**
  - **Requisito**: enunciado que expressa uma necessidade, capacidade,
    propriedade, condição ou restrição que deve ser satisfeita. A ISO/IEC/IEEE
    29148:2018 continua sendo, em 13/11/2026, a edição publicada vigente; uma
    edição 3 está apenas em estágio de Draft International Standard.
    citeturn177043search0turn177043search1
  - **Requisito de alto nível**: requisito situado próximo das necessidades de
    negócio, das partes interessadas ou das capacidades do sistema, ainda sem
    descer desnecessariamente para interface, arquitetura, algoritmo ou
    implementação. “Alto nível” não significa vago; significa preservar o
    **que/por quê** autorizado antes do **como** detalhado. A NASA recomenda
    requisitos no nível apropriado e sem detalhes de implementação
    desnecessários. citeturn186702search1
  - **Correção**: nesta pesquisa, propriedade composta por fidelidade à
    necessidade autorizada, conformidade com o domínio, qualidade técnica da
    especificação e evidência suficiente para aprovação. Essa decomposição é
    também a referência congelada no oráculo do usuário, mas o próprio oráculo
    determina que ela é critério de avaliação, não prova científica da eficácia
    do AI-REF. fileciteturn1file0
  - **Verificação**: pergunta “o requisito está escrito de modo tecnicamente
    adequado segundo os critérios definidos?”. Pode tratar clareza,
    singularidade, ambiguidade, consistência, verificabilidade e
    rastreabilidade.
  - **Validação**: pergunta “este é o requisito certo, correspondente ao sistema
    pretendido pelas partes interessadas?”. A definição oficial da ISO distingue
    explicitamente validação de requisitos como confirmação de que eles definem
    o sistema correto conforme a intenção dos stakeholders.
    citeturn186702search2
  - **Autoridade**: pessoa, decisão ou fonte autorizada a determinar uma
    necessidade, regra ou restrição. Um LLM pode propor uma interpretação; não
    adquire autoridade sobre uma decisão de negócio apenas por formular uma
    frase plausível.
  - **Ground truth / verdade de referência**: conjunto de respostas ou
    julgamentos usados como referência independente para medir a saída da IA. Em
    português operacional, equivale ao “gabarito” contra o qual o resultado será
    comparado.
  - **Oráculo congelado**: ground truth e regras de avaliação fixados antes de
    observar o resultado que será julgado, para impedir que o critério seja
    alterado retroativamente.
  - **Grounding**: obrigar a geração a permanecer apoiada em fontes fornecidas
    ou recuperadas, em vez de depender apenas do conhecimento interno do modelo.
  - **RAG — Retrieval-Augmented Generation**: geração apoiada em recuperação de
    documentos relevantes. É uma técnica de grounding; não é, por si, prova de
    que a informação recuperada é autorizada, completa ou correta.
  - **Rastreabilidade**: ligação verificável entre requisito e suas fontes,
    necessidades, decisões, requisitos derivados e evidências de validação. A
    NASA exige manutenção da rastreabilidade bidirecional durante a gestão de
    requisitos. citeturn726075search2
  - **Precisão**: entre os itens produzidos pela IA, proporção dos que são
    realmente corretos segundo o oráculo definido.
  - **Recall / cobertura**: entre os itens corretos que deveriam ser
    encontrados, proporção efetivamente encontrada.
  - **F1**: média harmônica entre precisão e recall; é útil quando ambos
    importam, mas pode esconder consequências muito diferentes entre um
    requisito omitido e um requisito inventado.
  - **Alucinação/invenção**: conteúdo apresentado como requisito, fato ou
    restrição sem sustentação na autoridade ou fonte válida correspondente.
  - **LLM-as-a-Judge**: uso de outro LLM, ou do próprio modelo, para avaliar
    requisitos. Pode ser útil como filtro de baixo custo, mas não constitui
    automaticamente validação independente.
  - **Baseline**: referência fixa contra a qual versões ou resultados
    posteriores são comparados.
- **Expressões compostas, verbos e ações**
  - **Elicitar requisitos**: descobrir necessidades, restrições, objetivos e
    pressupostos junto a stakeholders e fontes de domínio.
  - **Gerar requisitos**: converter material de entrada em candidatos a
    requisitos.
  - **Refinar requisitos**: melhorar forma, decomposição, precisão ou
    verificabilidade sem introduzir decisões não autorizadas.
  - **Verificar requisitos**: testar características da especificação contra
    critérios predefinidos.
  - **Validar requisitos**: confirmar com autoridade e evidência que o conteúdo
    representa a necessidade correta.
  - **Congelar o oráculo**: fixar entradas de referência, rótulos, métricas,
    regras de decisão e critérios de parada antes da avaliação.
  - **Avaliar independentemente**: comparar o resultado contra uma referência
    que não foi criada ou ajustada pelo mesmo processo gerador para fazê-lo
    passar.

- **Proposição central do prompt**
  - A pergunta não é “como fazer a IA escrever requisitos que parecem bons?”,
    mas **como organizar geração, grounding, controle de autoridade,
    verificação, validação e mensuração de modo que requisitos de alto nível
    tenham probabilidade muito elevada de estar corretos — sem afirmar essa
    confiabilidade antes que ela seja demonstrada em um teste independente e
    pré-especificado**.

</glossario>
