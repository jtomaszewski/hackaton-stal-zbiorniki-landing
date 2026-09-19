import Link from 'next/link'
import { COMPANY } from '@/lib/product'

const NAV = [
  { href: '/#produkty', label: 'Produkty' },
  { href: '/od-reki/', label: 'Od ręki' },
  { href: '/realizacje/', label: 'Realizacje' },
  { href: '/regulamin/', label: 'Regulamin' },
  { href: '/#kontakt', label: 'Kontakt' },
]

export function SiteHeader() {
  return (
    <header className="z-40 lg:sticky lg:top-0 bg-navy-950/95 text-white shadow-lg shadow-navy-950/20 backdrop-blur">
      <div className="hidden border-b border-white/10 sm:block">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-1.5 text-sm text-steel-300">
          <span>Producent zbiorników stalowych od {COMPANY.since} r. · Kobierzyce k. Wrocławia</span>
          <span className="flex gap-4">
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-white">
              {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
              {COMPANY.email}
            </a>
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${COMPANY.shortName} — strona główna`}>
          <span aria-hidden className="grid h-10 w-10 place-items-center rounded-md bg-signal-500 font-display text-xl font-bold shadow-inner">
            SZ
          </span>
          <span className="font-display text-2xl font-bold uppercase tracking-wide">{COMPANY.shortName}</span>
        </Link>
        <nav aria-label="Menu główne" className="flex items-center gap-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-steel-100 transition hover:text-signal-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${COMPANY.email}`}
            className="hidden rounded-md bg-signal-500 px-4 py-2 font-semibold transition hover:bg-signal-600 lg:inline-block"
          >
            Wyślij zapytanie
          </a>
        </nav>
      </div>
    </header>
  )
}
