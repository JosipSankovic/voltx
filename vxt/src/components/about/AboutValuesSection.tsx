const values = [
  {
    icon: 'bolt',
    title: 'Brzina i Odziv',
    desc: 'U svijetu servisa, vrijeme je ključno. Naš tim je obučen za brzo djelovanje bez kompromisa na kvaliteti.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Inženjerska Preciznost',
    desc: 'Svaki popravak i svaka instalacija izvedena je prema najstrožim industrijskim standardima.',
  },
  {
    icon: 'verified_user',
    title: 'Apsolutna Sigurnost',
    desc: 'Sigurnost korisnika i opreme je naš apsolutni prioritet u svakom koraku projektiranja i izvedbe.',
  }
]

export default function AboutValuesSection() {
  return (
    <section className="py-24 bg-surface-container-low dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-headline font-bold text-primary dark:text-slate-100 mb-4">
            Vrijednosti koje nas pokreću
          </h2>
          <p className="text-on-surface-variant dark:text-slate-400">
            Beskompromisna kvaliteta i povjerenje su temelji svakog našeg
            uspješnog projekta.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
  {values.map((v) => (
    <div
      key={v.title}
      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33%-18px)] bg-surface-container-lowest dark:bg-slate-700 p-8 rounded-xl shadow-sm border-b-2 border-transparent hover:border-secondary transition-all duration-300"
    >
      <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg mb-6">
        <span
          className="material-symbols-outlined text-secondary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {v.icon}
        </span>
      </div>

      <h3 className="font-headline font-bold text-xl text-primary dark:text-slate-100 mb-3">
        {v.title}
      </h3>

      <p className="text-on-surface-variant dark:text-slate-400 text-sm">
        {v.desc}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  )
}
