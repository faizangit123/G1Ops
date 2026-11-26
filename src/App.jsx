import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import IntroAnimation from './components/IntroAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectorsSection from './components/SectorsSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <SectorsSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <main className="editorial-headings service-page-headings">
        <Services />
      </main>
      <Footer />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <main className="editorial-headings">
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
      } else {
        window.scrollTo(0, 0)
      }
    })
  }, [pathname, hash])

  return null
}

function App() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroAnimation key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <div className="relative">
        <ScrollManager />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  )
}

export default App
