import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'
import Logo from './Logo'

// Smooth easeOutExpo counter using requestAnimationFrame
function useAnimatedCounter(target, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const start = performance.now()

    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // easeOutExpo curve for smooth deceleration
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [target, duration])

  return value
}

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState(0) // 0: init, 1: line, 2: logo, 3: tagline, 4: exit
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  const percent = useAnimatedCounter(100, 750)

  // Phase scheduling — brisk, snappy, yet premium sequence
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 50),     // Horizon line expands
      setTimeout(() => setPhase(2), 250),    // Logo rises in
      setTimeout(() => setPhase(3), 650),    // Motto + tagline fade in
      setTimeout(() => setPhase(4), 1450),   // Begin exit
      setTimeout(() => onCompleteRef.current(), 1950), // Hand over to home
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const handleSkip = useCallback(() => {
    setPhase(4)
    setTimeout(() => onCompleteRef.current(), 350)
  }, [])

  // Shared spring-like ease
  const smoothEase = [0.22, 1, 0.36, 1]
  const shutterEase = [0.76, 0, 0.24, 1]

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden">
      {/* ─── TOP SHUTTER ─── */}
      <motion.div
        className="absolute top-0 inset-x-0 h-1/2 bg-brand-navy z-20"
        initial={{ y: 0 }}
        animate={phase >= 4 ? { y: '-100%' } : { y: 0 }}
        transition={{ duration: 0.55, ease: shutterEase }}
      />

      {/* ─── BOTTOM SHUTTER ─── */}
      <motion.div
        className="absolute bottom-0 inset-x-0 h-1/2 bg-brand-navy z-20"
        initial={{ y: 0 }}
        animate={phase >= 4 ? { y: '100%' } : { y: 0 }}
        transition={{ duration: 0.55, ease: shutterEase }}
      />

      {/* ─── Thin red split line at seam ─── */}
      <motion.div
        className="absolute left-0 right-0 top-1/2 -translate-y-px h-[2px] bg-brand-red/40 z-20"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={
          phase >= 4
            ? { scaleX: 0, opacity: 0 }
            : phase >= 1
              ? { scaleX: 1, opacity: 1 }
              : { scaleX: 0, opacity: 0 }
        }
        transition={{ duration: phase >= 4 ? 0.2 : 0.45, ease: smoothEase }}
      />

      {/* ─── CENTER CONTENT LAYER ─── */}
      <motion.div
        className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6"
        animate={
          phase >= 4
            ? { opacity: 0, scale: 1.06, filter: 'blur(5px)' }
            : { opacity: 1, scale: 1, filter: 'blur(0px)' }
        }
        transition={{ duration: 0.45, ease: smoothEase }}
      >
        {/* Ambient Red Glow — fades in gently */}
        <motion.div
          className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-brand-red/[0.07] blur-[180px]"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />

        {/* ─── Corner Details ─── */}
        <motion.div
          className="absolute top-6 left-6 sm:top-8 sm:left-10 flex items-center gap-2 text-white/40 font-heading text-[0.62rem] sm:text-xs tracking-[0.25em] uppercase"
          initial={{ opacity: 0, x: -10 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span>G1 OPS · FACILITY SERVICES</span>
        </motion.div>

        <motion.div
          className="absolute top-6 right-6 sm:top-8 sm:right-10"
          initial={{ opacity: 0, x: 10 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
        >
          <button
            onClick={handleSkip}
            className="px-3.5 py-1.5 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-brand-red hover:bg-brand-red/10 text-[0.65rem] font-heading tracking-widest uppercase transition-all duration-200 cursor-pointer"
          >
            Skip Intro ➔
          </button>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 text-white/35 font-heading text-[0.6rem] sm:text-[0.68rem] tracking-[0.2em] uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
        >
          HQ CHENNAI · 10+ CITIES · INTEGRATED FM
        </motion.div>

        <motion.div
          className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 text-white/40 font-heading text-xs tracking-widest font-mono"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
        >
          <span className="text-brand-red font-bold tabular-nums">{percent}%</span>
          <span className="text-white/30"> / READY</span>
        </motion.div>

        {/* ─── Center Hero Assembly ─── */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">
          {/* Top Horizon Line */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.55, ease: smoothEase }}
          />

          {/* Logo Reveal — rises from below with gentle scale */}
          <motion.div
            className="flex justify-center mb-6 overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={phase >= 2 ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <Logo className="w-64 sm:w-80 md:w-[420px] h-auto drop-shadow-[0_10px_25px_rgba(250,0,0,0.25)]" variant="white" />
          </motion.div>

          {/* Brand Motto — staggered word reveal */}
          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-6 my-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={phase >= 3 ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            {['QUALITY', '—', 'INTEGRITY', '—', 'EXCELLENCE'].map((word, idx) => (
              <motion.span
                key={idx}
                className={`font-heading text-xs sm:text-sm font-bold tracking-[0.22em] ${
                  word === '—' ? 'text-brand-red' : 'text-white/80'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.05,
                  ease: smoothEase,
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="font-body text-xs sm:text-sm text-white/50 tracking-wider max-w-md mt-2 font-light"
            initial={{ opacity: 0, y: 6 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2, ease: smoothEase }}
          >
            Facility services you never think about.
          </motion.p>

          {/* Bottom Accent Line */}
          <motion.div
            className="w-48 h-0.5 bg-brand-red rounded-full mt-6"
            initial={{ scaleX: 0 }}
            animate={phase >= 3 ? { scaleX: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.25, ease: smoothEase }}
          />
        </div>
      </motion.div>
    </div>
  )
}
