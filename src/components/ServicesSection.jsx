import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const pillars = [
  {
    id: 'quality',
    num: '01',
    word: 'Quality',
    subtitle: 'Client Centric Solutions',
    metric: 'Verified Quality Standards',
    metricLabel: 'Service Quality Commitment',
    description:
      'We are your trusted partner in delivering sector-specialized facility solutions tailored to the unique requirements of your portfolio. Structured daily checklists, hospital-grade hygiene, and prompt standby support ensure flawless consistency across every shift.',
    deliverables: [
      'Daily digitized supervisor checklists with photographic verification',
      'Hospital-grade sanitization and certified eco-friendly cleaning agents',
      'Immediate standby reserve buffer to guarantee zero service lapses',
    ],
  },
  {
    id: 'integrity',
    num: '02',
    word: 'Integrity',
    subtitle: 'Outcome-Based Accountability',
    metric: '100% Statutory Compliance',
    metricLabel: 'Statutory Transparency Commitment',
    description:
      'Our contract model aligns to results that protect your organization. Complete PF, ESI, insurance, and labor compliance documentation delivered transparently to your audit and finance teams every single month.',
    deliverables: [
      'Monthly verified ECR and challan remittance sheets submitted proactively',
      '100% minimum wage compliance & transparent computerized payroll records',
      'Complete statutory indemnification safeguarding principal employer liability',
    ],
  },
  {
    id: 'excellence',
    num: '03',
    word: 'Excellence',
    subtitle: 'Unbeatable Value',
    metric: 'Single-Point Accountability',
    metricLabel: 'Direct Account Leadership',
    description:
      'Our delivery leverages integrated management and streamlined processes to ensure optimal performance at unbeatable value. One unified agreement, one dedicated account manager, and a team focused on total responsibility.',
    deliverables: [
      'Consolidated single master invoice covering all facility disciplines',
      'Direct 24/7 escalation hotline to senior regional operations leadership',
      'Quarterly executive reviews with objective SLA metric benchmarking',
    ],
  },
]

export default function ServicesSection() {
  const [activePillarId, setActivePillarId] = useState('quality')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const watermarkX = useTransform(scrollYProgress, [0, 1], ['3%', '-3%'])

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-brand-navy overflow-hidden text-white">
      {/* ─── Parallax Radial Glow & Background Accents ─── */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 w-[650px] h-[650px] rounded-full bg-brand-red/[0.06] blur-[190px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-brand-navy-light/20 blur-[150px]" />

      {/* Subtle Typography Watermark in Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
        <motion.span
          className="font-display font-[700] text-white/[0.015] whitespace-nowrap"
          style={{
            fontSize: 'clamp(8rem, 24vw, 22rem)',
            x: shouldReduceMotion ? 0 : watermarkX,
          }}
        >
          G1 OPS
        </motion.span>
      </div>

      <div className="relative mx-auto max-w-[1360px] px-6 md:px-10 lg:px-14">
        {/* ─── Section Header (Refined Serif Heading like CBRE) ─── */}
        <div className="mb-16 md:mb-20 pb-8 border-b border-white/[0.08]">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-red" />
            <span className="font-heading text-[0.68rem] tracking-[0.25em] uppercase text-brand-red font-bold">
              Our Professional Foundation
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2
                className="font-display font-[700] text-white leading-[0.98] tracking-normal"
                style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)' }}
              >
                Facility management built on{' '}
                <span className="text-brand-red italic">measurable trust.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <p className="font-body text-sm sm:text-base text-white/60 leading-relaxed font-normal">
                No vendor finger-pointing. Housekeeping, security, engineering, and payroll
                consolidated under one single contract.
              </p>
            </div>
          </div>
        </div>

        {/* ─── THREE COMMITMENT CARDS (WHY G1 OPS?) ─── */}
        <div id="commitments" className="scroll-mt-28">
          {/* Section Indicator: Styled like CBRE's Why CBRE? */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="font-heading text-[0.68rem] tracking-[0.25em] uppercase text-brand-red font-bold block mb-1">
                Our Core Commitments
              </span>
              <h3 className="font-display font-[700] text-2xl sm:text-3xl text-white tracking-normal">
                Why G1 Ops?
              </h3>
            </div>
            <span className="font-heading text-xs text-white/45 hidden sm:block">
              Select a commitment to inspect deliverables & service standards
            </span>
          </div>

          {/* Desktop & Tablet: Silky-Smooth Flex Expanding Gallery */}
          <div className="hidden md:flex gap-4 items-stretch min-h-[500px]">
            {pillars.map((pillar) => {
              const isActive = activePillarId === pillar.id
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  onMouseEnter={() => setActivePillarId(pillar.id)}
                  onFocus={() => setActivePillarId(pillar.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                  style={{
                    flex: isActive ? 2.5 : 0.95,
                    transition:
                      'flex 0.65s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease, padding 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                    padding: isActive ? '2.5rem' : '1.75rem',
                  }}
                  className={`group relative rounded-3xl cursor-pointer overflow-hidden border flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-red/[0.08] via-white/[0.04] to-white/[0.02] border-brand-red/50 shadow-2xl shadow-brand-red/10'
                      : 'bg-white/[0.02] hover:bg-white/[0.04] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {/* Subtle Inner Glow — always rendered, opacity transitions */}
                  <div
                    className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-red/[0.12] blur-3xl"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transition: 'opacity 0.6s ease',
                    }}
                  />

                  {/* Top Bar */}
                  <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="font-heading text-xs sm:text-sm font-bold tracking-widest text-brand-red uppercase">
                      COMMITMENT {pillar.num}
                    </span>
                    <div className="relative flex items-center">
                      {/* Metric pill — always rendered, fades in/out */}
                      <span
                        className="font-mono text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10 whitespace-nowrap"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'scale(1)' : 'scale(0.85)',
                          transition: 'opacity 0.4s ease, transform 0.4s ease',
                        }}
                      >
                        {pillar.metric}
                      </span>
                      {/* Dot indicator — fades in when inactive */}
                      <span
                        className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-brand-red absolute right-0"
                        style={{
                          opacity: isActive ? 0 : 1,
                          transition: 'opacity 0.3s ease, background-color 0.3s ease',
                        }}
                      />
                    </div>
                  </div>

                  {/* Body with Editorial Serif Typography */}
                  <div className="relative z-10 my-6 flex-1">
                    {/* Serif Heading — font-size transitions via CSS */}
                    <div className="mb-2">
                      <h4
                        className="font-display font-[700] tracking-normal leading-none"
                        style={{
                          fontSize: isActive
                            ? 'clamp(2.8rem, 4.6vw, 4.6rem)'
                            : 'clamp(1.6rem, 2.2vw, 2.4rem)',
                          color: isActive
                            ? 'rgba(255,255,255,1)'
                            : 'rgba(255,255,255,0.45)',
                          transition:
                            'font-size 0.65s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease',
                        }}
                      >
                        {pillar.word}
                      </h4>
                    </div>

                    <span
                      className="font-heading uppercase text-brand-red font-bold block mb-4"
                      style={{
                        fontSize: isActive ? '0.75rem' : '0.7rem',
                        letterSpacing: isActive ? '0.15em' : '0.1em',
                        transition: 'font-size 0.5s ease, letter-spacing 0.5s ease',
                      }}
                    >
                      {pillar.subtitle}
                    </span>

                    {/* Expanded content — AnimatePresence for smooth enter/exit */}
                    <div className="relative overflow-hidden">
                      <AnimatePresence mode="wait">
                        {isActive ? (
                          <motion.div
                            key={`${pillar.id}-expanded`}
                            initial={{ opacity: 0, height: 0, y: 8 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: 8 }}
                            transition={{
                              opacity: { duration: 0.35, ease: 'easeOut' },
                              height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                              y: { duration: 0.35, ease: 'easeOut' },
                            }}
                            className="space-y-6 pt-2"
                          >
                            <p className="font-body text-sm sm:text-base text-white/75 leading-relaxed font-normal max-w-xl">
                              {pillar.description}
                            </p>

                            <div>
                              <span className="text-[0.68rem] font-heading uppercase tracking-widest text-white/40 font-semibold block mb-3">
                                Key Standards & Commitments:
                              </span>
                              <div className="space-y-2.5">
                                {pillar.deliverables.map((item, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: 0.15 + idx * 0.08,
                                      duration: 0.35,
                                      ease: 'easeOut',
                                    }}
                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-body"
                                  >
                                    <span className="text-brand-red font-bold mt-0.5">✓</span>
                                    <span>{item}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key={`${pillar.id}-collapsed`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="relative"
                          >
                            <p className="font-body text-xs text-white/40 line-clamp-2 leading-relaxed">
                              {pillar.description}
                            </p>
                            <div className="pointer-events-none absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-brand-navy to-transparent" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span
                      className="font-heading text-white/40 uppercase tracking-wider"
                      style={{
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      {isActive ? pillar.metricLabel : 'Click to inspect'}
                    </span>
                    <span
                      className="font-bold"
                      style={{
                        color: isActive ? 'var(--color-brand-red, #FA0000)' : 'rgba(255,255,255,0.3)',
                        transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                        transition: 'color 0.3s ease, transform 0.3s ease',
                      }}
                    >
                      {isActive ? '● ACTIVE' : '→'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile Accordion View */}
          <div className="md:hidden space-y-3">
            {pillars.map((pillar) => {
              const isActive = activePillarId === pillar.id
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillarId(isActive ? null : pillar.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white/[0.07] border-brand-red/50 shadow-lg'
                      : 'bg-white/[0.02] border-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-heading text-xs font-bold text-brand-red">
                          COMMITMENT {pillar.num}
                        </span>
                        <span className="text-white/20">·</span>
                        <span className="text-[0.65rem] font-mono text-white/50">
                          {pillar.metric}
                        </span>
                      </div>
                      <h4 className="font-display font-[700] text-2xl text-white tracking-normal">
                        {pillar.word}
                      </h4>
                    </div>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isActive ? 'bg-brand-red text-white rotate-90' : 'bg-white/5 text-white/40'
                      }`}
                    >
                      →
                    </span>
                  </div>

                  {isActive && (
                    <div className="pt-4 mt-4 border-t border-white/10 space-y-4">
                      <span className="font-heading text-xs uppercase tracking-widest text-brand-red font-bold block">
                        {pillar.subtitle}
                      </span>
                      <p className="font-body text-xs text-white/70 leading-relaxed">
                        {pillar.description}
                      </p>
                      <div className="space-y-2 pt-2">
                        {pillar.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                            <span className="text-brand-red font-bold">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
