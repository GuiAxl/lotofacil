// Gera src/dados/resultados.js a partir do v12: só concurso, data e resultado.
// Mapas e jogos salvos NÃO são copiados (os jogos tinham vazamento; os mapas
// serão trazidos de novo em inglês).
import { readFileSync, writeFileSync } from "node:fs";
const fonte = readFileSync("versoes/v12-auditoria-final.jsx", "utf8");
const bloco = fonte.slice(fonte.indexOf("const HISTORICO_INICIAL = ["), fonte.indexOf("\n];", fonte.indexOf("const HISTORICO_INICIAL = [")) + 3);
const lista = new Function(bloco.replace("const HISTORICO_INICIAL =", "return"))();
const linhas = lista
  .filter(h => Array.isArray(h.resultado) && h.resultado.length === 15)
  .map(h => ({ concurso: Number(h.concurso), data: h.data, resultado: [...h.resultado].sort((a, b) => a - b) }))
  .sort((a, b) => a.concurso - b.concurso)
  .map(h => `  [${h.concurso}, "${h.data}", [${h.resultado.join(",")}]],`);
writeFileSync("src/dados/resultados.js", `// Resultados oficiais da Lotofácil: [concurso, data, 15 dezenas].
// Gerado por scripts/gerar-resultados.mjs — ${linhas.length} concursos.
export const RESULTADOS_INICIAIS = [
${linhas.join("\n")}
];
`);
console.log(linhas.length, "concursos");
