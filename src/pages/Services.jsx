import ServiceTypes from './ServiceTypes.jsx';
import HowItStarts from './HowItStarts.jsx';
import FAQSection from './Faqs.jsx';
import ServiceHero from './ServiceHero.jsx';

export default function Services() {
  return (
    <>
      <ServiceHero />
      <section className="bg-white">
        <ServiceTypes />
      </section>
      <HowItStarts />
      <FAQSection />
    </>
  );
}