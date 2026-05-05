const steps = [
  {
    num: '1',
    title: 'Poziv i zakazivanje',
    desc: 'Kontaktirate nas telefonom ili emailom, dogovaramo termin dolaska u najkraćem mogućem roku.',
    highlight: false,
  },
  {
    num: '2',
    title: 'Dolazak na lokaciju',
    desc: 'Naš tim dolazi u najkraćem roku s potrebnom opremom i rezervnim dijelovima.',
    highlight: false,
  },
  {
    num: '3',
    title: 'Dijagnoza i popravak',
    desc: 'Na licu mjesta dijagnosticiramo kvar i vršimo popravak ili zamjenu potrebnih dijelova.',
    highlight: false,
  },
  {
    num: '4',
    title: 'Testiranje',
    desc: 'Provjera rada uređaja u radnim uvjetima.',
    highlight: true,
  },
]

export default function ServiceHubProcessSection() {
  return (
    <section className="py-24 bg-surface dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline text-4xl font-bold text-primary dark:text-slate-100 mb-16 text-center">
          Proces servisiranja
        </h2>

        {/* Desktop: horizontal steps with connector line */}
        <div className="hidden md:grid grid-cols-4 gap-4 relative">
          <div className="absolute top-8 left-0 w-full h-[2px] bg-surface-container-high dark:bg-slate-700 z-0" />
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative z-10 text-center px-4"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg ${
                  step.highlight
                    ? 'bg-secondary-container text-white'
                    : 'bg-primary-container text-white'
                }`}
              >
                <span className="font-headline font-bold text-xl">
                  {step.num}
                </span>
              </div>
              <h4 className="font-bold text-primary dark:text-slate-100 mb-2 font-headline">
                {step.title}
              </h4>
              <p className="text-sm text-on-surface-variant dark:text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical alternating steps */}
        <div className="md:hidden max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-1.5 bg-secondary mx-auto" />
          </div>
          <div className="space-y-12 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-outline-variant/30 dark:bg-white/10" />
            {steps.map((step) => (
              <div
                key={step.num}
                className="relative flex items-start space-x-8"
              >
                <div
                  className={`z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-headline font-bold text-sm shadow-lg ${
                    step.highlight
                      ? 'bg-secondary text-white'
                      : 'bg-primary-container text-white'
                  }`}
                >
                  {step.num}
                </div>
                <div className="pt-1">
                  <h4 className="font-headline font-bold text-xl text-primary dark:text-slate-100">
                    {step.title}
                  </h4>
                  <p className="text-on-surface-variant dark:text-slate-400 mt-2 text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
