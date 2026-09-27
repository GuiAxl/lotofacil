// Empacota o app num único arquivo .jsx (mesmo formato do v12: um componente
// React com `export default`, importando só de "react"), pronto para colar
// como artifact no Claude.
import { build } from "esbuild";
import { readFileSync, writeFileSync } from "node:fs";

const saida = "dist/lotofacil-astro-v13.jsx";
await build({
  entryPoints: ["src/App.jsx"],
  bundle: true,
  format: "esm",
  jsx: "preserve",
  external: ["react"],
  outfile: saida,
  charset: "utf8",
  legalComments: "none",
  logLevel: "warning",
});
let corpo = readFileSync(saida, "utf8");
// Junta todos os imports de "react" num só, no topo (alguns ambientes de
// artifact só entendem imports no início do arquivo).
const nomes = new Map();
corpo = corpo.replace(/^import \{([^}]*)\} from "react";\n/gm, (_, lista) => {
  lista.split(",").map(x => x.trim()).filter(Boolean).forEach(item => {
    const [orig, alias] = item.split(/\s+as\s+/);
    nomes.set(alias || orig, orig);
  });
  return "";
});
const importUnico = `import { ${[...nomes].map(([alias, orig]) => (alias === orig ? orig : `${orig} as ${alias}`)).join(", ")} } from "react";\n`;
corpo = corpo.replace(/export \{\s*App as default\s*\};?\s*$/, "export default App;\n");
if (!/export default App;/.test(corpo)) throw new Error("export default não encontrado");
if (/^import /m.test(corpo)) throw new Error("sobrou import fora do React");
corpo = importUnico + corpo;
writeFileSync(saida, `// Lotofácil Astro v13 — Observatório. Arquivo gerado por scripts/build.mjs a partir de src/.\n// Não edite aqui: edite src/ e rode "npm run build".\n${corpo}`);
console.log(`${saida}: ${(corpo.length / 1024).toFixed(0)} KB`);
