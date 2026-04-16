import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileCallBar from '../components/layout/MobileCallBar'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface text-on-background font-body">
      <Helmet>
        <title>Politika privatnosti | Volt X</title>
        <meta name="description" content="Politika privatnosti Volt X — kako prikupljamo i koristimo vaše osobne podatke." />
        <link rel="canonical" href="https://vxt.hr/privatnost" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      <main id="main-content" className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-headline font-bold text-primary mb-8">Politika privatnosti</h1>
        <div className="prose prose-lg text-on-surface-variant space-y-6">
          <p>Volt X (Ulica XI/1, Petrčane, 23231) prikuplja sljedeće osobne podatke putem kontakt forme: ime, email adresa i broj telefona.</p>
          <h2 className="text-2xl font-headline font-bold text-primary mt-8">Svrha prikupljanja</h2>
          <p>Podaci se koriste isključivo za odgovor na vaš upit i koordinaciju servisa. Ne dijelimo vaše podatke s trećim stranama.</p>
          <h2 className="text-2xl font-headline font-bold text-primary mt-8">Pohrana podataka</h2>
          <p>Podaci se čuvaju onoliko dugo koliko je potrebno za rješavanje vašeg upita, a najdulje 2 godine.</p>
          <h2 className="text-2xl font-headline font-bold text-primary mt-8">Vaša prava</h2>
          <p>Imate pravo zatražiti uvid, ispravak ili brisanje svojih podataka. Kontaktirajte nas na: <a href="mailto:info@vxt.hr" className="text-secondary hover:underline">info@vxt.hr</a></p>
        </div>
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
