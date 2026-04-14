// Contact CTA section – big phone number + info cards
// Desktop: large version with 3 info cards
// Mobile: dark navy section, centered, simpler layout

export default function ContactCTASection() {
  return (
    <>
      {/* ── DESKTOP ───────────────────────────────────────────────────── */}
      <section className="hidden md:block py-24 px-6 bg-primary-container relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black font-headline text-white tracking-tighter mb-6">
            Trebate uslugu? Nazovite odmah.
          </h2>

          <a
            href="tel:0917346442"
            className="text-5xl md:text-8xl font-black text-secondary-container font-headline tracking-tighter hover:text-white transition-colors"
          >
            091 734 6442
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 w-full text-left">
            <InfoCard
              icon="mail"
              title="Email"
              content="info@vxt.hr"
            />
            <InfoCard
              icon="schedule"
              title="Radno vrijeme"
              content={
                <>
                  Pon - Pet: 08:00 - 20:00
                  <br />
                  Hitne intervencije: 00-24
                </>
              }
            />
            <InfoCard
              icon="location_on"
              title="Lokacija"
              content="Zadarska regija, Hrvatska"
            />
          </div>
        </div>
      </section>

      {/* ── MOBILE ────────────────────────────────────────────────────── */}
      <section className="md:hidden bg-primary-container text-on-primary px-6 py-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-xs font-label">
            Trebate hitan popravak?
          </span>
          <h2 className="text-3xl font-bold font-headline leading-tight text-white">
            Kontaktirajte nas odmah za brzu dijagnostiku
          </h2>
          <div className="py-8">
            <a
              href="tel:0917346442"
              className="text-4xl font-black font-headline tracking-tighter text-white block hover:text-secondary-container transition-colors"
            >
              091 734 6442
            </a>
          </div>
          <p className="text-on-primary-container font-medium">
            Radno vrijeme: Pon-Sub 08:00 - 20:00
          </p>
        </div>
      </section>
    </>
  )
}

function InfoCard({
  icon,
  title,
  content,
}: {
  icon: string
  title: string
  content: React.ReactNode
}) {
  return (
    <div className="bg-primary/50 p-8 rounded-xl border border-white/5">
      <span className="material-symbols-outlined text-secondary mb-4 block leading-none">
        {icon}
      </span>
      <h4 className="text-white font-headline font-bold text-lg mb-2">{title}</h4>
      <p className="text-on-primary-container">{content}</p>
    </div>
  )
}
