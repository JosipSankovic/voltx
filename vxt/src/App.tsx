import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServiceHubPage from './pages/ServiceHubPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
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
      </Routes>
    </>
  )
}
