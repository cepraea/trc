#!/usr/bin/env bash

# LEGADO INVÁLIDO PARA ACEITE: preservado somente como inventário de cenários.
# Os resultados deste arquivo não podem ser usados como gate de conformidade.

set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repository_dir="$(cd "${script_dir}/.." && pwd)"
validator="${script_dir}/validar-rastreabilidade.sh"
source_file="${repository_dir}/mensagens-treinadores.md"
traceability_file="${repository_dir}/rastreabilidade-tecnica.md"
rules_file="${repository_dir}/regras-rastreabilidade.md"
techniques_file="${repository_dir}/tecnicas-rastreabilidade.md"
test_directory="$(mktemp -d)"
tests_run=0
tests_passed=0

cleanup() {
  rm -rf -- "${test_directory}"
}
trap cleanup EXIT

expect_success() {
  local trace_id="$1"
  local description="$2"
  local messages="$3"
  local traceability="$4"

  tests_run=$((tests_run + 1))
  if "${validator}" "${messages}" "${traceability}" >/dev/null 2>&1; then
    tests_passed=$((tests_passed + 1))
    printf 'PASS [%s] %s\n' "${trace_id}" "${description}"
  else
    printf 'FAIL [%s] %s\n' "${trace_id}" "${description}" >&2
  fi
}

expect_invalid() {
  local trace_id="$1"
  local description="$2"
  local messages="$3"
  local traceability="$4"
  local status

  tests_run=$((tests_run + 1))
  set +e
  "${validator}" "${messages}" "${traceability}" >/dev/null 2>&1
  status=$?
  set -e

  if [[ ${status} -eq 1 ]]; then
    tests_passed=$((tests_passed + 1))
    printf 'PASS [%s] %s\n' "${trace_id}" "${description}"
  else
    printf 'FAIL [%s] %s — saída esperada: 1; recebida: %d\n' "${trace_id}" "${description}" "${status}" >&2
  fi
}

expect_status() {
  local trace_id="$1"
  local description="$2"
  local expected_status="$3"
  local messages="$4"
  local traceability="$5"
  local status

  tests_run=$((tests_run + 1))
  set +e
  "${validator}" "${messages}" "${traceability}" >/dev/null 2>&1
  status=$?
  set -e

  if [[ ${status} -eq ${expected_status} ]]; then
    tests_passed=$((tests_passed + 1))
    printf 'PASS [%s] %s\n' "${trace_id}" "${description}"
  else
    printf 'FAIL [%s] %s — saída esperada: %d; recebida: %d\n' \
      "${trace_id}" "${description}" "${expected_status}" "${status}" >&2
  fi
}

# [RT-TEST-001] O conjunto real deve ser aceito.
expect_success \
  'RT-TEST-001' \
  'arquivo real estruturalmente válido' \
  "${source_file}" \
  "${traceability_file}"

# [RT-TEST-002] Um ID duplicado deve ser rejeitado.
sed 's/^\*\*ID da conversa:\*\* `WA-20261111-002`/**ID da conversa:** `WA-20261111-001`/' \
  "${source_file}" > "${test_directory}/id-duplicado.md"
expect_invalid \
  'RT-TEST-002' \
  'identificador duplicado' \
  "${test_directory}/id-duplicado.md" \
  "${traceability_file}"

# [RT-TEST-003] Um ID ausente deve ser rejeitado.
sed '/^\*\*ID da conversa:\*\* `WA-20261111-008`/d' \
  "${source_file}" > "${test_directory}/id-ausente.md"
expect_invalid \
  'RT-TEST-003' \
  'identificador ausente' \
  "${test_directory}/id-ausente.md" \
  "${traceability_file}"

# [RT-TEST-004] Uma âncora diferente do ID deve ser rejeitada.
sed 's/^### WA-20261111-002$/### WA-20261111-009/' \
  "${source_file}" > "${test_directory}/ancora-divergente.md"
expect_invalid \
  'RT-TEST-004' \
  'âncora divergente' \
  "${test_directory}/ancora-divergente.md" \
  "${traceability_file}"

# [RT-TEST-005] Uma âncora ausente deve ser rejeitada.
sed '/^### WA-20261111-008$/d' \
  "${source_file}" > "${test_directory}/ancora-ausente.md"
expect_invalid \
  'RT-TEST-005' \
  'âncora ausente' \
  "${test_directory}/ancora-ausente.md" \
  "${traceability_file}"

# [RT-TEST-006] Um fragmento documental sem âncora correspondente deve ser rejeitado.
sed 's/#wa-20261111-008/#wa-20261111-999/' \
  "${traceability_file}" > "${test_directory}/link-divergente.md"
expect_invalid \
  'RT-TEST-006' \
  'link documental divergente' \
  "${source_file}" \
  "${test_directory}/link-divergente.md"

# [RT-TEST-007] Um arquivo-fonte inacessível deve produzir erro operacional.
expect_status \
  'RT-TEST-007' \
  'arquivo-fonte inacessível' \
  2 \
  "${test_directory}/arquivo-inexistente.md" \
  "${traceability_file}"

# [RT-TEST-008] Um arquivo sem conversas deve ser rejeitado.
printf '' > "${test_directory}/sem-conversas.md"
expect_invalid \
  'RT-TEST-008' \
  'nenhuma conversa encontrada' \
  "${test_directory}/sem-conversas.md" \
  "${traceability_file}"

# [RT-TEST-009] Um identificador malformado deve ser rejeitado.
sed 's/^\*\*ID da conversa:\*\* `WA-20261111-002`/**ID da conversa:** `WA-20261111-02`/' \
  "${source_file}" > "${test_directory}/id-malformado.md"
expect_invalid \
  'RT-TEST-009' \
  'identificador malformado' \
  "${test_directory}/id-malformado.md" \
  "${traceability_file}"

# [RT-TEST-010] Uma âncora duplicada deve ser rejeitada.
sed 's/^### WA-20261111-002$/### WA-20261111-001/' \
  "${source_file}" > "${test_directory}/ancora-duplicada.md"
expect_invalid \
  'RT-TEST-010' \
  'âncora duplicada' \
  "${test_directory}/ancora-duplicada.md" \
  "${traceability_file}"

# [RT-TEST-012] Um ID de mensagem malformado deve ser rejeitado.
sed 's/^\*\*ID da mensagem:\*\* `WA-20261111-001-M002`/**ID da mensagem:** `WA-20261111-001-M02`/' \
  "${source_file}" > "${test_directory}/id-mensagem-malformado.md"
expect_invalid \
  'RT-TEST-012' \
  'ID de mensagem malformado' \
  "${test_directory}/id-mensagem-malformado.md" \
  "${traceability_file}"

# [RT-TEST-013] Um ID de mensagem ausente deve ser rejeitado.
sed '/^\*\*ID da mensagem:\*\* `WA-20261111-001-M002`/d' \
  "${source_file}" > "${test_directory}/id-mensagem-ausente.md"
expect_invalid \
  'RT-TEST-013' \
  'ID de mensagem ausente' \
  "${test_directory}/id-mensagem-ausente.md" \
  "${traceability_file}"

# [RT-TEST-014] Um ID de mensagem duplicado deve ser rejeitado.
sed 's/^\*\*ID da mensagem:\*\* `WA-20261111-001-M002`/**ID da mensagem:** `WA-20261111-001-M001`/' \
  "${source_file}" > "${test_directory}/id-mensagem-duplicado.md"
expect_invalid \
  'RT-TEST-014' \
  'ID de mensagem duplicado' \
  "${test_directory}/id-mensagem-duplicado.md" \
  "${traceability_file}"

# [RT-TEST-015] Uma mensagem vinculada à conversa errada deve ser rejeitada.
sed \
  -e 's/^#### WA-20261111-001-M002$/#### WA-20261111-008-M999/' \
  -e 's/^\*\*ID da mensagem:\*\* `WA-20261111-001-M002`/**ID da mensagem:** `WA-20261111-008-M999`/' \
  "${source_file}" > "${test_directory}/mensagem-conversa-errada.md"
expect_invalid \
  'RT-TEST-015' \
  'mensagem associada à conversa errada' \
  "${test_directory}/mensagem-conversa-errada.md" \
  "${traceability_file}"

# [RT-TEST-016] Uma unidade sem linha temporal deve ser rejeitada.
sed '/^\[2026-11-11T17:40:00-03:00\] \*\*Luika:\*\*/d' \
  "${source_file}" > "${test_directory}/mensagem-sem-linha-temporal.md"
expect_invalid \
  'RT-TEST-016' \
  'mensagem sem linha temporal' \
  "${test_directory}/mensagem-sem-linha-temporal.md" \
  "${traceability_file}"

# [RT-TEST-017] Uma âncora de mensagem duplicada deve ser rejeitada.
sed 's/^#### WA-20261111-001-M002$/#### WA-20261111-001-M001/' \
  "${source_file}" > "${test_directory}/ancora-mensagem-duplicada.md"
expect_invalid \
  'RT-TEST-017' \
  'âncora de mensagem duplicada' \
  "${test_directory}/ancora-mensagem-duplicada.md" \
  "${traceability_file}"

# [RT-TEST-018] Um metadado obrigatório ausente deve ser rejeitado.
sed '/^\*\*Categoria:\*\*/d' \
  "${source_file}" > "${test_directory}/metadado-obrigatorio-ausente.md"
expect_invalid \
  'RT-TEST-018' \
  'metadado obrigatório ausente' \
  "${test_directory}/metadado-obrigatorio-ausente.md" \
  "${traceability_file}"

# [RT-TEST-019] Um metadado de cardinalidade 1 duplicado deve ser rejeitado.
sed '0,/^\*\*Contato:\*\*/ { /^\*\*Contato:\*\*/ p; }' \
  "${source_file}" > "${test_directory}/metadado-duplicado.md"
expect_invalid \
  'RT-TEST-019' \
  'metadado singular duplicado' \
  "${test_directory}/metadado-duplicado.md" \
  "${traceability_file}"

# [RT-TEST-020] A data declarada deve corresponder à data codificada no ID.
sed '0,/^\*\*Data das mensagens:\*\* 2026-11-11/ s//**Data das mensagens:** 2026-11-12/' \
  "${source_file}" > "${test_directory}/data-incompativel.md"
expect_invalid \
  'RT-TEST-020' \
  'data incompatível com o ID' \
  "${test_directory}/data-incompativel.md" \
  "${traceability_file}"

# [RT-TEST-021] Um nome de campo fora do vocabulário deve ser rejeitado.
sed '/^\*\*Categoria:\*\*/a **Campo inventado:** valor' \
  "${source_file}" > "${test_directory}/campo-desconhecido.md"
expect_invalid \
  'RT-TEST-021' \
  'campo de metadado desconhecido' \
  "${test_directory}/campo-desconhecido.md" \
  "${traceability_file}"

# [RT-TEST-022] Um valor fora do domínio controlado deve ser rejeitado.
sed '0,/^\*\*Categoria:\*\*/ s/Adulto Feminino/Adulto Masculino/' \
  "${source_file}" > "${test_directory}/categoria-fora-do-dominio.md"
expect_invalid \
  'RT-TEST-022' \
  'valor de categoria fora do domínio' \
  "${test_directory}/categoria-fora-do-dominio.md" \
  "${traceability_file}"

# [RT-VAL-002] [RT-TEST-011] Documento técnico, norma e scripts devem
# compartilhar os marcadores executáveis; documento técnico e norma também
# devem compartilhar exatamente o mesmo conjunto de regras RT-RULE-*; a
# referência de técnicas e a norma devem compartilhar os princípios RT-TECH-*.
tests_run=$((tests_run + 1))
document_marker_set="$(
  grep -Eo 'RT-(CRIT|TEST|VER|VAL)-[0-9]{3}' "${traceability_file}" | sort -u
)"
script_marker_set="$(
  grep -Eho 'RT-(CRIT|TEST|VER|VAL)-[0-9]{3}' "${validator}" "$0" | sort -u
)"
rules_marker_set="$(
  grep -Eo 'RT-(CRIT|TEST|VER|VAL)-[0-9]{3}' "${rules_file}" | sort -u
)"
document_rule_marker_set="$(
  grep -Eo 'RT-RULE-[0-9]{3}' "${traceability_file}" | sort -u
)"
rules_rule_marker_set="$(
  grep -Eo 'RT-RULE-[0-9]{3}' "${rules_file}" | sort -u
)"
techniques_principle_marker_set="$(
  grep -Eo 'RT-TECH-[0-9]{3}' "${techniques_file}" | sort -u
)"
rules_principle_marker_set="$(
  grep -Eo 'RT-TECH-[0-9]{3}' "${rules_file}" | sort -u
)"

if [[ "${document_marker_set}" == "${script_marker_set}" &&
      "${rules_marker_set}" == "${script_marker_set}" &&
      "${document_rule_marker_set}" == "${rules_rule_marker_set}" &&
      "${techniques_principle_marker_set}" == "${rules_principle_marker_set}" ]]; then
  tests_passed=$((tests_passed + 1))
  printf 'PASS [RT-TEST-011] cobertura bidirecional dos marcadores\n'
else
  printf 'FAIL [RT-TEST-011] cobertura bidirecional dos marcadores\n' >&2
  printf 'Marcadores no documento:\n%s\n' "${document_marker_set}" >&2
  printf 'Marcadores nos scripts:\n%s\n' "${script_marker_set}" >&2
  printf 'Marcadores na norma:\n%s\n' "${rules_marker_set}" >&2
  printf 'Regras essenciais no documento técnico:\n%s\n' "${document_rule_marker_set}" >&2
  printf 'Regras essenciais na norma:\n%s\n' "${rules_rule_marker_set}" >&2
  printf 'Princípios essenciais na referência técnica:\n%s\n' "${techniques_principle_marker_set}" >&2
  printf 'Princípios essenciais na norma:\n%s\n' "${rules_principle_marker_set}" >&2
fi

printf 'Resultado: %d/%d testes aprovados.\n' "${tests_passed}" "${tests_run}"

if [[ ${tests_passed} -ne ${tests_run} ]]; then
  exit 1
fi
