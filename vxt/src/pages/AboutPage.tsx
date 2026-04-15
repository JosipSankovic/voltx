import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>O nama | Volt X – Servis u Zadru</title>
        <meta name="description" content="Upoznajte tim Volt X — stručnjake za servis ugostiteljske opreme i kućanskih aparata s višegodišnjim iskustvom u Zadru i Dalmaciji." />
        <link rel="canonical" href="https://vxt.hr/o-nama" />
        <meta name="robots" content="index, follow" />
      </Helmet>
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
