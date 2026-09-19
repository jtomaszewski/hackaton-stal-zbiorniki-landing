import Image from 'next/image'
import Link from 'next/link'
import { ProductGrid } from '@/components/product-card'
import { products } from '@/app/produkty'
import { CATEGORIES, COMPANY, type Category } from '@/lib/product'

const CERTIFICATES = [
  { code: 'PZH', text: 'Atest higieniczny na kontakt z wodą pitną.' },
  { code: 'UDT', text: 'Zbiorniki paliwowe pod dozorem technicznym.' },
  { code: 'CNBOP', text: 'Zbiorniki na wodę przeciwpożarową.' },
]

const FACTS = [
  { value: `${new Date().getFullYear() - COMPANY.since}+`, label: 'lat produkcji' },
  { value: '20+', label: 'klientów przemysłowych' },
  { value: '4–6 tyg.', label: 'realizacji na zamówienie' },
]

export default function Home() {
  const inStock = products.filter((product) => product.inStock)
  const categories = (Object.keys(CATEGORIES) as Category[])
    .map((category) => ({ category, items: products.filter((product) => product.category === category) }))
    .filter((group) => group.items.length > 0)

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(90deg,transparent_0_78px,rgba(255,255,255,.35)_78px_80px),repeating-linear-gradient(0deg,transparent_0_118px,rgba(255,255,255,.2)_118px_120px)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
          <div>
            <p className="font-semibold uppercase tracking-widest text-signal-500">Producent od {COMPANY.since} r.</p>
            <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-none sm:text-6xl">
              Zbiorniki stalowe
              <br />
              na wymiar i od ręki
            </h1>
            <p className="mt-6 max-w-xl text-lg text-steel-300">
              Woda pitna, paliwa, chemikalia i woda ppoż. Stal nierdzewna, kwasoodporna i czarna, z atestami PZH
              i dozorem UDT. Od pojedynczych sztuk po serie produkcyjne.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/od-reki/" className="rounded-sm bg-signal-500 px-5 py-3 font-semibold hover:bg-signal-600">
                Zobacz zbiorniki od ręki
              </Link>
              <a href={`mailto:${COMPANY.email}`} className="rounded-sm border border-white/40 px-5 py-3 font-semibold hover:bg-white/10">
                Wyślij zapytanie
              </a>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {FACTS.map((fact) => (
                <div key={fact.label} className="flex flex-col">
                  <dt className="text-sm text-steel-300">{fact.label}</dt>
                  <dd className="order-first font-display text-3xl font-bold">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Image src="/products/vertical.svg" alt="" width={480} height={300} priority className="mx-auto w-full max-w-sm drop-shadow-2xl" />
        </div>
      </section>

      <section aria-labelledby="od-reki" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="od-reki" className="font-display text-3xl font-bold uppercase">
              Od ręki
            </h2>
            <p className="text-steel-700">Gotowe zbiorniki z magazynu, wysyłka w kilka dni.</p>
          </div>
          <Link href="/od-reki/" className="font-semibold text-signal-600 hover:underline">
            Wszystkie od ręki ({inStock.length}) →
          </Link>
        </div>
        <div className="mt-6">
          <ProductGrid products={inStock.slice(0, 3)} />
        </div>
      </section>

      <section id="produkty" aria-labelledby="produkty-heading" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 id="produkty-heading" className="font-display text-3xl font-bold uppercase">
            Produkty
          </h2>
          {categories.map((group) => (
            <div key={group.category} id={group.category} className="mt-10 scroll-mt-6">
              <h3 className="mb-4 border-l-4 border-signal-500 pl-3 font-display text-2xl font-bold">
                {CATEGORIES[group.category]}
              </h3>
              <ProductGrid products={group.items} />
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="atesty" className="mx-auto max-w-6xl px-4 py-14">
        <h2 id="atesty" className="font-display text-3xl font-bold uppercase">
          Atesty i dozór
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {CERTIFICATES.map((certificate) => (
            <li key={certificate.code} className="rounded-sm border border-steel-100 bg-white p-5">
              <p className="font-display text-2xl font-bold text-navy-800">{certificate.code}</p>
              <p className="mt-1 text-steel-700">{certificate.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
