import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileCallBar from '../components/layout/MobileCallBar'
import AboutHeroSection from '../components/about/AboutHeroSection'
import AboutStorySection from '../components/about/AboutStorySection'
import AboutValuesSection from '../components/about/AboutValuesSection'
import AboutServiceAreaSection from '../components/about/AboutServiceAreaSection'
import AboutCTASection from '../components/about/AboutCTASection'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface text-on-background font-body">
      <Header />
      <main>
        <AboutHeroSection />
        <AboutStorySection />
        <AboutValuesSection />
        <AboutServiceAreaSection />
        <AboutCTASection />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
