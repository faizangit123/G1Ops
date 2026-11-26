import { useState, useRef } from 'react'
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion'

const sectors = [
  {
    id: 'corporate',
    num: '01',
    title: 'Corporate & Technology Parks',
    tag: 'High-Density Workspaces',
    description:
      'Engineered for premium IT hubs, corporate headquarters, and multi-tenant campuses where first impressions and flawless uptime dictate day-to-day productivity.',
    requirements: [
      'Zero-interruption day custodial routines with noiseless mechanized equipment',
      'Visitor desk security with integrated visitor management & access badges',
      'HVAC chiller balancing, IAQ monitoring, and precision power backup',
    ],
    sla: '99.9% Climate & Power Uptime',
    benchmark: 'Class-A Corporate Standard',
    workforce: 'Multi-Skilled Shift Teams',
  },
  {
    id: 'industrial',
    num: '02',
    title: 'Manufacturing & Industrial Plants',
    tag: 'Heavy-Duty & Regulated',
    description:
      'Rigorous facility support for automobile, pharma, chemical, and heavy engineering facilities with strict environmental and worker safety protocols.',
    requirements: [
      'Industrial ride-on floor scrubber deployment for oil, grease & metal swarf',
      'Perimeter patrolling, weighbridge management & material in/out logging',
      'High-tension substation maintenance, DG synchronization & fire hydrant readiness',
    ],
    sla: '24/7 Zero-Halt Operations',
    benchmark: 'ISO & Factory Inspectorate Ready',
    workforce: 'Certified Industrial Specialists',
  },
  {
    id: 'healthcare',
    num: '03',
    title: 'Hospitals & Healthcare Campuses',
    tag: 'Sterile & Life-Critical',
    description:
      'Sterile cleaning and vigilant access management tailored for multi-specialty hospitals, research diagnostic centers, and surgical suites.',
    requirements: [
      'Multi-color-coded microfiber cross-contamination prevention routines',
      'Strict biomedical waste segregation, manifest tracking, and disposal audits',
      'Emergency room crowd control, ambulance bay clearance & night security',
    ],
    sla: '100% Infection-Control SLA',
    benchmark: 'NABH & JCI Hygiene Aligned',
    workforce: 'Sterility-Trained Custodians',
  },
  {
    id: 'logistics',
    num: '04',
    title: 'Supply Chain & Logistics Parks',
    tag: 'High-Throughput Distribution',
    description:
      'End-to-end facility governance for massive automated fulfillment centers, cross-dock warehouses, and cold chain storage hubs.',
    requirements: [
      'Dust-free mechanized sweeping across 500,000+ sq. ft. floor plates',
      'Perimeter CCTV monitoring, truck yard security & driver credential verification',
      'Dock leveler maintenance, high-bay lighting repair & electrical safety checks',
    ],
    sla: 'Round-the-Clock Dispatch Flow',
    benchmark: 'Supply Chain Security Audited',
    workforce: 'Rostered 3-Shift Manpower',
  },
]

export default function SectorsSection() {
  const [selectedId, setSelectedId] = useState('corporate')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const shouldReduceMotion = useReducedMotion()

  const currentSector = sectors.find((s) => s.id === selectedId) || sectors[0]

  return (
    <section ref={ref} id="sectors" className="py-28 md:py-36 bg-white relative overflow-hidden">
      {/* Hairline Grid Accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-brand-navy) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-navy) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-[1360px] px-6 md:px-10 lg:px-14">
        {/* ─── Header: Thin line and generous whitespace ─── */}
        <div className="mb-16 md:mb-20 pb-8 border-b border-brand-navy/[0.08]">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-red" />
            <span className="font-heading text-[0.68rem] tracking-[0.25em] uppercase text-brand-red font-bold">
              Specialized Industry Sectors
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2
                className="font-display font-[700] text-brand-navy tracking-normal leading-[1.0]"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)' }}
              >
                Tailored facility protocols for{' '}
                <span className="text-brand-red italic">demanding environments.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="font-body text-sm sm:text-base text-brand-navy/60 font-normal leading-relaxed">
                Every sector operates under customized standard operating procedures,
                audited daily by area supervisors.
              </p>
            </div>
          </div>
        </div>

        {/* ─── Editorial Split: Sector List on Left, Storytelling Details on Right ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Interactive Minimal Offering List */}
          <div className="lg:col-span-5 divide-y divide-brand-navy/[0.08] border-y border-brand-navy/[0.08]">
            {sectors.map((sec) => {
              const isActive = sec.id === selectedId
              return (
                <div
                  key={sec.id}
                  onClick={() => setSelectedId(sec.id)}
                  onMouseEnter={() => setSelectedId(sec.id)}
                  onFocus={() => setSelectedId(sec.id)}
                  tabIndex={0}
                  role="button"
                  aria-selected={isActive}
                  className={`group py-6 md:py-8 px-4 transition-all duration-300 cursor-pointer flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-2xl border-l-4 ${
                    isActive
                      ? 'bg-brand-navy/[0.035] border-brand-red shadow-xs'
                      : 'border-transparent hover:bg-brand-navy/[0.015]'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-heading text-xs font-bold tracking-widest ${
                        isActive ? 'text-brand-red' : 'text-brand-navy/30'
                      }`}
                    >
                      {sec.num}
                    </span>
                    <div>
                      <h3
                        className={`font-heading text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                          isActive
                            ? 'text-brand-navy'
                            : 'text-brand-navy/60 group-hover:text-brand-navy'
                        }`}
                      >
                        {sec.title}
                      </h3>
                      <span className="text-xs font-heading font-medium tracking-wider uppercase text-brand-navy/40 block mt-1">
                        {sec.tag}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-brand-red text-white translate-x-1 shadow-sm'
                        : 'text-brand-navy/30 group-hover:text-brand-navy group-hover:translate-x-1'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Detailed Storytelling Focal Panel */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-brand-cream border border-brand-navy/10 p-8 sm:p-12 shadow-sm overflow-hidden">
              {/* Subtle ambient red depth glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-red/[0.06] blur-3xl" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSector.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Top Header of Detail Panel */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-brand-navy/10 mb-8">
                    <span className="font-heading text-xs font-bold tracking-widest uppercase text-brand-red">
                      Sector Focus · {currentSector.num}
                    </span>
                    <span className="font-heading text-xs uppercase tracking-wider text-brand-navy/50 font-semibold bg-white px-3 py-1 rounded-full border border-brand-navy/10">
                      {currentSector.benchmark}
                    </span>
                  </div>

                  {/* Sector Title & Narrative in Editorial Serif */}
                  <h3 className="font-display font-[700] text-3xl sm:text-4xl text-brand-navy tracking-normal mb-4">
                    {currentSector.title}
                  </h3>
                  <p className="font-body text-base text-brand-navy/65 leading-relaxed mb-8 font-normal">
                    {currentSector.description}
                  </p>

                  {/* Mandatory Service Requirements */}
                  <div className="mb-10">
                    <span className="font-heading text-xs uppercase tracking-widest text-brand-navy/40 font-bold block mb-4">
                      Tailored Service Deliverables:
                    </span>
                    <ul className="space-y-3">
                      {currentSector.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-brand-navy/80 font-body">
                          <span className="w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                            ✓
                          </span>
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benchmark Metrics Strip */}
                  <div className="pt-8 border-t border-brand-navy/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <span className="text-[0.68rem] font-heading uppercase tracking-widest text-brand-navy/40 font-semibold block mb-1">
                        Committed SLA Benchmark
                      </span>
                      <span className="font-display font-[800] text-xl sm:text-2xl text-brand-navy">
                        {currentSector.sla}
                      </span>
                    </div>
                    <div>
                      <span className="text-[0.68rem] font-heading uppercase tracking-widest text-brand-navy/40 font-semibold block mb-1">
                        Workforce Specification
                      </span>
                      <span className="font-heading font-bold text-base text-brand-red block">
                        {currentSector.workforce}
                      </span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-8 pt-6 border-t border-brand-navy/10 flex justify-end">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-brand-navy hover:text-brand-red transition-colors group"
                    >
                      <span>Discuss Your Facility Requirements</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
