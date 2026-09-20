/**
 * One entry = one delivered order shown as a reference: a logo in "Zaufali nam" on the home
 * page and a card under `/realizacje/<slug>/`. Change class `content` (SPEC-006): the factory
 * adds entries here from fulfilled orders, so this file holds data only.
 */
export type Realization = {
  slug: string
  customerName: string
  customerUrl: string
  /** Under `public/`, e.g. `/logos/viessmann.svg`. */
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
  /** Under `public/`, e.g. `/realizacje/viessmann/01.webp`; empty until photos arrive. */
  photos: string[]
}

/** Every realization, newest first. A new entry here is a new page and a new logo. */
export const REALIZATIONS: Realization[] = [
  {
    slug: 'viessmann',
    customerName: 'Viessmann',
    customerUrl: 'https://www.viessmann.pl/',
    logo: '/logos/viessmann.svg',
    title: 'Rezerwa oleju opałowego dla zakładu techniki grzewczej',
    summary:
      'Viessmann produkuje systemy grzewcze, chłodnicze i fotowoltaiczne, w Polsce m.in. w zakładzie w Legnicy. Dostarczyliśmy dwa podziemne zbiorniki dwupłaszczowe na olej opałowy 10 000 l z dokumentacją do odbioru UDT.',
    productSkus: ['ZDP-10000-PZ', 'ZDP-10000-PZ'],
    capacityLiters: 20000,
    deliveredAt: '2026-05',
    photos: [],
  },
  {
    slug: 'saint-gobain',
    customerName: 'Saint-Gobain',
    customerUrl: 'https://www.saint-gobain.pl/',
    logo: '/logos/saint-gobain.svg',
    title: 'Zbiornik przeciwpożarowy dla zakładu materiałów budowlanych',
    summary:
      'Saint-Gobain wytwarza materiały budowlane i izolacyjne w kilkunastu zakładach w Polsce. Dostarczyliśmy zbiornik przeciwpożarowy 20 m³ zasilający instalację hydrantową rozbudowywanej hali produkcyjnej.',
    productSkus: ['ZPPOZ-20'],
    capacityLiters: 20000,
    deliveredAt: '2026-03',
    photos: [],
  },
  {
    slug: 'swiss-krono',
    customerName: 'Swiss Krono',
    customerUrl: 'https://www.swisskrono.pl/',
    logo: '/logos/swiss-krono.svg',
    title: 'Zapas wody uzdatnionej dla zakładu płyt drewnopochodnych',
    summary:
      'Swiss Krono produkuje płyty drewnopochodne i podłogi laminowane w Żarach. Dostarczyliśmy dwa zbiorniki na wodę pitną 5200 l ze stali nierdzewnej 1.4301 z atestem PZH, stanowiące zapas wody uzdatnionej dla zaplecza socjalnego.',
    productSkus: ['ZWP-5000', 'ZWP-5000'],
    capacityLiters: 10400,
    deliveredAt: '2026-02',
    photos: [],
  },
  {
    slug: 'paneltech',
    customerName: 'Paneltech',
    customerUrl: 'https://www.paneltech.pl/',
    logo: '/logos/paneltech.svg',
    title: 'Magazyn surowców chemicznych dla producenta płyt warstwowych',
    summary:
      'Paneltech produkuje płyty warstwowe PIR i PUR w Chorzowie. Dostarczyliśmy trzy zbiorniki na substancje chemiczne ze stali kwasoodpornej na poliol, izocyjanian i TCPP, ustawione w wannie wychwytowej magazynu surowców.',
    productSkus: ['ZCH-3000', 'ZCH-3000', 'ZCH-3000'],
    capacityLiters: 9000,
    deliveredAt: '2025-11',
    photos: [],
  },
  {
    slug: 'grupa-kety',
    customerName: 'Grupa Kęty',
    customerUrl: 'https://www.grupakety.com/',
    logo: '/logos/gkety.svg',
    title: 'Zbiorniki kwasoodporne dla linii anodowania aluminium',
    summary:
      'Grupa Kęty wytwarza profile i komponenty aluminiowe dla budownictwa i przemysłu. Dostarczyliśmy dwa zbiorniki na kwasy 3000 l ze stali kwasoodpornej do obiegu kąpieli na linii obróbki powierzchniowej.',
    productSkus: ['ZCH-3000', 'ZCH-3000'],
    capacityLiters: 6000,
    deliveredAt: '2025-09',
    photos: [],
  },
  {
    slug: 'polmlek',
    customerName: 'Polmlek',
    customerUrl: 'https://polmlek.pl/',
    logo: '/logos/polmlek.png',
    title: 'Linia przygotowania mieszanek dla zakładu mleczarskiego',
    summary:
      'Polmlek przetwarza mleko w kilkunastu zakładach w Polsce. Dostarczyliśmy dwa mieszalniki procesowe 500 l i zbiornik na wodę pitną 2000 l ze stali nierdzewnej z atestem PZH do nowej linii produktów mlecznych.',
    productSkus: ['MX-500', 'MX-500', 'ZWP-2000'],
    capacityLiters: 3000,
    deliveredAt: '2025-06',
    photos: [],
  },
  {
    slug: 'erbud',
    customerName: 'Erbud',
    customerUrl: 'https://www.erbud.pl/',
    logo: '/logos/erbud.svg',
    title: 'Zbiornik na olej napędowy dla zaplecza budowy',
    summary:
      'Erbud realizuje inwestycje budowlane i energetyczne w Polsce i Europie Zachodniej. Dostarczyliśmy naziemny zbiornik dwupłaszczowy na olej napędowy 5000 l do tankowania sprzętu na zapleczu budowy.',
    productSkus: ['ZDP-5000'],
    capacityLiters: 5000,
    deliveredAt: '2025-04',
    photos: [],
  },
  {
    slug: 'steico',
    customerName: 'Steico',
    customerUrl: 'https://www.steico.com/pl/',
    logo: '/logos/steico.svg',
    title: 'Zapas wody ppoż. dla zakładu materiałów izolacyjnych',
    summary:
      'Steico produkuje materiały izolacyjne i konstrukcyjne z włókien drzewnych w Czarnkowie i Czarnej Wodzie. Dostarczyliśmy zbiornik przeciwpożarowy 20 m³ do instalacji tryskaczowej magazynu wyrobów gotowych.',
    productSkus: ['ZPPOZ-20'],
    capacityLiters: 20000,
    deliveredAt: '2025-02',
    photos: [],
  },
  {
    slug: 'xella',
    customerName: 'Xella',
    customerUrl: 'https://www.xella.pl/',
    logo: '/logos/xella.png',
    title: 'Woda technologiczna dla zakładu betonu komórkowego',
    summary:
      'Xella produkuje beton komórkowy Ytong i płyty Silka w kilkunastu zakładach w Polsce. Dostarczyliśmy dwa zbiorniki na wodę pitną 2000 l ze stali nierdzewnej 1.4301 z atestem PZH dla węzła przygotowania zarobu.',
    productSkus: ['ZWP-2000', 'ZWP-2000'],
    capacityLiters: 4000,
    deliveredAt: '2024-11',
    photos: [],
  },
  {
    slug: 'purinova',
    customerName: 'Purinova',
    customerUrl: 'https://www.purinova.com/',
    logo: '/logos/purinova.svg',
    title: 'Zbiorniki na komponenty poliuretanowe',
    summary:
      'Purinova wytwarza systemy poliuretanowe i pianki w Bydgoszczy. Dostarczyliśmy dwa zbiorniki 3000 l ze stali kwasoodpornej na komponenty poliuretanowe, z pełną dokumentacją UDT.',
    productSkus: ['ZCH-3000', 'ZCH-3000'],
    capacityLiters: 6000,
    deliveredAt: '2024-09',
    photos: [],
  },
  {
    slug: 'troton',
    customerName: 'Troton',
    customerUrl: 'https://troton.com.pl/',
    logo: '/logos/troton.svg',
    title: 'Zbiornik na rozpuszczalniki dla producenta chemii lakierniczej',
    summary:
      'Troton produkuje szpachlówki, lakiery i chemię warsztatową w Ząbrowie. Dostarczyliśmy zbiornik 3000 l ze stali kwasoodpornej na rozpuszczalniki, z uziemieniem i osprzętem do magazynowania substancji łatwopalnych.',
    productSkus: ['ZCH-3000'],
    capacityLiters: 3000,
    deliveredAt: '2024-06',
    photos: [],
  },
  {
    slug: 'mdi-energia',
    customerName: 'MDI Energia',
    customerUrl: 'https://www.mdienergia.pl/',
    logo: '/logos/mdi-energia.svg',
    title: 'Paliwo dla zaplecza budowy farmy fotowoltaicznej',
    summary:
      'MDI Energia buduje farmy fotowoltaiczne, wiatrowe i instalacje biomasowe. Dostarczyliśmy naziemny zbiornik dwupłaszczowy 5000 l i podziemny zbiornik 10 000 l na olej napędowy dla zaplecza budowy.',
    productSkus: ['ZDP-5000', 'ZDP-10000-PZ'],
    capacityLiters: 15000,
    deliveredAt: '2024-03',
    photos: [],
  },
  {
    slug: 'inergis',
    customerName: 'Inergis',
    customerUrl: 'https://www.inergis.pl/',
    logo: '/logos/inergis.png',
    title: 'Zbiornik ppoż. dla modernizowanej ciepłowni',
    summary:
      'Inergis wykonuje instalacje energetyczne i przemysłowe z siedzibą w Częstochowie. Dostarczyliśmy zbiornik przeciwpożarowy 20 m³ jako element modernizacji źródła ciepła prowadzonej dla miejskiego operatora.',
    productSkus: ['ZPPOZ-20'],
    capacityLiters: 20000,
    deliveredAt: '2023-11',
    photos: [],
  },
  {
    slug: 'envirotech',
    customerName: 'Envirotech',
    customerUrl: 'https://www.envirotech.com.pl/',
    logo: '/logos/envirotech.png',
    title: 'Zbiorniki reagentów dla oczyszczalni ścieków',
    summary:
      'Envirotech dostarcza technologie uzdatniania wody i oczyszczania ścieków z siedzibą w Poznaniu. Dostarczyliśmy dwa zbiorniki 3000 l ze stali kwasoodpornej na reagenty do węzła strącania fosforu.',
    productSkus: ['ZCH-3000', 'ZCH-3000'],
    capacityLiters: 6000,
    deliveredAt: '2023-09',
    photos: [],
  },
  {
    slug: 'schmid-energy',
    customerName: 'Schmid Energy',
    customerUrl: 'https://www.schmid-energy.ch/',
    logo: '/logos/schmid-energy.svg',
    title: 'Bufor wody uzdatnionej dla kotłowni na biomasę',
    summary:
      'Schmid Energy buduje kotłownie i systemy energetyczne na biomasę. Dostarczyliśmy zbiornik na wodę pitną 5200 l ze stali nierdzewnej 1.4301 z atestem PZH jako zapas wody uzupełniającej dla instalacji kotłowej.',
    productSkus: ['ZWP-5000'],
    capacityLiters: 5200,
    deliveredAt: '2023-06',
    photos: [],
  },
  {
    slug: 'elektronika-sa',
    customerName: 'Elektronika SA',
    customerUrl: 'https://www.elektronika.com.pl/',
    logo: '/logos/elektronika-sa.png',
    title: 'Woda demineralizowana dla zakładu elektronicznego',
    summary:
      'Elektronika SA produkuje systemy pomiarowe i urządzenia elektroniczne. Dostarczyliśmy zbiornik na wodę pitną 2000 l ze stali nierdzewnej 1.4301 z atestem PZH dla stanowiska przygotowania wody.',
    productSkus: ['ZWP-2000'],
    capacityLiters: 2000,
    deliveredAt: '2023-03',
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
