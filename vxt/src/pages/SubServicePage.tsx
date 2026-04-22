import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileCallBar from '../components/layout/MobileCallBar'
import SubServiceHeroSection from '../components/subservice/SubServiceHeroSection'
import SubServiceIntroSection from '../components/subservice/SubServiceIntroSection'
import SubServiceProblemsSection from '../components/subservice/SubServiceProblemsSection'
import SubServiceProcessSection from '../components/subservice/SubServiceProcessSection'
import SubServiceFAQSection from '../components/subservice/SubServiceFAQSection'
import SubServiceCTASection from '../components/subservice/SubServiceCTASection'
import { getServiceData } from '../data/serviceData'

export default function SubServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = getServiceData(slug ?? '')

  if (!service) {
    return (
      <div className="min-h-screen bg-surface dark:bg-slate-900 text-on-background dark:text-slate-100 font-body">
        <Helmet>
          <title>Usluga nije pronađena | Volt X</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Header />
        <main id="main-content" className="pt-32 px-6 max-w-7xl mx-auto text-center py-20">
          <h1 className="text-4xl font-headline font-bold text-primary dark:text-slate-100 mb-4">
            Usluga nije pronađena
          </h1>
          <p className="text-on-surface-variant dark:text-slate-400 mb-8">
            Tražena usluga ne postoji ili je premještena.
          </p>
          <Link
            to="/usluge"
            className="inline-flex items-center gap-2 bg-secondary-container text-white px-8 py-4 rounded-lg font-headline font-bold hover:bg-secondary transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Sve usluge
          </Link>
        </main>
        <Footer />
        <MobileCallBar />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface dark:bg-slate-900 text-on-background dark:text-slate-100 font-body">
      <Helmet>
        <title>{service.title} | Volt X – Zadar</title>
        <meta
          name="description"
          content={service.introText[0].slice(0, 155) + (service.introText[0].length > 155 ? '...' : '')}
        />
        <link rel="canonical" href={`https://vxt.hr/usluge/${service.slug}`} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.introText[0],
          "provider": {
            "@type": "LocalBusiness",
            "name": "Volt X",
            "url": "https://vxt.hr"
          },
          "areaServed": {
            "@type": "City",
            "name": "Zadar"
          },
          "serviceType": service.categoryLabel,
          "url": `https://vxt.hr/usluge/${service.slug}`
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://vxt.hr/" },
            { "@type": "ListItem", "position": 2, "name": "Usluge", "item": "https://vxt.hr/usluge" },
            { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://vxt.hr/usluge/${service.slug}` }
          ]
        })}</script>
      </Helmet>
      <Header />
      <main id="main-content">
        <SubServiceHeroSection service={service} />
        <SubServiceIntroSection service={service} />
        <SubServiceProblemsSection service={service} />
        <SubServiceProcessSection />
        <SubServiceFAQSection service={service} />
        <SubServiceCTASection service={service} />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
