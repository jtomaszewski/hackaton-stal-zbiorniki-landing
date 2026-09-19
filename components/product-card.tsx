import Image from 'next/image'
import Link from 'next/link'
import { formatCapacity, formatPln, productPath, SHAPE_IMAGES, type Product } from '@/lib/product'

export function ProductCard({ product }: { product: Product }) {
  return (
    <li data-product-card={product.sku} className="group relative flex flex-col overflow-hidden rounded-sm border border-steel-100 bg-white">
      <div className="relative bg-steel-100 p-6">
        <Image src={SHAPE_IMAGES[product.shape]} alt="" width={320} height={200} className="mx-auto h-36 w-auto" />
        {product.inStock && (
          <span className="absolute left-3 top-3 rounded-sm bg-signal-500 px-2 py-1 text-xs font-bold uppercase text-white">
            Od ręki
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-steel-500">{product.sku}</p>
        <h3 className="font-display text-lg font-bold leading-tight">
          <Link href={productPath(product)} className="after:absolute after:inset-0 group-hover:text-signal-600">
            {product.title}
          </Link>
        </h3>
        <p className="text-sm text-steel-700">
          {formatCapacity(product.capacityLiters)} · {product.material}
        </p>
        <p className="mt-auto pt-2 font-semibold">
          {product.priceNetPln === null ? 'Cena na zapytanie' : `${formatPln(product.priceNetPln)} netto`}
        </p>
      </div>
    </li>
  )
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </ul>
  )
}
