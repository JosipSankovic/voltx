const areas = [
  'Grad Zadar',
  'Biograd na Moru',
  'Otoci Ugljan i Pašman',
  'Zaleđe i Ravni Kotari',
]

export default function AboutServiceAreaSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary-container text-white rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Text side */}
          <div className="p-12 lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center space-x-2 text-secondary-container mb-6">
              <span className="material-symbols-outlined">location_on</span>
              <span className="uppercase tracking-widest font-bold text-sm">
                Pokrivenost
              </span>
            </div>
            <h2 className="text-4xl font-headline font-extrabold mb-6 leading-tight">
              Pokrivamo cijelu Zadarsku županiju
            </h2>
            <p className="text-on-primary-container text-lg mb-8">
              Od otoka do zaleđa, Volt X tim je na terenu. Naša mobilna ekipa
              opremljena je za brze intervencije i velike projekte na području
              Zadra, Biograda, Nina i cijelog zaleđa.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {areas.map((area) => (
                <li key={area} className="flex items-center space-x-2">
                  <span className="material-symbols-outlined text-secondary-container text-sm">
                    check_circle
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Map / image side */}
          <div className="lg:w-1/2 h-[400px] lg:h-auto min-h-[400px] relative">
            <img
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?w=800&q=80"
              alt="Karta Zadarske županije"
              className="w-full h-full object-cover grayscale opacity-60"
            />
            <div className="absolute inset-0 bg-primary/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-secondary-container/90 backdrop-blur px-6 py-4 rounded-xl flex items-center space-x-3 text-white font-bold shadow-lg">
                <span className="material-symbols-outlined">directions_car</span>
                <span>Dostupni smo na terenu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
