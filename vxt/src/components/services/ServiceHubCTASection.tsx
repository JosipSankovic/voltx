export default function ServiceHubCTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto bg-orange-600 rounded-3xl p-12 md:p-20 text-center text-white shadow-[0_20px_40px_rgba(171,53,0,0.3)]">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8">
          Pokvarila se profesionalna oprema?
        </h2>
        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
          Ne gubite vrijeme i novac. Naši stručnjaci su spremni za intervenciju
          odmah.
        </p>
        <a
          href="tel:0917346442"
          className="text-4xl md:text-6xl font-headline font-black tracking-tighter hover:scale-105 transition-transform flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-4xl md:text-5xl mr-4">
            call
          </span>
          091 734 6442
        </a>
        <p className="mt-8 text-sm font-headline font-bold uppercase tracking-widest opacity-75">
          Dostupni 24 sata dnevno za hitne slučajeve
        </p>
      </div>
    </section>
  )
}
