import { Link } from 'react-router-dom'

export const serviceItems = [
  {
    slug: 'rashladni-sustavi',
    icon: 'kitchen',
    title: 'Rashladni sustavi',
    desc: 'Servis i punjenje plina za komore, frižidere, ledomate i vitrine.',
  },
  {
    slug: 'termicka-oprema',
    icon: 'oven',
    title: 'Termička oprema',
    desc: 'Popravak pećnica, konvektomata, štednjaka i industrijskih friteza.',
  },
  {
    slug: 'perilice-posuda',
    icon: 'dishwasher_gen',
    title: 'Perilice posuđa',
    desc: 'Ugradnja dozatora, čišćenje kamenca, ...',
  },
  {
    slug: 'rezervni-dijelovi',
    icon: 'settings',
    title: 'Rezervni dijelovi',
    desc: 'Široka paleta rezervnih dijelova na skladištu za brzu zamjenu.',
  },
  {
    slug: 'preventivno-odrzavanje',
    icon: 'analytics',
    title: 'Preventiva',
    desc: 'Ugovorno održavanje i redoviti pregledi za sprečavanje kvarova.',
  },
]

export default function ServiceHubGridSection() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-secondary font-label text-xs uppercase tracking-widest font-bold block mb-4">
              Naše Usluge
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary tracking-tight">
              Što sve servisiramo
            </h2>
          </div>
          <p className="text-on-surface-variant font-body max-w-sm">
            Specijalizirani smo za održavanje kompletne linije termičke i
            rashladne opreme vodećih svjetskih proizvođača.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((item) => (
            <Link
              key={item.slug}
              to={`/usluge/${item.slug}`}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-b-4 border-transparent block hover:border-secondary transition-colors"
            >
              <div className="w-14 h-14 bg-surface-container-high rounded-lg flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              <span className="inline-flex items-center gap-2 text-secondary font-bold text-sm">
                Saznajte više o {item.title.toLowerCase()}
                <span className="material-symbols-outlined text-base leading-none">
                  arrow_forward
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
