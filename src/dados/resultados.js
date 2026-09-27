// Resultados oficiais no formato [concurso, data, 15 dezenas], derivados do
// histórico completo (src/dados/historico.js).
import { HISTORICO } from "./historico.js";

export const RESULTADOS_INICIAIS = HISTORICO.map(h => [h.concurso, h.data, h.dezenas]);
