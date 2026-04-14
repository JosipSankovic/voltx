export default function ContactMapSection() {
  return (
    <section className="w-full h-[400px] md:h-[500px] bg-surface-container-highest relative overflow-hidden">
      <div className="w-full h-full bg-slate-200 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700">
        {/* Map placeholder – replace with iframe or react-map-gl in production */}
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-primary mb-4 block">
            map
          </span>
          <p className="font-bold text-primary font-headline">
            Volt X – Zadar, Ulica bana Jelačića 20
          </p>
          <div className="mt-4 inline-block p-4 bg-white/80 backdrop-blur rounded-xl shadow-lg">
            <p className="text-sm font-bold text-secondary">Volt X d.o.o.</p>
            <p className="text-xs text-on-surface-variant mt-1">
              23000 Zadar, Hrvatska
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,15,34,0.1)]" />
    </section>
  )
}
