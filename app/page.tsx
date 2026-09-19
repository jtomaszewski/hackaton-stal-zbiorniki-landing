import Image from 'next/image'
import Link from 'next/link'
import { ProductGrid } from '@/components/product-card'
import { products } from '@/app/produkty'
import { COMPANY } from '@/lib/product'
import { REALIZATIONS, realizationPath } from '@/lib/realizations'

const FACTS = [
  { value: `${new Date().getFullYear() - COMPANY.since}+`, label: 'lat produkcji' },
  { value: '20+', label: 'klientów przemysłowych' },
  { value: '4–6 tyg.', label: 'realizacji na zamówienie' },
]

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <Image src="/photos/hero-transport.webp" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        <div className="mx-auto max-w-6xl px-4 py-20 lg:py-32">
          <p className="font-semibold uppercase tracking-widest text-signal-500">Producent od {COMPANY.since} r.</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
            Zbiorniki stalowe
            <br />
            na wymiar i od ręki
          </h1>
          <p className="mt-6 max-w-xl text-lg text-steel-100">
            Woda pitna, paliwa, chemikalia i woda ppoż. Stal nierdzewna, kwasoodporna i czarna, z atestami PZH
            i dozorem UDT. Od pojedynczych sztuk po serie produkcyjne.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/od-reki/" className="rounded-md bg-signal-500 px-6 py-3 font-semibold shadow-lg shadow-signal-600/30 transition hover:bg-signal-600">
              Zobacz zbiorniki od ręki
            </Link>
            <a href={`mailto:${COMPANY.email}`} className="rounded-md border border-white/40 px-6 py-3 font-semibold backdrop-blur-sm transition hover:bg-white/10">
              Wyślij zapytanie
            </a>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-6">
            {FACTS.map((fact) => (
              <div key={fact.label} className="flex flex-col">
                <dt className="text-sm text-steel-300">{fact.label}</dt>
                <dd className="order-first font-display text-4xl font-bold text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="produkty" aria-labelledby="produkty-heading" className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-signal-600">Oferta</p>
        <h2 id="produkty-heading" className="mt-1 font-display text-4xl font-bold uppercase">
          Produkty
        </h2>
        <div className="mt-8">
          <ProductGrid products={products} />
        </div>
      </section>

      {REALIZATIONS.length > 0 && (
        <section aria-labelledby="zaufali-nam" data-trusted-by className="border-t border-steel-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-signal-600">Referencje</p>
                <h2 id="zaufali-nam" className="mt-1 font-display text-4xl font-bold uppercase">
                  Zaufali nam
                </h2>
                <p className="text-steel-700">Zbiorniki z Kobierzyc pracują u klientów z przemysłu, energetyki i rekreacji.</p>
              </div>
              <Link href="/realizacje/" className="font-semibold text-signal-600 hover:underline">
                Wszystkie realizacje ({REALIZATIONS.length}) →
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {REALIZATIONS.map((realization) => (
                <li key={realization.slug}>
                  <Link
                    href={realizationPath(realization)}
                    data-trusted-logo={realization.slug}
                    title={realization.title}
                    className="group grid h-28 place-items-center rounded-md bg-white p-6 shadow-sm ring-1 ring-steel-100 transition hover:shadow-md hover:ring-signal-500"
                  >
                    <Image
                      src={realization.logo}
                      alt={realization.customerName}
                      width={180}
                      height={48}
                      className="max-h-12 w-auto opacity-70 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

    </>
  )
}
