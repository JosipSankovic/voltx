import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileCallBar from '../components/layout/MobileCallBar'
import ContactHeroSection from '../components/contact/ContactHeroSection'
import ContactFormSection from '../components/contact/ContactFormSection'
import ContactMapSection from '../components/contact/ContactMapSection'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface text-on-background font-body">
      <Header />
      <main>
        <ContactHeroSection />
        <ContactFormSection />
        <ContactMapSection />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
