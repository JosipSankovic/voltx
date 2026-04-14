// "Why Volt X" section – dark navy background on desktop with image
// Mobile: light section with 2x2 icon grid

const TECHNICIAN_IMAGE = '/pexels-bulat843-1243575272-34054468.webp'

interface Feature {
  icon: string
  title: string
  description: string
}

const desktopFeatures: Feature[] = [
  {
    icon: 'verified',
    title: 'Kvaliteta i pouzdanost',
    description: 'Surađujemo s renomiranim proizvođačima, a tehničari koriste najmoderniju opremu i tehnike.',
  },
  {
    icon: 'speed',
    title: 'Brzina i efikasnost',
    description: 'Minimalno vrijeme zastoja za Vaše poslovanje uz brzu dijagnostiku.',
  },
  {
    icon: 'military_tech',
    title: 'Stručnost i iskustvo',
    description: 'Višegodišnje iskustvo u održavanju najzahtjevnijih sustava.',
  },
  {
    icon: 'tune',
    title: 'Prilagođena rješenja',
    description: 'Svako rješenje prilagođavamo vašim specifičnim potrebama – bez obzira na veličinu poslovanja.',
  },
]

interface MobileFeature {
  icon: string
  title: string
  description: string
}

const mobileFeatures: MobileFeature[] = [
  {
    icon: 'speed',
    title: 'Brza Intervencija',
    description: 'Dolazimo u najkraćem mogućem roku.',
  },
  {
    icon: 'verified',
    title: 'Garancija',
    description: 'Kvaliteta osigurana originalnim dijelovima.',
  },
  {
    icon: 'home_repair_service',
    title: 'Stručnost',
    description: 'Višegodišnje iskustvo u industriji.',
  },
  {
    icon: 'euro',
    title: 'Transparentnost',
    description: 'Jasne cijene bez skrivenih troškova.',
  },
]

export default function WhyVoltXSection() {
  return (
    <>
      {/* ── DESKTOP ───────────────────────────────────────────────────── */}
      <section className="hidden md:block py-24 bg-primary text-white overflow-hidden relative">
        {/* Decorative radial glow */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: text + features */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter mb-8 leading-tight">
                Zašto odabrati Volt X kao svog partnera?
              </h2>
              <p className="text-primary-fixed-dim text-lg mb-12 max-w-lg">
                Naš pristup temelji se na tehničkoj preciznosti i dubokom
                razumijevanju operativnih potreba modernih kuhinja.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {desktopFeatures.map((f) => (
                  <div key={f.title} className="space-y-4">
                    <div className="flex items-center gap-3 text-secondary">
                      <span className="material-symbols-outlined font-bold leading-none">
                        {f.icon}
                      </span>
                      <h4 className="font-headline font-bold text-white uppercase tracking-wider text-sm">
                        {f.title}
                      </h4>
                    </div>
                    <p className="text-on-primary-container text-sm">
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image + floating stat badge */}
            <div className="relative">
              <div className="aspect-square bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl rotate-3">
                <img
                  src={TECHNICIAN_IMAGE}
                  alt="Stručni tehničar pri radu na profesionalnoj opremi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-secondary-container p-8 rounded-xl shadow-2xl -rotate-3">
                <div className="text-white font-headline">
                  <div className="text-4xl font-black">10+</div>
                  <div className="text-sm font-bold opacity-80">
                    Godina iskustva
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE ────────────────────────────────────────────────────── */}
      <section className="md:hidden py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-headline text-primary mb-4">
            Zašto odabrati Volt X?
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {mobileFeatures.map((f) => (
            <div
              key={f.title}
              className="bg-surface-container p-6 rounded-xl flex flex-col items-center text-center"
            >
              <span className="material-symbols-outlined text-secondary text-3xl mb-4 leading-none">
                {f.icon}
              </span>
              <h4 className="font-bold text-sm font-headline uppercase mb-2">
                {f.title}
              </h4>
              <p className="text-xs text-on-surface-variant">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
