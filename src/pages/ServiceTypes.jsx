import { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '01',
    title: 'Payroll & Workforce',
    description:
      'Reliable workforce support, from recruitment and deployment to payroll processing and compliance.',
    features: [
      'Permanent & Contractual Staffing',
      'Payroll Processing',
      'PF & ESI Compliance',
      'Workforce Management',
    ],
    image: 'https://g1ops.in/option-b/img/payroll-team.jpg',
  },
  {
    id: '02',
    title: 'Housekeeping & Cleaning',
    description:
      'Professional cleaning solutions that keep workplaces spotless, hygienic and welcoming.',
    features: [
      'Daily & Deep Cleaning',
      'Washroom Maintenance',
      'Industrial Housekeeping',
      'Supervised Cleaning Teams',
    ],
    image: 'https://g1ops.in/option-b/img/ai-housekeeping.jpg',
  },
  {
    id: '03',
    title: 'Security Services',
    description:
      'Trained security personnel providing reliable protection for your people, premises and assets.',
    features: [
      'Manned Security Guards',
      'Security Supervisors',
      'Access Control',
      'Visitor Management',
    ],
    image: 'https://g1ops.in/option-b/img/guard.jpg',
  },
  {
    id: '04',
    title: 'Engineering & MEP',
    description:
      'Technical facility solutions designed to keep your critical building systems running.',
    features: [
      'Electrical Maintenance',
      'HVAC Operations',
      'Equipment Maintenance',
      'Fire & Safety Systems',
    ],
    image: 'https://g1ops.in/option-b/img/ai-engineering.jpg',
  },
];

function ServiceCard({ service, active, onActivate }) {
  return (
    <article
      onMouseEnter={onActivate}
      onFocusCapture={onActivate}
      onClick={onActivate}
      className={`
        group relative overflow-hidden rounded-[28px]
        min-w-0 min-h-[520px] xl:h-[520px]
        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        cursor-pointer
        ${active ? 'bg-[#E60000] shadow-2xl' : 'bg-[#E5E7EB] shadow-sm'}
      `}
    >
      <div className="relative h-full flex flex-col xl:flex-row">

        {/* LEFT CONTENT */}
        <div
          className={`
            relative z-10 flex flex-col justify-between
            p-6 sm:p-8 xl:p-11
            transition-all duration-700
            ${active ? 'xl:w-1/2' : 'xl:w-full'}
          `}
        >
          <div>
            <span
              className={`
                text-sm font-bold tracking-[2px]
                ${active ? 'text-white' : 'text-slate-500'}
              `}
            >
              SERVICE / {service.id}
            </span>

            <h3
              className={`
                mt-1 text-xl font-bold
                tracking-tight leading-tight
                transition-colors duration-500
                text-[#0B1D48]
              `}
            >
              {service.title}
            </h3>

            <p
              className={`
                mt-4 text-base leading-8
                ${active ? 'text-white' : 'text-slate-600'}
              `}
            >
              {service.description}
            </p>

            {/* FEATURES */}
            <div className="mt-7">
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span
                      className={`
                          w-6 h-6 rounded-full shrink-0
                          flex items-center justify-center
                          text-[11px] font-bold
                          ${active ? 'bg-white text-[#E60000]' : 'bg-slate-500 text-white'}
                        `}
                    >
                      ✓
                    </span>

                    <span className={`text-base ${active ? 'text-white' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              to="/contact"
              className={`
                inline-flex items-center gap-4
                text-sm font-bold
                ${active ? 'text-white' : 'text-[#0B1D48]'}
              `}
            >
              Get a quote

              <span
                className={`
                  w-10 h-10 rounded-full
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:translate-x-1
                  ${active ? 'bg-white text-[#E60000]' : 'bg-[#0B1D48] text-white'}
                `}
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE PANEL */}
        <div
          className={`
            relative overflow-hidden
            transition-all duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            bg-[#0B1D48]
            ${active
              ? 'h-[200px] sm:h-[240px] xl:h-auto xl:w-1/2 opacity-100'
              : 'h-0 xl:w-0 opacity-0'
            }
          `}
        >
          <img
            src={service.image}
            alt={service.title}
            className={`
              absolute inset-0 w-full h-full
              object-cover
              transition-all duration-700
              ${active ? 'scale-100' : 'scale-110'}
            `}
          />

          {/* IMAGE OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-[#0B1D48]/25
              mix-blend-multiply
              transition-all duration-700
              group-hover:bg-[#0B1D48]/40
            "
          />

          {/* IMAGE GRADIENT */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#071330]/80
              via-[#071330]/10
              to-transparent
            "
          />

          {/* IMAGE BOTTOM LABEL */}
          <div className="absolute bottom-7 left-7 right-7 z-10">
            <div className="w-10 h-[3px] bg-white mb-4" />

            <span className="text-white text-xs font-bold uppercase tracking-[2px]">
              G1 OPS
            </span>

            <p className="text-white font-bold text-xl mt-2">
              Quality. Integrity. Excellence.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="font-sans overflow-hidden bg-[#0B1D48] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#FF6262]">
            What we do
          </span>

          <h2 className="mt-2 font-sans text-[30px] leading-[1.15] tracking-[-0.035em] text-white sm:text-[34px]">
            One partner.
            <span className="text-[#E60000]"> Every solution.</span>
          </h2>

          <p className="mt-6 max-w-[800px] text-base leading-8 text-slate-300 sm:text-lg">
            Integrated facility management services designed to keep your
            workplace running smoothly.
          </p>
        </div>

        {Array.from({ length: Math.ceil(services.length / 2) }, (_, rowIndex) => {
          const rowServices = services.slice(rowIndex * 2, rowIndex * 2 + 2);
          const activeInRow = Math.floor(activeIndex / 2) === rowIndex;
          const columns = !activeInRow
            ? '1fr 1fr'
            : activeIndex % 2 === 0
              ? '1.8fr 1fr'
              : '1fr 1.8fr';

          return (
            <div
              key={rowIndex}
              className="mb-5 grid grid-cols-1 gap-5 last:mb-0 md:grid-cols-2 xl:grid-cols-[var(--service-columns)] xl:transition-[grid-template-columns] xl:duration-700 xl:ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ '--service-columns': columns }}
            >
              {rowServices.map((service, columnIndex) => {
                const index = rowIndex * 2 + columnIndex;
                return (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    active={activeIndex === index}
                    onActivate={() => setActiveIndex(index)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}