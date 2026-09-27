// Extrai o motor (tudo que não é UI) de versoes/v12-auditoria-final.jsx para
// um módulo ES executável em Node, sem alterar nenhuma linha da lógica original.
// Saída: auditoria/.gerado/motor.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const fonte = readFileSync(join(raiz, "versoes/v12-auditoria-final.jsx"), "utf8");

// Motor = do fim do import do React até o primeiro componente de UI.
const inicio = fonte.indexOf("\n", fonte.indexOf("import ")) + 1;
const fim = fonte.indexOf("function ZodiacRing(");
if (fim < 0) throw new Error("Marcador 'function ZodiacRing(' não encontrado no v12");
let motor = fonte.slice(inicio, fim);

// Helpers estatísticos que o motor usa mas que ficam declarados depois da UI.
for (const nome of ["media", "desvioPadraoAmostral"]) {
  const m = fonte.match(new RegExp(`\\nfunction ${nome}\\([\\s\\S]*?\\n}\\n`));
  if (!m) throw new Error(`Função ${nome} não encontrada`);
  motor += m[0];
}

motor += `
export {
  HISTORICO_INICIAL, analisarCorrelacaoDireta, analisarMapa, top15PorPontuacao, top15Formula70,
  rodarWalkForward, avaliarMultiplasComparacoes, construirBaseDecisao, gerarItemComDuasSugestoes,
  obterMapaInterpretado, mapaInterpretavel, resultadoValido, compararHistoricoCronologico,
};
`;

const saida = join(raiz, "auditoria/.gerado/motor.mjs");
mkdirSync(dirname(saida), { recursive: true });
writeFileSync(saida, motor);
console.log(`motor extraído → ${saida}`);
