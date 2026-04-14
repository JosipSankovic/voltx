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
      <Header />
      <main>
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
