import { useState, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const cities = [
  { name: 'Chennai', tag: 'Headquarters', active: true, facilities: '85+ Active Facilities' },
  { name: 'Bangalore', tag: 'Regional Hub', active: true, facilities: '60+ Active Facilities' },
  { name: 'Mumbai', tag: 'Commercial Hub', active: true, facilities: '45+ Active Facilities' },
  { name: 'Delhi NCR', tag: 'North Hub', active: true, facilities: '40+ Active Facilities' },
  { name: 'Hyderabad', tag: 'Tech Corridor', active: true, facilities: '50+ Active Facilities' },
  { name: 'Pune', tag: 'Industrial Hub', active: true, facilities: '35+ Active Facilities' },
  { name: 'Kolkata', tag: 'East Operations', active: true, facilities: '25+ Active Facilities' },
  { name: 'Ahmedabad', tag: 'Manufacturing Zone', active: true, facilities: '30+ Active Facilities' },
  { name: 'Coimbatore', tag: 'Textile & Eng.', active: true, facilities: '28+ Active Facilities' },
  { name: 'Kochi', tag: 'South Coastal', active: true, facilities: '20+ Active Facilities' },
]

export default function HometownSection() {
  const [selectedCity, setSelectedCity] = useState(cities[0])
  const [isPaused, setIsPaused] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const shouldReduceMotion = useReducedMotion()

  // Triple items for seamless loop
  const marqueeItems = [...cities, ...cities, ...cities]

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 bg-brand-cream overflow-hidden"
    >
      {/* Warm Ambient Gradient Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-warm/60 via-transparent to-brand-warm/40" />

      {/* Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-brand-navy) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-navy) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto max-w-[1360px] px-6 md:px-10 lg:px-14">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          {/* Top Decorative Needle */}
          <motion.div
            className="flex flex-col items-center gap-2 mb-8"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span className="w-px h-12 bg-gradient-to-b from-brand-red to-brand-navy/10" />
            <span className="font-heading text-[0.68rem] tracking-[0.3em] uppercase text-brand-gray font-semibold mt-1">
              National Presence · Local Execution
            </span>
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden mb-2">
            <motion.h2
              className="font-display font-[800] text-brand-navy leading-[0.94] tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 5.8vw, 5.2rem)' }}
              initial={shouldReduceMotion ? { y: '0%' } : { y: '100%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              Home town team
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h2
              className="font-display font-[800] text-brand-red leading-[0.94] tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 5.8vw, 5.2rem)' }}
              initial={shouldReduceMotion ? { y: '0%' } : { y: '100%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            >
              in your city.
            </motion.h2>
          </div>

          {/* Body */}
          <motion.p
            className="text-base md:text-xl text-brand-navy/60 leading-relaxed max-w-xl mx-auto font-body font-normal"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            Home town supervisors, home town staff and a central operations headquarters in Chennai.
            Local teams who understand local nuances, backed by robust statutory governance.
          </motion.p>
        </div>
      </div>

      {/* ─── Infinite Scrolling Marquee Ribbon (Slows on hover) ─── */}
      <div
        className="relative w-full py-4 bg-brand-navy/[0.03] border-y border-brand-navy/[0.06] mb-14 overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex whitespace-nowrap gap-8 w-max"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: ['0%', '-33.333%'],
                }
          }
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: isPaused ? 60 : 25,
              ease: 'linear',
            },
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 text-brand-navy/70 hover:text-brand-navy transition-colors cursor-pointer"
              onClick={() => setSelectedCity(item)}
            >
              <span className="font-display font-[700] text-base md:text-lg tracking-wide uppercase">
                {item.name}
              </span>
              <span className="text-[0.68rem] font-heading font-medium tracking-wider text-brand-red uppercase px-2.5 py-0.5 rounded-full bg-brand-red/10 border border-brand-red/15">
                {item.tag}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/20 ml-2" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── Interactive City Pills & Live Hub Display ─── */}
      <div className="relative mx-auto max-w-[1360px] px-6 md:px-10 lg:px-14">
        {/* Selected Hub Spotlight Box */}
        <div className="max-w-2xl mx-auto mb-10 p-5 rounded-2xl bg-white border border-brand-navy/10 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red" />
            </span>
            <div>
              <span className="text-xs font-heading font-semibold text-brand-navy uppercase tracking-wider block">
                Active Operations Hub: <span className="text-brand-red">{selectedCity.name}</span>
              </span>
              <span className="text-[0.72rem] text-brand-navy/55 font-body">
                {selectedCity.tag} · {selectedCity.facilities}
              </span>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-heading font-semibold text-brand-navy hover:text-brand-red transition-colors flex items-center gap-1"
          >
            <span>Deploy Team</span>
            <span>→</span>
          </a>
        </div>

        {/* City Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {cities.map((c, i) => {
            const isSelected = selectedCity.name === c.name
            return (
              <motion.button
                key={c.name}
                onClick={() => setSelectedCity(c)}
                className={`group relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'bg-brand-navy text-white border-brand-navy shadow-md scale-105'
                    : 'bg-white/80 hover:bg-white text-brand-navy border-brand-navy/10 hover:border-brand-red/40 shadow-sm'
                }`}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: isSelected ? 1.05 : 1 } : {}}
                transition={{ duration: 0.35, delay: 0.6 + i * 0.03 }}
                whileHover={{ y: -2 }}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isSelected ? 'bg-brand-red scale-125' : 'bg-brand-red/70 group-hover:bg-brand-red'
                  }`}
                />
                <span className="font-heading text-xs sm:text-sm font-semibold tracking-wide">
                  {c.name}
                </span>
                <span
                  className={`text-[0.62rem] font-heading font-medium tracking-wider uppercase ${
                    isSelected ? 'text-white/60' : 'text-brand-navy/40 group-hover:text-brand-red'
                  }`}
                >
                  {c.tag}
                </span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Central Hub Note */}
        <div className="text-center mt-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy/60 font-heading text-xs font-medium">
            <svg className="w-3.5 h-3.5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Registered Corporate HQ: 200 Ft Inner Ring Rd, Madhavaram, Chennai – 600 110
          </span>
        </div>
      </div>
    </section>
  )
}
