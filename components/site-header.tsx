import Link from 'next/link'
import { COMPANY } from '@/lib/product'

const NAV = [
  { href: '/#produkty', label: 'Produkty' },
  { href: '/od-reki/', label: 'Od ręki' },
  { href: '/regulamin/', label: 'Regulamin' },
  { href: '/#kontakt', label: 'Kontakt' },
]

export function SiteHeader() {
  return (
    <header className="bg-navy-950 text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-sm text-steel-300">
          <span>Producent zbiorników stalowych od {COMPANY.since} r.</span>
          <span className="flex gap-4">
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-white">
              {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="hidden hover:text-white sm:inline">
              {COMPANY.email}
            </a>
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label={`${COMPANY.shortName} — strona główna`}>
          <span aria-hidden className="grid h-10 w-10 place-items-center rounded-sm bg-signal-500 font-display text-xl font-bold">
            SZ
          </span>
          <span className="font-display text-2xl font-bold uppercase tracking-wide">{COMPANY.shortName}</span>
        </Link>
        <nav aria-label="Menu główne">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-steel-100 hover:text-signal-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
