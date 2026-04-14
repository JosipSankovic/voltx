export default function AboutHeroSection() {
  return (
    <>
      {/* Desktop hero: full-viewport dark overlay image */}
      <section className="hidden md:flex relative h-[716px] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80"
            alt="Volt X tim u radionici"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-white font-headline font-extrabold text-8xl tracking-tighter mb-4">
            O Volt X-u
          </h1>
          <p className="text-primary-fixed-dim max-w-xl text-lg font-medium leading-relaxed">
            Vaš pouzdani partner za servis i popravak ugostiteljske opreme i
            kućanskih aparata u Zadru i okolici. Spajamo industrijsku preciznost
            s lokalnom posvećenošću.
          </p>
        </div>
      </section>

      {/* Mobile hero: dark gradient, stacked */}
      <section
        className="md:hidden px-6 py-16"
        style={{ background: 'linear-gradient(135deg, #000F22 0%, #0A2540 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-3 py-1 bg-secondary-container text-white text-xs font-bold uppercase tracking-widest rounded-sm mb-6">
            Povijest i Vizija
          </span>
          <h1 className="text-4xl font-headline font-bold tracking-tight mb-8 leading-tight text-white">
            Oblikujemo budućnost s tehničkom preciznošću.
          </h1>
          <p className="text-on-primary-container text-lg leading-relaxed max-w-2xl">
            Volt X je nastao iz strasti prema inženjerskoj izvrsnosti. Naš put
            je definiran stalnim učenjem i implementacijom najnaprednijih
            tehničkih rješenja.
          </p>
        </div>
      </section>
    </>
  )
}
