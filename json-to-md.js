const fs = require("fs");
const path = require("path");

const ROOT_DIR = process.argv[2] || process.cwd();
const OUTPUT_FILE = path.join(ROOT_DIR, "linters-reference.md");

const EXCLUDED_DIRS = new Set([
  "node_modules",
  ".git",
  "dist",
  "build",
  ".temp"

]);

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[\\/]/g, "-")
    .replace(/[^a-z0-9.-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function walk(dir) {
  const entries = fs.readdirSync(dir, {
    withFileTypes: true
  });

  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) {
        continue;
      }

      files.push(...walk(fullPath));
      continue;
    }

    if (
      entry.isFile() &&
      entry.name.endsWith(".json")
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

function groupFiles(files) {
  const groups = {};

  for (const file of files) {
    const relative = path.relative(ROOT_DIR, file);

    const folder =
      path.dirname(relative) === "."
        ? "Raiz"
        : path.dirname(relative);

    if (!groups[folder]) {
      groups[folder] = [];
    }

    groups[folder].push(file);
  }

  return groups;
}

function validateJson(content) {
  try {
    JSON.parse(content);
    return true;
  } catch {
    return false;
  }
}

function buildIndex(groups) {
  const lines = [];

  lines.push("## Índice");
  lines.push("");

  for (const folder of Object.keys(groups).sort()) {
    const folderSlug =
      slugify(folder);

    lines.push(
      `- [${folder}](#${folderSlug})`
    );

    for (const file of groups[folder]) {
      const relative =
        path.relative(ROOT_DIR, file);

      const anchor =
        slugify(relative);

      lines.push(
        `  - [${path.basename(file)}](#${anchor})`
      );
    }

    lines.push("");
  }

  return lines;
}

function buildSections(groups) {
  const lines = [];

  for (const folder of Object.keys(groups).sort()) {
    const folderSlug =
      slugify(folder);

    lines.push(
      `# ${folder}`
    );
    lines.push(
      `<a id="${folderSlug}"></a>`
    );
    lines.push("");

    for (const file of groups[folder]) {
      const relative =
        path.relative(ROOT_DIR, file);

      const json =
        fs.readFileSync(file, "utf8");

      const anchor =
        slugify(relative);

      const valid =
        validateJson(json);

      let output = json;

      if (valid) {
        output = JSON.stringify(
          JSON.parse(json),
          null,
          2
        );
      }

      lines.push(
        `## ${path.basename(file)}`
      );
      lines.push(
        `<a id="${anchor}"></a>`
      );
      lines.push("");

      lines.push(
        `**Arquivo:** \`${relative}\``
      );
      lines.push("");

      lines.push(
        valid
          ? "✅ JSON válido"
          : "❌ JSON inválido"
      );

      lines.push("");

      lines.push("```json");
      lines.push(output);
      lines.push("```");

      lines.push("");

      lines.push(
        "[↑ Voltar ao índice](#índice)"
      );

      lines.push("");
      lines.push("---");
      lines.push("");
    }
  }

  return lines;
}

function generateMarkdown(files) {
  const groups =
    groupFiles(files);

  const document = [];

  document.push(
    "# Linters Reference"
  );
  document.push("");

  document.push(
    `Gerado em: ${new Date().toISOString()}`
  );
  document.push("");

  document.push(
    `Total de arquivos JSON: ${files.length}`
  );
  document.push("");

  document.push(
    ...buildIndex(groups)
  );

  document.push("---");
  document.push("");

  document.push(
    ...buildSections(groups)
  );

  return document.join("\n");
}

function main() {
  const files = walk(ROOT_DIR)
    .sort();

  const markdown =
    generateMarkdown(files);

  fs.writeFileSync(
    OUTPUT_FILE,
    markdown,
    "utf8"
  );

  console.log(
    `✅ Arquivo criado: ${OUTPUT_FILE}`
  );
}

main();