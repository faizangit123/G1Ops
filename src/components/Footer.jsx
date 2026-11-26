import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#commitments' },
  { label: 'Services', href: '/services' },
  { label: 'Sectors', href: '/#sectors' },
  { label: 'Clients', href: '/#sectors' },
  { label: 'Careers', href: '#', isStatic: true },
  { label: 'Contact', href: '/contact' },
]

export default function Footer({ onReplayIntro }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const shouldReduceMotion = useReducedMotion()

  const [copiedField, setCopiedField] = useState(null)

  const copyToClipboard = (text, fieldName) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopiedField(fieldName)
      setTimeout(() => setCopiedField(null), 2200)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer id="contact" ref={ref} className="relative bg-[#08090C] overflow-hidden text-white border-t border-white/[0.08] select-none">
      
      {/* ─── Luxury Obsidian Black Ambient Lighting & Subtle Crimson Glows ─── */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full bg-brand-red/[0.07] blur-[180px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[550px] h-[550px] rounded-full bg-white/[0.015] blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-brand-red/[0.04] blur-[140px]" />

      {/* Subtle blueprint grid overlay in footer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ─── Top Brand Marquee Ribbon (Infinite Smooth Glide) ─── */}
      <div className="border-b border-white/[0.07] py-3.5 bg-white/[0.015] overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-12 w-max text-white/40 font-heading text-[0.72rem] tracking-[0.28em] uppercase font-bold"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: ['0%', '-50%'],
                }
          }
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 32,
            ease: 'linear',
          }}
        >
          {[
            'QUALITY — INTEGRITY — EXCELLENCE',
            'PAN-INDIA FACILITY MANAGEMENT · 100% PF/ESI VERIFIED',
            'CLIENT-CENTRIC EXCELLENCE · SINGLE CONTRACT ACCOUNTABILITY',
            'TRAINED, SUPERVISED SPECIALISTS ACROSS INDIA',
            'CHENNAI HQ · 200 FT INNER RING ROAD, MADHAVARAM',
            'QUALITY — INTEGRITY — EXCELLENCE',
            'PAN-INDIA FACILITY MANAGEMENT · 100% PF/ESI VERIFIED',
            'CLIENT-CENTRIC EXCELLENCE · SINGLE CONTRACT ACCOUNTABILITY',
            'TRAINED, SUPERVISED SPECIALISTS ACROSS INDIA',
            'CHENNAI HQ · 200 FT INNER RING ROAD, MADHAVARAM',
          ].map((text, i) => (
            <span key={i} className="flex items-center gap-6">
              <span>{text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-[1360px] px-6 md:px-10 lg:px-14">
        {/* ─── High-Impact Editorial CTA & Modern Escalation Grid ─── */}
        <div className="pt-16 pb-16 md:pt-24 md:pb-24 border-b border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            
            <div className="lg:col-span-7">
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-brand-red font-bold block mb-4">
                Ready to elevate your facility standard?
              </span>
              <h2
                className="font-display font-[700] tracking-normal leading-[1.0] text-white"
                style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
              >
                Let&apos;s run your facility{' '}
                <span className="text-brand-red underline decoration-brand-red/50 decoration-wavy underline-offset-8">
                  right.
                </span>
              </h2>
              <p className="font-body text-base text-white/60 leading-relaxed font-normal mt-5 max-w-xl">
                Direct leadership access without vendor blame games. Housekeeping, security,
                critical MEP engineering and payroll consolidated under one measurable SLA.
              </p>
            </div>

            {/* Quick Interactive Escalation Cards */}
            <div className="lg:col-span-5 space-y-4">
              {/* Direct Phone Card */}
              <div className="group relative p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-brand-red/50 transition-all duration-300 shadow-lg shadow-black/40 flex items-center justify-between backdrop-blur-sm">
                <div>
                  <span className="font-heading text-[0.65rem] tracking-wider uppercase text-white/40 font-bold block mb-1">
                    24×7 Pan-India Operations Hotline
                  </span>
                  <a
                    href="tel:+919840712768"
                    className="font-mono text-base sm:text-lg font-bold text-white group-hover:text-brand-red transition-colors"
                  >
                    +91 98407 12768
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard('+919840712768', 'phone')}
                    className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-medium transition-colors cursor-pointer"
                    title="Copy phone number"
                  >
                    {copiedField === 'phone' ? '✓ Copied' : 'Copy'}
                  </button>
                  <a
                    href="tel:+919840712768"
                    className="p-2.5 rounded-full bg-brand-red text-white hover:bg-brand-red-light transition-all shadow-md shadow-brand-red/30"
                    title="Call now"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Email & Tenders Card */}
              <div className="group relative p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-brand-red/50 transition-all duration-300 shadow-lg shadow-black/40 flex items-center justify-between backdrop-blur-sm">
                <div>
                  <span className="font-heading text-[0.65rem] tracking-wider uppercase text-white/40 font-bold block mb-1">
                    Corporate RFPs & Client Services
                  </span>
                  <a
                    href="mailto:care@g1ops.in"
                    className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-brand-red transition-colors"
                  >
                    care@g1ops.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard('care@g1ops.in', 'email')}
                    className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-medium transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedField === 'email' ? '✓ Copied' : 'Copy'}
                  </button>
                  <a
                    href="mailto:care@g1ops.in"
                    className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-all"
                    title="Send email"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ─── Structured Link Directory & Address (Refined Cards Layout) ─── */}
        <div className="py-14 md:py-20 border-b border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Navigation Links Card */}
          <div className="md:col-span-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 sm:p-7 hover:border-white/12 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span className="font-heading text-xs uppercase tracking-[0.25em] text-brand-red font-bold">
                  Navigation
                </span>
              </div>
              <ul className="space-y-2.5 font-heading text-sm">
                {navLinks.map((l) => (
                  <li key={l.label}>
                    {l.isStatic ? (
                      <button
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        className="text-white/65 hover:text-white transition-all inline-flex items-center gap-2 group w-full text-left cursor-pointer"
                      >
                        <span className="text-brand-red text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                          →
                        </span>
                        <span className="group-hover:translate-x-0.5 transition-transform">{l.label}</span>
                      </button>
                    ) : (
                      <Link
                        to={l.href}
                        className="text-white/65 hover:text-white transition-all inline-flex items-center gap-2 group w-full"
                      >
                        <span className="text-brand-red text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                          →
                        </span>
                        <span className="group-hover:translate-x-0.5 transition-transform">{l.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Capabilities Card */}
          <div className="md:col-span-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 sm:p-7 hover:border-white/12 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span className="font-heading text-xs uppercase tracking-[0.25em] text-brand-red font-bold">
                  Core Capabilities
                </span>
              </div>
              <ul className="space-y-3 font-body text-sm text-white/70">
                <li className="flex items-start gap-3 group">
                  <span className="w-5 h-5 rounded-md bg-brand-red/10 border border-brand-red/25 text-brand-red flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="group-hover:text-white transition-colors">
                    Mechanized Housekeeping & Sanitization
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="w-5 h-5 rounded-md bg-brand-red/10 border border-brand-red/25 text-brand-red flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="group-hover:text-white transition-colors">
                    Perimeter Guarding & Electronic Security
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="w-5 h-5 rounded-md bg-brand-red/10 border border-brand-red/25 text-brand-red flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="group-hover:text-white transition-colors">
                    Critical MEP Engineering & HVAC Operations
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="w-5 h-5 rounded-md bg-brand-red/10 border border-brand-red/25 text-brand-red flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="group-hover:text-white transition-colors">
                    Statutory Payroll & Workforce Governance
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.06] text-xs font-heading text-white/40">
              ISO 9001:2015 Audited · 100% PF/ESI Compliant
            </div>
          </div>

          {/* Registered Head Office Card */}
          <div className="md:col-span-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 sm:p-7 hover:border-white/12 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span className="font-heading text-xs uppercase tracking-[0.25em] text-brand-red font-bold">
                  Registered Head Office
                </span>
              </div>
              <address className="not-italic font-body text-sm text-white/70 leading-relaxed space-y-1.5">
                <span className="text-white font-bold block text-base mb-1 font-heading">
                  G1 Ops Facility Services Pvt. Ltd.
                </span>
                <span className="block">No. 1313/1A, 200 Feet Inner Ring Road,</span>
                <span className="block">Madhavaram, Chennai – 600 110,</span>
                <span className="block">Tamil Nadu, India.</span>
                <span className="block text-white/40 text-xs pt-2">
                  Landmark: Near Greenfield Chennai International School
                </span>
              </address>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-white/50">
              <span>CHENNAI HQ</span>
              <span className="text-brand-red font-bold">● ACTIVE 24/7</span>
            </div>
          </div>
        </div>

        {/* ─── Monumental Oversized G1 OPS Vector Wordmark (Animated Shimmer & Scale) ─── */}
        <div className="relative py-16 md:py-24 flex justify-center items-center overflow-hidden">
          {/* Ambient red radiant aura behind the logo */}
          <div className="pointer-events-none absolute w-[600px] h-[220px] rounded-full bg-brand-red/[0.12] blur-[120px] animate-pulse" />

          <motion.div
            className="group relative w-full max-w-5xl px-4 cursor-pointer select-none"
            whileHover={{ scale: 1.025, y: -4 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-3xl p-4 sm:p-6 bg-white/[0.02] border border-white/[0.08] group-hover:border-white/20 transition-all duration-500 shadow-2xl">
              <Logo
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(250,0,0,0.22)] group-hover:drop-shadow-[0_30px_70px_rgba(250,0,0,0.45)] transition-all duration-500"
                variant="white"
              />
              
              {/* Sweeping diagonal light beam reflection across logo */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
            </div>

            {/* Architectural Sub-Caption below Monumental Wordmark */}
            <div className="flex items-center justify-center gap-3 mt-5 text-center">
              <span className="h-px w-10 sm:w-16 bg-white/20" />
              <span className="font-heading text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase text-white/40 font-bold group-hover:text-white/80 transition-colors">
                Integrated Facility Management Services
              </span>
              <span className="h-px w-10 sm:w-16 bg-white/20" />
            </div>
          </motion.div>
        </div>

        {/* ─── Bottom Bar: Back to Top, Replay Intro & Legal ─── */}
        <div className="py-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/45">
          <div>
            © {new Date().getFullYear()} G1 Ops Facility Services Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="hover:text-brand-red flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Replay Intro</span>
                <span className="text-sm">↺</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="group hover:text-white flex items-center gap-2 transition-all cursor-pointer px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <span>Back to Top</span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="text-brand-red font-bold"
              >
                ↑
              </motion.span>
            </button>

            <a
              href="https://www.g1ops.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red hover:underline font-heading font-bold"
            >
              g1ops.in ↗
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
