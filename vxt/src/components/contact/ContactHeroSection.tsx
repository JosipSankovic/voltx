export default function ContactHeroSection() {
  return (
    <>
      {/* Desktop hero */}
      <header className="hidden md:block relative pt-32 pb-16 px-6 bg-surface-container-low dark:bg-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary dark:text-slate-100 mb-4 leading-none font-headline">
            Kontaktirajte nas
          </h1>
          <p className="text-on-surface-variant dark:text-slate-400 max-w-xl text-lg md:text-xl font-medium leading-relaxed">
            Vaš partner za brza i pouzdana rješenja servisiranja u Zadru i okolici. Dostupni svakodnevno, tu kada nas trebate.
          </p>
        </div>
        {/* Decorative icon */}
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none">
          <span
            className="material-symbols-outlined leading-none"
            style={{ fontSize: '300px', fontVariationSettings: "'wght' 100" }}
          >
            electrical_services
          </span>
        </div>
      </header>

      {/* Mobile hero */}
      <section className="md:hidden px-6 mb-12 pt-24">
        <div className="relative overflow-hidden rounded-xl bg-primary-container p-8 min-h-[260px] flex flex-col justify-end">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent" />
          </div>
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-secondary-container text-white text-[0.7rem] font-bold uppercase tracking-widest rounded-sm mb-4">
              Kontakt
            </span>
            <h1 className="text-4xl font-black text-white font-headline leading-tight tracking-tighter">
              Stupite u <br />
              kontakt s nama
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}
