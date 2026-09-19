import Link from 'next/link'
import { COMPANY } from '@/lib/product'

export function SiteFooter() {
  return (
    <footer id="kontakt" className="bg-navy-950 text-steel-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold uppercase text-white">{COMPANY.name}</p>
          <p className="mt-2">
            {COMPANY.street}
            <br />
            {COMPANY.city}
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Kontakt</p>
          <p className="mt-2">
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-white">
              {COMPANY.phone}
            </a>
            <br />
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
              {COMPANY.email}
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Informacje</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/od-reki/" className="hover:text-white">
                Zbiorniki od ręki
              </Link>
            </li>
            <li>
              <Link href="/realizacje/" className="hover:text-white">
                Realizacje
              </Link>
            </li>
            <li>
              <Link href="/regulamin/" className="hover:text-white">
                Regulamin sprzedaży
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-sm text-steel-500">
        Strona demonstracyjna. Firma, dane kontaktowe i produkty są fikcyjne.
      </p>
    </footer>
  )
}
