import { useEffect, useRef, useState } from 'react'

const TECHNICIAN_IMAGE = 'images/pexels-bulat843-1243575272-34054468.webp'

function useAnimatedCounter(target: number, duration = 1600) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let start: number | undefined
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return [count, ref] as const
}

interface Feature {
  icon: string
  title: string
  description: string
}

const desktopFeatures: Feature[] = [
  {
    icon: 'verified',
    title: 'Kvaliteta i pouzdanost',
    description: 'Koristimo isključivo originalne rezervne dijelove najviše klase.',
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
  const [yearsCount, yearsRef] = useAnimatedCounter(10)
  const [clientsCount, clientsRef] = useAnimatedCounter(500)

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

            {/* Right: image + animated counter strip */}
            <div className="relative pb-16">
              <div className="aspect-square bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl rotate-3">
                <img
                  src={TECHNICIAN_IMAGE}
                  alt="Stručni tehničar pri radu na profesionalnoj opremi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Split animated counter strip */}
              <div className="absolute bottom-0 left-0 right-0 flex shadow-2xl">
                <div
                  ref={yearsRef}
                  className="flex-1 px-5 py-4"
                  style={{
                    background: '#fe6a34',
                    borderRadius: '12px 0 0 12px',
                    borderRight: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="font-headline text-3xl font-black text-white leading-none">
                    {yearsCount}+
                  </div>
                  <div className="font-body text-[11px] font-semibold text-white/70 mt-1">
                    Godina iskustva
                  </div>
                </div>
                <div
                  ref={clientsRef}
                  className="flex-1 px-5 py-4"
                  style={{
                    background: '#0a2540',
                    borderRadius: '0 12px 12px 0',
                  }}
                >
                  <div className="font-headline text-3xl font-black text-white leading-none">
                    {clientsCount}+
                  </div>
                  <div className="font-body text-[11px] font-semibold text-white/70 mt-1">
                    Zadovoljnih klijenata
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE ────────────────────────────────────────────────────── */}
      <section className="md:hidden py-20 px-6 max-w-7xl mx-auto dark:bg-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-headline text-primary dark:text-slate-100 mb-4">
            Zašto odabrati Volt X?
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {mobileFeatures.map((f) => (
            <div
              key={f.title}
              className="bg-surface-container dark:bg-slate-800 p-6 rounded-xl flex flex-col items-center text-center"
            >
              <span className="material-symbols-outlined text-secondary text-3xl mb-4 leading-none">
                {f.icon}
              </span>
              <h4 className="font-bold text-sm font-headline uppercase mb-2 dark:text-slate-100">
                {f.title}
              </h4>
              <p className="text-xs text-on-surface-variant dark:text-slate-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
