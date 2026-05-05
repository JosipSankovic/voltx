import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServiceHubPage from './pages/ServiceHubPage'
import SubServicePage from './pages/SubServicePage'
import PrivacyPage from './pages/PrivacyPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    ReactGA.send({ hitType: 'pageview', page: pathname })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-nama" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/usluge" element={<ServiceHubPage />} />
        <Route path="/usluge/:slug" element={<SubServicePage />} />
        <Route path="/privatnost" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
