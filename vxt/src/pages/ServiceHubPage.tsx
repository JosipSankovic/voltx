import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileCallBar from '../components/layout/MobileCallBar'
import ServiceHubHeroSection from '../components/services/ServiceHubHeroSection'
import ServiceHubIntroSection from '../components/services/ServiceHubIntroSection'
import ServiceHubGridSection from '../components/services/ServiceHubGridSection'
import ServiceHubProcessSection from '../components/services/ServiceHubProcessSection'
import ServiceHubCTASection from '../components/services/ServiceHubCTASection'

export default function ServiceHubPage() {
  return (
    <div className="min-h-screen bg-surface text-on-background font-body">
      <Helmet>
        <title>Usluge | Volt X – Servis opreme u Zadru</title>
        <meta name="description" content="Servis rashladnih sustava, termičke opreme, perilica posuđa i kućanskih aparata. Preventivno održavanje i rezervni dijelovi za ugostiteljsku opremu u Zadru." />
        <link rel="canonical" href="https://vxt.hr/usluge" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://vxt.hr/" },
            { "@type": "ListItem", "position": 2, "name": "Usluge", "item": "https://vxt.hr/usluge" }
          ]
        })}</script>
      </Helmet>
      <Header />
      <main id="main-content">
        <ServiceHubHeroSection />
        <ServiceHubIntroSection />
        <ServiceHubGridSection />
        <ServiceHubProcessSection />
        <ServiceHubCTASection />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
