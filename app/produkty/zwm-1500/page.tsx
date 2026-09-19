import { ProductPage, productMetadata } from '@/components/product-page'
import { product } from './product'

export const metadata = productMetadata(product)

export default function Page() {
  return (
    <ProductPage product={product}>
      <p>Zbiornik mobilny na wodę pitną 1500 l. Stal nierdzewna 1.4301, atest PZH.</p>
    </ProductPage>
  )
}
