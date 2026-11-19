---
documento_id: 'DOC-TRACE-TECH-001'
tipo: 'especificacao-tecnica'
versao: '2.0.0'
caminho_canonico: 'rastreabilidade-tecnica.md'
criado_em: '2026-11-12'
atualizado_em: '2026-11-13'
fase_documento: 'draft'
status_aprovacao: 'revisao'
status_implementacao: 'em-progresso'
---

# Rastreabilidade

## Contrato do documento

| Propriedade      | Definição                                                                            |
| ---------------- | ------------------------------------------------------------------------------------ |
| Papel            | explicar critérios, decisões e vínculos técnicos da rastreabilidade                  |
| Objetivo         | permitir percorrer origem, regra, implementação, caso e evidência nos dois sentidos  |
| Escopo           | unidades `WA-*`, marcadores `RT-*` e migração da automação legada                    |
| Caminho canônico | `rastreabilidade-tecnica.md`                                                         |
| Autoridade       | orienta agentes tecnicamente, subordinado à norma e à governança de testes           |
| Contexto mínimo  | contrato, regra `RT-*` afetada, critério relacionado e unidade de origem             |
| Dependências     | regras normativas, técnicas estruturais, registro-fonte e governança de testes       |
| Restrições       | não declarar autenticidade; não usar legado como aceite; não apagar comentários HTML |
| Riscos mitigados | regra sem evidência, código sem decisão, teste órfão e falsa validação               |

> **Estado da automação legada:** inválida para aceite. Os arquivos
> `scripts/validar-rastreabilidade.sh` e `scripts/testar-rastreabilidade.sh`
> foram preservados somente como fonte histórica de cenários. Eles não possuem
> proveniência TDD, configuração completa, registros persistentes de execução
> nem validação independente. Nenhum resultado produzido por esses scripts
> comprova conformidade enquanto os casos não forem migrados para a governança
> vigente.

As 8 conversas receberam identificadores inequívocos no
[registro das conversas](./mensagens-treinadores.md#exportação-das-conversas-do-whatsapp).

<!-- Por que esse link acima para o arquivo mensagens-treinadores.  é necessário e por que tem :14 no final?
Quais identificadores foram inseridos?
 -->

**Regra essencial `RT-RULE-001` — Toda afirmação rastreável deve apontar para
sua evidência de origem.**

O link aponta para o registro-fonte em que os identificadores foram inseridos.
Ele é necessário para manter a rastreabilidade entre esta síntese e a evidência
original, permitindo localizar e conferir diretamente os dados de cada conversa.

<!-- Aqui no VS code o link não abre o arquivo, mostrando a mensagem de que o arquivo não existe.Se alguem alterar o arquivo com as mensagens dos treinadores a rastreabiliade será quebrada? -->

**Regra essencial `RT-RULE-002` — A navegação deve usar caminho relativo e
âncora estável, nunca número de linha permanente.**

O link foi escrito como um caminho relativo ao próprio documento, sem o sufixo
`:14`, para funcionar no Visual Studio Code e em renderizadores Markdown
convencionais. O formato anterior tratava `:14` como parte do nome do arquivo em
algumas interfaces e, por isso, podia gerar a mensagem de arquivo inexistente.
Além disso, uma referência por número de linha é instável: qualquer inclusão ou
remoção anterior ao ponto indicado altera a linha, mesmo que a conversa continue
intacta.

<!-- Ao remover o `:14`,para solucionar o problema, você fez o agente ter que ler todo o arquivo para achar o id. Qual é a solução para apontar para o local exato do registro-fonte em que os identificadores estão inseridos? -->

A solução aplicada é usar uma âncora baseada no próprio identificador. Cada
conversa no arquivo-fonte começa com um título Markdown de terceiro nível, como
`### WA-20261111-001`. O Visual Studio Code transforma esse título na âncora
`#wa-20261111-001`, permitindo abrir diretamente o bloco com um link como
`./mensagens-treinadores.md#wa-20261111-001`. Como a âncora deriva de um ID
estável, inserções ou remoções em outras partes do arquivo não alteram o
destino. Para buscas automatizadas, o mesmo ponto pode ser localizado sem ler
todo o documento com `rg -nF '### WA-20261111-001' mensagens-treinadores.md`. O
validador também confere que cada âncora corresponde ao ID do respectivo bloco.

Alterar o arquivo não rompe necessariamente a rastreabilidade. Inclusões que
apenas deslocam linhas não afetam o link relativo nem os identificadores.
Entretanto, renomear, mover ou excluir o arquivo quebra o link; remover,
duplicar ou trocar os identificadores quebra a associação lógica; e modificar o
conteúdo das conversas pode comprometer a integridade da evidência, ainda que os
IDs permaneçam.

**Regra essencial `RT-RULE-007` — Validade estrutural não deve ser apresentada
como prova de autenticidade ou integridade histórica.**

O validador descrito abaixo verifica estrutura, formato e unicidade, mas não
comprova que o texto original nunca foi alterado. Para essa garantia adicional,
o arquivo deve permanecer sob controle de versão e, quando necessário, ter uma
versão ou soma de verificação registrada.

- [`WA-20261111-001`](./mensagens-treinadores.md#wa-20261111-001) — Niterói
  Rugby
- [`WA-20261111-002`](./mensagens-treinadores.md#wa-20261111-002) — APCEF/PB
- [`WA-20261111-003`](./mensagens-treinadores.md#wa-20261111-003) — Campinas
  360º Nas Areias
- [`WA-20261111-004`](./mensagens-treinadores.md#wa-20261111-004) — A. BUD’S
  Handbeach
- [`WA-20261111-005`](./mensagens-treinadores.md#wa-20261111-005) — ADM Maricá
- [`WA-20261111-006`](./mensagens-treinadores.md#wa-20261111-006) — IDEC
- [`WA-20261111-007`](./mensagens-treinadores.md#wa-20261111-007) — Associação
  de Handebol de Paranaguá
- [`WA-20261111-008`](./mensagens-treinadores.md#wa-20261111-008) — Rio
  Handbeach

### Unidades de mensagem

**Regra essencial `RT-RULE-004` — Cada mensagem deve possuir ID hierárquico,
âncora idêntica e uma linha temporal associada.**

As 31 mensagens receberam identificadores hierárquicos no formato
`ID-DA-CONVERSA-MNNN`. Por exemplo,
[`WA-20261111-001-M001`](./mensagens-treinadores.md#wa-20261111-001-m001)
identifica a primeira mensagem da conversa `WA-20261111-001`. O componente
`MNNN` diferencia mensagens dentro da mesma conversa, inclusive quando duas
delas possuem o mesmo horário. Cada unidade contém uma âncora Markdown, um campo
`ID da mensagem` com o mesmo valor e uma única linha temporal da mensagem.

**Regra essencial `RT-RULE-005` — IDs publicados são imutáveis, não
reutilizáveis e não devem ser renumerados.**

Os IDs atribuídos são imutáveis. Se uma mensagem anteriormente ausente for
recuperada, ela deve receber o próximo sufixo ainda não utilizado na conversa,
sem renumerar as unidades existentes; sua posição cronológica deve ser
determinada pelo timestamp, não pelo número sequencial. Essa regra preserva
links e referências já emitidos.

| Conversa          | Faixa de mensagens | Quantidade |
| ----------------- | ------------------ | ---------: |
| `WA-20261111-001` | `M001`–`M008`      |          8 |
| `WA-20261111-002` | `M001`–`M004`      |          4 |
| `WA-20261111-003` | `M001`–`M005`      |          5 |
| `WA-20261111-004` | `M001`–`M004`      |          4 |
| `WA-20261111-005` | `M001`–`M003`      |          3 |
| `WA-20261111-006` | `M001`–`M005`      |          5 |
| `WA-20261111-007` | `M001`             |          1 |
| `WA-20261111-008` | `M001`             |          1 |

**Regra essencial `RT-RULE-003` — Cada conversa deve possuir ID único no formato
`WA-AAAAMMDD-NNN`, com âncora e campo de ID correspondentes.**

O padrão adotado é `WA-AAAAMMDD-NNN`: origem WhatsApp, data das mensagens e
sequência única.

<!-- por que dentre várias técnicas existentes, por que usar esse padrão? -->

Esse padrão foi escolhido porque é legível por pessoas, ordenável
cronologicamente e simples de conferir sem ferramentas especializadas. O prefixo
`WA` identifica a origem do registro, `AAAAMMDD` preserva o contexto temporal e
`NNN` diferencia conversas da mesma data. Para este conjunto pequeno e
controlado, ele oferece rastreabilidade suficiente com menor complexidade do que
identificadores aleatórios, como UUIDs. A sequência deve ser administrada como
um registro único para impedir a reutilização de um identificador.

<!--
Identifique o mecanismo de verificação e validação adotado
Explique como foi feita a verificação e a validação para concluir: "A validação confirmou um identificador para cada conversa."
-->

## Mecanismo de verificação e validação

Foi adotada uma validação estrutural automatizada, baseada em quatro critérios:
<!-- Se foi adotada uma validação estrutural automatizada, baseada em quatro critérios, então onde está o script, verificado e validado que fez isso? -->

1. contagem dos cabeçalhos `Equipe`, para determinar o total de conversas;
2. contagem dos campos `ID da conversa` e das âncoras que correspondem ao
   formato `WA-[0-9]{8}-[0-9]{3}`;
3. deduplicação dos identificadores, para verificar sua unicidade;
4. inspeção de cada bloco, para confirmar que existe exatamente uma âncora e um
   identificador, ambos com o mesmo valor, entre um cabeçalho de equipe e o
   seguinte;
5. validação dos nomes, cardinalidades, domínios e relações de coerência dos
   metadados obrigatórios.

O procedimento legado está implementado em `scripts/validar-rastreabilidade.sh`,
localizável no VS Code pelo marcador `RT-VER-001`. Ele pode ser reproduzido a
partir da raiz do diretório de trabalho com:

```bash
./scripts/validar-rastreabilidade.sh
```

O script legado chegou a ser executado sobre o arquivo real e contém cenários de
sucesso e falha, mas essa execução não deixou os registros necessários para
constituir evidência válida. Os cenários incluem identificadores ou âncoras
ausentes, duplicados, divergentes ou malformados; associação à conversa errada;
unidade sem linha temporal; metadado ausente, duplicado, desconhecido ou fora do
domínio; data incompatível; link documental divergente; arquivo inacessível e
ausência de conversas. Esses cenários são inventário de migração, não testes
aprovados.

A execução sobre o arquivo real encontrou 8 cabeçalhos de equipe, 8 âncoras
válidas, 8 identificadores válidos, 8 valores únicos, 8 blocos com metadados
válidos e zero divergências entre as âncoras e os IDs dos blocos.

<!-- Encontrar 8 cabeçalhos de equipe, 8 identificadores válidos e 8 valores únicos, signifiac que cada conversa possui identificador válido? -->

As três contagens, isoladamente, não seriam suficientes para afirmar que cada
conversa possui um identificador: seria possível existir um bloco com dois IDs e
outro sem nenhum, mantendo os totais iguais. A conclusão é válida porque as
contagens foram combinadas com o quarto critério, que percorre individualmente
os blocos e exige exatamente um ID em cada um. A unicidade assegura, então, que
esse ID não é compartilhado com outra conversa. Portanto, a validação confirmou
um identificador válido e exclusivo para cada uma das 8 conversas.

<!-- Identifique o que é considerado válido para que o script possa validar.
Quais são os critérios de validação? Por que esses critérios validam? Por que esses critérios não invalidam? O que deve ser verificado e como? O que deve ser validado e como? -->

## Critérios de aceitação e escopo

**Regra essencial `RT-RULE-006` — A aceitação exige totalidade, singularidade,
exclusividade, correspondência e completude.**

**Regra essencial `RT-RULE-011` — Metadados somente são rastreáveis quando usam
nomes canônicos, cardinalidade declarada, domínio controlado e validação
executável.**

O vocabulário, as cardinalidades, os consumidores operacionais e as camadas de
validação estão definidos no
[esquema controlado de metadados](./regras-rastreabilidade.md#29-esquema-controlado-de-metadados).
Essa conexão permite partir da afirmação técnica para a norma e retornar pelo
mesmo marcador `RT-RULE-011`.

Neste procedimento, um **identificador válido de conversa** é um valor escrito
exatamente no formato `WA-AAAAMMDD-NNN`, com oito algarismos na parte da data e
três algarismos na sequência. Uma **conversa estruturalmente válida** é um bloco
iniciado por `Equipe` que possui exatamente uma âncora Markdown e exatamente um
campo `ID da conversa`, ambos válidos, iguais e não utilizados em nenhum outro
bloco. Um **identificador válido de mensagem** acrescenta o sufixo `-MNNN`. Uma
**unidade de mensagem válida** possui uma âncora, um campo `ID da mensagem`
idêntico, uma linha temporal e o prefixo completo da conversa à qual pertence.

Essa definição de validade é estrutural e está limitada à afirmação de
rastreabilidade feita neste documento: cada bloco de conversa pode ser
identificado e localizado de forma exclusiva. Ela verifica a correspondência
textual entre a data codificada no ID e a data declarada, mas não atesta, por si
só, a autenticidade das mensagens, a correção dos nomes e telefones, a realidade
histórica da data ou a ausência de alterações no conteúdo. Esses aspectos exigem
controles adicionais de integridade e conferência da fonte.

Os critérios aplicados pelo script são:

| ID rastreável | Critério                             | O que é verificado                                                                      | Como é verificado                                                     | Condição que invalida                                                 | Teste associado                             |
| ------------- | ------------------------------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------- |
| `RT-CRIT-001` | Arquivos acessíveis                  | A fonte e o documento de rastreabilidade podem ser lidos                                | teste de leitura antes do processamento                               | arquivo ausente ou sem permissão de leitura                           | `RT-TEST-007`                               |
| `RT-CRIT-002` | Existência de conversas              | Há pelo menos um bloco `Equipe`                                                         | contagem dos cabeçalhos                                               | nenhum bloco encontrado                                               | `RT-TEST-008`                               |
| `RT-CRIT-003` | Formato                              | Âncoras e IDs seguem `WA-AAAAMMDD-NNN`                                                  | comparação com o padrão aceito                                        | valor malformado ou campo com texto adicional                         | `RT-TEST-009`                               |
| `RT-CRIT-004` | Cardinalidade                        | Cada bloco possui uma âncora e um ID                                                    | contagem individual dentro de cada bloco                              | item ausente ou repetido no mesmo bloco                               | `RT-TEST-003`, `RT-TEST-005`                |
| `RT-CRIT-005` | Correspondência                      | A âncora e o ID do bloco têm o mesmo valor                                              | comparação direta entre os dois valores                               | valores divergentes                                                   | `RT-TEST-004`                               |
| `RT-CRIT-006` | Unicidade                            | Um ID ou uma âncora não é reutilizado                                                   | registro e detecção de duplicatas                                     | valor presente em mais de um bloco                                    | `RT-TEST-002`, `RT-TEST-010`                |
| `RT-CRIT-007` | Completude                           | As quantidades de blocos, âncoras válidas e IDs válidos coincidem                       | comparação das contagens finais                                       | totais diferentes                                                     | `RT-TEST-003`, `RT-TEST-005`                |
| `RT-CRIT-008` | Formato da mensagem                  | Âncoras e IDs de mensagem seguem `WA-AAAAMMDD-NNN-MNNN`                                 | comparação com o padrão aceito                                        | valor malformado ou campo com texto adicional                         | `RT-TEST-012`                               |
| `RT-CRIT-009` | Associação da mensagem               | Cada unidade possui uma âncora, um ID igual, uma linha temporal e o prefixo da conversa | inspeção individual de cada unidade                                   | item ausente, divergente ou associado a outra conversa                | `RT-TEST-013`, `RT-TEST-015`, `RT-TEST-016` |
| `RT-CRIT-010` | Unicidade e completude das mensagens | IDs, âncoras e linhas temporais formam conjuntos completos e exclusivos                 | detecção de duplicatas e comparação das contagens                     | duplicidade ou totais diferentes                                      | `RT-TEST-014`, `RT-TEST-017`                |
| `RT-CRIT-011` | Esquema de metadados                 | Campos usam nomes canônicos, cardinalidade, domínio e coerência de data definidos       | vocabulário fechado, contagem por bloco e comparação da data com o ID | campo ausente, duplicado, desconhecido, fora do domínio ou incoerente | `RT-TEST-018` a `RT-TEST-022`               |

Esses critérios validam a associação porque, em conjunto, demonstram três
propriedades: **totalidade**, pois todo bloco possui um ID; **singularidade**,
pois cada bloco possui somente um ID; e **exclusividade**, pois nenhum ID
pertence a dois blocos. A igualdade entre âncora e ID acrescenta a localização
direta. Assim, forma-se uma correspondência um a um entre as conversas e seus
identificadores.

Os critérios não invalidam alterações legítimas porque não dependem de números
de linha, quantidade de mensagens, nomes de atletas, telefones, espaços entre
seções ou ordem dos blocos. Uma inclusão de texto ou o deslocamento de uma
conversa continua válido desde que a âncora e o ID permaneçam associados, bem
formados e exclusivos. Lacunas na sequência numérica também não são tratadas
como erro, pois um registro removido ou reservado pode deixar uma lacuna sem
provocar duplicidade.

**Regra essencial `RT-RULE-008` — Verificação estrutural e validação do uso
pretendido são controles distintos e ambos são obrigatórios.**

**Verificação (`RT-VER-001`)** é a execução objetiva do script sobre os
artefatos: ele confere formato, cardinalidade, correspondência, unicidade e
completude das conversas e mensagens, mostra as contagens e retorna `0` quando
todas as regras são atendidas, `1` quando os artefatos são inválidos ou `2`
quando há erro de uso ou acesso. **Validação de navegabilidade (`RT-VAL-001`)**
é a confirmação de que essas regras atendem ao uso pretendido: localizar
inequivocamente cada conversa e cada mensagem. Ela compara automaticamente os
fragmentos documentados com as âncoras do arquivo-fonte. **Validação da
cobertura (`RT-VAL-002`)** compara o conjunto de marcadores declarado no
documento com o conjunto marcado nos scripts, impedindo afirmações sem
implementação ou código sem referência documental.

Portanto, deve-se verificar automaticamente a estrutura sempre que o arquivo for
alterado, executando `./scripts/validar-rastreabilidade.sh`. Deve-se validar
novamente o uso pretendido quando o padrão de IDs, o formato dos blocos ou a
forma dos links mudar. A integridade histórica do conteúdo deve ser tratada
separadamente por controle de versão ou soma de verificação, pois está fora do
escopo deste validador estrutural.

<!-- Utilize tecnicas estruturais de rastreabilidade para sustentar a rastreabilidade bidirecional entre as afirmações sobre os critérios, testes, verificação, validação e o script, marcando o código do scirpt e o texto desse documento para criara a conexão que permite percorrer os caminhos de ida e volta -->

## Rastreabilidade bidirecional

**Regra essencial `RT-RULE-009` — Toda regra marcada deve possuir
correspondência normativa e ser localizável nos dois sentidos.**

A conexão bidirecional é sustentada por **identificadores de rastreabilidade
estáveis**. Os marcadores `RT-CRIT-*`, `RT-TEST-*`, `RT-VER-*` e `RT-VAL-*`
aparecem tanto nas afirmações deste documento quanto ao lado do código que as
implementa ou testa. Eles substituem referências por número de linha, que seriam
quebradas por edições comuns.

No Visual Studio Code, o percurso funciona nos dois sentidos:

1. do documento para o código: copie o marcador da afirmação, abra a busca
   global com `Ctrl+Shift+F` e localize o mesmo marcador em
   `scripts/validar-rastreabilidade.sh` ou `scripts/testar-rastreabilidade.sh`;
2. do código para o documento: a partir do marcador no comentário do script, use
   a mesma busca global para retornar à afirmação, ao critério e à evidência de
   teste correspondentes neste arquivo.

### Matriz de verificação e validação

| Afirmação    | Finalidade                                                                                         | Implementação marcada                                       | Evidência executável                                                                         |
| ------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `RT-VER-001` | verificar estrutura, formato, cardinalidade, correspondência, unicidade, metadados e completude    | `scripts/validar-rastreabilidade.sh`, marcador `RT-VER-001` | `RT-TEST-001` a `RT-TEST-005`, `RT-TEST-007` a `RT-TEST-010` e `RT-TEST-012` a `RT-TEST-022` |
| `RT-VAL-001` | validar que cada link documental localiza uma âncora existente e que não há âncoras sem referência | `scripts/validar-rastreabilidade.sh`, marcador `RT-VAL-001` | `RT-TEST-001` e `RT-TEST-006`                                                                |
| `RT-VAL-002` | validar que todas as afirmações marcadas possuem correspondência no código e vice-versa            | `scripts/testar-rastreabilidade.sh`, marcador `RT-VAL-002`  | `RT-TEST-011`                                                                                |

### Matriz de testes

| Teste         | Cenário                                                   | Resultado esperado                 | Critério ou afirmação coberta                             |
| ------------- | --------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------- |
| `RT-TEST-001` | artefatos reais válidos                                   | aprovação com saída `0`            | `RT-CRIT-001` a `RT-CRIT-011`, `RT-VER-001`, `RT-VAL-001` |
| `RT-TEST-002` | ID duplicado                                              | rejeição com saída `1`             | `RT-CRIT-006`                                             |
| `RT-TEST-003` | ID ausente                                                | rejeição com saída `1`             | `RT-CRIT-004`, `RT-CRIT-007`                              |
| `RT-TEST-004` | âncora divergente do ID                                   | rejeição com saída `1`             | `RT-CRIT-005`                                             |
| `RT-TEST-005` | âncora ausente                                            | rejeição com saída `1`             | `RT-CRIT-004`, `RT-CRIT-007`                              |
| `RT-TEST-006` | link documental sem âncora correspondente                 | rejeição com saída `1`             | `RT-VAL-001`                                              |
| `RT-TEST-007` | arquivo-fonte inacessível                                 | erro operacional com saída `2`     | `RT-CRIT-001`                                             |
| `RT-TEST-008` | nenhuma conversa no arquivo                               | rejeição com saída `1`             | `RT-CRIT-002`                                             |
| `RT-TEST-009` | ID malformado                                             | rejeição com saída `1`             | `RT-CRIT-003`                                             |
| `RT-TEST-010` | âncora duplicada                                          | rejeição com saída `1`             | `RT-CRIT-006`                                             |
| `RT-TEST-011` | marcador presente apenas no documento ou apenas no código | rejeição da auditoria de cobertura | `RT-VAL-002`                                              |
| `RT-TEST-012` | ID de mensagem malformado                                 | rejeição com saída `1`             | `RT-CRIT-008`                                             |
| `RT-TEST-013` | ID de mensagem ausente                                    | rejeição com saída `1`             | `RT-CRIT-009`                                             |
| `RT-TEST-014` | ID de mensagem duplicado                                  | rejeição com saída `1`             | `RT-CRIT-010`                                             |
| `RT-TEST-015` | mensagem associada à conversa errada                      | rejeição com saída `1`             | `RT-CRIT-009`                                             |
| `RT-TEST-016` | unidade sem linha temporal                                | rejeição com saída `1`             | `RT-CRIT-009`, `RT-CRIT-010`                              |
| `RT-TEST-017` | âncora de mensagem duplicada                              | rejeição com saída `1`             | `RT-CRIT-010`                                             |
| `RT-TEST-018` | metadado obrigatório ausente                              | rejeição com saída `1`             | `RT-CRIT-011`                                             |
| `RT-TEST-019` | metadado singular duplicado                               | rejeição com saída `1`             | `RT-CRIT-011`                                             |
| `RT-TEST-020` | data incompatível com o ID                                | rejeição com saída `1`             | `RT-CRIT-011`                                             |
| `RT-TEST-021` | nome de campo desconhecido                                | rejeição com saída `1`             | `RT-CRIT-011`                                             |
| `RT-TEST-022` | valor fora do domínio controlado                          | rejeição com saída `1`             | `RT-CRIT-011`                                             |

Essa estrutura permite confirmar, em qualquer direção, qual afirmação originou
cada verificação, onde ela foi implementada, qual teste a exercita e qual
resultado serve como evidência.

**Regra essencial `RT-RULE-010` — Nenhuma alteração de rastreabilidade pode ser
aceita sem executar integralmente a automação obrigatória.**

Após qualquer alteração no documento, no arquivo-fonte ou nos scripts, a
manutenção da cadeia completa deve ser confirmada com:

```bash
./scripts/validar-rastreabilidade.sh
./scripts/testar-rastreabilidade.sh
```
