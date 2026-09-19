import type { Metadata } from 'next'
import { RealizationCard } from '@/components/realization-page'
import { REALIZATIONS } from '@/lib/realizations'

export const metadata: Metadata = {
  title: 'Realizacje',
  description: 'Zrealizowane dostawy zbiorników stalowych dla klientów przemysłowych.',
  robots: { index: false },
}

export default function RealizationsPage() {
  return (
    <section data-realizations-list className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold uppercase">Realizacje</h1>
      <p className="mt-2 text-steel-700">Wybrane dostawy z ostatnich sezonów. Zakres każdej z nich wynika z zamówienia.</p>
      <div className="mt-8">
        {REALIZATIONS.length ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {REALIZATIONS.map((realization) => (
              <RealizationCard key={realization.slug} realization={realization} />
            ))}
          </ul>
        ) : (
          <p className="rounded-sm border border-steel-100 bg-white p-6">Wkrótce opiszemy tu pierwsze realizacje.</p>
        )}
      </div>
    </section>
  )
}
