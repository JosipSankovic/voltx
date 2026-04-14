const steps = [
  {
    num: '01',
    icon: 'add_call',
    title: 'Poziv',
    desc: 'Javite nam se s opisom kvara i dogovorite termin dolaska.',
    highlight: false,
  },
  {
    num: '02',
    icon: 'search',
    title: 'Dijagnostika',
    desc: 'Dolazimo na adresu i precizno utvrđujemo uzrok kvara.',
    highlight: false,
  },
  {
    num: '03',
    icon: 'build',
    title: 'Popravak',
    desc: 'Brza i efikasna sanacija uz originalne rezervne dijelove.',
    highlight: false,
  },
  {
    num: '04',
    icon: 'task_alt',
    title: 'Testiranje',
    desc: 'Provjera rada aparata i izdavanje pisanog jamstva.',
    highlight: true,
  },
]

export default function SubServiceProcessSection() {
  return (
    <section className="py-24 bg-surface px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-20 tracking-tight font-headline">
          Proces u 4 koraka
        </h2>

        {/* Desktop: 4-column grid */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative p-8 bg-surface-container-low rounded-xl"
            >
              <span className="text-6xl font-black text-outline/20 absolute top-4 right-4 font-headline select-none">
                {step.num}
              </span>
              <span
                className={`material-symbols-outlined text-4xl mb-4 block ${
                  step.highlight ? 'text-secondary-container' : 'text-secondary'
                }`}
              >
                {step.icon}
              </span>
              <h4 className="font-bold text-lg text-primary mb-2 font-headline">
                {step.title}
              </h4>
              <p className="text-sm text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative space-y-12 before:absolute before:left-[19px] before:top-0 before:bottom-0 before:w-[2px] before:bg-surface-container-highest">
          {steps.map((step) => (
            <div key={step.num} className="relative flex items-start space-x-8">
              <div
                className={`z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm font-headline ${
                  step.highlight
                    ? 'bg-secondary text-white'
                    : 'bg-primary-container text-white'
                }`}
              >
                {step.num.replace('0', '')}
              </div>
              <div className="pt-1">
                <h4 className="font-headline font-bold text-xl text-primary">
                  {step.title}
                </h4>
                <p className="text-on-surface-variant mt-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
