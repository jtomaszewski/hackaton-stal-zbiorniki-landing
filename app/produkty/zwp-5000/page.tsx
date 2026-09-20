import { ProductPage, productMetadata } from '@/components/product-page'
import { product } from './product'

export const metadata = productMetadata(product)

export default function Page() {
  return (
    <ProductPage product={product}>
      <p>Pionowy zbiornik na wodę pitną o pojemności 5200 l. Stal nierdzewna 1.4301 (AISI 304), atest PZH. Wykonanie na zamówienie, czas realizacji 4–6 tygodni.</p>
    </ProductPage>
  )
}
