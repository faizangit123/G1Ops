import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const stats = [
  { value: '100%', label: 'Shift compliance', desc: 'Supervised checklists. Every surface cleaned, every system checked.' },
  { value: '24/7', label: 'Helpdesk support', desc: 'Round-the-clock response for breakdowns, escalations and emergencies.' },
  { value: 'Pan-India', label: 'Service coverage', desc: 'Local teams across 10+ cities backed by national operations.' },
]

export default function ServicesVisual() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const orbImgScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])

  return (
    <section id="services" ref={ref} className="relative bg-brand-navy py-24 md:py-36 overflow-hidden">
      {/* Glow effects */}
      <div className="pointer-events-none absolute top-[10%] left-[15%] w-[450px] h-[400px] rounded-full bg-brand-red/[0.05] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[5%] right-[10%] w-[350px] h-[300px] rounded-full bg-brand-red/[0.03] blur-[120px]" />

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden">
        <motion.span
          className="font-display font-[800] text-white/[0.012] whitespace-nowrap"
          style={{ fontSize: 'clamp(7rem, 22vw, 18rem)', x: useTransform(scrollYProgress, [0, 1], ['3%', '-3%']) }}
        >
          G1 OPS
        </motion.span>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            className="flex items-center gap-2.5 mb-4"
            initial={{ opacity: 0, x: -14 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <span className="w-6 h-px bg-brand-red" />
            <span className="font-heading text-[0.6rem] tracking-[0.3em] uppercase text-white/30 font-medium">
              One Contract
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-end">
            <motion.h2
              className="font-display font-[800] text-white leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.6rem)' }}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Integrated facility services.{' '}
              <span className="text-brand-red">Zero excuses.</span>
            </motion.h2>

            <motion.p
              className="text-sm md:text-base text-white/30 leading-relaxed max-w-sm lg:ml-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Housekeeping, security, engineering and payroll — consolidated.
              No finger-pointing between vendors. One team runs everything.
            </motion.p>
          </div>
        </div>

        {/* ─── Orbit image + Motto ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center mb-20 md:mb-28">
          {/* Orbital diagram */}
          <motion.div
            className="lg:col-span-3 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div className="relative w-full max-w-[520px]" style={{ scale: orbImgScale }}>
              <img
                src="/images/services-orbit.png"
                alt="G1 Ops services — Housekeeping, Security, Engineering, Payroll — one contract"
                className="w-full h-auto drop-shadow-[0_8px_40px_rgba(196,30,58,0.08)]"
              />
              {/* Subtle pulsing ring around the diagram */}
              <motion.div
                className="absolute inset-[8%] rounded-full border border-white/[0.04]"
                animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>

          {/* Motto */}
          <motion.div
            className="lg:col-span-2 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col gap-2 mb-7">
              {['Quality', 'Integrity', 'Excellence'].map((w, i) => (
                <motion.span
                  key={w}
                  className="font-display font-[800] text-white leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}
                  initial={{ opacity: 0, x: -20, filter: 'blur(6px)' }}
                  animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  {w}
                  <span className="text-brand-red">.</span>
                </motion.span>
              ))}
            </div>

            <motion.p
              className="text-sm text-white/30 leading-relaxed max-w-xs mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.95 }}
            >
              Every decision, every hire, every checklist is built on these three pillars —
              delivering reliable facility operations across India.
            </motion.p>
          </motion.div>
        </div>

        {/* ─── Stats row ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.05]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="group relative p-7 md:p-8 border-b md:border-b-0 md:border-r border-white/[0.05] last:border-r-0 last:border-b-0"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            >
              <div className="absolute inset-0 bg-white/[0.006] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative block font-display text-2xl md:text-3xl font-[800] text-brand-red mb-0.5">
                {s.value}
              </span>
              <span className="relative block font-heading text-[0.55rem] tracking-[0.2em] uppercase text-white/20 mb-4 font-medium">
                {s.label}
              </span>
              <p className="relative text-sm text-white/30 leading-relaxed">{s.desc}</p>
              <span className="relative block mt-5 w-0 h-px bg-brand-red group-hover:w-9 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
