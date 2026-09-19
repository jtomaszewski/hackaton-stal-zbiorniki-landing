/**
 * One entry = one delivered order shown as a reference: a logo in "Zaufali nam" on the home
 * page and a card under `/realizacje/<slug>/`. Change class `content` (SPEC-006): the factory
 * adds entries here from fulfilled orders, so this file holds data only.
 */
export type Realization = {
  slug: string
  customerName: string
  customerUrl: string
  /** Under `public/`, e.g. `/logos/park-of-poland.svg`. */
  logo: string
  title: string
  /** 1–2 sentences from the customer's description and the order lines. */
  summary: string
  /** One entry per order line unit; must match SKUs in `app/produkty`. */
  productSkus: string[]
  /** Sum over `productSkus` from the catalog. */
  capacityLiters: number
  /** `YYYY-MM` of the status change to fulfilled. */
  deliveredAt: string
  /** Under `public/`, e.g. `/realizacje/park-of-poland/01.webp`; empty until photos arrive. */
  photos: string[]
}

/** Every realization, newest first. A new entry here is a new page and a new logo. */
export const REALIZATIONS: Realization[] = [
  {
    slug: 'browar-ostrow',
    customerName: 'Browar Rzemieślniczy Ostrów',
    customerUrl: 'https://browar-ostrow.example/',
    logo: '/logos/browar-ostrow.svg',
    title: 'Zbiorniki na wodę technologiczną dla browaru rzemieślniczego',
    summary:
      'Browar Rzemieślniczy Ostrów warzy piwo w Ostrowie Wielkopolskim od 2015 roku. Dostarczyliśmy dwa zbiorniki na wodę pitną 2000 l ze stali nierdzewnej 1.4301 z atestem PZH, zasilające linię warzelną.',
    productSkus: ['ZWP-2000', 'ZWP-2000'],
    capacityLiters: 4000,
    deliveredAt: '2026-05',
    photos: [],
  },
  {
    slug: 'wodociagi-barycz',
    customerName: 'Wodociągi Doliny Baryczy',
    customerUrl: 'https://wodociagi-barycz.example/',
    logo: '/logos/wodociagi-barycz.svg',
    title: 'Rezerwa wody pitnej dla stacji uzdatniania w Miliczu',
    summary:
      'Wodociągi Doliny Baryczy zaopatrują w wodę gminy Milicz i Krośnice. Dostarczyliśmy dwa zbiorniki na wodę pitną 5000 l ze stali nierdzewnej 1.4301 z atestem PZH, które tworzą rezerwę wody uzdatnionej na wypadek awarii sieci.',
    productSkus: ['ZWP-5000', 'ZWP-5000'],
    capacityLiters: 10000,
    deliveredAt: '2026-03',
    photos: [],
  },
  {
    slug: 'agro-trans-kepno',
    customerName: 'Agro-Trans Kępno',
    customerUrl: 'https://agro-trans.example/',
    logo: '/logos/agrotrans-kepno.svg',
    title: 'Własna stacja paliw dla bazy transportowej',
    summary:
      'Agro-Trans obsługuje przewozy dla rolnictwa w Wielkopolsce flotą 40 ciągników siodłowych. Dostarczyliśmy naziemny zbiornik dwupłaszczowy na olej napędowy 5000 l i podziemny zbiornik 10 000 l, oba z dokumentacją do odbioru UDT.',
    productSkus: ['ZDP-5000', 'ZDP-10000-PZ'],
    capacityLiters: 15000,
    deliveredAt: '2026-02',
    photos: [],
  },
  {
    slug: 'chemor-olawa',
    customerName: 'Chemor Oława',
    customerUrl: 'https://chemor.example/',
    logo: '/logos/chemor-olawa.svg',
    title: 'Magazyn kwasów dla zakładu chemii przemysłowej',
    summary:
      'Chemor produkuje środki myjące dla przemysłu spożywczego. Dostarczyliśmy trzy zbiorniki na kwasy 3000 l ze stali kwasoodpornej, ustawione w wannie wychwytowej nowego magazynu surowców.',
    productSkus: ['ZCH-3000', 'ZCH-3000', 'ZCH-3000'],
    capacityLiters: 9000,
    deliveredAt: '2025-11',
    photos: [],
  },
  {
    slug: 'termy-karkonosze',
    customerName: 'Termy Karkonosze',
    customerUrl: 'https://termy-karkonosze.example/',
    logo: '/logos/termy-karkonosze.svg',
    title: 'Zbiornik przeciwpożarowy dla kompleksu basenowego',
    summary:
      'Termy Karkonosze to kompleks basenów termalnych w Szklarskiej Porębie. Dostarczyliśmy zbiornik przeciwpożarowy 20 m³ z certyfikatem CNBOP, zasilający instalację hydrantową nowego skrzydła hotelowego.',
    productSkus: ['ZPPOZ-20'],
    capacityLiters: 20000,
    deliveredAt: '2025-09',
    photos: [],
  },
  {
    slug: 'mleczarnia-kujawska',
    customerName: 'Mleczarnia Kujawska',
    customerUrl: 'https://mleczarnia-kujawska.example/',
    logo: '/logos/mleczarnia-kujawska.svg',
    title: 'Linia przygotowania mieszanek dla mleczarni',
    summary:
      'Mleczarnia Kujawska przerabia mleko od 300 gospodarstw z okolic Inowrocławia. Dostarczyliśmy dwa mieszalniki procesowe 500 l i zbiornik na wodę pitną 2000 l do nowej linii deserów mlecznych.',
    productSkus: ['MX-500', 'MX-500', 'ZWP-2000'],
    capacityLiters: 3000,
    deliveredAt: '2025-06',
    photos: [],
  },
  {
    slug: 'cieplownia-olesnica',
    customerName: 'Ciepłownia Oleśnica',
    customerUrl: 'https://cieplownia-olesnica.example/',
    logo: '/logos/cieplownia-olesnica.svg',
    title: 'Rezerwa oleju opałowego dla miejskiej ciepłowni',
    summary:
      'Ciepłownia Oleśnica ogrzewa ponad 12 tysięcy mieszkań. Dostarczyliśmy dwa podziemne zbiorniki dwupłaszczowe na olej opałowy 10 000 l, stanowiące rezerwę paliwa dla kotłów szczytowych.',
    productSkus: ['ZDP-10000-PZ', 'ZDP-10000-PZ'],
    capacityLiters: 20000,
    deliveredAt: '2025-04',
    photos: [],
  },
]

export function realizationPath(realization: Pick<Realization, 'slug'>): string {
  return `/realizacje/${realization.slug}/`
}

const monthFormat = new Intl.DateTimeFormat('pl-PL', { month: 'long', year: 'numeric' })

/** `'2026-08'` → `'sierpień 2026'`. */
export function formatDeliveredAt(deliveredAt: string): string {
  const [year, month] = deliveredAt.split('-').map(Number)
  return monthFormat.format(new Date(year, month - 1, 1))
}
