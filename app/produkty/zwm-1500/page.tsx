import { ProductPage, productMetadata } from '@/components/product-page'
import { product } from './product'

export const metadata = productMetadata(product)

export default function Page() {
  return (
    <ProductPage product={product}>
      <p>Mobilny zbiornik na wodę pitną o pojemności 1500 l na przyczepie jednoosiowej. Stal nierdzewna 1.4301, atest PZH, kran spustowy, właz rewizyjny. Gotowy do odbioru od ręki.</p>
    </ProductPage>
  )
}
