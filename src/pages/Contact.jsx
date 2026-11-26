import Field, { FormStatus } from '../components/Field.jsx';
import useForm from '../components/useForm.js';

const company = {
  address: '200 Feet Inner Ring Road, Madhavaram, Chennai 600110',
  phone: '+91 89399 11223',
  phoneHref: 'tel:+918939911223',
  email: 'info@g1ops.in',
  website: 'g1ops.in',
};

function ContactInfoCard({ contactSteps }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#243967] bg-gradient-to-br from-[#0B1D48] via-[#0B1D48] to-[#071330] p-5 shadow-[0_15px_40px_-10px_rgba(11,29,72,0.3)] sm:p-7 xl:p-8">
      <span className="text-[11px] font-extrabold tracking-[2px] text-[#E60000]">
        GET IN TOUCH
      </span>

      <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
        Let's talk about your requirements.
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate-400">
        Connect with our team for reliable facility management solutions
        tailored to your business.
      </p>

      <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F4F9] text-xl text-[#E60000]">
            ⌖
          </div>
          <div className="min-w-0">
            <h3 className="mb-1 text-sm font-bold text-white">Head Office</h3>
            <p className="break-words text-sm leading-6 text-slate-400">
              {company.address}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F4F9] text-xl text-[#E60000]">
            ☎
          </div>
          <div className="min-w-0">
            <h3 className="mb-1 text-sm font-bold text-white">Call Us</h3>
            <a href={company.phoneHref} className="text-sm text-white hover:text-[#E60000]">
              {company.phone}
            </a>
            <p className="mt-1 text-xs text-slate-400">Available 24×7</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F4F9] text-xl text-[#E60000]">
            ✉
          </div>
          <div className="min-w-0">
            <h3 className="mb-1 text-sm font-bold text-white">Email Us</h3>
            <a href={`mailto:${company.email}`} className="text-sm text-slate-300 hover:text-[#E60000]">
              {company.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F4F9] text-xl text-[#E60000]">
            ◎
          </div>
          <div className="min-w-0">
            <h3 className="mb-1 text-sm font-bold text-white">Website</h3>
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-300 hover:text-[#E60000]"
            >
              {company.website}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-500/60 pt-5">
        <h3 className="mb-3 text-lg font-extrabold text-white">
          What happens next?
        </h3>
        {contactSteps.map(([time, detail]) => (
          <div
            key={time}
            className="grid grid-cols-[64px_minmax(0,1fr)] gap-3 border-b border-slate-500/50 py-3 last:border-0 sm:grid-cols-[85px_minmax(0,1fr)]"
          >
            <strong className="text-sm font-extrabold text-white sm:text-base">
              {time}
            </strong>
            <span className="text-xs leading-6 text-slate-400 sm:text-sm">
              {detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  const { bind, errors, status, submit } = useForm('/contact', {
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const mapQuery = encodeURIComponent(
    '200 Feet Inner Ring Road, Madhavaram, Chennai 600110. Landmark: GCIS (Greenfield Chennai International School).'
  );

  const contactSteps = [
    ['1 day', 'We reply within one working day'],
    ['Free', 'An on-site walk-through, at no cost'],
    ['48 hrs', 'Your staffing plan and price'],
    ['2 weeks', 'Your team on site'],
  ];

  return (
    <>
      {/* HERO IMAGE */}
      <section className="relative min-h-[900px] overflow-hidden bg-[#0B1D48] lg:min-h-[980px]">

        <img
          src="https://g1ops.in/option-b/img/ai-briefing.jpg"
          alt="G1 Ops facility management team"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071330]/95 via-[#0B1D48]/85 to-[#0B1D48]/55" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-4 pt-24 pb-10 sm:px-6 sm:pt-28 sm:pb-12 xl:px-8 xl:pt-32 xl:pb-14">

          <span className="text-[#E60000] text-[10px] sm:text-xs font-bold tracking-[2px] sm:tracking-[3px] mb-4">
            LET'S START A CONVERSATION
          </span>

          <h1 className="mb-0 font-extrabold text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight max-w-2xl tracking-tight">
            <span className="text-white">We're ready to</span>
            <span className="text-[#E60000]"> hear from you.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base xl:text-lg leading-relaxed mt-4 sm:mt-5 max-w-xl">
            Whether you need facility management, staffing
            or operational support, our team is here to help.
          </p>

          <div className="mt-7 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
            <ContactInfoCard contactSteps={contactSteps} />

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-7 xl:p-8">
            <span className="text-[#E60000] text-[11px] font-extrabold tracking-[2px]">
              SEND AN ENQUIRY
            </span>
            <h2 className="mt-2 text-xl font-bold text-[#0B1D48] sm:text-2xl">
              How can we help you?
            </h2>

            <form
              className="
                mt-5 grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2
                [&_label]:block [&_label]:text-sm [&_label]:font-semibold [&_label]:text-[#0B1D48]
                [&_input]:mt-2 [&_input]:w-full [&_input]:rounded-xl [&_input]:border [&_input]:border-slate-200
                [&_input]:bg-white [&_input]:px-4 [&_input]:py-3 [&_input]:text-sm [&_input]:text-[#0B1D48]
                [&_input]:outline-none [&_input:focus]:border-[#E60000]
                [&_textarea]:mt-2 [&_textarea]:w-full [&_textarea]:rounded-xl [&_textarea]:border [&_textarea]:border-slate-200
                [&_textarea]:bg-white [&_textarea]:px-4 [&_textarea]:py-3 [&_textarea]:text-sm [&_textarea]:text-[#0B1D48]
                [&_textarea]:outline-none [&_textarea]:resize-y [&_textarea:focus]:border-[#E60000]
                [&_em]:mt-1 [&_em]:block [&_em]:text-sm [&_em]:text-red-600
              "
              onSubmit={submit}
              noValidate
            >
              <Field
                label="Full name"
                error={errors.name}
                {...bind('name')}
                autoComplete="name"
              />
              <Field
                label="Email address"
                type="email"
                error={errors.email}
                {...bind('email')}
                autoComplete="email"
              />
              <Field
                label="Phone number"
                type="tel"
                {...bind('phone')}
                autoComplete="tel"
              />
              <div className="sm:col-span-2">
                <Field
                  label="Your message"
                  as="textarea"
                  rows="3"
                  error={errors.message}
                  {...bind('message')}
                />
              </div>
              <button
                type="submit"
                disabled={status.state === 'sending'}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#E60000] py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C40000] disabled:opacity-60 sm:col-span-2"
              >
                {status.state === 'sending' ? 'Sending...' : 'Send Message'}
                <span className="text-lg">→</span>
              </button>
              <div className="sm:col-span-2">
                <FormStatus status={status} />
                <p className="mt-2 text-center text-[11px] text-slate-500">
                  Your information will only be used to respond to your enquiry.
                </p>
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="bg-white py-10 sm:py-14 xl:py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-5 mb-6 sm:mb-8">

            <div>
              <span className="text-[#E60000] text-[11px] font-extrabold tracking-[2px]">
                FIND US
              </span>

              <h2 className="text-[#0B1D48] text-2xl sm:text-3xl xl:text-4xl font-extrabold mt-3 tracking-tight">
                Visit our head office.
              </h2>

              <p className="text-slate-500 text-sm mt-3 leading-6">
                {company.address}
              </p>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex shrink-0 items-center justify-center gap-2 bg-[#0B1D48] hover:bg-[#E60000] rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-300"
            >
              <span className="text-white">Get Directions →</span>
            </a>

          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">

            <iframe
              className="w-full h-[280px] sm:h-[360px] xl:h-[420px] border-0"
              title="G1 Ops Head Office Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              allowFullScreen
            />

          </div>

        </div>
      </section>
    </>
  );
}
