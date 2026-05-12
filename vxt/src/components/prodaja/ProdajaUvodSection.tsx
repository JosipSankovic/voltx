export default function ProdajaUvodSection() {
  return (
    <section className="py-20 px-6 bg-surface dark:bg-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-secondary font-label font-bold tracking-widest uppercase text-xs block mb-4">
            Zašto Volt X
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-container dark:text-slate-100 tracking-tighter mb-6 leading-tight">
            Oprema koja radi — dan za danom
          </h2>
          <p className="text-on-surface-variant dark:text-slate-400 text-base leading-relaxed mb-4">
            Volt X nudi kompletan asortiman profesionalne ugostiteljske opreme — od industrijskih perilica i rashladnih pultova do pizza peći i inox stolova. Surađujemo s vodećim europskim proizvođačima kako bismo vam osigurali pouzdanu opremu koja podnosi zahtjeve svakodnevnog poslovanja.
          </p>
          <p className="text-on-surface-variant dark:text-slate-400 text-base leading-relaxed mb-8">
            Svaki komad opreme dolazi uz stručno savjetovanje o izboru, profesionalnu ugradnju i dugoročnu servisnu podršku na jednom mjestu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {[
              { icon: 'verified', text: 'Certificirani proizvodi' },
              { icon: 'support_agent', text: 'Servisna podrška uključena' },
              { icon: 'local_shipping', text: 'Dostava i montaža' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-container text-xl leading-none">{icon}</span>
                <span className="text-sm font-bold text-on-surface dark:text-slate-300 font-headline">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { value: '13+', label: 'kategorija opreme' },
            { value: '10+', label: 'godina iskustva' },
            { value: '24h', label: 'servisni odziv' },
            { value: '100%', label: 'certificirani tehnička podrška' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="bg-surface-container-low dark:bg-slate-800 rounded-xl p-6 border border-outline-variant/20 dark:border-white/5"
            >
              <p className="text-3xl font-black font-headline text-secondary-container mb-1">{value}</p>
              <p className="text-sm text-on-surface-variant dark:text-slate-400 leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
