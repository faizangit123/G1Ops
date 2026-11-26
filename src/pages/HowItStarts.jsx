
import { useEffect, useState } from 'react';

const steps = [
  {
    number: '01',
    value: '1',
    unit: 'working day',
    title: 'We reply and walk your site',
    description:
      'Our team visits your premises to understand your operational requirements before preparing a solution.',
    detailsTitle: 'What happens',
    details: [
      'On-site facility inspection',
      'Understand workforce requirements',
      'Assess shifts and operational challenges',
    ],
    takeaway: 'Site assessment and requirement summary',
  },
  {
    number: '02',
    value: '48',
    unit: 'hours',
    title: 'Staffing plan and price',
    description:
      "We create a structured workforce plan based on your site's needs, staffing levels and operational priorities.",
    detailsTitle: 'What we prepare',
    details: [
      'Required manpower and headcount',
      'Shift schedules and deployment plan',
      'Transparent pricing breakdown',
    ],
    takeaway: 'Complete staffing proposal and quotation',
  },
  {
    number: '03',
    value: '2',
    unit: 'weeks',
    title: 'Team on site',
    description:
      'Once the plan is approved, we coordinate deployment and prepare the team to begin operations.',
    detailsTitle: 'What happens',
    details: [
      'Staff recruitment and deployment',
      'Team onboarding and site briefing',
      'Supervisor coordination and monitoring',
    ],
    takeaway: 'A deployed and site-ready team',
  },
];

export default function HowItStarts() {
  const [activeStep, setActiveStep] = useState(0);

  // Automatically animate between steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 sm:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* TOP CONTENT */}
        <div className="max-w-3xl mb-16 sm:mb-20">

          {/* HEADING */}
          <div>
            <span className="text-[#E60000] text-xs font-bold tracking-[3px] uppercase">
              How it starts
            </span>

            <h2 className="mt-6 font-sans font-semibold text-[30px] leading-[1.15] tracking-[-0.035em] text-[#0B1D48] sm:text-[34px]">
              From first call to{' '}
              <span className="text-[#E60000] decoration-2 underline-offset-4">
                full team.
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-8 mt-6 max-w-lg">
              A supervisor walks your site, plans the shifts
              and briefs the team before day one.
            </p>
          </div>

        </div>

        {/* TIMELINE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 lg:max-w-6xl lg:mx-auto lg:px-4">

          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <div key={step.number} className="relative">

                {/* CARD */}
                <article
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`
                    relative z-10 flex h-full flex-col
                    rounded-[24px]
                    min-h-[400px] sm:min-h-[520px]
                    p-5 sm:p-6
                    border
                    cursor-pointer
                    transition-all duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isActive
                        ? 'bg-[#0B1D48] border-[#0B1D48] text-white shadow-[0_20px_45px_rgba(11,29,72,0.18)] -translate-y-2'
                        : 'bg-white border-slate-200 text-[#0B1D48] hover:border-[#0B1D48]/30'
                    }
                  `}
                >

                  {/* CARD HEADER */}
                  <div className="flex justify-between items-center mb-5">

                    <span
                      className={`
                        text-xs font-bold tracking-[2px]
                        ${isActive ? 'text-red-300' : 'text-[#E60000]'}
                      `}
                    >
                      STEP / {step.number}
                    </span>

                    <span
                      className={`
                        w-10 h-10 rounded-full
                        flex items-center justify-center
                        text-sm font-bold
                        transition-all duration-500
                        ${
                          isActive
                            ? 'bg-[#E60000] text-white'
                            : 'bg-[#F1F4F9] text-[#0B1D48]'
                        }
                      `}
                    >
                      {step.number}
                    </span>

                  </div>

                  {/* TIME */}
                  <div className="flex items-baseline gap-3 mb-3">

                    <span className={`
                      text-4xl sm:text-5xl
                      font-extrabold tracking-tight
                      ${isActive ? 'text-white' : 'text-[#0B1D48]'}
                    `}>
                      {step.value}
                    </span>

                    <span className={`
                      text-base font-medium
                      ${isActive ? 'text-slate-300' : 'text-slate-500'}
                    `}>
                      {step.unit}
                    </span>

                  </div>

                  {/* TITLE */}
                  <h3 className={`
                    text-lg sm:text-xl font-bold leading-snug
                    ${isActive ? 'text-white' : 'text-[#0B1D48]'}
                  `}>
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className={`
                    text-sm leading-6 mt-3
                    ${isActive ? 'text-slate-300' : 'text-slate-500'}
                  `}>
                    {step.description}
                  </p>

                  {step.details && (
                    <div className="mt-5">
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-[#0B1D48]'}`}>
                        {step.detailsTitle}
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className={`flex items-start gap-2 text-sm leading-5 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${isActive ? 'bg-[#E60000]' : 'bg-slate-400'}`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.takeaway && (
                    <div className={`mt-5 border-t pt-4 ${isActive ? 'border-white/20' : 'border-slate-200'}`}>
                      <p className={`text-[10px] font-bold tracking-[2px] ${isActive ? 'text-red-300' : 'text-[#E60000]'}`}>
                        YOUR TAKEAWAY
                      </p>
                      <p className={`mt-2 text-sm font-bold leading-5 ${isActive ? 'text-white' : 'text-[#0B1D48]'}`}>
                        {step.takeaway}
                      </p>
                    </div>
                  )}

                  {/* BOTTOM ACCENT */}
                  <div className="mt-auto pt-8">
                    <div className={`
                      h-[3px] rounded-full
                      transition-all duration-700
                      ${
                        isActive
                          ? 'w-full bg-[#E60000]'
                          : 'w-10 bg-slate-200'
                      }
                    `} />
                  </div>

                </article>

                {/* DOTTED CONNECTOR BETWEEN CARDS */}
                {index !== steps.length - 1 && (
                  <div className="
                    hidden md:block
                    absolute
                    left-full
                    top-1/2
                    -translate-y-1/2
                    w-8 lg:w-16
                    z-20
                    pointer-events-none
                  ">
                    <div className="w-full border-t-2 border-dotted border-[#E60000]/60" />
                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* STEP INDICATORS */}
        <div className="flex justify-center items-center gap-3 mt-12">

          <span className="text-[11px] text-slate-400 font-bold tracking-widest mr-2">
            OUR PROCESS
          </span>

          {steps.map((step, index) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(index)}
              aria-label={`Show step ${step.number}`}
              className={`
                h-1.5 rounded-full
                transition-all duration-500
                ${
                  activeStep === index
                    ? 'w-10 bg-[#E60000]'
                    : 'w-4 bg-slate-300 hover:bg-[#0B1D48]'
                }
              `}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
