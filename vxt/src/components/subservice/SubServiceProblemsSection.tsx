import type { ServiceData } from '../../data/serviceData'

interface Props {
  service: ServiceData
}

export default function SubServiceProblemsSection({ service }: Props) {
  return (
    <section className="py-24 bg-surface-container-low dark:bg-slate-800 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-4">
            Dijagnostika
          </span>
          <h2 className="text-4xl font-bold text-primary dark:text-slate-100 tracking-tight font-headline">
            Najčešći kvarovi koje rješavamo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-surface-container-lowest dark:bg-slate-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center space-x-6"
            >
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg flex-shrink-0">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {problem.icon}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-primary dark:text-slate-100 text-lg font-headline">
                  {problem.title}
                </h4>
                <p className="text-on-surface-variant dark:text-slate-400 text-sm">
                  {problem.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
