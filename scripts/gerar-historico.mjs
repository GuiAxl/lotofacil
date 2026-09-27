// Gera src/dados/historico.js a partir de dados/lotofacil-completo.json
// (convertido da planilha oficial). Formato compacto, uma linha por concurso:
// concurso|data|dezenas(bitmask base36)|g15|r15|g14|r14|g13|r13|g12|r12|g11|r11|arrecadacao
import { readFileSync, writeFileSync } from "node:fs";
const D = JSON.parse(readFileSync("dados/lotofacil-completo.json", "utf8"));
const linhas = D.map(d => {
  const mask = d.n.reduce((m, x) => m + 2 ** (x - 1), 0).toString(36);
  const v = x => (Number.isInteger(x) ? String(x) : String(Math.round(x * 100) / 100));
  return [d.c, d.d, mask, d.g15, v(d.r15), d.g14, v(d.r14), d.g13, v(d.r13), d.g12, v(d.r12), d.g11, v(d.r11), v(d.arrec)].join("|");
});
writeFileSync("src/dados/historico.js", `// Histórico oficial completo da Lotofácil (planilha da Caixa), ${D.length} concursos,
// de ${D[0].d} (nº ${D[0].c}) a ${D.at(-1).d} (nº ${D.at(-1).c}).
// Gerado por scripts/gerar-historico.mjs — não edite à mão.
const BRUTO = \`${linhas.join("\n")}\`;

export const HISTORICO = BRUTO.split("\\n").map(l => {
  const [c, data, mask, g15, r15, g14, r14, g13, r13, g12, r12, g11, r11, arrec] = l.split("|");
  const m = parseInt(mask, 36), dezenas = [];
  for (let i = 0; i < 25; i++) if (Math.floor(m / 2 ** i) % 2) dezenas.push(i + 1);
  const n = Number;
  return { concurso: n(c), data, dezenas, premios: { g15: n(g15), r15: n(r15), g14: n(g14), r14: n(r14), g13: n(g13), r13: n(r13), g12: n(g12), r12: n(r12), g11: n(g11), r11: n(r11), arrecadacao: n(arrec) } };
});
`);
console.log(D.length, "concursos,", (linhas.join("\n").length / 1024).toFixed(0), "KB");
