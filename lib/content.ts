/**
 * Marketing copy of the home page: who we build for, what we make, what customers said,
 * what they ask. Change class `content` — data only, no imports, no components.
 */

export type Industry = {
  slug: string
  name: string
  description: string
  /** Under `public/photos/`. */
  photo: string
}

/** The five industries the home page leads with, in order. */
export const INDUSTRIES: Industry[] = [
  {
    slug: 'woda-pitna',
    name: 'Woda pitna i mobilna',
    description:
      'Zbiorniki ze stali nierdzewnej z atestem PZH do magazynowania, transportu i awaryjnego zaopatrzenia w wodę pitną — dla gmin, wodociągów i obiektów użyteczności publicznej.',
    photo: '/photos/zbiorniki-woda.webp',
  },
  {
    slug: 'ppoz',
    name: 'Woda techniczna i ppoż.',
    description:
      'Zbiorniki na wodę technologiczną, deszczówkę oraz zapas wody do celów przeciwpożarowych — od retencji po hydranty zewnętrzne i instalacje tryskaczowe.',
    photo: '/photos/zbiornik-ppoz.webp',
  },
  {
    slug: 'paliwa',
    name: 'Paliwa i oleje',
    description:
      'Zbiorniki dwupłaszczowe naziemne i podziemne do magazynowania oleju napędowego, oleju opałowego i benzyn — dla stacji paliw zakładowych, kotłowni i flot.',
    photo: '/photos/zbiornik-dwuplaszczowy.webp',
  },
  {
    slug: 'chemia',
    name: 'Chemia i subst. niebezpieczne',
    description:
      'Zbiorniki ze stali kwasoodpornej i dwupłaszczowe do magazynowania kwasów, zasad, rozpuszczalników i innych substancji niebezpiecznych — z pełną dokumentacją UDT.',
    photo: '/photos/zbiorniki-poziome.webp',
  },
  {
    slug: 'urzadzenia',
    name: 'Procesy i aparatura',
    description:
      'Mieszalniki, reaktory, zbiorniki procesowe, silosy i urządzenia technologiczne wykonywane wg powierzonej dokumentacji — dla przemysłu chemicznego, spożywczego i farmaceutycznego.',
    photo: '/photos/mieszalnik.webp',
  },
]

/** Approvals the company holds; shown as a strip under the customer logos. */
export const CERTIFICATIONS = ['Uprawnienia UDT', 'Dyrektywa PED 2014/68/UE', 'Atest PZH'] as const

/** What we make, beyond the products with their own page. */
export const OFFER = [
  'Mobilne zbiorniki do wody pitnej',
  'Zbiorniki ciśnieniowe do wody i płynów',
  'Zbiorniki dwupłaszczowe (olej opałowy, paliwa, niebezpieczne)',
  'Zbiorniki podziemne do wody i płynów',
  'Zbiorniki nierdzewne i kwasoodporne',
  'Zbiorniki ciśnieniowe do powietrza i gazów',
  'Zbiorniki bezciśnieniowe i do 0,5 bar',
  'Silosy do materiałów sypkich',
  'Mieszalniki i zbiorniki procesowe',
  'Urządzenia, konstrukcje',
  'Zbiorniki prostopadłościenne',
  'Pozostałe zbiorniki i konstrukcje',
] as const

export type Testimonial = { quote: string; author: string; company: string }

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Zamówienie wykonane terminowo, zgodnie z umową i obowiązującymi normami technicznymi. Wysoka jakość wykonania i profesjonalne podejście do współpracy. Polecamy jako wiarygodnego dostawcę zbiorników przemysłowych.',
    author: 'Adam Garstka',
    company: 'SAL',
  },
  {
    quote:
      'Firma Metal Zbiorniki dostarczyła trzy zbiorniki na substancje chemiczne (poliol, izocjanian, TCPP) o pojemności 30 m³ każdy. Realizacja zgodnie z ustaleniami, jakość bez zastrzeżeń. Polecamy jako partnera rzetelnie realizującego swoje zobowiązania.',
    author: 'Marek Skowron',
    company: 'PaNELTECH',
  },
  {
    quote:
      'Realizacja naszego zamówienia przebiegła zgodnie z ustaleniami. Dostarczone zbiorniki wykonano poprawnie według uzgodnionej dokumentacji, jakość nie budziła zastrzeżeń. Polecamy Metal Zbiorniki jako partnera rzetelnie realizującego swoje zobowiązania.',
    author: 'Mariusz Podolski',
    company: 'MATTRA Polska',
  },
  {
    quote:
      'Prace wykonane terminowo, zgodnie z dokumentacją projektową i wymogami inwestora. Metal Zbiorniki wykazała się fachową kadrą i dobrym przygotowaniem sprzętowym. Polecamy jako wykonawcę podobnych zadań.',
    author: 'Waldemar Flis',
    company: 'FSW Instal',
  },
  {
    quote:
      'Realizacja zgodnie z ustaleniami, jakość bez zastrzeżeń. Metal Zbiorniki to partner rzetelny biznesowo, dobrze zorganizowany i wyróżniający się terminowością dostaw. Do dziś podtrzymujemy współpracę.',
    author: 'Agnieszka Szott',
    company: 'EUROSERVICE Z.P.T.',
  },
]

export type Faq = { question: string; answer: string }

export const FAQ: Faq[] = [
  {
    question: 'Jaki jest czas realizacji zamówienia?',
    answer:
      'Standardowy czas realizacji wynosi 4–8 tygodni w zależności od rodzaju i wielkości zbiornika. W przypadku pilnych zamówień prosimy o kontakt telefoniczny.',
  },
  {
    question: 'Z jakich materiałów produkujecie zbiorniki?',
    answer:
      'Produkujemy zbiorniki ze stali węglowej (S235, S355, P265GH) oraz ze stali nierdzewnej (AISI 304, AISI 316). Zabezpieczenie antykorozyjne stali węglowej wykonujemy żywicami epoksydowymi lub poliuretanowymi.',
  },
  {
    question: 'Czy wykonujecie zbiorniki na indywidualne zamówienie?',
    answer:
      'Tak, większość naszych realizacji to zbiorniki wykonywane na indywidualne zamówienie. Możemy wyprodukować zbiornik o pojemności od 600 do 100 000 litrów według dokumentacji własnej lub powierzonej.',
  },
  {
    question: 'Jakie certyfikaty posiadacie?',
    answer:
      'Posiadamy zezwolenie UDT na wytwarzanie zbiorników ciśnieniowych i bezciśnieniowych oraz certyfikaty zgodności z dyrektywą PED 2014/68/UE. Nasi spawacze posiadają aktualne uprawnienia.',
  },
  {
    question: 'Czy zapewniacie transport zbiorników?',
    answer:
      'Tak, zapewniamy transport zbiorników na terenie całej Polski. Wielkogabarytowe zbiorniki dostarczamy transportem specjalistycznym z odpowiednimi zezwoleniami.',
  },
]
