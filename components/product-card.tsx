import Image from 'next/image'
import Link from 'next/link'
import { formatCapacity, formatPln, productPath, productPhoto, type Product } from '@/lib/product'

export function ProductCard({ product }: { product: Product }) {
  return (
    <li
      data-product-card={product.sku}
      className="group relative flex flex-col overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-steel-200 transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-steel-100">
        <Image
          src={productPhoto(product)}
          alt=""
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.inStock && (
          <span className="absolute left-3 top-3 rounded-sm bg-navy-700 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
            Od ręki
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-steel-500">{product.sku}</p>
        <h3 className="text-lg font-bold leading-tight text-navy-700">
          <Link href={productPath(product)} className="after:absolute after:inset-0 group-hover:underline">
            {product.title}
          </Link>
        </h3>
        <p className="text-sm text-steel-700">
          {formatCapacity(product.capacityLiters)} · {product.material}
        </p>
        <p className="mt-auto flex items-center justify-between border-t border-steel-200 pt-3 font-semibold">
          <span>{product.priceNetPln === null ? 'Cena na zapytanie' : `${formatPln(product.priceNetPln)} netto`}</span>
          <span aria-hidden className="text-navy-700 transition group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </li>
  )
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </ul>
  )
}
