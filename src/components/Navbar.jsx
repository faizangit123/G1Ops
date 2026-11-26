import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const MotionLink = motion(Link)

const links = [
  { label: 'Home', href: '/#home', id: 'home' },
  { label: 'About Us', href: '/#commitments', id: 'commitments' },
  { label: 'Services', href: '/services', id: 'services' },
  { label: 'Sectors', href: '/#sectors', id: 'sectors' },
  { label: 'Clients', href: '/#sectors', id: 'clients' },
  { label: 'Careers', href: '#', id: 'careers', isStatic: true },
  { label: 'Contact', href: '/contact', id: 'contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [desktop, setDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => setDesktop(window.innerWidth >= 1024)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* ─── Top Header ─── */}
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled || pathname === '/contact'
            ? 'bg-white shadow-[0_2px_12px_rgba(1,24,77,0.08)] py-3'
            : 'bg-transparent py-5 md:py-6'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="mx-auto flex items-center justify-between px-6 md:px-10 lg:px-14 max-w-[1360px]">
          {/* Logo with official vector SVG */}
          <Link
            to="/"
            className="relative z-10 flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm shrink-0"
            aria-label="G1 Ops Homepage"
          >
            <Logo className="h-7 sm:h-8 md:h-9 w-auto transition-transform duration-300 group-hover:scale-105" variant="default" />
          </Link>

          {/* Desktop Navigation (Clean, high-contrast, elegant links) */}
          {desktop && (
            <nav className="flex items-center gap-1 bg-white/90 border border-brand-navy/12 rounded-full px-4 py-1.5 backdrop-blur-md shadow-xs">
              {links.map((l) =>
                l.isStatic ? (
                  <button
                    key={l.label}
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="relative px-3.5 py-1.5 text-[0.84rem] font-heading font-bold text-brand-navy hover:text-brand-red tracking-wide rounded-full transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red cursor-pointer"
                  >
                    <span className="relative z-10">{l.label}</span>
                    <span className="absolute inset-0 bg-brand-navy/[0.06] rounded-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
                  </button>
                ) : (
                  <Link
                    key={l.label}
                    to={l.href}
                    className="relative px-3.5 py-1.5 text-[0.84rem] font-heading font-bold text-brand-navy hover:text-brand-red tracking-wide rounded-full transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                  >
                    <span className="relative z-10">{l.label}</span>
                    <span className="absolute inset-0 bg-brand-navy/[0.06] rounded-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200" />
                  </Link>
                )
              )}
            </nav>
          )}

          {/* Right Action: Stacked Call us 24x7 above + Phone number below + Get a quote */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Stacked Call us 24×7 above & Number below */}
            <div className="hidden md:flex flex-col items-end text-right shrink-0">
              <span className="text-brand-navy/60 text-[10.5px] font-heading font-bold tracking-wider uppercase leading-tight mb-0.5">
                Call us 24×7
              </span>
              <a
                href="tel:+919840712768"
                className="font-mono text-brand-navy hover:text-brand-red transition-colors font-bold text-xs sm:text-sm tracking-tight leading-tight"
              >
                +91 98407 12768
              </a>
            </div>

            {desktop && (
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-navy text-white text-[0.78rem] font-heading font-semibold tracking-wide rounded-full hover:bg-brand-red transition-colors duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(250,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 shrink-0"
              >
                <span>Get a quote</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}

            {/* Mobile Hamburger Button */}
            {!desktop && (
              <button
                onClick={() => setOpen(!open)}
                className="relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-brand-navy/5 active:bg-brand-navy/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                <motion.span
                  className={`block h-[2px] w-5 rounded-full transition-colors duration-300 ${open ? 'bg-white' : 'bg-brand-navy'}`}
                  animate={open ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className={`block h-[2px] w-5 rounded-full transition-colors duration-300 ${open ? 'bg-white opacity-0' : 'bg-brand-navy opacity-100'}`}
                  animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className={`block h-[2px] w-5 rounded-full transition-colors duration-300 ${open ? 'bg-white' : 'bg-brand-navy'}`}
                  animate={open ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </button>
            )}
          </div>
        </div>
      </motion.header>

      {/* ─── Mobile Drawer ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-brand-navy flex flex-col justify-between p-8 pt-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4">
              {links.map((l, i) =>
                l.isStatic ? (
                  <motion.button
                    key={l.label}
                    type="button"
                    onClick={(e) => e.preventDefault()}
                    className="text-2xl font-display font-bold text-white hover:text-brand-red transition-colors flex items-center justify-between py-2 border-b border-white/10 w-full text-left cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <span>{l.label}</span>
                    <span className="text-sm font-mono text-white/30">0{i + 1}</span>
                  </motion.button>
                ) : (
                  <MotionLink
                    key={l.label}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-display font-bold text-white hover:text-brand-red transition-colors flex items-center justify-between py-2 border-b border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <span>{l.label}</span>
                    <span className="text-sm font-mono text-white/30">0{i + 1}</span>
                  </MotionLink>
                )
              )}
            </nav>

            <div className="flex flex-col gap-4 pt-6">
              <div className="text-white/60 text-xs font-mono uppercase tracking-wider">
                Direct Helpline 24/7
              </div>
              <a href="tel:+919840712768" className="text-xl font-mono text-white font-bold">
                +91 98407 12768
              </a>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="w-full text-center py-3.5 bg-brand-red text-white text-sm font-heading font-semibold tracking-wider uppercase rounded-full mt-2"
              >
                Get a quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
