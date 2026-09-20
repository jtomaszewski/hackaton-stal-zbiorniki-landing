export const CATEGORIES = {
  'woda-pitna': 'Zbiorniki na wodę pitną',
  paliwa: 'Zbiorniki na paliwa i oleje',
  chemia: 'Zbiorniki na chemikalia',
  ppoz: 'Zbiorniki ppoż. i na wodę technologiczną',
  urzadzenia: 'Urządzenia technologiczne',
} as const

export type Category = keyof typeof CATEGORIES

export type Shape = 'vertical' | 'horizontal' | 'underground' | 'mixer'

/**
 * One product page = one `Product`. Fields map 1:1 from the Open Mercato catalog record;
 * see AGENTS.md for the mapping. The description is not here: it is the JSX children of
 * `<ProductPage>`.
 */
export type Product = {
  sku: string
  title: string
  subtitle?: string
  category: Category
  inStock: boolean
  capacityLiters: number
  material: string
  certifications: string[]
  dimensionsMm: { width: number; height: number; depth: number } | null
  weightKg?: number
  /** Net price in PLN; `null` renders as "Cena na zapytanie". */
  priceNetPln: number | null
  vatRate: number
  shape: Shape
  /** Photo under `public/photos/`; when unset the page shows the stock photo for `shape`. */
  photo?: string
}

const SHAPE_PHOTOS: Record<Shape, string> = {
  vertical: '/photos/zbiorniki-pionowe.webp',
  horizontal: '/photos/zbiornik-dwuplaszczowy.webp',
  underground: '/photos/zbiorniki-poziome.webp',
  mixer: '/photos/mieszalnik.webp',
}

export function productPhoto(product: Pick<Product, 'photo' | 'shape'>): string {
  return product.photo ?? SHAPE_PHOTOS[product.shape]
}

export function productPath(product: Pick<Product, 'sku'>): string {
  return `/produkty/${product.sku.toLowerCase()}/`
}

export function grossPrice(product: Pick<Product, 'priceNetPln' | 'vatRate'>): number | null {
  if (product.priceNetPln === null) return null
  return Math.round(product.priceNetPln * (1 + product.vatRate / 100) * 100) / 100
}

const plnFormat = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 })

export function formatPln(value: number): string {
  return plnFormat.format(value)
}

export function formatCapacity(liters: number): string {
  if (liters >= 10000 && liters % 1000 === 0) return `${liters / 1000} m³`
  return `${new Intl.NumberFormat('pl-PL').format(liters)} l`
}

/**
 * Brand only. This is a demo site, so it carries no real contact data: `email` is a
 * `.example` address that the inquiry buttons point at, and there is no phone or postal
 * address anywhere on the site.
 */
export const COMPANY = {
  name: 'Metal Zbiorniki sp. z o.o.',
  shortName: 'Metal Zbiorniki',
  tagline: 'Zbiorniki stalowe na miarę',
  email: 'zapytania@metal-zbiorniki.example',
  since: 2008,
} as const
