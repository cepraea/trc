---
documento_id: DOC-TEST-MATRIX-001
tipo: matriz-testes
status: desenvolvimento
caminho_canonico: testes/matriz-testes.md
versao: 1.0.0
atualizado_em: 2026-11-13
---

# Matriz canônica de testes

## Contrato do documento

| Propriedade | Definição |
| --- | --- |
| Papel | registrar relações bidirecionais entre requisitos, decisões, casos, execuções, evidências e validações |
| Objetivo | impedir teste, requisito ou evidência órfã e tornar impacto consultável no VS Code |
| Escopo | alinhamento do repositório às diretrizes centrais e migração da rastreabilidade legada |
| Caminho canônico | `testes/matriz-testes.md` |
| Autoridade | agentes devem atualizar origem e destino na mesma alteração; esta matriz não concede aceite independente |
| Contexto mínimo | contrato, requisitos, decisões e linhas do caso afetado |
| Dependências | governança na seção `Matriz bidirecional obrigatória` de `governanca-testes.md` |
| Restrições | nenhuma referência órfã ou duplicada; nenhuma execução pode ser inventada ou reconstituída retroativamente |
| Riscos mitigados | cobertura aparente, caso sem requisito, requisito sem prova e evidência sem execução |

## Requisitos

| Requisito | Obrigação | Decisão | Casos de retorno |
| --- | --- | --- | --- |
| `TST-REQ-001` | documentos gerenciados possuem contrato completo e caminho canônico único | `TST-DEC-001` | `TST-CASE-001` |
| `TST-REQ-002` | link interno aponta para localização específica, não para arquivo inteiro | `TST-DEC-002` | `TST-CASE-002` |
| `TST-REQ-003` | árvore e rotas de contexto representam integralmente os artefatos gerenciados | `TST-DEC-003` | `TST-CASE-003` |
| `TST-REQ-004` | comentários HTML existentes permanecem byte a byte preservados | `TST-DEC-004` | `TST-CASE-004` |
| `TST-REQ-005` | seções quantificadas do grupo correspondem aos itens e não contêm nome duplicado entre estados | `TST-DEC-005` | `TST-CASE-005` |
| `TST-REQ-006` | IDs e âncoras `WA-*` publicados permanecem inalterados durante o alinhamento | `TST-DEC-006` | `TST-CASE-006` |
| `TST-REQ-007` | automação legada é identificada como inválida e não sustenta alegação de aprovação | `TST-DEC-007` | `TST-CASE-007` |
| `TST-REQ-008` | toda execução nova registra configuração, resultados, evidências, hashes e fase TDD | `TST-DEC-008` | `TST-CASE-008` |

## Decisões

| Decisão | Abordagem autorizada | Justificativa | Restrições | Requisito e casos de retorno |
| --- | --- | --- | --- | --- |
| `TST-DEC-001` | verificar cabeçalho `Contrato do documento` e nove propriedades canônicas | propriedades explícitas permitem contexto frugal e governança uniforme | frontmatter isolado não substitui contrato | `TST-REQ-001`; `TST-CASE-001` |
| `TST-DEC-002` | analisar links Markdown internos fora de blocos de código e exigir fragmento | o destino precisa ser cirúrgico no VS Code | exemplos em blocos de código não são navegação ativa | `TST-REQ-002`; `TST-CASE-002` |
| `TST-DEC-003` | comparar inventário gerenciado com catálogo e rotas declaradas | comparação de conjuntos detecta omissões e sobras | diretórios técnicos ocultos são classificados, não carregados como contexto | `TST-REQ-003`; `TST-CASE-003` |
| `TST-DEC-004` | comparar contagem e SHA-256 da extração dos comentários com baseline anterior | hash detecta alteração invisível à contagem | baseline é anterior às correções e deve permanecer estável | `TST-REQ-004`; `TST-CASE-004` |
| `TST-DEC-005` | contar itens por seção e nomes normalizados | totais e duplicatas são propriedades observáveis do resultado final | divergência factual não é corrigida automaticamente | `TST-REQ-005`; `TST-CASE-005` |
| `TST-DEC-006` | comparar SHA-256 dos títulos e campos de ID com baseline | preserva exatamente unidades antigas sem interpretar conteúdo pessoal | qualquer mudança exige decisão específica anterior | `TST-REQ-006`; `TST-CASE-006` |
| `TST-DEC-007` | procurar banner legado e proibir alegações documentais de aprovação | impede que saída inválida seja confundida com evidência | cenários históricos não são apagados | `TST-REQ-007`; `TST-CASE-007` |
| `TST-DEC-008` | validar esquema dos registros e vínculos antes de classificar execução | registro completo é parte do resultado, não efeito decorativo | autor não emite validação independente | `TST-REQ-008`; `TST-CASE-008` |

## Casos, execuções e evidências

| Caso | Requisito | Decisão | Configuração | Execuções | Evidências | Validação independente | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `TST-CASE-001` | `TST-REQ-001` | `TST-DEC-001` | `TST-CFG-001` | `TST-RUN-20261113-001` a `003` | evidências `001` a `003` | pendente | `green_desenvolvimento` |
| `TST-CASE-002` | `TST-REQ-002` | `TST-DEC-002` | `TST-CFG-001` | `TST-RUN-20261113-001` a `003` | evidências `001` a `003` | pendente | `green_desenvolvimento` |
| `TST-CASE-003` | `TST-REQ-003` | `TST-DEC-003` | `TST-CFG-001` | `TST-RUN-20261113-001` a `003` | evidências `001` a `003` | pendente | `green_desenvolvimento` |
| `TST-CASE-004` | `TST-REQ-004` | `TST-DEC-004` | `TST-CFG-001` | `TST-RUN-20261113-001` a `003` | evidências `001` a `003` | pendente | `green_desenvolvimento` |
| `TST-CASE-005` | `TST-REQ-005` | `TST-DEC-005` | `TST-CFG-001` | `TST-RUN-20261113-001`, `TST-RUN-20261113-002` | `TST-EVD-20261113-001-001`, `TST-EVD-20261113-002-001` | pendente | `bloqueado` por decisão humana |
| `TST-CASE-006` | `TST-REQ-006` | `TST-DEC-006` | `TST-CFG-001` | `TST-RUN-20261113-001` a `003` | evidências `001` a `003` | pendente | `green_desenvolvimento` |
| `TST-CASE-007` | `TST-REQ-007` | `TST-DEC-007` | `TST-CFG-001` | `TST-RUN-20261113-001` a `003` | evidências `001` a `003` | pendente | `green_desenvolvimento` |
| `TST-CASE-008` | `TST-REQ-008` | `TST-DEC-008` | `TST-CFG-001` | `TST-RUN-20261113-001` a `003` | evidências `001` a `003` | pendente | `green_desenvolvimento`; `TST-DEF-001` fechado |

## Estado de aceite

Todos os casos possuem Red registrado em `TST-RUN-20261113-001`. Sete casos alcançaram Green de desenvolvimento em `TST-RUN-20261113-003`; `TST-CASE-005` permanece bloqueado. Nenhum caso possui validação independente; a matriz não autoriza aceite do repositório.
