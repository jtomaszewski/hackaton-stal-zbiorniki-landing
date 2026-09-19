/**
 * One entry = one delivered order shown as a reference: a logo in "Zaufali nam" on the home
 * page and a card under `/realizacje/<slug>/`. Change class `content` (SPEC-006): the factory
 * adds entries here from fulfilled orders, so this file holds data only.
 */
export type Realization = {
  slug: string
  customerName: string
  customerUrl: string
  /** Under `public/`, e.g. `/logos/park-of-poland.svg`. */
  logo: string
  title: string
  /** 1–2 sentences from the customer's description and the order lines. */
  summary: string
  /** One entry per order line unit; must match SKUs in `app/produkty`. */
  productSkus: string[]
  /** Sum over `productSkus` from the catalog. */
  capacityLiters: number
  /** `YYYY-MM` of the status change to fulfilled. */
  deliveredAt: string
  /** Under `public/`, e.g. `/realizacje/park-of-poland/01.webp`; empty until photos arrive. */
  photos: string[]
}

/** Every realization, newest first. A new entry here is a new page and a new logo. */
export const REALIZATIONS: Realization[] = [
  {
    slug: 'browar-ostrow',
    customerName: 'Browar Rzemieślniczy Ostrów',
    customerUrl: 'https://browar-ostrow.example/',
    logo: '/logos/browar-ostrow.svg',
    title: 'Zbiorniki na wodę technologiczną dla browaru rzemieślniczego',
    summary:
      'Browar Rzemieślniczy Ostrów warzy piwo w Ostrowie Wielkopolskim od 2015 roku. Dostarczyliśmy dwa zbiorniki na wodę pitną 2000 l ze stali nierdzewnej 1.4301 z atestem PZH, zasilające linię warzelną.',
    productSkus: ['ZWP-2000', 'ZWP-2000'],
    capacityLiters: 4000,
    deliveredAt: '2026-05',
    photos: [],
  },
]

export function realizationPath(realization: Pick<Realization, 'slug'>): string {
  return `/realizacje/${realization.slug}/`
}

const monthFormat = new Intl.DateTimeFormat('pl-PL', { month: 'long', year: 'numeric' })

/** `'2026-08'` → `'sierpień 2026'`. */
export function formatDeliveredAt(deliveredAt: string): string {
  const [year, month] = deliveredAt.split('-').map(Number)
  return monthFormat.format(new Date(year, month - 1, 1))
}
