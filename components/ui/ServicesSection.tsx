'use client';

import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import ServiceSplit from '@/components/ui/ServiceSplit';
import { services } from '@/data/services';
import { useInView } from '@/hooks/useInView';

export default function ServicesSection() {
  const [headerRef, headerInView] = useInView();

  return (
    <section id="services" className="bg-cream">
      {/* Section Header */}
      <Section className="pt-32 pb-16">
        <Container>
          <div
            ref={headerRef}
            className={`text-left max-w-4xl transition-all duration-1000 ${
              headerInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center justify-start gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold tracking-widest text-sm uppercase">
                What We Offer
              </span>
              <div className="w-12 h-0.5 bg-gold" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-brown">
              Our Services
            </h2>

            {/* <p className="text-xl md:text-2xl text-brown/70 leading-relaxed">
              From documentaries to commercials, we craft visual stories that
              move audiences.
            </p> */}
          </div>
        </Container>
      </Section>

      {/* Services */}
      {services.map((service, index) => (
        <ServiceSplit
          key={service.id}
          service={service}  
          index={index}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
}
