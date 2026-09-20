import type { Metadata } from 'next'
import { COMPANY } from '@/lib/product'

export const metadata: Metadata = {
  title: 'Regulamin sprzedaży',
  description: `Ogólne warunki sprzedaży ${COMPANY.name}.`,
}

export default function TermsPage() {
  return (
    <article data-terms className="mx-auto max-w-3xl px-4 py-12 leading-relaxed text-steel-700 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy-700 [&_li]:mt-1 [&_ol]:list-decimal [&_ol]:pl-6">
      <h1 className="text-3xl font-bold text-navy-700">Regulamin sprzedaży</h1>
      <p className="mt-2">Obowiązuje od 1 stycznia 2026 r.</p>

      <h2>§ 1. Postanowienia ogólne</h2>
      <ol>
        <li>
          Regulamin określa warunki sprzedaży zbiorników i urządzeń przez {COMPANY.name}, {COMPANY.street},{' '}
          {COMPANY.city} (dalej: Sprzedawca).
        </li>
        <li>Regulamin dotyczy umów zawieranych z przedsiębiorcami.</li>
      </ol>

      <h2>§ 2. Zamówienia i oferty</h2>
      <ol>
        <li>Zapytanie ofertowe można wysłać e-mailem, telefonicznie lub przyciskiem „Wyślij zapytanie” na stronie produktu.</li>
        <li>Ceny na stronie są cenami netto w złotych polskich; do cen dolicza się podatek VAT według obowiązującej stawki.</li>
        <li>Umowa zostaje zawarta z chwilą potwierdzenia zamówienia przez Sprzedawcę na piśmie lub e-mailem.</li>
      </ol>

      <h2>§ 3. Realizacja i odbiór</h2>
      <ol>
        <li>Zbiorniki oznaczone „Od ręki” są wydawane w ciągu 5 dni roboczych od zaksięgowania płatności.</li>
        <li>Zbiorniki na zamówienie są realizowane w terminie podanym w potwierdzeniu zamówienia, zwykle 4–6 tygodni.</li>
        <li>Odbiór odbywa się w zakładzie Sprzedawcy albo transportem organizowanym przez Sprzedawcę na koszt Kupującego.</li>
      </ol>

      <h2>§ 4. Płatności</h2>
      <ol>
        <li>Przy zamówieniach na wymiar Sprzedawca może żądać zaliczki do 30% wartości zamówienia.</li>
        <li>Termin płatności wynosi 14 dni od daty wystawienia faktury, o ile strony nie ustalą inaczej.</li>
      </ol>

      <h2 id="gwarancja">§ 5. Gwarancja</h2>
      <ol>
        <li data-warranty>Sprzedawca udziela gwarancji na szczelność zbiorników na okres 24 miesięcy od dnia wydania.</li>
        <li>Gwarancja nie obejmuje uszkodzeń powstałych wskutek niewłaściwego montażu, eksploatacji niezgodnej z dokumentacją lub przechowywania substancji innych niż wskazane w zamówieniu.</li>
        <li>Reklamacje należy zgłaszać na adres {COMPANY.email} w terminie 14 dni od wykrycia wady.</li>
      </ol>

      <h2>§ 6. Postanowienia końcowe</h2>
      <ol>
        <li>W sprawach nieuregulowanych stosuje się przepisy Kodeksu cywilnego.</li>
        <li>Sądem właściwym jest sąd właściwy dla siedziby Sprzedawcy.</li>
      </ol>
    </article>
  )
}
