export default function AboutStorySection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop: side-by-side text + image */}
        <div className="hidden md:grid grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="uppercase tracking-[0.2em] font-bold text-secondary font-headline text-sm">
              Naša Priča
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">
              Više od desetljeća tehničke izvrsnosti
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                Osnovan s vizijom pružanja vrhunskih usluga servisiranja, Volt X
                je izrastao iz male obiteljske radionice u vodećeg pružatelja
                tehničkih rješenja u Zadarskoj županiji.
              </p>
              <p>
                Naša misija je jednostavna: osigurati sigurnost, učinkovitost i
                inovaciju u svakom ugostiteljskom objektu i domu u koji uđemo.
                Svaki projekt tretiramo kao vlastiti, koristeći samo
                najkvalitetnije materijale i najnovije industrijske standarde.
              </p>
              <p>
                Tim stručnjaka pod vodstvom iskusnih inženjera svakodnevno radi
                na unapređenju lokalne infrastrukture, pružajući podršku našim
                sugrađanima 24 sata dnevno.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-surface-container-high rounded-xl -z-10 translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
              alt="Tehničar na djelu"
              className="w-full aspect-[4/5] object-cover rounded-xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mobile: image on top, text below */}
        <div className="md:hidden">
          <div className="mb-12 rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
              alt="Volt X Inženjering"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-1 gap-8 items-start">
            <h2 className="text-3xl font-headline font-bold tracking-tight text-primary">
              Naša Priča
            </h2>
            <div className="space-y-6 text-on-surface-variant">
              <p>
                Krenuli smo kao mali tim stručnjaka s jasnom misijom: osigurati
                pouzdanu tehničku podršku za modernu industriju. Danas smo
                prepoznati po rješenjima koja optimiziraju rad i povećavaju
                sigurnost.
              </p>
              <p>
                Vjerujemo da svaki projekt zaslužuje individualan pristup i
                materijale najviše kvalitete, bez obzira na opseg zahvata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
