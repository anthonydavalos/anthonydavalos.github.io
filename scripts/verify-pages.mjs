import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

const expectedPages = [
  ["index.html", "Anthony Davalos"],
  ["404.html", "Página no encontrada"],
  ["privacidad/index.html", "Política de privacidad"],
  ["terminos/index.html", "Términos de uso"],
  ["licencias/index.html", "Licencias y avisos"],
  ["privacidad.html", "url=/privacidad/"],
  ["terminos.html", "url=/terminos/"],
];

for (const [relativePath, expectedText] of expectedPages) {
  const filePath = resolve("dist", relativePath);
  await access(filePath, constants.R_OK);
  const page = await readFile(filePath, "utf8");

  if (!page.includes(expectedText)) {
    throw new Error(`${relativePath} does not contain its expected content.`);
  }
}

process.stdout.write(
  `Verified ${expectedPages.length} generated and compatibility pages.\n`,
);
