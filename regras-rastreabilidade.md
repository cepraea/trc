---
documento_id: 'DOC-TRACE-RULES-001'
tipo: 'especificação-normativa'
versao: '2.0.0'
caminho_canonico: 'regras-rastreabilidade.md'
criado_em: '2026-11-13'
atualizado_em: '2026-11-13'
fase_documento: 'final'
status_aprovacao: 'homologado'
status_implementacao: 'n/a'
escopo: 'rastreabilidade bidirecional'
---

# Regras de rastreabilidade bidirecional

## Contrato do documento

| Propriedade      | Definição                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------- |
| Papel            | fonte normativa das unidades, vínculos, metadados e processos de rastreabilidade            |
| Objetivo         | governar alterações sem quebrar identidade, proveniência, reciprocidade ou verificabilidade |
| Escopo           | conversas, mensagens, entidades futuras, documentos técnicos, scripts e testes governados   |
| Caminho canônico | `regras-rastreabilidade.md`                                                                 |
| Autoridade       | agentes devem obedecer às obrigações marcadas, subordinadas às diretrizes centrais          |
| Contexto mínimo  | contrato, seção normativa afetada e matriz de marcadores correspondente                     |
| Dependências     | registro-fonte, documento técnico, técnicas estruturais e governança de testes              |
| Restrições       | preservar comentários, IDs e vínculos; não usar automação legada como aceite                |
| Riscos mitigados | órfão, duplicidade, quebra bidirecional, metadado decorativo e falsa aprovação              |

> **Estado da automação legada:** inválida para aceite. As referências
> `RT-TEST-*` existentes descrevem cenários históricos, mas não são evidência
> aprovada porque faltam registros de TDD, configuração, execução persistente,
> oráculos completos e validação independente. Os scripts legados permanecem
> preservados somente para migração controlada.

## 1. Finalidade

Este documento define as especificações, os requisitos, as justificativas, as
verificações, as validações, a governança, as regras operacionais, as técnicas e
as automações da rastreabilidade bidirecional adotada neste repositório.

O objetivo é garantir que cada conversa, mensagem, equipe, treinador(a), contato
de treinador(a), atleta e contato de atleta possa ser:

1. identificadas de forma inequívoca;
2. localizadas diretamente no Visual Studio Code;
3. relacionadas à afirmação técnica que define sua validade;
4. relacionadas ao código que realiza a verificação;
5. relacionadas ao teste automatizado que demonstra o comportamento esperado;
6. percorridas nos dois sentidos: documento → código → teste e teste/código →
   documento → registro-fonte.

Os termos **DEVE**, **NÃO DEVE**, **OBRIGATÓRIO** e **PROIBIDO** indicam regras
normativas. **PODE** indica uma opção permitida.

## 2. Escopo

Esta norma abrange:

- as conversas e mensagens no
  [registro-fonte estruturado](./mensagens-treinadores.md#exportação-das-conversas-do-whatsapp);
- a especificação de transformação de equipes, treinadores(as), atletas e
  respectivos contatos em unidades rastreáveis;
- a
  [explicação e matriz técnica](./rastreabilidade-tecnica.md#rastreabilidade-bidirecional);
- os
  [fundamentos e técnicas marcados](./tecnicas-rastreabilidade.md#convenção-de-marcação-normativa);
- o validador legado `scripts/validar-rastreabilidade.sh`, pesquisável pelo
  marcador `RT-VER-001`;
- a suíte legada `scripts/testar-rastreabilidade.sh`, pesquisável pelo marcador
  `RT-TEST-001`;
- os marcadores `RT-CRIT-*`, `RT-TEST-*`, `RT-VER-*` e `RT-VAL-*` compartilhados
  entre documentação e código.

Esta norma não comprova a autenticidade jurídica da exportação, a veracidade do
conteúdo das mensagens, a correção dos nomes e telefones ou a inexistência de
alterações históricas. Esses controles exigem origem preservada, controle de
versão, restrição de acesso e, quando necessário, soma de verificação.

## 3. Artefatos e responsabilidades

| Artefato                                                                           | Papel                          | Fonte de verdade para                                        |
| ---------------------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------ |
| [regras e governança](./regras-rastreabilidade.md#1-finalidade)                    | especificação normativa        | regras, governança e procedimentos obrigatórios              |
| [registro-fonte](./mensagens-treinadores.md#exportação-das-conversas-do-whatsapp)  | registro-fonte estruturado     | conversas, mensagens, metadados, IDs e âncoras               |
| [matriz técnica](./rastreabilidade-tecnica.md#rastreabilidade-bidirecional)        | especificação técnica e matriz | justificativas, critérios, relações e evidências             |
| [técnicas marcadas](./tecnicas-rastreabilidade.md#convenção-de-marcação-normativa) | referência conceitual marcada  | fundamentos técnicos que sustentam regras normativas         |
| `scripts/validar-rastreabilidade.sh`, marcador `RT-VER-001`                        | implementação legada           | regras executáveis históricas e códigos de saída             |
| `scripts/testar-rastreabilidade.sh`, marcador `RT-TEST-001`                        | suíte legada inválida          | inventário histórico de cenários a migrar; não produz aceite |
| [diretrizes de documentação](./AGENTS.md#1-regras-de-documentação)                 | regras gerais do repositório   | preservação de comentários HTML e restrições de alteração    |

Nenhum artefato substitui os demais. A norma define o que deve ocorrer; o
documento técnico explica e conecta; o registro-fonte contém as unidades; o
validador executa as regras; e a suíte demonstra que falhas são detectadas.

Em caso de divergência semântica, esta norma tem precedência, mas a alteração
permanece reprovada até que o documento técnico, o código e os testes sejam
reconciliados. A precedência não autoriza ignorar falhas automatizadas nem
manter artefatos contraditórios.

## 4. Modelo de identificação

### 4.1 Conversa

O identificador de conversa DEVE seguir o formato:

```text
WA-AAAAMMDD-NNN
```

| Componente | Significado                             | Regra                                   |
| ---------- | --------------------------------------- | --------------------------------------- |
| `WA`       | namespace da origem WhatsApp            | fixo e obrigatório                      |
| `AAAAMMDD` | data associada ao conjunto de mensagens | oito algarismos                         |
| `NNN`      | sequência da conversa na data           | três algarismos e valor não reutilizado |

Exemplo: `WA-20261111-001`.

Cada conversa DEVE possuir:

- um título Markdown de nível 3: `### WA-AAAAMMDD-NNN`;
- exatamente um campo `**ID da conversa:**` com o mesmo valor;
- exatamente um cabeçalho `**Equipe:**`;
- IDs e âncoras não utilizados por outra conversa.

### 4.2 Mensagem

O identificador de mensagem DEVE seguir o formato:

```text
WA-AAAAMMDD-NNN-MNNN
```

O prefixo DEVE ser exatamente o ID da conversa à qual a mensagem pertence. O
sufixo `MNNN` diferencia as mensagens dentro dessa conversa, inclusive quando
duas mensagens têm o mesmo horário.

Exemplo: `WA-20261111-001-M001`.

Cada mensagem DEVE possuir:

- um título Markdown de nível 4: `#### WA-AAAAMMDD-NNN-MNNN`;
- exatamente um campo `**ID da mensagem:**` com o mesmo valor;
- exatamente uma linha temporal iniciada pelo timestamp da mensagem;
- associação a uma conversa cujo ID seja seu prefixo;
- ID e âncora não utilizados por outra mensagem.

### 4.3 Imutabilidade

IDs atribuídos são imutáveis e NÃO DEVEM ser renumerados, reutilizados ou
transferidos para outra unidade.

Se uma mensagem anteriormente ausente for recuperada, ela DEVE receber o próximo
sufixo livre da conversa. A posição cronológica é determinada pelo timestamp,
não por `MNNN`. Lacunas na sequência são permitidas e não justificam
renumeração.

## 5. Navegação compatível com Visual Studio Code

As referências DEVEM usar caminhos Markdown relativos e âncoras geradas por
títulos, por exemplo:

```markdown
[Conversa](./mensagens-treinadores.md#wa-20261111-001)
[Mensagem](./mensagens-treinadores.md#wa-20261111-001-m001)
```

Números de linha, como `:14`, NÃO DEVEM ser usados como mecanismo permanente de
rastreabilidade porque mudam quando linhas são inseridas ou removidas. Caminhos
absolutos e esquemas dependentes de máquina também NÃO DEVEM ser usados dentro
dos documentos do repositório.

No Visual Studio Code:

- links Markdown permitem navegar do documento para o registro-fonte;
- `Ctrl+Shift+F` permite localizar qualquer ID ou marcador `RT-*` em todo o
  workspace;
- a mesma busca permite voltar do código ou teste para a afirmação documental
  correspondente.

## 6. Requisitos verificáveis

| Marcador      | Requisito obrigatório                                                                                                 | Evidência automatizada                      |
| ------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `RT-CRIT-001` | o registro-fonte e o documento técnico devem estar acessíveis para leitura                                            | `RT-TEST-007`                               |
| `RT-CRIT-002` | deve existir pelo menos uma conversa reconhecível pelo campo `Equipe`                                                 | `RT-TEST-008`                               |
| `RT-CRIT-003` | âncora e ID de conversa devem obedecer a `WA-AAAAMMDD-NNN`                                                            | `RT-TEST-009`                               |
| `RT-CRIT-004` | cada conversa deve possuir exatamente uma âncora e um ID                                                              | `RT-TEST-003`, `RT-TEST-005`                |
| `RT-CRIT-005` | âncora e ID da mesma conversa devem ser iguais                                                                        | `RT-TEST-004`                               |
| `RT-CRIT-006` | IDs e âncoras de conversa não podem ser duplicados                                                                    | `RT-TEST-002`, `RT-TEST-010`                |
| `RT-CRIT-007` | totais de conversas, âncoras válidas e IDs válidos devem coincidir                                                    | `RT-TEST-003`, `RT-TEST-005`                |
| `RT-CRIT-008` | âncora e ID de mensagem devem obedecer a `WA-AAAAMMDD-NNN-MNNN`                                                       | `RT-TEST-012`                               |
| `RT-CRIT-009` | cada mensagem deve possuir âncora, ID idêntico, linha temporal e prefixo da conversa                                  | `RT-TEST-013`, `RT-TEST-015`, `RT-TEST-016` |
| `RT-CRIT-010` | IDs, âncoras e linhas temporais de mensagens devem ser completos e exclusivos                                         | `RT-TEST-014`, `RT-TEST-017`                |
| `RT-CRIT-011` | metadados de conversa devem obedecer ao vocabulário, à cardinalidade, ao domínio e às relações de coerência definidos | `RT-TEST-018` a `RT-TEST-022`               |

Uma associação é aceita somente quando apresenta:

- **totalidade:** toda unidade possui identificador;
- **singularidade:** cada unidade possui somente um identificador;
- **exclusividade:** nenhum identificador pertence a duas unidades;
- **correspondência:** âncora e campo de ID possuem o mesmo valor;
- **hierarquia:** o ID da mensagem contém o ID da conversa;
- **navegabilidade:** o fragmento Markdown aponta para uma âncora existente;
- **conformidade de esquema:** metadados usam nome, cardinalidade, domínio e
  coerência controlados.

## 7. Verificação e validação

### 7.1 Verificação estrutural

`RT-VER-001` confirma objetivamente se os artefatos foram construídos conforme
os requisitos. O validador verifica:

1. acessibilidade dos arquivos;
2. existência de conversas;
3. formato das âncoras e dos IDs;
4. cardinalidade por conversa e mensagem;
5. igualdade entre âncora e ID;
6. associação da mensagem à conversa;
7. unicidade global;
8. completude das contagens;
9. presença de uma linha temporal por mensagem;
10. esquema e coerência dos metadados de conversa.

### 7.2 Validação de navegabilidade

`RT-VAL-001` confirma que a solução atende ao uso pretendido de localizar
registros. Para as conversas documentadas, o conjunto de fragmentos dos links é
comparado ao conjunto de âncoras do registro-fonte. Para as mensagens, o
validador garante que cada ID possui uma âncora Markdown idêntica e previsível.

### 7.3 Validação da cobertura bidirecional

`RT-VAL-002` confirma que documentação e código declaram os mesmos marcadores de
rastreabilidade. Isso impede:

- requisito documentado sem implementação;
- implementação sem requisito documentado;
- teste sem critério associado;
- afirmação de validação sem evidência executável.

### 7.4 Diferença entre verificar e validar

- **Verificar** responde: “os artefatos obedecem às regras especificadas?”
- **Validar** responde: “essas regras permitem localizar e relacionar
  inequivocamente as unidades no uso real?”

A aprovação estrutural não comprova autenticidade ou integridade histórica do
conteúdo.

## 8. Catálogo de testes automatizados

| Marcador      | Cenário                              | Resultado esperado | Cobertura principal                              |
| ------------- | ------------------------------------ | ------------------ | ------------------------------------------------ |
| `RT-TEST-001` | conjunto real válido                 | saída `0`          | todos os critérios, verificação e navegabilidade |
| `RT-TEST-002` | ID de conversa duplicado             | saída `1`          | `RT-CRIT-006`                                    |
| `RT-TEST-003` | ID de conversa ausente               | saída `1`          | `RT-CRIT-004`, `RT-CRIT-007`                     |
| `RT-TEST-004` | âncora de conversa divergente        | saída `1`          | `RT-CRIT-005`                                    |
| `RT-TEST-005` | âncora de conversa ausente           | saída `1`          | `RT-CRIT-004`, `RT-CRIT-007`                     |
| `RT-TEST-006` | link documental divergente           | saída `1`          | `RT-VAL-001`                                     |
| `RT-TEST-007` | registro-fonte inacessível           | saída `2`          | `RT-CRIT-001`                                    |
| `RT-TEST-008` | nenhuma conversa                     | saída `1`          | `RT-CRIT-002`                                    |
| `RT-TEST-009` | ID de conversa malformado            | saída `1`          | `RT-CRIT-003`                                    |
| `RT-TEST-010` | âncora de conversa duplicada         | saída `1`          | `RT-CRIT-006`                                    |
| `RT-TEST-011` | cobertura desigual de marcadores     | falha da suíte     | `RT-VAL-002`                                     |
| `RT-TEST-012` | ID de mensagem malformado            | saída `1`          | `RT-CRIT-008`                                    |
| `RT-TEST-013` | ID de mensagem ausente               | saída `1`          | `RT-CRIT-009`                                    |
| `RT-TEST-014` | ID de mensagem duplicado             | saída `1`          | `RT-CRIT-010`                                    |
| `RT-TEST-015` | mensagem associada à conversa errada | saída `1`          | `RT-CRIT-009`                                    |
| `RT-TEST-016` | mensagem sem linha temporal          | saída `1`          | `RT-CRIT-009`, `RT-CRIT-010`                     |
| `RT-TEST-017` | âncora de mensagem duplicada         | saída `1`          | `RT-CRIT-010`                                    |
| `RT-TEST-018` | metadado obrigatório ausente         | saída `1`          | `RT-CRIT-011`                                    |
| `RT-TEST-019` | metadado singular duplicado          | saída `1`          | `RT-CRIT-011`                                    |
| `RT-TEST-020` | data declarada incompatível com o ID | saída `1`          | `RT-CRIT-011`                                    |
| `RT-TEST-021` | nome de campo desconhecido           | saída `1`          | `RT-CRIT-011`                                    |
| `RT-TEST-022` | valor fora do domínio controlado     | saída `1`          | `RT-CRIT-011`                                    |

## 9. Automação

### 9.1 Pré-requisitos

As automações usam Bash e utilitários presentes no ambiente atual: `awk`, `sed`,
`grep`, `sort` e `mktemp`. Nenhuma biblioteca de aplicação nem serviço externo
são necessários.

### 9.2 Execução histórica suspensa

A partir da raiz do repositório, os comandos históricos eram:

```bash
./scripts/validar-rastreabilidade.sh
./scripts/testar-rastreabilidade.sh
```

Esses comandos não podem ser usados como gate de aceite. O primeiro inspeciona
artefatos reais e o segundo cria alterações controladas em diretório temporário,
porém ambos pertencem à automação legada inválida. A execução somente poderá
voltar a ser obrigatória após migração para casos governados, registro
persistente e validação independente.

### 9.3 Códigos de saída

| Código | Significado                                          | Consequência                        |
| -----: | ---------------------------------------------------- | ----------------------------------- |
|    `0` | estrutura e validações aprovadas                     | alteração pode seguir para revisão  |
|    `1` | artefato estruturalmente inválido ou teste reprovado | alteração deve ser corrigida        |
|    `2` | erro de uso, argumento ou acesso                     | ambiente/comando deve ser corrigido |

Um código `0` produzido pela automação legada não comprova aprovação. Os códigos
acima permanecem documentados apenas para interpretar execuções históricas.

### 9.4 Linha de base atual

Na data desta especificação, a linha de base válida contém:

- 8 conversas;
- 8 IDs e 8 âncoras de conversa;
- 31 mensagens;
- 31 IDs e 31 âncoras de mensagem;
- 31 linhas temporais associadas;
- 8 blocos de conversa com metadados válidos;
- 22 cenários legados inventariados, sem condição de teste aprovado.

Esses números descrevem o estado atual e NÃO DEVEM ser codificados como limites
permanentes. O validador compara relações estruturais, permitindo crescimento
controlado.

## 10. Governança de alterações

### 10.1 Inclusão de conversa

Para incluir uma conversa, o responsável DEVE:

1. determinar a data aplicável;
2. atribuir o próximo `NNN` livre sem reutilizar IDs antigos;
3. criar o título de nível 3 e o campo `ID da conversa` idênticos;
4. registrar os metadados obrigatórios;
5. atribuir IDs a todas as mensagens;
6. criar ou atualizar o link correspondente no documento técnico;
7. atualizar as matrizes se surgir um requisito novo;
8. executar validador e suíte de testes.

### 10.2 Inclusão de mensagem

Para incluir uma mensagem, o responsável DEVE:

1. preservar todos os IDs existentes;
2. atribuir o próximo `MNNN` livre da conversa;
3. criar o título de nível 4 e o campo `ID da mensagem` idênticos;
4. manter o ID da conversa como prefixo;
5. registrar exatamente uma linha temporal;
6. executar validador e suíte de testes.

### 10.3 Correção de conteúdo

Uma correção de texto ou metadado NÃO DEVE alterar IDs ou âncoras existentes. Se
a correção modificar a identidade da unidade, o caso deve ser revisado antes da
alteração; IDs publicados não podem ser silenciosamente reaproveitados.

### 10.4 Mudança de formato, caminho ou automação

Mudanças no padrão de IDs, nos títulos Markdown, nos nomes dos arquivos, nos
caminhos relativos, no parser ou nos marcadores `RT-*` exigem:

1. análise de impacto sobre links existentes;
2. atualização sincronizada da norma, do documento técnico, do validador e dos
   testes;
3. novos testes negativos para a regra alterada;
4. execução integral da suíte;
5. revisão humana da navegabilidade no Visual Studio Code.

### 10.5 Comentários HTML

Comentários HTML em arquivos Markdown NÃO DEVEM ser apagados. Respostas e
complementos devem ser adicionados ao texto visível, preservando o comentário
que originou a decisão.

### 10.6 Papéis mínimos

| Papel                   | Responsabilidade                                                                                               |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- |
| mantenedor da alteração | atribuir IDs, atualizar conjuntamente os artefatos afetados e executar as automações                           |
| revisor                 | conferir impacto, navegabilidade no Visual Studio Code, resultados dos testes e preservação dos IDs existentes |
| custodiante dos dados   | controlar acesso, compartilhamento, retenção, backup e tratamento dos dados pessoais                           |

Uma mesma pessoa PODE acumular papéis quando não houver equipe disponível, mas
as três responsabilidades continuam obrigatórias. A alteração deve ser tratada
como um único conjunto coerente: registro-fonte, documentação, scripts e testes
afetados devem ser revisados juntos.

## 11. Regras proibitivas

É PROIBIDO:

- renumerar IDs já atribuídos;
- reutilizar ID removido para outra conversa ou mensagem;
- manter dois IDs ou duas âncoras para a mesma unidade;
- usar o mesmo ID em unidades diferentes;
- alterar apenas a âncora ou apenas o campo de ID;
- associar mensagem a uma conversa cujo ID não seja seu prefixo;
- remover a linha temporal de uma mensagem;
- adicionar campo de metadado sem registro no esquema ou usar valor fora de
  domínio fechado;
- repetir campo singular, omitir campo obrigatório ou usar campo opcional vazio;
- usar número de linha como referência permanente;
- aceitar manualmente uma alteração que falhou na automação;
- apagar comentários HTML existentes;
- registrar nos logs de teste o conteúdo integral das mensagens ou dados
  pessoais.

## 12. Justificativas das técnicas adotadas

### 12.1 IDs compostos em vez de UUIDs

Os IDs compostos são legíveis, permitem reconhecer origem, data e hierarquia e
podem ser conferidos sem ferramenta especializada. UUIDs reduziriam colisões
globais, mas dificultariam inspeção humana e não agregariam benefício
proporcional ao conjunto controlado deste repositório.

### 12.2 Âncoras por títulos em vez de linhas

Títulos Markdown funcionam no Visual Studio Code, produzem fragmentos
previsíveis e permanecem estáveis quando o arquivo ganha ou perde linhas.
Referências por linha quebram com edições comuns.

### 12.3 Caminhos relativos em vez de absolutos

Caminhos relativos funcionam após mover o repositório para outra máquina ou
diretório, desde que a estrutura interna seja preservada. Caminhos absolutos
criariam dependência do ambiente local.

### 12.4 Marcadores compartilhados em vez de referências posicionais

Marcadores `RT-*` permitem busca global e conexão bidirecional sem depender da
linha do código. A suíte compara os conjuntos de marcadores e detecta
divergências entre documentação e implementação.

### 12.5 Testes negativos

Contagens corretas isoladamente não provam a associação individual. Os testes
negativos demonstram que o sistema rejeita ausência, duplicidade, divergência,
formato inválido, associação incorreta e quebra de cobertura.

## 13. Integridade, privacidade e segurança

O registro-fonte contém dados pessoais e contatos. Portanto:

- o acesso ao repositório DEVE ser restrito às pessoas autorizadas;
- dados pessoais NÃO DEVEM ser copiados para documentação adicional sem
  necessidade;
- saídas de automação DEVEM mostrar contagens e IDs, não o conteúdo das
  mensagens;
- fixtures temporárias DEVEM usar diretório criado por `mktemp -d` e ser
  removidas ao finalizar;
- publicações, compartilhamentos e backups DEVEM respeitar as políticas
  aplicáveis de proteção de dados;
- para demonstrar integridade histórica, DEVE ser usado controle de versão e,
  quando necessário, checksum do arquivo-fonte.

O validador estrutural não substitui controles de acesso, histórico de versão,
assinatura digital ou cadeia de custódia.

## 14. Limitações conhecidas

O mecanismo atual não valida:

- se a mensagem veio efetivamente do WhatsApp;
- se o remetente declarado é autêntico;
- se nomes, contatos e conteúdo são verdadeiros;
- se a data declarada ou codificada corresponde ao momento histórico real,
  embora sua igualdade textual seja verificada;
- se o conteúdo permaneceu inalterado antes de ingressar no repositório;
- se uma lacuna numérica representa exclusão, reserva ou mensagem ainda não
  incorporada.

Essas limitações não invalidam a rastreabilidade estrutural, mas impedem que ela
seja apresentada como prova isolada de autenticidade ou integridade histórica.

## 15. Critérios de aceite de uma alteração

Uma alteração de rastreabilidade somente pode ser aceita quando:

- [ ] preserva todos os IDs já publicados;
- [ ] usa os formatos definidos nesta norma;
- [ ] mantém igualdade entre âncoras e campos de ID;
- [ ] mantém mensagens associadas às conversas corretas;
- [ ] mantém metadados conformes ao esquema da seção 29;
- [ ] mantém caminhos relativos funcionais no Visual Studio Code;
- [ ] preserva todos os comentários HTML;
- [ ] atualiza documentação, código e testes quando aplicável;
- [ ] possui execução registrada da nova suíte governada;
- [ ] possui validação independente vinculada à execução;
- [ ] não expõe conteúdo sensível em logs ou novos artefatos.

## 16. Manutenção da norma

Esta norma DEVE ser atualizada quando houver mudança no modelo de IDs, nos
artefatos abrangidos, nos critérios `RT-CRIT-*`, nas validações `RT-VAL-*`, na
verificação `RT-VER-*`, nos testes `RT-TEST-*` ou nos procedimentos de
governança.

Toda mudança normativa DEVE manter a rastreabilidade bidirecional com a
[matriz técnica](./rastreabilidade-tecnica.md#rastreabilidade-bidirecional) e
com os comentários marcados nos scripts. A auditoria automatizada de cobertura
deve reprovar quando um marcador obrigatório existir apenas na documentação ou
apenas no código.

### 16.1 Regras essenciais marcadas no documento técnico

Os marcadores `RT-RULE-*` identificam afirmações essenciais nos
[critérios técnicos](./rastreabilidade-tecnica.md#criterios-de-aceitacao-e-escopo)
que devem permanecer sustentadas por regra normativa. Eles formam um vínculo
documental bidirecional: a marca técnica aponta para esta matriz, e esta matriz
aponta para a obrigação correspondente.

| Marcador      | Regra normativa sustentada                                                                      | Seção normativa principal |
| ------------- | ----------------------------------------------------------------------------------------------- | ------------------------- |
| `RT-RULE-001` | toda afirmação rastreável deve apontar para evidência de origem                                 | 3 e 7                     |
| `RT-RULE-002` | navegação deve usar caminho relativo e âncora estável, sem linha permanente                     | 5                         |
| `RT-RULE-003` | conversa deve possuir ID único, âncora e campo correspondentes                                  | 4.1 e 6                   |
| `RT-RULE-004` | mensagem deve possuir ID hierárquico, âncora idêntica e linha temporal                          | 4.2 e 6                   |
| `RT-RULE-005` | IDs publicados são imutáveis, não reutilizáveis e não renumeráveis                              | 4.3 e 11                  |
| `RT-RULE-006` | aceite exige totalidade, singularidade, exclusividade, correspondência e completude             | 6 e 15                    |
| `RT-RULE-007` | validade estrutural não equivale a autenticidade ou integridade histórica                       | 7.4, 13 e 14              |
| `RT-RULE-008` | verificação estrutural e validação do uso pretendido são controles distintos e obrigatórios     | 7                         |
| `RT-RULE-009` | regra marcada deve ter correspondência normativa e navegação nos dois sentidos                  | 7.3 e 16                  |
| `RT-RULE-010` | alteração só pode ser aceita após execução integral da automação obrigatória                    | 9 e 15                    |
| `RT-RULE-011` | metadados rastreáveis devem usar nomes canônicos, cardinalidade, domínio e validação executável | 29                        |

Uma marca `RT-RULE-*` presente somente em um dos documentos é referência órfã e
deve reprovar a auditoria de cobertura.

### 16.2 Princípios técnicos que sustentam a norma

Os marcadores `RT-TECH-*` conectam os
[princípios técnicos essenciais](./tecnicas-rastreabilidade.md#convencao-de-marcacao-normativa)
às regras deste documento. Eles não transformam exemplos ou recomendações gerais
em obrigações; somente os princípios listados abaixo sustentam regra normativa
no repositório.

| Marcador      | Princípio técnico sustentado                                                     | Aplicação normativa principal |
| ------------- | -------------------------------------------------------------------------------- | ----------------------------- |
| `RT-TECH-001` | preservar proveniência e relações entre origem, regra, implementação e evidência | seções 1, 3, 7 e 18           |
| `RT-TECH-002` | usar IDs únicos, persistentes e não reutilizáveis                                | seções 4, 6 e 11              |
| `RT-TECH-003` | localizar fontes por referência estável e contexto de versão                     | seções 5, 7 e 13              |
| `RT-TECH-004` | declarar vínculos tipados com significado definido                               | seções 18 e 19                |
| `RT-TECH-005` | separar integridade estrutural de correção semântica                             | seções 7, 14 e 22             |
| `RT-TECH-006` | definir classes, relações permitidas e restrições em metamodelo                  | seções 6, 18, 19 e 22         |
| `RT-TECH-007` | permitir consulta direta e inversa de cobertura                                  | seções 7.3, 16, 18 e 22.3     |
| `RT-TECH-008` | não tratar texto ou cenário não executado como evidência                         | seções 7, 8 e 15              |
| `RT-TECH-009` | preservar histórico, linhas de base, vínculos e análise de impacto               | seções 4.3, 10 e 13           |
| `RT-TECH-010` | automatizar verificações determinísticas de integridade e cobertura              | seções 6, 8, 9, 22 e 23       |
| `RT-TECH-011` | distinguir aprovação estrutural, semântica e evidência do produto                | seções 7, 14, 22 e 28         |
| `RT-TECH-012` | adotar técnicas proporcionalmente e declarar implantação somente com evidência   | seções 12, 17.1, 23 e 28      |
| `RT-TECH-013` | controlar vocabulário, cardinalidade e função operacional dos metadados          | seção 29                      |

Um marcador `RT-TECH-*` presente somente na referência técnica ou somente nesta
matriz é órfão e deve reprovar a auditoria de cobertura.

## 17. Extensão para entidades e contatos

### 17.1 Estado de implantação

As regras desta seção são normativas para a transformação de equipes,
treinadores(as), atletas e contatos em unidades rastreáveis. No estado atual, o
[registro das conversas](./mensagens-treinadores.md#exportacao-das-conversas-do-whatsapp)
é a evidência de origem, mas essas cinco classes ainda não possuem um cadastro
canônico completo nem validação automatizada específica.

A transformação somente poderá ser declarada **implantada** depois que:

1. todas as unidades forem registradas em cadastro dedicado;
2. cada unidade apontar para sua evidência de origem;
3. cada conversa ou mensagem de origem apontar de volta para as unidades
   derivadas;
4. todos os vínculos entre unidades estiverem registrados nos dois sentidos;
5. o validador e os testes definidos nesta seção existirem e forem aprovados.

Até lá, os requisitos `ENT-*` representam especificação aprovada, não evidência
de implementação concluída. Essa distinção evita atribuir confiança automatizada
a relações ainda não verificadas por código.

### 17.2 Classes de unidade

| Classe                  | Prefixo | Exemplo    | Evidência mínima de origem                                        |
| ----------------------- | ------- | ---------- | ----------------------------------------------------------------- |
| equipe                  | `EQP`   | `EQP-0001` | conversa que identifica a equipe                                  |
| treinador(a)            | `TRE`   | `TRE-0001` | cabeçalho da conversa e, quando disponível, mensagem do treinador |
| contato de treinador(a) | `CTT`   | `CTT-0001` | campo `Contato` da conversa                                       |
| atleta                  | `ATL`   | `ATL-0001` | mensagem que solicita, menciona ou identifica a atleta            |
| contato de atleta       | `CTA`   | `CTA-0001` | mensagem que fornece o contato                                    |

Os números são identificadores substitutos e não carregam nome, telefone,
categoria, equipe ou estado atual. Esses atributos podem mudar; o ID não.

### 17.3 Formatos obrigatórios

```text
Equipe:                    EQP-NNNN
Treinador(a):              TRE-NNNN
Contato de treinador(a):   CTT-NNNN
Atleta:                    ATL-NNNN
Contato de atleta:         CTA-NNNN
```

Regras:

- `NNNN` DEVE conter quatro algarismos;
- valores já atribuídos NÃO DEVEM ser reutilizados;
- nome e telefone NÃO DEVEM compor o ID;
- `CTT` identifica contato atribuído a treinador(a), e `CTA` identifica contato
  atribuído a atleta;
- a titularidade DEVE ser representada por vínculo, não codificada no ID do
  contato;
- corrigir a titularidade exige encerrar ou contestar o vínculo incorreto e
  criar o vínculo correto, sem alterar retrospectivamente o ID do contato;
- lacunas de numeração são permitidas e não autorizam renumeração.

### 17.4 Estrutura de um registro canônico

Cada unidade DEVE possuir um título Markdown que gere âncora estável no Visual
Studio Code e os campos compatíveis com sua classe.

Exemplo de equipe:

```markdown
### EQP-0001

**ID:** `EQP-0001` **Tipo:** `equipe` **Nome registrado:** Nome conforme a fonte
**Estado de identidade:** `confirmado` **Evidências de origem:**

- [WA-AAAAMMDD-NNN](./mensagens-treinadores.md#wa-aaaammdd-nnn) **Vínculos de
  saída:**
- `tem_treinador` → `TRE-0001`
- `atleta_citada_no_contexto` → `ATL-0001`
```

Exemplo de pessoa:

```markdown
### ATL-0001

**ID:** `ATL-0001` **Tipo:** `atleta` **Nome registrado:** Nome conforme a fonte
**Aliases observados:** Apelidos ou grafias, sem substituir o nome registrado
**Estado de identidade:** `provisório` **Evidências de origem:**

- [WA-AAAAMMDD-NNN-MNNN](./mensagens-treinadores.md#wa-aaaammdd-nnn-mnnn)
  **Vínculos de entrada:**
- `citada_por_equipe` ← `EQP-0001` **Vínculos de saída:**
- `possui_contato` → `CTA-0001`
```

Exemplo de contato:

```markdown
### CTA-0001

**ID:** `CTA-0001` **Tipo:** `contato_atleta` **Titular:** `ATL-0001` **Valor
original:** valor exatamente como registrado na fonte **Valor normalizado:**
valor normalizado, quando possível **Qualidade do contato:** `como_registrado`
**Ciclo de vida:** `ativo` **Evidências de origem:**

- [WA-AAAAMMDD-NNN-MNNN](./mensagens-treinadores.md#wa-aaaammdd-nnn-mnnn)
  **Vínculos de entrada:**
- `possui_contato` ← `ATL-0001`
```

O cadastro canônico DEVE ficar em arquivo dedicado, separado do histórico bruto.
Na implantação, o caminho normativo será `cadastro-entidades-rastreaveis.md`, na
raiz do repositório. Essa separação preserva a fonte e permite corrigir ou
qualificar entidades sem reescrever a evidência original. O arquivo somente deve
ser criado quando a transformação e sua automação forem executadas em conjunto,
evitando um cadastro parcial sem validação.

## 18. Modelo de vínculos bidirecionais

### 18.1 Relações permitidas

| Origem              | Relação de saída            | Destino                 | Relação recíproca obrigatória |
| ------------------- | --------------------------- | ----------------------- | ----------------------------- |
| equipe              | `tem_treinador`             | treinador(a)            | `treina_equipe`               |
| treinador(a)        | `possui_contato`            | contato de treinador(a) | `contato_de`                  |
| equipe              | `atleta_citada_no_contexto` | atleta                  | `citada_por_equipe`           |
| atleta              | `possui_contato`            | contato de atleta       | `contato_de`                  |
| entidade ou contato | `derivada_de`               | conversa ou mensagem    | `origina_unidade`             |

Uma relação nova somente existe quando os dois lados foram atualizados. Um
vínculo presente em apenas um lado é órfão e invalida o conjunto.

### 18.2 Vínculo com a evidência antiga

Ao conectar uma entidade nova a uma conversa ou mensagem existente:

1. o registro novo DEVE incluir o link para o ID `WA-*` que sustenta a
   afirmação;
2. a conversa ou mensagem existente DEVE receber uma lista
   `Vínculos rastreáveis` com link de retorno para o registro novo;
3. o texto, o ID e a âncora da unidade antiga NÃO DEVEM ser alterados;
4. o vínculo DEVE declarar o tipo de afirmação sustentada, e não apenas listar
   IDs sem semântica;
5. o validador futuro DEVE confirmar que origem e destino existem e se
   referenciam reciprocamente.

Exemplo conceitual:

```text
EQP-0001 --derivada_de--> WA-20261111-001
EQP-0001 <--origina_unidade-- WA-20261111-001
```

### 18.3 Relações não inferidas automaticamente

Estar na mesma conversa não comprova, por si só, vínculo atual de equipe,
identidade entre nomes ou titularidade permanente de telefone. Devem ser usadas
relações que expressem apenas o que a fonte sustenta.

Exemplos:

- uma atleta listada em uma solicitação pode ser marcada como
  `atleta_citada_no_contexto`, mas não como vínculo federativo confirmado;
- nome completo e apelido parecido não devem ser fundidos sem evidência
  suficiente;
- um contato enviado em resposta pode ser registrado como
  `contato_fornecido_para`, sem afirmar que permanece ativo no presente;
- o treinador indicado no cabeçalho pode ser registrado como
  `treinador_principal_registrado`, preservando a data e a fonte da afirmação.

## 19. Requisitos das novas unidades

| Marcador      | Requisito normativo                                                                     | Verificação prevista                           |
| ------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `ENT-REQ-001` | toda equipe, pessoa e contato deve possuir ID estável no formato de sua classe          | formato e unicidade global                     |
| `ENT-REQ-002` | todo registro deve possuir ao menos uma evidência `WA-*` existente                      | resolução do link de origem                    |
| `ENT-REQ-003` | todo vínculo deve existir nos dois sentidos com tipos recíprocos compatíveis            | comparação de adjacência origem/destino        |
| `ENT-REQ-004` | nenhuma referência pode apontar para unidade inexistente                                | detecção de referências órfãs                  |
| `ENT-REQ-005` | duas unidades da mesma classe não podem compartilhar o mesmo ID                         | detecção de duplicatas                         |
| `ENT-REQ-006` | nomes e aliases não podem ser usados como prova única de identidade                     | exigência de status e evidência de resolução   |
| `ENT-REQ-007` | contatos devem preservar o valor original e separar normalização de titularidade        | presença dos campos e proibição de sobrescrita |
| `ENT-REQ-008` | contato incompleto ou malformado não pode ser corrigido por suposição                   | status de qualidade obrigatório                |
| `ENT-REQ-009` | alterações de identidade devem usar fluxo de fusão, separação ou substituição auditável | histórico e IDs preservados                    |
| `ENT-REQ-010` | dados pessoais não podem aparecer no ID, âncora ou marcador técnico                     | inspeção de formato e conteúdo permitido       |
| `ENT-REQ-011` | toda unidade nova ligada a unidade antiga deve gerar vínculo de retorno na antiga       | comparação bidirecional novo ↔ antigo          |
| `ENT-REQ-012` | automação específica deve ser aprovada antes de declarar a transformação concluída      | testes positivos, negativos e de cobertura     |

## 20. Resolução de identidade

### 20.1 Estados permitidos

| Estado       | Uso                                                                                  |
| ------------ | ------------------------------------------------------------------------------------ |
| `provisório` | a menção existe, mas a identidade ainda não foi confirmada                           |
| `confirmado` | há evidência suficiente para vincular menções à mesma pessoa ou equipe               |
| `ambíguo`    | duas ou mais identidades continuam possíveis                                         |
| `fundido`    | o registro foi incorporado a outro após revisão; mantém redirecionamento e histórico |
| `separado`   | menções antes agrupadas foram divididas após revisão                                 |
| `inativo`    | a unidade continua histórica, mas não representa estado atual ativo                  |

### 20.2 Proibição de fusão por similaridade isolada

Grafias semelhantes, apelidos, mesmo primeiro nome, mesma equipe ou números
parecidos NÃO são suficientes para fundir registros. Em caso de dúvida:

1. criar ou manter unidades provisórias separadas;
2. vincular cada unidade à sua própria evidência;
3. registrar a ambiguidade;
4. aguardar evidência adicional ou revisão humana;
5. somente então executar fusão auditável, preservando os IDs anteriores como
   aliases ou redirecionamentos.

Essa regra é necessária porque o registro-fonte contém nomes completos,
abreviações e apelidos que podem ou não representar a mesma pessoa.

### 20.3 Papéis de treinador(a) e atleta

Os namespaces `TRE-*` e `ATL-*` identificam unidades de papel no contexto
documentado, não identidade civil universal. Se a mesma pessoa atuar como atleta
e treinador(a), os dois registros devem permanecer separados e podem receber uma
relação `mesma_pessoa_confirmada` somente após revisão e evidência suficiente.

Uma mudança de papel NÃO autoriza renomear `ATL-*` para `TRE-*`, nem o inverso.
Essa separação preserva o contexto histórico, permite vínculos diferentes com
equipes e contatos e evita que a automação deduza identidade apenas pelo nome.

## 21. Governança de contatos

### 21.1 Contato como unidade temporal

Telefone é um dado mutável e sensível, não uma identidade. Cada associação
pessoa–contato DEVE ser uma unidade própria com:

- exatamente um titular rastreável por vínculo ativo;
- valor original imutável;
- valor normalizado opcional;
- evidência de origem;
- data ou contexto da observação;
- qualidade do contato;
- ciclo de vida;
- eventual sucessor ou substituído.

### 21.2 Estados de qualidade

| Estado            | Significado                                                  |
| ----------------- | ------------------------------------------------------------ |
| `como_registrado` | preservado sem conclusão sobre validade                      |
| `normalizado`     | convertido de modo determinístico, sem inventar dígitos      |
| `incompleto`      | faltam elementos para uso confiável                          |
| `malformado`      | não atende ao formato esperado                               |
| `ambíguo`         | titularidade ou interpretação incerta                        |
| `confirmado`      | titularidade e uso foram confirmados por processo autorizado |

O valor original nunca deve ser substituído pela versão normalizada. Se houver
dúvida, o contato permanece registrado com a qualidade apropriada.

Valores de telefone iguais ou semelhantes sinalizam revisão, mas NÃO autorizam
fusão automática de pessoas ou contatos. Um número pode ter sido compartilhado,
reutilizado, digitado de forma incompleta ou atribuído incorretamente na fonte.

### 21.3 Ciclo de vida do vínculo

Estados permitidos: `ativo`, `inativo`, `substituído`, `revogado` e
`desconhecido`.

Uma mudança de telefone cria uma nova unidade de contato. O registro anterior
permanece para fins históricos e aponta para seu sucessor quando essa relação
for conhecida.

### 21.4 Privacidade

- valores de telefone NÃO DEVEM aparecer em IDs, slugs, nomes de arquivo ou logs
  de validação;
- documentos derivados DEVEM exibir o mínimo necessário;
- acesso ao cadastro de contatos DEVE seguir as mesmas restrições do
  registro-fonte;
- buscas, testes e relatórios DEVEM preferir IDs e contagens;
- fixtures de teste NÃO DEVEM persistir dados pessoais após a execução.

## 22. Verificação das entidades e relações

### 22.1 Verificação estrutural prevista

`ENT-VER-001` deverá confirmar automaticamente:

1. formato e unicidade de todos os IDs `EQP-*`, `TRE-*`, `ATL-*`, `CTT-*` e
   `CTA-*`;
2. existência da evidência `WA-*` indicada;
3. existência de cada origem e destino de vínculo;
4. reciprocidade e compatibilidade dos tipos de relação;
5. ausência de referências órfãs e duplicadas;
6. presença dos campos obrigatórios por classe;
7. preservação de valor original nos contatos;
8. ausência de telefone ou nome pessoal dentro dos IDs;
9. inexistência de duas declarações conflitantes tratadas como simultaneamente
   canônicas;
10. igualdade entre IDs e âncoras Markdown.

### 22.2 Validação humana prevista

`ENT-VAL-001` deverá confirmar:

- se as evidências realmente sustentam o tipo de vínculo declarado;
- se duas menções representam a mesma entidade;
- se um apelido pode ser associado a um nome canônico;
- se a titularidade do contato está suficientemente demonstrada;
- se o estado `confirmado` é justificável;
- se a exposição do dado pessoal é necessária e autorizada.

Automação pode detectar estrutura, mas não deve decidir sozinha identidade
humana ou titularidade de telefone quando a fonte é ambígua.

### 22.3 Validação bidirecional prevista

`ENT-VAL-002` deverá percorrer cada aresta em ambos os sentidos:

```text
unidade A --relação X--> unidade B
unidade A <--relação recíproca Y-- unidade B
```

A validação falha quando:

- somente um lado existe;
- o destino não existe;
- a relação recíproca é incompatível;
- a mesma aresta aparece duplicada;
- a evidência não aponta de volta para a unidade derivada;
- a unidade derivada não aponta para evidência válida.

## 23. Automação a implementar

### 23.1 Validador de entidades

Antes da implantação, DEVE existir um comando dedicado, sem substituir o
validador atual de conversas e mensagens:

```bash
./scripts/validar-entidades-rastreaveis.sh
```

Esse comando deverá retornar:

| Código | Significado                                     |
| -----: | ----------------------------------------------- |
|    `0` | entidades, contatos e vínculos aprovados        |
|    `1` | estrutura, referência ou reciprocidade inválida |
|    `2` | erro de uso, acesso ou configuração             |

### 23.2 Testes mínimos

A suíte futura deverá incluir, no mínimo:

| Marcador       | Cenário obrigatório                                      | Resultado esperado |
| -------------- | -------------------------------------------------------- | ------------------ |
| `ENT-TEST-001` | conjunto completo válido                                 | aprovação          |
| `ENT-TEST-002` | ID duplicado                                             | rejeição           |
| `ENT-TEST-003` | evidência `WA-*` inexistente                             | rejeição           |
| `ENT-TEST-004` | vínculo presente em apenas um lado                       | rejeição           |
| `ENT-TEST-005` | referência de origem ou destino órfã                     | rejeição           |
| `ENT-TEST-006` | contato sem titular                                      | rejeição           |
| `ENT-TEST-007` | contato sem valor original                               | rejeição           |
| `ENT-TEST-008` | telefone incorporado ao ID                               | rejeição           |
| `ENT-TEST-009` | fusão sem histórico ou evidência                         | rejeição           |
| `ENT-TEST-010` | alias tratado automaticamente como identidade confirmada | rejeição           |
| `ENT-TEST-011` | nova unidade sem retorno na conversa ou mensagem antiga  | rejeição           |
| `ENT-TEST-012` | aresta bidirecional duplicada                            | rejeição           |

### 23.3 Integração com a automação existente

Quando a extensão for implantada, a verificação obrigatória deverá executar:

```bash
./scripts/validar-rastreabilidade.sh
./scripts/testar-rastreabilidade.sh
./scripts/validar-entidades-rastreaveis.sh
./scripts/testar-entidades-rastreaveis.sh
```

Os scripts atuais não devem ser substituídos nem ter seu escopo reduzido. A nova
automação deve acrescentar cobertura e preservar todos os vínculos `WA-*`
existentes.

## 24. Procedimento de transformação

### 24.1 Preparação

1. congelar uma cópia revisável da fonte sem alterar seu conteúdo;
2. executar a automação atual e registrar que conversas e mensagens estão
   válidas;
3. criar o cadastro canônico dedicado;
4. definir o próximo número disponível em cada namespace;
5. restringir o acesso ao cadastro que conterá dados pessoais.

### 24.2 Extração

Para cada conversa:

1. criar ou localizar a equipe sem usar o nome como ID;
2. criar ou localizar o treinador informado no cabeçalho;
3. criar o contato do treinador como unidade separada;
4. extrair menções de atletas de cada mensagem;
5. criar contatos de atletas somente quando a fonte trouxer um valor;
6. registrar a evidência exata de cada afirmação;
7. preservar grafia, apelido e telefone originais.

### 24.3 Resolução

1. comparar menções sem fundi-las automaticamente;
2. marcar casos claros como confirmados e dúvidas como provisórias ou ambíguas;
3. documentar a justificativa de qualquer fusão;
4. manter redirecionamento dos IDs fundidos;
5. não inferir equipe atual, situação esportiva ou titularidade atual além da
   fonte.

### 24.4 Conexão bidirecional

1. adicionar no cadastro o link `derivada_de` para a conversa ou mensagem;
2. adicionar na conversa ou mensagem o retorno `origina_unidade`;
3. adicionar relações recíprocas entre equipe, treinador, atleta e contato;
4. verificar que todos os destinos existem;
5. eliminar duplicações sem remover histórico;
6. executar testes de referências órfãs e reciprocidade.

### 24.5 Aceite

A transformação somente é aceita quando:

- [ ] todas as cinco classes possuem IDs conforme a norma;
- [ ] nenhuma pessoa foi fundida apenas por nome, apelido ou telefone parecido;
- [ ] todo contato preserva o valor original;
- [ ] toda unidade possui evidência de origem;
- [ ] toda origem possui retorno para a unidade nova;
- [ ] toda relação está presente nos dois sentidos;
- [ ] não existem referências órfãs ou duplicadas;
- [ ] os vínculos antigos de conversa e mensagem continuam válidos;
- [ ] validação humana revisou ambiguidades;
- [ ] automações antigas e novas retornam `0`.

## 25. Governança das novas unidades

### 25.1 Responsabilidades

| Papel                 | Responsabilidade adicional                                                 |
| --------------------- | -------------------------------------------------------------------------- |
| mantenedor            | atribuir IDs, preservar fonte e atualizar os dois lados de cada relação    |
| revisor de identidade | decidir fusões, separações, aliases e estados de confirmação com evidência |
| custodiante de dados  | controlar acesso e ciclo de vida de contatos pessoais                      |
| revisor técnico       | conferir ausência de órfãos, duplicatas e regressões nos vínculos `WA-*`   |

### 25.2 Mudanças atômicas

Uma nova relação DEVE ser entregue como alteração atômica contendo:

1. unidade nova ou atualizada;
2. vínculo de saída;
3. vínculo recíproco de entrada;
4. evidência de origem;
5. retorno na unidade antiga;
6. teste correspondente quando houver regra nova.

Se qualquer parte faltar, a alteração deve ser rejeitada por estar incompleta.

### 25.3 Fusão e separação

Fusões e separações NÃO DEVEM apagar registros antigos.

- em fusão, um ID permanece canônico e os demais recebem status `fundido`,
  apontando para ele;
- em separação, novos IDs são criados e o registro anterior documenta quais
  evidências foram redistribuídas;
- todos os vínculos afetados são atualizados nos dois lados;
- a decisão, o responsável, a data e a justificativa são registrados.

### 25.4 Desativação e exclusão

Unidades rastreáveis devem ser desativadas, não silenciosamente excluídas.
Exclusão física somente é admitida quando exigida por política de proteção de
dados ou obrigação aplicável, com registro separado da decisão e análise dos
vínculos afetados.

## 26. Justificativas da extensão

### 26.1 IDs substitutos

Nomes mudam, possuem homônimos e aparecem em grafias ou apelidos diferentes.
Telefones mudam e podem ser compartilhados ou reutilizados. IDs substitutos
evitam que atributos mutáveis determinem identidade.

### 26.2 Contatos separados das pessoas

Separar contato de pessoa permite registrar mudança, qualidade, origem e período
de uso sem trocar o ID da pessoa nem apagar histórico.

### 26.3 Evidência como relação explícita

Um cadastro sem vínculo com a mensagem de origem perde auditabilidade. A relação
`derivada_de` permite conferir de onde veio cada nome, contato ou associação.

### 26.4 Reciprocidade materializada

Registrar ambos os sentidos permite navegar a partir da entidade e a partir da
evidência, além de detectar vínculos incompletos por comparação automática.

### 26.5 Separação entre estrutura e verdade factual

Automação prova que a estrutura está íntegra; revisão humana avalia se a
evidência sustenta identidade e titularidade. Misturar essas funções criaria
falsas confirmações.

## 27. Riscos e controles

| Risco                                              | Controle obrigatório                                         |
| -------------------------------------------------- | ------------------------------------------------------------ |
| fundir homônimos ou apelidos incorretamente        | estado provisório e revisão humana                           |
| telefone incompleto ser “corrigido” por suposição  | valor original imutável e status `incompleto`                |
| quebrar vínculos antigos ao inserir novas unidades | atualização recíproca e regressão da automação `WA-*`        |
| referência existir somente em um lado              | validação bidirecional de arestas                            |
| duplicar entidade por variação de grafia           | aliases observados e fila de resolução, sem fusão automática |
| expor dado pessoal em ID ou log                    | IDs opacos e logs por contagem/ID                            |
| contato mudar e sobrescrever histórico             | nova unidade de contato e status do vínculo anterior         |
| norma declarar automação inexistente               | estado de implantação explícito e gate `ENT-REQ-012`         |

## 28. Critérios de conclusão da extensão

A extensão para equipes, treinadores(as), atletas e contatos estará concluída
somente quando houver evidência objetiva de que:

1. o cadastro canônico foi criado;
2. todas as unidades extraídas têm ID, âncora e tipo;
3. todos os vínculos com conversas e mensagens são recíprocos;
4. todos os vínculos entre entidades e contatos são recíprocos;
5. nenhuma referência está órfã ou duplicada;
6. ambiguidades permanecem explicitamente provisórias ou foram revisadas;
7. contatos preservam valor original, qualidade e ciclo de vida;
8. a automação específica foi implementada;
9. testes positivos e negativos foram aprovados;
10. os cenários legados aplicáveis foram migrados e aprovados pela nova
    governança;
11. a revisão humana de identidade e privacidade foi concluída;
12. os comentários HTML e todos os vínculos antigos foram preservados.

## 29. Esquema controlado de metadados

### 29.1 Regra de utilidade operacional

No escopo das unidades rastreáveis desta norma, um metadado somente é rastreável
quando possui, simultaneamente:

1. nome canônico registrado nesta norma;
2. classe de unidade à qual se aplica;
3. cardinalidade explícita;
4. tipo ou domínio de valores definido;
5. consumidor operacional identificado;
6. validação estrutural ou procedimento de revisão definido.

Campo que não satisfaça esses seis itens é decorativo e NÃO DEVE ser adicionado.
Um campo desconhecido também NÃO DEVE ser aceito silenciosamente: antes de seu
uso, o esquema deve ser alterado pelo procedimento da seção 29.8.

### 29.2 Notação de cardinalidade

| Notação | Significado   | Regra de armazenamento                                       |
| ------- | ------------- | ------------------------------------------------------------ |
| `1..1`  | exatamente um | obrigatório, não vazio e não repetido                        |
| `0..1`  | zero ou um    | ausente ou preenchido uma única vez; valor vazio é proibido  |
| `1..*`  | um ou mais    | ao menos um valor; cada ocorrência deve ser válida           |
| `0..*`  | zero ou mais  | lista possivelmente ausente; cada ocorrência deve ser válida |

Quando houver vários valores, cada valor DEVE ser uma ocorrência distinguível ou
um item de lista. Valores não podem ser concatenados em texto livre para
contornar a cardinalidade.

### 29.3 Nomes canônicos e esquema vigente das conversas

Os nomes são sensíveis a grafia, acentuação e capitalização. Sinônimos como
`Time`, `Técnico`, `Telefone` ou `Data` não substituem os nomes canônicos. No
Markdown, cada campo usa a forma `**Nome canônico:** valor`. Os metadados de
conversa ficam no cabeçalho iniciado por `Equipe` e encerrado antes da primeira
mensagem; texto de mensagem não é interpretado como metadado apenas por conter
negrito e dois-pontos.

| Campo canônico           | Unidade  | Cardinalidade | Tipo ou domínio                                            | Consumidor operacional                           | Validação vigente                              |
| ------------------------ | -------- | ------------- | ---------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------- |
| `Equipe`                 | conversa | `1..1`        | texto não vazio                                            | delimita o bloco e identifica a equipe declarada | validador                                      |
| `ID da conversa`         | conversa | `1..1`        | `WA-AAAAMMDD-NNN`                                          | identidade, âncora e navegação                   | validador                                      |
| `Categoria`              | conversa | `1..1`        | `Adulto Feminino`, `Júnior Feminino` ou `Juvenil Feminino` | classificação e consulta                         | validador                                      |
| `Treinador(a) principal` | conversa | `1..1`        | texto não vazio, preservado como registrado                | proveniência e futura resolução de identidade    | validador estrutural e revisão humana          |
| `Contato`                | conversa | `1..1`        | texto não vazio, preservado como registrado                | evidência de contato do(a) treinador(a)          | validador estrutural e revisão humana          |
| `Data de exportação`     | conversa | `1..1`        | `D[D] de <mês> de AAAA às HH:MM`                           | proveniência temporal da exportação              | validador                                      |
| `Data das mensagens`     | conversa | `1..1`        | data ISO `AAAA-MM-DD`                                      | classificação temporal e composição do ID        | validador; deve coincidir com `AAAAMMDD` do ID |
| `ID da mensagem`         | mensagem | `1..1`        | `WA-AAAAMMDD-NNN-MNNN`                                     | identidade, hierarquia e navegação               | validador                                      |
| linha temporal           | mensagem | `1..1`        | linha iniciada por `[AAAA-MM-DDT`                          | ordenação e contexto temporal                    | validador estrutural                           |

O campo `Contato` não afirma que o número está completo, normalizado, ativo ou
pertence à pessoa declarada. Essas propriedades exigem as unidades e os estados
definidos nas seções 21 e 29.6. A linha temporal é reconhecida estruturalmente;
validade de calendário, fuso e autenticidade histórica permanecem fora dessa
verificação.

### 29.4 Vocabulários fechados

Os valores abaixo são canônicos. Variações de maiúsculas, acentuação, espaço ou
tradução não criam valores equivalentes.

| Vocabulário                         | Valores permitidos                                                                    |
| ----------------------------------- | ------------------------------------------------------------------------------------- |
| tipo de unidade                     | `equipe`, `treinador`, `atleta`, `contato_treinador`, `contato_atleta`                |
| categoria da conversa               | `Adulto Feminino`, `Júnior Feminino`, `Juvenil Feminino`                              |
| estado de identidade                | `provisório`, `confirmado`, `ambíguo`, `fundido`, `separado`, `inativo`               |
| qualidade do contato                | `como_registrado`, `normalizado`, `incompleto`, `malformado`, `ambíguo`, `confirmado` |
| ciclo de vida do vínculo de contato | `ativo`, `inativo`, `substituído`, `revogado`, `desconhecido`                         |
| relação direta                      | `tem_treinador`, `possui_contato`, `atleta_citada_no_contexto`, `derivada_de`         |
| relação inversa                     | `treina_equipe`, `contato_de`, `citada_por_equipe`, `origina_unidade`                 |

Novos valores exigem alteração do registro de vocabulário, análise de
compatibilidade e teste negativo. Texto livre NÃO DEVE ser usado em campo de
vocabulário fechado.

### 29.5 Esquema comum das entidades derivadas

Quando o cadastro canônico previsto na seção 17 for implantado, cada equipe,
treinador(a), atleta ou contato DEVERÁ obedecer ao seguinte núcleo:

| Campo canônico         | Cardinalidade                          | Tipo ou domínio                          | Finalidade operacional             |
| ---------------------- | -------------------------------------- | ---------------------------------------- | ---------------------------------- |
| `ID`                   | `1..1`                                 | formato da classe definido na seção 17.3 | identidade e referência            |
| `Tipo`                 | `1..1`                                 | tipo de unidade da seção 29.4            | seleção do esquema aplicável       |
| `Nome registrado`      | `1..1` para equipe, treinador e atleta | texto preservado da fonte                | exibição e resolução de identidade |
| `Aliases observados`   | `0..*`                                 | texto mais referência de origem          | busca sem fusão automática         |
| `Estado de identidade` | `1..1` para equipe, treinador e atleta | vocabulário da seção 29.4                | governança de ambiguidade          |
| `Evidências de origem` | `1..*`                                 | IDs `WA-*` existentes                    | proveniência reversível            |
| `Vínculos de saída`    | `0..*`                                 | relação tipada mais ID de destino        | navegação direta                   |
| `Vínculos de entrada`  | `0..*`                                 | relação inversa mais ID de origem        | navegação inversa                  |
| `Criado em`            | `1..1`                                 | data ISO `AAAA-MM-DD`                    | auditoria do cadastro              |
| `Atualizado em`        | `0..1`                                 | data ISO `AAAA-MM-DD`                    | auditoria de alteração             |
| `Versão do esquema`    | `1..1`                                 | identificador de versão vigente          | interpretação e migração           |

`Nome registrado` não se aplica a unidades de contato. Ausência de campo não
aplicável é correta; campo vazio não é.

### 29.6 Esquema específico dos contatos

Cada unidade `contato_treinador` ou `contato_atleta` DEVERÁ acrescentar:

| Campo canônico         | Cardinalidade | Tipo ou domínio                          | Finalidade operacional                             |
| ---------------------- | ------------- | ---------------------------------------- | -------------------------------------------------- |
| `Titular`              | `1..1`        | ID de treinador ou atleta                | impede contato sem proprietário rastreável         |
| `Valor original`       | `1..1`        | texto imutável da evidência              | preserva proveniência                              |
| `Valor normalizado`    | `0..1`        | valor derivado segundo regra documentada | busca e comparação sem sobrescrever a fonte        |
| `Qualidade do contato` | `1..1`        | vocabulário da seção 29.4                | impede que formato seja confundido com confirmação |
| `Ciclo de vida`        | `1..1`        | vocabulário da seção 29.4                | controla vigência sem apagar histórico             |

Um contato não pode ser marcado `confirmado` por inferência de formato. A
confirmação exige evidência registrada e revisão humana. Alteração de titular ou
valor original cria nova unidade; não sobrescreve a anterior.

### 29.7 Camadas de validação

A validação DEVE ocorrer em camadas, sem tratar uma aprovação parcial como
aprovação total:

1. **léxica:** nome do campo, padrão do ID e formato básico;
2. **de esquema:** cardinalidade, obrigatoriedade, tipo e vocabulário fechado;
3. **referencial:** todo ID citado existe e pertence à classe esperada;
4. **recíproca:** toda aresta direta possui a inversa definida;
5. **de coerência:** valores relacionados, como data e ID, não divergem;
6. **semântica:** pessoa responsável revisa identidade, titularidade,
   significado e privacidade;
7. **operacional:** ao menos um validador, consulta, vínculo ou processo de
   governança consome o campo.

O validador atual executa as camadas léxica, de esquema e de coerência para os
metadados das conversas. As entidades derivadas continuam no estado de
especificação da seção 17.1 até que `ENT-REQ-012` possua implementação e testes
próprios.

### 29.8 Governança de extensão do esquema

Antes de adicionar ou renomear um campo, o responsável DEVE registrar na mesma
alteração:

1. nome canônico e descrição sem ambiguidade;
2. unidades às quais se aplica;
3. cardinalidade;
4. tipo, formato ou vocabulário permitido;
5. classificação de sensibilidade e política de exposição;
6. consumidor operacional;
7. regra de validação e mensagem de erro;
8. teste positivo e ao menos um teste negativo;
9. impacto sobre dados e vínculos existentes;
10. estratégia de migração compatível e nova versão do esquema, quando
    necessária.

Renomear campo canônico é mudança de esquema, não correção editorial. Deve
preservar leitura dos registros existentes durante a migração ou migrá-los
atomicamente junto com validador, documentação e testes. Campos experimentais,
prefixos livres e sinônimos não registrados são proibidos.

### 29.9 Evidência automatizada vigente

`RT-CRIT-011` descreve o esquema fechado das conversas. Os cenários legados
`RT-TEST-018` a `RT-TEST-022` pretendiam demonstrar, respectivamente, rejeição
de campo obrigatório ausente, campo singular duplicado, data incoerente, nome
desconhecido e valor fora do domínio. O cenário real era representado por
`RT-TEST-001`; nenhum deles constitui evidência válida até a migração.

Os cenários somente voltarão a participar do aceite depois de receberem caso
governado, oráculo, critérios de resultado, registro de execução e validação
independente. A existência futura de campos no cadastro de entidades não poderá
ser declarada implantada apenas por constar nesta norma; exigirá a automação
prevista em `ENT-REQ-012`.
