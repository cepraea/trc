---
documento_id: DOC-REPO-MAP-001
tipo: mapa-repositorio
status: vigente
caminho_canonico: mapa-repositorio.md
versao: 1.0.0
atualizado_em: 2026-11-13
---

# Mapa canônico do repositório

## Contrato do documento

| Propriedade | Definição |
| --- | --- |
| Papel | catálogo da estrutura permanente, responsabilidades e rotas mínimas de contexto |
| Objetivo | permitir auditoria e navegação rápida sem carregar arquivos irrelevantes |
| Escopo | arquivos gerenciados do workspace; diretórios técnicos, temporários e evidências dinâmicas são classificados separadamente |
| Caminho canônico | `mapa-repositorio.md` |
| Autoridade | agentes devem consultar a rota da tarefa antes de ler ou alterar artefatos |
| Contexto mínimo | contrato, rota aplicável e linhas do catálogo dos arquivos afetados |
| Dependências | diretrizes centrais e contratos individuais dos documentos |
| Restrições | não catalogar segredo; não tratar `tmp/` como evidência permanente; não omitir arquivo permanente |
| Riscos mitigados | contexto excessivo, arquivo invisível, responsabilidade ambígua e alteração fora do escopo |

## Árvore permanente

```text
.
├── .gitignore
├── AGENTS.md
├── governanca-testes.md
├── grupo-whatsapp.md
├── mapa-repositorio.md
├── mensagens-treinadores.md
├── rastreabilidade-tecnica.md
├── regras-rastreabilidade.md
├── tecnicas-rastreabilidade.md
├── scripts/
│   ├── testar-conformidade-repositorio.sh
│   ├── testar-rastreabilidade.sh
│   └── validar-rastreabilidade.sh
└── testes/
    ├── matriz-testes.md
    ├── casos/
    │   ├── TST-CASE-001.md
    │   ├── TST-CASE-002.md
    │   ├── TST-CASE-003.md
    │   ├── TST-CASE-004.md
    │   ├── TST-CASE-005.md
    │   ├── TST-CASE-006.md
    │   ├── TST-CASE-007.md
    │   └── TST-CASE-008.md
    ├── configuracoes/
    │   ├── TST-CFG-001.baseline
    │   └── TST-CFG-001.env
    ├── defeitos/
    │   └── TST-DEF-001.md
    ├── evidencias/
    ├── execucoes/
    └── validacoes/
```

## Catálogo de arquivos permanentes

| Caminho canônico | Papel | Leitura obrigatória quando |
| --- | --- | --- |
| `.gitignore` | exclusões locais do versionamento | alterar estrutura temporária ou gerada |
| `AGENTS.md` | autoridade central imutável para agentes | toda tarefa |
| `governanca-testes.md` | norma dos testes, registros e validações | criar, executar ou interpretar teste |
| `grupo-whatsapp.md` | registro operacional do grupo | alterar composição, regras ou totais do grupo |
| `mapa-repositorio.md` | árvore, catálogo e rotas de contexto | incluir, mover ou remover arquivo permanente |
| `mensagens-treinadores.md` | registro-fonte das conversas | alterar ou consumir unidade `WA-*` |
| `rastreabilidade-tecnica.md` | critérios e matriz técnica `RT-*` | alterar regra, marcador ou implementação de rastreabilidade |
| `regras-rastreabilidade.md` | norma da rastreabilidade | alterar IDs, vínculos, metadados ou governança |
| `tecnicas-rastreabilidade.md` | referência conceitual `RT-TECH-*` | alterar princípio técnico ou justificativa |
| `scripts/testar-conformidade-repositorio.sh` | runner governado em desenvolvimento | executar casos `TST-CASE-*` |
| `scripts/testar-rastreabilidade.sh` | suíte legada inválida | migrar cenário histórico; nunca para aceite |
| `scripts/validar-rastreabilidade.sh` | validador legado inválido | migrar regra histórica; nunca para aceite |
| `testes/matriz-testes.md` | relações requisito–decisão–caso–execução–evidência | qualquer mudança de teste |
| `testes/casos/TST-CASE-001.md` | contrato dos documentos | alterar documentação permanente |
| `testes/casos/TST-CASE-002.md` | especificidade dos links internos | criar ou alterar link local |
| `testes/casos/TST-CASE-003.md` | árvore e rotas | alterar estrutura do repositório |
| `testes/casos/TST-CASE-004.md` | preservação de comentários | alterar Markdown com comentário HTML |
| `testes/casos/TST-CASE-005.md` | integridade estrutural do grupo | alterar lista ou título do grupo |
| `testes/casos/TST-CASE-006.md` | preservação das unidades `WA-*` | alterar mensagens ou links de origem |
| `testes/casos/TST-CASE-007.md` | quarentena do legado | mencionar ou migrar automação antiga |
| `testes/casos/TST-CASE-008.md` | esquema dos registros de execução | criar ou corrigir `TST-RUN-*` |
| `testes/configuracoes/TST-CFG-001.env` | ambiente reprodutível | executar a suíte governada |
| `testes/configuracoes/TST-CFG-001.baseline` | hashes de preservação | validar comentários ou IDs antigos |
| `testes/defeitos/TST-DEF-001.md` | falso negativo do detector de registros | corrigir ou revisar `TST-CASE-008` |

## Diretórios classificados

| Caminho | Classificação | Regra |
| --- | --- | --- |
| `.git/` | histórico determinístico | não editar manualmente; usar Git local; escrita remota depende de autorização |
| `.agents/`, `.aws/`, `.codex/` | infraestrutura do ambiente | não carregar como contexto do domínio nem versionar automaticamente |
| `tmp/` | temporário | planejamento e resultados intermediários; não serve como evidência final |
| `testes/evidencias/` | dinâmico permanente | cada arquivo deve possuir ID, hash e execução de origem |
| `testes/execucoes/` | dinâmico permanente | cada registro fechado é imutável e encadeado |
| `testes/validacoes/` | dinâmico permanente | somente parte independente pode emitir validação |

## Rotas para contexto frugal

### Rota: documentação

1. `AGENTS.md`;
2. contrato do documento alvo;
3. `mapa-repositorio.md` somente se caminho ou dependência mudar;
4. `governanca-testes.md` e `TST-CASE-001` antes da validação.

### Rota: dados

1. `AGENTS.md`;
2. contrato de `grupo-whatsapp.md` ou `mensagens-treinadores.md`;
3. somente a seção ou unidade afetada;
4. norma específica em `regras-rastreabilidade.md`;
5. casos `TST-CASE-004`, `TST-CASE-005` ou `TST-CASE-006`, conforme o impacto.

### Rota: testes

1. `AGENTS.md`;
2. `governanca-testes.md`;
3. linhas do requisito, decisão e caso em `testes/matriz-testes.md`;
4. arquivo do caso e configuração;
5. implementação exercitada;
6. registro e evidência somente após execução.

### Rota: scripts

1. `AGENTS.md`;
2. decisão e caso que autorizam o comportamento;
3. script alvo e dependências diretas;
4. configuração;
5. regressões relacionadas na matriz.

## Regras de manutenção

- inclusão ou remoção de arquivo permanente atualiza árvore e catálogo na mesma alteração;
- mudança de responsabilidade atualiza contrato individual e catálogo;
- rota nova deve reduzir contexto, não duplicar uma rota existente;
- arquivos dinâmicos são governados por padrão e não enumerados um a um na árvore;
- referência deste mapa a outro artefato usa caminho em código; links ativos, quando necessários, devem apontar para âncora específica.
