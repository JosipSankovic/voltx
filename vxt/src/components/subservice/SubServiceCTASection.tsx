import type { ServiceData } from '../../data/serviceData'

interface Props {
  service: ServiceData
}

export default function SubServiceCTASection({ service }: Props) {
  return (
    <>
      {/* Desktop CTA */}
      <section className="hidden md:block max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-secondary-container rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[12rem]">
              settings_applications
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight relative z-10 font-headline">
            {service.ctaTitle}
          </h2>
          <p className="text-white/90 text-xl mb-10 relative z-10">
            {service.ctaText}
          </p>
          <a
            href="tel:0917346442"
            className="text-4xl md:text-6xl font-black text-white hover:text-primary transition-colors tracking-tighter relative z-10 inline-block font-headline"
          >
            091 734 6442
          </a>
        </div>
      </section>

      {/* Mobile CTA */}
      <section className="md:hidden px-6 pb-12">
        <div className="bg-secondary-container p-8 rounded-xl flex flex-col space-y-6 text-white">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight">
              Hitni servis?
            </h2>
            <p className="font-medium opacity-90">{service.ctaText}</p>
          </div>
          <a
            href="tel:0917346442"
            className="w-full py-4 bg-white/20 hover:bg-white/30 transition-colors rounded-lg font-headline font-bold text-center text-lg tracking-tight"
          >
            Nazovite: 091 734 6442
          </a>
        </div>
      </section>
    </>
  )
}
