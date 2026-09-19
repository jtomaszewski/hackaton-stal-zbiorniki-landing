import type { MetadataRoute } from 'next'
import { products } from '@/app/produkty'
import { productPath } from '@/lib/product'

export const dynamic = 'force-static'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hackaton-stal-zbiorniki-landing.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/` },
    { url: `${BASE_URL}/od-reki/` },
    { url: `${BASE_URL}/regulamin/` },
    ...products.map((product) => ({ url: `${BASE_URL}${productPath(product)}` })),
  ]
}
