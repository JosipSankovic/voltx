// Hero section – desktop: full-screen with dark overlay image + large headline
// Mobile: lighter, stacked layout with image card below text (per mobile design)

const HERO_IMAGE_DESKTOP = '/barbara-burgess-v9jraQ0tM9A-unsplash.jpg'
const HERO_IMAGE_MOBILE = HERO_IMAGE_DESKTOP

export default function HeroSection() {
  return (
    <>
      {/* ── DESKTOP HERO ──────────────────────────────────────────────── */}
      <section className="relative hidden md:flex min-h-screen items-center pt-20 overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE_DESKTOP}
            alt="Moderna profesionalna kuhinja s industrijskom opremom"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent opacity-60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          <div className="lg:col-span-8 space-y-8">
            {/* 24/7 badge */}
            <div className="inline-flex items-center gap-4 py-2 px-4 bg-secondary/20 border border-secondary/30 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary-fixed text-xs font-bold tracking-widest uppercase font-label">
                Dostupni 24/7 za hitne intervencije
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-black text-white font-headline leading-[0.95] tracking-tighter">
              Servis ugostiteljske opreme i kućanskih aparata u Zadru
            </h1>

            {/* Sub */}
            <p className="text-xl text-surface-container-highest max-w-2xl font-light leading-relaxed">
              Brza intervencija, stručni tehničari, pouzdana rješenja. Vaš
              partner za besprijekoran rad profesionalne kuhinje i doma.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/kontakt"
                className="px-10 py-5 bg-secondary-container text-white font-headline font-extrabold text-lg rounded-md hover:brightness-110 transition-all shadow-[0_20px_40px_rgba(171,53,0,0.3)] text-center"
              >
                Zatražite uslugu
              </a>
              <a
                href="tel:0917346442"
                className="px-10 py-5 border-2 border-white/20 text-white font-headline font-extrabold text-lg rounded-md hover:bg-white/10 transition-all text-center flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined leading-none">call</span>
                091 734 6442
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
              <TrustBadge icon="bolt" label="Brza reakcija" />
              <TrustBadge icon="engineering" label="Stručni tim" />
              <TrustBadge icon="location_on" label="Zadar i okolica" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE HERO ───────────────────────────────────────────────── */}
      <section className="md:hidden px-6 pt-28 pb-12">
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-surface-container-high px-3 py-1 rounded-full w-fit">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-on-surface-variant font-label">
              Dostupni u Zadru i okolici
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[2.75rem] leading-[1.1] font-bold tracking-tighter font-headline text-primary">
            Servis ugostiteljske opreme i kućanskih aparata u Zadru
          </h1>

          {/* Sub */}
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
            Pružamo brzu i stručnu tehničku podršku za vašu profesionalnu
            kuhinju ili kućanstvo. Kvaliteta, brzina i pouzdanost su naš
            prioritet.
          </p>

          {/* Hero image card */}
          <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-sm relative mt-4">
            <img
              src={HERO_IMAGE_MOBILE}
              alt="Tehničar popravlja industrijsku opremu"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
        </div>
      </section>
    </>
  )
}

function TrustBadge({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-white/90">
      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 shrink-0">
        <span className="material-symbols-outlined text-secondary leading-none">
          {icon}
        </span>
      </div>
      <span className="font-headline font-bold tracking-tight">{label}</span>
    </div>
  )
}
