import { useState, type FormEvent } from 'react'

const contactInfoItems = [
  {
    icon: 'location_on',
    label: 'Adresa',
    primary: 'Ulica XI/1',
    secondary: '23231 Petrčane, Hrvatska',
  },
  {
    icon: 'call',
    label: 'Telefon',
    primary: '091 734 6442',
    secondary: null,
  },
  {
    icon: 'mail',
    label: 'E-mail',
    primary: 'info@vxt.hr',
    secondary: null,
  },
  {
    icon: 'schedule',
    label: 'Radno vrijeme',
    primary: 'Pon - Sub: 08:00 - 16:00',
  },
]

const serviceOptions = [
  'Odaberite uslugu',
  'Servis kućanskih aparata',
  'Servis ugostiteljske opreme',
  'Hitni popravci',
  'Preventivno održavanje',
  'Drugo',
]

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Desktop layout: contact info left + form right */}
      <main className="hidden md:block bg-white dark:bg-slate-900 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: contact details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-slate-100 mb-8 font-headline">
                Gdje se nalazimo
              </h2>
              <div className="space-y-8">
                {contactInfoItems.map((item) => (
                  <div key={item.label} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-white"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">
                        {item.label}
                      </p>
                      <p className="text-xl font-semibold text-primary dark:text-slate-100">
                        {item.primary}
                      </p>
                      {item.secondary && (
                        <p className="text-lg text-on-surface-variant dark:text-slate-400">
                          {item.secondary}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: form */}
          <ContactForm submitted={submitted} onSubmit={handleSubmit} />
        </div>
      </main>

      {/* Mobile layout: info bento grid + form */}
      <div className="md:hidden">
        {/* Contact bento grid */}
        <section className="px-6 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-container-low dark:bg-slate-700 p-8 rounded-xl">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">
                location_on
              </span>
              <h3 className="font-headline font-bold text-xl mb-2 dark:text-slate-100">
                Naša Lokacija
              </h3>
              <p className="text-on-surface-variant dark:text-slate-400 leading-relaxed">
                Ulica XI/1,
                <br />
                23231 Petrčane, Hrvatska
              </p>
            </div>
            <div className="bg-surface-container-low dark:bg-slate-700 p-8 rounded-xl">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">
                schedule
              </span>
              <h3 className="font-headline font-bold text-xl mb-2 dark:text-slate-100">
                Radno Vrijeme
              </h3>
              <p className="text-on-surface-variant dark:text-slate-400 leading-relaxed">
                Pon - Sub: 08:00 - 16:00
              </p>
            </div>
          </div>
        </section>

        {/* Mobile form */}
        <section className="px-6 mb-12">
          <ContactForm submitted={submitted} onSubmit={handleSubmit} />
        </section>

      </div>
    </>
  )
}

interface ContactFormProps {
  submitted: boolean
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

function ContactForm({ submitted, onSubmit }: ContactFormProps) {
  if (submitted) {
    return (
      <div className="bg-surface-container-lowest dark:bg-slate-800 p-10 rounded-xl shadow-[0_20px_40px_rgba(0,15,34,0.06)] border border-outline-variant/10 dark:border-white/10 flex flex-col items-center justify-center min-h-[400px] text-center gap-4">
        <span
          className="material-symbols-outlined text-secondary text-6xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <h3 className="text-2xl font-headline font-bold text-primary dark:text-slate-100">
          Poruka poslana!
        </h3>
        <p className="text-on-surface-variant dark:text-slate-400">
          Kontaktirat ćemo vas u najkraćem mogućem roku.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-surface-container-lowest dark:bg-slate-800 p-8 md:p-10 rounded-xl shadow-[0_20px_40px_rgba(0,15,34,0.06)] border border-outline-variant/10 dark:border-white/10">
      <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-slate-100 mb-8 font-headline">
        Pošaljite nam upit
      </h2>
      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              className="text-xs font-bold uppercase tracking-widest text-on-surface-variant dark:text-slate-400"
              htmlFor="ime"
            >
              Ime i prezime
            </label>
            <input
              className="w-full bg-surface-container-high dark:bg-slate-700 dark:text-slate-100 border-0 border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all px-4 py-3 rounded-t-lg outline-none"
              id="ime"
              placeholder="Vaše ime"
              type="text"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-xs font-bold uppercase tracking-widest text-on-surface-variant dark:text-slate-400"
              htmlFor="tel"
            >
              Telefon
            </label>
            <input
              className="w-full bg-surface-container-high dark:bg-slate-700 dark:text-slate-100 border-0 border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all px-4 py-3 rounded-t-lg outline-none"
              id="tel"
              placeholder="09X XXX XXXX"
              type="tel"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-widest text-on-surface-variant"
            htmlFor="email"
          >
            E-mail adresa
          </label>
          <input
            className="w-full bg-surface-container-high dark:bg-slate-700 dark:text-slate-100 border-0 border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all px-4 py-3 rounded-t-lg outline-none"
            id="email"
            placeholder="vas@email.com"
            type="email"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-widest text-on-surface-variant"
            htmlFor="usluga"
          >
            Vrsta usluge
          </label>
          <select
            className="w-full bg-surface-container-high dark:bg-slate-700 dark:text-slate-100 border-0 border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all px-4 py-3 rounded-t-lg appearance-none outline-none"
            id="usluga"
          >
            {serviceOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            className="text-xs font-bold uppercase tracking-widest text-on-surface-variant"
            htmlFor="poruka"
          >
            Vaša poruka
          </label>
          <textarea
            className="w-full bg-surface-container-high dark:bg-slate-700 dark:text-slate-100 border-0 border-b-2 border-transparent focus:ring-0 focus:border-secondary transition-all px-4 py-3 rounded-t-lg resize-none outline-none"
            id="poruka"
            placeholder="Kako vam možemo pomoći?"
            rows={5}
          />
        </div>

        <button
          className="w-full bg-secondary-container text-white font-black py-4 px-8 rounded-lg uppercase tracking-widest hover:bg-secondary transition-all active:scale-95 shadow-lg font-headline"
          type="submit"
        >
          Pošalji poruku
        </button>
      </form>
    </div>
  )
}
