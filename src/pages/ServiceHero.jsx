import { useEffect, useState } from 'react';
import cleanerImage from '../assets/Gemini_Generated_Image_6065f86065f86065-removebg-preview.png';
import supervisorImage from '../assets/Gemini_Generated_Image_r9ma1rr9ma1rr9ma-removebg-preview.png';
import engineerImage from '../assets/Gemini_Generated_Image_4l03jc4l03jc4l03-removebg-preview.png';
import securityImage from '../assets/Gemini_Generated_Image_k5vt0nk5vt0nk5vt-removebg-preview.png';

const leftTeam = [
  { src: supervisorImage, alt: 'G1 Ops site supervisor', order: 0 },
  { src: cleanerImage, alt: 'G1 Ops housekeeping professional', order: 2 },
];

const rightTeam = [
  { src: engineerImage, alt: 'G1 Ops engineering professional', order: 1 },
  { src: securityImage, alt: 'G1 Ops security professional', order: 3 },
];

const mobileTeam = [
  { ...leftTeam[0], side: 'left' },
  { ...rightTeam[0], side: 'right' },
  { ...leftTeam[1], side: 'left' },
  { ...rightTeam[1], side: 'right' },
];

export default function ServiceHero() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShowTitle(true);
      return undefined;
    }

    const timer = window.setTimeout(() => setShowTitle(true), 2410);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-white px-4 sm:flex-row sm:justify-center"
      aria-label="Services we provide"
    >
      <div className="relative mt-6 flex w-full items-start justify-center -space-x-14 sm:hidden">
        {mobileTeam.map((person) => (
          <img
            key={person.src}
            src={person.src}
            alt={person.alt}
            className={`service-hero-from-${person.side} h-[32svh] w-[38%] max-w-[150px] object-contain object-top`}
            style={{ '--service-hero-delay': `${person.order * 0.32}s` }}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 mx-auto hidden h-[82%] max-w-[1400px] items-end justify-center gap-24 px-2 sm:flex sm:h-[86%]">
        <div className="flex h-full flex-1 items-end justify-start gap-0 -space-x-28 sm:-space-x-28 sm:-translate-x-24 lg:-space-x-44">
          {leftTeam.map((person) => (
            <img
              key={person.src}
              src={person.src}
              alt={person.alt}
              className="service-hero-from-left h-full w-[60%] max-w-[360px] object-contain object-bottom"
              style={{ '--service-hero-delay': `${person.order * 0.32}s` }}
            />
          ))}
        </div>
        <div className="flex h-full flex-1 items-end justify-end gap-0 -space-x-28 sm:-space-x-28 sm:translate-x-24 lg:-space-x-44">
          {rightTeam.map((person) => (
            <img
              key={person.src}
              src={person.src}
              alt={person.alt}
              className="service-hero-from-right h-full w-[60%] max-w-[360px] object-contain object-bottom"
              style={{ '--service-hero-delay': `${person.order * 0.32}s` }}
            />
          ))}
        </div>
      </div>

      <div className={`service-hero-title relative z-10 mt-3 w-full max-w-[480px] px-5 py-3 text-center sm:absolute sm:inset-x-0 sm:top-40 sm:mx-auto sm:mt-0 ${showTitle ? 'is-visible' : ''}`}>
        <h1 className="font-sans text-3xl font-extrabold tracking-tight text-[#0B1D48] drop-shadow-[0_8px_10px_rgba(11,29,72,0.2)] sm:text-5xl">
          <span className="text-red-500">Services</span>
          <br />
          we promise to Deliver
        </h1>
        <p className="mt-8 font-sans text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          At G1OPS, we provide integrated facility management and workforce solutions that 
          help businesses operate efficiently and seamlessly. From skilled manpower and 
          professional housekeeping to security services and engineering maintenance, 
          our expert teams ensure every aspect of your workplace is managed with care, 
          consistency and reliability. We bring people, processes and technology together 
          to create safer, cleaner and better-managed environments.
        </p>
      </div>
    </section>
  );
}