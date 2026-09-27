// Gera históricos sintéticos para testar se o motor (a) não inventa sinal
// no puro acaso e (b) encontra um sinal quando ele existe de verdade.
import { rng, embaralhar } from "../src/estatistica/matematica.js";

export function historicoSintetico({ n = 320, sinalPlantado = false, semente = 1, forca = 0.9 } = {}) {
  const r = rng(semente);
  const pool = Array.from({ length: 250 }, (_, i) => `s${i}`);
  const lista = [];
  for (let i = 0; i < n; i++) {
    const chaves = pool.filter(() => r() < 0.3);
    const ativo = r() < 0.3;
    if (ativo) chaves.push("plantado");
    let resultado = embaralhar(Array.from({ length: 25 }, (_, j) => j + 1), r).slice(0, 15);
    if (sinalPlantado && ativo) {
      const forcados = [1, 2, 3, 4, 5].filter(() => r() < forca);
      const resto = embaralhar(Array.from({ length: 25 }, (_, j) => j + 1).filter(x => !forcados.includes(x)), r);
      resultado = [...forcados, ...resto.slice(0, 15 - forcados.length)];
    }
    lista.push({ concurso: 1000 + i, data: "", resultado: resultado.sort((a, b) => a - b), chaves });
  }
  return lista;
}
