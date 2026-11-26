import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion'

const services = [
  {
    id: 'housekeeping',
    num: '01',
    level: 'LVL 01', // Fixed: Corrected from LVL 02 to LVL 01
    title: 'Housekeeping',
    tag: 'Custodial & Sanitization',
    zone: 'Corporate Workspace & Sterile Floor Plates',
    desc: 'Spotless commercial environments across every shift. Trained custodial teams equipped with mechanized scrubbing machines, hospital-grade disinfectants, and supervisor audit tablets.',
    metrics: [
      { label: 'Audit Standard', value: '100% Checklist SLA' },
      { label: 'Equipment', value: 'Mechanized Scrubbers' },
      { label: 'Chemicals', value: 'Eco-Certified Green' },
    ],
    features: [
      'Daily automated floor scrubbing & stain extraction',
      'Continuous washroom hygiene audits & restocking',
      'Waste segregation & eco-disposal protocols',
    ],
    accentColor: '#FA0000',
  },
  {
    id: 'security',
    num: '02',
    level: 'LVL 02', // Fixed: Corrected from LVL 01 to LVL 02
    title: 'Security',
    tag: 'Guarding & Perimeter Access',
    zone: 'Gate Complex, Loading Bays & Biometric Checkpoints',
    desc: 'Vetted, disciplined security personnel safeguarding perimeter gates, staff entries, loading bays, and valuable assets with round-the-clock surveillance and digital logs.',
    metrics: [
      { label: 'Gate Security', value: 'Biometric & Logged' },
      { label: 'Response Protocol', value: '< 3 Min Escalation' },
      { label: 'Surveillance', value: '24/7 CCTV & Patrol' },
    ],
    features: [
      'Perimeter guarding & visitor badge management',
      'Strict material in/out register documentation',
      'Electronic guard tour verification & night patrols',
    ],
    accentColor: '#FA0000',
  },
  {
    id: 'engineering',
    num: '03',
    level: 'LVL 03',
    title: 'Engineering',
    tag: 'Critical MEP & Preventative Care',
    zone: 'Utility Plant, DG Backup & High-Tension Substations',
    desc: 'Preventative and predictive maintenance keeping HVAC chillers, backup DG generators, electrical distribution boards, and fire protection networks running without stoppage.',
    metrics: [
      { label: 'Power & Climate', value: '99.98% Uptime' },
      { label: 'Breakdown SLA', value: 'Immediate On-Site' },
      { label: 'Compliance', value: 'National Fire Code' },
    ],
    features: [
      'Chiller, AHU, and air balancing maintenance',
      'HT/LT electrical panels & automatic transfer switches',
      'Pumps, RO plants, and fire suppression testing',
    ],
    accentColor: '#FA0000',
  },
  {
    id: 'payroll',
    num: '04',
    level: 'LVL 04',
    title: 'Payroll Services',
    tag: 'Workforce Governance & PF/ESI',
    zone: 'Central Administration & Statutory Compliance',
    desc: 'End-to-end workforce administration under a single contract. Flawless PF, ESI, statutory tax filings, insurance documentation, and on-time salary disbursements.',
    metrics: [
      { label: 'Statutory Filings', value: '100% Verified PF/ESI' },
      { label: 'Disbursement', value: 'Zero-Delay Schedule' },
      { label: 'Governance', value: 'Single Contractor' },
    ],
    features: [
      'Complete PF, ESI, and bonus statutory documentation',
      'Transparent monthly computerized payroll reports',
      'On-demand workforce ramp-up & shift replacement',
    ],
    accentColor: '#FA0000',
  },
]

export default function Hero({ servicesOnly = false }) {
  const [activeService, setActiveService] = useState(services[0])
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })
  const shouldReduceMotion = useReducedMotion()

  const words = 'Facility services you never think about.'.split(' ')

  const scrollToServices = () => {
    const el = document.getElementById('services-matrix')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative w-full bg-brand-cream">
      {/* ─── DESKTOP-FITTED HERO STAGE (Fits completely in 100vh on Desktop) ─── */}
      {!servicesOnly && (
        <section
          id="home"
          ref={ref}
          className="relative min-h-screen lg:h-screen lg:max-h-[940px] flex flex-col justify-between pt-22 sm:pt-24 lg:pt-24 pb-4 sm:pb-6 overflow-hidden select-none"
        >
        {/* ─── Architectural Grid & Blueprint Accents ─── */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-brand-navy) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-navy) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Layered Ambient Depth Lights */}
        <div className="pointer-events-none absolute top-1/4 right-[5%] w-[500px] h-[500px] rounded-full bg-brand-red/[0.04] blur-[160px]" />
        <div className="pointer-events-none absolute bottom-1/3 left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-navy/[0.03] blur-[140px]" />

        <div className="relative mx-auto w-full max-w-[1360px] px-6 md:px-10 lg:px-14 flex-1 flex flex-col justify-between">
          
          {/* ─── Top Telemetry & Operational Calipers (High Contrast, Crisp & Bold) ─── */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-5 pb-3 border-b border-brand-navy/[0.08] bg-white/70 backdrop-blur-sm rounded-2xl px-4 sm:px-5 py-2.5 border border-brand-navy/[0.07] shadow-xs">
            {/* Left Status */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-red" />
              </span>
              <span className="font-heading text-[0.72rem] sm:text-[0.78rem] tracking-wider uppercase text-brand-navy font-bold">
                Pan-India Integrated Facility Management
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-brand-navy/30" />
              <span className="hidden sm:inline-block font-heading text-[0.7rem] sm:text-[0.74rem] tracking-wide uppercase text-brand-navy/60 font-semibold">
                Offices · Plants · Hospitals · Logistics
              </span>
            </div>

            {/* Right Status */}
            <div className="flex items-center gap-3 text-xs font-heading tracking-wide">
              <span className="font-bold text-brand-navy tracking-wider uppercase text-[0.72rem] sm:text-[0.78rem]">
                HQ CHENNAI · LAT 13.1489° N
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/20" />
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-red/10 border border-brand-red/25 text-brand-red font-black uppercase text-[0.7rem] sm:text-[0.76rem] tracking-wider shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                24/7 SERVICE COVERAGE ACTIVE
              </span>
            </div>
          </div>

          {/* ─── Main Hero Split Composition (Proportioned for Desktop Viewport) ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-2">
            
            {/* Left Column: Bold Headline, Subtitle, Actions & Guarantees */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Category Pill */}
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-navy/12 shadow-xs mb-3 sm:mb-4 w-fit"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span className="font-heading text-[0.68rem] tracking-[0.18em] uppercase text-brand-navy font-bold">
                  Zero-Downtime Facility Services
                </span>
              </motion.div>

              {/* Monumental Headline in Editorial Serif (like CBRE in Image 1) */}
              <h1
                className="font-display font-[700] leading-[1.0] tracking-normal mb-4 sm:mb-5"
                style={{ fontSize: 'clamp(2.4rem, 4.4vw, 4.2rem)' }}
              >
                {words.map((word, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden"
                    style={{ marginRight: '0.24em', verticalAlign: 'top' }}
                  >
                    {word === 'never' ? (
                      <span className="relative inline-block text-brand-red">
                        <motion.span
                          className="inline-block font-extrabold"
                          initial={shouldReduceMotion ? { y: '0%' } : { y: '115%' }}
                          animate={inView ? { y: '0%' } : {}}
                          transition={{
                            duration: 0.7,
                            delay: 0.2 + i * 0.04,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          never
                        </motion.span>
                        {/* Animated wave underline */}
                        <motion.svg
                          className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2 text-brand-red overflow-visible pointer-events-none"
                          viewBox="0 0 100 12"
                          fill="none"
                          preserveAspectRatio="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                          transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
                        >
                          <motion.path
                            d="M2 9C28 2 72 2 98 8"
                            stroke="currentColor"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                          />
                        </motion.svg>
                      </span>
                    ) : (
                      <motion.span
                        className="inline-block text-brand-navy"
                        initial={shouldReduceMotion ? { y: '0%' } : { y: '115%' }}
                        animate={inView ? { y: '0%' } : {}}
                        transition={{
                          duration: 0.7,
                          delay: 0.2 + i * 0.04,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {word}
                      </motion.span>
                    )}
                  </span>
                ))}
              </h1>

              {/* Paragraph Description */}
              <motion.p
                className="font-body text-sm sm:text-base md:text-[1.05rem] text-brand-navy/75 leading-relaxed max-w-xl font-normal mb-5 sm:mb-6"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Trained, supervised teams for offices, plants and hospitals across India.
                Clean floors, safe gates and running equipment, every shift.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-5"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 bg-brand-red text-white text-[0.84rem] font-heading font-bold tracking-wide rounded-full overflow-hidden shadow-md shadow-brand-red/25 hover:shadow-lg hover:shadow-brand-red/35 transition-all duration-300"
                >
                  <span className="relative z-10">Schedule Site Audit</span>
                  <svg
                    className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="absolute inset-0 bg-brand-red-dark origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </motion.a>

                <motion.a
                  href="tel:+919840712768"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(1, 24, 77, 0.05)' }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-brand-navy/20 text-brand-navy text-[0.84rem] font-heading font-bold tracking-wide rounded-full hover:border-brand-navy/40 transition-all duration-300 bg-white/50"
                >
                  <span>Call +91 98407 12768</span>
                </motion.a>
              </motion.div>

              {/* Quick Live Guarantee Indicators */}
              <motion.div
                className="flex flex-wrap items-center gap-3 sm:gap-4 text-[0.72rem] sm:text-[0.76rem] font-heading font-bold text-brand-navy/65 pt-1"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-brand-red font-black">✓</span> 100% PF/ESI Compliant
                </span>
                <span className="w-1 h-1 rounded-full bg-brand-navy/25" />
                <span className="flex items-center gap-1.5">
                  <span className="text-brand-red font-black">✓</span> ISO 9001:2015 Audited
                </span>
                <span className="w-1 h-1 rounded-full bg-brand-navy/25" />
                <span className="flex items-center gap-1.5">
                  <span className="text-brand-red font-black">✓</span> Single SLA Accountability
                </span>
              </motion.div>
            </div>

            {/* Right Column: Layered Facility Command Center Blueprint (Fit for Desktop) */}
            <div className="lg:col-span-5">
              <motion.div
                className="relative rounded-3xl bg-brand-navy p-5 sm:p-6 text-white overflow-hidden shadow-2xl border border-brand-navy-light"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Subtle Grid Watermark in Blueprint */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                  }}
                />

                {/* Glowing Red Radar Core */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-red/[0.18] blur-3xl" />

                {/* Panel Header */}
                <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
                    <span className="font-heading text-xs uppercase tracking-widest text-white/70 font-bold">
                      Facility Service Matrix
                    </span>
                  </div>
                  <span className="font-mono text-[0.65rem] text-brand-red font-bold bg-brand-red/10 border border-brand-red/20 px-2.5 py-0.5 rounded-full">
                    SERVICE OVERVIEW
                  </span>
                </div>

                {/* ─── Interactive 4-Level Architectural Floor Plates (Corrected Level Numbers) ─── */}
                <div className="relative z-10 space-y-2 mb-4">
                  {services.map((item) => {
                    const isActive = activeService.id === item.id
                    return (
                      <div
                        key={item.id}
                        onClick={() => setActiveService(item)}
                        onMouseEnter={() => setActiveService(item)}
                        onFocus={() => setActiveService(item)}
                        tabIndex={0}
                        role="button"
                        aria-selected={isActive}
                        className={`group relative p-2.5 sm:p-3 rounded-xl transition-all duration-300 cursor-pointer border text-left ${
                          isActive
                            ? 'bg-white/10 border-brand-red/60 shadow-lg scale-[1.01]'
                            : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/5 hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                                isActive ? 'bg-brand-red text-white' : 'bg-white/10 text-white/60'
                              }`}
                            >
                              {item.level}
                            </span>
                            <div>
                              <h3 className="font-heading text-sm font-bold tracking-tight text-white leading-tight">
                                {item.title}
                              </h3>
                              <span className="text-[0.65rem] font-heading text-white/55 block">
                                {item.tag}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span
                              className={`font-mono text-[0.68rem] font-semibold ${
                                isActive ? 'text-brand-red' : 'text-white/40'
                              }`}
                            >
                              {item.metrics[0].value}
                            </span>
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                                isActive
                                  ? 'bg-brand-red text-white'
                                  : 'bg-white/5 text-white/40 group-hover:text-white'
                              }`}
                            >
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Active Zone Detail Capsule */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="relative z-10 pt-3 border-t border-white/10"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[0.65rem] font-heading uppercase tracking-wider text-brand-red font-bold">
                        Facility Focus: {activeService.zone}
                      </span>
                      <span className="text-[0.65rem] font-heading uppercase text-white/50">
                        Standard: ISO SLA
                      </span>
                    </div>
                    <p className="text-xs text-white/75 leading-relaxed font-body">
                      {activeService.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* Bottom Stage Hint: Scroll to explore */}
          <div className="flex items-center justify-between pt-1 border-t border-brand-navy/[0.06]">
            <span className="font-heading text-[0.68rem] tracking-wider uppercase text-brand-navy/40 font-semibold">
              Integrated Facility Services · Chennai HQ
            </span>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center gap-1.5 text-[0.72rem] font-heading font-bold text-brand-navy/60 hover:text-brand-red transition-colors cursor-pointer group"
            >
              <span>Explore Facility Services</span>
              <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </button>
          </div>

        </div>
        </section>
      )}

      {/* ─── 4 SERVICES INTERACTIVE DEEP DIVE SECTION (Seamless Continuation) ─── */}
      <section id="services-matrix" className={`${servicesOnly ? 'pt-32' : ''} py-20 md:py-28 bg-white border-t border-brand-navy/10`}>
        <div className="mx-auto max-w-[1360px] px-6 md:px-10 lg:px-14">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 pb-6 border-b border-brand-navy/[0.08]">
            <div>
              <span className="font-heading text-[0.68rem] tracking-[0.25em] uppercase text-brand-red font-bold block mb-1">
                Integrated Service Matrix
              </span>
              <h2 className="font-display font-[700] text-2xl sm:text-4xl text-brand-navy tracking-normal">
                One unified partner across four facility services.
              </h2>
            </div>
            <span className="font-heading text-xs text-brand-navy/50 font-medium">
              Select or hover a service to inspect key deliverables & commitments
            </span>
          </div>

          {/* 4 Interactive Discipline Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {services.map((item) => {
              const isActive = activeService.id === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveService(item)}
                  onMouseEnter={() => setActiveService(item)}
                  className={`group relative p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-brand-cream border-brand-red/50 shadow-md shadow-brand-navy/5 scale-[1.02]'
                      : 'bg-white hover:bg-brand-cream/60 border-brand-navy/10 hover:border-brand-navy/25'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDisciplinePill"
                      className="absolute top-0 left-0 right-0 h-1 bg-brand-red rounded-t-2xl"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-brand-red tracking-wider">
                      {item.num}
                    </span>
                    <span className="text-[0.62rem] font-mono text-brand-navy/40 font-semibold uppercase">
                      {item.level}
                    </span>
                  </div>

                  <h3 className="font-heading text-base sm:text-lg font-bold text-brand-navy group-hover:text-brand-red transition-colors mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-brand-navy/55 line-clamp-1 font-body">
                    {item.tag}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Active Discipline Feature Card */}
          <div className="rounded-3xl bg-brand-navy text-white p-6 sm:p-10 border border-brand-navy-light shadow-xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-wider block mb-2">
                  SERVICE DISCIPLINE: {activeService.num} / 04
                </span>
                <h3 className="font-display font-[700] text-2xl sm:text-3xl text-white mb-3">
                  {activeService.title}
                </h3>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed font-body mb-6 max-w-xl">
                  {activeService.desc}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 mb-6">
                  {activeService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                      <span className="text-brand-red font-bold">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-red text-white text-xs sm:text-sm font-heading font-bold rounded-full hover:bg-brand-red-dark transition-colors shadow-sm"
                >
                  <span>Request {activeService.title} SLA Proposal</span>
                  <span>→</span>
                </a>
              </div>

              {/* Metrics Column */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-3.5 bg-white/5 p-5 rounded-2xl border border-white/10">
                <span className="text-[0.68rem] font-mono text-white/50 uppercase tracking-wider block">
                  SERVICE LEVEL AGREEMENTS
                </span>
                {activeService.metrics.map((m, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                    <span className="text-xs text-white/70 font-heading">{m.label}</span>
                    <span className="font-mono text-xs font-bold text-brand-red">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
