import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What does G1 Ops do?',
    answer:
      'G1 Ops provides integrated facility and workforce support, including housekeeping, security, engineering and MEP, and payroll and workforce services.',
  },
  {
    question: 'Which types of workplaces do you support?',
    answer:
      'We support offices, manufacturing plants, hospitals, educational campuses, retail spaces and residential or hospitality properties.',
  },
  {
    question: 'How does a new project begin?',
    answer:
      'We start with a site visit to understand your requirements, then share a staffing plan, scope of work and transparent quotation.',
  },
  {
    question: 'Can services be tailored to our needs?',
    answer:
      'Yes. Our services are tailored around your premises, operating hours, staffing requirements, compliance needs and service priorities.',
  },
  {
    question: 'How can we contact G1 Ops?',
    answer:
      'You can call us on +91 98407 12768 or use the contact form on this website. Our team will respond within one working day.',
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const itemRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(item);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      style={{ transitionDelay: visible ? `${Math.min(index * 70, 280)}ms` : '0ms' }}
      className={`
        rounded-2xl bg-white border border-slate-100
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${isOpen ? 'shadow-[0_12px_35px_-18px_rgba(11,29,72,0.35)]' : 'shadow-[0_8px_24px_-20px_rgba(11,29,72,0.25)]'}
      `}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
      >
        <h3
          className={`text-sm font-bold leading-6 transition-colors sm:text-base ${
            isOpen ? 'text-[#0B1D48]' : 'text-[#0B1D48] group-hover:text-[#E60000]'
          }`}
        >
          {faq.question}
        </h3>

        <span
          className={`relative h-5 w-5 shrink-0 transition-transform duration-300 ${
            isOpen ? 'text-[#E60000] rotate-180' : 'text-[#0B1D48]'
          }`}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-current" />
          {!isOpen && (
            <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
          )}
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-7 text-slate-500 sm:px-7 sm:pb-6 sm:text-[15px]">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1D48] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div
            className={`transition-all duration-1000 ease-out ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <span className="flex items-center gap-3 text-[11px] font-extrabold tracking-[2.5px] text-[#E60000]">
              <span className="h-px w-9 bg-[#E60000]" />
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-4xl">
              <span className="text-white">Curious about </span><span className="text-[#E60000]">G1 Ops?</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
              Here are a few answers to help you understand our services
              and how we approach working together.
            </p>

            <div className="mt-8 hidden lg:block">
              <p className="text-sm text-slate-300">Still have questions?</p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0B1D48] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E60000] hover:text-white"
              >
                Contact us
                <span className="text-lg" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div
            className={`space-y-3 transition-all delay-150 duration-1000 ease-out sm:space-y-4 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
            <div className="mt-8 lg:hidden">
              <p className="text-sm text-slate-300">Still have questions?</p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0B1D48] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E60000] hover:text-white"
              >
                Contact us
                <span className="text-lg" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
