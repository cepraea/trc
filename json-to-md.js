const fs = require("fs");
const path = require("path");

const ROOT_DIR = process.argv[2] || process.cwd();

const INCLUDED_FILES = new Set([
  ".markdownlint-cli2.jsonc",
  ".prettierignore",
  ".prettierrc",
  ".prettierrc.json",
  ".prettierrc.yaml",
  ".prettierrc.yml",
  ".prettierrc.js"
]);

const OUTPUT_FILE =
  path.join(ROOT_DIR, "linters-reference.md");

const EXCLUDED_DIRS = new Set([
  ".git",
  "node_modules"
]);

const EXCLUDED_FILES = new Set([
  "package-lock.json"
]);

function slug(text) {
  return text
    .toLowerCase()
    .replace(/[\\/]/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function walk(dir) {
  const entries = fs.readdirSync(dir, {
    withFileTypes: true
  });

  let files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name))
        continue;

      files.push(...walk(full));
      continue;
    }

    const lowerName =
      entry.name.toLowerCase();

    const isJson =
      lowerName.endsWith(".json");

    const isExtraConfig =
      INCLUDED_FILES.has(entry.name);

    if (
      entry.isFile() &&
      (isJson || isExtraConfig) &&
      !EXCLUDED_FILES.has(entry.name)
    ) {
      files.push(full);
    }
  }

  return files;
}

function detectTools(content, fileName) {
  const text =
    `${fileName}\n${content}`.toLowerCase();

  return {
    eslint:
      text.includes("eslint"),
    prettier:
      text.includes("prettier") ||
      fileName.includes(".prettierrc") ||
      fileName.includes(".prettierignore"),
    markdownlint:
      text.includes("markdownlint") ||
      fileName.includes("markdownlint"),
    biome:
      text.includes("biome"),
    typescript:
      text.includes("typescript") ||
      text.includes("tsconfig")
  };
}

function createStats(content) {
  return {
    lines:
      content.split("\n").length,
    chars:
      content.length
  };
}

function main() {
  const files =
    walk(ROOT_DIR).sort();

  const folders = {};
  const tech = {
    eslint: false,
    prettier: false,
    markdownlint: false,
    biome: false,
    typescript: false
  };

  let validJson = 0;

  for (const file of files) {
    const relative =
      path.relative(ROOT_DIR, file);

    const folder =
      path.dirname(relative) === "."
        ? "Raiz"
        : path.dirname(relative);

    if (!folders[folder]) {
      folders[folder] = [];
    }

    const content =
      fs.readFileSync(file, "utf8");

    try {
      JSON.parse(content);
      validJson++;
    } catch {}

    const detected =
      detectTools(content, relative);

    Object.keys(detected).forEach(
      key => {
        if (detected[key]) {
          tech[key] = true;
        }
      }
    );

    folders[folder].push({
      file,
      relative,
      content
    });
  }

  const md = [];

  md.push("# Linters Reference");
  md.push("");

  md.push("## Resumo");
  md.push("");
  md.push("| Tecnologia | Detectada |");
  md.push("|------------|------------|");

  Object.entries(tech).forEach(
    ([name, found]) => {
      md.push(
        `| ${name} | ${found ? "✅" : "❌"} |`
      );
    }
  );

  md.push("");

  md.push("## Estatísticas");
  md.push("");
  md.push("| Métrica | Valor |");
  md.push("|----------|--------|");
  md.push(
    `| JSON analisados | ${files.length} |`
  );
  md.push(
    `| JSON válidos | ${validJson} |`
  );
  md.push(
    `| Pastas | ${Object.keys(folders).length} |`
  );

  md.push("");

  md.push("## Índice");
  md.push("");

  for (const folder of Object.keys(
    folders
  ).sort()) {
    md.push(
      `- [${folder}](#folder-${slug(folder)})`
    );

    folders[folder].forEach(f => {
      md.push(
        `  - [${path.basename(
          f.file
        )}](#file-${slug(
          f.relative
        )})`
      );
    });

    md.push("");
  }

  md.push("---");
  md.push("");

  for (const folder of Object.keys(
    folders
  ).sort()) {
    md.push(
      `<a id="folder-${slug(folder)}"></a>`
    );
    md.push(
      `# ${folder}`
    );
    md.push("");

    for (const item of folders[
      folder
    ]) {
      const stats =
        createStats(item.content);

      md.push(
        `<a id="file-${slug(
          item.relative
        )}"></a>`
      );

      md.push(
        `## ${path.basename(
          item.file
        )}`
      );

      md.push("");

      md.push(
        `**Arquivo:** \`${item.relative}\``
      );

      md.push("");

      md.push("| Métrica | Valor |");
      md.push("|----------|--------|");
      md.push(
        `| Linhas | ${stats.lines} |`
      );
      md.push(
        `| Caracteres | ${stats.chars} |`
      );

      md.push("");

      md.push("");
      md.push("```json");

      try {
        md.push(
          JSON.stringify(
            JSON.parse(item.content),
            null,
            2
          )
        );
      } catch {
        md.push(item.content);
      }

      md.push("```");
      md.push("");

      md.push("");
      md.push(
        "[↑ Voltar ao índice](#índice)"
      );
      md.push("");
      md.push("---");
      md.push("");
    }
  }

  fs.writeFileSync(
    OUTPUT_FILE,
    md.join("\n"),
    "utf8"
  );

  console.log(
    `✅ Gerado: ${OUTPUT_FILE}`
  );
}

main();