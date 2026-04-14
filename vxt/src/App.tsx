import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServiceHubPage from './pages/ServiceHubPage'
import SubServicePage from './pages/SubServicePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/o-nama" element={<AboutPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
      <Route path="/usluge" element={<ServiceHubPage />} />
      <Route path="/usluge/:slug" element={<SubServicePage />} />
    </Routes>
  )
}
