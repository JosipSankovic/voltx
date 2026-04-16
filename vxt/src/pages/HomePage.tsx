import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileCallBar from '../components/layout/MobileCallBar'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import WhyVoltXSection from '../components/home/WhyVoltXSection'
import BrandsSection from '../components/home/BrandsSection'
import ContactCTASection from '../components/home/ContactCTASection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body">
      <Helmet>
        <title>Volt X – Servis ugostiteljske opreme i kućanskih aparata u Zadru</title>
        <meta name="description" content="Brza intervencija, stručni tehničari, pouzdana rješenja. Volt X je vaš partner za besprijekoran rad profesionalne kuhinje i doma u Zadru i okolici." />
        <link rel="canonical" href="https://vxt.hr/" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      </Helmet>
      <Header />

      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <WhyVoltXSection />
        <BrandsSection />
        <ContactCTASection />
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  )
}
