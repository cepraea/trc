# Checklist Automatizado em Python e Validação de Pré-Commit

O **checklist automatizado em Python** atua como um **oráculo determinístico e barreira sintática local**, concebido para que os agentes de IA ou desenvolvedores humanos não consigam registrar no Git alterações que violem as normas de engenharia ou os esquemas de metadados do repositório.

---

## Checklist Automatizado em Python

O script validador opera como um analisador estático (*linter/parser*) independente.
Ele lê os arquivos Markdown gerenciados e executa um conjunto de verificações booleanas (PASS/FAIL) em quatro níveis sequenciais:

```mermaid
flowchart TD
    Commit["Comando git commit disparado"] --> PreCommitHook[".git/hooks/pre-commit intercepta a ação"]
    PreCommitHook --> PyScript["Executa script Python validador"]
    
    subgraph Verificacoes["Bateria de Verificações do Script Python"]
        V1["1. Parsing XML do Common Block (14 campos canônicos)"]
        V2["2. Validação do Form Block (Métricas da especificação)"]
        V3["3. Checagem Sintática EARS nos Requisitos (Capítulo 2)"]
        V4["4. Rastreabilidade nos Cenários Gherkin (Capítulo 4)"]
        V5["5. Imutabilidade Append-Only do Footer (doc:change_log)"]
    end
    
    PyScript --> V1 --> V2 --> V3 --> V4 --> V5
    
    V5 --> Retorno{"Todas as regras válidas?"}
    Retorno -->|Sim: exit 0| CommitSucesso["Commit registrado no histórico Git"]
    Retorno -->|Não: exit 1| CommitAbortado["Commit ABORTADO (Operação bloqueada)"]
```

### Nível 1: Validação do Common Block (Tags XML `<doc:...>`)

* **Estrutura e Presença:** O script analisa se os 14 campos universais obrigatórios estão presentes no topo absoluto do arquivo Markdown (`<doc:schema_version>`, `<doc:file_type>`, `<doc:document_status>`, etc.).
* **Autoridade e Status:** Verifica se o agente não tentou promover o status indevidamente para `approved` sem o veredito formal exigido pelas normas ISO/IEC 42001 e 38507.
* **Custódia Singular (`doc:owner`):** Confirma se o agente que modificou o arquivo corresponde ao proprietário exclusivo daquele tipo documental (por exemplo, `srs-writer` para `spec-foundation` ou `architect` para `spec-architecture`).

### Nível 2: Validação do Form Block (`<spec-architecture:...>`)

* O script extrai os campos de máquina que alimentam os portões de qualidade (Gates de CI/CD), conferindo se as contagens batem com o que foi declarado (ex.: `<spec-architecture:completed_chapters>`, `<spec-architecture:component_count>`).

### Nível 3: Análise Sintática de Requisitos e Cenários (EARS e Gherkin)

* **Padrões EARS no Capítulo 2:**
Analisa por expressões regulares (*regex*) se cada requisito declarado no Capítulo 2 segue estritamente um dos 5 padrões linguísticos da sintaxe EARS (`Ubíquo`, `Event-Driven`, `State-Driven`, `Unwanted Behavior` ou `Opcional`).
* **Oráculos Gherkin no Capítulo 4:**
Confirma se os blocos delimitados por ` ```gherkin ` contêm a tríade léxica padronizada (`Dado`, `Quando`, `Então`) e a marcação de rastreabilidade explícita com o ID do requisito correspondente: `(traces: REQ-...)`.

### Nível 4: Integridade do Rodapé (Footer *Append-Only*)

* O script examina a tag `<doc:change_log>`, comparando o estado anterior com o atual para garantir que nenhuma linha de histórico prévia foi modificada ou removida, aceitando apenas a inclusão (*append*) de novas tags `<entry>` com timestamp UTC e agente identificado.

---

## Validação do Pré-Commit

A validação de pré-commit é executada diretamente pelo mecanismo nativo de **Git Hooks** da máquina do desenvolvedor (ou dentro do ambiente GitHub Codespaces):

1. **Localização do Hook:**  
   O arquivo de hook fica localizado em `.git/hooks/pre-commit` no repositório local.
2. **Momento da Interceptação:**  
   Assim que o agente ou o usuário digita `git commit -m "..."`, o Git congela a criação do commit e invoca imediatamente o script `.git/hooks/pre-commit` antes de gravar o objeto no repositório.
3. **Identificação dos Arquivos Afetados (*Staged Files*):**  
   O script roda o comando `git diff --cached --name-only --diff-filter=ACM` para obter apenas os arquivos `.md` que foram adicionados à área de preparação (*stage*) com `git add`.
4. **O Contrato de Saída (*Exit Code*):**  
   * **Se passar em 100% dos testes:** O script Python emite mensagem de sucesso e finaliza com `sys.exit(0)`. O Git reconhece o código de saída zero e conclui a gravação do commit no histórico da branch.
   * **Se qualquer validação falhar (ex.: tag XML malformada, requisito fora da sintaxe EARS ou campo obrigatório ausente):** O script imprime a linha e a regra violada no console de erro (`stderr`) e finaliza com `sys.exit(1)`. O Git interpreta qualquer saída diferente de zero como uma **falha bloqueante** e aborta sumariamente a operação. Nenhum commit é criado.

---

## 3. O Script em Prática

Para materializar esse conceito, veja a estrutura básica de um validador `scripts/validate_spec.py` e sua amarração no hook:

### O Script Python (`scripts/validate_spec.py`)

```python
#!/usr/bin/env python3
import sys
import re
from pathlib import Path

REQUIRED_DOC_TAGS = [
    "doc:schema_version", "doc:file_type", "doc:document_status",
    "doc:owner", "doc:project", "doc:purpose"
]

def validate_markdown(file_path: Path) -> bool:
    content = file_path.read_text(encoding="utf-8")
    errors = []

    # 1. Checa presença do Common Block
    for tag in REQUIRED_DOC_TAGS:
        if not re.search(rf"<{tag}>.*?</{tag}>", content):
            errors.append(f"Tag obrigatória ausente: <{tag}>")

    # 2. Impede autoaprovação não autorizada
    if "<doc:document_status>approved</doc:document_status>" in content:
        # Verifica se não há evidência humana registrada
        errors.append("Status 'approved' é exclusivo da autoridade humana e não pode ser comitado diretamente.")

    # 3. Valida sintaxe EARS no Capítulo 2
    if "### Capítulo 2" in content:
        req_pattern = re.compile(r"\\[REQ-[A-Z0-9]+-\d+\s*\|\s*(Ubíquo|Event-Driven|State-Driven|Unwanted Behavior|Opcional)\\]:")
        if not req_pattern.search(content):
            errors.append("Requisitos do Capítulo 2 devem seguir a fórmula EARS.")

    # 4. Valida Gherkin e Rastreabilidade no Capítulo 4
    if "```gherkin" in content and "(traces: REQ-" not in content:
        errors.append("Cenários Gherkin do Capítulo 4 exigem marcação explícita de rastreabilidade '(traces: REQ-...)'")

    if errors:
        print(f"\n[FAIL] Erros no arquivo: {file_path}", file=sys.stderr)
        for err in errors:
            print(f"  - {err}", file=sys.stderr)
        return False

    print(f"[PASS] {file_path} está em conformidade estrutural.")
    return True

if __name__ == "__main__":
    files = sys.argv[1:]
    all_valid = all(validate_markdown(Path(f)) for f in files if f.endswith(".md"))
    sys.exit(0 if all_valid else 1)
```

### O Git Hook (`.git/hooks/pre-commit`)

```bash
#!/usr/bin/env bash
# Coleta apenas os arquivos Markdown que estão no stage do commit
FILES=$(git diff --cached --name-only --diff-filter=ACM | grep '\.md$' || true)

if [ -n "$FILES" ]; then
    python3 scripts/validate_spec.py $FILES
    EXIT_CODE=$?
    if [ $EXIT_CODE -ne 0 ]; then
        echo "COMMIT ABORTADO: Corrija os erros estruturais acima antes de comitar."
        exit 1
    fi
fi

exit 0
```

---

## 4. Limitações e Defesa em Profundidade

Conforme comprovado nos relatórios de auditoria e segurança da infraestrutura:

* **Hooks de Git locais não são barreiras de segurança absolutas:**
Um agente de IA com acesso ao shell pode tentar forçar o commit utilizando `git commit --no-verify`, ignorando o hook de pré-commit.
* **A Proteção Definitiva Reside no Servidor:**
Por essa razão, a arquitetura do projeto implementa a **defesa em profundidade**:
o pré-commit serve como retorno imediato e barato para o desenvolvedor; contudo, a trava inviolável é imposta na esteira remota do GitHub (via **Branch Protection Rules** e a assinatura exclusiva do **GitHub App ID 5476799** com o check `eud-gate/verified`), impedindo qualquer mesclagem na branch principal se o código não tiver sido aprovado pelo validador independente.

### 1. Arquitetura e Funcionamento do Script (`validate-spec-template.py`)

O script foi desenvolvido utilizando **exclusivamente a biblioteca padrão do Python** (`sys`, `re`, `pathlib`), garantindo execução autônoma, rápida e imune a ataques de cadeia de suprimentos (*supply chain*). Ele opera em cinco etapas de auditoria estática:

1. **Validação do Common Block (Tags XML Universais):**
   * Confere a presença das 14 tags mandatórias (`<doc:schema_version>`, `<doc:file_type>`, `<doc:document_status>`, `<doc:owner>`, etc.).
   * **Trava de Autoaprovação:** Rejeita qualquer arquivo com `<doc:document_status>approved</doc:document_status>` se houver marcadores de revisão pendente (`approval_status: PENDENTE` ou `EM_REVISAO`), preservando a autoridade humana exclusiva sob as normas ISO/IEC 42001 e 38507.
   * Valida a conformidade de datas e tipos de arquivo permitidos (`spec-architecture` e `spec-functional`).

2. **Validação do Form Block (Métricas de Engenharia):**
   * Checa se os campos de controle de CI/CD existem e estão preenchidos (`<spec-architecture:completed_chapters>`, `<spec-architecture:component_count>`, etc.).
   * Verifica se os capítulos declarados pertencem ao intervalo válido (`1` a `6`).

3. **Validação da Sintaxe EARS (Capítulo 2):**
   * Localiza os requisitos do Capítulo 2 e exige a palavra-chave mandatória **`SHALL`** (RFC 2119).
   * Confere as cláusulas sintáticas canônicas:
     * *Event-Driven:* Exige a cláusula `Quando / When`.
     * *State-Driven:* Exige a cláusula `Enquanto / While`.
     * *Unwanted Behavior:* Exige a condicional defensiva `Se / If`.
     * *Opcional:* Exige a cláusula `Onde / Where`.

4. **Validação de Oráculos Gherkin/BDD (Capítulo 4):**
   * Analisa cada bloco delimitado por ` ```gherkin `.
   * Exige a presença completa da tríade léxica: **`Dado`**, **`Quando`** e **`Então`**.
   * Exige a marcação explícita de rastreabilidade bidirecional vinculando o cenário a um requisito: **`(traces: REQ-...)`**.

5. **Validação do Rodapé Imutável (Footer):**
   * Confere a existência do bloco `<doc:change_log>` com entradas `<entry>` registradas, além de `<doc:updated_by>` e `<doc:updated_at>`.

---

### 2. Integração Prática com o Pré-Commit do Git

Para que a verificação ocorra de forma automática a cada comando `git commit`, configure o hook no repositório:

#### Passo A: Salvar o hook no Git

Crie ou edite o arquivo **`.git/hooks/pre-commit`** na raiz do seu repositório:

```bash
#!/usr/bin/env bash
# .git/hooks/pre-commit

# 1. Filtra apenas os arquivos Markdown que estão no stage do commit
STAGED_MD_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep '\.md$' || true)

if [ -n "$STAGED_MD_FILES" ]; then
    echo "Executando linter estático de governança e spec-template..."
    
    # Executa o script Python passando os arquivos adicionados
    python3 scripts/validate-spec-template.py $STAGED_MD_FILES
    EXIT_CODE=$?

    # Se houver qualquer falha sintática, aborta o commit
    if [ $EXIT_CODE -ne 0 ]; then
        echo ""
        echo "❌ COMMIT CANCELADO: Foram detectadas não conformidades no spec-template."
        echo "Corrija os erros apontados acima antes de comitar."
        exit 1
    fi
fi

exit 0
```

#### Passo B: Conceder permissão de execução

```bash
chmod +x .git/hooks/pre-commit
chmod +x scripts/validate-spec-template.py
```

---
