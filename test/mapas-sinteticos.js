// Gera mapas no formato em inglês do site, com geometria coerente
// (cúspides, casas, aspectos e orbes batem com as posições). Só para testes
// de desempenho e de interface — não são mapas reais.
import { rng } from "../src/estatistica/matematica.js";
import { SIGNOS, ASPECTOS } from "../src/astro/constantes.js";
import { casaDe, norm360, distancia } from "../src/astro/parser.js";

const NOMES = [["Sun", 0.9856], ["Moon", 13.18], ["Mercury", 1.38], ["Venus", 1.2], ["Mars", 0.52], ["Jupiter", 0.083], ["Saturn", 0.033],
  ["Uranus", 0.012], ["Neptune", 0.006], ["Pluto", 0.004], ["North Node", -0.053], ["Lilith", 0.111], ["Chiron", 0.02]];
const ORD = n => (n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`);
const fmt = lon => { const s = SIGNOS[Math.floor(norm360(lon) / 30)].en; const g = norm360(lon) % 30; const gi = Math.floor(g); const m = Math.floor((g - gi) * 60); return `${s} ${gi}°${String(m).padStart(2, "0")}’`; };
const fmtOrbe = o => `${Math.floor(o)}°${String(Math.floor((o % 1) * 60)).padStart(2, "0")}’`;
const fmtVel = v => { const a = Math.abs(v); const g = Math.floor(a); const m = Math.floor((a - g) * 60); const s = Math.floor(((a - g) * 60 - m) * 60); return `${v < 0 ? "-" : ""}${g}°${String(m).padStart(2, "0")}’${String(s).padStart(2, "0")}’’`; };

export function mapaSintetico(semente, dia = semente) {
  const r = rng(semente);
  const lon = {}, vel = {};
  // Lentos derivam devagar com o "dia"; rápidos mudam todo dia.
  NOMES.forEach(([n, v], i) => {
    const base = (i * 47.3 + 13) % 360;
    lon[n] = Math.abs(v) < 0.2 ? norm360(base + v * dia) : norm360(r() * 360);
    const razao = 0.6 + r() * 0.8;
    vel[n] = (n === "North Node" ? -1 : r() < (n === "Mercury" ? 0.2 : n === "Venus" || n === "Mars" ? 0.08 : 0) ? -0.3 : 1) * Math.abs(v) * razao;
  });
  lon.Sun = norm360(dia * 0.9856 + 120);
  lon.Mercury = norm360(lon.Sun + (r() - 0.5) * 50);
  lon.Venus = norm360(lon.Sun + (r() - 0.5) * 90);
  const asc = r() * 360;
  const cusp = [null];
  let acc = asc;
  for (let i = 1; i <= 12; i++) { cusp[i] = norm360(acc); acc += 22 + r() * 16; }
  const escala = 360 / (acc - asc);
  for (let i = 1; i <= 12; i++) cusp[i] = norm360(asc + (norm360(cusp[i] - asc)) * escala);
  const mc = cusp[10];
  lon.Fortune = norm360(asc + lon.Moon - lon.Sun);
  lon.Vertex = norm360(cusp[6] + r() * 60);
  const linhas = [];
  for (const [n] of NOMES) linhas.push(`${n} in ${fmt(lon[n])}${vel[n] < 0 ? ", Retrograde" : ""}, in ${ORD(casaDe(lon[n], cusp))} House`);
  linhas.push(`Fortune in ${fmt(lon.Fortune)}, in ${ORD(casaDe(lon.Fortune, cusp))} House`);
  linhas.push(`Vertex in ${fmt(lon.Vertex)}, in ${ORD(casaDe(lon.Vertex, cusp))} House`);
  linhas.push(`ASC in ${fmt(asc)}`, `MC in ${fmt(mc)}`, "");
  for (let i = 1; i <= 12; i++) linhas.push(`${ORD(i)} House in ${fmt(cusp[i])}`);
  linhas.push("");
  // Posições arredondadas ao minuto, como o texto, para o orbe bater.
  const arred = x => Math.floor(norm360(x) * 60) / 60;
  const pts = [...NOMES.map(([n]) => [n, arred(lon[n])]), ["Fortune", arred(lon.Fortune)], ["Vertex", arred(lon.Vertex)], ["ASC", arred(asc)], ["MC", arred(mc)]];
  const principais = ASPECTOS.filter(a => ["conjunction", "sextile", "square", "trine", "opposition", "octile", "tri-octile", "quincunx"].includes(a.en[0]));
  for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
    const d = distancia(pts[i][1], pts[j][1]);
    for (const a of principais) {
      const orbe = Math.abs(d - a.angulo);
      if (orbe <= 3) {
        const nomeTipo = a.en[0].replace(/(^|-)(\w)/g, (m, p, c) => p + c.toUpperCase());
        linhas.push(`${pts[i][0]} ${nomeTipo} ${pts[j][0]} (Orb: ${fmtOrbe(orbe)}, ${r() < 0.5 ? "Applying" : "Separating"})`);
      }
    }
  }
  linhas.push("");
  for (const [n] of NOMES) linhas.push(`${n}: ${fmtVel(vel[n])} (${vel[n] < 0 ? "Retrograde" : "Average"}, cca ${(0.6 + r() * 0.8).toFixed(2)}x avg speed)`);
  return linhas.join("\n");
}
