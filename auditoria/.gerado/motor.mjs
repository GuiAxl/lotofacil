

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: 1. DADOS — Histórico pré-carregado de concursos (backup)
// ═══════════════════════════════════════════════════════════════════════════
// 321 concursos reais (3450 a 3770, 23/07/2025 a 23/08/2026). 195 deles (3576
// a 3770) têm mapa horário preenchido; os outros 126 (3450 a 3575) têm só o
// resultado (fonte: planilha oficial da Lotofácil), sem mapa — ainda assim
// entram no dataset estatístico de toda regra/sinal/correlação que precisa
// de "dias sem a condição" como grupo de comparação.
const HISTORICO_INICIAL = [
  {
    id: "h200_3450", concurso: "3450", data: "23/07/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 7, 11, 12, 13, 14, 15, 18, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3451", concurso: "3451", data: "24/07/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 6, 7, 8, 9, 14, 15, 17, 18, 20, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3452", concurso: "3452", data: "25/07/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 5, 8, 9, 11, 12, 13, 15, 16, 18, 19, 20, 21, 25],
    obs: "",
  },
  {
    id: "h200_3453", concurso: "3453", data: "26/07/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 19, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3454", concurso: "3454", data: "28/07/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 7, 9, 10, 11, 13, 14, 15, 17, 18, 20, 22, 24],
    obs: "",
  },
  {
    id: "h200_3455", concurso: "3455", data: "29/07/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 6, 9, 10, 13, 15, 17, 19, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3456", concurso: "3456", data: "30/07/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 6, 7, 11, 12, 13, 15, 16, 19, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3457", concurso: "3457", data: "31/07/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 6, 9, 10, 11, 12, 16, 17, 18, 20, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3458", concurso: "3458", data: "01/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 7, 8, 9, 10, 11, 14, 16, 18, 20, 23, 25],
    obs: "",
  },
  {
    id: "h200_3459", concurso: "3459", data: "02/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 5, 6, 7, 12, 14, 15, 17, 18, 19, 20, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3460", concurso: "3460", data: "04/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 6, 8, 11, 12, 16, 17, 18, 19, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3461", concurso: "3461", data: "05/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 6, 8, 9, 10, 11, 13, 18, 19, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3462", concurso: "3462", data: "06/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3463", concurso: "3463", data: "07/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 6, 7, 8, 11, 14, 15, 16, 17, 18, 19, 21, 22],
    obs: "",
  },
  {
    id: "h200_3464", concurso: "3464", data: "08/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 6, 11, 13, 14, 15, 16, 17, 18, 20, 21, 22, 25],
    obs: "",
  },
  {
    id: "h200_3465", concurso: "3465", data: "09/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 5, 6, 9, 10, 11, 12, 14, 15, 17, 18, 21, 22, 24],
    obs: "",
  },
  {
    id: "h200_3466", concurso: "3466", data: "11/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 5, 6, 7, 9, 10, 12, 15, 17, 18, 19, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3467", concurso: "3467", data: "12/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 4, 5, 6, 7, 8, 9, 13, 14, 16, 18, 19, 20, 21, 25],
    obs: "",
  },
  {
    id: "h200_3468", concurso: "3468", data: "13/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 6, 9, 10, 12, 13, 14, 18, 19, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3469", concurso: "3469", data: "14/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 5, 6, 7, 8, 11, 12, 13, 15, 17, 18, 21, 22, 24],
    obs: "",
  },
  {
    id: "h200_3470", concurso: "3470", data: "15/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 5, 7, 8, 10, 12, 13, 14, 18, 20, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h200_3471", concurso: "3471", data: "16/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 6, 11, 13, 16, 17, 19, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3472", concurso: "3472", data: "18/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 7, 10, 11, 12, 13, 15, 18, 19, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3473", concurso: "3473", data: "19/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 6, 7, 9, 12, 13, 14, 17, 18, 19, 23, 25],
    obs: "",
  },
  {
    id: "h200_3474", concurso: "3474", data: "20/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 6, 8, 9, 10, 12, 13, 14, 15, 18, 19, 20, 21, 25],
    obs: "",
  },
  {
    id: "h200_3475", concurso: "3475", data: "21/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 6, 11, 14, 15, 18, 20, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3476", concurso: "3476", data: "22/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 5, 6, 7, 8, 10, 12, 15, 16, 17, 19, 20, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3477", concurso: "3477", data: "23/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 6, 8, 12, 15, 16, 17, 18, 20, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3478", concurso: "3478", data: "25/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 17, 21, 22, 24],
    obs: "",
  },
  {
    id: "h200_3479", concurso: "3479", data: "26/08/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 5, 6, 8, 9, 10, 12, 13, 15, 16, 18, 19, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3480", concurso: "3480", data: "06/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 5, 6, 8, 9, 12, 13, 14, 15, 16, 17, 20, 21, 22, 23],
    obs: "",
  },
  {
    id: "h200_3481", concurso: "3481", data: "08/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 7, 9, 10, 13, 14, 19, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h200_3482", concurso: "3482", data: "09/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 9, 10, 13, 14, 15, 17, 19, 20, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3483", concurso: "3483", data: "10/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 4, 7, 8, 9, 12, 13, 14, 15, 17, 18, 20, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3484", concurso: "3484", data: "11/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 7, 8, 9, 11, 13, 14, 15, 17, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3485", concurso: "3485", data: "12/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 15, 18, 20, 22, 25],
    obs: "",
  },
  {
    id: "h200_3486", concurso: "3486", data: "13/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 6, 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3487", concurso: "3487", data: "15/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 4, 5, 7, 10, 12, 13, 15, 16, 17, 18, 19, 21, 22, 23],
    obs: "",
  },
  {
    id: "h200_3488", concurso: "3488", data: "16/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 6, 8, 9, 11, 12, 13, 14, 15, 17, 22, 25],
    obs: "",
  },
  {
    id: "h200_3489", concurso: "3489", data: "17/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 5, 8, 9, 11, 14, 16, 17, 20, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3490", concurso: "3490", data: "18/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 7, 8, 11, 13, 14, 15, 16, 18, 19, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3491", concurso: "3491", data: "19/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 8, 9, 10, 12, 13, 15, 17, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3492", concurso: "3492", data: "20/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 8, 9, 10, 13, 17, 18, 19, 20, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3493", concurso: "3493", data: "22/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 6, 10, 11, 13, 15, 16, 19, 20, 21, 23, 24],
    obs: "",
  },
  {
    id: "h200_3494", concurso: "3494", data: "23/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 9, 10, 11, 12, 14, 15, 16, 17, 19, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3495", concurso: "3495", data: "24/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 6, 8, 9, 11, 12, 15, 16, 18, 19, 20, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3496", concurso: "3496", data: "25/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 5, 8, 9, 11, 13, 14, 15, 16, 17, 18, 20, 23, 24],
    obs: "",
  },
  {
    id: "h200_3497", concurso: "3497", data: "26/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 6, 10, 11, 12, 13, 14, 15, 18, 19, 21, 25],
    obs: "",
  },
  {
    id: "h200_3498", concurso: "3498", data: "27/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 7, 8, 9, 15, 16, 17, 19, 21, 22, 24],
    obs: "",
  },
  {
    id: "h200_3499", concurso: "3499", data: "29/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 5, 7, 9, 10, 11, 12, 13, 14, 17, 18, 19, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3500", concurso: "3500", data: "30/09/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 14, 16, 18, 19, 21],
    obs: "",
  },
  {
    id: "h200_3501", concurso: "3501", data: "01/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 7, 9, 11, 12, 13, 15, 16, 18, 19, 20, 21, 22, 24],
    obs: "",
  },
  {
    id: "h200_3502", concurso: "3502", data: "02/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [4, 5, 6, 7, 8, 9, 14, 15, 16, 17, 18, 19, 20, 21, 25],
    obs: "",
  },
  {
    id: "h200_3503", concurso: "3503", data: "03/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 6, 7, 8, 10, 11, 12, 14, 15, 16, 18, 21, 24, 25],
    obs: "",
  },
  {
    id: "h200_3504", concurso: "3504", data: "04/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 6, 7, 9, 10, 12, 15, 16, 17, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3505", concurso: "3505", data: "06/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 6, 7, 8, 9, 11, 14, 16, 20, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3506", concurso: "3506", data: "07/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 4, 5, 6, 8, 11, 12, 13, 16, 17, 18, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3507", concurso: "3507", data: "08/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 7, 9, 10, 11, 12, 17, 18, 19, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3508", concurso: "3508", data: "09/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 6, 8, 11, 13, 14, 16, 17, 20, 21, 22, 24],
    obs: "",
  },
  {
    id: "h200_3509", concurso: "3509", data: "10/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 7, 9, 10, 12, 14, 15, 16, 19, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3510", concurso: "3510", data: "11/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 17, 21, 22, 23],
    obs: "",
  },
  {
    id: "h200_3511", concurso: "3511", data: "13/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 6, 7, 8, 9, 12, 13, 14, 15, 19, 20, 23, 24],
    obs: "",
  },
  {
    id: "h200_3512", concurso: "3512", data: "14/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 6, 9, 12, 13, 14, 15, 17, 19, 20, 22],
    obs: "",
  },
  {
    id: "h200_3513", concurso: "3513", data: "15/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 4, 5, 6, 7, 11, 13, 14, 15, 16, 18, 20, 22, 23, 24],
    obs: "",
  },
  {
    id: "h200_3514", concurso: "3514", data: "16/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 6, 8, 10, 12, 13, 16, 17, 20, 21, 23, 24],
    obs: "",
  },
  {
    id: "h200_3515", concurso: "3515", data: "17/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 6, 7, 9, 14, 15, 16, 17, 21, 23, 24],
    obs: "",
  },
  {
    id: "h200_3516", concurso: "3516", data: "18/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 6, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3517", concurso: "3517", data: "20/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 7, 8, 11, 12, 14, 17, 18, 19, 20, 21, 22, 24],
    obs: "",
  },
  {
    id: "h200_3518", concurso: "3518", data: "21/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 5, 6, 7, 11, 12, 13, 14, 16, 17, 19, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3519", concurso: "3519", data: "22/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [4, 5, 6, 7, 8, 13, 14, 16, 17, 18, 20, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3520", concurso: "3520", data: "23/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 7, 8, 10, 12, 13, 15, 16, 18, 19, 20, 21, 22, 23],
    obs: "",
  },
  {
    id: "h200_3521", concurso: "3521", data: "24/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 20, 21, 22, 23],
    obs: "",
  },
  {
    id: "h200_3522", concurso: "3522", data: "25/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 7, 8, 10, 11, 12, 14, 15, 17, 20, 22, 24],
    obs: "",
  },
  {
    id: "h200_3523", concurso: "3523", data: "27/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [5, 6, 8, 9, 10, 11, 12, 14, 15, 16, 17, 19, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3524", concurso: "3524", data: "28/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 7, 9, 12, 13, 14, 15, 16, 17, 18, 22, 24],
    obs: "",
  },
  {
    id: "h200_3525", concurso: "3525", data: "29/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 7, 10, 11, 14, 15, 16, 17, 18, 20, 21, 23, 24],
    obs: "",
  },
  {
    id: "h200_3526", concurso: "3526", data: "30/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 7, 8, 10, 12, 14, 15, 17, 18, 19, 20, 21, 22, 23],
    obs: "",
  },
  {
    id: "h200_3527", concurso: "3527", data: "31/10/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 6, 7, 9, 13, 14, 15, 16, 17, 19, 20, 23, 24],
    obs: "",
  },
  {
    id: "h200_3528", concurso: "3528", data: "01/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 5, 6, 7, 9, 10, 16, 18, 19, 20, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3529", concurso: "3529", data: "03/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 7, 8, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 22, 24],
    obs: "",
  },
  {
    id: "h200_3530", concurso: "3530", data: "04/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 7, 11, 12, 13, 15, 16, 20, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3531", concurso: "3531", data: "05/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 16, 18, 19, 22],
    obs: "",
  },
  {
    id: "h200_3532", concurso: "3532", data: "06/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 17, 23, 25],
    obs: "",
  },
  {
    id: "h200_3533", concurso: "3533", data: "07/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 5, 6, 8, 11, 12, 13, 14, 15, 19, 20, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3534", concurso: "3534", data: "08/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 7, 9, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22],
    obs: "",
  },
  {
    id: "h200_3535", concurso: "3535", data: "10/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 6, 7, 8, 9, 11, 13, 18, 19, 20, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3536", concurso: "3536", data: "11/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 6, 7, 8, 9, 10, 11, 15, 16, 17, 18, 22, 24],
    obs: "",
  },
  {
    id: "h200_3537", concurso: "3537", data: "12/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 7, 9, 10, 12, 15, 19, 20, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3538", concurso: "3538", data: "13/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 8, 9, 10, 13, 14, 17, 19, 20, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3539", concurso: "3539", data: "14/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 7, 8, 9, 11, 12, 13, 14, 16, 18, 19, 20, 23, 24],
    obs: "",
  },
  {
    id: "h200_3540", concurso: "3540", data: "17/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 6, 9, 10, 13, 14, 15, 16, 18, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3541", concurso: "3541", data: "18/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 6, 8, 13, 14, 16, 17, 18, 19, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3542", concurso: "3542", data: "19/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 5, 8, 11, 12, 13, 15, 18, 19, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3543", concurso: "3543", data: "21/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 5, 6, 7, 8, 9, 14, 15, 16, 17, 20, 21, 22, 25],
    obs: "",
  },
  {
    id: "h200_3544", concurso: "3544", data: "22/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 5, 6, 8, 10, 11, 12, 15, 17, 20, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3545", concurso: "3545", data: "24/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 5, 6, 7, 8, 11, 12, 14, 17, 19, 20, 21, 22, 25],
    obs: "",
  },
  {
    id: "h200_3546", concurso: "3546", data: "25/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 5, 7, 8, 11, 12, 13, 18, 19, 20, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3547", concurso: "3547", data: "26/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 5, 6, 7, 9, 10, 14, 15, 17, 18, 19, 20, 21, 24, 25],
    obs: "",
  },
  {
    id: "h200_3548", concurso: "3548", data: "27/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [4, 8, 9, 10, 11, 12, 13, 15, 16, 17, 19, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3549", concurso: "3549", data: "28/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 5, 7, 8, 9, 11, 12, 14, 17, 20, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3550", concurso: "3550", data: "29/11/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 6, 7, 8, 12, 13, 15, 16, 18, 19, 20, 22, 23, 24],
    obs: "",
  },
  {
    id: "h200_3551", concurso: "3551", data: "01/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 7, 8, 10, 11, 12, 15, 16, 17, 19, 21, 22, 25],
    obs: "",
  },
  {
    id: "h200_3552", concurso: "3552", data: "02/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [4, 5, 6, 7, 11, 12, 14, 15, 16, 17, 18, 20, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3553", concurso: "3553", data: "03/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 7, 8, 9, 12, 13, 16, 17, 19, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h200_3554", concurso: "3554", data: "04/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 8, 9, 11, 12, 14, 15, 16, 18, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3555", concurso: "3555", data: "05/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 7, 8, 10, 13, 14, 15, 18, 19, 20, 23, 24],
    obs: "",
  },
  {
    id: "h200_3556", concurso: "3556", data: "06/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 7, 9, 10, 12, 14, 16, 17, 19, 21, 23],
    obs: "",
  },
  {
    id: "h200_3557", concurso: "3557", data: "08/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [5, 6, 7, 9, 10, 13, 14, 15, 16, 17, 19, 20, 21, 22, 24],
    obs: "",
  },
  {
    id: "h200_3558", concurso: "3558", data: "09/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 7, 9, 12, 13, 14, 15, 18, 20, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3559", concurso: "3559", data: "10/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 6, 8, 9, 10, 11, 13, 14, 15, 16, 19, 20, 24, 25],
    obs: "",
  },
  {
    id: "h200_3560", concurso: "3560", data: "11/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 6, 7, 8, 10, 11, 12, 13, 17, 18, 19, 23, 24],
    obs: "",
  },
  {
    id: "h200_3561", concurso: "3561", data: "12/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 7, 8, 10, 15, 16, 17, 18, 20, 21, 25],
    obs: "",
  },
  {
    id: "h200_3562", concurso: "3562", data: "13/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 19, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3563", concurso: "3563", data: "15/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 9, 10, 11, 12, 13, 15, 17, 19, 20, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3564", concurso: "3564", data: "16/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [5, 6, 7, 8, 9, 11, 12, 13, 14, 19, 20, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3565", concurso: "3565", data: "17/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 4, 10, 11, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3566", concurso: "3566", data: "18/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 7, 8, 12, 13, 14, 15, 17, 20, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h200_3567", concurso: "3567", data: "19/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 8, 9, 10, 11, 12, 14, 15, 18, 19, 20, 24, 25],
    obs: "",
  },
  {
    id: "h200_3568", concurso: "3568", data: "20/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 6, 7, 8, 10, 11, 13, 18, 19, 20, 22, 24],
    obs: "",
  },
  {
    id: "h200_3569", concurso: "3569", data: "22/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 4, 5, 6, 8, 10, 14, 15, 17, 18, 19, 20, 24],
    obs: "",
  },
  {
    id: "h200_3570", concurso: "3570", data: "23/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 3, 5, 6, 10, 11, 13, 15, 18, 19, 20, 21, 22, 24],
    obs: "",
  },
  {
    id: "h200_3571", concurso: "3571", data: "24/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 3, 4, 5, 6, 8, 11, 12, 13, 14, 17, 20, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3572", concurso: "3572", data: "26/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 4, 5, 7, 10, 12, 14, 15, 16, 17, 18, 19, 22, 24],
    obs: "",
  },
  {
    id: "h200_3573", concurso: "3573", data: "27/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 2, 7, 8, 10, 11, 12, 14, 15, 16, 17, 20, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3574", concurso: "3574", data: "29/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [1, 3, 4, 5, 6, 8, 12, 13, 15, 16, 17, 18, 20, 21, 25],
    obs: "",
  },
  {
    id: "h200_3575", concurso: "3575", data: "30/12/2025", hora: "",
    textoMapa: "",
    jogoGerado: [],
    resultado: [2, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15, 17, 21, 22, 25],
    obs: "",
  },
  {
    id: "h200_3576", concurso: "3576", data: "01/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 11°35', na 5ª Casa;\nLua em Gêmeos 21°45', na 11ª Casa;\nMercúrio em Capricórnio 0°10', na 5ª Casa;\nVênus em Capricórnio 10°27', na 5ª Casa;\nMarte em Capricórnio 13°27', na 5ª Casa;\nJúpiter em Câncer 21°13', retrógrado, na 12ª Casa;\nSaturno em Peixes 26°13', na 8ª Casa;\nUrano em Touro 27°55', retrógrado, na 10ª Casa;\nNetuno em Peixes 29°31', na 8ª Casa;\nPlutão em Aquário 2°44', na 6ª Casa;\nNodo Norte em Peixes 12°07', retrógrado, na 7ª Casa; Lilith em Sagitário 1°22', na 4ª Casa ; Quíron em Áries 22°35', retrógrado, na\n5ª Casa . Fortuna\nna 8ª Casa\nem Peixes 5°03',\nVértice na 7ª Casa em Peixes 10°58',\nAscendente na 7ª Casa em Leão 15°13',\nMeio do Céu em Touro 27°16'\n\n1ª Casa em Leão 15°13'\n2ª Casa em Virgem 23°29'\n3ª Casa em Libra 29°34'\n4ª Casa em Escorpião 27°16'\n5ª Casa em Sagitário 20°30'\n6ª Casa em Capricórnio 14°41'\n7ª Casa em Aquário 15°13'\n8ª Casa em Peixes 23°29'\n9ª Casa em Áries 29°34'\n10ª Casa em Touro 27°16'\n11ª Casa em Gêmeos 20°30'\n12ª Casa em Câncer 14°41'\n\nSol em conjunção com Vênus (Orbe: 1°07', em movimento subsequente)\nSol em conjunção com Marte (Orbe: 1°52', em movimento subsequente)\nSol em tríoctilo com Urano (Orbe: 1°20', em movimento subsequente)\nMercúrio em quincúncio com Urano (Orbe: 2°15', em movimento subsequente)\nMercúrio em quadratura com Netuno (Orbe: 0°39', em movimento subsequente)\nVênus em conjunção com Marte (Orbe: 2°59', em movimento subsequente)\nVênus em tríoctilo com Urano (Orbe: 2°27', em movimento subsequente\n) Marte em tríoctilo com Urano (Orbe: 0°31', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 1°41', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°35', em movimento subsequente)\n\nTri-óctil de Mercúrio no Ascendente (Orbe: 0°02', Separando)\nQuincúncio de Marte no Ascendente (Orbe: 1°46', Separando)\nTri-óctil de Netuno no Ascendente (Orbe: 0°42', Separando)\nOctil de Mercúrio no Descendente (Orbe: 0°02', Separando)\nOctil de Netuno no Descendente (Orbe: 0°42', Separando)\nTri-óctil de Sol no Meio do Céu (Orbe: 0°41', Separando)\nQuincúncio de Mercúrio no Meio do Céu (Orbe: 2°54', Aplicando)\nTri-óctil de Vênus no Meio do Céu (Orbe: 1°48', Separando)\nTri-óctil de Marte no Meio do Céu (Orbe: 1°10', Aplicando)\nSextil de Saturno no Meio do Céu (Orbe: 1°03', Separando)\nConjunção do Meio do Céu com Urano (Orbe: 0°38', Aplicando) Meio\ndo Céu Sextil Netuno (Orbe: 2°14', Aplicando)\nIC Octil Sol (Orbe: 0°41', Separando)\nIC Octil Vênus (Orbe: 1°48', Separando)\nIC Octil Marte (Orbe: 1°10', Aplicando)\nIC Trígono Saturno (Orbe: 1°03', Separando)\nIC Oposição Urano (Orbe: 0°38', Aplicando)\nIC Trígono Netuno (Orbe: 2°14', Aplicando)\nNodo Norte Sextil Sol (Orbe: 0°31', Aplicando)\nNodo Norte Sextil Vênus (Orbe: 1°39', Aplicando)\nNodo Norte Sextil Marte (Orbe: 1°20', Separando)\nLilith Octil Marte (Orbe: 2°54', Aplicando)\nLilith Trígono Netuno (Orbe: 1°50', Separando)\nLilith Sextil Plutão (Orbe: 1°22', em movimento)\nSextil Quíron Lua (Orbe: 0°50', em movimento)\nQuadratura Quíron Júpiter (Orbe: 1°22', em movimento)\nTri-óctil Júpiter (Orbe: 1°09', em movimento)\nOctil Quíron (Orbe: 2°32', em movimento)\nSextil Sol (Orbe: 0°36', em movimento)\nSextil Vênus (Orbe: 0°30', em movimento)\nSextil Marte (Orbe: 2°28', em movimento)\nConjunção do Nodo (Orbe: 1°08', em movimento)",
    jogoGerado: [15, 2, 4, 6, 9, 13, 23, 5, 10, 18, 25, 8, 7, 1, 16],
    resultado: [1, 2, 3, 5, 7, 8, 10, 13, 16, 18, 19, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3577", concurso: "3577", data: "02/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 12°36', na 5ª Casa;\nLua em Câncer 6°46', na 11ª Casa;\nMercúrio em Capricórnio 1°42', na 5ª Casa;\nVênus em Capricórnio 11°43', na 5ª Casa;\nMarte em Capricórnio 14°13', na 5ª Casa;\nJúpiter em Câncer 21°05', retrógrado, na 12ª Casa;\nSaturno em Peixes 26°17', na 8ª Casa;\nUrano em Touro 27°53', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°31', na 8ª Casa;\nPlutão em Aquário 2°46', na 6ª Casa;\nNodo Norte em Peixes 12°03', retrógrado, na 7ª Casa;\nLilith em Sagitário 1°28', na 4ª Casa;\nQuíron em Áries 22°35', estacionário, na 8ª Casa.\nFortuna em Aquário 22°12', na 7ª Casa;\nVértice em Peixes 11°30', na 7ª Casa;\nAscendente em Leão 16°23';\nMeio do Céu em Touro 28°13'.\n\n1ª Casa em Leão 16°23'\n2ª Casa em Virgem 24°46'\n3ª Casa em Escorpião 0°41'\n4ª Casa em Escorpião 28°13'\n5ª Casa em Sagitário 21°23'\n6ª Casa em Capricórnio 15°39'\n7ª Casa em Aquário 16°23'\n8ª Casa em Peixes 24°46'\n9ª Casa em Touro 0°41'\n10ª Casa em Touro 28°13'\n11ª Casa em Gêmeos 21°23'\n12ª Casa em Câncer 15°39'\n\nSol em conjunção com Vênus (Orbe: 0°52', em movimento subsequente)\nSol em conjunção com Marte (Orbe: 1°36', em movimento subsequente)\nSol em tríoctilo com Urano (Orbe: 0°17', em movimento subsequente)\nMercúrio em quadratura com Netuno (Orbe: 2°10', em movimento subsequente)\nVênus em conjunção com Marte (Orbe: 2°29', em movimento subsequente)\nVênus em tríoctilo com Urano (Orbe: 1°10', em movimento subsequente)\nMarte em tríoctilo com Urano (Orbe: 1°19', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 1°36', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°38', em movimento subsequente)\n\nTri-óctil de Mercúrio no Ascendente (Orbe: 0°19', em movimento subsequente)\nQuincúncio de Marte no Ascendente (Orbe: 2°09', em movimento subsequente)\nTri-óctil de Netuno no Ascendente (Orbe: 1°51', em movimento subsequente)\nOctil de Mercúrio no Descendente (Orbe: 0°19', em movimento subsequente)\nOctil de Netuno no Descendente (Orbe: 1°51', em movimento subsequente)\nTri-óctil de Sol no Meio do Céu (Orbe: 0°37', em movimento subsequente)\nTri-óctil de Vênus no Meio do Céu (Orbe: 1°30', em movimento subsequente)\nTri-óctil de Marte no Meio do Céu (Orbe: 0°59', em movimento subsequente)\nSextil de Saturno no Meio do Céu (Orbe: 1°56', em movimento subsequente)\nConjunção do Meio do Céu com Urano (Orbe: 0°20', em movimento subsequente)\nSextil de Netuno no Meio do Céu (Orbe: 1°18', em movimento subsequente)\nFundo do Céu Sol em octil (Orbe: 0°37', Separando)\nIC em octil com Vênus (Orbe: 1°30', Separando)\nIC em octil com Marte (Orbe: 0°59', Aplicando)\nIC em trígono com Saturno (Orbe: 1°56', Separando)\nIC em oposição a Urano (Orbe: 0°20', Separando)\nIC em trígono com Netuno (Orbe: 1°18', Aplicando)\nNodo Norte em sextil com o Sol (Orbe: 0°32', Separando)\nNodo Norte em sextil com Vênus (Orbe: 0°20', Aplicando)\nNodo Norte em sextil com Marte (Orbe: 2°09', Separando)\nLilith em octil com Marte (Orbe: 2°15', Aplicando)\nLilith em trígono com Netuno (Orbe: 1°56', Separando)\nLilith em sextil com Plutão (Orbe: 1°18', Aplicando)\nQuíron em quadratura com Júpiter (Orbe: 1°30', separando)\nFortuna em trí-óctil com a Lua (Orbe: 0°25', separando)\nFortuna em quincúncio com Júpiter (Orbe: 1°06', separando)\nFortuna em sextil com Quíron (Orbe: 0°23', aplicando)\nVértice em sextil com o Sol (Orbe: 1°05', aplicando)\nVértice em sextil com Vênus (Orbe: 0°12', aplicando)\nVértice em sextil com Marte (Orbe: 2°42', aplicando)\nVértice em conjunção com o Nodo (Orbe: 0°33', aplicando)",
    jogoGerado: [4, 15, 24, 2, 6, 23, 8, 1, 5, 9, 10, 20, 25, 17, 16],
    resultado: [1, 2, 4, 5, 6, 8, 9, 10, 12, 16, 18, 20, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3578", concurso: "3578", data: "03/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 13°37', na 5ª Casa;\nLua em Câncer 21°38', na 12ª Casa;\nMercúrio em Capricórnio 3°15', na 5ª Casa;\nVênus em Capricórnio 12°58', na 5ª Casa;\nMarte em Capricórnio 14°59', na 5ª Casa;\nJúpiter em Câncer 20°57', retrógrado, na 12ª Casa;\nSaturno em Peixes 26°20', na 8ª Casa;\nUrano em Touro 27°52', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°32', na 8ª Casa;\nPlutão em Aquário 2°48', na 6ª Casa;\nNodo Norte em Peixes 12°00', retrógrado, na 7ª Casa;\nLilith em Sagitário 1°35', na 4ª Casa;\nQuíron em Áries 22°35', na 8ª Casa;\nFortuna em Aquário 9°32', na 6ª Casa,\nVértice em Peixes 12°02', na 7ª Casa,\nAscendente em Leão 17°32',\nMeio do Céu em Touro 29°10'\n\n1ª Casa em Leão 17°32'\n2ª Casa em Virgem 26°03'\n3ª Casa em Escorpião 1°48'\n4ª Casa em Escorpião 29°10'\n5ª Casa em Sagitário 22°17'\n6ª Casa em Capricórnio 16°37'\n7ª Casa em Aquário 17°32'\n8ª Casa em Peixes 26°03'\n9ª Casa em Touro 1°48'\n10ª Casa em Touro 29°10'\n11ª Casa em Gêmeos 22°17'\n12ª Casa em Câncer 16°37'\n\nSol em conjunção com Vênus (Orbe: 0°38', em movimento subsequente)\nSol em conjunção com Marte (Orbe: 1°21', em movimento subsequente)\nSol em tríoctilo com Urano (Orbe: 0°45', em movimento subsequente)\nLua em conjunção com Júpiter (Orbe: 0°40', em movimento subsequente)\nVênus em conjunção com Marte (Orbe: 2°00', em movimento subsequente)\nVênus em tríoctilo com Urano (Orbe: 0°06', em movimento subsequente)\nMarte em tríoctilo com Urano (Orbe: 2°07', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 1°31', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°40', em movimento subsequente)\n\nTri-óctil de Mercúrio no Ascendente (Orbe: 0°42', em movimento)\nQuincúncio de Marte no Ascendente (Orbe: 2°33', em movimento)\nOctil de Mercúrio no Descendente (Orbe: 0°42', em movimento)\nTri-óctil de Sol no Meio do Céu (Orbe: 0°33', em movimento)\nTri-óctil de Vênus no Meio do Céu (Orbe: 1°12', em movimento)\nTri-óctil de Marte no Meio do Céu (Orbe: 0°48', em movimento)\nSextil de Saturno no Meio do Céu (Orbe: 2°50', em movimento)\nConjunção do Meio do Céu com Urano (Orbe: 1°18', em movimento)\nSextil de Netuno no Meio do Céu (Orbe: 0°21', em movimento)\nOposição de Lilith no Meio do Céu (Orbe: 2°24', em movimento)\nOctil de Sol no Fundo do Céu (Orbe: 0°33', em movimento)\nOctil de Vênus no Fundo do Céu (Orbe: 1°12', Separando)\nIC Octil Marte (Orb: 0°48', Aplicando)\nIC Trígono Saturno (Orb: 2°50', Separando)\nIC Oposição Urano (Orb: 1°18', Separando)\nIC Trígono Netuno (Orb: 0°21', Aplicando)\nIC Conjunção Lilith (Orb: 2°24', Aplicando)\nNodo Norte Sextil Sol (Orb: 1°36', Separando)\nNodo Norte Sextil Vênus (Orb: 0°58', Separando)\nNodo Norte Sextil Marte (Orb: 2°58', Separando)\nLilith Octil Sol (Orb: 2°57', Aplicando)\nLilith Octil Marte (Orb: 1°36', Aplicando)\nLilith Trígono Netuno (Orb: 2°02', Separando)\nLilith Sextil Plutão (Orbe: 1°13', em formação)\nQuíron em quadratura com a Lua (Orbe: 0°57', em formação)\nQuíron em quadratura com Júpiter (Orbe: 1°38', em separação)\nFortuna em octil com Saturno (Orbe: 1°48', em formação)\nVértice em sextil com o Sol (Orbe: 1°35', em formação)\nVértice em sextil com Vênus (Orbe: 0°56', em formação)\nVértice em sextil com Marte (Orbe: 2°56', em formação)\nVértice em conjunção com o Nodo (Orbe: 0°01', em separação)",
    jogoGerado: [15, 2, 4, 6, 5, 23, 1, 3, 9, 10, 17, 20, 22, 19, 24],
    resultado: [2, 3, 4, 5, 6, 7, 9, 10, 14, 17, 19, 20, 22, 23, 24],
    obs: "",
  },
  {
    id: "h200_3579", concurso: "3579", data: "05/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 15°39', na 5ª Casa;\nLua em Leão 20°18', na 1ª Casa;\nMercúrio em Capricórnio 6°21', na 5ª Casa;\nVênus em Capricórnio 15°29', na 5ª Casa;\nMarte em Capricórnio 16°31', na 5ª Casa;\nJúpiter em Câncer 20°41', retrógrado, na 12ª Casa;\nSaturno em Peixes 26°28', na 7ª Casa;\nUrano em Touro 27°49', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°34', na 8ª Casa;\nPlutão em Aquário 2°52', na 6ª Casa;\nNodo Norte em Peixes 11°54', retrógrado, na 7ª Casa;\nLilith em Sagitário 1°48', na 4ª Casa;\nQuíron em Áries 22°36', na 8ª Casa;\nFortuna em Capricórnio 15°15', na 5ª Casa,\nVértice em Peixes 13°06', na 7ª Casa,\nAscendente em Leão 19°53',\nMeio do Céu em Gêmeos 1°04'\n\n1ª Casa em Leão 19°53'\n2ª Casa em Virgem 28°37'\n3ª Casa em Escorpião 4°02'\n4ª Casa em Sagitário 1°04'\n5ª Casa em Sagitário 24°04'\n6ª Casa em Capricórnio 18°33'\n7ª Casa em Aquário 19°53'\n8ª Casa em Peixes 28°37'\n9ª Casa em Touro 4°02'\n10ª Casa em Gêmeos 1°04'\n11ª Casa em Gêmeos 24°04'\n12ª Casa em Câncer 18°33'\n\nSol em conjunção com Vênus (Orbe: 0°09', em movimento subsequente)\nSol em conjunção com Marte (Orbe: 0°51', em movimento subsequente)\nSol em tríoctilo com Urano (Orbe: 2°50', em movimento subsequente)\nLua em tríoctilo com Mercúrio (Orbe: 1°02', em movimento subsequente)\nVênus em conjunção com Marte (Orbe: 1°01', em movimento subsequente)\nVênus em tríoctilo com Urano (Orbe: 2°40', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 1°20', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°45', em movimento subsequente)\n\nLua em conjunção com o Ascendente (Orbe: 0°24', em movimento subsequente)\nMercúrio em trígono com o Ascendente (Orbe: 1°27', em movimento subsequente)\nQuíron em trígono com o Ascendente (Orbe: 2°42', em movimento subsequente)\nLua em oposição ao Descendente (Orbe: 0°24', em movimento subsequente)\nMercúrio em octil com o Descendente (Orbe: 1°27', em movimento subsequente)\nJúpiter em quincúncio com o Descendente (Orbe: 0°47', em movimento subsequente)\nQuíron em sextil com o Descendente (Orbe: 2°42', em movimento subsequente)\nSol em trígono com o Meio do Céu (Orbe: 0°24', em movimento subsequente)\nVênus em trígono com o Meio do Céu (Orbe: 0°34', em movimento subsequente)\nMarte em trígono com o Meio do Céu (Orbe: 0°27', em movimento subsequente)\nNetuno em sextil com o Meio do Céu (Orbe: 1°29', em movimento subsequente)\nPlutão em trígono com o Meio do Céu (Orbe: 1°47', em aplicação)\nMC em oposição a Lilith (Orbe: 0°44', em aplicação)\nIC em octil com o Sol (Orbe: 0°24', em separação)\nIC em octil com Vênus (Orbe: 0°34', em separação)\nIC em octil com Marte (Orbe: 0°27', em aplicação)\nIC em trígono com Netuno (Orbe: 1°29', em separação)\nIC em sextil com Plutão (Orbe: 1°47', em aplicação)\nIC em conjunção com Lilith (Orbe: 0°44', em aplicação)\nLilith em octil com o Sol (Orbe: 1°09', em aplicação)\nLilith em octil com Vênus (Orbe: 1°19', em aplicação)\nLilith em octil com Marte (Orbe: 0°17', em aplicação)\nLilith em trígono com Netuno (Orbe: 2°14', em separação)\nLilith em sextil com Plutão (Orbe: 1°03', em aplicação)\nQuíron em trígono com a Lua (Orbe: 2°17', em aplicação)\nQuíron em quadratura com Júpiter (Orbe: 1°54', em separação)\nFortuna em conjunção com o Sol (Orbe: 0°24', em aplicação)\nFortuna em conjunção com Vênus (Orbe: 0°14', em aplicação)\nFortuna em conjunção com Marte (Orbe: 1°16', em aplicação)\nFortuna em trígono-óctil com Urano (Orbe: 2°26', em separação)\nFortuna em octil com Lilith (Orbe: 1°33', em aplicação)\nFortuna em trígono-óctil com o Meio do Céu (Orbe: 0°49', em aplicação)\nFortuna em octil com o Fundo do Céu (Orbe: 0°49', em aplicação)\nVértice em sextil com o Sol (Orbe: 2°33', em aplicação)\nVértice em sextil com Vênus (Orbe: 2°23', em aplicação)\nVértice em conjunção com o Nodo (Orbe: 1°11', Separando)",
    jogoGerado: [4, 3, 15, 2, 23, 25, 5, 9, 10, 13, 21, 8, 11, 17, 6],
    resultado: [1, 2, 3, 4, 8, 10, 11, 13, 15, 17, 19, 20, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3580", concurso: "3580", data: "06/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 16°40', na 5ª Casa;\nLua em Virgem 3°58', na 1ª Casa;\nMercúrio em Capricórnio 7°54', na 5ª Casa;\nVênus em Capricórnio 16°45', na 5ª Casa;\nMarte em Capricórnio 17°17', na 5ª Casa;\nJúpiter em Câncer 20°33', retrógrado, na 12ª Casa;\nSaturno em Peixes 26°32', na 7ª Casa;\nUrano em Touro 27°47', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°35', na 7ª Casa;\nPlutão em Aquário 2°54', na 6ª Casa;\nNodo Norte em Peixes 11°51', retrógrado, na 7ª Casa;\nLilith em Sagitário 1°55', na 3ª Casa;\nQuíron em Áries 22°36', na 8ª Casa;\nFortuna em Capricórnio 3°47', na 5ª Casa,\nVértice em Peixes 13°38', na 7ª Casa,\nAscendente em Leão 21°04',\nMeio do Céu em Gêmeos 2°01'\n\n1ª Casa em Leão 21°04'\n2ª Casa em Virgem 29°54'\n3ª Casa em Escorpião 5°09'\n4ª Casa em Sagitário 2°01'\n5ª Casa em Sagitário 24°58'\n6ª Casa em Capricórnio 19°32'\n7ª Casa em Aquário 21°04'\n8ª Casa em Peixes 29°54'\n9ª Casa em Touro 5°09'\n10ª Casa em Gêmeos 2°01'\n11ª Casa em Gêmeos 24°58'\n12ª Casa em Câncer 19°32'\n\nSol em Tri-Óctil com a Lua (Orbe: 2°17', Separando)\nSol em Conjunção com Vênus (Orbe: 0°04', Separando)\nSol em Conjunção com Marte (Orbe: 0°36', Aproximando)\nLua em Tri-Óctil com Vênus (Orbe: 2°12', Separando)\nLua em Tri-Óctil com Marte (Orbe: 1°40', Separando)\nLua em Octil com Júpiter (Orbe: 1°35', Aproximando)\nLua em Quincúncio com Plutão (Orbe: 1°03', Separando)\nVênus em Conjunção com Marte (Orbe: 0°32', Aproximando)\nSaturno em Sextil com Urano (Orbe: 1°15', Aproximando)\nUrano em Sextil com Netuno (Orbe: 1°47', Separando)\n\nTri-óctil de Mercúrio no Ascendente (Orbe: 1°49', em movimento)\nTrígono de Quíron no Ascendente (Orbe: 1°31', em movimento)\nOctil de Mercúrio no Descendente (Orbe: 1°49', em movimento)\nQuincúncio de Júpiter no Descendente (Orbe: 0°31', em movimento)\nSextil de Quíron no Descendente (Orbe: 1°31', em movimento)\nTri-óctil de Sol no Meio do Céu (Orbe: 0°20', em movimento)\nQuadratura da Lua no Meio do Céu (Orbe: 1°56', em movimento)\nTri-óctil de Vênus no Meio do Céu (Orbe: 0°15', em movimento)\nTri-óctil de Marte no Meio do Céu (Orbe: 0°16', em movimento)\nSextil de Netuno no Meio do Céu (Orbe: 2°25', em movimento)\nTrígono de Plutão no Meio do Céu (Orbe: 0°53', em movimento)\nOposição de Lilith no Meio do Céu (Orbe: 0°05' , em movimento) Separando)\nIC em Octil com o Sol (Orbe: 0°20', Separando)\nIC em Quadratura com a Lua (Orbe: 1°56', Aplicando)\nIC em Octil com Vênus (Orbe: 0°15', Separando)\nIC em Octil com Marte (Orbe: 0°16', Aplicando)\nIC em Trígono com Netuno (Orbe: 2°25', Separando)\nIC em Sextil com Plutão (Orbe: 0°53', Aplicando)\nIC em Conjunção com Lilith (Orbe: 0°05', Separando)\nLilith em Octil com o Sol (Orbe: 0°14', Aplicando)\nLilith em Quadratura com a Lua (Orbe: 2°02', Separando)\nLilith em Octil com Vênus (Orbe: 0°10', Aplicando)\nLilith em Octil com Marte (Orbe: 0°22', Separando)\nLilith em Trígono com Netuno (Orbe: 2°20', Separando)\nLilith em sextil com Plutão (Orbe: 0°58', em movimento)\nQuíron em quadratura com Júpiter (Orbe: 2°02', em movimento)\nFortuna em trígono com a Lua (Orbe: 0°10', em movimento)\nFortuna em trígono com o Ascendente (Orbe: 2°17', em movimento)\nFortuna em quincúncio com o Meio do Céu (Orbe: 1°46', em movimento)\nFortuna em octil com o Descendente (Orbe: 2°17', em movimento)\nVértice em conjunção com o Nodo (Orbe: 1°46', em movimento)",
    jogoGerado: [15, 4, 6, 23, 25, 1, 5, 20, 10, 9, 13, 21, 8, 19, 7],
    resultado: [1, 4, 5, 6, 8, 9, 12, 13, 15, 16, 19, 20, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3581", concurso: "3581", data: "07/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 17°42', na 5ª Casa;\nLua em Virgem 17°10', na 1ª Casa;\nMercúrio em Capricórnio 9°28', na 5ª Casa;\nVênus em Capricórnio 18°00', na 5ª Casa;\nMarte em Capricórnio 18°04', na 5ª Casa;\nJúpiter em Câncer 20°25', retrógrado, na 11ª Casa;\nSaturno em Peixes 26°36', na 7ª Casa;\nUrano em Touro 27°46', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°36', na 7ª Casa;\nPlutão em Aquário 2°55', na 6ª Casa;\nNodo Norte em Peixes 11°48', retrógrado, na 7ª Casa;\nLilith em Sagitário 2°02', na 3ª Casa;\nQuíron em Áries 22°36', na 8ª Casa;\nFortuna em Sagitário 22°48', na 4ª Casa,\nVértice em Peixes 14°10', na 7ª Casa,\nAscendente em Leão 22°16',\nMeio do Céu em Gêmeos 2°57'\n\n1ª Casa em Leão 22°16'\n2ª Casa em Libra 1°11'\n3ª Casa em Escorpião 6°15'\n4ª Casa em Sagitário 2°57'\n5ª Casa em Sagitário 25°52'\n6ª Casa em Capricórnio 20°31'\n7ª Casa em Aquário 22°16'\n8ª Casa em Áries 1°11'\n9ª Casa em Touro 6°15'\n10ª Casa em Gêmeos 2°57'\n11ª Casa em Gêmeos 25°52'\n12ª Casa em Câncer 20°31'\n\nSol em trígono com a Lua (Orbe: 0°31', em movimento subsequente)\nSol em conjunção com Vênus (Orbe: 0°18', em movimento subsequente)\nSol em conjunção com Marte (Orbe: 0°22', em movimento subsequente)\nSol em oposição a Júpiter (Orbe: 2°43', em movimento subsequente)\nLua em trígono com Vênus (Orbe: 0°50', em movimento subsequente)\nLua em trígono com Marte (Orbe: 0°54', em movimento subsequente)\nLua em trígono com Plutão (Orbe: 0°45', em movimento subsequente)\nVênus em conjunção com Marte (Orbe: 0°03', em movimento subsequente)\nVênus em oposição a Júpiter (Orbe: 2°24', em movimento subsequente)\nMarte em oposição a Júpiter (Orbe: 2°21', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 1°09', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 2°59', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°50', Separando)\n\nTri-óctil Mercúrio no Ascendente (Orbe: 2°12', em movimento)\nTrígono Quíron no Ascendente (Orbe: 0°20', em movimento)\nOctil Mercúrio no Descendente (Orbe: 2°12', em movimento)\nQuincúncio Júpiter no Descendente (Orbe: 1°50', em movimento)\nSextil Quíron no Descendente (Orbe: 0°20', em movimento)\nTri-óctil Sol no Meio do Céu (Orbe: 0°15', em movimento)\nTri-óctil Vênus no Meio do Céu (Orbe: 0°03', em movimento)\nTri-óctil Marte no Meio do Céu (Orbe: 0°06', em movimento)\nOctil Júpiter no Meio do Céu (Orbe: 2°28', em movimento)\nTrígono Plutão no Meio do Céu (Orbe: 0°01', em movimento)\nOposição Lilith no Meio do Céu (Orbe: 0°55', em movimento)\nOctil Sol no Fundo do Céu (Orbe: 0°15', Separando)\nIC Octil Vênus (Orbe: 0°03', Aplicando)\nIC Octil Marte (Orbe: 0°06', Aplicando)\nIC Tri-Octil Júpiter (Orbe: 2°28', Aplicando)\nIC Sextil Plutão (Orbe: 0°01', Separando)\nIC Conjunção Lilith (Orbe: 0°55', Separando)\nNodo Norte Sextil Mercúrio (Orbe: 2°19', Aplicando)\nLilith Octil Sol (Orbe: 0°39', Separando)\nLilith Octil Vênus (Orbe: 0°58', Separando)\nLilith Octil Marte (Orbe: 1°01', Separando)\nLilith Trígono Netuno (Orbe: 2°25', Separando)\nLilith Sextil Plutão (Orbe: 0°53', Aplicando)\nQuíron Quadratura Júpiter (Orbe:\nFortuna em Quincúncio com Júpiter (Orbe: 2° 22', Separando)\nFortuna em Trígono com Quíron (Orbe: 0°11', Separando)\nFortuna em Trígono com o Ascendente (Orbe: 0°31', Separando)\nFortuna em Sextil com o Descendente (Orbe: 0°31', Separando)\nVértice em Conjunção com o Nodo (Orbe: 2°22', Separando)",
    jogoGerado: [2, 15, 20, 4, 6, 24, 23, 5, 10, 13, 21, 9, 25, 7, 8],
    resultado: [2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 16, 17, 20, 22, 24],
    obs: "",
  },
  {
    id: "h200_3582", concurso: "3582", data: "08/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 18°43', na 5ª Casa;\nLua em Virgem 29°56', na 1ª Casa;\nMercúrio em Capricórnio 11°02', na 5ª Casa;\nVênus em Capricórnio 19°16', na 5ª Casa;\nMarte em Capricórnio 18°50', na 5ª Casa;\nJúpiter em Câncer 20°17', retrógrado, na 11ª Casa;\nSaturno em Peixes 26°40', na 7ª Casa;\nUrano em Touro 27°45', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°37', na 7ª Casa;\nPlutão em Aquário 2°57', na 6ª Casa;\nNodo Norte em Peixes 11°44', retrógrado, na 7ª Casa;\nLilith em Sagitário 2°09', na 3ª Casa;\nQuíron em Áries 22°37', na 8ª Casa\nda Fortuna. em Sagitário 12°14', no\nVértice da 4ª Casa em Peixes 14°41', no\nAscendente da 7ª Casa em Leão 23°28',\nMeio do Céu em Gêmeos 3°53'\n\n1ª Casa em Leão 23°28'\n2ª Casa em Libra 2°28'\n3ª Casa em Escorpião 7°21'\n4ª Casa em Sagitário 3°53'\n5ª Casa em Sagitário 26°46'\n6ª Casa em Capricórnio 21°30'\n7ª Casa em Aquário 23°28'\n8ª Casa em Áries 2°28'\n9ª Casa em Touro 7°21'\n10ª Casa em Gêmeos 3°53'\n11ª Casa em Gêmeos 26°46'\n12ª Casa em Câncer 21°30'\n\nSol em conjunção com Vênus (Orbe: 0°33', separando)\nSol em conjunção com Marte (Orbe: 0°07', aplicando)\nSol em oposição a Júpiter (Orbe: 1°34', aplicando)\nLua em trígono com Urano (Orbe: 2°11', separando)\nLua em oposição a Netuno (Orbe: 0°19', separando)\nMercúrio em trígono-óctil com Urano (Orbe: 1°42', aplicando)\nVênus em conjunção com Marte (Orbe: 0°25', separando)\nVênus em oposição a Júpiter (Orbe: 1°01', aplicando)\nMarte em oposição a Júpiter (Orbe: 1°27', aplicando)\nSaturno em sextil com Urano (Orbe: 1°04', aplicando)\nSaturno em conjunção com Netuno (Orbe: 2°56', aplicando)\nUrano em sextil com Netuno (Orbe: 1°52', separando)\n\nTri-óctil do Ascendente com Mercúrio (Orbe: 2°34', em movimento)\nTri-óctil do Ascendente com Quíron (Orbe: 0°51', em movimento)\nOctil do Descendente com Mercúrio (Orbe: 2°34', em movimento)\nSextil do Descendente com Quíron (Orbe: 0°51', em movimento)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°10', em movimento)\nTri-óctil do Meio do Céu com Vênus (Orbe: 0°22', em movimento)\nTri-óctil do Meio do Céu com Marte (Orbe: 0°03', em movimento)\nOctil do Meio do Céu com Júpiter (Orbe: 1°23', em movimento)\nTrígono do Meio do Céu com Plutão (Orbe: 0°55', em movimento)\nOposição do Meio do Céu com Lilith (Orbe: 1°44', em movimento)\nOctil do Fundo do Céu com o Sol (Orbe: 0°10', em movimento)\nOctil do Fundo do Céu com Vênus (Orbe: 0°22', Aplicando)\nIC Octil Marte (Orbe: 0°03', Separando)\nIC Tri-Octil Júpiter (Orbe: 1°23', Aplicando)\nIC Sextil Plutão (Orbe: 0°55', Separando)\nIC Conjunção Lilith (Orbe: 1°44', Separando)\nNodo Norte Sextil Mercúrio (Orbe: 0°41', Aplicando)\nLilith Octil Sol (Orbe: 1°34', Separando)\nLilith Sextil Lua (Orbe: 2°12', Aplicando)\nLilith Octil Vênus (Orbe: 2°07', Separando)\nLilith Octil Marte (Orbe: 1°41', Separando)\nLilith Trígono Netuno (Orbe: 2°31', Separando)\nLilith Sextil Plutão (Orbe: 0°48', Aplicando)\nQuíron Quadratura Júpiter (Orbe:\nNó Quadrado da Fortuna (Orbe: 0°29' , Separante )\nNó de Conjunção do Vértice (Orbe: 2°57', Separante)",
    jogoGerado: [2, 12, 15, 4, 9, 23, 5, 6, 7, 10, 13, 24, 25, 21, 8],
    resultado: [2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 18, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3583", concurso: "3583", data: "09/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 19°44', na 5ª Casa;\nLua em Libra 12°22', na 2ª Casa;\nMercúrio em Capricórnio 12°37', na 5ª Casa;\nVênus em Capricórnio 20°31', na 5ª Casa;\nMarte em Capricórnio 19°36', na 5ª Casa;\nJúpiter em Câncer 20°09', retrógrado, na 11ª Casa;\nSaturno em Peixes 26°45', na 7ª Casa;\nUrano em Touro 27°43', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°38', na 7ª Casa;\nPlutão em Aquário 2°59', na 6ª Casa;\nNodo Norte em Peixes 11°41', retrógrado, na 7ª Casa;\nLilith em Sagitário 2°15', na 3ª Casa;\nQuíron em Áries 22°37', na 8ª Casa;\nFortuna em Sagitário 2°02', na 3ª Casa,\nVértice em Peixes 15°13', na 7ª Casa,\nAscendente em Leão 24°40',\nMeio do Céu em Gêmeos 4°50'\n\n1ª Casa em Leão 24°40'\n2ª Casa em Libra 3°45'\n3ª Casa em Escorpião 8°26'\n4ª Casa em Sagitário 4°50'\n5ª Casa em Sagitário 27°40'\n6ª Casa em Capricórnio 22°30'\n7ª Casa em Aquário 24°40'\n8ª Casa em Áries 3°45'\n9ª Casa em Touro 8°26'\n10ª Casa em Gêmeos 4°50'\n11ª Casa em Gêmeos 27°40'\n12ª Casa em Câncer 22°30'\n\nConjunção do Sol com Vênus (Orbe: 0°47', Separando)\nConjunção do Sol com Marte (Orbe: 0°07', Separando)\nOposição do Sol com Júpiter (Orbe: 0°25', Aproximando)\nQuadratura da Lua com Mercúrio (Orbe: 0°14', Aproximando)\nTri-óctilo da Lua com Urano (Orbe: 0°21', Aproximando)\nTri-óctilo de Mercúrio com Urano (Orbe: 0°06', Aproximando)\nConjunção de Vênus com Marte (Orbe: 0°55', Separando)\nOposição de Vênus com Júpiter (Orbe: 0°22', Separando)\nOposição de Marte com Júpiter (Orbe: 0°32', Aproximando)\nSextil de Saturno com Urano (Orbe: 0°58', Aproximando)\nConjunção de Saturno com Netuno (Orbe: 2°53', Aproximando)\nSextil de Urano com Netuno (Orbe: 1°54', Separando)\n\nLua em Octil no Ascendente (Orbe: 2°41', em movimento)\nMercúrio em Tri-Octil no Ascendente (Orbe: 2°56', em movimento)\nSaturno em Quincúncio no Ascendente (Orbe: 2°04', em movimento)\nQuíron em Trígono no Ascendente (Orbe: 2°03', em movimento)\nLua em Tri-Octil no Descendente (Orbe: 2°41', em movimento)\nMercúrio em Octil no Descendente (Orbe: 2°56', em movimento)\nQuíron em Sextil no Descendente (Orbe: 2°03', em movimento)\nSol em Tri-Octil no Meio do Céu (Orbe: 0°05', em movimento)\nVênus em Tri-Octil no Meio do Céu (Orbe: 0°41', em movimento)\nMarte em Tri-Octil no Meio do Céu (Orbe: 0°13', em movimento)\nJúpiter em Octil no Meio do Céu (Orbe: 0°19', em movimento)\nTrígono no Meio do Céu com Plutão (Orbe: 1°50', Separando)\nMC em Oposição a Lilith (Orbe: 2°34', Separando)\nMC em Octil com Quíron (Orbe: 2°47', Aplicando)\nIC em Octil com o Sol (Orbe: 0°05', Separando)\nIC em Octil com Vênus (Orbe: 0°41', Aplicando)\nIC em Octil com Marte (Orbe: 0°13', Separando)\nIC em Tri-Octil com Júpiter (Orbe: 0°19', Aplicando)\nIC em Sextil com Plutão (Orbe: 1°50', Separando)\nIC em Conjunção com Lilith (Orbe: 2°34', Separando)\nIC em Tri-Octil com Quíron (Orbe: 2°47', Aplicando)\nNodo Norte em Quincúncio com a Lua (Orbe: 0°41', Separando)\nNodo Norte em Sextil com Mercúrio (Orbe: 0°55', Separando)\nLilith Octil Sol (Orbe: 2°28', Separando)\nLilith Octil Marte (Orbe: 2°20', Separando)\nLilith Tri-Octil Júpiter (Orbe: 2°53', Aplicando)\nLilith Trígono Netuno (Orbe: 2°37', Separando)\nLilith Sextil Plutão (Orbe: 0°43', Aplicando)\nQuíron Quadratura Sol (Orbe: 2°53', Aplicando)\nQuíron Quadratura Vênus (Orbe: 2°05', Aplicando)\nQuíron Quadratura Júpiter (Orbe: 2°28', Separando)\nFortuna Octil Sol (Orbe: 2°41', Aplicando)\nFortuna Octil Marte (Orbe: 2°34', Aplicando)\nFortuna Trígono Netuno (Orbe: 2°24', Separando)\nFortuna Sextil Plutão (Orbe: 0°57', Aplicando)\nFortuna Conjunção Lilith (Orbe: 0°13', em movimento)\nFortuna em oposição ao Meio do Céu (Orbe: 2°47', em movimento)\nFortuna em trígono com o Vértice (Orbe: 2°02', em movimento de separação)\nFortuna em conjunção com o Fundo do Céu (Orbe: 2°47', em movimento)\nVértice em quincúncio com a Lua (Orbe: 2°51', em movimento de separação)\nVértice em sextil com Mercúrio (Orbe: 2°36', em movimento de separação)\nVértice em octil com Plutão (Orbe: 2°45', em movimento)",
    jogoGerado: [14, 15, 25, 2, 4, 6, 23, 3, 8, 10, 22, 24, 9, 5, 11],
    resultado: [2, 3, 4, 6, 9, 10, 12, 13, 14, 15, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3584", concurso: "3584", data: "10/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 20°45', na 5ª Casa;\nLua em Libra 24°32', na 2ª Casa;\nMercúrio em Capricórnio 14°12', na 5ª Casa;\nVênus em Capricórnio 21°47', na 5ª Casa;\nMarte em Capricórnio 20°23', na 5ª Casa;\nJúpiter em Câncer 20°01', retrógrado, na 11ª Casa;\nSaturno em Peixes 26°49', na 7ª Casa;\nUrano em Touro 27°42', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°39', na 7ª Casa;\nPlutão em Aquário 3°01', na 6ª Casa;\nNodo Norte em Peixes 11°38', retrógrado, na 7ª Casa;\nLilith em Sagitário 2°22', na 3ª Casa;\nQuíron em Áries 22°37', na 8ª Casa;\nFortuna em Escorpião 22°07', na 3ª Casa,\nVértice em Peixes 15°45', na 7ª Casa,\nAscendente em Leão 25°53',\nMeio do Céu em Gêmeos 5°46'\n\n1ª Casa em Leão 25°53'\n2ª Casa em Libra 5°02'\n3ª Casa em Escorpião 9°32'\n4ª Casa em Sagitário 5°46'\n5ª Casa em Sagitário 28°34'\n6ª Casa em Capricórnio 23°30'\n7ª Casa em Aquário 25°53'\n8ª Casa em Áries 5°02'\n9ª Casa em Touro 9°32'\n10ª Casa em Gêmeos 5°46'\n11ª Casa em Gêmeos 28°34'\n12ª Casa em Câncer 23°30'\n\nConjunção do Sol com Vênus (Orbe: 1°01', Separando)\nConjunção do Sol com Marte (Orbe: 0°22', Separando)\nOposição do Sol com Júpiter (Orbe: 0°44', Separando)\nQuadratura da Lua com Vênus (Orbe: 2°44', Separando)\nQuincúncio da Lua com Saturno (Orbe: 2°17', Aproximando)\nTri-óctilo de Mercúrio com Urano (Orbe: 1°30', Separando)\nConjunção de Vênus com Marte (Orbe: 1°24', Separando)\nOposição de Vênus com Júpiter (Orbe: 1°45', Separando)\nOposição de Marte com Júpiter (Orbe: 0°21', Separando)\nSextil de Saturno com Urano (Orbe: 0°53', Aproximando)\nConjunção de Saturno com Netuno (Orbe: 2°49', Aproximando)\nSextil de Urano com Netuno (Orbe: 1°56', Separando)\n\nSextil do Ascendente com a Lua (Orbe: 1°21', Separando)\nQuincúncio do Ascendente com Saturno (Orbe: 0°55', Aplicando)\nQuadratura do Ascendente com Urano (Orbe: 1°48', Aplicando)\nTrígono do Descendente com a Lua (Orbe: 1°21', Separando)\nQuadratura do Descendente com Urano (Orbe: 1°48', Aplicando)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°00', Separando)\nTri-óctil do Meio do Céu com Vênus (Orbe: 1°01', Aplicando)\nTri-óctil do Meio do Céu com Marte (Orbe: 0°23', Separando) Octil do Meio do Céu\ncom Júpiter (Orbe: 0°44', Separando)\nTrígono do Meio do Céu com Plutão (Orbe: 2°44', Separando)\nOctil do Meio do Céu com Quíron (Orbe: 1°51', Aplicando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°00', Separando)\nIC Octil Vênus (Orbe: 1°01', Aplicando)\nIC Octil Marte (Orbe: 0°23', Separando)\nIC Tri-Octil Júpiter (Orbe: 0°44', Separando)\nIC Sextil Plutão (Orbe: 2°44', Separando)\nIC Tri-Octil Quíron (Orbe: 1°51', Aplicando)\nNodo Norte Tri-Octil Lua (Orbe: 2°06', Aplicando)\nNodo Norte Sextil Mercúrio (Orbe: 2°34', Separando)\nLilith Tri-Octil Júpiter (Orbe: 2°38', Aplicando)\nLilith Trígono Netuno (Orbe: 2°43', Separando)\nLilith Sextil Plutão (Orbe: 0°39', Aplicando)\nQuíron Quadratura Sol (Orbe: 1°52', Aplicando)\nQuíron Oposição Lua (Orbe: 1°54', Separando)\nQuíron em quadratura com Vênus (Orbe: 0°50', Aplicando)\nQuíron em quadratura com Marte (Orbe: 2°14', Aplicando)\nQuíron em quadratura com Júpiter (Orbe: 2°36', Separando)\nFortuna em sextil com o Sol (Orbe: 1°21', Separando)\nFortuna em sextil com Vênus (Orbe: 0°19', Separando)\nFortuna em sextil com Marte (Orbe: 1°43', Separando)\nFortuna em trígono com Júpiter (Orbe: 2°05', Separando)\nFortuna em quincúncio com Quíron (Orbe: 0°30', Aplicando)\nVértice em sextil com Mercúrio (Orbe: 1°33', Separando)\nVértice em octil com Plutão (Orbe: 2°15', Aplicando)",
    jogoGerado: [15, 2, 4, 23, 9, 17, 20, 25, 13, 10, 8, 16, 24, 6, 11],
    resultado: [1, 2, 4, 7, 8, 9, 13, 15, 16, 17, 18, 20, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3585", concurso: "3585", data: "12/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 22°47', na 5ª Casa;\nLua em Escorpião 18°22', na 3ª Casa;\nMercúrio em Capricórnio 17°24', na 5ª Casa;\nVênus em Capricórnio 24°18', na 5ª Casa;\nMarte em Capricórnio 21°55', na 5ª Casa;\nJúpiter em Câncer 19°45', retrógrado, na 11ª Casa;\nSaturno em Peixes 26°58', na 7ª Casa;\nUrano em Touro 27°40', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°41', na 7ª Casa;\nPlutão em Aquário 3°05', na 6ª Casa;\nNodo Norte em Peixes 11°32', retrógrado, na 7ª Casa;\nLilith em Sagitário 2°35', na 3ª Casa;\nQuíron em Áries 22°38', na 8ª Casa;\nFortuna em Escorpião 2°45', na 2ª Casa,\nVértice em Peixes 16°50', na 7ª Casa,\nAscendente em Leão 28°20',\nMeio do Céu em Gêmeos 7°37'\n\n1ª Casa em Leão 28°20'\n2ª Casa em Libra 7°35'\n3ª Casa em Escorpião 11°42'\n4ª Casa em Sagitário 7°37'\n5ª Casa em Capricórnio 0°23'\n6ª Casa em Capricórnio 25°31'\n7ª Casa em Aquário 28°20'\n8ª Casa em Áries 7°35'\n9ª Casa em Touro 11°42'\n10ª Casa em Gêmeos 7°37'\n11ª Casa em Câncer 0°23'\n12ª Casa em Câncer 25°31'\n\nSol em conjunção com Vênus (Orbe: 1°30', separando)\nSol em conjunção com Marte (Orbe: 0°51', separando)\nLua em sextil com Mercúrio (Orbe: 0°58', separando)\nLua em trígono com Júpiter (Orbe: 1°22', aplicando)\nMercúrio em oposição a Júpiter (Orbe: 2°20', aplicando)\nVênus em conjunção com Marte (Orbe: 2°22', separando)\nVênus em sextil com Saturno (Orbe: 2°40', aplicando)\nMarte em oposição a Júpiter (Orbe: 2°10', separando)\nSaturno em sextil com Urano (Orbe: 0°41', aplicando)\nSaturno em conjunção com Netuno (Orbe: 2°43', aplicando)\nUrano em sextil com Netuno (Orbe: 2°01', separando)\n\nQuincúncio do Ascendente com Saturno (Orbe: 1°22', Separando)\nQuadratura do Ascendente com Urano (Orbe: 0°40', Separando)\nQuincúncio do Ascendente com Netuno (Orbe: 1°21', Aplicando)\nQuadratura do Descendente com Urano (Orbe: 0°40', Separando)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°09', Aplicando)\nTri-óctil do Meio do Céu com Vênus (Orbe: 1°40', Aplicando)\nTri-óctil do Meio do Céu com Marte (Orbe: 0°41', Separando)\nOctil do Meio do Céu com Júpiter (Orbe: 2°52', Separando) Octil do Meio do Céu\ncom Quíron (Orbe: 0°01', Aplicando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°09', Aplicando)\nOctil do Fundo do Céu com Vênus (Orbe: 1°40', Aplicando)\nOctil do Fundo do Céu com Marte (Orbe: 0°41', Separando)\nIC Tri-Octil Júpiter (Orb: 2°52', Separando)\nIC Tri-Octil Quíron (Orb: 0°01', Aplicando)\nNodo Norte Octil Vênus (Orb: 2°13', Aplicando)\nLilith Octil Mercúrio (Orb: 0°11', Aplicando)\nLilith Tri-Octil Júpiter (Orb: 2°09', Aplicando)\nLilith Trígono Netuno (Orb: 2°54', Separando)\nLilith Sextil Plutão (Orb: 0°29', Aplicando)\nQuíron Quadratura Sol (Orb: 0°08', Separando)\nQuíron Quadratura Vênus (Orb: 1°39', Separando)\nQuíron Quadratura Marte (Orb: 0°43', Aplicando)\nQuíron Quadratura Júpiter (Orb: 2°53', Separando)\nFortuna Quadratura Plutão (Orb: 0°19', em processo de aplicação)\nVértice em Quincúncio com a Fortuna (Orbe: 2°45', em processo de separação)\nVértice em Trígono com a Lua (Orbe: 1°32', em processo de aplicação\n) Vértice em Sextil com Mercúrio (Orbe: 0°34', em processo de aplicação)\nVértice em Trígono com Júpiter (Orbe: 2°55', em processo de aplicação)\nVértice em Octil com Plutão (Orbe: 1°15', em processo de aplicação)",
    jogoGerado: [15, 23, 25, 2, 4, 8, 10, 19, 22, 13, 1, 9, 17, 24, 5],
    resultado: [1, 2, 4, 8, 9, 10, 13, 16, 17, 19, 20, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3586", concurso: "3586", data: "13/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 23°48', na 5ª Casa;\nLua em Sagitário 0°12', na 3ª Casa;\nMercúrio em Capricórnio 19°00', na 5ª Casa;\nVênus em Capricórnio 25°33', na 5ª Casa;\nMarte em Capricórnio 22°42', na 5ª Casa;\nJúpiter em Câncer 19°37', retrógrado, na 11ª Casa;\nSaturno em Peixes 27°03', na 7ª Casa;\nUrano em Touro 27°39', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°42', na 7ª Casa;\nPlutão em Aquário 3°07', na 6ª Casa;\nNodo Norte em Peixes 11°28', retrógrado, na 7ª Casa;\nLilith em Sagitário 2°42', na 3ª Casa;\nQuíron em Áries 22°39', na 8ª Casa.\nFortuna em Libra 23°10',\nVértice na 2ª Casa em Peixes 17°22',\nAscendente na 7ª Casa em Leão 29°34',\nMeio do Céu em Gêmeos 8°33'\n\n1ª Casa em Leão 29°34'\n2ª Casa em Libra 8°52'\n3ª Casa em Escorpião 12°46'\n4ª Casa em Sagitário 8°33'\n5ª Casa em Capricórnio 1°17'\n6ª Casa em Capricórnio 26°32'\n7ª Casa em Aquário 29°34'\n8ª Casa em Áries 8°52'\n9ª Casa em Touro 12°46'\n10ª Casa em Gêmeos 8°33'\n11ª Casa em Câncer 1°17'\n12ª Casa em Câncer 26°32'\n\nSol em conjunção com Vênus (Orbe: 1°44', separando)\nSol em conjunção com Marte (Orbe: 1°06', separando)\nLua em oposição a Urano (Orbe: 2°33', separando)\nLua em trígono com Netuno (Orbe: 0°30', separando)\nLua em sextil com Plutão (Orbe: 2°54', aplicando)\nMercúrio em oposição a Júpiter (Orbe: 0°36', aplicando)\nVênus em conjunção com Marte (Orbe: 2°51', separando)\nVênus em sextil com Saturno (Orbe: 1°29', aplicando)\nVênus em trígono com Urano (Orbe: 2°05', aplicando)\nSaturno em sextil com Urano (Orbe: 0°36', aplicando)\nSaturno em conjunção com Netuno (Orbe: 2°39', aplicando)\nUrano em sextil com Netuno (Orbe: 2°03', separando)\n\nAscendente em quadratura com a Lua (Orbe: 0°38', em movimento)\nAscendente em quincúncio com Saturno (Orbe: 2°31', em movimento de separação)\nAscendente em quadratura com Urano (Orbe: 1°55', em movimento de separação)\nAscendente em quincúncio com Netuno (Orbe: 0°08', em movimento)\nDescendente em quadratura com a Lua (Orbe: 0°38', em movimento) Descendente\nem quadratura com Urano (Orbe: 1°55', em movimento de separação)\nMeio do Céu em tri-óctilo com o Sol (Orbe: 0°15', em movimento)\nMeio do Céu em tri-óctilo com Vênus (Orbe: 2°00', em movimento)\nMeio do Céu em tri-óctilo com Marte (Orbe: 0°51', em movimento de separação)\nMeio do Céu em quadratura com o Nodo Norte (Orbe: 2°55', em movimento) Meio do Céu em\noctil com Quíron (Orbe: 0°53', em movimento de separação)\nFundo do Céu em octil com o Sol (Orbe: 0°15', em aplicação)\nIC Octil Vênus (Orbe: 2°00', em aplicação)\nIC Octil Marte (Orbe: 0°51', em separação)\nIC Quadratura Nodo (Orbe: 2°55', em aplicação)\nIC Tri-Octil Quíron (Orbe: 0°53', em separação)\nNodo Norte Octil Sol (Orbe: 2°40', em aplicação)\nNodo Norte Octil Vênus (Orbe: 0°55', em aplicação)\nLilith em conjunção com a Lua (Orbe: 2°29', em aplicação)\nLilith Octil Mercúrio (Orbe: 1°18', em separação)\nLilith Tri-Octil Júpiter (Orbe: 1°54', em aplicação)\nLilith em trígono com Netuno (Orbe: 2°59', em separação)\nLilith em sextil com Plutão (Orbe: 0°24', em aplicação)\nQuíron em quadratura com o Sol (Orbe:\nQuíron em quadratura com Vênus (Orbe: 2°54', Separando )\nQuíron em quadratura com Marte (Orbe: 0°02', Separando)\nFortuna em quadratura com o Sol (Orbe: 0°38', Aplicando)\nFortuna em quadratura com Vênus (Orbe: 2°23', Aplicando)\nFortuna em quadratura com Marte (Orbe: 0°28', Separando)\nFortuna em oposição a Quíron (Orbe: 0°30', Separando)\nFortuna em trígono com o Meio do Céu (Orbe: 0°22', Aplicando)\nFortuna em octil com o Fundo do Céu (Orbe: 0°22', Aplicando)\nVértice em sextil com Mercúrio (Orbe: 1°38', Aplicando)\nVértice em trígono com Júpiter (Orbe: 2°14', Aplicando)\nVértice em octil com Plutão (Orbe: 0°45', Aplicando)",
    jogoGerado: [14, 15, 22, 2, 8, 10, 1, 17, 24, 25, 9, 6, 12, 18, 19],
    resultado: [1, 2, 6, 10, 11, 12, 13, 14, 15, 17, 18, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3587", concurso: "3587", data: "14/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 24°49', na 5ª Casa;\nLua em Sagitário 12°05', na 4ª Casa;\nMercúrio em Capricórnio 20°37', na 5ª Casa;\nVênus em Capricórnio 26°49', na 5ª Casa;\nMarte em Capricórnio 23°28', na 5ª Casa;\nJúpiter em Câncer 19°29', retrógrado, na 11ª Casa;\nSaturno em Peixes 27°07', na 7ª Casa;\nUrano em Touro 27°38', retrógrado, na 9ª Casa\n; Netuno em Peixes 29°44', na 7ª Casa;\nPlutão em Aquário 3°09', na 6ª Casa;\nNodo Norte em Peixes 11°25', retrógrado, na 7ª Casa;\nLilith em Sagitário 2°49', na 3ª Casa\n; Quíron em Áries 22°40', na 8ª Casa. Fortuna na Casa\nem Libra 13°33', Vértice na 2ª Casa\nem Peixes 17°54', Ascendente na 7ª Casa\nem Virgem 0°49'\nMeio do Céu em Gêmeos 9°29'\n\n1ª Casa em Virgem 0°49'\n2ª Casa em Libra 10°09'\n3ª Casa em Escorpião 13°50'\n4ª Casa em Sagitário 9°29'\n5ª Casa em Capricórnio 2°11'\n6ª Casa em Capricórnio 27°33'\n7ª Casa em Peixes 0°49'\n8ª Casa em Áries 10°09'\n9ª Casa em Touro 13°50'\n10ª Casa em Gêmeos 9°29'\n11ª Casa em Câncer 2°11'\n12ª Casa em Câncer 27°33'\n\nSol em octil com a Lua (Orbe: 2°15', separando)\nSol em conjunção com Vênus (Orbe: 1°59', separando)\nSol em conjunção com Marte (Orbe: 1°21', separando)\nSol em sextil com Saturno (Orbe: 2°17', aplicando)\nSol em trígono com Urano (Orbe: 2°48', aplicando)\nLua em octil com Vênus (Orbe: 0°16', separando)\nMercúrio em conjunção com Marte (Orbe: 2°50', aplicando)\nMercúrio em oposição com Júpiter (Orbe: 1°08', separando)\nVênus em sextil com Saturno (Orbe: 0°18', aplicando)\nVênus em trígono com Urano (Orbe: 0°48', aplicando)\nVênus em sextil com Netuno (Orbe: 2°54', aplicando)\nSaturno em sextil com Urano (Orbe: 0°30', aplicando)\nSaturno em conjunção com Netuno (Orbe: 2°36', em formação)\nUrano em sextil com Netuno (Orbe: 2°05', em formação)\n\nQuincúncio do Ascendente com Netuno (Orbe: 1°05', Separando)\nQuincúncio do Ascendente com Plutão (Orbe: 2°20', Aplicando)\nQuadratura do Ascendente com Lilith (Orbe: 2°00', Aplicando)\nQuadratura do Descendente com Lilith (Orbe: 2°00', Aplicando)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°20', Aplicando)\nOposição do Meio do Céu com a Lua (Orbe: 2°36', Aplicando)\nTri-óctil do Meio do Céu com Vênus (Orbe: 2°20', Aplicando)\nTri-óctil do Meio do Céu com Marte (Orbe: 1°00', Separando)\nQuadratura do Meio do Céu com o Nodo Norte (Orbe: 1°56', Aplicando)\nOctil do Meio do Céu com Quíron (Orbe: 1°48', Separando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°20', Aplicando)\nConjunção do Fundo do Céu com a Lua (Orbe: 2°36',\nIC em Octil com Vênus (Orbe: 2°20', em aplicação) IC\nem Octil com Marte (Orbe: 1°00', em separação)\nIC em Quadratura com o Nodo Norte (Orbe: 1°56', em aplicação)\nIC em Tri-Octil com Quíron (Orbe: 1°48', em separação)\nNodo Norte em Octil com o Sol (Orbe: 1°35', em aplicação)\nNodo Norte em Quadratura com a Lua (Orbe: 0°40', em separação)\nNodo Norte em Octil com Vênus (Orbe: 0°23', em separação)\nNodo Norte em Octil com Marte (Orbe: 2°56', em aplicação)\nLilith em Octil com Mercúrio (Orbe: 2°48', em separação)\nLilith em Tri-Octil com Júpiter (Orbe: 1°39', em aplicação)\nLilith em Sextil com Plutão (Orbe: 0°19', em aplicação)\nQuíron em Quadratura com o Sol (Orbe:\nQuíron em quadratura com Mercúrio (Orbe: 2°09', em separação)\nQuíron em quadratura com Marte (Orbe: 0°48', em separação)\nFortuna em sextil com a Lua (Orbe: 1°27', em separação)\nFortuna em trígono com Urano (Orbe: 0°55', em separação)\nFortuna em quincúncio com o Nodo Norte (Orbe: 2°07', em separação)\nFortuna em octil com o Ascendente (Orbe: 2°15', em separação)\nFortuna em trígono com o Descendente (Orbe: 2°15', em separação)\nVértice em sextil com Mercúrio (Orbe: 2°43', em separação)\nVértice em trígono com Júpiter (Orbe: 1°34', em separação)\nVértice em octil com Plutão (Orbe: 0°15', em separação)",
    jogoGerado: [9, 15, 8, 10, 1, 2, 16, 17, 22, 4, 11, 19, 13, 21, 12],
    resultado: [1, 2, 4, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 22],
    obs: "",
  },
  {
    id: "h200_3588", concurso: "3588", data: "15/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 25°51', na 5ª Casa;\nLua em Sagitário 24°04', na 4ª Casa;\nMercúrio em Capricórnio 22°15', na 5ª Casa;\nVênus em Capricórnio 28°04', na 5ª Casa;\nMarte em Capricórnio 24°15', na 5ª Casa;\nJúpiter em Câncer 19°21', retrógrado, na 11ª Casa;\nSaturno em Peixes 27°12', na 7ª Casa;\nUrano em Touro 27°37', retrógrado, na 9ª Casa\n; Netuno em Peixes 29°45', na 7ª Casa;\nPlutão em Aquário 3°11', na 6ª Casa;\nNodo Norte em Peixes 11°22', retrógrado, na 7ª Casa;\nLilith em Sagitário 2°56', na 3ª Casa\n; Quíron em Áries 22°40', na 8ª Casa. Fortuna na Casa\nem Libra 3°50', Vértice na 1ª Casa\nem Peixes 18°26',\nAscendente na 7ª Casa em Virgem 2°03',\nMeio do Céu em Gêmeos 10°24'\n\n1ª Casa em Virgem 2°03'\n2ª Casa em Libra 11°25'\n3ª Casa em Escorpião 14°54'\n4ª Casa em Sagitário 10°24'\n5ª Casa em Capricórnio 3°06'\n6ª Casa em Capricórnio 28°35'\n7ª Casa em Peixes 2°03'\n8ª Casa em Áries 11°25'\n9ª Casa em Touro 14°54'\n10ª Casa em Gêmeos 10°24'\n11ª Casa em Câncer 3°06'\n12ª Casa em Câncer 28°35'\n\nSol em conjunção com Vênus (Orbe: 2°13', separando)\nSol em conjunção com Marte (Orbe: 1°35', separando)\nSol em sextil com Saturno (Orbe: 1°21', aplicando)\nSol em trígono com Urano (Orbe: 1°45', aplicando)\nMercúrio em conjunção com Marte (Orbe: 2°00', aplicando)\nMercúrio em oposição a Júpiter (Orbe: 2°54', separando)\nVênus em sextil com Saturno (Orbe: 0°52', separando)\nVênus em trígono com Urano (Orbe: 0°27', separando)\nVênus em sextil com Netuno (Orbe: 1°40', aplicando)\nMarte em sextil com Saturno (Orbe: 2°57', aplicando)\nSaturno em sextil com Urano (Orbe: 0°24', aplicando)\nSaturno em conjunção com Netuno (Orbe: 2°32', aplicando)\nUrano em sextil com Netuno (Orbe: 2°08', Separando)\n\nAscendente em Octil com Júpiter (Orbe: 2°17', em movimento)\nAscendente em Quincúncio com Netuno (Orbe: 2°18', em movimento de separação)\nAscendente em Quincúncio com Plutão (Orbe: 1°07', em movimento)\nAscendente em Quadratura com Lilith (Orbe: 0°52', em movimento)\nDescendente em Tri-Octil com Júpiter (Orbe: 2°17', em movimento)\nDescendente em Quadratura com Lilith (Orbe: 0°52', em movimento)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°26', em movimento)\nMeio do Céu em Tri-Octil com Vênus (Orbe: 2°40', em movimento)\nMeio do Céu em Tri-Octil com Marte (Orbe: 1°09', em movimento de separação) Meio do Céu\nem Quadratura com o Nodo Norte (Orbe: 0°58', em movimento) Meio do Céu\nem Octil com Quíron (Orbe: 2°43', em movimento de separação)\nFundo do Céu em Octil com o Sol (Orbe: 0°26', em aplicação)\nIC Octil Vênus (Orbe: 2°40', em aplicação)\nIC Octil Marte (Orbe: 1°09', em separação)\nIC Quadratura Nodo (Orbe: 0°58', em aplicação)\nIC Tri-Octil Quíron (Orbe: 2°43', em separação)\nNodo Norte Octil Sol (Orbe: 0°31', em aplicação)\nNodo Norte Octil Vênus (Orbe: 1°41', em separação)\nNodo Norte Octil Marte (Orbe: 2°07', em aplicação)\nLilith Tri-Octil Júpiter (Orbe: 1°24', em aplicação)\nLilith Sextil Plutão (Orbe: 0°14', em aplicação)\nQuíron Trígono Lua (Orbe: 1°23', em separação)\nQuíron Quadratura Mercúrio (Orbe: 0°25', em aplicação)\nQuíron Quadratura Marte (Orbe:\nFortuna em trígono com Plutão (Orbe: 0°39', Separando )\nFortuna em sextil com Lilith (Orbe: 0°54', Separando)\nFortuna em quincúncio com o Descendente (Orbe: 1°46', Separando)\nTrígono com Júpiter no vértice (Orbe: 0°54', Aplicando)\nOctil com Plutão no vértice (Orbe: 0°15', Separando)",
    jogoGerado: [11, 15, 7, 8, 10, 2, 21, 19, 22, 4, 13, 1, 16, 12, 9],
    resultado: [3, 5, 7, 8, 9, 11, 14, 15, 16, 17, 19, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h200_3589", concurso: "3589", data: "16/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 26°52', na 5ª Casa;\nLua em Capricórnio 6°10', na 5ª Casa;\nMercúrio em Capricórnio 23°53', na 5ª Casa;\nVênus em Capricórnio 29°20', na 5ª Casa;\nMarte em Capricórnio 25°01', na 5ª Casa;\nJúpiter em Câncer 19°13', retrógrado, na 11ª Casa;\nSaturno em Peixes 27°17', na 7ª Casa;\nUrano em Touro 27°36', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°46', na 7ª Casa;\nPlutão em Aquário 3°13', na 6ª Casa;\nNodo Norte em Peixes 11°19', retrógrado, na 7ª Casa;\nLilith em Sagitário 3°02', na 3ª Casa;\nQuíron em Áries 22°41', na 8ª Casa;\nFortuna em Virgem 24°00', na 1ª Casa,\nVértice em Peixes 18°58', na 7ª Casa,\nAscendente em Virgem 3°19',\nMeio do Céu em Gêmeos 11°19'\n\n1ª Casa em Virgem 3°19'\n2ª Casa em Libra 12°41'\n3ª Casa em Escorpião 15°58'\n4ª Casa em Sagitário 11°19'\n5ª Casa em Capricórnio 4°01'\n6ª Casa em Capricórnio 29°37'\n7ª Casa em Peixes 3°19'\n8ª Casa em Áries 12°41'\n9ª Casa em Touro 15°58'\n10ª Casa em Gêmeos 11°19'\n11ª Casa em Câncer 4°01'\n12ª Casa em Câncer 29°37'\n\nSol em conjunção com Mercúrio (Orbe: 2°58', em movimento)\nSol em conjunção com Vênus (Orbe: 2°27', em movimento de separação)\nSol em conjunção com Marte (Orbe: 1°50', em movimento de separação)\nSol em sextil com Saturno (Orbe: 0°25', em movimento)\nSol em trígono com Urano (Orbe: 0°43', em movimento)\nSol em sextil com Netuno (Orbe: 2°54', em movimento)\nMercúrio em conjunção com Marte (Orbe: 1°08', em movimento)\nVênus em sextil com Saturno (Orbe: 2°02', em movimento de separação)\nVênus em trígono com Urano (Orbe: 1°43', em movimento de separação)\nVênus em sextil com Netuno (Orbe: 0°26', em movimento)\nMarte em sextil com Saturno (Orbe: 2°15', em movimento)\nMarte em trígono com Urano (Orbe: 2°34', em movimento)\nSaturno em sextil com Urano (Orbe: 0°18', em conjunção)\nSaturno em conjunção com Netuno (Orbe: 2°29', em conjunção)\nUrano em sextil com Netuno (Orbe: 2°10', em separação)\n\nAscendente em trígono com a Lua (Orbe: 2°51', em movimento)\nAscendente em octil com Júpiter (Orbe: 0°53', em movimento)\nAscendente em quincúncio com Plutão (Orbe: 0°06', em movimento)\nAscendente em quadratura com Lilith (Orbe: 0°16', em movimento) Descendente\nem sextil com a Lua (Orbe: 2°51', em movimento)\nDescendente em trígono com Júpiter (Orbe: 0°53', em movimento)\nDescendente em quadratura com Lilith (Orbe: 0°16', em movimento)\nMeio do Céu em trígono com o Sol (Orbe: 0°32', em movimento) Meio do Céu em\ntrígono com Mercúrio (Orbe: 2°26', em movimento)\nMeio do Céu em trígono com Marte (Orbe: 1°17', em movimento)\nMeio do Céu em quadratura com o Nodo Norte (Orbe: 0°00', em movimento)\nFundo do Céu em trígono com o Sol (Orbe: 0°32', em aplicação)\nIC Octil Mercúrio (Orbe: 2°26', em separação)\nIC Octil Marte (Orbe: 1°17', em separação)\nIC Quadratura Nodo (Orbe: 0°00', em separação)\nNodo Norte Octil Sol (Orbe: 0°32', em separação)\nNodo Norte Octil Mercúrio (Orbe: 2°26', em aplicação)\nNodo Norte Octil Marte (Orbe: 1°17', em aplicação)\nLilith Tri-Octil Júpiter (Orbe: 1°10', em aplicação)\nLilith Sextil Plutão (Orbe: 0°10', em aplicação)\nQuíron Quadratura Mercúrio (Orbe: 1°11', em separação)\nQuíron Quadratura Marte (Orbe: 2°20', em separação)\nFortuna Trígono Sol (Orbe: 2°51', em aplicação)\nFortuna Trígono Mercúrio (Orbe:\nFortuna em trígono com Marte (Orbe: 1°01', Aplicando) Fortuna\nem quincúncio com Quíron (Orbe: 1°18', Separando)\nTrígono do vértice com Júpiter (Orbe: 0°14', Aplicando)\nOctil do vértice com Plutão (Orbe: 0°45', Separando)",
    jogoGerado: [4, 15, 25, 8, 10, 2, 24, 6, 12, 1, 11, 19, 22, 13, 21],
    resultado: [1, 2, 3, 4, 8, 10, 11, 12, 15, 18, 19, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3590", concurso: "3590", data: "17/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 27°53', na 5ª Casa;\nLua em Capricórnio 18°26', na 5ª Casa;\nMercúrio em Capricórnio 25°31', na 5ª Casa;\nVênus em Aquário 0°35', na 5ª Casa;\nMarte em Capricórnio 25°48', na 5ª Casa;\nJúpiter em Câncer 19°05', retrógrado, na 11ª Casa;\nSaturno em Peixes 27°22', na 7ª Casa;\nUrano em Touro 27°35', retrógrado, na 9ª Casa\n; Netuno em Peixes 29°47', na 7ª Casa;\nPlutão em Aquário 3°14', na 6ª Casa;\nNodo Norte em Peixes 11°16', retrógrado, na 7ª Casa;\nLilith em Sagitário 3°09', na 3ª Casa;\nQuíron em Áries 22°42', na 8ª Casa\nda Fortuna. em Virgem 14°01', no\nVértice da 1ª Casa em Peixes 19°30', no\nAscendente da 7ª Casa em Virgem 4°34',\nMeio do Céu em Gêmeos 12°15'\n\n1ª Casa em Virgem 4°34'\n2ª Casa em Libra 13°58'\n3ª Casa em Escorpião 17°02'\n4ª Casa em Sagitário 12°15'\n5ª Casa em Capricórnio 4°55'\n6ª Casa em Aquário 0°39'\n7ª Casa em Peixes 4°34'\n8ª Casa em Áries 13°58'\n9ª Casa em Touro 17°02'\n10ª Casa em Gêmeos 12°15'\n11ª Casa em Câncer 4°55'\n12ª Casa em Leão 0°39'\n\nSol em conjunção com Mercúrio (Orbe: 2°21', em movimento)\nSol em conjunção com Vênus (Orbe: 2°42', em movimento de separação)\nSol em conjunção com Marte (Orbe: 2°04', em movimento de separação)\nSol em sextil com Saturno (Orbe: 0°31',\nem movimento de separação) Sol em trígono com Urano (Orbe: 0°18', em movimento de separação)\nSol em sextil com Netuno (Orbe: 1°54', em movimento)\nLua em oposição a Júpiter (Orbe: 0°38', em movimento)\nMercúrio em conjunção com Marte (Orbe: 0°16', em movimento)\nMercúrio em sextil com Saturno (Orbe: 1°50', em movimento)\nMercúrio em trígono com Urano (Orbe: 2°03', em movimento)\nVênus em sextil com Netuno (Orbe: 0°47', em movimento de separação)\nVênus em conjunção com Plutão (Orbe: 2°39', em movimento)\nMarte em sextil com Saturno (Orbe:\nMarte em trígono com Urano (Orbe: 1°46', em movimento )\nSaturno em sextil com Urano (Orbe: 0°13', em movimento)\nSaturno em conjunção com Netuno (Orbe: 2°25', em movimento)\nUrano em sextil com Netuno (Orbe: 2°12', em movimento)\n\nLua em Tri-Óctil no Ascendente (Orbe: 1°07', Separando)\nJúpiter em Octil no Ascendente (Orbe: 0°29', Separando)\nPlutão em Quincúncio no Ascendente (Orbe: 1°19', Separando)\nLilith em Quadratura com o Ascendente (Orbe: 1°25', Separando)\nLua em Octil no Descendente (Orbe: 1°07', Separando)\nJúpiter em Tri-Óctil no Descendente (Orbe: 0°29', Separando)\nLilith em Quadratura no Descendente (Orbe: 1°25', Separando)\nSol em Tri-Óctil no Meio do Céu (Orbe: 0°38', Aplicando)\nMercúrio em Tri-Óctil no Meio do Céu (Orbe: 1°43', Separando)\nMarte em Tri-Óctil no Meio do Céu (Orbe: 1°26', Separando)\nNodo Lunar em Quadratura no Meio do Céu (Orbe: 0°58', Separando)\nFundo do Céu Sol em Octil (Orbe: 0°38', em aplicação)\nIC em Octil com Mercúrio (Orbe: 1°43', em separação)\nIC em Octil com Marte (Orbe: 1°26', em separação)\nIC em Quadratura com o Nodo Norte (Orbe: 0°58', em separação)\nNodo Norte em Octil com o Sol (Orbe: 1°37', em separação)\nNodo Norte em Octil com Mercúrio (Orbe: 0°44', em aplicação)\nNodo Norte em Octil com Marte (Orbe: 0°27', em aplicação)\nLilith em Octil com a Lua (Orbe: 0°17', em separação)\nLilith em Sextil com Vênus (Orbe: 2°34', em aplicação)\nLilith em Tri-Octil com Júpiter (Orbe: 0°55', em aplicação)\nLilith em Sextil com Plutão (Orbe: 0°05', em aplicação)\nQuíron em Quadratura com Mercúrio (Orbe: 2°49', em separação)\nFortuna Sol em Tri-Octil (Orbe: 1°07', Separando)\nFortuna Vênus em Tri-Octil (Orbe: 1°34', Aplicando)\nFortuna Nodo em Oposição (Orbe: 2°44', Separando)\nFortuna Quadratura com o Meio do Céu (Orbe: 1°46', Separando)\nFortuna Quadratura com o Fundo do Céu (Orbe: 1°46', Separando)\nLua em Sextil com o Vértice (Orbe: 1°03', Separando)\nTrígono com Júpiter no Vértice (Orbe: 0°25', Separando)\nPlutão em Octil com o Vértice (Orbe: 1°15', Separando)",
    jogoGerado: [4, 8, 15, 25, 6, 10, 2, 1, 11, 12, 13, 17, 22, 20, 21],
    resultado: [4, 6, 8, 10, 11, 12, 13, 15, 16, 17, 19, 20, 21, 22, 23],
    obs: "",
  },
  {
    id: "h200_3591", concurso: "3591", data: "19/01/2026", hora: "",
    textoMapa: "Sol em Capricórnio 29°55', na 5ª Casa;\nLua em Aquário 13°30', na 6ª Casa;\nMercúrio em Capricórnio 28°50', na 5ª Casa;\nVênus em Aquário 3°06', na 6ª Casa;\nMarte em Capricórnio 27°21', na 5ª Casa;\nJúpiter em Câncer 18°49', retrógrado, na 11ª Casa;\nSaturno em Peixes 27°32', na 7ª Casa;\nUrano em Touro 27°33', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°50', na 7ª Casa;\nPlutão em Aquário 3°18', na 6ª Casa;\nNodo Norte em Peixes 11°09', retrógrado, na 7ª Casa;\nLilith em Sagitário 3°23', na 3ª Casa;\nQuíron em Áries 22°44', na 8ª Casa.\nFortuna em Leão 23°31', na 12ª Casa;\nVértice em Peixes 20°34', na 7ª Casa;\nAscendente em Virgem 7°06';\nMeio do Céu em Gêmeos 14°05'.\n\n1ª Casa em Virgem 7°06'\n2ª Casa em Libra 16°29'\n3ª Casa em Escorpião 19°08'\n4ª Casa em Sagitário 14°05'\n5ª Casa em Capricórnio 6°45'\n6ª Casa em Aquário 2°45'\n7ª Casa em Peixes 7°06'\n8ª Casa em Áries 16°29'\n9ª Casa em Touro 19°08'\n10ª Casa em Gêmeos 14°05'\n11ª Casa em Câncer 6°45'\n12ª Casa em Leão 2°45'\n\nSol em conjunção com Mercúrio (Orbe: 1°05', em movimento)\nSol em conjunção com Marte (Orbe: 2°33', em movimento)\nSol em sextil com Saturno (Orbe: 2°23', em movimento)\nSol em trígono com Urano (Orbe: 2°22', em movimento)\nSol em sextil com Netuno (Orbe: 0°05', em movimento)\nLua em octil com Saturno (Orbe: 0°58', em movimento)\nLua em octil com Netuno (Orbe: 1°19', em movimento)\nMercúrio em conjunção com Marte (Orbe: 1°28', em movimento)\nMercúrio em sextil com Saturno (Orbe: 1°18', em movimento)\nMercúrio em trígono com Urano (Orbe: 1°16', em movimento)\nMercúrio em sextil com Netuno (Orbe: 0°59', em movimento)\nVênus em conjunção com Plutão (Orbe: 0°12', em movimento)\nMarte Sextil de Saturno (Orbe: 0°10', em movimento subsequente)\nMarte em trígono com Urano (Orbe: 0°11', em movimento subsequente)\nMarte em sextil com Netuno (Orbe: 2°28', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 0°01', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 2°18', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°16', em movimento subsequente)\n\nTri-óctil de Quíron no Ascendente (Orbe: 0°37', em movimento)\nOctil de Quíron no Descendente (Orbe: 0°37', em movimento)\nTri-óctil de Sol no Meio do Céu (Orbe: 0°50', em movimento)\nTrígono de Lua no Meio do Céu (Orbe: 0°34', em movimento)\nTri-óctil de Mercúrio no Meio do Céu (Orbe: 0°14', em movimento)\nTri-óctil de Marte no Meio do Céu (Orbe: 1°43', em movimento)\nQuadratura do Nodo no Meio do Céu (Orbe: 2°55', em movimento)\nOctil de Sol no Fundo do Céu (Orbe: 0°50', em movimento)\nSextil de Lua no Fundo do Céu (Orbe: 0°34', em movimento)\nOctil de Mercúrio no Fundo do Céu (Orbe: 0°14', em movimento)\nOctil de Marte no Fundo do Céu (Orbe: 1°43', em movimento)\nQuadratura do Nodo no Fundo do Céu (Orbe: 2°55', em movimento)\nNodo Norte em Octil com Mercúrio (Orbe: 2°40', em Separação )\nNodo Norte em Octil com Marte (Orbe: 1°11', em Separação)\nLilith em Sextil com Vênus (Orbe: 0°16', em Aproximação)\nLilith em Tri-Octil com Júpiter (Orbe: 0°26', em Aproximação)\nLilith em Sextil com Plutão (Orbe: 0°04', em Separação)\nFortuna em Trígono com Quíron (Orbe: 0°47', em Separação)\nVértice em Octil com Vênus (Orbe: 2°28', em Separação)\nVértice em Trígono com Júpiter (Orbe: 1°45', em Separação)\nVértice em Octil com Plutão (Orbe: 2°16', em Separação)",
    jogoGerado: [25, 4, 15, 6, 1, 2, 11, 19, 10, 12, 13, 18, 21, 22, 20],
    resultado: [1, 2, 3, 4, 6, 7, 10, 11, 13, 14, 15, 17, 18, 19, 20],
    obs: "",
  },
  {
    id: "h200_3592", concurso: "3592", data: "20/01/2026", hora: "",
    textoMapa: "Sol em Aquário 0°56', na 5ª Casa;\nLua em Aquário 26°19', na 6ª Casa;\nMercúrio em Aquário 0°30', na 5ª Casa;\nVênus em Aquário 4°21', na 6ª Casa;\nMarte em Capricórnio 28°08', na 5ª Casa;\nJúpiter em Câncer 18°41', retrógrado, na 11ª Casa;\nSaturno em Peixes 27°37', na 7ª Casa;\nUrano em Touro 27°32', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°51', na 7ª Casa;\nPlutão em Aquário 3°20', na 5ª Casa;\nNodo Norte em Peixes 11°06', retrógrado, na 7ª Casa;\nLilith em Sagitário 3°29', na 3ª Casa;\nQuíron em Áries 22°45', na 8ª Casa.\nFortuna em Leão 13°00', na 12ª Casa;\nVértice em Peixes 21°07', na 7ª Casa;\nAscendente em Virgem 8°23';\nMeio do Céu em Gêmeos 15°00'.\n\n1ª Casa em Virgem 8°23'\n2ª Casa em Libra 17°45'\n3ª Casa em Escorpião 20°10'\n4ª Casa em Sagitário 15°00'\n5ª Casa em Capricórnio 7°40'\n6ª Casa em Aquário 3°48'\n7ª Casa em Peixes 8°23'\n8ª Casa em Áries 17°45'\n9ª Casa em Touro 20°10'\n10ª Casa em Gêmeos 15°00'\n11ª Casa em Câncer 7°40'\n12ª Casa em Leão 3°48'\n\nSol em conjunção com Mercúrio (Orbe: 0°26', em movimento subsequente)\nSol em conjunção com Marte (Orbe: 2°48', em movimento subsequente)\nSol em sextil com Netuno (Orbe: 1°04', em movimento subsequente)\nSol em conjunção com Plutão (Orbe: 2°24', em movimento subsequente)\nLua em quadratura com Urano (Orbe: 1°13', em movimento subsequente)\nMercúrio em conjunção com Marte (Orbe: 2°22', em movimento subsequente)\nMercúrio em sextil com Saturno (Orbe: 2°53', em movimento subsequente)\nMercúrio em trígono com Urano (Orbe: 2°57', em movimento subsequente)\nMercúrio em sextil com Netuno (Orbe: 0°38', em movimento subsequente)\nMercúrio em conjunção com Plutão (Orbe: 2°50', em movimento subsequente)\nVênus em conjunção com Plutão (Orbe: 1°01', em movimento subsequente)\nMarte em sextil com Saturno (Orbe: 0°31', em movimento subsequente)\nMarte Trígono com Urano (Orbe: 0°35', Separando)\nMarte em sextil com Netuno (Orbe: 1°43', Aproximando)\nSaturno em sextil com Urano (Orbe: 0°04', Separando)\nSaturno em conjunção com Netuno (Orbe: 2°14', Aproximando)\nUrano em sextil com Netuno (Orbe: 2°18', Separando)\n\nNodo de Oposição ao Ascendente (Orbe: 2°43', em movimento)\nTri-óctil de Quíron no Ascendente (Orbe: 0°37', em movimento)\nNodo de Conjunção do Descendente (Orbe: 2°43', em movimento)\nOctil de Quíron no Descendente (Orbe: 0°37', em movimento)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°56', em movimento)\nTri-óctil de Mercúrio no Meio do Céu (Orbe: 0°30', em movimento)\nTri-óctil de Marte no Meio do Céu (Orbe: 1°51', em movimento)\nOctil do Sol no Fundo do Céu (Orbe: 0°56', em movimento)\nOctil de Mercúrio no Fundo do Céu (Orbe: 0°30', em movimento)\nOctil de Marte no Fundo do Céu (Orbe: 1°51', em movimento)\nNodo Norte em Octil de Marte (Orbe: 2°01', em movimento)\nLilith em Sextil com o Sol (Orbe: 2°33', Aplicando)\nLilith em sextil com Mercúrio (Orbe: 2°59', Aplicando)\nLilith em sextil com Vênus (Orbe: 0°51', Separando)\nLilith em trí-óctil com Júpiter (Orbe: 0°11', Aplicando)\nLilith em sextil com Plutão (Orbe: 0°09', Separando)\nFortuna em trí-óctil com Saturno (Orbe: 0°23', Separando)\nFortuna em trí-óctil com Netuno (Orbe: 1°51', Aplicando)\nFortuna em quincúncio com o Nodo (Orbe: 1°53', Separando)\nFortuna em sextil com o Meio do Céu (Orbe: 1°59', Aplicando)\nFortuna em trígono com o Vértice (Orbe: 1°59', Separando)\nFortuna em trígono com o Fundo do Céu (Orbe: 1°59', Aplicando)\nVértice em trígono com Vênus (Orbe: 1°45', Separando)\nVértice em trígono Júpiter (Orbe: 2°25', Separando)\nVértice Octile Plutão (Orbe: 2°46', Separando)",
    jogoGerado: [23, 4, 15, 6, 25, 13, 1, 12, 11, 21, 22, 18, 20, 5, 2],
    resultado: [1, 4, 5, 6, 7, 9, 12, 13, 17, 18, 20, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3593", concurso: "3593", data: "21/01/2026", hora: "",
    textoMapa: "Sol em Aquário 1°57', na 5ª Casa;\nLua em Peixes 9°19', na 6ª Casa;\nMercúrio em Aquário 2°11', na 5ª Casa;\nVênus em Aquário 5°37', na 6ª Casa;\nMarte em Capricórnio 28°55', na 5ª Casa;\nJúpiter em Câncer 18°33', retrógrado, na 11ª Casa;\nSaturno em Peixes 27°42', na 7ª Casa;\nUrano em Touro 27°32', retrógrado, na 9ª Casa\n; Netuno em Peixes 29°53', na 7ª Casa;\nPlutão em Aquário 3°22', na 5ª Casa;\nNodo Norte em Peixes 11°03', retrógrado, na 7ª Casa;\nLilith em Sagitário 3°36', na 3ª Casa;\nQuíron em Áries 22°46', na 8ª Casa\nda Fortuna. em Leão 2°18', no\nVértice da 11ª Casa em Peixes 21°39', no\nAscendente da 7ª Casa em Virgem 9°40',\nMeio do Céu em Gêmeos 15°55'\n\n1ª Casa em Virgem 9°40'\n2ª Casa em Libra 19°00'\n3ª Casa em Escorpião 21°12'\n4ª Casa em Sagitário 15°55'\n5ª Casa em Capricórnio 8°36'\n6ª Casa em Aquário 4°52'\n7ª Casa em Peixes 9°40'\n8ª Casa em Áries 19°00'\n9ª Casa em Touro 21°12'\n10ª Casa em Gêmeos 15°55'\n11ª Casa em Câncer 8°36'\n12ª Casa em Leão 4°52'\n\nSol em conjunção com Mercúrio (Orbe: 0°13', separando)\nSol em sextil com Netuno (Orbe: 2°04', separando)\nSol em conjunção com Plutão (Orbe: 1°24', aplicando)\nMercúrio em sextil com Netuno (Orbe: 2°18', separando)\nMercúrio em conjunção com Plutão (Orbe: 1°11', aplicando)\nVênus em conjunção com Plutão (Orbe: 2°14', separando)\nMarte em sextil com Saturno (Orbe: 1°12', separando)\nMarte em trígono com Urano (Orbe: 1°23', separando)\nMarte em sextil com Netuno (Orbe: 0°57', aplicando)\nSaturno em sextil com Urano (Orbe: 0°10', separando)\nSaturno em conjunção com Netuno (Orbe: 2°10', aplicando)\nUrano em sextil com Netuno (Orbe: 2°21', Separando)\n\nLua em Oposição ao Ascendente (Orbe: 0°20', Separando)\nNodo em Oposição ao Ascendente (Orbe: 1°23', Aplicando)\nQuíron em Tri-Óctil ao Ascendente (Orbe: 1°53', Separando)\nLua em Conjunção ao Descendente (Orbe: 0°20', Separando)\nNodo em Conjunção ao Descendente (Orbe: 1°23', Aplicando)\nQuíron em Octil ao Descendente (Orbe: 1°53', Separando)\nSol em Tri-Óctil ao Meio do Céu (Orbe: 1°02', Aplicando)\nMercúrio em Tri-Óctil ao Meio do Céu (Orbe: 1°16', Aplicando)\nMarte em Tri-Óctil ao Meio do Céu (Orbe: 2°00', Separando)\nPlutão em Tri-Óctil ao Meio do Céu (Orbe: 2°27', Aplicando)\nSol em Octil ao Fundo do Céu (Orbe: 1°02', Aplicando)\nMercúrio em Octil ao Fundo do Céu (Orbe: 1°16', em movimento)\nIC em octil com Marte (Orbe: 2°00', em movimento)\nIC em quincúncio com Júpiter (Orbe: 2°38', em movimento)\nIC em octil com Plutão (Orbe: 2°27', em movimento)\nNodo Norte em conjunção com a Lua (Orbe: 1°44', em movimento)\nNodo Norte em octil com Marte (Orbe: 2°51', em movimento)\nLilith em sextil com o Sol (Orbe: 1°38', em movimento)\nLilith em sextil com Mercúrio (Orbe: 1°25', em movimento)\nLilith em sextil com Vênus (Orbe: 2°00', em movimento)\nLilith em tri-octil com Júpiter (Orbe: 0°02', em movimento)\nLilith em sextil com Plutão (Orbe: 0°13', em movimento)\nQuíron em octil com a Lua (Orbe: 1°32', em movimento)\nFortuna em oposição ao Sol (Orbe: 0°20', Separando)\nFortuna em Oposição a Mercúrio (Orbe: 0°07', Separando)\nFortuna em Trígono a Netuno (Orbe: 2°25', Separando)\nFortuna em Oposição a Plutão (Orbe: 1°04', Aplicando)\nFortuna em Trígono a Lilith (Orbe: 1°17', Aplicando)\nFortuna em Octil com o Meio do Céu (Orbe: 1°23', Separando)\nFortuna em Trígono com o Vértice (Orbe: 2°18', Separando)\nFortuna em Trígono com o Fundo do Céu (Orbe: 1°23', Separando)\nVértice em Octil com Vênus (Orbe: 1°02', Separando)",
    jogoGerado: [23, 4, 15, 6, 25, 1, 8, 12, 22, 11, 21, 7, 20, 5, 13],
    resultado: [1, 3, 4, 6, 7, 8, 9, 10, 12, 15, 18, 19, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3594", concurso: "3594", data: "22/01/2026", hora: "",
    textoMapa: "Sol em Aquário 2°58', na 5ª Casa;\nLua em Peixes 22°31', na 7ª Casa;\nMercúrio em Aquário 3°52', na 5ª Casa;\nVênus em Aquário 6°52', na 6ª Casa;\nMarte em Capricórnio 29°41', na 5ª Casa;\nJúpiter em Câncer 18°26', retrógrado, na 11ª Casa;\nSaturno em Peixes 27°47', na 7ª Casa;\nUrano em Touro 27°31', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°54', na 7ª Casa;\nPlutão em Aquário 3°24', na 5ª Casa;\nNodo Norte em Peixes 11°00', retrógrado, na 7ª Casa;\nLilith em Sagitário 3°43', na 3ª Casa;\nQuíron em Áries 22°47', na 8ª Casa.\nFortuna em Câncer 21°24', na 11ª Casa,\nVértice em Peixes 22°11', na 7ª Casa,\nAscendente em Virgem 10°57',\nMeio do Céu em Gêmeos 16°50'.\n\n1ª Casa em Virgem 10°57'\n2ª Casa em Libra 20°15'\n3ª Casa em Escorpião 22°14'\n4ª Casa em Sagitário 16°50'\n5ª Casa em Capricórnio 9°31'\n6ª Casa em Aquário 5°56'\n7ª Casa em Peixes 10°57'\n8ª Casa em Áries 20°15'\n9ª Casa em Touro 22°14'\n10ª Casa em Gêmeos 16°50'\n11ª Casa em Câncer 9°31'\n12ª Casa em Leão 5°56'\n\nSol em conjunção com Mercúrio (Orbe: 0°53', separando)\nSol em conjunção com Plutão (Orbe: 0°25', aplicando)\nLua em octil com Vênus (Orbe: 0°38', separando)\nMercúrio em conjunção com Vênus (Orbe: 2°59', aplicando)\nMercúrio em conjunção com Plutão (Orbe: 0°28', separando)\nMarte em sextil com Saturno (Orbe: 1°54', separando)\nMarte em trígono com Urano (Orbe: 2°10', separando)\nMarte em sextil com Netuno (Orbe: 0°12', aplicando)\nSaturno em sextil com Urano (Orbe: 0°16', separando)\nSaturno em conjunção com Netuno (Orbe: 2°06', aplicando)\nUrano em sextil com Netuno (Orbe: 2°23', separando)\n\nNodo de Oposição ao Ascendente (Orbe: 0°02', em movimento)\nNodo de Conjunção ao Descendente (Orbe: 0°02', em movimento)\nTri-óctil Sol-MC (Orbe: 1°08', em movimento)\nTri-óctil Mercúrio-MC (Orbe: 2°02', em movimento)\nTri-óctil Marte-MC (Orbe: 2°08', em movimento)\nTri-óctil Plutão-MC (Orbe: 1°34', em movimento)\nOctil Sol-IC (Orbe: 1°08', em movimento)\nOctil Mercúrio-IC (Orbe: 2°02', em movimento)\nOctil Marte-IC (Orbe: 2°08', em movimento)\nQuincúncio Júpiter-IC (Orbe: 1°36', em movimento)\nOctil Plutão-IC (Orbe: 1°34', em movimento)\nLilith Sextil Sol (Orbe: 0°44', Lilith em\nsextil com Mercúrio (Orbe: 0°09', em processo de separação)\nLilith em trígono com Júpiter (Orbe: 0°16', em processo de separação)\nLilith em sextil com Plutão (Orbe: 0°18', em processo de separação)\nFortuna em trígono com a Lua (Orbe: 1°06', em processo de\nseparação) Fortuna em conjunção com Júpiter (Orbe: 2°58', em processo de separação)\nFortuna em trígono com Lilith (Orbe: 2°41', em processo de separação)\nFortuna em quadratura com Quíron (Orbe: 1°22', em processo de separação)\nVértice em conjunção com a Lua (Orbe: 0°19', em processo de separação)\nVértice em octil com Vênus (Orbe: 0°18', em processo de separação)",
    jogoGerado: [5, 4, 9, 15, 8, 11, 12, 23, 1, 2, 21, 7, 20, 10, 6],
    resultado: [1, 2, 4, 5, 7, 8, 9, 11, 14, 15, 18, 20, 21, 23, 24],
    obs: "",
  },
  {
    id: "h200_3595", concurso: "3595", data: "23/01/2026", hora: "",
    textoMapa: "Sol em Aquário 3°59', na 5ª Casa;\nLua em Áries 5°56', na 7ª Casa;\nMercúrio em Aquário 5°34', na 5ª Casa;\nVênus em Aquário 8°07', na 6ª Casa;\nMarte em Aquário 0°28', na 5ª Casa;\nJúpiter em Câncer 18°18', retrógrado, na 11ª Casa;\nSaturno em Peixes 27°53', na 7ª Casa;\nUrano em Touro 27°30', retrógrado, na 9ª Casa;\nNetuno em Peixes 29°55', na 7ª Casa;\nPlutão em Aquário 3°26', na 5ª Casa;\nNodo Norte em Peixes 10°57', retrógrado, na 6ª Casa;\nLilith em Sagitário 3°49', na 3ª Casa;\nQuíron em Áries 22°48', na 8ª Casa;\nFortuna em Câncer 10°18', na 10ª Casa,\nVértice em Peixes 22°43', na 7ª Casa,\nAscendente em Virgem 12°14',\nMeio do Céu em Gêmeos 17°44'\n\n1ª Casa em Virgem 12°14'\n2ª Casa em Libra 21°29'\n3ª Casa em Escorpião 23°16'\n4ª Casa em Sagitário 17°44'\n5ª Casa em Capricórnio 10°27'\n6ª Casa em Aquário 7°01'\n7ª Casa em Peixes 12°14'\n8ª Casa em Áries 21°29'\n9ª Casa em Touro 23°16'\n10ª Casa em Gêmeos 17°44'\n11ª Casa em Câncer 10°27'\n12ª Casa em Leão 7°01'\n\nSol em sextil com a Lua (Orbe: 1°56', Separando)\nSol em conjunção com Mercúrio (Orbe: 1°34', Separando)\nSol em conjunção com Plutão (Orbe: 0°33', Separando)\nLua em sextil com Mercúrio (Orbe: 0°21', Separando)\nLua em sextil com Vênus (Orbe: 2°11', Aplicando)\nLua em sextil com Plutão (Orbe: 2°29', Separando)\nMercúrio em conjunção com Vênus (Orbe: 2°33', Aplicando)\nMercúrio em conjunção com Plutão (Orbe: 2°07', Separando)\nMarte em sextil com Saturno (Orbe: 2°35', Separando)\nMarte em trígono com Urano (Orbe: 2°57', Separando)\nMarte em sextil com Netuno (Orbe: 0°32', Separando)\nMarte em conjunção com Plutão (Orbe: 2°57', Aplicando)\nSaturno em sextil Urano (Orbe: 0°22', Separando)\nSaturno em conjunção com Netuno (Orbe: 2°02', Aproximando)\nUrano em sextil com Netuno (Orbe: 2°25', Separando)\n\nNodo de Oposição ao Ascendente (Orbe: 1°17', Separando)\nNodo de Conjunção ao Descendente (Orbe: 1°17', Separando)\nTri-óctil Sol no Meio do Céu (Orbe: 1°15', Aplicando)\nTri-óctil Mercúrio no Meio do Céu (Orbe: 2°49', Aplicando)\nTri-óctil Marte no Meio do Céu (Orbe: 2°16', Separando)\nTri-óctil Plutão no Meio do Céu (Orbe: 0°41', Aplicando)\nOctil Sol no Fundo do Céu (Orbe: 1°15', Aplicando)\nOctil Mercúrio no Fundo do Céu (Orbe: 2°49', Aplicando)\nOctil Marte no Fundo do Céu (Orbe: 2°16', Separando)\nQuincúncio Júpiter no Fundo do Céu (Orbe: 0°33', Aplicando)\nOctil Plutão no Fundo do Céu (Orbe: 0°41', Aplicando)\nSextil Sol em Lilith (Orbe: 0°09',\nLilith em trígono com a Lua (Orbe: 2°06', em separação )\nLilith em sextil com Mercúrio (Orbe: 1°44', em separação)\nLilith em trígono-óctil com Júpiter (Orbe: 0°31', em separação)\nLilith em sextil com Plutão (Orbe: 0°23', em separação)\nFortuna em quincúncio com Vênus (Orbe: 2°10', em separação)\nFortuna em óctil com Urano (Orbe: 2°12', em aplicação)\nFortuna em trígono com o Nodo Norte (Orbe: 0°38', em aplicação)\nFortuna em sextil com o Ascendente (Orbe: 1°56', em separação)\nFortuna em trígono com o Descendente (Orbe: 1°56', em separação)\nVértice em óctil com Mercúrio (Orbe: 2°09', em separação)\nVértice em óctil com Vênus (Orbe: 0°24', em aplicação)",
    jogoGerado: [5, 4, 15, 6, 13, 20, 1, 10, 12, 22, 25, 2, 11, 21, 7],
    resultado: [1, 2, 4, 5, 6, 8, 10, 12, 13, 15, 16, 20, 21, 22, 25],
    obs: "",
  },
  {
    id: "h200_3596", concurso: "3596", data: "24/01/2026", hora: "",
    textoMapa: "Sol em Aquário 5°00', na 5ª Casa;\nLua em Áries 19°34', na 7ª Casa;\nMercúrio em Aquário 7°16', na 5ª Casa;\nVênus em Aquário 9°23', na 6ª Casa;\nMarte em Aquário 1°15', na 5ª Casa;\nJúpiter em Câncer 18°11', retrógrado, na 11ª Casa;\nSaturno em Peixes 27°58', na 7ª Casa;\nUrano em Touro 27°30', retrógrado, na 9ª Casa\n; Netuno em Peixes 29°57', na 7ª Casa;\nPlutão em Aquário 3°28', na 5ª Casa;\nNodo Norte em Peixes 10°54', retrógrado, na 6ª Casa;\nLilith em Sagitário 3°56', na 3ª Casa;\nQuíron em Áries 22°49', na 8ª Casa\n(Fortuna). em Gêmeos 28°59', no\nVértice da 10ª Casa em Peixes 23°15', no\nAscendente da 7ª Casa em Virgem 13°32',\nMeio do Céu em Gêmeos 18°39'\n\n1ª Casa em Virgem 13°32'\n2ª Casa em Libra 22°44'\n3ª Casa em Escorpião 24°18'\n4ª Casa em Sagitário 18°39'\n5ª Casa em Capricórnio 11°22'\n6ª Casa em Aquário 8°06'\n7ª Casa em Peixes 13°32'\n8ª Casa em Áries 22°44'\n9ª Casa em Touro 24°18'\n10ª Casa em Gêmeos 18°39'\n11ª Casa em Câncer 11°22'\n12ª Casa em Leão 8°06'\n\nSol em conjunção com Mercúrio (Orbe: 2°16', separando)\nSol em conjunção com Plutão (Orbe: 1°32', separando)\nLua em quadratura com Júpiter (Orbe: 1°23', separando)\nMercúrio em conjunção com Vênus (Orbe: 2°06', aproximando)\nMarte em sextil com Netuno (Orbe: 1°18', separando)\nMarte em conjunção com Plutão (Orbe: 2°12', aproximando)\nSaturno em sextil com Urano (Orbe: 0°28', separando)\nSaturno em conjunção com Netuno (Orbe: 1°58', aproximando)\nUrano em sextil com Netuno (Orbe: 2°27', separando)\n\nMarte em Tri-Óctil no Ascendente (Orbe: 2°42', em movimento subsequente)\nNodo Oposto no Ascendente (Orbe: 2°38', em movimento subsequente)\nMarte em Octil no Descendente (Orbe: 2°42', em movimento subsequente)\nNodo em Conjunção no Descendente (Orbe: 2°38', em movimento subsequente)\nSol em Tri-Óctil no Meio do Céu (Orbe: 1°21', em movimento subsequente)\nLua em Sextil no Meio do Céu (Orbe: 0°54', em movimento subsequente)\nMarte em Tri-Óctil no Meio do Céu (Orbe: 2°23', em movimento subsequente)\nPlutão em Tri-Óctil no Meio do Céu (Orbe: 0°11', em movimento subsequente)\nSol em Octil no Fundo do Céu (Orbe: 1°21', em movimento subsequente)\nLua em Trígono no Fundo do Céu (Orbe: 0°54', em movimento subsequente)\nMarte em Octil no Fundo do Céu (Orbe: 2°23', em movimento subsequente)\nJúpiter em Quincúncio no Fundo do Céu (Orbe: 0°28', Separando)\nIC Octil Plutão (Orbe: 0°11', Separando)\nLilith Sextil Sol (Orbe: 1°04', Separando)\nLilith Tri-Octil Lua (Orbe: 0°37', Separando)\nLilith Sextil Marte (Orbe: 2°41', Aplicando)\nLilith Tri-Octil Júpiter (Orbe: 0°45', Separando)\nLilith Sextil Plutão (Orbe: 0°28', Separando)\nFortuna Quincúncio Marte (Orbe: 2°16', Aplicando)\nFortuna Quadratura Saturno (Orbe: 1°00', Separando)\nFortuna Quadratura Netuno (Orbe: 0°58', Aplicando)\nFortuna Quadratura Vertex (Orbe: 1°00', Separando)\nVertex Octil Mercúrio (Orbe: 0°59', Separando)\nVertex Octil Vênus (Orbe: 1°07', Aplicando)",
    jogoGerado: [5, 4, 15, 16, 21, 6, 20, 1, 11, 10, 2, 7, 8, 9, 12],
    resultado: [1, 2, 3, 4, 5, 6, 7, 8, 14, 15, 16, 18, 20, 21, 22],
    obs: "",
  },
  {
    id: "h200_3597", concurso: "3597", data: "26/01/2026", hora: "",
    textoMapa: "Sol em Aquário 7°02', na 5ª Casa;\nLua em Touro 17°32', na 8ª Casa;\nMercúrio em Aquário 10°43', na 6ª Casa;\nVênus em Aquário 11°54', na 6ª Casa;\nMarte em Aquário 2°49', na 5ª Casa;\nJúpiter em Câncer 17°56', retrógrado, na 11ª Casa;\nSaturno em Peixes 28°09', na 7ª Casa;\nUrano em Touro 27°29', retrógrado, na 9ª Casa\n; Netuno em Áries 0°00', na 7ª Casa;\nPlutão em Aquário 3°32', na 5ª Casa;\nNodo Norte em Peixes 10°47', retrógrado, na 6ª Casa;\nLilith em Sagitário 4°10', na 3ª Casa;\nQuíron em Áries 22°52', na 7ª Casa.\nFortuna em Gêmeos 5°39', na 9ª Casa\n; Vértice em Peixes 24°20', na 7ª Casa\n; Ascendente em Virgem 16°08';\nMeio do Céu em Gêmeos 20°28'.\n\n1ª Casa em Virgem 16°08'\n2ª Casa em Libra 25°12'\n3ª Casa em Escorpião 26°20'\n4ª Casa em Sagitário 20°28'\n5ª Casa em Capricórnio 13°14'\n6ª Casa em Aquário 10°17'\n7ª Casa em Peixes 16°08'\n8ª Casa em Áries 25°12'\n9ª Casa em Touro 26°20'\n10ª Casa em Gêmeos 20°28'\n11ª Casa em Câncer 13°14'\n12ª Casa em Leão 10°17'\n\nLua em sextil com Júpiter (Orbe: 0°24', em movimento subsequente)\nLua em octil com Netuno (Orbe: 2°31', em movimento subsequente)\nMercúrio em conjunção com Vênus (Orbe: 1°10', em\nmovimento subsequente) Mercúrio em octil com Saturno (Orbe: 2°26', em movimento subsequente)\nVênus em octil com Saturno (Orbe: 1°15', em movimento subsequente)\nMarte em sextil com Netuno (Orbe: 2°48', em movimento subsequente)\nMarte em conjunção com Plutão (Orbe: 0°43', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 0°40', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 1°50', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°31', em movimento subsequente)\n\nAscendente em trígono com a Lua (Orbe: 1°23', em movimento)\nAscendente em trígono com Marte (Orbe: 1°40', em movimento)\nAscendente em sextil com Júpiter (Orbe: 1°47', em movimento)\nAscendente em trígono com Plutão (Orbe: 2°23', em movimento)\nDescendente em sextil com a Lua (Orbe: 1°23', em movimento)\nDescendente em octil com Marte (Orbe: 1°40', em movimento)\nDescendente em trígono com Júpiter (Orbe: 1°47', em movimento)\nDescendente em octil com Plutão (Orbe: 2°23', em movimento)\nMeio do Céu em trígono com o Sol (Orbe: 1°34', em movimento)\nMeio do Céu em trígono com Marte (Orbe: 2°39', em movimento)\nMeio do Céu em trígono com Plutão (Orbe: 1°56', em movimento) Meio do Céu\nem sextil com Quíron (Orbe: 2°23', em aplicação)\nIC em octil com o Sol (Orbe: 1°34', em aplicação)\nIC em quincúncio com a Lua (Orbe: 2°56', em separação)\nIC em octil com Marte (Orbe: 2°39', em separação)\nIC em quincúncio com Júpiter (Orbe: 2°32', em separação)\nIC em octil com Plutão (Orbe: 1°56', em separação)\nIC em trígono com Quíron (Orbe: 2°23', em aplicação)\nNodo Norte em octil com Quíron (Orbe: 2°55', em aplicação)\nLilith em sextil com o Sol (Orbe: 2°52', em separação)\nLilith em sextil com Marte (Orbe: 1°20', em aplicação)\nLilith em trígono com o octil de Júpiter (Orbe: 1°13', em separação)\nLilith em sextil com Plutão (Orbe: 0°37', em separação)\nFortuna em trígono com o Sol (Orbe: 1°23', em movimento)\nFortuna em trígono com Marte (Orbe: 2°50', em movimento de separação)\nFortuna em octil com Júpiter (Orbe: 2°42', em movimento de separação)\nFortuna em trígono com Plutão (Orbe: 2°07', em movimento de separação)\nFortuna em oposição a Lilith (Orbe: 1°29', em movimento de separação)\nFortuna em octil com Quíron (Orbe: 2°13', em movimento)\nVértice em octil com o Sol (Orbe: 2°17', em movimento de separação)\nVértice em octil com Mercúrio (Orbe: 1°22', em movimento)\nVértice em octil com Vênus (Orbe: 2°33', em movimento)",
    jogoGerado: [5, 4, 13, 20, 10, 11, 15, 6, 7, 21, 16, 1, 2, 8, 3],
    resultado: [1, 4, 5, 7, 10, 11, 13, 14, 15, 16, 19, 20, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3598", concurso: "3598", data: "27/01/2026", hora: "",
    textoMapa: "Sol em Aquário 8°03', na 5ª Casa;\nLua em Gêmeos 1°50', na 9ª Casa;\nMercúrio em Aquário 12°27', na 6ª Casa;\nVênus em Aquário 13°09', na 6ª Casa;\nMarte em Aquário 3°35', na 5ª Casa;\nJúpiter em Câncer 17°49', retrógrado, na 11ª Casa;\nSaturno em Peixes 28°15', na 7ª Casa;\nUrano em Touro 27°28', retrógrado, na 9ª Casa\n; Netuno em Áries 0°01', na 7ª Casa;\nPlutão em Aquário 3°34', na 5ª Casa;\nNodo Norte em Peixes 10°44', retrógrado, na 6ª Casa;\nLilith em Sagitário 4°16', na 3ª Casa;\nQuíron em Áries 22°53', na 7ª Casa;\nFortuna em Touro 23°39', na 8ª Casa,\nVértice em Peixes 24°52', na 7ª Casa,\nAscendente em Virgem 17°27',\nMeio do Céu em Gêmeos 21°23'\n\n1ª Casa em Virgem 17°27'\n2ª Casa em Libra 26°25'\n3ª Casa em Escorpião 27°20'\n4ª Casa em Sagitário 21°23'\n5ª Casa em Capricórnio 14°10'\n6ª Casa em Aquário 11°23'\n7ª Casa em Peixes 17°27'\n8ª Casa em Áries 26°25'\n9ª Casa em Touro 27°20'\n10ª Casa em Gêmeos 21°23'\n11ª Casa em Câncer 14°10'\n12ª Casa em Leão 11°23'\n\nLua em trígono com Marte (Orbe: 1°45', em movimento subsequente)\nLua em octil com Júpiter (Orbe: 0°58', em movimento subsequente)\nLua em sextil com Netuno (Orbe: 1°49', em movimento subsequente)\nLua em trígono com Plutão (Orbe: 1°43', em movimento subsequente)\nMercúrio em conjunção com Vênus (Orbe: 0°41', em movimento subsequente)\nMercúrio em octil com Saturno (Orbe: 0°47', em movimento subsequente)\nMercúrio em octil com Netuno (Orbe: 2°34', em movimento subsequente)\nVênus em octil com Saturno (Orbe: 0°05', em movimento subsequente)\nVênus em octil com Netuno (Orbe: 1°52', em movimento subsequente)\nMarte em conjunção com Plutão (Orbe: 0°01', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 0°46', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 1°46', em movimento subsequente)\nUrano em sextil Netuno (Orbe: 2°33', Separando)\n\nTri-óctil do Ascendente com Marte (Orbe: 1°08', em movimento subsequente)\nSextil do Ascendente com Júpiter (Orbe: 0°22', em movimento subsequente)\nTri-óctil do Ascendente com Plutão (Orbe: 1°07', em movimento subsequente)\nDescendente em octil com Marte (Orbe: 1°08', em movimento subsequente)\nDescendente em trígono com Júpiter (Orbe: 0°22', em movimento subsequente)\nDescendente em octil com Plutão (Orbe: 1°07', em movimento subsequente)\nMeio do Céu em tri-óctil com o Sol (Orbe: 1°40', em movimento subsequente)\nMeio do Céu em tri-óctil com Marte (Orbe: 2°47', em movimento subsequente)\nMeio do Céu em tri-óctil com Plutão (Orbe: 2°49', em movimento subsequente)\nMeio do Céu em sextil com Quíron (Orbe: 1°30', em movimento subsequente)\nFundo do Céu em octil com o Sol (Orbe: 1°40', em movimento subsequente)\nFundo do Céu em octil com Marte (Orbe: 2°47', Separando)\nIC em Octil com Plutão (Orbe: 2°49', Separando)\nIC em Trígono com Quíron (Orbe: 1°30', Aplicando)\nNodo Norte em Octil com Quíron (Orbe: 2°50', Aplicando)\nLilith em Oposição à Lua (Orbe: 2°25', Aplicando)\nLilith em Sextil com Marte (Orbe: 0°40', Aplicando)\nLilith em Tri-Octil com Júpiter (Orbe: 1°27', Separando)\nLilith em Sextil com Plutão (Orbe: 0°42', Separando)\nFortuna em Quincúncio com o IC (Orbe: 2°16', Separando)\nVertex em Octil com o Sol (Orbe: 1°48', Separando)\nVertex em Octil com Mercúrio (Orbe: 2°34', Aplicando)\nVertex em Sextil com Urano (Orbe: 2°36', Aplicando)",
    jogoGerado: [5, 23, 6, 7, 8, 16, 13, 20, 24, 10, 1, 4, 11, 18, 21],
    resultado: [1, 3, 4, 5, 6, 7, 8, 9, 11, 16, 18, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h200_3599", concurso: "3599", data: "28/01/2026", hora: "",
    textoMapa: "Sol em Aquário 9°04', na 5ª Casa;\nLua em Gêmeos 16°19', na 9ª Casa;\nMercúrio em Aquário 14°12', na 6ª Casa;\nVênus em Aquário 14°24', na 6ª Casa;\nMarte em Aquário 4°22', na 5ª Casa;\nJúpiter em Câncer 17°42', retrógrado, na 11ª Casa;\nSaturno em Peixes 28°20', na 7ª Casa;\nUrano em Touro 27°28', retrógrado, na 8ª Casa\n; Netuno em Áries 0°03', na 7ª Casa;\nPlutão em Aquário 3°36', na 5ª Casa;\nNodo Norte em Peixes 10°41', retrógrado, na 6ª Casa;\nLilith em Sagitário 4°23', na 3ª Casa;\nQuíron em Áries 22°55', na 7ª Casa;\nFortuna em Touro 11°30', na 8ª Casa,\nVértice em Peixes 25°25', na 7ª Casa,\nAscendente em Virgem 18°45',\nMeio do Céu em Gêmeos 22°17'\n\n1ª Casa em Virgem 18°45'\n2ª Casa em Libra 27°39'\n3ª Casa em Escorpião 28°21'\n4ª Casa em Sagitário 22°17'\n5ª Casa em Capricórnio 15°07'\n6ª Casa em Aquário 12°29'\n7ª Casa em Peixes 18°45'\n8ª Casa em Áries 27°39'\n9ª Casa em Touro 28°21'\n10ª Casa em Gêmeos 22°17'\n11ª Casa em Câncer 15°07'\n12ª Casa em Leão 12°29'\n\nLua em trígono com Mercúrio (Orbe: 2°07', Separando)\nLua em trígono com Vênus (Orbe: 1°54', Separando)\nLua em trígono octil com Plutão (Orbe: 2°16', Aplicando)\nMercúrio em conjunção com Vênus (Orbe: 0°12', Aplicando)\nMercúrio em octil com Saturno (Orbe: 0°51', Separando)\nMercúrio em octil com Netuno (Orbe: 0°51', Aplicando)\nVênus em octil com Saturno (Orbe: 1°03', Separando)\nVênus em octil com Netuno (Orbe: 0°38', Aplicando)\nMarte em conjunção com Plutão (Orbe: 0°46', Separando)\nSaturno em sextil com Urano (Orbe: 0°52', Separando)\nSaturno em conjunção com Netuno (Orbe: 1°42', Aplicando)\nUrano em sextil com Netuno (Orbe: 2°34', Separando)\n\nAscendente em quadratura com a Lua (Orbe: 2°26', separando)\nAscendente em trí-óctil com Marte (Orbe: 0°37', aplicando)\nAscendente em sextil com Júpiter (Orbe: 1°03', separando)\nAscendente em trí-óctil com Plutão (Orbe: 0°09', separando) Descendente\nem quadratura com a Lua (Orbe: 2°26', separando)\nDescendente em octil com Marte (Orbe: 0°37', aplicando)\nDescendente em trígono com Júpiter (Orbe: 1°03', separando)\nDescendente em octil com Plutão (Orbe: 0°09', separando)\nMeio do Céu em trí-óctil com o Sol (Orbe: 1°47', aplicando)\nMeio do Céu em trí-óctil com Marte (Orbe: 2°54', separando)\nMeio do Céu em sextil com Quíron (Orbe: 0°37', aplicando) Fundo\ndo Céu em octil com o Sol (Orbe: 1°47', em aplicação)\nIC em octil com Marte (Orbe: 2°54', em separação)\nIC em trígono com Quíron (Orbe: 0°37', em aplicação)\nNodo Norte em octil com Quíron (Orbe: 2°45', em aplicação)\nLilith em sextil com Marte (Orbe: 0°00', em aplicação)\nLilith em trígono com Júpiter (Orbe: 1°41', em separação)\nLilith em sextil com Plutão (Orbe: 0°47', em separação)\nFortuna em quadratura com o Sol (Orbe: 2°26', em separação)\nFortuna em quadratura com Mercúrio (Orbe: 2°41', em aplicação)\nFortuna em quadratura com Vênus (Orbe: 2°53', em aplicação)\nFortuna em octil com Saturno (Orbe: 1°50', em aplicação)\nFortuna em sextil com o Nodo (Orbe: 0°49', em separação)\nVértice em octil com o Sol (Orbe: 1°20', Separando)\nConjunção do vértice com Saturno (Orbe: 2°55', Aplicando)\nSextil do vértice com Urano (Orbe: 2°03', Aplicando)",
    jogoGerado: [6, 7, 8, 20, 13, 4, 5, 11, 21, 23, 9, 16, 1, 10, 19],
    resultado: [1, 4, 6, 7, 8, 9, 11, 12, 13, 16, 19, 20, 21, 23, 24],
    obs: "",
  },
  {
    id: "h200_3600", concurso: "3600", data: "29/01/2026", hora: "",
    textoMapa: "Sol em Aquário 10°05', na 5ª Casa;\nLua em Câncer 0°53', na 10ª Casa;\nMercúrio em Aquário 15°57', na 6ª Casa;\nVênus em Aquário 15°40', na 6ª Casa;\nMarte em Aquário 5°09', na 5ª Casa;\nJúpiter em Câncer 17°35', retrógrado, na 11ª Casa;\nSaturno em Peixes 28°26', na 7ª Casa;\nUrano em Touro 27°28', retrógrado, na 8ª Casa\n; Netuno em Áries 0°05', na 7ª Casa;\nPlutão em Aquário 3°37', na 5ª Casa;\nNodo Norte em Peixes 10°38', retrógrado, na 6ª Casa;\nLilith em Sagitário 4°30', na 3ª Casa;\nQuíron em Áries 22°56', na 7ª Casa.\nFortuna em Áries 29°16', no\nVértice da 8ª Casa em Peixes 25°57', no\nAscendente da 7ª Casa em Virgem 20°04',\nMeio do Céu em Gêmeos 23°12'\n\n1ª Casa em Virgem 20°04'\n2ª Casa em Libra 28°52'\n3ª Casa em Escorpião 29°21'\n4ª Casa em Sagitário 23°12'\n5ª Casa em Capricórnio 16°03'\n6ª Casa em Aquário 13°36'\n7ª Casa em Peixes 20°04'\n8ª Casa em Áries 28°52'\n9ª Casa em Touro 29°21'\n10ª Casa em Gêmeos 23°12'\n11ª Casa em Câncer 16°03'\n12ª Casa em Leão 13°36'\n\nLua em Tri-Octil com Mercúrio (Orbe: 0°03', Aproximando-se)\nLua em Tri-Octil com Vênus (Orbe: 0°13', Separando-se)\nLua em Quadratura com Saturno (Orbe: 2°26', Separando-se)\nLua em Quadratura com Netuno (Orbe: 0°48', Separando-se)\nLua em Quincúncio com Plutão (Orbe: 2°44', Aproximando-se)\nMercúrio em Conjunção com Vênus (Orbe: 0°17', Separando-se)\nMercúrio em Quincúncio com Júpiter (Orbe: 1°38', Aproximando-se)\nMercúrio em Octil com Saturno (Orbe: 2°30', Separando-se)\nMercúrio em Octil com Netuno (Orbe: 0°51', Separando-se)\nVênus em Quincúncio com Júpiter (Orbe: 1°55', Aproximando-se)\nVênus em Octil com Saturno (Orbe: 2°13', Separando-se)\nVênus em Octil com Netuno (Orbe: 0°34', Separando-se)\nMarte Conjunção de Plutão (Orbe: 1°31', Separando)\nSaturno Sextil Urano (Orbe: 0°58', Separando)\nSaturno Conjunção de Netuno (Orbe: 1°38', Aplicando)\nUrano Sextil Netuno (Orbe: 2°36', Separando)\n\nTri-óctil do Ascendente com Marte (Orbe: 0°05', em movimento)\nSextil do Ascendente com Júpiter (Orbe: 2°29', em movimento)\nTri-óctil do Ascendente com Plutão (Orbe: 1°26', em movimento)\nQuincúncio do Ascendente com Quíron (Orbe: 2°52', em movimento)\nOctil do Descendente com Marte (Orbe: 0°05', em movimento)\nTrígono do Descendente com Júpiter (Orbe: 2°29', em movimento)\nOctil do Descendente com Plutão (Orbe: 1°26', em movimento)\nTri-óctil do Meio do Céu com o Sol (Orbe: 1°53', em movimento)\nSextil do Meio do Céu com Quíron (Orbe: 0°15', em movimento)\nOctil do Fundo do Céu com o Sol (Orbe: 1°53', em movimento)\nTrígono do Fundo do Céu com Quíron (Orbe: 0°15', em movimento)\nOctil do Nodo Norte Quíron (Orbe: 2°41', em movimento)\nLilith em sextil com Marte (Orbe: 0°39', em movimento)\nLilith em trí-óctil com Júpiter (Orbe: 1°55', em movimento)\nLilith em sextil com Plutão (Orbe: 0°52', em movimento)\nFortuna em sextil com a Lua (Orbe: 1°37', em movimento)\nVértice em octil com o Sol (Orbe: 0°51', em movimento)\nVértice em conjunção com Saturno (Orbe: 2°29', em movimento)\nVértice em sextil com Urano (Orbe: 1°30', em movimento)\nVértice em quadratura com o Meio do Céu (Orbe: 2°45', em movimento)\nVértice em quadratura com o Fundo do Céu (Orbe: 2°45', em movimento)",
    jogoGerado: [6, 7, 8, 17, 22, 13, 20, 4, 5, 11, 12, 21, 23, 9, 16],
    resultado: [3, 4, 5, 6, 7, 8, 9, 11, 12, 16, 17, 20, 21, 22, 25],
    obs: "",
  },
  {
    id: "h200_3601", concurso: "3601", data: "30/01/2026", hora: "",
    textoMapa: "Sol em Aquário 11°06', na 5ª Casa;\nLua em Câncer 15°27', na 10ª Casa;\nMercúrio em Aquário 17°42', na 6ª Casa;\nVênus em Aquário 16°55', na 6ª Casa;\nMarte em Aquário 5°56', na 5ª Casa;\nJúpiter em Câncer 17°28', retrógrado, na 11ª Casa;\nSaturno em Peixes 28°32', na 7ª Casa;\nUrano em Touro 27°28', retrógrado, na 8ª Casa\n; Netuno em Áries 0°06', na 7ª Casa;\nPlutão em Aquário 3°39', na 5ª Casa;\nNodo Norte em Peixes 10°34', retrógrado, na 6ª Casa;\nLilith em Sagitário 4°36', na 3ª Casa;\nQuíron em Áries 22°58', na 7ª Casa.\nFortuna em Áries 17°02', na 7ª Casa\n; Vértice em Peixes 26°29', na 7ª Casa;\nAscendente em Virgem 21°23';\nMeio do Céu em Gêmeos 24°06'.\n\n1ª Casa em Virgem 21°23'\n2ª Casa em Escorpião 0°04'\n3ª Casa em Sagitário 0°21'\n4ª Casa em Sagitário 24°06'\n5ª Casa em Capricórnio 17°00'\n6ª Casa em Aquário 14°44'\n7ª Casa em Peixes 21°23'\n8ª Casa em Touro 0°04'\n9ª Casa em Gêmeos 0°21'\n10ª Casa em Gêmeos 24°06'\n11ª Casa em Câncer 17°00'\n12ª Casa em Leão 14°44'\n\nSol em octil com Saturno (Orbe: 2°25', em movimento subsequente)\nLua em quincúncio com Mercúrio (Orbe: 2°15', em movimento subsequente)\nLua em quincúncio com Vênus (Orbe: 1°27', em movimento subsequente)\nLua em conjunção com Júpiter (Orbe: 2°00', em movimento subsequente)\nLua em octil com Urano (Orbe: 2°59', em movimento subsequente)\nMercúrio em conjunção com Vênus (Orbe: 0°47', em movimento subsequente)\nMercúrio em quincúncio com Júpiter (Orbe: 0°14', em movimento subsequente)\nMercúrio em octil com Netuno (Orbe: 2°35', em movimento subsequente)\nVênus em quincúncio com Júpiter (Orbe: 0°33', em movimento subsequente)\nVênus em octil com Netuno (Orbe: 1°48', em movimento subsequente)\nMarte em conjunção com Plutão (Orbe: 2°16', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 1°04', em movimento subsequente)\nSaturno Conjunção de Netuno (Orbe: 1°34', Aplicando)\nUrano em sextil com Netuno (Orbe: 2°38', Separando)\n\nTri-óctil de Marte no Ascendente (Orbe: 0°26', Separando)\nTri-óctil de Plutão no Ascendente (Orbe: 2°43', Separando)\nQuincúncio de Quíron no Ascendente (Orbe: 1°34', Aplicando)\nOctil de Marte no Descendente (Orbe: 0°26', Separando)\nOctil de Plutão no Descendente (Orbe: 2°43', Separando)\nTri-óctil de Sol no Meio do Céu (Orbe: 2°00', Aplicando)\nSextil de Quíron no Meio do Céu (Orbe: 1°08', Separando)\nOctil de Sol no Fundo do Céu (Orbe: 2°00', Aplicando)\nTrígono de Quíron no Fundo do Céu (Orbe: 1°08', Separando)\nOctil de Quíron no Nodo Norte (Orbe: 2°36', Aplicando)\nSextil de Lilith em Marte (Orbe: 1°19', Separando)\nLilith Tri-óctil Júpiter (Orbe: 2°08', Separando)\nLilith Sextil Plutão (Orbe: 0°57', Separando)\nFortuna Quadratura Lua (Orbe: 1°34', Separando)\nFortuna Sextil Mercúrio (Orbe: 0°40', Aplicando)\nFortuna Sextil Vênus (Orbe: 0°07', Separando)\nFortuna Quadratura Júpiter (Orbe: 0°25', Aplicando)\nFortuna Tri-óctil Lilith (Orbe: 2°34', Aplicando)\nVértice Octil Sol (Orbe: 0°23', Separando)\nVértice Conjunção Saturno (Orbe: 2°02', Aplicando)\nVértice Sextil Urano (Orbe: 0°58', Aplicando)\nVértice Quadratura MC (Orbe: 2°23', Separando)\nVértice Quadratura IC (Orbe: 2°23', Separando)",
    jogoGerado: [11, 6, 7, 8, 17, 13, 20, 19, 1, 23, 3, 4, 21, 24, 25],
    resultado: [2, 3, 4, 6, 7, 8, 9, 11, 16, 17, 20, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3602", concurso: "3602", data: "31/01/2026", hora: "",
    textoMapa: "Sol em Aquário 12°07', na 5ª Casa;\nLua em Câncer 29°54', na 11ª Casa;\nMercúrio em Aquário 19°28', na 6ª Casa;\nVênus em Aquário 18°10', na 6ª Casa;\nMarte em Aquário 6°43', na 5ª Casa;\nJúpiter em Câncer 17°21', retrógrado, na 10ª Casa;\nSaturno em Peixes 28°38', na 7ª Casa;\nUrano em Touro 27°27', retrógrado, na 8ª Casa\n; Netuno em Áries 0°08', na 7ª Casa;\nPlutão em Aquário 3°41', na 5ª Casa;\nNodo Norte em Peixes 10°31', retrógrado, na 6ª Casa;\nLilith em Sagitário 4°43', na 3ª Casa;\nQuíron em Áries 22°59', na 7ª Casa.\nFortuna em Áries 4°55', na 7ª Casa\n; Vértice em Peixes 27°01', na 7ª Casa;\nAscendente em Virgem 22°42';\nMeio do Céu em Gêmeos 25°00'.\n\n1ª Casa em Virgem 22°42'\n2ª Casa em Escorpião 1°16'\n3ª Casa em Sagitário 1°20'\n4ª Casa em Sagitário 25°00'\n5ª Casa em Capricórnio 17°57'\n6ª Casa em Aquário 15°51'\n7ª Casa em Peixes 22°42'\n8ª Casa em Touro 1°16'\n9ª Casa em Gêmeos 1°20'\n10ª Casa em Gêmeos 25°00'\n11ª Casa em Câncer 17°57'\n12ª Casa em Leão 15°51'\n\nSol em octil com Saturno (Orbe: 1°30', em movimento subsequente)\nLua em trígono com Saturno (Orbe: 1°16', em movimento subsequente)\nLua em sextil com Urano (Orbe: 2°26', em movimento subsequente)\nLua em trígono com Netuno (Orbe: 0°13', em movimento subsequente)\nMercúrio em conjunção com Vênus (Orbe: 1°17', em movimento subsequente)\nMercúrio em quincúncio com Júpiter (Orbe: 2°06', em movimento subsequente)\nVênus em quincúncio com Júpiter (Orbe: 0°49', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 1°10', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 1°29', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°40', em movimento subsequente)\n\nTri-óctil do Ascendente com Marte (Orbe: 0°58', Separando)\nQuincúncio do Ascendente com Quíron (Orbe: 0°17', Aplicando)\nDescendente em óctil com Marte (Orbe: 0°58', Separando)\nMeio do Céu em Tri-óctil com o Sol (Orbe: 2°06', Aplicando)\nMeio do Céu em Sextil com Quíron (Orbe: 2°00', Separando)\nFundo do Céu em óctil com o Sol (Orbe: 2°06', Aplicando)\nFundo do Céu em Quincúncio com Urano (Orbe: 2°27', Aplicando)\nFundo do Céu em Trígono com Quíron (Orbe: 2°00', Separando)\nNodo Norte em óctil com Quíron (Orbe: 2°31', Aplicando)\nLilith em Sextil com Marte (Orbe: 1°59', Separando)\nLilith em Tri-óctil com Júpiter (Orbe: 2°22', Separando)\nLilith em Sextil com Plutão (Orbe: 1°01', Separando)\nFortuna em Octil com Mercúrio (Orbe: 0°26', Separando)\nFortuna em Octil com Vênus (Orbe: 1°44', Separando)\nFortuna em Sextil com Marte (Orbe: 1°48', Aplicando)\nFortuna em Sextil com Plutão (Orbe: 1°13', Separando)\nFortuna em Trígono com Lilith (Orbe: 0°11', Separando)\nVértice em Octil com o Sol (Orbe: 0°05', Aplicando)\nVértice em Trígono com a Lua (Orbe: 2°52', Aplicando)\nVértice em Conjunção com Saturno (Orbe: 1°36', Aplicando)\nVértice em Sextil com Urano (Orbe: 0°25', Aplicando)\nVértice em Quadratura com o Meio do Céu (Orbe: 2°01', Separando) Vértice em\nQuadratura com o Fundo do Céu (Orbe: 2°01', Separando)",
    jogoGerado: [2, 5, 6, 15, 24, 13, 20, 1, 9, 19, 8, 3, 4, 11, 21],
    resultado: [1, 2, 3, 4, 5, 6, 8, 9, 15, 18, 19, 20, 22, 23, 24],
    obs: "",
  },
  {
    id: "h200_3603", concurso: "3603", data: "02/02/2026", hora: "",
    textoMapa: "Sol em Aquário 14°09', na 5ª Casa;\nLua em Leão 28°04', na 12ª Casa;\nMercúrio em Aquário 23°00', na 6ª Casa;\nVênus em Aquário 20°41', na 6ª Casa;\nMarte em Aquário 8°17', na 5ª Casa;\nJúpiter em Câncer 17°08', retrógrado, na 10ª Casa;\nSaturno em Peixes 28°50', na 7ª Casa;\nUrano em Touro 27°27', retrógrado, na 8ª Casa\n; Netuno em Áries 0°11', na 7ª Casa;\nPlutão em Aquário 3°45', na 5ª Casa;\nNodo Norte em Peixes 10°25', retrógrado, na 6ª Casa;\nLilith em Sagitário 4°57', na 3ª Casa;\nQuíron em Áries 23°03', na 7ª Casa.\nFortuna em Peixes 11°25', na 6ª Casa;\nVértice em Peixes 28°06', na 7ª Casa;\nAscendente em Virgem 25°21';\nMeio do Céu em Gêmeos 26°49'.\n\n1ª Casa em Virgem 25°21'\n2ª Casa em Escorpião 3°40'\n3ª Casa em Sagitário 3°19'\n4ª Casa em Sagitário 26°49'\n5ª Casa em Capricórnio 19°52'\n6ª Casa em Aquário 18°08'\n7ª Casa em Peixes 25°21'\n8ª Casa em Touro 3°40'\n9ª Casa em Gêmeos 3°19'\n10ª Casa em Gêmeos 26°49'\n11ª Casa em Câncer 19°52'\n12ª Casa em Leão 18°08'\n\nSol em quincúncio com Júpiter (Orbe: 2°59', em movimento subsequente)\nSol em octil com Saturno (Orbe: 0°18', em movimento subsequente)\nSol em octil com Netuno (Orbe: 1°02', em movimento subsequente)\nLua em quincúncio com Saturno (Orbe: 0°45', em movimento subsequente)\nLua em quadratura com Urano (Orbe: 0°37', em movimento subsequente)\nLua em quincúncio com Netuno (Orbe: 2°06', em movimento subsequente)\nMercúrio em conjunção com Vênus (Orbe: 2°19', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 1°22', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 1°21', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°44', em movimento subsequente)\n\nAscendente em Quincúncio com Mercúrio (Orbe: 2°20', Separando)\nAscendente em Tri-Óctil com Marte (Orbe: 2°03', Separando)\nAscendente em Trígono com Urano (Orbe: 2°06', Aplicando)\nAscendente em Quincúncio com Quíron (Orbe: 2°17', Separando) Descendente em\nQuincúncio com a Lua (Orbe: 2°43', Aplicando)\nDescendente em Octil com Marte (Orbe: 2°03', Separando)\nDescendente em Sextil com Urano (Orbe: 2°06', Aplicando) Meio do Céu em\nTri-Óctil com o Sol (Orbe: 2°19', Aplicando) Meio\ndo Céu em Sextil com a Lua (Orbe: 1°15', Aplicando)\nMeio do Céu em Quadratura com Saturno (Orbe: 2°00', Aplicando)\nFundo do Céu em Octil com o Sol (Orbe: 2°19', Aplicando) Fundo do Céu em\nTrígono com a Lua (Orbe: 1°15', em aplicação)\nIC em quadratura com Saturno (Orbe: 2°00', em aplicação)\nIC em quincúncio com Urano (Orbe: 0°38', em aplicação)\nNodo Norte em octil com Quíron (Orbe: 2°22', em aplicação)\nLilith em tri-octil com Júpiter (Orbe: 2°48', em separação)\nLilith em sextil com Plutão (Orbe: 1°11', em separação)\nQuíron em sextil com Mercúrio (Orbe: 0°02', em aplicação)\nQuíron em sextil com Vênus (Orbe: 2°22', em aplicação)\nNodo em conjunção com a Fortuna (Orbe: 1°00', em separação)\nVértice em octil com o Sol (Orbe: 1°02', em aplicação)\nVértice em quincúncio com a Lua (Orbe: 0°01', em separação)\nVértice em conjunção com Saturno (Orbe: 0°43', em aplicação)\nVértice em sextil com Urano (Orbe:\nVértice em conjunção com Netuno (Orbe: 2°05', Aplicando) Vértice\nem oposição ao Ascendente (Orbe: 2°45', Separando)\nVértice em quadratura com o Meio do Céu (Orbe: 1°17', Separando)\nVértice em quadratura com o Fundo do Céu (Orbe: 1°17', Separando)\nVértice em conjunção com o Descendente (Orbe: 2°45', Separando)",
    jogoGerado: [13, 20, 2, 19, 24, 5, 4, 9, 11, 15, 16, 21, 23, 25, 10],
    resultado: [2, 4, 5, 9, 10, 11, 12, 14, 15, 17, 19, 20, 21, 22, 24],
    obs: "",
  },
  {
    id: "h200_3604", concurso: "3604", data: "03/02/2026", hora: "",
    textoMapa: "Sol em Aquário 15°10', na 5ª Casa;\nLua em Virgem 11°39', na 12ª Casa;\nMercúrio em Aquário 24°47', na 6ª Casa;\nVênus em Aquário 21°56', na 6ª Casa;\nMarte em Aquário 9°04', na 5ª Casa;\nJúpiter em Câncer 17°02', retrógrado, na 10ª Casa;\nSaturno em Peixes 28°56', na 7ª Casa;\nUrano em Touro 27°27', estacionário, na 8ª Casa\n; Netuno em Áries 0°13', na 7ª Casa;\nPlutão em Aquário 3°47', na 5ª Casa;\nNodo Norte em Peixes 10°22', retrógrado, na 6ª Casa;\nLilith em Sagitário 5°03', na 3ª Casa\n; Quíron em Áries 23°04', na 7ª Casa. Fortuna na Casa\nde Peixes 0°11', Vértice na 6ª Casa\nem Peixes 28°38',\nAscendente na 7ª Casa em Virgem 26°40',\nMeio do Céu em Gêmeos 27°43'\n\n1ª Casa em Virgem 26°40'\n2ª Casa em Escorpião 4°51'\n3ª Casa em Sagitário 4°18'\n4ª Casa em Sagitário 27°43'\n5ª Casa em Capricórnio 20°49'\n6ª Casa em Aquário 19°17'\n7ª Casa em Peixes 26°40'\n8ª Casa em Touro 4°51'\n9ª Casa em Gêmeos 4°18'\n10ª Casa em Gêmeos 27°43'\n11ª Casa em Câncer 20°49'\n12ª Casa em Leão 19°17'\n\nSol em quincúncio com Júpiter (Orbe: 1°52', em movimento subsequente)\nSol em octil com Saturno (Orbe: 1°13', em movimento subsequente)\nSol em octil com Netuno (Orbe: 0°03', em movimento subsequente)\nLua em quincúncio com Marte (Orbe: 2°34', em movimento subsequente)\nMercúrio em conjunção com Vênus (Orbe: 2°50', em movimento subsequente)\nMercúrio em quadratura com Urano (Orbe: 2°40', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 1°28', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 1°17', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°45', em movimento subsequente)\n\nQuincúncio do Ascendente com Mercúrio (Orbe: 1°53', Separando)\nTri-óctilo do Ascendente com Marte (Orbe: 2°35', Separando)\nOposição do Ascendente com Saturno (Orbe: 2°15', Aplicando)\nTrígono do Ascendente com Urano (Orbe: 0°47', Aplicando)\nOctil do Descendente com Marte (Orbe: 2°35', Separando)\nConjunção do Descendente com Saturno (Orbe: 2°15', Aplicando)\nSextil do Descendente com Urano (Orbe: 0°47', Aplicando)\nTri-óctilo do Meio do Céu com o Sol (Orbe: 2°26', Aplicando)\nTrígono do Meio do Céu com Mercúrio (Orbe: 2°56', Separando)\nQuadratura do Meio do Céu com Saturno (Orbe: 1°12', Aplicando) Quadratura do Meio do Céu com\nNetuno (Orbe: 2°29', Aplicando)\nOctil do Fundo do Céu com o Sol (Orbe: 2°26', em aplicação)\nIC em sextil com Mercúrio (Orbe: 2°56', em separação)\nIC em quadratura com Saturno (Orbe: 1°12', em aplicação)\nIC em quincúncio com Urano (Orbe: 0°16', em separação)\nIC em quadratura com Netuno (Orbe: 2°29', em aplicação)\nNodo Norte em oposição à Lua (Orbe: 1°17', em separação)\nNodo Norte em octil com Quíron (Orbe: 2°17', em aplicação)\nLilith em sextil com Plutão (Orbe: 1°16', em separação)\nQuíron em sextil com Mercúrio (Orbe: 1°42', em separação)\nQuíron em sextil com Vênus (Orbe: 1°08', em aplicação)\nFortuna em trígono com o MC (Orbe: 1°51', em aplicação)\nFortuna em quadratura com Urano (Orbe: 2°43', em separação)\nFortuna em trígono com o MC (Orbe: 2°27', Sextil da Fortuna com\no IC (Orbe: 2°27', Separando)\nOctil do Vértice com o Sol (Orbe: 1°31', Aplicando)\nConjunção do Vértice com Saturno (Orbe: 0°17', Aplicando)\nSextil do Vértice com Urano (Orbe: 1°11', Separando)\nConjunção do Vértice com Netuno (Orbe: 1°34', Aplicando)\nOposição do Vértice com o Ascendente (Orbe: 1°58', Separando)\nQuadratura do Vértice com o MC (Orbe: 0°55', Separando)\nQuadratura do Vértice com o IC (Orbe: 0°55', Separando)\nConjunção do Vértice com o DSC (Orbe: 1°58', Separando)",
    jogoGerado: [3, 21, 13, 20, 2, 19, 7, 22, 4, 11, 15, 24, 10, 1, 5],
    resultado: [1, 2, 3, 6, 7, 8, 11, 13, 15, 16, 19, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h200_3605", concurso: "3605", data: "04/02/2026", hora: "",
    textoMapa: "Sol em Aquário 16°10', na 5ª Casa;\nLua em Virgem 24°51', na 12ª Casa;\nMercúrio em Aquário 26°33', na 6ª Casa;\nVênus em Aquário 23°11', na 6ª Casa;\nMarte em Aquário 9°51', na 5ª Casa;\nJúpiter em Câncer 16°55', retrógrado, na 10ª Casa;\nSaturno em Peixes 29°02', na 7ª Casa;\nUrano em Touro 27°27', na 8ª Casa;\nNetuno em Áries 0°15', na 7ª Casa;\nPlutão em Aquário 3°49', na 5ª Casa;\nNodo Norte em Peixes 10°19', retrógrado, na 6ª Casa;\nLilith em Sagitário 5°10', na 2ª Casa;\nQuíron em Áries 23°06', na 7ª Casa;\nFortuna em Aquário 19°19', na 5ª Casa,\nVértice em Peixes 29°11', na 7ª Casa,\nAscendente em Virgem 27°59',\nMeio do Céu em Gêmeos 28°37'\n\n1ª Casa em Virgem 27°59'\n2ª Casa em Escorpião 6°02'\n3ª Casa em Sagitário 5°16'\n4ª Casa em Sagitário 28°37'\n5ª Casa em Capricórnio 21°47'\n6ª Casa em Aquário 20°26'\n7ª Casa em Peixes 27°59'\n8ª Casa em Touro 6°02'\n9ª Casa em Gêmeos 5°16'\n10ª Casa em Gêmeos 28°37'\n11ª Casa em Câncer 21°47'\n12ª Casa em Leão 20°26'\n\nSol em Quincúncio com Júpiter (Orbe: 0°45', em movimento subsequente)\nSol em Octil com Saturno (Orbe: 2°08', em movimento subsequente)\nSol em Octil com Netuno (Orbe: 0°55', em movimento subsequente)\nLua em Quincúncio com Mercúrio (Orbe: 1°42', em movimento subsequente)\nLua em Quincúncio com Vênus (Orbe: 1°39', em movimento subsequente)\nLua em Tri-Octil com Marte (Orbe: 0°00', em movimento subsequente)\nLua em Trígono com Urano (Orbe: 2°36', em movimento subsequente)\nMercúrio em Quadratura com Urano (Orbe: 0°54', em movimento subsequente)\nSaturno em Sextil com Urano (Orbe: 1°34', em movimento subsequente)\nSaturno em Conjunção com Netuno (Orbe: 1°12', em movimento subsequente)\nUrano em Sextil com Netuno (Orbe: 2°47', em movimento subsequente)\n\nQuincúncio do Ascendente com Mercúrio (Orbe: 1°26', Separando)\nOposição do Ascendente com Saturno (Orbe: 1°02', Aplicando)\nTrígono do Ascendente com Urano (Orbe: 0°32', Separando)\nOposição do Ascendente com Netuno (Orbe: 2°15', Aplicando)\nConjunção do Descendente com Saturno (Orbe: 1°02', Aplicando)\nSextil do Descendente com Urano (Orbe: 0°32', Separando)\nConjunção do Descendente com Netuno (Orbe: 2°15', Aplicando)\nTri-óctilo do Meio do Céu com o Sol (Orbe: 2°32', Aplicando)\nTrígono do Meio do Céu com Mercúrio (Orbe: 2°04', Separando)\nQuadratura do Meio do Céu com Saturno (Orbe: 0°24', Aplicando)\nQuadratura do Meio do Céu com Netuno (Orbe: 1°37', Aplicando)\nÓctilo do Fundo do Céu com o Sol (Orbe: 2°32', em aplicação)\nIC em sextil com Mercúrio (Orbe: 2°04', em separação)\nIC em quadratura com Saturno (Orbe: 0°24', em aplicação)\nIC em quincúncio com Urano (Orbe: 1°10', em separação)\nIC em quadratura com Netuno (Orbe: 1°37', em aplicação)\nNodo Norte em octil com Quíron (Orbe: 2°12', em aplicação)\nLilith em sextil com Plutão (Orbe: 1°21', em separação)\nLilith em tri-octil com Quíron (Orbe: 2°56', em aplicação)\nQuíron em quincúncio com a Lua (Orbe: 1°44', em separação)\nQuíron em sextil com Vênus (Orbe: 0°04', em separação)\nFortuna em quincúncio com Júpiter (Orbe: 2°23', em separação)\nVertex em octil com o Sol (Orbe: 1°59', em aplicação)\nVertex em conjunção com Saturno (Orbe:\nVertex em sextil com Urano (Orbe: 1°43', Separando )\nVertex em conjunção com Netuno (Orbe: 1°04', Aplicando)\nVertex em oposição ao Ascendente (Orbe: 1°11', Separando)\nVertex em quadratura com o Meio do Céu (Orbe: 0°33', Separando)\nVertex em quadratura com o Fundo do Céu (Orbe: 0°33', Separando)\nVertex em conjunção com o Descendente (Orbe: 1°11', Separando)",
    jogoGerado: [4, 13, 20, 2, 5, 23, 19, 25, 11, 21, 24, 10, 1, 17, 15],
    resultado: [1, 3, 4, 7, 10, 12, 13, 14, 19, 20, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3606", concurso: "3606", data: "05/02/2026", hora: "",
    textoMapa: "Sol em Aquário 17°11', na 5ª Casa;\nLua em Libra 7°41', na 1ª Casa;\nMercúrio em Aquário 28°19', na 6ª Casa;\nVênus em Aquário 24°26', na 6ª Casa;\nMarte em Aquário 10°38', na 5ª Casa;\nJúpiter em Câncer 16°49', retrógrado, na 10ª Casa;\nSaturno em Peixes 29°08', na 6ª Casa;\nUrano em Touro 27°27', na 8ª Casa;\nNetuno em Áries 0°16', na 7ª Casa;\nPlutão em Aquário 3°51', na 5ª Casa;\nNodo Norte em Peixes 10°15', retrógrado, na 6ª Casa;\nLilith em Sagitário 5°17', na 2ª Casa;\nQuíron em Áries 23°08', na 7ª Casa;\nFortuna em Aquário 8°49', na 5ª Casa,\nVértice em Peixes 29°43', na 7ª Casa,\nAscendente em Virgem 29°19',\nMeio do Céu em Gêmeos 29°32'\n\n1ª Casa em Virgem 29°19'\n2ª Casa em Escorpião 7°12'\n3ª Casa em Sagitário 6°15'\n4ª Casa em Sagitário 29°32'\n5ª Casa em Capricórnio 22°45'\n6ª Casa em Aquário 21°35'\n7ª Casa em Peixes 29°19'\n8ª Casa em Touro 7°12'\n9ª Casa em Gêmeos 6°15'\n10ª Casa em Gêmeos 29°32'\n11ª Casa em Câncer 22°45'\n12ª Casa em Leão 21°35'\n\nSol em quincúncio com Júpiter (Orbe: 0°21', separando)\nSol em octil com Netuno (Orbe: 1°54', separando)\nLua em trígono com Vênus (Orbe: 1°45', aproximando)\nLua em trígono com Marte (Orbe: 2°57', aproximando)\nMercúrio em quadratura com Urano (Orbe: 0°51', separando)\nSaturno em sextil com Urano (Orbe: 1°41', separando)\nSaturno em conjunção com Netuno (Orbe: 1°08', aproximando)\nUrano em sextil com Netuno (Orbe: 2°49', separando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 2°52', em movimento)\nAscendente em Quincúncio com Mercúrio (Orbe: 0°59', em movimento de separação)\nAscendente em Oposição com Saturno (Orbe: 0°10', em movimento de separação)\nAscendente em Trígono com Urano (Orbe: 1°51', em movimento de separação)\nAscendente em Oposição com Netuno (Orbe: 0°57', em movimento) Descendente\nem Octil com o Sol (Orbe: 2°52', em movimento)\nDescendente em Conjunção com Saturno (Orbe: 0°10', em movimento de separação)\nDescendente em Sextil com Urano (Orbe: 1°51', em movimento de separação)\nDescendente em Conjunção com Netuno (Orbe: 0°57', em movimento)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 2°39', em movimento)\nMeio do Céu em Trígono com Mercúrio (Orbe: 1°12', em movimento de separação)\nMeio do Céu em Quadratura com Saturno (Orbe: 0°23', Separando)\nMC em quadratura com Netuno (Orbe: 0°44', Aplicando)\nIC em octil com o Sol (Orbe: 2°39', Aplicando)\nIC em sextil com Mercúrio (Orbe: 1°12', Separando)\nIC em quadratura com Saturno (Orbe: 0°23', Separando)\nIC em quincúncio com Urano (Orbe: 2°04', Separando)\nIC em quadratura com Netuno (Orbe: 0°44', Aplicando)\nNodo Norte em quincúncio com a Lua (Orbe: 2°34', Aplicando)\nNodo Norte em octil com Quíron (Orbe: 2°07', Aplicando)\nLilith em sextil com a Lua (Orbe: 2°23', Separando)\nLilith em sextil com Plutão (Orbe: 1°26', Separando)\nLilith em tri-óctil com Quíron (Orbe: 2°51', Aplicando)\nQuíron em sextil com Vênus (Orbe: 1°18', Separando)\nTrígono da Fortuna com a Lua (Orbe: 1°08', Separando)\nConjunção da Fortuna com Marte (Orbe: 1°48', Aplicando)\nOctil do Vértice com o Sol (Orbe: 2°28', Aplicando)\nConjunção do Vértice com Saturno (Orbe: 0°34', Separando)\nSextil do Vértice com Urano (Orbe: 2°15', Separando)\nConjunção do Vértice com Netuno (Orbe: 0°33', Aplicando)\nOposição do Vértice com o Ascendente (Orbe: 0°24', Separando)\nQuadratura do Vértice com o Meio do Céu (Orbe: 0°11', Separando) Quadratura do Vértice\ncom o Fundo do Céu (Orbe: 0°11', Separando)\nConjunção do Vértice com o Descendente (Orbe: 0°24', Separando)",
    jogoGerado: [20, 13, 2, 5, 23, 24, 3, 17, 19, 22, 4, 11, 21, 10, 1],
    resultado: [2, 3, 6, 7, 9, 11, 12, 14, 15, 17, 19, 20, 21, 23, 24],
    obs: "",
  },
  {
    id: "h200_3607", concurso: "3607", data: "06/02/2026", hora: "",
    textoMapa: "Sol em Aquário 18°12', na 5ª Casa;\nLua em Libra 20°11', na 1ª Casa;\nMercúrio em Peixes 0°05', na 6ª Casa;\nVênus em Aquário 25°42', na 6ª Casa;\nMarte em Aquário 11°25', na 5ª Casa;\nJúpiter em Câncer 16°43', retrógrado, na 10ª Casa;\nSaturno em Peixes 29°14', na 6ª Casa;\nUrano em Touro 27°27', na 8ª Casa;\nNetuno em Áries 0°18', na 6ª Casa;\nPlutão em Aquário 3°53', na 5ª Casa;\nNodo Norte em Peixes 10°12', retrógrado, na 6ª Casa;\nLilith em Sagitário 5°24', na 2ª Casa;\nQuíron em Áries 23°10', na 7ª Casa;\nFortuna em Capricórnio. 28°39', no\nVértice da 5ª Casa em Áries 0°15', no\nAscendente da 6ª Casa em Libra 0°38',\nMeio do Céu em Câncer 0°26'\n\n1ª Casa em Libra 0°38'\n2ª Casa em Escorpião 8°22'\n3ª Casa em Sagitário 7°13'\n4ª Casa em Capricórnio 0°26'\n5ª Casa em Capricórnio 23°43'\n6ª Casa em Aquário 22°45'\n7ª Casa em Áries 0°38'\n8ª Casa em Touro 8°22'\n9ª Casa em Gêmeos 7°13'\n10ª Casa em Câncer 0°26'\n11ª Casa em Câncer 23°43'\n12ª Casa em Leão 22°45'\n\nSol em trígono com a Lua (Orbe: 1°58', separando)\nSol em quincúncio com Júpiter (Orbe: 1°28', separando)\nSol em octil com Netuno (Orbe: 2°53', separando)\nMercúrio em trígono com octil de Júpiter (Orbe: 1°38', aproximando)\nMercúrio em quadratura com Urano (Orbe: 2°37', separando)\nVênus em quadratura com Urano (Orbe: 1°45', aproximando)\nMarte em octil com Saturno (Orbe: 2°49', aproximando)\nSaturno em sextil com Urano (Orbe: 1°47', separando)\nSaturno em conjunção com Netuno (Orbe: 1°03', aproximando)\nUrano em sextil com Netuno (Orbe: 2°50', separando)\n\nSol em Tri-Octil no Ascendente (Orbe: 2°33', em movimento)\nMercúrio em Quincúncio no Ascendente\n(Orbe: 0°33', em movimento de separação) Saturno em Oposição ao Ascendente (Orbe: 1°23', em movimento de separação)\nNetuno em Oposição ao Ascendente (Orbe: 0°20', em movimento de separação)\nSol em Octil no Descendente (Orbe: 2°33', em movimento)\nSaturno em Conjunção com o Descendente (Orbe: 1°23', em movimento de separação)\nNetuno em Conjunção com o Descendente (Orbe: 0°20', em movimento de separação)\nSol em Tri-Octil no Meio do Céu (Orbe: 2°45', em movimento)\nMercúrio em Trígono no Meio do Céu (Orbe: 0°21', em movimento de separação)\nSaturno em Quadratura no Meio do Céu (Orbe: 1°11', em movimento de separação)\nNetuno em Quadratura no Meio do Céu (Orbe: 0°07', em movimento de separação)\nSol em Octil no Fundo do Céu (Orbe: 2°45', em aplicação)\nIC em sextil com Mercúrio (Orbe: 0°21', em separação)\nIC em quadratura com Saturno (Orbe: 1°11', em separação)\nIC em quincúncio com Urano (Orbe: 2°58', em separação)\nIC em quadratura com Netuno (Orbe: 0°07', em separação)\nNodo Norte em octil com Quíron (Orbe: 2°02', em aplicação)\nLilith em octil com a Lua (Orbe: 0°12', em aplicação)\nLilith em sextil com Plutão (Orbe: 1°30', em separação)\nLilith em trígono com Quíron (Orbe: 2°46', em aplicação)\nQuíron em oposição à Lua (Orbe: 2°59', em aplicação)\nQuíron em sextil com Vênus (Orbe: 2°31', em separação)\nFortuna em sextil com Saturno (Orbe: 0°34', em aplicação)\nFortuna em trígono com Urano (Orbe:\nFortuna em sextil com Netuno (Orbe: 1°38', em movimento) Fortuna\nem trígono com o Ascendente (Orbe: 1°58', em movimento)\nFortuna em quincúncio com o Meio do Céu (Orbe: 1°46', em movimento)\nFortuna em sextil com o Vértice (Orbe: 1°20', em movimento)\nFortuna em sextil com o Descendente (Orbe: 1°58', em movimento)\nVértice em octil com o Sol (Orbe: 2°56', em movimento)\nVértice em conjunção com Saturno (Orbe: 1°00', em movimento)\nVértice em sextil com Urano (Orbe: 2°47', em movimento)\nVértice em conjunção com Netuno (Orbe: 0°02', em movimento)\nVértice em oposição ao Ascendente (Orbe: 0°23', em movimento)\nVértice em quadratura com o Meio do Céu (Orbe: 0°10', em movimento)\nVértice em quadratura com o Fundo do Céu (Orbe: 0°10', Aplicando)\nConjunção do vértice DSC (Orb: 0°23', Separando)",
    jogoGerado: [4, 5, 13, 20, 2, 23, 6, 15, 19, 25, 17, 11, 10, 1, 24],
    resultado: [1, 2, 4, 5, 6, 8, 9, 13, 14, 15, 16, 18, 19, 20, 23],
    obs: "",
  },
  {
    id: "h200_3608", concurso: "3608", data: "07/02/2026", hora: "",
    textoMapa: "Sol em Aquário 19°13', na 5ª Casa;\nLua em Escorpião 2°25', na 1ª Casa;\nMercúrio em Peixes 1°50', na 6ª Casa;\nVênus em Aquário 26°57', na 6ª Casa;\nMarte em Aquário 12°12', na 5ª Casa;\nJúpiter em Câncer 16°38', retrógrado, na 10ª Casa;\nSaturno em Peixes 29°21', na 6ª Casa;\nUrano em Touro 27°27', na 8ª Casa;\nNetuno em Áries 0°20', na 6ª Casa;\nPlutão em Aquário 3°55', na 5ª Casa;\nNodo Norte em Peixes 10°09', retrógrado, na 6ª Casa;\nLilith em Sagitário 5°30', na 2ª Casa;\nQuíron em Áries 23°12', na 7ª Casa;\nFortuna em Capricórnio. 18°46', no\nVértice da 4ª Casa em Áries 0°48', no\nAscendente da 6ª Casa em Libra 1°58'\nMeio do Céu em Câncer 1°20'\n\n1ª Casa em Libra 1°58'\n2ª Casa em Escorpião 9°32'\n3ª Casa em Sagitário 8°11'\n4ª Casa em Capricórnio 1°20'\n5ª Casa em Capricórnio 24°41'\n6ª Casa em Aquário 23°56'\n7ª Casa em Áries 1°58'\n8ª Casa em Touro 9°32'\n9ª Casa em Gêmeos 8°11'\n10ª Casa em Câncer 1°20'\n11ª Casa em Câncer 24°41'\n12ª Casa em Leão 23°56'\n\nSol em quincúncio com Júpiter (Orbe: 2°35', separando)\nLua em trígono com Mercúrio (Orbe: 0°34', separando)\nLua em quincúncio com Netuno (Orbe: 2°04', separando)\nLua em quadratura com Plutão (Orbe: 1°29', aplicando)\nMercúrio em trígono octil com Júpiter (Orbe: 0°12', separando)\nVênus em quadratura com Urano (Orbe: 0°30', aplicando)\nMarte em octil com Saturno (Orbe: 2°08', aplicando)\nSaturno em sextil com Urano (Orbe: 1°53', separando)\nSaturno em conjunção com Netuno (Orbe: 0°59', aplicando)\nUrano em sextil com Netuno (Orbe: 2°52', separando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 2°14', em movimento)\nAscendente em Quincúncio com Mercúrio (Orbe: 0°08', em movimento de separação)\nAscendente em Oposição com Saturno (Orbe: 2°37', em movimento de separação)\nAscendente em Oposição com Netuno (Orbe: 1°37', em movimento de separação)\nAscendente em Trígono com Plutão (Orbe: 1°56', em movimento) Descendente\nem Octil com o Sol (Orbe: 2°14', em movimento)\nDescendente em Quincúncio com a Lua (Orbe: 0°26', em movimento)\nDescendente em Conjunção com Saturno (Orbe: 2°37', em movimento de separação)\nDescendente em Conjunção com Netuno (Orbe: 1°37', em movimento de separação)\nDescendente em Sextil com Plutão (Orbe: 1°56', em movimento)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 2°52', em movimento)\nMeio do Céu em Trígono com a Lua (Orbe: 1°04', em aplicação)\nMeio do Céu em trígono com Mercúrio (Orbe: 0°29', em aplicação)\nMeio do Céu em quadratura com Saturno (Orbe: 1°59', em separação)\nMeio do Céu em quadratura com Netuno (Orbe: 1°00', em separação) Meio do Céu\nem quincúncio com Plutão (Orbe: 2°34', em aplicação)\nFundo do Céu em octil com o Sol (Orbe: 2°52', em aplicação)\nFundo do Céu em sextil com a Lua (Orbe: 1°04', em aplicação) Fundo\ndo Céu em sextil com Mercúrio (Orbe: 0°29', em aplicação)\nFundo do Céu em quadratura com Saturno (Orbe: 1°59', em separação)\nFundo do Céu em quadratura com Netuno (Orbe: 1°00', em separação)\nNodo Norte em octil com Quíron (Orbe: 1°57', em aplicação)\nLilith em sextil com Plutão (Orbe: 1°35', em separação)\nLilith em trígono com octil de Quíron (Orbe: 2°41',\nFortuna em Octil com Mercúrio (Orbe: 1°56', Separando )\nFortuna em Oposição com Júpiter (Orbe: 2°08', Separando)\nFortuna em Octil com Lilith (Orbe: 1°44', Aplicando)\nLua em Quincúncio no Vértice (Orbe: 1°37', Aplicando)\nConjunção no Vértice com Saturno (Orbe: 1°26', Separando)\nConjunção no Vértice com Netuno (Orbe: 0°27', Separando)\nOposição no Vértice com o Ascendente (Orbe: 1°10', Separando)\nQuadratura no Vértice com o Meio do Céu (Orbe: 0°32', Aplicando)\nQuadratura no Vértice com o Fundo do Céu (Orbe: 0°32', Aplicando)\nConjunção no Vértice com o Descendente (Orbe: 1°10', Separando)",
    jogoGerado: [14, 25, 13, 20, 12, 17, 19, 11, 5, 23, 9, 10, 6, 8, 15],
    resultado: [2, 5, 6, 8, 9, 11, 14, 16, 17, 18, 19, 20, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3609", concurso: "3609", data: "09/02/2026", hora: "",
    textoMapa: "Sol em Aquário 21°14', na 5ª Casa;\nLua em Escorpião 26°21', na 2ª Casa;\nMercúrio em Peixes 5°16', na 6ª Casa;\nVênus em Aquário 29°27', na 6ª Casa;\nMarte em Aquário 13°47', na 5ª Casa;\nJúpiter em Câncer 16°26', retrógrado, na 10ª Casa;\nSaturno em Peixes 29°33', na 6ª Casa;\nUrano em Touro 27°28', na 8ª Casa;\nNetuno em Áries 0°24', na 6ª Casa;\nPlutão em Aquário 3°58', na 5ª Casa;\nNodo Norte em Peixes 10°03', retrógrado, na 6ª Casa;\nLilith em Sagitário 5°44', na 2ª Casa;\nQuíron em Áries 23°16', na 7ª Casa;\nFortuna em Sagitário 29°30', na 3ª Casa,\nVértice em Áries 1°52', na 6ª Casa,\nAscendente em Libra 4°37',\nMeio do Céu em Câncer 3°09'\n\n1ª Casa em Libra 4°37'\n2ª Casa em Escorpião 11°50'\n3ª Casa em Sagitário 10°06'\n4ª Casa em Capricórnio 3°09'\n5ª Casa em Capricórnio 26°39'\n6ª Casa em Aquário 26°18'\n7ª Casa em Áries 4°37'\n8ª Casa em Touro 11°50'\n9ª Casa em Gêmeos 10°06'\n10ª Casa em Câncer 3°09'\n11ª Casa em Câncer 26°39'\n12ª Casa em Leão 26°18'\n\nLua em oposição a Urano (Orbe: 1°07', em movimento subsequente)\nVênus em trí-óctilo com Júpiter (Orbe: 1°59', em movimento subsequente)\nVênus em quadratura com Urano (Orbe: 1°59', em movimento subsequente)\nMarte em quincúncio com Júpiter (Orbe: 2°39', em movimento subsequente)\nMarte em octil com Saturno (Orbe: 0°46', em movimento subsequente)\nMarte em octil com Netuno (Orbe: 1°37', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 2°05', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 0°50', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°55', em movimento subsequente)\n\nAscendente em trí-óctil com o Sol (Orbe: 1°37', em movimento)\nAscendente em quincúncio com Mercúrio (Orbe: 0°39', em movimento)\nAscendente em trígono com Plutão (Orbe: 0°38', em movimento)\nAscendente em sextil com Lilith (Orbe: 1°07', em movimento) Descendente em octil com o Sol (Orbe: 1°37', em movimento) Descendente em sextil com Plutão (Orbe: 0°38', em movimento) Descendente em trígono com Lilith (Orbe: 1°07', em movimento)\nMeio do Céu em trígono com Mercúrio (Orbe: 2°07', em movimento) Meio do Céu em quadratura com Netuno (Orbe: 2°45', em movimento) Meio do Céu em quincúncio com Plutão (Orbe: 0°49', em movimento) Meio do Céu em quincúncio com Lilith (Orbe: 2°34', em movimento) Fundo do Céu em sextil com Mercúrio (Orbe: 2°07', em movimento) IC em quadratura com Netuno (Orbe: 2°45', Separando) Nodo Norte em octil com Quíron (Orbe: 1°46', Em aplicação ) Lilith em quadratura com Mercúrio (Orbe: 0°27', Em aplicação) Lilith em sextil com Plutão (Orbe: 1°45', Separando) Lilith em tri-octil com Quíron (Orbe: 2°32', Em aplicação) Quíron em sextil com o Sol (Orbe: 2°01', Em aplicação) Quíron em octil com Mercúrio (Orbe: 2°59', Em aplicação) Fortuna em sextil com Vênus (Orbe: 0°02', Separando) Fortuna em octil com Marte (Orbe: 0°43', Separando) Fortuna em quadratura com Saturno (Orbe: 0°03', Em aplicação) Fortuna em quincúncio com Urano (Orbe: 2°01', Separando) Fortuna em quadratura com Netuno (Orbe: 0°53', Em aplicação) Fortuna em quadratura Vertex (Orbe: 0°29', Separando) Vertex em Conjunção com Saturno (Orbe: 2°18', Separando) Vertex em Conjunção com Netuno (Orbe: 1°28', Separando) Vertex em Sextil com Plutão (Orbe: 2°06', Aplicando) Vertex em Oposição com o Ascendente (Orbe: 2°44', Separando) Vertex em Quadratura com o Meio do Céu (Orbe: 1°16', Aplicando) Vertex em Quadratura com o Fundo do Céu (Orbe: 1°16', Aplicando) Vertex em Conjunção com o Descendente (Orbe: 2°44', Separando)",
    jogoGerado: [8, 12, 13, 20, 4, 2, 5, 6, 10, 11, 17, 19, 24, 25, 14],
    resultado: [2, 5, 6, 8, 9, 10, 11, 12, 13, 17, 19, 20, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3610", concurso: "3610", data: "10/02/2026", hora: "",
    textoMapa: "Sol em Aquário 22°15', na 5ª Casa;\nLua em Sagitário 8°13', na 2ª Casa;\nMercúrio em Peixes 6°57', na 6ª Casa;\nVênus em Peixes 0°42', na 6ª Casa;\nMarte em Aquário 14°34', na 5ª Casa;\nJúpiter em Câncer 16°21', retrógrado, na 10ª Casa;\nSaturno em Peixes 29°40', na 6ª Casa;\nUrano em Touro 27°28', na 8ª Casa;\nNetuno em Áries 0°26', na 6ª Casa;\nPlutão em Aquário 4°00', na 5ª Casa;\nNodo Norte em Peixes 10°00', retrógrado, na 6ª Casa;\nLilith em Sagitário 5°50', na 2ª Casa;\nQuíron em Áries 23°18', na 7ª Casa;\nFortuna em Sagitário 19°58', na 3ª Casa,\nVértice em Áries 2°25', na 6ª Casa,\nAscendente em Libra 5°56',\nMeio do Céu em Câncer 4°03'\n\n1ª Casa em Libra 5°56'\n2ª Casa em Escorpião 12°58'\n3ª Casa em Sagitário 11°03'\n4ª Casa em Capricórnio 4°03'\n5ª Casa em Capricórnio 27°38'\n6ª Casa em Aquário 27°29'\n7ª Casa em Áries 5°56'\n8ª Casa em Touro 12°58'\n9ª Casa em Gêmeos 11°03'\n10ª Casa em Câncer 4°03'\n11ª Casa em Câncer 27°38'\n12ª Casa em Leão 27°29'\n\nLua em quadratura com Mercúrio (Orbe: 1°15', separando)\nVênus em trí-óctilo com Júpiter (Orbe: 0°38', aproximando)\nMarte em quincúncio com Júpiter (Orbe: 1°47', aproximando)\nMarte em octil com Saturno (Orbe: 0°06', aproximando)\nMarte em octil com Netuno (Orbe: 0°51', aproximando)\nSaturno em sextil com Urano (Orbe: 2°11', separando)\nSaturno em conjunção com Netuno (Orbe: 0°45', aproximando)\nUrano em sextil com Netuno (Orbe: 2°57', separando)\n\nAscendente em trí-óctil com o Sol (Orbe: 1°19', em movimento)\nAscendente em sextil com a Lua (Orbe: 2°17', em movimento)\nAscendente em quincúncio com Mercúrio (Orbe: 1°01', em movimento)\nAscendente em trígono com Plutão (Orbe: 1°55', em movimento)\nAscendente em sextil com Lilith (Orbe: 0°05', em movimento)\nDescendente em octil com o Sol (Orbe: 1°19', em movimento)\nDescendente em trígono com a Lua (Orbe: 2°17', em movimento)\nDescendente em sextil com Plutão (Orbe: 1°55', em movimento)\nDescendente em trígono com Lilith (Orbe: 0°05', em movimento) Meio do\nCéu em trígono com Mercúrio (Orbe: 2°54', em movimento)\nMeio do Céu em quincúncio com Plutão (Orbe: 0°03', em movimento)\nMeio do Céu em quincúncio com Lilith (Orbe: 1°47', em aplicação)\nIC em sextil com Mercúrio (Orbe: 2°54', em aplicação)\nNodo Norte em quadratura com a Lua (Orbe: 1°46', em aplicação)\nNodo Norte em octil com Quíron (Orbe: 1°41', em aplicação)\nLilith em conjunção com a Lua (Orbe: 2°22', em separação)\nLilith em quadratura com Mercúrio (Orbe: 1°06', em separação)\nLilith em sextil com Plutão (Orbe: 1°50', em separação)\nLilith em tri-octil com Quíron (Orbe: 2°27', em aplicação)\nQuíron em sextil com o Sol (Orbe: 1°02', em aplicação)\nQuíron em tri-octil com a Lua (Orbe: 0°04', em aplicação)\nQuíron em octil com Mercúrio (Orbe: 1°20', em aplicação)\nFortuna em sextil com o Sol (Orbe: 2°17', em aplicação)\nFortuna em octil com Plutão (Orbe:\nVértice em octil com Marte (Orbe: 2°50', Separando )\nVértice em conjunção com Saturno (Orbe: 2°44', Separando)\nVértice em conjunção com Netuno (Orbe: 1°58', Separando)\nVértice em sextil com Plutão (Orbe: 1°35', Aplicando)\nVértice em quadratura com o Meio do Céu (Orbe: 1°38', Aplicando)\nVértice em quadratura com o Fundo do Céu (Orbe: 1°38', Aplicando)",
    jogoGerado: [25, 13, 20, 4, 1, 2, 3, 5, 9, 10, 14, 19, 24, 11, 22],
    resultado: [1, 3, 5, 7, 8, 10, 13, 14, 17, 20, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3611", concurso: "3611", data: "11/02/2026", hora: "",
    textoMapa: "Sol em Aquário 23°16', na 5ª Casa;\nLua em Sagitário 20°07', na 3ª Casa;\nMercúrio em Peixes 8°36', na 6ª Casa;\nVênus em Peixes 1°58', na 6ª Casa;\nMarte em Aquário 15°21', na 5ª Casa;\nJúpiter em Câncer 16°16', retrógrado, na 10ª Casa;\nSaturno em Peixes 29°46', na 6ª Casa;\nUrano em Touro 27°29', na 8ª Casa;\nNetuno em Áries 0°27', na 6ª Casa;\nPlutão em Aquário 4°02', na 5ª Casa;\nNodo Norte em Peixes 9°56', retrógrado, na 6ª Casa;\nLilith em Sagitário 5°57', na 2ª Casa;\nQuíron em Áries 23°20', na 7ª Casa;\nFortuna em Sagitário 10°23', na 2ª Casa,\nVértice em Áries 2°57', na 6ª Casa,\nAscendente em Libra 7°15',\nMeio do Céu em Câncer 4°57'\n\n1ª Casa em Libra 7°15'\n2ª Casa em Escorpião 14°06'\n3ª Casa em Sagitário 12°01'\n4ª Casa em Capricórnio 4°57'\n5ª Casa em Capricórnio 28°37'\n6ª Casa em Aquário 28°41'\n7ª Casa em Áries 7°15'\n8ª Casa em Touro 14°06'\n9ª Casa em Gêmeos 12°01'\n10ª Casa em Câncer 4°57'\n11ª Casa em Câncer 28°37'\n12ª Casa em Leão 28°41'\n\nLua em octil com Plutão (Orbe: 1°05', separando)\nVênus em tri-octil com Júpiter (Orbe: 0°41', separando)\nMarte em quincúncio com Júpiter (Orbe: 0°54', aproximando)\nMarte em octil com Saturno (Orbe: 0°34', separando)\nMarte em octil com Netuno (Orbe: 0°06', aproximando)\nSaturno em sextil com Urano (Orbe: 2°17', separando)\nSaturno em conjunção com Netuno (Orbe: 0°41', aproximando)\nUrano em sextil com Netuno (Orbe: 2°58', separando)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°00', em movimento)\nQuincúncio de Mercúrio no Ascendente (Orbe: 1°21', em movimento)\nQuincúncio do Nodo Lunar no Ascendente (Orbe: 2°41', em movimento)\nSextil de Lilith no Ascendente (Orbe: 1°17', em movimento)\nOctil do Descendente com o Sol (Orbe: 1°00', em movimento)\nTrígono do Descendente com Lilith (Orbe: 1°17', em movimento)\nTrígono do Meio do Céu com Vênus (Orbe: 2°59', em movimento)\nQuincúncio do Meio do Céu com Plutão (Orbe: 0°55', em movimento)\nQuincúncio do Meio do Céu com Lilith (Orbe: 0°59', em movimento)\nSextil do Fundo do Céu com Vênus (Orbe: 2°59', em movimento)\nConjunção do Nodo Norte com Mercúrio (Orbe: 1°20', em movimento)\nOctil do Nodo Norte com Quíron (Orbe:\nLilith em quadratura com Mercúrio (Orbe: 2°39', Separando )\nLilith em sextil com Plutão (Orbe: 1°55', Separando)\nLilith em trí-óctil com Quíron (Orbe: 2°22', Aplicando)\nQuíron em sextil com o Sol (Orbe: 0°04', Aplicando)\nQuíron em octil com Mercúrio (Orbe: 0°16', Separando)\nFortuna em quadratura com Mercúrio (Orbe: 1°47', Separando)\nFortuna em quadratura com o Nodo Norte (Orbe: 0°27', Separando)\nFortuna em trí-óctil com Quíron (Orbe: 2°03', Separando)\nVértice em octil com Marte (Orbe: 2°35', Separando)\nVértice em conjunção com Netuno (Orbe: 2°29', Separando)\nVértice em sextil com Plutão (Orbe: 1°05', Aplicando)\nVértice em quadratura com o Meio do Céu (Orbe: 2°00', Aplicando)\nQuadrado de Vértice IC (Orbe: 2°00', Aplicando)",
    jogoGerado: [11, 4, 13, 20, 6, 10, 15, 19, 25, 2, 3, 5, 14, 24, 1],
    resultado: [1, 2, 3, 4, 5, 6, 10, 11, 12, 14, 15, 17, 18, 19, 25],
    obs: "",
  },
  {
    id: "h200_3612", concurso: "3612", data: "12/02/2026", hora: "",
    textoMapa: "Sol em Aquário 24°16', na 5ª Casa;\nLua em Capricórnio 2°08', na 3ª Casa;\nMercúrio em Peixes 10°13', na 6ª Casa;\nVênus em Peixes 3°13', na 6ª Casa;\nMarte em Aquário 16°08', na 5ª Casa;\nJúpiter em Câncer 16°11', retrógrado, na 10ª Casa;\nSaturno em Peixes 29°53', na 6ª Casa;\nUrano em Touro 27°29', na 8ª Casa;\nNetuno em Áries 0°29', na 6ª Casa;\nPlutão em Aquário 4°04', na 5ª Casa;\nNodo Norte em Peixes 9°53', retrógrado, na 6ª Casa;\nLilith em Sagitário 6°04', na 2ª Casa;\nQuíron em Áries 23°22', na 7ª Casa;\nFortuna em Sagitário 0°42', na 2ª Casa,\nVértice em Áries 3°29', na 6ª Casa,\nAscendente em Libra 8°34',\nMeio do Céu em Câncer 5°52'\n\n1ª Casa em Libra 8°34'\n2ª Casa em Escorpião 15°14'\n3ª Casa em Sagitário 12°58'\n4ª Casa em Capricórnio 5°52'\n5ª Casa em Capricórnio 29°37'\n6ª Casa em Aquário 29°53'\n7ª Casa em Áries 8°34'\n8ª Casa em Touro 15°14'\n9ª Casa em Gêmeos 12°58'\n10ª Casa em Câncer 5°52'\n11ª Casa em Câncer 29°37'\n12ª Casa em Leão 29°53'\n\nLua em sextil com Vênus (Orbe: 1°04', em movimento subsequente)\nLua em octil com Marte (Orbe: 0°59', em movimento subsequente)\nLua em quadratura com Saturno (Orbe: 2°15', em movimento subsequente)\nLua em quadratura com Netuno (Orbe: 1°38', em movimento subsequente)\nVênus em tri-octil com Júpiter (Orbe: 2°01', em movimento subsequente)\nMarte em quincúncio com Júpiter (Orbe: 0°02', em movimento subsequente)\nMarte em octil com Saturno (Orbe: 1°15', em movimento subsequente)\nMarte em octil com Netuno (Orbe: 0°38', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 2°23', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 0°36', em movimento subsequente)\n\nTri-óctil do Sol no Ascendente (Orbe: 0°42', em movimento)\nQuincúncio de Mercúrio no Ascendente (Orbe: 1°38', em movimento)\nQuincúncio do Nodo Norte no Ascendente (Orbe: 1°18', em movimento)\nSextil de Lilith no Ascendente (Orbe: 2°30', em movimento)\nOctil do Descendente com o Sol (Orbe: 0°42', em movimento)\nTrígono do Descendente com Lilith no Descendente (Orbe: 2°30', em movimento)\nTrígono do Meio do Céu com Vênus no Meio do Céu (Orbe: 2°39', em movimento)\nQuincúncio do Meio do Céu com Plutão no Meio do Céu (Orbe: 1°48', em movimento)\nQuincúncio do Meio do Céu com Lilith no Meio do Céu (Orbe: 0°12', em movimento)\nSextil do Fundo do Céu com Vênus no Meio do Céu (Orbe: 2°39', em movimento)\nConjunção do Nodo Norte com Mercúrio no Meio do Céu (Orbe: 0°19', em movimento)\nOctil do Nodo Norte com Quíron no Meio do Céu (Orbe:\nLilith em quadratura com Vênus (Orbe: 2°51', em quadratura) Lilith\nem sextil com Plutão (Orbe: 2°00', em separação)\nLilith em trígono-óctil com Quíron (Orbe: 2°18', em quadratura)\nQuíron em sextil com o Sol (Orbe: 0°54', em separação)\nQuíron em octil com Mercúrio (Orbe: 1°50', em separação)\nFortuna em quadratura com Vênus (Orbe: 2°30', em quadratura)\nFortuna em trígono-óctil com Júpiter (Orbe: 0°28', em quadratura)\nFortuna em trígono com Saturno (Orbe: 0°49', em separação)\nFortuna em trígono com Netuno (Orbe: 0°13', em separação)\nFortuna em trígono com Vertex (Orbe: 0°42', em separação)\nVertex em quadratura com a Lua (Orbe: 1°21', em separação)\nVertex em octil com Marte (Orbe:\nVértice em conjunção com Netuno (Orbe: 2° 59', Separando )\nVértice em sextil com Plutão (Orbe: 0°34', Aplicando)\nVértice em trígono com Lilith (Orbe: 2°34', Aplicando)\nVértice em quadratura com o Meio do Céu (Orbe: 2°22', Aplicando)\nVértice em quadratura com o Fundo do Céu (Orbe: 2°22', Aplicando)",
    jogoGerado: [11, 13, 20, 4, 25, 9, 17, 15, 21, 22, 24, 6, 10, 1, 5],
    resultado: [4, 6, 8, 9, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 25],
    obs: "",
  },
  {
    id: "h200_3613", concurso: "3613", data: "13/02/2026", hora: "",
    textoMapa: "Sol em Aquário 25°17', na 5ª Casa;\nLua em Capricórnio 14°19', na 4ª Casa;\nMercúrio em Peixes 11°46', na 6ª Casa;\nVênus em Peixes 4°28', na 6ª Casa;\nMarte em Aquário 16°55', na 5ª Casa;\nJúpiter em Câncer 16°06', retrógrado, na 10ª Casa;\nSaturno em Peixes 29°59', na 6ª Casa;\nUrano em Touro 27°30', na 8ª Casa;\nNetuno em Áries 0°31', na 6ª Casa;\nPlutão em Aquário 4°06', na 5ª Casa;\nNodo Norte em Peixes 9°50', retrógrado, na 6ª Casa;\nLilith em Sagitário 6°11', na 2ª Casa;\nQuíron em Áries 23°24', na 7ª Casa;\nFortuna em Escorpião 20°51', no\nVértice da 2ª Casa em Áries 4°01', no\nAscendente da 6ª Casa em Libra 9°53'\nMC em Câncer 6°46'\n\n1ª Casa em Libra 9°53'\n2ª Casa em Escorpião 16°21'\n3ª Casa em Sagitário 13°54'\n4ª Casa em Capricórnio 6°46'\n5ª Casa em Aquário 0°37'\n6ª Casa em Peixes 1°06'\n7ª Casa em Áries 9°53'\n8ª Casa em Touro 16°21'\n9ª Casa em Gêmeos 13°54'\n10ª Casa em Câncer 6°46'\n11ª Casa em Leão 0°37'\n12ª Casa em Virgem 1°06'\n\nSol em quadratura com Urano (Orbe: 2°12', em movimento subsequente)\nLua em sextil com Mercúrio (Orbe: 2°33', em movimento subsequente)\nLua em oposição a Júpiter (Orbe: 1°47', em movimento subsequente)\nLua em trí-óctilo com Urano (Orbe: 1°49', em movimento subsequente)\nMarte em quincúncio com Júpiter (Orbe: 0°49', em movimento subsequente)\nMarte em octil com Saturno (Orbe: 1°55', em movimento subsequente)\nMarte em octil com Netuno (Orbe: 1°23', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 2°29', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 0°31', em movimento subsequente)\n\nTri-óctil do Sol no Ascendente (Orbe: 0°23', em movimento)\nQuincúncio de Mercúrio no Ascendente (Orbe: 1°52', em movimento)\nTri-óctil de Urano no Ascendente (Orbe: 2°36', em movimento)\nQuincúncio do Nodo Norte no Ascendente (Orbe: 0°03', em movimento)\nOctil do Descendente no Descendente com o Sol (Orbe: 0°23', em movimento)\nOctil do Descendente com Urano (Orbe: 2°36', em movimento)\nTrígono do Meio do Céu com Vênus (Orbe: 2°18', em movimento)\nQuincúncio do Meio do Céu com Plutão (Orbe: 2°40', em movimento)\nQuincúncio do Meio do Céu com Lilith (Orbe: 0°35', em movimento)\nSextil do Fundo do Céu com Vênus (Orbe: 2°18', em movimento)\nConjunção do Nodo Norte com Mercúrio (Orbe: 1°55', em movimento)\nOctil do Nodo Norte Quíron (Orbe: 1°25', em movimento)\nLilith em quadratura com Vênus (Orbe: 1°42', em movimento)\nLilith em sextil com Plutão (Orbe: 2°05', em movimento)\nLilith em trígono-óctil com Quíron (Orbe: 2°13', em movimento)\nQuíron em sextil com o Sol (Orbe: 1°52', em movimento)\nFortuna em quincúncio com Quíron (Orbe: 2°33', em movimento)\nFortuna em trígono-óctil com o Meio do Céu (Orbe: 0°54', em movimento)\nFortuna em octil com o Fundo do Céu (Orbe: 0°54', em movimento)\nVértice em octil com Marte (Orbe: 2°06', em movimento)\nVértice em sextil com Plutão (Orbe: 0°04', em movimento)\nVértice em trígono com Lilith (Orbe: 2°09', em movimento)\nVértice em quadratura com o Meio do Céu (Orbe: 2°44', em movimento)\nVértice em quadratura com o Fundo do Céu (Orbe: 2°44', Aplicando)",
    jogoGerado: [11, 13, 20, 4, 7, 9, 15, 21, 10, 1, 5, 12, 17, 23, 6],
    resultado: [1, 3, 4, 7, 9, 10, 11, 12, 15, 16, 18, 20, 21, 22, 23],
    obs: "",
  },
  {
    id: "h200_3614", concurso: "3614", data: "14/02/2026", hora: "",
    textoMapa: "Sol em Aquário 26°18', na 5ª Casa;\nLua em Capricórnio 26°43', na 4ª Casa;\nMercúrio em Peixes 13°15', na 6ª Casa;\nVênus em Peixes 5°43', na 6ª Casa;\nMarte em Aquário 17°43', na 5ª Casa;\nJúpiter em Câncer 16°01', retrógrado, na 10ª Casa;\nSaturno em Áries 0°06', na 6ª Casa;\nUrano em Touro 27°30', na 8ª Casa;\nNetuno em Áries 0°33', na 6ª Casa;\nPlutão em Aquário 4°07', na 5ª Casa;\nNodo Norte em Peixes 9°47', retrógrado, na 6ª Casa;\nLilith em Sagitário 6°17', na 2ª Casa;\nQuíron em Áries 23°27', na 7ª Casa;\nFortuna em Escorpião 10°47', no\nVértice da 1ª Casa em Áries 4°34', no\nAscendente da 6ª Casa em Libra 11°12'\nMC em Câncer 7°41'\n\n1ª Casa em Libra 11°12'\n2ª Casa em Escorpião 17°28'\n3ª Casa em Sagitário 14°51'\n4ª Casa em Capricórnio 7°41'\n5ª Casa em Aquário 1°37'\n6ª Casa em Peixes 2°19'\n7ª Casa em Áries 11°12'\n8ª Casa em Touro 17°28'\n9ª Casa em Gêmeos 14°51'\n10ª Casa em Câncer 7°41'\n11ª Casa em Leão 1°37'\n12ª Casa em Virgem 2°19'\n\nSol em quadratura com Urano (Orbe: 1°12', em movimento subsequente)\nLua em octil com Mercúrio (Orbe: 1°32', em movimento subsequente)\nLua em trígono com Urano (Orbe: 0°47', em movimento subsequente)\nMercúrio em trígono com Júpiter (Orbe: 2°45', em movimento subsequente)\nMarte em quincúncio com Júpiter (Orbe: 1°41', em movimento subsequente)\nMarte em octil com Saturno (Orbe: 2°36', em movimento subsequente)\nMarte em octil com Netuno (Orbe: 2°09', em movimento subsequente)\nSaturno em sextil com Urano (Orbe: 2°35', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 0°27', em movimento subsequente)\n\nTri-óctil do Sol no Ascendente (Orbe: 0°05', em movimento)\nQuincúncio de Mercúrio no Ascendente (Orbe: 2°03', em movimento)\nTri-óctil de Urano no Ascendente (Orbe: 1°18', em movimento)\nQuincúncio do Nodo Lunar no Ascendente (Orbe: 1°25', em movimento)\nOctil do Descendente no Sol (Orbe: 0°05', em movimento)\nOctil do Descendente no Urano (Orbe: 1°18', em movimento)\nTrígono de Vênus no Meio do Céu (Orbe: 1°57', em movimento)\nTrígono do Nodo Lunar no Meio do Céu (Orbe: 2°06', em movimento)\nQuincúncio de Lilith no Meio do Céu (Orbe: 1°23', em movimento)\nSextil de Vênus no Fundo do Céu (Orbe: 1°57', em movimento)\nSextil do Nodo Lunar no Fundo do Céu (Orbe: 2°06', em movimento)\nOctil da Lua no Nodo Norte (Orbe:\nNodo Norte em Octil com Quíron (Orbe: 1°20', em movimento )\nLilith em Quadratura com Vênus (Orbe: 0°34', em movimento)\nLilith em Sextil com Plutão (Orbe: 2°09', em movimento)\nLilith em Tri-Octil com Quíron (Orbe: 2°09', em movimento)\nQuíron em Sextil com o Sol (Orbe: 2°51', em movimento)\nQuíron em Octil com Vênus (Orbe: 2°43', em movimento)\nFortuna em Trígono com Mercúrio (Orbe: 2°28', em movimento)\nFortuna em Trígono com o Nodo Norte (Orbe: 1°00', em movimento)\nFortuna em Quincúncio com o Descendente (Orbe: 0°24', em movimento)\nVértice em Octil com Marte (Orbe: 1°51', em movimento)\nVértice em Sextil com Plutão (Orbe: 0°26', em movimento)\nVértice em Trígono com Lilith (Orbe: 1°43', Aplicando)",
    jogoGerado: [11, 23, 25, 13, 20, 4, 6, 12, 9, 10, 15, 17, 21, 2, 5],
    resultado: [2, 4, 5, 6, 9, 10, 11, 12, 14, 15, 16, 17, 20, 23, 25],
    obs: "",
  },
  {
    id: "h200_3615", concurso: "3615", data: "18/02/2026", hora: "",
    textoMapa: "Sol em Peixes 0°20', na 5ª Casa;\nLua em Peixes 18°51', na 6ª Casa;\nMercúrio em Peixes 18°24', na 6ª Casa;\nVênus em Peixes 10°43', na 6ª Casa;\nMarte em Aquário 20°51', na 5ª Casa;\nJúpiter em Câncer 15°44', retrógrado, na 10ª Casa;\nSaturno em Áries 0°33', na 6ª Casa;\nUrano em Touro 27°33', na 8ª Casa;\nNetuno em Áries 0°41', na 6ª Casa;\nPlutão em Aquário 4°15', na 4ª Casa;\nNodo Norte em Peixes 9°34', retrógrado, na 6ª Casa;\nLilith em Sagitário 6°44', na 2ª Casa;\nQuíron em Áries 23°36', na 7ª Casa;\nFortuna em Virgem. 27°55', no\nVértice da 12ª Casa em Áries 6°43', no\nAscendente da 6ª Casa em Libra 16°25'\nMC em Câncer 11°19'\n\n1ª Casa em Libra 16°25'\n2ª Casa em Escorpião 21°52'\n3ª Casa em Sagitário 18°35'\n4ª Casa em Capricórnio 11°19'\n5ª Casa em Aquário 5°40'\n6ª Casa em Peixes 7°13'\n7ª Casa em Áries 16°25'\n8ª Casa em Touro 21°52'\n9ª Casa em Gêmeos 18°35'\n10ª Casa em Câncer 11°19'\n11ª Casa em Leão 5°40'\n12ª Casa em Virgem 7°13'\n\nSol em trígono com Júpiter (órbita: 0°24', em movimento subsequente)\nSol em quadratura com Urano (órbita: 2°47', em movimento subsequente)\nLua em conjunção com Mercúrio (órbita: 0°26', em movimento subsequente)\nLua em octil com Plutão (órbita: 0°24', em movimento subsequente)\nMercúrio em trígono com Júpiter (órbita: 2°39', em movimento subsequente)\nMercúrio em octil com Plutão (órbita: 0°50', em movimento subsequente)\nSaturno em conjunção com Netuno (órbita: 0°08', em movimento subsequente)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°05', Separando)\nQuincúncio da Lua no Ascendente (Orbe: 2°25', Aplicando)\nQuincúncio de Mercúrio no Ascendente (Orbe: 1°58', Aplicando)\nQuadratura de Júpiter no Ascendente (Orbe: 0°40', Separando)\nOctil do Descendente com o Sol (Orbe: 1°05', Separando)\nQuadratura de Júpiter no Descendente (Orbe: 0°40', Separando)\nTrígono de Vênus no Meio do Céu (Orbe: 0°35', Separando)\nOctil de Urano no Meio do Céu (Orbe: 1°14', Aplicando)\nTrígono do Nodo Norte no Meio do Céu (Orbe: 1°44', Separando)\nSextil de Vênus no Fundo do Céu (Orbe: 0°35', Separando)\nTri-óctil de Urano no Fundo do Céu (Orbe: 1°14', Aplicando)\nSextil do Nodo Norte no Fundo do Céu (Orbe:\nNodo Norte em conjunção com Vênus (Orbe: 1 °09', Separando)\nNodo Norte em quadratura com Lilith (Orbe: 2°49', Aplicando)\nNodo Norte em octil com Quíron (Orbe: 0°58', Aplicando)\nLilith em sextil com Plutão (Orbe: 2°29', Separando)\nLilith em trígono com Quíron (Orbe: 1°51', Aplicando)\nQuíron em octil com Vênus (Orbe: 2°07', Separando)\nQuíron em sextil com Marte (Orbe: 2°44', Aplicando)\nFortuna em quincúncio com o Sol (Orbe: 2°25', Aplicando)\nFortuna em oposição a Saturno (Orbe: 2°38', Aplicando)\nFortuna em trígono com Urano (Orbe: 0°21', Separando)\nFortuna em oposição a Netuno (Orbe: 2°46', Aplicando)\nFortuna em oposição ao Vértice (Orbe: 2°04', Separando)\nVértice em Octil com Marte (Orbe: 0°51', Separando)\nVértice em Sextil com Plutão (Orbe: 2°28', Separando)\nVértice em Trígono com Lilith (Orbe: 0°01', Aplicando)",
    jogoGerado: [11, 9, 17, 13, 20, 4, 15, 21, 2, 5, 6, 12, 18, 25, 7],
    resultado: [2, 3, 6, 7, 8, 9, 10, 11, 14, 15, 17, 18, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3616", concurso: "3616", data: "19/02/2026", hora: "",
    textoMapa: "Sol em Peixes 1°21', na 5ª Casa;\nLua em Áries 2°29', na 6ª Casa;\nMercúrio em Peixes 19°25', na 6ª Casa;\nVênus em Peixes 11°58', na 6ª Casa;\nMarte em Aquário 21°39', na 5ª Casa;\nJúpiter em Câncer 15°40', retrógrado, na 10ª Casa;\nSaturno em Áries 0°40', na 6ª Casa;\nUrano em Touro 27°34', na 8ª Casa;\nNetuno em Áries 0°43', na 6ª Casa;\nPlutão em Aquário 4°16', na 4ª Casa;\nNodo Norte em Peixes 9°31', retrógrado, na 6ª Casa;\nLilith em Sagitário 6°51', na 2ª Casa;\nQuíron em Áries 23°38', na 7ª Casa;\nFortuna em Virgem. 16°35', no\nVértice da 12ª Casa em Áries 7°15', no\nAscendente da 6ª Casa em Libra 17°43'\nMC em Câncer 12°13'\n\n1ª Casa em Libra 17°43'\n2ª Casa em Escorpião 22°57'\n3ª Casa em Sagitário 19°31'\n4ª Casa em Capricórnio 12°13'\n5ª Casa em Aquário 6°42'\n6ª Casa em Peixes 8°28'\n7ª Casa em Áries 17°43'\n8ª Casa em Touro 22°57'\n9ª Casa em Gêmeos 19°31'\n10ª Casa em Câncer 12°13'\n11ª Casa em Leão 6°42'\n12ª Casa em Virgem 8°28'\n\nSol em trí-óctilo com Júpiter (órbita: 0°40', separando-se)\nLua em conjunção com Saturno (órbita: 1°48', separando-se)\nLua em conjunção com Netuno (órbita: 1°45', separando-se)\nLua em sextil com Plutão (órbita: 1°47', aproximando-se)\nMercúrio em octil com Plutão (órbita: 0°08', separando-se)\nSaturno em conjunção com Netuno (órbita: 0°03', aproximando-se)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°22', Separando)\nQuincúncio de Mercúrio no Ascendente (Orbe: 1°42', Aplicando)\nQuadratura de Júpiter no Ascendente (Orbe: 2°02', Separando)\nOctil do Descendente com o Sol (Orbe: 1°22', Separando)\nQuadratura de Júpiter no Descendente (Orbe: 2°02', Separando)\nTrígono do Meio do Céu com Vênus (Orbe: 0°15', Separando)\nOctil do Meio do Céu com Urano (Orbe: 0°20', Aplicando)\nTrígono do Meio do Céu com o Nodo Norte (Orbe: 2°42', Separando)\nSextil do Fundo do Céu com Vênus (Orbe: 0°15', Separando)\nTri-óctil do Fundo do Céu com Urano (Orbe: 0°20', Aplicando)\nSextil do Fundo do Céu com o Nodo Norte (Orbe: 2°42', Separando)\nConjunção do Nodo Norte com Vênus (Orbe:\nNodo Norte em quadratura com Lilith (Orbe: 2°39', em movimento)\nNodo Norte em octil com Quíron (Orbe: 0°52', em movimento)\nLilith em sextil com Plutão (Orbe: 2°34', em movimento)\nLilith em trígono com Quíron (Orbe: 1°47', em movimento)\nQuíron em sextil com Marte (Orbe: 1°59', em movimento)\nFortuna em oposição a Mercúrio (Orbe: 2°50', em movimento)\nFortuna em sextil com Júpiter (Orbe: 0°54', em movimento)\nFortuna em trígono com Plutão (Orbe: 2°41', em movimento)\nFortuna em quincúncio com o Descendente (Orbe: 1°08', em movimento)\nVértice em octil com Marte (Orbe: 0°36', em movimento)\nVértice em sextil com Plutão (Orbe: 2°58', em movimento)\nVértice em trígono com Lilith (Orbe: 0°24', Separando)",
    jogoGerado: [11, 13, 20, 4, 1, 15, 24, 6, 12, 18, 10, 2, 21, 8, 16],
    resultado: [1, 4, 5, 6, 10, 11, 13, 14, 16, 18, 19, 20, 21, 23, 24],
    obs: "",
  },
  {
    id: "h200_3617", concurso: "3617", data: "20/02/2026", hora: "",
    textoMapa: "Sol em Peixes 2°21', na 5ª Casa;\nLua em Áries 16°18', na 6ª Casa;\nMercúrio em Peixes 20°19', na 6ª Casa;\nVênus em Peixes 13°13', na 6ª Casa;\nMarte em Aquário 22°26', na 5ª Casa;\nJúpiter em Câncer 15°37', retrógrado, na 10ª Casa;\nSaturno em Áries 0°47', na 6ª Casa;\nUrano em Touro 27°35', na 8ª Casa;\nNetuno em Áries 0°45', na 6ª Casa;\nPlutão em Aquário 4°18', na 4ª Casa;\nNodo Norte em Peixes 9°28', retrógrado, na 5ª Casa;\nLilith em Sagitário 6°58', na 2ª Casa;\nQuíron em Áries 23°41', na 7ª Casa;\nFortuna em Virgem. 5°03', no\nVértice da 11ª Casa em Áries 7°47', no\nAscendente da 6ª Casa em Libra 19°00'\nMeio do Céu em Câncer 13°08'\n\n1ª Casa em Libra 19°00'\n2ª Casa em Escorpião 24°01'\n3ª Casa em Sagitário 20°27'\n4ª Casa em Capricórnio 13°08'\n5ª Casa em Aquário 7°43'\n6ª Casa em Peixes 9°43'\n7ª Casa em Áries 19°00'\n8ª Casa em Touro 24°01'\n9ª Casa em Gêmeos 20°27'\n10ª Casa em Câncer 13°08'\n11ª Casa em Leão 7°43'\n12ª Casa em Virgem 9°43'\n\nSol em octil com a Lua (Orbe: 1°02', em movimento subsequente)\nSol em trígono com Júpiter (Orbe: 1°44', em movimento subsequente)\nLua em quadratura com Júpiter (Orbe: 0°41', em movimento subsequente)\nMercúrio em octil com Plutão (Orbe: 1°00', em movimento subsequente)\nVênus em trígono com Júpiter (Orbe: 2°23', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 0°01', em movimento subsequente)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°39', Separando)\nOposição da Lua no Ascendente (Orbe: 2°42', Separando)\nQuincúncio de Mercúrio no Ascendente (Orbe: 1°18', Aplicando)\nOctil de Lilith no Ascendente (Orbe: 2°57', Aplicando)\nOctil do Sol no Descendente (Orbe: 1°39', Separando)\nConjunção da Lua no Descendente (Orbe: 2°42', Separando)\nTri-óctil de Lilith no Descendente (Orbe: 2°57', Aplicando) Trígono\nde Vênus no Meio do Céu (Orbe: 0°04', Aplicando)\nConjunção de Júpiter no Meio do Céu (Orbe: 2°28', Aplicando)\nOctil de Urano no Meio do Céu (Orbe: 0°33', Separando)\nSextil de Vênus no Fundo do Céu (Orbe: 0°04', Aplicando)\nOposição de Júpiter no Fundo do Céu (Orbe: 2°28', em aplicação)\nIC Tri-Octil Urano (Orb: 0°33', em separação)\nNodo Norte em quadratura com Lilith (Orb: 2°30', em aplicação)\nNodo Norte Octil Quíron (Orb: 0°46', em aplicação)\nLilith em sextil com Plutão (Orb: 2°39', em separação)\nLilith Tri-Octil com Quíron (Orb: 1°43', em aplicação)\nQuíron em sextil com Marte (Orb: 1°14', em aplicação)\nFortuna em oposição ao Sol (Orb: 2°42', em separação)\nFortuna em quincúncio com Plutão (Orb: 0°45', em separação)\nFortuna em quadratura com Lilith (Orb: 1°54', em aplicação)\nFortuna Octil com o Ascendente (Orb: 1°02', em separação)\nFortuna Tri-Octil com o Descendente (Orb: 1°02', em separação)\nVertex Marte em octil (orbe: 0°21', separando-se)\nem trígono com Lilith no vértice (orbe: 0°49', separando-se)",
    jogoGerado: [11, 16, 21, 4, 15, 2, 6, 12, 20, 22, 23, 10, 1, 8, 24],
    resultado: [2, 4, 7, 8, 10, 11, 12, 13, 16, 19, 20, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3618", concurso: "3618", data: "21/02/2026", hora: "",
    textoMapa: "Sol em Peixes 3°22', na 5ª Casa;\nLua em Touro 0°17', na 7ª Casa;\nMercúrio em Peixes 21°04', na 6ª Casa;\nVênus em Peixes 14°28', na 6ª Casa;\nMarte em Aquário 23°13', na 5ª Casa;\nJúpiter em Câncer 15°33', retrógrado, na 10ª Casa;\nSaturno em Áries 0°54', na 6ª Casa;\nUrano em Touro 27°36', na 8ª Casa;\nNetuno em Áries 0°47', na 6ª Casa;\nPlutão em Aquário 4°20', na 4ª Casa;\nNodo Norte em Peixes 9°25', retrógrado, na 5ª Casa;\nLilith em Sagitário 7°04', na 2ª Casa;\nQuíron em Áries 23°43', na 7ª Casa;\nFortuna em Leão 23°23', no\nVértice da 11ª Casa em Áries 8°19', no\nAscendente da 6ª Casa em Libra 20°18'\nMC em Câncer 14°03'\n\n1ª Casa em Libra 20°18'\n2ª Casa em Escorpião 25°05'\n3ª Casa em Sagitário 21°22'\n4ª Casa em Capricórnio 14°03'\n5ª Casa em Aquário 8°45'\n6ª Casa em Peixes 10°57'\n7ª Casa em Áries 20°18'\n8ª Casa em Touro 25°05'\n9ª Casa em Gêmeos 21°22'\n10ª Casa em Câncer 14°03'\n11ª Casa em Leão 8°45'\n12ª Casa em Virgem 10°57'\n\nSol em trígono com Júpiter (órbita: 2°48', separando-se)\nLua em trígono com Vênus (órbita: 0°48', separando-se)\nMercúrio em trígono com Plutão (órbita: 1°44', separando-se)\nVênus em trígono com Júpiter (órbita: 1°05', aproximando-se)\nJúpiter em trígono com Urano (órbita: 2°57', aproximando-se)\nSaturno em conjunção com Netuno (órbita: 0°06', separando-se)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°56', Separando)\nQuincúncio de Mercúrio no Ascendente (Orbe: 0°46', Aplicando)\nTrígono de Marte no Ascendente (Orbe: 2°55', Aplicando)\nOctil de Lilith no Ascendente (Orbe: 1°46', Aplicando)\nOctil do Descendente com o Sol (Orbe: 1°56', Separando)\nSextil do Descendente com Marte (Orbe: 2°55', Aplicando)\nTri-óctil de Lilith no Descendente (Orbe: 1°46', Aplicando) Trígono de\nVênus no Meio do Céu (Orbe: 0°25', Aplicando)\nConjunção do Meio do Céu com Júpiter (Orbe: 1°30', Aplicando)\nOctil de Urano no Meio do Céu (Orbe: 1°27', Separando)\nSextil de Vênus no Fundo do Céu (Orbe: 0°25', Aplicando)\nOposição de Júpiter no Fundo do Céu (Orbe: 1°30', em aplicação)\nIC Tri-Octil Urano (Orbe: 1°27', em separação)\nNodo Norte em quadratura com Lilith (Orbe: 2°20', em aplicação)\nNodo Norte Octil Quíron (Orbe: 0°41', em aplicação)\nLilith em sextil com Plutão (Orbe: 2°44', em separação)\nLilith Tri-Octil com Quíron (Orbe: 1°39', em aplicação)\nQuíron em sextil com Marte (Orbe: 0°30', em aplicação)\nFortuna em quincúncio com Mercúrio (Orbe: 2°18', em separação)\nFortuna em oposição a Marte (Orbe: 0°09', em separação)\nFortuna em trígono com Quíron (Orbe: 0°20', em aplicação)\nVértice Octil com Marte (Orbe: 0°06', em separação)\nVértice em trígono com Lilith (Orbe: 1°15', em separação)",
    jogoGerado: [11, 5, 22, 23, 20, 4, 15, 21, 1, 2, 6, 12, 18, 10, 17],
    resultado: [1, 3, 4, 5, 9, 10, 11, 12, 14, 15, 20, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h200_3619", concurso: "3619", data: "23/02/2026", hora: "",
    textoMapa: "Sol em Peixes 5°22', na 5ª Casa;\nLua em Touro 28°31', na 8ª Casa;\nMercúrio em Peixes 22°08', na 6ª Casa;\nVênus em Peixes 16°58', na 6ª Casa;\nMarte em Aquário 24°48', na 5ª Casa;\nJúpiter em Câncer 15°27', retrógrado, na 9ª Casa;\nSaturno em Áries 1°08', na 6ª Casa;\nUrano em Touro 27°38', na 8ª Casa;\nNetuno em Áries 0°52', na 6ª Casa;\nPlutão em Aquário 4°23', na 4ª Casa;\nNodo Norte em Peixes 9°18', retrógrado, na 5ª Casa;\nLilith em Sagitário 7°18', na 2ª Casa;\nQuíron em Áries 23°49', na 7ª Casa;\nFortuna em Câncer. 29°42', no\nVértice da 10ª Casa em Áries 9°24', no\nAscendente da 6ª Casa em Libra 22°51'\nMC em Câncer 15°53'\n\n1ª Casa em Libra 22°51'\n2ª Casa em Escorpião 27°13'\n3ª Casa em Sagitário 23°12'\n4ª Casa em Capricórnio 15°53'\n5ª Casa em Aquário 10°50'\n6ª Casa em Peixes 13°28'\n7ª Casa em Áries 22°51'\n8ª Casa em Touro 27°13'\n9ª Casa em Gêmeos 23°12'\n10ª Casa em Câncer 15°53'\n11ª Casa em Leão 10°50'\n12ª Casa em Virgem 13°28'\n\nLua em octil com Júpiter (Orbe: 1°55', em movimento subsequente)\nLua em sextil com Saturno (Orbe: 2°36', em movimento subsequente)\nLua em conjunção com Urano (Orbe: 0°53', em movimento subsequente)\nLua em sextil com Netuno (Orbe: 2°20', em movimento subsequente)\nMercúrio em octil com Plutão (Orbe: 2°44', em movimento subsequente)\nVênus em trígono com Júpiter (Orbe: 1°30', em movimento subsequente)\nVênus em octil com Plutão (Orbe: 2°25', em movimento subsequente)\nMarte em quadratura com Urano (Orbe: 2°49', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°49', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 0°16', em movimento subsequente)\n\nTri-óctil do Sol no Ascendente (Orbe: 2°28', Separando)\nQuincúncio de Mercúrio no Ascendente (Orbe: 0°43', Separando)\nTrígono de Marte no Ascendente (Orbe: 1°56', Aplicando)\nTri-óctil do Nodo no Ascendente (Orbe: 1°27', Aplicando)\nOctil de Lilith no Ascendente (Orbe: 0°33', Separando)\nOposição de Quíron no Ascendente (Orbe: 0°57', Aplicando)\nOctil do Sol no Descendente (Orbe: 2°28', Separando)\nSextil de Marte no Descendente (Orbe: 1°56', Aplicando)\nOctil do Nodo no Descendente (Orbe: 1°27', Aplicando)\nTri-óctil de Lilith no Descendente (Orbe: 0°33', Separando)\nConjunção de Quíron no Descendente (Orbe: 0°57',\nMC em Octil com a Lua (Orbe: 2°21', Separando) MC\nem Trígono com Vênus (Orbe: 1°05', Em aplicação)\nMC em Conjunção com Júpiter (Orbe: 0°25', Separando)\nIC em Tri-Octil com a Lua (Orbe: 2°21', Separando)\nIC em Sextil com Vênus (Orbe: 1°05', Em aplicação)\nIC em Oposição com Júpiter (Orbe: 0°25', Separando)\nNodo Norte em Quadratura com Lilith (Orbe: 2°00', Em aplicação)\nNodo Norte em Octil com Quíron (Orbe: 0°29', Em aplicação)\nLilith em Quadratura com o Sol (Orbe: 1°55', Em aplicação)\nLilith em Sextil com Plutão (Orbe: 2°54', Separando)\nLilith em Tri-Octil com Quíron (Orbe: 1°30', Em aplicação)\nQuíron em Sextil com Marte (Orbe: 0°59', Separando)\nFortuna Lua em sextil (Orbe: 1°10', separando)\nFortuna em trígono-óctil com Vênus (Orbe: 2°16', aplicando)\nFortuna em trígono com Saturno (Orbe: 1°25', aplicando)\nFortuna em sextil com Urano (Orbe: 2°04', separando)\nFortuna em trígono com Netuno (Orbe: 1°09', aplicando)\nFortuna em trígono com Vertex (Orbe: 0°17', separando)\nVertex em octil com Marte (Orbe: 0°23', aplicando)\nVertex em trígono com Lilith (Orbe: 2°06', separando)",
    jogoGerado: [11, 23, 5, 7, 13, 25, 1, 15, 2, 20, 21, 24, 10, 16, 4],
    resultado: [1, 2, 7, 8, 10, 11, 13, 14, 16, 18, 19, 20, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3620", concurso: "3620", data: "24/02/2026", hora: "",
    textoMapa: "Sol em Peixes 6°23', na 5ª Casa;\nLua em Gêmeos 12°44', na 8ª Casa;\nMercúrio em Peixes 22°25', na 6ª Casa;\nVênus em Peixes 18°13', na 6ª Casa;\nMarte em Aquário 25°35', na 5ª Casa;\nJúpiter em Câncer 15°24', retrógrado, na 9ª Casa;\nSaturno em Áries 1°15', na 6ª Casa;\nUrano em Touro 27°39', na 7ª Casa;\nNetuno em Áries 0°54', na 6ª Casa;\nPlutão em Aquário 4°25', na 4ª Casa;\nNodo Norte em Peixes 9°15', retrógrado, na 5ª Casa;\nLilith em Sagitário 7°25', na 2ª Casa;\nQuíron em Áries 23°51', na 6ª Casa;\nFortuna em Câncer. 17°46', no\nVértice da 10ª Casa em Áries 9°56', no\nAscendente da 6ª Casa em Libra 24°07'\nMC em Câncer 16°48'\n\n1ª Casa em Libra 24°07'\n2ª Casa em Escorpião 28°16'\n3ª Casa em Sagitário 24°08'\n4ª Casa em Capricórnio 16°48'\n5ª Casa em Aquário 11°53'\n6ª Casa em Peixes 14°44'\n7ª Casa em Áries 24°07'\n8ª Casa em Touro 28°16'\n9ª Casa em Gêmeos 24°08'\n10ª Casa em Câncer 16°48'\n11ª Casa em Leão 11°53'\n12ª Casa em Virgem 14°44'\n\nVênus em trígono com Júpiter (Orbe: 2°48', separando-se)\nVênus em octil com Plutão (Orbe: 1°11', aproximando-se)\nMarte em quadratura com Urano (Orbe: 2°03', aproximando-se)\nJúpiter em octil com Urano (Orbe: 2°45', aproximando-se)\nSaturno em conjunção com Netuno (Orbe: 0°20', separando-se)\n\nTri-óctil do Sol no Ascendente (Orbe: 2°44', Separando)\nQuincúncio de Mercúrio no Ascendente (Orbe: 1°41', Separando)\nTrígono de Marte no Ascendente (Orbe: 1°27', Aplicando)\nTri-óctil do Nodo no Ascendente (Orbe: 0°07', Aplicando)\nOctil de Lilith no Ascendente (Orbe: 1°42', Separando)\nOposição de Quíron no Ascendente (Orbe: 0°16', Separando)\nOctil do Sol no Descendente (Orbe: 2°44', Separando)\nSextil de Marte no Descendente (Orbe: 1°27', Aplicando)\nOctil do Nodo no Descendente (Orbe: 0°07', Aplicando)\nTri-óctil de Lilith no Descendente (Orbe: 1°42', Separando)\nConjunção de Quíron no Descendente (Orbe: 0°16',\nTriângulo entre o Meio do Céu e Vênus (Orbe: 1°24', em processo de separação )\nConjunção do\nMeio do Céu com Júpiter (Orbe: 1°23', em processo de separação) Sextil do\nFundo do Céu com Vênus (Orbe: 1°24', em processo de separação) Oposição do Fundo do Céu com Júpiter (Orbe: 1°23', em processo de separação)\nConjunção do Nodo Norte com o Sol (Orbe: 2°52', em processo de separação)\nQuadratura do Nodo Norte com Lilith (Orbe: 1°50', em processo de separação)\nOctil do Nodo Norte com Quíron (Orbe: 0°23', em processo de separação)\nQuadratura de Lilith com o Sol (Orbe: 1°01', em processo de separação)\nSextil de Lilith com Plutão (Orbe: 2°59', em processo de separação)\nTriângulo de Lilith com Quíron (Orbe: 1°26', em processo de separação)\nOctil de Quíron com o Sol (Orbe: 2°28', em processo de separação)\nSextil de Quíron com Marte (Orbe: 1°43', em processo de separação)\nFortuna Trígono com Vênus (Orbe: 0°26', em movimento)\nConjunção com Júpiter (Orbe: 2°22', em movimento)\nConjunção com o Meio do Céu (Orbe: 0°58', em movimento)\nOposição com o Fundo do Céu (Orbe: 0°58', em movimento)\nSextil com a Lua (Orbe: 2°47', em movimento)\nOctil com Marte (Orbe: 0°38', em movimento)\nOctil com Urano (Orbe: 2°42', em movimento)\nTrígono com Lilith (Orbe: 2°31', em movimento)",
    jogoGerado: [11, 7, 13, 25, 15, 2, 4, 21, 20, 10, 16, 5, 1, 6, 22],
    resultado: [1, 2, 4, 7, 9, 11, 12, 15, 16, 18, 19, 20, 21, 24, 25],
    obs: "",
  },
  {
    id: "h200_3621", concurso: "3621", data: "25/02/2026", hora: "",
    textoMapa: "Sol em Peixes 7°23', na 5ª Casa;\nLua em Gêmeos 26°56', na 9ª Casa;\nMercúrio em Peixes 22°33', estacionário, na 6ª Casa;\nVênus em Peixes 19°28', na 6ª Casa\n; Marte em Aquário 26°22', na 5ª Casa;\nJúpiter em Câncer 15°22', retrógrado, na 9ª Casa;\nSaturno em Áries 1°22', na 6ª Casa;\nUrano em Touro 27°40', na 7ª Casa;\nNetuno em Áries 0°56', na 6ª Casa;\nPlutão em Aquário 4°27', na 4ª Casa;\nNodo Norte em Peixes 9°12', retrógrado, na 5ª Casa;\nLilith em Sagitário 7°31', na 2ª Casa;\nQuíron em Áries 23°54', na 6ª Casa;\nFortuna em Câncer. 5°51', no\nVértice da 9ª Casa em Áries 10°28', no\nAscendente da 6ª Casa em Libra 25°23'\nMeio do Céu em Câncer 17°43'\n\n1ª Casa em Libra 25°23'\n2ª Casa em Escorpião 29°18'\n3ª Casa em Sagitário 25°02'\n4ª Casa em Capricórnio 17°43'\n5ª Casa em Aquário 12°56'\n6ª Casa em Peixes 16°00'\n7ª Casa em Áries 25°23'\n8ª Casa em Touro 29°18'\n9ª Casa em Gêmeos 25°02'\n10ª Casa em Câncer 17°43'\n11ª Casa em Leão 12°56'\n12ª Casa em Virgem 16°00'\n\nLua em trígono com Marte (Orbe: 0°33', separando)\nVênus em octil com Plutão (Orbe: 0°01', separando)\nMarte em quadratura com Urano (Orbe: 1°17', aproximando)\nJúpiter em octil com Urano (Orbe: 2°41', aproximando)\nSaturno em conjunção com Netuno (Orbe: 0°25', separando)\n\nAscendente em trígono com a Lua (Orbe: 1°32', em movimento)\nAscendente em quincúncio com Mercúrio (Orbe: 2°50', em movimento)\nAscendente em trígono com Marte (Orbe: 0°59', em movimento)\nAscendente em quincúncio com Urano (Orbe: 2°16', em movimento)\nAscendente em trígono com o Nodo Octil (Orbe: 1°11', em movimento)\nAscendente em octil com Lilith (Orbe: 2°51', em movimento)\nAscendente em oposição a Quíron (Orbe: 1°29', em movimento) Descendente\nem sextil com a Lua (Orbe: 1°32', em movimento)\nDescendente em sextil com Marte (Orbe: 0°59', em movimento)\nDescendente em octil com o Nodo Octil (Orbe: 1°11', em movimento)\nDescendente em trígono com Lilith (Orbe: 2°51', em movimento) Separando)\nDescendente em conjunção com Quíron (Orbe: 1°29', Separando)\nMeio do Céu em trígono com Vênus (Orbe: 1°44', Aplicando)\nMeio do Céu em conjunção com Júpiter (Orbe: 2°21', Separando)\nFundo do Céu em sextil com Vênus (Orbe: 1°44', Aplicando)\nFundo do Céu em oposição com Júpiter (Orbe: 2°21', Separando)\nNodo Norte em conjunção com o Sol (Orbe: 1°48', Aplicando)\nNodo Norte em quadratura com Lilith (Orbe: 1°40', Aplicando)\nNodo Norte em octil com Quíron (Orbe: 0°17', Aplicando)\nLilith em quadratura com o Sol (Orbe: 0°08', Aplicando)\nLilith em trígono com o octil de Quíron (Orbe: 1°22', Aplicando)\nQuíron em octil com o Sol (Orbe: 1°30', Aplicando)\nQuíron em sextil com Marte (Orbe: 2°28', Separando)\nTrígono da Fortuna com o Sol (Orbe: 1°32', em movimento subsequente)\nQuincúncio da Fortuna com Plutão\n(Orbe: 1°23', em movimento subsequente) Quincúncio da Fortuna com Lilith (Orbe: 1°40', em\nmovimento subsequente) Octil do Vértice com Marte (Orbe: 0°54', em movimento subsequente)\nOctil do Vértice com Urano (Orbe: 2°11', em movimento subsequente)\nTrígono do Vértice com Lilith (Orbe: 2°56', em movimento subsequente)",
    jogoGerado: [11, 4, 7, 24, 25, 2, 9, 15, 10, 16, 5, 1, 6, 13, 22],
    resultado: [1, 2, 4, 6, 7, 9, 10, 11, 13, 15, 18, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3622", concurso: "3622", data: "26/02/2026", hora: "",
    textoMapa: "Sol em Peixes 8°23', na 5ª Casa;\nLua em Câncer 11°05', na 9ª Casa;\nMercúrio em Peixes 22°31', retrógrado, na 6ª Casa;\nVênus em Peixes 20°43', na 6ª Casa\n; Marte em Aquário 27°10', na 5ª Casa;\nJúpiter em Câncer 15°19', retrógrado, na 9ª Casa;\nSaturno em Áries 1°29', na 6ª Casa;\nUrano em Touro 27°41', na 7ª Casa;\nNetuno em Áries 0°58', na 6ª Casa;\nPlutão em Aquário 4°28', na 4ª Casa;\nNodo Norte em Peixes 9°09', retrógrado, na 5ª Casa;\nLilith em Sagitário 7°38', na 2ª Casa;\nQuíron em Áries 23°57', na 6ª Casa;\nFortuna em Gêmeos 23°57', no\nVértice da 8ª Casa em Áries 11°00', no\nAscendente da 6ª Casa em Libra 26°39'\nMeio do Céu em Câncer 18°38'\n\n1ª Casa em Libra 26°39'\n2ª Casa em Sagitário 0°21'\n3ª Casa em Sagitário 25°57'\n4ª Casa em Capricórnio 18°38'\n5ª Casa em Aquário 13°59'\n6ª Casa em Peixes 17°16'\n7ª Casa em Áries 26°39'\n8ª Casa em Gêmeos 0°21'\n9ª Casa em Gêmeos 25°57'\n10ª Casa em Câncer 18°38'\n11ª Casa em Leão 13°59'\n12ª Casa em Virgem 17°16'\n\nSol em trígono com a Lua (Orbe: 2°41', separando)\nLua em trígono com Marte (Orbe: 1°04', aproximando)\nLua em octil com Urano (Orbe: 1°35', aproximando)\nMercúrio em conjunção com Vênus (Orbe: 1°48', aproximando)\nVênus em octil com Plutão (Orbe: 1°14', separando)\nMarte em quadratura com Urano (Orbe: 0°31', aproximando)\nJúpiter em octil com Urano (Orbe: 2°38', aproximando)\nSaturno em conjunção com Netuno (Orbe: 0°30', separando)\nSaturno em sextil com Plutão (Orbe: 2°59', aproximando)\n\nAscendente em trígono com Marte (Orbe: 0°30', em movimento subsequente)\nAscendente em quincúncio com Urano (Orbe: 1°02', em movimento subsequente)\nAscendente em trígono com o Nodo Octil (Orbe: 2°30', em movimento subsequente)\nAscendente em oposição a Quíron (Orbe: 2°42', em movimento subsequente)\nDescendente em sextil com Marte (Orbe: 0°30', em movimento subsequente) Descendente\nem octil com o Nodo Octil (Orbe: 2°30', em movimento subsequente)\nDescendente em conjunção com Quíron (Orbe: 2°42', em movimento subsequente)\nMeio do Céu em trígono com Vênus (Orbe: 2°04', em movimento subsequente)\nFundo do Céu em sextil com Vênus (Orbe: 2°04', em movimento subsequente)\nNodo Norte em conjunção com o Sol (Orbe: 0°45', em movimento subsequente)\nNodo Norte em trígono com a Lua (Orbe: 1°56', em movimento subsequente)\nNodo Norte em quadratura com Lilith (Orbe: 1°30', em formação)\nNodo Norte em Octil com Quíron (Orbe: 0°12', em formação)\nLilith em Quadratura com o Sol (Orbe: 0°45', em formação)\nLilith em Tri-Octil com Quíron (Orbe: 1°18', em formação)\nQuíron em Octil com o Sol (Orbe: 0°33', em formação)\nFortuna em Quadratura com Mercúrio (Orbe: 1°25', em formação)\nFortuna em Sextil com Quíron (Orbe: 0°00', em formação)\nFortuna em Trígono com o Ascendente (Orbe: 2°41', em formação)\nFortuna em Sextil com o Descendente (Orbe: 2°41', em formação)\nVértice em Quadratura com a Lua (Orbe: 0°05', em formação)\nVértice em Octil com Marte (Orbe: 1°09', em formação)\nVértice em Octil com Urano (Orbe: 1°40', em formação)",
    jogoGerado: [11, 21, 7, 24, 2, 20, 25, 5, 19, 1, 3, 6, 15, 18, 4],
    resultado: [2, 3, 6, 7, 9, 10, 11, 12, 14, 15, 16, 18, 19, 20, 21],
    obs: "",
  },
  {
    id: "h200_3623", concurso: "3623", data: "27/02/2026", hora: "",
    textoMapa: "Sol em Peixes 9°24', na 5ª Casa;\nLua em Câncer 25°10', na 10ª Casa;\nMercúrio em Peixes 22°19', retrógrado, na 6ª Casa;\nVênus em Peixes 21°58', na 6ª Casa\n; Marte em Aquário 27°57', na 5ª Casa;\nJúpiter em Câncer 15°17', retrógrado, na 9ª Casa;\nSaturno em Áries 1°36', na 6ª Casa;\nUrano em Touro 27°42', na 7ª Casa;\nNetuno em Áries 1°00', na 6ª Casa;\nPlutão em Aquário 4°30', na 4ª Casa;\nNodo Norte em Peixes 9°05', retrógrado, na 5ª Casa;\nLilith em Sagitário 7°45', na 2ª Casa;\nQuíron em Áries 23°59', na 6ª Casa;\nFortuna em Gêmeos 12°08', no\nVértice da 8ª Casa em Áries 11°32', no\nAscendente da 6ª Casa em Libra 27°54'\nMeio do Céu em Câncer 19°34'\n\n1ª Casa em Libra 27°54'\n2ª Casa em Sagitário 1°23'\n3ª Casa em Sagitário 26°52'\n4ª Casa em Capricórnio 19°34'\n5ª Casa em Aquário 15°03'\n6ª Casa em Peixes 18°32'\n7ª Casa em Áries 27°54'\n8ª Casa em Gêmeos 1°23'\n9ª Casa em Gêmeos 26°52'\n10ª Casa em Câncer 19°34'\n11ª Casa em Leão 15°03'\n12ª Casa em Virgem 18°32'\n\nSol em trígono com a Lua (Orbe: 0°46', separando-se)\nLua em trígono com Mercúrio (Orbe: 2°50', separando-se)\nLua em quincúncio com Marte (Orbe: 2°46', aplicando-se)\nLua em sextil com Urano (Orbe: 2°32', aplicando-se)\nMercúrio em conjunção com Vênus (Orbe: 0°21', aplicando-se)\nMercúrio em octil com Plutão (Orbe: 2°49', aplicando-se)\nVênus em octil com Plutão (Orbe: 2°27', separando-se)\nMarte em trígono com Júpiter (Orbe: 2°20', aplicando-se)\nMarte em quadratura com Urano (Orbe: 0°14', separando-se)\nJúpiter em octil com Urano (Orbe: 2°34', aplicando-se)\nSaturno em conjunção com Netuno (Orbe: 0°35', separando-se)\nSaturno em sextil com Plutão (Orbe: 2°54', aplicando-se)\n\nAscendente em quadratura com a Lua (Orbe: 2°44', Separando)\nAscendente em trígono com Marte (Orbe: 0°02', Aplicando)\nAscendente em quincúncio com Urano (Orbe: 0°11', Separando)\nDescendente em quadratura com a Lua (Orbe: 2°44', Separando)\nDescendente em sextil com Marte (Orbe: 0°02', Aplicando)\nMeio do Céu em trígono com Mercúrio (Orbe: 2°45', Aplicando)\nMeio do Céu em trígono com Vênus (Orbe: 2°23', Aplicando)\nFundo do Céu em sextil com Mercúrio (Orbe: 2°45', Aplicando)\nFundo do Céu em sextil com Vênus (Orbe: 2°23', Aplicando)\nNodo Norte em conjunção com o Sol (Orbe: 0°18', Separando)\nNodo Norte em trígono com a Lua (Orbe: 1°04', Separando)\nNodo Norte em quadratura com Lilith (Orbe: 1°20', Aplicando)\nNorte Nodo Octil Quíron (Orbe: 0°06', Aplicando)\nLilith Quadratura Sol (Orbe: 1°38', Separando)\nLilith Tri-Octil Lua (Orbe: 2°25', Separando)\nLilith Tri-Octil Quíron (Orbe: 1°14', Aplicando)\nQuíron Octil Sol (Orbe: 0°24', Separando)\nQuíron Quadratura Lua (Orbe: 1°10', Separando)\nFortuna Quadratura Sol (Orbe: 2°44', Separando)\nFortuna Octil Lua (Orbe: 1°57', Separando)\nFortuna Tri-Octil Ascendente (Orbe: 0°46', Separando)\nFortuna Octil Descendente (Orbe: 0°46', Separando)\nVértice Octil Marte (Orbe: 1°24', Aplicando)\nVértice Octil Urano (Orbe: 1°09', Aplicando)",
    jogoGerado: [11, 9, 10, 13, 7, 2, 20, 25, 19, 22, 4, 16, 5, 15, 1],
    resultado: [2, 4, 6, 7, 9, 10, 11, 12, 13, 14, 16, 19, 20, 22, 24],
    obs: "",
  },
  {
    id: "h200_3624", concurso: "3624", data: "28/02/2026", hora: "",
    textoMapa: "Sol em Peixes 10°24', na 5ª Casa;\nLua em Leão 9°07', na 10ª Casa;\nMercúrio em Peixes 21°58', retrógrado, na 6ª Casa;\nVênus em Peixes 23°12', na 6ª Casa;\nMarte em Aquário 28°44', na 5ª Casa;\nJúpiter em Câncer 15°15', retrógrado, na 9ª Casa;\nSaturno em Áries 1°43', na 6ª Casa;\nUrano em Touro 27°43', na 7ª Casa;\nNetuno em Áries 1°02', na 6ª Casa;\nPlutão em Aquário 4°32', na 4ª Casa;\nNodo Norte em Peixes 9°02', retrógrado, na 5ª Casa;\nLilith em Sagitário 7°51', na 2ª Casa;\nQuíron em Áries 24°02', na 6ª Casa;\nFortuna em Gêmeos 0°26', no\nVértice da 7ª Casa em Áries 12°05', no\nAscendente da 6ª Casa em Libra 29°09'\nMeio do Céu em Câncer 20°29'\n\n1ª Casa em Libra 29°09'\n2ª Casa em Sagitário 2°24'\n3ª Casa em Sagitário 27°46'\n4ª Casa em Capricórnio 20°29'\n5ª Casa em Aquário 16°07'\n6ª Casa em Peixes 19°48'\n7ª Casa em Áries 29°09'\n8ª Casa em Gêmeos 2°24'\n9ª Casa em Gêmeos 27°46'\n10ª Casa em Câncer 20°29'\n11ª Casa em Leão 16°07'\n12ª Casa em Virgem 19°48'\n\nSol em Quincúncio com a Lua (Orbe: 1°17', em movimento subsequente)\nLua em Tri-óctil com Mercúrio (Orbe: 2°08', em movimento subsequente)\nLua em Tri-óctil com Vênus (Orbe: 0°54', em movimento subsequente)\nMercúrio em Conjunção com Vênus (Orbe: 1°14',\nem movimento subsequente) Mercúrio em Octil com Plutão (Orbe: 2°26', em movimento subsequente)\nMarte em Tri-óctil com Júpiter (Orbe: 1°30', em movimento subsequente)\nMarte em Quadratura com Urano (Orbe: 1°00', em movimento subsequente)\nJúpiter em Octil com Urano (Orbe: 2°31', em movimento subsequente)\nSaturno em Conjunção com Netuno (Orbe: 0°40', em movimento subsequente)\nSaturno em Sextil com Plutão (Orbe: 2°48', em movimento subsequente)\n\nAscendente em trígono com Marte (Orbe: 0°24', Separando)\nAscendente em quincúncio com Saturno (Orbe: 2°34', Aplicando)\nAscendente em quincúncio com Urano (Orbe: 1°25', Separando)\nAscendente em quincúncio com Netuno (Orbe: 1°53', Aplicando)\nDescendente em sextil com Marte (Orbe: 0°24', Separando)\nMeio do Céu em trígono com Mercúrio (Orbe: 1°28', Aplicando)\nMeio do Céu em trígono com Vênus (Orbe: 2°43', Aplicando) Meio do Céu\nem trígono com Lilith (Orbe: 2°22', Aplicando)\nFundo do Céu em sextil com Mercúrio (Orbe: 1°28', Aplicando)\nFundo do Céu em sextil com Vênus (Orbe: 2°43', Aplicando)\nFundo do Céu em octil com Lilith (Orbe: 2°22', Aplicando)\nNodo Norte em conjunção com o Sol (Orbe:\nNodo Norte em Quincúncio com a Lua (Orbe: 0°04', Separando)\nNodo Norte em Quadratura com Lilith (Orbe: 1°10', Aplicando)\nNodo Norte em Octil com Quíron (Orbe: 0°00', Aplicando)\nLilith em Quadratura com o Sol (Orbe: 2°32', Separando)\nLilith em Trígono com a Lua (Orbe: 1°15', Separando)\nLilith em Tri-Octil com Quíron (Orbe: 1°10', Aplicando)\nQuíron em Octil com o Sol (Orbe: 1°21', Separando)\nFortuna em Quadratura com Marte (Orbe: 1°41', Separando)\nFortuna em Octil com Júpiter (Orbe: 0°11', Separando)\nFortuna em Sextil com Saturno (Orbe: 1°16', Aplicando)\nFortuna em Conjunção com Urano (Orbe: 2°42', Separando)\nFortuna em Sextil com Netuno (Orbe: 0°36', em movimento)\nFortuna em Quincúncio com o Ascendente (Orbe: 1°17', em movimento de separação)\nFortuna em Sextil com o Vértice (Orbe: 0°26', em movimento de separação)\nVértice em Trígono com a Lua (Orbe: 2°58', em movimento de separação)\nVértice em Octil com Marte (Orbe: 1°39', em movimento de separação)\nVértice em Octil com Urano (Orbe: 0°38', em movimento de separação)",
    jogoGerado: [11, 5, 25, 8, 6, 2, 4, 10, 24, 13, 16, 15, 20, 22, 21],
    resultado: [1, 2, 4, 5, 6, 9, 11, 12, 13, 16, 18, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3625", concurso: "3625", data: "02/03/2026", hora: "",
    textoMapa: "Sol em Peixes 12°24', na 5ª Casa;\nLua em Virgem 6°25', na 11ª Casa;\nMercúrio em Peixes 20°50', retrógrado, na 5ª Casa;\nVênus em Peixes 25°42', na 6ª Casa\n; Marte em Peixes 0°19', na 5ª Casa;\nJúpiter em Câncer 15°11', retrógrado, na 9ª Casa;\nSaturno em Áries 1°57', na 6ª Casa;\nUrano em Touro 27°46', na 7ª Casa;\nNetuno em Áries 1°06', na 6ª Casa;\nPlutão em Aquário 4°35', na 4ª Casa;\nNodo Norte em Peixes 8°56', retrógrado, na 5ª Casa;\nLilith em Sagitário 8°05', na 2ª Casa;\nQuíron em Áries 24°08', na 6ª Casa;\nFortuna em Touro 7°36', na 7ª Casa,\nVértice em Áries 13°09', na 6ª Casa,\nAscendente em Escorpião 1°37',\nMeio do Céu em Câncer 22°20'\n\n1ª Casa em Escorpião 1°37'\n2ª Casa em Sagitário 4°27'\n3ª Casa em Sagitário 29°35'\n4ª Casa em Capricórnio 22°20'\n5ª Casa em Aquário 18°16'\n6ª Casa em Peixes 22°22'\n7ª Casa em Touro 1°37'\n8ª Casa em Gêmeos 4°27'\n9ª Casa em Gêmeos 29°35'\n10ª Casa em Câncer 22°20'\n11ª Casa em Leão 18°16'\n12ª Casa em Virgem 22°22'\n\nSol em trígono com Júpiter (Orbe: 2°47', em movimento subsequente)\nLua em quincúncio com Plutão (Orbe: 1°50', em movimento subsequente)\nMercúrio em octil com Plutão (Orbe: 1°15', em movimento subsequente)\nVênus em sextil com Urano (Orbe: 2°04', em movimento subsequente)\nMarte em trígono com Júpiter (Orbe: 0°07', em movimento subsequente)\nMarte em quadratura com Urano (Orbe: 2°32', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°25', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 0°50', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 2°37', em movimento subsequente)\n\nAscendente em trígono com Marte (Orbe: 1°18', Separando)\nAscendente em quincúncio com Saturno (Orbe: 0°20', Aplicando)\nAscendente em quincúncio com Netuno (Orbe: 0°30', Separando)\nAscendente em quadratura com Plutão (Orbe: 2°57', Aplicando)\nDescendente em sextil com Marte (Orbe: 1°18', Separando)\nDescendente em quadratura com Plutão (Orbe: 2°57', Aplicando)\nMeio do Céu em octil com a Lua (Orbe: 0°55', Separando) Meio do Céu\nem trígono com Mercúrio (Orbe: 1°30', Separando)\nMeio do Céu em trígono com o Nodo Norte (Orbe: 1°35', Aplicando)\nMeio do Céu em trígono com Lilith (Orbe: 0°44', Aplicando) Meio\ndo Céu em quadratura com Quíron (Orbe: 1°47', Aplicando)\nFundo do Céu em trígono com a Lua (Orbe: 0°55', Separando)\nSextil IC Mercúrio (Orbe: 1°30', Separando)\nOctil IC Nodo (Orbe: 1°35', Aplicando)\nOctil IC Lilith (Orbe: 0°44', Aplicando)\nQuadratura IC Quíron (Orbe: 1°47', Aplicando)\nOposição do Nodo Norte à Lua (Orbe: 2°30', Aplicando)\nQuadratura do Nodo Norte com Lilith (Orbe: 0°51', Aplicando)\nOctil do Nodo Norte com Quíron (Orbe: 0°11', Separando)\nQuadratura de Lilith com a Lua (Orbe: 1°39', Aplicando)\nTri-Octil de Lilith com Quíron (Orbe: 1°02', Aplicando)\nTri-Octil de Quíron com a Lua (Orbe: 2°42', Aplicando)\nTrígono da Fortuna com a Lua (Orbe: 1°11', Separando)\nOctil da Fortuna com Mercúrio (Orbe:\nNodo em sextil com Fortune (Orbe: 1°19', em aplicação) Quincúncio\nde Fortune com Lilith (Orbe: 0°28', em aplicação)\nOctil de Vertex com Marte (Orbe: 2°09', em aplicação)\nQuadratura de Vertex com Júpiter (Orbe: 2°02', em aplicação)\nOctil de Vertex com Urano (Orbe: 0°22', em separação)",
    jogoGerado: [9, 10, 13, 15, 11, 17, 24, 20, 16, 25, 8, 21, 2, 12, 1],
    resultado: [1, 4, 8, 9, 10, 13, 15, 16, 17, 18, 19, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3626", concurso: "3626", data: "03/03/2026", hora: "",
    textoMapa: "Sol em Peixes 13°24', na 5ª Casa;\nLua em Virgem 19°42', na 11ª Casa;\nMercúrio em Peixes 20°05', retrógrado, na 5ª Casa;\nVênus em Peixes 26°57', na 6ª Casa\n; Marte em Peixes 1°06', na 5ª Casa;\nJúpiter em Câncer 15°10', retrógrado, na 9ª Casa;\nSaturno em Áries 2°05', na 6ª Casa;\nUrano em Touro 27°48', na 7ª Casa;\nNetuno em Áries 1°09', na 6ª Casa;\nPlutão em Aquário 4°36', na 4ª Casa;\nNodo Norte em Peixes 8°53', retrógrado, na 5ª Casa;\nLilith em Sagitário 8°12', na 2ª Casa;\nQuíron em Áries 24°11', na 6ª Casa;\nFortuna em Áries 26°33', na 6ª Casa,\nVértice em Áries 13°41', na 6ª Casa,\nAscendente em Escorpião 2°51',\nMeio do Céu em Câncer 23°16'\n\n1ª Casa em Escorpião 2°51'\n2ª Casa em Sagitário 5°27'\n3ª Casa em Capricórnio 0°29'\n4ª Casa em Capricórnio 23°16'\n5ª Casa em Aquário 19°21'\n6ª Casa em Peixes 23°39'\n7ª Casa em Touro 2°51'\n8ª Casa em Gêmeos 5°27'\n9ª Casa em Câncer 0°29'\n10ª Casa em Câncer 23°16'\n11ª Casa em Leão 19°21'\n12ª Casa em Virgem 23°39'\n\nSol em trígono com Júpiter (Orbe: 1°45', em movimento subsequente)\nLua em oposição a Mercúrio (Orbe: 0°22', em movimento subsequente)\nLua em trígono-óctil com Plutão (Orbe: 0°05', em movimento subsequente)\nMercúrio em octil com Plutão (Orbe: 0°28', em movimento subsequente\n) Vênus em sextil com Urano (Orbe: 0°50', em movimento subsequente)\nMarte em trígono-óctil com Júpiter (Orbe: 0°56', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°22', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 0°55', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 2°31', em movimento subsequente)\n\nLua em Octil no Ascendente (Orbe: 1°51', em movimento)\nMercúrio em Tri-Octil no Ascendente (Orbe: 2°14', em movimento)\nTrígono com Marte no Ascendente (Orbe: 1°44', em movimento)\nQuincúncio com Saturno no Ascendente (Orbe: 0°46', em movimento)\nQuincúncio com Netuno no Ascendente (Orbe: 1°42', em movimento)\nQuadratura com Plutão no Ascendente (Orbe: 1°45', em movimento)\nLua em Tri-Octil no Descendente (Orbe: 1°51', em movimento)\nMercúrio em Octil no Descendente (Orbe: 2°14', em movimento)\nSextil com Marte no Descendente (Orbe: 1°44', em movimento)\nQuadratura com Plutão no Descendente (Orbe: 1°45', em movimento)\nNodo em Tri-Octil no Meio do Céu (Orbe: 0°36', em movimento)\nMeio do Céu Lilith em Tri-Octil (Orbe: 0°04', Separando)\nMC em Quadratura com Quíron (Orbe: 0°54', Aplicando)\nIC em Octil com o Nodo (Orbe: 0°36', Aplicando)\nIC em Octil com Lilith (Orbe: 0°04', Separando)\nIC em Quadratura com Quíron (Orbe: 0°54', Aplicando)\nNodo Norte em Quadratura com Lilith (Orbe: 0°41', Aplicando)\nNodo Norte em Octil com Quíron (Orbe: 0°17', Separando)\nLilith em Tri-Octil com Quíron (Orbe: 0°59', Aplicando)\nFortuna em Octil com o Sol (Orbe: 1°51', Aplicando)\nFortuna em Octil com o Nodo (Orbe: 2°40', Separando)\nFortuna em Conjunção com Quíron (Orbe: 2°22', Separando)\nVértice em Octil com Marte (Orbe: 2°25', Em\nquadratura com Júpiter (Orbe: 1°28', em formação)\ne em octil com Urano (Orbe: 0°53', em formação).",
    jogoGerado: [13, 15, 11, 17, 16, 25, 3, 21, 2, 6, 19, 10, 5, 22, 1],
    resultado: [1, 2, 3, 6, 7, 9, 10, 13, 15, 16, 17, 18, 20, 21, 25],
    obs: "",
  },
  {
    id: "h200_3627", concurso: "3627", data: "04/03/2026", hora: "",
    textoMapa: "Sol em Peixes 14°24', na 5ª Casa;\nLua em Libra 2°43', na 12ª Casa;\nMercúrio em Peixes 19°14', retrógrado, na 5ª Casa;\nVênus em Peixes 28°11', na 6ª Casa\n; Marte em Peixes 1°53', na 5ª Casa;\nJúpiter em Câncer 15°08', retrógrado, na 9ª Casa;\nSaturno em Áries 2°12', na 6ª Casa;\nUrano em Touro 27°49', na 7ª Casa;\nNetuno em Áries 1°11', na 6ª Casa;\nPlutão em Aquário 4°38', na 4ª Casa;\nNodo Norte em Peixes 8°50', retrógrado, na 5ª Casa;\nLilith em Sagitário 8°18', na 2ª Casa;\nQuíron em Áries 24°14', na 6ª Casa;\nFortuna em Áries. 15°46', no\nVértice da 6ª Casa em Áries 14°13', no\nAscendente da 6ª Casa em Escorpião 4°04'\nMeio do Céu em Câncer 24°12'\n\n1ª Casa em Escorpião 4°04'\n2ª Casa em Sagitário 6°28'\n3ª Casa em Capricórnio 1°24'\n4ª Casa em Capricórnio 24°12'\n5ª Casa em Aquário 20°26'\n6ª Casa em Peixes 24°55'\n7ª Casa em Touro 4°04'\n8ª Casa em Gêmeos 6°28'\n9ª Casa em Câncer 1°24'\n10ª Casa em Câncer 24°12'\n11ª Casa em Leão 20°26'\n12ª Casa em Virgem 24°55'\n\nSol em trígono com Júpiter (Orbe: 0°43', em movimento subsequente)\nLua em quincúncio com Marte (Orbe: 0°49', em movimento subsequente)\nLua em oposição a Saturno (Orbe: 0°31', em movimento subsequente)\nLua em oposição a Netuno (Orbe: 1°32', em movimento subsequente)\nLua em trígono com Plutão (Orbe: 1°54', em movimento subsequente)\nMercúrio em octil com Plutão (Orbe: 0°23', em movimento subsequente)\nVênus em sextil com Urano (Orbe: 0°22', em movimento subsequente)\nVênus em conjunção com Netuno (Orbe: 2°59', em movimento subsequente)\nMarte em trígono com Júpiter (Orbe: 1°44', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°19', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 1°00', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 2°26', em movimento subsequente)\n\nTri-óctil do Ascendente com Mercúrio (Orbe: 0°09', em movimento)\nTrígono do Ascendente com Marte (Orbe: 2°10', em movimento)\nQuincúncio do Ascendente com Saturno (Orbe: 1°52', em movimento)\nQuincúncio do Ascendente com Netuno (Orbe: 2°53', em movimento)\nQuadratura do Ascendente com Plutão (Orbe: 0°33', em movimento)\nQuincúncio do Descendente com a Lua (Orbe: 1°21', em movimento)\nOctil do Descendente com Mercúrio (Orbe: 0°09', em movimento)\nSextil do Descendente com Marte (Orbe: 2°10', em movimento)\nQuadratura do Descendente com Plutão (Orbe: 0°33', em movimento)\nTri-óctil do Meio do Céu com o Nodo Norte (Orbe: 0°22', em movimento)\nTri-óctil do Meio do Céu com Lilith (Orbe: 0°53', em movimento)\nQuadratura do Meio do Céu Quíron (Orbe: 0°01', em conjunção)\nIC Octil Nodo (Orbe: 0°22', em conjunção)\nIC Octil Lilith (Orbe: 0°53', em conjunção)\nIC Quadratura Quíron (Orbe: 0°01', em conjunção)\nNodo Norte Quadratura Lilith (Orbe: 0°31', em conjunção)\nNodo Norte Octil Quíron (Orbe: 0°24', em conjunção)\nLilith Tri-Octil Quíron (Orbe: 0°55', em conjunção)\nFortuna Octil Marte (Orbe: 1°07', em conjunção)\nFortuna Quadratura Júpiter (Orbe: 0°37', em conjunção)\nFortuna Octil Urano (Orbe: 2°56', em conjunção)\nVértice Octil Marte (Orbe: 2°40', em conjunção)\nVértice Quadratura Júpiter (Orbe: 0°55', em conjunção)\nVértice Octil Urano (Orbe: 1°23', Separando)",
    jogoGerado: [9, 10, 13, 15, 8, 11, 17, 20, 24, 25, 7, 16, 19, 21, 6],
    resultado: [1, 2, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 21],
    obs: "",
  },
  {
    id: "h200_3628", concurso: "3628", data: "05/03/2026", hora: "",
    textoMapa: "Sol em Peixes 15°25', na 5ª Casa;\nLua em Libra 15°27', na 12ª Casa;\nMercúrio em Peixes 18°19', retrógrado, na 5ª Casa;\nVênus em Peixes 29°26', na 6ª Casa\n; Marte em Peixes 2°40', na 5ª Casa;\nJúpiter em Câncer 15°07', retrógrado, na 9ª Casa;\nSaturno em Áries 2°19', na 6ª Casa;\nUrano em Touro 27°51', na 7ª Casa;\nNetuno em Áries 1°13', na 6ª Casa;\nPlutão em Aquário 4°39', na 4ª Casa;\nNodo Norte em Peixes 8°46', retrógrado, na 5ª Casa;\nLilith em Sagitário 8°25', na 2ª Casa;\nQuíron em Áries 24°17', na 6ª Casa;\nFortuna em Áries. 5°14', no\nVértice da 6ª Casa em Áries 14°45', no\nAscendente da 6ª Casa em Escorpião 5°17'\nMeio do Céu em Câncer 25°08'\n\n1ª Casa em Escorpião 5°17'\n2ª Casa em Sagitário 7°28'\n3ª Casa em Capricórnio 2°18'\n4ª Casa em Capricórnio 25°08'\n5ª Casa em Aquário 21°31'\n6ª Casa em Peixes 26°12'\n7ª Casa em Touro 5°17'\n8ª Casa em Gêmeos 7°28'\n9ª Casa em Câncer 2°18'\n10ª Casa em Câncer 25°08'\n11ª Casa em Leão 21°31'\n12ª Casa em Virgem 26°12'\n\nSol em Quincúncio com a Lua (Orbe: 0°02', Separando)\nSol em Conjunção com Mercúrio (Orbe: 2°53', Aproximando)\nSol em Trígono com Júpiter (Orbe: 0°17', Separando)\nLua em Quincúncio com Mercúrio (Orbe: 2°51', Aproximando)\nLua em Tri-Óctil com Marte (Orbe: 2°13', Aproximando)\nLua em Quadratura com Júpiter (Orbe: 0°19', Separando)\nLua em Tri-Óctil com Urano (Orbe: 2°36', Separando)\nMercúrio em Octil com Plutão (Orbe: 1°20', Separando)\nVênus em Conjunção com Saturno (Orbe: 2°52', Aproximando)\nVênus em Sextil com Urano (Orbe: 1°35', Separando)\nVênus em Conjunção com Netuno (Orbe: 1°47', Aproximando)\nMarte em Tri-Óctil com Júpiter (Orbe: 2°33', Separando)\nJúpiter em octil com Urano (Orbe: 2°16', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 1°05', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 2°20', em movimento subsequente)\n\nTri-óctil do Ascendente com Mercúrio (Orbe: 1°58', Separando)\nTrígono do Ascendente com Marte (Orbe: 2°36', Separando)\nQuincúncio do Ascendente com Saturno (Orbe: 2°57', Separando)\nQuadratura do Ascendente com Plutão (Orbe: 0°37', Separando)\nOctil do Descendente com Mercúrio (Orbe: 1°58', Separando)\nSextil do Descendente com Marte (Orbe: 2°36', Separando)\nQuadratura do Descendente com Plutão (Orbe: 0°37', Separando)\nSextil do Meio do Céu com Urano (Orbe: 2°42', Aplicando)\nTri-óctil do Meio do Céu com o Nodo Norte (Orbe: 1°21', Separando)\nTri-óctil do Meio do Céu com Lilith (Orbe: 1°43', Separando)\nQuadratura do Meio do Céu com Quíron (Orbe: 0°51', Separando)\nTrígono do Fundo do Céu com Urano (Orbe: 2°42', Aplicando)\nIC Octil Nodo (Orbe: 1°21', Separando)\nIC Octil Lilith (Orbe: 1°43', Separando)\nIC Quadratura Quíron (Orbe: 0°51', Separando)\nNodo Norte Quadratura Lilith (Orbe: 0°21', Aplicando)\nNodo Norte Octil Quíron (Orbe: 0°30', Separando)\nLilith Tri-Octil Quíron (Orbe: 0°51', Aplicando)\nFortuna Conjunção Saturno (Orbe: 2°55', Separando)\nFortuna Sextil Plutão (Orbe: 0°34', Separando)\nFortuna Quincúncio Ascendente (Orbe: 0°02', Separando)\nVertex Oposição Lua (Orbe: 0°42', Aplicando)\nVertex Octil Marte (Orbe: 2°55', Aplicando)\nVertex Júpiter em quadratura (órbita: 0°22', aproximando-se)\ne Urano em octila no vértice (órbita: 1°54', afastando-se).",
    jogoGerado: [13, 15, 2, 3, 9, 11, 16, 17, 21, 20, 25, 10, 24, 19, 5],
    resultado: [2, 3, 4, 6, 9, 10, 13, 15, 16, 17, 20, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3629", concurso: "3629", data: "06/03/2026", hora: "",
    textoMapa: "Sol em Peixes 16°25', na 5ª Casa;\nLua em Libra 27°55', na 12ª Casa;\nMercúrio em Peixes 17°20', retrógrado, na 5ª Casa;\nVênus em Áries 0°41', na 6ª Casa\n; Marte em Peixes 3°28', na 5ª Casa;\nJúpiter em Câncer 15°06', retrógrado, na 9ª Casa;\nSaturno em Áries 2°26', na 6ª Casa;\nUrano em Touro 27°52', na 7ª Casa;\nNetuno em Áries 1°15', na 6ª Casa;\nPlutão em Aquário 4°41', na 4ª Casa;\nNodo Norte em Peixes 8°43', retrógrado, na 5ª Casa;\nLilith em Sagitário 8°32', na 2ª Casa;\nQuíron em Áries 24°20', na 6ª Casa;\nFortuna em Peixes. 24°59', no\nVértice da 5ª Casa em Áries 15°17', no\nAscendente da 6ª Casa em Escorpião 6°29'\nMC em Câncer 26°04'\n\n1ª Casa em Escorpião 6°29'\n2ª Casa em Sagitário 8°27'\n3ª Casa em Capricórnio 3°12'\n4ª Casa em Capricórnio 26°04'\n5ª Casa em Aquário 22°37'\n6ª Casa em Peixes 27°29'\n7ª Casa em Touro 6°29'\n8ª Casa em Gêmeos 8°27'\n9ª Casa em Câncer 3°12'\n10ª Casa em Câncer 26°04'\n11ª Casa em Leão 22°37'\n12ª Casa em Virgem 27°29'\n\nSol em conjunção com Mercúrio (Orbe: 0°55', em movimento)\nSol em trígono com Júpiter (Orbe: 1°18', em movimento)\nLua em quincúncio com Vênus (Orbe: 2°45', em movimento)\nLua em quincúncio com Urano (Orbe: 0°03', em movimento)\nMercúrio em trígono com Júpiter (Orbe: 2°13', em movimento)\nMercúrio em octil com Plutão (Orbe: 2°21', em movimento)\nVênus em conjunção com Saturno (Orbe: 1°45', em movimento)\nVênus em sextil com Urano (Orbe: 2°48', em movimento)\nVênus em conjunção com Netuno (Orbe: 0°34', em movimento)\nJúpiter em octil com Urano (Orbe: 2°14', em movimento)\nSaturno em conjunção com Netuno (Orbe: 1°11', em movimento)\nSaturno em sextil com Plutão (Orbe: 2°14', em movimento)\n\nAscendente em quadratura com Plutão (Orbe: 1°48', Separando)\nAscendente em trígono com o Nodo Lunar (Orbe: 2°13', Aplicando)\nDescendente em quadratura com Plutão (Orbe: 1°48', Separando)\nDescendente em sextil com o Nodo Lunar (Orbe: 2°13', Aplicando)\nDescendente em quincúncio com Lilith (Orbe: 2°02', Aplicando)\nMeio do Céu em quadratura com a Lua (Orbe: 1°51', Aplicando)\nMeio do Céu em sextil com Urano (Orbe: 1°47', Aplicando)\nMeio do Céu em trígono com o Nodo Lunar (Orbe: 2°21', Separando) Meio\ndo Céu em trígono com Lilith (Orbe: 2°32', Separando)\nMeio do Céu em quadratura com Quíron (Orbe: 1°44', Separando)\nFundo do Céu em quadratura com a Lua (Orbe: 1°51', Aplicando) Fundo\ndo Céu em trígono com Urano (Orbe: 1°47', Aplicando)\nFundo do Céu Nodo Octil (Orbe: 2°21', Separando)\nIC Octil Lilith (Orbe: 2°32', Separando)\nIC Quadratura Quíron (Orbe: 1°44', Separando)\nNodo Norte Quadratura Lilith (Orbe: 0°11', Aplicando)\nNodo Norte Octil Quíron (Orbe: 0°36', Separando)\nLilith Tri-Octil Quíron (Orbe: 0°47', Aplicando)\nLua em Quincúncio da Fortuna (Orbe: 2°56', Aplicando)\nSextil da Fortuna com Urano (Orbe: 2°53', Aplicando)\nTrígono da Fortuna com MC (Orbe: 1°05', Aplicando)\nSextil da Fortuna com IC (Orbe: 1°05', Aplicando)\nVértice Quadratura Júpiter (Orbe: 0°10', Separando)\nVértice Octil Urano (Orbe: 2°24', Separando)",
    jogoGerado: [13, 15, 11, 17, 23, 20, 25, 16, 21, 2, 24, 19, 10, 4, 5],
    resultado: [1, 4, 7, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3630", concurso: "3630", data: "07/03/2026", hora: "",
    textoMapa: "Sol em Peixes 17°25', na 5ª Casa;\nLua em Escorpião 10°10', na 1ª Casa;\nMercúrio em Peixes 16°19', retrógrado, na 5ª Casa;\nVênus em Áries 1°55', na 6ª Casa;\nMarte em Peixes 4°15', na 5ª Casa;\nJúpiter em Câncer 15°06', retrógrado, na 9ª Casa;\nSaturno em Áries 2°34', na 6ª Casa;\nUrano em Touro 27°54', na 7ª Casa;\nNetuno em Áries 1°17', na 6ª Casa;\nPlutão em Aquário 4°42', na 4ª Casa;\nNodo Norte em Peixes 8°40', retrógrado, na 5ª Casa;\nLilith em Sagitário 8°39', na 1ª Casa;\nQuíron em Áries 24°23', na 6ª Casa;\nFortuna em Peixes. 14°56', no\nVértice da 5ª Casa em Áries 15°49', no\nAscendente da 6ª Casa em Escorpião 7°41'\nMeio do Céu em Câncer 27°01'\n\n1ª Casa em Escorpião 7°41'\n2ª Casa em Sagitário 9°27'\n3ª Casa em Capricórnio 4°06'\n4ª Casa em Capricórnio 27°01'\n5ª Casa em Aquário 23°43'\n6ª Casa em Peixes 28°46'\n7ª Casa em Touro 7°41'\n8ª Casa em Gêmeos 9°27'\n9ª Casa em Câncer 4°06'\n10ª Casa em Câncer 27°01'\n11ª Casa em Leão 23°43'\n12ª Casa em Virgem 28°46'\n\nSol em conjunção com Mercúrio (Orbe: 1°05', separando)\nSol em trígono com Júpiter (Orbe: 2°18', separando)\nSol em octil com Plutão (Orbe: 2°17', aplicando)\nMercúrio em trígono com Júpiter (Orbe: 1°13', aplicando)\nVênus em conjunção com Saturno (Orbe: 0°38', aplicando)\nVênus em conjunção com Netuno (Orbe: 0°37', separando)\nVênus em sextil com Plutão (Orbe: 2°47', aplicando)\nJúpiter em octil com Urano (Orbe: 2°12', aplicando)\nSaturno em conjunção com Netuno (Orbe: 1°16', separando)\nSaturno em sextil com Plutão (Orbe: 2°08', aplicando)\n\nAscendente em conjunção com a Lua (Orbe: 2°28', em movimento)\nAscendente em quadratura com Plutão (Orbe: 2°58', em movimento)\nAscendente em trígono com o Nodo Norte (Orbe: 0°58', em movimento)\nDescendente em oposição à Lua (Orbe: 2°28', em movimento)\nDescendente em quadratura com Plutão (Orbe: 2°58', em movimento)\nDescendente em sextil com o Nodo Norte (Orbe: 0°58', em movimento)\nDescendente em quincúncio com Lilith (Orbe: 0°57', em movimento)\nMeio do Céu em sextil com Urano (Orbe: 0°53', em movimento) Meio do Céu\nem quadratura com Quíron (Orbe: 2°38', em movimento)\nFundo do Céu em trígono com Urano (Orbe: 0°53', em movimento)\nFundo do Céu em quadratura com Quíron (Orbe: 2°38', em movimento)\nNodo Norte em trígono com a Lua (Orbe: 1°29', em movimento)\nNorte Nodo em quadratura com Lilith (Orbe: 0°01', em movimento)\nNodo Norte em octil com Quíron (Orbe: 0°42', em movimento de separação)\nLilith em trígono com octil de Quíron (Orbe: 0°44', em movimento)\nFortuna em conjunção com o Sol (Orbe: 2°28', em movimento)\nFortuna em conjunção com Mercúrio (Orbe: 1°23', em movimento)\nFortuna em trígono com Júpiter (Orbe: 0°09', em movimento)\nFortuna em trígono com o Meio do Céu (Orbe: 2°55', em movimento de separação)\nFortuna em octil com o Fundo do Céu (Orbe: 2°55', em movimento de separação)\nVértice em quadratura com Júpiter (Orbe: 0°43', em movimento de separação)\nVértice em octil com Urano (Orbe: 2°55', em movimento de separação)",
    jogoGerado: [11, 15, 17, 13, 20, 25, 21, 2, 3, 5, 24, 23, 10, 19, 6],
    resultado: [2, 3, 4, 5, 6, 7, 8, 11, 12, 14, 15, 17, 19, 23, 24],
    obs: "",
  },
  {
    id: "h200_3631", concurso: "3631", data: "09/03/2026", hora: "",
    textoMapa: "Sol em Peixes 19°25', na 5ª Casa;\nLua em Sagitário 4°09', na 1ª Casa;\nMercúrio em Peixes 14°19', retrógrado, na 5ª Casa;\nVênus em Áries 4°24', na 6ª Casa;\nMarte em Peixes 5°50', na 5ª Casa;\nJúpiter em Câncer 15°05', retrógrado, na 9ª Casa;\nSaturno em Áries 2°48', na 6ª Casa;\nUrano em Touro 27°57', na 7ª Casa;\nNetuno em Áries 1°22', na 6ª Casa;\nPlutão em Aquário 4°45', na 4ª Casa;\nNodo Norte em Peixes 8°34', retrógrado, na 5ª Casa;\nLilith em Sagitário 8°52', na 1ª Casa;\nQuíron em Áries 24°29', na 6ª Casa;\nFortuna em Aquário. 25°19', no\nVértice da 4ª Casa em Áries 16°53', no\nAscendente da 6ª Casa em Escorpião 10°04'\nMeio do Céu em Câncer 28°54'\n\n1ª Casa em Escorpião 10°04'\n2ª Casa em Sagitário 11°24'\n3ª Casa em Capricórnio 5°53'\n4ª Casa em Capricórnio 28°54'\n5ª Casa em Aquário 25°55'\n6ª Casa em Áries 1°21'\n7ª Casa em Touro 10°04'\n8ª Casa em Gêmeos 11°24'\n9ª Casa em Câncer 5°53'\n10ª Casa em Câncer 28°54'\n11ª Casa em Leão 25°55'\n12ª Casa em Libra 1°21'\n\nSol em octil com Plutão (Orbe: 0°20', em movimento subsequente)\nLua em trígono com Vênus (Orbe: 0°15', em movimento subsequente)\nLua em quadratura com Marte (Orbe: 1°40', em movimento subsequente)\nLua em trígono com Saturno (Orbe: 1°21', em movimento subsequente)\nLua em trígono com Netuno (Orbe: 2°47', em movimento subsequente)\nLua em sextil com Plutão (Orbe: 0°36', em movimento subsequente)\nMercúrio em trígono com Júpiter (Orbe: 0°45', em movimento subsequente)\nVênus em conjunção com Saturno (Orbe: 1°36', em movimento subsequente)\nVênus em sextil com Plutão (Orbe: 0°20', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°07', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 1°26', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 1°57', em movimento subsequente)\n\nNodo em trígono com o Ascendente (Orbe: 1°30', Separando)\nNodo em sextil com o Descendente (Orbe: 1°30', Separando)\nQuincúncio do Descendente com Lilith (Orbe: 1°12', Separando)\nTri-óctil do Meio do Céu com Mercúrio (Orbe: 0°25', Aplicando)\nSextil do Meio do Céu com Urano (Orbe: 0°56', Separando)\nTrígono do Meio do Céu com Netuno (Orbe: 2°28', Aplicando)\nOctil do Fundo do Céu com Mercúrio (Orbe: 0°25', Aplicando)\nTrígono do Fundo do Céu com Urano (Orbe: 0°56', Separando)\nSextil do Fundo do Céu com Netuno (Orbe: 2°28', Aplicando)\nConjunção do Nodo Norte com Marte (Orbe: 2°44', Aplicando)\nQuadratura do Nodo Norte com Lilith (Orbe: 0°18', Separando)\nOctil do Nodo Norte com Quíron (Orbe:\nLilith em Tri-Octil com Quíron (Orbe: 0°36', Aplicando) Fortuna\nem Quadratura com Urano (Orbe: 2°37', Aplicando)\nFortuna em Sextil com Quíron (Orbe: 0°50', Separando)\nVértice em Tri-Octil com a Lua (Orbe: 2°16', Aplicando)\nVértice em Quadratura com Júpiter (Orbe: 1°47', Separando)",
    jogoGerado: [4, 11, 14, 15, 17, 25, 20, 13, 23, 9, 2, 8, 12, 21, 10],
    resultado: [4, 7, 8, 9, 12, 13, 14, 15, 16, 17, 19, 20, 21, 23, 25],
    obs: "",
  },
  {
    id: "h200_3632", concurso: "3632", data: "10/03/2026", hora: "",
    textoMapa: "Sol em Peixes 20°25', na 5ª Casa;\nLua em Sagitário 16°02', na 2ª Casa;\nMercúrio em Peixes 13°21', retrógrado, na 5ª Casa;\nVênus em Áries 5°39', na 6ª Casa;\nMarte em Peixes 6°37', na 5ª Casa;\nJúpiter em Câncer 15°05', estacionário, na 9ª Casa;\nSaturno em Áries 2°56', na 6ª Casa;\nUrano em Touro 27°59', na 7ª Casa;\nNetuno em Áries 1°24', na 5ª Casa;\nPlutão em Aquário 4°47', na 4ª Casa;\nNodo Norte em Peixes 8°31', retrógrado, na 5ª Casa;\nLilith em Sagitário 8°59', na 1ª Casa;\nQuíron em Áries 24°32', na 6ª Casa;\nFortuna em Aquário 15°37', na 4ª Casa,\nVértice em Áries 17°24', na 6ª Casa,\nAscendente em Escorpião 11°15',\nMeio do Céu em Câncer 29°50'\n\n1ª Casa em Escorpião 11°15'\n2ª Casa em Sagitário 12°23'\n3ª Casa em Capricórnio 6°47'\n4ª Casa em Capricórnio 29°50'\n5ª Casa em Aquário 27°02'\n6ª Casa em Áries 2°38'\n7ª Casa em Touro 11°15'\n8ª Casa em Gêmeos 12°23'\n9ª Casa em Câncer 6°47'\n10ª Casa em Câncer 29°50'\n11ª Casa em Leão 27°02'\n12ª Casa em Libra 2°38'\n\nSol em octil com Plutão (Orbe: 0°37', Separando)\nLua em quadratura com Mercúrio (Orbe: 2°40', Separando)\nLua em quincúncio com Júpiter (Orbe: 0°57', Separando)\nMercúrio em trígono com Júpiter (Orbe: 1°43', Separando)\nVênus em conjunção com Saturno (Orbe: 2°43', Separando)\nVênus em sextil com Plutão (Orbe: 0°52', Separando)\nJúpiter em octil com Urano (Orbe: 2°05', Aplicando)\nSaturno em conjunção com Netuno (Orbe: 1°31', Separando)\nSaturno em sextil com Plutão (Orbe: 1°51', Aplicando)\n\nAscendente em trígono com Mercúrio (Orbe: 2°06', em movimento)\nAscendente em trígono com o Nodo Norte (Orbe: 2°44', em movimento)\nDescendente em sextil com Mercúrio (Orbe: 2°06', em movimento)\nDescendente em sextil com o Nodo Norte (Orbe: 2°44', em movimento)\nDescendente em quincúncio com Lilith (Orbe: 2°16', em movimento)\nMeio do Céu em trígono com a Lua (Orbe: 1°11', em movimento)\nMeio do Céu em trígono com Mercúrio (Orbe: 1°28', em movimento)\nMeio do Céu em sextil com Urano (Orbe: 1°51', em movimento)\nMeio do Céu em trígono com Netuno (Orbe: 1°33', em movimento) Fundo do Céu\nem octil com a Lua (Orbe: 1°11', em movimento)\nFundo do Céu em octil com Mercúrio (Orbe: 1°28', em movimento)\nFundo do Céu em trígono com Urano (Orbe: 1°51', em movimento)\nSextil IC com Netuno (Orbe: 1°33', em Separação) Conjunção\ndo Nodo Norte com Marte (Orbe: 1°53', em Separação)\nQuadratura do Nodo Norte com Lilith (Orbe: 0°28', em Separação)\nOctil do Nodo Norte com Quíron (Orbe: 1°01', em Separação)\nQuadratura de Lilith com Marte (Orbe: 2°21', em Separação)\nTri-octil de Lilith com Quíron (Orbe: 0°33', em Separação)\nOctil de Quíron com Marte (Orbe: 2°54', em Separação)\nSextil da Lua com Fortune (Orbe: 0°25', em Separação)\nQuincúncio de Júpiter com Fortune (Orbe: 0°32', em Separação)\nOctil de Saturno com Fortune (Orbe: 2°18', em Separação)\nOctil de Netuno com Fortune (Orbe: 0°47', em Separação)\nOctil do Vértice com Fortune (Orbe:\nTrígono do vértice com a Lua (Orbe: 1°22', Separando )\nQuadratura do vértice com Júpiter (Orbe: 2°19', Separando)",
    jogoGerado: [2, 6, 11, 15, 17, 20, 5, 23, 1, 22, 25, 3, 9, 21, 10],
    resultado: [1, 2, 3, 5, 6, 9, 10, 15, 17, 19, 20, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h200_3633", concurso: "3633", data: "11/03/2026", hora: "",
    textoMapa: "Sol em Peixes 21°24', na 5ª Casa;\nLua em Sagitário 27°56', na 2ª Casa;\nMercúrio em Peixes 12°27', retrógrado, na 5ª Casa;\nVênus em Áries 6°54', na 6ª Casa;\nMarte em Peixes 7°24', na 5ª Casa;\nJúpiter em Câncer 15°05', na 9ª Casa;\nSaturno em Áries 3°03', na 5ª Casa;\nUrano em Touro 28°01', na 7ª Casa;\nNetuno em Áries 1°26', na 5ª Casa;\nPlutão em Aquário 4°48', na 4ª Casa;\nNodo Norte em Peixes 8°27', retrógrado, na 5ª Casa;\nLilith em Sagitário 9°05', na 1ª Casa;\nQuíron em Áries 24°35', na 6ª Casa;\nFortuna em Aquário. 5°53', no\nVértice da 4ª Casa em Áries 17°56', no\nAscendente da 6ª Casa em Escorpião 12°25'\nMeio do Céu em Leão 0°47'\n\n1ª Casa em Escorpião 12°25'\n2ª Casa em Sagitário 13°21'\n3ª Casa em Capricórnio 7°41'\n4ª Casa em Aquário 0°47'\n5ª Casa em Aquário 28°09'\n6ª Casa em Áries 3°55'\n7ª Casa em Touro 12°25'\n8ª Casa em Gêmeos 13°21'\n9ª Casa em Câncer 7°41'\n10ª Casa em Leão 0°47'\n11ª Casa em Leão 28°09'\n12ª Casa em Libra 3°55'\n\nSol em octil com Plutão (Orbe: 1°36', Separando)\nLua em quincúncio com Urano (Orbe: 0°04', Aproximando)\nMercúrio em trígono com Júpiter (Orbe: 2°37', Separando)\nVênus em sextil com Plutão (Orbe: 2°05', Separando)\nJúpiter em octil com Urano (Orbe: 2°04', Aproximando)\nSaturno em conjunção com Netuno (Orbe: 1°36', Separando)\nSaturno em sextil com Plutão (Orbe: 1°45', Aproximando)\n\nLua em Octil no Ascendente (Orbe: 0°31', em movimento)\nAscendente em Trígono com Mercúrio (Orbe: 0°02', em movimento)\nAscendente em Trígono com Júpiter (Orbe: 2°39', em movimento)\nLua em Tri-Octil no Descendente (Orbe: 0°31', em movimento)\nSextil no Descendente com Mercúrio (Orbe: 0°02', em movimento)\nSextil no Descendente com Júpiter (Orbe: 2°39', em movimento)\nLua em Quincúncio com o Meio do Céu (Orbe: 2°50', em movimento)\nMeio do Céu em Trígono com Saturno (Orbe: 2°15', em movimento) Meio do Céu em\nSextil com Urano (Orbe: 2°46', em movimento)\nMeio do Céu em Trígono com Netuno (Orbe: 0°39', em movimento)\nMeio do Céu em Sextil com Saturno (Orbe: 2°15', em movimento)\nMeio do Céu em Trígono com Urano (Orbe: 2°46', em movimento) Meio\ndo Céu em Sextil Netuno (Orbe: 0°39', em movimento)\nNodo Norte em conjunção com Marte (Orbe: 1°03', em movimento)\nNodo Norte em quadratura com Lilith (Orbe: 0°38', em movimento de separação)\nNodo Norte em octil com Quíron (Orbe: 1°07', em movimento de separação)\nLilith em trígono com Vênus (Orbe: 2°11', em movimento)\nLilith em quadratura com Marte (Orbe: 1°41', em movimento)\nLilith em trígono com octil de Quíron (Orbe: 0°29', em movimento)\nQuíron em octil com Mercúrio (Orbe: 2°52', em movimento)\nQuíron em octil com Marte (Orbe: 2°10', em movimento)\nFortuna em octil com o Sol (Orbe: 0°31', em movimento)\nFortuna em sextil com Vênus (Orbe: 1°00', em movimento) Fortuna em\nsextil com Saturno (Orbe: 2°49', em movimento de separação)\nFortuna em conjunção Plutão (Orbe: 1°04', em quadratura com\nJúpiter no vértice) (Orbe: 2°51', em quadratura com Júpiter)",
    jogoGerado: [11, 15, 23, 13, 20, 5, 1, 2, 17, 22, 25, 3, 6, 10, 21],
    resultado: [1, 5, 6, 7, 10, 11, 13, 17, 18, 20, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3634", concurso: "3634", data: "12/03/2026", hora: "",
    textoMapa: "Sol em Peixes 22°24', na 5ª Casa;\nLua em Capricórnio 9°57', na 3ª Casa;\nMercúrio em Peixes 11°38', retrógrado, na 5ª Casa;\nVênus em Áries 8°08', na 6ª Casa;\nMarte em Peixes 8°11', na 5ª Casa;\nJúpiter em Câncer 15°05', na 9ª Casa;\nSaturno em Áries 3°10', na 5ª Casa;\nUrano em Touro 28°02', na 7ª Casa;\nNetuno em Áries 1°29', na 5ª Casa;\nPlutão em Aquário 4°50', na 4ª Casa;\nNodo Norte em Peixes 8°24', retrógrado, na 5ª Casa;\nLilith em Sagitário 9°12', na 1ª Casa;\nQuíron em Áries 24°38', na 6ª Casa;\nFortuna em Capricórnio. 26°02', no\nVértice da 3ª Casa em Áries 18°28', no\nAscendente da 6ª Casa em Escorpião 13°35'\nMeio do Céu em Leão 1°44'\n\n1ª Casa em Escorpião 13°35'\n2ª Casa em Sagitário 14°19'\n3ª Casa em Capricórnio 8°35'\n4ª Casa em Aquário 1°44'\n5ª Casa em Aquário 29°16'\n6ª Casa em Áries 5°12'\n7ª Casa em Touro 13°35'\n8ª Casa em Gêmeos 14°19'\n9ª Casa em Câncer 8°35'\n10ª Casa em Leão 1°44'\n11ª Casa em Leão 29°16'\n12ª Casa em Libra 5°12'\n\nSol em octil com Plutão (Orbe: 2°34', separando)\nLua em sextil com Mercúrio (Orbe: 1°40', aproximando)\nLua em quadratura com Vênus (Orbe: 1°48', separando)\nLua em sextil com Marte (Orbe: 1°45', separando)\nJúpiter em octil com Urano (Orbe: 2°02', aproximando)\nSaturno em conjunção com Netuno (Orbe: 1°41', separando)\nSaturno em sextil com Plutão (Orbe: 1°39', aproximando)\n\nAscendente em trígono com Mercúrio (Orbe: 1°57', Separando)\nAscendente em trígono com Júpiter (Orbe: 1°30', Aplicando)\nAscendente em trígono octil com Netuno (Orbe: 2°53', Aplicando)\nDescendente em sextil com Mercúrio (Orbe: 1°57', Separando)\nDescendente em sextil com Júpiter (Orbe: 1°30', Aplicando)\nDescendente em octil com Netuno (Orbe: 2°53', Aplicando)\nMeio do Céu em trígono com Saturno (Orbe: 1°26', Aplicando)\nMeio do Céu em trígono com Netuno (Orbe: 0°15', Separando)\nFundo do Céu em sextil com Saturno (Orbe: 1°26', Aplicando)\nFundo do Céu em sextil com Netuno (Orbe: 0°15', Separando)\nNodo Norte em sextil com a Lua (Orbe: 1°32', Separando)\nNodo Norte em conjunção com Marte (Orbe:\nNodo Norte em quadratura com Lilith (Orbe: 0°47', Separando)\nNodo Norte em octil com Quíron (Orbe: 1°13', Separando)\nLilith em quadratura com Mercúrio (Orbe: 2°25', Aplicando)\nLilith em trígono com Vênus (Orbe: 1°04', Aplicando)\nLilith em quadratura com Marte (Orbe: 1°00', Aplicando)\nLilith em trígono com octil de Quíron (Orbe: 0°25', Aplicando)\nQuíron em octil com Mercúrio (Orbe: 1°59', Aplicando)\nQuíron em octil com Marte (Orbe: 1°26', Aplicando)\nFortuna em octil com Mercúrio (Orbe: 0°35', Aplicando)\nFortuna em octil com Marte (Orbe: 2°50', Separando)\nFortuna em trígono com Urano (Orbe: 2°00', Aplicando)\nFortuna em octil com o Nodo (Orbe:\nFortune em Octile Lilith (Orbe: 1°50', Separando )\nFortune em Quadratura com Quíron (Orbe: 1°24', Separando)",
    jogoGerado: [11, 15, 25, 13, 20, 4, 2, 5, 6, 7, 10, 16, 22, 1, 23],
    resultado: [3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 16, 18, 19, 21, 25],
    obs: "",
  },
  {
    id: "h200_3635", concurso: "3635", data: "13/03/2026", hora: "",
    textoMapa: "Sol em Peixes 23°24', na 5ª Casa;\nLua em Capricórnio 22°08', na 3ª Casa;\nMercúrio em Peixes 10°53', retrógrado, na 5ª Casa;\nVênus em Áries 9°23', na 6ª Casa;\nMarte em Peixes 8°59', na 5ª Casa;\nJúpiter em Câncer 15°06', na 9ª Casa;\nSaturno em Áries 3°18', na 5ª Casa;\nUrano em Touro 28°04', na 7ª Casa;\nNetuno em Áries 1°31', na 5ª Casa;\nPlutão em Aquário 4°51', na 4ª Casa;\nNodo Norte em Peixes 8°21', retrógrado, na 5ª Casa;\nLilith em Sagitário 9°19', na 1ª Casa;\nQuíron em Áries 24°41', na 6ª Casa;\nFortuna em Capricórnio. 16°00', no\nVértice da 3ª Casa em Áries 19°00', no\nAscendente da 6ª Casa em Escorpião 14°44'\nMeio do Céu em Leão 2°41'\n\n1ª Casa em Escorpião 14°44'\n2ª Casa em Sagitário 15°17'\n3ª Casa em Capricórnio 9°28'\n4ª Casa em Aquário 2°41'\n5ª Casa em Peixes 0°24'\n6ª Casa em Áries 6°28'\n7ª Casa em Touro 14°44'\n8ª Casa em Gêmeos 15°17'\n9ª Casa em Câncer 9°28'\n10ª Casa em Leão 2°41'\n11ª Casa em Virgem 0°24'\n12ª Casa em Libra 6°28'\n\nSol em sextil com a Lua (Orbe: 1°16', em movimento subsequente)\nLua em octil com Marte (Orbe: 1°50', em movimento subsequente)\nMercúrio em conjunção com Marte (Orbe: 1°54', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°01', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 1°46', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 1°33', em movimento subsequente)\n\nAscendente em trígono com Júpiter (Orbe: 0°21', em movimento)\nAscendente em trígono octil com Netuno (Orbe: 1°46', em movimento)\nDescendente em sextil com Júpiter (Orbe: 0°21', em movimento)\nDescendente em octil com Netuno (Orbe: 1°46', em movimento)\nMeio do Céu em trígono com Saturno (Orbe: 0°36', em movimento)\nMeio do Céu em trígono com Netuno (Orbe: 1°10', em movimento)\nMeio do Céu em oposição a Plutão (Orbe: 2°09', em movimento)\nFundo do Céu em sextil com Saturno (Orbe: 0°36', em movimento) Fundo do\nCéu em sextil com Netuno (Orbe: 1°10', em movimento)\nFundo do Céu em conjunção com Plutão (Orbe: 2°09', em movimento)\nNodo Norte em octil com a Lua (Orbe: 1°12', em movimento)\nNodo Norte em conjunção com Mercúrio (Orbe: 2°31', em movimento) Em\nconjunção com Marte (Orbe: 0°37', em processo de separação) Nodo\nNorte em quadratura com Lilith (Orbe: 0°57', em processo de separação)\nNodo Norte em octil com Quíron (Orbe: 1°20', em processo de separação)\nLilith em octil com a Lua (Orbe: 2°10', em processo de separação)\nLilith em quadratura com Mercúrio (Orbe: 1°33', em processo de\nseparação) Lilith em trígono com Vênus (Orbe: 0°03', em processo de separação)\nLilith em quadratura com Marte (Orbe: 0°20', em processo de separação)\nLilith em trígono com octil de Quíron (Orbe: 0°22', em processo de separação)\nQuíron em quadratura com a Lua (Orbe: 2°33', em processo de separação)\nQuíron em octil com Mercúrio (Orbe: 1°11', em processo de separação)\nQuíron em octil com Marte (Orbe: 0°42', em processo de separação)\nFortuna em oposição a Júpiter (Orbe: 0°54',\nFortuna em Tri-Octil com Urano (Orbe: 2°55', em Separação )\nFortuna em Sextil com o Ascendente (Orbe: 1°16', em Separação)\nFortuna em Trígono com o Descendente (Orbe: 1°16', em Separação)",
    jogoGerado: [11, 15, 13, 20, 25, 2, 6, 16, 22, 5, 1, 10, 4, 23, 19],
    resultado: [1, 2, 3, 5, 11, 12, 14, 15, 16, 19, 20, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3636", concurso: "3636", data: "14/03/2026", hora: "",
    textoMapa: "Sol em Peixes 24°24', na 5ª Casa;\nLua em Aquário 4°34', na 4ª Casa;\nMercúrio em Peixes 10°14', retrógrado, na 5ª Casa;\nVênus em Áries 10°37', na 6ª Casa;\nMarte em Peixes 9°46', na 5ª Casa;\nJúpiter em Câncer 15°06', na 9ª Casa;\nSaturno em Áries 3°25', na 5ª Casa;\nUrano em Touro 28°06', na 7ª Casa;\nNetuno em Áries 1°33', na 5ª Casa;\nPlutão em Aquário 4°53', na 4ª Casa;\nNodo Norte em Peixes 8°18', retrógrado, na 5ª Casa;\nLilith em Sagitário 9°26', na 1ª Casa;\nQuíron em Áries 24°44', na 6ª Casa;\nFortuna em Capricórnio. 5°43', no\nVértice da 2ª Casa em Áries 19°32', no\nAscendente da 6ª Casa em Escorpião 15°53'\nMeio do Céu em Leão 3°39'\n\n1ª Casa em Escorpião 15°53'\n2ª Casa em Sagitário 16°14'\n3ª Casa em Capricórnio 10°22'\n4ª Casa em Aquário 3°39'\n5ª Casa em Peixes 1°32'\n6ª Casa em Áries 7°45'\n7ª Casa em Touro 15°53'\n8ª Casa em Gêmeos 16°14'\n9ª Casa em Câncer 10°22'\n10ª Casa em Leão 3°39'\n11ª Casa em Virgem 1°32'\n12ª Casa em Libra 7°45'\n\nLua em sextil com Saturno (Orbe: 1°09', separando)\nLua em conjunção com Plutão (Orbe: 0°18', aplicando)\nMercúrio em conjunção com Marte (Orbe: 0°27', aplicando)\nVênus em octil com Urano (Orbe: 2°29', aplicando)\nJúpiter em octil com Urano (Orbe: 1°59', aplicando)\nSaturno em conjunção com Netuno (Orbe: 1°52', separando)\nSaturno em sextil com Plutão (Orbe: 1°27', aplicando)\n\nAscendente em trígono com Júpiter (Orbe: 0°46', Separando)\nAscendente em trígono octil com Saturno (Orbe: 2°32', Aplicando)\nAscendente em trígono octil com Netuno (Orbe: 0°40', Aplicando)\nDescendente em sextil com Júpiter (Orbe: 0°46', Separando)\nDescendente em octil com Saturno (Orbe: 2°32', Aplicando)\nDescendente em octil com Netuno (Orbe: 0°40', Aplicando)\nMeio do Céu em oposição à Lua (Orbe: 0°55', Aplicando) Meio\ndo Céu em trígono com Saturno (Orbe: 0°13', Separando)\nMeio do Céu em trígono com Netuno (Orbe: 2°05', Separando)\nMeio do Céu em oposição a Plutão (Orbe: 1°13', Aplicando) Fundo do Céu\nem conjunção com a Lua (Orbe: 0°55', Aplicando)\nFundo do Céu em sextil com Saturno (Orbe: 0°13', Separando)\nSextil do IC com Netuno (Orbe: 2°05', Separando)\nConjunção do IC com Plutão (Orbe: 1°13', Aplicando)\nConjunção do Nodo Norte com Mercúrio (Orbe: 1°55', Aplicando)\nConjunção do Nodo Norte com Marte (Orbe: 1°27', Separando)\nQuadratura do Nodo Norte com Lilith (Orbe: 1°07', Separando)\nOctil do Nodo Norte com Quíron (Orbe: 1°26', Separando)\nQuadratura de Lilith com Mercúrio (Orbe: 0°48', Aplicando)\nTrígono de Lilith com Vênus (Orbe: 1°11', Separando)\nQuadratura de Lilith com Marte (Orbe: 0°20', Separando)\nTrígono de Lilith com Quíron (Orbe: 0°18', Aplicando) Octil de Quíron com\nMercúrio (Orbe: 0°29', Aplicando)\nOctil de Quíron com Marte (Orbe:\nFortuna em quadratura com Saturno (Orbe: 2°17', Separando)\nFortuna em sextil com o Nodo Norte (Orbe: 2°34', Aplicando)\nFortuna em quincúncio com o Meio do Céu (Orbe: 2°04', Separando)",
    jogoGerado: [25, 11, 12, 15, 13, 20, 1, 2, 3, 5, 6, 10, 18, 24, 22],
    resultado: [1, 2, 3, 4, 5, 6, 12, 13, 15, 16, 17, 18, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3637", concurso: "3637", data: "16/03/2026", hora: "",
    textoMapa: "Sol em Peixes 26°24', na 5ª Casa;\nLua em Peixes 0°24', na 4ª Casa;\nMercúrio em Peixes 9°14', retrógrado, na 5ª Casa;\nVênus em Áries 13°06', na 6ª Casa;\nMarte em Peixes 11°20', na 5ª Casa;\nJúpiter em Câncer 15°08', na 9ª Casa;\nSaturno em Áries 3°40', na 5ª Casa;\nUrano em Touro 28°10', na 7ª Casa;\nNetuno em Áries 1°38', na 5ª Casa;\nPlutão em Aquário 4°55', na 3ª Casa;\nNodo Norte em Peixes 8°11', retrógrado, na 5ª Casa;\nLilith em Sagitário 9°39', na 1ª Casa;\nQuíron em Áries 24°51', na 6ª Casa;\nFortuna em Sagitário. 14°09', no\nVértice da 1ª Casa em Áries 20°35', no\nAscendente da 6ª Casa em Escorpião 18°10'\nMeio do Céu em Leão 5°34'\n\n1ª Casa em Escorpião 18°10'\n2ª Casa em Sagitário 18°08'\n3ª Casa em Capricórnio 12°09'\n4ª Casa em Aquário 5°34'\n5ª Casa em Peixes 3°48'\n6ª Casa em Áries 10°18'\n7ª Casa em Touro 18°10'\n8ª Casa em Gêmeos 18°08'\n9ª Casa em Câncer 12°09'\n10ª Casa em Leão 5°34'\n11ª Casa em Virgem 3°48'\n12ª Casa em Libra 10°18'\n\nSol em sextil com Urano (Orbe: 1°46', em movimento subsequente)\nLua em octil com Vênus (Orbe: 2°18', em movimento subsequente)\nLua em tri-octil com Júpiter (Orbe: 0°15', em movimento subsequente)\nLua em quadratura com Urano (Orbe: 2°13', em movimento subsequente)\nMercúrio em conjunção com Marte (Orbe: 2°06', em movimento subsequente)\nVênus em quadratura com Júpiter (Orbe: 2°02', em movimento subsequente)\nVênus em octil com Urano (Orbe: 0°04', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 1°57', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 2°02', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 1°15', em movimento subsequente)\n\nTri-óctil do Ascendente com Saturno (Orbe: 0°30', em movimento)\nTri-óctil do Ascendente com Netuno (Orbe: 1°31', em movimento)\nOctil do Descendente com Saturno (Orbe: 0°30', em movimento)\nOctil do Descendente com Netuno (Orbe: 1°31', em movimento)\nTrígono do Meio do Céu com Saturno (Orbe: 1°53', em movimento)\nOposição do Meio do Céu com Plutão (Orbe: 0°38', em movimento)\nQuincúncio do Meio do Céu com Nodo Norte (Orbe: 2°37', em movimento)\nSextil do Fundo do Céu com Saturno (Orbe: 1°53', em movimento)\nConjunção do Fundo do Céu com Plutão (Orbe: 0°38', em movimento)\nConjunção do Nodo Norte com Mercúrio (Orbe: 1°02', em movimento)\nQuadratura do Nodo Norte com Lilith (Orbe: 1°27', em movimento)\nOctil do Nodo Norte com Quíron (Orbe: 1°39', Separando)\nLilith em quadratura com Mercúrio (Orbe: 0°25', Separando)\nLilith em quadratura com Marte (Orbe: 1°41', Separando)\nLilith em trígono com Quíron (Orbe: 0°11', Aplicando)\nQuíron em octil com Mercúrio (Orbe: 0°37', Separando)\nQuíron em octil com Marte (Orbe: 1°29', Separando)\nFortuna em trígono com Vênus (Orbe: 1°03', Separando)\nFortuna em quadratura com Marte (Orbe: 2°48', Separando)\nFortuna em quincúncio com Júpiter (Orbe: 0°58', Aplicando)\nVertex em octil com o Nodo (Orbe: 2°36', Aplicando)\nVertex em quincúncio com o Ascendente (Orbe: 2°25', Separando)",
    jogoGerado: [9, 10, 11, 15, 16, 22, 25, 13, 20, 4, 6, 8, 12, 17, 1],
    resultado: [3, 4, 6, 7, 8, 9, 10, 11, 12, 16, 17, 20, 21, 22, 25],
    obs: "",
  },
  {
    id: "h200_3638", concurso: "3638", data: "17/03/2026", hora: "",
    textoMapa: "Sol em Peixes 27°23', na 5ª Casa;\nLua em Peixes 13°51', na 5ª Casa;\nMercúrio em Peixes 8°53', retrógrado, na 5ª Casa;\nVênus em Áries 14°20', na 6ª Casa;\nMarte em Peixes 12°07', na 5ª Casa;\nJúpiter em Câncer 15°09', na 9ª Casa;\nSaturno em Áries 3°48', na 5ª Casa;\nUrano em Touro 28°12', na 7ª Casa;\nNetuno em Áries 1°40', na 5ª Casa;\nPlutão em Aquário 4°57', na 3ª Casa;\nNodo Norte em Peixes 8°08', retrógrado, na 5ª Casa;\nLilith em Sagitário 9°46', na 1ª Casa;\nQuíron em Áries 24°54', na 6ª Casa;\nFortuna em Sagitário. 2°50', no\nVértice da 1ª Casa em Áries 21°07', no\nAscendente da 6ª Casa em Escorpião 19°17'\nMeio do Céu em Leão 6°32'\n\n1ª Casa em Escorpião 19°17'\n2ª Casa em Sagitário 19°05'\n3ª Casa em Capricórnio 13°02'\n4ª Casa em Aquário 6°32'\n5ª Casa em Peixes 4°56'\n6ª Casa em Áries 11°35'\n7ª Casa em Touro 19°17'\n8ª Casa em Gêmeos 19°05'\n9ª Casa em Câncer 13°02'\n10ª Casa em Leão 6°32'\n11ª Casa em Virgem 4°56'\n12ª Casa em Libra 11°35'\n\nSol em sextil com Urano (Orbe: 0°48', em movimento subsequente)\nLua em conjunção com Marte (Orbe: 1°43', em movimento subsequente)\nLua em trígono com Júpiter (Orbe: 1°18', em movimento subsequente)\nVênus em quadratura com Júpiter (Orbe: 0°49', em movimento subsequente)\nVênus em octil com Urano (Orbe: 1°07', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 1°57', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 2°07', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 1°08', em movimento subsequente)\n\nTri-óctilo do Ascendente com Saturno (Orbe: 0°29', Separando)\nTri-óctilo do Ascendente com Netuno (Orbe: 2°37', Separando)\nDescendente em óctilo com Saturno (Orbe: 0°29', Separando)\nDescendente em óctilo com Netuno (Orbe: 2°37', Separando)\nMeio do Céu em Quincúncio com Mercúrio (Orbe: 2°21', Aplicando)\nMeio do Céu em Trígono com Saturno (Orbe: 2°43', Separando)\nMeio do Céu em Oposição com Plutão (Orbe: 1°35', Separando)\nMeio do Céu em Quincúncio com o Nodo Norte (Orbe: 1°36', Aplicando)\nFundo do Céu em Sextil com Saturno (Orbe: 2°43', Separando)\nFundo do Céu em Conjunção com Plutão (Orbe: 1°35', Separando)\nNodo Norte em Conjunção com Mercúrio (Orbe: 0°44', Aplicando)\nNodo Norte em Quadratura com Lilith (Orbe:\nNodo Norte em Octil com Quíron (Orbe: 1° 45', Separando)\nLilith em Quadratura com Mercúrio (Orbe: 0°52', Separando)\nLilith em Quadratura com Marte (Orbe: 2°21', Separando)\nLilith em Tri-Octil com Quíron (Orbe: 0°08', Aplicando)\nQuíron em Octil com Mercúrio (Orbe: 1°00', Separando)\nQuíron em Octil com Marte (Orbe: 2°13', Separando)\nFortuna em Tri-Octil com Júpiter (Orbe: 2°40', Separando)\nFortuna em Trígono com Saturno (Orbe: 0°57', Aplicando)\nFortuna em Trígono com Netuno (Orbe: 1°09', Separando)\nFortuna em Sextil com Plutão (Orbe: 2°06', Aplicando)\nFortuna em Trígono com Vertex (Orbe: 2°50', Separando)\nVertex em Octil com Mercúrio (Orbe: 2°46', Aplicando)\nVértice Nodo Octil (Orbe: 2°01', Aplicando)\nVértice Ascendente Quincúncio (Orbe: 1°49', Separando)",
    jogoGerado: [11, 15, 25, 13, 20, 6, 10, 2, 3, 8, 22, 7, 1, 9, 5],
    resultado: [2, 3, 6, 7, 8, 10, 11, 13, 15, 18, 19, 20, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3639", concurso: "3639", data: "18/03/2026", hora: "",
    textoMapa: "Sol em Peixes 28°23', na 5ª Casa;\nLua em Peixes 27°38', na 5ª Casa;\nMercúrio em Peixes 8°39', retrógrado, na 5ª Casa;\nVênus em Áries 15°35', na 6ª Casa;\nMarte em Peixes 12°55', na 5ª Casa;\nJúpiter em Câncer 15°11', na 9ª Casa;\nSaturno em Áries 3°55', na 5ª Casa;\nUrano em Touro 28°14', na 7ª Casa;\nNetuno em Áries 1°42', na 5ª Casa;\nPlutão em Aquário 4°58', na 3ª Casa;\nNodo Norte em Peixes 8°05', retrógrado, na 5ª Casa;\nLilith em Sagitário 9°52', na 1ª Casa;\nQuíron em Áries 24°57', na 6ª Casa;\nFortuna em Escorpião 21°09', no\nVértice da 1ª Casa em Áries; 21°38', no\nAscendente da 6ª Casa em Escorpião; 20°24',\nMeio do Céu em Leão; 7°30'\n\n1ª Casa em Escorpião 20°24'\n2ª Casa em Sagitário 20°01'\n3ª Casa em Capricórnio 13°56'\n4ª Casa em Aquário 7°30'\n5ª Casa em Peixes 6°05'\n6ª Casa em Áries 12°51'\n7ª Casa em Touro 20°24'\n8ª Casa em Gêmeos 20°01'\n9ª Casa em Câncer 13°56'\n10ª Casa em Leão 7°30'\n11ª Casa em Virgem 6°05'\n12ª Casa em Libra 12°51'\n\nSol em conjunção com a Lua (Orbe: 0°45', em movimento)\nSol em sextil com Urano (Orbe: 0°08', em movimento)\nLua em sextil com Urano (Orbe: 0°36', em movimento)\nVênus em quadratura com Júpiter (Orbe: 0°23', em movimento)\nVênus em octil com Urano (Orbe: 2°20', em movimento)\nMarte em trígono com Júpiter (Orbe: 2°16', em movimento)\nJúpiter em octil com Urano (Orbe: 1°56', em movimento)\nSaturno em conjunção com Netuno (Orbe: 2°12', em movimento)\nSaturno em sextil com Plutão (Orbe: 1°02', em movimento)\n\nTri-óctilo do Ascendente com Saturno (Orbe: 1°29', Separando)\nOctil do Descendente com Saturno (Orbe: 1°29', Separando)\nQuincúncio do Meio do Céu com Mercúrio (Orbe: 1°09', Aplicando)\nOposição do Meio do Céu com Plutão (Orbe: 2°31', Separando)\nQuincúncio do Meio do Céu com Nodo Lunar (Orbe: 0°35', Aplicando)\nTrígono do Meio do Céu com Lilith (Orbe: 2°22', Aplicando)\nConjunção do Fundo do Céu com Plutão (Orbe: 2°31', Separando\n) Sextil do Fundo do Céu com Lilith (Orbe: 2°22', Aplicando)\nConjunção do Nodo Norte com Mercúrio (Orbe: 0°33', Aplicando)\nQuadratura do Nodo Norte com Lilith (Orbe: 1°47', Separando)\nOctil do Nodo Norte com Quíron (Orbe: 1°52', Separando)\nQuadratura de Lilith com Mercúrio (Orbe: 1°13',\nLilith em Tri-Óctil com Quíron (Orbe: 0°04', em aproximação) Quíron\nem Óctil com Mercúrio (Orbe: 1°18', em aproximação)\nQuíron em Óctil com Marte (Orbe: 2°57', em aproximação)\nFortuna em Tri-Óctil com Saturno (Orbe: 2°14', em aproximação)\nFortuna em Conjunção com o Ascendente (Orbe: 0°45', em aproximação)\nFortuna em Oposição com o Descendente (Orbe: 0°45', em aproximação)\nVértice em Óctil com Mercúrio (Orbe: 2°00', em aproximação)\nVértice em Óctil com o Nodo (Orbe: 1°26', em aproximação)\nVértice em Quincúncio com o Ascendente (Orbe: 1°14', em aproximação)",
    jogoGerado: [9, 10, 13, 4, 15, 11, 23, 25, 20, 6, 12, 1, 2, 3, 24],
    resultado: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 18, 23, 25],
    obs: "",
  },
  {
    id: "h200_3640", concurso: "3640", data: "19/03/2026", hora: "",
    textoMapa: "Sol em Peixes 29°23', na 5ª Casa;\nLua em Áries 11°43', na 5ª Casa;\nMercúrio em Peixes 8°31', retrógrado, na 5ª Casa;\nVênus em Áries 16°49', na 6ª Casa;\nMarte em Peixes 13°42', na 5ª Casa;\nJúpiter em Câncer 15°12', na 9ª Casa;\nSaturno em Áries 4°03', na 5ª Casa;\nUrano em Touro 28°16', na 7ª Casa;\nNetuno em Áries 1°45', na 5ª Casa;\nPlutão em Aquário 4°59', na 3ª Casa;\nNodo Norte em Peixes 8°02', retrógrado, na 5ª Casa;\nLilith em Sagitário 9°59', na 1ª Casa;\nQuíron em Áries 25°01', na 6ª Casa;\nFortuna em Escorpião 9°11', no\nVértice da 12ª Casa em Áries 22°10', no\nAscendente da 6ª Casa em Escorpião 21°31'\nMeio do Céu em Leão 8°28'\n\n1ª Casa em Escorpião 21°31'\n2ª Casa em Sagitário 20°58'\n3ª Casa em Capricórnio 14°49'\n4ª Casa em Aquário 8°28'\n5ª Casa em Peixes 7°14'\n6ª Casa em Áries 14°07'\n7ª Casa em Touro 21°31'\n8ª Casa em Gêmeos 20°58'\n9ª Casa em Câncer 14°49'\n10ª Casa em Leão 8°28'\n11ª Casa em Virgem 7°14'\n12ª Casa em Libra 14°07'\n\nSol em sextil com Urano (Orbe: 1°06', separando)\nSol em conjunção com Netuno (Orbe: 2°21', aplicando)\nLua em octil com Urano (Orbe: 1°33', aplicando)\nVênus em quadratura com Júpiter (Orbe: 1°36', separando)\nMarte em trígono com Júpiter (Orbe: 1°30', aplicando)\nJúpiter em octil com Urano (Orbe: 1°55', aplicando)\nSaturno em conjunção com Netuno (Orbe: 2°18', separando)\nSaturno em sextil com Plutão (Orbe: 0°56', aplicando)\n\nTri-óctilo do Ascendente com Saturno (Orbe: 2°28', Separando)\nOctil do Descendente com Saturno (Orbe: 2°28', Separando)\nQuincúncio do Meio do Céu com Mercúrio (Orbe: 0°03', Aplicando)\nQuincúncio do Meio do Céu com o Nodo Norte (Orbe: 0°25', Separando)\nTrígono do Meio do Céu com Lilith (Orbe: 1°31', Aplicando)\nSextil do Fundo do Céu com Lilith (\nOrbe: 1°31', Aplicando) Conjunção do Nodo Norte com Mercúrio (Orbe: 0°28', Aplicando)\nQuadratura do Nodo Norte com Lilith (Orbe: 1°57', Separando)\nOctil do Nodo Norte com Quíron (Orbe: 1°58', Separando)\nTrígono de Lilith com a Lua (Orbe: 1°44', Separando)\nQuadratura de Lilith com Mercúrio (Orbe: 1°28', Separando)\nTri-óctilo de Lilith com Quíron (Orbe: 0°01', em aplicação)\nQuíron em octil com Mercúrio (Orbe: 1°29', em separação)\nFortuna em quincúncio com a Lua (Orbe: 2°32', em aplicação)\nFortuna em trígono com Mercúrio (Orbe: 0°39', em separação)\nFortuna em trígono com o Nodo Norte (Orbe: 1°08', em separação)\nFortuna em quadratura com o Meio do Céu (Orbe: 0°42', em\nseparação) Fortuna em quadratura com o Fundo do Céu\n(Orbe: 0°42', em separação) Vértice em octil com Mercúrio (Orbe: 1°20', em aplicação)\nVértice em octil com o Nodo Norte (Orbe: 0°51', em aplicação)\nVértice em trígono com Lilith (Orbe: 2°49', em aplicação)\nVértice em conjunção com Quíron (Orbe: 2°50', em aplicação)\nVértice em quincúncio com o Ascendente (Orbe: 0°38', em separação)",
    jogoGerado: [9, 10, 13, 11, 15, 20, 25, 1, 6, 23, 2, 18, 21, 4, 19],
    resultado: [1, 4, 6, 7, 9, 10, 11, 13, 14, 15, 16, 18, 19, 22, 24],
    obs: "",
  },
  {
    id: "h200_3641", concurso: "3641", data: "20/03/2026", hora: "",
    textoMapa: "Sol em Áries 0°22', na 5ª Casa;\nLua em Áries 26°02', na 6ª Casa;\nMercúrio em Peixes 8°29', estacionário, na 5ª Casa;\nVênus em Áries 18°03', na 6ª Casa;\nMarte em Peixes 14°29', na 5ª Casa;\nJúpiter em Câncer 15°14', na 8ª Casa;\nSaturno em Áries 4°10', na 5ª Casa;\nUrano em Touro 28°19', na 7ª Casa;\nNetuno em Áries 1°47', na 5ª Casa;\nPlutão em Aquário 5°00', na 3ª Casa;\nNodo Norte em Peixes 7°59', retrógrado, na 4ª Casa;\nLilith em Sagitário 10°06', na 1ª Casa;\nQuíron em Áries 25°04', na 6ª Casa;\nFortuna em Libra 26°58', no\nVértice da 12ª Casa em Áries 22°42', no\nAscendente da 6ª Casa em Escorpião 22°37'\nMeio do Céu em Leão 9°26'\n\n1ª Casa em Escorpião 22°37'\n2ª Casa em Sagitário 21°54'\n3ª Casa em Capricórnio 15°43'\n4ª Casa em Aquário 9°26'\n5ª Casa em Peixes 8°23'\n6ª Casa em Áries 15°23'\n7ª Casa em Touro 22°37'\n8ª Casa em Gêmeos 21°54'\n9ª Casa em Câncer 15°43'\n10ª Casa em Leão 9°26'\n11ª Casa em Virgem 8°23'\n12ª Casa em Libra 15°23'\n\nSol em sextil com Urano (Orbe: 2°03', separando)\nSol em conjunção com Netuno (Orbe: 1°24', aplicando)\nLua em octil com Mercúrio (Orbe: 2°33', separando)\nVênus em quadratura com Júpiter (Orbe: 2°48', separando)\nMarte em trígono com Júpiter (Orbe: 0°45', aplicando)\nJúpiter em octil com Urano (Orbe: 1°55', aplicando)\nSaturno em conjunção com Netuno (Orbe: 2°23', separando)\nSaturno em sextil com Plutão (Orbe: 0°50', aplicando)\n\nQuincúncio do Ascendente com Quíron (Orbe: 2°26', em movimento)\nQuincúncio do Meio do Céu com Mercúrio\n(Orbe: 0°56', em movimento) Quincúncio do Meio do Céu com o Nodo Norte (Orbe: 1°27', em movimento)\nTrígono do Meio do Céu com Lilith (Orbe: 0°39'\n, em movimento) Sextil do Fundo do Céu com Lilith (Orbe: 0°39', em movimento) Conjunção do Nodo Norte com Mercúrio (Orbe: 0\n°30', em movimento) Quadratura do Nodo Norte com Lilith (Orbe: 2°07 ', em movimento) Octil do Nodo Norte com Quíron (Orbe: 2°05', em movimento) Trígono de Lilith com a Lua (Orbe: 0°56', em movimento) Quadratura de Lilith com Mercúrio (Orbe: 1°36', em movimento) Trígono de Lilith com Quíron (Orbe: 0°01', em movimento) Conjunção de Quíron com a Lua (Orbe: 0°58', Separando) Quíron em Octil com Mercúrio (Orbe: 1°35', Separando) Fortuna em Oposição à Lua (Orbe: 0°55', Separando) Fortuna em Tri-Octil com Marte (Orbe: 2°31', Aplicando) Fortuna em Quincúncio com Urano (Orbe: 1°20', Aplicando) Fortuna em Octil com Lilith (Orbe: 1°51', Separando) Fortuna em Oposição a Quíron (Orbe: 1°53', Separando) Vértice em Octil com Mercúrio (Orbe: 0°47', Aplicando) Vértice em Octil com o Nodo (Orbe: 0°17', Aplicando) Vértice em Tri-Octil com Lilith (Orbe: 2°24', Aplicando) Vértice em Conjunção com Quíron (Orbe: 2°22', Aplicando) Vértice em Quincúncio com o Ascendente (Orbe: 0°04', Separando)",
    jogoGerado: [9, 10, 13, 14, 15, 25, 6, 1, 5, 12, 20, 24, 18, 21, 19],
    resultado: [1, 2, 3, 5, 6, 9, 10, 13, 14, 16, 19, 20, 21, 22, 25],
    obs: "",
  },
  {
    id: "h200_3642", concurso: "3642", data: "21/03/2026", hora: "",
    textoMapa: "Sol em Áries 1°22', na 5ª Casa;\nLua em Touro 10°29', na 6ª Casa;\nMercúrio em Peixes 8°33', na 4ª Casa;\nVênus em Áries 19°17', na 6ª Casa;\nMarte em Peixes 15°16', na 5ª Casa;\nJúpiter em Câncer 15°16', na 8ª Casa;\nSaturno em Áries 4°18', na 5ª Casa;\nUrano em Touro 28°21', na 7ª Casa;\nNetuno em Áries 1°49', na 5ª Casa;\nPlutão em Aquário 5°02', na 3ª Casa;\nNodo Norte em Peixes 7°56', retrógrado, na 4ª Casa;\nLilith em Sagitário 10°13', na 1ª Casa;\nQuíron em Áries 25°07', na 6ª Casa;\nFortuna em Libra 14°36'.\nVertex na 11ª casa em Áries 23°13',\nAscendente na 6ª casa em Escorpião 23°43',\nMeio do Céu em Leão 10°24'\n\n1ª Casa em Escorpião 23°43'\n2ª Casa em Sagitário 22°49'\n3ª Casa em Capricórnio 16°37'\n4ª Casa em Aquário 10°24'\n5ª Casa em Peixes 9°32'\n6ª Casa em Áries 16°39'\n7ª Casa em Touro 23°43'\n8ª Casa em Gêmeos 22°49'\n9ª Casa em Câncer 16°37'\n10ª Casa em Leão 10°24'\n11ª Casa em Virgem 9°32'\n12ª Casa em Libra 16°39'\n\nSol em conjunção com Saturno (Orbe: 2°55', em movimento subsequente)\nSol em conjunção com Netuno (Orbe: 0°27', em movimento subsequente)\nLua em sextil com Mercúrio (Orbe: 1°56', em movimento subsequente)\nMarte em trígono com Júpiter (Orbe: 0°00', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 1°55', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 2°28', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 0°44', em movimento subsequente)\n\nQuincúncio do Ascendente com Quíron (Orbe: 1°24', em movimento)\nQuadratura do Meio do Céu com a Lua (Orbe: 0°04', em movimento)\nQuincúncio do Meio do Céu com Mercúrio (Orbe: 1°51', em movimento)\nQuincúncio do Meio do Céu com o Nodo Norte (Orbe: 2°28', em movimento) Trígono do Meio do Céu\ncom Lilith (Orbe: 0°11', em movimento) Quadratura do Fundo do Céu com a Lua (Orbe: 0°04', em movimento) Sextil do Fundo do Céu com Lilith ( Orbe: 0°11', em movimento) Sextil do Nodo Norte com a Lua (Orbe: 2°33', em movimento) Conjunção do Nodo Norte com Mercúrio (Orbe: 0°37', em movimento) Quadratura do Nodo Norte com Lilith (Orbe: 2°17', em movimento) Octil do Nodo Norte com Quíron (Orbe: 2°11', em movimento) Quincúncio de Lilith com a Lua (Orbe: 0°16', em movimento) Lilith em quadratura com Mercúrio (Orbe: 1°39', separando) Lilith em trí-óctil com Quíron (Orbe: 0°05', separando) Quíron em octil com Mercúrio (Orbe: 1°34', aplicando) Fortuna em quincúncio com Marte (Orbe: 0°40', aplicando) Fortuna em quadratura com Júpiter (Orbe: 0°40', aplicando) Fortuna em trí-óctil com Urano (Orbe: 1°15', separando) Vértice em octil com Mercúrio (Orbe: 0°19', aplicando) Vértice em octil com o Nodo Norte (Orbe: 0°17', separando) Vértice em trí-óctil com Lilith (Orbe: 1°59', aplicando) Vértice em conjunção com Quíron (Orbe: 1°54', aplicando) Vértice em quincúncio com o Ascendente (Orbe: 0°30', separando)",
    jogoGerado: [9, 10, 13, 14, 23, 20, 4, 25, 6, 1, 12, 5, 19, 21, 8],
    resultado: [1, 2, 4, 5, 6, 7, 9, 10, 12, 13, 14, 18, 20, 23, 25],
    obs: "",
  },
  {
    id: "h200_3643", concurso: "3643", data: "23/03/2026", hora: "",
    textoMapa: "Sol em Áries 3°21', na 5ª Casa;\nLua em Gêmeos 9°25', na 7ª Casa;\nMercúrio em Peixes 8°58', na 4ª Casa;\nVênus em Áries 21°46', na 6ª Casa;\nMarte em Peixes 16°50', na 5ª Casa;\nJúpiter em Câncer 15°21', na 8ª Casa;\nSaturno em Áries 4°32', na 5ª Casa;\nUrano em Touro 28°25', na 7ª Casa;\nNetuno em Áries 1°54', na 5ª Casa;\nPlutão em Aquário 5°04', na 3ª Casa;\nNodo Norte em Peixes 7°49', retrógrado, na 4ª Casa;\nLilith em Sagitário 10°26', na 1ª Casa;\nQuíron em Áries 25°14', na 6ª Casa;\nFortuna em Virgem 19°49', na 7ª Casa. Vertex da 11ª casa\nem Áries 24°16',\nAscendente na 6ª casa em Escorpião 25°54',\nMeio do Céu em Leão 12°22'\n\n1ª Casa em Escorpião 25°54'\n2ª Casa em Sagitário 24°40'\n3ª Casa em Capricórnio 18°24'\n4ª Casa em Aquário 12°22'\n5ª Casa em Peixes 11°52'\n6ª Casa em Áries 19°09'\n7ª Casa em Touro 25°54'\n8ª Casa em Gêmeos 24°40'\n9ª Casa em Câncer 18°24'\n10ª Casa em Leão 12°22'\n11ª Casa em Virgem 11°52'\n12ª Casa em Libra 19°09'\n\nSol em conjunção com Saturno (Orbe: 1°11', em movimento)\nSol em conjunção com Netuno (Orbe: 1°27', em movimento)\nSol em sextil com Plutão (Orbe: 1°42', em movimento)\nLua em quadratura com Mercúrio (Orbe: 0°27', em movimento)\nLua em octil com Vênus (Orbe: 2°39', em movimento)\nMercúrio em octil com Vênus (Orbe: 2°11', em movimento)\nMarte em trígono com Júpiter (Orbe: 1°29', em movimento)\nJúpiter em octil com Urano (Orbe: 1°55', em movimento)\nSaturno em conjunção com Netuno (Orbe: 2°38', em movimento)\nSaturno em sextil com Plutão (Orbe: 0°31', em movimento)\n\nOposição do Ascendente a Urano (Orbe: 2°31', em movimento)\nQuincúncio do Ascendente com Quíron (Orbe: 0°39', em movimento)\nConjunção do Descendente com Urano (Orbe: 2°31', em movimento)\nSextil do Meio do Céu com a Lua (Orbe: 2°56', em movimento)\nTrígono do Meio do Céu com Lilith (Orbe: 1°55', em movimento)\nTrígono do Fundo do Céu com a Lua (Orbe: 2°56', em movimento)\nQuincúncio do Fundo do Céu com Júpiter (Orbe: 2°58', em movimento)\nSextil do Fundo do Céu com Lilith (Orbe: 1°55', em movimento)\nQuadratura do Nodo Norte com a Lua (Orbe: 1°36', em movimento)\nConjunção do Nodo Norte com Mercúrio (Orbe: 1°08', em movimento)\nOctil do Nodo Norte com Vênus (Orbe: 1°03', em movimento)\nQuadratura do Nodo Norte com Lilith (Orbe: 2°36', em movimento)\nNodo Norte em Octil com Quíron (Orbe: 2°24', em Separação )\nLilith em Oposição à Lua (Orbe: 1°00', em Aproximação)\nLilith em Quadratura com Mercúrio (Orbe: 1°28', em Aproximação)\nLilith em Tri-Octil com Quíron (Orbe: 0°11', em Separação)\nQuíron em Octil com a Lua (Orbe: 0°48', em Aproximação)\nQuíron em Octil com Mercúrio (Orbe: 1°16', em Aproximação)\nFortuna em Quincúncio com Vênus (Orbe: 1°56', em Aproximação)\nFortuna em Oposição a Marte (Orbe: 2°59', em Separação)\nFortuna em Tri-Octil com Plutão (Orbe: 0°14', em Aproximação)\nVértice em Octil com a Lua (Orbe: 0°09', em Aproximação)\nVértice em Octil com Mercúrio (Orbe: 0°18', em Separação)\nVértice em Conjunção com Vênus (Orbe: 2°30', Separando)\nVértice Nodo Octil (Orbe: 1°26', Separando)\nVértice Lilith Tri-Octil (Orbe: 1°09', Aplicando)\nVértice Conjunção Quíron (Orbe: 0°57', Aplicando)\nVértice Ascendente em Quincúncio (Orbe: 1°37', Separando)",
    jogoGerado: [5, 10, 13, 23, 20, 25, 4, 6, 22, 15, 21, 11, 24, 1, 19],
    resultado: [3, 4, 5, 6, 8, 9, 10, 13, 17, 19, 20, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3644", concurso: "3644", data: "24/03/2026", hora: "",
    textoMapa: "Sol em Áries 4°21', na 5ª Casa;\nLua em Gêmeos 23°45', na 7ª Casa;\nMercúrio em Peixes 9°18', na 4ª Casa;\nVênus em Áries 23°00', na 6ª Casa;\nMarte em Peixes 17°37', na 5ª Casa;\nJúpiter em Câncer 15°23', na 8ª Casa;\nSaturno em Áries 4°40', na 5ª Casa;\nUrano em Touro 28°28', na 7ª Casa;\nNetuno em Áries 1°56', na 5ª Casa;\nPlutão em Aquário 5°05', na 3ª Casa;\nNodo Norte em Peixes 7°46', retrógrado, na 4ª Casa;\nLilith em Sagitário 10°33', na 1ª Casa;\nQuíron em Áries 25°18', na 6ª Casa\n; Fortuna em Virgem 7°34', na 7ª Casa.\nVertex da 10ª casa em Áries 24°48',\nAscendente na 6ª casa em Escorpião 26°58',\nMeio do Céu em Leão 13°21'\n\n1ª Casa em Escorpião 26°58'\n2ª Casa em Sagitário 25°35'\n3ª Casa em Capricórnio 19°17'\n4ª Casa em Aquário 13°21'\n5ª Casa em Peixes 13°02'\n6ª Casa em Áries 20°24'\n7ª Casa em Touro 26°58'\n8ª Casa em Gêmeos 25°35'\n9ª Casa em Câncer 19°17'\n10ª Casa em Leão 13°21'\n11ª Casa em Virgem 13°02'\n12ª Casa em Libra 20°24'\n\nSol em conjunção com Saturno (Orbe: 0°19', em movimento subsequente)\nSol em conjunção com Netuno (Orbe: 2°24', em movimento subsequente)\nSol em sextil com Plutão (Orbe: 0°44', em movimento subsequente)\nLua em sextil com Vênus (Orbe: 0°44', em movimento subsequente)\nMercúrio em octil com Vênus (Orbe: 1°17', em movimento subsequente)\nMarte em trígono com Júpiter (Orbe: 2°14', em movimento subsequente)\nMarte em octil com Plutão (Orbe: 2°27', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 1°55', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 2°44', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 0°25', em movimento subsequente)\n\nOposição do Ascendente a Urano (Orbe: 1°29', em movimento)\nQuincúncio do Ascendente com Quíron (Orbe: 1°40', em movimento)\nConjunção do Descendente com Urano (Orbe: 1°29', em movimento)\nMeio do Céu em trígono com Lilith (Orbe: 2°48', em movimento)\nQuincúncio do Fundo do Céu com Júpiter (Orbe: 2°02', em movimento)\nSextil do Fundo do Céu com Lilith (Orbe: 2°48', em movimento)\nConjunção do Nodo Norte com Mercúrio (Orbe: 1°31', em movimento)\nOctil do Nodo Norte com Vênus (Orbe: 0°13', em movimento)\nQuadratura do Nodo Norte com Lilith (Orbe: 2°46', em movimento)\nOctil do Nodo Norte com Quíron (Orbe: 2°31', em movimento)\nQuadratura de Lilith com Mercúrio (Orbe: 1°14', em movimento)\nTri-óctil de Lilith com Vênus (Orbe: 2°32', em aplicação)\nLilith em Tri-Óctil com Quíron (Orbe: 0°15', em separação)\nQuíron em Sextil com a Lua (Orbe: 1°32', em aplicação)\nQuíron em Octil com Mercúrio (Orbe: 0°59', em aplicação)\nQuíron em Conjunção com Vênus (Orbe: 2°17', em aplicação)\nFortuna em Oposição com Mercúrio (Orbe: 1°43', em aplicação)\nFortuna em Tri-Óctil com Vênus (Orbe: 0°25', em aplicação)\nFortuna em Quincúncio com Saturno (Orbe: 2°54', em separação)\nFortuna em Quincúncio com Plutão (Orbe: 2°29', em separação)\nFortuna em Oposição com o Nodo Norte (Orbe: 0°11', em aplicação)\nFortuna em Quadratura com Lilith (Orbe: 2°58', em aplicação)\nFortuna em Tri-Óctil com Quíron (Orbe: 2°43', em aplicação)\nVértice em Sextil com a Lua (Orbe:\nVertex em Octil com Mercúrio (Orbe: 0°29', Separando )\nVertex em Conjunção com Vênus (Orbe: 1°47', Separando)\nVertex em Octil com o Nodo (Orbe: 2°01', Separando)\nVertex em Tri-Octil com Lilith (Orbe: 0°45', Aplicando)\nVertex em Conjunção com Quíron (Orbe: 0°29', Aplicando)\nVertex em Quincúncio com o Ascendente (Orbe: 2°10', Separando)",
    jogoGerado: [5, 9, 10, 13, 23, 21, 20, 25, 8, 1, 2, 3, 11, 15, 24],
    resultado: [1, 4, 5, 9, 10, 11, 13, 14, 19, 20, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3645", concurso: "3645", data: "25/03/2026", hora: "",
    textoMapa: "Sol em Áries 5°20', na 5ª Casa;\nLua em Câncer 7°54', na 8ª Casa;\nMercúrio em Peixes 9°43', na 4ª Casa;\nVênus em Áries 24°14', na 6ª Casa;\nMarte em Peixes 18°25', na 5ª Casa;\nJúpiter em Câncer 15°26', na 8ª Casa;\nSaturno em Áries 4°47', na 5ª Casa;\nUrano em Touro 28°30', na 7ª Casa;\nNetuno em Áries 1°58', na 5ª Casa;\nPlutão em Aquário 5°06', na 3ª Casa;\nNodo Norte em Peixes 7°43', retrógrado, na 4ª Casa;\nLilith em Sagitário 10°40', na 1ª Casa;\nQuíron em Áries 25°21', na 6ª Casa;\nFortuna em Leão 25°29', na 7ª Casa.\nVertex da 10ª casa em Áries 25°19',\nAscendente na 6ª casa em Escorpião 28°03',\nMeio do Céu em Leão 14°20'\n\n1ª Casa em Escorpião 28°03'\n2ª Casa em Sagitário 26°30'\n3ª Casa em Capricórnio 20°11'\n4ª Casa em Aquário 14°20'\n5ª Casa em Peixes 14°12'\n6ª Casa em Áries 21°39'\n7ª Casa em Touro 28°03'\n8ª Casa em Gêmeos 26°30'\n9ª Casa em Câncer 20°11'\n10ª Casa em Leão 14°20'\n11ª Casa em Virgem 14°12'\n12ª Casa em Libra 21°39'\n\nSol em quadratura com a Lua (Orbe: 2°33', Separando)\nSol em conjunção com Saturno (Orbe: 0°32', Separando)\nSol em sextil com Plutão (Orbe: 0°13', Separando)\nLua em trígono com Mercúrio (Orbe: 1°48', Aproximando)\nLua em quincúncio com Plutão (Orbe: 2°47', Separando)\nMercúrio em octil com Vênus (Orbe: 0°28', Aproximando)\nMarte em trígono com Júpiter (Orbe: 2°58', Separando)\nMarte em octil com Plutão (Orbe: 1°41', Aproximando)\nJúpiter em octil com Urano (Orbe: 1°55', Separando)\nSaturno em conjunção com Netuno (Orbe: 2°49', Separando)\nSaturno em sextil com Plutão (Orbe: 0°18', Aproximando)\n\nAscendente em trí-óctil com Júpiter (Orbe: 2°23', em movimento subsequente)\nAscendente em oposição a Urano (Orbe: 0°27', em movimento subsequente)\nAscendente em quincúncio com Quíron (Orbe: 2°41', em movimento subsequente)\nDescendente em octil com Júpiter (Orbe: 2°23', em movimento subsequente)\nDescendente em conjunção com Urano (Orbe: 0°27', em movimento subsequente) Meio do Céu\nem tríctil com Netuno (Orbe: 2°38', em movimento subsequente)\nFundo do Céu em quincúncio com Júpiter (Orbe: 1°06', em movimento subsequente)\nFundo do Céu em octil com Netuno (Orbe: 2°38', em movimento subsequente)\nNodo Norte em trígono com a Lua (Orbe: 0°11', em movimento subsequente) Nodo\nNorte em conjunção com Mercúrio (Orbe: 2°00', em movimento subsequente)\nNodo Norte em octil com Vênus (Orbe: 1°31', em movimento subsequente)\nNodo Norte em quadratura Lilith (Orbe: 2°56', Separando)\nNodo Norte em Octil com Quíron (Orbe: 2°38', Separando)\nLilith em Quincúncio com a Lua (Orbe: 2°45', Aproximando)\nLilith em Quadratura com Mercúrio (Orbe: 0°56', Aproximando)\nLilith em Tri-Octil com Vênus (Orbe: 1°25', Aproximando)\nLilith em Tri-Octil com Quíron (Orbe: 0°18', Separando)\nQuíron em Octil com Mercúrio (Orbe: 0°38', Aproximando)\nQuíron em Conjunção com Vênus (Orbe: 1°06', Aproximando)\nFortuna em Octil com a Lua (Orbe: 2°34', Separando)\nFortuna em Trígono com Vênus (Orbe: 1°14', Separando)\nFortuna em Trígono com Quíron (Orbe: 0°07', Separando)\nFortuna em Quadratura com o Ascendente (Orbe: 2°33', Separando)\nFortuna em Quadratura DSC (Orbe: 2°33', Separando)\nVértice Octil Mercúrio (Orbe: 0°36', Separando)\nVértice Conjunção Vênus (Orbe: 1°04', Separando)\nVértice Octil Nodo (Orbe: 2°36', Separando)\nVértice Tri-Octil Lilith (Orbe: 0°20', Aplicando)\nVértice Conjunção Quíron (Orbe: 0°01', Aplicando)\nVértice Quincúncio Ascendente (Orbe: 2°43', Separando)",
    jogoGerado: [9, 10, 13, 20, 25, 8, 11, 15, 1, 24, 19, 5, 6, 22, 3],
    resultado: [1, 3, 6, 7, 8, 9, 10, 12, 13, 15, 17, 18, 19, 21, 25],
    obs: "",
  },
  {
    id: "h200_3646", concurso: "3646", data: "26/03/2026", hora: "",
    textoMapa: "Sol em Áries 6°20', na 5ª Casa;\nLua em Câncer 21°51', na 9ª Casa;\nMercúrio em Peixes 10°13', na 4ª Casa;\nVênus em Áries 25°28', na 6ª Casa;\nMarte em Peixes 19°12', na 5ª Casa;\nJúpiter em Câncer 15°29', na 8ª Casa;\nSaturno em Áries 4°55', na 5ª Casa;\nUrano em Touro 28°33', na 6ª Casa;\nNetuno em Áries 2°00', na 5ª Casa;\nPlutão em Aquário 5°07', na 3ª Casa;\nNodo Norte em Peixes 7°40', retrógrado, na 4ª Casa;\nLilith em Sagitário 10°46', na 1ª Casa;\nQuíron em Áries 25°24', na 6ª Casa;\nFortuna em Leão 13°35', na 7ª Casa. Vértice da 9ª casa\nem Áries 25°50',\nAscendente na 6ª casa em Escorpião 29°06',\nMeio do Céu em Leão 15°19'\n\n1ª Casa em Escorpião 29°06'\n2ª Casa em Sagitário 27°25'\n3ª Casa em Capricórnio 21°04'\n4ª Casa em Aquário 15°19'\n5ª Casa em Peixes 15°22'\n6ª Casa em Áries 22°53'\n7ª Casa em Touro 29°06'\n8ª Casa em Gêmeos 27°25'\n9ª Casa em Câncer 21°04'\n10ª Casa em Leão 15°19'\n11ª Casa em Virgem 15°22'\n12ª Casa em Libra 22°53'\n\nSol em conjunção com Saturno (Orbe: 1°24', Separando)\nSol em sextil com Plutão (Orbe: 1°12', Separando)\nLua em trígono com Marte (Orbe: 2°39', Separando)\nMercúrio em octil com Vênus (Orbe: 0°15', Separando)\nMarte em octil com Plutão (Orbe: 0°55', Aplicando)\nJúpiter em octil com Urano (Orbe: 1°56', Separando)\nSaturno em conjunção com Netuno (Orbe: 2°54', Separando)\nSaturno em sextil com Plutão (Orbe: 0°12', Aplicando)\n\nAscendente em Tri-Octil com Júpiter (Orbe: 1°22', em movimento subsequente)\nAscendente em Oposição com Urano (Orbe: 0°33', em movimento subsequente)\nAscendente em Trígono com Netuno (Orbe: 2°54', em movimento subsequente)\nDescendente em Octil com Júpiter (Orbe: 1°22', em movimento subsequente)\nDescendente em Conjunção com Urano (Orbe: 0°33', em movimento subsequente)\nDescendente em Sextil com Netuno (Orbe: 2°54', em movimento subsequente)\nMeio do Céu em Tri-Octil com Netuno (Orbe: 1°41', em movimento subsequente)\nFundo do Céu em Quincúncio com Júpiter (Orbe: 0°09', em movimento subsequente) Fundo\ndo Céu em Octil com Netuno (Orbe: 1°41', em movimento subsequente)\nNodo Norte em Tri-Octil com a Lua (Orbe: 0°48', em movimento subsequente)\nNodo Norte em Conjunção com Mercúrio (Orbe: 2°32', em movimento subsequente)\nNodo Norte Vênus em Octil (Orbe: 2°48', Separando)\nNodo Norte em Octil com Quíron (Orbe: 2°44', Separando)\nLilith em Quadratura com Mercúrio (Orbe: 0°33', Aplicando)\nLilith em Tri-Octil com Vênus (Orbe: 0°18', Aplicando)\nLilith em Tri-Octil com Quíron (Orbe: 0°21', Separando)\nQuíron em Octil com Mercúrio (Orbe: 0°11', Aplicando)\nQuíron em Conjunção com Vênus (Orbe: 0°03', Separando)\nFortuna em Trígono com Lilith (Orbe: 2°48', Separando)\nFortuna em Conjunção com o Meio do Céu (Orbe: 1°44', Aplicando)\nFortuna em Tri-Octil com o Vértice (Orbe: 1°24', Separando)\nFortuna em Oposição com o Fundo do Céu (Orbe: 1°44', Aplicando)\nVértice em Octil com Mercúrio (Orbe: 0°37', Conjunção\ndo vértice com Vênus (Orbe: 0°22', Separando)\nTri-óctilo do vértice com Lilith (Orbe: 0°04', Separando)\nConjunção do vértice com Quíron (Orbe: 0°25', Separando)",
    jogoGerado: [23, 13, 20, 24, 25, 8, 10, 5, 1, 7, 6, 22, 15, 3, 12],
    resultado: [1, 3, 5, 7, 8, 11, 13, 15, 16, 18, 19, 20, 23, 24, 25],
    obs: "",
  },
  {
    id: "h200_3647", concurso: "3647", data: "27/03/2026", hora: "",
    textoMapa: "Sol em Áries 7°19', na 5ª Casa;\nLua em Leão 5°36', na 9ª Casa;\nMercúrio em Peixes 10°47', na 4ª Casa;\nVênus em Áries 26°42', na 6ª Casa;\nMarte em Peixes 19°59', na 5ª Casa;\nJúpiter em Câncer 15°32', na 8ª Casa;\nSaturno em Áries 5°02', na 5ª Casa;\nUrano em Touro 28°35', na 6ª Casa;\nNetuno em Áries 2°03', na 5ª Casa;\nPlutão em Aquário 5°08', na 3ª Casa;\nNodo Norte em Peixes 7°37', retrógrado, na 4ª Casa;\nLilith em Sagitário 10°53', na 1ª Casa;\nQuíron em Áries 25°28', na 6ª Casa;\nFortuna em Leão 1°53', na 7ª Casa. Vértice da 9ª casa\nem Áries 26°22',\nAscendente na 6ª casa em Sagitário 0°10',\nMeio do Céu em Leão 16°19'\n\n1ª Casa em Sagitário 0°10'\n2ª Casa em Sagitário 28°20'\n3ª Casa em Capricórnio 21°58'\n4ª Casa em Aquário 16°19'\n5ª Casa em Peixes 16°32'\n6ª Casa em Áries 24°07'\n7ª Casa em Gêmeos 0°10'\n8ª Casa em Gêmeos 28°20'\n9ª Casa em Câncer 21°58'\n10ª Casa em Leão 16°19'\n11ª Casa em Virgem 16°32'\n12ª Casa em Libra 24°07'\n\nSol em trígono com a Lua (Orbe: 1°43', em movimento subsequente)\nSol em conjunção com Saturno (Orbe: 2°16', em movimento subsequente)\nSol em sextil com Plutão (Orbe: 2°10', em movimento subsequente)\nLua em trígono com Marte (Orbe: 0°37', em movimento subsequente)\nLua em trígono com Saturno (Orbe: 0°33', em movimento subsequente)\nLua em oposição a Plutão (Orbe: 0°27', em movimento subsequente)\nMercúrio em octil com Vênus (Orbe: 0°55', em movimento subsequente)\nMarte em octil com Plutão (Orbe: 0°09', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 1°57', em movimento subsequente)\nSaturno em conjunção com Netuno (Orbe: 2°59', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 0°05', em movimento subsequente)\n\nAscendente em Tri-Octil com Júpiter (Orbe: 0°22', em movimento subsequente)\nAscendente em Oposição com Urano (Orbe: 1°34', em movimento subsequente)\nAscendente em Trígono com Netuno (Orbe: 1°52', em movimento subsequente)\nDescendente em Octil com Júpiter (Orbe: 0°22', em movimento subsequente)\nDescendente em Conjunção com Urano (Orbe: 1°34', em movimento subsequente)\nDescendente em Sextil com Netuno (Orbe: 1°52', em movimento subsequente)\nMeio do Céu em Tri-Octil com Netuno (Orbe: 0°43', em movimento subsequente)\nFundo do Céu em Quincúncio com Júpiter (Orbe: 0°46', em movimento subsequente) Fundo\ndo Céu em Octil com Netuno (Orbe: 0°43', em movimento subsequente)\nNodo Norte em Quincúncio com a Lua (Orbe: 2°00', em movimento subsequente)\nNodo Norte em Octil com Quíron (Orbe: 2°51', em movimento subsequente)\nLilith em Quadratura Mercúrio (Orbe: 0°06', Aplicando)\nLilith Tri-Octil Vênus (Orbe: 0°49', Separando)\nLilith Tri-Octil Quíron (Orbe: 0°25', Separando)\nQuíron Octil Mercúrio (Orbe: 0°18', Separando)\nQuíron Conjunção Vênus (Orbe: 1°14', Separando)\nFortuna Trígono Netuno (Orbe: 0°09', Aplicando)\nFortuna Trígono Ascendente (Orbe: 1°43', Separando)\nFortuna Trígono Vertex (Orbe: 1°53', Separando)\nFortuna Sextil Descendente (Orbe: 1°43', Separando)\nVertex Octil Mercúrio (Orbe: 0°35', Separando)\nVertex Conjunção Vênus (Orbe: 0°20', Aplicando)\nVertex Tri-Octil Lilith (Orbe: 0°28', Separando)\nConjunção do vértice de Quíron (Orbe: 0°53', Separando)",
    jogoGerado: [13, 20, 24, 25, 2, 8, 4, 15, 21, 23, 10, 1, 7, 6, 22],
    resultado: [2, 4, 5, 8, 10, 12, 15, 16, 17, 19, 20, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h200_3648", concurso: "3648", data: "28/03/2026", hora: "",
    textoMapa: "Sol em Áries 8°18', na 5ª Casa;\nLua em Leão 19°07', na 10ª Casa;\nMercúrio em Peixes 11°25', na 4ª Casa;\nVênus em Áries 27°56', na 6ª Casa;\nMarte em Peixes 20°46', na 5ª Casa;\nJúpiter em Câncer 15°35', na 8ª Casa;\nSaturno em Áries 5°10', na 5ª Casa;\nUrano em Touro 28°37', na 6ª Casa;\nNetuno em Áries 2°05', na 5ª Casa;\nPlutão em Aquário 5°09', na 3ª Casa;\nNodo Norte em Peixes 7°33', retrógrado, na 4ª Casa;\nLilith em Sagitário 11°00', na 1ª Casa;\nQuíron em Áries 25°31', na 6ª Casa;\nFortuna em Câncer 20°24'. No\nvértice da 8ª casa em Áries a 26°53', no\nAscendente da 6ª casa em Sagitário a 1°13',\nMeio do Céu em Leão a 17°19'.\n\n1ª Casa em Sagitário 1°13'\n2ª Casa em Sagitário 29°14'\n3ª Casa em Capricórnio 22°52'\n4ª Casa em Aquário 17°19'\n5ª Casa em Peixes 17°43'\n6ª Casa em Áries 25°21'\n7ª Casa em Gêmeos 1°13'\n8ª Casa em Gêmeos 29°14'\n9ª Casa em Câncer 22°52'\n10ª Casa em Leão 17°19'\n11ª Casa em Virgem 17°43'\n12ª Casa em Libra 25°21'\n\nLua em Quincúncio com Marte (Orbe: 1°38', Aproximando-se)\nLua em Tri-óctil com Saturno (Orbe: 1°02', Aproximando-se)\nLua em Tri-óctil com Netuno (Orbe: 2°02', Separando-se)\nMercúrio em Octil com Vênus (Orbe: 1°31', Separando-se)\nMarte em Octil com Plutão (Orbe: 0°36', Separando-se)\nJúpiter em Octil com Urano (Orbe: 1°57', Separando-se)\nSaturno em Sextil com Plutão (Orbe: 0°00', Separando-se)\n\nAscendente em Tri-Octil com Júpiter (Orbe: 0°37', Separando)\nAscendente em Oposição com Urano (Orbe: 2°35', Separando)\nAscendente em Trígono com Netuno (Orbe: 0°52', Aplicando)\nDescendente em Octil com Júpiter (Orbe: 0°37', Separando)\nDescendente em Conjunção com Urano (Orbe: 2°35', Separando)\nDescendente em Sextil com Netuno (Orbe: 0°52', Aplicando)\nMeio do Céu em Conjunção com a Lua (Orbe: 1°48', Aplicando) Meio\ndo Céu em Tri-Octil com Saturno (Orbe: 2°51', Aplicando)\nMeio do Céu em Tri-Octil com Netuno (Orbe: 0°13', Separando)\nFundo do Céu em Oposição com a Lua (Orbe: 1°48', Aplicando)\nFundo do Céu em Quincúncio com Júpiter (Orbe: 1°43', Separando)\nFundo do Céu em Octil com Saturno (Orbe: 2°51', Aplicando)\nIC Octil Netuno (Orbe: 0°13', Separando)\nNodo Norte Octil Quíron (Orbe: 2°58', Separando)\nLilith Trígono Sol (Orbe: 2°41', Aplicando)\nLilith Quadratura Mercúrio (Orbe: 0°24', Separando)\nLilith Tri-Octil Vênus (Orbe: 1°56', Separando)\nLilith Tri-Octil Quíron (Orbe: 0°28', Separando)\nQuíron Octil Mercúrio (Orbe: 0°53', Separando)\nQuíron Conjunção Vênus (Orbe: 2°24', Separando)\nFortuna Trígono Marte (Orbe: 0°22', Aplicando)\nFortuna Tri-Octil Nodo (Orbe: 2°09', Aplicando)\nVértice Octil Mercúrio (Orbe: 0°28', Conjunção\ndo vértice com Vênus (Orbe: 1°03', em movimento)\nTri-óctilo do vértice com Lilith (Orbe: 0°53', em movimento)\nConjunção do vértice com Quíron (Orbe: 1°21', em movimento)",
    jogoGerado: [13, 7, 20, 19, 5, 2, 10, 25, 9, 16, 1, 15, 14, 11, 8],
    resultado: [1, 2, 5, 7, 8, 9, 10, 11, 13, 14, 15, 18, 19, 20, 22],
    obs: "",
  },
  {
    id: "h200_3649", concurso: "3649", data: "30/03/2026", hora: "",
    textoMapa: "Sol em Áries 10°17', na 5ª Casa;\nLua em Virgem 15°34', na 10ª Casa;\nMercúrio em Peixes 12°52', na 4ª Casa;\nVênus em Touro 0°24', na 6ª Casa;\nMarte em Peixes 22°20', na 5ª Casa;\nJúpiter em Câncer 15°43', na 8ª Casa;\nSaturno em Áries 5°25', na 5ª Casa;\nUrano em Touro 28°43', na 6ª Casa;\nNetuno em Áries 2°09', na 5ª Casa;\nPlutão em Aquário 5°11', na 3ª Casa;\nNodo Norte em Peixes 7°27', retrógrado, na 4ª Casa;\nLilith em Sagitário 11°13', na 1ª Casa;\nQuíron em Áries 25°38', na 5ª Casa;\nFortuna em Gêmeos 28°01', no\nVértice da 7ª Casa em Áries 27°56', no\nAscendente da 6ª Casa em Sagitário 3°18'\nMeio do Céu em Leão 19°18'\n\n1ª Casa em Sagitário 3°18'\n2ª Casa em Capricórnio 1°03'\n3ª Casa em Capricórnio 24°39'\n4ª Casa em Aquário 19°18'\n5ª Casa em Peixes 20°04'\n6ª Casa em Áries 27°48'\n7ª Casa em Gêmeos 3°18'\n8ª Casa em Câncer 1°03'\n9ª Casa em Câncer 24°39'\n10ª Casa em Leão 19°18'\n11ª Casa em Virgem 20°04'\n12ª Casa em Libra 27°48'\n\nLua em oposição a Mercúrio (Orbe: 2°41', Separando)\nLua em trígono octil com Vênus (Orbe: 0°09', Separando)\nLua em sextil com Júpiter (Orbe: 0°08', Aproximando)\nMercúrio em octil com Vênus (Orbe: 2°31', Separando)\nMercúrio em trígono com Júpiter (Orbe: 2°50', Aproximando)\nMarte em octil com Plutão (Orbe: 2°08', Separando)\nJúpiter em octil com Urano (Orbe: 1°59', Separando)\nSaturno em sextil com Plutão (Orbe: 0°13', Separando)\n\nQuincúncio Ascendente com Vênus (Orbe: 2°53', Separando)\nTri-óctil Ascendente com Júpiter (Orbe: 2°35', Separando)\nTrígono Ascendente com Saturno (Orbe: 2°07', Aplicando)\nTrígono Ascendente com Netuno (Orbe: 1°08', Separando)\nSextil Ascendente com Plutão (Orbe: 1°53', Aplicando)\nOctil Descendente com Júpiter (Orbe: 2°35', Separando)\nSextil Descendente com Saturno (Orbe: 2°07', Aplicando)\nSextil Descendente com Netuno (Orbe: 1°08', Separando)\nTrígono Descendente com Plutão (Orbe: 1°53', Aplicando)\nTri-óctil Meio do Céu com Saturno (Orbe: 1°06', Aplicando)\nTri-óctil Meio do Céu com Netuno (Orbe: 2°08', Separando)\nOctil Fundo do Céu Saturno (Orbe: 1°06', em movimento)\nIC em octil com Netuno (Orbe: 2°08', em movimento)\nLilith em trígono com o Sol (Orbe: 0°56', em movimento)\nLilith em quadratura com Mercúrio (Orbe: 1°39', em movimento)\nLilith em trígono com Quíron (Orbe: 0°34', em movimento)\nQuíron em octil com Mercúrio (Orbe: 2°13', em movimento)\nFortuna em sextil com Vênus (Orbe: 2°23', em movimento)\nFortuna em sextil com Quíron (Orbe: 2°22', em movimento)\nFortuna em quadratura com o Vértice (Orbe: 1°58', em movimento)\nVértice em trígono com a Lua (Orbe: 2°37', em movimento)\nVértice em octil com Mercúrio (Orbe: 0°03', em movimento)\nVértice em conjunção com Vênus (Orbe: 2°28', em movimento)\nVértice Lilith Tri-Octil (Orbe: 1°42', Separadora)\nem Conjunção com Quíron no Vértice (Orbe: 2°17', Separador)",
    jogoGerado: [17, 20, 9, 8, 3, 10, 5, 24, 25, 21, 16, 15, 6, 7, 18],
    resultado: [6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 21, 24, 25],
    obs: "",
  },
  {
    id: "h13", concurso: "3650", data: "31/03/2026", hora: "",
    textoMapa: "Sol em Áries 11°16', na 5ª Casa;\nLua em Virgem 28°28', na 11ª Casa;\nMercúrio em Peixes 13°41', na 4ª Casa;\nVênus em Touro 1°38', na 6ª Casa;\nMarte em Peixes 23°07', na 5ª Casa;\nJúpiter em Câncer 15°46', na 8ª Casa;\nSaturno em Áries 5°32', na 5ª Casa;\nUrano em Touro 28°45', na 6ª Casa;\nNetuno em Áries 2°12', na 5ª Casa;\nPlutão em Aquário 5°12', na 3ª Casa;\nNodo Norte em Peixes 7°24', retrógrado, na 4ª Casa;\nLilith em Sagitário 11°20', na 1ª Casa;\nQuíron em Áries 25°42', na 5ª Casa;\nFortuna em Gêmeos 17°07', no\nVértice da 7ª Casa em Áries 28°27', no\nAscendente da 5ª Casa em Sagitário 4°19'\nMeio do Céu em Leão 20°19'\n\n1ª Casa em Sagitário 4°19'\n2ª Casa em Capricórnio 1°57'\n3ª Casa em Capricórnio 25°33'\n4ª Casa em Aquário 20°19'\n5ª Casa em Peixes 21°15'\n6ª Casa em Áries 29°01'\n7ª Casa em Gêmeos 4°19'\n8ª Casa em Câncer 1°57'\n9ª Casa em Câncer 25°33'\n10ª Casa em Leão 20°19'\n11ª Casa em Virgem 21°15'\n12ª Casa em Libra 29°01'\n\nSol em octil com Urano (Orbe: 2°29', em movimento subsequente)\nLua em trígono com Urano (Orbe: 0°16', em movimento subsequente)\nMercúrio em octil com Vênus (Orbe: 2°56', em movimento subsequente)\nMercúrio em trígono com Júpiter (Orbe: 2°05', em movimento subsequente)\nMarte em octil com Plutão (Orbe: 2°54', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°01', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 0°19', em movimento subsequente)\n\nQuincúncio do Ascendente com Vênus (Orbe: 2°41', Separando)\nTrígono do Ascendente com Saturno (Orbe: 1°12', Aplicando)\nTrígono do Ascendente com Netuno (Orbe: 2°07', Separando)\nSextil do Ascendente com Plutão (Orbe: 0°53', Aplicando)\nSextil do Descendente com Saturno (Orbe: 1°12', Aplicando)\nSextil do Descendente com Netuno (Orbe: 2°07', Separando)\nTrígono do Descendente com Plutão (Orbe: 0°53', Aplicando)\nQuincúncio do Meio do Céu com Marte (Orbe: 2°47', Aplicando)\nTri-óctilo do Meio do Céu com Saturno (Orbe: 0°13', Aplicando)\nÓctilo do Fundo do Céu com Saturno (Orbe: 0°13', Aplicando) Trígono\nde Lilith com o Sol (Orbe: 0°03', Aplicando)\nQuadratura de Lilith com Mercúrio (Orbe: 2°21',\nLilith em Tri-Óctil com Quíron (Orbe: 0°38', Separando)\nQuíron em Quincúncio com a Lua (Orbe: 2°46', Separando)\nQuíron em Óctil com Mercúrio (Orbe: 2°59', Separando) Fortuna em\nÓctil com Vênus (Orbe: 0°29', Separando)\nLua em Quincúncio com o Vértice (Orbe: 0°01', Aplicando)\nMercúrio em Óctil com o Vértice (Orbe: 0°14', Aplicando)\nLilith em Tri-Óctil com o Vértice (Orbe: 2°06', Separando)\nConjunção do Vértice com Quíron (Orbe: 2°44', Separando)",
    jogoGerado: [11, 13, 8, 20, 9, 3, 5, 10, 17, 21, 24, 25, 15, 6, 7],
    resultado: [2, 5, 6, 7, 8, 10, 11, 12, 13, 16, 17, 20, 21, 22, 25],
    obs: "",
  },
  {
    id: "h14", concurso: "3651", data: "01/04/2026", hora: "",
    textoMapa: "Sol em Áries 12°15', na 5ª Casa;\nLua em Libra 11°11', na 11ª Casa;\nMercúrio em Peixes 14°34', na 4ª Casa;\nVênus em Touro 2°52', na 6ª Casa;\nMarte em Peixes 23°53', na 5ª Casa;\nJúpiter em Câncer 15°50', na 8ª Casa;\nSaturno em Áries 5°40', na 5ª Casa;\nUrano em Touro 28°48', na 6ª Casa;\nNetuno em Áries 2°14', na 5ª Casa;\nPlutão em Aquário 5°13', na 3ª Casa;\nNodo Norte em Peixes 7°21', retrógrado, na 4ª Casa;\nLilith em Sagitário 11°27', na 1ª Casa;\nQuíron em Áries 25°45', na 5ª Casa;\nFortuna em Gêmeos 6°25'. No\nvértice da 7ª casa em Áries a 28°58', no\nAscendente da 5ª casa em Sagitário a 5°21',\nMeio do Céu em Leão a 21°19'.\n\n1ª Casa em Sagitário 5°21'\n2ª Casa em Capricórnio 2°51'\n3ª Casa em Capricórnio 26°27'\n4ª Casa em Aquário 21°19'\n5ª Casa em Peixes 22°26'\n6ª Casa em Touro 0°13'\n7ª Casa em Gêmeos 5°21'\n8ª Casa em Câncer 2°51'\n9ª Casa em Câncer 26°27'\n10ª Casa em Leão 21°19'\n11ª Casa em Virgem 22°26'\n12ª Casa em Escorpião 0°13'\n\nSol em oposição à Lua (Orbe: 1°03', em movimento crescente)\nSol em octil com Urano (Orbe: 1°32', em movimento crescente)\nLua em trígono com octil de Urano (Orbe: 2°36', em movimento crescente)\nMercúrio em trígono com Júpiter (Orbe: 1°16', em movimento crescente)\nVênus em quadratura com Plutão (Orbe: 2°21', em movimento crescente)\nJúpiter em octil com Urano (Orbe: 2°02', em movimento de separação)\nSaturno em sextil com Plutão (Orbe: 0°26', em movimento de separação)\nNetuno em sextil com Plutão (Orbe: 2°59', em movimento crescente)\n\nQuincúncio do Ascendente com Vênus (Orbe: 2°29', Separando)\nTrígono do Ascendente com Saturno (Orbe: 0°18', Aplicando)\nSextil do Ascendente com Plutão (Orbe: 0°07', Separando)\nQuadratura do Ascendente com o Nodo Norte (Orbe: 1°59', Aplicando)\nSextil do Descendente com Saturno (Orbe: 0°18', Aplicando)\nTrígono do Descendente com Plutão (Orbe: 0°07', Separando)\nQuadratura do Descendente com o Nodo Norte (Orbe: 1°59', Aplicando)\nQuincúncio do Meio do Céu com Marte (Orbe: 2°34', Aplicando)\nTri-óctilo do Meio do Céu com Saturno (Orbe: 0°39', Separando)\nÓctilo do Fundo do Céu com Saturno (Orbe: 0°39', Separando)\nTrígono de Lilith com o Sol (Orbe: 0°48', Separando)\nSextil de Lilith com a Lua (Orbe: 0°15', Em aplicação)\nLilith em Tri-Octil com Quíron (Orbe: 0°41', Separando)\nFortuna em Sextil com Saturno (Orbe: 0°44', Separando)\nFortuna em Trígono com Plutão (Orbe: 1°11', Separando)\nFortuna em Quadratura com o Nodo Norte (Orbe: 0°55', Em aplicação)\nFortuna em Oposição com o Ascendente (Orbe: 1°03', Separando)\nFortuna em Conjunção com o Descendente (Orbe: 1°03', Separando)\nVértice em Octil com Mercúrio (Orbe: 0°35', Em aplicação)\nVértice em Tri-Octil com Lilith (Orbe: 2°31', Separando)",
    jogoGerado: [13, 24, 20, 9, 8, 4, 10, 5, 25, 17, 21, 15, 6, 7, 18],
    resultado: [2, 3, 5, 8, 10, 12, 13, 14, 16, 17, 18, 20, 21, 24, 25],
    obs: "",
  },
  {
    id: "h15", concurso: "3652", data: "02/04/2026", hora: "",
    textoMapa: "Sol em Áries 13°14', na 5ª Casa;\nLua em Libra 23°43', na 11ª Casa;\nMercúrio em Peixes 15°29', na 4ª Casa;\nVênus em Touro 4°06', na 6ª Casa;\nMarte em Peixes 24°40', na 5ª Casa;\nJúpiter em Câncer 15°55', na 8ª Casa;\nSaturno em Áries 5°47', na 5ª Casa;\nUrano em Touro 28°50', na 6ª Casa;\nNetuno em Áries 2°16', na 5ª Casa;\nPlutão em Aquário 5°14', na 3ª Casa;\nNodo Norte em Peixes 7°17', retrógrado, na 4ª Casa;\nLilith em Sagitário 11°33', na 1ª Casa;\nQuíron em Áries 25°49', na 5ª Casa;\nFortuna em Touro. 25°54', no\nVértice da 6ª Casa em Áries 29°29', no\nAscendente da 5ª Casa em Sagitário 6°22'\nMeio do Céu em Leão 22°20'\n\n1ª Casa em Sagitário 6°22'\n2ª Casa em Capricórnio 3°44'\n3ª Casa em Capricórnio 27°21'\n4ª Casa em Aquário 22°20'\n5ª Casa em Peixes 23°36'\n6ª Casa em Touro 1°25'\n7ª Casa em Gêmeos 6°22'\n8ª Casa em Câncer 3°44'\n9ª Casa em Câncer 27°21'\n10ª Casa em Leão 22°20'\n11ª Casa em Virgem 23°36'\n12ª Casa em Escorpião 1°25'\n\nSol em quadratura com Júpiter (Orbe: 2°40', em movimento subsequente)\nSol em octil com Urano (Orbe: 0°36', em movimento subsequente)\nLua em quincúncio com Marte (Orbe: 0°57', em movimento subsequente)\nMercúrio em trígono com Júpiter (Orbe: 0°25', em movimento subsequente)\nVênus em quadratura com Plutão (Orbe: 1°08', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°04', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 0°32', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 2°58', em movimento subsequente)\n\nLua em Octil no Ascendente (Orbe: 2°20', em movimento)\nVênus em Quincúncio no Ascendente (Orbe: 2°16', em movimento de separação)\nTrígono em Saturno no Ascendente (Orbe: 0°34', em movimento de separação)\nSextil em Plutão no Ascendente (Orbe: 1°07', em movimento de separação)\nQuadratura no Nodo Norte no Ascendente (Orbe: 0°55', em movimento)\nLua em Tri-Octil no Descendente (Orbe: 2°20', em movimento)\nSextil em Saturno no Descendente (Orbe: 0°34', em movimento de separação)\nTrígono em Plutão no Descendente (Orbe: 1°07', em movimento de separação)\nQuadratura no Nodo Norte no Descendente (Orbe: 0°55', em movimento)\nLua em Sextil no Meio do Céu (Orbe: 1°23', em movimento)\nMarte em Quincúncio no Meio do Céu (Orbe: 2°20', em movimento)\nSaturno em Tri-Octil no Meio do Céu (Orbe: 1°32', Separando)\nIC em trígono com a Lua (Orbe: 1°23', Aplicando)\nIC em octil com Saturno (Orbe: 1°32', Separando)\nNodo Norte em trígono com a Lua (Orbe: 1°25', Separando)\nLilith em trígono com o Sol (Orbe: 1°41', Separando)\nLilith em octil com a Lua (Orbe: 2°50', Aplicando)\nLilith em trígono com Quíron (Orbe: 0°44', Separando)\nQuíron em oposição com a Lua (Orbe: 2°06', Aplicando)\nFortuna em octil com o Sol (Orbe: 2°20', Aplicando)\nFortuna em quincúncio com a Lua (Orbe: 2°11', Separando)\nFortuna em sextil com Marte (Orbe: 1°13', Separando)\nFortuna em conjunção com Urano (Orbe: 2°56', Aplicando)\nVértice em octil com Mercúrio (Orbe: 0°59', Aplicando)\nLilith Tri-Octile do Vértice (Orbe: 2°55', Separando)",
    jogoGerado: [13, 20, 9, 3, 7, 19, 10, 5, 1, 11, 17, 21, 25, 15, 6],
    resultado: [1, 3, 6, 7, 11, 12, 13, 15, 16, 18, 19, 20, 21, 23, 24],
    obs: "",
  },
  {
    id: "h16", concurso: "3653", data: "04/04/2026", hora: "",
    textoMapa: "Sol em Áries 15°13', na 5ª Casa;\nLua em Escorpião 18°12', na 12ª Casa;\nMercúrio em Peixes 17°28', na 4ª Casa;\nVênus em Touro 6°33', na 6ª Casa;\nMarte em Peixes 26°14', na 5ª Casa;\nJúpiter em Câncer 16°03', na 8ª Casa;\nSaturno em Áries 6°02', na 5ª Casa;\nUrano em Touro 28°56', na 6ª Casa;\nNetuno em Áries 2°21', na 5ª Casa;\nPlutão em Aquário 5°16', na 3ª Casa;\nNodo Norte em Peixes 7°11', retrógrado, na 4ª Casa;\nLilith em Sagitário 11°47', na 1ª Casa;\nQuíron em Áries 25°56', na 5ª Casa;\nFortuna em Touro. 5°23', no\nVértice da 6ª Casa em Touro 0°31', no\nAscendente da 5ª Casa em Sagitário 8°23'\nMeio do Céu em Leão 24°21'\n\n1ª Casa em Sagitário 8°23'\n2ª Casa em Capricórnio 5°32'\n3ª Casa em Capricórnio 29°08'\n4ª Casa em Aquário 24°21'\n5ª Casa em Peixes 25°59'\n6ª Casa em Touro 3°49'\n7ª Casa em Gêmeos 8°23'\n8ª Casa em Câncer 5°32'\n9ª Casa em Câncer 29°08'\n10ª Casa em Leão 24°21'\n11ª Casa em Virgem 25°59'\n12ª Casa em Escorpião 3°49'\n\nSol em Quincúncio com a Lua (Orbe: 2°59', Separando)\nSol em Quadratura com Júpiter (Orbe: 0°50', Aproximando)\nSol em Octil com Urano (Orbe: 1°16', Separando)\nLua em Trígono com Mercúrio (Orbe: 0°43', Separando)\nLua em Trígono com Júpiter (Orbe: 2°09', Separando)\nLua em Tri-Octil com Saturno (Orbe: 2°49', Aproximando)\nLua em Tri-Octil com Netuno (Orbe: 0°51', Separando)\nMercúrio em Trígono com Júpiter (Orbe: 1°25', Separando)\nMercúrio em Octil com Plutão (Orbe: 2°47', Aproximando)\nVênus em Quadratura com Plutão (Orbe: 1°17', Separando)\nMarte em Sextil com Urano (Orbe: 2°41', Aproximando)\nJúpiter em Octil com Urano (Orbe: 2°07', Separando)\nSaturno em Sextil Plutão (Orbe: 0°45', Separando)\nNetuno em sextil com Plutão (Orbe: 2°55', Aplicando)\n\nQuincúncio do Ascendente com Vênus (Orbe: 1°49', Separando)\nTrígono do Ascendente com Saturno (Orbe: 2°21', Separando)\nQuadratura do Ascendente com o Nodo Norte (Orbe: 1°12', Separando)\nTri-óctilo do Ascendente com Quíron (Orbe: 2°32', Aplicando)\nSextil do Descendente com Saturno (Orbe: 2°21', Separando)\nQuadratura do Descendente com o Nodo Norte (Orbe: 1°12', Separando)\nOctil do Descendente com Quíron (Orbe: 2°32', Aplicando)\nQuincúncio do Meio do Céu com Marte (Orbe: 1°52', Aplicando)\nTrígono do Meio do Céu com Quíron (Orbe: 1°34', Aplicando)\nSextil do Fundo do Céu com Quíron (Orbe: 1°34', Aplicando)\nSextil do Nodo Norte com Vênus (Orbe: 0°37', Aplicando)\nTri-óctilo de Lilith com Quíron (Orbe:\nFortuna em Octil com Mercúrio (Orbe: 2°54', Separando )\nFortuna em Conjunção com Vênus (Orbe: 1°09', Aplicando)\nFortuna em Quadratura com Plutão (Orbe: 0°07', Separando)\nFortuna em Sextil com o Nodo Norte (Orbe: 1°47', Aplicando)\nFortuna em Quincúncio com o Ascendente (Orbe: 2°59', Separando)\nVértice em Octil com Mercúrio (Orbe: 1°57', Aplicando)",
    jogoGerado: [13, 3, 20, 9, 15, 21, 10, 19, 5, 24, 1, 11, 17, 4, 25],
    resultado: [2, 3, 4, 6, 7, 8, 10, 11, 13, 14, 16, 18, 19, 20, 21],
    obs: "",
  },
  {
    id: "h17", concurso: "3654", data: "06/04/2026", hora: "",
    textoMapa: "Sol em Áries 17°11', na 5ª Casa;\nLua em Sagitário 12°09', na 1ª Casa;\nMercúrio em Peixes 19°38', na 4ª Casa;\nVênus em Touro 9°01', na 6ª Casa;\nMarte em Peixes 27°48', na 4ª Casa;\nJúpiter em Câncer 16°13', na 8ª Casa;\nSaturno em Áries 6°17', na 5ª Casa;\nUrano em Touro 29°01', na 6ª Casa;\nNetuno em Áries 2°25', na 5ª Casa;\nPlutão em Aquário 5°18', na 3ª Casa;\nNodo Norte em Peixes 7°05', retrógrado, na 4ª Casa;\nLilith em Sagitário 12°00', na 1ª Casa;\nQuíron em Áries 26°03', na 5ª Casa;\nFortuna em Áries. 15°25', no\nVértice da 5ª Casa em Touro 1°33', no\nAscendente da 5ª Casa em Sagitário 10°23'\nMeio do Céu em Leão 26°24'\n\n1ª Casa em Sagitário 10°23'\n2ª Casa em Capricórnio 7°18'\n3ª Casa em Aquário 0°57'\n4ª Casa em Aquário 26°24'\n5ª Casa em Peixes 28°21'\n6ª Casa em Touro 6°11'\n7ª Casa em Gêmeos 10°23'\n8ª Casa em Câncer 7°18'\n9ª Casa em Leão 0°57'\n10ª Casa em Leão 26°24'\n11ª Casa em Virgem 28°21'\n12ª Casa em Escorpião 6°11'\n\nSol em quadratura com Júpiter (Orbe: 0°57', separando)\nMercúrio em octil com Plutão (Orbe: 0°39', aproximando)\nMarte em sextil com Urano (Orbe: 1°13', aproximando)\nJúpiter em octil com Urano (Orbe: 2°11', separando)\nSaturno em sextil com Plutão (Orbe: 0°59', separando)\nNetuno em sextil com Plutão (Orbe: 2°52', aproximando)\n\nAscendente em conjunção com a Lua (Orbe: 1°45', em movimento subsequente)\nAscendente em quincúncio com Vênus (Orbe: 1°22', em movimento subsequente)\nAscendente em conjunção com Lilith (Orbe: 1°37', em movimento subsequente)\nAscendente em trí-óctilo com Quíron (Orbe: 0°40', em movimento subsequente)\nDescendente em oposição à Lua (Orbe: 1°45', em movimento subsequente)\nDescendente em oposição a Lilith (Orbe: 1°37', em movimento subsequente)\nDescendente em óctilo com Quíron (Orbe: 0°40', em movimento subsequente)\nMeio do Céu em quincúncio com Marte (Orbe: 1°24', em movimento subsequente)\nMeio do Céu em quadratura com Urano (Orbe: 2°37', em movimento subsequente)\nMeio do Céu em trígono com Quíron (Orbe: 0°20', em movimento subsequente)\nFundo do Céu em quadratura com Urano (Orbe: 2°37', em movimento subsequente)\nFundo do Céu em sextil com Quíron (Orbe:\nNodo Norte em sextil com Vênus (Orbe: 1°55', em separação )\nLilith em conjunção com a Lua (Orbe: 0°08', em separação)\nLilith em quincúncio com Vênus (Orbe: 2°59', em aproximação)\nLilith em trí-óctil com Quíron (Orbe: 0°57', em separação)\nQuíron em trí-óctil com a Lua (Orbe: 1°05', em separação)\nFortuna em conjunção com o Sol (Orbe: 1°45', em aproximação)\nFortuna em quadratura com Júpiter (Orbe: 0°48', em aproximação)\nFortuna em octil com Urano (Orbe: 1°23', em separação)",
    jogoGerado: [23, 13, 20, 1, 15, 24, 2, 11, 19, 6, 10, 5, 25, 8, 17],
    resultado: [1, 2, 3, 4, 6, 7, 11, 15, 17, 19, 20, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h18", concurso: "3655", data: "07/04/2026", hora: "",
    textoMapa: "Sol em Áries 18°10', na 5ª Casa;\nLua em Sagitário 24°01', na 1ª Casa;\nMercúrio em Peixes 20°47', na 4ª Casa;\nVênus em Touro 10°14', na 6ª Casa;\nMarte em Peixes 28°35', na 4ª Casa;\nJúpiter em Câncer 16°18', na 8ª Casa;\nSaturno em Áries 6°24', na 5ª Casa;\nUrano em Touro 29°04', na 6ª Casa;\nNetuno em Áries 2°27', na 5ª Casa;\nPlutão em Aquário 5°19', na 3ª Casa;\nNodo Norte em Peixes 7°02', retrógrado, na 4ª Casa;\nLilith em Sagitário 12°07', na 1ª Casa;\nQuíron em Áries 26°07', na 5ª Casa;\nFortuna em Áries. 5°31', no\nVértice da 5ª Casa em Touro 2°04', no\nAscendente da 5ª Casa em Sagitário 11°22'\nMeio do Céu em Leão 27°25'\n\n1ª Casa em Sagitário 11°22'\n2ª Casa em Capricórnio 8°11'\n3ª Casa em Aquário 1°51'\n4ª Casa em Aquário 27°25'\n5ª Casa em Peixes 29°32'\n6ª Casa em Touro 7°21'\n7ª Casa em Gêmeos 11°22'\n8ª Casa em Câncer 8°11'\n9ª Casa em Leão 1°51'\n10ª Casa em Leão 27°25'\n11ª Casa em Virgem 29°32'\n12ª Casa em Escorpião 7°21'\n\nSol em quadratura com Júpiter (Orbe: 1°51', separando)\nLua em trí-óctil com Vênus (Orbe: 1°13', aproximando)\nMercúrio em octil com Plutão (Orbe: 0°28', separando)\nMarte em sextil com Urano (Orbe: 0°29', aproximando)\nJúpiter em octil com Urano (Orbe: 2°13', separando)\nSaturno em sextil com Plutão (Orbe: 1°05', separando)\nNetuno em sextil com Plutão (Orbe: 2°51', aproximando)\n\nQuincúncio do Ascendente com Vênus (Orbe: 1°08', Separando)\nConjunção do Ascendente com Lilith (Orbe: 0°44', Aplicando)\nTri-óctilo do Ascendente com Quíron (Orbe: 0°15', Separando)\nOposição do Descendente com Lilith (Orbe: 0°44', Aplicando)\nOctil do Descendente com Quíron (Orbe: 0°15', Separando)\nQuincúncio do Meio do Céu com Marte (Orbe: 1°09', Aplicando)\nQuadratura do Meio do Céu com Urano (Orbe: 1°39', Aplicando)\nTrígono do Meio do Céu com Quíron (Orbe: 1°18', Separando)\nQuadratura do Fundo do Céu com Urano (Orbe: 1°39', Aplicando)\nSextil do Fundo do Céu com Quíron (Orbe: 1°18', Separando)\nQuincúncio de Lilith com Vênus (Orbe: 1°52', Aplicando)\nTri-óctilo de Lilith com Quíron (Orbe:\nQuíron em trígono com a Lua (Orbe: 2°05', em movimento) Fortuna\nem conjunção com Saturno (Orbe: 0°53', em movimento)\nFortuna em sextil com Plutão (Orbe: 0°12', em movimento)",
    jogoGerado: [23, 13, 20, 16, 2, 5, 18, 24, 6, 10, 15, 19, 25, 4, 11],
    resultado: [1, 2, 4, 5, 6, 10, 11, 12, 17, 18, 19, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h19", concurso: "3656", data: "08/04/2026", hora: "",
    textoMapa: "Sol em Áries 19°09', na 5ª Casa;\nLua em Capricórnio 5°54', na 1ª Casa;\nMercúrio em Peixes 21°58', na 4ª Casa;\nVênus em Touro 11°28', na 6ª Casa;\nMarte em Peixes 29°21', na 4ª Casa;\nJúpiter em Câncer 16°23', na 8ª Casa;\nSaturno em Áries 6°32', na 5ª Casa;\nUrano em Touro 29°07', na 6ª Casa;\nNetuno em Áries 2°30', na 5ª Casa;\nPlutão em Aquário 5°19', na 3ª Casa;\nNodo Norte em Peixes 6°58', retrógrado, na 4ª Casa;\nLilith em Sagitário 12°14', na 12ª Casa;\nQuíron em Áries 26°10', na 5ª Casa;\nFortuna em Peixes. 25°36', no\nVértice da 4ª Casa em Touro 2°35', no\nAscendente da 5ª Casa em Sagitário 12°21'\nMeio do Céu em Leão 28°27'\n\n1ª Casa em Sagitário 12°21'\n2ª Casa em Capricórnio 9°04'\n3ª Casa em Aquário 2°45'\n4ª Casa em Aquário 28°27'\n5ª Casa em Áries 0°43'\n6ª Casa em Touro 8°31'\n7ª Casa em Gêmeos 12°21'\n8ª Casa em Câncer 9°04'\n9ª Casa em Leão 2°45'\n10ª Casa em Leão 28°27'\n11ª Casa em Libra 0°43'\n12ª Casa em Escorpião 8°31'\n\nSol em quadratura com Júpiter (Orbe: 2°45', separando)\nLua em quadratura com Saturno (Orbe: 0°37', aproximando)\nMercúrio em octil com Plutão (Orbe: 1°38', separando)\nVênus em octil com Marte (Orbe: 2°53', aproximando)\nMarte em sextil com Urano (Orbe: 0°14', separando)\nJúpiter em octil com Urano (Orbe: 2°15', separando)\nSaturno em sextil com Plutão (Orbe: 1°12', separando)\nNetuno em sextil com Plutão (Orbe: 2°49', aproximando)\n\nQuincúncio do Ascendente com Vênus (Orbe: 0°53', Separando)\nConjunção do Ascendente com Lilith (Orbe: 0°07', Separando)\nTri-óctilo do Ascendente com Quíron (Orbe: 1°11', Separando)\nOposição do Descendente com Lilith (Orbe: 0°07', Separando)\nOctil do Descendente com Quíron (Orbe: 1°11', Separando)\nQuincúncio do Meio do Céu com Marte (Orbe: 0°54', Aplicando)\nOctil do Meio do Céu com Júpiter (Orbe: 2°56', Aplicando)\nQuadratura do Meio do Céu com Urano (Orbe: 0°40', Aplicando)\nTrígono do Meio do Céu com Quíron (Orbe: 2°16', Separando)\nTri-óctilo do Fundo do Céu com Júpiter (Orbe: 2°56', Aplicando)\nQuadratura do Fundo do Céu com Urano (Orbe: 0°40', Aplicando)\nSextil do Fundo do Céu com Quíron (Orbe:\nNodo Norte em Octil com o Sol (Orbe: 2°49', em movimento) Nodo\nNorte em Sextil com a Lua (Orbe: 1°04', em movimento)\nLilith em Quincúncio com Vênus (Orbe: 0°45', em movimento)\nLilith em Tri-Octil com Quíron (Orbe: 1°03', em movimento)\nFortuna em Octil com Vênus (Orbe: 0°52', em movimento)\nFortuna em Quincúncio com o Meio do Céu (Orbe: 2°50', em movimento)\nVértice em Quadratura com Plutão (Orbe: 2°44', em movimento)",
    jogoGerado: [4, 11, 14, 25, 23, 13, 20, 12, 24, 10, 5, 15, 2, 19, 1],
    resultado: [3, 4, 6, 7, 8, 11, 12, 14, 15, 18, 19, 20, 21, 24, 25],
    obs: "",
  },
  {
    id: "h20", concurso: "3657", data: "09/04/2026", hora: "",
    textoMapa: "Sol em Áries 20°08', na 5ª Casa;\nLua em Capricórnio 17°53', na 2ª Casa;\nMercúrio em Peixes 23°11', na 4ª Casa;\nVênus em Touro 12°41', na 6ª Casa;\nMarte em Áries 0°08', na 4ª Casa;\nJúpiter em Câncer 16°28', na 8ª Casa;\nSaturno em Áries 6°39', na 5ª Casa;\nUrano em Touro 29°10', na 6ª Casa;\nNetuno em Áries 2°32', na 5ª Casa;\nPlutão em Aquário 5°20', na 3ª Casa;\nNodo Norte em Peixes 6°55', retrógrado, na 4ª Casa;\nLilith em Sagitário 12°20', na 12ª Casa;\nQuíron em Áries 26°14', na 5ª Casa;\nFortuna em Peixes. 15°35', no Vértice da 4ª Casa\nem Touro 3°06', no\nAscendente da 5ª Casa em Sagitário 13°20'\nMeio do Céu em Leão 29°28'\n\n1ª Casa em Sagitário 13°20'\n2ª Casa em Capricórnio 9°57'\n3ª Casa em Aquário 3°39'\n4ª Casa em Aquário 29°28'\n5ª Casa em Áries 1°54'\n6ª Casa em Touro 9°40'\n7ª Casa em Gêmeos 13°20'\n8ª Casa em Câncer 9°57'\n9ª Casa em Leão 3°39'\n10ª Casa em Leão 29°28'\n11ª Casa em Libra 1°54'\n12ª Casa em Escorpião 9°40'\n\nSol em quadratura com a Lua (Orbe: 2°14', em movimento)\nLua em oposição a Júpiter (Orbe: 1°24', em movimento)\nMercúrio em octil com Plutão (Orbe: 2°50', em movimento)\nVênus em octil com Marte (Orbe: 2°26', em movimento)\nMarte em sextil com Urano (Orbe: 0°58', em movimento)\nMarte em conjunção com Netuno (Orbe: 2°23', em movimento)\nJúpiter em octil com Urano (Orbe: 2°18', em movimento)\nSaturno em sextil com Plutão (Orbe: 1°18', em movimento)\nNetuno em sextil com Plutão (Orbe: 2°48', em movimento)\n\nQuincúncio do Ascendente com Vênus (Orbe: 0°38', Separando)\nConjunção do Ascendente com Lilith (Orbe: 0°59', Separando)\nTri-óctil do Ascendente com Quíron (Orbe: 2°06', Separando)\nOposição do Descendente com Lilith (Orbe: 0°59', Separando)\nOctil do Descendente com Quíron (Orbe: 2°06', Separando)\nQuincúncio do Meio do Céu com Marte (Orbe: 0°39', Aplicando)\nOctil do Meio do Céu com Júpiter (Orbe: 2°00', Aplicando)\nQuadratura do Meio do Céu com Urano (Orbe: 0°18', Separando)\nTri-óctil do Fundo do Céu com Júpiter (Orbe: 2°00', Aplicando)\nQuadratura do Fundo do Céu com Urano (Orbe: 0°18', Separando)\nOctil do Nodo Norte com o Sol (Orbe: 1°47', Aplicando)\nQuincúncio de Lilith com Vênus (Orbe: 0°20', Separando)\nLilith em Tri-Octil com Quíron (Orbe: 1°06', Separando)\nFortuna em Sextil com a Lua (Orbe: 2°18', Aplicando)\nFortuna em Sextil com Vênus (Orbe: 2°53', Separando)\nFortuna em Trígono com Júpiter (Orbe: 0°53', Aplicando)\nFortuna em Quadratura com o Ascendente (Orbe: 2°14', Separando)\nFortuna em Quadratura com o Descendente (Orbe: 2°14', Separando)\nVertex em Quadratura com Plutão (Orbe: 2°14', Aplicando)",
    jogoGerado: [23, 13, 20, 24, 2, 3, 10, 12, 17, 22, 6, 5, 25, 7, 15],
    resultado: [1, 2, 4, 7, 8, 10, 12, 13, 17, 18, 19, 20, 22, 23, 24],
    obs: "",
  },
  {
    id: "h21", concurso: "3658", data: "10/04/2026", hora: "",
    textoMapa: "Sol em Áries 21°07', na 5ª Casa;\nLua em Aquário 0°02', na 2ª Casa;\nMercúrio em Peixes 24°26', na 4ª Casa;\nVênus em Touro 13°55', na 6ª Casa;\nMarte em Áries 0°55', na 4ª Casa;\nJúpiter em Câncer 16°34', na 8ª Casa;\nSaturno em Áries 6°46', na 5ª Casa;\nUrano em Touro 29°13', na 6ª Casa;\nNetuno em Áries 2°34', na 4ª Casa;\nPlutão em Aquário 5°21', na 3ª Casa;\nNodo Norte em Peixes 6°52', retrógrado, na 4ª Casa;\nLilith em Sagitário 12°27', na 12ª Casa;\nQuíron em Áries 26°18', na 5ª Casa;\nFortuna em Peixes. 5°23', no\nVértice da 4ª Casa em Touro 3°37', no\nAscendente da 5ª Casa em Sagitário 14°19'\nMeio do Céu em Virgem 0°30'\n\n1ª Casa em Sagitário 14°19'\n2ª Casa em Capricórnio 10°50'\n3ª Casa em Aquário 4°34'\n4ª Casa em Peixes 0°30'\n5ª Casa em Áries 3°06'\n6ª Casa em Touro 10°50'\n7ª Casa em Gêmeos 14°19'\n8ª Casa em Câncer 10°50'\n9ª Casa em Leão 4°34'\n10ª Casa em Virgem 0°30'\n11ª Casa em Libra 3°06'\n12ª Casa em Escorpião 10°50'\n\nLua em sextil com Marte (Orbe: 0°52', em movimento subsequente)\nLua em trígono com Urano (Orbe: 0°49', em movimento subsequente)\nLua em sextil com Netuno (Orbe: 2°32', em movimento subsequente)\nVênus em octil com Marte (Orbe: 1°59', em movimento subsequente)\nVênus em sextil com Júpiter (Orbe: 2°38', em movimento subsequente)\nMarte em sextil com Urano (Orbe: 1°41', em movimento subsequente)\nMarte em conjunção com Netuno (Orbe: 1°39', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°21', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 1°25', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 2°46', em movimento subsequente)\n\nLua em Octil no Ascendente (Orbe: 0°43', em movimento)\nVênus em Quincúncio no Ascendente (Orbe: 0°23', em movimento de separação)\nJúpiter em Quincúncio no Ascendente (Orbe: 2°15', em movimento de separação)\nLilith em Conjunção com o Ascendente (Orbe: 1°51', em movimento de separação)\nLua em Tri-Octil no Descendente (Orbe: 0°43', em movimento de separação)\nLilith em Oposição no Descendente (Orbe: 1°51', em movimento de separação)\nLua em Quincúncio no Meio do Céu (Orbe: 0°28', em movimento de separação)\nMarte em Quincúncio no Meio do Céu (Orbe: 0°24', em movimento de separação)\nJúpiter em Octil no Meio do Céu (Orbe: 1°03', em movimento de separação)\nUrano em Quadratura no Meio do Céu (Orbe: 1°17', em movimento de separação)\nNetuno em Quincúncio no Meio do Céu (Orbe: 2°03', em movimento de separação)\nJúpiter em Tri-Octil no Fundo do Céu (Orbe: 1°03', em aplicação)\nIC em quadratura com Urano (Orbe: 1°17', em separação)\nNodo Norte em octil com o Sol (Orbe: 0°45', em aplicação)\nLilith em octil com a Lua (Orbe: 2°34', em separação)\nLilith em quincúncio com Vênus (Orbe: 1°27', em separação)\nLilith em trí-octil com Quíron (Orbe: 1°09', em separação)\nFortuna em octil com o Sol (Orbe: 0°43', em aplicação)\nFortuna em conjunção com o Nodo (Orbe: 1°28', em aplicação)\nVértice em quadratura com Plutão (Orbe: 1°44', em aplicação)",
    jogoGerado: [16, 22, 23, 13, 20, 10, 3, 4, 12, 21, 24, 25, 6, 5, 7],
    resultado: [2, 3, 4, 5, 9, 10, 11, 12, 13, 16, 18, 20, 22, 23, 24],
    obs: "",
  },
  {
    id: "h22", concurso: "3659", data: "11/04/2026", hora: "",
    textoMapa: "Sol em Áries 22°05', na 5ª Casa;\nLua em Aquário 12°26', na 3ª Casa;\nMercúrio em Peixes 25°44', na 4ª Casa;\nVênus em Touro 15°08', na 6ª Casa;\nMarte em Áries 1°41', na 4ª Casa;\nJúpiter em Câncer 16°39', na 8ª Casa;\nSaturno em Áries 6°54', na 5ª Casa;\nUrano em Touro 29°16', na 6ª Casa;\nNetuno em Áries 2°36', na 4ª Casa;\nPlutão em Aquário 5°22', na 2ª Casa;\nNodo Norte em Peixes 6°49', retrógrado, na 4ª Casa;\nLilith em Sagitário 12°34', na 12ª Casa;\nQuíron em Áries 26°21', na 5ª Casa;\nFortuna em Aquário. 24°56', no\nVértice da 3ª Casa em Touro 4°07', no\nAscendente da 5ª Casa em Sagitário 15°17'\nMeio do Céu em Virgem 1°32'\n\n1ª Casa em Sagitário 15°17'\n2ª Casa em Capricórnio 11°43'\n3ª Casa em Aquário 5°28'\n4ª Casa em Peixes 1°32'\n5ª Casa em Áries 4°17'\n6ª Casa em Touro 11°58'\n7ª Casa em Gêmeos 15°17'\n8ª Casa em Câncer 11°43'\n9ª Casa em Leão 5°28'\n10ª Casa em Virgem 1°32'\n11ª Casa em Libra 4°17'\n12ª Casa em Escorpião 11°58'\n\nLua em octil com Mercúrio (Orbe: 1°41', separando)\nLua em quadratura com Vênus (Orbe: 2°42', aproximando)\nVênus em octil com Marte (Orbe: 1°33', aproximando)\nVênus em sextil com Júpiter (Orbe: 1°31', aproximando)\nVênus em octil com Netuno (Orbe: 2°27', aproximando)\nMarte em sextil com Urano (Orbe: 2°25', separando)\nMarte em conjunção com Netuno (Orbe: 0°54', aproximando)\nJúpiter em octil com Urano (Orbe: 2°23', separando)\nSaturno em sextil com Plutão (Orbe: 1°32', separando)\nNetuno em sextil com Plutão (Orbe: 2°45', aproximando)\n\nSextil do Ascendente com a Lua (Orbe: 2°50', Separando)\nQuincúncio do Ascendente com Vênus (Orbe: 0°08', Separando)\nQuincúncio do Ascendente com Júpiter (Orbe: 1°22', Aplicando)\nConjunção do Ascendente com Lilith (Orbe: 2°42', Separando)\nTrígono do Descendente com a Lua (Orbe: 2°50', Separando)\nOposição do Descendente com Lilith (Orbe: 2°42', Separando)\nQuincúncio do Meio do Céu com Marte (Orbe: 0°09', Aplicando)\nOctil do Meio do Céu com Júpiter (Orbe: 0°07', Aplicando)\nQuadratura do Meio do Céu com Urano (Orbe: 2°16', Separando)\nQuincúncio do Meio do Céu com Netuno (Orbe: 1°03', Aplicando)\nTri-octil do Fundo do Céu com Júpiter (Orbe: 0°07', Aplicando)\nQuadratura do Fundo do Céu com Urano (Orbe:\nNodo Norte em Octil com o Sol (Orbe: 0° 16', em Separação )\nLilith em Sextil com a Lua (Orbe: 0°08', em Aplicação)\nLilith em Quincúncio com Vênus (Orbe: 2°34', em Separação)\nLilith em Tri-Octil com Quíron (Orbe: 1°12', em Separação)\nFortuna em Sextil com o Sol (Orbe: 2°50', em Separação)\nFortuna em Sextil com Quíron (Orbe: 1°24', em Aplicação)\nVértice em Quadratura com Plutão (Orbe: 1°14', em Aplicação)\nVértice em Sextil com o Nodo (Orbe: 2°41', em Aplicação) Vértice em Trígono com o Meio do Céu\n(Orbe: 2°35', em Separação)\nVértice em Sextil com o Fundo do Céu (Orbe: 2°35', em Separação)",
    jogoGerado: [6, 7, 8, 23, 25, 13, 20, 10, 5, 11, 15, 24, 12, 17, 1],
    resultado: [3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 23, 25],
    obs: "",
  },
  {
    id: "h23", concurso: "3660", data: "13/04/2026", hora: "",
    textoMapa: "Sol em Áries 24°03', na 5ª Casa;\nLua em Peixes 8°17', na 4ª Casa;\nMercúrio em Peixes 28°25', na 4ª Casa;\nVênus em Touro 17°35', na 6ª Casa;\nMarte em Áries 3°15', na 4ª Casa;\nJúpiter em Câncer 16°51', na 8ª Casa;\nSaturno em Áries 7°08', na 5ª Casa;\nUrano em Touro 29°22', na 6ª Casa;\nNetuno em Áries 2°40', na 4ª Casa;\nPlutão em Aquário 5°23', na 2ª Casa;\nNodo Norte em Peixes 6°42', retrógrado, na 4ª Casa;\nLilith em Sagitário 12°47', na 12ª Casa;\nQuíron em Áries 26°28', na 5ª Casa;\nFortuna em Aquário. 2°58', no\nVértice da 2ª Casa em Touro 5°09', no\nAscendente da 5ª Casa em Sagitário 17°12'\nMeio do Céu em Virgem 3°37'\n\n1ª Casa em Sagitário 17°12'\n2ª Casa em Capricórnio 13°28'\n3ª Casa em Aquário 7°17'\n4ª Casa em Peixes 3°37'\n5ª Casa em Áries 6°39'\n6ª Casa em Touro 14°15'\n7ª Casa em Gêmeos 17°12'\n8ª Casa em Câncer 13°28'\n9ª Casa em Leão 7°17'\n10ª Casa em Virgem 3°37'\n11ª Casa em Libra 6°39'\n12ª Casa em Escorpião 14°15'\n\nSol em octil com a Lua (Orbe: 0°46', em movimento subsequente)\nMercúrio em sextil com Urano (Orbe: 0°57', em movimento subsequente)\nVênus em octil com Marte (Orbe: 0°39', em movimento subsequente)\nVênus em sextil com Júpiter (Orbe: 0°43', em movimento subsequente)\nVênus em octil com Netuno (Orbe: 0°05', em movimento subsequente)\nMarte em conjunção com Netuno (\nOrbe: 0°34', em movimento subsequente) Marte em sextil com Plutão (Orbe: 2°08', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°29', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 1°45', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 2°42', em movimento subsequente)\n\nQuincúncio do Ascendente com Vênus (Orbe: 0°23', em movimento)\nQuincúncio do Ascendente com Júpiter (Orbe: 0°20', em movimento)\nQuincúncio do Meio do Céu com Marte (Orbe: 0°22', em movimento)\nOctil do Meio do Céu com Júpiter (Orbe: 1°45', em movimento)\nQuincúncio do Meio do Céu com Netuno (Orbe: 0°56', em movimento)\nQuincúncio do Meio do Céu com Plutão (Orbe: 1°46', em movimento)\nTri-óctil do Fundo do Céu com Júpiter (Orbe: 1°45', em movimento)\nOctil do Nodo Norte com o Sol (Orbe: 2°20', em movimento)\nConjunção do Nodo Norte com a Lua (Orbe: 1°34', em movimento)\nTri-óctil de Lilith com Quíron (Orbe: 1°18', em movimento)\nConjunção de Quíron com o Sol (Orbe: 2°25', em movimento)\nSextil da Fortuna com Marte (Orbe: 0°16', em movimento)\nFortuna em sextil com Netuno (Orbe: 0°17', em movimento de separação)\nFortuna em conjunção com Plutão (Orbe: 2°24', em movimento) Fortuna\nem octil com o Ascendente (Orbe: 0°46', em movimento de separação)\nFortuna em quincúncio com o Meio do Céu (Orbe: 0°38', em movimento)\nFortuna em sextil com o Vértice (Orbe: 2°58', em movimento de separação)\nFortuna em trígono com o Descendente (Orbe: 0°46', em movimento de separação)\nVértice em quadratura com Plutão (Orbe: 0°14', em movimento)\nVértice em sextil com o Nodo Norte (Orbe: 1°33', em movimento)\nVértice em trígono com o Ascendente (Orbe: 2°56', em movimento de separação)\nVértice em trígono com o Meio do Céu (Orbe: 1°31',\nem movimento de separação) Vértice em sextil com o Fundo do Céu (Orbe: 1°31', em movimento de separação)\nVertex Octile DSC (Orb: 2°56', Separando)",
    jogoGerado: [5, 6, 7, 8, 12, 23, 9, 13, 20, 10, 2, 11, 22, 24, 25],
    resultado: [1, 2, 5, 6, 7, 8, 10, 11, 12, 14, 17, 18, 22, 23, 24],
    obs: "",
  },
  {
    id: "h24", concurso: "3661", data: "14/04/2026", hora: "",
    textoMapa: "Sol em Áries 25°02', na 5ª Casa;\nLua em Peixes 21°50', na 4ª Casa;\nMercúrio em Peixes 29°48', na 4ª Casa;\nVênus em Touro 18°49', na 6ª Casa;\nMarte em Áries 4°01', na 4ª Casa;\nJúpiter em Câncer 16°57', na 8ª Casa;\nSaturno em Áries 7°16', na 4ª Casa;\nUrano em Touro 29°25', na 6ª Casa;\nNetuno em Áries 2°43', na 4ª Casa;\nPlutão em Aquário 5°24', na 2ª Casa;\nNodo Norte em Peixes 6°39', retrógrado, na 4ª Casa;\nLilith em Sagitário 12°54', na 12ª Casa;\nQuíron em Áries 26°32', na 5ª Casa;\nFortuna em Capricórnio. 21°21', no\nVértice da 2ª Casa em Touro 5°39', no\nAscendente da 5ª Casa em Sagitário 18°09'\nMeio do Céu em Virgem 4°39'\n\n1ª Casa em Sagitário 18°09'\n2ª Casa em Capricórnio 14°21'\n3ª Casa em Aquário 8°12'\n4ª Casa em Peixes 4°39'\n5ª Casa em Áries 7°50'\n6ª Casa em Touro 15°22'\n7ª Casa em Gêmeos 18°09'\n8ª Casa em Câncer 14°21'\n9ª Casa em Leão 8°12'\n10ª Casa em Virgem 4°39'\n11ª Casa em Libra 7°50'\n12ª Casa em Escorpião 15°22'\n\nLua em octil com Plutão (Orbe: 1°26', separando)\nMercúrio em sextil com Urano (Orbe: 0°23', separando)\nMercúrio em conjunção com Netuno (Orbe: 2°54', aplicando)\nVênus em octil com Marte (Orbe: 0°12', aplicando)\nVênus em sextil com Júpiter (Orbe: 1°51', separando)\nVênus em octil com Netuno (Orbe: 1°05', separando)\nMarte em conjunção com Netuno (Orbe: 1°18', separando)\nMarte em sextil com Plutão (Orbe: 1°22', aplicando)\nJúpiter em octil com Urano (Orbe: 2°32', separando)\nSaturno em sextil com Plutão (Orbe: 1°52', separando)\nNetuno em sextil com Plutão (Orbe: 2°40', aplicando)\n\nQuincúncio de Vênus no Ascendente (Orbe: 0°39', em movimento)\nQuincúncio de Júpiter no Ascendente\n(Orbe: 1°11', em movimento) Octil de Plutão no Ascendente (Orbe: 2°14', em movimento)\nTri-óctil de Plutão no Descendente (Orbe: 2°14', em movimento)\nQuincúncio de Marte no Meio do Céu (Orbe: 0°38', em movimento)\nOctil de Júpiter no Meio do Céu (Orbe: 2°42', em movimento)\nQuincúncio de Saturno no Meio do Céu (Orbe: 2°36', em movimento)\nQuincúncio de Netuno no Meio do Céu (Orbe: 1°56', em movimento)\nQuincúncio de Plutão no Meio do Céu (Orbe: 0°44', em movimento)\nNodo em Oposição ao Meio do Céu (Orbe: 1°59', em movimento)\nTri-óctil de Júpiter no Fundo do Céu (Orbe: 2°42', em movimento)\nNodo em Conjunção com o Fundo do Céu (Orbe:\nLilith em Tri-Óctil com o Sol (Orbe: 2°52', em aplicação) Lilith\nem Tri-Óctil com Quíron (Orbe: 1°22', em separação)\nQuíron em Conjunção com o Sol (Orbe: 1°30', em aplicação)\nFortuna em Sextil com a Lua (Orbe: 0°29', em aplicação)\nFortuna em Trígono com Vênus (Orbe: 2°32', em separação)\nFortuna em Octil com o Nodo (Orbe: 0°18', em aplicação)\nFortuna em Tri-Óctil com o Meio do Céu (Orbe: 1°41', em separação)\nFortuna em Octil com o Fundo do Céu (Orbe: 1°41', em separação)\nVértice em Octil com a Lua (Orbe: 1°11', em aplicação)\nVértice em Quadratura com Plutão (Orbe: 0°15', em separação)\nVértice em Sextil com o Nodo (Orbe: 0°59', em aplicação)\nVértice em Tri-Óctil com o Ascendente (Orbe: 2°30', Separando)\nTrígono do Vértice MC (Orbe: 1°00', Separando)\nSextil do Vértice IC (Orbe: 1°00', Separando)\nOctil do Vértice DSC (Orbe: 2°30', Separando)",
    jogoGerado: [4, 15, 6, 7, 8, 23, 13, 20, 10, 5, 12, 2, 3, 11, 14],
    resultado: [2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 15, 19, 21, 23, 24],
    obs: "",
  },
  {
    id: "h25", concurso: "3662", data: "15/04/2026", hora: "",
    textoMapa: "Sol em Áries 26°01', na 5ª Casa;\nLua em Áries 5°50', na 4ª Casa;\nMercúrio em Áries 1°13', na 4ª Casa;\nVênus em Touro 20°02', na 6ª Casa;\nMarte em Áries 4°48', na 4ª Casa;\nJúpiter em Câncer 17°04', na 8ª Casa;\nSaturno em Áries 7°23', na 4ª Casa;\nUrano em Touro 29°28', na 6ª Casa;\nNetuno em Áries 2°45', na 4ª Casa;\nPlutão em Aquário 5°24', na 2ª Casa;\nNodo Norte em Peixes 6°36', retrógrado, na 4ª Casa;\nLilith em Sagitário 13°01', na 12ª Casa;\nQuíron em Áries 26°36', na 5ª Casa;\nFortuna em Capricórnio 9°17', na 5ª Casa. Vértice da 1ª casa\nem Touro 6°10',\nAscendente na 5ª casa em Sagitário 19°06',\nMeio do Céu em Virgem 5°42'\n\n1ª Casa em Sagitário 19°06'\n2ª Casa em Capricórnio 15°13'\n3ª Casa em Aquário 9°07'\n4ª Casa em Peixes 5°42'\n5ª Casa em Áries 9°01'\n6ª Casa em Touro 16°30'\n7ª Casa em Gêmeos 19°06'\n8ª Casa em Câncer 15°13'\n9ª Casa em Leão 9°07'\n10ª Casa em Virgem 5°42'\n11ª Casa em Libra 9°01'\n12ª Casa em Escorpião 16°30'\n\nLua em octil com Vênus (Orbe: 0°48', separando)\nLua em conjunção com Marte (Orbe: 1°02', separando)\nLua em conjunção com Saturno (Orbe: 1°32', aplicando)\nLua em sextil com Plutão (Orbe: 0°26', separando)\nMercúrio em sextil com Urano (Orbe: 1°45', separando)\nMercúrio em conjunção com Netuno (Orbe: 1°31', aplicando)\nVênus em octil com Marte (Orbe: 0°14', separando)\nVênus em sextil com Júpiter (Orbe: 2°58', separando)\nVênus em octil com Saturno (Orbe: 2°21', aplicando)\nVênus em octil com Netuno (Orbe: 2°17', separando)\nMarte em conjunção com Saturno (Orbe: 2°35', aplicando)\nMarte em conjunção com Netuno (Orbe: 2°03', separando)\nMarte em sextil com Plutão (órbita: 0°36', aproximando-se)\nJúpiter em octil com Urano (órbita: 2°35', separando-se)\nSaturno em sextil com Plutão (órbita: 1°58', separando-se)\nNetuno em sextil com Plutão (órbita: 2°39', aproximando-se)\n\nAscendente em Quincúncio com Vênus (Orbe: 0°55', em movimento)\nAscendente em Quincúncio com Júpiter (Orbe: 2°02', em movimento de separação)\nAscendente em Octil com Plutão (Orbe: 1°17', em movimento)\nDescendente em Tri-Octil com Plutão (Orbe: 1°17', em movimento)\nMeio do Céu em Quincúncio com a Lua (Orbe: 0°08', em movimento)\nMeio do Céu em Quincúncio com Marte (Orbe: 0°54', em movimento de separação)\nMeio do Céu em Quincúncio com Saturno (Orbe: 1°40', em movimento)\nMeio do Céu em Quincúncio com Netuno (Orbe: 2°57', em movimento de separação)\nMeio do Céu em Quincúncio com Plutão (Orbe: 0°17', em movimento de separação)\nMeio do Céu em Oposição ao Nodo Lunar (Orbe: 0°54', em movimento)\nFundo do Céu em Conjunção ao Nodo Lunar (Orbe: 0°54', em movimento)\nLilith em Tri-Octil com o Sol (Orbe:\nLilith em Tri-Óctil com Quíron (Orbe: 1°25', Separando )\nQuíron em Conjunção com o Sol (Orbe: 0°34', Aplicando)\nFortuna em Quadratura com Saturno (Orbe: 1°53', Separando)\nFortuna em Sextil com o Nodo (Orbe: 2°40', Separando)\nVértice em Quadratura com Plutão (Orbe: 0°45', Separando)\nVértice em Sextil com o Nodo (Orbe: 0°26', Aplicando)\nVértice em Tri-Óctil com o Ascendente (Orbe: 2°03', Separando) Vértice em Trígono\ncom o Meio do Céu (Orbe: 0°27', Separando)\nVértice em Sextil com o Fundo do Céu (Orbe: 0°27', Separando)\nVértice em Octil com o Descendente (Orbe: 2°03', Separando)",
    jogoGerado: [9, 6, 7, 8, 23, 13, 20, 10, 4, 12, 17, 25, 5, 11, 1],
    resultado: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 18, 20, 23, 25],
    obs: "",
  },
  {
    id: "h26", concurso: "3663", data: "16/04/2026", hora: "",
    textoMapa: "Sol em Áries 26°59', na 5ª Casa;\nLua em Áries 20°14', na 5ª Casa;\nMercúrio em Áries 2°40', na 4ª Casa;\nVênus em Touro 21°15', na 6ª Casa;\nMarte em Áries 5°34', na 4ª Casa;\nJúpiter em Câncer 17°10', na 8ª Casa;\nSaturno em Áries 7°30', na 4ª Casa;\nUrano em Touro 29°31', na 6ª Casa;\nNetuno em Áries 2°47', na 4ª Casa;\nPlutão em Aquário 5°25', na 2ª Casa;\nNodo Norte em Peixes 6°33', retrógrado, na 3ª Casa;\nLilith em Sagitário 13°07', na 12ª Casa;\nQuíron em Áries 26°39', na 5ª Casa;\nFortuna em Sagitário. 26°48', no\nVértice da 1ª Casa em Touro 6°41', no\nAscendente da 5ª Casa em Sagitário 20°03'\nMC em Virgem 6°45'\n\n1ª Casa em Sagitário 20°03'\n2ª Casa em Capricórnio 16°06'\n3ª Casa em Aquário 10°02'\n4ª Casa em Peixes 6°45'\n5ª Casa em Áries 10°11'\n6ª Casa em Touro 17°36'\n7ª Casa em Gêmeos 20°03'\n8ª Casa em Câncer 16°06'\n9ª Casa em Leão 10°02'\n10ª Casa em Virgem 6°45'\n11ª Casa em Libra 10°11'\n12ª Casa em Escorpião 17°36'\n\nMercúrio em conjunção com Marte (Orbe: 2°54', em movimento subsequente)\nMercúrio em conjunção com Netuno (Orbe: 0°07', em movimento subsequente)\nMercúrio em sextil com Plutão (Orbe: 2°45', em movimento subsequente)\nVênus em octil com Marte (Orbe: 0°40', em movimento subsequente)\nVênus em octil com Saturno (Orbe: 1°14', em movimento subsequente)\nMarte em conjunção com Saturno (Orbe: 1°55', em movimento subsequente)\nMarte em conjunção com Netuno (Orbe: 2°47', em movimento subsequente)\nMarte em sextil com Plutão (Orbe: 0°09', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°39', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 2°05', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 2°37', em movimento subsequente)\n\nAscendente em trígono com a Lua (Orbe: 0°11', em movimento)\nAscendente em quincúncio com Vênus (Orbe: 1°12', em movimento)\nAscendente em quincúncio com Júpiter (Orbe: 2°53', em movimento)\nAscendente em octil com Plutão (Orbe: 0°21', em movimento)\nDescendente em sextil com a Lua (Orbe: 0°11', em movimento)\nDescendente em trígono com Plutão (Orbe: 0°21', em movimento)\nMeio do Céu em trígono com a Lua (Orbe: 1°30', em movimento)\nMeio do Céu em quincúncio com Marte (Orbe: 1°10', em movimento)\nMeio do Céu em quincúncio com Saturno (Orbe: 0°45', em movimento)\nMeio do Céu em quincúncio com Plutão (Orbe: 1°20', em movimento)\nMeio do Céu em oposição ao Nodo Lunar (Orbe: 0°11', em movimento)\nFundo do Céu em octil com a Lua (Orbe: 1°30', Separando)\nIC em Conjunção com o Nodo (Orbe: 0°11', Separando)\nNodo Norte em Octil com a Lua (Orbe: 1°18', Aplicando)\nLilith em Tri-Octil com o Sol (Orbe: 1°08', Aplicando)\nLilith em Tri-Octil com Quíron (Orbe: 1°28', Separando)\nQuíron em Conjunção com o Sol (Orbe: 0°20', Separando)\nFortuna em Trígono com o Sol (Orbe: 0°11', Aplicando)\nFortuna em Quincúncio com Urano (Orbe: 2°42', Aplicando)\nFortuna em Trígono com Quíron (Orbe: 0°09', Separando)\nVértice em Quadratura com Plutão (Orbe: 1°15', Separando)\nVértice em Sextil com o Nodo (Orbe: 0°07', Separando)\nVértice em Tri-Octil com o Ascendente (Orbe: 1°37', Separando)\nTrígono do Vértice MC (Orbe: 0°04', Aplicando)\nSextil do Vértice IC (Orbe: 0°04', Aplicando)\nOctil do Vértice DSC (Orbe: 1°37', Separando)",
    jogoGerado: [4, 6, 17, 23, 25, 10, 12, 15, 19, 22, 5, 7, 11, 1, 21],
    resultado: [1, 3, 4, 5, 6, 10, 12, 14, 17, 19, 20, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h27", concurso: "3664", data: "17/04/2026", hora: "",
    textoMapa: "Sol em Áries 27°58', na 5ª Casa;\nLua em Touro 4°57', na 5ª Casa;\nMercúrio em Áries 4°08', na 4ª Casa;\nVênus em Touro 22°28', na 6ª Casa;\nMarte em Áries 6°21', na 4ª Casa;\nJúpiter em Câncer 17°17', na 8ª Casa;\nSaturno em Áries 7°37', na 4ª Casa;\nUrano em Touro 29°34', na 6ª Casa;\nNetuno em Áries 2°49', na 4ª Casa;\nPlutão em Aquário 5°25', na 2ª Casa;\nNodo Norte em Peixes 6°30', retrógrado, na 3ª Casa;\nLilith em Sagitário 13°14', na 12ª Casa;\nQuíron em Áries 26°43', na 5ª Casa;\nFortuna em Sagitário. 14°01', no Vértice da 12ª Casa\nem Touro 7°11', no\nAscendente da 5ª Casa em Sagitário 21°00'\nMeio do Céu em Virgem 7°48'\n\n1ª Casa em Sagitário 21°00'\n2ª Casa em Capricórnio 16°58'\n3ª Casa em Aquário 10°57'\n4ª Casa em Peixes 7°48'\n5ª Casa em Áries 11°22'\n6ª Casa em Touro 18°43'\n7ª Casa em Gêmeos 21°00'\n8ª Casa em Câncer 16°58'\n9ª Casa em Leão 10°57'\n10ª Casa em Virgem 7°48'\n11ª Casa em Libra 11°22'\n12ª Casa em Escorpião 18°43'\n\nLua em quadratura com Plutão (Orbe: 0°28', em movimento subsequente)\nMercúrio em conjunção com Marte (Orbe: 2°12', em movimento subsequente)\nMercúrio em conjunção com Netuno (Orbe: 1°19', em movimento subsequente)\nMercúrio em sextil com Plutão (Orbe: 1°16', em movimento subsequente)\nVênus em octil com Marte (Orbe: 1°07', em movimento subsequente)\nVênus em octil com Saturno (Orbe: 0°08', em movimento subsequente)\nMarte em conjunção com Saturno (Orbe: 1°16', em movimento subsequente)\nMarte em sextil com Plutão (Orbe: 0°55', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°42', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 2°12', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 2°36', em movimento subsequente)\n\nLua em Tri-Óctil no Ascendente (Orbe: 1°02', Separando)\nVênus em Quincúncio no Ascendente (Orbe: 1°28', Aplicando)\nPlutão em Octil no Ascendente (Orbe: 0°34', Separando)\nLua em Octil no Descendente (Orbe: 1°02', Separando)\nPlutão em Tri-Óctil no Descendente (Orbe: 0°34', Separando)\nLua em Trígono no Meio do Céu (Orbe: 2°50', Separando)\nMarte em Quincúncio no Meio do Céu (Orbe: 1°26', Separando)\nSaturno em Quincúncio no Meio do Céu (Orbe: 0°10', Separando)\nPlutão em Quincúncio no Meio do Céu (Orbe: 2°22', Separando)\nNodo em Oposição ao Meio do Céu (Orbe: 1°17', Separando)\nLua em Sextil no Fundo do Céu (Orbe: 2°50', Separando)\nNodo em Conjunção ao Fundo do Céu (Orbe:\nNodo Norte em sextil com a Lua (Orbe: 1°32', em formação) Lilith\nem tri-óctil com o Sol (Orbe: 0°16', em formação)\nLilith em tri-óctil com Quíron (Orbe: 1°31', em formação)\nQuíron em conjunção com o Sol (Orbe: 1°15', em formação)\nFortuna em tri-óctil com o Sol (Orbe: 1°02', em formação)\nFortuna em conjunção com Lilith (Orbe: 0°46', em formação)\nFortuna em tri-óctil com Quíron (Orbe: 2°18', em formação)\nVértice em conjunção com a Lua (Orbe: 2°14', em formação)\nVértice em quadratura com Plutão (Orbe: 1°45', em formação)\nVértice em sextil com o Nodo Norte (Orbe: 0°41', em formação)\nVértice em tri-óctil com o Ascendente (Orbe:\nTrígono do MC (Orbe: 0°36', Aplicando)\nSextil do IC (Orbe: 0°36', Aplicando)\nOctil do DSC (Orbe: 1°11', Separando )",
    jogoGerado: [2, 6, 23, 10, 4, 7, 11, 15, 25, 22, 18, 1, 12, 20, 14],
    resultado: [1, 2, 4, 5, 6, 7, 10, 11, 12, 16, 18, 19, 20, 22, 23],
    obs: "",
  },
  {
    id: "h28", concurso: "3665", data: "18/04/2026", hora: "",
    textoMapa: "Sol em Áries 28°57', na 5ª Casa;\nLua em Touro 19°51', na 6ª Casa;\nMercúrio em Áries 5°39', na 4ª Casa;\nVênus em Touro 23°42', na 6ª Casa;\nMarte em Áries 7°07', na 4ª Casa;\nJúpiter em Câncer 17°23', na 7ª Casa;\nSaturno em Áries 7°45', na 4ª Casa;\nUrano em Touro 29°37', na 6ª Casa;\nNetuno em Áries 2°51', na 4ª Casa;\nPlutão em Aquário 5°26', na 2ª Casa;\nNodo Norte em Peixes 6°27', retrógrado, na 3ª Casa;\nLilith em Sagitário 13°21', na 12ª Casa;\nQuíron em Áries 26°46', na 5ª Casa;\nFortuna em Sagitário. 1°02', no\nVértice da 12ª Casa em Touro 7°41', no\nAscendente da 5ª Casa em Sagitário 21°56'\nMC em Virgem 8°51'\n\n1ª Casa em Sagitário 21°56'\n2ª Casa em Capricórnio 17°51'\n3ª Casa em Aquário 11°52'\n4ª Casa em Peixes 8°51'\n5ª Casa em Áries 12°33'\n6ª Casa em Touro 19°49'\n7ª Casa em Gêmeos 21°56'\n8ª Casa em Câncer 17°51'\n9ª Casa em Leão 11°52'\n10ª Casa em Virgem 8°51'\n11ª Casa em Libra 12°33'\n12ª Casa em Escorpião 19°49'\n\nLua em octil com Mercúrio (Orbe: 0°47', em movimento crescente)\nLua em octil com Marte (Orbe: 2°16', em movimento crescente)\nLua em sextil com Júpiter (Orbe: 2°27', em movimento crescente)\nLua em octil com Saturno (Orbe: 2°53', em movimento crescente)\nLua em octil com Netuno (Orbe: 1°59', em movimento crescente)\nMercúrio em conjunção com Marte (Orbe: 1°28', em movimento crescente)\nMercúrio em conjunção com Saturno (Orbe: 2°05', em movimento crescente)\nMercúrio em conjunção com Netuno (Orbe: 2°47', em movimento crescente)\nMercúrio em sextil com Plutão (Orbe: 0°12', em movimento crescente)\nVênus em octil com Marte (Orbe: 1°34', em movimento crescente)\nVênus em octil com Saturno (Orbe: 0°57', em movimento crescente)\nMarte em conjunção com Saturno (Orbe: 0°37', em movimento crescente)\nMarte em sextil Plutão (Orbe: 1°41', Separando)\nJúpiter em Octil com Urano (Orbe: 2°46', Separando)\nSaturno em Sextil com Plutão (Orbe: 2°18', Separando)\nNetuno em Sextil com Plutão (Orbe: 2°34', Aplicando)\n\nLua em Quincúncio com o Ascendente (Orbe: 2°05', Separando)\nVênus em Quincúncio com o Ascendente (Orbe: 1°45', Aproximando)\nPlutão em Octil com o Ascendente (Orbe: 1°30', Separando)\nPlutão em Tri-Octil com o Descendente (Orbe: 1°30', Separando)\nMarte em Quincúncio com o Meio do Céu (Orbe: 1°43', Separando)\nSaturno em Quincúncio com o Meio do Céu (Orbe: 1°06', Separando)\nNodo em Oposição ao Meio do Céu (Orbe: 2°24', Separando)\nQuíron em Tri-Octil com o Meio do Céu (Orbe: 2°55', Aproximando)\nNodo em Conjunção com o Fundo do Céu (Orbe: 2°24', Separando)\nQuíron em Octil com o Fundo do Céu (Orbe: 2°55', Aproximando)\nLilith em Tri-Octil com o Sol (Orbe: 0°35', Separando)\nLilith Tri-óctil de Quíron (Orbe: 1°34', Separando)\nConjunção de Quíron com o Sol (Orbe: 2°10', Separando)\nQuincúncio da Fortuna com o Sol (Orbe: 2°05', Separando)\nTri-óctil da Fortuna com Júpiter (Orbe: 1°21', Aplicando)\nOposição da Fortuna com Urano (Orbe: 1°24', Separando)\nTrígono da Fortuna com Netuno (Orbe: 1°49', Aplicando)\nTrígono da Fortuna com o Vértice (Orbe: 1°02', Separando)\nQuadratura do Vértice com Plutão (Orbe: 2°15', Separando)\nSextil do Vértice com o Nodo Norte (Orbe: 1°14', Separando)\nTri-óctil do Vértice com o Ascendente (Orbe: 0°45', Separando) Trígono do Vértice com o Meio do Céu\n(Orbe: 1°09', Aplicando)\nSextil do Vértice com o Fundo do Céu (Orbe: 1°09', Aplicando)\nVertex Octile DSC (Orb: 0°45', Separando)",
    jogoGerado: [6, 23, 10, 25, 4, 5, 7, 11, 12, 22, 18, 1, 14, 20, 3],
    resultado: [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 16, 18, 22, 23, 25],
    obs: "",
  },
  {
    id: "h29", concurso: "3666", data: "20/04/2026", hora: "",
    textoMapa: "Sol em Touro 0°54', na 5ª Casa;\nLua em Gêmeos 19°37', na 6ª Casa;\nMercúrio em Áries 8°45', na 4ª Casa;\nVênus em Touro 26°08', na 6ª Casa;\nMarte em Áries 8°40', na 4ª Casa;\nJúpiter em Câncer 17°37', na 7ª Casa;\nSaturno em Áries 7°59', na 4ª Casa;\nUrano em Touro 29°43', na 6ª Casa;\nNetuno em Áries 2°55', na 4ª Casa;\nPlutão em Aquário 5°27', na 2ª Casa;\nNodo Norte em Peixes 6°20', retrógrado, na 3ª Casa;\nLilith em Sagitário 13°34', na 12ª Casa;\nQuíron em Áries 26°54', na 5ª Casa;\nFortuna em Escorpião 5°05', na 6ª Casa. Vértice da 11ª casa\nem Touro a 8°42',\nAscendente na 5ª casa em Sagitário a 23°48',\nMeio do Céu em Virgem a 10°57'.\n\n1ª Casa em Sagitário 23°48'\n2ª Casa em Capricórnio 19°35'\n3ª Casa em Aquário 13°43'\n4ª Casa em Peixes 10°57'\n5ª Casa em Áries 14°53'\n6ª Casa em Touro 22°00'\n7ª Casa em Gêmeos 23°48'\n8ª Casa em Câncer 19°35'\n9ª Casa em Leão 13°43'\n10ª Casa em Virgem 10°57'\n11ª Casa em Libra 14°53'\n12ª Casa em Escorpião 22°00'\n\nLua em trí-óctil com Plutão (Orbe: 0°49', em movimento subsequente)\nMercúrio em octil com Vênus (Orbe: 2°23', em movimento subsequente)\nMercúrio em conjunção com Marte (Orbe: 0°04', em movimento subsequente)\nMercúrio em conjunção com Saturno (Orbe: 0°45', em movimento subsequente)\nVênus em octil com Marte (Orbe: 2°27', em movimento subsequente)\nMarte em conjunção com Saturno (Orbe: 0°41', em movimento subsequente)\nJúpiter em octil com Urano (Orbe: 2°53', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 2°32', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 2°31', em movimento subsequente)\n\nQuincúncio do Ascendente com Vênus (Orbe: 2°20', em movimento)\nQuincúncio do Meio do Céu com Mercúrio (Orbe: 2°12', em movimento)\nQuincúncio do Meio do Céu com Marte (Orbe: 2°17', em movimento)\nQuincúncio do Meio do Céu com Saturno (Orbe: 2°58', em movimento)\nQuadratura do Meio do Céu com Lilith (Orbe: 2°37', em movimento)\nTri-óctil do Meio do Céu com Quíron (Orbe: 0°56', em movimento)\nQuadratura do Fundo do Céu com Lilith (Orbe: 2°37', em movimento)\nOctil do Fundo do Céu com Quíron (Orbe: 0°56', em movimento)\nTri-óctil de Lilith com o Sol (Orbe: 2°19', em movimento)\nTri-óctil de Lilith com Quíron (Orbe: 1°40', em movimento) Tri-óctil da Lua com a Fortuna (Orbe: 0°27', em movimento) Quincúncio da Fortuna com Saturno (Orbe: 2°54',\nem movimento) Fortuna em Quincúncio com Netuno (Orbe: 2°09', Separando) Fortuna em Quadratura com Plutão (Orbe: 0°22', Em\naplicação ) Fortuna em Trígono com o Nodo (Orbe: 1°15', Em aplicação) Vértice em Sextil com o Nodo (Orbe: 2°22', Separando) Vértice em Trígono-Óctil com o Ascendente (Orbe: 0°05', Separando) Vértice em Trígono com o Meio do Céu (Orbe: 2°15', Em aplicação) Vértice em Sextil com o Fundo do Céu (Orbe: 2°15', Em aplicação) Vértice em Óctil com o Descendente (Orbe: 0°05', Separando)",
    jogoGerado: [6, 23, 5, 10, 12, 16, 15, 22, 19, 1, 7, 4, 9, 11, 21],
    resultado: [1, 4, 6, 7, 9, 12, 14, 15, 16, 17, 19, 20, 21, 22, 23],
    obs: "",
  },
  {
    id: "h30", concurso: "3667", data: "22/04/2026", hora: "",
    textoMapa: "Sol em Touro 2°51', na 5ª Casa;\nLua em Câncer 18°31', na 7ª Casa;\nMercúrio em Áries 11°58', na 4ª Casa;\nVênus em Touro 28°34', na 6ª Casa;\nMarte em Áries 10°13', na 4ª Casa;\nJúpiter em Câncer 17°52', na 7ª Casa;\nSaturno em Áries 8°13', na 4ª Casa;\nUrano em Touro 29°50', na 6ª Casa;\nNetuno em Áries 2°59', na 4ª Casa;\nPlutão em Aquário 5°27', na 2ª Casa;\nNodo Norte em Peixes 6°14', retrógrado, na 3ª Casa;\nLilith em Sagitário 13°48', na 12ª Casa;\nQuíron em Áries 27°01', na 5ª Casa;\nFortuna em Libra 9°58', na 5ª Casa. Vértice da 10ª casa\nem Touro 9°43',\nAscendente na 5ª casa em Sagitário 25°38',\nMeio do Céu em Virgem 13°04'\n\n1ª Casa em Sagitário 25°38'\n2ª Casa em Capricórnio 21°20'\n3ª Casa em Aquário 15°33'\n4ª Casa em Peixes 13°04'\n5ª Casa em Áries 17°14'\n6ª Casa em Touro 24°09'\n7ª Casa em Gêmeos 25°38'\n8ª Casa em Câncer 21°20'\n9ª Casa em Leão 15°33'\n10ª Casa em Virgem 13°04'\n11ª Casa em Libra 17°14'\n12ª Casa em Escorpião 24°09'\n\nSol em quadratura com Plutão (Orbe: 2°36', em movimento)\nLua em conjunção com Júpiter (Orbe: 0°39', em movimento de separação)\nMercúrio em octil com Vênus (Orbe: 1°36', em movimento)\nMercúrio em conjunção com Marte (Orbe: 1°44', em movimento de separação)\nMercúrio em octil com Urano (Orbe: 2°52', em movimento)\nVênus em conjunção com Urano (Orbe: 1°15', em movimento)\nMarte em conjunção com Saturno (Orbe: 1°59', em movimento de separação)\nSaturno em sextil com Plutão (Orbe: 2°45', em movimento de separação)\nNetuno em sextil com Plutão (Orbe: 2°28', em movimento)\n\nQuincúncio do Ascendente com Vênus (Orbe: 2°55', em movimento)\nTrígono do Ascendente com Quíron (Orbe: 1°22', em movimento)\nSextil do Descendente com Quíron (Orbe: 1°22', em movimento)\nQuincúncio do Meio do Céu com Mercúrio (Orbe: 1°06', em movimento)\nQuincúncio do Meio do Céu com Marte (Orbe: 2°51', em movimento)\nQuadratura do Meio do Céu com Lilith (Orbe: 0°43', em movimento)\nTri-óctilo do Meio do Céu com Quíron (Orbe: 1°03', em movimento)\nQuadratura do Fundo do Céu com Lilith (Orbe: 0°43', em movimento)\nOctil do Fundo do Céu com Quíron (Orbe: 1°03', em movimento)\nTri-óctilo do Nodo Norte com a Lua (Orbe: 2°42', em movimento)\nTrígono de Lilith com Mercúrio (Orbe: 1°50', em movimento)\nTri-óctilo de Lilith com Quíron (Orbe:\nOposição de Fortuna a Mercúrio (Orbe: 1°59', em movimento) Oposição\nde Fortuna a Marte (Orbe: 0°14', em movimento)\nOposição de Fortuna a Saturno (Orbe: 1°45', em movimento)\nTri-Octil do Ascendente no Vértice (Orbe: 0°55', em movimento)\nOctil do Descendente no Vértice (Orbe: 0°55', em movimento)",
    jogoGerado: [5, 14, 10, 25, 23, 4, 7, 9, 15, 22, 3, 1, 21, 20, 6],
    resultado: [1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 19, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h31", concurso: "3668", data: "23/04/2026", hora: "",
    textoMapa: "Sol em Touro 3°50', na 5ª Casa;\nLua em Leão 2°29', na 8ª Casa;\nMercúrio em Áries 13°37', na 4ª Casa;\nVênus em Touro 29°47', na 6ª Casa;\nMarte em Áries 10°59', na 4ª Casa;\nJúpiter em Câncer 17°59', na 7ª Casa;\nSaturno em Áries 8°20', na 4ª Casa;\nUrano em Touro 29°53', na 6ª Casa;\nNetuno em Áries 3°01', na 4ª Casa;\nPlutão em Aquário 5°28', na 2ª Casa;\nNodo Norte em Peixes 6°11', retrógrado, na 3ª Casa;\nLilith em Sagitário 13°55', na 12ª Casa;\nQuíron em Áries 27°04', na 5ª Casa;\nFortuna em Virgem 27°54'. No\nvértice da 10ª casa em Touro a 10°13', no\nAscendente da 5ª casa em Sagitário a 26°33',\nMeio do Céu em Virgem a 14°08'.\n\n1ª Casa em Sagitário 26°33'\n2ª Casa em Capricórnio 22°12'\n3ª Casa em Aquário 16°29'\n4ª Casa em Peixes 14°08'\n5ª Casa em Áries 18°23'\n6ª Casa em Touro 25°13'\n7ª Casa em Gêmeos 26°33'\n8ª Casa em Câncer 22°12'\n9ª Casa em Leão 16°29'\n10ª Casa em Virgem 14°08'\n11ª Casa em Libra 18°23'\n12ª Casa em Escorpião 25°13'\n\nSol em quadratura com a Lua (Orbe: 1°20', em movimento)\nSol em quadratura com Plutão (Orbe: 1°38', em movimento)\nLua em sextil com Vênus (Orbe: 2°41', em movimento)\nLua em sextil com Urano (Orbe: 2°35', em movimento)\nLua em trígono com Netuno (Orbe: 0°32', em movimento)\nLua em oposição a Plutão (Orbe: 2°59', em movimento)\nMercúrio em octil com Vênus (Orbe: 1°10', em movimento)\nMercúrio em conjunção com Marte (Orbe: 2°37', em movimento)\nMercúrio em octil com Urano (Orbe: 1°16', em movimento)\nVênus em conjunção com Urano (Orbe: 0°05', em movimento)\nMarte em conjunção com Saturno (Orbe: 2°39', em movimento)\nSaturno em sextil com Plutão (Orbe: 2°52', em movimento)\nNetuno em sextil com Plutão (Orbe: 2°26', Aplicando)\n\nAscendente em trígono com Quíron (Orbe: 0°31', em movimento)\nDescendente em sextil com Quíron (Orbe: 0°31', em movimento)\nMeio do Céu em quincúncio com Mercúrio (Orbe: 0°31', em movimento)\nMeio do Céu em quadratura com Lilith (Orbe: 0°13', em movimento)\nMeio do Céu em trígono e octil com Quíron (Orbe: 2°03', em movimento)\nFundo do Céu em quadratura com Lilith (Orbe: 0°13', em movimento)\nFundo do Céu em octil com Quíron (Orbe: 2°03', em movimento)\nNodo Norte em sextil com o Sol (Orbe: 2°21', em movimento)\nLilith em trígono com Mercúrio (Orbe: 0°17', em movimento)\nLilith em trígono com Marte (Orbe: 2°55', em movimento)\nLilith em trígono e octil com Quíron (Orbe: 1°50', em movimento)\nFortuna em trígono com Vênus (Orbe: 1°52', em movimento)\nFortuna Trígono com Urano (Orbe: 1°58', Aplicando)\nFortuna em Quincúncio com Quíron (Orbe: 0°49', Separando)\nFortuna em Quadratura com o Ascendente (Orbe: 1°20', Separando)\nFortuna em Oposição com o Vértice (Orbe: 2°05', Separando)\nFortuna em Quadratura com o Descendente (Orbe: 1°20', Separando)\nVértice em Tri-Óctilo com o Ascendente (Orbe: 1°20', Separando)\nVértice em Óctilo com o Descendente (Orbe: 1°20', Separando)",
    jogoGerado: [21, 10, 13, 9, 15, 23, 11, 2, 3, 24, 22, 1, 6, 4, 7],
    resultado: [1, 2, 3, 5, 7, 8, 9, 10, 11, 13, 15, 17, 18, 21, 24],
    obs: "",
  },
  {
    id: "h32", concurso: "3669", data: "24/04/2026", hora: "",
    textoMapa: "Sol em Touro 4°48', na 5ª Casa;\nLua em Leão 16°06', na 8ª Casa;\nMercúrio em Áries 15°17', na 4ª Casa;\nVênus em Gêmeos 1°00', na 6ª Casa;\nMarte em Áries 11°45', na 4ª Casa;\nJúpiter em Câncer 18°06', na 7ª Casa;\nSaturno em Áries 8°27', na 4ª Casa;\nUrano em Touro 29°56', na 6ª Casa;\nNetuno em Áries 3°03', na 4ª Casa;\nPlutão em Aquário 5°28', na 2ª Casa;\nNodo Norte em Peixes 6°08', retrógrado, na 3ª Casa;\nLilith em Sagitário 14°01', na 12ª Casa;\nQuíron em Áries 27°08', na 5ª Casa;\nFortuna em Virgem 16°10', na 5ª Casa. Vértice da 10ª casa\nem Touro a 10°43',\nAscendente na 5ª casa em Sagitário a 27°28',\nMeio do Céu em Virgem a 15°12'.\n\n1ª Casa em Sagitário 27°28'\n2ª Casa em Capricórnio 23°04'\n3ª Casa em Aquário 17°25'\n4ª Casa em Peixes 15°12'\n5ª Casa em Áries 19°33'\n6ª Casa em Touro 26°17'\n7ª Casa em Gêmeos 27°28'\n8ª Casa em Câncer 23°04'\n9ª Casa em Leão 17°25'\n10ª Casa em Virgem 15°12'\n11ª Casa em Libra 19°33'\n12ª Casa em Escorpião 26°17'\n\nSol em quadratura com Plutão (Orbe: 0°40', em movimento subsequente)\nLua em trígono com Mercúrio (Orbe: 0°48', em movimento subsequente)\nLua em trígono octil com Netuno (Orbe: 1°57', em movimento subsequente)\nMercúrio em octil com Vênus (Orbe: 0°42', em movimento subsequente)\nMercúrio em quadratura com Júpiter (Orbe: 2°49', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 0°21', em movimento subsequente)\nVênus em octil com Júpiter (Orbe: 2°06', em movimento subsequente)\nVênus em conjunção com Urano (Orbe: 1°03', em movimento subsequente)\nVênus em sextil com Netuno (Orbe: 2°03', em movimento subsequente)\nSaturno em sextil com Plutão (Orbe: 2°58', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 2°24', em movimento subsequente)\n\nAscendente em Quincúncio com Urano (Orbe: 2°27', em movimento)\nAscendente em Trígono com Quíron (Orbe: 0°20', em movimento)\nDescendente em Sextil com Quíron (Orbe: 0°20', em movimento)\nMeio do Céu em Quincúncio com Mercúrio (Orbe: 0°05', em movimento) Meio\ndo Céu em Sextil com Júpiter (Orbe: 2°54', em movimento) Meio do Céu\nem Quadratura com Lilith (Orbe: 1°10', em movimento)\nFundo do Céu em Quincúncio com a Lua (Orbe: 0°54', em movimento)\nFundo do Céu em Trígono com Júpiter (Orbe: 2°54', em movimento)\nFundo do Céu em Quadratura com Lilith (Orbe: 1°10', em movimento)\nNodo Norte em Sextil com o Sol (Orbe: 1°19', em movimento)\nLilith em Trígono com a Lua (Orbe: 2°04', em movimento)\nLilith em Trígono com Mercúrio (Orbe: 1°16', em movimento)\nLilith em Trígono com Marte (Orbe: 2°15', Aplicando)\nLilith Tri-Octil Quíron (Orbe: 1°53', Separando)\nFortuna Quincúncio Mercúrio (Orbe: 0°53', Separando)\nFortuna Sextil Júpiter (Orbe: 1°55', Aplicando)\nFortuna Quadratura Lilith (Orbe: 2°09', Separando)\nFortuna Conjunção MC (Orbe: 0°58', Separando)\nFortuna Oposição IC (Orbe: 0°58', Separando)\nVertex Tri-Octil Ascendente (Orbe: 1°44', Separando)\nVertex Octil DSC (Orbe: 1°44', Separando)",
    jogoGerado: [23, 10, 1, 5, 11, 15, 2, 3, 9, 24, 17, 8, 7, 25, 6],
    resultado: [2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 22, 23, 24],
    obs: "",
  },
  {
    id: "h33", concurso: "3670", data: "25/04/2026", hora: "",
    textoMapa: "Sol em Touro 5°47', na 5ª Casa;\nLua em Leão 29°24', na 9ª Casa;\nMercúrio em Áries 17°00', na 4ª Casa;\nVênus em Gêmeos 2°13', na 6ª Casa;\nMarte em Áries 12°32', na 4ª Casa;\nJúpiter em Câncer 18°14', na 7ª Casa;\nSaturno em Áries 8°34', na 4ª Casa;\nUrano em Touro 29°59', na 6ª Casa;\nNetuno em Áries 3°05', na 4ª Casa;\nPlutão em Aquário 5°29', na 2ª Casa;\nNodo Norte em Peixes 6°04', retrógrado, na 3ª Casa;\nLilith em Sagitário 14°08', na 12ª Casa;\nQuíron em Áries 27°12', na 5ª Casa;\nFortuna em Virgem 4°45', na 5ª Casa. Vértice da 9ª casa\nem Touro a 11°14',\nAscendente na 5ª casa em Sagitário a 28°23',\nMeio do Céu em Virgem a 16°16'.\n\n1ª Casa em Sagitário 28°23'\n2ª Casa em Capricórnio 23°56'\n3ª Casa em Aquário 18°21'\n4ª Casa em Peixes 16°16'\n5ª Casa em Áries 20°42'\n6ª Casa em Touro 27°21'\n7ª Casa em Gêmeos 28°23'\n8ª Casa em Câncer 23°56'\n9ª Casa em Leão 18°21'\n10ª Casa em Virgem 16°16'\n11ª Casa em Libra 20°42'\n12ª Casa em Escorpião 27°21'\n\nSol em quadratura com Plutão (Orbe: 0°18', Separando)\nLua em trí-óctil com Mercúrio (Orbe: 2°35', Aplicando)\nLua em quadratura com Vênus (Orbe: 2°48', Aplicando)\nLua em trí-óctil com Marte (Orbe: 1°52', Separando)\nLua em quadratura com Urano (Orbe: 0°35', Aplicando)\nMercúrio em octil com Vênus (Orbe: 0°13', Aplicando)\nMercúrio em quadratura com Júpiter (Orbe: 1°14', Aplicando)\nMercúrio em octil com Urano (Orbe: 2°00', Separando)\nVênus em octil com Júpiter (Orbe: 1°01', Aplicando)\nVênus em conjunção com Urano (Orbe: 2°13', Separando)\nVênus em sextil com Netuno (Orbe: 0°52', Aplicando)\nMarte em octil com Urano (Orbe: 2°27', Aplicando)\nNetuno em sextil Plutão (Orbe: 2°23', em processo de aplicação)\n\nAscendente em trígono com a Lua (Orbe: 1°01', em movimento)\nAscendente em quincúncio com Urano (Orbe: 1°36', em movimento)\nAscendente em trígono com Quíron (Orbe: 1°11', em movimento)\nDescendente em sextil com a Lua (Orbe: 1°01', em movimento)\nDescendente em sextil com Quíron (Orbe: 1°11', em movimento)\nMeio do Céu em quincúncio com Mercúrio (Orbe: 0°44', em movimento)\nMeio do Céu em sextil com Júpiter (Orbe: 1°58', em movimento) Meio\ndo Céu em quadratura com Lilith (Orbe: 2°07', em movimento)\nFundo do Céu em trígono com Júpiter (Orbe: 1°58', em movimento)\nFundo do Céu em quadratura com Lilith (Orbe: 2°07', em movimento)\nNodo Norte em sextil com o Sol (Orbe: 0°17', em movimento)\nNodo Norte em trígono-óctil com Júpiter (Orbe: 2°50', em movimento)\nLilith Trígono de Mercúrio (Orbe: 2°51', Separando)\nLilith Trígono de Marte (Orbe: 1°36', Aplicando)\nLilith Trígono-Óctil de Quíron (Orbe: 1°56', Separando)\nQuíron Trígono da Lua (Orbe: 2°12', Separando)\nFortuna Trígono do Sol (Orbe: 1°01', Aplicando)\nFortuna Trígono-Óctil de Mercúrio (Orbe: 2°45', Separando)\nFortuna Quadratura de Vênus (Orbe: 2°32', Separando)\nFortuna Octil de Júpiter (Orbe: 1°31', Separando)\nFortuna Quincúncio de Netuno (Orbe: 1°40', Separando)\nFortuna Quincúncio de Plutão (Orbe: 0°43', Aplicando)\nFortuna Oposição ao Nodo Lunar (Orbe: 1°19', Aplicando)\nVertex Quincúncio de Lilith (Orbe: 2°54', Aplicando)\nVertex Tri-Octile Ascendente (Orbe: 2°09', Separando)\nVertex Octile DSC (Orbe: 2°09', Separando)",
    jogoGerado: [5, 15, 10, 1, 9, 23, 3, 4, 11, 21, 13, 24, 19, 17, 8],
    resultado: [1, 2, 3, 5, 6, 10, 11, 14, 15, 17, 18, 19, 21, 23, 24],
    obs: "",
  },
  {
    id: "h34", concurso: "3671", data: "27/04/2026", hora: "",
    textoMapa: "Sol em Touro 7°43', na 5ª Casa;\nLua em Virgem 25°13', na 10ª Casa;\nMercúrio em Áries 20°30', na 4ª Casa;\nVênus em Gêmeos 4°39', na 6ª Casa;\nMarte em Áries 14°04', na 4ª Casa;\nJúpiter em Câncer 18°30', na 7ª Casa;\nSaturno em Áries 8°48', na 4ª Casa;\nUrano em Gêmeos 0°06', na 6ª Casa;\nNetuno em Áries 3°09', na 4ª Casa;\nPlutão em Aquário 5°29', na 2ª Casa;\nNodo Norte em Peixes 5°58', retrógrado, na 3ª Casa;\nLilith em Sagitário 14°21', na 12ª Casa;\nQuíron em Áries 27°19', na 5ª Casa;\nFortuna em Leão 12°42', na 8ª Casa. Vértice da casa\nem Touro 12°14',\nAscendente na 5ª casa em Capricórnio 0°12',\nMeio do Céu em Virgem 18°23'\n\n1ª Casa em Capricórnio 0°12'\n2ª Casa em Capricórnio 25°41'\n3ª Casa em Aquário 20°13'\n4ª Casa em Peixes 18°23'\n5ª Casa em Áries 23°01'\n6ª Casa em Touro 29°26'\n7ª Casa em Câncer 0°12'\n8ª Casa em Câncer 25°41'\n9ª Casa em Leão 20°13'\n10ª Casa em Virgem 18°23'\n11ª Casa em Libra 23°01'\n12ª Casa em Escorpião 29°26'\n\nSol em tríodo-óctil com a Lua (Orbe: 2°30', separando)\nSol em quadratura com Plutão (Orbe: 2°14', separando)\nMercúrio em octil com Vênus (Orbe: 0°51', separando)\nMercúrio em quadratura com Júpiter (Orbe: 1°59', separando)\nVênus em octil com Júpiter (Orbe: 1°08', separando)\nVênus em sextil com Netuno (Orbe: 1°29', separando)\nVênus em trígono com Plutão (Orbe: 0°50', aplicando)\nMarte em octil com Urano (Orbe: 1°02', aplicando)\nNetuno em sextil com Plutão (Orbe: 2°19', aplicando)\n\nAscendente em Quincúncio com Urano (Orbe: 0°05', Separando)\nAscendente em Quadratura com Netuno (Orbe: 2°57', Aplicando)\nAscendente em Trígono com Quíron (Orbe: 2°53', Separando)\nDescendente em Quadratura com Netuno (Orbe: 2°57', Aplicando)\nDescendente em Sextil com Quíron (Orbe: 2°53', Separando)\nMeio do Céu em Quincúncio com Mercúrio (Orbe: 2°06', Aplicando)\nMeio do Céu em Sextil com Júpiter (Orbe: 0°06', Aplicando)\nMeio do Céu em Tri-Octil com Plutão (Orbe: 2°05', Aplicando)\nFundo do Céu em Trígono com Júpiter (Orbe: 0°06', Aplicando) Fundo\ndo Céu em Octil com Plutão (Orbe: 2°05', Aplicando)\nNodo Norte em Sextil com o Sol (Orbe: 1°45', Separando)\nNodo Norte em Octil com Mercúrio (Orbe:\nNodo Norte em quadratura com Vênus (Orbe: 1°19', em processo de aplicação) Nodo\nNorte em trígono com Júpiter (Orbe: 2°28', em processo de aplicação)\nLilith em trígono com Marte (Orbe: 0°17', em processo de aplicação)\nLilith em trígono com Quíron (Orbe: 2°02', em processo de separação)\nQuíron em quincúncio com a Lua (Orbe: 2°05', em processo de aplicação)\nLua em octil com a Fortuna (Orbe: 2°28', em processo de separação)\nTrígono com Marte em trígono com a Fortuna (Orbe: 1°22', em processo de aplicação) Trígono\ncom Lilith em trígono com a Fortuna (Orbe: 1°39', em processo de aplicação)\nTriógono com o Ascendente em trígono com a Fortuna (Orbe: 2°30', em processo de separação)\nTriógono com o Vértice em trígono com a Fortuna (Orbe: 2°17', em processo de separação)\nDescendente em octil com a Fortuna (Orbe: 2°30', em processo de separação)\nVértice Lua em Tri-Octil (Orbe: 2°00', Separando)\nLilith em Quincúncio no Vértice (Orbe: 2°07', Aplicando)\nAscendente em Tri-Octil no Vértice (Orbe: 2°58', Separando)\nDescendente em Octil no Vértice (Orbe: 2°58', Separando)",
    jogoGerado: [7, 10, 1, 16, 13, 5, 9, 11, 20, 23, 3, 15, 21, 24, 6],
    resultado: [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 17, 18, 21],
    obs: "",
  },
  {
    id: "h35", concurso: "3672", data: "28/04/2026", hora: "",
    textoMapa: "Sol em Touro 8°42', na 5ª Casa;\nLua em Libra 7°49', na 10ª Casa;\nMercúrio em Áries 22°17', na 4ª Casa;\nVênus em Gêmeos 5°51', na 6ª Casa;\nMarte em Áries 14°50', na 4ª Casa;\nJúpiter em Câncer 18°38', na 7ª Casa;\nSaturno em Áries 8°55', na 4ª Casa;\nUrano em Gêmeos 0°09', na 5ª Casa;\nNetuno em Áries 3°11', na 4ª Casa;\nPlutão em Aquário 5°29', na 2ª Casa;\nNodo Norte em Peixes 5°55', retrógrado, na 3ª Casa;\nLilith em Sagitário 14°28', na 12ª Casa;\nQuíron em Áries 27°22', na 5ª Casa;\nFortuna em Leão 1°58', na 8ª Casa;\nVertex em Touro 12°44', na 5ª Casa,\nAscendente em Capricórnio 1°06',\nMeio do Céu em Virgem 19°28'\n\n1ª Casa em Capricórnio 1°06'\n2ª Casa em Capricórnio 26°33'\n3ª Casa em Aquário 21°09'\n4ª Casa em Peixes 19°28'\n5ª Casa em Áries 24°10'\n6ª Casa em Gêmeos 0°28'\n7ª Casa em Câncer 1°06'\n8ª Casa em Câncer 26°33'\n9ª Casa em Leão 21°09'\n10ª Casa em Virgem 19°28'\n11ª Casa em Libra 24°10'\n12ª Casa em Sagitário 0°28'\n\nSol em Quincúncio com a Lua (Orbe: 0°52', em movimento subsequente)\nLua em Trígono com Vênus (Orbe: 1°57', em movimento subsequente)\nLua em Oposição com Saturno (Orbe: 1°05', em movimento subsequente)\nLua em Trígono com Plutão (Orbe: 2°19', em movimento subsequente)\nMercúrio em Octil com\nVênus (Orbe: 1°25', em movimento subsequente) Vênus em Octil com Júpiter (\nOrbe: 2°13', em movimento subsequente) Vênus em Sextil com Netuno (Orbe: 2°40', em movimento subsequente)\nVênus em Trígono com Plutão (Orbe: 0°22', em movimento subsequente)\nMarte em Octil com Urano (Orbe: 0°19', em movimento subsequente)\nNetuno em Sextil com Plutão (Orbe: 2°18', em movimento subsequente)\n\nAscendente em Quincúncio com Urano (Orbe: 0°56', Separando)\nAscendente em Quadratura com Netuno (Orbe: 2°05', Aplicando)\nDescendente em Quadratura com Netuno (Orbe: 2°05', Aplicando)\nMeio do Céu em Quincúncio com Mercúrio (Orbe: 2°49', Aplicando)\nMeio do Céu em Sextil com Júpiter (Orbe: 0°49', Separando)\nMeio do Céu em Trígono e Octil com Plutão (Orbe: 1°01', Aplicando)\nFundo do Céu em Trígono com Júpiter (Orbe: 0°49', Separando)\nFundo do Céu em Octil com Plutão (Orbe: 1°01', Aplicando)\nNodo Norte em Sextil com o Sol (Orbe: 2°46', Separando)\nNodo Norte em Quincúncio com a Lua (Orbe: 1°54', Separando)\nNodo Norte em Octil com Mercúrio (Orbe: 1°22', Separando)\nNodo Norte em Quadratura com Vênus (Orbe:\nNodo Norte em trígono com Júpiter (Orbe: 2°16', em trígono )\nLilith em trígono com Marte (Orbe: 0°21', em separação)\nLilith em trígono com Quíron (Orbe: 2°05', em separação)\nFortuna em sextil com Urano (Orbe: 1°49', em separação)\nFortuna em trígono com Netuno (Orbe: 1°12', em trígono)\nFortuna em trígono com Lilith (Orbe: 2°30', em separação)\nFortuna em quincúncio com o Ascendente (Orbe: 0°52', em separação)\nFortuna em óctil com o Meio do Céu (Orbe: 2°29', em trígono)\nFortuna em trígono com o Vértice (Orbe: 1°58', em separação)\nFortuna em trígono com o Fundo do Céu (Orbe: 2°29', em trígono)\nVértice em quincúncio com Lilith (Orbe: 1°44', em trígono)",
    jogoGerado: [11, 7, 20, 10, 25, 1, 5, 23, 3, 16, 21, 15, 24, 6, 12],
    resultado: [1, 3, 5, 7, 9, 10, 11, 12, 13, 14, 16, 20, 23, 24, 25],
    obs: "",
  },
  {
    id: "h36", concurso: "3673", data: "29/04/2026", hora: "",
    textoMapa: "Sol em Touro 9°40', na 5ª Casa;\nLua em Libra 20°15', na 10ª Casa;\nMercúrio em Áries 24°07', na 4ª Casa;\nVênus em Gêmeos 7°04', na 6ª Casa;\nMarte em Áries 15°36', na 4ª Casa;\nJúpiter em Câncer 18°46', na 7ª Casa;\nSaturno em Áries 9°01', na 4ª Casa;\nUrano em Gêmeos 0°13', na 5ª Casa;\nNetuno em Áries 3°13', na 4ª Casa;\nPlutão em Aquário 5°29', na 2ª Casa;\nNodo Norte em Peixes 5°52', retrógrado, na 3ª Casa;\nLilith em Sagitário 14°35', na 12ª Casa;\nQuíron em Áries 27°26', na 5ª Casa;\nFortuna em Câncer 21°25', na 7ª Casa.\nVertex em Touro 13°14', na 5ª Casa,\nAscendente em Capricórnio 2°00',\nMeio do Céu em Virgem 20°32'\n\n1ª Casa em Capricórnio 2°00'\n2ª Casa em Capricórnio 27°25'\n3ª Casa em Aquário 22°05'\n4ª Casa em Peixes 20°32'\n5ª Casa em Áries 25°18'\n6ª Casa em Gêmeos 1°30'\n7ª Casa em Câncer 2°00'\n8ª Casa em Câncer 27°25'\n9ª Casa em Leão 22°05'\n10ª Casa em Virgem 20°32'\n11ª Casa em Libra 25°18'\n12ª Casa em Sagitário 1°30'\n\nLua em tríodo octil com Vênus (Orbe: 1°49', em movimento subsequente)\nLua em quadratura com Júpiter (Orbe: 1°28', em movimento subsequente)\nMercúrio em octil com Vênus (Orbe: 2°02', em movimento subsequente)\nVênus em sextil com Saturno (Orbe: 1°57', em movimento subsequente)\nVênus em trígono com Plutão (Orbe: 1°34', em movimento subsequente)\nMarte em octil com Urano (Orbe: 0°23', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 2°16', em movimento subsequente)\n\nQuincúncio do Ascendente com Urano (Orbe: 1°47', Separando)\nQuadratura do Ascendente com Netuno (Orbe: 1°13', Aplicando)\nQuadratura do Descendente com Netuno (Orbe: 1°13', Aplicando)\nSextil do Meio do Céu com Júpiter (Orbe: 1°45', Separando)\nTri-óctil do Meio do Céu com Plutão (Orbe: 0°02', Separando)\nQuincúncio do Fundo do Céu com a Lua (Orbe: 0°17', Separando)\nTrígono do Fundo do Céu com Júpiter (Orbe: 1°45', Separando)\nOctil do Fundo do Céu com Plutão (Orbe: 0°02', Separando)\nTri-óctil do Nodo Norte com a Lua (Orbe: 0°37', Aplicando)\nQuadratura do Nodo Norte com Vênus (Orbe: 1°12', Separando)\nTri-óctil do Nodo Norte com Júpiter (Orbe: 2°05', Aplicando)\nTrígono de Lilith com Marte (Orbe: 1°01', Separando)\nLilith Tri-Octil Quíron (Orbe: 2°08', Separando)\nFortuna Quadratura Lua (Orbe: 1°10', Separando)\nFortuna Quadratura Mercúrio (Orbe: 2°41', Aplicando)\nFortuna Octil Vênus (Orbe: 0°38', Aplicando)\nFortuna Conjunção Júpiter (Orbe: 2°39', Separando)\nFortuna Tri-Octil Nodo (Orbe: 0°33', Separando)\nFortuna Sextil MC (Orbe: 0°53', Separando)\nFortuna Trígono IC (Orbe: 0°53', Separando)\nVértice Quincúncio Lilith (Orbe: 1°21', Aplicando)",
    jogoGerado: [4, 15, 16, 21, 10, 25, 8, 12, 19, 20, 22, 2, 23, 3, 24],
    resultado: [1, 3, 4, 8, 10, 11, 12, 15, 16, 18, 19, 20, 21, 22, 25],
    obs: "",
  },
  {
    id: "h37", concurso: "3674", data: "30/04/2026", hora: "",
    textoMapa: "Sol em Touro 10°38', na 5ª Casa;\nLua em Escorpião 2°31', na 11ª Casa;\nMercúrio em Áries 25°58', na 4ª Casa;\nVênus em Gêmeos 8°17', na 6ª Casa;\nMarte em Áries 16°22', na 4ª Casa;\nJúpiter em Câncer 18°54', na 7ª Casa;\nSaturno em Áries 9°08', na 4ª Casa;\nUrano em Gêmeos 0°16', na 5ª Casa;\nNetuno em Áries 3°15', na 4ª Casa;\nPlutão em Aquário 5°30', na 2ª Casa;\nNodo Norte em Peixes 5°48', retrógrado, na 3ª Casa;\nLilith em Sagitário 14°42', na 12ª Casa;\nQuíron em Áries 27°29', na 5ª Casa;\nFortuna em Câncer 11°00', na 7ª Casa.\nVertex em Touro 13°44', na 5ª Casa,\nAscendente em Capricórnio 2°54',\nMeio do Céu em Virgem 21°36'\n\n1ª Casa em Capricórnio 2°54'\n2ª Casa em Capricórnio 28°17'\n3ª Casa em Aquário 23°01'\n4ª Casa em Peixes 21°36'\n5ª Casa em Áries 26°27'\n6ª Casa em Gêmeos 2°32'\n7ª Casa em Câncer 2°54'\n8ª Casa em Câncer 28°17'\n9ª Casa em Leão 23°01'\n10ª Casa em Virgem 21°36'\n11ª Casa em Libra 26°27'\n12ª Casa em Sagitário 2°32'\n\nLua em Quincúncio com Urano (Orbe: 2°15', Separando)\nLua em Quincúncio com Netuno (Orbe: 0°43', Aproximando)\nLua em Quadratura com Plutão (Orbe: 2°58', Aproximando)\nMercúrio em Octil com Vênus (Orbe: 2°41', Separando)\nVênus em Sextil com Saturno (Orbe: 0°51', Aproximando)\nVênus em Trígono com Plutão (Orbe: 2°47', Separando)\nMarte em Quadratura com Júpiter (Orbe: 2°32', Aproximando)\nMarte em Octil com Urano (Orbe: 1°06', Separando)\nUrano em Sextil com Netuno (Orbe: 2°59', Aproximando)\nNetuno em Sextil com Plutão (Orbe: 2°14', Aproximando)\n\nSextil do Ascendente com a Lua (Orbe: 0°22', Separando)\nQuincúncio do Ascendente com Urano (Orbe: 2°37', Separando)\nQuadratura do Ascendente com Netuno (Orbe: 0°21', Aplicando)\nSextil do Ascendente com o Nodo Norte (Orbe: 2°54', Aplicando)\nTrígono do Descendente com a Lua (Orbe: 0°22', Separando)\nQuadratura do Descendente com Netuno (Orbe: 0°21', Aplicando)\nQuincúncio do Descendente com Plutão (Orbe: 2°35', Aplicando)\nTrígono do Descendente com o Nodo Norte (Orbe: 2°54', Aplicando)\nSextil do Meio do Céu com Júpiter (Orbe: 2°41', Separando)\nTri-óctil do Meio do Céu com Plutão (Orbe: 1°06', Separando) Trígono do Fundo do Céu\ncom Júpiter (Orbe: 2°41', Separando)\nOctil do Fundo do Céu com Plutão (Orbe:\nNodo Norte em quadratura com Vênus (Orbe: 2°28', Separando)\nNodo Norte em trígono com Júpiter (Orbe: 1°54', Aplicando)\nLilith em trígono com a Lua (Orbe: 2°49', Separando)\nLilith em trígono com Marte (Orbe: 1°40', Separando)\nLilith em trígono com Quíron (Orbe: 2°12', Separando)\nQuíron em conjunção com Mercúrio (Orbe: 1°31', Aplicando)\nFortuna em sextil com o Sol (Orbe: 0°22', Separando)\nFortuna em quadratura com Saturno (Orbe: 1°52', Separando)\nVértice em quincúncio com Lilith (Orbe: 0°57', Aplicando)",
    jogoGerado: [23, 10, 25, 8, 21, 2, 4, 9, 15, 19, 20, 22, 24, 3, 1],
    resultado: [2, 6, 7, 8, 9, 10, 15, 17, 19, 20, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h38", concurso: "3675", data: "02/05/2026", hora: "",
    textoMapa: "Sol em Touro 12°35', na 5ª Casa;\nLua em Escorpião 26°43', na 11ª Casa;\nMercúrio em Áries 29°45', na 5ª Casa;\nVênus em Gêmeos 10°42', na 6ª Casa;\nMarte em Áries 17°54', na 4ª Casa;\nJúpiter em Câncer 19°11', na 7ª Casa;\nSaturno em Áries 9°22', na 4ª Casa;\nUrano em Gêmeos 0°23', na 5ª Casa;\nNetuno em Áries 3°19', na 4ª Casa;\nPlutão em Aquário 5°30', na 2ª Casa;\nNodo Norte em Peixes 5°42', retrógrado, na 3ª Casa;\nLilith em Sagitário 14°55', na 12ª Casa;\nQuíron em Áries 27°36', na 4ª Casa;\nFortuna em Gêmeos 20°32', na 5ª Casa. Vértice da 6ª casa\nem Touro 14°44',\nAscendente na 5ª casa em Capricórnio 4°41',\nMeio do Céu em Virgem 23°44'\n\n1ª Casa em Capricórnio 4°41'\n2ª Casa em Aquário 0°02'\n3ª Casa em Aquário 24°54'\n4ª Casa em Peixes 23°44'\n5ª Casa em Áries 28°43'\n6ª Casa em Gêmeos 4°34'\n7ª Casa em Câncer 4°41'\n8ª Casa em Leão 0°02'\n9ª Casa em Leão 24°54'\n10ª Casa em Virgem 23°44'\n11ª Casa em Libra 28°43'\n12ª Casa em Sagitário 4°34'\n\nLua em trí-óctil com Saturno (órbita: 2°21', separando-se)\nVênus em sextil com Saturno (órbita: 1°20', separando-se)\nMarte em quadratura com Júpiter (órbita: 1°17', aproximando-se)\nMarte em octil com Urano (órbita: 2°31', separando-se)\nUrano em sextil com Netuno (órbita: 2°56', aproximando-se)\nNetuno em sextil com Plutão (órbita: 2°11', aproximando-se)\n\nAscendente em quadratura com Netuno (Orbe: 1°22', Separando)\nAscendente em sextil com o Nodo Lunar (Orbe: 1°01', Aplicando)\nDescendente em quadratura com Netuno (Orbe: 1°22', Separando)\nDescendente em quincúncio com Plutão (Orbe: 0°49', Aplicando)\nDescendente em trígono com o Nodo Lunar\n(Orbe: 1°01', Aplicando) Meio do Céu em sextil com a Lua (Orbe: 2°58', Aplicando)\nFundo do Céu em trígono com a Lua (Orbe: 2°58', Aplicando)\nNodo Norte em octil com Marte (Orbe: 2°48', Aplicando)\nNodo Norte em trígono com Júpiter (Orbe: 1°30', Aplicando)\nLilith em quincúncio com o Sol (Orbe: 2°20', Aplicando)\nLilith em trígono com Mercúrio (Orbe: 0°09', Aplicando)\nLilith em trígono com Marte (Orbe: 2°58', Separando)\nLilith Tri-Octil Quíron (Orbe: 2°18', Separando)\nQuíron Quincúncio Lua (Orbe: 0°53', Aplicando)\nQuíron Conjunção Mercúrio (Orbe: 2°08', Separando)\nQuíron Octil Vênus (Orbe: 1°54', Aplicando)\nFortuna Sextil Marte (Orbe: 2°38', Separando)\nFortuna Tri-Octil Plutão (Orbe: 0°02', Separando)\nVértice Conjunção Sol (Orbe: 2°08', Separando)\nVértice Quincúncio Lilith (Orbe: 0°11', Aplicando)",
    jogoGerado: [2, 8, 15, 24, 10, 9, 13, 5, 18, 17, 19, 22, 23, 3, 16],
    resultado: [2, 3, 4, 5, 7, 8, 10, 12, 13, 15, 17, 18, 19, 23, 24],
    obs: "",
  },
  {
    id: "h39", concurso: "3676", data: "04/05/2026", hora: "",
    textoMapa: "Sol em Touro 14°31', na 5ª Casa;\nLua em Sagitário 20°33', na 12ª Casa;\nMercúrio em Touro 3°40', na 5ª Casa;\nVênus em Gêmeos 13°07', na 6ª Casa;\nMarte em Áries 19°25', na 4ª Casa;\nJúpiter em Câncer 19°29', na 7ª Casa;\nSaturno em Áries 9°35', na 4ª Casa;\nUrano em Gêmeos 0°29', na 5ª Casa;\nNetuno em Áries 3°22', na 4ª Casa;\nPlutão em Aquário 5°30', na 2ª Casa;\nNodo Norte em Peixes 5°36', retrógrado, na 3ª Casa;\nLilith em Sagitário 15°08', na 12ª Casa;\nQuíron em Áries 27°43', na 4ª Casa;\nFortuna em Gêmeos 0°25', na 5ª Casa. Vértice da 5ª casa\nem Touro 15°43',\nAscendente na 5ª casa em Capricórnio 6°27',\nMeio do Céu em Virgem 25°53'\n\n1ª Casa em Capricórnio 6°27'\n2ª Casa em Aquário 1°46'\n3ª Casa em Aquário 26°48'\n4ª Casa em Peixes 25°53'\n5ª Casa em Touro 0°58'\n6ª Casa em Gêmeos 6°35'\n7ª Casa em Câncer 6°27'\n8ª Casa em Leão 1°46'\n9ª Casa em Leão 26°48'\n10ª Casa em Virgem 25°53'\n11ª Casa em Escorpião 0°58'\n12ª Casa em Sagitário 6°35'\n\nLua em trígono com Mercúrio (Orbe: 1°53', separando)\nLua em trígono com Marte (Orbe: 1°07', separando)\nLua em quincúncio com Júpiter (Orbe: 1°04', separando)\nLua em octil com Plutão (Orbe: 0°03', separando)\nMercúrio em quadratura com Plutão (Orbe: 1°50', aplicando)\nMarte em quadratura com Júpiter (Orbe: 0°03', aplicando)\nUrano em sextil com Netuno (Orbe: 2°53', aplicando)\nNetuno em sextil com Plutão (Orbe: 2°07', aplicando)\n\nAscendente em trígono com Mercúrio (Orbe: 2°47', Separando)\nAscendente em sextil com o Nodo Norte (Orbe: 0°51', Separando)\nDescendente em sextil com Mercúrio (Orbe: 2°47', Separando)\nDescendente em quincúncio com Plutão (Orbe: 0°57', Separando)\nDescendente em trígono com o Nodo Norte (Orbe: 0°51', Separando)\nMeio do Céu em quincúncio com Quíron (Orbe: 1°50', Aplicando)\nNodo Norte em sextil com Mercúrio (Orbe: 1°56', Aplicando)\nNodo Norte em octil com Marte (Orbe: 1°10', Aplicando)\nNodo Norte em trígono com Júpiter (Orbe: 1°07', Aplicando)\nLilith em quincúncio com o Sol (Orbe: 0°37', Aplicando)\nLilith em oposição a Vênus (Orbe: 2°01', Aplicando)\nLilith em trígono com Quíron (Orbe:\nQuíron em octil com Vênus (Orbe: 0°23', em separação )\nFortuna em conjunção com Urano (Orbe: 0°04', em aproximação)\nFortuna em sextil com Netuno (Orbe: 2°57', em aproximação)\nFortuna em sextil com Vertex (Orbe: 0°25', em separação)\nVertex em conjunção com o Sol (Orbe: 1°12', em separação)\nVertex em octil com Netuno (Orbe: 2°39', em aproximação)\nVertex em quincúncio com Lilith (Orbe: 0°34', em separação)",
    jogoGerado: [4, 5, 15, 16, 10, 8, 24, 9, 13, 6, 18, 19, 25, 2, 21],
    resultado: [4, 5, 6, 8, 10, 13, 15, 16, 18, 19, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h40", concurso: "3677", data: "05/05/2026", hora: "",
    textoMapa: "Sol em Touro 15°29', na 5ª Casa;\nLua em Capricórnio 2°25', na 12ª Casa;\nMercúrio em Touro 5°39', na 5ª Casa;\nVênus em Gêmeos 14°19', na 6ª Casa;\nMarte em Áries 20°11', na 4ª Casa;\nJúpiter em Câncer 19°38', na 7ª Casa;\nSaturno em Áries 9°42', na 4ª Casa;\nUrano em Gêmeos 0°33', na 5ª Casa;\nNetuno em Áries 3°24', na 4ª Casa;\nPlutão em Aquário 5°30', na 2ª Casa;\nNodo Norte em Peixes 5°33', retrógrado, na 3ª Casa;\nLilith em Sagitário 15°15', na 12ª Casa;\nQuíron em Áries 27°47', na 4ª Casa;\nFortuna em Touro 20°25', na 5ª Casa. Vértice da 5ª casa\nem Touro 16°13',\nAscendente na 5ª casa em Capricórnio 7°20',\nMeio do Céu em Virgem 26°58'\n\n1ª Casa em Capricórnio 7°20'\n2ª Casa em Aquário 2°38'\n3ª Casa em Aquário 27°44'\n4ª Casa em Peixes 26°58'\n5ª Casa em Touro 2°05'\n6ª Casa em Gêmeos 7°35'\n7ª Casa em Câncer 7°20'\n8ª Casa em Leão 2°38'\n9ª Casa em Leão 27°44'\n10ª Casa em Virgem 26°58'\n11ª Casa em Escorpião 2°05'\n12ª Casa em Sagitário 7°35'\n\nSol em Tri-Octil com a Lua (Orbe: 1°55', Separando)\nSol em Octil com Netuno (Orbe: 2°55', Aproximando)\nLua em Quincúncio com Urano (Orbe: 1°51', Separando)\nLua em Quadratura com Netuno (Orbe: 0°59', Aproximando)\nMercúrio em Quadratura com Plutão (Orbe: 0°09', Separando)\nMarte em Quadratura com Júpiter (Orbe: 0°33', Separando)\nUrano em Sextil com Netuno (Orbe: 2°51', Aproximando)\nNetuno em Sextil com Plutão (Orbe: 2°05', Aproximando)\n\nAscendente em trígono com Mercúrio (Orbe: 1°41', Separando)\nAscendente em quadratura com Saturno (Orbe: 2°21', Aplicando)\nAscendente em sextil com o Nodo Lunar (Orbe: 1°47', Separando)\nDescendente em sextil com Mercúrio (Orbe: 1°41', Separando)\nDescendente em quadratura com Saturno (Orbe: 2°21', Aplicando)\nDescendente em quincúncio com Plutão (Orbe: 1°50', Separando)\nDescendente em trígono com o Nodo Lunar (Orbe: 1°47', Separando)\nMeio do Céu em quincúncio com Quíron (Orbe: 0°49', Aplicando)\nNodo Norte em sextil com Mercúrio (Orbe: 0°06', Separando)\nNodo Norte em octil com Marte (Orbe: 0°21', Aplicando)\nNodo Norte em trígono com Júpiter (Orbe: 0°54', Aplicando)\nLilith em quincúncio com o Sol (Orbe:\nLilith em oposição a Vênus (Orbe: 0°55', em movimento) Lilith\nem trí-óctil com Quíron (Orbe: 2°28', em movimento)\nQuíron em octil com Vênus (Orbe: 1°32', em movimento)\nFortuna em sextil com Júpiter (Orbe: 0°47', em movimento)\nFortuna em octil com Netuno (Orbe: 2°00', em movimento)\nFortuna em trí-óctil com o Ascendente (Orbe: 1°55', em movimento)\nFortuna em octil com o Descendente (Orbe: 1°55', em movimento)\nVértice em conjunção com o Sol (Orbe: 0°43', em movimento)\nVértice em trí-óctil com a Lua (Orbe: 1°11', em movimento)\nVértice em octil com Netuno (Orbe: 2°11', em movimento)\nVértice em quincúncio com Lilith (Orbe: 0°57', Separando)",
    jogoGerado: [15, 23, 10, 2, 8, 9, 13, 5, 18, 21, 24, 1, 11, 22, 7],
    resultado: [1, 2, 3, 8, 9, 10, 12, 13, 14, 15, 16, 18, 22, 23, 24],
    obs: "",
  },
  {
    id: "h41", concurso: "3678", data: "06/05/2026", hora: "",
    textoMapa: "Sol em Touro 16°27', na 5ª Casa;\nLua em Capricórnio 14°17', na 1ª Casa;\nMercúrio em Touro 7°41', na 5ª Casa;\nVênus em Gêmeos 15°32', na 6ª Casa;\nMarte em Áries 20°57', na 4ª Casa;\nJúpiter em Câncer 19°47', na 7ª Casa;\nSaturno em Áries 9°48', na 4ª Casa;\nUrano em Gêmeos 0°36', na 5ª Casa;\nNetuno em Áries 3°26', na 4ª Casa;\nPlutão em Aquário 5°30', estacionário, na 2ª Casa;\nNodo Norte em Peixes 5°29', retrógrado, na 3ª Casa;\nLilith em Sagitário 15°22', na 12ª Casa;\nQuíron em Áries 27°50', na 4ª Casa;\nFortuna em Touro. 10°23', no\nVértice da 5ª Casa em Touro 16°43', no\nAscendente da 5ª Casa em Capricórnio 8°13'\nMeio do Céu em Virgem 28°02'\n\n1ª Casa em Capricórnio 8°13'\n2ª Casa em Aquário 3°31'\n3ª Casa em Aquário 28°41'\n4ª Casa em Peixes 28°02'\n5ª Casa em Touro 3°12'\n6ª Casa em Gêmeos 8°35'\n7ª Casa em Câncer 8°13'\n8ª Casa em Leão 3°31'\n9ª Casa em Leão 28°41'\n10ª Casa em Virgem 28°02'\n11ª Casa em Escorpião 3°12'\n12ª Casa em Sagitário 8°35'\n\nSol em trígono com a Lua (Orbe: 2°09', em movimento subsequente)\nSol em octil com Netuno (Orbe: 1°58', em movimento subsequente)\nLua em quincúncio com Vênus (Orbe: 1°14', em movimento subsequente)\nLua em trígono com octil de Urano (Orbe: 1°18', em movimento subsequente)\nMercúrio em quadratura com Plutão (Orbe: 2°10', em movimento subsequente)\nMarte em quadratura com Júpiter (Orbe: 1°10', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°49', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 2°03', em movimento subsequente)\n\nAscendente em trígono com Mercúrio (Orbe: 0°32', Separando)\nAscendente em quadratura com Saturno (Orbe: 1°34', Aplicando)\nAscendente em sextil com o Nodo Norte (Orbe: 2°43', Separando)\nDescendente em sextil com Mercúrio (Orbe: 0°32', Separando)\nDescendente em quadratura com Saturno (Orbe: 1°34', Aplicando)\nDescendente em quincúncio com Plutão (Orbe: 2°43', Separando)\nDescendente em trígono com o Nodo Norte (Orbe: 2°43', Separando)\nMeio do Céu em trígono com Urano (Orbe: 2°34', Aplicando)\nMeio do Céu em quincúncio com Quíron (Orbe: 0°11', Separando)\nFundo do Céu em sextil com Urano (Orbe: 2°34', Aplicando)\nNodo Norte em sextil com Mercúrio (Orbe: 2°11', Separando)\nNodo Norte em octil com Marte (Orbe:\nNodo Norte em Tri-Óctil com Júpiter (Orbe: 0°27', Separando)\nLilith em Quincúncio com o Sol (Orbe: 1°05', Separando)\nLilith em Oposição com Vênus (Orbe: 0°09', Separando)\nLilith em Tri-Óctil com Quíron (Orbe: 2°31', Separando)\nQuíron em Octil com Vênus (Orbe: 2°41', Separando)\nFortuna em Conjunção com Mercúrio (Orbe: 2°42', Separando)\nFortuna em Trígono com o Ascendente (Orbe: 2°09', Separando)\nFortuna em Tri-Óctil com o Meio do Céu (Orbe: 2°38', Separando)\nFortuna em Octil com o Fundo do Céu (Orbe: 2°38', Separando)\nFortuna em Sextil com o Descendente (Orbe: 2°09', Separando)\nVértice em Conjunção com o Sol (Orbe: 0°15', Separando)\nVértice Lua em trígono (orbe: 2°25', separando)\ncom Netuno em octil no vértice (orbe: 1°43', aplicando)\ne Lilith em quincúncio no vértice (orbe: 1°20', separando).",
    jogoGerado: [4, 15, 10, 2, 8, 9, 13, 20, 5, 18, 23, 24, 25, 3, 1],
    resultado: [1, 2, 3, 4, 5, 6, 8, 10, 11, 14, 18, 20, 23, 24, 25],
    obs: "",
  },
  {
    id: "h42", concurso: "3679", data: "07/05/2026", hora: "",
    textoMapa: "Sol em Touro 17°25', na 5ª Casa;\nLua em Capricórnio 26°15', na 1ª Casa;\nMercúrio em Touro 9°44', na 5ª Casa;\nVênus em Gêmeos 16°44', na 6ª Casa;\nMarte em Áries 21°43', na 4ª Casa;\nJúpiter em Câncer 19°56', na 7ª Casa;\nSaturno em Áries 9°55', na 4ª Casa;\nUrano em Gêmeos 0°40', na 5ª Casa;\nNetuno em Áries 3°28', na 4ª Casa;\nPlutão em Aquário 5°30', retrógrado, na 2ª Casa;\nNodo Norte em Peixes 5°26', retrógrado, na 3ª Casa;\nLilith em Sagitário 15°29', na 12ª Casa;\nQuíron em Áries 27°54', na 4ª Casa;\nFortuna em Touro. 0°16', no\nVértice da 4ª Casa em Touro 17°12', no\nAscendente da 5ª Casa em Capricórnio 9°06'\nMC em Virgem 29°07'\n\n1ª Casa em Capricórnio 9°06'\n2ª Casa em Aquário 4°23'\n3ª Casa em Aquário 29°38'\n4ª Casa em Peixes 29°07'\n5ª Casa em Touro 4°19'\n6ª Casa em Gêmeos 9°34'\n7ª Casa em Câncer 9°06'\n8ª Casa em Leão 4°23'\n9ª Casa em Leão 29°38'\n10ª Casa em Virgem 29°07'\n11ª Casa em Escorpião 4°19'\n12ª Casa em Sagitário 9°34'\n\nSol em sextil com Júpiter (Orbe: 2°30', em movimento subsequente)\nSol em octil com Netuno (Orbe: 1°02', em movimento subsequente)\nMarte em quadratura com Júpiter (Orbe: 1°46', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°48', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 2°02', em movimento subsequente)\n\nAscendente em trígono com Mercúrio (Orbe: 0°37', em movimento)\nAscendente em quadratura com Saturno (Orbe: 0°48', em movimento)\nDescendente em sextil com Mercúrio (Orbe: 0°37', em movimento)\nDescendente em quadratura com Saturno (Orbe: 0°48', em movimento)\nMeio do Céu em trígono com a Lua (Orbe: 2°51', em movimento)\nMeio do Céu em trígono com Urano (Orbe: 1°33', em movimento)\nMeio do Céu em quincúncio com Quíron (Orbe: 1°12', em movimento)\nFundo do Céu em sextil com a Lua (Orbe: 2°51', em movimento)\nFundo do Céu em sextil com Urano (Orbe: 1°33', em movimento)\nNodo Norte em octil com Marte (Orbe: 1°16', em movimento)\nNodo Norte em trígono de octil com Júpiter (Orbe: 0°30', em movimento)\nLilith em quincúncio com o Sol (Orbe: 1°56', em movimento)\nLilith Oposição de Vênus (Orbe: 1°15', Separando)\nLilith Tri-Octil Quíron (Orbe: 2°34', Separando)\nQuíron Quadratura Lua (Orbe: 1°38', Aplicando)\nFortuna Octil Vênus (Orbe: 1°27', Aplicando)\nFortuna Tri-Octil Lilith (Orbe: 0°12', Aplicando)\nFortuna Conjunção Quíron (Orbe: 2°22', Separando)\nFortuna Quincúncio Meio do Céu (Orbe: 1°09', Separando)\nVértice Conjunção Sol (Orbe: 0°12', Aplicando)\nVértice Sextil Júpiter (Orbe: 2°43', Aplicando)\nVértice Octil Netuno (Orbe: 1°15', Aplicando)\nVértice Quincúncio Lilith (Orbe: 1°43', Separando)",
    jogoGerado: [15, 10, 2, 8, 1, 9, 13, 17, 22, 23, 3, 24, 11, 5, 7],
    resultado: [1, 2, 3, 7, 8, 10, 11, 13, 14, 17, 18, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h43", concurso: "3680", data: "08/05/2026", hora: "",
    textoMapa: "Sol em Touro 18°23', na 5ª Casa;\nLua em Aquário 8°22', na 2ª Casa;\nMercúrio em Touro 11°48', na 5ª Casa;\nVênus em Gêmeos 17°56', na 6ª Casa;\nMarte em Áries 22°28', na 4ª Casa;\nJúpiter em Câncer 20°05', na 7ª Casa;\nSaturno em Áries 10°01', na 4ª Casa;\nUrano em Gêmeos 0°43', na 5ª Casa;\nNetuno em Áries 3°30', na 4ª Casa;\nPlutão em Aquário 5°30', retrógrado, na 2ª Casa;\nNodo Norte em Peixes 5°23', retrógrado, na 3ª Casa;\nLilith em Sagitário 15°35', na 12ª Casa;\nQuíron em Áries 27°57', na 4ª Casa;\nFortuna em Áries. 20°00', no Vértice da 4ª Casa\nem Touro 17°42', no\nAscendente da 5ª Casa em Capricórnio 9°59'\nMC em Libra 0°11'\n\n1ª Casa em Capricórnio 9°59'\n2ª Casa em Aquário 5°15'\n3ª Casa em Peixes 0°36'\n4ª Casa em Áries 0°11'\n5ª Casa em Touro 5°25'\n6ª Casa em Gêmeos 10°33'\n7ª Casa em Câncer 9°59'\n8ª Casa em Leão 5°15'\n9ª Casa em Virgem 0°36'\n10ª Casa em Libra 0°11'\n11ª Casa em Escorpião 5°25'\n12ª Casa em Sagitário 10°33'\n\nSol em sextil com Júpiter (Orbe: 1°41', em movimento subsequente)\nSol em octil com Netuno (Orbe: 0°06', em movimento subsequente)\nLua em sextil com Saturno (Orbe: 1°39', em movimento subsequente)\nLua em conjunção com Plutão (Orbe: 2°51', em movimento subsequente)\nVênus em trígono de octil com Plutão (Orbe: 2°33', em movimento subsequente)\nMarte em quadratura com Júpiter (Orbe: 2°23', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°46', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 2°00', em movimento subsequente)\n\nAscendente em trígono com Mercúrio (Orbe: 1°49', em movimento)\nAscendente em quadratura com Saturno (Orbe: 0°02', em movimento)\nDescendente em quincúncio com a Lua (Orbe: 1°37', em movimento)\nDescendente em sextil com Mercúrio (Orbe: 1°49', em movimento)\nDescendente em quadratura com Saturno (Orbe: 0°02', em movimento)\nMeio do Céu em trígono com Urano (Orbe: 0°32', em movimento)\nMeio do Céu em quincúncio com Quíron (Orbe: 2°13', em movimento)\nFundo do Céu em sextil com Urano (Orbe: 0°32', em movimento)\nNodo Norte em octil com Marte (Orbe: 2°05', em movimento)\nNodo Norte em trígono com Júpiter (Orbe: 0°18', em movimento)\nLilith em quincúncio com o Sol (Orbe: 2°47', em movimento)\nLilith em oposição a Vênus (Orbe: 2°20',\nTri-óctil de Lilith com Quíron (Orbe: 2°38', Separando) Sextil\nde Fortuna com Vênus (Orbe: 2°04', Separando)\nConjunção de Fortuna com Marte (Orbe: 2°27', Aplicando)\nQuadratura de Fortuna com Júpiter (Orbe: 0°04', Aplicando)\nOctil de Fortuna com o Nodo Lunar (Orbe: 0°22', Aplicando)\nConjunção do Vértice com o Sol (Orbe: 0°41', Aplicando)\nSextil do Vértice com Júpiter (Orbe: 2°23', Aplicando)\nOctil do Vértice com Netuno (Orbe: 0°47', Aplicando)\nQuincúncio do Vértice com Lilith (Orbe: 2°06', Separando)\nTri-óctil do Vértice com o Meio do Céu (Orbe: 2°30', Separando) Octil do Vértice com o\nFundo do Céu (Orbe: 2°30', Separando)",
    jogoGerado: [25, 15, 1, 2, 9, 13, 17, 22, 10, 5, 7, 8, 24, 3, 23],
    resultado: [1, 2, 3, 4, 5, 7, 8, 9, 11, 15, 16, 19, 22, 24, 25],
    obs: "",
  },
  {
    id: "h44", concurso: "3681", data: "09/05/2026", hora: "",
    textoMapa: "Sol em Touro 19°21', na 5ª Casa;\nLua em Aquário 20°43', na 2ª Casa;\nMercúrio em Touro 13°54', na 5ª Casa;\nVênus em Gêmeos 19°09', na 6ª Casa;\nMarte em Áries 23°14', na 4ª Casa;\nJúpiter em Câncer 20°14', na 7ª Casa;\nSaturno em Áries 10°07', na 4ª Casa;\nUrano em Gêmeos 0°47', na 5ª Casa;\nNetuno em Áries 3°31', na 4ª Casa;\nPlutão em Aquário 5°30', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 5°20', retrógrado, na 3ª Casa;\nLilith em Sagitário 15°42', na 12ª Casa;\nQuíron em Áries 28°01', na 4ª Casa;\nFortuna em Áries. 9°30', no\nVértice da 4ª Casa em Touro 18°11', no\nAscendente da 5ª Casa em Capricórnio 10°52'\nMC em Libra 1°15'\n\n1ª Casa em Capricórnio 10°52'\n2ª Casa em Aquário 6°08'\n3ª Casa em Peixes 1°33'\n4ª Casa em Áries 1°15'\n5ª Casa em Touro 6°31'\n6ª Casa em Gêmeos 11°32'\n7ª Casa em Câncer 10°52'\n8ª Casa em Leão 6°08'\n9ª Casa em Virgem 1°33'\n10ª Casa em Libra 1°15'\n11ª Casa em Escorpião 6°31'\n12ª Casa em Sagitário 11°32'\n\nSol em quadratura com a Lua (Orbe: 1°21', Separando)\nSol em sextil com Júpiter (Orbe: 0°53', Aproximando)\nSol em octil com Netuno (Orbe: 0°49', Separando)\nLua em trígono com Vênus (Orbe: 1°34', Separando)\nLua em sextil com Marte (Orbe: 2°31', Aproximando)\nLua em quincúncio com Júpiter (Orbe: 0°28', Separando)\nLua em octil com Netuno (Orbe: 2°11', Separando)\nVênus em trígono-octil com Plutão (Orbe: 1°21', Aproximando)\nMarte em quadratura com Júpiter (Orbe: 2°59', Separando)\nUrano em sextil com Netuno (Orbe: 2°44', Aproximando)\nNetuno em sextil com Plutão (Orbe: 1°58', Aproximando)\n\nAscendente em quadratura com Saturno (Orbe: 0°44', Separando)\nDescendente em quadratura com Saturno (Orbe: 0°44', Separando)\nMeio do Céu em trígono com Mercúrio (Orbe: 2°21', Separando)\nMeio do Céu em trígono com Urano (Orbe: 0°28', Separando)\nMeio do Céu em oposição a Netuno (Orbe: 2°15', Aplicando)\nFundo do Céu em octil com Mercúrio (Orbe: 2°21', Separando)\nFundo do Céu em sextil com Urano (Orbe: 0°28', Separando)\nFundo do Céu em conjunção com Netuno (Orbe: 2°15', Aplicando)\nNodo Norte em octil com Marte (Orbe: 2°54', Separando)\nNodo Norte em trígono com Júpiter (Orbe: 0°05', Aplicando)\nLilith em quincúncio com Mercúrio (Orbe: 1°47', Aplicando)\nLilith em trígono com Quíron (Orbe: 2°41', Separando)\nConjunção da Fortuna com Saturno (Orbe: 0°37', Aplicando)\nQuadratura da Fortuna com o Ascendente (Orbe: 1°21', Separando)\nQuadratura da Fortuna com o Descendente (Orbe: 1°21', Separando)\nConjunção do Vértice com o Sol (Orbe: 1°09', Aplicando)\nQuadratura do Vértice com a Lua (Orbe: 2°31', Aplicando)\nSextil do Vértice com Júpiter (Orbe: 2°02', Aplicando)\nOctil do Vértice com Netuno (Orbe: 0°19', Aplicando)\nQuincúncio do Vértice com Lilith (Orbe: 2°29', Separando)\nTri-Octil do Vértice com o Meio do Céu (Orbe: 1°56', Separando)\nOctil do Vértice com o Fundo do Céu (Orbe: 1°56', Separando)",
    jogoGerado: [4, 14, 15, 25, 20, 2, 9, 13, 11, 19, 23, 10, 5, 8, 12],
    resultado: [1, 2, 4, 5, 7, 9, 11, 12, 14, 15, 16, 20, 21, 22, 25],
    obs: "",
  },
  {
    id: "h45", concurso: "3682", data: "11/05/2026", hora: "",
    textoMapa: "Sol em Touro 21°17', na 5ª Casa;\nLua em Peixes 16°26', na 3ª Casa;\nMercúrio em Touro 18°10', na 5ª Casa;\nVênus em Gêmeos 21°33', na 6ª Casa;\nMarte em Áries 24°45', na 4ª Casa;\nJúpiter em Câncer 20°33', na 7ª Casa;\nSaturno em Áries 10°20', na 4ª Casa;\nUrano em Gêmeos 0°53', na 5ª Casa;\nNetuno em Áries 3°35', na 4ª Casa;\nPlutão em Aquário 5°30', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 5°14', retrógrado, na 3ª Casa;\nLilith em Sagitário 15°56', na 12ª Casa;\nQuíron em Áries 28°08', na 4ª Casa;\nFortuna em Peixes. 17°27', no\nVértice da 3ª Casa em Touro 19°11', no\nAscendente da 5ª Casa em Capricórnio 12°36'\nMC em Libra 3°24'\n\n1ª Casa em Capricórnio 12°36'\n2ª Casa em Aquário 7°53'\n3ª Casa em Peixes 3°28'\n4ª Casa em Áries 3°24'\n5ª Casa em Touro 8°43'\n6ª Casa em Gêmeos 13°28'\n7ª Casa em Câncer 12°36'\n8ª Casa em Leão 7°53'\n9ª Casa em Virgem 3°28'\n10ª Casa em Libra 3°24'\n11ª Casa em Escorpião 8°43'\n12ª Casa em Sagitário 13°28'\n\nSol em sextil com Júpiter (Orbe: 0°43', separando)\nSol em octil com Netuno (Orbe: 2°42', separando)\nLua em sextil com Mercúrio (Orbe: 1°43', aplicando)\nMercúrio em sextil com Júpiter (Orbe: 2°23', aplicando)\nMercúrio em octil com Netuno (Orbe: 0°24', aplicando)\nVênus em tri-octil com Plutão (Orbe: 1°03', separando)\nUrano em sextil com Netuno (Orbe: 2°41', aplicando)\nNetuno em sextil com Plutão (Orbe: 1°54', aplicando)\n\nAscendente em quadratura com Saturno (Orbe: 2°16', Separando)\nDescendente em quadratura com Saturno (Orbe: 2°16', Separando)\nMeio do Céu em trígono com o Sol (Orbe: 2°52', Aplicando)\nMeio do Céu em trígono com Mercúrio (Orbe: 0°14', Separando)\nMeio do Céu em trígono com Urano (Orbe: 2°30', Separando)\nMeio do Céu em oposição a Netuno (Orbe: 0°10', Aplicando)\nMeio do Céu em trígono com Plutão (Orbe: 2°05', Aplicando)\nMeio do Céu em quincúncio com o Nodo Norte (Orbe: 1°49', Aplicando) Fundo\ndo Céu em octil com o Sol (Orbe: 2°52', Aplicando)\nFundo do Céu em octil com Mercúrio (Orbe: 0°14', Separando)\nFundo do Céu em sextil com Urano (Orbe: 2°30', Separando) Fundo\ndo Céu em conjunção com Netuno (Orbe: 0°10', Aplicando)\nFundo do Céu Sextil Plutão (Orbe: 2°05', em movimento)\nNodo Norte Tri-óctil Júpiter (Orbe: 0°19', em separação)\nLilith Quadratura Lua (Orbe: 0°30', em separação)\nLilith Quincúncio Mercúrio (Orbe: 2°14', em separação)\nLilith Tri-óctil Quíron (Orbe: 2°47', em separação)\nFortuna Conjunção Lua (Orbe: 1°01', em separação)\nFortuna Sextil Mercúrio (Orbe: 0°42', em movimento)\nFortuna Quadratura Lilith (Orbe: 1°31', em separação)\nVértice Conjunção Sol (Orbe: 2°06', em movimento)\nVértice Sextil Lua (Orbe: 2°44', em separação)\nVértice Conjunção Mercúrio (Orbe: 1°00', em separação)\nVértice Sextil Júpiter (Orbe: 1°22', em movimento)\nVértice Netuno em Octile (Orbe: 0°35', Separando)\nVértice Tri-Octile MC (Orbe: 0°46', Separando)\nVértice Octile IC (Orbe: 0°46', Separando)",
    jogoGerado: [11, 9, 12, 15, 17, 2, 13, 4, 22, 10, 5, 6, 24, 7, 1],
    resultado: [1, 2, 4, 5, 7, 9, 10, 11, 12, 13, 17, 18, 21, 22, 24],
    obs: "",
  },
  {
    id: "h46", concurso: "3683", data: "12/05/2026", hora: "",
    textoMapa: "Sol em Touro 22°15', na 5ª Casa;\nLua em Peixes 29°57', na 3ª Casa;\nMercúrio em Touro 20°19', na 5ª Casa;\nVênus em Gêmeos 22°45', na 6ª Casa;\nMarte em Áries 25°31', na 4ª Casa;\nJúpiter em Câncer 20°43', na 7ª Casa;\nSaturno em Áries 10°26', na 4ª Casa;\nUrano em Gêmeos 0°57', na 5ª Casa;\nNetuno em Áries 3°36', na 3ª Casa;\nPlutão em Aquário 5°30', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 5°10', retrógrado, na 3ª Casa;\nLilith em Sagitário 16°02', na 12ª Casa;\nQuíron em Áries 28°11', na 4ª Casa;\nFortuna em Peixes. 5°47', no\nVértice da 3ª Casa em Touro 19°40', no\nAscendente da 5ª Casa em Capricórnio 13°29'\nMC em Libra 4°29'\n\n1ª Casa em Capricórnio 13°29'\n2ª Casa em Aquário 8°45'\n3ª Casa em Peixes 4°25'\n4ª Casa em Áries 4°29'\n5ª Casa em Touro 9°48'\n6ª Casa em Gêmeos 14°26'\n7ª Casa em Câncer 13°29'\n8ª Casa em Leão 8°45'\n9ª Casa em Virgem 4°25'\n10ª Casa em Libra 4°29'\n11ª Casa em Escorpião 9°48'\n12ª Casa em Sagitário 14°26'\n\nSol em conjunção com Mercúrio (Orbe: 1°55', em movimento subsequente)\nSol em sextil com Júpiter (Orbe: 1°32', em movimento subsequente)\nLua em sextil com Urano (Orbe: 0°59', em movimento subsequente)\nMercúrio em sextil com Júpiter (Orbe: 0°23', em movimento subsequente)\nMercúrio em octil com Netuno (Orbe: 1°42', em movimento subsequente)\nVênus em sextil com Marte (Orbe: 2°45', em movimento subsequente)\nVênus em tri-octil com Plutão (Orbe: 2°15', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°39', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 1°53', em movimento subsequente)\n\nTri-óctilo do Ascendente com Urano (Orbe: 2°28', em aplicação)\nDescendente em óctilo com Urano (Orbe: 2°28', em aplicação)\nDescendente em quincúncio com Lilith (Orbe: 2°33', em aplicação)\nMeio do Céu em tri-óctilo com o Sol (Orbe: 2°46', em aplicação)\nMeio do Céu em tri-óctilo com Mercúrio (Orbe: 0°50', em aplicação)\nMeio do Céu em oposição a Netuno (Orbe: 0°52', em separação)\nMeio do Céu em trígono com Plutão (Orbe: 1°00', em aplicação)\nMeio do Céu em quincúncio com o Nodo Norte (Orbe: 0°41', em aplicação)\nFundo do Céu em óctilo com o Sol (Orbe: 2°46', em aplicação)\nFundo do Céu em óctilo com Mercúrio (Orbe: 0°50', em aplicação)\nFundo do Céu em conjunção com Netuno (Orbe: 0°52', em separação)\nFundo do Céu em sextil com Plutão (Orbe:\nNodo Norte em Tri-Óctil com Júpiter (Orbe: 0°32', Separando) Lilith\nem Tri-Óctil com Quíron (Orbe: 2°51', Separando)\nQuíron em Conjunção com Marte (Orbe: 2°40', Aplicando)\nFortuna em Tri-Óctil com Júpiter (Orbe: 0°03', Separando)\nFortuna em Conjunção com o Nodo (Orbe: 0°36', Separando)\nFortuna em Quincúncio com o Meio do Céu (Orbe: 1°17', Separando)\nVértice em Conjunção com o Sol (Orbe: 2°35', Aplicando)\nVértice em Conjunção com Mercúrio (Orbe: 0°39', Aplicando)\nVértice em Sextil com Júpiter (Orbe: 1°02', Aplicando)\nVértice em Octil com Netuno (Orbe: 1°03', Separando)\nVértice em Tri-Óctil com o Meio do Céu (Orbe: 0°11', Separando)\nVértice Octile IC (Orb: 0°11', Separando)",
    jogoGerado: [15, 25, 19, 9, 13, 16, 10, 2, 3, 5, 14, 24, 7, 11, 18],
    resultado: [2, 3, 5, 7, 8, 9, 10, 11, 12, 14, 16, 19, 20, 24, 25],
    obs: "",
  },
  {
    id: "h47", concurso: "3684", data: "13/05/2026", hora: "",
    textoMapa: "Sol em Touro 23°13', na 5ª Casa;\nLua em Áries 13°58', na 4ª Casa;\nMercúrio em Touro 22°29', na 5ª Casa;\nVênus em Gêmeos 23°57', na 6ª Casa;\nMarte em Áries 26°16', na 4ª Casa;\nJúpiter em Câncer 20°53', na 7ª Casa;\nSaturno em Áries 10°33', na 4ª Casa;\nUrano em Gêmeos 1°00', na 5ª Casa;\nNetuno em Áries 3°38', na 3ª Casa;\nPlutão em Aquário 5°29', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 5°07', retrógrado, na 2ª Casa;\nLilith em Sagitário 16°09', na 12ª Casa;\nQuíron em Áries 28°14', na 4ª Casa;\nFortuna em Aquário. 23°36', no\nVértice da 2ª Casa em Touro 20°09', no\nAscendente da 5ª Casa em Capricórnio 14°21'\nMC em Libra 5°33'\n\n1ª Casa em Capricórnio 14°21'\n2ª Casa em Aquário 9°38'\n3ª Casa em Peixes 5°23'\n4ª Casa em Áries 5°33'\n5ª Casa em Touro 10°53'\n6ª Casa em Gêmeos 15°24'\n7ª Casa em Câncer 14°21'\n8ª Casa em Leão 9°38'\n9ª Casa em Virgem 5°23'\n10ª Casa em Libra 5°33'\n11ª Casa em Escorpião 10°53'\n12ª Casa em Sagitário 15°24'\n\nSol em conjunção com Mercúrio (Orbe: 0°43', em movimento subsequente)\nSol em sextil com Júpiter (Orbe: 2°20', em movimento subsequente)\nSol em octil com Saturno (Orbe: 2°19', em movimento subsequente)\nLua em octil com Urano (Orbe: 2°02', em movimento subsequente)\nMercúrio em sextil com Júpiter (Orbe: 1°36', em movimento subsequente)\nVênus em sextil com Marte (Orbe: 2°19', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°37', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 1°51', em movimento subsequente)\n\nLua em quadratura com o Ascendente (Orbe: 0°23', Separando)\nUrano em trí-óctilo com o Ascendente (Orbe: 1°39', Aplicando)\nLua em quadratura com o Descendente (Orbe: 0°23', Separando)\nUrano em óctilo com o Descendente (Orbe: 1°39', Aplicando)\nLilith em quincúncio com o Descendente (Orbe: 1°47', Aplicando)\nSol em trí-óctilo com o Meio do Céu (Orbe: 2°40', Aplicando)\nMercúrio em trí-óctilo com o Meio do Céu (Orbe: 1°56', Aplicando)\nNetuno em oposição ao Meio do Céu (Orbe: 1°55', Separando)\nTrígono com Plutão no Meio do Céu (Orbe: 0°03', Separando)\nNodo em quincúncio com o Meio do Céu (Orbe: 0°25', Separando)\nSol em óctilo com o Fundo do Céu (Orbe: 2°40', Aplicando)\nMercúrio em óctilo com o Fundo do Céu (Orbe: 1°56', em conjunção)\nIC em conjunção com Netuno (Orbe: 1°55', em separação)\nIC em sextil com Plutão (Orbe: 0°03', em separação)\nNodo Norte em trígono com Júpiter (Orbe: 0°45', em separação)\nLilith em trígono com a Lua (Orbe: 2°11', em conjunção)\nLilith em trígono com Quíron (Orbe: 2°54', em separação)\nQuíron em conjunção com Marte (Orbe: 1°58', em conjunção)\nFortuna em quadratura com o Sol (Orbe: 0°23', em separação)\nFortuna em quadratura com Mercúrio (Orbe: 1°06', em separação)\nFortuna em trígono com Vênus (Orbe: 0°20', em conjunção)\nFortuna em sextil com Marte (Orbe: 2°39', em conjunção)\nFortuna em quincúncio com Júpiter (Orbe: 2°43', em separação)\nFortuna em octil com Saturno (Orbe:\nVértice em conjunção com Mercúrio (Orbe: 2°20', em conjunção) Vértice\nem sextil com Júpiter (Orbe: 0°43', em conjunção)\nVértice em octil com Netuno (Orbe: 1°31', em separação)\nVértice em tri-octil com o Meio do Céu (Orbe: 0°23', em conjunção)\nVértice em octil com o Fundo do Céu (Orbe: 0°23', em conjunção)",
    jogoGerado: [11, 15, 7, 19, 9, 13, 17, 10, 23, 1, 5, 6, 18, 21, 2],
    resultado: [1, 3, 5, 6, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 23],
    obs: "",
  },
  {
    id: "h48", concurso: "3685", data: "14/05/2026", hora: "",
    textoMapa: "Sol em Touro 24°11', na 5ª Casa;\nLua em Áries 28°27', na 4ª Casa;\nMercúrio em Touro 24°40', na 5ª Casa;\nVênus em Gêmeos 25°09', na 6ª Casa;\nMarte em Áries 27°01', na 4ª Casa;\nJúpiter em Câncer 21°03', na 7ª Casa;\nSaturno em Áries 10°39', na 4ª Casa;\nUrano em Gêmeos 1°04', na 5ª Casa;\nNetuno em Áries 3°40', na 3ª Casa;\nPlutão em Aquário 5°29', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 5°04', retrógrado, na 2ª Casa;\nLilith em Sagitário 16°16', na 11ª Casa;\nQuíron em Áries 28°18', na 4ª Casa;\nFortuna em Aquário. 10°57', no\nVértice da 2ª Casa em Touro 20°39', no\nAscendente da 5ª Casa em Capricórnio 15°13'\nMC em Libra 6°37'\n\n1ª Casa em Capricórnio 15°13'\n2ª Casa em Aquário 10°30'\n3ª Casa em Peixes 6°20'\n4ª Casa em Áries 6°37'\n5ª Casa em Touro 11°58'\n6ª Casa em Gêmeos 16°21'\n7ª Casa em Câncer 15°13'\n8ª Casa em Leão 10°30'\n9ª Casa em Virgem 6°20'\n10ª Casa em Libra 6°37'\n11ª Casa em Escorpião 11°58'\n12ª Casa em Sagitário 16°21'\n\nSol em conjunção com Mercúrio (Orbe: 0°29', separando-se)\nSol em octil com Saturno (Orbe: 1°27', aproximando-se)\nLua em conjunção com Marte (Orbe: 1°25', separando-se)\nMercúrio em octil com Saturno (Orbe: 0°58', aproximando-se)\nVênus em sextil com Marte (Orbe: 1°52', aproximando-se)\nUrano em sextil com Netuno (Orbe: 2°35', aproximando-se)\nNetuno em sextil com Plutão (Orbe: 1°49', aproximando-se)\n\nAscendente em Tri-Óctil com Urano (Orbe: 0°50', em Aproximação)\nDescendente em Óctil com Urano (Orbe: 0°50', em Aproximação)\nDescendente em Quincúncio com Lilith (Orbe: 1°02', em Aproximação)\nMeio do Céu em Tri-Óctil com o Sol (Orbe: 2°33', em Aproximação)\nMeio do Céu em Oposição com Netuno (Orbe: 2°57', em Separação)\nMeio do Céu em Trígono com Plutão (Orbe: 1°08', em Separação)\nMeio do Céu em Quincúncio com o Nodo Norte (Orbe: 1°33', em Separação)\nFundo do Céu em Óctil com o Sol (Orbe: 2°33', em Aproximação)\nFundo do Céu em Conjunção com Netuno (Orbe: 2°57', em Separação)\nFundo do Céu em Sextil com Plutão (Orbe: 1°08', em Separação)\nNodo Norte em Tri-Óctil com Júpiter (Orbe: 0°58', em Separação)\nLilith em Tri-Óctil com a Lua (Orbe: 2°48', em movimento)\nLilith em Tri-Óctil com Quíron (Orbe: 2°58', em movimento de separação)\nQuíron em Conjunção com a Lua (Orbe: 0°09', em movimento de separação)\nQuíron em Conjunção com Marte (Orbe: 1°16', em movimento)\nFortuna em Tri-Óctil com Vênus (Orbe: 0°48', em movimento de separação)\nFortuna em Sextil com Saturno (Orbe: 0°18', em movimento de separação)\nVértice em Sextil com Júpiter (Orbe: 0°23', em movimento)\nVértice em Octil com Netuno (Orbe: 1°59', em movimento de separação)\nVértice em Tri-Óctil com o Meio do Céu (Orbe: 0°58', em movimento)\nVértice em Octil com o Fundo do Céu (Orbe: 0°58', em movimento)",
    jogoGerado: [15, 19, 9, 13, 2, 11, 10, 23, 5, 21, 24, 25, 1, 6, 17],
    resultado: [1, 2, 4, 8, 10, 11, 14, 15, 17, 19, 20, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h49", concurso: "3686", data: "15/05/2026", hora: "",
    textoMapa: "Sol em Touro 25°09', na 5ª Casa;\nLua em Touro 13°20', na 5ª Casa;\nMercúrio em Touro 26°51', na 5ª Casa;\nVênus em Gêmeos 26°21', na 6ª Casa;\nMarte em Áries 27°47', na 4ª Casa;\nJúpiter em Câncer 21°12', na 7ª Casa;\nSaturno em Áries 10°45', na 4ª Casa;\nUrano em Gêmeos 1°07', na 5ª Casa;\nNetuno em Áries 3°41', na 3ª Casa;\nPlutão em Aquário 5°29', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 5°01', retrógrado, na 2ª Casa;\nLilith em Sagitário 16°22', na 11ª Casa;\nQuíron em Áries 28°21', na 4ª Casa;\nFortuna em Capricórnio. 27°54', no\nVértice da 1ª Casa em Touro 21°08', no\nAscendente da 5ª Casa em Capricórnio 16°05'\nMC em Libra 7°42'\n\n1ª Casa em Capricórnio 16°05'\n2ª Casa em Aquário 11°23'\n3ª Casa em Peixes 7°18'\n4ª Casa em Áries 7°42'\n5ª Casa em Touro 13°02'\n6ª Casa em Gêmeos 17°19'\n7ª Casa em Câncer 16°05'\n8ª Casa em Leão 11°23'\n9ª Casa em Virgem 7°18'\n10ª Casa em Libra 7°42'\n11ª Casa em Escorpião 13°02'\n12ª Casa em Sagitário 17°19'\n\nSol em conjunção com Mercúrio (Orbe: 1°42', separando-se)\nSol em octil com Saturno (Orbe: 0°35', aproximando-se)\nLua em octil com Vênus (Orbe: 1°58', separando-se)\nMercúrio em octil com Saturno (Orbe: 1°06', separando-se)\nVênus em sextil com Marte (Orbe: 1°25', aproximando-se)\nUrano em sextil com Netuno (Orbe: 2°33', aproximando-se)\nNetuno em sextil com Plutão (Orbe: 1°47', aproximando-se)\n\nAscendente em trígono com a Lua (Orbe: 2°45', Separando)\nAscendente em trígono com o óctil de Urano (Orbe: 0°02', Aplicando)\nDescendente em sextil com a Lua (Orbe: 2°45', Separando)\nDescendente em óctil com Urano (Orbe: 0°02', Aplicando)\nDescendente em quincúncio com Lilith (Orbe: 0°17', Aplicando)\nMeio do Céu em trígono com o Sol (Orbe: 2°27', Aplicando)\nMeio do Céu em trígono com Plutão (Orbe: 2°12', Separando)\nMeio do Céu em quincúncio com o Nodo Norte (Orbe: 2°40', Separando)\nFundo do Céu em óctil com o Sol (\nOrbe: 2°27', Aplicando) Fundo do Céu em sextil com Plutão (Orbe: 2°12', Separando)\nNodo Norte em trígono com Júpiter (Orbe: 1°11', Separando)\nQuíron em sextil com Vênus (Orbe: 2°00', em conjunção)\nQuíron em conjunção com Marte (Orbe: 0°34', em conjunção)\nTrígono da Fortuna com o Sol (Orbe: 2°45', em separação)\nTrígono da Fortuna com Mercúrio (Orbe: 1°03', em separação)\nQuincúncio da Fortuna com Vênus (Orbe: 1°33', em separação)\nQuadratura da Fortuna com Marte (Orbe: 0°07', em separação)\nQuadratura da Fortuna com Quíron (Orbe: 0°26', em conjunção)\nSextil da Fortuna com o Vértice (Orbe: 2°05', em separação)\nSextil do Vértice com Júpiter (Orbe: 0°04', em conjunção)\nOctil do Vértice com Netuno (Orbe: 2°26', em separação)\nTrígono do Vértice com o Meio do Céu (Orbe: 1°33', em conjunção)\nOctil do Vértice com o Fundo do Céu (Orbe: 1°33', em conjunção)",
    jogoGerado: [5, 9, 6, 15, 23, 25, 19, 13, 2, 4, 8, 11, 10, 24, 17],
    resultado: [1, 2, 4, 5, 6, 8, 9, 10, 13, 15, 18, 19, 23, 24, 25],
    obs: "",
  },
  {
    id: "h50", concurso: "3687", data: "16/05/2026", hora: "",
    textoMapa: "Sol em Touro 26°07', na 5ª Casa;\nLua em Touro 28°29', na 5ª Casa;\nMercúrio em Touro 29°02', na 5ª Casa;\nVênus em Gêmeos 27°33', na 6ª Casa;\nMarte em Áries 28°32', na 4ª Casa;\nJúpiter em Câncer 21°23', na 7ª Casa;\nSaturno em Áries 10°51', na 4ª Casa;\nUrano em Gêmeos 1°11', na 5ª Casa;\nNetuno em Áries 3°43', na 3ª Casa;\nPlutão em Aquário 5°29', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°58', retrógrado, na 2ª Casa;\nLilith em Sagitário 16°29', na 11ª Casa;\nQuíron em Áries 28°24', na 4ª Casa;\nFortuna em Capricórnio. 14°35', no\nVértice da 12ª Casa em Touro 21°37', no\nAscendente da 5ª Casa em Capricórnio 16°57'\nMC em Libra 8°46'\n\n1ª Casa em Capricórnio 16°57'\n2ª Casa em Aquário 12°16'\n3ª Casa em Peixes 8°16'\n4ª Casa em Áries 8°46'\n5ª Casa em Touro 14°07'\n6ª Casa em Gêmeos 18°15'\n7ª Casa em Câncer 16°57'\n8ª Casa em Leão 12°16'\n9ª Casa em Virgem 8°16'\n10ª Casa em Libra 8°46'\n11ª Casa em Escorpião 14°07'\n12ª Casa em Sagitário 18°15'\n\nConjunção Sol-Lua (Orbe: 2°21', Separando)\nConjunção Sol-Mercúrio (Orbe: 2°55', Separando)\nOctil Sol-Saturno (Orbe: 0°15', Separando)\nConjunção Lua-Mercúrio (Orbe: 0°33', Aproximando)\nOctil Lua-Saturno (Orbe: 2°37', Separando)\nConjunção Lua-Urano (Orbe: 2°42', Aproximando)\nConjunção Mercúrio-Urano (Orbe: 2°08', Aproximando)\nSextil Vênus-Marte (Orbe: 0°59', Aproximando)\nSextil Urano-Netuno (Orbe: 2°31', Aproximando)\nSextil Netuno-Plutão (Orbe: 1°45', Aproximando)\n\nTri-óctil do Ascendente com Mercúrio (Orbe: 2°54', Separando)\nTri-óctil do Ascendente com Urano (Orbe: 0°46', Separando)\nOctil do Descendente com Mercúrio (Orbe: 2°54', Separando)\nOctil do Descendente com Urano (Orbe: 0°46', Separando)\nQuincúncio do Descendente com Lilith (Orbe: 0°28', Separando)\nTri-óctil do Meio do Céu com o Sol (Orbe: 2°20', Aplicando)\nOposição do Meio do Céu com Saturno (Orbe: 2°04', Aplicando)\nOctil do Fundo do Céu com o Sol (Orbe: 2°20', Aplicando)\nConjunção do Fundo do Céu com Saturno (Orbe: 2°04', Aplicando)\nTri-óctil do Nodo Norte com Júpiter (Orbe: 1°24', Separando)\nTri-óctil de Lilith com Marte (Orbe: 2°57', Aplicando)\nSextil de Quíron Vênus (Orbe: 0°51', em movimento)\nConjunção de Quíron com Marte (Orbe: 0°07', em movimento)\nLua em trí-óctil com Fortuna (Orbe: 1°06', em movimento)\nMercúrio em trí-óctil com Fortuna (Orbe: 0°32', em movimento)\nUrano em trí-óctil com Fortuna (Orbe: 1°35', em movimento)\nConjunção de Fortuna com o Ascendente (Orbe: 2°21', em movimento)\nOposição de Fortuna com o Descendente (Orbe: 2°21', em movimento)\nSextil de Vértice com Júpiter (Orbe: 0°14', em movimento)\nOctil de Vértice com Netuno (Orbe: 2°54', em movimento)\nTri-óctil de Vértice com o Meio do Céu (Orbe: 2°08', em movimento)\nOctil de Vértice com o Fundo do Céu (Orbe: 2°08', em movimento)",
    jogoGerado: [15, 23, 9, 13, 4, 6, 12, 25, 2, 5, 19, 21, 24, 10, 18],
    resultado: [3, 4, 5, 6, 12, 13, 14, 16, 17, 18, 20, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h51", concurso: "3688", data: "18/05/2026", hora: "",
    textoMapa: "Sol em Touro 28°02', na 5ª Casa;\nLua em Gêmeos 28°53', na 6ª Casa;\nMercúrio em Gêmeos 3°24', na 5ª Casa;\nVênus em Gêmeos 29°56', na 6ª Casa;\nMarte em Touro 0°02', na 4ª Casa;\nJúpiter em Câncer 21°43', na 7ª Casa;\nSaturno em Áries 11°03', na 4ª Casa;\nUrano em Gêmeos 1°18', na 5ª Casa;\nNetuno em Áries 3°46', na 3ª Casa;\nPlutão em Aquário 5°28', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°51', retrógrado, na 2ª Casa;\nLilith em Sagitário 16°43', na 11ª Casa;\nQuíron em Áries 28°31', na 4ª Casa;\nFortuna em Sagitário. 17°51', no\nVértice da 11ª Casa em Touro 22°36', no\nAscendente da 5ª Casa em Capricórnio 18°41'\nMC em Libra 10°54'\n\n1ª Casa em Capricórnio 18°41'\n2ª Casa em Aquário 14°01'\n3ª Casa em Peixes 10°12'\n4ª Casa em Áries 10°54'\n5ª Casa em Touro 16°14'\n6ª Casa em Gêmeos 20°08'\n7ª Casa em Câncer 18°41'\n8ª Casa em Leão 14°01'\n9ª Casa em Virgem 10°12'\n10ª Casa em Libra 10°54'\n11ª Casa em Escorpião 16°14'\n12ª Casa em Sagitário 20°08'\n\nSol em octil com Saturno (Orbe: 1°59', separando)\nLua em conjunção com Vênus (Orbe: 1°03', aplicando)\nLua em sextil com Marte (Orbe: 1°09', aplicando)\nMercúrio em conjunção com Urano (Orbe: 2°06', separando)\nMercúrio em sextil com Netuno (Orbe: 0°21', aplicando)\nMercúrio em trígono com Plutão (Orbe: 2°03', aplicando)\nVênus em sextil com Marte (Orbe: 0°06', aplicando)\nUrano em sextil com Netuno (Orbe: 2°27', aplicando)\nNetuno em sextil com Plutão (Orbe: 1°42', aplicando)\n\nTri-óctilo de Mercúrio no Ascendente (Orbe: 0°17', Separando)\nTri-óctilo de Urano no Ascendente (Orbe: 2°23', Separando)\nNodo Octil no Ascendente (Orbe: 1°10', Aplicando)\nMercúrio Octil no Descendente (Orbe: 0°17', Separando)\nUrano Octil no Descendente (Orbe: 2°23', Separando)\nNodo Tri-óctilo no Descendente (Orbe: 1°10', Aplicando)\nLilith em Quincúncio no Descendente (Orbe: 1°58', Separando)\nSol Tri-óctilo no Meio do Céu (Orbe: 2°08', Aplicando)\nOposição de Saturno no Meio do Céu (Orbe: 0°08', Aplicando)\nSol Octil no Fundo do Céu (Orbe: 2°08', Aplicando)\nConjunção de Saturno no Fundo do Céu (Orbe: 0°08', Aplicando)\nQuadratura do Nodo Norte com Mercúrio (Orbe: 1°27', Aplicando)\nNodo Norte em Tri-Óctil com Júpiter (Orbe: 1°51', Separando)\nLilith em Tri-Óctil com Marte (Orbe: 1°40', Aplicando)\nQuíron em Sextil com a Lua (Orbe: 0°22', Separando)\nQuíron em Sextil com Vênus (Orbe: 1°25', Separando)\nQuíron em Conjunção com Marte (Orbe: 1°31', Separando)\nFortuna em Tri-Óctil com Marte (Orbe: 2°48', Separando)\nFortuna em Octil com Plutão (Orbe: 2°37', Aplicando)\nFortuna em Conjunção com Lilith (Orbe: 1°07', Separando)\nFortuna em Quincúncio com o Descendente (Orbe: 0°50', Separando)\nVértice em Sextil com Júpiter (Orbe: 0°53', Separando)",
    jogoGerado: [11, 15, 4, 19, 9, 13, 2, 5, 6, 10, 12, 21, 24, 25, 23],
    resultado: [1, 2, 3, 4, 5, 6, 7, 11, 12, 16, 17, 19, 21, 24, 25],
    obs: "",
  },
  {
    id: "h52", concurso: "3689", data: "19/05/2026", hora: "",
    textoMapa: "Sol em Touro 29°00', na 5ª Casa;\nLua em Câncer 13°47', na 6ª Casa;\nMercúrio em Gêmeos 5°34', na 5ª Casa;\nVênus em Câncer 1°08', na 6ª Casa;\nMarte em Touro 0°48', na 4ª Casa;\nJúpiter em Câncer 21°53', na 7ª Casa;\nSaturno em Áries 11°09', na 3ª Casa;\nUrano em Gêmeos 1°21', na 5ª Casa;\nNetuno em Áries 3°47', na 3ª Casa;\nPlutão em Aquário 5°28', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°48', retrógrado, na 2ª Casa; Lilith em Sagitário 16°49', na 11ª Casa; Quíron em Áries 28°34', na\n4ª Casa; Fortuna em Sagitário 4°46', na 5ª Casa. Vértice da 11ª casa em Touro 23°05', Ascendente na 5ª casa em Capricórnio 19°33', Meio do Céu em Libra 11°58'\n1ª Casa em Capricórnio 19°33'\n2ª Casa em Aquário 14°54'\n3ª Casa em Peixes 11°10'\n4ª Casa em Áries 11°58'\n5ª Casa em Touro 17°18'\n6ª Casa em Gêmeos 21°05'\n7ª Casa em Câncer 19°33'\n8ª Casa em Leão 14°54'\n9ª Casa em Virgem 11°10'\n10ª Casa em Libra 11°58'\n11ª Casa em Escorpião 17°18'\n12ª Casa em Sagitário 21°05'\n\nSol em octil com a Lua (Orbe: 0°12', em movimento)\nSol em octil com Saturno (Orbe: 2°51', em movimento)\nSol em conjunção com Urano (Orbe: 2°21', em movimento)\nLua em quadratura com Saturno (Orbe: 2°38', em movimento)\nLua em octil com Urano (Orbe: 2°33', em movimento)\nMercúrio em octil com Júpiter (Orbe: 1°19', em movimento)\nMercúrio em sextil com Netuno (Orbe: 1°46', em movimento)\nMercúrio em trígono com Plutão (Orbe: 0°06', em movimento)\nVênus em sextil com Marte (Orbe: 0°20', em movimento)\nVênus em quadratura com Netuno (Orbe: 2°39', em movimento)\nUrano em sextil com Netuno (Orbe: 2°25', em movimento)\nNetuno em sextil com Plutão (Orbe: 1°40', em movimento)\n\nTri-óctilo de Mercúrio no Ascendente (Orbe: 1°00', em movimento)\nOposição de Júpiter no Ascendente (Orbe: 2°20', em movimento)\nNodo Octil no Ascendente (Orbe: 0°15', em movimento)\nMercúrio Octil no Descendente (Orbe: 1°00', em movimento)\nConjunção de Júpiter no Descendente (Orbe: 2°20', em movimento)\nNodo Tri-óctilo no Descendente (Orbe: 0°15', em movimento)\nQuincúncio de Lilith no Descendente (Orbe: 2°43', em movimento)\nTri-óctilo do Sol no Meio do Céu (Orbe: 2°01', em movimento)\nQuadratura da Lua no Meio do Céu (Orbe: 1°49', em movimento)\nOposição de Saturno no Meio do Céu (Orbe: 0°49', em movimento)\nOctil do Sol no Fundo do Céu (Orbe: 2°01', em movimento)\nQuadratura da Lua no Fundo do Céu (Orbe: 1°49', em movimento)\nConjunção IC com Saturno (Orbe: 0°49', Separando)\nQuadratura do Nodo Norte com Mercúrio (Orbe: 0°45', Separando)\nTri-óctil do Nodo Norte com Júpiter (Orbe: 2°05', Separando)\nTri-óctil de Lilith com Marte (Orbe: 1°01', Aplicando)\nSextil de Quíron com Vênus (Orbe: 2°33', Separando)\nConjunção de Quíron com Marte (Orbe: 2°13', Separando)\nOposição de Fortuna com Mercúrio (Orbe: 0°47', Aplicando)\nTri-óctil de Fortuna com Júpiter (Orbe: 2°07', Aplicando)\nTrígono de Fortuna com Netuno (Orbe: 0°58', Separando)\nSextil de Fortuna com Plutão (Orbe: 0°41', Aplicando)\nQuadratura de Fortuna com o Nodo Norte (Orbe: 0°02', Aplicando)\nOctil de Fortuna com o Ascendente (Orbe: 0°12',\nTri-óctil da Fortuna DSC (Orbe: 0°12', Separando )\nSextil do Vértice Júpiter (Orbe: 1°11', Separando)\n",
    jogoGerado: [5, 15, 19, 9, 13, 18, 2, 3, 6, 10, 20, 7, 23, 24, 8],
    resultado: [3, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 23],
    obs: "",
  },
  {
    id: "h53", concurso: "3690", data: "20/05/2026", hora: "",
    textoMapa: "Sol em Touro 29°58', na 5ª Casa;\nLua em Câncer 28°20', na 7ª Casa;\nMercúrio em Gêmeos 7°42', na 5ª Casa;\nVênus em Câncer 2°20', na 6ª Casa;\nMarte em Touro 1°33', na 4ª Casa;\nJúpiter em Câncer 22°04', na 7ª Casa;\nSaturno em Áries 11°14', na 3ª Casa;\nUrano em Gêmeos 1°25', na 5ª Casa;\nNetuno em Áries 3°49', na 3ª Casa;\nPlutão em Aquário 5°27', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°45', retrógrado, na 2ª Casa; Lilith em Sagitário 16°56', na 11ª Casa; Quíron em Áries 28°37', na 4ª Casa; Fortuna em Escorpião 22°03', na 5ª\nCasa . Vertex da 11ª casa em Touro 23°34', Ascendente na 5ª casa em Capricórnio 20°25', Meio do Céu em Libra 13°02'\n\n1ª Casa em Capricórnio 20°25'\n2ª Casa em Aquário 15°47'\n3ª Casa em Peixes 12°08'\n4ª Casa em Áries 13°02'\n5ª Casa em Touro 18°21'\n6ª Casa em Gêmeos 22°01'\n7ª Casa em Câncer 20°25'\n8ª Casa em Leão 15°47'\n9ª Casa em Virgem 12°08'\n10ª Casa em Libra 13°02'\n11ª Casa em Escorpião 18°21'\n12ª Casa em Sagitário 22°01'\n\nSol em sextil com a Lua (Orbe: 1°38', em movimento subsequente)\nSol em conjunção com Urano (Orbe: 1°26', em movimento subsequente)\nMercúrio em octil com Júpiter (Orbe: 0°38', em movimento subsequente)\nMercúrio em trígono com Plutão (Orbe: 2°15', em movimento subsequente)\nVênus em sextil com Marte (Orbe: 0°46', em movimento subsequente)\nVênus em quadratura com Netuno (Orbe: 1°29', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°23', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 1°38', em movimento subsequente)\n\nTri-óctilo de Mercúrio no Ascendente (Orbe: 2°17', em movimento)\nOposição de Júpiter no Ascendente (Orbe: 1°38', em movimento)\nNodo Octil no Ascendente (Orbe: 0°39', em movimento)\nMercúrio Octil no Descendente (Orbe: 2°17', em movimento)\nConjunção de Júpiter no Descendente (Orbe: 1°38', em movimento)\nNodo Tri-óctilo no Descendente (Orbe: 0°39', em movimento)\nSol Tri-óctilo no Meio do Céu (Orbe: 1°55', em movimento)\nOposição de Saturno no Meio do Céu (Orbe: 1°47', em movimento)\nSol Octil no Fundo do Céu (Orbe: 1°55', em movimento)\nConjunção de Saturno no Fundo do Céu (Orbe: 1°47', em movimento)\nNodo Norte em Quadratura com Mercúrio (Orbe: 2°57', em movimento)\nNodo Norte em Trígono com Vênus (Orbe:\nNodo Norte em trígono com Júpiter (Orbe: 2°25', em movimento)\nLilith em trígono com Marte (Orbe: 0°23', em movimento)\nQuíron em quadratura com a Lua (Orbe: 0°17', em movimento)\nQuíron em conjunção com Marte (Orbe: 2°55', em movimento)\nFortuna em trígono com Júpiter (Orbe: 0°00', em movimento)\nFortuna em sextil com o Ascendente (Orbe: 1°38', em movimento)\nFortuna em trígono com o Descendente (Orbe: 1°38', em movimento)\nVertex em sextil com Júpiter (Orbe: 1°30', em movimento)\nVertex em octil com Saturno (Orbe: 2°40', em movimento)",
    jogoGerado: [5, 15, 19, 9, 13, 18, 2, 6, 21, 24, 25, 4, 20, 23, 7],
    resultado: [2, 5, 6, 7, 8, 9, 12, 15, 18, 19, 20, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h54", concurso: "3691", data: "21/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 0°56', na 5ª Casa;\nLua em Leão 12°26', na 7ª Casa;\nMercúrio em Gêmeos 9°50', na 5ª Casa;\nVênus em Câncer 3°31', na 6ª Casa;\nMarte em Touro 2°18', na 4ª Casa;\nJúpiter em Câncer 22°14', na 7ª Casa;\nSaturno em Áries 11°20', na 3ª Casa;\nUrano em Gêmeos 1°28', na 5ª Casa;\nNetuno em Áries 3°50', na 3ª Casa;\nPlutão em Aquário 5°27', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°42', retrógrado, na 2ª Casa;\nLilith em Sagitário 17°03', na 11ª Casa;\nQuíron em Áries 28°40', na 4ª Casa;\nFortuna em Escorpião 9°46', na 10ª Casa.\nVertex em Touro 24°03', na 5ª Casa,\nAscendente em Capricórnio 21°16',\nMeio do Céu em Libra 14°06'\n\n1ª Casa em Capricórnio 21°16'\n2ª Casa em Aquário 16°40'\n3ª Casa em Peixes 13°07'\n4ª Casa em Áries 14°06'\n5ª Casa em Touro 19°23'\n6ª Casa em Gêmeos 22°56'\n7ª Casa em Câncer 21°16'\n8ª Casa em Leão 16°40'\n9ª Casa em Virgem 13°07'\n10ª Casa em Libra 14°06'\n11ª Casa em Escorpião 19°23'\n12ª Casa em Sagitário 22°56'\n\nSol em conjunção com Urano (Orbe: 0°32', em movimento subsequente)\nSol em sextil com Netuno (Orbe: 2°54', em movimento subsequente)\nLua em sextil com Mercúrio (Orbe: 2°36', em movimento subsequente)\nLua em trígono com Saturno (Orbe: 1°05', em movimento subsequente)\nMercúrio em octil com Júpiter (Orbe: 2°35', em movimento subsequente)\nMercúrio em sextil com Saturno (Orbe: 1°30', em movimento subsequente)\nVênus em sextil com Marte (Orbe: 1°13', em movimento subsequente)\nVênus em quadratura com Netuno (Orbe: 0°19', em movimento subsequente)\nVênus em quincúncio com Plutão (Orbe: 1°55', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°21', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 1°36', em movimento subsequente)\n\nOposição ao Ascendente com Júpiter (Orbe: 0°57', em movimento)\nNodo Octil no Ascendente (Orbe: 1°34', em movimento)\nConjunção do Descendente com Júpiter (Orbe: 0°57', em movimento)\nNodo Tri-Octil no Descendente (Orbe: 1°34', em movimento)\nMeio do Céu Tri-Octil com o Sol (Orbe: 1°49', em movimento)\nMeio do Céu Sextil com a Lua (Orbe: 1°40', em movimento)\nMeio do Céu Oposição a Saturno (Orbe: 2°46', em movimento)\nMeio do Céu Tri-Octil com Urano (Orbe: 2°22', em movimento) Meio do Céu\nSextil com Lilith (Orbe: 2°56', em movimento)\nFundo do Céu Octil com o Sol (Orbe: 1°49', em movimento)\nFundo do Céu Trígono com a Lua (Orbe: 1°40', em movimento)\nFundo do Céu Conjunção com Saturno (Orbe: 2°46', em movimento) Separando)\nIC em Octil com Urano (Orbe: 2°22', em aplicação)\nIC em Trígono com Lilith (Orbe: 2°56', em aplicação)\nNodo Norte em Trígono com Vênus (Orbe: 1°10', em aplicação)\nNodo Norte em Sextil com Marte (Orbe: 2°24', em aplicação)\nNodo Norte em Tri-Octil com Júpiter (Orbe: 2°32', em separação)\nLilith em Tri-Octil com Marte (Orbe: 0°14', em separação)\nFortuna em Quadratura com a Lua (Orbe: 2°40', em aplicação)\nFortuna em Quincúncio com Mercúrio (Orbe: 0°03', em aplicação)\nFortuna em Quincúncio com Saturno (Orbe: 1°34', em aplicação)\nVertex em Sextil com Júpiter (Orbe: 1°49', em separação)\nVertex em Octil com Saturno (Orbe: 2°16', em aplicação)\nVertex em Trígono com o Ascendente (Orbe: 2°46', Separando)\nSextil do Vértice DSC (Orbe: 2°46', Separando)",
    jogoGerado: [5, 23, 9, 13, 14, 15, 19, 4, 10, 8, 2, 21, 7, 18, 24],
    resultado: [2, 3, 5, 8, 9, 10, 13, 14, 15, 18, 19, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h55", concurso: "3692", data: "22/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 1°53', na 5ª Casa;\nLua em Leão 26°07', na 8ª Casa;\nMercúrio em Gêmeos 11°56', na 5ª Casa;\nVênus em Câncer 4°43', na 6ª Casa;\nMarte em Touro 3°03', na 4ª Casa;\nJúpiter em Câncer 22°25', na 7ª Casa;\nSaturno em Áries 11°26', na 3ª Casa;\nUrano em Gêmeos 1°32', na 5ª Casa;\nNetuno em Áries 3°52', na 3ª Casa;\nPlutão em Aquário 5°26', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°39', retrógrado, na 2ª Casa;\nLilith em Sagitário 17°09', na 11ª Casa;\nQuíron em Áries 28°44', na 4ª Casa\n; Fortuna em Libra 27°55', na 10ª Casa. Vértice da casa\nem Touro 24°32', na 5ª casa,\nAscendente em Capricórnio 22°08',\nMeio do Céu em Libra 15°10'\n\n1ª Casa em Capricórnio 22°08'\n2ª Casa em Aquário 17°33'\n3ª Casa em Peixes 14°05'\n4ª Casa em Áries 15°10'\n5ª Casa em Touro 20°26'\n6ª Casa em Gêmeos 23°52'\n7ª Casa em Câncer 22°08'\n8ª Casa em Leão 17°33'\n9ª Casa em Virgem 14°05'\n10ª Casa em Libra 15°10'\n11ª Casa em Escorpião 20°26'\n12ª Casa em Sagitário 23°52'\n\nSol em conjunção com Urano (Orbe: 0°21', separando)\nSol em sextil com Netuno (Orbe: 1°58', aplicando)\nLua em trí-óctil com Saturno (Orbe: 0°19', aplicando)\nMercúrio em sextil com Saturno (Orbe: 0°29', separando)\nVênus em sextil com Marte (Orbe: 1°39', separando)\nVênus em quadratura com Netuno (Orbe: 0°51', separando)\nVênus em quincúncio com Plutão (Orbe: 0°43', aplicando)\nMarte em quadratura com Plutão (Orbe: 2°23', aplicando)\nUrano em sextil com Netuno (Orbe: 2°19', aplicando)\nNetuno em sextil com Plutão (Orbe: 1°34', aplicando)\n\nOposição ao Ascendente com Júpiter (Orbe: 0°16', em movimento)\nNodo Octil do Ascendente (Orbe: 2°29', em movimento)\nConjunção do Descendente com Júpiter (Orbe: 0°16', em movimento)\nNodo Tri-Octil do Descendente (Orbe: 2°29', em movimento)\nMeio do Céu Tri-Octil com o Sol (Orbe: 1°43', em movimento)\nMeio do Céu Tri-Octil com Urano (Orbe: 1°21', em movimento)\nMeio do Céu Sextil com Lilith (Orbe: 1°59', em movimento)\nFundo do Céu Octil com o Sol (Orbe: 1°43', em movimento)\nFundo do Céu Octil com Urano (Orbe: 1°21', em movimento)\nFundo do Céu Trígono com Lilith (Orbe: 1°59', em movimento)\nNodo Norte Quadratura com o Sol (Orbe: 2°45', em movimento)\nNodo Norte Trígono com Vênus (Orbe:\nNodo Norte em sextil com Marte (Orbe: 1°35', em movimento) Nodo\nNorte em trígono com Júpiter (Orbe: 2°46', em movimento)\nLilith em trígono com Marte (Orbe: 0°53', em movimento)\nQuíron em trígono com a Lua (Orbe: 2°37', em movimento)\nQuíron em octil com Mercúrio (Orbe: 1°48', em movimento)\nFortuna em sextil com a Lua (Orbe: 1°48', em movimento)\nFortuna em trígono com Mercúrio (Orbe: 0°59', em movimento)\nFortuna em oposição a Quíron (Orbe: 0°48', em movimento)\nFortuna em quincúncio com o Vértice (Orbe: 2°04', em movimento)\nVértice em quadratura com a Lua (Orbe: 1°34', em movimento)\nVértice em sextil com Júpiter (Orbe: 2°07', em movimento)\nVértice em octil com Saturno (Orbe: 1°53', Aplicando)\nTrígono do Vértice com o Ascendente (Orbe: 2°24', Separando)\nSextil do Vértice com o Descendente (Orbe: 2°24', Separando)",
    jogoGerado: [5, 23, 9, 13, 14, 15, 19, 25, 10, 11, 7, 20, 24, 2, 21],
    resultado: [2, 3, 5, 6, 7, 9, 10, 13, 14, 15, 19, 20, 23, 24, 25],
    obs: "",
  },
  {
    id: "h56", concurso: "3693", data: "23/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 2°51', na 5ª Casa;\nLua em Virgem 9°23', na 8ª Casa;\nMercúrio em Gêmeos 14°00', na 5ª Casa;\nVênus em Câncer 5°54', na 6ª Casa;\nMarte em Touro 3°48', na 4ª Casa;\nJúpiter em Câncer 22°35', na 6ª Casa;\nSaturno em Áries 11°32', na 3ª Casa;\nUrano em Gêmeos 1°35', na 5ª Casa;\nNetuno em Áries 3°53', na 3ª Casa;\nPlutão em Aquário 5°26', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°35', retrógrado, na 2ª Casa;\nLilith em Sagitário 17°16', na 11ª Casa;\nQuíron em Áries 28°47', na 4ª Casa\n; Fortuna em Libra 16°28', na 10ª Casa. Vértice da casa\nem Touro 25°01', na 5ª casa,\nAscendente em Capricórnio 23°00',\nMeio do Céu em Libra 16°14'\n\n1ª Casa em Capricórnio 23°00'\n2ª Casa em Aquário 18°27'\n3ª Casa em Peixes 15°03'\n4ª Casa em Áries 16°14'\n5ª Casa em Touro 21°28'\n6ª Casa em Gêmeos 24°47'\n7ª Casa em Câncer 23°00'\n8ª Casa em Leão 18°27'\n9ª Casa em Virgem 15°03'\n10ª Casa em Libra 16°14'\n11ª Casa em Escorpião 21°28'\n12ª Casa em Sagitário 24°47'\n\nSol em conjunção com Urano (Orbe: 1°15', separando)\nSol em sextil com Netuno (Orbe: 1°01', aplicando)\nSol em trígono com Plutão (Orbe: 2°34', aplicando)\nLua em octil com Júpiter (Orbe: 1°47', separando)\nLua em quincúncio com Saturno (Orbe: 2°08', aplicando)\nMercúrio em sextil com Saturno (Orbe: 2°28', separando)\nVênus em sextil com Marte (Orbe: 2°06', separando)\nVênus em quadratura com Netuno (Orbe: 2°01', separando)\nVênus em quincúncio com Plutão (Orbe: 0°28', separando)\nMarte em quadratura com Plutão (Orbe: 1°38', aplicando)\nUrano em sextil com Netuno (Orbe: 2°17', aplicando)\nNetuno em sextil com Plutão (Orbe: 1°32', aplicando)\n\nLua em Tri-Octil no Ascendente (Orbe: 1°22', em movimento)\nOposição do Ascendente a Júpiter (Orbe: 0°24', em movimento de separação)\nLua em Octil no Descendente (Orbe: 1°22', em movimento)\nConjunção do Descendente com Júpiter (Orbe: 0°24', em movimento de separação)\nSol em Tri-Octil no Meio do Céu (Orbe: 1°37', em movimento)\nMeio do Céu em Trígono com Mercúrio (Orbe: 2°14', em movimento de separação)\nUrano em Tri-Octil no Meio do Céu (Orbe: 0°21', em movimento)\nSextil no Meio do Céu com Lilith (Orbe: 1°02', em movimento)\nSol em Octil no Fundo do Céu (Orbe: 1°37', em movimento)\nSextil no Fundo do Céu com Mercúrio (Orbe: 2°14', em movimento de separação)\nUrano em Octil no Fundo do Céu (Orbe: 0°21', em movimento)\nTrígono no Fundo do Céu com Lilith (Orbe: 1°02', em movimento)\nNodo Norte em quadratura com o Sol (Orbe: 1°44', em aplicação) Nodo\nNorte em trígono com Vênus (Orbe: 1°18', em separação)\nNodo Norte em sextil com Marte (Orbe: 0°47', em aplicação)\nNodo Norte em trígono com Júpiter (Orbe: 2°59', em separação)\nLilith em trígono com Marte (Orbe: 1°31', em separação)\nQuíron em octil com Mercúrio (Orbe: 0°12', em separação)\nFortuna em trígono com o Sol (Orbe: 1°22', em aplicação)\nFortuna em trígono com Mercúrio (Orbe: 2°28', em separação)\nFortuna em trígono com Urano (Orbe: 0°07', em aplicação)\nFortuna em sextil com Lilith (Orbe: 0°47', em aplicação)\nFortuna em conjunção com o Meio do Céu (Orbe: 0°14', em separação)\nFortuna em oposição ao Fundo do Céu (Orbe:\nVertex em sextil com Júpiter (Orbe: 2°26', Separando)\nVertex em octil com Saturno (Orbe: 1°30', Aplicando)\nVertex em trígono com o Ascendente (Orbe: 2°01', Separando)\nVertex em sextil com o Descendente (Orbe: 2°01', Separando)",
    jogoGerado: [9, 13, 14, 15, 19, 25, 11, 2, 4, 6, 18, 20, 21, 24, 17],
    resultado: [1, 4, 6, 7, 9, 10, 11, 13, 14, 16, 17, 18, 20, 21, 25],
    obs: "",
  },
  {
    id: "h1", concurso: "3694", data: "25/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 4°46', na 5ª Casa;\nLua em Libra 4°55', na 9ª Casa;\nMercúrio em Gêmeos 18°02', na 5ª Casa;\nVênus em Câncer 8°17', na 6ª Casa;\nMarte em Touro 5°17', na 4ª Casa;\nJúpiter em Câncer 22°57', na 6ª Casa;\nSaturno em Áries 11°43', na 3ª Casa;\nUrano em Gêmeos 1°42', na 5ª Casa;\nNetuno em Áries 3°56', na 3ª Casa;\nPlutão em Aquário 5°25', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°29', retrógrado, na 2ª Casa;\nLilith em Sagitário 17°30', na 11ª Casa;\nQuíron em Áries 28°53', na 4ª Casa;\nFortuna em Virgem 24°34', na 9ª Casa.\nVertex em Touro 25°59', na 5ª Casa,\nAscendente em Capricórnio 24°43',\nMeio do Céu em Libra 18°21'\n\n1ª Casa em Capricórnio 24°43'\n2ª Casa em Aquário 20°13'\n3ª Casa em Peixes 17°00'\n4ª Casa em Áries 18°21'\n5ª Casa em Touro 23°32'\n6ª Casa em Gêmeos 26°37'\n7ª Casa em Câncer 24°43'\n8ª Casa em Leão 20°13'\n9ª Casa em Virgem 17°00'\n10ª Casa em Libra 18°21'\n11ª Casa em Escorpião 23°32'\n12ª Casa em Sagitário 26°37'\n\nSol em trígono com a Lua (Orbe: 0°08', Separando)\nSol em sextil com Netuno (Orbe: 0°50', Separando)\nSol em trígono com Plutão (Orbe: 0°38', Iniciando)\nLua em quincúncio com Marte (Orbe: 0°21', Iniciando)\nLua em oposição a Netuno (Orbe: 0°59', Separando)\nLua em trígono com Plutão (Orbe: 0°29', Iniciando)\nMercúrio em octil com Marte (Orbe: 2°15', Iniciando)\nMercúrio em trígono com Plutão (Orbe: 2°23', Iniciando)\nVênus em sextil com Marte (Orbe: 2°59', Separando)\nVênus em quincúncio com Plutão (Orbe: 2°51', Separando)\nMarte em quadratura com Plutão (Orbe: 0°07', Iniciando)\nUrano em sextil com Netuno (Orbe: 2°13', Iniciando)\nNetuno Sextil de Plutão (Orbe: 1°29', em aplicação)\n\nOposição Ascendente Júpiter (Orbe: 1°46', Separando)\nConjunção Descendente Júpiter (Orbe: 1°46', Separando)\nMeio do Céu Tri-óctil Sol (Orbe: 1°25', Aplicando)\nMeio do Céu Trígono Mercúrio (Orbe: 0°19', Separando)\nMeio do Céu Tri-óctil Urano (Orbe: 1°38', Separando)\nMeio do Céu Tri-óctil Nodo (Orbe: 1°08', Aplicando)\nMeio do Céu Sextil Lilith (Orbe: 0°51', Separando)\nFundo do Céu Octil Sol (Orbe: 1°25', Aplicando)\nFundo do Céu Sextil Mercúrio (Orbe: 0°19', Separando)\nFundo do Céu Octil Urano (Orbe: 1°38', Separando)\nFundo do Céu Octil Nodo (Orbe: 1°08', Aplicando)\nFundo do Céu Trígono Lilith (Orbe: 0°51', Nodo em\nquadratura com o Sol (Orbe: 0°17', Separando)\nNodo em quincúncio com a Lua (Orbe: 0°26', Separando)\nNodo em sextil com Marte (Orbe: 0°48', Separando)\nNodo em quadratura com Urano (Orbe: 2°46', Aplicando)\nLilith em oposição a Mercúrio (Orbe: 0°31', Separando)\nLilith em trígono com Marte (Orbe: 2°47', Separando)\nLilith em octil com Plutão (Orbe: 2°55', Aplicando)\nFortuna em sextil com Júpiter (Orbe: 1°37', Separando)\nFortuna em trígono com o Ascendente (Orbe: 0°08', Separando)\nFortuna em sextil com o Descendente (Orbe: 0°08', Separando)\nVértice em octil com Vênus (Orbe: 2°42', Separando)\nVértice em octil com Saturno (Orbe: 0°43', Aplicando)\nTrígono do Vértice com o Ascendente (Orbe: 1°16', Separando)\nSextil do Vértice com o Descendente (Orbe: 1°16', Separando)",
    jogoGerado: [9, 13, 14, 15, 17, 23, 19, 2, 20, 5, 7, 6, 18, 22, 24],
    resultado: [2, 4, 5, 7, 8, 9, 13, 14, 17, 18, 19, 20, 22, 23, 24],
    obs: "Mapa retroativo — análise inicial do método",
  },
  {
    id: "h2", concurso: "3695", data: "26/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 5°44', na 5ª Casa;\nLua em Libra 17°19', na 9ª Casa;\nMercúrio em Gêmeos 19°59', na 5ª Casa;\nVênus em Câncer 9°28', na 6ª Casa;\nMarte em Touro 6°02', na 4ª Casa;\nJúpiter em Câncer 23°08', na 6ª Casa;\nSaturno em Áries 11°48', na 3ª Casa;\nUrano em Gêmeos 1°46', na 5ª Casa;\nNetuno em Áries 3°57', na 3ª Casa;\nPlutão em Aquário 5°24', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°26', retrógrado, na 2ª Casa;\nLilith em Sagitário 17°36', na 11ª Casa;\nQuíron em Áries 28°56', na 4ª Casa\n; Fortuna em Virgem 13°59', na 8ª Casa. Vértice da casa\nem Touro 26°28', na 5ª casa,\nAscendente em Capricórnio 25°35',\nMeio do Céu em Libra 19°24'\n\n1ª Casa em Capricórnio 25°35'\n2ª Casa em Aquário 21°06'\n3ª Casa em Peixes 17°59'\n4ª Casa em Áries 19°24'\n5ª Casa em Touro 24°33'\n6ª Casa em Gêmeos 27°32'\n7ª Casa em Câncer 25°35'\n8ª Casa em Leão 21°06'\n9ª Casa em Virgem 17°59'\n10ª Casa em Libra 19°24'\n11ª Casa em Escorpião 24°33'\n12ª Casa em Sagitário 27°32'\n\nSol em octil com Júpiter (Orbe: 2°23', em movimento subsequente)\nSol em sextil com Netuno (Orbe: 1°47', em movimento subsequente)\nSol em trígono com Plutão (Orbe: 0°19', em movimento subsequente)\nLua em trígono com Mercúrio (Orbe: 2°39', em movimento subsequente)\nLua em trígono com Urano (Orbe: 0°33', em movimento subsequente)\nMercúrio em octil com Marte (Orbe: 1°02', em movimento subsequente)\nMercúrio em trígono com Plutão (Orbe: 0°25', em movimento subsequente)\nVênus em quadratura com Saturno (Orbe: 2°19', em movimento subsequente)\nMarte em quadratura com Plutão (Orbe: 0°37', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°11', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 1°27', em movimento subsequente)\n\nOposição ao Ascendente com Júpiter (Orbe: 2°26', Separando)\nConjunção com o Descendente com Júpiter (Orbe: 2°26', Separando)\nTri-óctil do Meio do Céu com o Sol (Orbe: 1°19', Aplicando)\nConjunção do Meio do Céu com a Lua (Orbe: 2°04', Separando)\nTrígono do Meio do Céu com Mercúrio (Orbe: 0°34', Aplicando)\nTri-óctil do Meio do Céu com Urano (Orbe: 2°38', Separando)\nTri-óctil do Meio do Céu com o Nodo Norte (Orbe: 0°01', Aplicando)\nSextil do Meio do Céu com Lilith (Orbe: 1°47', Separando)\nOctil do Fundo do Céu com o Sol (Orbe: 1°19', Aplicando)\nOposição do Fundo do Céu com a Lua (Orbe: 2°04', Separando)\nSextil do Fundo do Céu com Mercúrio (Orbe: 0°34', Aplicando)\nOctil do Fundo do Céu com Urano (Orbe: 2°38', Separando)\nNodo Octil IC (Orbe: 0°01', em movimento)\nTrígono IC com Lilith (Orbe: 1°47', em movimento)\nQuadratura do Nodo com o Sol (Orbe: 1°18', em movimento)\nTri-Octil do Nodo com a Lua (Orbe: 2°06', em movimento)\nSextil do Nodo com Marte (Orbe: 1°36', em movimento)\nQuadratura do Nodo com Urano (Orbe: 2°39', em movimento)\nSextil de Lilith com a Lua (Orbe: 0°16', em movimento)\nOposição de Lilith com Mercúrio (Orbe: 2°22', em movimento)\nOctil de Lilith com Plutão (Orbe: 2°48', em movimento)\nQuincúncio de Fortuna com Saturno (Orbe: 2°11', em movimento)\nTri-Octil de Fortuna com Quíron (Orbe: 0°03', em movimento)\nOctil de Vértice com Vênus (Orbe: 2°00', em movimento)\nVertex em octil com Saturno (Orbe: 0°19', em movimento aplicado)\nVertex em trígono com o Ascendente (Orbe: 0°53', em movimento de separação)\nVertex em sextil com o Descendente (Orbe: 0°53', em movimento de separação)",
    jogoGerado: [2, 6, 9, 13, 15, 7, 1, 24, 4, 18, 23, 16, 17, 11, 5],
    resultado: [1, 2, 3, 4, 6, 8, 9, 13, 15, 17, 18, 21, 22, 23, 24],
    obs: "Erro grave — energia mal interpretada, casas baixas ignoradas",
  },
  {
    id: "h3", concurso: "3696", data: "27/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 6°42', na 5ª Casa;\nLua em Libra 29°33', na 10ª Casa;\nMercúrio em Gêmeos 21°54', na 5ª Casa;\nVênus em Câncer 10°39', na 6ª Casa;\nMarte em Touro 6°47', na 4ª Casa;\nJúpiter em Câncer 23°19', na 6ª Casa;\nSaturno em Áries 11°53', na 3ª Casa;\nUrano em Gêmeos 1°49', na 5ª Casa;\nNetuno em Áries 3°58', na 3ª Casa;\nPlutão em Aquário 5°24', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°23', retrógrado, na 2ª Casa; Lilith em Sagitário 17°43', na 11ª Casa; Quíron em Áries 28°59', na 4ª Casa; Fortuna em Virgem 3°35', na 5ª\nCasa . Vértice da 8ª casa em Touro 26°57', Ascendente na 5ª casa em Capricórnio 26°26', Meio do Céu em Libra 20°27'\n\n1ª Casa em Capricórnio 26°26'\n2ª Casa em Aquário 22°00'\n3ª Casa em Peixes 18°57'\n4ª Casa em Áries 20°27'\n5ª Casa em Touro 25°34'\n6ª Casa em Gêmeos 28°27'\n7ª Casa em Câncer 26°26'\n8ª Casa em Leão 22°00'\n9ª Casa em Virgem 18°57'\n10ª Casa em Libra 20°27'\n11ª Casa em Escorpião 25°34'\n12ª Casa em Sagitário 28°27'\n\nSol em octil com Júpiter (Orbe: 1°37', em movimento subsequente)\nSol em sextil com Netuno (Orbe: 2°43', em movimento subsequente)\nSol em trígono com Plutão (Orbe: 1°17', em movimento subsequente)\nLua em quincúncio com Urano (Orbe: 2°16', em movimento subsequente)\nMercúrio em octil com Marte (Orbe: 0°07', em movimento subsequente)\nMercúrio em trígono com Plutão (Orbe: 1°30', em movimento subsequente)\nVênus em quadratura com Saturno (Orbe: 1°14', em movimento subsequente)\nMarte em quadratura com Plutão (Orbe: 1°22', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°08', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 1°25', em movimento subsequente)\n\nAscendente em quadratura com Quíron (Orbe: 2°32', em aplicação)\nDescendente em quadratura com Quíron (Orbe: 2°32', em aplicação)\nMeio do Céu em trígono com o Sol (Orbe: 1°14', em aplicação)\nMeio do Céu em trígono com Mercúrio (Orbe: 1°26', em aplicação)\nMeio do Céu em quadratura com Júpiter (Orbe: 2°51', em aplicação)\nMeio do Céu em trígono com o Nodo Lunar (Orbe: 1°04', em separação)\nMeio do Céu em sextil com Lilith (Orbe: 2°44', em separação)\nFundo do Céu em octil com o Sol (Orbe: 1°14', em aplicação)\nFundo do Céu em sextil com Mercúrio (Orbe: 1°26', em aplicação)\nFundo do Céu em quadratura com Júpiter (Orbe: 2°51', em aplicação)\nFundo do Céu em octil com o Nodo Lunar (Orbe: 1°04', em separação)\nFundo do Céu em trígono com Lilith (Orbe: 2°44', em separação)\nNodo Lunar em quadratura com o Sol (Orbe:\nNodo em sextil com Marte (Orbe: 2° 24', Separando)\nNodo em quadratura com Urano (Orbe: 2°33', Aplicando)\nLilith em octil com Plutão (Orbe: 2°40', Aplicando)\nQuíron em oposição à Lua (Orbe: 0°33', Separando)\nFortuna em quadratura com Urano (Orbe: 1°45', Separando)\nFortuna em quincúncio com Netuno (Orbe: 0°23', Aplicando)\nFortuna em quincúncio com Plutão (Orbe: 1°48', Aplicando)\nFortuna em oposição ao Nodo (Orbe: 0°47', Aplicando)\nFortuna em octil com o Meio do Céu (Orbe: 1°52', Aplicando)\nFortuna em trí-óctil com o Fundo do Céu (Orbe: 1°52', Aplicando)\nVértice em quincúncio com a Lua (Orbe: 2°35', Aplicando)\nVértice em octil com Vênus (Orbe:\nVertex em Octil com Saturno (Orbe: 0°03', Separando )\nVertex em Trígono com o Ascendente (Orbe: 0°30', Separando)\nVertex em Sextil com o Descendente (Orbe: 0°30', Separando)",
    jogoGerado: [2, 6, 9, 11, 13, 15, 21, 23, 5, 18, 3, 24, 17, 7, 19],
    resultado: [2, 3, 5, 6, 7, 9, 11, 13, 15, 16, 17, 19, 21, 23, 24],
    obs: "Melhor dos 3 jogos alternativos gerados naquele dia",
  },
  {
    id: "h4", concurso: "3697", data: "28/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 7°39', na 5ª Casa;\nLua em Escorpião 11°39', na 10ª Casa;\nMercúrio em Gêmeos 23°47', na 5ª Casa;\nVênus em Câncer 11°50', na 6ª Casa;\nMarte em Touro 7°31', na 4ª Casa;\nJúpiter em Câncer 23°30', na 6ª Casa;\nSaturno em Áries 11°59', na 3ª Casa;\nUrano em Gêmeos 1°53', na 5ª Casa;\nNetuno em Áries 4°00', na 3ª Casa;\nPlutão em Aquário 5°23', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°20', retrógrado, na 2ª Casa; Lilith em Sagitário 17°50', na 11ª Casa; Quíron em Áries 29°02', na\n4ª Casa; Fortuna em Leão 23°18', na 5ª Casa. Vértice da 8ª casa em Touro 27°26', Ascendente na 5ª casa em Capricórnio 27°18', Meio do Céu em Libra 21°31'\n\n1ª Casa em Capricórnio 27°18'\n2ª Casa em Aquário 22°53'\n3ª Casa em Peixes 19°56'\n4ª Casa em Áries 21°31'\n5ª Casa em Touro 26°35'\n6ª Casa em Gêmeos 29°21'\n7ª Casa em Câncer 27°18'\n8ª Casa em Leão 22°53'\n9ª Casa em Virgem 19°56'\n10ª Casa em Libra 21°31'\n11ª Casa em Escorpião 26°35'\n12ª Casa em Sagitário 29°21'\n\nSol em octil com Júpiter (Orbe: 0°50', em movimento)\nSol em trígono com Plutão (Orbe: 2°15', em movimento)\nLua em trígono com Mercúrio (Orbe: 2°51', em movimento)\nLua em trígono com Vênus (Orbe: 0°11', em movimento)\nLua em quincúncio com Saturno (Orbe: 0°19', em movimento)\nMercúrio em octil com Marte (Orbe: 1°15', em movimento)\nVênus em quadratura com Saturno (Orbe: 0°08', em movimento)\nMarte em quadratura com Plutão (Orbe: 2°08', em movimento)\nUrano em sextil com Netuno (Orbe: 2°06', em movimento)\nNetuno em sextil com Plutão (Orbe: 1°23', em movimento)\n\nAscendente em quadratura com Quíron (Orbe: 1°44', em aplicação)\nDescendente em quadratura com Quíron (Orbe: 1°44', em aplicação)\nMeio do Céu em trígono com o Sol (Orbe: 1°08', em aplicação)\nMeio do Céu em trígono com Mercúrio (Orbe: 2°16', em aplicação)\nMeio do Céu em quadratura com Júpiter (Orbe: 1°59', em aplicação) Meio\ndo Céu em trígono com o Nodo Lunar (Orbe: 2°11', em separação)\nFundo do Céu em octil com o Sol (Orbe: 1°08', em aplicação)\nFundo do Céu em sextil com Mercúrio (Orbe: 2°16', em aplicação) Fundo\ndo Céu em quadratura com Júpiter (Orbe: 1°59', em aplicação)\nFundo do Céu em octil com o Nodo Lunar (Orbe: 2°11', em separação)\nNodo Lunar em quadratura com Urano (Orbe: 2°26', em aplicação)\nLilith em octil com Plutão (Orbe: 2°33', em aplicação)\nFortuna em sextil com Mercúrio (Orbe: 0°28', Aplicando)\nFortuna em sextil com o Meio do Céu (Orbe: 1°47', Separando)\nFortuna em trígono com o Fundo do Céu (Orbe: 1°47', Separando)\nVértice em octil com Vênus (Orbe: 0°35', Separando)\nVértice em octil com Saturno (Orbe: 0°27', Separando)\nVértice em trígono com o Ascendente (Orbe: 0°08', Separando)\nVértice em sextil com o Descendente (Orbe: 0°08', Separando)\n",
    jogoGerado: [9, 13, 15, 20, 24, 5, 18, 1, 6, 21, 2, 17, 19, 7, 12],
    resultado: [1, 5, 6, 7, 9, 10, 13, 15, 17, 18, 19, 20, 21, 24, 25],
    obs: "9 acertos — tirou 10 e 24 que saíram",
  },
  {
    id: "h5", concurso: "3698", data: "29/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 8°37', na 5ª Casa;\nLua em Escorpião 23°39', na 10ª Casa;\nMercúrio em Gêmeos 25°37', na 5ª Casa;\nVênus em Câncer 13°01', na 6ª Casa;\nMarte em Touro 8°16', na 4ª Casa;\nJúpiter em Câncer 23°41', na 6ª Casa;\nSaturno em Áries 12°04', na 3ª Casa;\nUrano em Gêmeos 1°56', na 5ª Casa;\nNetuno em Áries 4°01', na 3ª Casa;\nPlutão em Aquário 5°23', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°16', retrógrado, na 2ª Casa; Lilith em Sagitário 17°57', na 11ª Casa; Quíron em Áries 29°05', na\n4ª Casa; Fortuna em Leão 13°07', na 5ª Casa. Vértice da 7ª casa em Touro 27°55', Ascendente na 5ª casa em Capricórnio 28°09', Meio do Céu em Libra 22°34'\n\n1ª Casa em Capricórnio 28°09'\n2ª Casa em Aquário 23°47'\n3ª Casa em Peixes 20°55'\n4ª Casa em Áries 22°34'\n5ª Casa em Touro 27°36'\n6ª Casa em Câncer 0°16'\n7ª Casa em Câncer 28°09'\n8ª Casa em Leão 23°47'\n9ª Casa em Virgem 20°55'\n10ª Casa em Libra 22°34'\n11ª Casa em Escorpião 27°36'\n12ª Casa em Capricórnio 0°16'\n\nSol em octil com Júpiter (Orbe: 0°04', em movimento subsequente)\nLua em quincúncio com Mercúrio (Orbe: 1°57', em movimento subsequente)\nLua em trígono com Júpiter (Orbe: 0°02', em movimento subsequente)\nMercúrio em octil com Marte (Orbe: 2°20', em movimento subsequente)\nVênus em quadratura com Saturno (Orbe: 0°57', em movimento subsequente)\nMarte em quadratura com Plutão (Orbe: 2°53', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 2°04', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 1°21', em movimento subsequente)\n\nAscendente em Quincúncio com Mercúrio (Orbe: 2°32', Separando)\nAscendente em Quadratura com Quíron (Orbe: 0°55', Aplicando)\nDescendente em Quadratura com Quíron (Orbe: 0°55', Aplicando)\nMeio do Céu em Tri-Óctil com o Sol (Orbe: 1°03', Aplicando)\nMeio do Céu em Quadratura com Júpiter (Orbe: 1°07', Aplicando)\nFundo do Céu em Octil com o Sol (Orbe: 1°03', Aplicando)\nMeio do Céu em Quincúncio com a Lua (Orbe: 1°05', Aplicando)\nFundo do Céu em Quadratura com Júpiter (Orbe: 1°07', Aplicando)\nNodo Lunar em Quadratura com Urano (Orbe: 2°19', Aplicando)\nLilith em Octil com Plutão (Orbe: 2°26', Aplicando)\nFortuna em Octil com Mercúrio (Orbe: 2°30', Separando)\nFortuna em Trígono com Saturno (Orbe: 1°03', Separando)\nFortuna em Tri-Óctil com o Vértice (Orbe: 1°52', Separando)\nVértice em Octil com Vênus (Orbe: 0°06', Aplicando)\nVértice em Octil com Saturno (Orbe: 0°50', Separando)\nVértice em Trígono com o Ascendente (Orbe: 0°14', Separando)\nVértice em Sextil com o Descendente (Orbe: 0°14', Separando)",
    jogoGerado: [9, 13, 15, 16, 1, 5, 14, 18, 25, 4, 21, 22, 23, 2, 17],
    resultado: [1, 3, 5, 6, 7, 8, 9, 10, 12, 13, 16, 18, 20, 21, 23],
    obs: "ASC mudou para Aquário. Regra dos graus dos planetas móveis descoberta",
  },
  {
    id: "h6", concurso: "3699", data: "30/05/2026", hora: "",
    textoMapa: "Sol em Gêmeos 9°34', na 5ª Casa;\nLua em Sagitário 5°35', na 11ª Casa;\nMercúrio em Gêmeos 27°24', na 5ª Casa;\nVênus em Câncer 14°12', na 6ª Casa;\nMarte em Touro 9°01', na 4ª Casa;\nJúpiter em Câncer 23°52', na 6ª Casa;\nSaturno em Áries 12°09', na 3ª Casa;\nUrano em Gêmeos 2°00', na 5ª Casa;\nNetuno em Áries 4°02', na 3ª Casa;\nPlutão em Aquário 5°22', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°13', retrógrado, na 2ª Casa; Lilith em Sagitário 18°03', na 11ª Casa; Quíron em Áries 29°08', na\n4ª Casa; Fortuna em Leão 3°00', na 5ª Casa. Vértice da 7ª casa em Touro 28°24', Ascendente na 4ª casa em Capricórnio 29°01', Meio do Céu em Libra 23°37'\n\n1ª Casa em Capricórnio 29°01'\n2ª Casa em Aquário 24°41'\n3ª Casa em Peixes 21°54'\n4ª Casa em Áries 23°37'\n5ª Casa em Touro 28°36'\n6ª Casa em Câncer 1°10'\n7ª Casa em Câncer 29°01'\n8ª Casa em Leão 24°41'\n9ª Casa em Virgem 21°54'\n10ª Casa em Libra 23°37'\n11ª Casa em Escorpião 28°36'\n12ª Casa em Capricórnio 1°10'\n\nSol em octil com Júpiter (Orbe: 0°42', separando)\nSol em sextil com Saturno (Orbe: 2°34', aplicando)\nLua em trígono com Netuno (Orbe: 1°32', separando)\nLua em sextil com Plutão (Orbe: 0°12', separando)\nVênus em quadratura com Saturno (Orbe: 2°03', separando)\nVênus em octil com Urano (Orbe: 2°47', aplicando)\nUrano em sextil com Netuno (Orbe: 2°02', aplicando)\nNetuno em sextil com Plutão (Orbe: 1°20', aplicando)\n\nQuincúncio do Ascendente com Mercúrio (Orbe: 1°36', Separando)\nTrígono do Ascendente com Urano (Orbe: 2°58', Aplicando)\nQuadratura do Ascendente com Quíron (Orbe: 0°06', Aplicando)\nSextil do Descendente com Urano (Orbe: 2°58', Aplicando)\nQuadratura do Descendente com Quíron (Orbe: 0°06', Aplicando)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°57', Aplicando)\nQuadratura do Meio do Céu com Júpiter (Orbe: 0°15', Aplicando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°57', Aplicando)\nQuadratura do Fundo do Céu com Júpiter (Orbe: 0°15', Aplicando)\nQuadratura do Nodo Lunar com a Lua (Orbe: 1°21', Separando)\nQuadratura do Nodo Lunar com Urano (Orbe: 2°13', Aplicando)\nOctil de Lilith com Plutão (Orbe: 2°18', Aplicando)\nSextil de Quíron com Mercúrio (Orbe: 1°43', em movimento)\nFortuna em trígono com a Lua (Orbe: 2°34', em movimento)\nFortuna em sextil com Urano (Orbe: 1°00', em movimento de separação)\nFortuna em trígono com Netuno (Orbe: 1°01', em movimento)\nFortuna em oposição a Plutão (Orbe: 2°21', em movimento)\nFortuna em quincúncio com o Nodo Norte (Orbe: 1°12', em movimento)\nFortuna em trígono com Lilith (Orbe: 0°02', em movimento)\nVértice em octil com Vênus (Orbe: 0°48', em movimento)\nVértice em octil com Saturno (Orbe: 1°14', em movimento de separação)\nVértice em trígono com o Ascendente (Orbe: 0°37', em movimento de separação)\nVértice em sextil com o Descendente (Orbe: 0°37', em movimento de separação)",
    jogoGerado: [15, 25, 1, 9, 13, 14, 3, 17, 5, 10, 7, 8, 18, 22, 23],
    resultado: [1, 2, 3, 5, 6, 8, 9, 11, 14, 18, 20, 21, 22, 24, 25],
    obs: "10 acertos — descoberta: dois planetas fracos no mesmo grau não ativam",
  },
  {
    id: "h7", concurso: "3700", data: "01/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 11°29', na 5ª Casa;\nLua em Sagitário 29°20', na 11ª Casa;\nMercúrio em Câncer 0°50', na 5ª Casa;\nVênus em Câncer 16°34', na 6ª Casa;\nMarte em Touro 10°30', na 4ª Casa;\nJúpiter em Câncer 24°15', na 6ª Casa;\nSaturno em Áries 12°19', na 3ª Casa;\nUrano em Gêmeos 2°07', na 5ª Casa;\nNetuno em Áries 4°04', na 3ª Casa;\nPlutão em Aquário 5°21', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°07', retrógrado, na 2ª Casa;\nLilith em Sagitário 18°17', na 11ª Casa;\nQuíron em Áries 29°14', na 4ª Casa;\nFortuna em Câncer. 12°53', no\nVértice da 6ª Casa em Touro 29°21', no\nAscendente da 4ª Casa em Aquário 0°44'\nMC em Libra 25°42'\n\n1ª Casa em Aquário 0°44'\n2ª Casa em Aquário 26°28'\n3ª Casa em Peixes 23°51'\n4ª Casa em Áries 25°42'\n5ª Casa em Gêmeos 0°36'\n6ª Casa em Câncer 2°58'\n7ª Casa em Leão 0°44'\n8ª Casa em Leão 26°28'\n9ª Casa em Virgem 23°51'\n10ª Casa em Libra 25°42'\n11ª Casa em Sagitário 0°36'\n12ª Casa em Capricórnio 2°58'\n\nSol em octil com Júpiter (Orbe: 2°14', Separando)\nSol em sextil com Saturno (Orbe: 0°49', Aplicando)\nLua em oposição com Mercúrio (Orbe: 1°29', Aplicando)\nLua em quincúncio com Urano (Orbe: 2°46', Aplicando)\nVênus em octil com Urano (Orbe: 0°32', Aplicando)\nUrano em sextil com Netuno (Orbe: 1°57', Aplicando)\nNetuno em sextil com Plutão (Orbe: 1°16', Aplicando)\n\nQuincúncio do Ascendente com Mercúrio (Orbe: 0°06', em movimento)\nTrígono do Ascendente com Urano (Orbe: 1°22', em movimento)\nOctil do Ascendente com Lilith (Orbe: 2°32', em movimento)\nQuadratura do Ascendente com Quíron (Orbe: 1°30', em movimento)\nQuincúncio do Descendente com a Lua (Orbe: 1°23', em movimento)\nSextil do Descendente com Urano (Orbe: 1°22', em movimento)\nTri-óctil do Descendente com Lilith (Orbe: 2°32', em movimento)\nQuadratura do Descendente com Quíron (Orbe: 1°30', em movimento)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°47', em movimento)\nQuadratura do Meio do Céu com Júpiter (Orbe: 1°26', em movimento)\nOctil do Fundo do Céu com o Sol (Orbe: 0°47', em movimento)\nQuadratura do Fundo do Céu com Júpiter (Orbe:\nNodo em trígono com Vênus (Orbe: 2°32', em movimento) Nodo\nem quadratura com Urano (Orbe: 2°00', em movimento)\nLilith em quincúncio com Vênus (Orbe: 1°42', em movimento)\nLilith em octil com Plutão (Orbe: 2°04', em movimento)\nQuíron em octil com o Sol (Orbe: 2°44', em movimento)\nQuíron em trígono com a Lua (Orbe: 0°06', em movimento)\nQuíron em sextil com Mercúrio (Orbe: 1°36', em movimento)\nFortuna em sextil com Marte (Orbe: 2°23', em movimento)\nFortuna em quadratura com Saturno (Orbe: 0°33', em movimento)\nVértice em quincúncio com a Lua (Orbe: 0°00', em movimento)\nVértice em octil com Vênus (Orbe: 2°12', em movimento)\nVértice em octil com Saturno (Orbe: 2°01', Separando)\nConjunção do Vértice com Urano (Orbe: 2°45', Aplicando)\nTrígono do Vértice com o Ascendente (Orbe: 1°22', Separando)\nSextil do Vértice com o Descendente (Orbe: 1°22', Separando)",
    jogoGerado: [15, 23, 25, 1, 9, 13, 14, 3, 2, 17, 19, 10, 5, 7, 8],
    resultado: [1, 3, 7, 8, 9, 10, 12, 13, 14, 17, 18, 19, 20, 23, 25],
    obs: "Usado para calibrar regras (estrutura ASC Aquário / DSC Leão)",
  },
  {
    id: "h10", concurso: "3701", data: "02/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 12°27', na 5ª Casa;\nLua em Capricórnio 11°13', na 12ª Casa;\nMercúrio em Câncer 2°29', na 5ª Casa;\nVênus em Câncer 17°45', na 6ª Casa;\nMarte em Touro 11°14', na 4ª Casa;\nJúpiter em Câncer 24°26', na 6ª Casa;\nSaturno em Áries 12°24', na 3ª Casa;\nUrano em Gêmeos 2°10', na 5ª Casa;\nNetuno em Áries 4°05', na 3ª Casa;\nPlutão em Aquário 5°20', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°04', retrógrado, na 2ª Casa; Lilith em Sagitário 18°23', na 11ª Casa; Quíron em Áries 29°17', na\n4ª Casa; Fortuna em Câncer 2°50', na 5ª Casa. Vértice da 5ª casa em Touro 29°50', Ascendente na 4ª casa em Aquário 1°36', Meio do Céu em Libra 26°44'\n\n1ª Casa em Aquário 1°36'\n2ª Casa em Aquário 27°22'\n3ª Casa em Peixes 24°50'\n4ª Casa em Áries 26°44'\n5ª Casa em Gêmeos 1°35'\n6ª Casa em Câncer 3°51'\n7ª Casa em Leão 1°36'\n8ª Casa em Leão 27°22'\n9ª Casa em Virgem 24°50'\n10ª Casa em Libra 26°44'\n11ª Casa em Sagitário 1°35'\n12ª Casa em Capricórnio 3°51'\n\nSol em Quincúncio com a Lua (Orbe: 1°14', em movimento subsequente)\nSol em Sextil com Saturno (Orbe: 0°02', em movimento subsequente)\nLua em Trígono com Marte (Orbe: 0°01', em movimento subsequente)\nLua em Quadratura com Saturno (Orbe: 1°11', em movimento subsequente)\nMercúrio em Quadratura com Netuno (Orbe: 1°36', em movimento subsequente)\nMercúrio em Quincúncio com Plutão (Orbe: 2°50', em movimento subsequente)\nVênus em Octil com Urano (Orbe: 0°34', em movimento subsequente)\nUrano em Sextil com Netuno (Orbe: 1°55', em movimento subsequente) Netuno em Sextil com\nPlutão (Orbe: 1°14', em movimento subsequente)\n\nAscendente em Quincúncio com Mercúrio (Orbe: 0°53', em Aplicação)\nAscendente em Trígono com Urano (Orbe: 0°34', em Aplicação)\nAscendente em Sextil com Netuno (Orbe: 2°29', em Aplicação)\nAscendente em Octil com Lilith (Orbe: 1°47', em Aplicação)\nAscendente em Quadratura com Quíron (Orbe: 2°19', em Separação)\nDescendente em Sextil com Urano (Orbe: 0°34', em Aplicação)\nDescendente em Trígono com Netuno (Orbe: 2°29', em Aplicação) Descendente em\nQuincúncio com o Nodo Norte (Orbe: 2°28', em Aplicação)\nDescendente em Tri-Octil com Lilith (Orbe: 1°47', em Aplicação)\nDescendente em Quadratura com Quíron (Orbe: 2°19', em Separação)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°42', em Aplicação) Meio do Céu\nem Quadratura com Júpiter (Orbe: 2°18', Separando)\nMC em Oposição a Quíron (Orbe: 2°32', Aplicando)\nIC em Octil com o Sol (Orbe: 0°42', Aplicando)\nIC em Quadratura com Júpiter (Orbe: 2°18', Separando)\nIC em Conjunção com Quíron (Orbe: 2°32', Aplicando)\nNodo em Trígono com Mercúrio (Orbe: 1°34', Aplicando)\nNodo em Trígono com Vênus em Octil (Orbe: 1°18', Aplicando)\nNodo em Quadratura com Urano (Orbe: 1°53', Aplicando)\nLilith em Quincúncio com Vênus (Orbe: 0°38', Aplicando)\nLilith em Octil com Plutão (Orbe: 1°56', Aplicando)\nQuíron em Octil com o Sol (Orbe: 1°49', Aplicando)\nFortuna em Conjunção com Mercúrio (Orbe: 0°20', Separando)\nFortuna em Quadratura com Netuno (Orbe:\nFortuna em Quincúncio com Plutão (Orbe: 2°30', em aplicação )\nFortuna em Trígono com o Nodo (Orbe: 1°14', em aplicação)\nFortuna em Quincúncio com o Ascendente (Orbe: 1°14', em separação)\nFortuna em Quadratura com o Vértice (Orbe: 2°50', em separação)\nVértice em Octil com Vênus (Orbe: 2°54', em aplicação)\nVértice em Octil com Saturno (Orbe: 2°25', em separação)\nVértice em Conjunção com Urano (Orbe: 2°20', em aplicação)\nVértice em Trígono com o Ascendente (Orbe: 1°45', em separação)\nVértice em Sextil com o Descendente (Orbe: 1°45', em separação)",
    jogoGerado: [15, 24, 25, 1, 9, 13, 14, 2, 3, 8, 10, 22, 17, 19, 7],
    resultado: [1, 2, 4, 7, 8, 9, 10, 12, 13, 14, 17, 22, 23, 24, 25],
    obs: "10 acertos — descoberta: DSC em Leão = 5° signo (correção de erro anterior de 8°)",
  },
  {
    id: "h11", concurso: "3702", data: "03/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 13°24', na 5ª Casa;\nLua em Capricórnio 23°08', na 12ª Casa;\nMercúrio em Câncer 4°05', na 5ª Casa;\nVênus em Câncer 18°55', na 6ª Casa;\nMarte em Touro 11°58', na 4ª Casa;\nJúpiter em Câncer 24°38', na 6ª Casa;\nSaturno em Áries 12°29', na 3ª Casa;\nUrano em Gêmeos 2°14', na 4ª Casa;\nNetuno em Áries 4°06', na 3ª Casa;\nPlutão em Aquário 5°19', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 4°00', retrógrado, na 2ª Casa; Lilith em Sagitário 18°30', na 11ª Casa; Quíron em Áries 29°19', na\n4ª Casa; Fortuna em Gêmeos 22°44', na 5ª Casa. Vértice da 5ª casa em Gêmeos 0°19', Ascendente na 4ª casa em Aquário 2°27', Meio do Céu em Libra 27°47'\n\n1ª Casa em Aquário 2°27'\n2ª Casa em Aquário 28°16'\n3ª Casa em Peixes 25°49'\n4ª Casa em Áries 27°47'\n5ª Casa em Gêmeos 2°35'\n6ª Casa em Câncer 4°45'\n7ª Casa em Leão 2°27'\n8ª Casa em Leão 28°16'\n9ª Casa em Virgem 25°49'\n10ª Casa em Libra 27°47'\n11ª Casa em Sagitário 2°35'\n12ª Casa em Capricórnio 4°45'\n\nSol em sextil com Saturno (Orbe: 0°55', separando)\nLua em oposição a Júpiter (Orbe: 1°30', aproximando)\nMercúrio em quadratura com Netuno (Orbe: 0°01', aproximando)\nMercúrio em quincúncio com Plutão (Orbe: 1°13', aproximando)\nVênus em octil com Urano (Orbe: 1°41', separando)\nUrano em sextil com Netuno (Orbe: 1°52', aproximando)\nNetuno em sextil com Plutão (Orbe: 1°12', aproximando)\n\nAscendente em Quincúncio com Mercúrio (Orbe: 1°38', em movimento subsequente)\nAscendente em Trígono com Urano (Orbe: 0°13', em movimento subsequente)\nAscendente em Sextil com Netuno (Orbe: 1°39', em movimento subsequente)\nAscendente em Conjunção com Plutão (Orbe: 2°52', em movimento subsequente)\nAscendente em Octil com Lilith (Orbe: 1°02', em movimento subsequente)\nDescendente em Sextil com Urano (Orbe: 0°13', em movimento subsequente)\nDescendente em Trígono com Netuno (Orbe: 1°39', em movimento subsequente)\nDescendente em Oposição com Plutão (Orbe: 2°52', em movimento subsequente) Descendente\nem Quincúncio com o Nodo Norte (Orbe: 1°33', em movimento subsequente)\nDescendente em Tri-Octil com Lilith (Orbe: 1°02', em movimento subsequente)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°37', em movimento subsequente)\nMeio do Céu em Oposição Quíron (Orbe: 1°32', em movimento)\nIC em octil com o Sol (Orbe: 0°37', em movimento)\nIC em conjunção com Quíron (Orbe: 1°32', em movimento)\nNodo em trígono com Mercúrio (Orbe: 0°04', em movimento)\nNodo em trígono com Vênus (Orbe: 0°05', em movimento)\nNodo em quadratura com Urano (Orbe: 1°46', em movimento)\nLilith em quincúncio com Vênus (Orbe: 0°25', em movimento)\nLilith em octil com Plutão (Orbe: 1°49', em movimento)\nQuíron em octil com o Sol (Orbe: 0°55', em movimento)\nFortuna em quincúncio com a Lua (Orbe: 0°23', em movimento)\nFortuna em trígono com Plutão (Orbe: 2°24', em movimento)\nVertex em octil com Saturno (Orbe: 2°49', em movimento)\nVertex Conjunção de Urano (Orbe: 1°55', Aplicando)\nTrígono do Vértice com o Ascendente (Orbe: 2°08', Separando)\nQuincúncio do Vértice com o Meio do Céu (Orbe: 2°31', Separando)\nSextil do Vértice com o Descendente (Orbe: 2°08', Separando)",
    jogoGerado: [15, 25, 1, 9, 13, 14, 21, 3, 5, 17, 19, 24, 16, 2, 7],
    resultado: [2, 3, 5, 9, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25],
    obs: "Jogo misto horária+estatística — 10 acertos",
  },
  {
    id: "h8", concurso: "3703", data: "05/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 15°19', na 5ª Casa;\nLua em Aquário 17°16', na 1ª Casa;\nMercúrio em Câncer 7°09', na 6ª Casa;\nVênus em Câncer 21°17', na 6ª Casa;\nMarte em Touro 13°27', na 4ª Casa;\nJúpiter em Câncer 25°01', na 6ª Casa;\nSaturno em Áries 12°39', na 3ª Casa;\nUrano em Gêmeos 2°21', na 4ª Casa;\nNetuno em Áries 4°09', na 3ª Casa;\nPlutão em Aquário 5°18', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 3°54', retrógrado, na 2ª Casa; Lilith em Sagitário 18°44', na 11ª Casa; Quíron em Áries 29°25', na\n3ª Casa; Fortuna em Gêmeos 2°13', na 5ª Casa. Vértice da 4ª casa em Gêmeos 1°16', Ascendente na 4ª casa em Aquário 4°10', Meio do Céu em Libra 29°51'\n\n1ª Casa em Aquário 4°10'\n2ª Casa em Peixes 0°04'\n3ª Casa em Peixes 27°46'\n4ª Casa em Áries 29°51'\n5ª Casa em Gêmeos 4°32'\n6ª Casa em Câncer 6°32'\n7ª Casa em Leão 4°10'\n8ª Casa em Virgem 0°04'\n9ª Casa em Virgem 27°46'\n10ª Casa em Libra 29°51'\n11ª Casa em Sagitário 4°32'\n12ª Casa em Capricórnio 6°32'\n\nSol em trígono com a Lua (Orbe: 1°56', separando-se)\nSol em sextil com Saturno (Orbe: 2°40', separando-se)\nLua em octil com Netuno (Orbe: 1°52', aplicando-se)\nMercúrio em quincúncio com Plutão (Orbe: 1°50', separando-se)\nUrano em sextil com Netuno (Orbe: 1°47', aplicando-se)\nUrano em trígono com Plutão (Orbe: 2°57', aplicando-se)\nNetuno em sextil com Plutão (Orbe: 1°09', aplicando-se)\n\nQuincúncio do Ascendente com Mercúrio (Orbe: 2°58', em movimento aplicado)\nTrígono do Ascendente com Urano (Orbe: 1°49', em movimento separado)\nSextil do Ascendente com Netuno (Orbe: 0°01', em movimento separado)\nConjunção do Ascendente com Plutão (Orbe: 1°07', em movimento aplicado)\nOctil do Ascendente com Lilith (Orbe: 0°26', em movimento separado)\nSextil do Descendente com Urano (Orbe: 1°49', em movimento separado)\nTrígono do Descendente com Netuno (Orbe: 0°01', em movimento separado)\nOposição do Descendente com Plutão (Orbe: 1°07', em movimento aplicado)\nQuincúncio do Descendente com o Nodo Lunar (Orbe: 0°16', em movimento separado) Tri-óctil do Descendente com Lilith (Orbe: 0°26', em movimento separado) Tri-óctil do Meio do Céu com o Sol (Orbe: 0°28'\n, em movimento separado) MC em Quincúncio com Urano (Orbe: 2°29', em\naplicação ) MC em Oposição com Quíron (Orbe: 0°25', em separação) IC em Octil com o Sol (Orbe: 0°28', em aplicação) IC em Conjunção com Quíron (Orbe: 0°25', em separação) Nodo em Tri-Octil com Vênus (Orbe: 2°22', em separação) Nodo em Quadratura com Urano (Orbe: 1°33', em aplicação) Lilith em Sextil com a Lua (Orbe: 1°27', em aplicação) Lilith em Quincúncio com Vênus (Orbe: 2°33', em separação) Lilith em Octil com Plutão (Orbe: 1°34', em aplicação) Quíron em Octil com o Sol (Orbe: 0°54', em separação) Fortune em Conjunção com Urano (Orbe: 0°07', em aplicação) Fortune em Sextil com Netuno (Orbe: Fortuna em quadratura com o Nodo (Orbe: 1°40', em aplicação) Fortuna em trígono com o Ascendente (Orbe: 1°56', em separação) Fortuna em quincúncio com o Meio do Céu (Orbe: 2°22', em separação) Fortuna em sextil com o Vértice (Orbe: 2°13', em separação) Fortuna em sextil com o Descendente (Orbe: 1°56', em separação) Vértice em conjunção com Urano (Orbe: 1°04', em aplicação) Vértice em sextil com Netuno (Orbe: 2°52', em aplicação) Vértice em quadratura com o Nodo (Orbe: 2°38', em aplicação) Vértice em trígono com o Ascendente (Orbe: 2°54', em separação) Vértice em quincúncio com o Meio do Céu (Orbe: 1°24', em separação) Vértice em sextil com o Descendente (Orbe: 2°54', em separação)",
    jogoGerado: [5, 3, 8, 25, 1, 9, 2, 20, 6, 14, 22, 10, 13, 15, 17],
    resultado: [1, 3, 5, 7, 8, 9, 10, 14, 15, 17, 21, 22, 23, 24, 25],
    obs: "Concurso 3703 — calibrou: Vênus gera grau+grau+1; Júpiter exaltado gera grau,-1,-2",
  },
  {
    id: "h9", concurso: "3704", data: "06/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 16°17', na 5ª Casa;\nLua em Aquário 29°37', na 1ª Casa;\nMercúrio em Câncer 8°36', na 6ª Casa;\nVênus em Câncer 22°27', na 6ª Casa;\nMarte em Touro 14°11', na 4ª Casa;\nJúpiter em Câncer 25°13', na 6ª Casa;\nSaturno em Áries 12°43', na 3ª Casa;\nUrano em Gêmeos 2°24', na 4ª Casa;\nNetuno em Áries 4°10', na 3ª Casa;\nPlutão em Aquário 5°17', retrógrado, na 1ª Casa;\nNodo Norte em Peixes 3°51', retrógrado, na 2ª Casa;\nLilith em Sagitário 18°50', na 11ª Casa;\nQuíron em Áries 29°28', na 3ª Casa;\nFortuna em Touro. 21°41', no\nVértice da 4ª Casa em Gêmeos 1°44', no\nAscendente da 4ª Casa em Aquário 5°02'\nMeio do Céu em Escorpião 0°53'\n\n1ª Casa em Aquário 5°02'\n2ª Casa em Peixes 0°58'\n3ª Casa em Peixes 28°45'\n4ª Casa em Touro 0°53'\n5ª Casa em Gêmeos 5°31'\n6ª Casa em Câncer 7°25'\n7ª Casa em Leão 5°02'\n8ª Casa em Virgem 0°58'\n9ª Casa em Virgem 28°45'\n10ª Casa em Escorpião 0°53'\n11ª Casa em Sagitário 5°31'\n12ª Casa em Capricórnio 7°25'\n\nLua em octil com Saturno (Orbe: 1°53', Separando)\nLua em quadratura com Urano (Orbe: 2°46', Aproximando)\nVênus em conjunção com Júpiter (Orbe: 2°45', Aproximando)\nUrano em sextil com Netuno (Orbe: 1°45', Aproximando)\nUrano em trígono com Plutão (Orbe: 2°52', Aproximando)\nNetuno em sextil com Plutão (Orbe: 1°07', Aproximando)\n\nAscendente em trígono com Urano (Orbe: 2°37', Separando)\nAscendente em sextil com Netuno (Orbe: 0°52', Separando)\nAscendente em conjunção com Plutão (Orbe: 0°14', Aplicando)\nAscendente em octil com Lilith (Orbe: 1°11', Separando)\nDescendente em sextil com Urano (Orbe: 2°37', Separando) Descendente\nem trígono com Netuno (Orbe: 0°52', Separando)\nDescendente em oposição a Plutão (Orbe: 0°14', Aplicando)\nDescendente em quincúncio com o Nodo Norte (Orbe: 1°11', Separando)\nDescendente em trígono com Lilith (Orbe: 1°11', Separando)\nMeio do Céu em trígono com o Sol (Orbe: 0°23', Aplicando)\nMeio do Céu em trígono com a Lua (Orbe: 1°15', Separando)\nMeio do Céu Quincúncio Urano (Orbe: 1°31', em movimento)\nMeio do Céu em trígono com o Nodo Lunar (Orbe: 2°58', em movimento)\nMeio do Céu em octil com Lilith (Orbe: 2°57', em movimento)\nMeio do Céu em oposição a Quíron (Orbe: 1°25', em movimento)\nFundo do Céu em octil com o Sol (Orbe: 0°23', em movimento) Fundo\ndo Céu em sextil com a Lua (Orbe: 1°15', em movimento)\nFundo do Céu em sextil com o Nodo Lunar (Orbe: 2\n°58', em movimento) Fundo do Céu em trígono com Lilith (Orbe: 2°57', em movimento\n) Fundo do Céu em conjunção com Quíron (Orbe: 1°25', em movimento)\nNodo Lunar em quadratura com Urano (Orbe: 1°26', em movimento)\nLilith em oposição ao Sol (Orbe: 2°33', em movimento)\nLilith em octil com Plutão (Orbe: 1°26', em movimento)\nQuíron em octil com o Sol (Orbe: 1°48', Separando)\nQuíron em sextil com a Lua (Orbe: 0°09', Separando)\nFortuna em octil com Mercúrio (Orbe: 1°54', Aplicando)\nFortuna em sextil com Vênus (Orbe: 0°45', Aplicando)\nFortuna em octil com Netuno (Orbe: 2°31', Separando)\nFortuna em quincúncio com Lilith (Orbe: 2°50', Separando)\nVértice em quadratura com a Lua (Orbe: 2°07', Separando)\nVértice em conjunção com Urano (Orbe: 0°39', Aplicando)\nVértice em sextil com Netuno (Orbe: 2°25', Aplicando)\nVértice em quadratura com o Nodo (Orbe: 2°06', Aplicando)\nVértice em quincúncio com o Meio do Céu (Orbe: 0°51', Separando)",
    jogoGerado: [4, 15, 25, 1, 9, 6, 10, 12, 14, 5, 20, 17, 23, 11, 13],
    resultado: [1, 3, 4, 9, 10, 11, 12, 13, 14, 15, 19, 20, 22, 23, 25],
    obs: "Concurso 3704 — MC mudou para Escorpião pela primeira vez",
  },
  {
    id: "h12", concurso: "3705", data: "08/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 18°11', na 5ª Casa;\nLua em Peixes 25°15', na 2ª Casa;\nMercúrio em Câncer 11°22', na 6ª Casa;\nVênus em Câncer 24°48', na 6ª Casa;\nMarte em Touro 15°39', na 4ª Casa;\nJúpiter em Câncer 25°36', na 6ª Casa;\nSaturno em Áries 12°52', na 3ª Casa;\nUrano em Gêmeos 2°31', na 4ª Casa;\nNetuno em Áries 4°11', na 3ª Casa;\nPlutão em Aquário 5°15', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 3°45', retrógrado, na 2ª Casa;\nLilith em Sagitário 19°04', na 11ª Casa;\nQuíron em Áries 29°33', na 3ª Casa;\nFortuna em Áries. 29°41', no\nVértice da 3ª Casa em Gêmeos 2°41', no\nAscendente da 4ª Casa em Aquário 6°45'\nMC em Escorpião 2°56'\n\n1ª Casa em Aquário 6°45'\n2ª Casa em Peixes 2°46'\n3ª Casa em Áries 0°43'\n4ª Casa em Touro 2°56'\n5ª Casa em Gêmeos 7°28'\n6ª Casa em Câncer 9°11'\n7ª Casa em Leão 6°45'\n8ª Casa em Virgem 2°46'\n9ª Casa em Libra 0°43'\n10ª Casa em Escorpião 2°56'\n11ª Casa em Sagitário 7°28'\n12ª Casa em Capricórnio 9°11'\n\nSol em trígono com Plutão (Orbe: 2°03', em movimento subsequente)\nLua em trígono com Vênus (Orbe: 0°27', em movimento subsequente)\nLua em trígono com Júpiter (Orbe: 0°20', em movimento subsequente)\nMercúrio em quadratura com Saturno (Orbe: 1°30', em movimento subsequente)\nVênus em conjunção com Júpiter (Orbe: 0°48', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°40', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 2°44', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 1°03', em movimento subsequente)\n\nSextil do Ascendente com Netuno (Orbe: 2°33', Separando)\nConjunção do Ascendente com Plutão (Orbe: 1°30', Separando)\nOctil do Ascendente com Lilith (Orbe: 2°41', Separando)\nTrígono do Descendente com Netuno (Orbe: 2°33', Separando)\nOposição do Descendente com Plutão (Orbe: 1°30', Separando)\nTrígono do Descendente com Lilith (Orbe: 2°41', Separando)\nTrígono do Meio do Céu com o Sol (Orbe: 0°15', Aplicando)\nQuincúncio do Meio do Céu com Urano (Orbe: 0°25', Separando)\nQuincúncio do Meio do Céu com Netuno (Orbe: 1°15', Aplicando)\nQuadratura do Meio do Céu com Plutão (Orbe: 2°19', Aplicando) Trígono do Meio do Céu com o\nNodo Norte (Orbe: 0°48', Aplicando)\nOctil do Meio do Céu com Lilith (Orbe: 1°07', em aplicação)\nIC em octil com o Sol (Orbe: 0°15', em aplicação)\nIC em quadratura com Plutão (Orbe: 2°19', em aplicação)\nIC em sextil com o Nodo (Orbe: 0°48', em aplicação)\nIC em trígono com Lilith (Orbe: 1°07', em aplicação)\nNodo em quadratura com Urano (Orbe: 1°13', em aplicação)\nLilith em oposição ao Sol (Orbe: 0°52', em aplicação)\nLilith em octil com Plutão (Orbe: 1°11', em aplicação)\nFortuna em conjunção com Quíron (Orbe: 0°08', em separação)\nVértice em conjunção com Urano (Orbe: 0°10', em separação)\nVértice em sextil com Netuno (Orbe: 1°29', em aplicação)\nVértice em trígono com Plutão (Orbe: 2°33', em aplicação)\nVértice em quadratura com o Nodo (Orbe: 1°03', Aplicando)\nQuincúncio do Vértice MC (Orbe: 0°14', Aplicando)",
    jogoGerado: [1, 25, 20, 21, 9, 14, 6, 7, 18, 24, 5, 17, 22, 13, 10],
    resultado: [1, 3, 4, 6, 8, 10, 14, 15, 16, 18, 20, 21, 22, 24, 25],
    obs: "Aguardando resultado do concurso 3705",
  },
  {
    id: "h57", concurso: "3706", data: "09/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 19°09', na 5ª Casa;\nLua em Áries 8°41', na 3ª Casa;\nMercúrio em Câncer 12°40', na 6ª Casa;\nVênus em Câncer 25°58', na 6ª Casa;\nMarte em Touro 16°23', na 4ª Casa;\nJúpiter em Câncer 25°48', na 6ª Casa;\nSaturno em Áries 12°57', na 3ª Casa;\nUrano em Gêmeos 2°34', na 4ª Casa;\nNetuno em Áries 4°12', na 3ª Casa;\nPlutão em Aquário 5°14', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 3°41', retrógrado, na 2ª Casa;\nLilith em Sagitário 19°10', na 11ª Casa;\nQuíron em Áries 29°36', na 3ª Casa;\nFortuna em Áries 18°05'. Vertex na 3ª casa\nem Gêmeos 3°10',\nAscendente na 4ª casa em Aquário 7°37',\nMeio do Céu em Escorpião 3°57'\n\n1ª Casa em Aquário 7°37'\n2ª Casa em Peixes 3°41'\n3ª Casa em Áries 1°42'\n4ª Casa em Touro 3°57'\n5ª Casa em Gêmeos 8°25'\n6ª Casa em Câncer 10°04'\n7ª Casa em Leão 7°37'\n8ª Casa em Virgem 3°41'\n9ª Casa em Libra 1°42'\n10ª Casa em Escorpião 3°57'\n11ª Casa em Sagitário 8°25'\n12ª Casa em Capricórnio 10°04'\n\nSol em tríodo octil com Plutão (Orbe: 1°05', em movimento subsequente)\nMercúrio em quadratura com Saturno (Orbe: 0°16', em movimento subsequente)\nVênus em conjunção com Júpiter (Orbe: 0°09', em movimento subsequente)\nMarte em octil com Netuno (Orbe: 2°49', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°38', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 2°40', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 1°02', em movimento subsequente)\n\nSextil do Ascendente com a Lua (Orbe: 1°04', em movimento)\nConjunção do Ascendente com Plutão (Orbe: 2°22', em movimento)\nTrígono do Descendente com a Lua (Orbe: 1°04', em movimento)\nOposição do Descendente com Plutão (Orbe: 2°22', em movimento)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°11', em movimento)\nQuincúncio do Meio do Céu com Urano (Orbe: 1°22', em movimento)\nQuincúncio do Meio do Céu com Netuno (Orbe: 0°15', em movimento)\nQuadratura do Meio do Céu com Plutão (Orbe: 1°17', em movimento)\nTrígono do Meio do Céu com o Nodo Norte (Orbe: 0°15', em movimento)\nOctil do Meio do Céu com Lilith (Orbe: 0°13', em movimento)\nOctil do Fundo do Céu com o Sol (Orbe: 0°11', em movimento)\nQuadratura do Fundo do Céu com Plutão (Orbe: 1°17', em movimento)\nFundo do Céu Sextil do Nodo (Orbe: 0°15', Separando)\nIC Tri-Octil Lilith (Orbe: 0°13', Aplicando)\nNodo em Quadratura com Urano (Orbe: 1°07', Aplicando)\nLilith em Oposição ao Sol (Orbe: 0°01', Aplicando)\nLilith em Quincúncio com Marte (Orbe: 2°47', Aplicando)\nLilith em Octil com Plutão (Orbe: 1°04', Aplicando)\nFortuna em Sextil com o Sol (Orbe: 1°04', Aplicando)\nFortuna em Octil com Urano (Orbe: 0°30', Separando)\nFortuna em Octil com o Nodo (Orbe: 0°36', Aplicando)\nFortuna em Trígono com Lilith (Orbe: 1°05', Aplicando)\nVértice em Conjunção com Urano (Orbe: 0°35', Separando)\nVértice em Sextil com Netuno (Orbe: 1°02', Aplicando)\nTrígono de Plutão no Vértice (Orbe: 2°04', em processo de aplicação)\nQuadratura do Nodo no Vértice (Orbe: 0°31', em processo de aplicação)\nQuincúncio do Meio do Céu no Vértice (Orbe: 0°47', em processo de aplicação)",
    jogoGerado: [1, 12, 14, 25, 21, 9, 2, 4, 5, 6, 10, 15, 18, 20, 22],
    resultado: [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h58", concurso: "3707", data: "10/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 20°06', na 5ª Casa;\nLua em Áries 22°35', na 3ª Casa;\nMercúrio em Câncer 13°55', na 6ª Casa;\nVênus em Câncer 27°08', na 6ª Casa;\nMarte em Touro 17°07', na 4ª Casa;\nJúpiter em Câncer 26°00', na 6ª Casa;\nSaturno em Áries 13°01', na 3ª Casa;\nUrano em Gêmeos 2°38', na 4ª Casa;\nNetuno em Áries 4°13', na 3ª Casa;\nPlutão em Aquário 5°14', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 3°38', retrógrado, na 1ª Casa;\nLilith em Sagitário 19°17', na 11ª Casa;\nQuíron em Áries 29°38', na 3ª Casa;\nFortuna em Áries 6°00'. Vertex na 3ª casa\nem Gêmeos 3°38',\nAscendente na 4ª casa em Aquário 8°29',\nMeio do Céu em Escorpião 4°58'\n\n1ª Casa em Aquário 8°29'\n2ª Casa em Peixes 4°35'\n3ª Casa em Áries 2°41'\n4ª Casa em Touro 4°58'\n5ª Casa em Gêmeos 9°23'\n6ª Casa em Câncer 10°57'\n7ª Casa em Leão 8°29'\n8ª Casa em Virgem 4°35'\n9ª Casa em Libra 2°41'\n10ª Casa em Escorpião 4°58'\n11ª Casa em Sagitário 9°23'\n12ª Casa em Capricórnio 10°57'\n\nSol em sextil com a Lua (Orbe: 2°28', separando)\nSol em trígono com octil de Plutão (Orbe: 0°07', aplicando)\nMercúrio em quadratura com Saturno (Orbe: 0°53', separando)\nVênus em conjunção com Júpiter (Orbe: 1°07', separando)\nMarte em octil com Netuno (Orbe: 2°06', aplicando)\nUrano em sextil com Netuno (Orbe: 1°35', aplicando)\nUrano em trígono com Plutão (Orbe: 2°35', aplicando)\nNetuno em sextil com Plutão (Orbe: 1°00', aplicando)\n\nMC Tri-Octil Sol (Orbe: 0°07', Aplicando)\nMC Quincúncio Urano (Orbe: 2°20', Separando)\nMC Quincúncio Netuno (Orbe: 0°45', Separando)\nMC Quadratura Plutão (Orbe: 0°15', Aplicando)\nMC Trígono Nodo (Orbe: 1°20', Separando)\nMC Octil Lilith (Orbe: 0°41', Separando)\nIC Octil Sol (Orbe: 0°07', Aplicando)\nIC Quadratura Plutão (Orbe: 0°15', Aplicando)\nIC Sextil Nodo (Orbe: 1°20', Separando)\nIC Tri-Octil Lilith (Orbe: 0°41', Separando)\nNodo Quadratura Urano (Orbe: 1°00', Aplicando)\nLilith Oposição Sol (Orbe: 0°48', Separando)\nLilith Quincúncio Marte (Orbe: 2°10', em movimento)\nLilith em octil Plutão (Orbe: 0°56', em movimento)\nQuíron em quadratura com Vênus (Orbe: 2°30', em movimento)\nFortuna em conjunção com Netuno (Orbe: 1°46', em movimento)\nFortuna em sextil com Plutão (Orbe: 0°46', em movimento)\nFortuna em sextil com o Ascendente (Orbe: 2°28', em movimento)\nFortuna em quincúncio com o Meio do Céu (Orbe: 1°01', em movimento)\nFortuna em trígono com o Descendente (Orbe: 2°28', em movimento)\nVértice em conjunção com Urano (Orbe: 1°00', em movimento)\nVértice em sextil com Netuno (Orbe: 0°34', em movimento)\nVértice em trígono com Plutão (Orbe: 1°35', em movimento)\nVértice em quadratura com o Nodo Norte (Orbe: 0°00', em movimento)\nVértice Quincunx MC (Orbe: 1°20', Aplicando)",
    jogoGerado: [1, 21, 9, 2, 3, 6, 10, 14, 18, 22, 24, 25, 17, 13, 5],
    resultado: [1, 2, 3, 7, 8, 9, 10, 13, 14, 18, 20, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h59", concurso: "3708", data: "11/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 21°03', na 5ª Casa;\nLua em Touro 6°57', na 4ª Casa;\nMercúrio em Câncer 15°07', na 6ª Casa;\nVênus em Câncer 28°18', na 6ª Casa;\nMarte em Touro 17°51', na 4ª Casa;\nJúpiter em Câncer 26°12', na 6ª Casa;\nSaturno em Áries 13°05', na 3ª Casa;\nUrano em Gêmeos 2°41', na 4ª Casa;\nNetuno em Áries 4°14', na 3ª Casa;\nPlutão em Aquário 5°13', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 3°35', retrógrado, na 1ª Casa;\nLilith em Sagitário 19°24', na 11ª Casa;\nQuíron em Áries 29°41', na 3ª Casa;\nFortuna em Peixes. 23°27', no\nVértice da 2ª Casa em Gêmeos 4°07', no\nAscendente da 4ª Casa em Aquário 9°20'\nMC em Escorpião 5°59'\n\n1ª Casa em Aquário 9°20'\n2ª Casa em Peixes 5°29'\n3ª Casa em Áries 3°40'\n4ª Casa em Touro 5°59'\n5ª Casa em Gêmeos 10°21'\n6ª Casa em Câncer 11°50'\n7ª Casa em Leão 9°20'\n8ª Casa em Virgem 5°29'\n9ª Casa em Libra 3°40'\n10ª Casa em Escorpião 5°59'\n11ª Casa em Sagitário 10°21'\n12ª Casa em Capricórnio 11°50'\n\nSol em octil com a Lua (Orbe: 0°53', separando)\nSol em trígono com Plutão (Orbe: 0°50', separando)\nLua em quadratura com Plutão (Orbe: 1°44', separando)\nMercúrio em sextil com Marte (Orbe: 2°43', aplicando)\nMercúrio em quadratura com Saturno (Orbe: 2°01', separando)\nMercúrio em octil com Urano (Orbe: 2°33', aplicando)\nVênus em conjunção com Júpiter (Orbe: 2°06', separando)\nMarte em octil com Netuno (Orbe: 1°23', aplicando)\nUrano em sextil com Netuno (Orbe: 1°32', aplicando)\nUrano em trígono com Plutão (Orbe: 2°31', aplicando)\nNetuno em sextil com Plutão (Orbe: 0°58', aplicando)\n\nLua em quadratura com o Ascendente (Orbe: 2°23', Separando)\nLua em quadratura com o Descendente (Orbe: 2°23', Separando)\nSol em trí-óctilo com o Meio do Céu (Orbe: 0°04', Aplicando)\nLua em oposição ao Meio do Céu (Orbe: 0°57', Aplicando)\nQuincúncio do Meio do Céu com Netuno (Orbe: 1°45', Separando)\nQuadratura do Meio do Céu com Plutão (Orbe: 0°46', Separando)\nTrígono do Meio do Céu com o Nodo Norte (Orbe: 2°24', Separando)\nLilith em octil com o Meio do Céu (Orbe: 1°35', Separando)\nSol em octil com o Fundo do Céu (Orbe: 0°04', Aplicando)\nLua em conjunção com o Fundo do Céu (Orbe: 0°57', Aplicando)\nQuadratura do Fundo do Céu com Plutão (Orbe: 0°46', Separando)\nSextil do Fundo do Céu com o Nodo Norte (Orbe: 2°24', Separando)\nLilith em trí-óctilo com o Fundo do Céu\nNodo em quadratura com Urano (Orbe : 0°53', em movimento )\nLilith em oposição ao Sol (Orbe: 1°39', em movimento) Lilith em\ntrí-óctil com a Lua (Orbe: 2°33', em movimento)\nLilith em quincúncio com Marte (Orbe: 1°32', em movimento)\nLilith em óctil com Plutão (Orbe: 0°48', em movimento)\nQuíron em quadratura com Vênus (Orbe: 1°22', em movimento)\nFortuna em quadratura com o Sol (Orbe: 2°23', em movimento)\nFortuna em óctil com a Lua (Orbe: 1°29', em movimento)\nFortuna em trígono com Júpiter (Orbe: 2°45', em movimento)\nFortuna em óctil com o Ascendente (Orbe: 0°53', em movimento)\nFortuna em trí-óctil com o Meio do Céu (Orbe: 2°27', em movimento)\nFortuna em óctil com o Fundo do Céu (Orbe: 2°27', Separando)\nTriângulo da Fortuna com o Descendente (Orbe: 0°53', Separando)\nConjunção do Vértice com Urano (Orbe: 1°25', Separando)\nSextil do Vértice com Netuno (Orbe: 0°07', Aplicando)\nTrígono do Vértice com Plutão (Orbe: 1°05', Aplicando)\nQuadratura do Vértice com o Nodo Lunar (Orbe: 0°31', Separando)\nQuincúncio do Vértice com o Meio do Céu (Orbe: 1°52', Aplicando)",
    jogoGerado: [1, 23, 21, 17, 18, 24, 14, 25, 13, 15, 10, 11, 12, 4, 2],
    resultado: [1, 2, 4, 5, 6, 8, 9, 12, 16, 17, 18, 19, 21, 23, 24],
    obs: "",
  },
  {
    id: "h60", concurso: "3709", data: "12/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 22°01', na 5ª Casa;\nLua em Touro 21°46', na 4ª Casa;\nMercúrio em Câncer 16°16', na 6ª Casa;\nVênus em Câncer 29°28', na 6ª Casa;\nMarte em Touro 18°35', na 4ª Casa;\nJúpiter em Câncer 26°24', na 6ª Casa;\nSaturno em Áries 13°10', na 3ª Casa;\nUrano em Gêmeos 2°44', na 4ª Casa;\nNetuno em Áries 4°15', na 2ª Casa;\nPlutão em Aquário 5°12', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 3°32', retrógrado, na 1ª Casa;\nLilith em Sagitário 19°31', na 11ª Casa;\nQuíron em Áries 29°43', na 3ª Casa;\nFortuna em Peixes. 10°27', no\nVértice da 2ª Casa em Gêmeos 4°35', no\nAscendente da 4ª Casa em Aquário 10°12'\nMC em Escorpião 7°00'\n\n1ª Casa em Aquário 10°12'\n2ª Casa em Peixes 6°24'\n3ª Casa em Áries 4°39'\n4ª Casa em Touro 7°00'\n5ª Casa em Gêmeos 11°18'\n6ª Casa em Câncer 12°42'\n7ª Casa em Leão 10°12'\n8ª Casa em Virgem 6°24'\n9ª Casa em Libra 4°39'\n10ª Casa em Escorpião 7°00'\n11ª Casa em Sagitário 11°18'\n12ª Casa em Capricórnio 12°42'\n\nSol em trígono com Plutão (órbita: 1°49', separando-se)\nLua em trígono com Netuno (órbita: 2°31', separando-se)\nMercúrio em sextil com Marte (órbita: 2°18', aplicando-se)\nMercúrio em trígono com Urano (órbita: 1°28', aplicando-se)\nMarte em trígono com Netuno (órbita: 0°40', aplicando-se)\nUrano em sextil com Netuno (órbita: 1°30', aplicando-se)\nUrano em trígono com Plutão (órbita: 2°27', aplicando-se)\nNetuno em sextil com Plutão (órbita: 0°56', aplicando-se)\n\nSextil do Ascendente com Saturno (Orbe: 2°57', em movimento)\nTrígono do Descendente com Saturno (Orbe: 2°57', em movimento)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°00', em movimento)\nQuincúncio do Meio do Céu com Netuno (Orbe: 2°45', em movimento)\nQuadratura do Meio do Céu com Plutão (Orbe: 1°48', em movimento)\nOctil do Meio do Céu com Lilith (Orbe: 2°29', em movimento)\nOctil do Fundo do Céu com o Sol (Orbe: 0°00', em movimento)\nQuadratura do Fundo do Céu com Plutão (Orbe: 1°48', em movimento)\nTri-óctil do Fundo do Céu com Lilith (Orbe: 2°29', em movimento)\nTri-óctil do Nodo Lunar com Mercúrio (Orbe: 2°15', em movimento)\nQuadratura do Nodo Lunar com Urano (Orbe: 0°47', em movimento)\nOposição de Lilith com o Sol (Orbe: 2°30', em movimento)\nLilith em Quincúncio com a Lua (Orbe: 2°15', Separando)\nLilith em Quincúncio com Marte (Orbe: 0°55', Aproximando)\nLilith em Octil com Plutão (Orbe: 0°41', Aproximando)\nQuíron em Quadratura com Vênus (Orbe: 0°15', Aproximando)\nFortuna em Trígono-Octil com Júpiter (Orbe: 0°56', Aproximando)\nFortuna em Quincúncio com o Descendente (Orbe: 0°15', Separando)\nVértice em Conjunção com Urano (Orbe: 1°50', Separando)\nVértice em Sextil com Netuno (Orbe: 0°20', Separando)\nVértice em Trígono com Plutão (Orbe: 0°36', Aproximando)\nVértice em Quadratura com o Nodo Lunar (Orbe: 1°03', Separando)\nVértice em Quincúncio com o Meio do Céu (Orbe: 2°24', Aproximando)",
    jogoGerado: [1, 23, 25, 9, 11, 15, 5, 6, 10, 18, 24, 14, 17, 13, 12],
    resultado: [1, 4, 6, 7, 9, 10, 11, 14, 15, 18, 19, 20, 23, 24, 25],
    obs: "",
  },
  {
    id: "h61", concurso: "3710", data: "14/06/2026", hora: "11",
    textoMapa: "Sol em Gêmeos 23°32', na 10ª Casa;\nLua em Gêmeos 15°49', na 10ª Casa;\nMercúrio em Câncer 17°58', na 11ª Casa;\nVênus em Leão 1°19', na 12ª Casa;\nMarte em Touro 19°44', na 9ª Casa;\nJúpiter em Câncer 26°43', na 12ª Casa;\nSaturno em Áries 13°16', na 8ª Casa;\nUrano em Gêmeos 2°50', na 9ª Casa;\nNetuno em Áries 4°16', na 7ª Casa;\nPlutão em Aquário 5°10', retrógrado, na 6ª Casa;\nNodo Norte em Peixes 3°27', retrógrado, na 7ª Casa;\nLilith em Sagitário 19°41', na 4ª Casa;\nQuíron em Áries 29°47', na 8ª Casa;\nFortuna em Leão. 21°06', no Vértice da 12ª Casa\nem Peixes 17°02', no\nAscendente da 7ª Casa em Leão 28°50'\nMeio do Céu em Gêmeos 8°00'\n\n1ª Casa em Leão 28°50'\n2ª Casa em Libra 8°06'\n3ª Casa em Escorpião 12°08'\n4ª Casa em Sagitário 8°00'\n5ª Casa em Capricórnio 0°44'\n6ª Casa em Capricórnio 25°55'\n7ª Casa em Aquário 28°50'\n8ª Casa em Áries 8°06'\n9ª Casa em Touro 12°08'\n10ª Casa em Gêmeos 8°00'\n11ª Casa em Câncer 0°44'\n12ª Casa em Câncer 25°55'\n\nLua em octil com Vênus (Orbe: 0°30', em movimento subsequente)\nLua em sextil com Saturno (Orbe: 2°32', em movimento subsequente)\nMercúrio em sextil com Marte (Orbe: 1°45', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 0°08', em movimento subsequente)\nVênus em sextil com Urano (Orbe: 1°30', em movimento subsequente)\nVênus em trígono com Netuno (Orbe: 2°57', em movimento subsequente)\nMarte em octil com Netuno (Orbe: 0°27', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°26', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 2°20', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°54', em movimento subsequente)\n\nAscendente em trígono com Saturno (Orbe: 0°33', Separando)\nAscendente em trígono com Quíron (Orbe: 0°57', Aplicando)\nDescendente em quincúncio com Vênus (Orbe: 2°29', Aplicando)\nDescendente em quincúncio com Júpiter (Orbe: 2°06', Separando)\nDescendente em octil com Saturno (Orbe: 0°33', Separando)\nDescendente em sextil com Quíron (Orbe: 0°57', Aplicando)\nMeio do Céu em trígono com Plutão (Orbe: 2°49', Separando)\nFundo do Céu em sextil com Plutão (Orbe: 2°49', Separando)\nNodo em trígono com Mercúrio (Orbe: 0°28', Aplicando)\nNodo em quincúncio com Vênus (Orbe: 2°08', Aplicando)\nNodo em quadratura com Urano (Orbe: 0°37', Aplicando)\nLilith em quincúncio com Mercúrio (Orbe:\nLilith em Quincúncio com Marte (Orbe: 0° 02', Separando )\nLilith em Octil com Plutão (Orbe: 0°29', Aplicando)\nQuíron em Octil com a Lua (Orbe: 1°01', Separando)\nQuíron em Quadratura com Vênus (Orbe: 1°31', Separando)\nFortuna em Sextil com o Sol (Orbe: 2°25', Aplicando)\nFortuna em Quadratura com Marte (Orbe: 1°22', Separando)\nFortuna em Tri-Octil com Netuno (Orbe: 1°50', Separando)\nFortuna em Trígono com Lilith (Orbe: 1°25', Separando)\nVértice em Quadratura com a Lua (Orbe: 1°13', Separando) Vértice\nem Trígono com Mercúrio (Orbe: 0°56', Aplicando)\nVértice em Tri-Octil com Vênus (Orbe: 0°43', Separando)\nVértice em Sextil com Marte (Orbe: 2°41', Aplicando)\nVértice Quadrado Lilith (Orbe: 2°38', Aplicando)\nVértice Octile Quíron (Orbe: 2°15', Separando)",
    jogoGerado: [4, 9, 13, 15, 1, 17, 2, 22, 8, 12, 16, 3, 5, 6, 11],
    resultado: [1, 2, 3, 4, 5, 6, 9, 12, 13, 14, 15, 16, 17, 18, 25],
    obs: "",
  },
  {
    id: "h62", concurso: "3711", data: "15/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 24°53', na 5ª Casa;\nLua em Câncer 7°28', na 5ª Casa;\nMercúrio em Câncer 19°23', na 6ª Casa;\nVênus em Leão 2°58', na 6ª Casa;\nMarte em Touro 20°46', na 4ª Casa;\nJúpiter em Câncer 27°01', na 6ª Casa;\nSaturno em Áries 13°22', na 3ª Casa;\nUrano em Gêmeos 2°54', na 4ª Casa;\nNetuno em Áries 4°17', na 2ª Casa;\nPlutão em Aquário 5°09', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 3°22', retrógrado, na 1ª Casa; Lilith em Sagitário 19°51', na 11ª Casa; Quíron em Áries 29°51', na\n3ª Casa; Fortuna em Aquário 0°13', na 5ª Casa. Vértice da 12ª casa em Gêmeos 6°01', Ascendente na 4ª casa em Aquário 12°48', Meio do Céu em Escorpião 10°02'\n\n1ª Casa em Aquário 12°48'\n2ª Casa em Peixes 9°08'\n3ª Casa em Áries 7°35'\n4ª Casa em Touro 10°02'\n5ª Casa em Gêmeos 14°09'\n6ª Casa em Câncer 15°20'\n7ª Casa em Leão 12°48'\n8ª Casa em Virgem 9°08'\n9ª Casa em Libra 7°35'\n10ª Casa em Escorpião 10°02'\n11ª Casa em Sagitário 14°09'\n12ª Casa em Capricórnio 15°20'\n\nLua em octil com Marte (Orbe: 1°41', Separando)\nLua em quincúncio com Plutão (Orbe: 2°18', Separando)\nMercúrio em sextil com Marte (Orbe: 1°23', Iniciando)\nMercúrio em octil com Urano (Orbe: 1°28', Separando)\nVênus em sextil com Urano (Orbe: 0°03', Separando)\nVênus em trígono com Netuno (Orbe: 1°19', Iniciando)\nVênus em oposição a Plutão (Orbe: 2°11', Iniciando)\nMarte em octil com Netuno (Orbe: 1°28', Separando)\nUrano em sextil com Netuno (Orbe: 1°22', Iniciando)\nUrano em trígono com Plutão (Orbe: 2°14', Iniciando)\nNetuno em sextil com Plutão (Orbe: 0°51', Iniciando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 2°54', Separando)\nAscendente em Sextil com Saturno (Orbe: 0°33', Aplicando)\nDescendente em Octil com o Sol (Orbe: 2°54', Separando)\nDescendente em Trígono com Saturno (Orbe: 0°33', Aplicando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°08', Separando)\nMeio do Céu em Trígono com a Lua (Orbe: 2°34', Separando)\nFundo do Céu em Octil com o Sol (Orbe: 0°08', Separando) Fundo\ndo Céu em Sextil com a Lua (Orbe: 2°34', Separando)\nNodo em Tri-Octil com Mercúrio (Orbe: 1°00', Separando)\nNodo em Quincúncio com Vênus (Orbe: 0°24', Aplicando)\nNodo em Quadratura com Urano (Orbe: 0°27', Aplicando)\nLilith em Quincúncio com Mercúrio (Orbe: 0°27',\nLilith em Tri-Octil com Vênus (Orbe: 1°53', em aplicação )\nLilith em Quincúncio com Marte (Orbe: 0°55', em separação)\nLilith em Octil com Plutão (Orbe: 0°18', em aplicação)\nQuíron em Quadratura com Júpiter (Orbe: 2°49', em aplicação)\nFortuna em Oposição com Vênus (Orbe: 2°44', em aplicação)\nFortuna em Trígono com Urano (Orbe: 2°41', em aplicação)\nFortuna em Quadratura com Quíron (Orbe: 0°22', em separação)\nFortuna em Sextil com Vertex (Orbe: 0°13', em separação)\nVertex em Octil com Mercúrio (Orbe: 1°37', em separação)\nVertex em Sextil com Netuno (Orbe: 1°43', em separação)\nVertex em Trígono com Plutão (Orbe: 0°51', em separação)\nVertex em Quadratura com o Nodo (Orbe: 2°38', Separando)",
    jogoGerado: [5, 13, 15, 1, 24, 9, 6, 16, 23, 18, 25, 10, 14, 17, 20],
    resultado: [1, 5, 6, 8, 9, 10, 12, 13, 15, 16, 17, 20, 22, 24, 25],
    obs: "",
  },
  {
    id: "h63", concurso: "3712", data: "16/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 25°50', na 5ª Casa;\nLua em Câncer 22°32', na 6ª Casa;\nMercúrio em Câncer 20°18', na 6ª Casa;\nVênus em Leão 4°07', na 6ª Casa;\nMarte em Touro 21°29', na 4ª Casa;\nJúpiter em Câncer 27°13', na 6ª Casa;\nSaturno em Áries 13°26', na 3ª Casa;\nUrano em Gêmeos 2°58', na 4ª Casa;\nNetuno em Áries 4°18', na 2ª Casa;\nPlutão em Aquário 5°08', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 3°19', retrógrado, na 1ª Casa; Lilith em Sagitário 19°57', na 11ª Casa; Quíron em Áries 29°53', na\n3ª Casa; Fortuna em Capricórnio 16°58', na 1ª Casa. Vértice da 12ª casa em Gêmeos 6°29', Ascendente na 4ª casa em Aquário 13°40', Meio do Céu em Escorpião 11°02'\n\n1ª Casa em Aquário 13°40'\n2ª Casa em Peixes 10°02'\n3ª Casa em Áries 8°34'\n4ª Casa em Touro 11°02'\n5ª Casa em Gêmeos 15°05'\n6ª Casa em Câncer 16°13'\n7ª Casa em Leão 13°40'\n8ª Casa em Virgem 10°02'\n9ª Casa em Libra 8°34'\n10ª Casa em Escorpião 11°02'\n11ª Casa em Sagitário 15°05'\n12ª Casa em Capricórnio 16°13'\n\nLua em conjunção com Mercúrio (Orbe: 2°13', separando)\nLua em sextil com Marte (Orbe: 1°02', separando)\nMercúrio em sextil com Marte (Orbe: 1°11', aplicando)\nMercúrio em octil com Urano (Orbe: 2°20', separando)\nVênus em sextil com Urano (Orbe: 1°09', separando)\nVênus em trígono com Netuno (Orbe: 0°10', aplicando)\nVênus em oposição a Plutão (Orbe: 1°00', aplicando)\nMarte em octil com Netuno (Orbe: 2°11', separando)\nUrano em sextil com Netuno (Orbe: 1°20', aplicando)\nUrano em trígono com Plutão (Orbe: 2°10', aplicando)\nNetuno em sextil com Plutão (Orbe: 0°50', aplicando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 2°49', Separando)\nAscendente em Sextil com Saturno (Orbe: 0°14', Separando)\nDescendente em Octil com o Sol (Orbe: 2°49', Separando)\nDescendente em Trígono com Saturno (Orbe: 0°14', Separando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°11', Separando)\nMeio do Céu em Quincúncio com Saturno (Orbe: 2°23', Aplicando) Fundo\ndo Céu em Octil com o Sol (Orbe: 0°11', Separando)\nNodo em Tri-Octil com Mercúrio (Orbe: 1°58', Separando)\nNodo em Quincúncio com Vênus (Orbe: 0°47', Separando)\nNodo em Quadratura com Urano (Orbe: 0°21', Aplicando)\nLilith em Quincúncio com a Lua (Orbe: 2°34', Separando)\nLilith em Quincúncio com Mercúrio (Orbe:\nLilith em Tri-Óctil com Vênus (Orbe: 0° 50 ', Aplicando)\nLilith em Quincúncio com Marte (Orbe: 1°32', Aplicando)\nLilith em Óctil com Plutão (Orbe: 0°10', Aplicando)\nQuíron em Quadratura com Júpiter (Orbe: 2°40', Aplicando)\nFortune em Tri-Óctil com Urano (Orbe: 0°59', Aplicando)\nFortune em Óctil com o Nodo Norte (Orbe: 1°20', Aplicando)\nVertex em Óctil com a Lua (Orbe: 1°02', Aplicando)\nVertex em Óctil com Mercúrio (Orbe: 1°10', Aplicando)\nVertex em Sextil com Vênus (Orbe: 2°21', Aplicando)\nVertex em Sextil com Netuno (Orbe: 2°11', Aplicando)\nVertex em Trígono com Plutão (Orbe: 1°21', Aplicando)",
    jogoGerado: [13, 15, 1, 25, 16, 9, 6, 12, 18, 5, 14, 17, 20, 10, 19],
    resultado: [1, 3, 4, 6, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h64", concurso: "3713", data: "17/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 26°48', na 5ª Casa;\nLua em Leão 7°15', na 6ª Casa;\nMercúrio em Câncer 21°10', na 6ª Casa;\nVênus em Leão 5°17', na 6ª Casa;\nMarte em Touro 22°13', na 4ª Casa;\nJúpiter em Câncer 27°25', na 6ª Casa;\nSaturno em Áries 13°29', na 3ª Casa;\nUrano em Gêmeos 3°01', na 4ª Casa;\nNetuno em Áries 4°18', na 2ª Casa;\nPlutão em Aquário 5°07', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 3°16', retrógrado, na 1ª Casa; Lilith em Sagitário 20°04', na 11ª Casa; Quíron em Áries 29°55', na\n3ª Casa; Fortuna em Capricórnio 4°05', na 5ª Casa. Vertex da 11ª casa em Gêmeos 6°57', Ascendente na 4ª casa em Aquário 14°32', Meio do Céu em Escorpião 12°02'\n\n1ª Casa em Aquário 14°32'\n2ª Casa em Peixes 10°57'\n3ª Casa em Áries 9°33'\n4ª Casa em Touro 12°02'\n5ª Casa em Gêmeos 16°01'\n6ª Casa em Câncer 17°05'\n7ª Casa em Leão 14°32'\n8ª Casa em Virgem 10°57'\n9ª Casa em Libra 9°33'\n10ª Casa em Escorpião 12°02'\n11ª Casa em Sagitário 16°01'\n12ª Casa em Capricórnio 17°05'\n\nLua em conjunção com Vênus (Orbe: 1°58', separando-se)\nLua em trígono com Netuno (Orbe: 2°56', separando-se)\nLua em oposição a Plutão (Orbe: 2°08', separando-se)\nMercúrio em sextil com Marte (Orbe: 1°03', aproximando-se)\nVênus em sextil com Urano (Orbe: 2°15', separando-se)\nVênus em trígono com Netuno (Orbe: 0°58',\nseparando-se) Vênus em oposição a Plutão (Orbe: 0°09', separando-se)\nMarte em octil com Netuno (Orbe: 2°54', separando-se)\nUrano em sextil com Netuno (Orbe: 1°17', aproximando-se)\nUrano em trígono com Plutão (Orbe: 2°05', aproximando-se)\nNetuno em sextil com Plutão (Orbe: 0°48', aproximando-se)\n\nAscendente em Tri-Octil com o Sol (Orbe: 2°44', Separando)\nAscendente em Sextil com Saturno (Orbe: 1°02', Separando)\nDescendente em Octil com o Sol (Orbe: 2°44', Separando)\nDescendente em Trígono com Saturno (Orbe: 1°02', Separando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°14', Separando)\nMeio do Céu em Quincúncio com Saturno (Orbe: 1°27', Aplicando) Fundo\ndo Céu em Octil com o Sol (Orbe: 0°14', Separando)\nNodo em Tri-Octil com Mercúrio (Orbe: 2°53', Separando)\nNodo em Quincúncio com Vênus (Orbe: 2°00', Separando)\nNodo em Quadratura com Urano (Orbe: 0°14', Aplicando)\nLilith em Tri-Octil com a Lua (Orbe: 2°10', Separando)\nLilith em Quincúncio com Mercúrio (Orbe:\nLilith em Tri-Octil com Vênus (Orbe: 0°12', Separando )\nLilith em Quincúncio com Marte (Orbe: 2°08', Separando)\nLilith em Octil com Plutão (Orbe: 0°02', Aplicando)\nQuíron em Quadratura com Júpiter (Orbe: 2°30', Aplicando)\nFortuna em Quincúncio com Vênus (Orbe: 1°12', Aplicando)\nFortuna em Quincúncio com Urano (Orbe: 1°03', Separando)\nFortuna em Quadratura com Netuno (Orbe: 0°13', Aplicando)\nFortuna em Sextil com o Nodo Norte (Orbe: 0°48', Separando)\nVértice em Sextil com a Lua (Orbe: 0°17', Aplicando)\nVértice em Octil com Mercúrio (Orbe: 0°47', Separando)\nVértice em Sextil com Vênus (Orbe: 1°40', Separando)\nVértice em Sextil com Netuno (Orbe: Trígono de Plutão (Orbe: 2°38', Separando)\nno vértice (Orbe: 1°50', Separando)",
    jogoGerado: [13, 15, 11, 9, 4, 6, 12, 16, 25, 1, 2, 3, 17, 18, 10],
    resultado: [2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 19, 20, 22],
    obs: "",
  },
  {
    id: "h65", concurso: "3714", data: "18/06/2026", hora: "",
    textoMapa: "Sol em Gêmeos 27°45', na 5ª Casa;\nLua em Leão 21°32', na 7ª Casa;\nMercúrio em Câncer 21°58', na 6ª Casa;\nVênus em Leão 6°26', na 6ª Casa;\nMarte em Touro 22°56', na 4ª Casa;\nJúpiter em Câncer 27°38', na 6ª Casa;\nSaturno em Áries 13°33', na 3ª Casa;\nUrano em Gêmeos 3°04', na 4ª Casa;\nNetuno em Áries 4°19', na 2ª Casa;\nPlutão em Aquário 5°06', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 3°13', retrógrado, na 1ª Casa;\nLilith em Sagitário 20°11', na 11ª Casa;\nQuíron em Áries 29°58', na 3ª Casa;\nFortuna em Sagitário. 21°37', no\nVértice da 11ª Casa em Gêmeos 7°26', no\nAscendente da 4ª Casa em Aquário 15°24'\nMC em Escorpião 13°02'\n\n1ª Casa em Aquário 15°24'\n2ª Casa em Peixes 11°52'\n3ª Casa em Áries 10°31'\n4ª Casa em Touro 13°02'\n5ª Casa em Gêmeos 16°58'\n6ª Casa em Câncer 17°57'\n7ª Casa em Leão 15°24'\n8ª Casa em Virgem 11°52'\n9ª Casa em Libra 10°31'\n10ª Casa em Escorpião 13°02'\n11ª Casa em Sagitário 16°58'\n12ª Casa em Capricórnio 17°57'\n\nLua em quadratura com Marte (Orbe: 1°24', em movimento subsequente)\nLua em trígono-óctil com Netuno (Orbe: 2°12', em movimento subsequente)\nMercúrio em sextil com Marte (Orbe: 0°58', em movimento subsequente)\nVênus em trígono com Netuno (Orbe: 2°07', em movimento subsequente\n) Vênus em oposição a Plutão (Orbe: 1°20', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°14', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 2°01', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°46', em movimento subsequente)\n\nAscendente em tríoctila com o Sol (Orbe: 2°39', Separando)\nAscendente em sextil com Saturno (Orbe: 1°50', Separando)\nDescendente em octil com o Sol (Orbe: 2°39', Separando)\nDescendente em trígono com Saturno (Orbe: 1°50', Separando) Meio do Céu em\ntríoctila com o Sol (Orbe: 0°16', Separando)\nMeio do Céu em quincúncio com Saturno (Orbe: 0°31', Aplicando)\nFundo do Céu em octil com o Sol (Orbe: 0°16', Separando)\nNodo Lunar em quadratura com Urano (Orbe: 0°08', Aplicando)\nLilith em trígono com a Lua (Orbe: 1°20', Separando)\nLilith em quincúncio com Mercúrio (Orbe: 1°47', Separando)\nLilith em tríoctila com Vênus (Orbe: 1°15', Separando)\nLilith em quincúncio com Marte (Orbe: 2°45', Separando)\nLilith em Octil com Plutão (Orbe: 0°05', Separando)\nQuíron em Sextil com o Sol (Orbe: 2°12', Aplicando)\nQuíron em Quadratura com Júpiter (Orbe: 2°19', Aplicando)\nFortuna em Trígono com a Lua (Orbe: 0°05', Separando)\nFortuna em Quincúncio com Mercúrio (Orbe: 0°20', Aplicando)\nFortuna em Trígono-Octil com Vênus (Orbe: 0°10', Separando)\nFortuna em Quincúncio com Marte (Orbe: 1°19', Aplicando)\nFortuna em Octil com Plutão (Orbe: 1°31', Separando)\nFortuna em Conjunção com Lilith (Orbe: 1°26', Separando)\nVértice em Octil com Mercúrio (Orbe: 0°27', Separando)\nVértice em Sextil com Vênus (Orbe: 0°59', Separando)\nVértice em Trígono com Plutão (Orbe: 2°19', Separando)",
    jogoGerado: [5, 4, 15, 11, 9, 12, 1, 17, 18, 6, 21, 2, 13, 25, 10],
    resultado: [3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21],
    obs: "",
  },
  {
    id: "h66", concurso: "3715", data: "20/06/2026", hora: "08:30",
    textoMapa: "Sol em Gêmeos 29°10', na 12ª Casa;\nLua em Virgem 11°47', na 2ª Casa;\nMercúrio em Câncer 23°02', na 1ª Casa;\nVênus em Leão 8°09', na 1ª Casa;\nMarte em Touro 24°01', na 10ª Casa;\nJúpiter em Câncer 27°56', na 1ª Casa;\nSaturno em Áries 13°38', na 9ª Casa;\nUrano em Gêmeos 3°09', na 11ª Casa;\nNetuno em Áries 4°20', na 8ª Casa;\nPlutão em Aquário 5°04', retrógrado, na 7ª Casa;\nNodo Norte em Peixes 3°08', retrógrado, na 8ª Casa; Lilith em Sagitário 20°21', na 5ª Casa; Quíron em Touro 0°01', na\n9ª Casa; Fortuna em Libra 5°28', na 1ª Casa. Vértice da 3ª casa em Peixes 0°06', Ascendente na 8ª casa em Câncer 22°50', Meio do Céu em Touro 6°52'\n\n1ª Casa em Câncer 22°50'\n2ª Casa em Leão 27°38'\n3ª Casa em Libra 5°28'\n4ª Casa em Escorpião 6°52'\n5ª Casa em Sagitário 1°57'\n6ª Casa em Sagitário 25°33'\n7ª Casa em Capricórnio 22°50'\n8ª Casa em Aquário 27°38'\n9ª Casa em Áries 5°28'\n10ª Casa em Touro 6°52'\n11ª Casa em Gêmeos 1°57'\n12ª Casa em Gêmeos 25°33'\n\nLua em octil com Júpiter (Orbe: 1°08', em movimento subsequente)\nLua em quincúncio com Saturno (Orbe: 1°51', em movimento subsequente)\nMercúrio em sextil com Marte (Orbe: 0°58', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°10', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 1°55', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°44', em movimento subsequente)\n\nConjunção do Ascendente com Mercúrio (Orbe: 0°12', em movimento subsequente)\nSextil do Ascendente com Marte (Orbe: 1°10', em movimento subsequente)\nQuincúncio do Ascendente com Lilith (Orbe: 2°29', em movimento subsequente)\nOposição do Descendente com Mercúrio (Orbe: 0°12', em movimento subsequente) Trígono\ndo Descendente com Marte (Orbe: 1°10', em movimento subsequente)\nQuadratura do Meio do Céu com Vênus (Orbe: 1°16', em movimento subsequente)\nQuadratura do Meio do Céu com Plutão (Orbe: 1°48', em movimento subsequente)\nTri-óctilo do Meio do Céu com Lilith (Orbe: 1°31', em movimento subsequente)\nQuadratura do Fundo do Céu com Vênus (Orbe: 1°16', em movimento subsequente)\nQuincúncio do Fundo do Céu com Netuno (Orbe: 2°32', em movimento subsequente)\nQuadratura do Fundo do Céu com Plutão (Orbe: 1°48', em movimento subsequente)\nOctil do Fundo do Céu com Lilith (Orbe: 1°31', em movimento subsequente)\nNodo em quadratura com Urano (Orbe: 0°00', Separando)\nLilith em quincúncio com Mercúrio (Orbe: 2°41', Separando)\nLilith em trígono-óctil com Vênus (Orbe: 2°47', Separando)\nLilith em octil com Plutão (Orbe: 0°16', Separando)\nQuíron em sextil com o Sol (Orbe: 0°51', Aplicando)\nQuíron em quadratura com Júpiter (Orbe: 2°04', Aplicando)\nFortuna em sextil com Vênus (Orbe: 2°41', Aplicando)\nFortuna em trígono com Urano (Orbe: 2°18', Separando)\nFortuna em oposição a Netuno (Orbe: 1°07', Separando)\nFortuna em trígono com Plutão (Orbe: 0°23', Separando)\nFortuna em quincúncio com o Nodo (Orbe: 2°19', Separando)\nFortuna em quincúncio com o Meio do Céu (Orbe: 1°24', Aplicando)\nVertex Trígono com o Sol (Orbe: 0°56', Separando)\nVértice em Quincúncio com Júpiter (Orbe: 2°09', Separando)\nVértice em Octil com Saturno (Orbe: 1°27', Separando)\nVértice em Sextil com Quíron (Orbe: 0°05', Separando)",
    jogoGerado: [14, 25, 5, 24, 9, 20, 21, 22, 1, 17, 18, 11, 13, 15, 10],
    resultado: [3, 5, 6, 9, 11, 12, 14, 16, 18, 20, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h67", concurso: "3716", data: "20/06/2026", hora: "21",
    textoMapa: "Sol em Gêmeos 29°39', na 5ª Casa;\nLua em Virgem 18°41', na 8ª Casa;\nMercúrio em Câncer 23°23', na 6ª Casa;\nVênus em Leão 8°45', na 6ª Casa;\nMarte em Touro 24°23', na 4ª Casa;\nJúpiter em Câncer 28°02', na 6ª Casa;\nSaturno em Áries 13°40', na 3ª Casa;\nUrano em Gêmeos 3°11', na 4ª Casa;\nNetuno em Áries 4°20', na 2ª Casa;\nPlutão em Aquário 5°04', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 3°06', retrógrado, na 1ª Casa; Lilith em Sagitário 20°24', na 11ª Casa; Quíron em Touro 0°02', na\n3ª Casa; Fortuna em Escorpião 28°06', na 5ª Casa. Vértice da 10ª casa em Gêmeos 8°22', Ascendente na 4ª casa em Aquário 17°08', Meio do Céu em Escorpião 15°01'\n\n1ª Casa em Aquário 17°08'\n2ª Casa em Peixes 13°42'\n3ª Casa em Áries 12°28'\n4ª Casa em Touro 15°01'\n5ª Casa em Gêmeos 18°49'\n6ª Casa em Câncer 19°42'\n7ª Casa em Leão 17°08'\n8ª Casa em Virgem 13°42'\n9ª Casa em Libra 12°28'\n10ª Casa em Escorpião 15°01'\n11ª Casa em Sagitário 18°49'\n12ª Casa em Capricórnio 19°42'\n\nLua em trígono-óctil com Plutão (órbita: 1°22', em movimento subsequente)\nMercúrio em sextil com Marte (órbita: 1°00', em movimento subsequente)\nUrano em sextil com Netuno (órbita: 1°09', em movimento subsequente)\nUrano em trígono com Plutão (órbita: 1°52', em movimento subsequente)\nNetuno em sextil com Plutão (órbita: 0°43', em movimento subsequente)\n\nTri-óctil do Sol no Ascendente (Orbe: 2°28', Separando)\nQuincúncio da Lua no Ascendente (Orbe: 1°33', Aplicando)\nOctil de Netuno no Ascendente (Orbe: 2°11', Aplicando)\nOctil do Sol no Descendente (Orbe: 2°28', Separando)\nTri-óctil de Netuno no Descendente (Orbe: 2°11', Aplicando)\nTri-óctil do Sol no Meio do Céu (Orbe: 0°21', Separando)\nQuincúncio do Meio do Céu com Saturno (Orbe: 1°20', Separando)\nOctil do Sol no Fundo do Céu (Orbe: 0°21', Separando)\nQuadratura do Nodo Lunar com Urano (Orbe: 0°04', Separando)\nQuadratura de Lilith com a Lua (Orbe: 1°42', Aplicando)\nQuincúncio de Lilith com Mercúrio (Orbe: 2°58', Separando)\nOctil de Lilith com Plutão (Orbe: 0°20', Separando)\nQuíron em sextil com o Sol (Orbe: 0°22', Aplicando)\nQuíron em quadratura com Júpiter (Orbe: 1°59', Aplicando)\nFortuna em quincúncio com o Sol (Orbe: 1°33', Aplicando)\nFortuna em trígono com Júpiter (Orbe: 0°03', Separando)\nFortuna em trígono com o Octil de Saturno (Orbe: 0°34', Aplicando)\nFortuna em quincúncio com Quíron (Orbe: 1°55', Aplicando)\nFortuna em trígono com o Vértice (Orbe: 1°53', Separando)\nVértice em octil com Mercúrio (Orbe: 0°00', Aplicando)\nVértice em sextil com Vênus (Orbe: 0°22', Aplicando)",
    jogoGerado: [23, 5, 25, 24, 9, 1, 11, 15, 22, 17, 18, 13, 21, 2, 4],
    resultado: [1, 2, 4, 5, 7, 11, 12, 15, 17, 18, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h68", concurso: "3717", data: "22/06/2026", hora: "21",
    textoMapa: "Sol em Câncer 1°34', na 5ª Casa;\nLua em Libra 14°14', na 8ª Casa;\nMercúrio em Câncer 24°32', na 6ª Casa;\nVênus em Leão 11°03', na 6ª Casa;\nMarte em Touro 25°50', na 4ª Casa;\nJúpiter em Câncer 28°28', na 6ª Casa;\nSaturno em Áries 13°47', na 2ª Casa;\nUrano em Gêmeos 3°17', na 4ª Casa;\nNetuno em Áries 4°21', na 2ª Casa;\nPlutão em Aquário 5°01', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 3°00', retrógrado, na 1ª Casa; Lilith em Sagitário 20°38', na 10ª Casa; Quíron em Touro 0°06', na\n3ª Casa; Fortuna em Escorpião 6°12', na 5ª Casa. Vértice da 9ª casa em Gêmeos 9°19', Ascendente na 4ª casa em Aquário 18°53', Meio do Céu em Escorpião 16°59'\n\n1ª Casa em Aquário 18°53'\n2ª Casa em Peixes 15°32'\n3ª Casa em Áries 14°25'\n4ª Casa em Touro 16°59'\n5ª Casa em Gêmeos 20°41'\n6ª Casa em Câncer 21°26'\n7ª Casa em Leão 18°53'\n8ª Casa em Virgem 15°32'\n9ª Casa em Libra 14°25'\n10ª Casa em Escorpião 16°59'\n11ª Casa em Sagitário 20°41'\n12ª Casa em Capricórnio 21°26'\n\nSol em quadratura com Netuno (Orbe: 2°47', em movimento subsequente)\nLua em oposição a Saturno (Orbe: 0°27', em movimento subsequente)\nMercúrio em sextil com Marte (Orbe: 1°18', em movimento subsequente)\nVênus em trígono com Saturno (Orbe: 2°44', em movimento subsequente)\nMarte em sextil com Júpiter (Orbe: 2°37', em movimento subsequente)\nMarte em octil com Saturno (Orbe: 2°57', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°03', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 1°44', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°40', em movimento subsequente)\n\nTri-óctil do Sol no Ascendente (Orbe: 2°18', Separando)\nOctil de Netuno no Ascendente (Orbe: 0°28', Aplicando)\nSextil de Lilith no Ascendente (Orbe: 1°45', Aplicando)\nOctil do Sol no Descendente (Orbe: 2°18', Separando)\nTri-óctil de Netuno no Descendente (Orbe: 0°28', Aplicando)\nTrígono de Lilith no Descendente (Orbe: 1°45', Aplicando)\nTri-óctil do Sol no Meio do Céu (Orbe: 0°25', Separando)\nTri-óctil de Netuno no\nMeio do Céu (Orbe: 2°21', Aplicando) Octil do Sol no Fundo do Céu (Orbe: 0°25', Separando)\nQuincúncio da Lua no Fundo do Céu (Orbe: 2°44', Separando)\nOctil de Netuno no Fundo do Céu (Orbe: 2°21', Aplicando)\nTrígono do Nodo Sol (Orbe: 1°26', em movimento)\nNodo em quadratura com Urano (Orbe: 0°17', em movimento de separação)\nNodo em sextil com Quíron (Orbe: 2°53', em movimento)\nLilith em octil com Plutão (Orbe: 0°36', em movimento de separação)\nQuíron em sextil com o Sol (Orbe: 1°27', em movimento de separação)\nQuíron em quadratura com Júpiter (Orbe: 1°38', em movimento)\nFortuna em quincúncio com Urano (Orbe: 2°54', em movimento de separação)\nFortuna em quincúncio com Netuno (Orbe: 1°51', em movimento de separação)\nFortuna em quadratura com Plutão (Orbe: 1°10', em movimento de separação)\nFortuna em octil com Lilith (Orbe: 0°34', em movimento de separação)\nVértice em octil com Mercúrio (Orbe: 0°12', em movimento)\nVértice em sextil com Vênus (Orbe: 1°44', em movimento)",
    jogoGerado: [11, 5, 1, 9, 15, 2, 4, 21, 20, 17, 18, 25, 10, 23, 6],
    resultado: [1, 2, 4, 5, 6, 7, 9, 10, 11, 14, 15, 17, 18, 20, 25],
    obs: "",
  },
  {
    id: "h69", concurso: "3718", data: "23/06/2026", hora: "21",
    textoMapa: "Sol em Câncer 2°31', na 5ª Casa;\nLua em Libra 26°35', na 9ª Casa;\nMercúrio em Câncer 25°00', na 6ª Casa;\nVênus em Leão 12°12', na 6ª Casa;\nMarte em Touro 26°33', na 4ª Casa;\nJúpiter em Câncer 28°40', na 6ª Casa;\nSaturno em Áries 13°50', na 2ª Casa;\nUrano em Gêmeos 3°20', na 4ª Casa;\nNetuno em Áries 4°22', na 2ª Casa;\nPlutão em Aquário 5°00', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°57', retrógrado, na 1ª Casa; Lilith em Sagitário 20°44', na 10ª Casa; Quíron em Touro 0°08', na\n3ª Casa; Fortuna em Libra 25°42', na 5ª Casa. Vértice da 9ª casa em Gêmeos 9°47', Ascendente na 4ª casa em Aquário 19°45', Meio do Céu em Escorpião 17°58'\n\n1ª Casa em Aquário 19°45'\n2ª Casa em Peixes 16°27'\n3ª Casa em Áries 15°24'\n4ª Casa em Touro 17°58'\n5ª Casa em Gêmeos 21°36'\n6ª Casa em Câncer 22°19'\n7ª Casa em Leão 19°45'\n8ª Casa em Virgem 16°27'\n9ª Casa em Libra 15°24'\n10ª Casa em Escorpião 17°58'\n11ª Casa em Sagitário 21°36'\n12ª Casa em Capricórnio 22°19'\n\nSol em quadratura com Netuno (Orbe: 1°50', em movimento)\nSol em quincúncio com Plutão (Orbe: 2°29', em movimento)\nLua em quadratura com Mercúrio (Orbe: 1°34', em movimento)\nLua em quincúncio com Marte (Orbe: 0°01', em movimento)\nLua em quadratura com Júpiter (Orbe: 2°05', em movimento)\nMercúrio em sextil com Marte (Orbe: 1°33', em movimento)\nVênus em trígono com Saturno (Orbe: 1°38', em movimento)\nMarte em sextil com Júpiter (Orbe: 2°07', em movimento)\nMarte em octil com Saturno (Orbe: 2°17', em movimento)\nUrano em sextil com Netuno (Orbe: 1°01', em movimento)\nUrano em trígono com Plutão (Orbe: 1°39', em movimento)\nNetuno em sextil com Plutão (Orbe: 0°38', em movimento)\n\nTri-óctil do Sol no Ascendente (Orbe: 2°13', Separando)\nOctil de Netuno no Ascendente (Orbe: 0°23', Separando)\nSextil de Lilith no Ascendente (Orbe: 0°59', Aplicando)\nOctil do Sol no Descendente (Orbe: 2°13', Separando)\nTri-óctil de Netuno no Descendente (Orbe: 0°23', Separando)\nTrígono de Lilith no Descendente (Orbe: 0°59', Aplicando)\nTri-óctil do Sol no Meio do Céu (Orbe: 0°26', Separando)\nTri-óctil de Netuno no Meio do Céu (Orbe: 1°23', Aplicando)\nOctil do Sol no Fundo do Céu (Orbe: 0°26', Separando)\nOctil de Netuno no Fundo do Céu (Orbe: 1°23', Aplicando)\nQuincúncio de Lilith no Fundo do Céu (Orbe: 2°46', Aplicando)\nNodo Trígono Sol (Orbe: 0°25', em aplicação)\nNodo Quadrado Urano (Orbe: 0°23', em separação)\nNodo Sextil Quíron (Orbe: 2°48', em aplicação)\nLilith Octil Plutão (Orbe: 0°44', em separação)\nQuíron Sextil Sol (Orbe: 2°22', em separação)\nQuíron Quadrado Júpiter (Orbe: 1°28', em aplicação)\nConjunção Lua Fortuna (Orbe: 0°52', em aplicação)\nQuadratura Mercúrio Fortuna (Orbe: 0°41', em separação)\nQuincúncio Marte Fortuna (Orbe: 0°51', em aplicação)\nQuadratura Júpiter Fortuna (Orbe: 2°58', em aplicação)\nVértice Tri-Octil Lua (Orbe: 1°47', em aplicação)\nVértice Octil Mercúrio (Orbe: 0°12', em aplicação)\nVértice Sextil Vênus (Orbe: 2°24', Aplicando)",
    jogoGerado: [11, 14, 16, 21, 5, 7, 13, 19, 1, 9, 20, 17, 18, 2, 10],
    resultado: [1, 5, 7, 9, 11, 12, 14, 16, 17, 18, 19, 20, 21, 22, 25],
    obs: "",
  },
  {
    id: "h70", concurso: "3719", data: "25/06/2026", hora: "",
    textoMapa: "Sol em Câncer 4°26', na 5ª Casa;\nLua em Escorpião 20°43', na 10ª Casa;\nMercúrio em Câncer 25°43', na 6ª Casa;\nVênus em Leão 14°29', na 6ª Casa;\nMarte em Touro 27°59', na 4ª Casa;\nJúpiter em Câncer 29°05', na 6ª Casa;\nSaturno em Áries 13°57', na 2ª Casa;\nUrano em Gêmeos 3°27', na 4ª Casa;\nNetuno em Áries 4°22', na 2ª Casa;\nPlutão em Aquário 4°58', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°51', retrógrado, na 1ª Casa; Lilith em Sagitário 20°58', na 10ª Casa; Quíron em Touro 0°12', na\n3ª Casa; Fortuna em Libra 5°13', na 5ª Casa. Vértice da 8ª casa em Gêmeos 10°44', Ascendente na 4ª casa em Aquário 21°30', Meio do Céu em Escorpião 19°55'\n\n1ª Casa em Aquário 21°30'\n2ª Casa em Peixes 18°17'\n3ª Casa em Áries 17°21'\n4ª Casa em Touro 19°55'\n5ª Casa em Gêmeos 23°26'\n6ª Casa em Câncer 24°03'\n7ª Casa em Leão 21°30'\n8ª Casa em Virgem 18°17'\n9ª Casa em Libra 17°21'\n10ª Casa em Escorpião 19°55'\n11ª Casa em Sagitário 23°26'\n12ª Casa em Capricórnio 24°03'\n\nSol em tríctil com a Lua (Orbe: 1°17', separando)\nSol em quadratura com Netuno (Orbe: 0°03', separando)\nSol em quincúncio com Plutão (Orbe: 0°32', aplicando)\nLua em tríctil com Netuno (Orbe: 1°20', separando)\nMercúrio em sextil com Marte (Orbe: 2°16', separando)\nVênus em trígono com Saturno (Orbe: 0°32', separando)\nMarte em sextil com Júpiter (Orbe: 1°06', aplicando)\nMarte em octil com Saturno (Orbe: 0°57', aplicando)\nUrano em sextil com Netuno (Orbe: 0°55', aplicando)\nUrano em trígono com Plutão (Orbe: 1°31', aplicando)\nNetuno em sextil com Plutão (Orbe: 0°35', aplicando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 2°04', Separando)\nAscendente em Quadratura com a Lua (Orbe: 0°47', Separando)\nAscendente em Octil com Netuno (Orbe: 2°07', Separando)\nAscendente em Sextil com Lilith (Orbe: 0°31', Separando) Descendente\nem Octil com o Sol (Orbe: 2°04', Separando)\nDescendente em Quadratura com a Lua (Orbe: 0°47', Separando)\nDescendente em Tri-Octil com Netuno (Orbe: 2°07', Separando)\nDescendente em Trígono com Lilith (Orbe: 0°31', Separando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°29', Separando)\nMeio do Céu em Conjunção com a Lua (Orbe: 0°47', Aplicando)\nMeio do Céu em Tri-Octil com Netuno (Orbe: 0°32', Separando)\nFundo do Céu Sol em Octil (Orbe: 0°29', Separando)\nLua em Oposição ao IC (Orbe: 0°47', Aplicando)\nNetuno em Octil ao IC (Orbe: 0°32', Separando)\nLilith em Quincúncio ao IC (Orbe: 1°02', Aplicando)\nNodo em Trígono ao Sol (Orbe: 1°35', Separando)\nNodo em Quadratura com Urano (Orbe: 0°36', Separando)\nNodo em Sextil com Quíron (Orbe: 2°38', Aplicando)\nLilith em Octil com Plutão (Orbe: 0°59', Separando)\nQuíron em Quadratura com Júpiter (Orbe: 1°06', Aplicando)\nFortuna em Quadratura com o Sol (Orbe: 0°47', Separando)\nFortuna em Octil com a Lua (Orbe: 0°30', Aplicando)\nFortuna em Trígono com Urano (Orbe: 1°46', Separando)\nFortuna em Oposição a Netuno (Orbe: 0°50', Separando)\nFortuna em trígono com Plutão (Orbe: 0°14', Separando)\nFortuna em quincúncio com o Nodo (Orbe: 2°22', Separando)\nFortuna em trígono octil com o Ascendente (Orbe: 1°17', Separando)\nFortuna em octil com o Meio do Céu (Orbe: 0°17', Separando)\nFortuna em trígono octil com o Fundo do Céu (Orbe: 0°17', Separando)\nFortuna em octil com o Descendente (Orbe: 1°17', Separando)\nVértice em octil com Mercúrio (Orbe: 0°00', Separando)",
    jogoGerado: [11, 14, 4, 5, 25, 2, 15, 1, 9, 17, 18, 13, 10, 6, 21],
    resultado: [2, 3, 4, 8, 10, 11, 12, 14, 15, 18, 19, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h71", concurso: "3720", data: "26/06/2026", hora: "",
    textoMapa: "Sol em Câncer 5°23', na 5ª Casa;\nLua em Sagitário 2°38', na 10ª Casa;\nMercúrio em Câncer 25°58', na 6ª Casa;\nVênus em Leão 15°38', na 6ª Casa;\nMarte em Touro 28°42', na 4ª Casa;\nJúpiter em Câncer 29°18', na 6ª Casa;\nSaturno em Áries 14°00', na 2ª Casa;\nUrano em Gêmeos 3°30', na 4ª Casa;\nNetuno em Áries 4°23', na 2ª Casa;\nPlutão em Aquário 4°57', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°47', retrógrado, na 1ª Casa;\nLilith em Sagitário 21°05', na 10ª Casa;\nQuíron em Touro 0°14', na 3ª Casa;\nFortuna em Virgem. 25°07', no\nVértice da 8ª Casa em Gêmeos 11°12', no\nAscendente da 4ª Casa em Aquário 22°22'\nMC em Escorpião 20°54'\n\n1ª Casa em Aquário 22°22'\n2ª Casa em Peixes 19°12'\n3ª Casa em Áries 18°19'\n4ª Casa em Touro 20°54'\n5ª Casa em Gêmeos 24°21'\n6ª Casa em Câncer 24°55'\n7ª Casa em Leão 22°22'\n8ª Casa em Virgem 19°12'\n9ª Casa em Libra 18°19'\n10ª Casa em Escorpião 20°54'\n11ª Casa em Sagitário 24°21'\n12ª Casa em Capricórnio 24°55'\n\nSol em Quincúncio com a Lua (Orbe: 2°45', em movimento subsequente)\nSol em Quadratura com Netuno (Orbe: 1°00', em movimento subsequente)\nSol em Quincúncio com Plutão (Orbe: 0°25', em movimento subsequente)\nLua em Oposição com Urano (Orbe: 0°52', em movimento subsequente)\nLua em Trígono com Netuno (Orbe: 1°45', em movimento subsequente)\nLua em Sextil com Plutão (Orbe: 2°19', em movimento subsequente)\nMercúrio em Sextil com Marte (Orbe: 2°44', em movimento subsequente)\nVênus em Trígono com Saturno (Orbe: 1°38', em movimento subsequente)\nMarte em Sextil com Júpiter (Orbe: 0°36', em movimento subsequente)\nMarte em Octil com Saturno (Orbe: 0°17', em movimento subsequente)\nUrano em Sextil com Netuno (Orbe: 0°53', em movimento subsequente)\nUrano em Trígono com Plutão (Orbe: 1°27', em movimento subsequente)\nNetuno em Sextil Plutão (Orbe: 0°34', em processo de aplicação)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°59', Separando)\nOctil de Netuno no Ascendente (Orbe: 2°59', Separando)\nSextil de Lilith no Ascendente (Orbe: 1°17', Separando)\nOctil do Sol no Descendente (Orbe: 1°59', Separando)\nTri-óctil de Netuno no Descendente (Orbe: 2°59', Separando)\nTrígono de Lilith no Descendente (Orbe: 1°17', Separando)\nTri-óctil do Sol no Meio do Céu (Orbe: 0°30', Separando)\nTri-óctil de Netuno no Meio do Céu (Orbe: 1°31', Separando)\nOctil do Sol no Fundo do Céu (Orbe: 0°30', Separando)\nOctil de Netuno no Fundo do Céu (Orbe: 1°31', Separando)\nQuincúncio de Lilith no Fundo do Céu (Orbe: 0°10', Nodo em\ntrígono com o Sol (Orbe: 2°35', Separando)\nNodo em quadratura com a Lua (Orbe: 0°09', Aplicando)\nNodo em quadratura com Urano (Orbe: 0°42', Separando)\nNodo em sextil com Quíron (Orbe: 2°33', Aplicando)\nLilith em octil com Plutão (Orbe: 1°07', Separando)\nQuíron em quincúncio com a Lua (Orbe: 2°23', Separando)\nQuíron em quadratura com Júpiter (Orbe: 0°56', Aplicando)\nFortuna em sextil com Mercúrio (Orbe: 0°50', Aplicando)\nFortuna em quincúncio com o Ascendente (Orbe: 2°45', Separando)\nVértice em octil com Mercúrio (Orbe: 0°14', Separando)\nVértice em sextil com Saturno (Orbe: 2°47', Aplicando)",
    jogoGerado: [11, 5, 7, 9, 15, 1, 20, 24, 16, 17, 18, 2, 13, 25, 10],
    resultado: [1, 5, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18, 20, 22, 24],
    obs: "",
  },
  {
    id: "h72", concurso: "3721", data: "27/06/2026", hora: "",
    textoMapa: "Sol em Câncer 6°20', na 5ª Casa;\nLua em Sagitário 14°30', na 10ª Casa;\nMercúrio em Câncer 26°08', na 6ª Casa;\nVênus em Leão 16°46', na 6ª Casa;\nMarte em Touro 29°25', na 4ª Casa;\nJúpiter em Câncer 29°31', na 6ª Casa;\nSaturno em Áries 14°03', na 2ª Casa;\nUrano em Gêmeos 3°33', na 4ª Casa;\nNetuno em Áries 4°23', na 2ª Casa;\nPlutão em Aquário 4°56', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°44', retrógrado, na 1ª Casa;\nLilith em Sagitário 21°11', na 10ª Casa;\nQuíron em Touro 0°16', na 3ª Casa;\nFortuna em Virgem. 15°05', no\nVértice da 7ª Casa em Gêmeos 11°40', no\nAscendente da 4ª Casa em Aquário 23°15'\nMC em Escorpião 21°52'\n\n1ª Casa em Aquário 23°15'\n2ª Casa em Peixes 20°08'\n3ª Casa em Áries 19°17'\n4ª Casa em Touro 21°52'\n5ª Casa em Gêmeos 25°16'\n6ª Casa em Câncer 25°47'\n7ª Casa em Leão 23°15'\n8ª Casa em Virgem 20°08'\n9ª Casa em Libra 19°17'\n10ª Casa em Escorpião 21°52'\n11ª Casa em Sagitário 25°16'\n12ª Casa em Capricórnio 25°47'\n\nSol em quadratura com Netuno (Orbe: 1°56', separando)\nSol em quincúncio com Plutão (Orbe: 1°24', separando)\nLua em trígono com Vênus (Orbe: 2°16', aplicando)\nLua em trígono com Júpiter (Orbe: 0°00', aplicando)\nLua em trígono com Saturno (Orbe: 0°27', separando)\nVênus em trígono com Saturno (Orbe: 2°43', separando)\nVênus em trígono com Netuno (Orbe: 2°36', aplicando)\nMarte em sextil com Júpiter (Orbe: 0°06', aplicando)\nMarte em octil com Saturno (Orbe: 0°22', separando)\nUrano em sextil com Netuno (Orbe: 0°50', aplicando)\nUrano em trígono com Plutão (Orbe: 1°22', aplicando)\nNetuno em sextil com Plutão (Orbe: 0°32', aplicando)\n\nTri-óctil do Ascendente com o Sol (Orbe: 1°54', Separando)\nQuincúncio do Ascendente com Mercúrio (Orbe: 2°53', Aplicando)\nSextil do Ascendente com Lilith (Orbe: 2°03', Separando)\nOctil do Descendente com o Sol (Orbe: 1°54', Separando)\nTrígono do Descendente com Lilith (Orbe: 2°03', Separando)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°31', Separando)\nTri-óctil do Meio do Céu com Netuno (Orbe: 2°28', Separando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°31', Separando)\nOctil do Fundo do Céu com Netuno (Orbe: 2°28', Separando)\nQuincúncio do Fundo do Céu com Lilith (Orbe: 0°40', Separando)\nQuadratura do Nodo com Urano (Orbe: 0°48', Separando)\nSextil do Nodo Quíron (Orbe: 2°28', em movimento)\nLilith em octil com Plutão (Orbe: 1°15', em movimento)\nQuíron em trí-óctil com a Lua (Orbe: 0°45', em movimento)\nQuíron em quadratura com Júpiter (Orbe: 0°45', em movimento)\nFortuna em quadratura com a Lua (Orbe: 0°34', em movimento)\nFortuna em octil com Júpiter (Orbe: 0°33', em movimento)\nFortuna em quincúncio com Saturno (Orbe: 1°02', em movimento)\nFortuna em trí-óctil com Quíron (Orbe: 0°11', em movimento)\nLua em oposição ao vértice (Orbe: 2°50', em movimento)\nMercúrio em octil no vértice (Orbe: 0°32', em movimento)\nJúpiter em octil no vértice (Orbe: 2°50', em movimento)\nSextil no vértice com Saturno (Orbe: 2°22', em movimento)",
    jogoGerado: [5, 20, 8, 1, 23, 9, 15, 17, 21, 24, 25, 2, 13, 10, 7],
    resultado: [1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 20, 21, 23, 24],
    obs: "",
  },
  {
    id: "h73", concurso: "3722", data: "29/06/2026", hora: "",
    textoMapa: "Sol em Câncer 8°14', na 5ª Casa;\nLua em Capricórnio 8°16', na 11ª Casa;\nMercúrio em Câncer 26°15', estacionário, na 5ª Casa;\nVênus em Leão 19°03', na 6ª Casa;\nMarte em Gêmeos 0°50', na 4ª Casa;\nJúpiter em Câncer 29°56', na 6ª Casa;\nSaturno em Áries 14°08', na 2ª Casa;\nUrano em Gêmeos 3°39', na 4ª Casa;\nNetuno em Áries 4°24', na 2ª Casa;\nPlutão em Aquário 4°53', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°38', retrógrado, na 1ª Casa; Lilith em Sagitário 21°25', na 10ª Casa ; Quíron em Touro 0°20', na\n3ª Casa; Fortuna em Leão 24°58', na 5ª Casa. Vértice da 6ª casa em Gêmeos 12°37', Ascendente na 4ª casa em Aquário 25°00', Meio do Céu em Escorpião 23°48'\n\n1ª Casa em Aquário 25°00'\n2ª Casa em Peixes 21°58'\n3ª Casa em Áries 21°13'\n4ª Casa em Touro 23°48'\n5ª Casa em Gêmeos 27°06'\n6ª Casa em Câncer 27°32'\n7ª Casa em Leão 25°00'\n8ª Casa em Virgem 21°58'\n9ª Casa em Libra 21°13'\n10ª Casa em Escorpião 23°48'\n11ª Casa em Sagitário 27°06'\n12ª Casa em Capricórnio 27°32'\n\nOposição do Sol à Lua (Orbe: 0°01', Separando)\nTrígono de Vênus com Netuno (Orbe: 0°20', Iniciando)\nSextil de Marte com Júpiter (Orbe: 0°53', Separando)\nOctil de Marte com Saturno (Orbe: 1°42', Separando)\nConjunção de Marte com Urano (Orbe: 2°48', Iniciando)\nSextil de Urano com Netuno (Orbe: 0°44', Iniciando)\nTrígono de Urano com Plutão (Orbe: 1°14', Iniciando)\nSextil de Netuno com Plutão (Orbe: 0°29', Iniciando)\n\nSol em Tri-Óctil no Ascendente (Orbe: 1°45', Separando)\nLua em Octil no Ascendente (Orbe: 1°43', Separando)\nMercúrio em Quincúncio no Ascendente (Orbe: 1°14', Aplicando)\nSol em Octil no Descendente (Orbe: 1°45', Separando)\nLua em Tri-Óctil no Descendente (Orbe: 1°43', Separando)\nSol em Tri-Óctil no Meio do Céu (Orbe: 0°33', Separando)\nLua em Octil no Meio do Céu (Orbe: 0°31', Separando)\nMercúrio em Trígono no Meio do Céu (Orbe: 2°26', Aplicando)\nSol em Octil no Fundo do Céu (Orbe: 0°33', Separando)\nLua em Tri-Óctil no Fundo do Céu (Orbe: 0°31', Separando)\nMercúrio em Sextil no Fundo do Céu (Orbe: 2°26', Aplicando)\nLilith em Quincúncio no Fundo do Céu (Orbe:\nNodo em quadratura com Marte (Orbe: 1°47', em movimento) Nodo\nem quincúncio com Júpiter (Orbe: 2°41', em movimento)\nNodo em quadratura com Urano (Orbe: 1°01', em movimento)\nNodo em sextil com Quíron (Orbe: 2°18', em movimento)\nLilith em trígono com Vênus (Orbe: 2°21', em movimento)\nLilith em octil com Plutão (Orbe: 1°31', em movimento)\nQuíron em quadratura com Júpiter (Orbe: 0°23', em movimento)\nFortuna em octil com o Sol (Orbe: 1°43', em movimento)\nFortuna em trígono com a Lua (Orbe: 1°42', em movimento)\nFortuna em oposição ao Ascendente (Orbe: 0°01', em movimento) Fortuna em quadratura com o Meio do Céu (Orbe: 1°10', em movimento) Fortuna em quadratura com o Fundo do Céu (Orbe: 1°10'\n, em movimento) Conjunção da Fortuna\ncom\no Descendente (Orbe: 0°01', Separando)\nVértice em Octil com Mercúrio (Orbe: 1°21', Separando)\nVértice em Octil com Júpiter (Orbe: 2°19', Aplicando)\nVértice em Sextil com Saturno (Orbe: 1°31', Aplicando)\nVértice em Octil com Quíron (Orbe: 2°43', Aplicando)",
    jogoGerado: [2, 5, 15, 3, 13, 1, 9, 4, 6, 10, 12, 19, 23, 20, 17],
    resultado: [2, 3, 5, 6, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 23],
    obs: "",
  },
  {
    id: "h74", concurso: "3723", data: "30/06/2026", hora: "",
    textoMapa: "Sol em Câncer 9°12', na 5ª Casa;\nLua em Capricórnio 20°13', na 11ª Casa;\nMercúrio em Câncer 26°11', retrógrado, na 5ª Casa;\nVênus em Leão 20°11', na 6ª Casa\n; Marte em Gêmeos 1°33', na 4ª Casa;\nJúpiter em Leão 0°09', na 6ª Casa;\nSaturno em Áries 14°11', na 2ª Casa;\nUrano em Gêmeos 3°42', na 4ª Casa;\nNetuno em Áries 4°24', na 2ª Casa;\nPlutão em Aquário 4°52', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°35', retrógrado, na 1ª Casa; Lilith em Sagitário 21°32', na 10ª Casa ; Quíron em Touro 0°21', na\n3ª Casa; Fortuna em Leão 14°52', na 5ª Casa. Vértice da 6ª casa em Gêmeos 13°05', Ascendente na 4ª casa em Aquário 25°53', Meio do Céu em Escorpião 24°46'\n\n1ª Casa em Aquário 25°53'\n2ª Casa em Peixes 22°53'\n3ª Casa em Áries 22°11'\n4ª Casa em Touro 24°46'\n5ª Casa em Gêmeos 28°00'\n6ª Casa em Câncer 28°24'\n7ª Casa em Leão 25°53'\n8ª Casa em Virgem 22°53'\n9ª Casa em Libra 22°11'\n10ª Casa em Escorpião 24°46'\n11ª Casa em Sagitário 28°00'\n12ª Casa em Capricórnio 28°24'\n\nLua em Quincúncio com Vênus (Orbe: 0°01', Separando)\nLua em Tri-Óctil com Urano (Orbe: 1°30', Separando)\nVênus em Tri-Óctil com Netuno (Orbe: 0°47', Separando)\nMarte em Sextil com Júpiter (Orbe: 1°23', Separando)\nMarte em Octil com Saturno (Orbe: 2°22', Separando)\nMarte em Conjunção com Urano (Orbe: 2°08', Iniciando)\nMarte em Sextil com Netuno (Orbe: 2°50', Iniciando)\nUrano em Sextil com Netuno (Orbe: 0°41', Iniciando)\nUrano em Trígono com Plutão (Orbe: 1°10', Iniciando)\nNetuno em Sextil com Plutão (Orbe: 0°28', Iniciando)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°41', Separando)\nQuincúncio do Mercúrio no Ascendente (Orbe: 0°18', Aplicando)\nOctil do Sol no Descendente (Orbe: 1°41', Separando)\nTri-óctil do Sol no Meio do Céu (Orbe: 0°34', Separando)\nTrígono do Meio do Céu com Mercúrio (Orbe: 1°25', Aplicando)\nOctil do Sol no Fundo do Céu (Orbe: 0°34', Separando)\nSextil do Fundo do Céu com Mercúrio (Orbe: 1°25', Aplicando)\nOctil da Lua no Nodo (Orbe: 2°37', Separando)\nQuadratura do Nodo com Marte (Orbe: 1°01', Aplicando)\nQuincúncio do Nodo com Júpiter (Orbe: 2°25', Aplicando)\nQuadratura do Nodo com Urano (Orbe: 1°07', Separando)\nSextil do Nodo com Quíron (Orbe: 2°13',\nLilith em trígono com Vênus (Orbe: 1°20', em processo de aplicação) Lilith\nem octil com Plutão (Orbe: 1°39', em processo de separação)\nQuíron em quadratura com Júpiter (Orbe: 0°12', em processo de aplicação)\nFortuna em trígono com Saturno (Orbe: 0°41', em processo de separação)\nFortuna em trígono com octil de Vertex (Orbe: 0°07', em processo de separação)\nVertex em octil com Mercúrio (Orbe: 1°53', em processo de separação)\nVertex em octil com Júpiter (Orbe: 2°04', em processo de aplicação)\nVertex em sextil com Saturno (Orbe: 1°05', em processo de aplicação)\nVertex em octil com Quíron (Orbe: 2°16', em processo de aplicação)",
    jogoGerado: [4, 2, 5, 15, 25, 19, 1, 9, 6, 23, 20, 17, 11, 13, 21],
    resultado: [2, 4, 5, 6, 7, 10, 12, 15, 17, 18, 19, 20, 22, 23, 25],
    obs: "",
  },
  {
    id: "h75", concurso: "3724", data: "01/07/2026", hora: "",
    textoMapa: "Sol em Câncer 10°09', na 5ª Casa;\nLua em Aquário 2°14', na 12ª Casa;\nMercúrio em Câncer 26°03', retrógrado, na 5ª Casa;\nVênus em Leão 21°19', na 6ª Casa;\nMarte em Gêmeos 2°16', na 4ª Casa;\nJúpiter em Leão 0°22', na 6ª Casa;\nSaturno em Áries 14°13', na 2ª Casa;\nUrano em Gêmeos 3°45', na 4ª Casa;\nNetuno em Áries 4°24', na 2ª Casa;\nPlutão em Aquário 4°51', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°32', retrógrado, na 1ª Casa; Lilith em Sagitário 21°38', na 10ª Casa ; Quíron em Touro 0°23', na\n3ª Casa; Fortuna em Leão 4°41', na 5ª Casa. Vértice da 6ª casa em Gêmeos 13°33', Ascendente na 4ª casa em Aquário 26°45', Meio do Céu em Escorpião 25°43'\n\n1ª Casa em Aquário 26°45'\n2ª Casa em Peixes 23°49'\n3ª Casa em Áries 23°09'\n4ª Casa em Touro 25°43'\n5ª Casa em Gêmeos 28°55'\n6ª Casa em Câncer 29°16'\n7ª Casa em Leão 26°45'\n8ª Casa em Virgem 23°49'\n9ª Casa em Libra 23°09'\n10ª Casa em Escorpião 25°43'\n11ª Casa em Sagitário 28°55'\n12ª Casa em Capricórnio 29°16'\n\nLua em trígono com Marte (Orbe: 0°01', em movimento subsequente)\nLua em oposição a Júpiter (Orbe: 1°51', em movimento subsequente)\nLua em trígono com Urano (Orbe: 1°31', em movimento subsequente)\nLua em sextil com Netuno (Orbe: 2°10', em movimento subsequente)\nLua em conjunção com Plutão (Orbe: 2°37', em movimento subsequente)\nVênus em trígono-óctil com Netuno (Orbe: 1°54', em movimento subsequente)\nMarte em sextil com Júpiter (Orbe: 1°53', em movimento subsequente)\nMarte em conjunção com Urano (Orbe: 1°29', em movimento subsequente)\nMarte em sextil com Netuno (Orbe: 2°08', em movimento subsequente)\nMarte em trígono com Plutão (Orbe: 2°35', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°39', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 1°05', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°26', em aplicação )\n\nTri-óctil do Sol no Ascendente (Orbe: 1°36', Separando)\nQuincúncio do Ascendente com Mercúrio (Orbe: 0°42', Separando)\nOctil do Ascendente com Saturno (Orbe: 2°27', Aplicando)\nOctil do Descendente com o Sol (Orbe: 1°36', Separando)\nTri-óctil do Descendente com Saturno (Orbe: 2°27', Aplicando)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°34', Separando)\nTrígono do Meio do Céu com Mercúrio (Orbe: 0°19', Aplicando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°34', Separando)\nSextil do Fundo do Céu com Mercúrio (Orbe: 0°19', Aplicando)\nQuadratura do Nodo com Marte (Orbe: 0°15', Aplicando)\nQuincúncio do Nodo com Júpiter (Orbe: 2°09', Aplicando)\nQuadratura do Nodo com Urano (Orbe:\nNodo em sextil com Quíron (Orbe: 2°08', em movimento) Lilith\nem trígono com Vênus (Orbe: 0°19', em movimento)\nLilith em octil com Plutão (Orbe: 1°47', em movimento)\nQuíron em quadratura com a Lua (Orbe: 1°50', em movimento)\nQuíron em quadratura com Júpiter (Orbe: 0°01', em movimento)\nFortuna em oposição à Lua (Orbe: 2°26', em movimento)\nFortuna em sextil com Marte (Orbe: 2°24', em movimento)\nFortuna em sextil com Urano (Orbe: 0°55', em movimento)\nFortuna em trígono com Netuno (Orbe: 0°16', em movimento)\nFortuna em oposição a Plutão (Orbe: 0°10', em movimento)\nFortuna em quincúncio com o Nodo (Orbe: 2°09', em movimento)\nFortuna em trígono-octil com Lilith (Orbe:\nVertex Octil Mercúrio (Orbe: 2°29', Separando )\nVertex Octil Júpiter (Orbe: 1°48', Aplicando)\nVertex Sextil Saturno (Orbe: 0°40', Aplicando)\nVertex Octil Quíron (Orbe: 1°50', Aplicando)",
    jogoGerado: [25, 2, 5, 15, 21, 24, 1, 22, 9, 3, 6, 11, 19, 23, 17],
    resultado: [1, 2, 3, 5, 6, 7, 12, 15, 16, 17, 19, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h76", concurso: "3725", data: "02/07/2026", hora: "",
    textoMapa: "Sol em Câncer 11°06', na 5ª Casa;\nLua em Aquário 14°21', na 12ª Casa;\nMercúrio em Câncer 25°51', retrógrado, na 5ª Casa;\nVênus em Leão 22°27', na 6ª Casa;\nMarte em Gêmeos 2°58', na 4ª Casa;\nJúpiter em Leão 0°35', na 6ª Casa;\nSaturno em Áries 14°16', na 2ª Casa;\nUrano em Gêmeos 3°48', na 4ª Casa;\nNetuno em Áries 4°24', na 2ª Casa;\nPlutão em Aquário 4°50', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°28', retrógrado, na 1ª Casa;\nLilith em Sagitário 21°45', na 10ª Casa;\nQuíron em Touro 0°25', na 3ª Casa;\nFortuna em Câncer. 24°23', no\nVértice da 5ª Casa em Gêmeos 14°01', no\nAscendente da 4ª Casa em Aquário 27°38'\nMC em Escorpião 26°41'\n\n1ª Casa em Aquário 27°38'\n2ª Casa em Peixes 24°44'\n3ª Casa em Áries 24°06'\n4ª Casa em Touro 26°41'\n5ª Casa em Gêmeos 29°49'\n6ª Casa em Leão 0°08'\n7ª Casa em Leão 27°38'\n8ª Casa em Virgem 24°44'\n9ª Casa em Libra 24°06'\n10ª Casa em Escorpião 26°41'\n11ª Casa em Sagitário 29°49'\n12ª Casa em Aquário 0°08'\n\nLua em sextil com Saturno (Orbe: 0°05', separando)\nMarte em sextil com Júpiter (Orbe: 2°23', separando)\nMarte em conjunção com Urano (Orbe: 0°49', aplicando)\nMarte em sextil com Netuno (Orbe: 1°26', aplicando)\nMarte em trígono com Plutão (Orbe: 1°51', aplicando)\nUrano em sextil com Netuno (Orbe: 0°36', aplicando)\nUrano em trígono com Plutão (Orbe: 1°01', aplicando)\nNetuno em sextil com Plutão (Orbe: 0°25', aplicando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 1°32', Separando)\nAscendente em Quincúncio com Mercúrio (Orbe: 1°47', Separando)\nAscendente em Quincúncio com Júpiter (Orbe: 2°56', Aplicando)\nAscendente em Octil com Saturno (Orbe: 1°37', Aplicando)\nAscendente em Sextil com Quíron (Orbe: 2°46', Aplicando)\nDescendente em Octil com o Sol (Orbe: 1°32', Separando)\nDescendente em Tri-Octil com Saturno (Orbe: 1°37', Aplicando)\nDescendente em Trígono com Quíron (Orbe: 2°46', Aplicando) Meio do Céu em\nTri-Octil com o Sol (Orbe: 0°34', Separando)\nMeio do Céu em Trígono com Mercúrio (Orbe: 0°50', Separando)\nMeio do Céu em Tri-Octil com Saturno (Orbe: 2°34', Aplicando)\nFundo do Céu em Octil com o Sol (Orbe: 0°34', Separando)\nIC em sextil com Mercúrio (Orbe: 0°50', Separando)\nIC em octil com Saturno (Orbe: 2°34', Aplicando)\nNodo em quadratura com Marte (Orbe: 0°29', Separando)\nNodo em quincúncio com Júpiter (Orbe: 1°53', Aplicando)\nNodo em quadratura com Urano (Orbe: 1°19', Separando)\nNodo em sextil com Quíron (Orbe: 2°03', Aplicando)\nLilith em trígono com Vênus (Orbe: 0°41', Separando)\nLilith em octil com Plutão (Orbe: 1°55', Separando)\nQuíron em quadratura com Júpiter (Orbe: 0°10', Separando)\nFortuna em conjunção com Mercúrio (Orbe: 1°27', Aplicando)\nFortuna em quincúncio com Lilith (Orbe: 2°37', Separando)\nFortuna em trígono com MC (Orbe: 2°17', em aplicação)\nSextil da Fortuna com o IC (Orbe: 2°17', em aplicação)\nTrígono do Vértice com a Lua (Orbe: 0°20', em aplicação)\nOctil do Vértice com Júpiter (Orbe: 1°33', em aplicação)\nSextil do Vértice com Saturno (Orbe: 0°14', em aplicação)\nOctil do Vértice com Quíron (Orbe: 1°23', em aplicação)",
    jogoGerado: [25, 2, 5, 15, 24, 1, 9, 6, 10, 13, 19, 17, 21, 11, 14],
    resultado: [1, 2, 4, 5, 6, 8, 11, 13, 14, 16, 17, 19, 21, 24, 25],
    obs: "",
  },
  {
    id: "h77", concurso: "3726", data: "03/07/2026", hora: "",
    textoMapa: "Sol em Câncer 12°03', na 5ª Casa;\nLua em Aquário 26°38', na 12ª Casa;\nMercúrio em Câncer 25°34', retrógrado, na 5ª Casa;\nVênus em Leão 23°35', na 6ª Casa;\nMarte em Gêmeos 3°41', na 4ª Casa;\nJúpiter em Leão 0°48', na 5ª Casa;\nSaturno em Áries 14°18', na 2ª Casa;\nUrano em Gêmeos 3°51', na 4ª Casa;\nNetuno em Áries 4°24', na 2ª Casa;\nPlutão em Aquário 4°48', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°25', retrógrado, na 1ª Casa;\nLilith em Sagitário 21°52', na 10ª Casa;\nQuíron em Touro 0°26', na 3ª Casa;\nFortuna em Câncer. 13°56', no\nVértice da 5ª Casa em Gêmeos 14°30', no\nAscendente da 4ª Casa em Aquário 28°31'\nMeio do Céu em Escorpião 27°38'\n\n1ª Casa em Aquário 28°31'\n2ª Casa em Peixes 25°39'\n3ª Casa em Áries 25°04'\n4ª Casa em Touro 27°38'\n5ª Casa em Câncer 0°43'\n6ª Casa em Leão 1°01'\n7ª Casa em Leão 28°31'\n8ª Casa em Virgem 25°39'\n9ª Casa em Libra 25°04'\n10ª Casa em Escorpião 27°38'\n11ª Casa em Capricórnio 0°43'\n12ª Casa em Aquário 1°01'\n\nSol em trígono com a Lua (Orbe: 0°25', em movimento subsequente)\nSol em quadratura com Saturno (Orbe: 2°14', em movimento subsequente)\nLua em quincúncio com Mercúrio (Orbe: 1°04', em movimento subsequente)\nLua em octil com Saturno (Orbe: 2°39', em movimento subsequente)\nMarte em sextil com Júpiter (Orbe: 2°52', em movimento subsequente)\nMarte em conjunção com Urano (Orbe: 0°10', em movimento subsequente)\nMarte em sextil com Netuno (Orbe: 0°43', em movimento subsequente)\nMarte em trígono com Plutão (Orbe: 1°07', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°33', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°57', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°23', em movimento subsequente)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°27', Separando)\nConjunção com a Lua no Ascendente (Orbe: 1°53', Separando)\nQuincúncio de Mercúrio no Ascendente (Orbe: 2°57', Separando)\nQuincúncio de Júpiter no Ascendente (Orbe: 2°16', Aplicando)\nOctil de Saturno no Ascendente (Orbe: 0°46', Aplicando)\nSextil de Quíron no Ascendente (Orbe: 1°55', Aplicando)\nOctil do Sol no Descendente (Orbe: 1°27', Separando)\nOposição da Lua no Descendente (Orbe: 1°53', Separando)\nTri-óctil de Saturno no Descendente (Orbe: 0°46', Aplicando)\nTrígono de Quíron no Descendente (Orbe: 1°55', Aplicando)\nTri-óctil do Sol no Meio do Céu (Orbe: 0°34', Separando)\nQuadratura da Lua no Meio do Céu (Orbe: 0°59', Separando)\nMC em trígono com Mercúrio (Orbe: 2°04', Separando)\nMC em trígono com Saturno (Orbe: 1°40', Aplicando)\nMC em quincúncio com Quíron (Orbe: 2°48', Aplicando)\nIC em óctil com o Sol (Orbe: 0°34', Separando)\nIC em quadratura com a Lua (Orbe: 0°59', Separando)\nIC em sextil com Mercúrio (Orbe: 2°04', Separando)\nIC em óctil com Saturno (Orbe: 1°40', Aplicando)\nNodo em quadratura com Marte (Orbe: 1°15', Separando)\nNodo em quincúncio com Júpiter (Orbe: 1°37', Aplicando)\nNodo em quadratura com Urano (Orbe: 1°25', Separando)\nNodo em sextil com Quíron (Orbe: 1°58', Aplicando)\nLilith em trígono com Vênus (Orbe:\nLilith em Octil com Plutão (Orbe: 2°03', Separando )\nQuíron em Quadratura com Júpiter (Orbe: 0°21', Separando)\nFortuna em Conjunção com o Sol (Orbe: 1°53', Separando)\nFortuna em Tri-Octil com a Lua (Orbe: 2°18', Separando)\nFortuna em Quadratura com Saturno (Orbe: 0°21', Aplicando)\nFortuna em Tri-Octil com o Ascendente (Orbe: 0°25', Separando)\nFortuna em Tri-Octil com o Meio do Céu (Orbe: 1°18', Separando)\nFortuna em Octil com o Fundo do Céu (Orbe: 1°18', Separando)\nFortuna em Octil com o Descendente (Orbe: 0°25', Separando)\nVértice em Octil com Júpiter (Orbe: 1°18', Aplicando)\nVértice em Sextil com Saturno (Orbe: 0°11', Separando)\nVértice em Octil com Quíron (Orbe: 0°56', Aplicando)",
    jogoGerado: [25, 5, 15, 2, 24, 1, 20, 9, 6, 8, 10, 13, 19, 22, 21],
    resultado: [2, 5, 6, 7, 10, 13, 14, 17, 18, 19, 20, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h78", concurso: "3727", data: "04/07/2026", hora: "",
    textoMapa: "Sol em Câncer 13°00', na 5ª Casa;\nLua em Peixes 9°06', na 1ª Casa;\nMercúrio em Câncer 25°13', retrógrado, na 5ª Casa;\nVênus em Leão 24°42', na 6ª Casa;\nMarte em Gêmeos 4°23', na 4ª Casa;\nJúpiter em Leão 1°01', na 5ª Casa;\nSaturno em Áries 14°20', na 2ª Casa;\nUrano em Gêmeos 3°54', na 4ª Casa;\nNetuno em Áries 4°24', na 2ª Casa;\nPlutão em Aquário 4°47', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°22', retrógrado, na 1ª Casa; Lilith em Sagitário 21°58', na 10ª Casa ; Quíron em Touro 0°28',\nna 3ª Casa; Fortuna em Câncer 3°18', na 5ª Casa. Vértice da 5ª casa em Gêmeos 14°58', Ascendente na 4ª casa em Aquário 29°24', Meio do Céu em Escorpião 28°35'\n\n1ª Casa em Aquário 29°24'\n2ª Casa em Peixes 26°35'\n3ª Casa em Áries 26°02'\n4ª Casa em Touro 28°35'\n5ª Casa em Câncer 1°37'\n6ª Casa em Leão 1°53'\n7ª Casa em Leão 29°24'\n8ª Casa em Virgem 26°35'\n9ª Casa em Libra 26°02'\n10ª Casa em Escorpião 28°35'\n11ª Casa em Capricórnio 1°37'\n12ª Casa em Aquário 1°53'\n\nSol em quadratura com Saturno (Orbe: 1°19', em movimento subsequente)\nLua em trígono com Mercúrio (Orbe: 1°06', em movimento subsequente)\nMarte em conjunção com Urano (Orbe: 0°29', em movimento subsequente)\nMarte em sextil com Netuno (Orbe: 0°01', em movimento subsequente)\nMarte em trígono com Plutão (Orbe: 0°23', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 2°52', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°30', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°53', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°22', em movimento subsequente)\n\nAscendente em Tri-Octil com o Sol (Orbe: 1°23', Separando)\nAscendente em Quincúncio com Júpiter (Orbe: 1°36', Aplicando)\nAscendente em Octil com Saturno (Orbe: 0°03', Separando)\nAscendente em Conjunção com o Nodo (Orbe: 2°57', Aplicando)\nAscendente em Sextil com Quíron (Orbe: 1°03', Aplicando)\nDescendente em Octil com o Sol (Orbe: 1°23', Separando)\nDescendente em Tri-Octil com Saturno (Orbe: 0°03', Separando)\nDescendente em Oposição com o Nodo (Orbe: 2°57', Aplicando)\nDescendente em Trígono com Quíron (Orbe: 1°03', Aplicando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°34', Separando)\nMeio do Céu em Trígono com Júpiter (Orbe: 2°25', Aplicando)\nMeio do Céu em Tri-Octil com Saturno (Orbe: 0°45', em aplicação)\nMC Quincúncio com Quíron (Orbe: 1°52', em aplicação)\nIC Octil com o Sol (Orbe: 0°34', em separação)\nIC Sextil com Júpiter (Orbe: 2°25', em aplicação)\nIC Octil com Saturno (Orbe: 0°45', em aplicação)\nNodo Quadratura com Marte (Orbe: 2°01', em separação)\nNodo Quincúncio com Júpiter (Orbe: 1°21', em aplicação)\nNodo Quadratura com Urano (Orbe: 1°31', em separação)\nNodo Sextil com Quíron (Orbe: 1°53', em aplicação)\nLilith Trígono com Vênus (Orbe: 2°43', em separação)\nLilith Octil com Plutão (Orbe: 2°11', em separação)\nQuíron Quadratura com Júpiter (Orbe: 0°32', em separação)\nFortuna Quadratura com Netuno (Orbe:\nFortuna em Quincúncio com Plutão (Orbe: 1°28', em aplicação)\nFortuna em Trígono com o Nodo (Orbe: 0°56', em separação)\nFortuna em Sextil com Quíron (Orbe: 2°50', em separação)\nVértice em Octil com Júpiter (Orbe: 1°02', em aplicação)\nVértice em Sextil com Saturno (Orbe: 0°37', em separação)\nVértice em Octil com Quíron (Orbe: 0°29', em aplicação)",
    jogoGerado: [4, 5, 15, 2, 1, 9, 6, 10, 13, 19, 20, 23, 25, 7, 22],
    resultado: [1, 2, 3, 4, 5, 9, 10, 11, 13, 14, 16, 18, 19, 22, 23],
    obs: "",
  },
  {
    id: "h79", concurso: "3728", data: "06/07/2026", hora: "",
    textoMapa: "Sol em Câncer 14°55', na 5ª Casa;\nLua em Áries 4°51', na 2ª Casa;\nMercúrio em Câncer 24°20', retrógrado, na 5ª Casa;\nVênus em Leão 26°57', na 6ª Casa;\nMarte em Gêmeos 5°48', na 4ª Casa;\nJúpiter em Leão 1°27', na 5ª Casa;\nSaturno em Áries 14°24', na 2ª Casa;\nUrano em Gêmeos 3°59', na 4ª Casa;\nNetuno em Áries 4°25', estacionário, na 2ª Casa;\nPlutão em Aquário 4°44', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°16', retrógrado, na 1ª Casa;\nLilith em Sagitário 22°12', na 10ª Casa;\nQuíron em Touro 0°31', na 3ª Casa;\nFortuna em Gêmeos. 11°14', no\nVértice da 4ª Casa em Gêmeos 15°55', no\nAscendente da 4ª Casa em Peixes 1°10'\nMeio do Céu em Sagitário 0°29'\n\n1ª Casa em Peixes 1°10'\n2ª Casa em Peixes 28°26'\n3ª Casa em Áries 27°57'\n4ª Casa em Gêmeos 0°29'\n5ª Casa em Câncer 3°25'\n6ª Casa em Leão 3°37'\n7ª Casa em Virgem 1°10'\n8ª Casa em Virgem 28°26'\n9ª Casa em Libra 27°57'\n10ª Casa em Sagitário 0°29'\n11ª Casa em Capricórnio 3°25'\n12ª Casa em Aquário 3°37'\n\nSol em octil com Vênus (Orbe: 2°57', em movimento)\nSol em quadratura com Saturno (Orbe: 0°30', em movimento)\nLua em sextil com Marte (Orbe: 0°56', em movimento)\nLua em sextil com Urano (Orbe: 0°51', em movimento)\nLua em conjunção com Netuno (Orbe: 0°26', em movimento)\nLua em sextil com Plutão (Orbe: 0°06', em movimento)\nVênus em trígono com Saturno (Orbe: 2°27', em movimento)\nMarte em conjunção com Urano (Orbe: 1°48', em movimento)\nMarte em sextil com Netuno (Orbe: 1°23', em movimento)\nMarte em trígono com Plutão (Orbe: 1°03', em movimento)\nJúpiter em sextil com Urano (Orbe: 2°32', em movimento)\nJúpiter em trígono com Netuno (Orbe: 2°57', em movimento)\nUrano em sextil com Netuno (Orbe: 0°25', em fase crescente)\nUrano em trígono com Plutão (Orbe: 0°44', em fase crescente)\nNetuno em sextil com Plutão (Orbe: 0°19', em fase crescente)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°15', Separando)\nQuincúncio de Júpiter no Ascendente (Orbe: 0°16', Aplicando)\nOctil de Saturno no Ascendente (Orbe: 1°45', Separando)\nQuadratura de Urano no Ascendente (Orbe: 2°49', Aplicando)\nConjunção do Nodo no Ascendente (Orbe: 1°05', Aplicando)\nSextil de Quíron no Ascendente (Orbe: 0°39', Separando)\nOctil do Sol no Descendente (Orbe: 1°15', Separando)\nTri-óctil de Saturno no Descendente (Orbe: 1°45', Separando)\nQuadratura de Urano no Descendente (Orbe: 2°49', Aplicando)\nOposição do Nodo no Descendente (Orbe: 1°05', Aplicando)\nTrígono de Quíron no Descendente (Orbe: 0°39', Separando) Meio do\nCéu Tri-óctil Sol (Orbe: 0°33', Separando)\nMeio do Céu em trígono com Júpiter (Orbe: 0°57', Aplicando)\nMeio do Céu em tri-óctil Saturno (Orbe: 1°04', Separando)\nMeio do Céu em quadratura com o Nodo Lunar (Orbe: 1°46', Aplicando)\nMeio do Céu em quincúncio com Quíron (Orbe: 0°02', Aplicando)\nFundo do Céu em octil Sol (Orbe: 0°33', Separando)\nFundo do Céu em sextil Júpiter (Orbe: 0°57', Aplicando) Fundo do Céu\nem octil Saturno (Orbe: 1°04', Separando) Fundo do Céu em quadratura com o Nodo Lunar (Orbe: 1°46', Aplicando) Nodo em tri-óctil Sol (Orbe: 2°20', Aplicando) Nodo em quincúncio Júpiter (Orbe: 0°48', Aplicando) Nodo em octil Saturno (Orbe: 2°51', Aplicando) Nodo em quadratura com Urano (Orbe: 1°43', Separando) Nodo em sextil com Quíron (Orbe: 1°44', Aplicando) Lilith em quincúncio com Mercúrio (Orbe: 2°08', Aplicando) Lilith em octil com Plutão (Orbe: 2°27', Separando) Quíron em quadratura com Júpiter (Orbe: 0°55', Separando) Fortuna em octil com Mercúrio (Orbe: 1°54', Separando) Vértice em octil com Júpiter (Orbe: 0°31', Aplicando) Vértice em sextil com Saturno (Orbe: 1°30', Separando) Vértice em octil com Quíron (Orbe: 0°23', Separando)",
    jogoGerado: [11, 15, 17, 2, 1, 5, 9, 6, 19, 22, 21, 25, 10, 13, 16],
    resultado: [1, 2, 3, 6, 7, 8, 10, 11, 16, 17, 19, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h80", concurso: "3729", data: "07/07/2026", hora: "",
    textoMapa: "Sol em Câncer 15°52', na 5ª Casa;\nLua em Áries 18°14', na 2ª Casa;\nMercúrio em Câncer 23°49', retrógrado, na 5ª Casa;\nVênus em Leão 28°04', na 6ª Casa;\nMarte em Gêmeos 6°30', na 4ª Casa;\nJúpiter em Leão 1°40', na 5ª Casa;\nSaturno em Áries 14°26', na 2ª Casa;\nUrano em Gêmeos 4°02', na 4ª Casa;\nNetuno em Áries 4°25', retrógrado, na 2ª Casa;\nPlutão em Aquário 4°43', retrógrado, na 12ª Casa;\nNodo Norte em Peixes 2°12', retrógrado, na 1ª Casa;\nLilith em Sagitário 22°19', na 10ª Casa;\nQuíron em Touro 0°32', na 3ª Casa;\nFortuna em Touro. 29°41', no\nVértice da 3ª Casa em Gêmeos 16°23', no\nAscendente da 4ª Casa em Peixes 2°03'\nMC em Sagitário 1°26'\n\n1ª Casa em Peixes 2°03'\n2ª Casa em Peixes 29°21'\n3ª Casa em Áries 28°54'\n4ª Casa em Gêmeos 1°26'\n5ª Casa em Câncer 4°19'\n6ª Casa em Leão 4°30'\n7ª Casa em Virgem 2°03'\n8ª Casa em Virgem 29°21'\n9ª Casa em Libra 28°54'\n10ª Casa em Sagitário 1°26'\n11ª Casa em Capricórnio 4°19'\n12ª Casa em Aquário 4°30'\n\nSol em quadratura com a Lua (Orbe: 2°22', separando)\nSol em octil com Vênus (Orbe: 2°47', aplicando)\nSol em quadratura com Saturno (Orbe: 1°25', separando)\nLua em octil com Urano (Orbe: 0°48', aplicando)\nMercúrio em octil com Marte (Orbe: 2°18', aplicando)\nVênus em trígono com Saturno (Orbe: 1°22', aplicando)\nMarte em conjunção com Urano (Orbe: 2°27', separando)\nMarte em sextil com Netuno (Orbe: 2°05', separando)\nMarte em trígono com Plutão (Orbe: 1°46', separando)\nJúpiter em sextil com Urano (Orbe: 2°22', aplicando)\nJúpiter em trígono com Netuno (Orbe: 2°44', aplicando)\nUrano em sextil com Netuno (Orbe: 0°22', aplicando)\nUrano em trígono com Plutão (Orbe: 0°40', aproximando-se)\nNetuno em sextil com Plutão (Orbe: 0°18', separando-se)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°11', Separando)\nOctil da Lua no Ascendente (Orbe: 1°10', Aplicando)\nQuincúncio de Júpiter no Ascendente (Orbe: 0°23', Separando)\nOctil de Saturno no Ascendente (Orbe: 2°36', Separando)\nQuadratura de Urano no Ascendente (Orbe: 1°58', Aplicando)\nConjunção do Nodo Norte no Ascendente (Orbe: 0°09', Aplicando)\nSextil de Quíron no Ascendente (Orbe: 1°30', Separando)\nOctil do Sol no Descendente (Orbe: 1°11', Separando)\nTri-óctil da Lua no Descendente (Orbe: 1°10', Aplicando)\nTri-óctil de Saturno no Descendente (Orbe: 2°36', Separando)\nQuadratura de Urano no Descendente (Orbe: 1°58', Em aplicação)\nDescendente em Quincúncio com Netuno (Orbe: 2°21', em aplicação)\nDescendente em Quincúncio com Plutão (Orbe: 2°39', em aplicação)\nDescendente em Oposição ao Nodo (Orbe: 0°09', em aplicação)\nDescendente em Trígono com Quíron (Orbe: 1°30', em separação)\nMeio do Céu em Tri-Óctil com o Sol (Orbe: 0°33', em separação)\nMeio do Céu em Tri-Óctil com a Lua (Orbe: 1°48', em aplicação) Meio do Céu\nem Trígono com Júpiter (Orbe: 0°14', em aplicação)\nMeio do Céu em Tri-Óctil com Saturno (Orbe: 1°59', em separação)\nMeio do Céu em Oposição a Urano (Orbe: 2°36', em aplicação)\nMeio do Céu em Trígono com Netuno (Orbe: 2°59', em aplicação) Meio do Céu\nem Quadratura com o Nodo (Orbe: 0°46', em aplicação)\nMeio do Céu em Quincúncio com Quíron (Orbe: 0°53', Separando)\nIC Octil Sol (Orbe: 0°33', Separando)\nIC Octil Lua (Orbe: 1°48', Aplicando)\nIC Sextil Júpiter (Orbe: 0°14', Aplicando)\nIC Octil Saturno (Orbe: 1°59', Separando)\nIC Conjunção Urano (Orbe: 2°36', Aplicando)\nIC Sextil Netuno (Orbe: 2°59', Aplicando)\nIC Quadratura Nodo (Orbe: 0°46', Aplicando)\nNodo Tri-Octil Sol (Orbe: 1°20', Aplicando)\nNodo Octil Lua (Orbe: 1°01', Separando)\nNodo Quincúncio Júpiter (Orbe: 0°32', Aplicando)\nNodo Octil Saturno (Orbe: 2°46', Aplicando)\nNodo Quadratura Urano (Orbe: 1°49', Separando)\nNodo Sextil de Quíron (Orbe: 1°40', em aplicação)\nLilith em quincúncio com Mercúrio (Orbe: 1°30', em aplicação)\nLilith em octil com Plutão (Orbe: 2°35', em separação)\nQuíron em trígono com Vênus (Orbe: 2°28', em aplicação)\nQuíron em quadratura com Júpiter (Orbe: 1°07', em separação)\nFortuna em octil com o Sol (Orbe: 1°10', em aplicação)\nFortuna em quadratura com Vênus (Orbe: 1°37', em separação)\nFortuna em sextil com Júpiter (Orbe: 1°58', em aplicação)\nFortuna em octil com Saturno (Orbe: 0°14', em separação)\nFortuna em quadratura com o Nodo Norte (Orbe: 2°31', em aplicação) Fortuna em\nquadratura com o Ascendente (Orbe: 2°22', em separação)\nFortuna em oposição ao Meio do Céu (Orbe: 1°44', em aplicação)\nFortuna em sextil com o Vértice (Orbe: 0°18', Conjunção da Fortuna com\no IC (Orbe: 1°44', em movimento)\nQuadratura da Fortuna com o DSC (Orbe: 2°22', em movimento)\nSextil do Vértice com a Lua (Orbe: 1°50', em movimento)\nOctil do Vértice com Júpiter (Orbe: 0°16', em movimento)\nSextil do Vértice com Saturno (Orbe: 1°56', em movimento)\nVértice Octile Quíron (Orbe: 0°50', Separando)",
    jogoGerado: [11, 5, 3, 6, 15, 2, 13, 24, 21, 1, 9, 19, 23, 22, 25],
    resultado: [1, 2, 3, 5, 6, 11, 12, 13, 14, 15, 16, 18, 20, 21, 22],
    obs: "",
  },
  {
    id: "h81", concurso: "3730", data: "08/07/2026", hora: "",
    textoMapa: "Sol em Câncer 16°49', na 5ª Casa;\nLua em Touro 2°01', na 3ª Casa;\nMercúrio em Câncer 23°15', retrógrado, na 5ª Casa;\nVênus em Leão 29°11', na 6ª Casa;\nMarte em Gêmeos 7°12', na 4ª Casa;\nJúpiter em Leão 1°53', na 5ª Casa;\nSaturno em Áries 14°28', na 2ª Casa;\nUrano em Gêmeos 4°05', na 4ª Casa;\nNetuno em Áries 4°25', retrógrado, na 2ª Casa;\nPlutão em Aquário 4°42', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 2°09', retrógrado, na 12ª Casa;\nLilith em Sagitário 22°25', na 10ª Casa;\nQuíron em Touro 0°34', na 3ª Casa;\nFortuna em Touro. 17°45', no\nVértice da 3ª Casa em Gêmeos 16°52', no\nAscendente da 4ª Casa em Peixes 2°57'\nMC em Sagitário 2°22'\n\n1ª Casa em Peixes 2°57'\n2ª Casa em Áries 0°16'\n3ª Casa em Áries 29°51'\n4ª Casa em Gêmeos 2°22'\n5ª Casa em Câncer 5°13'\n6ª Casa em Leão 5°22'\n7ª Casa em Virgem 2°57'\n8ª Casa em Libra 0°16'\n9ª Casa em Libra 29°51'\n10ª Casa em Sagitário 2°22'\n11ª Casa em Capricórnio 5°13'\n12ª Casa em Aquário 5°22'\n\nSol em octil com Vênus (Orbe: 2°38', em movimento subsequente)\nSol em quadratura com Saturno (Orbe: 2°20', em movimento subsequente)\nSol em octil com Urano (Orbe: 2°15', em movimento subsequente)\nLua em trígono com Vênus (Orbe: 2°50', em movimento subsequente)\nLua em quadratura com Júpiter (Orbe: 0°08', em movimento subsequente)\nLua em quadratura com Plutão (Orbe: 2°40', em\nmovimento subsequente) Mercúrio em octil com Marte (Orbe: 1°02', em movimento subsequente)\nVênus em trígono com Saturno (Orbe: 0°17', em movimento subsequente)\nMarte em sextil com Netuno (Orbe: 2°47', em movimento subsequente)\nMarte em trígono com Plutão (Orbe: 2°30', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 2°12', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 2°31', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe:\nUrano em sextil com Netuno (Orbe: 0°19', em fase aplicativa )\nUrano em trígono com Plutão (Orbe: 0°36', em fase aplicativa)\nNetuno em sextil com Plutão (Orbe: 0°17', em fase aplicativa)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°07', Separando)\nSextil da Lua no Ascendente (Orbe: 0°55', Separando)\nQuincúncio de Júpiter no Ascendente (Orbe: 1°03', Separando)\nQuadratura de Urano no Ascendente (Orbe: 1°08', Aplicando)\nConjunção do Nodo Norte no Ascendente (Orbe: 0°47', Separando)\nSextil de Quíron no Ascendente (Orbe: 2°22', Separando)\nOctil do Sol no Descendente (Orbe: 1°07', Separando)\nTrígono da Lua no Descendente (Orbe: 0°55', Separando)\nQuadratura de Urano no Descendente (Orbe: 1°08', Aplicando) Quincúncio\nde Netuno no Descendente (Orbe: 1°27', Aplicando)\nQuincúncio de Plutão no Descendente (Orbe: 1°45', Aplicando)\nNodo em Oposição (Orbe: 0°47', Separando)\nDescendente em Trígono com Quíron (Orbe: 2°22', Separando)\nMeio do Céu em Tri-Óctil com o Sol (Orbe: 0°32', Separando)\nMeio do Céu em Quincúncio com a Lua (Orbe: 0°20', Separando)\nMeio do Céu em Trígono com Júpiter (Orbe: 0°29', Separando)\nMeio do Céu em Tri-Óctil com Saturno (Orbe: 2°53', Separando)\nMeio do Céu em Oposição com Urano (Orbe: 1°43', Aplicando)\nMeio do Céu em Trígono com Netuno (Orbe: 2°02', Aplicando)\nMeio do Céu em Sextil com Plutão (Orbe: 2°19', Aplicando)\nMeio do Céu em Quadratura com o Nodo (Orbe: 0°12', Separando)\nMeio do Céu em Quincúncio com Quíron (Orbe: 1°48', Separando)\nFundo do Céu em Octil com o Sol (Orbe: 0°32', Separando)\nFundo do Céu em Sextil com Júpiter (Orbe: 0°29', Separando)\nIC Octil Saturno (Orbe: 2°53', Separando)\nIC Conjunção Urano (Orbe: 1°43', Aplicando)\nIC Sextil Netuno (Orbe: 2°02', Aplicando)\nIC Trígono Plutão (Orbe: 2°19', Aplicando)\nIC Quadratura Nodo (Orbe: 0°12', Separando)\nNodo Tri-Octil Sol (Orbe: 0°20', Aplicando)\nNodo Sextil Lua (Orbe: 0°08', Aplicando)\nNodo Oposição Vênus (Orbe: 2°58', Aplicando)\nNodo Quincúncio Júpiter (Orbe: 0°16', Aplicando)\nNodo Octil Saturno (Orbe: 2°41', Aplicando)\nNodo Quadratura Urano (Orbe: 1°55', Separando)\nNodo Sextil Quíron (Orbe:\nLilith em Quincúncio com Mercúrio (Orbe: 0°49', em Aplicação )\nLilith em Octil com Plutão (Orbe: 2°43', em Separação)\nQuíron em Conjunção com a Lua (Orbe: 1°27', em Separação)\nQuíron em Trígono com Vênus (Orbe: 1°22', em Aplicação)\nQuíron em Quadratura com Júpiter (Orbe: 1°19', em Separação)\nFortuna em Sextil com o Sol (Orbe: 0°55', em Separação)\nFortuna em Octil com Netuno (Orbe: 1°39', em Aplicação)\nFortuna em Octil com o Vértice (Orbe: 2°45', em Separação)\nVértice em Octil com a Lua (Orbe: 0°09', em Aplicação)\nVértice em Octil com Júpiter (Orbe: 0°01', em Aplicação)\nVértice em Sextil com Saturno (Orbe: 2°23', em Separação)\nVértice em Tri-Octil com Plutão (Orbe: 2°49', Aplicando)\nVértice Octile Quíron (Orbe: 1°18', Separando)",
    jogoGerado: [11, 13, 15, 21, 23, 20, 24, 9, 22, 25, 6, 8, 12, 3, 7],
    resultado: [2, 3, 5, 6, 8, 11, 12, 13, 14, 15, 16, 19, 20, 21, 24],
    obs: "",
  },
  {
    id: "h82", concurso: "3731", data: "09/07/2026", hora: "",
    textoMapa: "Sol em Câncer 17°47', na 5ª Casa;\nLua em Touro 16°13', na 3ª Casa;\nMercúrio em Câncer 22°39', retrógrado, na 5ª Casa;\nVênus em Virgem 0°18', na 6ª Casa;\nMarte em Gêmeos 7°54', na 4ª Casa;\nJúpiter em Leão 2°06', na 5ª Casa;\nSaturno em Áries 14°30', na 2ª Casa;\nUrano em Gêmeos 4°08', na 4ª Casa;\nNetuno em Áries 4°24', retrógrado, na 2ª Casa;\nPlutão em Aquário 4°41', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 2°06', retrógrado, na 12ª Casa;\nLilith em Sagitário 22°32', na 10ª Casa;\nQuíron em Touro 0°35', na 2ª Casa;\nFortuna em Touro. 5°23', no\nVértice da 3ª Casa em Gêmeos 17°20', no\nAscendente da 4ª Casa em Peixes 3°50'\nMC em Sagitário 3°18'\n\n1ª Casa em Peixes 3°50'\n2ª Casa em Áries 1°12'\n3ª Casa em Touro 0°48'\n4ª Casa em Gêmeos 3°18'\n5ª Casa em Câncer 6°07'\n6ª Casa em Leão 6°14'\n7ª Casa em Virgem 3°50'\n8ª Casa em Libra 1°12'\n9ª Casa em Escorpião 0°48'\n10ª Casa em Sagitário 3°18'\n11ª Casa em Capricórnio 6°07'\n12ª Casa em Aquário 6°14'\n\nSol em sextil com a Lua (Orbe: 1°33', em movimento subsequente)\nSol em octil com Vênus (Orbe: 2°28', em movimento subsequente)\nSol em octil com Urano (Orbe: 1°21', em movimento subsequente)\nMercúrio em octil com Marte (Orbe: 0°15', em movimento subsequente)\nVênus em trígono com Saturno (Orbe: 0°47', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 2°01', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 2°18', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 2°34', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°16', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°32', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°16', em movimento subsequente)\n\nAscendente em Tri-Octil com o Sol (Orbe: 1°03', Separando)\nAscendente em Quincúncio com Júpiter (Orbe: 1°43', Separando)\nAscendente em Quadratura com Urano (Orbe: 0°18', Aplicando)\nAscendente em Conjunção com o Nodo Norte (Orbe: 1°43', Separando)\nDescendente em Octil com o Sol (Orbe: 1°03', Separando)\nDescendente em Quadratura com Urano (Orbe: 0°18', Aplicando)\nDescendente em Quincúncio com Netuno (Orbe: 0°34', Aplicando)\nDescendente em Quincúncio com Plutão (Orbe: 0°50', Aplicando)\nDescendente em Oposição com o Nodo Norte (Orbe: 1°43', Separando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°31', Separando) Meio do Céu em Trígono\ncom Júpiter (Orbe: 1°12', Separando)\nMeio do Céu em Oposição com Urano (Orbe: 0°49', em aplicação)\nMeio do Céu em trígono com Netuno (Orbe: 1°06', em aplicação)\nMeio do Céu em sextil com Plutão (Orbe: 1°22', em aplicação)\nMeio do Céu em quadratura com o Nodo Lunar (Orbe: 1°12', em separação) Meio do Céu\nem quincúncio com Quíron (Orbe: 2°43', em separação)\nFundo do Céu em octil com o Sol (Orbe: 0°31', em separação)\nFundo do Céu em sextil com Júpiter (Orbe: 1°12', em separação)\nFundo do Céu em conjunção com Urano (Orbe: 0°49', em aplicação)\nFundo do Céu em sextil com Netuno (Orbe: 1°06', em aplicação) Fundo\ndo Céu em trígono com Plutão (Orbe: 1°22'\n, em aplicação) Fundo do Céu em quadratura com o Nodo Lunar (Orbe: 1°12', em separação)\nNodo em trígono com o Sol (Orbe: 0°40', em separação)\nNodo em oposição a Vênus (Orbe:\nNodo em Quincúncio com Júpiter (Orbe: 0° 00', Aplicando)\nNodo em Octil com Saturno (Orbe: 2°36', Aplicando)\nNodo em Quadratura com Urano (Orbe: 2°01', Separando)\nNodo em Sextil com Quíron (Orbe: 1°30', Aplicando)\nLilith em Quincúncio com Mercúrio (Orbe: 0°06', Aplicando)\nLilith em Octil com Plutão (Orbe: 2°51', Separando)\nQuíron em Trígono com Vênus (Orbe: 0°17', Aplicando)\nQuíron em Quadratura com Júpiter (Orbe: 1°30', Separando)\nFortuna em Quadratura com Plutão (Orbe: 0°42', Separando)\nFortuna em Trígono-Octil com Lilith (Orbe: 2°08', Aplicando)\nFortuna em Sextil com o Ascendente (Orbe: 1°33', Separando)\nFortuna em Quincúncio com o Meio do Céu (Orbe: 2°04', Separando)\nTrígono da Fortuna com o Descendente (Orbe: 1°33', Separando)\nOctil do Vértice com Júpiter (Orbe: 0°14', Separando)\nSextil do Vértice com Saturno (Orbe: 2°50', Separando)\nTrígono-Octil do Vértice com Plutão (Orbe: 2°20', Aplicando)\nOctil do Vértice com Quíron (Orbe: 1°45', Separando)",
    jogoGerado: [11, 13, 12, 15, 2, 23, 7, 1, 17, 22, 9, 5, 6, 10, 24],
    resultado: [1, 2, 4, 5, 6, 7, 10, 11, 12, 13, 16, 17, 22, 23, 25],
    obs: "",
  },
  {
    id: "h83", concurso: "3732", data: "10/07/2026", hora: "",
    textoMapa: "Sol em Câncer 18°44', na 5ª Casa;\nLua em Gêmeos 0°48', na 3ª Casa;\nMercúrio em Câncer 22°01', retrógrado, na 5ª Casa;\nVênus em Virgem 1°25', na 6ª Casa;\nMarte em Gêmeos 8°37', na 4ª Casa;\nJúpiter em Leão 2°19', na 5ª Casa;\nSaturno em Áries 14°32', na 2ª Casa;\nUrano em Gêmeos 4°11', na 3ª Casa;\nNetuno em Áries 4°24', retrógrado, na 2ª Casa;\nPlutão em Aquário 4°39', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 2°03', retrógrado, na 12ª Casa;\nLilith em Sagitário 22°39', na 10ª Casa;\nQuíron em Touro 0°36', na 2ª Casa;\nFortuna em Áries. 22°39', no\nVértice da 2ª Casa em Gêmeos 17°49', no\nAscendente da 4ª Casa em Peixes 4°43'\nMC em Sagitário 4°15'\n\n1ª Casa em Peixes 4°43'\n2ª Casa em Áries 2°07'\n3ª Casa em Touro 1°45'\n4ª Casa em Gêmeos 4°15'\n5ª Casa em Câncer 7°01'\n6ª Casa em Leão 7°07'\n7ª Casa em Virgem 4°43'\n8ª Casa em Libra 2°07'\n9ª Casa em Escorpião 1°45'\n10ª Casa em Sagitário 4°15'\n11ª Casa em Capricórnio 7°01'\n12ª Casa em Aquário 7°07'\n\nSol em octil com a Lua (Orbe: 2°56', em movimento)\nSol em octil com Vênus (Orbe: 2°19', em movimento)\nSol em octil com Urano (Orbe: 0°26', em movimento)\nLua em quadratura com Vênus (Orbe: 0°37', em movimento)\nLua em sextil com Júpiter (Orbe: 1°31', em movimento)\nLua em octil com Saturno (Orbe: 1°15', em movimento)\nMercúrio em octil com Marte (Orbe: 1°35', em movimento)\nMercúrio em octil com Urano (Orbe: 2°50', em movimento)\nVênus em trígono com Saturno (Orbe: 1°52', em movimento)\nVênus em quadratura com Urano (Orbe: 2°45', em movimento)\nVênus em quincúncio com Netuno (Orbe: 2°59', em movimento)\nJúpiter em sextil com Urano (Orbe: 1°51', em movimento)\nJúpiter em trígono com Netuno (Orbe: 2°05', em processo de aplicação)\nJúpiter em oposição a Plutão (Orbe: 2°20', em processo de aplicação)\nUrano em sextil com Netuno (Orbe: 0°13', em processo de aplicação)\nUrano em trígono com Plutão (Orbe: 0°28', em processo de aplicação)\nNetuno em sextil com Plutão (Orbe: 0°14', em processo de aplicação)\n\nTri-óctilo do Sol no Ascendente (Orbe: 0°59', Separando)\nTri-óctilo de Mercúrio no Ascendente (Orbe: 2°18', Aplicando)\nQuincúncio de Júpiter no Ascendente (Orbe: 2°23', Separando)\nQuadratura de Urano no Ascendente (Orbe: 0°32', Separando)\nNodo em Conjunção com o Ascendente (Orbe: 2°40', Separando)\nOctil do Sol no Descendente (Orbe: 0°59', Separando)\nOctil de Mercúrio no Descendente (Orbe: 2°18', Aplicando)\nQuadratura de Urano no Descendente (Orbe: 0°32', Separando)\nQuincúncio de Netuno no Descendente (Orbe: 0°18', Separando)\nQuincúncio de Plutão no Descendente (Orbe: 0°03', Separando)\nNodo em Oposição no Descendente (Orbe: 2°40',\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°30', Separando) Tri\n-óctil do Meio do Céu com Mercúrio (Orbe: 2°46', Aplicando)\nQuadratura do Meio do Céu com Vênus (Orbe: 2°49', Separando)\nTrígono do Meio do Céu com Júpiter (Orbe: 1°55', Separando)\nOposição do Meio do Céu com Urano (Orbe: 0°04', Separando)\nTrígono do Meio do Céu com Netuno (Orbe: 0°09', Aplicando)\nSextil do Meio do Céu com Plutão (Orbe: 0°24', Aplicando)\nQuadratura do Meio do Céu com o Nodo Norte (Orbe: 2°11', Separando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°30', Separando)\nOctil do Fundo do Céu com Mercúrio (Orbe: 2°46', Aplicando)\nQuadratura do Fundo do Céu com Vênus (Orbe: 2°49', Separando)\nSextil do Fundo do Céu com Júpiter (Orbe: 1°55', Separando)\nConjunção do Fundo do Céu com Urano (Orbe: 0°04', Separando)\nIC em sextil com Netuno (Orbe: 0°09', Aplicando)\nIC em trígono com Plutão (Orbe: 0°24', Aplicando)\nIC em quadratura com o Nodo (Orbe: 2°11', Separando)\nNodo em trígono e octil com o Sol (Orbe: 1°40', Separando)\nNodo em quadratura com a Lua (Orbe: 1°15', Aplicando)\nNodo em oposição a Vênus (Orbe: 0°38', Aplicando)\nNodo em quincúncio com Júpiter (Orbe: 0°16', Separando)\nNodo em octil com Saturno (Orbe: 2°31', Aplicando)\nNodo em quadratura com Urano (Orbe: 2°07', Separando)\nNodo em sextil com Quíron (Orbe: 1°26', Aplicando)\nLilith em quincúncio com Mercúrio (Orbe: 0°37', Separando)\nLilith em octil com Plutão (Orbe: 2°59', Separando)\nQuíron em trígono com Vênus (Orbe: 0°48', Separando)\nQuíron em quadratura com Júpiter (Orbe: 1°42', Separando)\nFortuna em quadratura com Mercúrio (Orbe: 0°38', Separando)\nFortuna em octil com Marte (Orbe: 0°57', Aplicando)\nFortuna em trígono com Lilith (Orbe: 0°00', Separando)\nFortuna em octil com o Ascendente (Orbe: 2°56', Separando)\nFortuna em trígono com o Descendente (Orbe: 2°56', Separando)\nVértice em octil com Júpiter (Orbe: 0°29', Separando)\nVértice em trígono com Plutão (Orbe: 1°50', Aplicando)\nVértice em octil com Quíron (Orbe: 2°12', Separando)",
    jogoGerado: [11, 13, 8, 15, 3, 2, 7, 5, 10, 12, 14, 19, 24, 9, 20],
    resultado: [2, 3, 7, 8, 11, 13, 16, 17, 18, 19, 20, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h84", concurso: "3733", data: "11/07/2026", hora: "",
    textoMapa: "Sol em Câncer 19°41', na 5ª Casa;\nLua em Gêmeos 15°41', na 4ª Casa;\nMercúrio em Câncer 21°23', retrógrado, na 5ª Casa;\nVênus em Virgem 2°31', na 6ª Casa;\nMarte em Gêmeos 9°19', na 4ª Casa;\nJúpiter em Leão 2°32', na 5ª Casa;\nSaturno em Áries 14°33', na 2ª Casa;\nUrano em Gêmeos 4°13', na 3ª Casa;\nNetuno em Áries 4°24', retrógrado, na 2ª Casa;\nPlutão em Aquário 4°38', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 2°00', retrógrado, na 12ª Casa;\nLilith em Sagitário 22°45', na 10ª Casa;\nQuíron em Touro 0°38', na 2ª Casa;\nFortuna em Áries. 9°36', no\nVértice da 2ª Casa em Gêmeos 18°18', no\nAscendente da 4ª Casa em Peixes 5°36'\nMC em Sagitário 5°11'\n\n1ª Casa em Peixes 5°36'\n2ª Casa em Áries 3°03'\n3ª Casa em Touro 2°42'\n4ª Casa em Gêmeos 5°11'\n5ª Casa em Câncer 7°54'\n6ª Casa em Leão 7°59'\n7ª Casa em Virgem 5°36'\n8ª Casa em Libra 3°03'\n9ª Casa em Escorpião 2°42'\n10ª Casa em Sagitário 5°11'\n11ª Casa em Capricórnio 7°54'\n12ª Casa em Aquário 7°59'\n\nSol em conjunção com Mercúrio (Orbe: 1°41', em movimento subsequente)\nSol em octil com Vênus (Orbe: 2°09', em movimento subsequente)\nSol em octil com Urano (Orbe: 0°27', em movimento subsequente)\nLua em octil com Júpiter (Orbe: 1°51', em movimento subsequente)\nLua em sextil com Saturno (Orbe: 1°07', em movimento subsequente)\nMercúrio em octil com Marte (Orbe: 2°55', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 2°09', em movimento subsequente)\nVênus em trígono com Saturno (Orbe: 2°57', em movimento subsequente)\nVênus em quadratura com Urano (Orbe: 1°42', em movimento subsequente)\nVênus em quincúncio com Netuno (Orbe: 1°52', em movimento subsequente)\nVênus em quincúncio com Plutão (Orbe: 2°06', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 1°41', em movimento subsequente)\nJúpiter em trígono Netuno (Orbe: 1°52', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 2°05', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°10', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°24', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°13', em movimento subsequente)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°55', Separando)\nAscendente em Tri-Octil com Mercúrio (Orbe: 0°46', Aplicando)\nAscendente em Quadratura com Urano (Orbe: 1°23', Separando)\nDescendente em Octil com o Sol (Orbe: 0°55', Separando)\nDescendente em Octil com Mercúrio (Orbe: 0°46', Aplicando)\nDescendente em Quadratura com Urano (Orbe: 1°23', Separando)\nDescendente em Quincúncio com Netuno (Orbe: 1°12', Separando)\nDescendente em Quincúncio com Plutão (Orbe: 0°58', Separando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°29', Separando)\nMeio do Céu em Tri-Octil com Mercúrio (Orbe: 1°11', Aplicando) Meio do\nCéu em Quadratura com Vênus (Orbe: 2°39', Separando) Meio do Céu\nem Trígono com Júpiter (Orbe: 2°38', Separando)\nMC em Oposição a Urano (Orbe: 0°57', Separando)\nMC em Trígono a Netuno (Orbe: 0°46', Separando)\nMC em Sextil a Plutão (Orbe: 0°32', Separando)\nIC em Octil ao Sol (Orbe: 0°29', Separando)\nIC em Octil a Mercúrio (Orbe: 1°11', Aplicando)\nIC em Quadratura a Vênus (Orbe: 2°39', Separando)\nIC em Sextil a Júpiter (Orbe: 2°38', Separando)\nIC em Conjunção a Urano (Orbe: 0°57', Separando)\nIC em Sextil a Netuno (Orbe: 0°46', Separando)\nIC em Trígono a Plutão (Orbe: 0°32', Separando)\nNodo em Tri-Octil ao Sol (Orbe: 2°41', Separando)\nNodo em Oposição a Vênus (Orbe: 0°31', Separando)\nNodo em Quincúncio com Júpiter (Orbe: 0°32', Separando)\nNodo em Octil com Saturno (Orbe: 2°26', Aplicando)\nNodo em Quadratura com Urano (Orbe: 2°13', Separando)\nNodo em Sextil com Quíron (Orbe: 1°22', Aplicando)\nLilith em Quincúncio com Mercúrio (Orbe: 1°22', Separando)\nQuíron em Octil com a Lua (Orbe: 0°03', Separando)\nQuíron em Trígono com Vênus (Orbe: 1°53', Separando)\nQuíron em Quadratura com Júpiter (Orbe: 1°54', Separando)\nFortuna em Sextil com Marte (Orbe: 0°17', Separando)\nVértice em Conjunção com a Lua (Orbe: 2°36', Separando)\nVértice em Octil com Júpiter (Orbe: 0°45', Separando)\nVértice Plutão em Tri-Octil (Orbe: 1°20', Aplicando)\nQuíron em Octil no Vértice (Orbe: 2°40', Separando)",
    jogoGerado: [11, 13, 14, 15, 25, 3, 2, 9, 12, 19, 5, 1, 4, 10, 21],
    resultado: [1, 2, 3, 5, 7, 10, 11, 12, 13, 14, 16, 17, 19, 22, 25],
    obs: "",
  },
  {
    id: "h85", concurso: "3734", data: "13/07/2026", hora: "",
    textoMapa: "Sol em Câncer 21°35', na 5ª Casa;\nLua em Câncer 15°53', na 5ª Casa;\nMercúrio em Câncer 20°06', retrógrado, na 5ª Casa;\nVênus em Virgem 4°44', na 6ª Casa;\nMarte em Gêmeos 10°42', na 4ª Casa;\nJúpiter em Leão 2°59', na 5ª Casa;\nSaturno em Áries 14°36', na 2ª Casa;\nUrano em Gêmeos 4°19', na 3ª Casa;\nNetuno em Áries 4°24', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°35', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°53', retrógrado, na 12ª Casa;\nLilith em Sagitário 22°59', na 10ª Casa;\nQuíron em Touro 0°40', na 2ª Casa;\nFortuna em Peixes. 13°06', no\nVértice da 1ª Casa em Gêmeos 19°15', no\nAscendente da 4ª Casa em Peixes 7°23'\nMC em Sagitário 7°03'\n\n1ª Casa em Peixes 7°23'\n2ª Casa em Áries 4°53'\n3ª Casa em Touro 4°36'\n4ª Casa em Gêmeos 7°03'\n5ª Casa em Câncer 9°42'\n6ª Casa em Leão 9°45'\n7ª Casa em Virgem 7°23'\n8ª Casa em Libra 4°53'\n9ª Casa em Escorpião 4°36'\n10ª Casa em Sagitário 7°03'\n11ª Casa em Capricórnio 9°42'\n12ª Casa em Aquário 9°45'\n\nSol em conjunção com Mercúrio (Orbe: 1°29', separando)\nSol em octil com Vênus (Orbe: 1°51', aplicando)\nSol em octil com Urano (Orbe: 2°16', separando)\nLua em quadratura com Saturno (Orbe: 1°16', separando)\nMercúrio em octil com Vênus (Orbe: 0°21', aplicando)\nMercúrio em octil com Urano (Orbe: 0°46', aplicando)\nVênus em quadratura com Urano (Orbe: 0°25', separando)\nVênus em quincúncio com Netuno (Orbe: 0°20', separando)\nVênus em quincúncio com Plutão (Orbe: 0°08', separando)\nJúpiter em sextil com Urano (Orbe: 1°20', aplicando)\nJúpiter em trígono com Netuno (Orbe: 1°25', aplicando)\nJúpiter em oposição a Plutão (Orbe: 1°36', aplicando)\nUrano em sextil Netuno (Orbe: 0°05', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°16', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°11', em movimento subsequente)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°47', Separando)\nAscendente em Tri-Octil com Mercúrio (Orbe: 2°17', Separando)\nAscendente em Oposição com Vênus (Orbe: 2°39', Separando)\nDescendente em Octil com o Sol (Orbe: 0°47', Separando)\nDescendente em Octil com Mercúrio (Orbe: 2°17', Separando)\nDescendente em Conjunção com Vênus (Orbe: 2°39', Separando)\nDescendente em Quincúncio com Netuno (Orbe: 2°59', Separando)\nDescendente em Quincúncio com Plutão (Orbe: 2°48', Separando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°27', Separando)\nMeio do Céu em Tri-Octil com Mercúrio (Orbe: 1°57', Separando)\nMeio do Céu em Quadratura com Vênus (Orbe: 2°18', Separando) Meio do\nCéu em Oposição Urano (Orbe: 2°44', Separando)\nMC em trígono com Netuno (Orbe: 2°38', Separando)\nMC em sextil com Plutão (Orbe: 2°27', Separando)\nIC em octil com o Sol (Orbe: 0°27', Separando)\nIC em octil com Mercúrio (Orbe: 1°57', Separando)\nIC em quadratura com Vênus (Orbe: 2°18', Separando)\nIC em conjunção com Urano (Orbe: 2°44', Separando)\nIC em sextil com Netuno (Orbe: 2°38', Separando)\nIC em trígono com Plutão (Orbe: 2°27', Separando)\nNodo em trígono com a Lua (Orbe: 1°00', Aplicando)\nNodo em oposição a Vênus (Orbe: 2°50', Separando)\nNodo em quincúncio com Júpiter (Orbe: 1°05', Separando)\nNodo Saturno em Octil (Orbe: 2°17', em aplicação)\nNodo em Quadratura com Urano (Orbe: 2°25', em separação)\nNodo em Sextil com Quíron (Orbe: 1°13', em aplicação)\nLilith em Quincúncio com o Sol (Orbe: 1°23', em aplicação)\nLilith em Quincúncio com Mercúrio (Orbe: 2°53', em separação)\nQuíron em Quadratura com Júpiter (Orbe: 2°18', em separação)\nFortuna em Trígono com a Lua (Orbe: 2°46', em aplicação)\nFortuna em Quadratura com Marte (Orbe: 2°23', em separação)\nFortuna em Octil com Quíron (Orbe: 2°33', em aplicação)\nVértice em Octil com Júpiter (Orbe: 1°16', em separação)\nVértice em Trígono-Octil com Plutão (Orbe: 0°19', em aplicação)",
    jogoGerado: [13, 23, 3, 2, 25, 10, 19, 5, 24, 9, 20, 11, 4, 12, 6],
    resultado: [2, 3, 5, 8, 10, 12, 13, 14, 15, 16, 17, 19, 22, 23, 25],
    obs: "",
  },
  {
    id: "h86", concurso: "3735", data: "14/07/2026", hora: "",
    textoMapa: "Sol em Câncer 22°33', na 5ª Casa;\nLua em Leão 0°52', na 5ª Casa;\nMercúrio em Câncer 19°28', retrógrado, na 5ª Casa;\nVênus em Virgem 5°50', na 6ª Casa;\nMarte em Gêmeos 11°24', na 4ª Casa;\nJúpiter em Leão 3°12', na 5ª Casa;\nSaturno em Áries 14°37', na 2ª Casa;\nUrano em Gêmeos 4°21', na 3ª Casa;\nNetuno em Áries 4°24', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°34', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°50', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°06', na 10ª Casa;\nQuíron em Touro 0°41', na 2ª Casa;\nFortuna em Aquário. 29°57', no\nVértice da 12ª Casa em Gêmeos 19°44', no\nAscendente da 4ª Casa em Peixes 8°17'\nMC em Sagitário 7°58'\n\n1ª Casa em Peixes 8°17'\n2ª Casa em Áries 5°49'\n3ª Casa em Touro 5°32'\n4ª Casa em Gêmeos 7°58'\n5ª Casa em Câncer 10°35'\n6ª Casa em Leão 10°37'\n7ª Casa em Virgem 8°17'\n8ª Casa em Libra 5°49'\n9ª Casa em Escorpião 5°32'\n10ª Casa em Sagitário 7°58'\n11ª Casa em Capricórnio 10°35'\n12ª Casa em Aquário 10°37'\n\nSol em octil com Vênus (Orbe: 1°42', em movimento subsequente)\nLua em conjunção com Júpiter (Orbe: 2°19', em movimento subsequente)\nMercúrio em octil com Vênus (Orbe: 1°21', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 0°07', em movimento subsequente)\nVênus em quadratura com Urano (Orbe: 1°28', em movimento subsequente)\nVênus em quincúncio com Netuno (Orbe: 1°26', em movimento subsequente)\nVênus em quincúncio com Plutão (Orbe: 1°16', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 1°09', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 1°11', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 1°22', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°02', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°12', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°10', em formação)\n\nTri-óctilo do Sol no Ascendente (Orbe: 0°44', Separando)\nOposição do Ascendente a Vênus (Orbe: 2°26', Separando)\nOctil do Descendente com o Sol (Orbe: 0°44', Separando)\nConjunção do Descendente com Vênus (Orbe: 2°26', Separando)\nTri-óctilo do Meio do Céu com o Sol (Orbe: 0°25', Separando)\nQuadratura do Meio do Céu com Vênus (Orbe: 2°08', Separando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°25', Separando)\nQuadratura do Fundo do Céu com Vênus (Orbe: 2°08', Separando)\nQuincúncio do Nodo com a Lua (Orbe: 0°58', Aplicando)\nTri-óctilo do Nodo com Mercúrio (Orbe: 2°38', Aplicando)\nQuincúncio do Nodo com Júpiter (Orbe: 1°21', Separando)\nOctil do Nodo com Saturno (Orbe:\nNodo em quadratura com Urano (Orbe: 2° 31', Separando )\nNodo em sextil com Quíron (Orbe: 1°09', Aplicando)\nLilith em quincúncio com o Sol (Orbe: 0°32', Aplicando)\nQuíron em quadratura com a Lua (Orbe: 0°11', Separando)\nQuíron em quadratura com Júpiter (Orbe: 2°30', Separando)\nFortuna em quincúncio com a Lua (Orbe: 0°54', Aplicando)\nFortuna em octil com Saturno (Orbe: 0°20', Separando)\nFortuna em conjunção com o Nodo (Orbe: 1°52', Aplicando)\nFortuna em sextil com Quíron (Orbe: 0°43', Aplicando)\nVértice em octil com Júpiter (Orbe: 1°32', Separando)\nVértice em tri-óctil com Plutão (Orbe: 0°10', Separando)",
    jogoGerado: [14, 15, 23, 25, 17, 3, 2, 1, 24, 5, 9, 10, 12, 19, 6],
    resultado: [3, 5, 7, 12, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h87", concurso: "3736", data: "15/07/2026", hora: "",
    textoMapa: "Sol em Câncer 23°30', na 5ª Casa;\nLua em Leão 15°35', na 6ª Casa;\nMercúrio em Câncer 18°53', retrógrado, na 5ª Casa;\nVênus em Virgem 6°56', na 6ª Casa;\nMarte em Gêmeos 12°06', na 4ª Casa;\nJúpiter em Leão 3°25', na 5ª Casa;\nSaturno em Áries 14°39', na 2ª Casa;\nUrano em Gêmeos 4°24', na 3ª Casa;\nNetuno em Áries 4°23', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°32', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°47', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°12', na 10ª Casa;\nQuíron em Touro 0°42', na 2ª Casa;\nFortuna em Aquário. 17°05', no\nVértice da 12ª Casa em Gêmeos 20°13', no\nAscendente da 4ª Casa em Peixes 9°10'\nMC em Sagitário 8°54'\n\n1ª Casa em Peixes 9°10'\n2ª Casa em Áries 6°44'\n3ª Casa em Touro 6°29'\n4ª Casa em Gêmeos 8°54'\n5ª Casa em Câncer 11°29'\n6ª Casa em Leão 11°30'\n7ª Casa em Virgem 9°10'\n8ª Casa em Libra 6°44'\n9ª Casa em Escorpião 6°29'\n10ª Casa em Sagitário 8°54'\n11ª Casa em Capricórnio 11°29'\n12ª Casa em Aquário 11°30'\n\nSol em octil com Vênus (Orbe: 1°34', em movimento subsequente)\nLua em trígono com Saturno (Orbe: 0°56', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 0°30', em movimento subsequente)\nVênus em quadratura com Urano (Orbe: 2°32', em movimento subsequente)\nVênus em quincúncio com Netuno\n(Orbe: 2°32', em movimento subsequente) Vênus em quincúncio com Plutão (Orbe: 2°23', em\nmovimento subsequente) Marte em sextil com Saturno (Orbe: 2°32', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 0°58', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 0°58', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 1°07', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°00', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°08', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°08', em formação)\n\nTri-óctilo do Sol no Ascendente (Orbe: 0°40', Separando)\nOposição do Ascendente a Vênus (Orbe: 2°14', Separando)\nQuadratura do Ascendente com Marte (Orbe: 2°55', Aplicando)\nOctil do Descendente com o Sol (Orbe: 0°40', Separando)\nConjunção do Descendente com Vênus (Orbe: 2°14', Separando)\nQuadratura do Descendente com Marte (Orbe: 2°55', Aplicando)\nTri-óctilo do Meio do Céu com o Sol (Orbe: 0°24', Separando) Quadratura\ndo Meio do Céu com Vênus (Orbe: 1°58', Separando)\nOctil do Fundo do Céu com o Sol (Orbe: 0°24', Separando)\nQuadratura do Fundo do Céu com Vênus (Orbe: 1°58', Separando)\nTri-óctilo do Nodo com Mercúrio (Orbe: 2°05', Aplicando)\nQuincúncio do Nodo com Júpiter (Orbe: 1°37',\nNodo em Octil com Saturno (Orbe: 2°08', em Separação )\nNodo em Quadratura com Urano (Orbe: 2°36', em Separação)\nNodo em Sextil com Quíron (Orbe: 1°05', em Separação)\nLilith em Quincúncio com o Sol (Orbe: 0°17', em Separação)\nQuíron em Quadratura com Júpiter (Orbe: 2°42', em Separação)\nFortuna em Oposição com a Lua (Orbe: 1°30', em Separação)\nFortuna em Quincúncio com Mercúrio (Orbe: 1°47', em Separação)\nFortuna em Sextil com Saturno (Orbe: 2°26', em Separação)\nFortuna em Octil com Netuno (Orbe: 2°18', em Separação)\nFortuna em Octil com o Vértice (Orbe: 2°05', em Separação)\nVértice em Octil com Júpiter (Orbe: 1°48', em Separação)\nVértice em Tri-Octil com Plutão (Orbe: 0°41', Separando)\nOposição do vértice Lilith (Orbe: 2°58', Aplicando)",
    jogoGerado: [11, 9, 14, 15, 17, 3, 2, 5, 6, 8, 12, 19, 23, 18, 4],
    resultado: [3, 4, 6, 7, 8, 9, 11, 12, 14, 17, 18, 19, 21, 22, 23],
    obs: "",
  },
  {
    id: "h88", concurso: "3737", data: "16/07/2026", hora: "",
    textoMapa: "Sol em Câncer 24°27', na 5ª Casa;\nLua em Leão 29°55', na 6ª Casa;\nMercúrio em Câncer 18°20', retrógrado, na 5ª Casa;\nVênus em Virgem 8°02', na 6ª Casa;\nMarte em Gêmeos 12°47', na 4ª Casa;\nJúpiter em Leão 3°38', na 5ª Casa;\nSaturno em Áries 14°40', na 2ª Casa;\nUrano em Gêmeos 4°26', na 3ª Casa;\nNetuno em Áries 4°23', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°31', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°44', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°19', na 10ª Casa;\nQuíron em Touro 0°43', na 2ª Casa;\nFortuna em Aquário. 4°36', no\nVértice da 11ª Casa em Gêmeos 20°43', no\nAscendente da 4ª Casa em Peixes 10°04'\nMC em Sagitário 9°50'\n\n1ª Casa em Peixes 10°04'\n2ª Casa em Áries 7°39'\n3ª Casa em Touro 7°25'\n4ª Casa em Gêmeos 9°50'\n5ª Casa em Câncer 12°22'\n6ª Casa em Leão 12°23'\n7ª Casa em Virgem 10°04'\n8ª Casa em Libra 7°39'\n9ª Casa em Escorpião 7°25'\n10ª Casa em Sagitário 9°50'\n11ª Casa em Capricórnio 12°22'\n12ª Casa em Aquário 12°23'\n\nSol em octil com Vênus (Orbe: 1°25', em movimento subsequente)\nLua em trígono com Saturno (Orbe: 0°15', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 1°06', em movimento subsequente)\nMarte em sextil com Saturno (Orbe: 1°52', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 0°48', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 0°44', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 0°52', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°03', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°04', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°07', em movimento subsequente)\n\nSol em Tri-Octil no Ascendente (Orbe: 0°36', Separando)\nVênus em Oposição ao Ascendente (Orbe: 2°02', Separando)\nMarte em Quadratura no Ascendente (Orbe: 2°43', Aplicando)\nSol em Octil no Descendente (Orbe: 0°36', Separando)\nVênus em Conjunção com o Descendente (Orbe: 2°02', Separando)\nMarte em Quadratura com o Descendente (Orbe: 2°43', Aplicando)\nSol em Tri-Octil no Meio do Céu (Orbe: 0°22', Separando)\nVênus em Quadratura com o Meio do Céu (Orbe: 1°47', Separando)\nMarte em Oposição ao Meio do Céu (Orbe: 2°57', Aplicando)\nSol em Octil no Fundo do Céu (Orbe: 0°22', Separando)\nVênus em Quadratura com o Fundo do Céu (Orbe: 1°47', Separando)\nMarte em Conjunção com o Fundo do Céu (Orbe: 2°57', Aplicando)\nNodo em Oposição à Lua (Orbe: 1°48', em movimento)\nNodo em Tri-Octil com Mercúrio (Orbe: 1°35', em movimento)\nNodo em Quincúncio com Júpiter (Orbe: 1°54', em movimento)\nNodo em Octil com Saturno (Orbe: 2°04', em movimento)\nNodo em Quadratura com Urano (Orbe: 2°42', em movimento)\nNodo em Sextil com Quíron (Orbe: 1°00', em movimento)\nLilith em Quincúncio com o Sol (Orbe: 1°08', em movimento)\nQuíron em Trígono com a Lua (Orbe: 0°47', em movimento)\nQuíron em Octil com Marte (Orbe: 2°55', em movimento)\nQuíron em Quadratura com Júpiter (Orbe: 2°55', em movimento)\nFortuna em Oposição a Júpiter (Orbe: 0°57', em movimento)\nFortuna em Trígono com Urano (Orbe: 0°09', em movimento)\nFortuna em Sextil Netuno (Orbe: 0°12', Separando)\nConjunção com Fortuna Plutão (Orbe: 0°04', Separando)\nOctil no Vértice Júpiter (Orbe: 2°04', Separando)\nTri-Octil no Vértice Plutão (Orbe: 1°11', Separando)\nOposição no Vértice Lilith (Orbe: 2°36', Aplicando)",
    jogoGerado: [2, 5, 9, 15, 17, 3, 4, 23, 11, 13, 6, 8, 12, 22, 25],
    resultado: [2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 17, 22, 23, 25],
    obs: "",
  },
  {
    id: "h89", concurso: "3738", data: "17/07/2026", hora: "",
    textoMapa: "Sol em Câncer 25°25', na 5ª Casa;\nLua em Virgem 13°49', na 7ª Casa;\nMercúrio em Câncer 17°50', retrógrado, na 5ª Casa;\nVênus em Virgem 9°07', na 6ª Casa;\nMarte em Gêmeos 13°29', na 4ª Casa;\nJúpiter em Leão 3°51', na 5ª Casa;\nSaturno em Áries 14°41', na 2ª Casa;\nUrano em Gêmeos 4°29', na 3ª Casa;\nNetuno em Áries 4°23', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°30', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°41', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°26', na 10ª Casa;\nQuíron em Touro 0°44', na 2ª Casa;\nFortuna em Capricórnio. 22°33', no\nVértice da 11ª Casa em Gêmeos 21°12', no\nAscendente da 4ª Casa em Peixes 10°58'\nMeio do Céu em Sagitário 10°45'\n\n1ª Casa em Peixes 10°58'\n2ª Casa em Áries 8°35'\n3ª Casa em Touro 8°21'\n4ª Casa em Gêmeos 10°45'\n5ª Casa em Câncer 13°16'\n6ª Casa em Leão 13°15'\n7ª Casa em Virgem 10°58'\n8ª Casa em Libra 8°35'\n9ª Casa em Escorpião 8°21'\n10ª Casa em Sagitário 10°45'\n11ª Casa em Capricórnio 13°16'\n12ª Casa em Aquário 13°15'\n\nSol em octil com Vênus (Orbe: 1°17', em movimento subsequente)\nLua em quadratura com Marte (Orbe: 0°20', em movimento subsequente)\nLua em quincúncio com Saturno (Orbe: 0°51', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 1°39', em movimento subsequente)\nMarte em sextil com Saturno (Orbe: 1°11', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 0°37', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 0°31', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 0°38', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°06', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°00', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°06', em movimento subsequente)\n\nSol em Tri-Octil no Ascendente (Orbe: 0°33', Separando)\nLua em Oposição no Ascendente (Orbe: 2°51', Aplicando)\nVênus em Oposição no Ascendente (Orbe: 1°50', Separando)\nMarte em Quadratura no Ascendente (Orbe: 2°31', Aplicando)\nSol em Octil no Descendente (Orbe: 0°33', Separando)\nLua em Conjunção no Descendente (Orbe: 2°51', Aplicando)\nVênus em Conjunção no Descendente (Orbe: 1°50', Separando)\nMarte em Quadratura no Descendente (Orbe: 2°31', Aplicando)\nSol em Tri-Octil no Meio do Céu (Orbe: 0°20', Separando)\nVênus em Quadratura no Meio do Céu (Orbe: 1°37', Separando)\nMarte em Oposição no Meio do Céu (Orbe: 2°44', Aplicando)\nSol em Octil no Fundo do Céu (Orbe: 0°20', Separando)\nIC em quadratura com Vênus (Orbe: 1°37', Separando)\nIC em conjunção com Marte (Orbe: 2°44', Aplicando)\nNodo em trí-óctilo com Mercúrio (Orbe: 1°08', Aplicando) Nodo\nem quincúncio com Júpiter (Orbe: 2°10', Separando)\nNodo em óctilo com Saturno (Orbe: 2°00', Aplicando)\nNodo em quadratura com Urano (Orbe: 2°48', Separando)\nNodo em sextil com Quíron (Orbe: 0°56', Aplicando)\nLilith em quincúncio com o Sol (Orbe: 1°58', Separando)\nQuíron em trí-óctilo com a Lua (Orbe: 1°54', Aplicando)\nQuíron em óctilo com Marte (Orbe: 2°14', Aplicando)\nFortuna em oposição ao Sol (Orbe: 2°51', Aplicando)\nFortuna em trí-óctilo com Vênus (Orbe: 1°34', Aplicando)\nVértice Octil Júpiter (Orbe: 2°20', Separando)\nVértice Tri-Octil Plutão (Orbe: 1°42', Separando)\nVértice Oposição Lilith (Orbe: 2°13', Aplicando)",
    jogoGerado: [5, 2, 15, 3, 4, 23, 20, 21, 22, 9, 17, 16, 24, 6, 14],
    resultado: [2, 3, 4, 5, 7, 8, 10, 11, 13, 14, 17, 18, 20, 23, 24],
    obs: "",
  },
  {
    id: "h90", concurso: "3739", data: "19/07/2026", hora: "",
    textoMapa: "Sol em Câncer 26°55', na 10ª Casa;\nLua em Libra 4°56', na 12ª Casa;\nMercúrio em Câncer 17°09', retrógrado, na 10ª Casa;\nVênus em Virgem 10°51', na 12ª Casa\n; Marte em Gêmeos 14°35', na 8ª Casa;\nJúpiter em Leão 4°12', na 11ª Casa;\nSaturno em Áries 14°42', na 7ª Casa;\nUrano em Gêmeos 4°33', na 8ª Casa;\nNetuno em Áries 4°22', retrógrado, na 6ª Casa;\nPlutão em Aquário 4°27', retrógrado, na 5ª Casa;\nNodo Norte em Peixes 1°36', retrógrado, na 5ª Casa;\nLilith em Sagitário 23°36', na 3ª Casa;\nQuíron em Touro 0°45', na 7ª Casa;\nFortuna em Sagitário. 22°21', no\nVértice da 3ª Casa em Áries 5°51', no\nAscendente da 6ª Casa em Libra 14°20'\nMC em Câncer 9°51'\n\n1ª Casa em Libra 14°20'\n2ª Casa em Escorpião 20°07'\n3ª Casa em Sagitário 17°06'\n4ª Casa em Capricórnio 9°51'\n5ª Casa em Aquário 4°02'\n6ª Casa em Peixes 5°15'\n7ª Casa em Áries 14°20'\n8ª Casa em Touro 20°07'\n9ª Casa em Gêmeos 17°06'\n10ª Casa em Câncer 9°51'\n11ª Casa em Leão 4°02'\n12ª Casa em Virgem 5°15'\n\nSol em octil com Vênus (Orbe: 1°04', em movimento)\nSol em octil com Marte (Orbe: 2°39', em movimento)\nLua em sextil com Júpiter (Orbe: 0°43', em movimento)\nLua em trígono com Urano (Orbe: 0°22', em movimento)\nLua em oposição a Netuno (Orbe: 0°33', em movimento)\nLua em trígono com Plutão (Orbe: 0°28', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 2°27', em movimento)\nMercúrio em octil com Urano (Orbe: 2°23', em movimento)\nMarte em sextil com Saturno (Orbe: 0°07', em movimento)\nJúpiter em sextil com Urano (Orbe: 0°20', em movimento)\nJúpiter em trígono com Netuno (Orbe: 0°09', em movimento)\nJúpiter em oposição a Plutão (Orbe: 0°15', em movimento)\nUrano em sextil com Netuno (Orbe: 0°10', Separando)\nUrano em trígono com Plutão (Orbe: 0°05', Separando)\nNetuno em sextil com Plutão (Orbe: 0°05', Aproximando)\n\nAscendente em quadratura com Mercúrio (Orbe: 2°49', em processo de aplicação)\nAscendente em trígono com Marte (Orbe: 0°14', em processo de aplicação)\nAscendente em oposição a Saturno (Orbe: 0°21', em processo de aplicação)\nAscendente em trígono com o Nodo em trígono (Orbe: 2°15', em processo de aplicação)\nDescendente em quadratura com Mercúrio (Orbe: 2°49', em processo de aplicação)\nDescendente em sextil com Marte (Orbe: 0°14', em processo de aplicação) Descendente\nem conjunção com Saturno (Orbe: 0°21', em processo de aplicação)\nDescendente em trígono com o Nodo em trígono (Orbe: 2°15', em processo de aplicação\n) Meio do Céu em sextil com Vênus (Orbe: 0°59', em processo de aplicação) Fundo\ndo Céu em trígono com Vênus (Orbe: 0°59', em processo de aplicação)\nNodo em trígono com Mercúrio (Orbe: 0°33', em processo de aplicação)\nNodo em quincúncio com Júpiter (Orbe: 2°36', em processo de separação)\nNodo em Octil com Saturno (Orbe: 1°53', em movimento)\nNodo em Quadratura com Urano (Orbe: 2°57', em movimento)\nNodo em Sextil com Quíron (Orbe: 0°50', em movimento)\nQuíron em Octil com Marte (Orbe: 1°10', em movimento)\nFortuna em Octil com Plutão (Orbe: 2°53', em movimento)\nFortuna em Conjunção com Lilith (Orbe: 1°15', em movimento)\nVértice em Oposição com a Lua (Orbe: 0°55', em movimento)\nVértice em Trígono com Júpiter (Orbe: 1°38', em movimento)\nVértice em Sextil com Urano (Orbe: 1°18', em movimento)\nVértice em Conjunção com Netuno (Orbe: 1°28', em movimento)\nVértice em Sextil com Plutão (Orbe: 1°23', em movimento)",
    jogoGerado: [15, 21, 5, 6, 12, 25, 1, 9, 2, 10, 18, 20, 23, 11, 24],
    resultado: [1, 4, 5, 6, 9, 11, 13, 15, 16, 18, 19, 20, 23, 24, 25],
    obs: "",
  },
  {
    id: "h91", concurso: "3740", data: "20/07/2026", hora: "",
    textoMapa: "Sol em Câncer 28°16', na 5ª Casa;\nLua em Libra 22°58', na 8ª Casa;\nMercúrio em Câncer 16°42', retrógrado, na 5ª Casa;\nVênus em Virgem 12°23', na 6ª Casa;\nMarte em Gêmeos 15°33', na 4ª Casa;\nJúpiter em Leão 4°31', na 5ª Casa;\nSaturno em Áries 14°43', na 2ª Casa;\nUrano em Gêmeos 4°36', na 3ª Casa;\nNetuno em Áries 4°22', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°25', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°31', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°46', na 10ª Casa;\nQuíron em Touro 0°46', na 2ª Casa;\nFortuna em Sagitário. 18°57', no\nVértice da 10ª Casa em Gêmeos 22°42', no\nAscendente da 4ª Casa em Peixes 13°39'\nMC em Sagitário 13°31'\n\n1ª Casa em Peixes 13°39'\n2ª Casa em Áries 11°20'\n3ª Casa em Touro 11°10'\n4ª Casa em Gêmeos 13°31'\n5ª Casa em Câncer 15°57'\n6ª Casa em Leão 15°54'\n7ª Casa em Virgem 13°39'\n8ª Casa em Libra 11°20'\n9ª Casa em Escorpião 11°10'\n10ª Casa em Sagitário 13°31'\n11ª Casa em Capricórnio 15°57'\n12ª Casa em Aquário 15°54'\n\nSol em octil com Vênus (Orbe: 0°53', em movimento subsequente)\nSol em octil com Marte (Orbe: 2°16', em movimento subsequente)\nMercúrio em quadratura com Saturno (Orbe: 1°59', em movimento subsequente)\nMercúrio em octil com Urano (Orbe: 2°53', em movimento subsequente)\nVênus em quincúncio com Saturno (Orbe: 2°19', em movimento subsequente)\nMarte em sextil com Saturno (Orbe: 0°50', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 0°05', em movimento subsequente)\nJúpiter em trígono com Netuno (Orbe: 0°09', em movimento subsequente)\nJúpiter em oposição a Plutão (Orbe: 0°05', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°14', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 0°10', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°03', em movimento subsequente)\n\nTri-óctilo do Sol no Ascendente (Orbe: 0°22', Separando)\nOposição de Vênus no Ascendente (Orbe: 1°16', Separando)\nQuadratura de Marte no Ascendente (Orbe: 1°54', Aplicando)\nOctil de Quíron no Ascendente (Orbe: 2°07', Aplicando)\nOctil do Sol no Descendente (Orbe: 0°22', Separando)\nConjunção de Vênus no Descendente (Orbe: 1°16', Separando)\nQuadratura de Marte no Descendente (Orbe: 1°54', Aplicando)\nQuincúncio de Saturno no Descendente (Orbe: 1°03', Aplicando)\nTri-óctilo de Quíron no Descendente (Orbe: 2°07', Aplicando)\nTri-óctilo do Sol no Meio do Céu (Orbe: 0°14', Separando)\nQuadratura de Vênus no Meio do Céu (Orbe: 1°07', Separando)\nOposição de Marte no Meio do Céu (Orbe: 2°02', em aplicação)\nMC em trígono com Saturno (Orbe: 1°12', em aplicação)\nMC em trígono octil com Quíron (Orbe: 2°15', em aplicação)\nIC em octil com o Sol (Orbe: 0°14', em separação)\nIC em quadratura com Vênus (Orbe: 1°07', em separação)\nIC em conjunção com Marte (Orbe: 2°02', em aplicação)\nIC em sextil com Saturno (Orbe: 1°12', em aplicação)\nIC em octil com Quíron (Orbe: 2°15', em aplicação)\nNodo em trígono octil com Mercúrio (Orbe: 0°11', em aplicação)\nNodo em quincúncio com Júpiter (Orbe: 2°59', em separação)\nNodo em octil com Saturno (Orbe: 1°48', em aplicação)\nNodo em sextil com Quíron (Orbe: 0°44', em aplicação)\nLilith em sextil com a Lua (Orbe: 0°47', Em aplicação)\nQuíron em quadratura com o Sol (Orbe: 2°30', em aplicação)\nQuíron em octil com Marte (Orbe: 0°13', em aplicação)\nFortuna em quincúncio com Mercúrio (Orbe: 2°14', em separação)\nFortuna em trígono com Júpiter (Orbe: 0°33', em aplicação)\nFortuna em octil com Plutão (Orbe: 0°28', em aplicação)\nTrígono com a Lua no vértice (Orbe: 0°16', em aplicação)\nOposição com Lilith no vértice (Orbe: 1°04', em aplicação)",
    jogoGerado: [2, 15, 5, 13, 11, 23, 22, 1, 9, 6, 4, 17, 3, 14, 18],
    resultado: [1, 2, 5, 6, 8, 9, 11, 12, 13, 15, 16, 17, 20, 21, 22],
    obs: "",
  },
  {
    id: "h92", concurso: "3741", data: "21/07/2026", hora: "",
    textoMapa: "Sol em Câncer 29°14', na 5ª Casa;\nLua em Escorpião 5°20', na 8ª Casa;\nMercúrio em Câncer 16°29', retrógrado, na 4ª Casa;\nVênus em Virgem 13°28', na 6ª Casa;\nMarte em Gêmeos 16°15', na 4ª Casa;\nJúpiter em Leão 4°44', na 5ª Casa;\nSaturno em Áries 14°43', na 2ª Casa;\nUrano em Gêmeos 4°39', na 3ª Casa;\nNetuno em Áries 4°21', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°24', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°28', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°53', na 10ª Casa;\nQuíron em Touro 0°47', na 2ª Casa;\nFortuna em Sagitário. 8°27', no\nVértice da 9ª Casa em Gêmeos 23°12', no\nAscendente da 4ª Casa em Peixes 14°33'\nMC em Sagitário 14°26'\n\n1ª Casa em Peixes 14°33'\n2ª Casa em Áries 12°15'\n3ª Casa em Touro 12°05'\n4ª Casa em Gêmeos 14°26'\n5ª Casa em Câncer 16°50'\n6ª Casa em Leão 16°47'\n7ª Casa em Virgem 14°33'\n8ª Casa em Libra 12°15'\n9ª Casa em Escorpião 12°05'\n10ª Casa em Sagitário 14°26'\n11ª Casa em Capricórnio 16°50'\n12ª Casa em Aquário 16°47'\n\nSol em octil com Vênus (Orbe: 0°45', em movimento)\nSol em octil com Marte (Orbe: 2°01', em movimento)\nLua em quadratura com Júpiter (Orbe: 0°35', em movimento)\nLua em quincúncio com Urano (Orbe: 0°41', em movimento)\nLua em quincúncio com Netuno (Orbe: 0°58', em movimento)\nLua em quadratura com Plutão (Orbe: 0°55', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 1°45', em movimento)\nVênus em quadratura com Marte (Orbe: 2°46', em movimento)\nVênus em quincúncio com Saturno (Orbe: 1°15', em movimento)\nMarte em sextil com Saturno (Orbe: 1°31', em movimento)\nJúpiter em sextil com Urano (Orbe: 0°05', em movimento)\nJúpiter em trígono com Netuno (Orbe: 0°23', em movimento)\nJúpiter em oposição a Plutão (Orbe:\nUrano em sextil com Netuno (Orbe: 0°17', em separação)\nUrano em trígono com Plutão (Orbe: 0°14', em separação)\nNetuno em sextil com Plutão (Orbe: 0°02', em aproximação)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°19', Separando)\nAscendente em Trígono com Mercúrio (Orbe: 1°56', Aplicando)\nAscendente em Oposição com Vênus (Orbe: 1°05', Separando)\nAscendente em Quadratura com Marte (Orbe: 1°41', Aplicando)\nAscendente em Octil com Quíron (Orbe: 1°14', Aplicando)\nDescendente em Octil com o Sol (Orbe: 0°19', Separando)\nDescendente em Sextil com Mercúrio (Orbe: 1°56', Aplicando)\nDescendente em Conjunção com Vênus (Orbe: 1°05', Separando)\nDescendente em Quadratura com Marte (Orbe: 1°41', Aplicando)\nDescendente em Quincúncio com Saturno (Orbe: 0°10', Aplicando)\nDescendente em Tri-Octil com Quíron (Orbe: 1°14', Aplicando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°12', Separando)\nMC Quincúncio Mercúrio (Orbe: 2°03', Aplicando)\nMC Quadratura Vênus (Orbe: 0°58', Separando)\nMC Oposição Marte (Orbe: 1°48', Aplicando)\nMC Trígono Saturno (Orbe: 0°17', Aplicando)\nMC Tri-óctilo Quíron (Orbe: 1°21', Aplicando)\nIC Octil Sol (Orbe: 0°12', Separando)\nIC Quadratura Vênus (Orbe: 0°58', Separando)\nIC Conjunção Marte (Orbe: 1°48', Aplicando)\nIC Sextil Saturno (Orbe: 0°17', Aplicando)\nIC Octil Quíron (Orbe: 1°21', Aplicando)\nNodo Quincúncio Sol (Orbe: 2°14', Aplicando)\nNodo Tri-óctilo Mercúrio (Orbe: 0°01', Aplicando)\nNodo em Octil com Saturno (Orbe: 1°44', em movimento)\nNodo em Sextil com Quíron (Orbe: 0°40', em movimento)\nQuíron em Quadratura com o Sol (Orbe: 1°33', em movimento)\nQuíron em Tri-Octil com Vênus (Orbe: 2°19', em movimento)\nQuíron em Octil com Marte (Orbe: 0°27', em movimento)\nVértice em Tri-Octil com a Lua (Orbe: 2°52', em movimento)\nVértice em Oposição com Lilith (Orbe: 0°40', em movimento)",
    jogoGerado: [16, 23, 20, 11, 15, 9, 22, 1, 6, 19, 14, 2, 18, 10, 12],
    resultado: [2, 3, 4, 5, 9, 11, 12, 14, 15, 16, 18, 20, 21, 22, 23],
    obs: "",
  },
  {
    id: "h93", concurso: "3742", data: "22/07/2026", hora: "",
    textoMapa: "Sol em Leão 0°11', na 5ª Casa;\nLua em Escorpião 17°28', na 9ª Casa;\nMercúrio em Câncer 16°21', retrógrado, na 4ª Casa;\nVênus em Virgem 14°32', na 6ª Casa;\nMarte em Gêmeos 16°56', na 4ª Casa;\nJúpiter em Leão 4°58', na 5ª Casa;\nSaturno em Áries 14°44', na 2ª Casa;\nUrano em Gêmeos 4°41', na 3ª Casa;\nNetuno em Áries 4°21', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°23', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°25', retrógrado, na 12ª Casa;\nLilith em Sagitário 23°59', na 10ª Casa;\nQuíron em Touro 0°48', na 2ª Casa;\nFortuna em Escorpião. 28°10', no\nVértice da 9ª Casa em Gêmeos 23°43', no\nAscendente da 4ª Casa em Peixes 15°27'\nMeio do Céu em Sagitário 15°21'\n\n1ª Casa em Peixes 15°27'\n2ª Casa em Áries 13°10'\n3ª Casa em Touro 13°01'\n4ª Casa em Gêmeos 15°21'\n5ª Casa em Câncer 17°44'\n6ª Casa em Leão 17°40'\n7ª Casa em Virgem 15°27'\n8ª Casa em Libra 13°10'\n9ª Casa em Escorpião 13°01'\n10ª Casa em Sagitário 15°21'\n11ª Casa em Capricórnio 17°44'\n12ª Casa em Aquário 17°40'\n\nSol em octil com Vênus (Orbe: 0°38', em movimento)\nSol em octil com Marte (Orbe: 1°44', em movimento)\nLua em trígono com Mercúrio (Orbe: 1°06', em movimento)\nLua em sextil com Vênus (Orbe: 2°55', em movimento)\nLua em quincúncio com Marte (Orbe: 0°31', em movimento)\nLua em quincúncio com Saturno (Orbe: 2°43', em movimento)\nLua em trígono com Netuno (Orbe: 1°53', em movimento)\nMercúrio em sextil com Vênus (Orbe: 1°48', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 1°37', em movimento)\nVênus em quadratura com Marte (Orbe: 2°23', em movimento)\nVênus em quincúncio com Saturno (Orbe: 0°11', em movimento)\nMarte em sextil com Saturno (Orbe: 2°12', em movimento)\nMarte em trígono com Plutão (Orbe:\nJúpiter em sextil com Urano (Orbe: 0°16', Separando )\nJúpiter em trígono com Netuno (Orbe: 0°36', Separando)\nJúpiter em oposição a Plutão (Orbe: 0°34', Separando)\nUrano em sextil com Netuno (Orbe: 0°20', Separando)\nUrano em trígono com Plutão (Orbe: 0°18', Separando)\nNetuno em sextil com Plutão (Orbe: 0°01', Aplicando)\n\nTri-óctil do Sol no Ascendente (Orbe: 0°15', Separando)\nTrígono da Lua no Ascendente (Orbe: 2°00', Aplicando)\nTrígono de Mercúrio no Ascendente (Orbe: 0°54', Aplicando)\nOposição de Vênus no Ascendente (Orbe: 0°54', Separando)\nQuadratura de Marte no Ascendente (Orbe: 1°29', Aplicando)\nOctil de Quíron no Ascendente (Orbe: 0°21', Aplicando)\nOctil do Sol no Descendente (Orbe: 0°15', Separando)\nSextil da Lua no Descendente (Orbe: 2°00', Aplicando)\nSextil de Mercúrio no Descendente (Orbe: 0°54', Aplicando)\nConjunção de Vênus no Descendente (Orbe: 0°54', Separando)\nQuadratura de Marte no Descendente (Orbe: 1°29', Aplicando)\nQuincúncio de Saturno no Descendente (Orbe: 0°42', Separando)\nDSC Tri-Octil Quíron (Orbe: 0°21', Aplicando)\nMC Tri-Octil Sol (Orbe: 0°09', Separando)\nMC Quincúncio Mercúrio (Orbe: 1°00', Aplicando)\nMC Quadratura Vênus (Orbe: 0°48', Separando)\nMC Oposição Marte (Orbe: 1°35', Aplicando)\nMC Trígono Saturno (Orbe: 0°36', Separando)\nMC Tri-Octil Quíron (Orbe: 0°27', Aplicando)\nIC Octil Sol (Orbe: 0°09', Separando)\nIC Quincúncio Lua (Orbe: 2°06', Aplicando)\nIC Quadratura Vênus (Orbe: 0°48', Separando)\nIC Conjunção Marte (Orbe: 1°35', Aplicando)\nIC Sextil Saturno (Orbe: 0°36', Separando)\nIC Octil Quíron (Orbe: 0°27', Aplicando)\nNodo Quincúncio Sol (Orbe: 1°13', Aplicando)\nNodo Tri-Octil Mercúrio (Orbe: 0°03', Separando)\nNodo Octil Saturno (Orbe: 1°41', Aplicando)\nNodo Sextil Quíron (Orbe: 0°37', Aplicando)\nQuíron Quadratura Sol (Orbe: 0°36', Aplicando)\nQuíron Tri-Octil Vênus (Orbe: 1°15', Aplicando)\nQuíron Octil Marte (Orbe: 1°08', Separando)\nFortuna Trígono Sol (Orbe: 2°00', Aplicando)\nFortuna Tri-Octil Saturno (Orbe: 1°33', Aplicando)\nFortuna Quincúncio Quíron (Orbe: 2°37', Aplicando)\nFortuna Trígono Vertex (Orbe: 1°49', Separando)\nOposição do vértice Lilith (Orbe: 0°16', Aplicando)",
    jogoGerado: [4, 5, 25, 7, 9, 13, 15, 19, 2, 1, 11, 14, 16, 24, 6],
    resultado: [1, 4, 5, 6, 9, 10, 12, 13, 14, 15, 16, 19, 20, 21, 23],
    obs: "",
  },
  {
    id: "h94", concurso: "3743", data: "23/07/2026", hora: "",
    textoMapa: "Sol em Leão 1°08', na 5ª Casa;\nLua em Escorpião 29°26', na 9ª Casa;\nMercúrio em Câncer 16°18', estacionário, na 4ª Casa;\nVênus em Virgem 15°37', na 6ª Casa;\nMarte em Gêmeos 17°37', na 4ª Casa;\nJúpiter em Leão 5°11', na 5ª Casa;\nSaturno em Áries 14°44', na 2ª Casa;\nUrano em Gêmeos 4°43', na 3ª Casa;\nNetuno em Áries 4°20', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°21', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°22', retrógrado, na 12ª Casa;\nLilith em Sagitário 24°06', na 10ª Casa;\nQuíron em Touro 0°48', na 2ª Casa;\nFortuna em Escorpião. 18°03', no\nVértice da 9ª Casa em Gêmeos 24°14', no\nAscendente da 4ª Casa em Peixes 16°21'\nMC em Sagitário 16°16'\n\n1ª Casa em Peixes 16°21'\n2ª Casa em Áries 14°06'\n3ª Casa em Touro 13°57'\n4ª Casa em Gêmeos 16°16'\n5ª Casa em Câncer 18°37'\n6ª Casa em Leão 18°33'\n7ª Casa em Virgem 16°21'\n8ª Casa em Libra 14°06'\n9ª Casa em Escorpião 13°57'\n10ª Casa em Sagitário 16°16'\n11ª Casa em Capricórnio 18°37'\n12ª Casa em Aquário 18°33'\n\nSol em trígono com a Lua (Orbe: 1°41', em movimento)\nSol em octil com Vênus (Orbe: 0°31', em movimento)\nSol em octil com Marte (Orbe: 1°28', em movimento)\nLua em trígono com Mercúrio (Orbe: 1°52', em movimento)\nLua em trígono com Saturno (Orbe: 0°17', em movimento)\nMercúrio em sextil com Vênus (Orbe: 0°41', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 1°34', em movimento)\nVênus em quadratura com Marte (Orbe: 2°00', em movimento)\nVênus em quincúncio com Saturno (Orbe: 0°52', em movimento)\nMarte em octil com Júpiter (Orbe: 2°33', em movimento)\nMarte em sextil com Saturno (Orbe: 2°52', em movimento)\nMarte em trígono com Plutão (Orbe: 1°44', em movimento)\nJúpiter em sextil com Urano (Orbe:\nJúpiter em trígono com Netuno (Orbe: 0°50', Separando )\nJúpiter em oposição a Plutão (Orbe: 0°49', Separando)\nUrano em sextil com Netuno (Orbe: 0°22', Separando)\nUrano em trígono com Plutão (Orbe: 0°21', Separando)\nNetuno em sextil com Plutão (Orbe: 0°01', Aplicando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°12', Separando)\nAscendente em Trígono com Mercúrio (Orbe: 0°02', Separando)\nAscendente em Oposição com Vênus (Orbe: 0°43', Separando)\nAscendente em Quadratura com Marte (Orbe: 1°16', Aplicando)\nAscendente em Octil com Quíron (Orbe: 0°32', Separando)\nDescendente em Octil com o Sol (Orbe: 0°12', Separando)\nDescendente em Sextil com Mercúrio (Orbe: 0°02', Separando)\nDescendente em Conjunção com Vênus (Orbe: 0°43', Separando)\nDescendente em Quadratura com Marte (Orbe: 1°16', Aplicando)\nDescendente em Quincúncio com Saturno (Orbe: 1°36', Separando)\nDescendente em Tri-Octil com Quíron (Orbe: 0°32', Separando)\nMeio do Céu em Tri-Octil Sol (Orbe: 0°07', Separando)\nMC Quincúncio Mercúrio (Orbe: 0°02', Aplicando)\nMC Quadratura Vênus (Orbe: 0°38', Separando)\nMC Oposição Marte (Orbe: 1°21', Aplicando)\nMC Trígono Saturno (Orbe: 1°31', Separando)\nMC Tri-óctilo Quíron (Orbe: 0°27', Separando)\nIC Óctilo Sol (Orbe: 0°07', Separando)\nIC Quadratura Vênus (Orbe: 0°38', Separando)\nIC Conjunção Marte (Orbe: 1°21', Aplicando)\nIC Sextil Saturno (Orbe: 1°31', Separando)\nIC Óctilo Quíron (Orbe: 0°27', Separando)\nNodo Quincúncio Sol (Orbe: 0°13', Aplicando)\nNodo Quadratura Lua (Orbe:\nNodo em trígono com Mercúrio (Orbe: 0°03', em aplicação )\nNodo em octil com Saturno (Orbe: 1°37', em aplicação)\nNodo em sextil com Quíron (Orbe: 0°33', em aplicação)\nQuíron em quadratura com o Sol (Orbe: 0°19', em separação)\nQuíron em quincúncio com a Lua (Orbe: 1°22', em aplicação)\nQuíron em trígono com Vênus (Orbe: 0°11', em aplicação)\nQuíron em octil com Marte (Orbe: 1°48', em separação)\nFortuna em trígono com Mercúrio (Orbe: 1°44', em separação)\nFortuna em sextil com Vênus (Orbe: 2°25', em separação)\nFortuna em quincúncio com Marte (Orbe: 0°25', em separação)\nFortuna em trígono com Netuno (Orbe: 1°17', em aplicação)\nFortuna em trígono com o Ascendente (Orbe: 1°41', Separando)\nQuincúncio da Fortuna IC (Orbe: 1°47', Separando)\nSextil da Fortuna DSC (Orbe: 1°41', Separando)\nOposição do Vértice Lilith (Orbe: 0°08', Separando)",
    jogoGerado: [4, 20, 5, 2, 9, 10, 8, 15, 1, 13, 24, 3, 11, 25, 14],
    resultado: [2, 3, 4, 5, 9, 10, 11, 13, 15, 18, 19, 20, 21, 23, 25],
    obs: "",
  },
  {
    id: "h95", concurso: "3744", data: "24/07/2026", hora: "",
    textoMapa: "Sol em Leão 2°06', na 5ª Casa;\nLua em Sagitário 11°20', na 9ª Casa;\nMercúrio em Câncer 16°22', na 4ª Casa;\nVênus em Virgem 16°41', na 6ª Casa;\nMarte em Gêmeos 18°18', na 4ª Casa;\nJúpiter em Leão 5°24', na 5ª Casa;\nSaturno em Áries 14°44', na 1ª Casa;\nUrano em Gêmeos 4°45', na 3ª Casa;\nNetuno em Áries 4°20', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°20', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°18', retrógrado, na 12ª Casa;\nLilith em Sagitário 24°13', na 10ª Casa;\nQuíron em Touro 0°49', na 2ª Casa;\nFortuna em Escorpião 8°00', no\nVértice da 8ª Casa em Gêmeos 24°46', no\nAscendente da 4ª Casa em Peixes 17°15'\nMC em Sagitário 17°10'\n\n1ª Casa em Peixes 17°15'\n2ª Casa em Áries 15°01'\n3ª Casa em Touro 14°52'\n4ª Casa em Gêmeos 17°10'\n5ª Casa em Câncer 19°31'\n6ª Casa em Leão 19°27'\n7ª Casa em Virgem 17°15'\n8ª Casa em Libra 15°01'\n9ª Casa em Escorpião 14°52'\n10ª Casa em Sagitário 17°10'\n11ª Casa em Capricórnio 19°31'\n12ª Casa em Aquário 19°27'\n\nSol em octil com Vênus (Orbe: 0°24', em movimento)\nSol em octil com Marte (Orbe: 1°12', em movimento)\nSol em sextil com Urano (Orbe: 2°39', em movimento)\nSol em trígono com Netuno (Orbe: 2°14', em movimento)\nSol em oposição a Plutão (Orbe: 2°14', em movimento)\nMercúrio em sextil com Vênus (Orbe: 0°19', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 1°37', em movimento)\nVênus em quadratura com Marte (Orbe: 1°37', em movimento)\nVênus em quincúncio com Saturno (Orbe: 1°56', em movimento)\nVênus em trígono com Plutão (Orbe: 2°39', em movimento)\nMarte em octil com Júpiter (Orbe: 2°06', em movimento)\nMarte em trígono com Plutão (Orbe: 1°01', em movimento)\nJúpiter em sextil com Urano (Orbe: 0°38', Separando)\nJúpiter em trígono com Netuno (Orbe: 1°04', Separando)\nJúpiter em oposição a Plutão (Orbe: 1°04', Separando)\nUrano em sextil com Netuno (Orbe: 0°25', Separando)\nUrano em trígono com Plutão (Orbe: 0°25', Separando)\nNetuno em sextil com Plutão (Orbe: 0°00', Aplicando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°09', Separando)\nAscendente em Trígono com Mercúrio (Orbe: 0°52', Separando)\nAscendente em Oposição com Vênus (Orbe: 0°33', Separando)\nAscendente em Quadratura com Marte (Orbe: 1°03', Aplicando)\nAscendente em Octil com Plutão (Orbe: 2°05', Aplicando)\nAscendente em Octil com Quíron (Orbe: 1°25', Separando)\nDescendente em Octil com o Sol (Orbe: 0°09', Separando)\nDescendente em Sextil com Mercúrio (Orbe: 0°52', Separando)\nDescendente em Conjunção com Vênus (Orbe: 0°33', Separando)\nDescendente em Quadratura com Marte (Orbe: 1°03', Aplicando)\nDescendente em Quincúncio com Saturno (Orbe: 2°30', Separando)\nDescendente em Tri-Octil Plutão (Orbe: 2°05', em movimento)\nTri-óctil do Descendente com Quíron (Orbe: 1°25', em movimento de separação)\nTri-óctil do Meio do Céu com o Sol (Orbe: 0°04', em movimento de separação)\nQuincúncio do Meio do Céu com Mercúrio (Orbe: 0°48', em movimento de separação\n) Quadratura do Meio do Céu com Vênus (Orbe: 0°29', em movimento de separação)\nOposição do Meio do Céu com Marte (Orbe: 1°07', em movimento)\nTrígono do Meio do Céu com Saturno (Orbe: 2°25', em movimento de separação)\nOctil do Meio do Céu com Plutão (Orbe: 2°09', em movimento)\nTri-óctil do Meio do Céu com Quíron (Orbe: 1°21', em movimento de separação)\nOctil do Fundo do Céu com o Sol (Orbe: 0°04', em movimento de separação)\nQuadratura do Fundo do Céu com Vênus (Orbe: 0°29', em movimento de separação)\nConjunção do Fundo do Céu com Marte (Orbe: 1°07', em movimento)\nSextil do Fundo do Céu com Saturno (Orbe: 2°25', Separando)\nIC Tri-Octil Plutão (Orbe: 2°09', Aplicando)\nIC Octil Quíron (Orbe: 1°21', Separando)\nNodo Quincúncio Sol (Orbe: 0°47', Separando)\nNodo Tri-Octil Mercúrio (Orbe: 0°03', Separando)\nNodo Octil Saturno (Orbe: 1°34', Aplicando)\nNodo Sextil Quíron (Orbe: 0°29', Aplicando)\nQuíron Quadratura Sol (Orbe: 1°16', Separando)\nQuíron Tri-Octil Vênus (Orbe: 0°51', Separando)\nQuíron Octil Marte (Orbe: 2°29', Separando)\nFortuna Quadratura Júpiter (Orbe: 2°36', Separando)\nFortuna Octil Lilith (Orbe: 1°12', Aplicando)\nVértice Lilith em oposição (Orbe: 0°33', Separando)",
    jogoGerado: [23, 1, 20, 5, 7, 24, 10, 15, 9, 16, 4, 2, 6, 17, 3],
    resultado: [1, 2, 3, 5, 7, 10, 14, 16, 17, 18, 20, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h96", concurso: "3745", data: "26/07/2026", hora: "",
    textoMapa: "Sol em Leão 3°36', na 10ª Casa;\nLua em Capricórnio 0°07', na 3ª Casa;\nMercúrio em Câncer 16°39', na 10ª Casa;\nVênus em Virgem 18°22', na 12ª Casa;\nMarte em Gêmeos 19°23', na 8ª Casa;\nJúpiter em Leão 5°45', na 10ª Casa;\nSaturno em Áries 14°44', estacionário, na 6ª Casa;\nUrano em Gêmeos 4°49', na 8ª Casa;\nNetuno em Áries 4°19', retrógrado, na 6ª Casa;\nPlutão em Aquário 4°18', retrógrado, na 4ª Casa;\nNodo Norte em Peixes 1°13', retrógrado, na 5ª Casa;\nLilith em Sagitário 24°23', na 3ª Casa;\nQuíron em Touro 0°50', na 7ª Casa;\nFortuna em Peixes. 19°53', no\nVértice da 6ª Casa em Áries 9°37', no\nAscendente da 6ª Casa em Libra 23°22'\nMeio do Céu em Câncer 16°15'\n\n1ª Casa em Libra 23°22'\n2ª Casa em Escorpião 27°38'\n3ª Casa em Sagitário 23°34'\n4ª Casa em Capricórnio 16°15'\n5ª Casa em Aquário 11°15'\n6ª Casa em Peixes 13°58'\n7ª Casa em Áries 23°22'\n8ª Casa em Touro 27°38'\n9ª Casa em Gêmeos 23°34'\n10ª Casa em Câncer 16°15'\n11ª Casa em Leão 11°15'\n12ª Casa em Virgem 13°58'\n\nSol em octil com Vênus (Orbe: 0°14', em movimento)\nSol em octil com Marte (Orbe: 0°46', em movimento)\nSol em conjunção com Júpiter (Orbe: 2°08', em movimento)\nSol em sextil com Urano (Orbe: 1°12', em movimento)\nSol em trígono com Netuno (Orbe: 0°42', em movimento)\nSol em oposição a Plutão (Orbe: 0°41', em movimento)\nMercúrio em sextil com Vênus (Orbe: 1°43', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 1°54', em movimento)\nVênus em quadratura com Marte (Orbe: 1°01', em movimento)\nVênus em octil com Júpiter (Orbe: 2°23', em movimento)\nVênus em trígono com Plutão (Orbe: 0°55', em movimento)\nMarte em octil com Júpiter (Orbe: 1°22', em movimento)\nMarte em trígono com Plutão (Orbe:\nJúpiter em sextil com Urano (Orbe: 0°05', Separando)\nJúpiter em trígono com Netuno (Orbe: 1°26', Separando)\nJúpiter em oposição a Plutão (Orbe: 1°27', Separando)\nUrano em sextil com Netuno (Orbe: 0°30', Separando)\nUrano em trígono com Plutão (Orbe: 0°31', Separando)\nNetuno em sextil com Plutão (Orbe: 0°01', Separando)\n\nSextil do Ascendente com Lilith (Orbe: 1°01', em movimento)\nTrígono do Descendente com Lilith (Orbe: 1°01', em movimento)\nConjunção do Meio do Céu com Mercúrio (Orbe: 0°23', em movimento)\nSextil do Meio do Céu com Vênus (Orbe: 2°06', em movimento)\nQuadratura do Meio do Céu com Saturno (Orbe: 1°30', em movimento)\nTri-óctilo do Meio do Céu com o Nodo Lunar (Orbe: 0°01', em movimento)\nOposição do Fundo do Céu com Mercúrio (Orbe: 0°23', em movimento)\nTrígono do Fundo do Céu com Vênus (Orbe: 2°06', em movimento)\nQuadratura do Fundo do Céu com Saturno (Orbe: 1°30', em movimento)\nOctil do Fundo do Céu com o\nNodo Lunar (Orbe: 0°01', em movimento) Quincúncio do Nodo com o Sol (Orbe: 2°22', em movimento)\nSextil do Nodo com a Lua (Orbe: 1°06', em movimento)\nTri-óctilo do Nodo com Mercúrio (Orbe: 0°25', Separando)\nNodo em Octil com Saturno (Orbe: 1°28', Aplicando)\nNodo em Sextil com Quíron (Orbe: 0°23', Aplicando)\nQuíron em Quadratura com o Sol (Orbe: 2°46', Separando)\nQuíron em Trígono com a Lua (Orbe: 0°42', Aplicando)\nQuíron em Tri-Octil com Vênus (Orbe: 2°32', Separando)\nFortuna em Tri-Octil com o Sol (Orbe: 1°16', Separando)\nFortuna em Oposição com Vênus (Orbe: 1°30', Separando)\nFortuna em Quadratura com Marte (Orbe: 0°29', Separando)\nFortuna em Tri-Octil com Júpiter (Orbe: 0°52', Aplicando)\nFortuna em Octil com Plutão (Orbe: 0°34', Separando)",
    jogoGerado: [15, 22, 1, 5, 2, 21, 24, 9, 4, 12, 11, 19, 6, 13, 25],
    resultado: [1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 19, 21, 22, 24],
    obs: "",
  },
  {
    id: "h97", concurso: "3746", data: "27/07/2026", hora: "",
    textoMapa: "Sol em Leão 4°57', na 5ª Casa;\nLua em Capricórnio 17°02', na 10ª Casa;\nMercúrio em Câncer 17°06', na 4ª Casa;\nVênus em Virgem 19°52', na 6ª Casa;\nMarte em Gêmeos 20°21', na 4ª Casa;\nJúpiter em Leão 6°04', na 5ª Casa;\nSaturno em Áries 14°44', retrógrado, na 1ª Casa;\nUrano em Gêmeos 4°52', na 3ª Casa;\nNetuno em Áries 4°18', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°16', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°09', retrógrado, na 12ª Casa;\nLilith em Sagitário 24°33', na 10ª Casa;\nQuíron em Touro 0°50', na 2ª Casa;\nFortuna em Libra 7°52', no\nVértice da 7ª Casa em Gêmeos 26°27', no\nAscendente da 4ª Casa em Peixes 19°57'\nMeio do Céu em Sagitário 19°54'\n\n1ª Casa em Peixes 19°57'\n2ª Casa em Áries 17°45'\n3ª Casa em Touro 17°38'\n4ª Casa em Gêmeos 19°54'\n5ª Casa em Câncer 22°12'\n6ª Casa em Leão 22°07'\n7ª Casa em Virgem 19°57'\n8ª Casa em Libra 17°45'\n9ª Casa em Escorpião 17°38'\n10ª Casa em Sagitário 19°54'\n11ª Casa em Capricórnio 22°12'\n12ª Casa em Aquário 22°07'\n\nSol em octil com Vênus (Orbe: 0°05', em movimento)\nSol em octil com Marte (Orbe: 0°23', em movimento)\nSol em conjunção com Júpiter (Orbe: 1°06', em movimento)\nSol em sextil com Urano (Orbe: 0°05', em movimento)\nSol em trígono com Netuno (Orbe: 0°39', em movimento)\nSol em oposição a Plutão (Orbe: 0°41', em movimento)\nLua em oposição a Mercúrio (Orbe: 0°04', em movimento)\nLua em trígono com Vênus (Orbe: 2°49', em movimento)\nLua em quadratura com Saturno (Orbe: 2°17', em movimento)\nLua em trígono com octil de Urano (Orbe: 2°49', em movimento)\nMercúrio em sextil com Vênus (Orbe: 2°45', em movimento)\nMercúrio em quadratura com Saturno (Orbe: 2°21', em movimento)\nMercúrio em octil com Urano (Orbe: Vênus\nem quadratura com Marte (Orbe: 0°29', em quadratura)\nVênus em octil com Júpiter (Orbe: 1°12', em quadratura)\nVênus em trígono com Plutão (Orbe: 0°36', em separação)\nMarte em octil com Júpiter (Orbe: 0°43', em quadratura)\nMarte em trígono com Plutão (Orbe: 1°05', em separação)\nJúpiter em sextil com Urano (Orbe: 1°12', em separação)\nJúpiter em trígono com Netuno (Orbe: 1°46', em separação)\nJúpiter em oposição a Plutão (Orbe: 1°48', em separação)\nUrano em sextil com Netuno (Orbe: 0°34', em separação)\nUrano em trígono com Plutão (Orbe: 0°36', em separação) Netuno em\nsextil com Plutão (Orbe: 0°02', em separação)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°00', em movimento)\nAscendente em Sextil com a Lua (Orbe: 2°54', em movimento de separação)\nAscendente em Trígono com Mercúrio (Orbe: 2°50', em movimento de separação)\nAscendente em Oposição com Vênus (Orbe: 0°04', em movimento de separação)\nAscendente em Quadratura com Marte (Orbe: 0°24', em movimento)\nAscendente em Tri-Octil com Júpiter (Orbe: 1°07', em movimento)\nAscendente em Octil com Plutão (Orbe: 0°40', em movimento de separação)\nDescendente em Octil com o Sol (Orbe: 0°00', em movimento)\nDescendente em Trígono com a Lua (Orbe: 2°54', em movimento de separação) Descendente em\nSextil com Mercúrio (Orbe: 2°50', em movimento de separação)\nDescendente em Conjunção com Vênus (Orbe: 0°04', em movimento de separação)\nDescendente em Quadratura com Marte (Orbe: 0°24', Aplicando)\nDescendente em Octil com Júpiter (Orbe: 1°07', Aplicando)\nDescendente em Tri-Octil com Plutão (Orbe: 0°40', Separando)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°03', Aplicando) Meio do Céu em\nQuincúncio com Mercúrio (Orbe: 2°47', Separando)\nMeio do Céu em Quadratura com Vênus (Orbe: 0°02', Separando)\nMeio do Céu em Oposição com Marte (Orbe: 0°26', Aplicando)\nMeio do Céu em Tri-Octil com Júpiter (Orbe: 1°09', Aplicando)\nMeio do Céu em Octil com Plutão (Orbe: 0°38', Separando)\nFundo do Céu em Octil com o Sol (Orbe: 0°03', Aplicando)\nMeio do Céu em Quincúncio com a Lua (Orbe: 2°51', Separando) Meio do Céu em\nQuadratura com Vênus (Orbe: 0°02', Separando)\nMeio do Céu em Conjunção com Marte (Orbe: 0°26', em formação)\nIC em Octil com Júpiter (Orbe: 1°09', em formação)\nIC em Tri-Octil com Plutão (Orbe: 0°38', em formação)\nNodo em Octil com a Lua (Orbe: 0°53', em formação)\nNodo em Tri-Octil com Mercúrio (Orbe: 0°57', em formação)\nNodo em Octil com Saturno (Orbe: 1°24', em formação)\nNodo em Sextil com Quíron (Orbe: 0°18', em formação)\nFortuna em Sextil com o Sol (Orbe: 2°54', em formação)\nFortuna em Sextil com Júpiter (Orbe: 1°47', em formação)\nFortuna em Trígono com Urano (Orbe: 2°59', em formação)\nVértice em Oposição com Lilith (Orbe: 1°54', em formação)",
    jogoGerado: [1, 20, 21, 24, 25, 8, 5, 4, 2, 6, 10, 11, 7, 12, 18],
    resultado: [1, 3, 4, 6, 7, 8, 9, 10, 14, 15, 17, 18, 21, 22, 24],
    obs: "",
  },
  {
    id: "h98", concurso: "3747", data: "28/07/2026", hora: "",
    textoMapa: "Sol em Leão 5°55', na 5ª Casa;\nLua em Capricórnio 29°06', na 11ª Casa;\nMercúrio em Câncer 17°33', na 4ª Casa;\nVênus em Virgem 20°55', na 7ª Casa;\nMarte em Gêmeos 21°02', na 4ª Casa;\nJúpiter em Leão 6°17', na 5ª Casa;\nSaturno em Áries 14°44', retrógrado, na 1ª Casa;\nUrano em Gêmeos 4°54', na 3ª Casa;\nNetuno em Áries 4°17', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°14', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°06', retrógrado, na 12ª Casa;\nLilith em Sagitário 24°40', na 10ª Casa;\nQuíron em Touro 0°51', na 2ª Casa;\nFortuna em Virgem. 27°40', no\nVértice da 7ª Casa em Gêmeos 27°03', no\nAscendente da 4ª Casa em Peixes 20°51'\nMC em Sagitário 20°49'\n\n1ª Casa em Peixes 20°51'\n2ª Casa em Áries 18°40'\n3ª Casa em Touro 18°34'\n4ª Casa em Gêmeos 20°49'\n5ª Casa em Câncer 23°05'\n6ª Casa em Leão 23°00'\n7ª Casa em Virgem 20°51'\n8ª Casa em Libra 18°40'\n9ª Casa em Escorpião 18°34'\n10ª Casa em Sagitário 20°49'\n11ª Casa em Capricórnio 23°05'\n12ª Casa em Aquário 23°00'\n\nSol em octil com Vênus (Orbe: 0°00', separando)\nSol em octil com Marte (Orbe: 0°06', aplicando)\nSol em conjunção com Júpiter (Orbe: 0°22', aplicando)\nSol em sextil com Urano (Orbe: 1°00', separando)\nSol em trígono com Netuno (Orbe: 1°37', separando)\nSol em oposição a Plutão (Orbe: 1°40', separando)\nMercúrio em quadratura com Saturno (Orbe: 2°49', separando)\nMercúrio em octil com Urano (Orbe: 2°20', aplicando)\nVênus em quadratura com Marte (Orbe: 0°06', aplicando)\nVênus em octil com Júpiter (Orbe: 0°22', aplicando)\nVênus em trígono com Plutão (Orbe: 1°40', separando)\nMarte em octil com Júpiter (Orbe: 0°15', aplicando)\nMarte Trí-óctilo de Plutão (Orbe: 1°47', Separando)\nJúpiter em sextil com Urano (Orbe: 1°23', Separando)\nJúpiter em trígono com Netuno (Orbe: 2°00', Separando)\nJúpiter em oposição a Plutão (Orbe: 2°03', Separando)\nUrano em sextil com Netuno (Orbe: 0°36', Separando)\nUrano em trígono com Plutão (Orbe: 0°39', Separando)\nNetuno em sextil com Plutão (Orbe: 0°02', Separando)\n\nSol em Tri-Óctil no Ascendente (Orbe: 0°04', em movimento)\nVênus em Oposição ao Ascendente (Orbe: 0°04', em movimento)\nMarte em Quadratura com o Ascendente (Orbe: 0°11', em movimento)\nJúpiter em Tri-Óctil no Ascendente (Orbe: 0°26', em movimento)\nPlutão em Octil no Ascendente (Orbe: 1°36', em movimento)\nSol em Octil no Descendente (Orbe: 0°04', em movimento)\nVênus em Conjunção com o Descendente (Orbe: 0°04', em movimento)\nMarte em Quadratura com o Descendente (Orbe: 0°11', em movimento)\nJúpiter em Octil no Descendente (Orbe: 0°26', em movimento)\nPlutão em Tri-Óctil no Descendente (Orbe: 1°36', em movimento)\nSol em Tri-Óctil no Meio do Céu (Orbe: 0°05', em movimento)\nVênus em Quadratura com o Meio do Céu (Orbe: 0°06', em aplicação)\nMC em oposição a Marte (Orbe: 0°12', em aplicação)\nMC em trí-óctilo com Júpiter (Orbe: 0°28', em aplicação)\nMC em óctilo com Plutão (Orbe: 1°34', em separação)\nIC em óctilo com o Sol (Orbe: 0°05', em aplicação)\nIC em quadratura com Vênus (Orbe: 0°06', em aplicação)\nIC em conjunção com Marte (Orbe: 0°12', em aplicação)\nIC em óctilo com Júpiter (Orbe: 0°28', em aplicação)\nIC em trí-óctilo com Plutão (Orbe: 1°34', em separação)\nNodo em trí-óctilo com Mercúrio (Orbe: 1°27', em separação)\nNodo em óctilo com Saturno (Orbe: 1°21', em aplicação)\nNodo em sextil com Quíron (Orbe: 0°15', em aplicação)\nQuíron em quadratura com a Lua (Orbe: 1°44', em formação)\nTrígono da Fortuna com a Lua (Orbe: 1°26', em formação)\nOposição da Fortuna com o Vértice (Orbe: 2°19', em separação)\nQuincúncio do Vértice com a Lua (Orbe: 2°02', em formação)\nOposição do Vértice com Lilith (Orbe: 2°23', em separação)",
    jogoGerado: [25, 2, 1, 21, 9, 24, 8, 11, 13, 5, 4, 6, 19, 3, 23],
    resultado: [1, 2, 4, 5, 6, 8, 9, 11, 12, 13, 18, 19, 21, 24, 25],
    obs: "",
  },
  {
    id: "h99", concurso: "3748", data: "29/07/2026", hora: "",
    textoMapa: "Sol em Leão 6°52', na 5ª Casa;\nLua em Aquário 11°17', na 11ª Casa;\nMercúrio em Câncer 18°06', na 4ª Casa;\nVênus em Virgem 21°58', na 7ª Casa;\nMarte em Gêmeos 21°42', na 3ª Casa;\nJúpiter em Leão 6°31', na 5ª Casa;\nSaturno em Áries 14°44', retrógrado, na 1ª Casa;\nUrano em Gêmeos 4°56', na 3ª Casa;\nNetuno em Áries 4°17', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°13', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 1°03', retrógrado, na 12ª Casa;\nLilith em Sagitário 24°46', na 10ª Casa;\nQuíron em Touro 0°51', na 2ª Casa;\nFortuna em Virgem. 17°20', no\nVértice da 6ª Casa em Gêmeos 27°41', no\nAscendente da 4ª Casa em Peixes 21°45'\nMeio do Céu em Sagitário 21°43'\n\n1ª Casa em Peixes 21°45'\n2ª Casa em Áries 19°35'\n3ª Casa em Touro 19°29'\n4ª Casa em Gêmeos 21°43'\n5ª Casa em Câncer 23°59'\n6ª Casa em Leão 23°54'\n7ª Casa em Virgem 21°45'\n8ª Casa em Libra 19°35'\n9ª Casa em Escorpião 19°29'\n10ª Casa em Sagitário 21°43'\n11ª Casa em Capricórnio 23°59'\n12ª Casa em Aquário 23°54'\n\nSol em octil com Vênus (Orbe: 0°05', Separando)\nSol em octil com Marte (Orbe: 0°09', Separando)\nSol em conjunção com Júpiter (Orbe: 0°21', Separando)\nSol em sextil com Urano (Orbe: 1°56', Separando)\nSol em trígono com Netuno (Orbe: 2°35', Separando)\nSol em oposição com Plutão (Orbe: 2°39', Separando)\nMercúrio em octil com Urano (Orbe: 1°49', Aplicando)\nVênus em quadratura com Marte (Orbe: 0°15', Separando)\nVênus em octil com Júpiter (Orbe: 0°27', Separando)\nVênus em trígono com Plutão (Orbe: 2°45', Separando)\nMarte em octil com Júpiter (Orbe: 0°11', Separando)\nMarte em trígono com Plutão (Orbe:\nJúpiter em sextil com Urano (Orbe: 1°34', Separando)\nJúpiter em trígono com Netuno (Orbe: 2°14', Separando)\nJúpiter em oposição a Plutão (Orbe: 2°17', Separando)\nUrano em sextil com Netuno (Orbe: 0°39', Separando)\nUrano em trígono com Plutão (Orbe: 0°43', Separando)\nNetuno em sextil com Plutão (Orbe: 0°03', Separando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°07', em movimento)\nAscendente em Oposição com Vênus (Orbe: 0°13', em movimento)\nAscendente em Quadratura com Marte (Orbe: 0°02', em movimento)\nAscendente em Tri-Octil com Júpiter (Orbe: 0°14', em movimento)\nAscendente em Octil com Plutão (Orbe: 2°31', em movimento)\nDescendente em Octil com o Sol (Orbe: 0°07', em movimento)\nDescendente em Conjunção com Vênus (Orbe: 0°13', em movimento)\nDescendente em Quadratura com Marte (Orbe: 0°02', em movimento)\nDescendente em Octil com Júpiter (Orbe: 0°14', em movimento)\nDescendente em Tri-Octil com Plutão (Orbe: 2°31', em movimento)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 0°08', em movimento) Meio do Céu\nem Quadratura com Vênus (Orbe: 0°14', em movimento)\nMC em oposição a Marte (Orbe: 0°00', em movimento)\nMC em tríoctilo com Júpiter (Orbe: 0°12', em movimento)\nMC em octil com Plutão (Orbe: 2°30', em movimento)\nIC em octil com o Sol (Orbe: 0°08', em movimento)\nIC em quadratura com Vênus (Orbe: 0°14', em movimento)\nIC em conjunção com Marte (Orbe: 0°00', em movimento)\nIC em octil com Júpiter (Orbe: 0°12', em movimento)\nIC em tríoctilo com Plutão (Orbe: 2°30', em movimento)\nNodo em tríoctilo com Mercúrio (Orbe: 2°03', em movimento)\nNodo em octil com Saturno (Orbe: 1°18', em movimento)\nNodo em sextil com Quíron (Orbe: 0°11', em movimento)\nLilith Sol em Tri-Octil (Orbe: 2°54', em movimento)\nLilith em Octil com a Lua (Orbe: 1°31', em movimento de separação)\nLilith em Quadratura com Vênus (Orbe: 2°48', em movimento)\nFortuna em Sextil com Mercúrio (Orbe: 0°46', em movimento)\nFortuna em Quincúncio com Saturno (Orbe: 2°35', em movimento de separação)\nFortuna em Tri-Octil com Plutão (Orbe: 1°53', em movimento)\nFortuna em Tri-Octil com Quíron (Orbe: 1°28', em movimento de separação)\nLua em Tri-Octil com o Vértice (Orbe: 1°23', em movimento de separação)\nLilith em Oposição com o Vértice (Orbe: 2°54', em movimento de separação)",
    jogoGerado: [25, 11, 9, 17, 1, 24, 22, 5, 21, 19, 2, 6, 13, 4, 7],
    resultado: [1, 4, 5, 6, 8, 9, 11, 13, 14, 15, 17, 19, 20, 22, 25],
    obs: "",
  },
  {
    id: "h100", concurso: "3749", data: "30/07/2026", hora: "",
    textoMapa: "Sol em Leão 7°49', na 5ª Casa;\nLua em Aquário 23°38', na 11ª Casa;\nMercúrio em Câncer 18°46', na 4ª Casa;\nVênus em Virgem 23°01', na 7ª Casa;\nMarte em Gêmeos 22°23', na 3ª Casa;\nJúpiter em Leão 6°44', na 5ª Casa;\nSaturno em Áries 14°44', retrógrado, na 1ª Casa;\nUrano em Gêmeos 4°58', na 3ª Casa;\nNetuno em Áries 4°16', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°11', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 0°59', retrógrado, na 12ª Casa;\nLilith em Sagitário 24°53', na 10ª Casa;\nQuíron em Touro 0°51', na 2ª Casa;\nFortuna em Virgem. 6°50', no\nVértice da 6ª Casa em Gêmeos 28°22', no\nAscendente da 4ª Casa em Peixes 22°39'\nMC em Sagitário 22°38'\n\n1ª Casa em Peixes 22°39'\n2ª Casa em Áries 20°30'\n3ª Casa em Touro 20°24'\n4ª Casa em Gêmeos 22°38'\n5ª Casa em Câncer 24°53'\n6ª Casa em Leão 24°47'\n7ª Casa em Virgem 22°39'\n8ª Casa em Libra 20°30'\n9ª Casa em Escorpião 20°24'\n10ª Casa em Sagitário 22°38'\n11ª Casa em Capricórnio 24°53'\n12ª Casa em Aquário 24°47'\n\nSol em octil com Vênus (Orbe: 0°11', Separando)\nSol em octil com Marte (Orbe: 0°26', Separando)\nSol em conjunção com Júpiter (Orbe: 1°05', Separando)\nSol em sextil com Urano (Orbe: 2°51', Separando)\nLua em quincúncio com Vênus (Orbe: 0°37', Separando)\nLua em trígono com Marte (Orbe: 1°14', Separando)\nMercúrio em octil com Urano (Orbe: 1°12', Aplicando)\nVênus em quadratura com Marte (Orbe: 0°37', Separando)\nVênus em octil com Júpiter (Orbe: 1°16', Separando)\nMarte em octil com Júpiter (Orbe: 0°39', Separando)\nJúpiter em sextil com Urano (Orbe: 1°45', Separando)\nJúpiter em trígono com Netuno (Orbe: 2°28', Separando)\nJúpiter Oposição de Plutão (Orbe: 2°32', Separando)\nUrano em sextil com Netuno (Orbe: 0°42', Separando)\nUrano em trígono com Plutão (Orbe: 0°46', Separando)\nNetuno em sextil com Plutão (Orbe: 0°04', Separando)\n\nSol em Tri-Óctil no Ascendente (Orbe: 0°10', em movimento)\nVênus em Oposição ao Ascendente (Orbe: 0°21', em movimento)\nMarte em Quadratura com o Ascendente (Orbe: 0°15', em movimento)\nJúpiter em Tri-Óctil no Ascendente (Orbe: 0°54', em movimento)\nLilith em Quadratura com o Ascendente (Orbe: 2°14', em movimento)\nSol em Octil no Descendente (Orbe: 0°10', em movimento)\nLua em Quincúncio no Descendente (Orbe: 0°59', em movimento)\nVênus em Conjunção com o Descendente (Orbe: 0°21', em movimento)\nMarte em Quadratura no Descendente (Orbe: 0°15', em movimento)\nJúpiter em Octil no Descendente (Orbe: 0°54', em movimento)\nLilith em Quadratura no Descendente (Orbe: 2°14', em movimento)\nSol em Tri-Óctil no Meio do Céu (Orbe: 0°11', em aplicação)\nMeio do Céu em sextil com a Lua (Orbe: 1°00', em aplicação)\nMeio do Céu em quadratura com Vênus (Orbe: 0°22', em aplicação)\nMeio do Céu em oposição a Marte (Orbe: 0°14', em separação)\nMeio do Céu em trígono com Júpiter (Orbe: 0°53', em separação)\nMeio do Céu em conjunção com Lilith (Orbe: 2°15', em aplicação)\nFundo do Céu em octil com o Sol (Orbe: 0°11', em aplicação)\nFundo do Céu em trígono com a Lua (Orbe: 1°00', em aplicação)\nFundo do Céu em quadratura com Vênus (Orbe: 0°22', em aplicação)\nFundo do Céu em conjunção com Marte (Orbe: 0°14', em separação)\nFundo do Céu em octil com Júpiter (Orbe: 0°53', em separação)\nFundo do Céu em oposição a Lilith (Orbe: 2°15', em aplicação)\nNodo em trígono com Mercúrio (Orbe: 2°46', em separação)\nNodo Octil Saturno (Orbe: 1°15', em movimento)\nNodo em sextil Quíron (Orbe: 0°08', em movimento)\nLilith em trígono com o Sol (Orbe: 2°03', em movimento)\nLilith em sextil com a Lua (Orbe: 1°14', em movimento)\nLilith em quadratura com Vênus (Orbe: 1°52', em movimento)\nLilith em oposição a Marte (Orbe: 2°29', em movimento)\nFortuna em quadratura com Urano (Orbe: 1°52', em movimento)\nFortuna em quincúncio com Netuno (Orbe: 2°34', em movimento)\nFortuna em quincúncio com Plutão (Orbe: 2°38', em movimento)\nVértice em trígono com o Nodo (Orbe: 2°37', em movimento)\nVértice em sextil com Quíron (Orbe: 2°29', em movimento)",
    jogoGerado: [25, 9, 17, 1, 24, 20, 2, 13, 21, 19, 11, 6, 7, 5, 14],
    resultado: [1, 2, 3, 7, 8, 9, 11, 12, 14, 17, 19, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h1785781036457", concurso: "3750", data: "31/07/2026", hora: "21",
    textoMapa: "Sol em Leão 8°47', na 5ª Casa;\nLua em Peixes 6°09', na 12ª Casa;\nMercúrio em Câncer 19°31', na 4ª Casa;\nVênus em Virgem 24°03', na 7ª Casa;\nMarte em Gêmeos 23°04', na 3ª Casa;\nJúpiter em Leão 6°57', na 5ª Casa;\nSaturno em Áries 14°43', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°00', na 3ª Casa;\nNetuno em Áries 4°15', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°10', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 0°56', retrógrado, na 12ª Casa;\nLilith em Sagitário 25°00', na 10ª Casa;\nQuíron em Touro 0°51', na 2ª Casa;\nFortuna em Leão. 26°10', no\nVértice da 6ª Casa em Gêmeos 29°06', no\nAscendente da 4ª Casa em Peixes 23°33'\nMC em Sagitário 23°32'\n\n1ª Casa em Peixes 23°33'\n2ª Casa em Áries 21°25'\n3ª Casa em Touro 21°18'\n4ª Casa em Gêmeos 23°32'\n5ª Casa em Câncer 25°46'\n6ª Casa em Leão 25°41'\n7ª Casa em Virgem 23°33'\n8ª Casa em Libra 21°25'\n9ª Casa em Escorpião 21°18'\n10ª Casa em Sagitário 23°32'\n11ª Casa em Capricórnio 25°46'\n12ª Casa em Aquário 25°41'\n\nSol em Quincúncio com a Lua (Orbe: 2°37', em movimento crescente)\nSol em Octil com Vênus (Orbe: 0°16', em movimento de separação)\nSol em Octil com Marte (Orbe: 0°43', em movimento de separação)\nSol em Conjunção com Júpiter (Orbe: 1°49', em movimento de separação)\nLua em Tri-Octil com Mercúrio (Orbe: 1°38', em movimento de separação)\nLua em Quincúncio com Júpiter (Orbe: 0°47', em movimento crescente)\nLua em Quadratura com Urano (Orbe: 1°09', em movimento de separação)\nMercúrio em Octil com Urano (Orbe: 0°29', em movimento crescente)\nVênus em Quadratura com Marte (Orbe: 0°59', em movimento de separação)\nVênus em Octil com Júpiter (Orbe: 2°05', em movimento de separação)\nMarte em Octil com Júpiter (Orbe: 1°06', em movimento de separação)\nJúpiter em Sextil com Urano (Orbe: 1°57', em movimento de separação)\nJúpiter em Trígono Netuno (Orbe: 2°42', Separando)\nJúpiter em Oposição a Plutão (Orbe: 2°47', Separando)\nUrano em Sextil com Netuno (Orbe: 0°45', Separando)\nUrano em Trígono com Plutão (Orbe: 0°50', Separando)\nNetuno em Sextil com Plutão (Orbe: 0°05', Separando)\n\nSol em Tri-Óctil no Ascendente (Orbe: 0°13', em movimento)\nVênus em Oposição ao Ascendente (Orbe: 0°30', em movimento)\nMarte em Quadratura com o Ascendente (Orbe: 0°29', em movimento)\nJúpiter em Tri-Óctil no Ascendente (Orbe: 1°35', em movimento)\nLilith em Quadratura com o Ascendente (Orbe: 1°26', em movimento)\nSol em Octil no Descendente (Orbe: 0°13', em movimento)\nVênus em Conjunção com o Descendente (Orbe: 0°30', em movimento)\nMarte em Quadratura com o Descendente (Orbe: 0°29', em movimento)\nJúpiter em Octil no Descendente (Orbe: 1°35', em movimento)\nLilith em Quadratura com o Descendente (Orbe: 1°26', em movimento)\nSol em Tri-Óctil no Meio do Céu (Orbe: 0°14', em movimento)\nVênus em Quadratura com o Meio do Céu (Orbe: 0°30', em aplicação)\nMC em oposição a Marte (Orbe: 0°28', em separação)\nMC em trí-óctilo com Júpiter (Orbe: 1°35', em separação)\nMC em conjunção com Lilith (Orbe: 1°27', em aplicação)\nIC em octil com o Sol (Orbe: 0°14', em aplicação)\nIC em quadratura com Vênus (Orbe: 0°30', em aplicação)\nIC em conjunção com Marte (Orbe: 0°28', em separação)\nIC em octil com Júpiter (Orbe: 1°35', em separação)\nIC em oposição a Lilith (Orbe: 1°27', em aplicação)\nNodo em octil com Saturno (Orbe: 1°13', em aplicação)\nNodo em sextil com Quíron (Orbe: 0°04', em aplicação)\nLilith em trí-óctilo com o Sol (Orbe: 1°12', em aplicação)\nLilith em quadratura com Vênus (Orbe: 0°56',\nLilith em oposição a Marte (Orbe: 1°56', em aplicação) Trígono\nde Lilith com Fortuna (Orbe: 1°10', em separação)\nQuincúncio de Ascendente com Fortuna (Orbe: 2°37', em separação)\nTrígono de Meio do Céu com Fortuna (Orbe: 2°38', em separação)\nSextil de IC com Fortuna (Orbe: 2°38', em separação)\nTrígono de Vertex com Nodo Norte (Orbe: 1°50', em aplicação)\nSextil de Vertex com Quíron (Orbe: 1°45', em aplicação)",
    jogoGerado: [2, 1, 15, 24, 11, 13, 9, 7, 21, 19, 25, 6, 17, 10, 18],
    resultado: [1, 2, 5, 6, 7, 11, 12, 13, 15, 18, 19, 20, 22, 24, 25],
    obs: "",
  },
  {
    id: "h1785781318375", concurso: "3751", data: "02/08/2026", hora: "11",
    textoMapa: "Sol em Leão 10°18', na 10ª Casa;\nLua em Peixes 26°25', na 6ª Casa;\nMercúrio em Câncer 20°54', na 9ª Casa;\nVênus em Virgem 25°41', na 12ª Casa;\nMarte em Gêmeos 24°08', na 8ª Casa;\nJúpiter em Leão 7°18', na 10ª Casa;\nSaturno em Áries 14°42', retrógrado, na 6ª Casa;\nUrano em Gêmeos 5°03', na 8ª Casa;\nNetuno em Áries 4°14', retrógrado, na 6ª Casa;\nPlutão em Aquário 4°08', retrógrado, na 4ª Casa;\nNodo Norte em Peixes 0°51', retrógrado, na 5ª Casa;\nLilith em Sagitário 25°10', na 2ª Casa;\nQuíron em Touro 0°51', na 6ª Casa;\nFortuna em Gêmeos 18°14', no\nVértice da 8ª Casa em Áries 13°22', no\nAscendente da 6ª Casa em Escorpião 2°07'\nMC em Câncer 22°43'\n\n1ª Casa em Escorpião 2°07'\n2ª Casa em Sagitário 4°51'\n3ª Casa em Sagitário 29°57'\n4ª Casa em Capricórnio 22°43'\n5ª Casa em Aquário 18°42'\n6ª Casa em Peixes 22°52'\n7ª Casa em Touro 2°07'\n8ª Casa em Gêmeos 4°51'\n9ª Casa em Gêmeos 29°57'\n10ª Casa em Câncer 22°43'\n11ª Casa em Leão 18°42'\n12ª Casa em Virgem 22°52'\n\nSol em tríodo octil com a Lua (Orbe: 1°06', Separando)\nSol em octil com Vênus (Orbe: 0°23', Separando)\nSol em octil com Marte (Orbe: 1°10', Separando)\nSol em conjunção com Júpiter (Orbe: 2°59', Separando)\nLua em oposição a Vênus (Orbe: 0°43', Separando)\nLua em quadratura com Marte (Orbe: 2°16', Separando)\nMercúrio em octil com Urano (Orbe: 0°51', Separando)\nVênus em quadratura com Marte (Orbe: 1°33', Separando)\nMarte em octil com Júpiter (Orbe: 1°49', Separando)\nJúpiter em sextil com Urano (Orbe: 2°15', Separando)\nUrano em sextil com Netuno (Orbe: 0°49', Separando)\nUrano em trígono com Plutão (Orbe: 0°55',\nNetuno em sextil com Plutão (Orbe: 0°05', em processo de separação )\n\nAscendente em Quincúncio com Urano (Orbe: 2°56', em movimento)\nAscendente em Quincúncio com Netuno (Orbe: 2°07', em movimento)\nAscendente em Quadratura com Plutão (Orbe: 2°01', em movimento)\nAscendente em Trígono com Nodo Norte (Orbe: 1°15', em movimento)\nAscendente em Oposição com Quíron (Orbe: 1°15', em movimento)\nDescendente em Quadratura com Plutão (Orbe: 2°01', em movimento)\nDescendente em Sextil com Nodo Norte (Orbe: 1°15', em movimento)\nDescendente em Conjunção com Quíron (Orbe: 1°15', em movimento)\nMeio do Céu em Conjunção com Mercúrio (Orbe: 1°48', em movimento)\nMeio do Céu em Sextil com Vênus (Orbe: 2°58', em movimento)\nMeio do Céu em Octil com Urano (Orbe: 2°39', em movimento)\nMeio do Céu em Quincúncio com Lilith (Orbe: 2°27', em aplicação)\nOposição ao IC com Mercúrio (Orbe: 1°48', em separação)\nTrígono ao IC com Vênus (Orbe: 2°58', em aplicação)\nQuincúncio ao IC com Marte (Orbe: 1°24', em aplicação)\nTrígono ao IC com Urano (Orbe: 2°39', em separação)\nNodo em Octil com Saturno (Orbe: 1°09', em aplicação)\nSextil do Nodo com Quíron (Orbe: 0°00', em separação)\nLilith em Trióctil com o Sol (Orbe: 0°07', em separação)\nLilith em Quadratura com a Lua (Orbe: 1°14', em separação)\nLilith em Quadratura com Vênus (Orbe: 0°31', em separação)\nLilith em Oposição com Marte (Orbe: 1°02', em aplicação)\nLilith em Trióctil com Júpiter (Orbe: 2°52', em aplicação)\nTrióctil da Fortuna Plutão (Orbe: 0°54', em conjunção)\nFortuna Octil Quíron (Orbe: 2°22', em separação)\nFortuna Tri-Octil Ascendente (Orbe: 1°06', em separação)\nFortuna Octil Descendente (Orbe: 1°06', em separação)\nVértice em conjunção com Saturno (Orbe: 1°20', em conjunção)\nVértice Octil Nodo (Orbe: 2°29', em conjunção)",
    jogoGerado: [1, 7, 16, 21, 9, 11, 6, 2, 13, 5, 15, 23, 10, 19, 17],
    resultado: [1, 2, 4, 7, 8, 9, 11, 12, 16, 17, 18, 19, 21, 23, 24],
    obs: "",
  },
  {
    id: "h1785784063127", concurso: "3752", data: "03/08/2026", hora: "21",
    textoMapa: "Sol em Leão 11°39', na 5ª Casa;\nLua em Áries 15°02', na 1ª Casa;\nMercúrio em Câncer 22°21', na 4ª Casa;\nVênus em Virgem 27°09', na 7ª Casa;\nMarte em Gêmeos 25°05', na 3ª Casa;\nJúpiter em Leão 7°37', na 5ª Casa;\nSaturno em Áries 14°41', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°06', na 3ª Casa;\nNetuno em Áries 4°13', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°06', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 0°47', retrógrado, na 12ª Casa;\nLilith em Sagitário 25°20', na 9ª Casa;\nQuíron em Touro 0°52', estacionário, na 2ª Casa;\nFortuna em Câncer. 22°52', no\nVértice da 4ª Casa em Câncer 2°09', no\nAscendente da 4ª Casa em Peixes 26°16'\nMeio do Céu em Sagitário 26°15'\n\n1ª Casa em Peixes 26°16'\n2ª Casa em Áries 24°08'\n3ª Casa em Touro 24°03'\n4ª Casa em Gêmeos 26°15'\n5ª Casa em Câncer 28°28'\n6ª Casa em Leão 28°23'\n7ª Casa em Virgem 26°16'\n8ª Casa em Libra 24°08'\n9ª Casa em Escorpião 24°03'\n10ª Casa em Sagitário 26°15'\n11ª Casa em Capricórnio 28°28'\n12ª Casa em Aquário 28°23'\n\nSol em octil com Vênus (Orbe: 0°29', Separando)\nSol em octil com Marte (Orbe: 1°34', Separando)\nLua em conjunção com Saturno (Orbe: 0°21', Separando)\nMercúrio em octil com Urano (Orbe: 2°15', Separando)\nVênus em quadratura com Marte (Orbe: 2°03', Separando)\nMarte em octil com Júpiter (Orbe: 2°27', Separando)\nJúpiter em sextil com Urano (Orbe: 2°31', Separando)\nUrano em sextil com Netuno (Orbe: 0°53', Separando)\nUrano em trígono com Plutão (Orbe: 0°59', Separando)\nNetuno em sextil com Plutão (Orbe: 0°06', Separando)\n\nSol em Tri-Octil no Ascendente (Orbe: 0°23', em movimento subsequente)\nVênus em Oposição ao Ascendente (Orbe: 0°53', em movimento subsequente)\nMarte em Quadratura com o Ascendente (Orbe: 1°10', em movimento subsequente)\nLilith em Quadratura com o Ascendente (Orbe: 0°55',\nem movimento subsequente) Sol em Octil no Descendente (Orbe: 0°23', em movimento subsequente)\nVênus em Conjunção com o Descendente (Orbe: 0°53', em movimento subsequente)\nMarte em Quadratura com o Descendente (Orbe: 1°10', em movimento subsequente)\nLilith em Quadratura com o Descendente (Orbe: 0°55', em movimento subsequente)\nSol em Tri-Octil no Meio do Céu (Orbe: 0°23', em movimento subsequente)\nVênus em Quadratura com o Meio do Céu (Orbe: 0°53', em movimento subsequente)\nMarte em Oposição ao Meio do Céu (Orbe: 1°10', em movimento subsequente)\nLilith em Conjunção com o Meio do Céu (Orbe: 0°55', em movimento subsequente) Separando)\nIC Octil Sol (Orbe: 0°23', Aplicando)\nIC Quadratura Vênus (Orbe: 0°53', Aplicando)\nIC Conjunção Marte (Orbe: 1°10', Separando)\nIC Oposição Lilith (Orbe: 0°55', Separando)\nNodo Octil Lua (Orbe: 0°44', Aplicando)\nNodo Octil Saturno (Orbe: 1°05', Aplicando)\nNodo Sextil Quíron (Orbe: 0°04', Separando)\nLilith Tri-Octil Sol (Orbe: 1°19', Separando)\nLilith Quincúncio Mercúrio (Orbe: 2°58', Aplicando)\nLilith Quadratura Vênus (Orbe: 1°48', Separando)\nLilith Oposição Marte (Orbe: 0°14', Aplicando)\nLilith Tri-Octil Júpiter (Orbe: 2°42', Aplicando)\nFortuna em conjunção com Mercúrio (Orbe: 0°30', Separando)\nFortuna em octil com Urano (Orbe: 2°46', Separando)\nFortuna em quincúncio com Lilith (Orbe: 2°27', Aplicando)\nVértice em quadratura com Netuno (Orbe: 2°03', Aplicando)\nVértice em quincúncio com Plutão (Orbe: 1°57', Aplicando)\nVértice em trígono com o Nodo Norte (Orbe: 1°21', Separando)\nVértice em sextil com Quíron (Orbe: 1°17', Separando)",
    jogoGerado: [11, 2, 17, 21, 7, 13, 1, 9, 3, 15, 24, 23, 16, 6, 10],
    resultado: [2, 3, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 24],
    obs: "",
  },
  {
    id: "h1754297753753", concurso: "3753", data: "04/08/2026", hora: "",
    textoMapa: "Sol em Leão 12°36', na 5ª Casa;\nLua em Áries 28°31', na 2ª Casa;\nMercúrio em Câncer 23°30', na 4ª Casa;\nVênus em Virgem 28°10', na 7ª Casa;\nMarte em Gêmeos 25°45', na 3ª Casa;\nJúpiter em Leão 7°50', na 5ª Casa;\nSaturno em Áries 14°40', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°08', na 3ª Casa;\nNetuno em Áries 4°12', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°04', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 0°44', retrógrado, na 12ª Casa;\nLilith em Sagitário 25°26', na 9ª Casa;\nQuíron em Touro 0°51', retrógrado, na 2ª Casa;\nFortuna em Câncer. 11°15', no\nVértice da 4ª Casa em Câncer 3°53', no\nAscendente da 4ª Casa em Peixes 27°10'\nMeio do Céu em Sagitário 27°10'\n\n1ª Casa em Peixes 27°10'\n2ª Casa em Áries 25°03'\n3ª Casa em Touro 24°57'\n4ª Casa em Gêmeos 27°10'\n5ª Casa em Câncer 29°22'\n6ª Casa em Leão 29°17'\n7ª Casa em Virgem 27°10'\n8ª Casa em Libra 25°03'\n9ª Casa em Escorpião 24°57'\n10ª Casa em Sagitário 27°10'\n11ª Casa em Capricórnio 29°22'\n12ª Casa em Aquário 29°17'\n\nSol em octil com Vênus (Orbe: 0°33', Separando)\nSol em octil com Marte (Orbe: 1°51', Separando)\nSol em trígono com Saturno (Orbe: 2°03', Aplicando)\nLua em quincúncio com Vênus (Orbe: 0°21', Separando)\nLua em sextil com Marte (Orbe: 2°45', Separando)\nVênus em quadratura com Marte (Orbe: 2°24', Separando)\nMarte em octil com Júpiter (Orbe: 2°54', Separando)\nJúpiter em sextil com Urano (Orbe: 2°42', Separando)\nUrano em sextil com Netuno (Orbe: 0°55', Separando)\nUrano em trígono com Plutão (Orbe: 1°03', Separando)\nNetuno em sextil com Plutão (Orbe: 0°07', Separando)\n\nSol em Tri-Óctil no Ascendente (Orbe: 0°26', em movimento subsequente)\nVênus em Oposição ao Ascendente (Orbe: 1°00', em movimento subsequente)\nMarte em Quadratura com o Ascendente (Orbe: 1°24', em movimento subsequente)\nLilith em Quadratura com o Ascendente (Orbe: 1°43', em movimento subsequente)\nSol em Octil no Descendente (Orbe: 0°26', em movimento subsequente)\nLua em Quincúncio no Descendente (Orbe: 1°21', em movimento subsequente)\nVênus em Conjunção com o Descendente (Orbe: 1°00', em movimento subsequente)\nMarte em Quadratura com o Descendente (Orbe: 1°24', em movimento subsequente)\nLilith em Quadratura com o Descendente (Orbe: 1°43', em movimento subsequente)\nSol em Tri-Óctil no Meio do Céu (Orbe: 0°26', em movimento subsequente)\nLua em Trígono no Meio do Céu (Orbe: 1°21', em movimento subsequente)\nVênus em Quadratura com o Meio do Céu (Orbe: 1°00', em movimento subsequente)\nMeio do Céu Oposição de Marte (Orbe: 1°24', Separando)\nMC em conjunção com Lilith (Orbe: 1°43', Separando)\nIC em octil com o Sol (Orbe: 0°26', Aplicando)\nIC em sextil com a Lua (Orbe: 1°21', Aplicando)\nIC em quadratura com Vênus (Orbe: 1°00', Aplicando)\nIC em conjunção com Marte (Orbe: 1°24', Separando)\nIC em oposição a Lilith (Orbe: 1°43', Separando)\nNodo em sextil com a Lua (Orbe: 2°12', Aplicando)\nNodo em quincúncio com Vênus (Orbe: 2°33', Aplicando)\nNodo em octil com Saturno (Orbe: 1°03', Aplicando)\nNodo em sextil com Quíron (Orbe: 0°07', Separando)\nLilith em tri-octil com o Sol (Orbe: 2°10', Separando)\nLilith em quincúncio com Mercúrio (Orbe: 1°56', em movimento)\nLilith em quadratura com Vênus (Orbe: 2°43', em movimento de separação)\nLilith em oposição a Marte (Orbe: 0°18', em movimento de separação)\nLilith em trí-óctilo com Júpiter (Orbe: 2°36', em movimento)\nQuíron em conjunção com a Lua (Orbe: 2°20', em movimento)\nQuíron em quincúncio com Vênus (Orbe: 2°41', em movimento)\nVértice em quadratura com Netuno (Orbe: 0°19', em movimento)\nVértice em quincúncio com Plutão (Orbe: 0°11', em movimento)",
    jogoGerado: [2, 24, 11, 13, 1, 9, 8, 21, 22, 25, 6, 10, 23, 12, 15],
    resultado: [1, 2, 4, 6, 8, 9, 14, 15, 16, 17, 19, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h1754297753754", concurso: "3754", data: "05/08/2026", hora: "",
    textoMapa: "Sol em Leão 13°34', na 5ª Casa;\nLua em Touro 12°17', na 2ª Casa;\nMercúrio em Câncer 24°44', na 4ª Casa;\nVênus em Virgem 29°11', na 7ª Casa;\nMarte em Gêmeos 26°25', na 3ª Casa;\nJúpiter em Leão 8°04', na 5ª Casa;\nSaturno em Áries 14°39', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°09', na 3ª Casa;\nNetuno em Áries 4°11', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°03', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 0°40', retrógrado, na 12ª Casa;\nLilith em Sagitário 25°33', na 9ª Casa;\nQuíron em Touro 0°51', retrógrado, na 2ª Casa;\nFortuna em Gêmeos. 29°20', no\nVértice da 4ª Casa em Câncer 6°47', no\nAscendente da 4ª Casa em Peixes 28°04'\nMeio do Céu em Sagitário 28°04'\n\n1ª Casa em Peixes 28°04'\n2ª Casa em Áries 25°57'\n3ª Casa em Touro 25°52'\n4ª Casa em Gêmeos 28°04'\n5ª Casa em Leão 0°16'\n6ª Casa em Virgem 0°11'\n7ª Casa em Virgem 28°04'\n8ª Casa em Libra 25°57'\n9ª Casa em Escorpião 25°52'\n10ª Casa em Sagitário 28°04'\n11ª Casa em Aquário 0°16'\n12ª Casa em Peixes 0°11'\n\nSol em quadratura com a Lua (Orbe: 1°16', em movimento subsequente)\nSol em octil com Vênus (Orbe: 0°36', em movimento subsequente)\nSol em octil com Marte (Orbe: 2°08', em movimento subsequente)\nSol em trígono com Saturno (Orbe: 1°05', em movimento subsequente)\nLua em trígono com Vênus (Orbe: 1°53', em movimento subsequente)\nLua em octil com Marte (Orbe: 0°52', em movimento subsequente)\nVênus em quadratura com Marte (Orbe: 2°45', em movimento subsequente)\nJúpiter em sextil com Urano (Orbe: 2°54', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 0°58', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 1°06', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°07', em movimento subsequente)\n\nSol em Tri-Óctil no Ascendente (Orbe: 0°30', em movimento)\nLua em Octil no Ascendente (Orbe: 0°46', em movimento)\nVênus em Oposição ao Ascendente (Orbe: 1°06', em movimento)\nMarte em Quadratura com o Ascendente (Orbe: 1°38', em movimento)\nLilith em Quadratura com o Ascendente (Orbe: 2°30', em movimento)\nSol em Octil no Descendente (Orbe: 0°30', em movimento)\nLua em Tri-Óctil no Descendente (Orbe: 0°46', em movimento)\nVênus em Conjunção com o Descendente (Orbe: 1°06', em movimento)\nMarte em Quadratura com o Descendente (Orbe: 1°38', em movimento)\nNodo em Quincúncio no Descendente (Orbe: 2°36', em movimento)\nLilith em Quadratura no Descendente (Orbe: 2°30', em movimento)\nQuíron em Quincúncio no Descendente (Orbe: 2°47', em movimento)\nMC Tri-Octil Sol (Orbe: 0°30', em movimento)\nMC Tri-Octil Lua (Orbe: 0°46', em movimento de separação)\nMC Quadratura Vênus (Orbe: 1°07', em movimento)\nMC Oposição Marte (Orbe: 1°38', em movimento de separação)\nMC Sextil Nodo (Orbe: 2°36', em movimento)\nMC Conjunção Lilith (Orbe: 2°30', em movimento de separação)\nMC Trígono Quíron (Orbe: 2°47', em movimento)\nIC Octil Sol (Orbe: 0°30', em movimento)\nIC Octil Lua (Orbe: 0°46', em movimento de separação)\nIC Quadratura Vênus (Orbe: 1°07', em movimento)\nIC Conjunção Marte (Orbe: 1°38', em movimento de separação)\nIC Trígono Nodo (Orbe: 2°36')\nOposição do IC a Lilith (Orbe: 2°30', Separando)\nSextil do IC com Quíron (Orbe: 2°47', Aplicando)\nQuincúncio do Nodo com Vênus (Orbe: 1°29', Aplicando)\nOctil do Nodo com Saturno (Orbe: 1°01', Aplicando)\nSextil do Nodo com Quíron (Orbe: 0°11', Separando)\nTri-Octil de Lilith com a Lua (Orbe: 1°44', Separando)\nQuincúncio de Lilith com Mercúrio (Orbe: 0°49', Aplicando)\nOposição de Lilith com Marte (Orbe: 0°52', Separando)\nTri-Octil de Lilith com Júpiter (Orbe: 2°29', Aplicando)\nQuincúncio de Quíron com Vênus (Orbe: 1°40', Aplicando)\nOctil da Fortuna com o Sol (Orbe: 0°46', Separando)\nOctil da Fortuna com a Lua (Orbe: 2°02')\nFortuna em quadratura com Vênus (Orbe: 0°09', em separação)\nFortuna em conjunção com Marte (Orbe: 2°54', em separação)\nFortuna em trígono com o Nodo Norte (Orbe: 1°19', em aplicação)\nFortuna em sextil com Quíron (Orbe: 1°30', em aplicação)\nFortuna em quadratura com o Ascendente (Orbe: 1°16', em separação)\nFortuna em oposição com o Meio do Céu (Orbe: 1°16', em separação)\nFortuna em quadratura com o Vértice (Orbe: 0°39', em separação)\nFortuna em conjunção com o Fundo do Céu (Orbe: 1°16', em separação)\nFortuna em quadratura com o Descendente (Orbe: 1°16', em separação)\nVértice em quadratura com Netuno (Orbe: 2°36', em separação)\nVértice em quincúncio com Plutão (Orbe: 2°44', em separação)",
    jogoGerado: [4, 23, 20, 3, 13, 1, 9, 11, 24, 25, 2, 5, 21, 22, 16],
    resultado: [1, 3, 4, 5, 7, 8, 11, 12, 13, 14, 16, 20, 21, 23, 25],
    obs: "",
  },
  {
    id: "h1754297753755", concurso: "3755", data: "06/08/2026", hora: "",
    textoMapa: "Sol em Leão 14°31', na 5ª Casa;\nLua em Touro 26°21', na 2ª Casa;\nMercúrio em Câncer 26°03', na 4ª Casa;\nVênus em Libra 0°12', na 7ª Casa;\nMarte em Gêmeos 27°06', na 3ª Casa;\nJúpiter em Leão 8°17', na 5ª Casa;\nSaturno em Áries 14°38', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°11', na 3ª Casa;\nNetuno em Áries 4°10', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°02', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 0°37', retrógrado, na 11ª Casa;\nLilith em Sagitário 25°40', na 9ª Casa;\nQuíron em Touro 0°51', retrógrado, na 2ª Casa;\nFortuna em Gêmeos. 17°08', no\nVértice da 3ª Casa em Câncer 13°53', no\nAscendente da 4ª Casa em Peixes 28°58'\nMeio do Céu em Sagitário 28°58'\n\n1ª Casa em Peixes 28°58'\n2ª Casa em Áries 26°52'\n3ª Casa em Touro 26°46'\n4ª Casa em Gêmeos 28°58'\n5ª Casa em Leão 1°10'\n6ª Casa em Virgem 1°05'\n7ª Casa em Virgem 28°58'\n8ª Casa em Libra 26°52'\n9ª Casa em Escorpião 26°46'\n10ª Casa em Sagitário 28°58'\n11ª Casa em Aquário 1°10'\n12ª Casa em Peixes 1°05'\n\nSol em octil com Vênus (Orbe: 0°40', Separando)\nSol em octil com Marte (Orbe: 2°25', Separando)\nSol em trígono com Saturno (Orbe: 0°06', Aplicando)\nLua em sextil com Mercúrio (Orbe: 0°18', Separando)\nUrano em sextil com Netuno (Orbe: 1°01', Separando)\nUrano em trígono com Plutão (Orbe: 1°09', Separando)\nNetuno em sextil com Plutão (Orbe: 0°08', Separando)\n\nAscendente em Tri-Octil com o Sol (Orbe: 0°33', em movimento)\nAscendente em Sextil com a Lua (Orbe: 2°36', em movimento)\nAscendente em Trígono com Mercúrio (Orbe: 2°55', em movimento)\nAscendente em Oposição com Vênus (Orbe: 1°13', em movimento)\nAscendente em Quadratura com Marte (Orbe: 1°52', em movimento)\nDescendente em Octil com o Sol (Orbe: 0°33', em movimento)\nDescendente em Trígono com a Lua (Orbe: 2°36', em movimento)\nDescendente em Sextil com Mercúrio (Orbe: 2°55', em movimento)\nDescendente em Conjunção com Vênus (Orbe: 1°13', em movimento)\nDescendente em Quadratura com Marte (Orbe: 1°52', em movimento)\nDescendente em Quincúncio com o Nodo (Orbe: 1°39', em movimento)\nDescendente em Quincúncio com Quíron (Orbe: 1°53', em aplicação)\nMC Tri-Octil Sol (Orbe: 0°33', em aplicação)\nMC Quincúncio Lua (Orbe: 2°36', em separação)\nMC Quincúncio Mercúrio (Orbe: 2°55', em separação)\nMC Quadratura Vênus (Orbe: 1°13', em aplicação)\nMC Oposição Marte (Orbe: 1°52', em separação)\nMC Sextil Nodo (Orbe: 1°39', em aplicação)\nMC Trígono Quíron (Orbe: 1°53', em aplicação)\nIC Octil Sol (Orbe: 0°33', em aplicação)\nIC Quadratura Vênus (Orbe: 1°13', em aplicação)\nIC Conjunção Marte (Orbe: 1°52', em separação)\nIC Trígono Nodo (Orbe: 1°39', em aplicação)\nIC Sextil Quíron (Orbe: 1°53', em aplicação)\nNodo Quincúncio Vênus (Orbe: 0°25', em movimento)\nNodo em Octil Saturno (Orbe: 0°59', em movimento)\nNodo em Sextil Quíron (Orbe: 0°14', em movimento)\nLilith em Quincúncio Lua (Orbe: 0°41', em movimento)\nLilith em Quincúncio Mercúrio (Orbe: 0°22', em movimento)\nLilith em Oposição Marte (Orbe: 1°25', em movimento)\nLilith em Tri-Octil Júpiter (Orbe: 2°23', em movimento)\nQuíron em Quincúncio Vênus (Orbe: 0°39', em movimento)\nFortuna em Sextil Sol (Orbe: 2°36', em movimento)\nFortuna em Sextil Saturno (Orbe: 2°30', em movimento)\nFortuna em Tri-Octil Plutão (Orbe: 1°53', em movimento)\nFortuna em Octil Quíron (Orbe: 1°17', em movimento)\nVertex Lua em Octil (Orbe: 2°31', Separando)\nVértice em Quadratura com Saturno (Orbe: 0°45', Aplicando)\nVértice em Tri-Nodo Octil (Orbe: 1°44', Aplicando)",
    jogoGerado: [11, 4, 23, 25, 2, 19, 1, 9, 5, 20, 13, 22, 16, 15, 21],
    resultado: [3, 4, 5, 7, 8, 9, 11, 12, 16, 18, 20, 22, 23, 24, 25],
    obs: "",
  },
  {
    id: "h1754297753756", concurso: "3756", data: "07/08/2026", hora: "",
    textoMapa: "Sol em Leão 15°29', na 5ª Casa;\nLua em Gêmeos 10°41', na 3ª Casa;\nMercúrio em Câncer 27°27', na 4ª Casa;\nVênus em Libra 1°12', na 7ª Casa;\nMarte em Gêmeos 27°46', na 3ª Casa;\nJúpiter em Leão 8°30', na 5ª Casa;\nSaturno em Áries 14°37', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°13', na 3ª Casa;\nNetuno em Áries 4°09', retrógrado, na 1ª Casa;\nPlutão em Aquário 4°00', retrógrado, na 11ª Casa;\nNodo Norte em Peixes 0°34', retrógrado, na 11ª Casa;\nLilith em Sagitário 25°47', na 9ª Casa;\nQuíron em Touro 0°51', retrógrado, na 2ª Casa;\nFortuna em Gêmeos. 4°40', no\nVértice da 3ª Casa em Virgem 5°32', no\nAscendente da 6ª Casa em Peixes 29°52'\nMeio do Céu em Sagitário 29°52'\n\n1ª Casa em Peixes 29°52'\n2ª Casa em Áries 27°46'\n3ª Casa em Touro 27°40'\n4ª Casa em Gêmeos 29°52'\n5ª Casa em Leão 2°05'\n6ª Casa em Virgem 1°59'\n7ª Casa em Virgem 29°52'\n8ª Casa em Libra 27°46'\n9ª Casa em Escorpião 27°40'\n10ª Casa em Sagitário 29°52'\n11ª Casa em Aquário 2°05'\n12ª Casa em Peixes 1°59'\n\nSol em octil com Vênus (Orbe: 0°42', Separando)\nSol em octil com Marte (Orbe: 2°43', Separando)\nSol em trígono com Saturno (Orbe: 0°52', Separando)\nLua em octil com Mercúrio (Orbe: 1°45', Aproximando)\nLua em sextil com Júpiter (Orbe: 2°11', Separando)\nVênus em oposição a Netuno (Orbe: 2°57', Aproximando)\nVênus em trígono com Plutão (Orbe: 2°48', Aproximando)\nUrano em sextil com Netuno (Orbe: 1°03', Separando)\nUrano em trígono com Plutão (Orbe: 1°12', Separando)\nNetuno em sextil com Plutão (Orbe: 0°08', Separando)\n\nTri-óctil do Sol no Ascendente (Orbe: 0°36', em movimento)\nTrígono de Mercúrio no Ascendente (Orbe: 2°25', em movimento)\nOposição de Vênus no Ascendente (Orbe: 1°19', em movimento)\nQuadratura de Marte no Ascendente (Orbe: 2°06', em movimento)\nOctil do Descendente com o Sol (Orbe: 0°36', em movimento)\nSextil de Mercúrio no Descendente (Orbe: 2°25', em movimento)\nConjunção de Vênus no Descendente (Orbe: 1°19', em movimento)\nQuadratura de Marte no Descendente (Orbe: 2°06', em movimento)\nQuincúncio do Descendente com o Nodo (Orbe: 0°41', em movimento)\nQuincúncio de Quíron no Descendente (Orbe: 0°58', em movimento)\nTri-óctil do Sol no Meio do Céu (Orbe: 0°36', em movimento)\nQuincúncio de Mercúrio no Meio do Céu (Orbe: 2°25', Separando)\nMC em quadratura com Vênus (Orbe: 1°19', Aplicando)\nMC em oposição a Marte (Orbe: 2°06', Separando)\nMC em sextil com o Nodo (Orbe: 0°41', Aplicando)\nMC em trígono com Quíron (Orbe: 0°58', Aplicando)\nIC em octil com o Sol (Orbe: 0°36', Aplicando)\nIC em quadratura com Vênus (Orbe: 1°19', Aplicando)\nIC em conjunção com Marte (Orbe: 2°06', Separando)\nIC em trígono com o Nodo (Orbe: 0°41', Aplicando)\nIC em sextil com Quíron (Orbe: 0°58', Aplicando)\nNodo em quincúncio com Vênus (Orbe: 0°37', Separando)\nNodo em trígono com Marte (Orbe: 2°48', Aplicando)\nNodo em octil com Saturno (Orbe: 0°57', Aplicando)\nNodo em sextil Quíron (Orbe: 0°17', Separando)\nLilith em Quincúncio com Mercúrio (Orbe: 1°40', Separando)\nLilith em Oposição com Marte (Orbe: 1°59', Separando)\nLilith em Tri-Octil com Júpiter (Orbe: 2°16', Aproximando)\nQuíron em Quincúncio com Vênus (Orbe: 0°20', Separando)\nFortuna em Conjunção com Urano (Orbe: 0°32', Aproximando)\nFortuna em Sextil com Netuno (Orbe: 0°30', Separando)\nFortuna em Trígono com Plutão (Orbe: 0°39', Separando)\nVértice em Quadratura com Urano (Orbe: 0°18', Separando)\nVértice em Quincúncio com Netuno (Orbe: 1°22', Separando)\nVértice em Quincúncio com Plutão (Orbe: 1°31', Separando)",
    jogoGerado: [3, 5, 15, 2, 11, 19, 1, 9, 13, 17, 21, 22, 23, 16, 25],
    resultado: [2, 3, 5, 6, 9, 10, 11, 13, 14, 15, 16, 19, 20, 21, 22],
    obs: "",
  },
  {
    id: "h1754297753757", concurso: "3757", data: "09/08/2026", hora: "11 horas",
    textoMapa: "Sol em Leão 17°00', na 10ª Casa;\nLua em Câncer 3°49', na 8ª Casa;\nMercúrio em Câncer 29°50', na 10ª Casa;\nVênus em Libra 2°47', na 12ª Casa;\nMarte em Gêmeos 28°49', na 8ª Casa;\nJúpiter em Leão 8°51', na 10ª Casa;\nSaturno em Áries 14°35', retrógrado, na 6ª Casa;\nUrano em Gêmeos 5°15', na 7ª Casa;\nNetuno em Áries 4°07', retrógrado, na 6ª Casa;\nPlutão em Aquário 3°58', retrógrado, na 4ª Casa;\nNodo Norte em Peixes 0°29', retrógrado, na 5ª Casa;\nLilith em Sagitário 25°57', na 2ª Casa;\nQuíron em Touro 0°51', retrógrado, na 6ª Casa;\nFortuna em Virgem. 27°21', no\nVértice da 11ª Casa em Áries 17°05', no\nAscendente da 6ª Casa em Escorpião 10°32'\nMC em Câncer 29°16'\n\n1ª Casa em Escorpião 10°32'\n2ª Casa em Sagitário 11°48'\n3ª Casa em Capricórnio 6°15'\n4ª Casa em Capricórnio 29°16'\n5ª Casa em Aquário 26°22'\n6ª Casa em Áries 1°51'\n7ª Casa em Touro 10°32'\n8ª Casa em Gêmeos 11°48'\n9ª Casa em Câncer 6°15'\n10ª Casa em Câncer 29°16'\n11ª Casa em Leão 26°22'\n12ª Casa em Libra 1°51'\n\nSol em octil com a Lua (Orbe: 1°48', Separando)\nSol em octil com Vênus (Orbe: 0°46', Separando)\nSol em trígono com Saturno (Orbe: 2°25', Separando)\nSol em trígono com Netuno (Orbe: 2°07', Aplicando)\nLua em quadratura com Vênus (Orbe: 1°02', Separando)\nLua em quadratura com Netuno (Orbe: 0°18', Aplicando)\nLua em quincúncio com Plutão (Orbe: 0°09', Aplicando)\nMercúrio em sextil com Vênus (Orbe: 2°57', Aplicando)\nVênus em trígono com Urano (Orbe: 2°28', Aplicando)\nVênus em oposição a Netuno (Orbe: 1°20', Aplicando)\nVênus em trígono com Plutão (Orbe: 1°11', Aplicando)\nUrano em sextil com Netuno (Orbe: 1°07', Separando)\nUrano em trígono com Plutão (Orbe: 1°17', Separando)\nSextil de Netuno com Plutão (Orbe: 0°09', Separando)\n\nAscendente em quadratura com Júpiter (Orbe: 1°41', Separando)\nAscendente em octil com Lilith (Orbe: 0°24', Aplicando)\nDescendente em quadratura com Júpiter (Orbe: 1°41', Separando)\nDescendente em trígono de octil com Lilith (Orbe: 0°24', Aplicando)\nMeio do Céu em conjunção com Mercúrio (Orbe: 0°33', Aplicando)\nMeio do Céu em quincúncio com Nodo Lunar (Orbe: 1°12', Aplicando)\nMeio do Céu em quadratura com Quíron (Orbe: 1°34', Aplicando)\nFundo do Céu em oposição com Mercúrio (Orbe: 0°33', Aplicando)\nFundo do Céu em quincúncio com Marte (Orbe: 0°27', Separando)\nFundo do Céu em quadratura com Quíron (Orbe: 1°34', Aplicando)\nNodo Lunar em quincúncio com Mercúrio (Orbe: 0°39', Aplicando)\nNodo Lunar em quincúncio com Vênus (Orbe: 2°17', Separando)\nNodo Lunar em trígono Marte (Orbe: 1°40', em movimento)\nNodo em Octil Saturno (Orbe: 0°54', em movimento)\nNodo em Sextil Quíron (Orbe: 0°21', em movimento)\nLilith em Oposição a Marte (Orbe: 2°51', em movimento)\nLilith em Tri-Octil Júpiter (Orbe: 2°06', em movimento)\nQuíron em Sextil Lua (Orbe: 2°58', em movimento)\nQuíron em Quadratura Mercúrio (Orbe: 1°00', em movimento)\nQuíron em Quincúncio Vênus (Orbe: 1°56', em movimento)\nQuíron em Sextil Marte (Orbe: 2°01', em movimento)\nFortuna em Sextil Mercúrio (Orbe: 2°28', em movimento)\nFortuna em Quadratura Marte (Orbe: 1°27', em movimento)\nFortuna em Quadratura Lilith (Orbe: 1°23', em movimento)\nFortuna em sextil com o Meio do Céu (Orbe: 1°55', em movimento)\nFortuna em oposição ao Vértice (Orbe: 2°38', em movimento)\nFortuna em trígono com o Fundo do Céu (Orbe: 1°55', em movimento)\nFortuna em trígono com o Descendente (Orbe: 1°48', em movimento)\nVértice em trígono com o Sol (Orbe: 0°05', em movimento)\nVértice em conjunção com Saturno (Orbe: 2°30', em movimento)\nVértice em octil com o Nodo (Orbe: 1°36', em movimento)",
    jogoGerado: [15, 2, 1, 17, 22, 24, 11, 23, 3, 9, 21, 20, 5, 8, 10],
    resultado: [1, 2, 3, 4, 6, 8, 11, 12, 15, 17, 20, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h1754297753758", concurso: "3758", data: "10/08/2026", hora: "",
    textoMapa: "Sol em Leão 18°22', na 5ª Casa;\nLua em Câncer 24°42', na 4ª Casa;\nMercúrio em Leão 2°07', na 4ª Casa;\nVênus em Libra 4°11', na 7ª Casa;\nMarte em Gêmeos 29°45', na 3ª Casa;\nJúpiter em Leão 9°10', na 5ª Casa;\nSaturno em Áries 14°33', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°17', na 3ª Casa;\nNetuno em Áries 4°06', retrógrado, na 1ª Casa;\nPlutão em Aquário 3°56', retrógrado, na 10ª Casa;\nNodo Norte em Peixes 0°24', retrógrado, na 11ª Casa;\nLilith em Sagitário 26°07', na 9ª Casa;\nQuíron em Touro 0°50', retrógrado, na 2ª Casa;\nFortuna em Áries. 26°15', no\nVértice da 1ª Casa em Sagitário 25°30', no\nAscendente da 9ª Casa em Áries 2°35'\nMeio do Céu em Capricórnio 2°35'\n\n1ª Casa em Áries 2°35'\n2ª Casa em Touro 0°28'\n3ª Casa em Gêmeos 0°23'\n4ª Casa em Câncer 2°35'\n5ª Casa em Leão 4°48'\n6ª Casa em Virgem 4°42'\n7ª Casa em Libra 2°35'\n8ª Casa em Escorpião 0°28'\n9ª Casa em Sagitário 0°23'\n10ª Casa em Capricórnio 2°35'\n11ª Casa em Aquário 4°48'\n12ª Casa em Peixes 4°42'\n\nSol em octil com Vênus (Orbe: 0°49', Separando)\nSol em trígono com Netuno (Orbe: 0°44', Aplicando)\nMercúrio em sextil com Vênus (Orbe: 2°03', Aplicando)\nMercúrio em trígono com Netuno (Orbe: 1°58', Aplicando)\nMercúrio em oposição a Plutão (Orbe: 1°49', Aplicando)\nVênus em trígono com Urano (Orbe: 1°06', Aplicando)\nVênus em oposição a Netuno (Orbe: 0°04', Separando)\nVênus em trígono com Plutão (Orbe: 0°14', Separando)\nUrano em sextil com Netuno (Orbe: 1°11', Separando)\nUrano em trígono com Plutão (Orbe: 1°21', Separando)\nNetuno em sextil com Plutão (Orbe: 0°09', Separando)\n\nAscendente em trígono com o Sol (Orbe: 0°46', em movimento)\nAscendente em trígono com Mercúrio (Orbe: 0°27', em movimento de separação)\nAscendente em oposição a Vênus (Orbe: 1°36', em movimento)\nAscendente em quadratura com Marte (Orbe: 2°49', em movimento de separação)\nAscendente em sextil com Urano (Orbe: 2°42', em movimento)\nAscendente em conjunção com Netuno (Orbe: 1°31', em movimento)\nAscendente em sextil com Plutão (Orbe: 1°21', em movimento)\nDescendente em octil com o Sol (Orbe: 0°46', em movimento)\nDescendente em sextil com Mercúrio (Orbe: 0°27', em movimento de separação)\nDescendente em conjunção com Vênus (Orbe: 1°36', em movimento)\nDescendente em quadratura com Marte (Orbe: 2°49', em movimento de separação)\nDescendente em trígono com Urano (Orbe: 2°42', em movimento)\nDescendente em oposição a Netuno (Orbe: 1°31', em movimento)\nDescendente em trígono com Plutão (Orbe: 1°21', em movimento)\nDescendente em quincúncio com o Nodo Norte (Orbe: 2°10', em movimento)\nDescendente em quincúncio com Quíron (Orbe: 1°44', em movimento)\nMeio do Céu em trígono-óctil com o Sol (Orbe: 0°46', em movimento)\nMeio do Céu em quincúncio com Mercúrio (Orbe: 0°27', em movimento)\nMeio do Céu em quadratura com Vênus (Orbe: 1°35', em movimento)\nMeio do Céu em oposição a Marte (Orbe: 2°49', em movimento)\nMeio do Céu em quincúncio com Urano (Orbe: 2°42', em movimento)\nMeio do Céu em quadratura com Netuno (Orbe: 1°30', em movimento)\nMeio do Céu em sextil com o Nodo Norte (Orbe: 2°10', em movimento)\nMeio do Céu em trígono com Quíron (Orbe: 1°44', Separando)\nIC Octil Sol (Orb: 0°46', Aplicando)\nIC Quadratura Vênus (Orb: 1°35', Aplicando)\nIC Conjunção Marte (Orb: 2°49', Separando)\nIC Quadratura Netuno (Orb: 1°30', Aplicando)\nIC Quincúncio Plutão (Orb: 1°21', Aplicando)\nIC Trígono Nodo (Orb: 2°10', Separando)\nIC Sextil Quíron (Orb: 1°44', Separando)\nNodo Quincúncio Mercúrio (Orb: 1°42', Separando)\nNodo Trígono Marte (Orb: 0°39', Aplicando)\nNodo Octil Saturno (Orb: 0°51', Aplicando)\nNodo Sextil Quíron (Orb: 0°25', Separando)\nLilith Quincúncio Lua (Orb: 1°24')\nLilith em tríoctilo com Júpiter (Orbe: 1°57', em processo de aplicação)\nQuíron em quadratura com Mercúrio (Orbe: 1°17', em processo de separação)\nQuíron em sextil com Marte (Orbe: 1°04', em processo de aplicação)\nFortuna em quadratura com a Lua (Orbe: 1°32', em processo de separação)\nFortuna em trígono com Lilith (Orbe: 0°07', em processo de separação)\nLua em quincúncio com o vértice (Orbe: 0°48', em processo de separação)\nJúpiter em tríoctilo com o vértice (Orbe: 1°20', em processo de separação)\nLilith em conjunção com o vértice (Orbe: 0°36', em processo de aplicação)",
    jogoGerado: [13, 25, 1, 24, 21, 9, 4, 20, 11, 12, 2, 10, 3, 15, 16],
    resultado: [1, 3, 4, 5, 8, 9, 11, 12, 13, 14, 17, 18, 20, 24, 25],
    obs: "",
  },
  {
    id: "h1754297753759", concurso: "3759", data: "11/08/2026", hora: "",
    textoMapa: "Sol em Leão 19°19', na 5ª Casa;\nLua em Leão 9°22', na 5ª Casa;\nMercúrio em Leão 3°49', na 4ª Casa;\nVênus em Libra 5°10', na 7ª Casa;\nMarte em Câncer 0°25', na 3ª Casa;\nJúpiter em Leão 9°23', na 5ª Casa;\nSaturno em Áries 14°31', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°19', na 3ª Casa;\nNetuno em Áries 4°05', retrógrado, na 1ª Casa;\nPlutão em Aquário 3°55', retrógrado, na 10ª Casa;\nNodo Norte em Peixes 0°21', retrógrado, na 11ª Casa;\nLilith em Sagitário 26°13', na 9ª Casa;\nQuíron em Touro 0°50', retrógrado, na 1ª Casa;\nFortuna em Áries. 13°26', no\nVértice da 1ª Casa em Sagitário 27°27', no\nAscendente da 9ª Casa em Áries 3°29'\nMeio do Céu em Capricórnio 3°29'\n\n1ª Casa em Áries 3°29'\n2ª Casa em Touro 1°22'\n3ª Casa em Gêmeos 1°17'\n4ª Casa em Câncer 3°29'\n5ª Casa em Leão 5°42'\n6ª Casa em Virgem 5°36'\n7ª Casa em Libra 3°29'\n8ª Casa em Escorpião 1°22'\n9ª Casa em Sagitário 1°17'\n10ª Casa em Capricórnio 3°29'\n11ª Casa em Aquário 5°42'\n12ª Casa em Peixes 5°36'\n\nSol em octil com Vênus (Orbe: 0°50', Separando)\nSol em trígono com Netuno (Orbe: 0°14', Separando)\nLua em conjunção com Júpiter (Orbe: 0°00', Aproximando)\nMercúrio em sextil com Vênus (Orbe: 1°20', Aproximando)\nMercúrio em sextil com Urano (Orbe: 1°29', Aproximando)\nMercúrio em trígono com Netuno (Orbe: 0°15', Aproximando)\nMercúrio em oposição a Plutão (Orbe: 0°05', Aproximando)\nVênus em trígono com Urano (Orbe: 0°08', Aproximando)\nVênus em oposição a Netuno (Orbe: 1°04', Separando)\nVênus em trígono com Plutão (Orbe: 1°15', Separando)\nUrano em sextil com Netuno (Orbe: 1°13', Separando)\nUrano em trígono com Plutão (Orbe: 1°24', Separando)\nNetuno em sextil com Plutão (Orbe: 0°10', separando-se)\n\nAscendente em trígono com o Sol (Orbe: 0°50', em movimento subsequente)\nAscendente em trígono com Mercúrio (Orbe: 0°19', em movimento subsequente)\nAscendente em oposição a Vênus (Orbe: 1°40', em movimento subsequente)\nAscendente em sextil com Urano (Orbe: 1°49', em movimento subsequente)\nAscendente em conjunção com Netuno (Orbe: 0°35', em movimento subsequente)\nAscendente em sextil com Plutão (Orbe: 0°25', em movimento subsequente)\nDescendente em octil com o Sol (Orbe: 0°50', em movimento subsequente)\nDescendente em sextil com Mercúrio (Orbe: 0°19', em movimento subsequente)\nDescendente em conjunção com Vênus (Orbe: 1°40', em movimento subsequente)\nDescendente em trígono com Urano (Orbe: 1°49', em movimento subsequente)\nDescendente em oposição a Netuno (Orbe: 0°35', em movimento subsequente)\nDescendente em trígono com Plutão (Orbe: 0°25', em aplicação)\nDescendente em Quincúncio com Quíron (Orbe: 2°39', em separação)\nMeio do Céu em Tri-Óctil com o Sol (Orbe: 0°49', em aplicação)\nMeio do Céu em Quincúncio com Mercúrio (Orbe: 0°19', em aplicação)\nMeio do Céu em Quadratura com Vênus (Orbe: 1°40', em aplicação)\nMeio do Céu em Quincúncio com Urano (Orbe: 1°49', em aplicação)\nMeio do Céu em Quadratura com Netuno (Orbe: 0°35', em aplicação)\nMeio do Céu em Trígono com Quíron (Orbe: 2°39', em separação)\nFundo do Céu em Octil com o Sol (Orbe: 0°49', em aplicação)\nFundo do Céu em Quadratura com Vênus (Orbe: 1°40', em aplicação)\nFundo do Céu em Quadratura com Netuno (Orbe: 0°35', em aplicação)\nFundo do Céu em Quincúncio com Plutão (Orbe: 0°25', em aplicação)\nFundo do Céu em Sextil com Quíron (Orbe: 2°39', em separação)\nNodo Trígono com Marte (Orbe: 0°03', Separando)\nNodo em Octil com Saturno (Orbe: 0°50', Aplicando)\nNodo em Sextil com Quíron (Orbe: 0°28', Separando)\nLilith em Tri-Octil com a Lua (Orbe: 1°51', Aplicando)\nLilith em Tri-Octil com Júpiter (Orbe: 1°50', Aplicando)\nQuíron em Quadratura com Mercúrio (Orbe: 2°59', Separando)\nQuíron em Sextil com Marte (Orbe: 0°24', Aplicando)\nConjunção com a Fortuna e Saturno (Orbe: 1°05', Aplicando)\nFortuna em Octil com o Nodo (Orbe: 1°55', Aplicando)\nOposição ao Vértice com Marte (Orbe: 2°58', Aplicando)\nSextil do Vértice com o Nodo (Orbe: 2°54', Aplicando)\nConjunção do Vértice com Lilith (Orbe: 1°13', Separando)",
    jogoGerado: [12, 13, 14, 25, 1, 24, 5, 9, 2, 6, 10, 4, 21, 15, 11],
    resultado: [1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17, 24, 25],
    obs: "",
  },
  {
    id: "h1754297753760", concurso: "3760", data: "12/08/2026", hora: "",
    textoMapa: "Sol em Leão 20°17', na 5ª Casa;\nLua em Leão 23°51', na 5ª Casa;\nMercúrio em Leão 5°35', na 4ª Casa;\nVênus em Libra 6°09', na 7ª Casa;\nMarte em Câncer 1°05', na 3ª Casa;\nJúpiter em Leão 9°36', na 5ª Casa;\nSaturno em Áries 14°30', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°20', na 3ª Casa;\nNetuno em Áries 4°04', retrógrado, na 12ª Casa;\nPlutão em Aquário 3°54', retrógrado, na 10ª Casa;\nNodo Norte em Peixes 0°18', retrógrado, na 11ª Casa;\nLilith em Sagitário 26°20', na 9ª Casa;\nQuíron em Touro 0°49', retrógrado, na 1ª Casa;\nFortuna em Áries. 0°49', no\nVértice da 12ª Casa em Sagitário 28°47', no\nAscendente da 9ª Casa em Áries 4°23'\nMeio do Céu em Capricórnio 4°24'\n\n1ª Casa em Áries 4°23'\n2ª Casa em Touro 2°16'\n3ª Casa em Gêmeos 2°11'\n4ª Casa em Câncer 4°24'\n5ª Casa em Leão 6°37'\n6ª Casa em Virgem 6°31'\n7ª Casa em Libra 4°23'\n8ª Casa em Escorpião 2°16'\n9ª Casa em Sagitário 2°11'\n10ª Casa em Capricórnio 4°24'\n11ª Casa em Aquário 6°37'\n12ª Casa em Peixes 6°31'\n\nSol em octil com Vênus (Orbe: 0°51', Separando)\nSol em trígono com Netuno (Orbe: 1°12', Separando)\nLua em octil com Vênus (Orbe: 2°42', Separando)\nMercúrio em sextil com Vênus (Orbe: 0°34', Aplicando)\nMercúrio em sextil com Urano (Orbe: 0°14', Separando)\nMercúrio em trígono com Netuno (Orbe: 1°30', Separando)\nMercúrio em oposição a Plutão (Orbe: 1°40', Separando)\nVênus em trígono com Urano (Orbe: 0°48', Separando)\nVênus em oposição a Netuno (Orbe: 2°04', Separando)\nVênus em trígono com Plutão (Orbe: 2°15', Separando)\nMarte em quadratura com Netuno (Orbe: 2°59', Aplicando)\nMarte em quincúncio com Plutão (Orbe: 2°48')\nUrano em sextil com Netuno (Orbe: 1°16', Separando)\nUrano em trígono com Plutão (Orbe: 1°26', Separando)\nNetuno em sextil com Plutão (Orbe: 0°10', Separando)\n\nAscendente em tríodo-óctil com o Sol (Orbe: 0°53', em movimento subsequente)\nAscendente em trígono com Mercúrio (Orbe: 1°11', em movimento subsequente)\nAscendente em oposição a Vênus (Orbe: 1°45', em movimento subsequente)\nAscendente em sextil com Urano (Orbe: 0°57', em movimento subsequente)\nAscendente em conjunção com Netuno (Orbe: 0°19', em movimento subsequente)\nAscendente em sextil com Plutão (Orbe: 0°29', em movimento subsequente)\nDescendente em octil com o Sol (Orbe: 0°53', em movimento subsequente)\nDescendente em sextil com Mercúrio (Orbe: 1°11', em movimento subsequente)\nDescendente em conjunção com Vênus (Orbe: 1°45', em movimento subsequente)\nDescendente em trígono com Urano (Orbe: 0°57', em movimento subsequente)\nDescendente em oposição a Netuno (Orbe: 0°19', em movimento subsequente)\nDescendente em trígono com Plutão (Orbe: 0°29', Separando)\nMC Tri-Octil Sol (Orbe: 0°53', Aplicando)\nMC Quincúncio Mercúrio (Orbe: 1°10', Aplicando)\nMC Quadratura Vênus (Orbe: 1°44', Aplicando)\nMC Quincúncio Urano (Orbe: 0°56', Aplicando)\nMC Quadratura Netuno (Orbe: 0°19', Separando)\nIC Octil Sol (Orbe: 0°53', Aplicando)\nIC Quadratura Vênus (Orbe: 1°44', Aplicando)\nIC Quadratura Netuno (Orbe: 0°19', Separando)\nIC Quincúncio Plutão (Orbe: 0°30', Separando)\nNodo Trígono Marte (Orbe: 0°46', Separando)\nNodo Octil Saturno (Orbe: 0°48', Aplicando)\nNodo Sextil Quíron (Orbe: 2°02', em movimento)\nLilith em trígono com a Lua (Orbe: 2°28', em movimento)\nLilith em trígono com Júpiter (Orbe: 1°44', em movimento)\nQuíron em sextil com Marte (Orbe: 0°15', em movimento)\nFortuna em quadratura com Marte (Orbe: 0°16', em movimento)\nFortuna em conjunção com o Vértice (Orbe: 0°49', em movimento)\nVértice em oposição a Marte (Orbe: 2°18', em movimento)\nVértice em sextil com o Nodo Norte (Orbe: 1°31', em movimento)\nVértice em conjunção com Lilith (Orbe: 2°26', em movimento)\nVértice em trígono com Quíron (Orbe: 2°02', em movimento)",
    jogoGerado: [9, 8, 13, 21, 1, 24, 4, 5, 2, 3, 6, 10, 14, 15, 17],
    resultado: [2, 4, 5, 8, 9, 10, 11, 13, 14, 16, 19, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h1786656967357", concurso: "3761", data: "13/08/2026", hora: "21",
    textoMapa: "Sol em Leão 21°14', na 5ª Casa;\nLua em Virgem 8°03', na 6ª Casa;\nMercúrio em Leão 7°23', na 4ª Casa;\nVênus em Libra 7°07', na 7ª Casa;\nMarte em Câncer 1°44', na 3ª Casa;\nJúpiter em Leão 9°49', na 5ª Casa;\nSaturno em Áries 14°28', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°22', na 3ª Casa;\nNetuno em Áries 4°03', retrógrado, na 12ª Casa;\nPlutão em Aquário 3°52', retrógrado, na 10ª Casa;\nNodo Norte em Peixes 0°15', retrógrado, na 11ª Casa;\nLilith em Sagitário 26°27', na 9ª Casa;\nQuíron em Touro 0°49', retrógrado, na 1ª Casa;\nFortuna em Peixes. 18°29', no\nVértice da 12ª Casa em Sagitário 29°49', no\nAscendente da 9ª Casa em Áries 5°18'\nMeio do Céu em Capricórnio 5°18'\n\n1ª Casa em Áries 5°18'\n2ª Casa em Touro 3°10'\n3ª Casa em Gêmeos 3°05'\n4ª Casa em Câncer 5°18'\n5ª Casa em Leão 7°31'\n6ª Casa em Virgem 7°25'\n7ª Casa em Libra 5°18'\n8ª Casa em Escorpião 3°10'\n9ª Casa em Sagitário 3°05'\n10ª Casa em Capricórnio 5°18'\n11ª Casa em Aquário 7°31'\n12ª Casa em Peixes 7°25'\n\nSol em octil com Vênus (Orbe: 0°52', Separando)\nSol em trígono com Netuno (Orbe: 2°11', Separando)\nLua em quadratura com Urano (Orbe: 2°41', Separando)\nMercúrio em sextil com Vênus (Orbe: 0°16', Separando)\nMercúrio em conjunção com Júpiter (Orbe: 2°25', Aproximando)\nMercúrio em sextil com Urano (Orbe: 2°01', Separando)\nVênus em sextil com Júpiter (Orbe: 2°42', Aproximando)\nVênus em trígono com Urano (Orbe: 1°44', Separando)\nMarte em quadratura com Netuno (Orbe: 2°18', Aproximando)\nMarte em quincúncio com Plutão (Orbe: 2°07', Aproximando)\nUrano em sextil com Netuno (Orbe: 1°18', Separando)\nUrano em trígono com Plutão (Orbe: 1°29',\nNetuno em sextil com Plutão (Orbe: 0°10', em processo de separação )\n\nAscendente em tríctil com o Sol (Orbe: 0°56', em movimento)\nAscendente em quincúncio com a Lua (Orbe: 2°45', em movimento)\nAscendente em trígono com Mercúrio (Orbe: 2°05', em movimento)\nAscendente em oposição a Vênus (Orbe: 1°49', em movimento)\nAscendente em sextil com Urano (Orbe: 0°04', em movimento)\nAscendente em conjunção com Netuno (Orbe: 1°14', em movimento)\nAscendente em sextil com Plutão (Orbe: 1°25', em movimento) Descendente\nem octil com o Sol (Orbe: 0°56', em movimento)\nDescendente em sextil com Mercúrio (Orbe: 2°05', em movimento)\nDescendente em conjunção com Vênus (Orbe: 1°49', em movimento)\nDescendente em trígono com Urano (Orbe: 0°04', em movimento)\nDescendente em oposição a Netuno (Orbe: 1°14', Separando)\nDescendente em trígono com Plutão (Orbe: 1°25', Separando)\nMeio do Céu em trígono com o Sol (Orbe: 0°56', Aplicando)\nMeio do Céu em trígono com a Lua (Orbe: 2°45', Aplicando) Meio do Céu\nem quincúncio com Mercúrio (Orbe: 2°05', Aplicando)\nMeio do Céu em quadratura com Vênus (Orbe: 1°48', Aplicando)\nMeio do Céu em quincúncio com Urano (Orbe: 0°03', Aplicando) Meio do Céu\nem quadratura com Netuno (Orbe: 1°15', Separando)\nFundo do Céu em óctil com o Sol (Orbe: 0°56', Aplicando)\nFundo do Céu em sextil com a Lua (Orbe: 2°45', Aplicando) Fundo\ndo Céu em quadratura com Vênus (Orbe: 1°48', Aplicando)\nFundo do Céu em quadratura com Netuno (Orbe: 1°15', Separando)\nFundo do Céu em quincúncio com Plutão (Orbe: 1°25',\nNodo em trígono com Marte (Orbe: 1°29', Separando) Nodo\nem octil com Saturno (Orbe: 0°47', Aplicando)\nNodo em sextil com Quíron (Orbe: 0°33', Separando)\nLilith em trígono com Júpiter (Orbe: 1°37', Aplicando)\nQuíron em sextil com Marte (Orbe: 0°55', Separando)\nFortuna em quincúncio com o Sol (Orbe: 2°45', Aplicando)\nFortuna em octil com Plutão (Orbe: 0°23', Aplicando)\nFortuna em octil com Quíron (Orbe: 2°39', Separando)\nVértice em oposição a Marte (Orbe: 1°55', Aplicando)\nVértice em sextil com o Nodo (Orbe: 0°26', Aplicando)\nVértice em trígono com Quíron (Orbe: 1°00', Aplicando)",
    jogoGerado: [13, 21, 1, 24, 9, 17, 6, 15, 25, 18, 2, 4, 23, 11, 12],
    resultado: [1, 3, 6, 9, 12, 13, 14, 15, 16, 17, 18, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h1786741827095", concurso: "3762", data: "14/08/2026", hora: "21",
    textoMapa: "Sol em Leão 22°12', na 5ª Casa;\nLua em Virgem 21°54', na 6ª Casa;\nMercúrio em Leão 9°15', na 5ª Casa;\nVênus em Libra 8°05', na 7ª Casa;\nMarte em Câncer 2°24', na 3ª Casa;\nJúpiter em Leão 10°02', na 5ª Casa;\nSaturno em Áries 14°26', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°23', na 3ª Casa;\nNetuno em Áries 4°02', retrógrado, na 12ª Casa;\nPlutão em Aquário 3°51', retrógrado, na 10ª Casa;\nNodo Norte em Peixes 0°12', retrógrado, na 11ª Casa;\nLilith em Sagitário 26°34', na 9ª Casa;\nQuíron em Touro 0°48', retrógrado, na 1ª Casa;\nFortuna em Peixes. 6°29', no\nVértice da 11ª Casa em Capricórnio 0°41', no\nAscendente da 9ª Casa em Áries 6°12'\nMeio do Céu em Capricórnio 6°12'\n\n1ª Casa em Áries 6°12'\n2ª Casa em Touro 4°04'\n3ª Casa em Gêmeos 3°58'\n4ª Casa em Câncer 6°12'\n5ª Casa em Leão 8°26'\n6ª Casa em Virgem 8°20'\n7ª Casa em Libra 6°12'\n8ª Casa em Escorpião 4°04'\n9ª Casa em Sagitário 3°58'\n10ª Casa em Capricórnio 6°12'\n11ª Casa em Aquário 8°26'\n12ª Casa em Peixes 8°20'\n\nSol em octil com Vênus (Orbe: 0°52', separando)\nLua em octil com Mercúrio (Orbe: 2°20', aplicando)\nMercúrio em sextil com Vênus (Orbe: 1°10', separando)\nMercúrio em conjunção com Júpiter (Orbe: 0°47', aplicando)\nVênus em sextil com Júpiter (Orbe: 1°57', aplicando)\nVênus em trígono com Urano (Orbe: 2°41', separando)\nMarte em quadratura com Netuno (Orbe: 1°37', aplicando)\nMarte em quincúncio com Plutão (Orbe: 1°26', aplicando)\nUrano em sextil com Netuno (Orbe: 1°21', separando)\nUrano em trígono com Plutão (Orbe: 1°32', separando)\nNetuno em sextil com Plutão (Orbe: 0°10', separando)\n\nAscendente em tríctil com o Sol (Orbe: 1°00', em movimento crescente)\nAscendente em oposição a Vênus (Orbe: 1°52', em movimento crescente)\nAscendente em sextil com Urano (Orbe: 0°48', em movimento de separação)\nAscendente em conjunção com Netuno (Orbe: 2°09', em movimento de separação)\nAscendente em sextil com Plutão (Orbe: 2°20', em movimento de separação) Descendente\nem tríctil com o Sol (Orbe: 1°00', em movimento crescente)\nDescendente em conjunção com Vênus (Orbe: 1°52', em movimento crescente)\nDescendente em trígono com Urano (Orbe: 0°48', em movimento de separação)\nDescendente em oposição a Netuno (Orbe: 2°09', em movimento de separação)\nDescendente em trígono com Plutão (Orbe: 2°20', em movimento de separação)\nMeio do Céu em tríctil com o Sol (Orbe: 0°59', em movimento crescente)\nMeio do Céu em quadratura com Vênus (Orbe: 1°52', em movimento)\nMC em quincúncio com Urano (Orbe: 0°49', em movimento de separação)\nMC em quadratura com Netuno (Orbe: 2°10', em movimento de separação)\nIC em octil com o Sol (Orbe: 0°59', em movimento)\nIC em quadratura com Vênus (Orbe: 1°52', em movimento)\nIC em quadratura com Netuno (Orbe: 2°10', em movimento de separação)\nIC em quincúncio com Plutão (Orbe: 2°21', em movimento de separação)\nNodo em trígono com Marte (Orbe: 2°12', em movimento de separação)\nNodo em octil com Saturno (Orbe: 0°45', em movimento)\nNodo em sextil com Quíron (Orbe: 0°36', em movimento de separação)\nLilith em trígono com Mercúrio (Orbe: 2°18', em movimento)\nLilith em trígono com Júpiter (Orbe: 1°31', em movimento)\nQuíron em sextil com Marte (Orbe: 1°35', Separando)\nFortuna em Quincúncio com Mercúrio (Orbe: 2°45', Aplicando)\nFortuna em Quincúncio com Vênus (Orbe: 1°35', Aplicando)\nFortuna em Quadratura com Urano (Orbe: 1°06', Separando)\nFortuna em Sextil com o Meio do Céu (Orbe: 0°16', Separando)\nFortuna em Trígono com o Fundo do Céu (Orbe: 0°16', Separando)\nFortuna em Quincúncio com o Descendente (Orbe: 0°17', Separando)\nVértice em Oposição com Marte (Orbe: 1°43', Aplicando)\nVértice em Sextil com o Nodo Norte (Orbe: 0°28', Separando)\nVértice em Trígono com Quíron (Orbe: 0°07', Aplicando)",
    jogoGerado: [13, 15, 21, 25, 2, 4, 1, 9, 5, 10, 22, 24, 6, 23, 11],
    resultado: [1, 2, 3, 4, 5, 6, 9, 10, 13, 16, 18, 21, 22, 23, 25],
    obs: "",
  },
  {
    id: "h1787004231573", concurso: "3763", data: "16/08/2026", hora: "11",
    textoMapa: "Sol em Leão 23°43', na 10ª Casa;\nLua em Libra 13°03', na 12ª Casa;\nMercúrio em Leão 12°16', na 10ª Casa;\nVênus em Libra 9°35', na 11ª Casa;\nMarte em Câncer 3°26', na 8ª Casa;\nJúpiter em Leão 10°23', na 10ª Casa;\nSaturno em Áries 14°23', retrógrado, na 6ª Casa;\nUrano em Gêmeos 5°25', na 7ª Casa;\nNetuno em Áries 4°00', retrógrado, na 5ª Casa;\nPlutão em Aquário 3°49', retrógrado, na 3ª Casa;\nNodo Norte em Peixes 0°07', retrógrado, na 4ª Casa;\nLilith em Sagitário 26°44', na 2ª Casa;\nQuíron em Touro 0°47', retrógrado, na 6ª Casa;\nFortuna em Capricórnio. 7°56', no\nVértice da 2ª Casa em Áries 20°48', no\nAscendente da 6ª Casa em Escorpião 18°37'\nMeio do Céu em Leão 5°57'\n\n1ª Casa em Escorpião 18°37'\n2ª Casa em Sagitário 18°31'\n3ª Casa em Capricórnio 12°30'\n4ª Casa em Aquário 5°57'\n5ª Casa em Peixes 4°15'\n6ª Casa em Áries 10°49'\n7ª Casa em Touro 18°37'\n8ª Casa em Gêmeos 18°31'\n9ª Casa em Câncer 12°30'\n10ª Casa em Leão 5°57'\n11ª Casa em Virgem 4°15'\n12ª Casa em Libra 10°49'\n\nSol em octil com Vênus (Orbe: 0°51', em movimento subsequente)\nLua em sextil com Mercúrio (Orbe: 0°46', em movimento subsequente)\nLua em sextil com Júpiter (Orbe: 2°39', em movimento subsequente)\nLua em oposição a Saturno (Orbe: 1°20', em movimento subsequente)\nMercúrio em sextil com Vênus (Orbe: 2°40', em movimento subsequente)\nMercúrio em conjunção com Júpiter (Orbe: 1°53', em movimento subsequente)\nMercúrio em trígono com Saturno (Orbe: 2°06', em movimento subsequente)\nVênus em sextil com Júpiter (Orbe: 0°47', em movimento subsequente)\nMarte em quadratura com Netuno (Orbe: 0°33', em movimento subsequente)\nMarte em quincúncio com Plutão (Orbe: 0°22', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°25', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 1°36', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°11', Separando)\n\nTri-óctil do Ascendente com Marte (Orbe: 0°10', Separando)\nTri-óctil do Ascendente com Netuno (Orbe: 0°23', Aplicando)\nOctil do Descendente com Marte (Orbe: 0°10', Separando)\nOctil do Descendente com Netuno (Orbe: 0°23', Aplicando)\nSextil do Meio do Céu com Urano (Orbe: 0°31', Separando)\nTrígono do Meio do Céu com Netuno (Orbe: 1°56', Separando)\nOposição do Meio do Céu com Plutão (Orbe: 2°08', Separando)\nQuincúncio do Fundo do Céu com Marte (Orbe: 2°30', Separando)\nTrígono do Fundo do Céu com Urano (Orbe: 0°31', Separando)\nSextil do Fundo do Céu com Netuno (Orbe: 1°56', Separando)\nConjunção do Fundo do Céu com Plutão (Orbe: 2°08', Separando)\nNodo Norte Lua em Tri-Octil (Orbe: 2°04', em movimento)\nNodo Norte em Octil com Saturno (Orbe: 0°44', em movimento)\nNodo Norte em Sextil com Quíron (Orbe: 0°40', em movimento)\nLilith em Tri-Octil com Mercúrio (Orbe: 0°32', em movimento)\nLilith em Tri-Octil com Júpiter (Orbe: 1°21', em movimento)\nQuíron em Sextil com Marte (Orbe: 2°39', em movimento)\nFortuna em Tri-Octil com o Sol (Orbe: 0°47', em movimento)\nFortuna em Quadratura com Vênus (Orbe: 1°39', em movimento)\nFortuna em Quincúncio com Júpiter (Orbe: 2°27', em movimento)\nFortuna em Quincúncio com Urano (Orbe: 2°30', em movimento)\nFortuna em Quincúncio com o Meio do Céu (Orbe: 1°58', em movimento)\nTrígono do Vértice com o Sol (Orbe: 2°55', Aplicando)\nVertex Octile Urano (Orbe: 0°22', Separando)\nVertex Quincunx Ascendente (Orbe: 2°11', Separando)\n\nSol: 0°57'41'' (Média, aproximadamente 0,98x a velocidade média)\nLua: 13°02'33'' (Média, aproximadamente 0,99x a velocidade média)\nMercúrio: 1°56'13'' (Rápido, aproximadamente 1,4x a velocidade média)\nVênus: 0°56'56'' (Lento, aproximadamente 0,79x a velocidade média)\nMarte: 0°39'20'' (Rápido, aproximadamente 1,25x a velocidade média)\nJúpiter: 0°13'05'' (Rápido, aproximadamente 2,63x a velocidade média)\nSaturno: -0°02'04'' (Retrógrado, aproximadamente 1,03x a velocidade média)\nUrano: 0°01'15'' (Rápido, aproximadamente 1,78x a velocidade média)\nNetuno: Plutão: -0°01'10'' (Retrógrado, aproximadamente 3,03x a velocidade média)\nPlutão: -0°01'18'' (Retrógrado, aproximadamente 5,29x a velocidade média)\nNodo Norte: -0°03'10'' (Retrógrado, aproximadamente 1x a velocidade média)\nLilith: 0°06'42'' (Média, aproximadamente 1x a velocidade média)\nQuíron: -0°00'40'' (Retrógrado, aproximadamente 1,58x a velocidade média)",
    jogoGerado: [15, 21, 2, 5, 4, 9, 17, 10, 13, 22, 24, 1, 23, 20, 3],
    resultado: [1, 2, 3, 4, 5, 8, 9, 14, 15, 17, 20, 21, 22, 23, 24],
    obs: "",
  },
  {
    id: "h1787004133518", concurso: "3764", data: "17/08/2026", hora: "21",
    textoMapa: "Sol em Leão 25°05', na 5ª Casa;\nLua em Escorpião 1°10', na 7ª Casa;\nMercúrio em Leão 15°03', na 5ª Casa;\nVênus em Libra 10°56', na 7ª Casa;\nMarte em Câncer 4°22', na 3ª Casa;\nJúpiter em Leão 10°42', na 4ª Casa;\nSaturno em Áries 14°20', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°27', na 2ª Casa;\nNetuno em Áries 3°58', retrógrado, na 12ª Casa;\nPlutão em Aquário 3°47', retrógrado, na 10ª Casa;\nNodo Norte em Peixes 0°02', retrógrado, na 11ª Casa;\nLilith em Sagitário 26°54', na 9ª Casa;\nQuíron em Touro 0°46', retrógrado, na 1ª Casa;\nFortuna em Aquário. 2°50', no\nVértice da 10ª Casa em Capricórnio; 2°46', no\nAscendente da 9ª Casa em Áries; 8°54',\nMeio do Céu em Capricórnio; 8°56'\n\n1ª Casa em Áries 8°54'\n2ª Casa em Touro 6°45'\n3ª Casa em Gêmeos 6°40'\n4ª Casa em Câncer 8°56'\n5ª Casa em Leão 11°11'\n6ª Casa em Virgem 11°04'\n7ª Casa em Libra 8°54'\n8ª Casa em Escorpião 6°45'\n9ª Casa em Sagitário 6°40'\n10ª Casa em Capricórnio 8°56'\n11ª Casa em Aquário 11°11'\n12ª Casa em Peixes 11°04'\n\nSol em octil com Vênus (Orbe: 0°50', em movimento subsequente)\nLua em quincúncio com Netuno (Orbe: 2°48', em movimento subsequente)\nLua em quadratura com Plutão (Orbe: 2°37', em movimento subsequente)\nMercúrio em trígono com Saturno (Orbe: 0°42', em movimento subsequente)\nVênus em sextil com Júpiter (Orbe: 0°13', em movimento subsequente)\nMarte em quadratura com Netuno (Orbe: 0°23', em movimento subsequente)\nMarte em quincúncio com Plutão (Orbe: 0°35', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°28', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 1°40', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°11', em movimento subsequente)\n\nAscendente em tríctil com o Sol (Orbe: 1°11', em processo de aplicação)\nAscendente em oposição a Vênus (Orbe: 2°01', em processo de aplicação)\nAscendente em trígono com Júpiter (Orbe: 1°47', em processo de aplicação)\nDescendente em octil com o Sol (Orbe: 1°11', em processo de aplicação)\nDescendente em conjunção com Vênus (Orbe: 2°01', em processo de aplicação)\nDescendente em sextil com Júpiter (Orbe: 1°47', em processo de aplicação)\nMeio do Céu em tríctil com o Sol (Orbe: 1°09', em processo de aplicação)\nMeio do Céu em quadratura com Vênus (Orbe: 1°59', em processo de aplicação)\nMeio do Céu em quincúncio com Júpiter (Orbe: 1°45', em processo de aplicação)\nFundo do Céu em octil com o Sol (Orbe: 1°09', em processo de aplicação)\nFundo do Céu em quadratura com Vênus (Orbe: 1°59', em processo de aplicação)\nNodo Norte em trígono com a Lua (Orbe: 1°07', em processo de separação)\nNodo Norte em octil com Saturno (Orbe: 0°42', em aplicação)\nNodo Norte em sextil com Quíron (Orbe: 0°43', em separação)\nLilith em trígono com o Sol (Orbe: 1°48', em aplicação)\nLilith em trígono com Júpiter (Orbe: 1°12', em aplicação)\nQuíron em oposição à Lua (Orbe: 0°23', em separação)\nFortuna em quadratura com a Lua (Orbe: 1°39', em separação)\nFortuna em quincúncio com Marte (Orbe: 1°32', em aplicação)\nFortuna em trígono com Urano (Orbe: 2°37', em aplicação)\nFortuna em sextil com Netuno (Orbe: 1°08', em aplicação)\nFortuna em conjunção com Plutão (Orbe: 0°57', em aplicação)\nFortuna em quadratura com Quíron (Orbe: 2°03', em separação)\nFortuna em sextil com o Vértice (Orbe: 2°50', em separação)\nVértice em sextil com a Lua (Orbe:\nVértice em Tri-Octil com Mercúrio (Orbe: 2°43', Separando )\nVértice em Oposição com Marte (Orbe: 1°35', Aplicando)\nVértice em Quincúncio com Urano (Orbe: 2°40', Aplicando)\nVértice em Quadratura com Netuno (Orbe: 1°11', Aplicando)\nVértice em Sextil com o Nodo (Orbe: 2°44', Separando)\nVértice em Trígono com Quíron (Orbe: 2°00', Separando)\n\nSol: 0°57'42'' (Média, aproximadamente 0,98x a velocidade média)\nLua: 12°33'04'' (Média, aproximadamente 0,95x a velocidade média)\nMercúrio: 1°58'25'' (Rápido, aproximadamente 1,43x a velocidade média)\nVênus: 0°56'18'' (Lento, aproximadamente 0,78x a velocidade média)\nMarte: 0°39'13'' (Rápido, aproximadamente 1,25x a velocidade média)\nJúpiter: 0°13'03'' (Rápido, aproximadamente 2,62x a velocidade média)\nSaturno: -0°02'12'' (Retrógrado, aproximadamente 1,09x a velocidade média)\nUrano: 0°01'11'' (Rápido, aproximadamente 1,69x a velocidade média)\nNetuno: Plutão: -0°01'12'' (Retrógrado, aproximadamente 3,11x a velocidade média)\nPlutão: -0°01'17'' (Retrógrado, aproximadamente 5,23x a velocidade média)\nNodo Norte: -0°03'10'' (Retrógrado, aproximadamente 1x a velocidade média)\nLilith: 0°06'42'' (Média, aproximadamente 1x a velocidade média)\nQuíron: -0°00'45'' (Retrógrado, aproximadamente 1,75x a velocidade média)",
    jogoGerado: [5, 15, 21, 13, 23, 6, 2, 8, 9, 10, 12, 18, 22, 25, 17],
    resultado: [2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 15, 18, 21, 22, 25],
    obs: "",
  },
  {
    id: "h1787089805668", concurso: "3765", data: "18/08/2026", hora: "21",
    textoMapa: "Sol em Leão 26°03', na 5ª Casa;\nLua em Escorpião 13°34', na 8ª Casa;\nMercúrio em Leão 17°02', na 5ª Casa;\nVênus em Libra 11°52', na 7ª Casa;\nMarte em Câncer 5°01', na 3ª Casa;\nJúpiter em Leão 10°55', na 4ª Casa;\nSaturno em Áries 14°17', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°28', na 2ª Casa;\nNetuno em Áries 3°57', retrógrado, na 12ª Casa;\nPlutão em Aquário 3°46', retrógrado, na 10ª Casa;\nNodo Norte em Aquário 29°59', retrógrado, na 11ª Casa;\nLilith em Sagitário 27°00', na 9ª Casa;\nQuíron em Touro 0°45', retrógrado, na 1ª Casa;\nFortuna em Capricórnio. 22°17', no\nVértice da 10ª Casa em Capricórnio 3°23', no\nAscendente da 9ª Casa em Áries 9°48'\nMeio do Céu em Capricórnio 9°50'\n\n1ª Casa em Áries 9°48'\n2ª Casa em Touro 7°38'\n3ª Casa em Gêmeos 7°33'\n4ª Casa em Câncer 9°50'\n5ª Casa em Leão 12°06'\n6ª Casa em Virgem 11°59'\n7ª Casa em Libra 9°48'\n8ª Casa em Escorpião 7°38'\n9ª Casa em Sagitário 7°33'\n10ª Casa em Capricórnio 9°50'\n11ª Casa em Aquário 12°06'\n12ª Casa em Peixes 11°59'\n\nSol em octil com Vênus (Orbe: 0°48', em movimento subsequente)\nLua em quadratura com Júpiter (Orbe: 2°39', em movimento subsequente)\nLua em quincúncio com Saturno (Orbe: 0°43', em movimento subsequente)\nMercúrio em octil com Marte (Orbe: 2°59', em movimento subsequente)\nMercúrio em trígono com Saturno (Orbe: 2°44', em movimento subsequente)\nMercúrio em trígono com Netuno (Orbe: 1°55', em movimento subsequente)\nVênus em sextil com Júpiter (Orbe: 0°57', em movimento subsequente)\nVênus em oposição a Saturno (Orbe: 2°25', em movimento subsequente)\nMarte em quadratura com Netuno (Orbe: 1°04', em movimento subsequente)\nMarte em quincúncio com Plutão (Orbe: 1°15', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°31', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 1°42', em movimento subsequente)\nNetuno Sextil Plutão (Orbe: 0°11', Separando)\n\nTri-óctil do Ascendente com o Sol (Orbe: 1°14', em processo de aplicação)\nOposição do Ascendente com Vênus (Orbe: 2°03', em processo de aplicação)\nTrígono do Ascendente com Júpiter (Orbe: 1°06', em processo de aplicação)\nOctil do Descendente com o Sol (Orbe: 1°14', em processo de aplicação)\nConjunção do Descendente com Vênus (Orbe: 2°03', em processo de aplicação)\nSextil do Descendente com Júpiter (Orbe: 1°06', em processo de aplicação)\nTri-óctil do Meio do Céu com o Sol (Orbe: 1°12', em processo de aplicação)\nQuadratura do Meio do Céu com Vênus (Orbe: 2°01', em processo de aplicação)\nQuincúncio do Meio do Céu com Júpiter (Orbe: 1°04', em processo de aplicação)\nOctil do Fundo do Céu com o Sol (Orbe: 1°12', em processo de aplicação)\nQuadratura do Fundo do Céu com Vênus (Orbe: 2°01', em processo de aplicação)\nOctil do Nodo Norte com Saturno (Orbe: 0°41', em processo de aplicação)\nSextil do Nodo Norte com Lilith (Orbe: 2°58', em movimento)\nNodo Norte em sextil com Quíron (Orbe: 0°46', em movimento)\nLilith em trígono com o Sol (Orbe: 0°57', em movimento)\nLilith em octil com a Lua (Orbe: 1°33', em movimento)\nLilith em trígono com Júpiter (\nOrbe: 1°05', em movimento) Fortuna em trígono com Urano (Orbe: 1°48', em movimento)\nVértice em trígono com Mercúrio (Orbe: 1°21', em movimento)\nVértice em oposição a Marte (Orbe: 1°38', em movimento)\nVértice em quincúncio com Urano (Orbe: 2°05', em movimento)\nVértice em quadratura com Netuno (Orbe: 0°34', em movimento)\nVértice em trígono com Quíron (Orbe: 2°37', em movimento)",
    jogoGerado: [13, 15, 16, 17, 21, 5, 23, 4, 6, 12, 25, 1, 9, 20, 22],
    resultado: [1, 5, 6, 10, 11, 12, 13, 15, 16, 17, 19, 21, 22, 24, 25],
    obs: "",
  },
  {
    id: "h1787176004364", concurso: "3766", data: "19/08/2026", hora: "21",
    textoMapa: "Sol em Leão 27°01', na 5ª Casa;\nLua em Escorpião 25°44', na 8ª Casa;\nMercúrio em Leão 19°01', na 5ª Casa;\nVênus em Libra 12°47', na 7ª Casa;\nMarte em Câncer 5°40', na 3ª Casa;\nJúpiter em Leão 11°08', na 4ª Casa;\nSaturno em Áries 14°15', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°29', na 2ª Casa;\nNetuno em Áries 3°56', retrógrado, na 12ª Casa;\nPlutão em Aquário 3°44', retrógrado, na 10ª Casa;\nNodo Norte em Aquário 29°56', retrógrado, na 11ª Casa;\nLilith em Sagitário 27°07', na 9ª Casa;\nQuíron em Touro 0°45', retrógrado, na 1ª Casa;\nFortuna em Capricórnio. 11°59', no\nVértice da 10ª Casa em Capricórnio 3°58', no\nAscendente da 9ª Casa em Áries 10°42'\nMeio do Céu em Capricórnio 10°45'\n\n1ª Casa em Áries 10°42'\n2ª Casa em Touro 8°32'\n3ª Casa em Gêmeos 8°27'\n4ª Casa em Câncer 10°45'\n5ª Casa em Leão 13°01'\n6ª Casa em Virgem 12°54'\n7ª Casa em Libra 10°42'\n8ª Casa em Escorpião 8°32'\n9ª Casa em Sagitário 8°27'\n10ª Casa em Capricórnio 10°45'\n11ª Casa em Aquário 13°01'\n12ª Casa em Peixes 12°54'\n\nSol em quadratura com a Lua (Orbe: 1°16', em movimento)\nSol em octil com Vênus (Orbe: 0°46', em movimento)\nSol em trígono com Saturno (Orbe: 2°14', em movimento)\nLua em octil com Vênus (Orbe: 2°03', em movimento)\nMercúrio em octil com Marte (Orbe: 1°38', em movimento)\nMercúrio em trígono com Netuno (Orbe: 0°05', em movimento)\nVênus em sextil com Júpiter (Orbe: 1°39', em movimento)\nVênus em oposição a Saturno (Orbe: 1°27', em movimento)\nMarte em quadratura com Netuno (Orbe: 1°44', em movimento)\nMarte em quincúncio com Plutão (Orbe: 1°55', em movimento)\nUrano em sextil com Netuno (Orbe: 1°33', em movimento)\nUrano em trígono com Plutão (Orbe: 1°44', em movimento)\nNetuno em sextil com Plutão (Orbe: 0°11', separando-se)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°18', em movimento)\nTri-óctil da Lua no Ascendente (Orbe: 0°01', em movimento)\nOposição de Vênus no Ascendente (Orbe: 2°05', em movimento)\nTrígono de Júpiter no Ascendente (Orbe: 0°25', em movimento)\nOctil do Sol no Descendente (Orbe: 1°18', em movimento)\nOctil da Lua no Descendente (Orbe: 0°01', em movimento)\nConjunção de Vênus no Descendente (Orbe: 2°05', em movimento)\nSextil de Júpiter no Descendente (Orbe: 0°25', em movimento)\nTri-óctil do Sol no Meio do Céu (Orbe: 1°15', em movimento)\nOctil da Lua no Meio do Céu (Orbe: 0°01', em movimento)\nQuadratura de Vênus no Meio do Céu (Orbe: 2°02', em movimento)\nQuincúncio de Júpiter no Meio do Céu (Orbe: 0°22', em movimento)\nIC Octil Sol (Orbe: 1°15', em andamento)\nIC Tri-Octil Lua (Orbe: 0°01', em separação)\nIC Quadratura Vênus (Orbe: 2°02', em andamento)\nNodo Norte Oposição Sol (Orbe: 2°55', em andamento)\nNodo Norte Tri-Octil Vênus (Orbe: 2°08', em andamento)\nNodo Norte Octil Saturno (Orbe: 0°40', em andamento)\nNodo Norte Sextil Lilith (Orbe: 2°48', em andamento)\nNodo Norte Sextil Quíron (Orbe: 0°48', em separação)\nLilith Trígono Sol (Orbe: 0°06', em andamento)\nLilith Tri-Octil Júpiter (Orbe: 0°59', em andamento)\nQuíron Quadratura Plutão (Orbe: 2°59', em andamento)\nFortuna Tri-Octil Sol (Orbe: 0°01', em andamento)\nFortuna Lua em Octil (Orbe: 1°15', Separando)\nFortuna Quadratura Vênus (Orbe: 0°48', Aplicando)\nFortuna Quincúncio Júpiter (Orbe: 0°51', Separando)\nFortuna Quadratura Saturno (Orbe: 2°16', Aplicando)\nFortuna Nodo em Octil (Orbe: 2°56', Aplicando)\nFortuna Quadratura Ascendente (Orbe: 1°16', Separando)\nFortuna Conjunção MC (Orbe: 1°14', Separando)\nFortuna Oposição IC (Orbe: 1°14', Separando)\nFortuna Quadratura DSC (Orbe: 1°16', Separando)\nVértice Tri-Octil Mercúrio (Orbe: 0°03', Aplicando)\nVértice Oposição Marte (Orbe: 1°42', Aplicando)\nVértice Quincúncio Urano (Orbe: 1°31', Aplicando)\nVértice Quadratura Netuno (Orbe: 0°01', Separando)",
    jogoGerado: [2, 9, 13, 15, 17, 21, 5, 23, 1, 24, 4, 8, 11, 22, 25],
    resultado: [1, 2, 3, 5, 8, 9, 11, 13, 15, 16, 17, 19, 21, 23, 24],
    obs: "",
  },
  {
    id: "h1787258698390", concurso: "3767", data: "20/08/2026", hora: "21",
    textoMapa: "Sol em Leão 27°58', na 5ª Casa;\nLua em Sagitário 7°43', na 8ª Casa;\nMercúrio em Leão 21°02', na 5ª Casa;\nVênus em Libra 13°42', na 7ª Casa;\nMarte em Câncer 6°19', na 3ª Casa;\nJúpiter em Leão 11°21', na 4ª Casa;\nSaturno em Áries 14°13', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°30', na 2ª Casa;\nNetuno em Áries 3°55', retrógrado, na 12ª Casa;\nPlutão em Aquário 3°43', retrógrado, na 10ª Casa;\nNodo Norte em Aquário 29°53', retrógrado, na 11ª Casa;\nLilith em Sagitário 27°14', na 9ª Casa;\nQuíron em Touro 0°44', retrógrado, na 1ª Casa;\nFortuna em Capricórnio 1°51', na 9ª Casa,\nVértice em Capricórnio 4°31', na 9ª Casa,\nAscendente em Áries 11°36',\nMeio do Céu em Capricórnio 11°40'\n\n1ª Casa em Áries 11°36'\n2ª Casa em Touro 9°25'\n3ª Casa em Gêmeos 9°21'\n4ª Casa em Câncer 11°40'\n5ª Casa em Leão 13°57'\n6ª Casa em Virgem 13°49'\n7ª Casa em Libra 11°36'\n8ª Casa em Escorpião 9°25'\n9ª Casa em Sagitário 9°21'\n10ª Casa em Capricórnio 11°40'\n11ª Casa em Aquário 13°57'\n12ª Casa em Peixes 13°49'\n\nSol em octil com Vênus (Orbe: 0°43', em movimento crescente)\nSol em trígono com Saturno (Orbe: 1°14', em movimento crescente)\nLua em quincúncio com Marte (Orbe: 1°23', em movimento crescente)\nLua em oposição a Urano (Orbe: 2°12', em movimento crescente)\nMercúrio em octil com Marte (Orbe: 0°17', em movimento crescente)\nMercúrio em trígono com Netuno (Orbe: 2°07', em movimento crescente)\nVênus em sextil com Júpiter (Orbe: 2°21', em movimento crescente)\nVênus em oposição a Saturno (Orbe: 0°30', em movimento crescente)\nMarte em quadratura com Netuno (Orbe: 2°24', em movimento crescente)\nMarte em quincúncio com Plutão (Orbe: 2°36', em movimento crescente)\nJúpiter em trígono com Saturno (Orbe: 2°51', em movimento crescente)\nUrano em sextil com Netuno (Orbe: 1°35', em movimento crescente)\nTrígono de Urano com Plutão (Orbe: 1°47', Separando )\nSextil de Netuno com Plutão (Orbe: 0°11', Separando)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°22', em movimento subsequente)\nOposição de Vênus no Ascendente (Orbe: 2°06', em movimento subsequente)\nTrígono de Júpiter no Ascendente (Orbe: 0°15', em movimento subsequente)\nConjunção de Saturno no Ascendente (Orbe: 2°36', em movimento subsequente)\nOctil do Descendente com o Sol (Orbe: 1°22', em movimento subsequente)\nConjunção de Vênus no Descendente (Orbe: 2°06', em movimento subsequente)\nSextil do Descendente com Júpiter (Orbe: 0°15', em movimento subsequente)\nOposição de Saturno no Descendente (Orbe: 2°36', em movimento subsequente)\nTri-óctil do Sol no Meio do Céu (Orbe: 1°18', em movimento subsequente)\nQuadratura de Vênus no Meio do Céu (Orbe: 2°02', em movimento subsequente)\nQuincúncio de Júpiter no Meio do Céu (Orbe: 0°18', em movimento subsequente)\nQuadratura de Saturno no Meio do Céu (Orbe: 2°33', em movimento subsequente)\nFundo do Céu Sol em Octil (Orbe: 1°18', em aplicação)\nIC em quadratura com Vênus (Orbe: 2°02', em aplicação)\nIC em quadratura com Saturno (Orbe: 2°33', em aplicação)\nNodo Norte em Oposição ao Sol (Orbe: 1°54', em aplicação)\nNodo Norte em Tri-Octil com Vênus (Orbe: 1°10', em aplicação)\nNodo Norte em Octil com Saturno (Orbe: 0°40', em aplicação)\nNodo Norte em Sextil com Lilith (Orbe: 2°38', em aplicação)\nNodo Norte em Sextil com Quíron (Orbe: 0°50', em separação)\nLilith em Trígono com o Sol (Orbe: 0°44', em separação)\nLilith em Tri-Octil com Júpiter (Orbe: 0°53', em aplicação)\nQuíron em Trígono com o Sol (Orbe: 2°45', em aplicação)\nQuíron em Quadratura com Plutão (Orbe: 2°59', em aplicação)\nFortuna em Quadratura com Netuno (Orbe: 2°03', em movimento)\nFortuna em sextil com o Nodo (Orbe: 1°58', em movimento de separação)\nFortuna em trígono com Quíron (Orbe: 1°07', em movimento de separação)\nFortuna em quadratura com o Vértice (Orbe: 1°51', em movimento de separação)\nVértice em trígono octil com Mercúrio (Orbe: 1°30', em movimento de aplicação)\nVértice em oposição a Marte (Orbe: 1°47', em movimento de aplicação)\nVértice em quincúncio com Urano (Orbe: 0°58', em movimento de aplicação)\nVértice em quadratura com Netuno (Orbe: 0°36', em movimento de separação)",
    jogoGerado: [2, 4, 6, 11, 13, 15, 16, 21, 7, 19, 1, 9, 22, 24, 25],
    resultado: [2, 4, 6, 7, 9, 10, 11, 13, 14, 15, 16, 20, 21, 22, 23],
    obs: "",
  },
  {
    id: "h1787335752695", concurso: "3768", data: "21/08/2026", hora: "21",
    textoMapa: "Sol em Leão 28°56', na 5ª Casa;\nLua em Sagitário 19°37', na 9ª Casa;\nMercúrio em Leão 23°03', na 5ª Casa;\nVênus em Libra 14°37', na 7ª Casa;\nMarte em Câncer 6°58', na 3ª Casa;\nJúpiter em Leão 11°34', na 4ª Casa;\nSaturno em Áries 14°10', retrógrado, na 1ª Casa;\nUrano em Gêmeos 5°31', na 2ª Casa;\nNetuno em Áries 3°53', retrógrado, na 12ª Casa;\nPlutão em Aquário 3°42', retrógrado, na 10ª Casa;\nNodo Norte em Aquário 29°50', retrógrado, na 11ª Casa;\nLilith em Sagitário 27°21', na 9ª Casa;\nQuíron em Touro 0°43', retrógrado, na 1ª Casa.\nFortuna em Sagitário 21°50', no\nVértice da 9ª Casa em Capricórnio 5°04', no\nAscendente da 9ª Casa em Áries 12°30',\nMeio do Céu em Capricórnio 12°34'\n\n1ª Casa em Áries 12°30'\n2ª Casa em Touro 10°18'\n3ª Casa em Gêmeos 10°14'\n4ª Casa em Câncer 12°34'\n5ª Casa em Leão 14°52'\n6ª Casa em Virgem 14°44'\n7ª Casa em Libra 12°30'\n8ª Casa em Escorpião 10°18'\n9ª Casa em Sagitário 10°14'\n10ª Casa em Capricórnio 12°34'\n11ª Casa em Aquário 14°52'\n12ª Casa em Peixes 14°44'\n\nSol em octil com Vênus (Orbe: 0°40', em movimento subsequente)\nSol em trígono com Saturno (Orbe: 0°14', em movimento subsequente)\nLua em octil com Plutão (Orbe: 0°54', em movimento subsequente)\nMercúrio em octil com Marte (Orbe: 1°04', em movimento subsequente)\nVênus em oposição a Saturno (Orbe: 0°26', em movimento subsequente)\nJúpiter em trígono com Saturno (Orbe: 2°36', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°38', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 1°49', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°11', em movimento subsequente)\n\nAscendente em Tri-Octil com o Sol (Orbe: 1°25', em movimento subsequente)\nAscendente em Oposição com Vênus (Orbe: 2°06', em movimento subsequente)\nAscendente em Trígono com Júpiter (Orbe: 0°56', em movimento subsequente)\nAscendente em Conjunção com Saturno (Orbe: 1°39', em movimento subsequente)\nAscendente em Octil com o Nodo (Orbe: 2°19', em movimento subsequente) Descendente em\nOctil com o Sol (Orbe: 1°25', em movimento subsequente)\nDescendente em Conjunção com Vênus (Orbe: 2°06', em movimento subsequente)\nDescendente em Sextil com Júpiter (Orbe: 0°56', em movimento subsequente)\nDescendente em Oposição com Saturno (Orbe: 1°39', em movimento subsequente)\nDescendente em Tri-Octil com o Nodo (Orbe: 2°19', em movimento subsequente)\nMeio do Céu em Tri-Octil com o Sol (Orbe: 1°21', em movimento subsequente)\nMeio do Céu em Quadratura com Vênus (Orbe: 2°02', em aplicação)\nMC Quincúncio Júpiter (Orbe: 1°00', em separação)\nMC Quadratura Saturno (Orbe: 1°35', em aplicação)\nMC Octil Nodo (Orbe: 2°15', em aplicação)\nIC Octil Sol (Orbe: 1°21', em aplicação)\nIC Quadratura Vênus (Orbe: 2°02', em aplicação)\nIC Quadratura Saturno (Orbe: 1°35', em aplicação)\nIC Tri-Octil Nodo (Orbe: 2°15', em aplicação)\nNodo Norte em Oposição ao Sol (Orbe: 0°53', em aplicação)\nNodo Norte Tri-Octil Vênus (Orbe: 0°12', em aplicação)\nNodo Norte Octil Saturno (Orbe: 0°39', em aplicação)\nNodo Norte Sextil Lilith (Orbe: 2°28', em aplicação)\nNodo Norte Sextil Quíron (Orbe: 0°53',\nLilith em trígono com o Sol (Orbe: 1°35', em separação )\nLilith em trígono com Júpiter (Orbe: 0°46', em aproximação)\nQuíron em trígono com o Sol (Orbe: 1°46', em aproximação)\nQuíron em quadratura com Plutão (Orbe: 2°59', em aproximação)\nLua em conjunção com a Fortuna (Orbe: 2°12', em separação)\nMercúrio em trígono com a Fortuna (Orbe: 1°13', em aproximação)\nMercúrio em trígono com o Vértice (Orbe: 2°58', em aproximação)\nMarte em oposição ao Vértice (Orbe: 1°54', em aproximação)\nUrano em quincúncio com o Vértice (Orbe: 0°27', em aproximação)\nNetuno em quadratura com o Vértice (Orbe: 1°10', em separação)",
    jogoGerado: [15, 2, 4, 6, 13, 24, 12, 1, 25, 5, 21, 11, 9, 8, 10],
    resultado: [2, 3, 4, 5, 6, 7, 10, 11, 12, 14, 15, 17, 20, 23, 24],
    obs: "",
  },
  {
    id: "h1787428629477", concurso: "3769", data: "23/08/2026", hora: "11",
    textoMapa: "Sol em Virgem 0°28', na 10ª Casa;\nLua em Capricórnio 8°26', na 2ª Casa;\nMercúrio em Leão 26°14', na 10ª Casa;\nVênus em Libra 16°02', na 11ª Casa;\nMarte em Câncer 8°00', na 8ª Casa;\nJúpiter em Leão 11°54', na 9ª Casa;\nSaturno em Áries 14°06', retrógrado, na 5ª Casa;\nUrano em Gêmeos 5°33', na 7ª Casa;\nNetuno em Áries 3°51', retrógrado, na 5ª Casa;\nPlutão em Aquário 3°40', retrógrado, na 3ª Casa;\nNodo Norte em Aquário 29°44', retrógrado, na 4ª Casa;\nLilith em Sagitário 27°31', na 2ª Casa;\nQuíron em Touro 0°41', retrógrado, na 6ª Casa;\nFortuna em Áries. 4°18', no\nVértice da 5ª Casa em Áries 24°29', no\nAscendente da 6ª Casa em Escorpião 26°20'\nMeio do Céu em Leão 12°45'\n\n1ª Casa em Escorpião 26°20'\n2ª Casa em Sagitário 25°02'\n3ª Casa em Capricórnio 18°45'\n4ª Casa em Aquário 12°45'\n5ª Casa em Peixes 12°20'\n6ª Casa em Áries 19°39'\n7ª Casa em Touro 26°20'\n8ª Casa em Gêmeos 25°02'\n9ª Casa em Câncer 18°45'\n10ª Casa em Leão 12°45'\n11ª Casa em Virgem 12°20'\n12ª Casa em Libra 19°39'\n\nSol em octil com Vênus (Orbe: 0°34', em movimento subsequente)\nSol em tríotil com Saturno (Orbe: 1°21', em movimento subsequente)\nLua em tríotil com Mercúrio (Orbe: 2°48', em movimento subsequente)\nLua em oposição a Marte (Orbe: 0°25', em movimento subsequente)\nLua em quincúncio com Urano (Orbe: 2°52', em movimento subsequente)\nMercúrio em tríotil com Saturno (Orbe: 2°52', em movimento subsequente)\nVênus em oposição a Saturno (Orbe: 1°56', em movimento subsequente)\nJúpiter em trígono com Saturno (Orbe: 2°11', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°41', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 1°52', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°11', em movimento subsequente)\n\nLua em Octil no Ascendente (Orbe: 2°54', Separando)\nAscendente em Quadratura com Mercúrio (Orbe: 0°05', Separando)\nAscendente em Tri-Octil com Saturno (Orbe: 2°46', Aplicando)\nLua em Tri-Octil no Descendente (Orbe: 2°54', Separando)\nDescendente em Quadratura com Mercúrio (Orbe: 0°05', Separando)\nDescendente em Octil com Saturno (Orbe: 2°46', Aplicando)\nDescendente em Quincúncio com Lilith (Orbe: 1°11', Aplicando) Meio\ndo Céu em Conjunção com Júpiter (Orbe: 0°51', Separando)\nMeio do Céu em Trígono com Saturno (Orbe: 1°20', Aplicando)\nMeio do Céu em Tri-Octil com Lilith (Orbe: 0°14', Separando)\nFundo do Céu em Oposição com Júpiter (Orbe: 0°51', Separando)\nFundo do Céu em Sextil com Saturno (Orbe: 1°20',\nIC em Octil com Lilith (Orbe: 0°14', Separando) Nodo\nNorte em Oposição ao Sol (Orbe: 0°43', Separando)\nNodo Norte em Tri-Octil com Vênus (Orbe: 1°17', Separando)\nNodo Norte em Octil com Saturno (Orbe: 0°38', Aplicando)\nNodo Norte em Sextil com Lilith (Orbe: 2°13', Aplicando)\nNodo Norte em Sextil com Quíron (Orbe: 0°56', Separando)\nLilith em Trígono com o Sol (Orbe: 2°56', Separando) Lilith em Trígono\ncom Mercúrio (Orbe: 1°17', Aplicando)\nLilith em Tri-Octil com Júpiter (Orbe: 0°37', Aplicando)\nQuíron em Trígono com o Sol (Orbe: 0°13', Aplicando)\nQuíron em Quadratura com Plutão (Orbe: 2°58', Aplicando)\nFortuna em Sextil com Urano (Orbe:\nFortuna em conjunção com Netuno (Orbe: 0°26', Separando )\nFortuna em sextil com Plutão (Orbe: 0°37', Separando)\nTrígono do Vértice com Mercúrio (Orbe: 1°45', Aplicando)\nQuincúncio do Vértice com o Ascendente (Orbe: 1°50', Separando)",
    jogoGerado: [5, 23, 9, 10, 15, 21, 1, 3, 13, 2, 11, 16, 24, 25, 22],
    resultado: [1, 2, 3, 4, 5, 9, 10, 11, 15, 16, 17, 21, 23, 24, 25],
    obs: "",
  },
  {
    id: "h1787594209615", concurso: "3770", data: "24/08/2026", hora: "21",
    textoMapa: "Sol em Virgem 1°50', na 5ª Casa;\nLua em Capricórnio 25°26', na 10ª Casa;\nMercúrio em Leão 29°04', na 5ª Casa;\nVênus em Libra 17°17', na 7ª Casa;\nMarte em Câncer 8°55', na 3ª Casa;\nJúpiter em Leão 12°12', na 4ª Casa;\nSaturno em Áries 14°02', retrógrado, na 12ª Casa;\nUrano em Gêmeos 5°34', na 2ª Casa;\nNetuno em Áries 3°49', retrógrado, na 12ª Casa;\nPlutão em Aquário 3°38', retrógrado, na 10ª Casa;\nNodo Norte em Aquário 29°40', retrógrado, na 11ª Casa;\nLilith em Sagitário 27°41', na 9ª Casa;\nQuíron em Touro 0°40', retrógrado, na 1ª Casa.\nFortuna em Escorpião 21°36', no\nVértice da 8ª Casa em Capricórnio 6°39', no\nAscendente da 9ª Casa em Áries 15°12',\nMeio do Céu em Capricórnio 15°19'\n\n1ª Casa em Áries 15°12'\n2ª Casa em Touro 12°58'\n3ª Casa em Gêmeos 12°55'\n4ª Casa em Câncer 15°19'\n5ª Casa em Leão 17°39'\n6ª Casa em Virgem 17°29'\n7ª Casa em Libra 15°12'\n8ª Casa em Escorpião 12°58'\n9ª Casa em Sagitário 12°55'\n10ª Casa em Capricórnio 15°19'\n11ª Casa em Aquário 17°39'\n12ª Casa em Peixes 17°29'\n\nSol em conjunção com Mercúrio (Orbe: 2°45', em movimento subsequente)\nSol em octil com Vênus (Orbe: 0°27', em movimento subsequente)\nSol em trígono com Saturno (Orbe: 2°47', em movimento subsequente)\nSol em quincúncio com Netuno (Orbe: 1°59', em movimento subsequente)\nSol em quincúncio com Plutão (Orbe: 1°48', em movimento subsequente)\nMercúrio em trígono com Saturno (Orbe: 0°02', em movimento subsequente)\nJúpiter em trígono com Saturno (Orbe: 1°49', em movimento subsequente)\nUrano em sextil com Netuno (Orbe: 1°44', em movimento subsequente)\nUrano em trígono com Plutão (Orbe: 1°55', em movimento subsequente)\nNetuno em sextil com Plutão (Orbe: 0°11', em movimento subsequente)\n\nTri-óctil do Sol no Ascendente (Orbe: 1°37', em movimento)\nTri-óctil de Mercúrio no Ascendente (Orbe: 1°07', em movimento)\nOposição de Vênus no Ascendente (Orbe: 2°05', em movimento)\nTrígono de Júpiter no Ascendente (Orbe: 2°59', em movimento)\nConjunção de Saturno no Ascendente (Orbe: 1°09', em movimento)\nNodo Octil no Ascendente (Orbe: 0°32', em movimento)\nOctil do Sol no Descendente (Orbe: 1°37', em movimento)\nOctil de Mercúrio no Descendente (Orbe: 1°07', em movimento)\nConjunção de Vênus no Descendente (Orbe: 2°05', em movimento)\nSextil de Júpiter no Descendente (Orbe: 2°59', em movimento)\nOposição de Saturno no Descendente (Orbe: 1°09', em movimento\n) Nodo Tri-Octil (Orbe: 0°32', Separando)\nMC Tri-Octil Sol (Orbe: 1°30', Aplicando)\nMC Tri-Octil Mercúrio (Orbe: 1°14', Separando)\nMC Quadratura Vênus (Orbe: 1°58', Aplicando)\nMC Quadratura Saturno (Orbe: 1°16', Separando)\nMC Nodo Octil (Orbe: 0°38', Separando)\nIC Octil Sol (Orbe: 1°30', Aplicando)\nIC Octil Mercúrio (Orbe: 1°14', Separando)\nIC Quadratura Vênus (Orbe: 1°58', Aplicando)\nIC Quadratura Saturno (Orbe: 1°16', Separando)\nIC Nodo Tri-Octil (Orbe: 0°38', Separando)\nNodo Norte em Oposição ao Sol (Orbe: 2°09', Separando)\nNodo Norte em Oposição a Mercúrio (Orbe: 0°35', em formação)\nNodo Norte em trígono com Vênus (Orbe: 2°37', em separação)\nNodo Norte em octil com Saturno (Orbe: 0°37', em formação)\nNodo Norte em sextil com Lilith (Orbe: 1°59', em formação)\nNodo Norte em sextil com Quíron (Orbe: 0°59', em separação)\nLilith em trígono com Mercúrio (Orbe: 1°23', em separação)\nLilith em trígono com Júpiter (Orbe: 0°28', em formação)\nLilith em trígono com Quíron (Orbe: 2°58', em formação)\nQuíron em trígono com o Sol (Orbe: 1°09', em separação)\nQuíron em trígono com Mercúrio (Orbe: 1°35', em formação)\nQuíron em quadratura com Plutão (Orbe: 2°58', em formação)\nFortuna em trígono com Marte (Orbe: 2°18', em formação)\nFortuna Tri-óctilo Netuno (Orbe: 2°46', Separando)\nVértice Oposição Marte (Orbe: 2°15', Aplicando)\nVértice Quincúncio Urano (Orbe: 1°04', Separando)\nVértice Quadratura Netuno (Orbe: 2°49', Separando)",
    jogoGerado: [25, 4, 15, 23, 13, 7, 1, 12, 2, 16, 24, 9, 19, 11, 6],
    resultado: [1, 2, 4, 7, 8, 12, 13, 15, 16, 17, 18, 19, 23, 24, 25],
    obs: "",
  },
];

// ─── Dados base ───────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: 2. CONFIGURAÇÃO ASTROLÓGICA — signos, planetas, dignidades, triplicidade
// ═══════════════════════════════════════════════════════════════════════════
const SIGNOS = [
  { nome: "Áries", num: 1, regente: "Marte" },
  { nome: "Touro", num: 2, regente: "Vênus" },
  { nome: "Gêmeos", num: 3, regente: "Mercúrio" },
  { nome: "Câncer", num: 4, regente: "Lua" },
  { nome: "Leão", num: 5, regente: "Sol" },
  { nome: "Virgem", num: 6, regente: "Mercúrio" },
  { nome: "Libra", num: 7, regente: "Vênus" },
  { nome: "Escorpião", num: 8, regente: "Marte" },
  { nome: "Sagitário", num: 9, regente: "Júpiter" },
  { nome: "Capricórnio", num: 10, regente: "Saturno" },
  { nome: "Aquário", num: 11, regente: "Saturno" },
  { nome: "Peixes", num: 12, regente: "Júpiter" },
];

// Signo oposto (180° no zodíaco) — usado para derivar DSC a partir do ASC e
// Fundo do Céu (IC) a partir do MC, já que esses dois ângulos nunca são
// informados diretamente pelo site, só o ASC e o MC.
function signoOposto(nomeSigno) {
  const s = SIGNOS.find(x => x.nome === nomeSigno);
  if (!s) return null;
  const opostoNum = ((s.num - 1 + 6) % 12) + 1;
  const opostoObj = SIGNOS.find(x => x.num === opostoNum);
  return opostoObj ? opostoObj.nome : null;
}

const PLANETAS_CONFIG = [
  { id: "sol", nome: "Sol", glifo: "☉", tipo: "planeta" },
  { id: "lua", nome: "Lua", glifo: "☽", tipo: "planeta" },
  { id: "mercurio", nome: "Mercúrio", glifo: "☿", tipo: "planeta" },
  { id: "venus", nome: "Vênus", glifo: "♀", tipo: "planeta" },
  { id: "marte", nome: "Marte", glifo: "♂", tipo: "planeta" },
  { id: "jupiter", nome: "Júpiter", glifo: "♃", tipo: "planeta" },
  { id: "saturno", nome: "Saturno", glifo: "♄", tipo: "planeta" },
  { id: "urano", nome: "Urano", glifo: "⛢", tipo: "planeta" },
  { id: "netuno", nome: "Netuno", glifo: "♆", tipo: "planeta" },
  { id: "plutao", nome: "Plutão", glifo: "♇", tipo: "planeta" },
  { id: "nodo", nome: "Nodo Norte", glifo: "☊", tipo: "ponto" },
  { id: "lilith", nome: "Lilith", glifo: "⚸", tipo: "ponto" },
  { id: "quiron", nome: "Quíron", glifo: "⚷", tipo: "ponto" },
  { id: "fortuna", nome: "Fortuna", glifo: "⊕", tipo: "ponto" },
  { id: "vertice", nome: "Vértice", glifo: "✦", tipo: "ponto" },
  { id: "asc", nome: "Ascendente", glifo: "AS", tipo: "angulo" },
  { id: "mc", nome: "Meio do Céu", glifo: "MC", tipo: "angulo" },
];


// ─── Parser de texto do mapa horário ─────────────────────────────────────────
const NOME_PARA_ID = {
  "sol": "sol", "lua": "lua", "mercúrio": "mercurio", "mercurio": "mercurio",
  "vênus": "venus", "venus": "venus", "marte": "marte", "júpiter": "jupiter", "jupiter": "jupiter",
  "saturno": "saturno", "urano": "urano", "netuno": "netuno", "plutão": "plutao", "plutao": "plutao",
  "nodo norte": "nodo", "nodo lunar": "nodo", "nodo": "nodo", "nó": "nodo",
  "lilith": "lilith", "quíron": "quiron", "quiron": "quiron",
  "fortuna": "fortuna", "fortune": "fortuna", "vértice": "vertice", "vertice": "vertice", "vertex": "vertice",
  "ascendente": "asc", "meio do céu": "mc", "meio do ceu": "mc", "mc": "mc",
};

function normalizarNomeAspecto(nome) {
  const n = String(nome || "").toLowerCase()
    .replace("jupiter", "júpiter").replace("mercurio", "mercúrio")
    .replace("venus", "vênus").replace("plutao", "plutão").replace("quiron", "quíron")
    .replace("vertice", "vértice").replace("vertex", "vértice")
    .replace("meio do ceu", "meio do céu").replace("nodo norte", "nodo").replace("nodo lunar", "nodo")
    .replace("nó", "nodo").replace("fortune", "fortuna");
  if (n === "meio do céu" || n === "mc") return "mc";
  if (n === "ascendente" || n === "asc") return "asc";
  if (n === "descendente" || n === "dsc") return "dsc";
  if (n === "fundo do céu" || n === "fundo do ceu" || n === "ic") return "ic";
  return NOME_PARA_ID[n] || null;
}

const SIGNOS_REGEX = "Áries|Aries|Touro|Gêmeos|Gemeos|Câncer|Cancer|Leão|Leao|Virgem|Libra|Escorpião|Escorpiao|Sagitário|Sagitario|Capricórnio|Capricornio|Aquário|Aquario|Peixes";

function normalizarSigno(s) {
  const map = {
    "aries": "Áries", "touro": "Touro", "gemeos": "Gêmeos", "cancer": "Câncer",
    "leao": "Leão", "virgem": "Virgem", "libra": "Libra", "escorpiao": "Escorpião",
    "sagitario": "Sagitário", "capricornio": "Capricórnio", "aquario": "Aquário", "peixes": "Peixes"
  };
  const semAcento = s.toLowerCase()
    .replace(/á|à|ã|â/g, "a").replace(/é|ê/g, "e").replace(/í/g, "i")
    .replace(/ó|õ|ô/g, "o").replace(/ú/g, "u");
  return map[semAcento] || s;
}


// Geometria canônica dos aspectos usados pelo motor. Parser, edição manual
// e correlação consultam esta mesma tabela para não divergirem entre si.
const ANGULOS_ASPECTO_GEOMETRIA = {
  "conjunção": 0, "octil": 45, "sextil": 60, "quadratura": 90,
  "trígono": 120, "tri-octil": 135, "quincúncio": 150, "oposição": 180,
};

// Um aspecto que o texto declara, mas que não pode ser reconciliado com as
// posições + orbe do próprio mapa, permanece no objeto para auditoria/UI,
// porém NÃO pode produzir sinal estatístico.
function aspectoConfiavelParaMotor(asp) {
  return !!asp && asp.geometriaInconsistente !== true;
}

function reconciliarAspectosGeometricamente(planetas) {
  if (!planetas || typeof planetas !== "object") return planetas;
  Object.entries(planetas).forEach(([origemId, ponto]) => {
    if (!Array.isArray(ponto?.aspectos)) return;
    const posOrigem = ponto?.signo ? posicaoAbsoluta(ponto.signo, ponto.grau, ponto.minutos) : null;
    if (!Number.isFinite(posOrigem)) {
      ponto.aspectos.forEach(asp => {
        asp.geometriaInconsistente = true;
        asp.erroGeometrico = null;
        asp.motivoInconsistencia = "origem_sem_posicao";
      });
      return;
    }

    ponto.aspectos.forEach(asp => {
      delete asp.geometriaInconsistente;
      delete asp.erroGeometrico;
      delete asp.motivoInconsistencia;

      const destino = planetas[asp.planeta];
      const posDestino = destino?.signo ? posicaoAbsoluta(destino.signo, destino.grau, destino.minutos) : NaN;
      const angAtual = ANGULOS_ASPECTO_GEOMETRIA[asp.tipo];
      if (!Number.isFinite(posDestino) || angAtual == null) {
        asp.geometriaInconsistente = true;
        asp.erroGeometrico = null;
        asp.motivoInconsistencia = !Number.isFinite(posDestino) ? "destino_sem_posicao" : "tipo_sem_geometria";
        return;
      }

      const delta = Math.abs(posOrigem - posDestino);
      const distancia = Math.min(delta, 360 - delta);

      // Orbe inferido não é dado bruto. Se um grau/signo foi corrigido
      // manualmente, descarta o valor inferido antigo e calcula de novo.
      if (asp.orbeInferidoGeometricamente) {
        asp.orbe = NaN;
        delete asp.orbeInferidoGeometricamente;
      }

      // Na fonte usada no histórico, os orbes explícitos ficam abaixo de 3°.
      // Se o rótulo/orbe sumiu na raspagem, a geometria consegue reconstruir
      // o valor com segurança somente quando o aspecto fica dentro desse teto.
      if (!Number.isFinite(asp.orbe)) {
        const orbeGeometrico = Math.abs(distancia - angAtual);
        if (orbeGeometrico <= 3.05) {
          asp.orbe = orbeGeometrico;
          asp.orbeInferidoGeometricamente = true;
        } else {
          asp.geometriaInconsistente = true;
          asp.erroGeometrico = orbeGeometrico;
          asp.motivoInconsistencia = "orbe_ausente_incompativel";
          return;
        }
      }

      const erroAtual = Math.abs(Math.abs(distancia - angAtual) - asp.orbe);
      if (erroAtual <= 0.12) return;

      let melhor = null;
      Object.entries(ANGULOS_ASPECTO_GEOMETRIA).forEach(([tipo, angulo]) => {
        const erro = Math.abs(Math.abs(distancia - angulo) - asp.orbe);
        if (!melhor || erro < melhor.erro) melhor = { tipo, erro };
      });
      if (melhor && melhor.erro <= 0.12) {
        if (melhor.tipo !== asp.tipo) {
          if (!asp.tipoOriginal) asp.tipoOriginal = asp.tipo;
          asp.tipo = melhor.tipo;
          asp.tipoCorrigidoGeometricamente = true;
        }
        return;
      }

      asp.geometriaInconsistente = true;
      asp.erroGeometrico = melhor?.erro ?? erroAtual;
      asp.motivoInconsistencia = "tipo_orbe_incompativeis";
    });

    // Uma correção de tipo pode transformar duas linhas textuais no mesmo
    // aspecto real. Deduplica por destino+tipo, preferindo consistente e
    // depois o menor orbe.
    const porChave = new Map();
    ponto.aspectos.forEach(asp => {
      const k = `${asp.planeta}|${asp.tipo}`;
      const atual = porChave.get(k);
      if (!atual) { porChave.set(k, asp); return; }
      const qa = [atual.geometriaInconsistente ? 1 : 0, Number.isFinite(atual.orbe) ? atual.orbe : Infinity];
      const qn = [asp.geometriaInconsistente ? 1 : 0, Number.isFinite(asp.orbe) ? asp.orbe : Infinity];
      if (qn[0] < qa[0] || (qn[0] === qa[0] && qn[1] < qa[1])) porChave.set(k, asp);
    });
    ponto.aspectos = Array.from(porChave.values());
  });
  return planetas;
}

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: 3. PARSER — leitura do texto do mapa astral colado pelo usuário
// ═══════════════════════════════════════════════════════════════════════════
// Cache por conteúdo do texto: evita reparsear o mesmo mapa repetidamente
// durante o leave-one-out (que roda 1x por item do histórico).
const _cacheParseTextoMapa = new Map();
function parseTextoMapa(texto) {
  if (!texto) return { planetas: {}, cuspides: {} };
  let cached = _cacheParseTextoMapa.get(texto);
  if (!cached) {
    cached = parseTextoMapaImpl(texto);
    _cacheParseTextoMapa.set(texto, cached);
  }
  return cached;
}

function parseTextoMapaImpl(texto) {
  const planetas = {};
  const cuspides = {};
  if (!texto) return { planetas, cuspides };

  // Normaliza texto: remove quebras estranhas, junta tudo, separa palavras grudadas
  // comuns em texto colado ("noVértice" -> "no Vértice", "Casa." -> "Casa ")
  let t = texto.replace(/\r/g, " ").replace(/\n/g, " ");
  t = t.replace(/\.(?=[A-ZÁÉÍÓÚÂÊÔÃÕ])/g, ". ");
  t = t.replace(/(no|na)(Vértice|Vertice|Vertex|Ascendente|MC|Meio)/gi, "$1 $2");
  t = t.replace(/(Casa)em/gi, "$1 em");

  // ── Planetas/pontos: "Nome em Signo Grau°Min', na/no Nª Casa"
  // Também cobre: "retrógrado" (antes ou depois do grau), casas com "na" ou "no",
  // MC/ASC sem "em ... Casa". IMPORTANTE: o trecho "...na Nª Casa" no final é
  // OPCIONAL como um todo (por isso o "(?:...)?" envolvendo tudo) — antes, só
  // partes internas eram opcionais mas a palavra "Casa" em si era obrigatória na
  // prática, então qualquer planeta sem menção explícita à casa (ou com a frase
  // de casa formatada de um jeito inesperado) fazia a regex inteira falhar e o
  // planeta inteiro sumia da leitura — sem sinal nem de signo nem de grau, e sem
  // nenhum aviso específico sobre qual era o problema.
  const regexPlaneta = new RegExp(
    `(Sol|Lua|Mercúrio|Mercurio|Vênus|Venus|Marte|Júpiter|Jupiter|Saturno|Urano|Netuno|Plutão|Plutao|Nodo Norte|Nodo Lunar|Nodo|Lilith|Quíron|Quiron|Fortuna|Vértice|Vertice|Vertex)\\.?\\s+(?:retrógrado\\s+)?(?:da \\d+[ªa]\\s*[Cc]asa\\s+)?em\\s+(${SIGNOS_REGEX})\\.?\\s+(\\d{1,2})[°º]\\s*(\\d{1,2})?'?(?:,?\\s*(retrógrado,?\\s*)?(?:na|no)?\\s*(\\d{1,2})?[ªa]?\\s*[Cc]asa)?`,
    "gi"
  );

  let m;
  while ((m = regexPlaneta.exec(t)) !== null) {
    const nomeRaw = m[1].toLowerCase().replace("jupiter", "júpiter").replace("mercurio", "mercúrio")
      .replace("venus", "vênus").replace("plutao", "plutão").replace("quiron", "quíron")
      .replace("vertice", "vértice").replace("vertex", "vértice").replace("nodo lunar", "nodo norte");
    const id = NOME_PARA_ID[nomeRaw] || NOME_PARA_ID[m[1].toLowerCase()];
    if (!id) continue;
    planetas[id] = {
      signo: normalizarSigno(m[2]),
      grau: m[3],
      minutos: m[4] || "0",
      retrogrado: /retr[oó]grado/i.test(m[0]),
      casa: m[6] || planetas[id]?.casa || "",
    };
  }

  // ── ASC: "Ascendente ... em Signo Grau°Min'" (pode ter "na Nª casa" antes do signo)
  // Aceita "a" opcional entre signo e grau ("em Sagitário a 5°21'") e "."
  // ou ";" como separador — ambos formatos aparecem no texto de origem.
  const regexAsc = new RegExp(`Ascendente[^.]*?em\\s+(${SIGNOS_REGEX})[.;]?\\s+(?:a\\s+)?(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i");
  const mAsc = t.match(regexAsc);
  if (mAsc) planetas.asc = { signo: normalizarSigno(mAsc[1]), grau: mAsc[2], minutos: mAsc[3] || "0" };

  // ── MC: "Meio do Céu em Signo Grau°Min'" ou "MC em Signo Grau°Min'"
  const regexMc = new RegExp(`(?:Meio do Céu|Meio do Ceu|\\bMC)\\s+em\\s+(${SIGNOS_REGEX})[.;]?\\s+(?:a\\s+)?(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i");
  const mMc = t.match(regexMc);
  if (mMc) planetas.mc = { signo: normalizarSigno(mMc[1]), grau: mMc[2], minutos: mMc[3] || "0" };

  // ── Fortuna: fallback caso a regex principal não pegue (ex: "Fortuna em Áries. 29°41'")
  if (!planetas.fortuna) {
    const regexFortuna = new RegExp(`Fortuna\\s+em\\s+(${SIGNOS_REGEX})[.;]?\\s*(?:a\\s+)?(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i");
    const mF = t.match(regexFortuna);
    if (mF) planetas.fortuna = { signo: normalizarSigno(mF[1]), grau: mF[2], minutos: mF[3] || "0", casa: "" };
  }

  // ── Fortuna: formatos irregulares encontrados de fato no histórico.
  // Mantemos a casa textual quando explícita, mas ela será reconciliada com
  // as cúspides mais abaixo.
  if (!planetas.fortuna) {
    const padroesFortuna = [
      new RegExp(`Fortuna\\s+(?:na|no)\\s+(\\d{1,2})[ªa]\\s*[Cc]asa\\s+em\\s+(${SIGNOS_REGEX})[.;]?\\s*(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i"),
      new RegExp(`Fortuna\\s+(?:na\\s+)?[Cc]asa\\s+em\\s+(${SIGNOS_REGEX})[.;]?\\s*(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i"),
      new RegExp(`Fortuna\\s+(?:na\\s+)?[Cc]asa\\s+de\\s+(${SIGNOS_REGEX})[.;]?\\s*(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i"),
      new RegExp(`\\(?Fortuna\\)?\\.?\\s+em\\s+(${SIGNOS_REGEX})[.;]?\\s*(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i"),
    ];
    for (let i = 0; i < padroesFortuna.length && !planetas.fortuna; i++) {
      const mf = t.match(padroesFortuna[i]);
      if (!mf) continue;
      if (i === 0) planetas.fortuna = { signo: normalizarSigno(mf[2]), grau: mf[3], minutos: mf[4] || "0", casa: mf[1] };
      else planetas.fortuna = { signo: normalizarSigno(mf[1]), grau: mf[2], minutos: mf[3] || "0", casa: "" };
    }
  }

  // ── Vértice: fallback (ex: "Vértice da 3ª Casa em Gêmeos 2°41'")
  if (!planetas.vertice) {
    const regexVert = new RegExp(`(?:Vértice|Vertice|Vertex)\\s+da\\s+(\\d{1,2})[ªa]\\s*[Cc]asa\\s+em\\s+(${SIGNOS_REGEX})[.;]?\\s*(?:a\\s+)?(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i");
    const mV = t.match(regexVert);
    if (mV) planetas.vertice = { signo: normalizarSigno(mV[2]), grau: mV[3], minutos: mV[4] || "0", casa: mV[1] };
  }
  // ── Vértice: fallback 2 — formato onde o número da Casa vem DEPOIS do
  // signo/grau: "Vértice da casa em Touro 26°28', na 5ª casa".
  if (!planetas.vertice) {
    const regexVert2 = new RegExp(`(?:Vértice|Vertice|Vertex)\\s+da\\s+[Cc]asa\\s+em\\s+(${SIGNOS_REGEX})[.;]?\\s*(?:a\\s+)?(\\d{1,2})[°º]\\s*(\\d{1,2})?'?,?\\s*(?:na|no)?\\s*(\\d{1,2})[ªa]\\s*[Cc]asa`, "i");
    const mV2 = t.match(regexVert2);
    if (mV2) planetas.vertice = { signo: normalizarSigno(mV2[1]), grau: mV2[2], minutos: mV2[3] || "0", casa: mV2[4] };
  }
  // ── Vértice: fallback 3 — formato "Vertex na 3ª casa em Gêmeos 3°10'":
  // casa ANTES do signo/grau, com "na"/"no" em vez de "da".
  if (!planetas.vertice) {
    const regexVert3 = new RegExp(`(?:Vértice|Vertice|Vertex)\\s+(?:na|no)\\s+(\\d{1,2})[ªa]\\s*[Cc]asa\\s+em\\s+(${SIGNOS_REGEX})[.;]?\\s*(?:a\\s+)?(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i");
    const mV3 = t.match(regexVert3);
    if (mV3) planetas.vertice = { signo: normalizarSigno(mV3[2]), grau: mV3[3], minutos: mV3[4] || "0", casa: mV3[1] };
  }
  // ── Vértice: fallback 4 — formato "Vértice da casa em Touro 12°14'" sem NENHUMA menção posterior de número
  // de casa (diferente do fallback 2, que exige ", na Nª casa" no final) —
  // achado real no concurso 3671, onde a casa do Vértice nunca é dita no
  // texto de jeito nenhum. Deixa casa vazia aqui: o mecanismo genérico de
  // cálculo geométrico (mais abaixo, "Fallback: calcular a casa de qualquer
  // ponto sem casa capturada") já preenche isso automaticamente a partir do
  // grau/signo contra as 12 cúspides, sem precisar duplicar esse cálculo.
  if (!planetas.vertice) {
    const regexVert4 = new RegExp(`(?:Vértice|Vertice|Vertex)\\s+da\\s+[Cc]asa\\s+em\\s+(${SIGNOS_REGEX})[.;]?\\s*(?:a\\s+)?(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "i");
    const mV4 = t.match(regexVert4);
    if (mV4) planetas.vertice = { signo: normalizarSigno(mV4[1]), grau: mV4[2], minutos: mV4[3] || "0", casa: "" };
  }

  // ── Cúspides: "Nª Casa em Signo Grau°Min'".
  // Frases de pontos especiais também podem conter esse padrão. Em vez de
  // aceitar qualquer match e depender de "o último vence", seleciona o
  // bloco completo Casa 1→Casa 12 quando ele existe.
  const regexCuspide = new RegExp(`(\\d{1,2})[ªa]\\s*[Cc]asa\\s+em\\s+(${SIGNOS_REGEX})\\s+(\\d{1,2})[°º]\\s*(\\d{1,2})?'?`, "gi");
  const ocorrenciasCuspide = [];
  let mc2;
  while ((mc2 = regexCuspide.exec(t)) !== null) {
    ocorrenciasCuspide.push({ casa: Number(mc2[1]), signo: normalizarSigno(mc2[2]), grau: mc2[3], minutos: mc2[4] || "0", indice: mc2.index });
  }
  let blocoCompleto = null;
  for (let i = 0; i <= ocorrenciasCuspide.length - 12; i++) {
    const fatia = ocorrenciasCuspide.slice(i, i + 12);
    if (fatia.every((o, idx) => o.casa === idx + 1)) blocoCompleto = fatia;
  }
  const usarCuspides = blocoCompleto || ocorrenciasCuspide;
  usarCuspides.forEach(o => {
    if (o.casa < 1 || o.casa > 12) return;
    cuspides[String(o.casa)] = { signo: o.signo, grau: o.grau, minutos: o.minutos };
  });

  // Remove posição impossível capturada por regex tolerante. O texto bruto
  // continua intacto para correção manual.
  Object.keys(planetas).forEach(id => {
    const pt = planetas[id];
    if (pt?.signo && posicaoAbsoluta(pt.signo, pt.grau, pt.minutos) == null) delete planetas[id];
  });
  Object.keys(cuspides).forEach(casa => {
    const c = cuspides[casa];
    if (c?.signo && posicaoAbsoluta(c.signo, c.grau, c.minutos) == null) delete cuspides[casa];
  });

  // ── DSC e Fundo do Céu (IC) nunca aparecem diretamente no texto do site — só
  // ASC e MC. Mas são sempre exatamente opostos (180°): mesmo grau/minutos, signo
  // oposto. Sintetizamos os dois aqui para que aspectos como "Fundo do Céu em
  // trígono com a Lua" (onde o IC é a ORIGEM do aspecto) sejam reconhecidos — sem
  // isso, essas linhas batiam na regex mas eram descartadas por a "origem" nunca
  // existir no mapa. DSC/IC não recebem pontuação própria (têm o mesmo grau do
  // ASC/MC, então pontuar os dois seria contar o mesmo sinal duas vezes).
  if (planetas.asc?.signo && Number.isFinite(posicaoAbsoluta(planetas.asc.signo, planetas.asc.grau, planetas.asc.minutos))) {
    const signoOp = signoOposto(planetas.asc.signo);
    if (signoOp) planetas.dsc = { signo: signoOp, grau: planetas.asc.grau, minutos: planetas.asc.minutos };
  }
  if (planetas.mc?.signo && Number.isFinite(posicaoAbsoluta(planetas.mc.signo, planetas.mc.grau, planetas.mc.minutos))) {
    const signoOp = signoOposto(planetas.mc.signo);
    if (signoOp) planetas.ic = { signo: signoOp, grau: planetas.mc.grau, minutos: planetas.mc.minutos };
  }

  // ── Aspectos: "ORIGEM em TIPO com/de DESTINO (Orbe: ...)" — cobre qualquer planeta,
  // ponto ou ângulo como origem (Lua, Sol, MC, ASC, Fortuna, etc.), não só a Lua.
  // Guardamos a lista de aspectos em cada ponto de origem: planetas[id].aspectos = [...]
  // Cada aspecto também guarda o orbe (graus decimais) quando encontrado logo após o
  // match no texto — usado para diferenciar aspectos quase exatos de aspectos no limite.
  const extrairOrbeProximo = (posicaoFim) => {
    // Exige o bloco de orbe imediatamente depois da relação para nunca
    // capturar o orbe do aspecto seguinte em texto quebrado.
    const janela = t.slice(posicaoFim, posicaoFim + 110);
    const m = janela.match(/^\s*\(\s*[oó]rb(?:e|ita)?:\s*(\d+)\s*[°º]\s*(\d+)?\s*'?/i);
    if (!m) return null;
    return parseInt(m[1], 10) + parseInt(m[2] || 0, 10) / 60;
  };
  const extrairStatusProximo = (posicaoFim) => {
    const janela = t.slice(posicaoFim, posicaoFim + 100).toLowerCase();
    if (/aplicando(?:-se)?|aplicante|em aplicação|em processo de aplicação|em formação|movimento subsequente|movimento de aplicação|movimento aplicado|fase aplicativa|aproximando(?:-se)?|em aproximação/.test(janela)) return "aplicando";
    if (/separando(?:-se)?|separante|em separação|em processo de separação|movimento de separação|movimento separado|fase separativa|afastando(?:-se)?|em afastamento/.test(janela)) return "separando";
    return null;
  };
  const NOMES_ORIGEM_DESTINO = "Sol|Lua|Mercúrio|Mercurio|Vênus|Venus|Marte|Júpiter|Jupiter|Saturno|Urano|Netuno|Plutão|Plutao|Nodo Norte|Nodo Lunar|Nó|Nodo|Lilith|Quíron|Quiron|Fortuna|Fortune|Vértice|Vertice|Vertex|MC|Meio do Céu|Meio do Ceu|Ascendente|ASC|Descendente|DSC|Fundo do Céu|Fundo do Ceu|IC";
  // Lista de variações de grafia dos tipos de aspecto — usada pelas 3
  // regexes abaixo, que reconhecem ordens de palavras diferentes no texto
  // ("ORIGEM em TIPO com DESTINO", "TIPO do ORIGEM com DESTINO", "ORIGEM
  // TIPO DESTINO" direto), não são redundantes entre si.
  // BUG CORRIGIDO (achado de auditoria): faltava a variação "trióctilo"
  // (acento no "o", não no "í") — normalizarTipoAspecto já sabia
  // normalizar essa grafia (cai no mesmo regex ^tr[ií].?[oó]ctilo?$), mas
  // a regex de CAPTURA (usada pra achar o aspecto no texto bruto) nunca
  // reconhecia essa variação especificamente, então o aspecto inteiro
  // passava despercebido se o texto de origem usasse essa grafia. Sem
  // impacto no histórico atual (confirmado: 0 de 321 mapas usam essa
  // grafia), mas é um risco real para mapas futuros de outra fonte.
  const NOMES_TIPO_ASPECTO = "trígono-óctil|trigono-octil|trígono octil|trigono octil|tríodo-óctil|triodo-octil|trí-óctilo|tri-óctilo|trí-octilo|tri-octilo|trí-óctil|trí-octil|tri-óctil|tri-octil|tri-octile|trióctila|tríoctila|trioctila|trióctilo|tríoctilo|trioctilo|trióctil|tríoctil|trioctil|tri óctil|tri octil|tríctil|trictil|tríotil|triotil|triógono|triogono|trígono|trigono|triângulo|triangulo|sextil|quadratura|quadrado|quadrada|oposição|oposicao|quincúncio|quincuncio|quincunx|conjunção|conjuncao|óctilo|octilo|óctila|octila|óctil|octil|octile";
  const normalizarTipoAspecto = (tipo) => {
    const bruto = String(tipo || "").toLowerCase().trim().replace(/\s+/g, " ");
    if (/^(?:tr[ií]gono[ -]?[oó]ctil|tr[ií]odo-[oó]ctil|tr[ií][ -]?[oó]ctil[oa]?|tr[ií][oó]ctil[oa]?|tri[ -]?octile)$/.test(bruto) || /^(?:tríctil|trictil|tríotil|triotil)$/.test(bruto)) return "tri-octil";
    if (bruto === "trigono" || bruto === "triógono" || bruto === "triogono" || bruto === "triângulo" || bruto === "triangulo") return "trígono";
    if (bruto === "quadrado" || bruto === "quadrada") return "quadratura";
    if (bruto === "oposicao") return "oposição";
    if (bruto === "quincuncio" || bruto === "quincunx") return "quincúncio";
    if (bruto === "conjuncao") return "conjunção";
    if (/^(?:[oó]ctil[oa]?|octile)$/.test(bruto)) return "octil";
    return bruto;
  };
  const regexAspecto = new RegExp(
    `(${NOMES_ORIGEM_DESTINO})\\s+em\\s+(${NOMES_TIPO_ASPECTO})\\s+(?:com|de|ao|aos|à|às|a|o|no|na|nos|nas)?\\s*(?:o|a|os|as)?\\s*(${NOMES_ORIGEM_DESTINO})`,
    "gi"
  );
  let ma;
  while ((ma = regexAspecto.exec(t)) !== null) {
    const origemId = normalizarNomeAspecto(ma[1]);
    const destinoId = normalizarNomeAspecto(ma[3]);
    if (!origemId || !destinoId) continue;
    if (!planetas[origemId]) continue; // só guarda se o ponto de origem foi identificado no mapa
    if (!planetas[origemId].aspectos) planetas[origemId].aspectos = [];
    // Evita duplicar o mesmo aspecto quando ele aparece repetido no texto
    // (às vezes o mesmo aspecto é listado 2x, artefato do site de origem).
    const jaTemAsp1 = planetas[origemId].aspectos.some(a => a.planeta === destinoId && a.tipo === normalizarTipoAspecto(ma[2]));
    if (!jaTemAsp1) {
      planetas[origemId].aspectos.push({ tipo: normalizarTipoAspecto(ma[2]), planeta: destinoId, orbe: extrairOrbeProximo(regexAspecto.lastIndex), status: extrairStatusProximo(regexAspecto.lastIndex) });
    }
  }

  // ── Segundo padrão: "TIPO do/de ORIGEM com DESTINO" — ex: "Trígono do Ascendente
  // com Urano", "Quadratura do Meio do Céu com Plutão".
  const regexAspecto2 = new RegExp(
    `(?:(${NOMES_TIPO_ASPECTO})\\s+(?:do|da|de)?\\s*(${NOMES_ORIGEM_DESTINO})\\s+(?:com|de|ao|aos|à|às|a|o|no|na|nos|nas)?\\s*(?:o|a|os|as)?\\s*(${NOMES_ORIGEM_DESTINO}))`,
    "gi"
  );
  let ma2;
  while ((ma2 = regexAspecto2.exec(t)) !== null) {
    const origemId = normalizarNomeAspecto(ma2[2]);
    const destinoId = normalizarNomeAspecto(ma2[3]);
    if (!origemId || !destinoId || origemId === destinoId) continue;
    if (!planetas[origemId]) continue;
    if (!planetas[origemId].aspectos) planetas[origemId].aspectos = [];
    const jaTem = planetas[origemId].aspectos.some(a => a.planeta === destinoId && a.tipo === normalizarTipoAspecto(ma2[1]));
    if (!jaTem) planetas[origemId].aspectos.push({ tipo: normalizarTipoAspecto(ma2[1]), planeta: destinoId, orbe: extrairOrbeProximo(regexAspecto2.lastIndex), status: extrairStatusProximo(regexAspecto2.lastIndex) });
  }

  // ── Terceiro padrão: "ORIGEM TIPO DESTINO" direto, sem "em"/"do"/conector nenhum —
  // ex: "MC Quadratura Júpiter", "Sol quadratura Saturno", "Lua trígono Vênus". O
  // comentário original já dizia cobrir esse formato, mas nenhuma das duas regexes
  // acima de fato casava essa ordem de palavras (ORIGEM antes do TIPO) — o segundo
  // padrão exige TIPO antes da ORIGEM ("Quadratura do Ascendente..."), não depois.
  // Sem essa terceira regex, qualquer aspecto escrito nesse formato (comum quando o
  // ângulo/planeta já foi citado antes) era silenciosamente ignorado.
  const regexAspecto3 = new RegExp(
    `(${NOMES_ORIGEM_DESTINO})\\s+(${NOMES_TIPO_ASPECTO})\\s+(?:com|de|ao|aos|à|às|a|o|no|na|nos|nas)?\\s*(?:o|a|os|as)?\\s*(${NOMES_ORIGEM_DESTINO})`,
    "gi"
  );
  let ma3;
  while ((ma3 = regexAspecto3.exec(t)) !== null) {
    const origemId = normalizarNomeAspecto(ma3[1]);
    const destinoId = normalizarNomeAspecto(ma3[3]);
    if (!origemId || !destinoId || origemId === destinoId) continue;
    if (!planetas[origemId]) continue;
    if (!planetas[origemId].aspectos) planetas[origemId].aspectos = [];
    const jaTem = planetas[origemId].aspectos.some(a => a.planeta === destinoId && a.tipo === normalizarTipoAspecto(ma3[2]));
    if (!jaTem) planetas[origemId].aspectos.push({ tipo: normalizarTipoAspecto(ma3[2]), planeta: destinoId, orbe: extrairOrbeProximo(regexAspecto3.lastIndex), status: extrairStatusProximo(regexAspecto3.lastIndex) });
  }

  // ── Fallback por cláusula de Orbe. A fonte possui ordens e grafias que
  // não cabem com segurança nas três regexes acima. Recupera apenas relações
  // que podem ser confirmadas por posição + ângulo + orbe.
  const detectarTipoAspectoLivre = (textoLivre) => {
    const x = String(textoLivre || "").toLowerCase().replace(/\s+/g, " ");
    if (/tr[ií]gono[ -]?[oó]ctil|tr[ií]odo-[oó]ctil|tr[ií][ -]?[oó]ctil[oa]?|tr[ií][oó]ctil[oa]?|tri[ -]?octile|tr[ií]ctil|tr[ií]otil/.test(x)) return "tri-octil";
    if (/quinc[uú]ncio|quincunx/.test(x)) return "quincúncio";
    if (/conjun[cç][aã]o/.test(x)) return "conjunção";
    if (/oposi[cç][aã]o/.test(x)) return "oposição";
    if (/quadratura|quadrad[oa]/.test(x)) return "quadratura";
    if (/tr[ií][oó]?gono|tri[aâ]ngulo/.test(x)) return "trígono";
    if (/sextil/.test(x)) return "sextil";
    if (/(?:^|[^a-záéíóúãõâêôç])(?:[oó]ctil[oa]?|octile)(?:$|[^a-záéíóúãõâêôç])/.test(x)) return "octil";
    return null;
  };
  const detectarStatusLivre = (textoLivre) => {
    const x = String(textoLivre || "").toLowerCase();
    if (/aplicando(?:-se)?|aplicante|em aplicação|em processo de aplicação|em formação|movimento subsequente|movimento de aplicação|movimento aplicado|fase aplicativa|aproximando(?:-se)?|em aproximação/.test(x)) return "aplicando";
    if (/separando(?:-se)?|separante|em separação|em processo de separação|movimento de separação|movimento separado|fase separativa|afastando(?:-se)?|em afastamento/.test(x)) return "separando";
    return null;
  };
  const regexPontoFallback = /Meio do Céu|Meio do Ceu|Fundo do Céu|Fundo do Ceu|Nodo Norte|Nodo Lunar|Nó|Ascendente|Descendente|Vértice|Vertice|Vertex|Mercúrio|Mercurio|Vênus|Venus|Júpiter|Jupiter|Plutão|Plutao|Quíron|Quiron|Saturno|Netuno|Urano|Marte|Lilith|Fortuna|Fortune|Sol|Lua|Nodo|\bMC\b|\bASC\b|\bDSC\b|\bIC\b/gi;
  const regexBlocoOrbe = /\(\s*[oó]rb(?:e|ita)?:\s*(\d+)\s*[°º]\s*(\d+)?\s*'?\s*,?\s*([^)]*)\)/gi;
  const erroGeometricoParAspecto = (idA, idB, tipo, orbe) => {
    const a = planetas[idA], b = planetas[idB];
    const pa = a?.signo ? posicaoAbsoluta(a.signo, a.grau, a.minutos) : NaN;
    const pb = b?.signo ? posicaoAbsoluta(b.signo, b.grau, b.minutos) : NaN;
    const ang = ANGULOS_ASPECTO_GEOMETRIA[tipo];
    if (!Number.isFinite(pa) || !Number.isFinite(pb) || ang == null || !Number.isFinite(orbe)) return Infinity;
    const delta = Math.abs(pa - pb), distancia = Math.min(delta, 360 - delta);
    return Math.abs(Math.abs(distancia - ang) - orbe);
  };
  const paresUnicosQueFecham = (idsCandidatos, tipo, orbe) => {
    const idsValidos = [...new Set(idsCandidatos)].filter(id => planetas[id]);
    const pares = [];
    for (let i = 0; i < idsValidos.length; i++) for (let j = i + 1; j < idsValidos.length; j++) {
      if (erroGeometricoParAspecto(idsValidos[i], idsValidos[j], tipo, orbe) <= 0.12) pares.push([idsValidos[i], idsValidos[j]]);
    }
    return pares;
  };

  let mo, ultimoSujeitoFallback = null;
  while ((mo = regexBlocoOrbe.exec(t)) !== null) {
    const antes = t.slice(Math.max(0, mo.index - 220), mo.index);
    const corte = Math.max(antes.lastIndexOf(")"), antes.lastIndexOf("."), antes.lastIndexOf(";"));
    const clausula = antes.slice(corte + 1).trim();
    const tipo = detectarTipoAspectoLivre(clausula);
    if (!tipo) { ultimoSujeitoFallback = null; continue; }
    const ids = [];
    regexPontoFallback.lastIndex = 0;
    let mp;
    while ((mp = regexPontoFallback.exec(clausula)) !== null) {
      const id = normalizarNomeAspecto(mp[0]);
      if (id && ids[ids.length - 1] !== id) ids.push(id);
    }
    const distintos = [...new Set(ids)];
    const orbe = parseInt(mo[1], 10) + parseInt(mo[2] || 0, 10) / 60;
    const status = detectarStatusLivre(mo[3]);
    let origemId = null, destinoId = null, resolvidoGeometricamente = false;

    if (distintos.length === 2) {
      [origemId, destinoId] = distintos;
      ultimoSujeitoFallback = origemId;
    } else if (distintos.length === 1) {
      const destino = distintos[0];
      if (ultimoSujeitoFallback && ultimoSujeitoFallback !== destino && erroGeometricoParAspecto(ultimoSujeitoFallback, destino, tipo, orbe) <= 0.12) {
        origemId = ultimoSujeitoFallback; destinoId = destino; resolvidoGeometricamente = true;
      } else {
        const pares = Object.keys(planetas).filter(id => id !== destino && erroGeometricoParAspecto(id, destino, tipo, orbe) <= 0.12).map(id => [id, destino]);
        if (pares.length === 1) { [origemId, destinoId] = pares[0]; ultimoSujeitoFallback = origemId; resolvidoGeometricamente = true; }
      }
    } else if (distintos.length >= 3) {
      const pares = paresUnicosQueFecham(distintos, tipo, orbe);
      if (pares.length === 1) { [origemId, destinoId] = pares[0]; ultimoSujeitoFallback = origemId; resolvidoGeometricamente = true; }
    }
    if (!origemId || !destinoId || origemId === destinoId || !planetas[origemId] || !planetas[destinoId]) continue;
    const existente = (planetas[origemId].aspectos || []).find(a => a.planeta === destinoId && a.tipo === tipo)
      || (planetas[destinoId].aspectos || []).find(a => a.planeta === origemId && a.tipo === tipo);
    if (existente) {
      if (!Number.isFinite(existente.orbe)) existente.orbe = orbe;
      if (!existente.status && status) existente.status = status;
      continue;
    }
    if (!planetas[origemId].aspectos) planetas[origemId].aspectos = [];
    planetas[origemId].aspectos.push({ tipo, planeta: destinoId, orbe, status, origemFallbackClausula: true, ...(resolvidoGeometricamente ? { sujeitoResolvidoGeometricamente: true } : {}) });
  }

  // ── Reconciliação geométrica de casas. A casa é definida pelas cúspides;
  // se o texto contradiz a geometria, preserva o valor bruto em
  // `casaDeclarada` e usa a casa geométrica no motor.
  Object.entries(planetas).forEach(([id, pt]) => {
    if (["asc", "mc", "dsc", "ic"].includes(id)) return;
    if (!pt?.signo || pt?.grau == null) return;
    const pos = posicaoAbsoluta(pt.signo, pt.grau, pt.minutos);
    const casaGeo = casaPorPosicaoAbs(cuspides, pos);
    if (!casaGeo) return;
    const geo = String(casaGeo);
    if (pt.casa && String(pt.casa) !== geo) {
      pt.casaDeclarada = String(pt.casa);
      pt.casaCorrigidaGeometricamente = true;
    }
    pt.casa = geo;
  });

  reconciliarAspectosGeometricamente(planetas);

  return { planetas, cuspides };
}

// ── Camada de correções manuais persistentes ────────────────────────────────
// O texto bruto continua sendo a fonte primária, mas uma correção feita nos
// campos manuais precisa sobreviver a reload/reprocessamento. O override guarda
// somente o DELTA em relação ao parser, nunca uma segunda cópia inteira do mapa.
function normalizarMapaOverrideSeguro(override) {
  if (!override || typeof override !== "object" || Array.isArray(override)) return null;
  const signosValidos = new Set(SIGNOS.map(s => s.nome));
  const configs = new Map(PLANETAS_CONFIG.map(c => [c.id, c]));
  const out = { planetas: {}, cuspides: {} };
  const normNum = (v, min, max) => {
    if (v == null || String(v).trim() === "") return "";
    const n = Number(v);
    return Number.isInteger(n) && n >= min && n <= max ? String(n) : undefined;
  };

  if (override.planetas && typeof override.planetas === "object" && !Array.isArray(override.planetas)) {
    Object.entries(override.planetas).forEach(([id, diff]) => {
      const cfg = configs.get(id);
      if (!cfg || !diff || typeof diff !== "object" || Array.isArray(diff)) return;
      const limpo = {};
      if (Object.prototype.hasOwnProperty.call(diff, "signo")) {
        const signo = String(diff.signo ?? "").trim();
        if (signo === "" || signosValidos.has(signo)) limpo.signo = signo;
      }
      if (Object.prototype.hasOwnProperty.call(diff, "grau")) {
        const v = normNum(diff.grau, 0, 29); if (v !== undefined) limpo.grau = v;
      }
      if (Object.prototype.hasOwnProperty.call(diff, "minutos")) {
        const v = normNum(diff.minutos, 0, 59); if (v !== undefined) limpo.minutos = v;
      }
      if (cfg.tipo !== "angulo" && Object.prototype.hasOwnProperty.call(diff, "casa")) {
        const v = normNum(diff.casa, 1, 12); if (v !== undefined) limpo.casa = v;
      }
      if (Object.prototype.hasOwnProperty.call(diff, "retrogrado") && typeof diff.retrogrado === "boolean") limpo.retrogrado = diff.retrogrado;
      if (Object.keys(limpo).length) out.planetas[id] = limpo;
    });
  }

  if (override.cuspides && typeof override.cuspides === "object" && !Array.isArray(override.cuspides)) {
    Object.entries(override.cuspides).forEach(([casaRaw, diff]) => {
      const casa = Number(casaRaw);
      if (!Number.isInteger(casa) || casa < 1 || casa > 12 || !diff || typeof diff !== "object" || Array.isArray(diff)) return;
      const limpo = {};
      if (Object.prototype.hasOwnProperty.call(diff, "signo")) {
        const signo = String(diff.signo ?? "").trim();
        if (signo === "" || signosValidos.has(signo)) limpo.signo = signo;
      }
      if (Object.prototype.hasOwnProperty.call(diff, "grau")) {
        const v = normNum(diff.grau, 0, 29); if (v !== undefined) limpo.grau = v;
      }
      if (Object.prototype.hasOwnProperty.call(diff, "minutos")) {
        const v = normNum(diff.minutos, 0, 59); if (v !== undefined) limpo.minutos = v;
      }
      if (Object.keys(limpo).length) out.cuspides[casa] = limpo;
    });
  }
  return Object.keys(out.planetas).length || Object.keys(out.cuspides).length ? out : null;
}

function criarMapaOverride(textoBase, planetasEditados, cuspidesEditadas) {
  const base = parseTextoMapa(textoBase || "");
  const ov = { planetas: {}, cuspides: {} };
  const camposPonto = ["signo", "grau", "minutos", "casa", "retrogrado"];
  PLANETAS_CONFIG.forEach(cfg => {
    const atual = planetasEditados?.[cfg.id];
    const original = base.planetas?.[cfg.id] || {};
    if (!atual) return;
    const diff = {};
    camposPonto.forEach(campo => {
      if (campo === "casa" && cfg.tipo === "angulo") return;
      const a = atual[campo] ?? (campo === "retrogrado" ? false : "");
      const b = original[campo] ?? (campo === "retrogrado" ? false : "");
      if (String(a) !== String(b)) diff[campo] = campo === "retrogrado" ? !!a : String(a);
    });
    if (Object.keys(diff).length) ov.planetas[cfg.id] = diff;
  });
  for (let casa = 1; casa <= 12; casa++) {
    const atual = cuspidesEditadas?.[casa];
    const original = base.cuspides?.[casa] || {};
    if (!atual) continue;
    const diff = {};
    ["signo", "grau", "minutos"].forEach(campo => {
      const a = String(atual[campo] ?? ""), b = String(original[campo] ?? "");
      if (a !== b) diff[campo] = a;
    });
    if (Object.keys(diff).length) ov.cuspides[casa] = diff;
  }
  return normalizarMapaOverrideSeguro(ov);
}

function obterMapaInterpretado(item) {
  const texto = typeof item === "string" ? item : (item?.textoMapa || "");
  const base = parseTextoMapa(texto);
  // Clone profundo dos aspectos para nunca mutar o objeto cacheado do parser.
  const planetas = Object.fromEntries(Object.entries(base.planetas || {}).map(([id, v]) => [id, {
    ...v,
    aspectos: Array.isArray(v?.aspectos) ? v.aspectos.map(a => ({ ...a })) : v?.aspectos,
  }]));
  const cuspides = Object.fromEntries(Object.entries(base.cuspides || {}).map(([k, v]) => [k, { ...v }]));
  const ov = normalizarMapaOverrideSeguro(typeof item === "string" ? null : item?.mapaOverride);

  if (ov?.planetas) Object.entries(ov.planetas).forEach(([id, diff]) => {
    planetas[id] = { ...(planetas[id] || {}), ...diff };
  });
  if (ov?.cuspides) Object.entries(ov.cuspides).forEach(([casa, diff]) => {
    cuspides[casa] = { ...(cuspides[casa] || {}), ...diff };
  });

  // Cúspide corrigida muda a casa geométrica de todos os pontos. Só não
  // recalcula uma casa que o usuário explicitamente sobrescreveu.
  Object.entries(planetas).forEach(([id, pt]) => {
    if (["asc", "mc", "dsc", "ic"].includes(id)) return;
    if (Object.prototype.hasOwnProperty.call(ov?.planetas?.[id] || {}, "casa")) return;
    const pos = pt?.signo ? posicaoAbsoluta(pt.signo, pt.grau, pt.minutos) : null;
    const casaGeo = casaPorPosicaoAbs(cuspides, pos);
    if (casaGeo) pt.casa = String(casaGeo);
  });

  // DSC/IC são derivados; apagar/corrigir ASC/MC precisa refletir neles.
  if (planetas.asc?.signo && Number.isFinite(posicaoAbsoluta(planetas.asc.signo, planetas.asc.grau, planetas.asc.minutos))) {
    const op = signoOposto(planetas.asc.signo);
    if (op) planetas.dsc = { ...(planetas.dsc || {}), signo: op, grau: planetas.asc.grau, minutos: planetas.asc.minutos };
  } else delete planetas.dsc;
  if (planetas.mc?.signo && Number.isFinite(posicaoAbsoluta(planetas.mc.signo, planetas.mc.grau, planetas.mc.minutos))) {
    const op = signoOposto(planetas.mc.signo);
    if (op) planetas.ic = { ...(planetas.ic || {}), signo: op, grau: planetas.mc.grau, minutos: planetas.mc.minutos };
  } else delete planetas.ic;

  reconciliarAspectosGeometricamente(planetas);
  return { planetas, cuspides };
}

function mapaInterpretavel(item) {
  if (!item?.textoMapa || typeof item.textoMapa !== "string" || !item.textoMapa.trim()) return false;
  const { planetas } = obterMapaInterpretado(item);
  return PLANETAS_CONFIG.some(cfg => {
    const pt = planetas?.[cfg.id];
    return !!pt?.signo && Number.isFinite(posicaoAbsoluta(pt.signo, pt.grau, pt.minutos));
  });
}

function assinaturaMapaOverride(item) {
  return JSON.stringify(normalizarMapaOverrideSeguro(item?.mapaOverride) || null);
}

function validarCamposMapa(planetas, cuspides) {
  const erros = [];
  const signosValidos = new Set(SIGNOS.map(s => s.nome));
  const inteiroFaixa = (v, min, max) => {
    if (v == null || String(v).trim() === "") return true;
    const n = Number(v);
    return Number.isInteger(n) && n >= min && n <= max;
  };
  PLANETAS_CONFIG.forEach(cfg => {
    const pt = planetas?.[cfg.id];
    if (!pt) return;
    if (pt.signo != null && String(pt.signo).trim() !== "" && !signosValidos.has(String(pt.signo))) erros.push(`${cfg.nome}: signo inválido`);
    if (!inteiroFaixa(pt.grau, 0, 29)) erros.push(`${cfg.nome}: grau deve estar entre 0 e 29`);
    if (!inteiroFaixa(pt.minutos, 0, 59)) erros.push(`${cfg.nome}: minutos devem estar entre 0 e 59`);
    if (cfg.tipo !== "angulo" && !inteiroFaixa(pt.casa, 1, 12)) erros.push(`${cfg.nome}: casa deve estar entre 1 e 12`);
  });
  for (let casa = 1; casa <= 12; casa++) {
    const c = cuspides?.[casa];
    if (!c) continue;
    if (c.signo != null && String(c.signo).trim() !== "" && !signosValidos.has(String(c.signo))) erros.push(`Cúspide ${casa}: signo inválido`);
    if (!inteiroFaixa(c.grau, 0, 29)) erros.push(`Cúspide ${casa}: grau deve estar entre 0 e 29`);
    if (!inteiroFaixa(c.minutos, 0, 59)) erros.push(`Cúspide ${casa}: minutos devem estar entre 0 e 59`);
  }
  const geo = validarGeometriaCuspides(cuspides);
  if (geo.completa && !geo.valida) erros.push(geo.motivo === "duplicada" ? "Cúspides: existem duas casas na mesma posição zodiacal" : "Cúspides: ordem zodiacal inconsistente");
  return erros;
}

// ─── Funções de análise ───────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: 4. MOTOR DE ANÁLISE — geometria (posição, distância, casas)
// ═══════════════════════════════════════════════════════════════════════════
// Posição zodiacal absoluta (0-360°) de um ponto, a partir do signo + grau + minutos.
// Necessária para comparar proximidade real entre dois pontos — comparar só o
// número do grau (ignorando o signo) confundiria uma oposição exata (mesmo grau,
// signos opostos, 180° de distância real) com uma conjunção próxima.
function posicaoAbsoluta(signoNome, grau, minutos) {
  const s = SIGNOS.find(x => x.nome === signoNome);
  if (!s || grau == null || String(grau).trim() === "") return null;
  const g = Number(grau);
  const m = minutos == null || String(minutos).trim() === "" ? 0 : Number(minutos);
  if (!Number.isInteger(g) || g < 0 || g > 29 || !Number.isInteger(m) || m < 0 || m > 59) return null;
  return (s.num - 1) * 30 + g + m / 60;
}

function validarGeometriaCuspides(cuspides) {
  const abs = [];
  for (let casa = 1; casa <= 12; casa++) {
    const c = cuspides?.[casa];
    const p = c?.signo ? posicaoAbsoluta(c.signo, c.grau, c.minutos) : null;
    if (!Number.isFinite(p)) return { completa: false, valida: false, motivo: "incompleta" };
    abs.push(p);
  }
  let inversoes = 0;
  for (let i = 1; i < abs.length; i++) {
    if (Math.abs(abs[i] - abs[i - 1]) < 1e-9) return { completa: true, valida: false, motivo: "duplicada", abs };
    if (abs[i] < abs[i - 1]) inversoes++;
  }
  if (Math.abs(abs[11] - abs[0]) < 1e-9) return { completa: true, valida: false, motivo: "duplicada", abs };
  if (inversoes > 1) return { completa: true, valida: false, motivo: "ordem", abs };
  return { completa: true, valida: true, motivo: null, abs };
}

// Distância circular entre duas posições absolutas (0-360°), sempre o menor arco.
// Dado um conjunto de cúspides (1-12) e uma posição absoluta qualquer, devolve em
// qual casa ela cai — mesma lógica geométrica usada dentro do parser para achar a
// casa de planetas sem casa explícita no texto, reaproveitada aqui para pontos
// calculados (ex: Parte do Espírito) que não vêm do texto de jeito nenhum.
function casaPorPosicaoAbs(cuspides, posAbsolutaAlvo) {
  if (posAbsolutaAlvo == null) return null;
  // Normaliza para [0, 360) — 360 é equivalente a 0°.
  const alvo = ((posAbsolutaAlvo % 360) + 360) % 360;
  const geometria = validarGeometriaCuspides(cuspides);
  if (!geometria.completa || !geometria.valida) return null;
  const cuspidesOrdenadas = Object.entries(cuspides || {})
    .map(([casa, c]) => ({ casa: parseInt(casa), abs: posicaoAbsoluta(c.signo, c.grau, c.minutos) }))
    .filter(c => c.abs !== null)
    .sort((a, b) => a.casa - b.casa);
  if (cuspidesOrdenadas.length !== 12) return null;
  for (let i = 0; i < 12; i++) {
    const atual = cuspidesOrdenadas[i];
    const proxima = cuspidesOrdenadas[(i + 1) % 12];
    let ini = atual.abs, fim = proxima.abs;
    if (fim <= ini) fim += 360;
    let p = alvo;
    if (p < ini) p += 360;
    if (p >= ini && p < fim) return atual.casa;
  }
  return null;
}

// Regente tradicional de um signo
function regenteDoSigno(nomeSigno) {
  const s = SIGNOS.find(s => s.nome === nomeSigno);
  return s ? s.regente : null;
}

// id do planeta a partir do nome do regente (ex: "Júpiter" -> "jupiter")
const NOME_REGENTE_PARA_ID = {
  "Sol": "sol", "Lua": "lua", "Mercúrio": "mercurio", "Vênus": "venus",
  "Marte": "marte", "Júpiter": "jupiter", "Saturno": "saturno",
};

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: 5. MOTOR DE ANÁLISE — considerações de radicalidade
// ═══════════════════════════════════════════════════════════════════════════

// ── "Considerações antes do julgamento" (astrologia horária clássica, Lilly) ──
// Regra tradicional: se o Ascendente está nos primeiros graus (0-3°) ou nos últimos
// (27-30°) de um signo, o mapa é considerado "cedo demais" ou "tarde demais" para um
// julgamento confiável — não é uma pontuação, é um aviso sobre a confiabilidade do
// mapa em si, direto da doutrina clássica (não é regra inventada para a Lotofácil).
function verificarRadicalidade(planetas) {
  const avisos = [];
  const asc = planetas?.asc;
  if (asc?.grau != null && asc.grau !== "") {
    const g = parseInt(asc.grau);
    if (g <= 3) {
      avisos.push(`Ascendente em ${g}° de ${asc.signo || "signo"} — tradicionalmente considerado "cedo demais" para um julgamento confiável (regra clássica: ASC abaixo de 3°).`);
    } else if (g >= 27) {
      avisos.push(`Ascendente em ${g}° de ${asc.signo || "signo"} — tradicionalmente considerado "tarde demais" para um julgamento confiável (regra clássica: ASC acima de 27°).`);
    }
  }
  return avisos;
}

// ═══════════════════════════════════════════════════════════════════════════
// CORRELAÇÃO DIRETA: sinal → NÚMERO ESPECÍFICO (não "sinal → qualquer número")
// ═══════════════════════════════════════════════════════════════════════════
// Pergunta respondida aqui: "quando esse sinal apareceu, qual número
// específico saiu mais" — ex: "toda vez que Mercúrio esteve na 5ª Casa, o
// 17 saiu desproporcionalmente mais".
//
// CUIDADO CRÍTICO — autocorrelação por período: planetas não pulam de casa em
// casa a cada dia; uma condição como "Mercúrio na 5ª Casa" pode ficar
// verdadeira por semanas seguidas (o mapa inteiro se desloca devagar dia após
// dia). Isso significa que "23 dias com essa condição" quase sempre NÃO são 23
// observações independentes — são só 1 ou 2 janelas de tempo compridas. Se um
// número qualquer ficar "quente" por acaso durante essa mesma janela (o que já
// vimos acontecer várias vezes nessa pesquisa; com 195 mapas disponíveis hoje,
// os dois vão parecer correlacionados sem ter nenhuma relação real.
// A unidade estatística usada abaixo é o CONCURSO/DIA, sem agrupamento
// automático em “streaks”. A autocorrelação temporal continua sendo um
// risco real; por isso os achados são hipóteses e precisam de validação
// temporal fora da amostra (walk-forward), nunca confirmação isolada.
//
// AVISO PERMANENTE DE MÚLTIPLAS COMPARAÇÕES: são milhares de pares
// condição×número. Mesmo sem relação real, algumas associações aparentes
// surgirão por acaso; amostra e estabilidade temporal importam.
// Camada única de validação/comparação de data BR — evita que datas
// inválidas (ex: "31/02") ou mal formatadas afetem a ordenação do
// histórico de forma inconsistente entre diferentes pontos do código.
function isDataBRValida(dataStr) {
  const m = dataStr && dataStr.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!m) return null;
  const dia = parseInt(m[1]), mes = parseInt(m[2]), ano = parseInt(m[3]);
  if (mes < 1 || mes > 12 || dia < 1 || dia > 31) return null;
  const ultimoDiaDoMes = new Date(ano, mes, 0).getDate();
  if (dia > ultimoDiaDoMes) return null;
  return { dia, mes, ano };
}

function parseDataBR(dataStr) {
  const d = isDataBRValida(dataStr);
  if (!d) return null;
  return new Date(d.ano, d.mes - 1, d.dia);
}

function chaveDataBR(dataStr) {
  const d = isDataBRValida(dataStr);
  if (!d) return null;
  return d.ano * 10000 + d.mes * 100 + d.dia;
}

// Comparador de duas datas BR (string) para usar direto em Array.sort.
// Para "mais recente primeiro" (ordem decrescente), inverta os argumentos
// na chamada (compararDataBR(b, a)) em vez de duplicar a função. Compara
// numericamente via chaveDataBR (não como texto — comparação de string
// ordenaria "5/8" depois de "06/08" por causa do caractere '5' > '0');
// datas inválidas ou ausentes vão sempre para o fim da lista.
function compararDataBR(dataA, dataB) {
  const chaveA = chaveDataBR(dataA);
  const chaveB = chaveDataBR(dataB);
  if (chaveA == null && chaveB == null) return 0;
  if (chaveA == null) return 1;
  if (chaveB == null) return -1;
  return chaveA - chaveB;
}

function numeroConcursoCronologico(item) {
  const c = normalizarConcurso(item?.concurso);
  return /^\d+$/.test(c) ? Number(c) : null;
}

// Ordem cronológica ÚNICA para todo o sistema. Se os dois registros têm
// número oficial, o concurso define a sequência real do sorteio (inclusive
// quando dois concursos caem na mesma data). Data é fallback para registros
// ainda sem número. Isso evita que walk-forward/vida útil/degradação usem
// uma ordem diferente da tela de Histórico.
function compararHistoricoCronologico(a, b) {
  const ca = numeroConcursoCronologico(a), cb = numeroConcursoCronologico(b);
  if (ca != null && cb != null && ca !== cb) return ca - cb;
  const da = chaveDataBR(a?.data), db = chaveDataBR(b?.data);
  if (da != null && db != null && da !== db) return da - db;
  if (da != null && db == null) return -1;
  if (da == null && db != null) return 1;
  if (ca != null && cb == null) return -1;
  if (ca == null && cb != null) return 1;
  return String(a?.id ?? '').localeCompare(String(b?.id ?? ''));
}

// BUG CORRIGIDO (auditoria externa, confirmado): merge de histórico
// (carregamento inicial e importação de backup) usava uma chave
// concatenada `${concurso}|${data}` para identificar "o mesmo concurso" —
// isso trata "3700|20/08/2026" e "3700|21/08/2026" como REGISTROS
// DIFERENTES mesmo sendo o mesmo concurso com a data só corrigida,
// gerando duplicata em vez de atualizar o existente. Corrigido: concurso
// (quando presente e não vazio) já é identidade suficiente sozinho — é o
// número oficial do sorteio, não deveria precisar de mais nada pra
// identificar unicamente um registro. Data só entra como identidade
// quando não há concurso preenchido (dado ainda incompleto).
function normalizarConcurso(valor) {
  const raw = String(valor ?? "").trim();
  if (!/^\d+$/.test(raw)) return raw;
  return raw.replace(/^0+(?=\d)/, "");
}
function concursoValido(valor) {
  const c = normalizarConcurso(valor);
  return /^\d+$/.test(c) && Number(c) > 0;
}
function horaValidaOuVazia(valor) {
  const h = String(valor ?? "").trim().toLowerCase();
  if (h === "") return true;
  // Compatível com os dados já existentes ("21", "11h", "11 horas")
  // e com horário completo ("08:30").
  const m = h.match(/^(\d{1,2})(?::([0-5]\d))?\s*(?:h|horas?)?$/);
  if (!m) return false;
  const hora = Number(m[1]);
  return Number.isInteger(hora) && hora >= 0 && hora <= 23;
}
function chaveIdentidadeConcurso(item) {
  const concurso = normalizarConcurso(item?.concurso);
  if (concurso) return `c:${concurso}`;
  const data = String(item?.data ?? "").trim();
  if (data) return `d:${data}`;
  const id = String(item?.id ?? "").trim();
  return id ? `i:${id}` : "i:sem-id";
}
function encontrarPorIdentidade(lista, concurso, data) {
  const c = normalizarConcurso(concurso);
  const d = String(data ?? "").trim();
  if (c) return (lista || []).find(h => normalizarConcurso(h?.concurso) === c) || null;
  if (d) {
    const candidatos = (lista || []).filter(h => !normalizarConcurso(h?.concurso) && String(h?.data ?? "").trim() === d);
    return candidatos.length === 1 ? candidatos[0] : null;
  }
  return null;
}
function gerarIdHistorico() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return `h${crypto.randomUUID()}`;
  return `h${Date.now()}_${Math.random().toString(36).slice(2,10)}`;
}

function encontrarIndiceMergeSeguro(lista, item) {
  const c = normalizarConcurso(item?.concurso);
  const d = String(item?.data ?? "").trim();
  if (c) {
    const idx = (lista || []).findIndex(h => normalizarConcurso(h?.concurso) === c);
    if (idx >= 0) return idx;
  }
  if (d) {
    const candidatos = [];
    (lista || []).forEach((h, i) => { if (String(h?.data ?? "").trim() === d) candidatos.push(i); });
    // Quando o item ganhou um número depois, pode enriquecer um único
    // registro legado da mesma data que ainda não tinha concurso. Nunca
    // decide por data quando há ambiguidade (há dias com 2 concursos).
    if (c) {
      const semConcurso = candidatos.filter(i => !normalizarConcurso(lista[i]?.concurso));
      if (semConcurso.length === 1) return semConcurso[0];
    } else if (candidatos.length === 1) return candidatos[0];
  }
  return -1;
}

function normalizarHistoricoCarregado(lista) {
  if (!Array.isArray(lista)) return [];
  const idsUsados = new Set();
  return lista.filter(x => x && typeof x === "object" && !Array.isArray(x)).map(item => {
    const n = { ...item };
    const idBruto = n.id == null ? "" : String(n.id).trim();
    n.id = idBruto && !idsUsados.has(idBruto) ? idBruto : gerarIdHistorico();
    idsUsados.add(n.id);
    const concursoBruto = n.concurso;
    n.concurso = normalizarConcurso(n.concurso);
    const concursoCorrompido = !!n.concurso && !concursoValido(n.concurso);
    if (concursoCorrompido) n.concurso = "";
    const dataBruta = n.data;
    const dataCorrompida = dataBruta != null && String(dataBruta).trim() !== "" && !(typeof dataBruta === "string" && isDataBRValida(dataBruta.trim()));
    n.data = typeof dataBruta === "string" && isDataBRValida(dataBruta.trim()) ? dataBruta.trim() : "";
    const horaBruta = n.hora;
    const horaCorrompida = horaBruta != null && String(horaBruta).trim() !== "" && !horaValidaOuVazia(horaBruta);
    n.hora = horaValidaOuVazia(horaBruta) ? String(horaBruta ?? "").trim() : "";
    const textoCorrompido = n.textoMapa != null && typeof n.textoMapa !== "string";
    n.textoMapa = typeof n.textoMapa === "string" ? n.textoMapa : "";
    const resultadoBruto = Array.isArray(n.resultado) ? n.resultado : [];
    const resultadoNorm = normalizarResultadoParcial(resultadoBruto);
    const resultadoCorrompido = !Array.isArray(n.resultado) || resultadoBruto.length > 15 || resultadoNorm.length !== resultadoBruto.length;
    // Nunca transforma corrupção em um resultado aparentemente legítimo:
    // >15 dezenas, duplicata ou valor fora de 1–25 vira vazio para revisão.
    n.resultado = !resultadoCorrompido ? resultadoNorm : [];
    const obsCorrompida = n.obs != null && typeof n.obs !== "string";
    n.obs = typeof n.obs === "string" ? n.obs : "";
    const overrideBruto = n.mapaOverride;
    n.mapaOverride = normalizarMapaOverrideSeguro(overrideBruto);
    const overrideObjetoValido = overrideBruto != null && typeof overrideBruto === "object" && !Array.isArray(overrideBruto);
    const overrideTinhaConteudo = overrideObjetoValido && Object.keys(overrideBruto).length > 0;
    const overrideCorrompido = overrideBruto != null && (!overrideObjetoValido || (overrideTinhaConteudo && !n.mapaOverride));
    const edBrutas = n.edicoesUsuario && typeof n.edicoesUsuario === "object" && !Array.isArray(n.edicoesUsuario) ? n.edicoesUsuario : {};
    const corrompidoPorCampo = {
      concurso: concursoCorrompido, data: dataCorrompida, hora: horaCorrompida,
      textoMapa: textoCorrompido, resultado: resultadoCorrompido, obs: obsCorrompida,
      mapaOverride: overrideCorrompido,
    };
    const edLimpas = {};
    ["textoMapa","mapaOverride","resultado","obs","concurso","data","hora"].forEach(campo => {
      if (edBrutas[campo] === true && !corrompidoPorCampo[campo]) edLimpas[campo] = true;
    });
    n.edicoesUsuario = edLimpas;
    if (!jogoDerivadoValido(n.jogoGerado)) n.jogoGerado = [];
    if (!jogoDerivadoValido(n.jogoGeradoAlt)) n.jogoGeradoAlt = [];
    return n;
  });
}

function deduplicarHistoricoPorIdentidade(lista) {
  const saida = [];
  const porChave = new Map();
  const vazio = v => v == null || v === "" || (Array.isArray(v) && v.length === 0) || (typeof v === "object" && !Array.isArray(v) && Object.keys(v).length === 0);
  const campos = ["textoMapa","mapaOverride","resultado","obs","concurso","data","hora"];
  for (const item of normalizarHistoricoCarregado(lista)) {
    const concurso = normalizarConcurso(item.concurso);
    const k = concurso ? `c:${concurso}` : `i:${item.id}`;
    // Sem número oficial, mesma data NÃO basta para deduplicar: podem existir
    // dois concursos no mesmo dia. O merge por data continua disponível no
    // carregamento/importação quando há exatamente um candidato inequívoco.
    if (!porChave.has(k)) { porChave.set(k, saida.length); saida.push(item); continue; }
    const idx = porChave.get(k);
    let base = saida[idx];
    const editBase = base.edicoesUsuario || {}, editItem = item.edicoesUsuario || {};
    campos.forEach(campo => {
      // Uma edição explicitamente marcada vence inclusive quando o usuário
      // limpou o campo. Sem marca, só preenche lacuna — nunca apaga dado.
      if (editItem[campo]) base = { ...base, [campo]: item[campo] };
      else if (!editBase[campo] && vazio(base[campo]) && !vazio(item[campo])) base = { ...base, [campo]: item[campo] };
    });
    if (!jogoDerivadoValido(base.jogoGerado) && jogoDerivadoValido(item.jogoGerado)) base.jogoGerado = item.jogoGerado;
    if (!jogoDerivadoValido(base.jogoGeradoAlt) && jogoDerivadoValido(item.jogoGeradoAlt)) base.jogoGeradoAlt = item.jogoGeradoAlt;
    base.edicoesUsuario = { ...editBase, ...editItem };
    saida[idx] = base;
  }
  return saida;
}

function assinaturaConteudoAutoritativo(item) {
  return JSON.stringify({
    id: String(item?.id ?? ""),
    concurso: normalizarConcurso(item?.concurso),
    data: String(item?.data ?? "").trim(),
    hora: String(item?.hora ?? "").trim(),
    textoMapa: typeof item?.textoMapa === "string" ? item.textoMapa : "",
    mapaOverride: normalizarMapaOverrideSeguro(item?.mapaOverride),
    resultado: normalizarResultadoParcial(item?.resultado),
    obs: typeof item?.obs === "string" ? item.obs : "",
  });
}

// ACHADO DE AUDITORIA CORRIGIDO: o filtro padrão usado em ~12 pontos do
// arquivo (mapaInterpretavel(h) && resultadoValido(h.resultado)) confirma o
// TAMANHO do resultado, mas não que os 15 números são de fato distintos e
// estão dentro de 1-25 — um resultado corrompido (ex: importação de
// backup malformado, ver achados de auditoria sobre schema de importação)
// podia ter 15 posições com duplicata ou número fora do intervalo e ainda
// passar nesse filtro, contaminando silenciosamente a contagem de "hits"
// em qualquer sinal. Sem impacto no histórico atual (confirmado: 0 de 321
// concursos têm essa corrupção), mas é a validação correta a se fazer.
// Usada nos pontos de maior impacto real (produtor de sinal, buscador
// manual) — os ~10 pontos restantes só filtram histórico pra exibição/
// contagem de UI, sem risco equivalente de contaminar estatística.
function resultadoValido(resultado) {
  if (!Array.isArray(resultado) || resultado.length !== 15) return false;
  const distintos = new Set(resultado);
  if (distintos.size !== 15) return false;
  return resultado.every(n => Number.isInteger(n) && n >= 1 && n <= 25);
}
function normalizarResultadoParcial(resultado) {
  if (!Array.isArray(resultado)) return [];
  return [...new Set(resultado
    .map(n => typeof n === "string" && /^\d+$/.test(n.trim()) ? Number(n) : n)
    .filter(n => Number.isInteger(n) && n >= 1 && n <= 25))].slice(0, 15);
}
function jogoDerivadoValido(jogo) {
  return Array.isArray(jogo) && jogo.length === 15 && new Set(jogo).size === 15
    && jogo.every(n => Number.isInteger(n) && n >= 1 && n <= 25);
}

// Posição própria de DSC/IC não pontua separadamente porque duplica o eixo
// ASC/MC. Aspectos são outra informação: por isso há uma lista específica
// para pares de aspecto que inclui DSC/IC.
const IDS_CORRELACAO_DIRETA = ["sol", "lua", "mercurio", "venus", "marte", "jupiter", "saturno",
  "urano", "netuno", "plutao", "nodo", "lilith", "quiron", "fortuna", "vertice", "asc", "mc"];
const IDS_ASPECTOS_CORRELACAO = [...IDS_CORRELACAO_DIRETA, "dsc", "ic"];
const TIPOS_ASPECTO_CORRELACAO = ["conjunção", "oposição", "quadratura", "trígono", "sextil", "octil", "quincúncio", "tri-octil"];


// Corpos LENTOS (Júpiter, Saturno, Nodo, Quíron, Lilith, Urano, Netuno,
// Plutão) ficam no mesmo signo por meses — um "streak" de sinal nesses
// planetas não é múltiplas observações independentes, é 1 evento
// astronômico contínuo coincidindo por acaso com dezenas de sorteios.
// CASA continua liberada para todos: muda com o horário/Ascendente do dia,
// não com a posição do planeta no zodíaco.
const PLANETAS_LENTOS_BLOQUEADOS = new Set(["jupiter", "saturno", "urano", "netuno", "plutao", "nodo", "quiron", "lilith"]);

const SIGNOS_CORRELACAO_DIRETA = ["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem",
  "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"];

// REGRA FIXA: cada dia é isolado — nunca agrupar dias em "streaks"/eventos.
// A busca manual de sinal (abaixo) e a varredura automática
// (analisarCorrelacaoDireta) contam direto: dia a dia, sem unidade
// artificial por cima do dado bruto.

// ── BUSCADOR MANUAL DE SINAL ──
// Mesma lógica de analisarCorrelacaoDireta, mas para UMA condição escolhida
// manualmente pelo usuário (não a varredura automática de todas as
// combinações). Retorna a taxa real para os 25 números, sem exigir nenhum
// corte — o usuário vê o resultado completo e decide o que considerar
// interessante.
function buscadorManualDeSinal(historico, id, dimensao, valorCondicao) {
  // BUG CORRIGIDO (achado de auditoria externa): exigia h.data no filtro —
  // um concurso com mapa e resultado válidos, mas sem data preenchida,
  // era descartado por completo das estatísticas, não só ordenado por
  // último. Sem impacto no histórico atual (confirmado: 0 de 321
  // concursos têm mapa+resultado sem data), mas era um risco real de
  // perder sinal de concursos futuros salvos sem data. Corrigido:
  // parseDataBR(null) já retorna null com segurança (usado como 0 no
  // sort), então itens sem data participam do cálculo normalmente,
  // só ficam ordenados no início.
  const dataset = (historico || [])
    .filter(h => mapaInterpretavel(h) && resultadoValido(h.resultado))
    .map(h => ({ ...h, planetas: obterMapaInterpretado(h).planetas }))
    .sort(compararHistoricoCronologico);

  const comCondicao = [];
  dataset.forEach(h => {
    let satisfaz = false;
    if (dimensao === "casa" || dimensao === "signo" || dimensao === "grau") {
      const p = h.planetas[id];
      if (!p) return;
      if (dimensao === "casa") satisfaz = p.casa === String(valorCondicao);
      else if (dimensao === "signo") satisfaz = p.signo === valorCondicao;
      else satisfaz = parseInt(p.grau) === parseInt(valorCondicao);
    } else if (dimensao === "aspecto") {
      const [idA, idB] = id.split("+");
      // BUG CORRIGIDO (achado de auditoria externa, confirmado): mesmo
      // bug de direção única já corrigido no produtor (analisarCorrelacaoDiretaImpl)
      // e no consumidor (analisarMapa) — esta função (busca manual) tinha o
      // mesmo problema, só testando 1 sentido (idA→idB). Corrigido: testa
      // os dois sentidos, igual ao resto do sistema agora faz.
      const pA = h.planetas[idA];
      const pB = h.planetas[idB];
      const temDeA = pA?.aspectos?.some(a => aspectoConfiavelParaMotor(a) && a.planeta === idB && a.tipo?.toLowerCase() === String(valorCondicao).toLowerCase());
      const temDeB = pB?.aspectos?.some(a => aspectoConfiavelParaMotor(a) && a.planeta === idA && a.tipo?.toLowerCase() === String(valorCondicao).toLowerCase());
      satisfaz = temDeA || temDeB || false;
    } else if (dimensao === "retrogrado") {
      satisfaz = h.planetas[id]?.retrogrado === true;
    } else if (dimensao?.startsWith("combinacaoCasa")) {
      // id é "planeta1+planeta2[+planeta3]" — satisfaz se esse conjunto de
      // planetas é EXATAMENTE o grupo completo de quem está naquela Casa
      // (não um subconjunto de um grupo maior) — mesma lógica de
      // composicaoPorMapaECasa em analisarCorrelacaoDiretaImpl: um grupo é
      // definido por "todos que estão juntos numa Casa", não por qualquer
      // combinação de 2 dentro de um grupo maior.
      const idsGrupo = id.split("+").sort();
      const porCasa = {};
      IDS_CORRELACAO_DIRETA.forEach(pid => {
        const casa = h.planetas[pid]?.casa;
        if (casa) {
          if (!porCasa[casa]) porCasa[casa] = [];
          porCasa[casa].push(pid);
        }
      });
      satisfaz = Object.values(porCasa).some(grupo => {
        const grupoOrdenado = [...grupo].sort();
        return grupoOrdenado.length === idsGrupo.length && grupoOrdenado.every((v, i) => v === idsGrupo[i]);
      });
    } else if (dimensao === "faseLunar") {
      const sol = h.planetas.sol, lua = h.planetas.lua;
      if (sol?.signo && lua?.signo) {
        const solAbs = posicaoAbsoluta(sol.signo, sol.grau, sol.minutos);
        const luaAbs = posicaoAbsoluta(lua.signo, lua.grau, lua.minutos);
        if (solAbs != null && luaAbs != null) {
          const elongComSinal = ((luaAbs - solAbs) % 360 + 360) % 360;
          satisfaz = (Math.floor(elongComSinal / 45) + 1) === parseInt(valorCondicao);
        }
      }
    } else if (dimensao === "recepcaoMutua") {
      const [idA, idB] = id.split("+");
      const pA = h.planetas[idA], pB = h.planetas[idB];
      if (pA?.signo && pB?.signo) {
        const regenteA = NOME_REGENTE_PARA_ID[regenteDoSigno(pA.signo)];
        const regenteB = NOME_REGENTE_PARA_ID[regenteDoSigno(pB.signo)];
        satisfaz = regenteA === idB && regenteB === idA;
      }
    }
    if (satisfaz) comCondicao.push(h);
  });

  if (comCondicao.length === 0) {
    return { dias: 0, diasSemCondicao: dataset.length, porNumero: [], datas: [] };
  }

  const porNumero = [];
  for (let n = 1; n <= 25; n++) {
    const hits = comCondicao.filter(h => h.resultado.includes(n)).length;
    porNumero.push({ numero: n, hits, taxa: hits / comCondicao.length });
  }
  porNumero.sort((a, b) => b.taxa - a.taxa);

  return {
    dias: comCondicao.length,
    diasSemCondicao: dataset.length - comCondicao.length,
    periodo: comCondicao.length ? `${comCondicao[0].data} a ${comCondicao[comCondicao.length - 1].data}` : null,
    datas: comCondicao.map(h => ({ data: h.data, concurso: h.concurso, resultado: h.resultado })),
    porNumero,
  };
}

// Cache por assinatura do dataset relevante (id+resultado+textoMapa de
// cada item) — evita reprocessar analisarCorrelacaoDireta quando o
// resultado seria idêntico ao já calculado.
// VERSAO_MOTOR_RANKING: string de versão manual, incluída em toda
// assinatura de cache que dependa de lógica de motor (ver
// assinaturaParaCorrelacao e assinaturaLeaveOneOut abaixo). Incrementar
// sempre que testarCondicao, top15PorPontuacao, top15FormulaComCorte ou
// qualquer coisa que influencie o cálculo de scores/achados/ranking for
// alterada — sem isso, os caches continuariam devolvendo resultado
// calculado com a fórmula antiga mesmo depois do código já ter mudado
// (assinatura de dados sozinha não reflete mudança de lógica).
const VERSAO_MOTOR_RANKING = "v12-auditoria-fechamento-integridade";

// Cada dia é isolado — nunca agrupar em "eventos"/streaks, só contagem
// direta por dia. Piso mínimo de amostra pra marcar um achado como
// "confiavel" (não filtra a tela, só decide o que entra no ranking): pelo
// menos 10 dias, pra taxa não virar 100%/0% grosseiro com poucos dados.
const MINIMO_DIAS_CONFIAVEL = 10;


// BUG CORRIGIDO (achado de auditoria externa, confirmado): os 3 caches do
// sistema (correlação direta, leave-one-out, jogo gerado por item) limpavam
// TODAS as entradas de uma vez ao atingir o limite (Map.clear()) — mesmo
// as recém-adicionadas eram descartadas, causando um pico de recálculo
// logo em seguida. Map em JS preserva ordem de inserção, então dá pra
// remover só as entradas MAIS ANTIGAS (LRU simples) sem esse pico — as
// mais usadas recentemente continuam disponíveis.
function limparCacheLRU(cache, limite, removerAte) {
  if (cache.size < limite) return;
  const chaves = cache.keys();
  while (cache.size > removerAte) {
    const proxima = chaves.next();
    if (proxima.done) break;
    cache.delete(proxima.value);
  }
}

const _cacheAnalisarCorrelacaoDireta = new Map();
function assinaturaParaCorrelacao(historico) {
  // Inclui VERSAO_MOTOR_RANKING pra invalidar o cache quando a lógica do
  // motor mudar, não só quando os dados mudam.
  // incrementar quando qualquer motor mudar de lógica.
  // BUG CORRIGIDO (achado de auditoria externa): tinha "&& h.data" no
  // filtro — igual ao mesmo bug já corrigido em analisarCorrelacaoDiretaImpl
  // e buscadorManualDeSinal, mas aqui o efeito era pior: mesmo com o filtro
  // do produtor já corrigido, a ASSINATURA do cache continuava ignorando
  // itens sem data. Um concurso novo sem data não mudava a assinatura, o
  // cache "achava" que nada tinha mudado e devolvia o resultado antigo —
  // a correção do produtor nunca chegava a rodar de fato. Confirmado com
  // teste direto: adicionar 1 concurso sem data não alterava nenhum
  // achado até esta correção.
  return VERSAO_MOTOR_RANKING + "::" + (historico || [])
    .filter(h => mapaInterpretavel(h) && resultadoValido(h.resultado))
    .map(h => `${h.id}:${h.data}:${(h.resultado || []).join(",")}:${h.textoMapa}:${assinaturaMapaOverride(h)}`)
    .sort()
    .join("|");
}
function analisarCorrelacaoDireta(historico) {
  const assinatura = assinaturaParaCorrelacao(historico);
  const cacheado = _cacheAnalisarCorrelacaoDireta.get(assinatura);
  if (cacheado) return cacheado;
  const resultado = analisarCorrelacaoDiretaImpl(historico);
  if (_cacheAnalisarCorrelacaoDireta.size >= 500) limparCacheLRU(_cacheAnalisarCorrelacaoDireta, 500, 400);
  _cacheAnalisarCorrelacaoDireta.set(assinatura, resultado);
  return resultado;
}

function analisarCorrelacaoDiretaImpl(historico) {
  // BUG CORRIGIDO (mesmo achado de auditoria externa do buscador manual,
  // aplicado aqui no produtor real): mesmo filtro exigindo h.data.
  const dataset = (historico || [])
    .filter(h => mapaInterpretavel(h) && resultadoValido(h.resultado))
    .map(h => ({ ...h, planetas: obterMapaInterpretado(h).planetas }))
    .sort(compararHistoricoCronologico);

  const achados = [];
  let testesRealizados = 0;

  // Sem trava de significância: toda condição testada aparece, com
  // trials/hits/taxa reais, sem filtro de confiança estatística.
  function testarCondicao(id, dimensao, valorCondicao, comCondicao) {
    if (comCondicao.length === 0) return;
    // Cada dia é isolado: contagem pura, dia a dia. Toda vez que o sinal
    // aparece num dia, olha os 15 números que saíram naquele jogo — se o
    // número N estava entre eles, é +1 para N. "Quantas vezes saiu" = essa
    // contagem. "Porcentagem" = contagem ÷ total de dias em que o sinal apareceu.
    for (let n = 1; n <= 25; n++) {
      testesRealizados++;
      const hits = comCondicao.filter(h => h.resultado.includes(n)).length;
      const dias = comCondicao.length;
      const taxa = hits / dias;
      const desvio = (taxa - 0.6) * 100;
      // BUG CORRIGIDO (achado de auditoria externa): "desvio >= 0" incluía
      // taxa exatamente 60% como "positivo" — mas no Motor A, taxa=60% dá
      // contribuição exatamente 0 ((taxa-0.6)*trials = 0), nem ajuda nem
      // atrapalha. Rotular isso como "positivo" é enganoso na UI (mostrava
      // "reforça" em verde pra um sinal que na prática é neutro). Medido:
      // 1706 achados reais no histórico têm taxa exatamente 60% — não é
      // caso raro. Corrigido com estado "neutro" explícito.
      const direcao = desvio > 0 ? "positivo" : desvio < 0 ? "negativo" : "neutro";

      achados.push({
        id, dimensao, valorCondicao, numero: n, taxa, desvio,
        dias, hits,
        periodo: `${comCondicao[0].data} a ${comCondicao[comCondicao.length - 1].data}`,
        direcao,
        // Robustez para ORDENAR a lista exibida na UI (não decide nada,
        // só a ordem): quanto mais dias de amostra e quanto mais longe de
        // 60% (o baseline esperado por acaso), mais alto na lista.
        robustez: Math.abs(desvio) * dias,
      });
    }
  }

  for (const id of IDS_CORRELACAO_DIRETA) {
    const ehPlanetaLento = PLANETAS_LENTOS_BLOQUEADOS.has(id);
    for (let casa = 1; casa <= 12; casa++) {
      const comCondicao = dataset.filter(h => h.planetas[id]?.casa === String(casa));
      testarCondicao(id, "casa", casa, comCondicao);
    }
    // BLOQUEIO DE PLANETAS LENTOS (ver PLANETAS_LENTOS_BLOQUEADOS acima) —
    // signo e grau exato são pulados pra planetas lentos (Júpiter, Saturno,
    // Urano, Netuno, Plutão, Nodo, Quíron, Lilith): essas dimensões são as
    // que sofrem de autocorrelação por período (1 streak de meses/anos
    // disfarçado de dezenas de observações independentes). Casa continua
    // testada normalmente pra todos (não sofre desse problema).
    if (ehPlanetaLento) continue;
    for (const signo of SIGNOS_CORRELACAO_DIRETA) {
      const comCondicao = dataset.filter(h => h.planetas[id]?.signo === signo);
      testarCondicao(id, "signo", signo, comCondicao);
    }
    // GRAU EXATO (0-29 dentro do signo, independente de qual signo) —
    // não confundir com o número do jogo (1-25).
    for (let grau = 0; grau <= 29; grau++) {
      const comCondicao = dataset.filter(h => parseInt(h.planetas[id]?.grau) === grau);
      testarCondicao(id, "grau", grau, comCondicao);
    }
  }

  // Duas dimensões adicionais testadas com o mesmo rigor das anteriores:
  // 5) ASPECTO ENTRE PAR DE PLANETAS (ex: "Lua trígono Marte").
  // 6) COMBINAÇÃO DE 2+ PLANETAS NA MESMA CASA (ex: "Lua e Vênus na 5ª Casa").
  //
  // Custo: multiplica bastante o número de testes (mais pares de planetas ×
  // tipos de aspecto, e mais pares × 12 casas), o que aumenta a chance de
  // "achado por acaso" — por isso o mesmo bloqueio de planetas lentos das
  // dimensões 1-4 continua aplicado abaixo, sem afrouxar nada.
  // testesRealizados reporta o total real para quem for interpretar os
  // achados saber a escala.
  // ATUALIZAÇÃO 8g (correção de cobertura, ago/2026): faltavam "octil" e
  // "quincúncio" — aspectos que aparecem de fato no histórico real (auditoria
  // encontrou os dois nos textos de mapa) mas nunca eram testados aqui.
  // "tri-octil" adicionado também, agora que a grafia está normalizada no
  // parser (ver normalizarTipoAspecto) — antes seria inútil testar um valor
  // que nunca bateria de forma consistente com o texto real.
  for (let i = 0; i < IDS_ASPECTOS_CORRELACAO.length; i++) {
    for (let j = i + 1; j < IDS_ASPECTOS_CORRELACAO.length; j++) {
      const idA = IDS_ASPECTOS_CORRELACAO[i], idB = IDS_ASPECTOS_CORRELACAO[j];
      // BLOQUEIO DE PLANETAS LENTOS (ver PLANETAS_LENTOS_BLOQUEADOS acima) —
      // aspecto entre DOIS planetas lentos (ex: Netuno sextil Plutão) sofre
      // do mesmo problema de signo/grau: os dois ficam parados um em
      // relação ao outro por meses/anos, então o aspecto também vira 1
      // streak longo disfarçado de muitas observações — foi justamente
      // esse caso (netuno+plutao sextil, 119 dias, 1 streak contínuo de
      // ~5 meses) que expôs o problema. Aspecto com só 1 planeta lento
      // (ex: Sol sextil Netuno) continua testado normalmente — o planeta
      // rápido garante streaks curtos e reais.
      if (PLANETAS_LENTOS_BLOQUEADOS.has(idA) && PLANETAS_LENTOS_BLOQUEADOS.has(idB)) continue;
      const parLabel = `${idA}+${idB}`;

      // 5) Aspecto entre o par, por tipo de aspecto.
      // BUG CORRIGIDO (achado de auditoria externa, confirmado com dado
      // real): o parser guarda cada aspecto do lado da ORIGEM GRAMATICAL da
      // frase no texto do mapa (ex: "MC em conjunção com Urano" salva em
      // planetas.mc.aspectos; "Urano em conjunção com o MC" salvaria em
      // planetas.urano.aspectos) — depende de como o site de origem
      // escreveu a frase naquele dia, não é fixo. Mas o produtor só olhava
      // 1 direção fixa (planetas[idA].aspectos, nunca planetas[idB].aspectos),
      // definida pela ORDEM em IDS_CORRELACAO_DIRETA, não pela ordem real
      // do texto. Medido no histórico real: 2814 aspectos testados dessa
      // forma, mas 2873 aspectos REAIS existentes do lado invertido nunca
      // eram testados — quase metade de todos os aspectos do histórico
      // sendo perdidos silenciosamente. Corrigido: testa os dois sentidos
      // (idA→idB e idB→idA) — o aspecto conta se existir em qualquer um
      // dos dois lados.
      for (const tipoAsp of TIPOS_ASPECTO_CORRELACAO) {
        const comCondicao = dataset.filter(h => {
          const a = h.planetas[idA];
          const b = h.planetas[idB];
          const temDeA = a?.aspectos?.some(asp => aspectoConfiavelParaMotor(asp) && asp.planeta === idB && asp.tipo?.toLowerCase() === tipoAsp);
          const temDeB = b?.aspectos?.some(asp => aspectoConfiavelParaMotor(asp) && asp.planeta === idA && asp.tipo?.toLowerCase() === tipoAsp);
          return temDeA || temDeB;
        });
        testarCondicao(parLabel, "aspecto", tipoAsp, comCondicao);
      }
    }
  }

  // Detecta automaticamente todo agrupamento de 2+ planetas que caem
  // juntos na MESMA Casa (não fixa qual Casa nem quais planetas de
  // antemão), e testa esse agrupamento contra os 25 números do jogo. Um
  // trio "marte+urano+vertice" que se repete em Casas diferentes ao longo
  // do tempo conta como o MESMO agrupamento.
  const composicaoPorMapaECasa = dataset.map(h => {
    const porCasa = {};
    IDS_CORRELACAO_DIRETA.forEach(id => {
      const casa = h.planetas[id]?.casa;
      if (casa) {
        if (!porCasa[casa]) porCasa[casa] = [];
        porCasa[casa].push(id);
      }
    });
    // grupos de 2+ planetas nessa Casa, para este mapa
    // ACHADO DE AUDITORIA CORRIGIDO: grupos de 4+ planetas eram
    // processados aqui (agrupados, contados em composicoesVistas) e só
    // descartados bem depois (ver "if (qtdPlanetas > 3) return" abaixo) —
    // medido: 44% das composições distintas encontradas tinham 4+
    // planetas, todo esse trabalho de agrupamento era jogado fora.
    // Corrigido: filtra o tamanho do grupo já aqui, antes de alimentar
    // composicoesVistas.
    const grupos = Object.values(porCasa).filter(ids => ids.length >= 2 && ids.length <= 3).map(ids => [...ids].sort());
    return { h, grupos };
  });

  // Descobre todas as composições de grupo (conjunto de IDs) que já
  // apareceram alguma vez no histórico, independente de qual Casa.
  // ACHADO DE AUDITORIA VERIFICADO (não é bug): a chave abaixo ignora em
  // qual Casa específica a composição ocorreu — "Sol+Vênus na 5ª" e
  // "Sol+Vênus na 9ª" contam como o mesmo sinal. Testado se separar por
  // casa seria melhor: reduz a amostra média por composição de ~4 para
  // ~3 dias, e o número de composições que passam no piso de
  // confiabilidade (10 dias) cai de 19 para 15 — perda real de sinal
  // válido, sem ganho, com o volume de dado atual. Decisão intencional,
  // mesmo raciocínio já aplicado em combinacaoCasa4+ (removida por
  // amostra insuficiente).
  const composicoesVistas = new Map(); // chave (ids ordenados, join) -> Set de mapas onde apareceu
  composicaoPorMapaECasa.forEach(({ h, grupos }) => {
    grupos.forEach(grupo => {
      const chave = grupo.join("+");
      if (!composicoesVistas.has(chave)) composicoesVistas.set(chave, []);
      composicoesVistas.get(chave).push(h);
    });
  });

  composicoesVistas.forEach((mapasComEssaComposicao, chave) => {
    const grupoIds = chave.split("+");
    const qtdPlanetas = grupoIds.length;
    if (qtdPlanetas < 2) return; // já coberto acima (casa/signo/aspecto de par)
    // BUG CORRIGIDO (achado de auditoria externa, confirmado com dado
    // real): faltava aqui o mesmo bloqueio de planetas lentos já aplicado
    // em TODAS as outras 8 dimensões (signo, grau, retrógrado, aspecto,
    // recepção mútua) — 2+ planetas lentos permanecendo juntos na mesma
    // Casa por meses vira 1 streak longo disfarçado de muitas observações
    // independentes, o mesmo problema que motivou o bloqueio nos outros
    // casos. Medido no histórico real: 6 de 87 composições de 2-3
    // planetas eram formadas SÓ por lentos (ex: "netuno+saturno" em 38
    // mapas, "quiron+saturno" em 26 mapas) — volume real que passaria no
    // piso de confiabilidade sem essa proteção. Corrigido: bloqueia
    // quando TODOS os planetas do grupo são lentos; basta 1 corpo rápido
    // no grupo pra continuar testado normalmente (ele garante streaks
    // curtos e reais, mesmo com lentos parados no grupo).
    const somenteLentos = grupoIds.every(id => PLANETAS_LENTOS_BLOQUEADOS.has(id));
    if (somenteLentos) return;
    // LIMITE (medido com dados reais: combinacaoCasa4/6/7 tiveram 0% dos
    // achados passando no piso de confiabilidade em todo o histórico de 321
    // concursos — juntar 4+ planetas na mesma Casa é estruturalmente raro
    // demais pra ter amostra com o volume atual de dados; a média de
    // acertos ficou idêntica com ou sem elas). combinacaoCasa e
    // combinacaoCasa3 continuam (têm contribuição real medida: 23-33% dos
    // achados passam no piso). O filtro de tamanho (2-3) já acontece antes,
    // na montagem de composicaoPorMapaECasa — este "if" é só uma segunda
    // camada de proteção (defesa em profundidade), não deveria disparar
    // nunca na prática.
    if (qtdPlanetas > 3) return;
    testarCondicao(chave, qtdPlanetas === 2 ? "combinacaoCasa" : `combinacaoCasa${qtdPlanetas}`, "junto", mapasComEssaComposicao);
  });

  // T-QUADRATURA e GRANDE TRÍGONO — REMOVIDAS (medido com dados reais: 0%
  // dos achados dessas duas dimensões passavam no piso de confiabilidade em
  // todo o histórico de 321 concursos — a média de acertos ficou idêntica
  // com ou sem elas, então nunca influenciavam o jogo gerado, só gastavam
  // processamento a cada análise). Causa raiz confirmada: são padrões
  // geométricos fechados entre 3 pontos ESPECÍFICOS (não "3 pontos
  // quaisquer" — a composição exata importa), estruturalmente raros demais
  // pra juntar amostra suficiente com o volume atual de dados — cada
  // composição específica apareceu só 1-3 dias no histórico inteiro
  // (verificado: nenhuma passou de 2 eventos distintos). Não é caso de
  // "sinal fraco que passou despercebido" — é matematicamente inviável
  // essas dimensões juntarem confiabilidade sem anos a mais de histórico.
  // Se o histórico crescer muito no futuro, pode valer reativar — ver
  // git/backup anterior a esta limpeza para o código original.

  // 7) FASE LUNAR (1-8, elongação Sol-Lua) — condição do MAPA COMO UM TODO
  //    (não de um planeta específico), "id" fixo ("mapa") só identifica a dimensão.
  const solPos = dataset.map(h => ({ h, sol: h.planetas.sol, lua: h.planetas.lua }));
  for (let fase = 1; fase <= 8; fase++) {
    const comCondicao = solPos.filter(({ sol, lua }) => {
      if (!sol?.signo || !lua?.signo) return false;
      const solAbs = posicaoAbsoluta(sol.signo, sol.grau, sol.minutos);
      const luaAbs = posicaoAbsoluta(lua.signo, lua.grau, lua.minutos);
      if (solAbs == null || luaAbs == null) return false;
      const elongComSinal = ((luaAbs - solAbs) % 360 + 360) % 360;
      return (Math.floor(elongComSinal / 45) + 1) === fase;
    }).map(({ h }) => h);
    testarCondicao("mapa", "faseLunar", fase, comCondicao);
  }

  // 8) RETROGRADAÇÃO — por planeta, isolado (não combinação; cada planeta
  //    retrógrado é testado como sua própria condição contra os 25 números).
  // BLOQUEIO DE PLANETAS LENTOS (ver PLANETAS_LENTOS_BLOQUEADOS acima) —
  // mesmo problema de autocorrelação por período: planetas lentos passam
  // longuíssimos trechos retrógrados ou diretos de uma vez só (o Nodo, em
  // particular, é quase sempre retrógrado por sua própria mecânica orbital
  // — retrogradação dele não é um evento raro e pontual como nos planetas
  // rápidos, é o estado predominante por longos períodos contínuos).
  for (const id of IDS_CORRELACAO_DIRETA) {
    if (PLANETAS_LENTOS_BLOQUEADOS.has(id)) continue;
    const comCondicao = dataset.filter(h => h.planetas[id]?.retrogrado === true);
    testarCondicao(id, "retrogrado", "sim", comCondicao);
  }

  // 9) RECEPÇÃO MÚTUA (domicílio) — par de planetas tradicionais que regem
  //    mutuamente o signo um do outro (ex: Sol em Touro, Vênus em Leão —
  //    cada um "hospedado" no signo que o outro rege). Só planetas
  //    tradicionais (7) têm regência clássica de signo; Urano/Netuno/Plutão
  //    em diante não entram (regência moderna é doutrina menos consensual).
  const TRADICIONAIS_RECEPCAO = ["sol", "lua", "mercurio", "venus", "marte", "jupiter", "saturno"];
  for (let i = 0; i < TRADICIONAIS_RECEPCAO.length; i++) {
    for (let j = i + 1; j < TRADICIONAIS_RECEPCAO.length; j++) {
      const idA = TRADICIONAIS_RECEPCAO[i], idB = TRADICIONAIS_RECEPCAO[j];
      // BLOQUEIO DE PLANETAS LENTOS (ver PLANETAS_LENTOS_BLOQUEADOS acima)
      // — achado de auditoria: essa dimensão era a única das 9 que não
      // aplicava o bloqueio quando os DOIS planetas do par são lentos (2
      // dos 7 tradicionais entram na lista de lentos: jupiter, saturno).
      // Um par jupiter+saturno em recepção mútua sofreria do mesmo
      // problema de autocorrelação por período que motivou o bloqueio nas
      // outras 8 dimensões — os dois ficam parados um em relação ao outro
      // por meses/anos, virando 1 streak longo disfarçado de muitas
      // observações. Corrigido pra consistência com o resto do sistema.
      if (PLANETAS_LENTOS_BLOQUEADOS.has(idA) && PLANETAS_LENTOS_BLOQUEADOS.has(idB)) continue;
      const comCondicao = dataset.filter(h => {
        const pA = h.planetas[idA], pB = h.planetas[idB];
        if (!pA?.signo || !pB?.signo) return false;
        const regenteA = NOME_REGENTE_PARA_ID[regenteDoSigno(pA.signo)];
        const regenteB = NOME_REGENTE_PARA_ID[regenteDoSigno(pB.signo)];
        return regenteA === idB && regenteB === idA;
      });
      testarCondicao(`${idA}+${idB}`, "recepcaoMutua", "sim", comCondicao);
    }
  }

  achados.sort((a, b) => (b.robustez ?? Math.abs(b.desvio)) - (a.robustez ?? Math.abs(a.desvio)));
  return { achados, testesRealizados };
}

// Formata a descrição de um achado de analisarCorrelacaoDireta para a UI —
// cobre casa, signo, aspecto entre par, e combinação de 2+ planetas juntos
// na mesma Casa (grupo de qualquer tamanho, detectado dinamicamente — ver
// ATUALIZAÇÃO 8c). Função global porque é usada tanto na exibição principal
// quanto na de candidatos de streak único.
// (descreverAchadoCorrelacao foi removida — código morto, sem chamada em
// lugar nenhum do arquivo. O texto legível de um achado hoje vive em
// Sinais > Buscar sinal.)

// (Classificação "doutrina clássica"/"estrutural"/"empírico" removida — o
// motor unificado usa o mesmo critério pras 3 fontes de sinal, então essa
// separação não faz mais sentido: sinal é sinal.)

// Enumeração ÚNICA das condições que um mapa realmente ativa. O produtor
// estatístico, o leave-one-out e a IA consultam a mesma função para evitar
// diferenças silenciosas entre “sinal produzido” e “sinal consumido”.
function construirChavesCondicoesAtivas(planetas) {
  const chaves = new Set();
  for (const id of IDS_CORRELACAO_DIRETA) {
    const pt = planetas?.[id];
    if (!pt) continue;
    if (pt.casa != null && String(pt.casa) !== "") chaves.add(`${id}:casa:${pt.casa}`);
    if (!PLANETAS_LENTOS_BLOQUEADOS.has(id)) {
      if (pt.signo) chaves.add(`${id}:signo:${pt.signo}`);
      if (pt.grau != null && String(pt.grau) !== "" && Number.isInteger(Number(pt.grau))) chaves.add(`${id}:grau:${Number(pt.grau)}`);
    }
  }

  for (let i = 0; i < IDS_ASPECTOS_CORRELACAO.length; i++) {
    for (let j = i + 1; j < IDS_ASPECTOS_CORRELACAO.length; j++) {
      const idA = IDS_ASPECTOS_CORRELACAO[i], idB = IDS_ASPECTOS_CORRELACAO[j];
      if (PLANETAS_LENTOS_BLOQUEADOS.has(idA) && PLANETAS_LENTOS_BLOQUEADOS.has(idB)) continue;
      const tipos = new Set();
      (planetas?.[idA]?.aspectos || []).forEach(a => { if (aspectoConfiavelParaMotor(a) && a.planeta === idB && a.tipo) tipos.add(String(a.tipo).toLowerCase()); });
      (planetas?.[idB]?.aspectos || []).forEach(a => { if (aspectoConfiavelParaMotor(a) && a.planeta === idA && a.tipo) tipos.add(String(a.tipo).toLowerCase()); });
      tipos.forEach(tipo => { if (TIPOS_ASPECTO_CORRELACAO.includes(tipo)) chaves.add(`${idA}+${idB}:aspecto:${tipo}`); });
    }
  }

  const porCasa = {};
  IDS_CORRELACAO_DIRETA.forEach(id => {
    const casa = planetas?.[id]?.casa;
    if (!casa) return;
    if (!porCasa[casa]) porCasa[casa] = [];
    porCasa[casa].push(id);
  });
  Object.values(porCasa).forEach(ids => {
    if (ids.length < 2 || ids.length > 3) return;
    const grupo = [...ids].sort();
    if (grupo.every(id => PLANETAS_LENTOS_BLOQUEADOS.has(id))) return;
    const dimensao = grupo.length === 2 ? "combinacaoCasa" : `combinacaoCasa${grupo.length}`;
    chaves.add(`${grupo.join("+")}:${dimensao}:junto`);
  });

  const sol = planetas?.sol, lua = planetas?.lua;
  if (sol?.signo && lua?.signo) {
    const sa = posicaoAbsoluta(sol.signo, sol.grau, sol.minutos), la = posicaoAbsoluta(lua.signo, lua.grau, lua.minutos);
    if (Number.isFinite(sa) && Number.isFinite(la)) {
      const elong = ((la - sa) % 360 + 360) % 360;
      chaves.add(`mapa:faseLunar:${Math.floor(elong / 45) + 1}`);
    }
  }

  for (const id of IDS_CORRELACAO_DIRETA) {
    if (!PLANETAS_LENTOS_BLOQUEADOS.has(id) && planetas?.[id]?.retrogrado === true) chaves.add(`${id}:retrogrado:sim`);
  }

  const tradicionais = ["sol", "lua", "mercurio", "venus", "marte", "jupiter", "saturno"];
  for (let i = 0; i < tradicionais.length; i++) for (let j = i + 1; j < tradicionais.length; j++) {
    const idA = tradicionais[i], idB = tradicionais[j];
    if (PLANETAS_LENTOS_BLOQUEADOS.has(idA) && PLANETAS_LENTOS_BLOQUEADOS.has(idB)) continue;
    const a = planetas?.[idA], b = planetas?.[idB];
    if (!a?.signo || !b?.signo) continue;
    const ra = NOME_REGENTE_PARA_ID[regenteDoSigno(a.signo)], rb = NOME_REGENTE_PARA_ID[regenteDoSigno(b.signo)];
    if (ra === idB && rb === idA) chaves.add(`${idA}+${idB}:recepcaoMutua:sim`);
  }
  return chaves;
}

// Vazamento de dado (data leakage): para todo item que TEM resultado
// preenchido, a estatística real (analisarCorrelacaoDireta) é recalculada
// em regime "leave-one-out" — excluindo esse item específico do histórico
// usado para calculá-la — antes de pontuar o mapa dele. Sem isso, o
// resultado recém-digitado de um concurso vazaria pras próprias
// estatísticas usadas pra gerar o jogo daquele mesmo concurso. Itens SEM
// resultado preenchido não precisam disso: nunca entram nos datasets (filtro
// resultado.length===15), então as stats do lote completo já são "limpas"
// em relação a eles.
// CORREÇÃO DE PERFORMANCE (medido com dados reais: 321 concursos, 195 com
// mapa): recalcular do zero levava ~140 SEGUNDOS, porque criarStatsLeaveOneOut
// roda analisarCorrelacaoDireta DO ZERO para cada um dos 195 concursos com mapa
// (custo medido: ~1.4s cada rodada × 195 = ~270s de trabalho real). Isso é
// o preço da correção de vazamento de dado (leave-one-out honesto) —
// matematicamente necessário, mas caro demais para rodar do zero toda vez
// que a tela abre ou um mapa é salvo.
// FIX: as sugestões de cada item já processado são cacheadas junto com uma
// ASSINATURA do estado do histórico usado para calculá-las (quantidade de
// itens com resultado + hash simples de id+resultado de cada um). Se essa
// assinatura não mudou desde a última vez que o item foi processado, o
// resultado salvo é reaproveitado sem rodar leave-one-out de novo — só
// itens NOVOS ou cujo resultado real mudou desde o último processamento
// disparam o recálculo caro. Isso não reintroduz leakage: a assinatura
// muda sempre que QUALQUER resultado do histórico muda, então o cache só
// é reaproveitado quando as estatísticas de fato seriam idênticas.

// Ver VERSAO_MOTOR_RANKING declarada acima — mesma constante
// reaproveitada aqui, único ponto de
// incremento para invalidar tanto o cache de correlação direta quanto o
// de jogoGerado sempre que a lógica de qualquer motor mudar.
function assinaturaLeaveOneOut(itensComResultado) {
  // BUG CORRIGIDO (reportado pelo usuário): a assinatura considerava só
  // id+resultado de cada item — mas as estatísticas usadas para gerar
  // QUALQUER jogo dependem também do textoMapa de TODOS os itens do
  // dataset (analisarCorrelacaoDireta leem h.textoMapa de cada item, não só
  // h.resultado). Sem o textoMapa na assinatura: editar o mapa do
  // concurso A (sem mudar resultado nem id) muda as estatísticas do
  // sistema inteiro, o jogo do concurso B deveria mudar, mas a assinatura
  // ficava igual e o cache devolvia o jogoGerado antigo de B, obsoleto.
  // Corrigido incluindo textoMapa na assinatura de cada item.
  return VERSAO_MOTOR_RANKING + "::" + itensComResultado
    .map(x => `${x.id}:${(x.resultado || []).join(",")}:${x.textoMapa || ""}:${assinaturaMapaOverride(x)}`)
    .sort()
    .join("|");
}

const _cacheJogoGeradoPorItem = new Map(); // id do item -> { assinatura, textoMapa, jogoGerado, jogoGeradoAlt }
// Sem isso, o cache cresce sem limite ao longo de uma sessão longa. Como só a última assinatura de
// cada item importa (assinaturas antigas nunca mais são consultadas), basta
// limpar o Map inteiro quando ele cresce demais — a próxima chamada
// recalcula e repovoa normalmente, sem perigo de resultado errado.
const LIMITE_CACHE_JOGO_GERADO = 5000;

// CORREÇÃO DE PERFORMANCE (travamento longo reportado pelo usuário) — o
// leave-one-out chama analisarCorrelacaoDireta uma vez POR item com resultado (~195 chamadas
// caras, ~150-250ms cada = 25-50s no total). O cache anterior (statsCache
// dentro da função) só vivia durante 1 chamada de criarStatsLeaveOneOut —
// toda vez que o app recarregava do zero (mesmo sem o histórico ter
// mudado 1 bit), essas 195 chamadas eram refeitas do zero de novo.
// Promovido para module-level, indexado por (id do item excluído +
// assinatura do dataset completo): se o histórico não mudou desde a
// última vez que ESTE item específico foi excluído e recalculado, reusa o
// resultado direto — sem rodar nada de novo. Só reprocessa quando o
// histórico de fato mudou (resultado novo, mapa editado, concurso novo).
const _cacheStatsLeaveOneOut = new Map(); // `${id}:${assinaturaCompleta}` -> { stats, statsRegras, statsCorr }
// ACHADO DE AUDITORIA CORRIGIDO (2ª rodada — item 1, continuação): recebia
// statsPrecalculados/statsRegrasPrecalculadas e devolvia stats/statsRegras
// dentro de statsParaItem(h), mas os dois eram sempre [] (laboratório
// experimental removido). Simplificado: recebe e devolve só a estatística
// real (statsCorrelacaoPrecalculadas/statsCorr) — statsParaItem(h) agora
// devolve o array de achados direto, não mais um objeto {stats, statsRegras, statsCorr}.
function criarStatsLeaveOneOut(hist, statsCorrelacaoPrecalculadas) {
  const itensComResultado = hist.filter(x => mapaInterpretavel(x) && resultadoValido(x.resultado));
  const assinaturaCompleta = assinaturaLeaveOneOut(itensComResultado);
  const porCondicao = new Map();
  (statsCorrelacaoPrecalculadas || []).forEach(a => {
    const k = `${a.id}:${a.dimensao}:${a.valorCondicao}`;
    if (!porCondicao.has(k)) porCondicao.set(k, []);
    porCondicao.get(k).push(a);
  });

  const statsParaItem = (h, planetasAlvo = null) => {
    if (!resultadoValido(h?.resultado)) return statsCorrelacaoPrecalculadas;
    const alvoSig = planetasAlvo ? JSON.stringify(planetasAlvo) : "self";
    const chaveCache = `${h.id}:${assinaturaCompleta}:${alvoSig}`;
    if (_cacheStatsLeaveOneOut.has(chaveCache)) {
      const v = _cacheStatsLeaveOneOut.get(chaveCache);
      _cacheStatsLeaveOneOut.delete(chaveCache); _cacheStatsLeaveOneOut.set(chaveCache, v);
      return v;
    }

    const planetasHistoricos = obterMapaInterpretado(h).planetas;
    const chavesContribuicao = construirChavesCondicoesAtivas(planetasHistoricos);
    const chavesAtivas = construirChavesCondicoesAtivas(planetasAlvo || planetasHistoricos);
    const resultadoSet = new Set(h.resultado);
    const relevantes = [];

    chavesAtivas.forEach(k => {
      const lista = porCondicao.get(k);
      if (!lista) return;
      const deveSubtrair = chavesContribuicao.has(k);
      lista.forEach(a => {
        if (!deveSubtrair) { relevantes.push(a); return; }
        const dias = a.dias - 1;
        if (dias <= 0) return;
        const hits = a.hits - (resultadoSet.has(a.numero) ? 1 : 0);
        const taxa = hits / dias;
        const desvio = (taxa - 0.6) * 100;
        relevantes.push({ ...a, dias, hits, taxa, desvio,
          direcao: desvio > 0 ? "positivo" : desvio < 0 ? "negativo" : "neutro",
          robustez: Math.abs(desvio) * dias,
        });
      });
    });

    if (_cacheStatsLeaveOneOut.size >= 350) limparCacheLRU(_cacheStatsLeaveOneOut, 350, 250);
    _cacheStatsLeaveOneOut.set(chaveCache, relevantes);
    return relevantes;
  };
  const histParaItem = (h) => (resultadoValido(h?.resultado) ? itensComResultado.filter(x => x.id !== h.id) : hist);
  return { statsParaItem, histParaItem, itensComResultado };
}

// BASE DE DECISÃO ÚNICA — monta a estatística cara (analisarCorrelacaoDireta)
// e o mecanismo leave-one-out (ver criarStatsLeaveOneOut) uma única vez por
// histórico. gerarHistoricoComDuasSugestoesAsync aplica as duas fórmulas de
// ranking (top15PorPontuacao / top15Formula70) em cima da MESMA base, sem
// recalcular nada estatístico de novo.
//   HISTÓRICO
//       ↓
//   construirBaseDecisao(historico)   (1 vez: stats + leave-one-out)
//       ↓
//   gerarHistoricoComDuasSugestoesAsync   (aplica as duas fórmulas de ranking)
function construirBaseDecisao(hist) {
  const statsCorrelacaoPrecalculadas = analisarCorrelacaoDireta(hist).achados;
  // Atalho de performance: se a estatística do histórico completo já vem
  // vazia, não há necessidade de leave-one-out — usa-se a base direta (sem
  // exclusão por item) sem custo extra, com o mesmo resultado. Só dispara
  // na prática quando o histórico não tem NENHUM mapa salvo ainda (app
  // recém-aberto, sem dados) — Correlação Direta é a única fonte de sinal
  // ativa hoje, e ela nunca fica vazia com dados reais.
  const semNadaParaVazar = statsCorrelacaoPrecalculadas.length === 0;
  if (semNadaParaVazar) {
    const semExclusao = () => statsCorrelacaoPrecalculadas;
    return {
      hist,
      statsParaItem: semExclusao,
      histParaItem: () => hist,
      assinatura: "sem-sinais",
    };
  }
  // Correção de vazamento de dado (data leakage) — ver comentário completo
  // em criarStatsLeaveOneOut. Montado 1 vez, reutilizado pelas Sugestões A e B.
  const { statsParaItem, histParaItem, itensComResultado } = criarStatsLeaveOneOut(hist, statsCorrelacaoPrecalculadas);
  const assinatura = assinaturaLeaveOneOut(itensComResultado);
  return { hist, statsParaItem, histParaItem, assinatura };
}

// CORREÇÃO/REFATORAÇÃO (ago/2026, pedido explícito do usuário: "remover o
// histórico 2... criar algo para sugerir as duas saídas, como é hoje o
// histórico 1 e 2"). Antes, top15PorPontuacao e top15FormulaComCorte
// geravam dois HISTÓRICOS separados (duas cópias inteiras do mesmo dataset,
// cada uma com seu jogoGerado, sincronizadas manualmente por botões
// "Criar"/"Reanalisar" — fonte de bugs de dessincronização documentados
// nos comentários removidos junto com PainelHistorico2). Unificado: cada
// item do histórico ÚNICO agora guarda as DUAS sugestões lado a lado —
// jogoGerado (Sugestão A, top15PorPontuacao) e jogoGeradoAlt (Sugestão B,
// top15FormulaComCorte) — calculadas na MESMA passada, sobre a MESMA base
// de decisão (construirBaseDecisao), sem nenhuma cópia de dataset, sem
// nenhum "Histórico 2" para desincronizar.
// gerarItemComDuasSugestoes: aplica as duas fórmulas a UM item — retorna
// {jogoGerado, jogoGeradoAlt} (cada um pode ser null se o item não tem
// mapa válido; na prática os dois sempre nascem juntos, já que dependem só
// de textoMapa, não de qual fórmula é usada).
// CACHE (ver comentário completo acima de assinaturaLeaveOneOut): se este
// item já foi processado com a MESMA assinatura de histórico, reaproveita
// as duas sugestões salvas em vez de rodar leave-one-out de novo — é isso
// que evita os ~140s medidos com o histórico real.
function gerarItemComDuasSugestoes(base, h) {
  if (!mapaInterpretavel(h)) return { jogoGerado: null, jogoGeradoAlt: null };
  const chaveCache = h.id;
  const cacheado = _cacheJogoGeradoPorItem.get(chaveCache);
  if (cacheado && cacheado.assinatura === base.assinatura && cacheado.textoMapa === h.textoMapa) {
    return { jogoGerado: cacheado.jogoGerado, jogoGeradoAlt: cacheado.jogoGeradoAlt };
  }
  const { planetas: p, cuspides: c } = obterMapaInterpretado(h);
  if (Object.keys(p).length === 0) return { jogoGerado: null, jogoGeradoAlt: null };
  const statsCorr = base.statsParaItem(h);
  const scoresItem = analisarMapa(p, c, statsCorr);
  const jogoGerado = top15PorPontuacao(scoresItem);
  const jogoGeradoAlt = top15Formula70(scoresItem);
  if (_cacheJogoGeradoPorItem.size >= LIMITE_CACHE_JOGO_GERADO) limparCacheLRU(_cacheJogoGeradoPorItem, LIMITE_CACHE_JOGO_GERADO, LIMITE_CACHE_JOGO_GERADO * 0.8);
  _cacheJogoGeradoPorItem.set(chaveCache, { assinatura: base.assinatura, textoMapa: h.textoMapa, jogoGerado, jogoGeradoAlt });
  return { jogoGerado, jogoGeradoAlt };
}

// (gerarHistoricoComDuasSugestoes, a versão síncrona, foi removida — todos
// os pontos de chamada usam a versão assíncrona em lotes,
// gerarHistoricoComDuasSugestoesAsync, abaixo, que não trava a UI.)

// CORREÇÃO DE PERFORMANCE (tela branca/travamento reportado pelo usuário)
// — versão assíncrona, processando em LOTES pequenos com uma pausa (yield
// ao event loop) entre cada lote. O trabalho total é o MESMO (nenhuma
// estatística a menos, nenhum sinal pulado, leave-one-out continua
// honesto) — a diferença é que a thread principal (UI) não fica bloqueada
// de uma vez por 25-50s: ela responde entre os lotes, então a tela não
// trava/aparenta estar branca, e dá pra mostrar progresso real.
// onProgresso(feitos, total) é chamado a cada lote, opcional.
async function gerarHistoricoComDuasSugestoesAsync(base, onProgresso, tamanhoLote = 8) {
  // ACHADO DE AUDITORIA EXTERNA (verificado, sem impacto prático real):
  // dentro de cada lote, os `tamanhoLote` itens rodam de forma síncrona
  // antes do próximo `await` — em teoria, um lote poderia travar a UI se
  // cada item fosse caro. Medido com dado real: o trabalho pesado
  // (analisarCorrelacaoDireta) já roda 1 única vez em construirBaseDecisao,
  // FORA deste loop — cada gerarItemComDuasSugestoes usa só o cache já
  // pronto de criarStatsLeaveOneOut, então um lote inteiro de 8 itens leva
  // menos de 1ms, mesmo testado com histórico 3x maior que o atual (963
  // itens). Não há travamento perceptível pra corrigir hoje.
  const resultado = new Array(base.hist.length);
  for (let i = 0; i < base.hist.length; i++) {
    const h = base.hist[i];
    const { jogoGerado, jogoGeradoAlt } = gerarItemComDuasSugestoes(base, h);
    resultado[i] = (jogoGerado == null && jogoGeradoAlt == null) ? h : { ...h, jogoGerado, jogoGeradoAlt };
    if ((i + 1) % tamanhoLote === 0 || i === base.hist.length - 1) {
      if (onProgresso) onProgresso(i + 1, base.hist.length);
      // Cede o event loop — deixa a UI (React) processar qualquer render
      // pendente antes de continuar o próximo lote. setTimeout(0) em vez
      // de microtask (Promise.resolve()) porque microtasks não cedem de
      // fato para paint/eventos do navegador; setTimeout cede.
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  }
  return resultado;
}


// Taxa-base do jogo: 15 de 25 números sempre saem em cada concurso, então
// qualquer número isolado tem 60% de chance de sair "por acaso". Constante
// compartilhada entre a pontuação (analisarMapa) e os textos de UI que citam
// esse número (RankingVisual, DetalheNumero) — evita ter "60%" espalhado e
// hardcoded em vários lugares que podiam ficar dessincronizados.

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: 7. MOTOR DE ANÁLISE — função principal analisarMapa (núcleo do sistema)
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// ATUALIZAÇÃO 7 (ago/2026, revisão de rigor estatístico) — LIMITE INFERIOR DE
// WILSON substitui a "soma bruta da taxa" (ATUALIZAÇÃO 4) como critério de
// pontuação. Motivo da mudança:
//
// A soma bruta trata "100% de acerto em 3 tentativas" e "85% de acerto em 40
// tentativas" como se fossem comparáveis (a primeira até pontua MAIS). Isso é
// estatisticamente errado: com 3 tentativas, a taxa real pode estar em
// qualquer lugar entre ~30% e 100% — a "confiança" de 100% é uma ilusão de
// amostra pequena. Com 40 tentativas, 85% é uma estimativa muito mais firme.
//
// O intervalo de Wilson resolve isso sem precisar de listas de exceção
// manuais (como TIPOS_ISENTOS_MIN_TRIALS, que isentava sinais de 3-10 trials
// do mínimo — e cuja própria auditoria já registrada acima mostrou 11 desses
// sinais caindo para "≈acaso" assim que mais dados chegaram: exatamente o
// comportamento que amostra pequena prevê). Em vez de aceitar ou rejeitar um
// sinal por um corte fixo de trials, o Wilson penaliza continuamente: quanto
// menor a amostra, mais o limite inferior "encolhe" de volta em direção à
// taxa-base (60%) — um sinal de 3/3 (100%) vira um limite inferior de ~44%
// (abaixo da taxa-base!), enquanto um sinal de 34/40 (85%) vira ~70%. É
// exatamente o "confiável primeiro" que se busca: prioriza o que tem
// evidência robusta, não o que teve sorte em poucas tentativas.
//
// ── wilsonLowerBound / wilsonUpperBound — REMOVIDAS (ago/2026, pedido
// explícito e repetido do usuário: "esse Wilson pra mim não faz sentido...
// sem trava... os sinais todos vão descobrir os números sozinhos, gerar
// porcentagem e quantas vezes saiu"). ──
// Calculavam o limite de confiança de Wilson, usado para decidir se um
// sinal era "confirmado" (Wilson > 60%) ou "candidato" (taxa bruta > 60%
// mas Wilson ainda não confirmava). Todo esse mecanismo de confiança foi
// removido do motor: agora cada sinal só registra taxa/trials/hits reais,
// sem nenhum filtro de significância estatística decidindo se ele "pode"
// contar. A decisão de quais sinais viram os 15 números do jogo é da
// Sugestão A / Sugestão B (top15PorPontuacao / top15Formula70), não
// mais da camada de descoberta do sinal.

// ATUALIZAÇÃO 6: 5º parâmetro (statsRegrasValidadasPrecalculadas) — mantido
// na assinatura de analisarMapa por compatibilidade, mas sem efeito real
// hoje (o catálogo que ele alimentava foi removido; ver comentário acima).
//
// ATUALIZAÇÃO 8: 6º parâmetro opcional statsCorrelacaoDiretaPrecalculadas —
// mesma lógica de performance, agora para analisarCorrelacaoDireta(). Também
// sem fallback automático (mesmo motivo de custo O(n²): analisarCorrelacaoDireta
// já é a função mais cara do arquivo, reparsear o histórico inteiro dentro de
// um loop por mapa seria proibitivo). Se vier null, os achados de correlação
// direta simplesmente não entram na pontuação (comportamento anterior à
// ATUALIZAÇÃO 8, sem quebrar nada para quem já chama analisarMapa sem esse
// parâmetro).
// ── TIPOS_VIES_ESTRUTURAL — lógica fixa removida (ago/2026). ──
// Era uma lista fixa por nome (orbeArredondado, novilOculto, septilOculto,
// harmonico16Oculto, quintilOculto, biquintilOculto, elementoDominante,
// faseLunar8) bloqueando sinais cujo número candidato vem de uma grandeza
// matematicamente pequena (nunca cobre 1-25 de forma justa — motivo
// estrutural, não estatístico, diferente das duas listas já removidas).
// O motivo em si continua válido — o problema era o MECANISMO: uma lista
// escrita à mão nunca reconhece um sinal novo com a mesma limitação até
// alguém notar e editar o código. Substituída por `viesEstrutural`,
// calculado automaticamente a cada reanálise dentro de
// analisarCorrelacaoDireta (mesmo padrão que
// `escalaLimitada` já usava para sinais de casa 1-12): mede quantos
// valores distintos aquele tipo já gerou em toda a história real de mapas
// e, com trials suficientes por valor (evita confundir amostra pequena com
// limitação de fórmula — ver comentário completo nas duas funções acima),
// decide sozinho se aquele tipo é estruturalmente limitado. Cobre
// automaticamente qualquer sinal futuro com o mesmo problema, sem precisar
// de edição manual. Validado contra os 8 tipos originais: todos continuam
// bloqueados pelo cálculo automático, com o motivo certo (poucos valores
// possíveis, não amostra pequena).

// REMOVIDO (pedido explícito do usuário: "apaga todos os sinais catalogados...
// o motor dos sinais consegue encontrar sozinho"). analisarMapa tinha ~1120
// linhas de blocos de detecção astrológica escritos à mão (dignidades, grau
// do planeta, planeta na casa, aspectos, cadeia dispositora, combinações,
// penalização da Lua, chamada a gerarSinaisExperimentais, etc.) — todos
// removidos. Mantida como versão mínima que só monta a estrutura de
// "scores" que o resto do sistema (top15PorPontuacao, top15FormulaComCorte,
// RankingVisual) espera receber — sem nenhum bloco de detecção, sem nenhuma
// batida em scores.__regrasValidadasBatidas. Assinatura preservada
// (mesmos parâmetros) para não quebrar nenhum ponto de chamada existente.
// RECONECTADO (pedido explícito do usuário, ago/2026: "eu não quero mais
// sinais... a porra do sistema vai encontrar sozinho!"). analisarMapa tinha
// sido esvaziada junto com a remoção de gerarSinaisExperimentais/
// TIPOS_SINAIS_LAB/TIPOS_REGRAS_VALIDADAS — mas analisarCorrelacaoDireta é
// um motor SEM lista fixa nenhuma: testa automaticamente casa/signo/grau de
// cada planeta, aspecto entre cada par, e agrupamento de 2+ planetas na
// mesma casa, sempre contra os 25 números, sem nenhum número ou condição
// pré-decidida no código — é exatamente "o sistema encontrando sozinho".
// Reconectado aqui: para o mapa do dia, identifica as mesmas condições que
// analisarCorrelacaoDireta testa (mesmas dimensões, mesma extração de
// dados) e busca, nos achados pré-calculados, a taxa real de cada um dos 25
// números sob aquela condição — sem repetir a detecção estatística (que já
// rodou 1x em analisarCorrelacaoDireta), só consultando o resultado dela.
// ACHADO DE AUDITORIA (código não usado, achado com eslint no-unused-vars):
// historico, statsSinaisPrecalculados e statsRegrasValidadasPrecalculadas
// (3º, 4º e 5º parâmetros) são recebidos mas NUNCA lidos dentro desta
// ACHADO DE AUDITORIA CORRIGIDO (2ª rodada — item 1): esta função recebia
// statsSinaisPrecalculados/statsRegrasValidadasPrecalculadas na assinatura,
// mas nunca os usava — vestígio do laboratório experimental já removido do
// resto do arquivo (avaliarSinaisExperimentais/avaliarRegrasValidadas não
// existem mais). Manter esses 2 parâmetros "fantasmas" na assinatura de
// analisarMapa dava a impressão de que o sistema ainda tem 3 fontes de
// sinal concorrendo pra decidir o jogo — a arquitetura real hoje é
// Correlação Direta → Motor A/B, sem mais nenhuma outra fonte. Removidos
// da assinatura por completo (não só documentados como sem uso): os 7
// call-sites que passavam esses 2 argumentos foram ajustados pra não
// passar mais nada nessa posição.
// ACHADO DE AUDITORIA CORRIGIDO (2ª rodada — item 1, continuação): o
// parâmetro `historico` também estava morto — a função só usa
// `statsCorrelacaoDiretaPrecalculadas` (já pré-calculado a partir do
// histórico em outro lugar), nunca lê o histórico bruto diretamente.
// Removido da assinatura; os 7 call-sites ajustados para não passar mais
// esse argumento.
function analisarMapa(planetas, cuspides, statsCorrelacaoDiretaPrecalculadas = null) {
  const scores = {};
  for (let i = 1; i <= 25; i++) {
    scores[i] = { fontes: [], temTestemunho: false, melhorTaxa: null, melhorTrials: 0, melhorForcaIndividual: 0, somaTaxa: 0, somaVezes: 0, forca: 0, testemunhosConfiaveis: 0, totalSinais: 0 };
  }
  const regrasValidadasBatidas = [];

  const achados = statsCorrelacaoDiretaPrecalculadas || [];
  if (achados.length > 0) {
    // Índice achado por chave "id:dimensao:valorCondicao" -> array de 25
    // achados (um por número) — montado 1x por chamada, mesmo custo O(achados)
    // que já existia antes de qualquer otimização.
    const porChave = {};
    achados.forEach(a => {
      const chave = `${a.id}:${a.dimensao}:${a.valorCondicao}`;
      if (!porChave[chave]) porChave[chave] = [];
      porChave[chave].push(a);
    });

    const registrarSeExistir = (chave, tipoLabel) => {
      const lista = porChave[chave];
      if (!lista) return;
      lista.forEach(a => {
        if (a.numero < 1 || a.numero > 25) return;
        // BUG CORRIGIDO (reportado pelo usuário: "os sinais... tem erros,
        // não é possível"). trials aqui virava a.dias (dias corridos) — a
        // MESMA métrica que já tinha sido identificada como enganosa na
        // robustez (187 dias corridos de 1 evento só não são 187
        // confirmações independentes). Só corrigir a robustez do
        // Laboratório e deixar o RANKING REAL (que usa "trials" pra decidir
        // confiança/desempate em top15PorPontuacao e top15FormulaComCorte,
        // e pra exibir "187×" na tela de sinais) continuar usando dias era
        // meio-corrigido — o motor de escolha dos 15 e a tela continuavam
        // tratando esse achado como muito mais confiável do que é.
        // REGRA FIXA (ver testarCondicao): "trials" e "hits" agora são
        // dias/hits diretos, sem agrupamento de eventos. "confiavel"
        // recalculado aqui só com base em dias (ver MINIMO_DIAS_CONFIAVEL).
        scores[a.numero].fontes.push(`[correlação direta] ${tipoLabel} → nº ${a.numero} (histórico: ${(a.taxa * 100).toFixed(0)}% em ${a.dias} dias, ${a.hits} vez${a.hits !== 1 ? "es" : ""})`);
        const confiavel = a.dias >= MINIMO_DIAS_CONFIAVEL;
        regrasValidadasBatidas.push({ tipo: chave, numero: a.numero, origem: "correlacaoDireta", taxa: a.taxa, trials: a.dias, hits: a.hits, confiavel, direcao: a.direcao });
      });
    };

    // 1) Casa, 2) Signo, 3) Grau exato — uma por planeta/ponto presente no mapa.
    Object.keys(planetas).forEach(id => {
      const p = planetas[id];
      if (!p) return;
      if (p.casa != null && p.casa !== "") registrarSeExistir(`${id}:casa:${p.casa}`, `${id} na ${p.casa}ª Casa`);
      if (p.signo) registrarSeExistir(`${id}:signo:${p.signo}`, `${id} em ${p.signo}`);
      if (p.grau != null && p.grau !== "") registrarSeExistir(`${id}:grau:${parseInt(p.grau)}`, `${id} em grau ${parseInt(p.grau)}`);
    });

    // 4) Aspecto entre cada par de planetas presentes no mapa.
    // BUG CORRIGIDO (mesmo achado do produtor, aplicado aqui no consumidor):
    // só olhava planetas[idA].aspectos (1 sentido), com idA/idB definidos
    // pela ordem de inserção em idsPresentes — que pode divergir da ordem
    // fixa usada pelo produtor em IDS_CORRELACAO_DIRETA. Corrigido: testa
    // os dois sentidos (idA→idB e idB→idA) e monta a chave na MESMA ordem
    // que o produtor usa (a ordem de IDS_CORRELACAO_DIRETA), garantindo que
    // o achado de "sol+urano" no histórico seja encontrado aqui mesmo que
    // o mapa do dia tenha guardado o aspecto do lado de Urano.
    const idsPresentes = IDS_CORRELACAO_DIRETA.filter(id => planetas[id]);
    const idsAspectosPresentes = IDS_ASPECTOS_CORRELACAO.filter(id => planetas[id]);
    for (let i = 0; i < idsAspectosPresentes.length; i++) {
      for (let j = i + 1; j < idsAspectosPresentes.length; j++) {
        const idX = idsAspectosPresentes[i], idY = idsAspectosPresentes[j];
        // Ordena o par na mesma lista usada pelo produtor de aspectos.
        // DSC/IC pertencem a IDS_ASPECTOS_CORRELACAO, portanto produtor e
        // consumidor usam uma chave determinística também nesses eixos.
        const posX = IDS_ASPECTOS_CORRELACAO.indexOf(idX);
        const posY = IDS_ASPECTOS_CORRELACAO.indexOf(idY);
        const [idA, idB] = (posX >= 0 && posY >= 0 && posX > posY) ? [idY, idX] : [idX, idY];
        const aspectosA = planetas[idA]?.aspectos || [];
        const aspectosB = planetas[idB]?.aspectos || [];
        const tiposEncontrados = new Set();
        aspectosA.forEach(asp => { if (aspectoConfiavelParaMotor(asp) && asp.planeta === idB && asp.tipo) tiposEncontrados.add(asp.tipo.toLowerCase()); });
        aspectosB.forEach(asp => { if (aspectoConfiavelParaMotor(asp) && asp.planeta === idA && asp.tipo) tiposEncontrados.add(asp.tipo.toLowerCase()); });
        tiposEncontrados.forEach(tipoAsp => {
          registrarSeExistir(`${idA}+${idB}:aspecto:${tipoAsp}`, `${idA} ${tipoAsp} ${idB}`);
        });
      }
    }

    // 5) Agrupamento de 2+ planetas na mesma casa (mesma composição testada
    // em analisarCorrelacaoDireta — chave é o conjunto de ids ordenado).
    const porCasaHoje = {};
    idsPresentes.forEach(id => {
      const casa = planetas[id]?.casa;
      if (casa) {
        if (!porCasaHoje[casa]) porCasaHoje[casa] = [];
        porCasaHoje[casa].push(id);
      }
    });
    Object.values(porCasaHoje).forEach(ids => {
      if (ids.length < 2) return;
      const grupoOrdenado = [...ids].sort();
      const chaveGrupo = grupoOrdenado.join("+");
      const qtd = grupoOrdenado.length;
      const dimensao = qtd === 2 ? "combinacaoCasa" : `combinacaoCasa${qtd}`;
      registrarSeExistir(`${chaveGrupo}:${dimensao}:junto`, `Combinação ${chaveGrupo} na mesma Casa`);
    });

    // BUG CORRIGIDO (reportado pelo usuário: "os sinais... tem erros") —
    // dimensões que analisarCorrelacaoDireta testa e gera achados reais
    // (recepção mútua, fase lunar, retrogradação) nunca eram consultadas
    // aqui — apareciam na tela de sinais ("Buscar sinal"/"Por número") mas
    // NUNCA influenciavam o jogo gerado (Sugestões A/B), porque este consumidor só
    // cobria casa/signo/grau/aspecto/combinação de casa. Reconectadas essas
    // dimensões, com a MESMA lógica de detecção usada do lado
    // produtor (analisarCorrelacaoDiretaImpl), aplicada ao mapa do dia.
    // (ACHADO DE AUDITORIA CORRIGIDO: esta lista mencionava T-quadratura e
    // Grande Trígono como dimensões ativas geradoras de achados — mas
    // essas duas já foram removidas do produtor há mais tempo, ver
    // comentário completo em analisarCorrelacaoDiretaImpl. Referência
    // desatualizada, sem efeito no código — nenhum bloco abaixo tenta
    // consultar essas duas dimensões.)

    // 6) Recepção mútua: par de planetas onde cada um está no signo regido
    // pelo outro. NOME_REGENTE_PARA_ID só cobre os 7 tradicionais, então
    // planetas modernos (Urano+) já não geram par válido aqui — mas
    // jupiter+saturno (2 lentos, ambos tradicionais) passavam sem
    // bloqueio, mesmo padrão problemático já corrigido no produtor (ver
    // analisarCorrelacaoDiretaImpl).
    for (let i = 0; i < idsPresentes.length; i++) {
      for (let j = i + 1; j < idsPresentes.length; j++) {
        const idA = idsPresentes[i], idB = idsPresentes[j];
        if (PLANETAS_LENTOS_BLOQUEADOS.has(idA) && PLANETAS_LENTOS_BLOQUEADOS.has(idB)) continue;
        const pA = planetas[idA], pB = planetas[idB];
        if (!pA?.signo || !pB?.signo) continue;
        const regenteA = NOME_REGENTE_PARA_ID[regenteDoSigno(pA.signo)];
        const regenteB = NOME_REGENTE_PARA_ID[regenteDoSigno(pB.signo)];
        if (regenteA === idB && regenteB === idA) {
          registrarSeExistir(`${idA}+${idB}:recepcaoMutua:sim`, `${idA} e ${idB} em recepção mútua`);
        }
      }
    }

    // T-quadratura e Grande Trígono — REMOVIDAS daqui também (ver
    // comentário completo no produtor, em analisarCorrelacaoDiretaImpl:
    // 0% de contribuição real medida com dados do histórico completo).
    // Como a origem não gera mais achados dessas duas dimensões, manter
    // este bloco rodando a cada mapa só faria trabalho para nada (a busca
    // em registrarSeExistir nunca encontraria a chave correspondente).

    // 8) Fase lunar (1-8, mesma fórmula do produtor — elongação Sol-Lua).
    const sol = planetas.sol, lua = planetas.lua;
    if (sol?.signo && lua?.signo) {
      const solAbs = posicaoAbsoluta(sol.signo, sol.grau, sol.minutos);
      const luaAbs = posicaoAbsoluta(lua.signo, lua.grau, lua.minutos);
      if (solAbs != null && luaAbs != null) {
        const elongComSinal = ((luaAbs - solAbs) % 360 + 360) % 360;
        const fase = Math.floor(elongComSinal / 45) + 1;
        registrarSeExistir(`mapa:faseLunar:${fase}`, `Lua na fase ${fase}/8`);
      }
    }

    // 9) Retrogradação — mesmo bloqueio de planetas lentos aplicado do
    // lado produtor (ver PLANETAS_LENTOS_BLOQUEADOS).
    idsPresentes.forEach(id => {
      if (PLANETAS_LENTOS_BLOQUEADOS.has(id)) return;
      if (planetas[id]?.retrogrado === true) {
        registrarSeExistir(`${id}:retrogrado:sim`, `${id} retrógrado`);
      }
    });
  }

  for (let n = 1; n <= 25; n++) {
    scores[n].temTestemunho = scores[n].fontes.length > 0;
  }
  // ACHADO DE AUDITORIA CORRIGIDO: "melhorTaxa"/"melhorTrials" (usados na
  // exibição da tela, RankingVisual — "os 15 números mais fortes") ainda
  // calculavam o "melhor sinal individual por trials" — critério do Motor
  // A ANTIGO, de antes da reescrita. Corrigido nesta etapa: scores[n].forca
  // passou a refletir a soma de todos os sinais do número (não mais "1
  // sinal vencedor") — a fórmula exata dessa soma foi revisada de novo
  // logo abaixo (ver "CORREÇÃO... usa o DESVIO em relação ao baseline de
  // 60%"), que é a versão final e a que está realmente em vigor hoje.
  // melhorTaxa/melhorTrials continuam existindo separadamente (o "sinal
  // individual mais forte", igual ao que o Motor B usa) — servem pra
  // mostrar qual sinal específico mais contribuiu, sem decidir a ordem.
  for (let n = 1; n <= 25; n++) {
    scores[n].somaTaxa = 0;
    scores[n].somaVezes = 0;
    scores[n].forca = 0;
  }
  regrasValidadasBatidas.forEach(b => {
    if (b.taxa == null) return;
    const atual = scores[b.numero];
    // ACHADO DE AUDITORIA CORRIGIDO: este bloco filtrava por
    // "b.confiavel !== true" antes de somar — mas top15PorPontuacao (o
    // Motor A real) soma TODOS os sinais, sem filtro de confiabilidade
    // (pedido explícito do usuário: motores A/B são "sem trava, cru").
    // Ficou desalinhado: scores[n].forca (usado na exibição) somava só
    // sinais confiáveis, enquanto o motor real somava tudo — 5 de 5
    // concursos testados divergiam entre o jogo real e o que a tela
    // mostrava como "os 15 mais fortes". Corrigido: soma tudo, igual ao
    // motor. "confiavel" continua existindo no dado bruto (não é removido
    // de b), só não filtra mais aqui.
    // CORREÇÃO (a pedido do usuário, depois de medir com dado real): antes,
    // sinal com taxa < 60% (negativo) ainda somava taxa positiva à força,
    // só que "mais fraco" — nunca subtraía. Testei o caso real: "Vênus em
    // Câncer" tem taxa 28.6% pro número 11 (21 dias, saiu só 6 vezes) — é
    // evidência real de que o número tende a NÃO sair quando essa condição
    // aparece, não "um voto fraco a favor". Corrigido: usa o DESVIO em
    // relação ao baseline de 60% (o mesmo "desvio" já calculado em cada
    // achado) como a contribuição de cada sinal — um sinal de 90% soma
    // +30, um de 60% soma 0, um de 20% SUBTRAI 40. Isso faz sinal negativo
    // puxar a força do número pra baixo de verdade, coerente com o que os
    // dados mostram e com o Conflict Engine (que já classificava esses
    // sinais como "negativo"/"contra" — agora o Motor A concorda com essa
    // classificação, não só a exibe).
    const contribuicao = (b.taxa - 0.6) * (b.trials || 0);
    atual.somaTaxa += b.taxa;
    atual.somaVezes += (b.trials || 0);
    atual.forca = (atual.forca || 0) + contribuicao;
    // melhor sinal individual (taxa × vezes desse sinal só) — igual ao
    // Motor B (top15Formula70), usado na exibição de "qual sinal decidiu"
    // e no detalhe do número. BUG CORRIGIDO (mesmo achado do motor real):
    // sem checar b.taxa >= 0.6, um sinal negativo com muita amostra podia
    // "vencer" como melhor sinal individual, mesmo sendo evidência contra
    // o número — a tela mostraria isso como se fosse o motivo do número
    // estar forte, quando na real é o oposto. Mesmo critério do motor
    // real: só sinais realmente acima do baseline (taxa > 60%) competem aqui.
    if (b.taxa > 0.6) {
      const forcaIndividual = b.taxa * (b.trials || 0);
      const devePreferir = atual.melhorTaxa == null || forcaIndividual > (atual.melhorForcaIndividual || 0);
      if (devePreferir) {
        atual.melhorTaxa = b.taxa;
        atual.melhorTrials = b.trials || 0;
        atual.melhorForcaIndividual = forcaIndividual;
      }
    }
    // testemunhosConfiaveis conta quantos sinais CONFIÁVEIS (piso de dias)
    // apontam de fato para cada número — não é mais o número usado como
    // "principal" na tela (ver totalSinais abaixo), porque os motores A/B
    // usam TODOS os sinais, não só os confiáveis (ver correção acima).
    // Mantido como dado secundário, informativo.
    // BUG CORRIGIDO (auditoria externa): incrementava sempre, sem checar
    // b.confiavel — mesmo sinais não-confiáveis contavam. Hoje esse campo
    // não é exibido em lugar nenhum da UI (foi substituído por totalSinais
    // na exibição), mas o cálculo em si estava errado e merece estar
    // correto caso volte a ser usado no futuro.
    if (b.confiavel === true) {
      scores[b.numero].testemunhosConfiaveis++;
    }
    // ACHADO DE AUDITORIA CORRIGIDO: a tela mostrava só
    // "testemunhosConfiaveis" como se fosse o total de sinais que contam
    // pro jogo — mas os motores A/B somam/comparam TODOS os sinais, cru,
    // sem filtro de confiabilidade. O número exibido era menor que o que
    // de fato influencia o jogo, dando a falsa impressão de que só os
    // "confiáveis" contam. totalSinais conta todos, sem filtro.
    scores[b.numero].totalSinais = (scores[b.numero].totalSinais || 0) + 1;
  });

  Object.defineProperty(scores, "__regrasValidadasBatidas", {
    value: regrasValidadasBatidas,
    enumerable: false,
  });
  return scores;
}

// ─── Design tokens ──────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: 8. UI — design tokens e helpers de score
// ═══════════════════════════════════════════════════════════════════════════
const T = {
  bg: "#0A0D16",
  bgElev: "#12162355",
  surface: "#141826",
  surface2: "#1B2033",
  surfaceHover: "#20263B",
  border: "#2A3049",
  borderSoft: "#20263A",
  gold: "#D4AF5F",
  goldSoft: "#D4AF5F22",
  goldText: "#E8C878",
  text: "#EDEEF4",
  textDim: "#9498AC",
  textFaint: "#5D6178",
  green: "#3FB88A",
  greenSoft: "#3FB88A1A",
  red: "#E5626A",
  redSoft: "#E5626A1A",
  amber: "#D4A94F",
  blue: "#6E8FD9",
  fontDisplay: "Georgia, 'Iowan Old Style', 'Palatino Linotype', serif",
  fontSans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontMono: "'JetBrains Mono', 'SF Mono', Menlo, monospace",
  fontNum: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

// A escolha dos 15 números finais é feita pelos motores top15PorPontuacao/
// top15Formula70 (Sugestões A e B) — esta seção define as constantes e
// helpers usados por eles.

// MOTOR A: por número, soma a contribuição de TODOS os sinais que apontam
// pra ele — cada sinal contribui (taxa - 0.6) × vezes (desvio em relação
// ao baseline de 60%, não a taxa bruta): um sinal de 90% em 20 vezes soma
// +6, um sinal fraco de 30% em 20 vezes SUBTRAI 6 (evidência contra).
// Ordena os 25 números por essa força total, do maior pro menor. Pega os
// 15 primeiros. (ACHADO DE AUDITORIA CORRIGIDO: este comentário descrevia
// "soma das taxas × soma das vezes", uma fórmula antiga — a real, usada
// por top15PorPontuacao, é a soma de desvios acima.)
// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: EVIDENCE ENGINE — registro de evidência por número
// ═══════════════════════════════════════════════════════════════════════════
// Separa SINAL de DECISÃO: os motores (top15PorPontuacao/top15Formula70)
// decidem quais 15 números entram no jogo, mas não explicam por quê. Esta
// camada não decide nada — só organiza, para cada um dos 25 números, TODOS
// os sinais que apontam pra ele (já calculados em analisarMapa/
// analisarCorrelacaoDireta, nada é recalculado aqui). Ela guarda as duas
// unidades relevantes: taxa × vezes para o melhor sinal individual do
// Motor B e (taxa - 0,60) × vezes para a contribuição acumulada do Motor A.
//
// Isso responde a pergunta "por que o 17 ficou acima do 8?" com dados reais
// (quais sinais, quantos, com que taxa e quantas vezes), não com "porque
// score = 73".
function montarEvidenciaPorNumero(scores) {
  const batidas = scores.__regrasValidadasBatidas || [];
  const porNumero = {};
  for (let n = 1; n <= 25; n++) {
    porNumero[n] = { numero: n, sinais: [] };
  }
  batidas.forEach(b => {
    if (b.taxa == null) return;
    porNumero[b.numero].sinais.push({
      tipo: b.tipo,
      label: b.label || b.tipo,
      taxa: b.taxa,
      vezes: b.trials || 0,
      forca: b.taxa * (b.trials || 0),
      // Contribuição real pro Motor A (desvio em relação ao baseline de
      // 60%, não taxa bruta) — mesmo cálculo usado em analisarMapa. Um
      // sinal de 90% contribui +30, um de 20% contribui -40.
      contribuicaoMotorA: (b.taxa - 0.6) * (b.trials || 0),
      direcao: b.direcao || (b.taxa > 0.6 ? "positivo" : b.taxa < 0.6 ? "negativo" : "neutro"),
    });
  });

  const evidencias = [];
  for (let n = 1; n <= 25; n++) {
    const e = porNumero[n];
    // BUG CORRIGIDO (achado ao investigar o mesmo bug do Motor B real):
    // ordenava por "forca" bruta (taxa × vezes), sem checar direção — um
    // sinal NEGATIVO com muita amostra podia aparecer como "o mais forte"
    // (melhorSinal, forcaMotorB), mesmo sendo evidência CONTRA o número.
    // Essa função alimenta Evidence/Conflict/Confidence/Decision
    // Explainer — o bug se propagava pra toda a UI de diagnóstico, não só
    // pro motor. Corrigido: separa sinais a favor (>=60%) dos demais;
    // "melhor" (usado como referência do Motor B) só considera os a
    // favor — mesmo critério já corrigido em top15Formula70.
    e.sinais.sort((a, b) => b.forca - a.forca);
    const sinaisAFavor = e.sinais.filter(s => s.taxa > 0.6);
    const somaContribuicaoA = e.sinais.reduce((s, x) => s + x.contribuicaoMotorA, 0);
    const melhor = sinaisAFavor[0] || null;
    // CONFLITO: pesa cada sinal pela distância absoluta ao baseline de 60%
    // multiplicada pela amostra — a mesma unidade de evidência do Motor A.
    // Assim 59% em muitas ocorrências não vira artificialmente um grande
    // conflito só por estar perto, porém abaixo, do baseline.
    const forcaFavor = e.sinais.filter(s => s.direcao === "positivo").reduce((s, x) => s + Math.abs(x.contribuicaoMotorA), 0);
    const forcaContra = e.sinais.filter(s => s.direcao === "negativo").reduce((s, x) => s + Math.abs(x.contribuicaoMotorA), 0);
    const forcaTotal = forcaFavor + forcaContra;
    // Índice de conflito: 0 = todos os sinais concordam (só a favor ou só
    // contra), 1 = empate exato entre força a favor e força contra. Usa a
    // MENOR das duas forças sobre o total — cresce conforme as duas ficam
    // parecidas, não conforme uma delas cresce sozinha.
    const conflito = forcaTotal > 0 ? (2 * Math.min(forcaFavor, forcaContra)) / forcaTotal : 0;
    let nivelConflito;
    if (e.sinais.length === 0) nivelConflito = "sem_dados";
    else if (conflito < 0.15) nivelConflito = "baixo";
    else if (conflito < 0.4) nivelConflito = "medio";
    else nivelConflito = "alto";
    evidencias.push({
      numero: n,
      totalSinais: e.sinais.length,
      sinais: e.sinais, // já ordenados do mais forte pro mais fraco
      // Força de cada motor, exatamente como top15PorPontuacao/
      // top15Formula70 calculam — não é uma 3ª fórmula nova, é a mesma
      // conta, só exposta de forma legível.
      forcaMotorA: somaContribuicaoA,
      forcaMotorB: melhor ? melhor.forca : 0,
      melhorSinal: melhor,
      // CONFLITO: quando sinais fortes discordam entre si (uns favorecem
      // o número, acima do baseline de 60%; outros desfavorecem, abaixo),
      // isso é informação real que "força total" sozinha esconde — dois
      // números com a mesma força podem ter confiabilidade bem diferente
      // se um deles tem sinais conflitantes e o outro não.
      forcaFavor, forcaContra, indiceConflito: conflito, nivelConflito,
      // Texto pronto explicando a origem — usado no "por que este número
      // está aqui" da UI, sem cada consumidor ter que remontar a frase.
      explicacao: e.sinais.length === 0
        ? "Nenhum sinal do sistema aponta para este número hoje."
        : melhor
          ? `${e.sinais.length} ${e.sinais.length !== 1 ? "sinais" : "sinal"} aponta${e.sinais.length !== 1 ? "m" : ""} para este número. O mais forte a favor: ${melhor.label} (${(melhor.taxa * 100).toFixed(0)}% em ${melhor.vezes} vez${melhor.vezes !== 1 ? "es" : ""}).`
          : `${e.sinais.length} ${e.sinais.length !== 1 ? "sinais" : "sinal"} aponta${e.sinais.length !== 1 ? "m" : ""} para este número, mas nenhum é evidência a favor (todos abaixo de 60%).`,
    });
  }
  return evidencias;
}

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: CONFIDENCE ENGINE — o sistema declara "não sei" quando a base de
// decisão do concurso é fraca, em vez de sempre entregar 15 números com a
// mesma aparência de certeza. Usa 3 ingredientes já calculados por
// montarEvidenciaPorNumero, sem inventar métrica nova:
//   1) quantos dos 15 números escolhidos têm conflito alto entre sinais
//   2) quantos têm poucos sinais de amostra (robustez baixa)
//   3) quão acima da média geral está a força dos números escolhidos
//      (se o jogo mal se distingue do resto dos 25, não há muita evidência
//      diferenciadora neste concurso específico)
// ═══════════════════════════════════════════════════════════════════════════
function avaliarConfiancaJogo(evidencias, jogo, motor = "A") {
  if (!evidencias || !jogo || jogo.length === 0) {
    return { nivel: "sem_dados", label: "Sem dados suficientes", detalhes: [] };
  }
  // BUG CORRIGIDO (achado de auditoria externa, confirmado): esta função
  // sempre usava forcaMotorA no cálculo, mesmo quando chamada para avaliar
  // a confiança do Jogo B (avaliarConfiancaJogo(evidencias, jogoB), sem
  // nenhum parâmetro dizendo qual motor estava sendo avaliado) — o selo de
  // confiança do Motor B era calculado com a métrica do Motor A, uma
  // métrica que não foi usada para decidir aquele jogo. Corrigido: recebe
  // qual motor está sendo avaliado e usa o campo de força correspondente
  // (forcaMotorA ou forcaMotorB) em todo o cálculo.
  const campoForca = motor === "B" ? "forcaMotorB" : "forcaMotorA";
  const porNumero = {};
  evidencias.forEach(e => { porNumero[e.numero] = e; });
  const doJogo = jogo.map(n => porNumero[n]).filter(Boolean);
  const forcaMediaJogo = media(doJogo.map(e => e[campoForca])) || 0;
  const forcaMediaGeral = media(evidencias.map(e => e[campoForca])) || 0;
  const nConflitoAlto = doJogo.filter(e => e.nivelConflito === "alto").length;
  // Robustez mede TAMANHO DE AMOSTRA, não quantidade de sinais distintos.
  // Um único sinal com 40 dias é mais sustentado que 5 sinais com 2 dias
  // cada. Considera amostra suficiente quando ao menos um testemunho do
  // número alcança o mesmo piso usado pelo motor.
  const nPoucosSinais = doJogo.filter(e =>
    e.totalSinais > 0 && !(e.sinais || []).some(s => (s.vezes || 0) >= MINIMO_DIAS_CONFIAVEL)
  ).length;
  const nSemSinal = doJogo.filter(e => e.totalSinais === 0).length;
  // Distância relativa: quanto o jogo se destaca da média geral dos 25 —
  // 0 = jogo é igual ao resto (sem evidência diferenciadora real),
  // valores maiores = os números escolhidos realmente se destacam.
  // LIMIAR CALIBRADO COM DADO REAL: como o Motor A soma TODOS os sinais de
  // cada número (não só os fortes), a diferença entre "os 15 melhores" e
  // "a média de todos os 25" é estruturalmente pequena neste sistema —
  // medido contra 65 concursos reais: mínimo 4%, mediana 6%, máximo 11%.
  // Um limiar fixo de 15% (chute inicial, sem calibração) nunca era
  // atingido por NENHUM concurso testado — penalizava todo mundo igual
  // por um motivo estrutural do motor, não uma fraqueza real daquele
  // concurso específico. Corrigido para 0.04 (piso real observado):
  // só marca como fraco quando o destaque está no patamar mais baixo já
  // visto, não em qualquer valor abaixo de um número arbitrário.
  // BUG CORRIGIDO (achado ao investigar a mesma cascata do sinal
  // negativo, em 2 etapas):
  // 1) "forcaMediaGeral > 0" assumia força sempre positiva (verdade com a
  //    fórmula antiga) — corrigido pra usar valor absoluto no denominador.
  // 2) Isso não bastou: com a nova fórmula (soma de desvios, positivos e
  //    negativos se cancelando), forcaMediaGeral pode ficar
  //    PRATICAMENTE ZERO por coincidência (medido: 3.18e-14 num concurso
  //    real) sem ser negativa nem zero exato — dividir por um valor tão
  //    pequeno gerava "destaque" astronômico (1.2 quatrilhões, testado).
  //    Corrigido de vez: usa o DESVIO PADRÃO das forças dos 25 números
  //    como escala de referência, não a própria média — desvio padrão é
  //    sempre uma magnitude razoável (nunca fica artificialmente perto de
  //    zero só porque positivos e negativos se cancelam na soma), e mede
  //    exatamente o que "destaque" precisa: quanto o jogo se distingue da
  //    dispersão real do mapa, em unidades de desvio padrão (um z-score
  //    simplificado).
  const forcasTodas = evidencias.map(e => e[campoForca]);
  const dpForcas = desvioPadraoAmostral(forcasTodas);
  const destaque = dpForcas && dpForcas > 0 ? (forcaMediaJogo - forcaMediaGeral) / dpForcas : 0;
  // LIMIAR RECALIBRADO (escala mudou de "% relativo" pra "desvios padrão"
  // com a correção acima — medido contra 65 concursos reais na nova
  // escala: mínimo 0.577, mediana 0.642, máximo 0.705. O limiar antigo
  // (0.045) nunca disparava mais nessa escala nova — o alerta ficava
  // efetivamente desligado sem ninguém perceber. Ajustado pro novo piso
  // real observado.
  const destaqueFraco = destaque < 0.58;

  const detalhes = [];
  if (nConflitoAlto > 0) detalhes.push(`${nConflitoAlto} de 15 números têm sinais discordando fortemente entre si`);
  if (nPoucosSinais > 0) detalhes.push(`${nPoucosSinais} de 15 números só têm sinais com amostra abaixo de ${MINIMO_DIAS_CONFIAVEL} dias`);
  if (nSemSinal > 0) detalhes.push(`${nSemSinal} de 15 números não têm nenhum sinal do sistema apontando pra eles`);
  if (destaqueFraco) detalhes.push("os números escolhidos quase não se destacam da média geral do mapa — pouca evidência diferenciadora hoje");

  // Pontuação simples: começa em 100, desconta por cada fator de fraqueza.
  // Não é ciência exata — é um resumo honesto pra sinalizar "olha com mais
  // cuidado hoje" antes de um jogo específico ser gerado.
  let pontos = 100;
  pontos -= nConflitoAlto * 4;
  pontos -= nPoucosSinais * 3;
  pontos -= nSemSinal * 6;
  pontos -= destaqueFraco ? 15 : 0;
  pontos = Math.max(0, Math.min(100, pontos));

  let nivel, label;
  if (pontos >= 75) { nivel = "alta"; label = "Alta"; }
  else if (pontos >= 55) { nivel = "media"; label = "Média"; }
  else if (pontos >= 35) { nivel = "baixa"; label = "Baixa"; }
  else { nivel = "muito_baixa"; label = "Muito baixa"; }

  return { nivel, label, pontos, detalhes, nConflitoAlto, nPoucosSinais, nSemSinal, destaque };
}

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: REGIME ENGINE — classifica o "perfil estrutural" de um jogo (15
// números), independente de qualquer sinal astrológico: paridade, soma,
// distribuição pelas 5 dezenas do volante (1-5, 6-10, 11-15, 16-20, 21-25),
// e sequências de números consecutivos. Depois busca no histórico REAL
// (resultados que de fato saíram, não jogos gerados) quais concursos têm
// perfil parecido, pra dar contexto de "isso já aconteceu antes, assim se
// comportou" — sem prometer que o futuro repete o passado.
// ═══════════════════════════════════════════════════════════════════════════
function classificarRegime(numeros) {
  const pares = numeros.filter(n => n % 2 === 0).length;
  const impares = numeros.length - pares;
  const soma = numeros.reduce((s, n) => s + n, 0);
  const dezenas = [0, 0, 0, 0, 0]; // 1-5, 6-10, 11-15, 16-20, 21-25
  numeros.forEach(n => { dezenas[Math.min(4, Math.floor((n - 1) / 5))]++; });
  // Sequências consecutivas: quantos "pares consecutivos" existem no jogo
  // (ex: 7 e 8 juntos conta 1) — mede se o jogo tem números "colados" ou
  // bem espalhados.
  const ordenados = [...numeros].sort((a, b) => a - b);
  let consecutivos = 0;
  for (let i = 1; i < ordenados.length; i++) {
    if (ordenados[i] === ordenados[i - 1] + 1) consecutivos++;
  }
  return { pares, impares, soma, dezenas, consecutivos };
}

// Distância entre dois perfis de regime — quanto menor, mais parecidos.
// Cada componente é normalizado pela sua escala típica antes de somar,
// pra "soma" (que varia na casa de centenas) não dominar sozinha sobre
// "pares" (que varia só de 0 a 15).
function distanciaRegime(a, b) {
  const dPares = Math.abs(a.pares - b.pares) / 15;
  const dSoma = Math.abs(a.soma - b.soma) / 195; // soma máx (25+24+...+11) - mín (1+2+...+15), faixa aproximada
  const dDezenas = a.dezenas.reduce((s, v, i) => s + Math.abs(v - b.dezenas[i]), 0) / 15;
  const dConsecutivos = Math.abs(a.consecutivos - b.consecutivos) / 14;
  return dPares + dSoma + dDezenas + dConsecutivos;
}

// Busca, no histórico real (resultados que de fato saíram), os concursos
// com perfil estrutural mais parecido ao jogo proposto — pra dar contexto,
// não previsão. Retorna os N mais próximos, cada um com a distância e o
// próprio resultado (pra quem quiser conferir o que saiu naquele dia).
function buscarRegimesSemelhantes(jogoProposto, historico, limite = 5, idExcluir = null) {
  const regimeAlvo = classificarRegime(jogoProposto);
  const candidatos = (historico || [])
    .filter(h => resultadoValido(h.resultado) && h.id !== idExcluir)
    .map(h => {
      const regime = classificarRegime(h.resultado);
      return { concurso: h.concurso, data: h.data, resultado: h.resultado, regime, distancia: distanciaRegime(regimeAlvo, regime) };
    });
  candidatos.sort((a, b) => a.distancia - b.distancia);
  return { regimeAlvo, semelhantes: candidatos.slice(0, limite) };
}

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: REGIME FORECAST — pergunta testável (não previsão): "depois de um
// concurso com um certo regime, o regime do concurso SEGUINTE tende a ficar
// mais parecido com ele do que seria esperado por acaso, ou os regimes são
// independentes de concurso pra concurso?" Isso mede autocorrelação
// temporal de regime — um teste estatístico real, sem prometer que o
// passado determina o futuro. Se a distância real (concurso N para N+1) for
// bem menor que a distância entre pares aleatórios de concursos, há
// alguma persistência de regime; se forem parecidas, os regimes mudam de
// forma independente a cada sorteio (o que é o esperado, já que cada
// sorteio da Lotofácil é um evento independente).
// ═══════════════════════════════════════════════════════════════════════════
function avaliarRecorrenciaDeRegime(historico) {
  const dataset = (historico || [])
    .filter(h => resultadoValido(h.resultado))
    .sort(compararHistoricoCronologico);
  if (dataset.length < 30) return null;

  const regimes = dataset.map(h => classificarRegime(h.resultado));

  // Distância real: cada concurso comparado com o IMEDIATAMENTE seguinte —
  // é a sequência real que de fato aconteceu.
  const distanciasSequenciais = [];
  for (let i = 0; i < regimes.length - 1; i++) {
    distanciasSequenciais.push(distanciaRegime(regimes[i], regimes[i + 1]));
  }

  // Distância de referência (baseline): pares ALEATÓRIOS de concursos do
  // mesmo dataset, mesma quantidade de comparações — se não houver
  // persistência real de regime, a distância sequencial deve ficar
  // parecida com essa referência, não menor.
  let seed = 42;
  const rand = () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const distanciasAleatorias = [];
  for (let i = 0; i < distanciasSequenciais.length; i++) {
    const a = Math.floor(rand() * regimes.length);
    let b = Math.floor(rand() * regimes.length);
    while (b === a) b = Math.floor(rand() * regimes.length);
    distanciasAleatorias.push(distanciaRegime(regimes[a], regimes[b]));
  }

  const mediaSequencial = media(distanciasSequenciais);
  const mediaAleatoria = media(distanciasAleatorias);
  // Diferença relativa: negativo = sequencial é MAIS parecido que o acaso
  // (possível persistência); perto de 0 = comportamento igual ao acaso
  // (esperado, já que sorteios são independentes); positivo = sequencial
  // é MENOS parecido que o acaso (nenhuma razão teórica pra isso, seria
  // estranho se aparecesse).
  const diferencaRelativa = mediaAleatoria > 0 ? (mediaSequencial - mediaAleatoria) / mediaAleatoria : 0;
  const persistenciaDetectada = diferencaRelativa < -0.1; // 10% mais parecido que o acaso

  return {
    n: distanciasSequenciais.length,
    mediaSequencial, mediaAleatoria, diferencaRelativa, persistenciaDetectada,
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: ANTI-FALSE-DISCOVERY — quando milhares de condições são testadas
// (o sistema testa cada condição astrológica contra os 25 números), uma
// fração delas vai parecer "forte" só por acaso, mesmo sem nenhum padrão
// real por trás — quanto mais testes, maior a chance de algum "vencer" só
// por sorte de amostra. Correção de Bonferroni: divide o limiar de
// significância (0.05, o padrão de 95% de confiança) pelo número de testes
// — um jeito conservador e simples de responder "quantos dos achados
// 'fortes' sobreviveriam a um padrão bem mais rigoroso?". Não filtra nada
// do sistema (mantém "sem trava, mostra tudo" já decidido antes) — só
// informa, pra quem for interpretar os números saber a escala real do
// problema de múltiplas comparações.
// ═══════════════════════════════════════════════════════════════════════════
// Quantil inverso da Normal padrão (aproximação racional de Acklam).
// Usado apenas em diagnóstico; evita o antigo atalho 1,96*sqrt(2 ln m),
// que não é a transformação de Bonferroni e superestimava muito o corte.
function normalQuantile(p) {
  if (!(p > 0 && p < 1)) return p === 0 ? -Infinity : p === 1 ? Infinity : NaN;
  const a = [-39.6968302866538, 220.946098424521, -275.928510446969, 138.357751867269, -30.6647980661472, 2.50662827745924];
  const b = [-54.4760987982241, 161.585836858041, -155.698979859887, 66.8013118877197, -13.2806815528857];
  const c = [-0.00778489400243029, -0.322396458041136, -2.40075827716184, -2.54973253934373, 4.37466414146497, 2.93816398269878];
  const d = [0.00778469570904146, 0.32246712907004, 2.445134137143, 3.75440866190742];
  const plow = 0.02425, phigh = 1 - plow;
  let q, r;
  if (p < plow) {
    q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
  }
  if (p > phigh) {
    q = Math.sqrt(-2 * Math.log(1-p));
    return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
  }
  q = p - 0.5; r = q*q;
  return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q / (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
}

function avaliarMultiplasComparacoes(historico) {
  const resultado = analisarCorrelacaoDireta(historico);
  const achados = resultado.achados;
  // Número de hipóteses reais: CONDIÇÕES distintas testadas (id:dimensao:
  // valorCondicao), não achados individuais — cada condição já testa os 25
  // números de uma vez, então o "teste" relevante pra correção é por
  // condição, não por (condição, número).
  const condicoesDistintas = new Set(achados.map(a => `${a.id}:${a.dimensao}:${a.valorCondicao}`)).size;
  if (condicoesDistintas === 0) return null;

  const limiarPadrao = 1.96; // bilateral, alpha=0,05
  // Cada condição produz 25 testes (um por dezena). O próprio produtor
  // expõe esse total em `testesRealizados`; usa o valor real sempre que
  // disponível e cai em achados.length apenas como compatibilidade.
  const numeroDeHipoteses = resultado.testesRealizados || achados.length;
  const alpha = 0.05;
  const limiarBonferroni = normalQuantile(1 - alpha / (2 * Math.max(numeroDeHipoteses, 1)));

  // Pra cada achado, calcula um z-score aproximado contra o baseline de
  // 60% (mesma lógica de compararComBaseline, mas por achado individual).
  const comZScore = achados.map(a => {
    const dp = Math.sqrt(0.6 * 0.4 / Math.max(a.dias, 1));
    const z = dp > 0 ? Math.abs((a.taxa - 0.6) / dp) : 0;
    return { ...a, z };
  });

  const sobrevivemPadrao = comZScore.filter(a => a.z >= limiarPadrao).length;
  const sobrevivemBonferroni = comZScore.filter(a => a.z >= limiarBonferroni).length;

  return {
    totalAchados: achados.length,
    condicoesDistintas,
    limiarPadrao, limiarBonferroni,
    sobrevivemPadrao, sobrevivemBonferroni,
    proporcaoSobrevivente: sobrevivemPadrao > 0 ? sobrevivemBonferroni / sobrevivemPadrao : 0,
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: MONTE CARLO — em vez de uma fórmula fechada (z-score), simula
// milhares de "sistemas aleatórios" (jogos de 15 números sorteados sem
// nenhum critério, mesma quantidade de tentativas que o sistema real) contra
// o MESMO histórico real, e pergunta: a média que o sistema de verdade
// atinge é rara dentro dessa distribuição simulada, ou está dentro do que
// aconteceria de qualquer forma por puro acaso? Não prova causalidade — só
// dá um controle extra e intuitivo contra a ilusão de "meu sistema é bom"
// quando na real ele só empatou com sorte.
// ═══════════════════════════════════════════════════════════════════════════
function rodarMonteCarlo(historico, nSimulacoes = 2000, idsAvaliados = null) {
  // ACHADO DE AUDITORIA VERIFICADO (não é bug, limitação já comunicada
  // corretamente): cada simulação gera um jogo ALEATÓRIO PURO — não
  // reproduz o mecanismo de seleção do Motor A/B (que analisa o mapa
  // astrológico do dia). Isso significa que este teste responde "o
  // sistema é melhor que sortear 15 números ao léu?", não "o mecanismo
  // específico do Motor A/B teria esse desempenho por coincidência,
  // mesmo sem relação real com astrologia?" — uma pergunta mais forte e
  // mais difícil de rejeitar. Verificado que a UI já é honesta sobre
  // isso: o texto exibido diz "conjuntos de 15 números TOTALMENTE
  // ALEATÓRIOS" e "não prova nada sobre causa" — não afirma provar mais
  // do que de fato testa.
  // Compara o acaso contra a MESMA população em que A/B podem ser
  // avaliados: concurso com mapa interpretável + resultado completo. Usar
  // todos os 321 resultados enquanto A/B só têm mapa em 195 reduziria
  // artificialmente a variância do baseline aleatório.
  const idsSet = Array.isArray(idsAvaliados) && idsAvaliados.length ? new Set(idsAvaliados) : null;
  const dataset = (historico || []).filter(h => mapaInterpretavel(h) && resultadoValido(h.resultado) && (!idsSet || idsSet.has(h.id)));
  if (dataset.length === 0) return null;

  let seed = 12345;
  const rand = () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const jogoAleatorio = () => {
    const numeros = Array.from({ length: 25 }, (_, i) => i + 1);
    for (let i = numeros.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }
    return new Set(numeros.slice(0, 15));
  };

  const mediasSimuladas = [];
  for (let s = 0; s < nSimulacoes; s++) {
    let soma = 0;
    dataset.forEach(h => {
      const jogo = jogoAleatorio();
      const resultado = h.resultado;
      let acertos = 0;
      for (let i = 0; i < resultado.length; i++) if (jogo.has(resultado[i])) acertos++;
      soma += acertos;
    });
    mediasSimuladas.push(soma / dataset.length);
  }
  mediasSimuladas.sort((a, b) => a - b);

  // Percentil: onde uma média real (ex: 9.04) cairia dentro dessa
  // distribuição simulada — devolve uma função reutilizável pra não
  // precisar rodar a simulação de novo pra cada motor comparado.
  // BUG CORRIGIDO (achado de auditoria externa, confirmado): contava só
  // valores ESTRITAMENTE menores que a média real — a convenção
  // estatística padrão de percentil conta valores menores OU IGUAIS.
  // Empates exatos são raros com médias contínuas (testado: efeito
  // pequeno), mas usar o ponto médio entre as duas contagens (menor
  // estrito e menor-ou-igual) é a definição mais precisa e evita
  // qualquer viés sistemático nos casos de empate.
  const percentilDe = (mediaReal) => {
    let menorEstrito = 0, menorOuIgual = 0;
    mediasSimuladas.forEach(v => {
      if (v < mediaReal) menorEstrito++;
      if (v <= mediaReal) menorOuIgual++;
    });
    const posicaoMedia = (menorEstrito + menorOuIgual) / 2;
    return (posicaoMedia / mediasSimuladas.length) * 100;
  };

  return {
    nSimulacoes,
    nConcursos: dataset.length,
    mediaSimulacoes: media(mediasSimuladas),
    minimoSimulado: mediasSimuladas[0],
    maximoSimulado: mediasSimuladas[mediasSimuladas.length - 1],
    p95: mediasSimuladas[Math.floor(mediasSimuladas.length * 0.95)],
    p99: mediasSimuladas[Math.floor(mediasSimuladas.length * 0.99)],
    percentilDe,
  };
}


// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: LEARNING ENGINE — classifica cada condição astrológica testada por
// analisarCorrelacaoDireta num status de "vida útil", olhando a trajetória
// em 3 janelas (toda a história, metade mais recente, últimos 20% mais
// recentes) — mais fino que só "antigo vs recente" (encontrarSinaisDegradando,
// que já existe, compara só 2 metades). Puramente informativo: NÃO altera o
// peso de nenhum sinal nos motores A/B — top15PorPontuacao/top15Formula70
// continuam somando/comparando exatamente como já foram validados. Isso é
// uma decisão deliberada: mudar o peso de sinais dentro do motor é uma
// alteração de comportamento real, que precisa ser medida e aprovada à
// parte — não algo pra misturar dentro de uma camada de diagnóstico.
// ═══════════════════════════════════════════════════════════════════════════
function classificarStatusSinal(taxaTotal, taxaMetadeRecente, taxaUltimos20pct, diasTotal) {
  // Amostra mínima em cada janela pra evitar classificar por ruído — mesmo
  // piso já usado em encontrarSinaisDegradando (10 dias).
  // ACHADO DE AUDITORIA VERIFICADO (não é bug, é inerente ao tipo de
  // análise): medido que 89% dos achados do sistema (28075 de 31425) têm
  // menos de 20 dias e caem em "amostra_insuficiente" aqui — mas essa
  // função avalia TENDÊNCIA ao longo do tempo (total vs metade recente vs
  // últimos 20%), o que exige presença consistente nas 3 janelas por
  // definição — não dá pra medir "está degradando" de um sinal que só
  // apareceu poucas vezes no total. Sinais raros/estruturais continuam
  // aparecendo normalmente no ranking dos motores A/B e na aba Sinais —
  // esta classificação específica de vida útil é só informativa (não
  // filtra nenhum jogo) e naturalmente cobre só sinais com boa frequência.
  if (diasTotal < 20) return "amostra_insuficiente";
  const quedaMetade = taxaTotal - taxaMetadeRecente;
  const quedaRecente = taxaTotal - taxaUltimos20pct;
  if (quedaRecente > 0.20 || (quedaMetade > 0.15 && quedaRecente > 0.10)) return "quarentena"; // caindo forte e de forma consistente
  if (quedaMetade > 0.10 || quedaRecente > 0.10) return "degradando"; // caindo, mas não drástico ainda
  // ACHADO DE AUDITORIA CORRIGIDO: "fortalecendo" exigia só 1 evidência
  // (últimos 20% vs total), enquanto degradando/quarentena acima exigem 2
  // evidências convergentes (metade recente E últimos 20%) — assimetria
  // real de rigor. Um sinal que caiu na metade recente mas teve 1 pico
  // isolado no fim (situação instável) era classificado igual a um sinal
  // estável que só teve um pico real no fim (mais confiável). Corrigido
  // pra exigir a mesma convergência: só "fortalecendo" se os últimos 20%
  // melhoraram E a metade recente não caiu (não regrediu antes de subir).
  const subidaRecente = taxaUltimos20pct - taxaTotal;
  if (subidaRecente > 0.10 && quedaMetade <= 0.05) return "fortalecendo";
  return "ativa"; // estável, sem sinal de mudança de comportamento
}

function avaliarVidaUtilSinais(historico) {
  const dataset = (historico || [])
    .filter(h => mapaInterpretavel(h) && resultadoValido(h.resultado))
    .sort(compararHistoricoCronologico);
  if (dataset.length < 30) return [];

  const meio = Math.floor(dataset.length / 2);
  const corte20pct = Math.floor(dataset.length * 0.8);
  const metadeRecente = dataset.slice(meio);
  const ultimos20pct = dataset.slice(corte20pct);

  const achadosTotal = analisarCorrelacaoDireta(dataset).achados;
  const achadosMetadeRecente = analisarCorrelacaoDireta(metadeRecente).achados;
  const achadosUltimos20pct = analisarCorrelacaoDireta(ultimos20pct).achados;

  const chaveDe = (a) => `${a.id}:${a.dimensao}:${a.valorCondicao}:${a.numero}`;
  const porChaveMetade = {};
  achadosMetadeRecente.forEach(a => { porChaveMetade[chaveDe(a)] = a; });
  const porChave20pct = {};
  achadosUltimos20pct.forEach(a => { porChave20pct[chaveDe(a)] = a; });

  const resultado = [];
  achadosTotal.forEach(a => {
    if (a.dias < 20) return; // mesma amostra mínima usada em classificarStatusSinal
    const chave = chaveDe(a);
    const aMetade = porChaveMetade[chave];
    const a20pct = porChave20pct[chave];
    if (!aMetade || !a20pct || aMetade.dias < 10 || a20pct.dias < 5) return;
    const status = classificarStatusSinal(a.taxa, aMetade.taxa, a20pct.taxa, a.dias);
    resultado.push({
      tipo: chave, label: labelDoAchado(a), status,
      taxaTotal: a.taxa, taxaMetadeRecente: aMetade.taxa, taxaUltimos20pct: a20pct.taxa,
      diasTotal: a.dias,
    });
  });
  return resultado;
}

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: META-CÉREBRO — o sistema audita a si mesmo. 3 perguntas que dá pra
// responder com dado real (sem inventar métrica vaga que os dados não
// sustentam):
//   1) Existem sinais REDUNDANTES? (dois tipos de condição diferentes
//      sempre apontando pros mesmos números, com taxas parecidas — um não
//      traz informação nova além do outro)
//   2) O sistema é consistente, ou só teve sorte de período? (compara o
//      desvio padrão do sistema contra o do melhor baseline — mais baixo
//      = mais previsível concurso a concurso)
//   3) Há sinal de OVERFITTING? (desempenho na primeira metade do
//      histórico muito maior que na segunda sugere que o motor "decorou"
//      padrões da metade antiga que não se sustentam depois — não é uma
//      prova definitiva, é um teste aproximado com o dado que temos)
// ═══════════════════════════════════════════════════════════════════════════

// Pergunta 1: redundância entre tipos de sinal. Dois "tipos" (ex:
// "sol:casa:5" e "mercurio:casa:5") são redundantes quando, olhando só os
// números pra que CADA UM aponta com taxa forte (>=70%), a sobreposição
// entre os dois conjuntos é alta — os dois estão "votando" nos mesmos
// números, então um não soma informação real além do outro.
function encontrarSinaisRedundantes(historico, limite = 8) {
  const achados = analisarCorrelacaoDireta(historico).achados;
  const porTipo = {};
  achados.forEach(a => {
    const chaveTipo = `${a.id}:${a.dimensao}:${a.valorCondicao}`;
    if (a.taxa < 0.7 || a.dias < 15) return; // só sinais fortes o bastante pra "votar" de verdade
    if (!porTipo[chaveTipo]) porTipo[chaveTipo] = { chaveTipo, numeros: new Set(), dias: a.dias };
    porTipo[chaveTipo].numeros.add(a.numero);
  });
  // ACHADO DE AUDITORIA CORRIGIDO: a maioria dos tipos tem conjuntos
  // pequenos (medido: 8 tipos com só 1 número forte, 26 com 2, 36 com 3 —
  // a moda do sistema real). Exigir só "3 números em comum" pra marcar
  // como "redundante" é fraco demais nesse regime — com conjuntos de
  // tamanho 3, sobreposição total (100%) acontece com frequência só por
  // coincidência de amostra pequena, não porque os dois sinais realmente
  // carregam a mesma informação. Corrigido para exigir pelo menos 5
  // números em comum — um patamar onde a coincidência ao acaso já é bem
  // menos provável (confirmado: com esse filtro, ainda restam achados
  // reais e plausíveis, como grupos de condições astrologicamente
  // relacionadas — Vênus na 5ª Casa e Sol+Vênus em conjunção — votando
  // nos mesmos 5 números).
  const tipos = Object.values(porTipo).filter(t => t.numeros.size >= 5 && t.numeros.size <= 15);
  const pares = [];
  for (let i = 0; i < tipos.length; i++) {
    for (let j = i + 1; j < tipos.length; j++) {
      const a = tipos[i], b = tipos[j];
      const intersecao = [...a.numeros].filter(n => b.numeros.has(n)).length;
      const uniao = new Set([...a.numeros, ...b.numeros]).size;
      const jaccard = uniao > 0 ? intersecao / uniao : 0; // 0 = nenhuma sobreposição, 1 = conjuntos idênticos
      if (jaccard >= 0.6 && intersecao >= 5) {
        pares.push({ tipoA: a.chaveTipo, tipoB: b.chaveTipo, sobreposicao: jaccard, numerosComuns: intersecao });
      }
    }
  }
  pares.sort((a, b) => b.sobreposicao - a.sobreposicao);
  return pares.slice(0, limite);
}

// Pergunta 3: overfitting aproximado. Roda o motor com leave-one-out em
// cada metade do histórico separadamente e compara a média — se a
// primeira metade tem desempenho bem melhor que a segunda, isso é um
// sinal de que o motor pode estar ajustado demais aos dados antigos, não
// captando um padrão que se sustenta pra frente.
function avaliarOverfitting(historico) {
  const dataset = (historico || [])
    .filter(h => mapaInterpretavel(h) && resultadoValido(h.resultado))
    .sort(compararHistoricoCronologico);
  if (dataset.length < 40) return null;

  const meio = Math.floor(dataset.length / 2);
  const primeiraMetade = dataset.slice(0, meio);
  const segundaMetade = dataset.slice(meio);

  // BUG CORRIGIDO (auditoria externa, confirmado): as stats/leave-one-out
  // eram calculadas sobre o HISTÓRICO COMPLETO antes de separar em
  // metades — então, ao testar um item da primeira metade, o treino podia
  // incluir dados da segunda metade (só o próprio item era excluído, não
  // a metade inteira). Isso contaminava exatamente a pergunta que a
  // função tenta responder ("a primeira metade tem desempenho diferente
  // da segunda, calculadas de forma isolada?") — as duas metades
  // compartilhavam o mesmo pool de treino contaminado. Corrigido: calcula
  // as stats e o leave-one-out separadamente PARA CADA METADE, usando só
  // os dados daquela metade — agora as duas são de fato independentes
  // entre si.
  // BUG CORRIGIDO (achado ao revisar a mesma cobertura já corrigida em
  // rodarWalkForward): só testava o Motor A (top15PorPontuacao), nunca o
  // B — mesmo com o alerta de overfitting sendo relevante pros dois
  // motores igualmente (e o usuário reportando especificamente uma
  // preocupação com o Motor B). Corrigido: mede os dois na mesma passada,
  // sem custo extra de recalcular scores duas vezes.
  const mediaDaMetade = (metade) => {
    const statsCorr = analisarCorrelacaoDireta(metade).achados;
    const { statsParaItem } = criarStatsLeaveOneOut(metade, statsCorr);
    let somaA = 0, somaB = 0;
    metade.forEach(item => {
      const resultado = new Set(item.resultado);
      const { planetas, cuspides } = obterMapaInterpretado(item);
      const corrItem = statsParaItem(item);
      const scores = analisarMapa(planetas, cuspides, corrItem);
      const jogoA = top15PorPontuacao(scores);
      const jogoB = top15Formula70(scores);
      somaA += jogoA.filter(n => resultado.has(n)).length;
      somaB += jogoB.filter(n => resultado.has(n)).length;
    });
    return { mediaA: somaA / metade.length, mediaB: somaB / metade.length };
  };

  const primeira = mediaDaMetade(primeiraMetade);
  const segunda = mediaDaMetade(segundaMetade);
  const mediaPrimeira = primeira.mediaA;
  const mediaSegunda = segunda.mediaA;
  const diferenca = mediaPrimeira - mediaSegunda;
  const diferencaB = primeira.mediaB - segunda.mediaB;
  // BUG CORRIGIDO (achado de auditoria externa, confirmado com cálculo
  // real): usava um limiar FIXO (0.5), sem considerar o tamanho real de
  // cada metade nem um erro padrão calculado — o comentário afirmava "a
  // variação natural fica bem menor que isso" sem verificar matematicamente.
  // Calculado: com BASELINE_DP_INDIVIDUAL (desvio padrão hipergeométrico
  // individual) e o tamanho real de cada metade, o erro padrão da
  // DIFERENÇA entre as duas médias é √2 × (BASELINE_DP_INDIVIDUAL/√n) — o
  // limiar de 95% de confiança sobre essa diferença é 1.96× esse erro
  // padrão. Medido com o histórico atual (97 por metade): limiar
  // estatístico real = 0.345, o limiar fixo (0.5) era mais RIGOROSO que o
  // correto (deixava passar casos que já seriam estatisticamente
  // significativos). Corrigido pra calcular dinamicamente, adaptando ao
  // tamanho real de cada metade — mais rigoroso com histórico pequeno,
  // mais permissivo à diferenças pequenas conforme o histórico cresce.
  // Recalcula o desvio padrão hipergeométrico individual localmente (igual
  // a BASELINE_DP_INDIVIDUAL, declarada bem mais abaixo no arquivo — essa
  // função roda antes, então não pode depender dela diretamente).
  const dpIndividualBaseline = Math.sqrt(15 * (15 / 25) * (1 - 15 / 25) * ((25 - 15) / (25 - 1)));
  const erroPadraoMedia = dpIndividualBaseline / Math.sqrt(Math.min(primeiraMetade.length, segundaMetade.length));
  const erroPadraoDiferenca = Math.SQRT2 * erroPadraoMedia;
  const limiarSignificancia = 1.96 * erroPadraoDiferenca;
  const suspeito = diferenca > limiarSignificancia;
  const suspeitoB = diferencaB > limiarSignificancia;
  return {
    mediaPrimeira, mediaSegunda, diferenca, suspeito,
    mediaPrimeiraB: primeira.mediaB, mediaSegundaB: segunda.mediaB, diferencaB, suspeitoB,
    nPrimeira: primeiraMetade.length, nSegunda: segundaMetade.length,
    limiarSignificancia,
  };
}

// Roda as 3 análises do Meta-Cérebro juntas — cada uma independente,
// nenhuma reaproveita cálculo pesado das outras (redundância e overfitting
// usam janelas de dados diferentes, não dá pra compartilhar).
function rodarMetaCerebro(historico) {
  return {
    redundantes: encontrarSinaisRedundantes(historico),
    overfitting: avaliarOverfitting(historico),
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: WALK-FORWARD VALIDATION ENGINE — o leave-one-out já usado no resto
// do sistema (treina com o histórico inteiro exceto o próprio item testado)
// é honesto contra vazamento de dado, mas testa cada concurso isoladamente,
// sempre podendo usar dados FUTUROS ao item testado como treino. Walk-forward
// é um teste mais rigoroso: em vez de "treina com tudo exceto 1 item", treina
// só com o que aconteceu ANTES de um bloco, testa nesse bloco nunca visto, e
// repete avançando no tempo — pergunta "o sistema funciona quando é obrigado
// a prever à frente, repetidamente, sem nunca ver o futuro"? Mais caro
// computacionalmente (cada janela recalcula do zero), por isso roda sob
// demanda, não automático.
//
// ACHADO INVESTIGADO (usuário reportou System Health mostrando Motor B em
// 8.97 no walk-forward vs 9.32 no leave-one-out): confirmado real, não é
// bug de cálculo. Investigado se a correção do sinal negativo (Motor A/B
// usarem desvio em relação ao baseline de 60%, não taxa bruta) causou essa
// diferença — testado comparando a versão ANTES e DEPOIS da correção nas
// mesmas janelas: resultado misto (às vezes o motor antigo era pior, às
// vezes melhor, dependendo da janela) — não há padrão de "a correção
// piorou sistematicamente". A diferença real vem de o walk-forward usar
// janelas de treino bem menores (30 a 174 concursos) que o leave-one-out
// (sempre ~320), tornando a estimativa de sinal mais instável nas janelas
// iniciais — característica esperada de um histórico ainda relativamente
// curto (321 concursos), não um erro de implementação.
// ═══════════════════════════════════════════════════════════════════════════
function rodarWalkForward(historico, nJanelas = 5) {
  const dataset = (historico || [])
    .filter(h => mapaInterpretavel(h) && resultadoValido(h.resultado))
    .sort(compararHistoricoCronologico);
  const datasetResultados = (historico || [])
    .filter(h => resultadoValido(h.resultado))
    .sort(compararHistoricoCronologico);
  // Precisa de treino inicial razoável (pelo menos 30) + espaço pra pelo
  // menos algumas janelas de teste depois.
  const minTreinoInicial = 30;
  if (dataset.length < minTreinoInicial + nJanelas * 5) return null;

  const tamanhoBlocoTeste = Math.floor((dataset.length - minTreinoInicial) / nJanelas);
  if (tamanhoBlocoTeste < 3) return null;

  const janelas = [];
  for (let j = 0; j < nJanelas; j++) {
    const fimTreino = minTreinoInicial + j * tamanhoBlocoTeste;
    const inicioTeste = fimTreino;
    const fimTeste = j === nJanelas - 1 ? dataset.length : fimTreino + tamanhoBlocoTeste;
    if (inicioTeste >= dataset.length) break;

    const treino = dataset.slice(0, fimTreino);
    const teste = dataset.slice(inicioTeste, fimTeste);
    if (teste.length === 0) continue;

    // Treina só com o passado (treino) — SEM leave-one-out aqui, porque
    // nenhum item de teste está dentro do treino: não há o que vazar.
    const statsCorr = analisarCorrelacaoDireta(treino).achados;

    // ACHADO DE AUDITORIA EXTERNA CORRIGIDO: só media a Sugestão A
    // (top15PorPontuacao) — a Sugestão B (top15Formula70) nunca passava
    // pelo teste mais rigoroso do sistema, só pelo leave-one-out (que tem
    // a limitação teórica documentada em compararComBaselines). Corrigido
    // para medir os dois motores na mesma passada (mesmo scores já
    // calculado, sem custo extra de recalcular o mapa de novo).
    let somaA = 0, somaB = 0, somaAleatorio = 0, somaFrequencia = 0, somaRecencia = 0;
    // Todos os métodos da janela enxergam apenas informação anterior ao
    // primeiro item de teste. Assim System Health compara A/B e baselines
    // triviais na MESMA amostra e no MESMO corte temporal.
    const resultadosTreinoJanela = datasetResultados.filter(h => compararHistoricoCronologico(h, teste[0]) < 0);
    const jogoFreqJanela = resultadosTreinoJanela.length >= 10 ? baselineFrequencia(resultadosTreinoJanela) : null;
    const jogoRecJanela = resultadosTreinoJanela.length >= 10 ? baselineRecencia(resultadosTreinoJanela) : null;
    teste.forEach((item, idxTeste) => {
      const resultado = new Set(item.resultado);
      const { planetas, cuspides } = obterMapaInterpretado(item);
      const scores = analisarMapa(planetas, cuspides, statsCorr);
      const jogoA = top15PorPontuacao(scores);
      const jogoB = top15Formula70(scores);
      const jogoRand = baselineAleatorio(parseInt(item.concurso, 10) || (inicioTeste + idxTeste + 1));
      somaA += jogoA.filter(n => resultado.has(n)).length;
      somaB += jogoB.filter(n => resultado.has(n)).length;
      somaAleatorio += jogoRand.filter(n => resultado.has(n)).length;
      if (jogoFreqJanela) somaFrequencia += jogoFreqJanela.filter(n => resultado.has(n)).length;
      if (jogoRecJanela) somaRecencia += jogoRecJanela.filter(n => resultado.has(n)).length;
    });

    janelas.push({
      janela: j + 1,
      nTreino: treino.length,
      nTeste: teste.length,
      media: somaA / teste.length,
      mediaB: somaB / teste.length,
      mediaAleatorio: somaAleatorio / teste.length,
      mediaFrequencia: jogoFreqJanela ? somaFrequencia / teste.length : null,
      mediaRecencia: jogoRecJanela ? somaRecencia / teste.length : null,
      idsTeste: teste.map(item => item.id),
      dataInicioTeste: teste[0].data,
      dataFimTeste: teste[teste.length - 1].data,
    });
  }

  if (janelas.length === 0) return null;
  // BUG CORRIGIDO (achado de auditoria externa, confirmado): calculava
  // média das médias das janelas, sem ponderar pelo tamanho de cada uma —
  // uma janela de 20 concursos tinha o mesmo peso que uma de 100. Medido
  // no histórico atual: diferença de 0.0005 (praticamente nula, já que as
  // janelas hoje têm tamanho quase idêntico), mas matematicamente incorreto
  // e um risco real com histórico maior ou janelas desiguais. Corrigido
  // para média ponderada pelo nTeste de cada janela.
  const totalTestes = janelas.reduce((s, j) => s + j.nTeste, 0) || 1;
  const mediaGeral = janelas.reduce((s, j) => s + j.media * j.nTeste, 0) / totalTestes;
  const mediaGeralB = janelas.reduce((s, j) => s + j.mediaB * j.nTeste, 0) / totalTestes;
  const mediaAleatorio = janelas.reduce((s, j) => s + j.mediaAleatorio * j.nTeste, 0) / totalTestes;
  const jFreq = janelas.filter(j => j.mediaFrequencia != null);
  const nFreq = jFreq.reduce((s, j) => s + j.nTeste, 0) || 1;
  const mediaFrequencia = jFreq.length ? jFreq.reduce((s, j) => s + j.mediaFrequencia * j.nTeste, 0) / nFreq : null;
  const mediaRecencia = jFreq.length ? jFreq.reduce((s, j) => s + j.mediaRecencia * j.nTeste, 0) / nFreq : null;
  const desvioEntreJanelas = desvioPadraoAmostral(janelas.map(j => j.media));
  const desvioEntreJanelasB = desvioPadraoAmostral(janelas.map(j => j.mediaB));
  const idsTeste = janelas.flatMap(j => j.idsTeste || []);
  return { janelas, mediaGeral, desvioEntreJanelas, mediaGeralB, desvioEntreJanelasB, mediaAleatorio, mediaFrequencia, mediaRecencia, idsTeste, nTestes: totalTestes };
}

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: DECISION EXPLAINER — responde "por que o 17 entrou?" e "por que o
// 8 ficou fora?" com dado concreto e verificável (a própria força que
// decidiu, comparada com a linha de corte real — o 15º colocado), em vez
// de uma narrativa vaga. Reaproveita montarEvidenciaPorNumero (não
// recalcula nada) e funciona pros dois motores (A e B).
// ═══════════════════════════════════════════════════════════════════════════
function explicarDecisao(scores, numero, motor = "A") {
  const evidencias = montarEvidenciaPorNumero(scores);
  const chaveForcaMotor = motor === "B" ? "forcaMotorB" : "forcaMotorA";
  // BUG CORRIGIDO (achado de auditoria externa): ordenava só por força,
  // sem os critérios de desempate que os motores reais usam
  // (top15PorPontuacao: força → somaVezes → somaTaxa → número menor;
  // top15Formula70: força → trials → taxa → número menor). Sem impacto
  // hoje (confirmado: 0 de 195 concursos reais têm empate exato de força
  // na linha de corte), mas em caso de empate a posição/comparação
  // mostrada ao usuário podia divergir da posição real usada pelo motor.
  // Corrigido: reconstrói os mesmos critérios de desempate a partir dos
  // dados já presentes em cada evidência (somaVezes/somaTaxa vêm de somar
  // os sinais individuais; para o Motor B, vêm de melhorSinal).
  const ordenados = [...evidencias].sort((a, b) => {
    if (b[chaveForcaMotor] !== a[chaveForcaMotor]) return b[chaveForcaMotor] - a[chaveForcaMotor];
    if (motor === "B") {
      const trialsA = a.melhorSinal?.vezes || 0, trialsB = b.melhorSinal?.vezes || 0;
      if (trialsB !== trialsA) return trialsB - trialsA;
      const taxaA = a.melhorSinal?.taxa || 0, taxaB = b.melhorSinal?.taxa || 0;
      if (taxaB !== taxaA) return taxaB - taxaA;
    } else {
      const somaVezesA = a.sinais.reduce((s, x) => s + x.vezes, 0), somaVezesB = b.sinais.reduce((s, x) => s + x.vezes, 0);
      if (somaVezesB !== somaVezesA) return somaVezesB - somaVezesA;
      const somaTaxaA = a.sinais.reduce((s, x) => s + x.taxa, 0), somaTaxaB = b.sinais.reduce((s, x) => s + x.taxa, 0);
      if (somaTaxaB !== somaTaxaA) return somaTaxaB - somaTaxaA;
    }
    return a.numero - b.numero;
  });
  const posicao = ordenados.findIndex(e => e.numero === numero) + 1; // 1-based
  const doNumero = ordenados.find(e => e.numero === numero);
  const decimoQuintoColocado = ordenados[14]; // linha de corte real (índice 14 = 15º)
  const entrou = posicao <= 15;

  if (!doNumero) return null;

  const motivos = [];
  if (doNumero.totalSinais === 0) {
    motivos.push("nenhum sinal do sistema aponta para este número hoje");
  } else {
    motivos.push(`${doNumero.totalSinais} ${doNumero.totalSinais !== 1 ? "sinais" : "sinal"} aponta${doNumero.totalSinais !== 1 ? "m" : ""} para ele`);
    if (doNumero.melhorSinal) {
      motivos.push(`o mais forte: ${doNumero.melhorSinal.label} (${(doNumero.melhorSinal.taxa * 100).toFixed(0)}% em ${doNumero.melhorSinal.vezes} vez${doNumero.melhorSinal.vezes !== 1 ? "es" : ""})`);
    }
    if (doNumero.nivelConflito === "alto") {
      motivos.push("mas os sinais discordam fortemente entre si (conflito alto)");
    } else if (doNumero.nivelConflito === "baixo" && doNumero.totalSinais > 3) {
      motivos.push("e os sinais concordam entre si (conflito baixo)");
    }
  }

  let comparacao = null;
  if (decimoQuintoColocado && doNumero.numero !== decimoQuintoColocado.numero) {
    const forcaAlvo = doNumero[chaveForcaMotor];
    const forcaCorte = decimoQuintoColocado[chaveForcaMotor];
    comparacao = entrou
      ? `força ${forcaAlvo.toFixed(1)} supera o 15º colocado (nº${decimoQuintoColocado.numero}, força ${forcaCorte.toFixed(1)})`
      : `força ${forcaAlvo.toFixed(1)} fica abaixo do 15º colocado (nº${decimoQuintoColocado.numero}, força ${forcaCorte.toFixed(1)}) — faltam ${(forcaCorte - forcaAlvo).toFixed(1)} pontos de força pra entrar`;
  }

  return {
    numero, motor, posicao, entrou,
    forca: doNumero[chaveForcaMotor],
    motivos, comparacao,
    status: entrou ? "ENTROU" : "FORA",
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: BASELINE ENGINE — o sistema só ganha permissão de se considerar
// bom se superar consistentemente estratégias triviais que não usam mapa
// astrológico nenhum. Cada baseline usa só dados ANTERIORES ao concurso
// sendo avaliado (mesmo cuidado de leave-one-out do resto do sistema) —
// sem isso, "frequência histórica" e "recência" estariam espiando o
// próprio resultado que tentam prever.
// ═══════════════════════════════════════════════════════════════════════════

// Baseline 1: ALEATÓRIO — 15 números sorteados sem nenhum critério.
// Serve como piso absoluto: qualquer estratégia real precisa superar isso
// de forma consistente (não só "ganhar 1 vez") pra valer alguma coisa.
function baselineAleatorio(seedNumero) {
  // PRNG determinístico simples (mulberry32) — mesmo concurso sempre gera
  // o mesmo "aleatório", pra comparações repetíveis entre rodadas de teste.
  let a = seedNumero >>> 0 || 1;
  const rand = () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const numeros = Array.from({ length: 25 }, (_, i) => i + 1);
  for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
  }
  return numeros.slice(0, 15);
}

// Baseline 2: FREQUÊNCIA — os 15 números que mais saíram no histórico
// ANTERIOR ao concurso avaliado (não inclui o próprio concurso nem
// nenhum posterior).
function baselineFrequencia(historicoAnterior) {
  const contagem = {};
  for (let n = 1; n <= 25; n++) contagem[n] = 0;
  historicoAnterior.forEach(h => {
    (h.resultado || []).forEach(n => { contagem[n]++; });
  });
  return Object.keys(contagem)
    .map(Number)
    .sort((a, b) => (contagem[b] - contagem[a]) || (a - b))
    .slice(0, 15);
}

// Baseline 3: RECÊNCIA (atraso) — os 15 números que estão há MAIS tempo
// sem sair, contando do concurso mais recente do histórico anterior pra
// trás. Estratégia popular entre apostadores ("está devendo").
function baselineRecencia(historicoAnterior) {
  const ultimaVez = {};
  for (let n = 1; n <= 25; n++) ultimaVez[n] = -1; // nunca saiu = mais atrasado possível
  historicoAnterior.forEach((h, idx) => {
    (h.resultado || []).forEach(n => { ultimaVez[n] = idx; });
  });
  return Object.keys(ultimaVez)
    .map(Number)
    .sort((a, b) => (ultimaVez[a] - ultimaVez[b]) || (a - b))
    .slice(0, 15);
}

// Roda os 3 baselines + o SISTEMA REAL DE HOJE (recalculado com
// leave-one-out — "honesto" no sentido de nunca ver o resultado do
// PRÓPRIO concurso testado, ver limitação sobre dados futuros logo
// abaixo — não o jogoGerado salvo no histórico, que pode ter sido
// calculado com uma versão anterior da fórmula, antes de qualquer
// reescrita dos motores) contra todo o histórico com resultado, e
// devolve a média de acertos de cada um — pronto pra comparar lado a
// lado.
function compararComBaselines(historico) {
  const dataset = (historico || [])
    .filter(h => mapaInterpretavel(h) && resultadoValido(h.resultado))
    .sort(compararHistoricoCronologico);
  if (dataset.length === 0) return null;

  // BUG CORRIGIDO (achado de auditoria externa, confirmado com dado real):
  // os baselines de frequência/recência (baselineFrequencia/baselineRecencia,
  // acima) NÃO usam textoMapa — são estratégias triviais baseadas só em
  // h.resultado. Mas "anteriores" vinha de `dataset`, que exige textoMapa —
  // descartando concursos reais com resultado válido mas sem mapa salvo.
  // Medido: 126 de 321 concursos (quase 40% do histórico de resultados)
  // eram perdidos por esses dois baselines triviais sem necessidade real.
  // Corrigido: datasetAmplo (todo concurso com resultado, com ou sem mapa)
  // alimenta frequência/recência; dataset (só com mapa) continua a base
  // para os motores A/B, que de fato precisam do mapa pra funcionar.
  const datasetAmplo = (historico || [])
    .filter(h => resultadoValido(h.resultado))
    .sort(compararHistoricoCronologico);

  // ACHADO DE AUDITORIA: usar item.jogoGerado/jogoGeradoAlt direto do
  // histórico salvo é arriscado — esses campos podem ter sido calculados
  // com uma versão anterior da fórmula do motor (confirmado: no histórico
  // real, o jogo salvo diverge do jogo recalculado com o motor atual).
  // Recalcula aqui, com o mesmo leave-one-out usado no resto do sistema,
  // pra garantir que o baseline compara contra o motor de VERDADE de hoje.
  //
  // LIMITAÇÃO METODOLÓGICA CONHECIDA (achado de auditoria externa,
  // confirmado): leave-one-out (criarStatsLeaveOneOut) exclui só o próprio
  // concurso testado, mas mantém no dataset de treino concursos com data
  // POSTERIOR a ele — diferente de frequência/recência (baselineFrequencia/
  // baselineRecencia, logo abaixo), que só usam dados ANTERIORES ao
  // concurso testado. Isso significa que, em teoria, o Motor A/B poderia
  // parecer melhor aqui do que realmente é numa previsão real (que nunca
  // teria acesso ao futuro). Medido contra o histórico real: a diferença
  // entre esta função (leave-one-out) e rodarWalkForward (só passado real)
  // é de 0,006 acerto — praticamente nula nesse sistema hoje, mas a
  // limitação conceitual existe e rodarWalkForward é a referência mais
  // rigorosa quando a diferença entre os dois métodos importar mais no
  // futuro (histórico maior, mudança de motor, etc.).
  const statsCorr = analisarCorrelacaoDireta(historico).achados;
  const { statsParaItem } = criarStatsLeaveOneOut(historico, statsCorr);

  const somas = { aleatorio: 0, frequencia: 0, recencia: 0, motorA: 0, motorB: 0 };
  const distribuicoes = { aleatorio: {}, frequencia: {}, recencia: {}, motorA: {}, motorB: {} };
  // Série cronológica de acertos, concurso a concurso — usada pelo
  // MotorBacktest (mediana, consistência, últimos N) sem precisar
  // reprocessar todo o histórico de novo.
  const serieAcertos = { aleatorio: [], frequencia: [], recencia: [], motorA: [], motorB: [] };
  const registrar = (chave, acertos) => {
    somas[chave] += acertos;
    distribuicoes[chave][acertos] = (distribuicoes[chave][acertos] || 0) + 1;
    serieAcertos[chave].push(acertos);
  };

  dataset.forEach((item, idx) => {
    const resultado = new Set(item.resultado);

    const jogoAleatorio = baselineAleatorio(parseInt(item.concurso) || idx + 1);
    registrar("aleatorio", jogoAleatorio.filter(n => resultado.has(n)).length);

    // Concursos de datasetAmplo com data estritamente anterior à do item
    // atual (ou, sem data reconhecível em algum dos dois lados, cai pra
    // idx como aproximação — mesmo comportamento defensivo já usado em
    // outros pontos do sistema quando a data não é confiável).
    const anterioresAmplo = datasetAmplo.filter(h => compararHistoricoCronologico(h, item) < 0);

    if (anterioresAmplo.length >= 10) { // amostra mínima pra frequência/recência fazerem sentido
      const jogoFreq = baselineFrequencia(anterioresAmplo);
      registrar("frequencia", jogoFreq.filter(n => resultado.has(n)).length);

      const jogoRec = baselineRecencia(anterioresAmplo);
      registrar("recencia", jogoRec.filter(n => resultado.has(n)).length);
    }

    const { planetas, cuspides } = obterMapaInterpretado(item);
    const corrItem = statsParaItem(item);
    const scores = analisarMapa(planetas, cuspides, corrItem);
    const jogoA = top15PorPontuacao(scores);
    const jogoB = top15Formula70(scores);
    registrar("motorA", jogoA.filter(n => resultado.has(n)).length);
    registrar("motorB", jogoB.filter(n => resultado.has(n)).length);
  });

  const n = dataset.length;
  const nComHistorico = somas.frequencia > 0 || Object.keys(distribuicoes.frequencia).length > 0
    ? serieAcertos.frequencia.length || 1
    : 1;
  return {
    n,
    resultados: [
      { chave: "aleatorio", label: "Aleatório", media: somas.aleatorio / n, n },
      { chave: "frequencia", label: "Mais frequentes", media: somas.frequencia / nComHistorico, n: nComHistorico },
      { chave: "recencia", label: "Mais atrasados", media: somas.recencia / nComHistorico, n: nComHistorico },
      { chave: "motorA", label: "Sistema — Sugestão A", media: somas.motorA / n, n },
      { chave: "motorB", label: "Sistema — Sugestão B", media: somas.motorB / n, n },
    ],
    distribuicoes,
    serieAcertos,
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: BACKTEST ENGINE — métricas completas de desempenho histórico, além
// da média simples: mediana (menos sensível a outliers que a média),
// pior/melhor resultado, consistência (desvio padrão — quanto mais baixo,
// mais previsível é o desempenho de concurso pra concurso) e a tendência
// recente (últimos 20/50/100 concursos, pra ver se o sistema está
// melhorando, piorando ou estável — não só "qual foi a média histórica
// total", que pode esconder uma degradação recente).
// ═══════════════════════════════════════════════════════════════════════════
function calcularMetricasBacktest(serie) {
  if (!serie || serie.length === 0) return null;
  const ordenada = [...serie].sort((a, b) => a - b);
  const meio = Math.floor(ordenada.length / 2);
  const mediana = ordenada.length % 2 === 0
    ? (ordenada[meio - 1] + ordenada[meio]) / 2
    : ordenada[meio];
  const m = media(serie);
  const dp = desvioPadraoAmostral(serie);
  const janela = (tamanho) => {
    const ultimos = serie.slice(-tamanho);
    return ultimos.length > 0 ? media(ultimos) : null;
  };
  return {
    n: serie.length,
    media: m,
    mediana,
    pior: ordenada[0],
    melhor: ordenada[ordenada.length - 1],
    desvioPadrao: dp,
    ultimos20: janela(20),
    ultimos50: janela(50),
    ultimos100: janela(100),
  };
}

// Roda o backtest completo pro sistema (A e B) — reaproveita a série de
// acertos já calculada por compararComBaselines, sem reprocessar o
// histórico de novo (a mesma função já roda o motor concurso a concurso
// com leave-one-out honesto, que é o trabalho caro).
function rodarBacktest(baselines) {
  if (!baselines) return null;
  return {
    n: baselines.n,
    motorA: calcularMetricasBacktest(baselines.serieAcertos.motorA),
    motorB: calcularMetricasBacktest(baselines.serieAcertos.motorB),
  };
}

function top15PorPontuacao(scores) {
  const batidas = scores.__regrasValidadasBatidas || [];
  const porNumero = {};
  for (let n = 1; n <= 25; n++) porNumero[n] = { somaTaxa: 0, somaVezes: 0, forca: 0 };
  batidas.forEach(b => {
    if (b.taxa == null) return;
    porNumero[b.numero].somaTaxa += b.taxa;
    porNumero[b.numero].somaVezes += (b.trials || 0);
    // BUG CORRIGIDO (achado real e grave: esta função é o MOTOR DE
    // PRODUÇÃO de verdade, mas nunca recebeu a correção de "sinal
    // negativo deve subtrair, não só somar mais fraco" — só o cálculo
    // espelho dentro de analisarMapa (scores[n].forca) tinha sido
    // corrigido, mas top15PorPontuacao recalcula tudo do zero de forma
    // independente e continuava usando "somaTaxa * somaVezes" (multiplicação
    // simples), sem o desvio em relação ao baseline de 60%. O jogo real
    // gerado pelo sistema NUNCA recebeu a correção, mesmo a exibição
    // visual (scores[n].forca) já mostrando o valor "certo" — divergência
    // real entre o que a tela mostrava e o que o motor de fato escolhia,
    // confirmada em 35 de 39 concursos testados. Corrigido: usa a mesma
    // contribuição por desvio (taxa - 0.6) * vezes, somada por número —
    // agora é a ÚNICA fórmula de Motor A que existe no sistema.
    porNumero[b.numero].forca += (b.taxa - 0.6) * (b.trials || 0);
  });
  const candidatos = [];
  for (let n = 1; n <= 25; n++) {
    const c = porNumero[n];
    candidatos.push({ numero: n, forca: c.forca, somaTaxa: c.somaTaxa, somaVezes: c.somaVezes });
  }
  candidatos.sort((a, b) => (b.forca - a.forca) || (b.somaVezes - a.somaVezes) || (b.somaTaxa - a.somaTaxa) || (a.numero - b.numero));
  return candidatos.slice(0, 15).map(c => c.numero);
}

// MOTOR B: por número, pega o MELHOR sinal individual (taxa boa e volume
// de confirmação real, ex: "80% em 16 vezes") — a força desse sinal é
// taxa × vezes, sem somar com os demais sinais do número. Ordena os 25
// números por essa força, do maior pro menor. Pega os 15 primeiros.
function top15Formula70(scores) {
  const batidas = scores.__regrasValidadasBatidas || [];
  const porNumero = {};
  for (let n = 1; n <= 25; n++) porNumero[n] = null;
  batidas.forEach(b => {
    if (b.taxa == null) return;
    // BUG CORRIGIDO (achado ao investigar a mesma questão do Motor A):
    // "forca = taxa * trials" sem checar a direção do sinal permitia um
    // sinal NEGATIVO (taxa baixa, evidência de que o número tende a NÃO
    // sair) vencer como "melhor sinal" só por ter muita amostra — ex:
    // 25% de taxa em 100 vezes (força=25) vencia 65% de taxa em 10 vezes
    // (força=6.5), mesmo o primeiro sendo evidência CONTRA o número.
    // Medido no histórico real: 65 de 975 números do jogo B (6.7%) tinham
    // como "melhor sinal" um sinal na verdade negativo. Corrigido: só
    // sinais com taxa > 60% (acima do baseline, evidência real a favor)
    // competem como candidato a "melhor sinal" — sinal negativo nunca
    // vence, coerente com o propósito do motor (achar o sinal mais forte
    // A FAVOR de cada número).
    if (b.taxa <= 0.6) return;
    const forca = b.taxa * (b.trials || 0);
    const atual = porNumero[b.numero];
    if (!atual || forca > atual.forca) {
      porNumero[b.numero] = { trials: b.trials || 0, taxa: b.taxa, forca };
    }
  });
  const candidatos = [];
  for (let n = 1; n <= 25; n++) {
    const c = porNumero[n];
    candidatos.push({ numero: n, forca: c ? c.forca : -1, trials: c ? c.trials : -1, taxa: c ? c.taxa : -1 });
  }
  candidatos.sort((a, b) => (b.forca - a.forca) || (b.trials - a.trials) || (b.taxa - a.taxa) || (a.numero - b.numero));
  return candidatos.slice(0, 15).map(c => c.numero);
}


// ─── Componentes base ─────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════════════════════
// SEÇÃO: 9. UI — componentes base (botões, cards, inputs, anel zodiacal)
// ═══════════════════════════════════════════════════════════════════════════

function media(arr) {
  if (!arr.length) return null;
  return arr.reduce((s, v) => s + v, 0) / arr.length;
}

function desvioPadraoAmostral(arr) {
  if (arr.length < 2) return null;
  const m = media(arr);
  const somaQuad = arr.reduce((s, v) => s + (v - m) ** 2, 0);
  return Math.sqrt(somaQuad / (arr.length - 1));
}

export {
  HISTORICO_INICIAL, analisarCorrelacaoDireta, analisarMapa, top15PorPontuacao, top15Formula70,
  rodarWalkForward, avaliarMultiplasComparacoes, construirBaseDecisao, gerarItemComDuasSugestoes,
  obterMapaInterpretado, mapaInterpretavel, resultadoValido, compararHistoricoCronologico,
};
