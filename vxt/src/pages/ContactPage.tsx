import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileCallBar from '../components/layout/MobileCallBar'
import ContactHeroSection from '../components/contact/ContactHeroSection'
import ContactFormSection from '../components/contact/ContactFormSection'
import ContactMapSection from '../components/contact/ContactMapSection'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface dark:bg-slate-900 text-on-background dark:text-slate-100 font-body">
      <Helmet>
        <title>Kontakt | Volt X – Servis u Zadru</title>
        <meta name="description" content="Kontaktirajte Volt X za hitni servis ili upit. Dostupni smo pon-pet 08-20h, subota 08-13h. Brzi odgovor garantiran." />
        <link rel="canonical" href="https://vxt.hr/kontakt" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <main id="main-content">
        <ContactHeroSection />
        <ContactFormSection />
        <ContactMapSection />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
