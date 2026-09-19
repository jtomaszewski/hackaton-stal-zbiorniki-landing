import { ProductPage, productMetadata } from '@/components/product-page'
import { product } from './product'

export const metadata = productMetadata(product)

export default function Page() {
  return (
    <ProductPage product={product}>
      <p>Mobilny zbiornik na wodę pitną o pojemności 1500 l na ramie z uchwytami do wózka widłowego. Stal nierdzewna 1.4301 (AISI 304), atest PZH, króciec spustowy DN50 z zaworem kulowym.</p>
    </ProductPage>
  )
}
