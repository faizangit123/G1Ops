import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function IntroAnimation({ onComplete }) {
  const [percent, setPercent] = useState(0)
  const [phase, setPhase] = useState(1) // 1: counter, 2: logo, 3: tagline, 4: exit
  const [isSkipped, setIsSkipped] = useState(false)

  // Counter from 0 to 100%
  useEffect(() => {
    let start = 0
    const interval = setInterval(() => {
      start += Math.floor(Math.random() * 18) + 8
      if (start >= 100) {
        start = 100
        setPercent(100)
        clearInterval(interval)
      } else {
        setPercent(start)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  // Phase scheduling
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(2), 700),   // Reveal Logo
      setTimeout(() => setPhase(3), 1600),  // Reveal Motto & Tagline
      setTimeout(() => setPhase(4), 3100),  // Trigger split shutter exit
      setTimeout(() => onComplete(), 3900), // Complete handover
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  const handleSkip = () => {
    setIsSkipped(true)
    setPhase(4)
    setTimeout(() => onComplete(), 500)
  }

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden">
      {/* ─── TOP SHUTTER (slides UP on exit) ─── */}
      <motion.div
        className="absolute top-0 inset-x-0 h-1/2 bg-brand-navy z-20 border-b border-brand-red/30 flex flex-col justify-end items-center"
        initial={{ y: 0 }}
        animate={phase >= 4 ? { y: '-100%' } : { y: 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* ─── BOTTOM SHUTTER (slides DOWN on exit) ─── */}
      <motion.div
        className="absolute bottom-0 inset-x-0 h-1/2 bg-brand-navy z-20 border-t border-brand-red/30 flex flex-col justify-start items-center"
        initial={{ y: 0 }}
        animate={phase >= 4 ? { y: '100%' } : { y: 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* ─── CENTER CONTENT LAYER ─── */}
      <motion.div
        className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6"
        animate={phase >= 4 ? { opacity: 0, scale: 1.05 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Subtle Ambient Red Glow */}
        <div className="pointer-events-none absolute w-[600px] h-[600px] rounded-full bg-brand-red/[0.08] blur-[160px]" />

        {/* ─── Architectural Telemetry in Corners ─── */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-10 flex items-center gap-2 text-white/40 font-heading text-[0.62rem] sm:text-xs tracking-[0.25em] uppercase">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span>G1 OPS · FACILITY SERVICES</span>
        </div>

        <div className="absolute top-6 right-6 sm:top-8 sm:right-10 flex items-center gap-3">
          <button
            onClick={handleSkip}
            className="px-3.5 py-1.5 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-brand-red hover:bg-brand-red/10 text-[0.65rem] font-heading tracking-widest uppercase transition-all duration-200 cursor-pointer"
          >
            Skip Intro ➔
          </button>
        </div>

        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 text-white/35 font-heading text-[0.6rem] sm:text-[0.68rem] tracking-[0.2em] uppercase">
          HQ CHENNAI · 10+ CITIES · INTEGRATED FM
        </div>

        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 text-white/40 font-heading text-xs tracking-widest font-mono">
          <span className="text-brand-red font-bold">{percent}%</span> / READY
        </div>

        {/* ─── Center Hero Assembly ─── */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
          {/* Laser Horizon Line (expands horizontally) */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-brand-red to-transparent mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Logo Reveal */}
          <motion.div
            className="flex justify-center mb-6 overflow-hidden"
            initial={{ opacity: 0, y: 35, scale: 0.92 }}
            animate={phase >= 2 ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo className="w-64 sm:w-80 md:w-[420px] h-auto drop-shadow-[0_10px_25px_rgba(250,0,0,0.25)]" variant="white" />
          </motion.div>

          {/* Brand Motto Reveal */}
          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-6 my-4 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {['QUALITY', '—', 'INTEGRITY', '—', 'EXCELLENCE'].map((word, idx) => (
              <span
                key={idx}
                className={`font-heading text-xs sm:text-sm font-bold tracking-[0.22em] ${
                  word === '—' ? 'text-brand-red' : 'text-white/80'
                }`}
              >
                {word}
              </span>
            ))}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="font-body text-xs sm:text-sm text-white/50 tracking-wider max-w-md mt-2 font-light"
            initial={{ opacity: 0 }}
            animate={phase >= 3 ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Facility services you never think about.
          </motion.p>

          {/* Bottom Horizon Line */}
          <motion.div
            className="w-48 h-0.5 bg-brand-red rounded-full mt-6"
            initial={{ scaleX: 0 }}
            animate={phase >= 3 ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </div>
  )
}
