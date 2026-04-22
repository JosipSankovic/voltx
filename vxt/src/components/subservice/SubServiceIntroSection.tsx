import type { ServiceData } from '../../data/serviceData'

interface Props {
  service: ServiceData
}

export default function SubServiceIntroSection({ service }: Props) {
  return (
    <section className="py-24 bg-surface dark:bg-slate-900 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: text */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary dark:text-slate-100 tracking-tight font-headline">
            {service.introHeading}
          </h2>
          {service.introText.map((p, i) => (
            <p key={i} className="text-on-surface-variant dark:text-slate-400 text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Right: why choose us */}
        <div className="bg-surface-container-low dark:bg-slate-800 p-8 rounded-xl border-l-4 border-secondary shadow-sm">
          <h3 className="text-xl font-bold text-primary dark:text-slate-100 mb-4 flex items-center gap-2 font-headline">
            <span className="material-symbols-outlined text-secondary">
              verified
            </span>
            Zašto odabrati Volt X?
          </h3>
          <ul className="space-y-4 text-on-surface-variant dark:text-slate-400">
            {service.whyItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container flex-shrink-0">
                  check_circle
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
