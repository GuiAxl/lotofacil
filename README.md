# Lotofácil Astro

Versões do sistema React que cruza mapas astrológicos com os sorteios da Lotofácil.

- `versoes/` — os 4 arquivos originais (v1, v3, v4, v12-auditoria-final)
- `docs/ANALISE.md` — análise das versões, resultados da auditoria e roadmap de evolução
- `auditoria/` — reexecuta o motor do v12 fora do navegador e mede o desempenho fora da amostra

```bash
npm run auditoria                                  # ~4 min, sem dependências
node auditoria/validar.mjs --permutacoes 300       # mais permutações (depois de extrair)
```
