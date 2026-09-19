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
    slug: 'park-of-poland',
    customerName: 'Park of Poland (Suntago)',
    customerUrl: 'https://parkofpoland.com/',
    logo: '/logos/park-of-poland.svg',
    title: 'Zbiorniki na wodę technologiczną i chemię basenową dla parku wodnego Suntago',
    summary:
      'Suntago w Park of Poland to największy kryty park wodny w Europie, 30 minut od Warszawy. Dostarczyliśmy naziemny zbiornik przeciwpożarowy 20 m³ i dwa zbiorniki 3000 l ze stali kwasoodpornej na chemię basenową.',
    productSkus: ['ZPPOZ-20', 'ZCH-3000', 'ZCH-3000'],
    capacityLiters: 26000,
    deliveredAt: '2026-08',
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
