import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileCallBar from '../components/layout/MobileCallBar'
import ProdajaHeroSection from '../components/prodaja/ProdajaHeroSection'
import ProdajaUvodSection from '../components/prodaja/ProdajaUvodSection'
import ProdajaKategorijeSection from '../components/prodaja/ProdajaKategorijeSection'
import ProdajaCTASection from '../components/prodaja/ProdajaCTASection'

export default function ProdajaOpremePage() {
  return (
    <div className="min-h-screen bg-surface dark:bg-slate-900 text-on-background dark:text-slate-100 font-body">
      <Helmet>
        <title>Prodaja ugostiteljske opreme | Volt X – Zadar</title>
        <meta
          name="description"
          content="Prodaja profesionalne ugostiteljske opreme u Zadru — perilice posuđa, ledomati, konvektomati, pizza peći, inox stolovi, rashladni pultovi po mjeri i više."
        />
        <link rel="canonical" href="https://vxt.hr/prodaja-opreme" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Prodaja ugostiteljske opreme – Volt X",
          "description": "Profesionalna ugostiteljska oprema za restorane, hotele i kafiće",
          "url": "https://vxt.hr/prodaja-opreme",
          "numberOfItems": 13,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Perilice posuđa" },
            { "@type": "ListItem", "position": 2, "name": "Perilice čaša" },
            { "@type": "ListItem", "position": 3, "name": "Ledomati" },
            { "@type": "ListItem", "position": 4, "name": "Roštilji" },
            { "@type": "ListItem", "position": 5, "name": "Konvektomati" },
            { "@type": "ListItem", "position": 6, "name": "Mikseri za tijesto" },
            { "@type": "ListItem", "position": 7, "name": "Pizza peći" },
            { "@type": "ListItem", "position": 8, "name": "Rezači" },
            { "@type": "ListItem", "position": 9, "name": "Oprema od nehrđajućeg čelika" },
            { "@type": "ListItem", "position": 10, "name": "Radni stolovi" },
            { "@type": "ListItem", "position": 11, "name": "Zidni ormari" },
            { "@type": "ListItem", "position": 12, "name": "Police" },
            { "@type": "ListItem", "position": 13, "name": "Rashladni pultovi po mjeri" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://vxt.hr/" },
            { "@type": "ListItem", "position": 2, "name": "Prodaja opreme", "item": "https://vxt.hr/prodaja-opreme" }
          ]
        })}</script>
      </Helmet>
      <Header />
      <main id="main-content">
        <ProdajaHeroSection />
        <ProdajaUvodSection />
        <ProdajaKategorijeSection />
        <ProdajaCTASection />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
