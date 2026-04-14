const stats = [
  { value: '24/7', label: 'Hitne intervencije' },
  { value: '98%', label: 'Uspješnih popravaka' },
]

export default function ServiceHubIntroSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <span className="inline-block px-3 py-1 bg-primary-container text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-6">
            B2B Rješenja
          </span>
          <h2 className="font-headline text-4xl font-bold text-primary mb-6 leading-tight">
            Tehnička podrška na koju se možete osloniti
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              U svijetu ugostiteljstva, zastoj u radu opreme znači gubitak
              prihoda. Volt X pruža specijaliziranu uslugu održavanja za
              restorane, hotele, kafiće i industrijske pogone.
            </p>
            <p>
              Naši tehničari posjeduju dugogodišnje iskustvo u dijagnostici i
              popravcima kako bismo osigurali dugovječnost i
              pouzdanost vaših uređaja.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="border-l-4 border-secondary pl-4">
                <div className="text-3xl font-headline font-bold text-primary">
                  {s.value}
                </div>
                <div className="text-sm text-on-surface-variant font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
            <img
              src="/pexels-bulat843-1243575272-34054468.webp"
              alt="Tehničar u akciji"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary-container p-8 text-white max-w-[240px] rounded-lg hidden md:block">
            <p className="text-sm font-light italic">
              "Naš cilj je vaša operativna izvrsnost."
            </p>
            <p className="mt-4 font-headline font-bold">
              — Tehnički tim Volt X
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
