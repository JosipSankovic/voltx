interface Kategorija {
  icon: string
  naziv: string
  opis: string
  istaknuto?: boolean
}

const kategorije: Kategorija[] = [
  {
    icon: 'dishwasher',
    naziv: 'Perilice posuđa',
    opis: 'Industrijske perilice kapuljače, tunelske i frontalno punjene perilice za restorane i hotele.',
  },
  {
    icon: 'wine_bar',
    naziv: 'Perilice čaša',
    opis: 'Kompaktne glasswasher jedinice za brzu i higijensku obradu čaša u kafićima i barovima.',
  },
  {
    icon: 'ac_unit',
    naziv: 'Ledomati',
    opis: 'Profesionalni uređaji za proizvodnju leda — kockice, ljuskice i nugget led za svaku namjenu.',
  },
  {
    icon: 'outdoor_grill',
    naziv: 'Roštilji',
    opis: 'Profesionalni električni, plinski i kontaktni roštilji za pripremu mesa, ribe i povrća.',
  },
  {
    icon: 'oven',
    naziv: 'Konvektomati',
    opis: 'Kombinirane parne pećnice (combi ovens) za precizno pečenje, kuhanje na pari i regeneraciju jela.',
  },
  {
    icon: 'blender',
    naziv: 'Mikseri za tijesto',
    opis: 'Spiralni i planetarni mikseri raznih kapaciteta za pizzerije, pekare i slastičarnice.',
  },
  {
    icon: 'local_pizza',
    naziv: 'Pizza peći',
    opis: 'Dek peći i konvekcijske pizza peći za savršenu koru — plinski i električni modeli.',
  },
  {
    icon: 'content_cut',
    naziv: 'Rezači',
    opis: 'Industrijski rezači hrane, mesne rezačice i multipraktici za ubrzanu pripremu namirnica.',
  },
  {
    icon: 'workspaces',
    naziv: 'Oprema od nehrđajućeg čelika',
    opis: 'Inox sudoperi, umivaonici, postolja za uređaje i prilagođena inox oprema za profesionalne kuhinje.',
  },
  {
    icon: 'table_restaurant',
    naziv: 'Radni stolovi',
    opis: 'Inox radni i priprema stolovi raznih dimenzija, s ladicama, policama i posebnim završnim obradama.',
  },
  {
    icon: 'kitchen',
    naziv: 'Zidni ormari',
    opis: 'Nehrđajući zidni ormari za pohranu namirnica, opreme i pribora u profesionalnim kuhinjama.',
  },
  {
    icon: 'shelves',
    naziv: 'Police',
    opis: 'Višerazinske inox i žičane police za skladišta, hladnjače i kuhinjske prostorije — prilagodljive dimenzije.',
  },
  {
    icon: 'countertops',
    naziv: 'Rashladni pultovi po mjeri',
    opis: 'Projektiranje i izrada rashladnih prodajnih i uslužnih pultova prema tlocrtu i zahtjevima vašeg objekta.',
    istaknuto: true,
  },
]

export default function ProdajaKategorijeSection() {
  const standardne = kategorije.filter((k) => !k.istaknuto)
  const istaknuta = kategorije.filter((k) => k.istaknuto)

  return (
    <section id="kategorije" className="py-24 px-6 bg-surface-container-low dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <span className="text-secondary font-label font-bold tracking-widest uppercase text-xs block mb-4">
            Asortiman
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-container dark:text-slate-100 tracking-tighter mb-4">
            Kategorije opreme
          </h2>
          <p className="text-on-surface-variant dark:text-slate-400 text-base leading-relaxed">
            Sve što profesionalna kuhinja treba — na jednom mjestu. Kontaktirajte nas za detaljne specifikacije i cijene.
          </p>
        </div>

        {/* Standard grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
          {standardne.map((k) => (
            <KategorijaKartica key={k.naziv} {...k} />
          ))}
        </div>

        {/* Featured card — full width on mobile, spans 2 cols center on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-start-1 lg:col-span-2">
            {istaknuta.map((k) => (
              <KategorijaKarticaIstaknuta key={k.naziv} {...k} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function KategorijaKartica({ icon, naziv, opis }: Kategorija) {
  return (
    <div className="group bg-surface-container-lowest dark:bg-slate-700 rounded-xl p-6 border border-outline-variant/20 dark:border-white/5 hover:shadow-xl hover:border-secondary-container/40 transition-all duration-200">
      <div className="w-12 h-12 bg-primary-container text-white rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
        <span className="material-symbols-outlined text-2xl leading-none">{icon}</span>
      </div>
      <h3 className="text-lg font-bold font-headline text-primary-container dark:text-slate-100 mb-2 group-hover:text-secondary transition-colors">
        {naziv}
      </h3>
      <p className="text-sm text-on-surface-variant dark:text-slate-400 leading-relaxed">
        {opis}
      </p>
    </div>
  )
}

function KategorijaKarticaIstaknuta({ icon, naziv, opis }: Kategorija) {
  return (
    <div className="relative overflow-hidden bg-primary-container rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-secondary-container rounded-full" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-secondary rounded-full" />
      </div>
      <div className="relative z-10 w-16 h-16 bg-secondary-container rounded-xl flex items-center justify-center flex-shrink-0">
        <span className="material-symbols-outlined text-white text-3xl leading-none">{icon}</span>
      </div>
      <div className="relative z-10 flex-1">
        <span className="inline-block mb-2 px-2 py-0.5 bg-secondary-container/30 text-secondary-fixed text-xs font-bold tracking-widest uppercase rounded font-label">
          Usluga po mjeri
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-headline text-white mb-3 tracking-tight">
          {naziv}
        </h3>
        <p className="text-on-primary-container/80 text-base leading-relaxed max-w-2xl">
          {opis}
        </p>
      </div>
      <div className="relative z-10 flex-shrink-0">
        <a
          href="tel:0917346442"
          className="inline-flex items-center gap-2 bg-secondary-container text-white px-6 py-3 rounded-lg font-bold font-headline hover:bg-secondary transition-colors whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-base leading-none">call</span>
          Zatražite ponudu
        </a>
      </div>
    </div>
  )
}
