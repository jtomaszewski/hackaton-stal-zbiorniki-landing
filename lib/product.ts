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
}

export const SHAPE_IMAGES: Record<Shape, string> = {
  vertical: '/products/vertical.svg',
  horizontal: '/products/horizontal.svg',
  underground: '/products/underground.svg',
  mixer: '/products/mixer.svg',
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

export const COMPANY = {
  name: 'Stal-Zbiorniki Sp. z o.o.',
  shortName: 'Stal-Zbiorniki',
  street: 'ul. Hutnicza 14',
  city: '55-040 Kobierzyce',
  phone: '+48 71 555 01 20',
  email: 'zapytania@stal-zbiorniki.example',
  since: 2008,
} as const
