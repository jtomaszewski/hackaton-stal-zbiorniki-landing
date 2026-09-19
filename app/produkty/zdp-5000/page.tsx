import { ProductPage, productMetadata } from '@/components/product-page'
import { product } from './product'

export const metadata = productMetadata(product)

export default function Page() {
  return (
    <ProductPage product={product}>
      <p>Naziemny zbiornik dwupłaszczowy na olej napędowy o pojemności 5000 l. Stal S235JR, sonda szczelności przestrzeni międzypłaszczowej, podlega dozorowi UDT.</p>
    </ProductPage>
  )
}
