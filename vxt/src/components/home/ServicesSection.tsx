// Services bento grid (desktop) / stacked cards (mobile)

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
    href: '/usluge',
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
    href: '/usluge',
  },
  {
    icon: 'home_repair_service',
    title: 'Servis kućanskih aparata',
    description:
      'Brz i pouzdan servis perilica, pećnica i ostale bijele tehnike u Vašem domu.',
    href: '/usluge',
  },
]

// Mobile-specific service cards (3 cards per mobile design)
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
    href: '/usluge',
  },
  {
    icon: 'ac_unit',
    title: 'Rashladni Sustavi',
    description:
      'Montaža i servis klima uređaja te rashladnih komora za komercijalnu i privatnu upotrebu uz jamstvo na rad.',
    href: '/usluge',
  },
]

export default function ServicesSection() {
  return (
    <>
      {/* ── DESKTOP SERVICES ──────────────────────────────────────────── */}
      <section className="hidden md:block py-24 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-secondary font-label font-bold tracking-widest uppercase text-xs block mb-4">
              Naša Ekspertiza
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-container tracking-tighter">
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
      <section className="md:hidden bg-surface-container-low py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-secondary font-label">
              Naše Usluge
            </span>
            <h2 className="text-3xl font-bold font-headline mt-2 text-primary">
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
    <div className="group bg-surface-container-low p-8 rounded-xl transition-all hover:bg-white hover:shadow-xl border-b-4 border-transparent hover:border-secondary">
      <div className="w-14 h-14 bg-primary-container text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-3xl leading-none">{icon}</span>
      </div>
      <h3 className="text-xl font-bold font-headline mb-3 text-primary-container">
        {title}
      </h3>
      <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
        {description}
      </p>
      <a
        href={href}
        className="inline-flex items-center text-secondary font-bold text-sm gap-2 hover:gap-3 transition-all"
      >
        Saznajte više{' '}
        <span className="material-symbols-outlined text-base leading-none">
          arrow_forward
        </span>
      </a>
    </div>
  )
}

function MobileServiceCard({ icon, title, description, href }: ServiceCard) {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
      <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6 text-on-primary">
        <span className="material-symbols-outlined leading-none">{icon}</span>
      </div>
      <h3 className="text-xl font-bold font-headline mb-3 text-primary">
        {title}
      </h3>
      <p className="text-on-surface-variant leading-relaxed mb-6">
        {description}
      </p>
      <a
        href={href}
        className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider"
      >
        <span>Saznaj više</span>
        <span className="material-symbols-outlined text-sm leading-none">
          arrow_forward
        </span>
      </a>
    </div>
  )
}
