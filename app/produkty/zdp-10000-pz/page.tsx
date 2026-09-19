import { ProductPage, productMetadata } from '@/components/product-page'
import { product } from './product'

export const metadata = productMetadata(product)

export default function Page() {
  return (
    <ProductPage product={product}>
      <p>Podziemny zbiornik dwupłaszczowy na olej opałowy o pojemności 10 000 l. Stal S235JR, zewnętrzna izolacja epoksydowa, wskaźnik wycieku, podlega dozorowi UDT.</p>
    </ProductPage>
  )
}
