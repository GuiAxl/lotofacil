// Gera src/dados/historico.js a partir de dados/lotofacil-completo.json
// (convertido da planilha oficial). Uma linha por concurso, legível:
// concurso|data|15 dezenas
import { readFileSync, writeFileSync } from "node:fs";
const D = JSON.parse(readFileSync("dados/lotofacil-completo.json", "utf8"));
const linhas = D.map(d => [d.c, d.d, [...d.n].sort((a, b) => a - b).map(x => String(x).padStart(2, "0")).join(" ")].join("|"));
writeFileSync("src/dados/historico.js", `// Histórico oficial completo da Lotofácil (planilha da Caixa), ${D.length} concursos,
// de ${D[0].d} (nº ${D[0].c}) a ${D.at(-1).d} (nº ${D.at(-1).c}).
// Uma linha por concurso: concurso|data|15 dezenas.
// Gerado por scripts/gerar-historico.mjs — não edite à mão.
const BRUTO = \`${linhas.join("\n")}\`;

export const HISTORICO = BRUTO.split("\\n").map(l => {
  const [c, data, dezenas] = l.split("|");
  return { concurso: Number(c), data, dezenas: dezenas.split(" ").map(Number) };
});
`);
console.log(D.length, "concursos,", (linhas.join("\n").length / 1024).toFixed(0), "KB");
