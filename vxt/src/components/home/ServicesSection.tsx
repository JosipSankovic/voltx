// Services bento grid (desktop) / stacked cards (mobile)

import { Link } from 'react-router-dom'

interface ServiceCard {
  icon: string
  title: string
  description: string
  href: string
}

const services: ServiceCard[] = [
  {
    icon: 'shopping_cart',
    title: 'Prodaja ugostiteljske opreme',
    description:
      'Premium oprema svjetskih brendova za restorane, hotele i kafiće.',
    href: '/prodaja-opreme',
  },
  {
    icon: 'construction',
    title: 'Ugradnja ugostiteljske opreme',
    description:
      'Profesionalna montaža i puštanje u pogon uz strogo pridržavanje normi.',
    href: '/usluge',
  },
  {
    icon: 'settings',
    title: 'Servis ugostiteljske opreme',
    description:
      'Hitne popravke i redovno održavanje svih vrsta profesionalnih uređaja.',
    href: '/usluge/termicka-oprema',
  },
  {
    icon: 'home_repair_service',
    title: 'Servis kućanskih aparata',
    description:
      'Brz i pouzdan servis perilica, pećnica i ostale bijele tehnike u Vašem domu.',
    href: '/usluge/perilice-rublja',
  },
]

const mobileServices: ServiceCard[] = [
  {
    icon: 'restaurant',
    title: 'Ugostiteljska Oprema',
    description:
      'Servis i održavanje konvektomata, industrijskih perilica posuđa, friteza i ostale profesionalne opreme za restorane i hotele.',
    href: '/usluge',
  },
  {
    icon: 'kitchen',
    title: 'Kućanski Aparati',
    description:
      'Popravak perilica rublja, sušilica, hladnjaka i pećnica vodećih svjetskih brendova s originalnim rezervnim dijelovima.',
    href: '/usluge/perilice-rublja',
  },
  {
    icon: 'ac_unit',
    title: 'Rashladni Sustavi',
    description:
      'Montaža i servis klima uređaja te rashladnih komora za komercijalnu i privatnu upotrebu.',
    href: '/usluge/rashladni-sustavi',
  },
]

export default function ServicesSection() {
  return (
    <>
      {/* ── DESKTOP SERVICES ──────────────────────────────────────────── */}
      <section className="hidden md:block py-24 bg-surface dark:bg-slate-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-secondary font-label font-bold tracking-widest uppercase text-xs block mb-4">
              Naša Ekspertiza
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-container dark:text-slate-100 tracking-tighter">
              Specijalizirane Usluge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <DesktopServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MOBILE SERVICES ───────────────────────────────────────────── */}
      <section className="md:hidden bg-surface-container-low dark:bg-slate-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-secondary font-label">
              Naše Usluge
            </span>
            <h2 className="text-3xl font-bold font-headline mt-2 text-primary dark:text-slate-100">
              Profesionalna Rješenja
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {mobileServices.map((service) => (
              <MobileServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function DesktopServiceCard({ icon, title, description, href }: ServiceCard) {
  return (
    <div className="group bg-surface-container-low dark:bg-slate-800 p-8 rounded-xl transition-all hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl border-b-4 border-transparent hover:border-secondary">
      <div className="w-14 h-14 bg-primary-container text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-3xl leading-none">{icon}</span>
      </div>
      <h3 className="text-xl font-bold font-headline mb-3 text-primary-container dark:text-slate-100 group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="text-on-surface-variant dark:text-slate-400 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <Link
        to={href}
        className="inline-flex items-center text-secondary font-bold text-sm gap-2 hover:gap-3 transition-all"
      >
        Saznajte više{' '}
        <span className="material-symbols-outlined text-base leading-none">
          arrow_forward
        </span>
      </Link>
    </div>
  )
}

function MobileServiceCard({ icon, title, description, href }: ServiceCard) {
  return (
    <div className="bg-surface-container-lowest dark:bg-slate-700 p-8 rounded-xl shadow-sm">
      <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6 text-on-primary">
        <span className="material-symbols-outlined leading-none">{icon}</span>
      </div>
      <h3 className="text-xl font-bold font-headline mb-3 text-primary dark:text-slate-100">
        {title}
      </h3>
      <p className="text-on-surface-variant dark:text-slate-400 leading-relaxed mb-6">
        {description}
      </p>
      <Link
        to={href}
        className="flex items-center gap-2 text-primary dark:text-slate-300 font-bold text-sm uppercase tracking-wider"
      >
        <span>Saznaj više</span>
        <span className="material-symbols-outlined text-sm leading-none">
          arrow_forward
        </span>
      </Link>
    </div>
  )
}
