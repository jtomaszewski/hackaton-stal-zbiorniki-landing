# Metal Zbiorniki — strona demo

Strona Metal Zbiorniki sp. z o.o., producenta zbiorników stalowych z Jarocina — docelowe repo
fabryki oprogramowania na Open Mercato
([SPEC-005](https://github.com/jtomaszewski/open-mercato-software-factory/blob/main/docs/specs/SPEC-005-2026-09-19-metal-zbiorniki-www.md)).
Marka, dane kontaktowe, klienci i opinie pochodzą z [metal-zbiorniki.pl](https://metal-zbiorniki.pl/);
katalog produktów i realizacje są danymi demo fabryki.

Next.js (App Router) ze static export. Każdy produkt to `app/produkty/<sku>/` (`product.ts`
z danymi + `page.tsx` z opisem) i wpis w `app/produkty/index.ts`. Zasady dla agentów: [AGENTS.md](./AGENTS.md).

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # statyczny eksport do out/
npm test           # Playwright na out/ (najpierw build)
```

## Check `site`

`.github/workflows/site.yml`: lint, typecheck, build, Playwright. Wymagany na `main`.

## Ustawienia poza repo

Spisane tutaj, bo projekt Vercel stoi na prywatnym koncie (Hobby, bez członków zespołu):

- **Vercel:** projekt podpięty do tego repo, framework Next.js, bez zmiennych środowiskowych;
  gałąź produkcyjna `main`; *Deployment Protection* dla preview **wyłączone** (prawnik otwiera
  preview bez logowania).
- **Ruleset `main`:** PR wymagany, check `site` wymagany, 1 approve; bypass tylko dla GitHub App
  do merge'a waivera. GitHub App fabryki (bot kodujący) bez bypassu.
