import { ProductPage, productMetadata } from '@/components/product-page'
import { product } from './product'

export const metadata = productMetadata(product)

export default function Page() {
  return (
    <ProductPage product={product}>
      <p>Naziemny zbiornik na wodę przeciwpożarową o pojemności 20 m³. Stal ocynkowana ogniowo, izolacja termiczna z płaszczem, podgrzewanie przeciwzamrożeniowe.</p>
    </ProductPage>
  )
}
