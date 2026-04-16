import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileCallBar from '../components/layout/MobileCallBar'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface text-on-background font-body">
      <Helmet>
        <title>Stranica nije pronađena | Volt X</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <main id="main-content" className="pt-32 px-6 max-w-7xl mx-auto text-center py-20">
        <h1 className="text-6xl font-headline font-black text-primary mb-4">404</h1>
        <p className="text-2xl font-headline font-bold text-on-surface-variant mb-4">Stranica nije pronađena</p>
        <p className="text-on-surface-variant mb-12 max-w-md mx-auto">
          Tražena stranica ne postoji ili je premještena.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="px-8 py-4 bg-secondary text-white font-headline font-bold rounded-lg hover:brightness-110 transition-all">
            Povratak na početnu
          </Link>
          <Link to="/usluge" className="px-8 py-4 border-2 border-primary text-primary font-headline font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
            Naše usluge
          </Link>
        </div>
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}
