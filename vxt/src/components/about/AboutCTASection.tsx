import { Link } from 'react-router-dom'

export default function AboutCTASection() {
  return (
    <section className="py-20 px-6 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 relative z-10">
          Zakažite servis danas
        </h2>
        <p className="text-primary-fixed-dim mb-10 text-lg max-w-xl mx-auto relative z-10">
          Naš tim je spreman odgovoriti na sve vaše upite. Kontaktirajte nas za
          besplatnu procjenu i savjetovanje.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <a
            href="tel:0917346442"
            className="bg-secondary-container text-white hover:bg-orange-500 transition-colors px-10 py-5 rounded-lg font-headline font-black text-xl flex items-center space-x-3 shadow-lg"
          >
            <span className="material-symbols-outlined">call</span>
            <span>091 734 6442</span>
          </a>
          <Link
            to="/kontakt"
            className="bg-transparent border-2 border-white/30 hover:border-white px-10 py-5 rounded-lg font-headline font-bold transition-all"
          >
            Pošaljite upit
          </Link>
        </div>
      </div>
    </section>
  )
}
