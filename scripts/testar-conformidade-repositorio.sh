#!/usr/bin/env bash

set -u
set -o pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repository_dir="$(cd "${script_dir}/.." && pwd)"
config_file="${repository_dir}/testes/configuracoes/TST-CFG-001.env"
baseline_file="${repository_dir}/testes/configuracoes/TST-CFG-001.baseline"

if [[ ! -r "${config_file}" || ! -r "${baseline_file}" ]]; then
  printf 'ERROR: configuração ou baseline inacessível.\n' >&2
  exit 2
fi

# shellcheck disable=SC1090
source "${config_file}"
# shellcheck disable=SC1090
source "${baseline_file}"

tests_run=0
tests_passed=0
tests_failed=0

pass_case() {
  tests_run=$((tests_run + 1))
  tests_passed=$((tests_passed + 1))
  printf 'PASS [%s] %s\n' "$1" "$2"
}

fail_case() {
  tests_run=$((tests_run + 1))
  tests_failed=$((tests_failed + 1))
  printf 'FAIL [%s] %s\n' "$1" "$2" >&2
  if [[ -n "${3:-}" ]]; then
    printf '%s\n' "$3" >&2
  fi
}

# [TST-CASE-001] [TST-DEC-001] Contratos documentais completos.
contract_errors=""
while IFS= read -r document; do
  relative_path="${document#${repository_dir}/}"
  if ! grep -q '^## Contrato do documento$' "${document}"; then
    contract_errors+="${relative_path}: seção Contrato do documento ausente"$'\n'
    continue
  fi

  for property in Papel Objetivo Escopo 'Caminho canônico' Autoridade 'Contexto mínimo' Dependências Restrições 'Riscos mitigados'; do
    if ! grep -Fq "| ${property} |" "${document}"; then
      contract_errors+="${relative_path}: propriedade ${property} ausente"$'\n'
    fi
  done
done < <(
  find "${repository_dir}" -type f -name '*.md' \
    ! -path '*/.git/*' \
    ! -path '*/.agents/*' \
    ! -path '*/.aws/*' \
    ! -path '*/.codex/*' \
    ! -path '*/tmp/*' \
    ! -path '*/testes/execucoes/*' \
    ! -path '*/testes/evidencias/*' \
    ! -path '*/testes/validacoes/*' \
    ! -name 'AGENTS.md' | sort
)

if [[ -z "${contract_errors}" ]]; then
  pass_case 'TST-CASE-001' 'contratos documentais completos'
else
  fail_case 'TST-CASE-001' 'contratos documentais incompletos' "${contract_errors%$'\n'}"
fi

# [TST-CASE-002] [TST-DEC-002] Links internos precisam de fragmento.
generic_links="$(
  awk '
    /^```/ { fenced = !fenced; next }
    fenced == 0 {
      line = $0
      while (match(line, /\[[^]]+\]\((\.\/|\.\.\/)[^)#]+\.(md|sh)\)/)) {
        printf "%s:%d:%s\n", FILENAME, FNR, substr(line, RSTART, RLENGTH)
        line = substr(line, RSTART + RLENGTH)
      }
    }
  ' $(find "${repository_dir}" -type f -name '*.md' ! -path '*/.git/*' ! -path '*/tmp/*' | sort)
)"

if [[ -z "${generic_links}" ]]; then
  pass_case 'TST-CASE-002' 'links internos possuem localização específica'
else
  fail_case 'TST-CASE-002' 'links internos apontam para arquivo inteiro' "${generic_links}"
fi

# [TST-CASE-003] [TST-DEC-003] Árvore e rotas canônicas.
map_file="${repository_dir}/mapa-repositorio.md"
if [[ ! -r "${map_file}" ]]; then
  fail_case 'TST-CASE-003' 'mapa canônico do repositório ausente' 'mapa-repositorio.md não existe'
else
  map_errors=""
  for route in 'Rota: documentação' 'Rota: dados' 'Rota: testes' 'Rota: scripts'; do
    if ! grep -Fq "${route}" "${map_file}"; then
      map_errors+="rota ausente: ${route}"$'\n'
    fi
  done

  while IFS= read -r managed_file; do
    relative_path="${managed_file#${repository_dir}/}"
    if ! grep -Fq "\`${relative_path}\`" "${map_file}"; then
      map_errors+="caminho não catalogado: ${relative_path}"$'\n'
    fi
  done < <(
    find "${repository_dir}" -type f \
      ! -path '*/.git/*' \
      ! -path '*/.agents/*' \
      ! -path '*/.aws/*' \
      ! -path '*/.codex/*' \
      ! -path '*/tmp/*' \
      ! -path '*/testes/execucoes/*' \
      ! -path '*/testes/evidencias/*' \
      ! -path '*/testes/validacoes/*' | sort
  )

  if [[ -z "${map_errors}" ]]; then
    pass_case 'TST-CASE-003' 'árvore e rotas representam o repositório'
  else
    fail_case 'TST-CASE-003' 'árvore ou rotas incompletas' "${map_errors%$'\n'}"
  fi
fi

# [TST-CASE-004] [TST-DEC-004] Preservação byte a byte dos comentários HTML.
comment_file="${repository_dir}/${TST_HTML_COMMENT_FILE}"
actual_comment_blocks="$(grep -c '<!--' "${comment_file}" || true)"
actual_comment_hash="$(awk 'BEGIN{inside=0} /<!--/{inside=1} inside{print} /-->/{inside=0}' "${comment_file}" | sha256sum | awk '{print $1}')"
if [[ "${actual_comment_blocks}" == "${TST_HTML_COMMENT_BLOCKS}" &&
      "${actual_comment_hash}" == "${TST_HTML_COMMENT_SHA256}" ]]; then
  pass_case 'TST-CASE-004' 'comentários HTML preservados'
else
  fail_case 'TST-CASE-004' 'comentários HTML divergentes' \
    "esperado blocos=${TST_HTML_COMMENT_BLOCKS} hash=${TST_HTML_COMMENT_SHA256}; obtido blocos=${actual_comment_blocks} hash=${actual_comment_hash}"
fi

# [TST-CASE-005] [TST-DEC-005] Coerência estrutural do grupo.
group_file="${repository_dir}/grupo-whatsapp.md"
group_errors="$(
  awk '
    function finish_section() {
      if (has_total == 1 && declared != items) {
        printf "%s: declarado=%d, itens=%d\n", section, declared, items
      }
    }
    /^### / {
      finish_section()
      section = $0
      items = 0
      has_total = 0
      if (match($0, /— [0-9]+/)) {
        declared_text = substr($0, RSTART + 2, RLENGTH - 2)
        declared = declared_text + 0
        has_total = 1
        if ($0 !~ /^### \*\*[^*]+ — [0-9]+\*\*$/) {
          printf "%s: título quantificado fora do padrão\n", $0
        }
      }
      next
    }
    /^- / { if (section != "") items++ }
    END { finish_section() }
  ' "${group_file}"

  awk '
    /^## Relação de Atletas por Clube$/ { active=1; next }
    active && /^- / {
      name=$0
      sub(/^- /, "", name)
      sub(/ —.*$/, "", name)
      count[name]++
    }
    END { for (name in count) if (count[name] > 1) printf "nome duplicado: %s (%d ocorrências)\n", name, count[name] }
  ' "${group_file}" | sort

  grep -nE '\[[A-Z][0-9]{2}\]' "${group_file}" || true
)"

if [[ -z "${group_errors}" ]]; then
  pass_case 'TST-CASE-005' 'estrutura do grupo coerente'
else
  fail_case 'TST-CASE-005' 'estrutura do grupo incoerente' "${group_errors}"
fi

# [TST-CASE-006] [TST-DEC-006] Preservação das unidades WA publicadas.
wa_file="${repository_dir}/${TST_WA_SOURCE_FILE}"
actual_heading_hash="$(grep -E '^#{3,4} WA-[0-9]' "${wa_file}" | sha256sum | awk '{print $1}')"
actual_id_hash="$(grep -E '^\*\*ID da (conversa|mensagem):\*\*' "${wa_file}" | sha256sum | awk '{print $1}')"
if [[ "${actual_heading_hash}" == "${TST_WA_HEADING_SHA256}" &&
      "${actual_id_hash}" == "${TST_WA_ID_FIELD_SHA256}" ]]; then
  pass_case 'TST-CASE-006' 'IDs e âncoras WA preservados'
else
  fail_case 'TST-CASE-006' 'IDs ou âncoras WA divergentes' \
    "títulos esperado=${TST_WA_HEADING_SHA256} obtido=${actual_heading_hash}; campos esperado=${TST_WA_ID_FIELD_SHA256} obtido=${actual_id_hash}"
fi

# [TST-CASE-007] [TST-DEC-007] Automação legada não concede aceite.
legacy_errors=""
for legacy_script in "${repository_dir}/scripts/validar-rastreabilidade.sh" "${repository_dir}/scripts/testar-rastreabilidade.sh"; do
  if ! grep -Fq 'LEGADO INVÁLIDO PARA ACEITE' "${legacy_script}"; then
    legacy_errors+="banner ausente: ${legacy_script#${repository_dir}/}"$'\n'
  fi
done
for document in "${repository_dir}/rastreabilidade-tecnica.md" "${repository_dir}/regras-rastreabilidade.md"; do
  forbidden="$(grep -En '22 testes( automatizados)? aprovados|22/22 testes aprovados' "${document}" || true)"
  if [[ -n "${forbidden}" ]]; then
    legacy_errors+="${document#${repository_dir}/}: alegação proibida: ${forbidden}"$'\n'
  fi
done
if [[ -z "${legacy_errors}" ]]; then
  pass_case 'TST-CASE-007' 'automação legada isolada do aceite'
else
  fail_case 'TST-CASE-007' 'automação legada ainda concede aceite' "${legacy_errors%$'\n'}"
fi

# [TST-CASE-008] [TST-DEC-008] Registros persistentes e completos.
execution_files=("${repository_dir}"/testes/execucoes/TST-RUN-*.md)
if [[ ! -e "${execution_files[0]}" ]]; then
  fail_case 'TST-CASE-008' 'nenhum registro de execução existente' 'diretório testes/execucoes sem TST-RUN-*.md'
else
  execution_errors=""
  for execution_file in "${execution_files[@]}"; do
    for field in 'ID da execução' 'Fase TDD' 'Executor e papel' 'Data e timezone' Configuração 'Casos executados' 'Comando exato' 'Resultados por caso' Evidências 'Saída padrão' 'Saída de erro' 'Riscos e limitações' 'Hash anterior' 'Hash do registro'; do
      if ! grep -Fq "| ${field} |" "${execution_file}"; then
        execution_errors+="${execution_file#${repository_dir}/}: campo ausente ${field}"$'\n'
      fi
    done
    if ! grep -q '^## Hashes dos objetos$' "${execution_file}" ||
       ! awk '/^## Hashes dos objetos$/{inside=1; next} inside && /^\| [^|-].*\| `?[0-9a-f]{40,64}`? \|$/{found=1} inside && /^## /{exit} END{exit(found ? 0 : 1)}' "${execution_file}"; then
      execution_errors+="${execution_file#${repository_dir}/}: seção Hashes dos objetos ausente ou vazia"$'\n'
    fi
  done
  if [[ -z "${execution_errors}" ]]; then
    pass_case 'TST-CASE-008' 'registros de execução completos'
  else
    fail_case 'TST-CASE-008' 'registros de execução incompletos' "${execution_errors%$'\n'}"
  fi
fi

printf 'SUMMARY total=%d pass=%d fail=%d config=%s\n' \
  "${tests_run}" "${tests_passed}" "${tests_failed}" "${TST_CONFIG_ID}"

if [[ ${tests_failed} -gt 0 ]]; then
  exit 1
fi

exit 0
