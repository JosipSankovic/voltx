import { Link } from 'react-router-dom'

export default function ProdajaHeroSection() {
  return (
    <>
      {/* Desktop hero */}
      <section className="hidden md:flex relative w-full overflow-hidden bg-primary-container min-h-[520px] items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/barbara-burgess-v9jraQ0tM9A-unsplash.webp"
            alt="Ugostiteljska oprema"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <nav className="flex mb-8 space-x-2 text-sm font-medium text-on-primary-container/80 tracking-wide uppercase">
            <Link to="/" className="hover:text-white transition-colors">Početna</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-white">Prodaja opreme</span>
          </nav>
          <span className="inline-block mb-4 px-3 py-1 bg-secondary-container/20 border border-secondary-container/40 text-secondary-fixed text-xs font-bold tracking-widest uppercase rounded font-label">
            Prodaja
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tighter font-headline">
            Prodaja ugostiteljske<br />opreme
          </h1>
          <p className="text-on-primary-container/80 text-lg max-w-xl leading-relaxed mb-10">
            Kompletan asortiman profesionalne opreme za restorane, hotele, kafiće i sve ugostiteljske objekte.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:0917346442"
              className="inline-flex items-center gap-2 bg-secondary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary transition-all transform active:scale-95 shadow-lg font-headline"
            >
              <span className="material-symbols-outlined text-xl leading-none">call</span>
              Zatražite ponudu
            </a>
            <a
              href="#kategorije"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all font-headline"
            >
              Pogledajte asortiman
              <span className="material-symbols-outlined text-xl leading-none">expand_more</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mobile hero */}
      <section className="md:hidden px-6 py-12 pt-28 bg-surface dark:bg-slate-900 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-secondary-fixed text-on-secondary-fixed-variant text-[0.75rem] font-bold tracking-wider uppercase font-label rounded">
              Prodaja opreme
            </span>
            <h1 className="font-headline text-4xl font-extrabold text-primary dark:text-slate-100 leading-[1.1] tracking-tighter">
              Prodaja ugostiteljske opreme
            </h1>
            <p className="text-on-surface-variant dark:text-slate-400 text-base leading-relaxed">
              Profesionalna oprema za restorane, hotele, kafiće i sve ugostiteljske objekte.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/images/barbara-burgess-v9jraQ0tM9A-unsplash.webp"
              alt="Ugostiteljska oprema"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
          <a
            href="tel:0917346442"
            className="inline-flex items-center justify-center gap-2 bg-secondary-container text-white px-6 py-4 rounded-lg font-bold text-base font-headline"
          >
            <span className="material-symbols-outlined leading-none">call</span>
            Zatražite ponudu
          </a>
        </div>
      </section>
    </>
  )
}
