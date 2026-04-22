const TESTIMONIALS = [
  {
    name: 'Marko Jurić',
    role: 'Vlasnik restorana "Konoba Bura"',
    text: 'Rashladna komora nam je stala u petak navečer. Volt X je bio kod nas za dva sata i riješio problem do ponoći. Spasili su nam cijeli vikend.',
    stars: 5,
  },
  {
    name: 'Ana Kovačević',
    role: 'Privatna korisnica, Zadar',
    text: 'Perilica rublja je počela curiti. Tehničar je došao sljedeće jutro, dijagnosticirao kvar i zamijenio pumpu za sat vremena. Uredno, profesionalno, bez skrivenih troškova.',
    stars: 5,
  },
  {
    name: 'Ivan Perić',
    role: 'Voditelj kuhinje, Hotel Diadora',
    text: 'Imamo ugovor o preventivnom održavanju s Volt X-om već dvije godine. Od tada nismo imali nijedan neplanirani kvar. Vrijednost usluge je neusporediva s cijenom.',
    stars: 5,
  },
  {
    name: 'Petra Blažević',
    role: 'Vlasnica kafića, Biograd',
    text: 'Konvektomatu je otkazala elektronika usred sezone. Volt X je donio originalni modul i ugradio ga isti dan. Brzi, stručni i pristupačni.',
    stars: 5,
  },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className="material-symbols-outlined text-amber-400 text-base leading-none"
          style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
        >
          star
        </span>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="font-body text-[10px] font-bold tracking-[0.25em] uppercase text-secondary block mb-4">
            Što kažu klijenti
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-black tracking-tighter text-on-surface dark:text-slate-100">
            Povjerenje se gradi rezultatima
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-surface-container-low dark:bg-slate-800 rounded-xl p-7 border border-surface-container-highest dark:border-white/10"
            >
              <Stars />
              <p className="font-body text-sm text-on-surface-variant dark:text-slate-400 leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                  <span className="font-headline font-black text-sm text-secondary-container">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-headline font-bold text-[13px] text-on-surface dark:text-slate-100">
                    {t.name}
                  </div>
                  <div className="font-body text-[11px] text-on-surface-variant dark:text-slate-400">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
