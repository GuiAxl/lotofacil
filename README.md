# Lotofácil Astro

Sistema React que cruza mapas astrológicos com os sorteios da Lotofácil.

**Versão atual: v13 — Observatório** → `dist/lotofacil-astro-v13.jsx` (cole como artifact no Claude).
Documentação: [`docs/V13.md`](docs/V13.md).

- `src/` — código do v13 (parser em inglês, sinais, motor, UI)
- `test/` — testes (`npm test`)
- `dist/` — arquivo único gerado por `npm run build`
- `versoes/` — os arquivos originais v1, v3, v4 e v12
- `docs/ANALISE.md` e `auditoria/` — auditoria do v12

```bash
npm install
npm test
npm run build
npm run auditoria   # reaudita o motor do v12 (~4 min)
```
