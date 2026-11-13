#!/usr/bin/env bash

# LEGADO INVÁLIDO PARA ACEITE: preservado somente como inventário de regras e
# cenários. Sua saída não é evidência válida até a migração para a governança
# de testes, com registros persistentes e validação independente.

set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repository_dir="$(cd "${script_dir}/.." && pwd)"
source_file="${1:-${repository_dir}/mensagens-treinadores.md}"
traceability_file="${2:-${repository_dir}/rastreabilidade-tecnica.md}"

if [[ $# -gt 2 ]]; then
  printf 'Uso: %s [arquivo-de-mensagens] [documento-de-rastreabilidade]\n' "$0" >&2
  exit 2
fi

# [RT-CRIT-001] Verifica se os dois artefatos necessários estão acessíveis.
if [[ ! -r "${source_file}" ]]; then
  printf 'ERRO: não foi possível ler o arquivo: %s\n' "${source_file}" >&2
  exit 2
fi

if [[ ! -r "${traceability_file}" ]]; then
  printf 'ERRO: não foi possível ler o arquivo: %s\n' "${traceability_file}" >&2
  exit 2
fi

awk '
function finish_message() {
  if (message_active == 0) {
    return
  }

  # [RT-CRIT-009] Cada unidade deve possuir uma âncora, um ID e uma linha temporal.
  if (message_ids_in_unit != 1) {
    printf "ERRO: a mensagem %s contém %d campo(s) de ID; esperado: 1.\n", message_anchor, message_ids_in_unit > "/dev/stderr"
    errors++
  }

  if (message_timestamps_in_unit != 1) {
    printf "ERRO: a mensagem %s contém %d linha(s) temporal(is); esperado: 1.\n", message_anchor, message_timestamps_in_unit > "/dev/stderr"
    errors++
  }

  if (message_anchor != "" && message_id != "" && message_anchor != message_id) {
    printf "ERRO: a âncora de mensagem %s não corresponde ao ID %s.\n", message_anchor, message_id > "/dev/stderr"
    errors++
  }

  expected_message_prefix = block_id "-M"
  if (message_anchor != "" && index(message_anchor, expected_message_prefix) != 1) {
    printf "ERRO: a mensagem %s não pertence à conversa %s.\n", message_anchor, block_id > "/dev/stderr"
    errors++
  }
}

function finish_block() {
  if (block_count == 0) {
    return
  }

  finish_message()
  message_active = 0

  # [RT-CRIT-004] Cada conversa deve possuir exatamente um ID e uma âncora.
  if (ids_in_block != 1) {
    printf "ERRO: o bloco %d (%s) contém %d identificador(es); esperado: 1.\n", block_count, team, ids_in_block > "/dev/stderr"
    errors++
  }

  if (block_anchor == "") {
    printf "ERRO: o bloco %d (%s) não possui uma âncora Markdown válida.\n", block_count, team > "/dev/stderr"
    errors++
  }

  # [RT-CRIT-005] A âncora deve corresponder ao ID do mesmo bloco.
  if (block_anchor != "" && block_id != "" && block_anchor != block_id) {
    printf "ERRO: a âncora %s não corresponde ao identificador %s no bloco %d (%s).\n", block_anchor, block_id, block_count, team > "/dev/stderr"
    errors++
  }

  # [RT-CRIT-011] Metadados obrigatórios usam vocabulário e cardinalidade controlados.
  block_metadata_valid = 1

  if (category_count != 1) {
    printf "ERRO: o bloco %d (%s) contém %d campo(s) Categoria; esperado: 1.\n", block_count, team, category_count > "/dev/stderr"
    errors++
    block_metadata_valid = 0
  }

  if (trainer_count != 1) {
    printf "ERRO: o bloco %d (%s) contém %d campo(s) Treinador(a) principal; esperado: 1.\n", block_count, team, trainer_count > "/dev/stderr"
    errors++
    block_metadata_valid = 0
  }

  if (trainer_contact_count != 1) {
    printf "ERRO: o bloco %d (%s) contém %d campo(s) Contato; esperado: 1.\n", block_count, team, trainer_contact_count > "/dev/stderr"
    errors++
    block_metadata_valid = 0
  }

  if (export_date_count != 1) {
    printf "ERRO: o bloco %d (%s) contém %d campo(s) Data de exportação; esperado: 1.\n", block_count, team, export_date_count > "/dev/stderr"
    errors++
    block_metadata_valid = 0
  }

  if (message_date_count != 1) {
    printf "ERRO: o bloco %d (%s) contém %d campo(s) Data das mensagens; esperado: 1.\n", block_count, team, message_date_count > "/dev/stderr"
    errors++
    block_metadata_valid = 0
  }

  if (block_id != "" && message_date != "") {
    normalized_message_date = message_date
    gsub(/-/, "", normalized_message_date)
    if (substr(block_id, 4, 8) != normalized_message_date) {
      printf "ERRO: a data %s não corresponde à data codificada no ID %s.\n", message_date, block_id > "/dev/stderr"
      errors++
      block_metadata_valid = 0
    }
  }

  if (block_metadata_valid == 1) {
    valid_metadata_blocks++
  }
}

BEGIN {
  block_count = 0
  total_anchors = 0
  valid_anchors = 0
  total_ids = 0
  valid_ids = 0
  message_count = 0
  total_message_anchors = 0
  valid_message_anchors = 0
  total_message_ids = 0
  valid_message_ids = 0
  total_message_timestamps = 0
  valid_metadata_blocks = 0
  errors = 0
}

/^#### WA-/ {
  finish_message()
  metadata_header_active = 0
  message_active = 1
  message_count++
  messages_in_block++
  message_ids_in_unit = 0
  message_timestamps_in_unit = 0
  message_id = ""
  message_anchor = ""
  total_message_anchors++
  message_anchor_line = $0
  sub(/[[:space:]]+$/, "", message_anchor_line)

  # [RT-CRIT-008] Valida o formato da âncora de mensagem.
  if (message_anchor_line ~ /^#### WA-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]-M[0-9][0-9][0-9]$/) {
    message_anchor = substr(message_anchor_line, 6)
    valid_message_anchors++

    # [RT-CRIT-010] Detecta a reutilização de âncoras de mensagem.
    seen_message_anchor[message_anchor]++
    if (seen_message_anchor[message_anchor] > 1) {
      printf "ERRO: âncora de mensagem duplicada: %s.\n", message_anchor > "/dev/stderr"
      errors++
    }
  } else {
    printf "ERRO: âncora de mensagem fora do padrão na linha %d.\n", NR > "/dev/stderr"
    errors++
  }

  if (block_count == 0) {
    printf "ERRO: âncora de mensagem encontrada fora de uma conversa, na linha %d.\n", NR > "/dev/stderr"
    errors++
  }

  next
}

/^### WA-/ {
  total_anchors++
  anchor_line = $0
  sub(/[[:space:]]+$/, "", anchor_line)

  # [RT-CRIT-003] Valida o formato estrutural da âncora.
  if (anchor_line ~ /^### WA-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]$/) {
    anchor = substr(anchor_line, 5)
    valid_anchors++

    # [RT-CRIT-006] Detecta a reutilização de âncoras.
    seen_anchor[anchor]++
    if (seen_anchor[anchor] > 1) {
      printf "ERRO: âncora duplicada: %s.\n", anchor > "/dev/stderr"
      errors++
    }

    if (pending_anchor != "") {
      printf "ERRO: mais de uma âncora foi encontrada antes do próximo bloco de conversa.\n" > "/dev/stderr"
      errors++
    }

    pending_anchor = anchor
  } else {
    printf "ERRO: âncora fora do padrão na linha %d.\n", NR > "/dev/stderr"
    errors++
  }

  next
}

/^\*\*Equipe:\*\*/ {
  finish_block()
  block_count++
  metadata_header_active = 1
  ids_in_block = 0
  messages_in_block = 0
  category_count = 0
  trainer_count = 0
  trainer_contact_count = 0
  export_date_count = 0
  message_date_count = 0
  message_date = ""
  block_id = ""
  block_anchor = pending_anchor
  pending_anchor = ""
  team = $0
  sub(/^\*\*Equipe:\*\*[[:space:]]*/, "", team)
  sub(/[[:space:]]+$/, "", team)
  if (team == "") {
    printf "ERRO: Equipe vazia na linha %d.\n", NR > "/dev/stderr"
    errors++
  }
  next
}

/^\*\*Categoria:\*\*/ {
  if (metadata_header_active != 1) {
    next
  }

  category_count++
  metadata_value = $0
  sub(/^\*\*Categoria:\*\*[[:space:]]*/, "", metadata_value)
  sub(/[[:space:]]+$/, "", metadata_value)

  if (metadata_value != "Adulto Feminino" &&
      metadata_value != "Júnior Feminino" &&
      metadata_value != "Juvenil Feminino") {
    printf "ERRO: valor de Categoria fora do vocabulário na linha %d: %s.\n", NR, metadata_value > "/dev/stderr"
    errors++
  }

  next
}

/^\*\*Treinador\(a\) principal:\*\*/ {
  if (metadata_header_active != 1) {
    next
  }

  trainer_count++
  metadata_value = $0
  sub(/^\*\*Treinador\(a\) principal:\*\*[[:space:]]*/, "", metadata_value)
  sub(/[[:space:]]+$/, "", metadata_value)

  if (metadata_value == "") {
    printf "ERRO: Treinador(a) principal vazio na linha %d.\n", NR > "/dev/stderr"
    errors++
  }

  next
}

/^\*\*Contato:\*\*/ {
  if (metadata_header_active != 1) {
    next
  }

  trainer_contact_count++
  metadata_value = $0
  sub(/^\*\*Contato:\*\*[[:space:]]*/, "", metadata_value)
  sub(/[[:space:]]+$/, "", metadata_value)

  if (metadata_value == "") {
    printf "ERRO: Contato vazio na linha %d.\n", NR > "/dev/stderr"
    errors++
  }

  next
}

/^\*\*Data de exportação:\*\*/ {
  if (metadata_header_active != 1) {
    next
  }

  export_date_count++
  metadata_value = $0
  sub(/^\*\*Data de exportação:\*\*[[:space:]]*/, "", metadata_value)
  sub(/[[:space:]]+$/, "", metadata_value)

  if (metadata_value !~ /^[0-9][0-9]? de (janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro) de [0-9][0-9][0-9][0-9] às [0-9][0-9]:[0-9][0-9]$/) {
    printf "ERRO: Data de exportação fora do formato controlado na linha %d.\n", NR > "/dev/stderr"
    errors++
  }

  next
}

/^\*\*Data das mensagens:\*\*/ {
  if (metadata_header_active != 1) {
    next
  }

  message_date_count++
  metadata_value = $0
  sub(/^\*\*Data das mensagens:\*\*[[:space:]]*/, "", metadata_value)
  sub(/[[:space:]]+$/, "", metadata_value)

  if (metadata_value !~ /^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/) {
    printf "ERRO: Data das mensagens fora do formato AAAA-MM-DD na linha %d.\n", NR > "/dev/stderr"
    errors++
  } else {
    message_date = metadata_value
  }

  next
}

/^\*\*ID da conversa:\*\*/ {
  if (metadata_header_active != 1) {
    next
  }

  total_ids++

  if (block_count == 0) {
    printf "ERRO: identificador encontrado fora de um bloco de conversa, na linha %d.\n", NR > "/dev/stderr"
    errors++
    next
  }

  ids_in_block++
  line = $0
  trimmed_line = line
  sub(/[[:space:]]+$/, "", trimmed_line)

  # [RT-CRIT-003] Valida o formato estrutural do campo de ID.
  if (match(trimmed_line, /`WA-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]`/)) {
    id = substr(trimmed_line, RSTART + 1, RLENGTH - 2)
    block_id = id
    expected_line = "**ID da conversa:** `" id "`"

    if (trimmed_line != expected_line) {
      printf "ERRO: campo de identificador malformado na linha %d.\n", NR > "/dev/stderr"
      errors++
    } else {
      valid_ids++
    }

    # [RT-CRIT-006] Detecta a reutilização de identificadores.
    seen[id]++
    if (seen[id] > 1) {
      printf "ERRO: identificador duplicado: %s.\n", id > "/dev/stderr"
      errors++
    }
  } else {
    printf "ERRO: identificador fora do padrão na linha %d.\n", NR > "/dev/stderr"
    errors++
  }

  next
}

/^\*\*ID da mensagem:\*\*/ {
  total_message_ids++

  if (message_active == 0) {
    printf "ERRO: ID de mensagem encontrado fora de uma unidade, na linha %d.\n", NR > "/dev/stderr"
    errors++
    next
  }

  message_ids_in_unit++
  message_id_line = $0
  sub(/[[:space:]]+$/, "", message_id_line)

  # [RT-CRIT-008] Valida o formato do campo de ID da mensagem.
  if (match(message_id_line, /`WA-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]-M[0-9][0-9][0-9]`/)) {
    message_id = substr(message_id_line, RSTART + 1, RLENGTH - 2)
    expected_message_id_line = "**ID da mensagem:** `" message_id "`"

    if (message_id_line != expected_message_id_line) {
      printf "ERRO: campo de ID da mensagem malformado na linha %d.\n", NR > "/dev/stderr"
      errors++
    } else {
      valid_message_ids++
    }

    # [RT-CRIT-010] Detecta a reutilização de IDs de mensagem.
    seen_message_id[message_id]++
    if (seen_message_id[message_id] > 1) {
      printf "ERRO: ID de mensagem duplicado: %s.\n", message_id > "/dev/stderr"
      errors++
    }
  } else {
    printf "ERRO: ID de mensagem fora do padrão na linha %d.\n", NR > "/dev/stderr"
    errors++
  }

  next
}

/^\[[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]T/ {
  total_message_timestamps++

  if (message_active == 0) {
    printf "ERRO: linha temporal encontrada fora de uma unidade de mensagem, na linha %d.\n", NR > "/dev/stderr"
    errors++
  } else {
    message_timestamps_in_unit++
  }

  next
}

/^\*\*[^*]+:\*\*/ {
  if (metadata_header_active == 1) {
    printf "ERRO: campo de metadado desconhecido na linha %d: %s\n", NR, $0 > "/dev/stderr"
    errors++
  }
  next
}

END {
  finish_block()

  if (pending_anchor != "") {
    printf "ERRO: a âncora %s não está associada a um bloco de conversa.\n", pending_anchor > "/dev/stderr"
    errors++
  }

  unique_ids = 0
  for (id in seen) {
    unique_ids++
  }

  unique_anchors = 0
  for (anchor in seen_anchor) {
    unique_anchors++
  }

  unique_message_ids = 0
  for (message_id_value in seen_message_id) {
    unique_message_ids++
  }

  unique_message_anchors = 0
  for (message_anchor_value in seen_message_anchor) {
    unique_message_anchors++
  }

  printf "Conversas: %d\n", block_count
  printf "Âncoras encontradas: %d\n", total_anchors
  printf "Âncoras válidas: %d\n", valid_anchors
  printf "Identificadores encontrados: %d\n", total_ids
  printf "Identificadores válidos: %d\n", valid_ids
  printf "Identificadores únicos: %d\n", unique_ids
  printf "Mensagens: %d\n", message_count
  printf "Âncoras de mensagem válidas: %d\n", valid_message_anchors
  printf "IDs de mensagem válidos: %d\n", valid_message_ids
  printf "IDs de mensagem únicos: %d\n", unique_message_ids
  printf "Linhas temporais associadas: %d\n", total_message_timestamps
  printf "Blocos com metadados válidos: %d\n", valid_metadata_blocks

  # [RT-CRIT-002] Exige a existência de pelo menos uma conversa.
  if (block_count == 0) {
    printf "ERRO: nenhuma conversa foi encontrada.\n" > "/dev/stderr"
    errors++
  }

  # [RT-CRIT-007] Compara os totais para comprovar a completude estrutural.
  if (total_ids != valid_ids) {
    errors++
  }

  if (total_anchors != valid_anchors) {
    errors++
  }

  if (block_count != valid_ids) {
    printf "ERRO: a quantidade de conversas difere da quantidade de identificadores válidos.\n" > "/dev/stderr"
    errors++
  }

  if (block_count != valid_anchors) {
    printf "ERRO: a quantidade de conversas difere da quantidade de âncoras válidas.\n" > "/dev/stderr"
    errors++
  }

  if (unique_ids != valid_ids) {
    printf "ERRO: nem todos os identificadores válidos são únicos.\n" > "/dev/stderr"
    errors++
  }

  if (unique_anchors != valid_anchors) {
    printf "ERRO: nem todas as âncoras válidas são únicas.\n" > "/dev/stderr"
    errors++
  }

  # [RT-CRIT-010] Comprova a completude e a unicidade das unidades de mensagem.
  if (message_count != valid_message_anchors ||
      message_count != valid_message_ids ||
      message_count != total_message_timestamps) {
    printf "ERRO: as quantidades de mensagens, âncoras, IDs e linhas temporais divergem.\n" > "/dev/stderr"
    errors++
  }

  if (unique_message_ids != valid_message_ids) {
    printf "ERRO: nem todos os IDs de mensagem válidos são únicos.\n" > "/dev/stderr"
    errors++
  }

  if (unique_message_anchors != valid_message_anchors) {
    printf "ERRO: nem todas as âncoras de mensagem válidas são únicas.\n" > "/dev/stderr"
    errors++
  }

  if (errors > 0) {
    exit 1
  }

  # [RT-VER-001] A saída zero comprova que todas as verificações estruturais passaram.
  print "Estrutura válida: âncoras e identificadores são exclusivos e correspondentes."
}
' "${source_file}"

# [RT-VAL-001] Valida a navegabilidade: todo fragmento documentado deve
# corresponder a uma âncora do arquivo-fonte, sem ausências nem sobras.
source_anchor_set="$(
  awk '/^### WA-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]$/ { print tolower($2) }' "${source_file}" \
    | sort -u
)"

document_link_set="$(
  awk '
  {
    line = $0
    while (match(line, /mensagens-treinadores\.md#wa-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]\)/)) {
      reference = substr(line, RSTART, RLENGTH)
      sub(/^.*#/, "", reference)
      sub(/\)$/, "", reference)
      print reference
      line = substr(line, RSTART + RLENGTH)
    }
  }
  ' "${traceability_file}" | sort -u
)"

if [[ "${source_anchor_set}" != "${document_link_set}" ]]; then
  printf 'ERRO: os links do documento não correspondem às âncoras do arquivo-fonte.\n' >&2
  printf 'Âncoras esperadas:\n%s\n' "${source_anchor_set}" >&2
  printf 'Fragmentos documentados:\n%s\n' "${document_link_set}" >&2
  exit 1
fi

printf 'VALIDO: estrutura e links bidirecionais correspondem aos registros-fonte.\n'
