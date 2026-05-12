import { Link } from 'react-router-dom'

export default function ProdajaCTASection() {
  return (
    <section className="py-24 px-6 bg-surface dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-secondary font-label font-bold tracking-widest uppercase text-xs block mb-4">
          Kontakt
        </span>
        <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-container dark:text-slate-100 tracking-tighter mb-6">
          Opremite vaš objekt s Volt X-om
        </h2>
        <p className="text-on-surface-variant dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Kontaktirajte nas za besplatnu konzultaciju, prilagođenu ponudu i stručni savjet o izboru opreme koja odgovara vašim potrebama i proračunu.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:0917346442"
            className="inline-flex items-center justify-center gap-2 bg-secondary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary transition-all transform active:scale-95 shadow-lg font-headline"
          >
            <span className="material-symbols-outlined text-xl leading-none">call</span>
            091 734 6442
          </a>
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center gap-2 bg-surface-container-low dark:bg-slate-800 text-on-surface dark:text-slate-100 border border-outline-variant/30 dark:border-white/10 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-md transition-all font-headline"
          >
            <span className="material-symbols-outlined text-xl leading-none">mail</span>
            Pošaljite upit
          </Link>
        </div>

        <div className="mt-16 pt-12 border-t border-outline-variant/20 dark:border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: 'handshake', title: 'Besplatna konzultacija', desc: 'Savjetujemo vas o odabiru opreme bez ikakve obveze.' },
            { icon: 'local_shipping', title: 'Dostava i ugradnja', desc: 'Profesionalna montaža i puštanje opreme u rad.' },
            { icon: 'build_circle', title: 'Servisna podrška', desc: 'Brzi odaziv i popravci nakon kupnje — na jednom mjestu.' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-surface-container-low dark:bg-slate-800 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary-container text-2xl leading-none">{icon}</span>
              </div>
              <h3 className="font-bold font-headline text-primary-container dark:text-slate-100">{title}</h3>
              <p className="text-sm text-on-surface-variant dark:text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
