<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Metal Zbiorniki website — agent rules

The website of Metal Zbiorniki sp. z o.o., the steel-tank maker used in the Open Mercato
software-factory demo. Spec: [SPEC-005](https://github.com/jtomaszewski/open-mercato-software-factory/blob/main/docs/specs/SPEC-005-2026-09-19-stal-zbiorniki-www.md).
Brand, contact details, customer logos and testimonials mirror [metal-zbiorniki.pl](https://metal-zbiorniki.pl/);
the product catalog and the realizations are the demo's own data. The Open Mercato catalog is
the source of truth for products; this site changes only by PR.

## Commands

`npm ci` · `npm run dev` · `npm run lint` · `npm run typecheck` · `npm run build` (static export to `out/`) · `npm test` (Playwright on `out/`, run `build` first). Before pushing: `npm run lint && npm run build && npm test`.

## Where things live and who reviews them

| Path | Change class | Review |
|---|---|---|
| `app/produkty/**` | `content` | none if checks are green |
| `lib/realizations.ts`, `lib/content.ts`, `public/logos/**`, `public/realizacje/**` | `content` | none if checks are green |
| `app/regulamin/**` | `legal` | lawyer |
| everything else | `code` | developer |

Touch only the paths your task needs. Do not change components, `lib/`, tests, CI, config, `package.json` or the lockfile unless the task is about them.

## Adding a product from a catalog record

1. Create `app/produkty/<sku-lowercase>/product.ts` and `page.tsx`. Copy an existing product (e.g. `zwp-2000`) as the template.
2. Add one import and one array entry to `app/produkty/index.ts`.
3. Map the catalog record:

| `Product` field | From the catalog record |
|---|---|
| directory name | `sku` in lowercase (ignore the catalog `handle`) |
| `sku`, `title`, `subtitle` | same fields |
| `category` | first assigned category other than `od-reki` (`woda-pitna`, `paliwa`, `chemia`, `ppoz`, `urzadzenia`) |
| `inStock` | `true` if the product is in category `od-reki` |
| `capacityLiters` | `metadata.capacityLiters`, else the number before "l" or "m³" in title/subtitle (m³ × 1000) |
| `material` | `metadata.material`, else the steel grade in subtitle/description (`1.4301`, `S235JR`, …) |
| `certifications` | `metadata.certifications` (comma-separated in the UI), else PZH/UDT/CNBOP found in subtitle/description; may be `[]` |
| `dimensionsMm` | `dimensions` in mm, or `null` |
| `weightKg` | `weightValue` when `weightUnit` is `kg`, else omit |
| `priceNetPln` | `unitPriceNet` of the `regular` PLN price as a number, or `null` ("Cena na zapytanie") |
| `vatRate` | `taxRate`, default 23 |
| `shape` | `underground` if `metadata.installation` is `underground`; else `metadata.orientation`; else `mixer` for `urzadzenia`; else `vertical` |
| `photo` | omit (the page shows the stock photo for `shape`) unless a photo was added under `public/photos/` |
| page description (`<p>` children) | `description`, one `<p>` per paragraph |

If a required value (`category`, `capacityLiters`, `material`) cannot be derived, **do not guess**: stop and ask the human.

Product files may only import `@/lib/product`, `@/components/product-page` and `./product`; no scripts, `fetch`, hooks or `dangerouslySetInnerHTML`. ESLint enforces this.

## Adding a realization from a fulfilled order

1. Save the customer logo to `public/logos/<slug>.svg` (SVG stays SVG, raster becomes `.png`).
2. Add one `Realization` entry to `REALIZATIONS` in `lib/realizations.ts`, newest first. `productSkus` is one entry per order line unit and every SKU must exist in `app/produkty` (the build fails otherwise); `capacityLiters` is the sum of their `capacityLiters`; `deliveredAt` is `YYYY-MM` of the fulfilment; `photos` stays `[]` until photos land in `public/realizacje/<slug>/`.
3. Nothing else: the page `/realizacje/<slug>/`, the "Zaufali nam" logo and the sitemap entry come from the registry.

`lib/realizations.ts` may not import anything; no scripts, `fetch` or hooks. ESLint enforces this.

## Terms of sale

Edit `app/regulamin/page.tsx` only when the task is about the terms. Keep section numbering.
