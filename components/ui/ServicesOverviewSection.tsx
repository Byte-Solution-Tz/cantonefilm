'use client';

import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import ServiceCard from '@/components/ui/ServiceCard';
import { services } from '@/data/services';
import type { ServiceId } from '@/data/services';
import { useInView } from '@/hooks/useInView';
import { Film, PenTool, Layers, Camera, Users, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { openContactModal } from '@/components/modals/contactModalEvents';

const serviceIcons: Record<ServiceId, LucideIcon> = {
  'film-video-production': Film,
  'story-creative-development': PenTool,
  'post-production': Layers,
  'photography-multimedia': Camera,
  'event-community-coverage': Users,
};

export default function ServicesOverviewSection() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  return (
    <Section id="services" className="bg-cream py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown/5 rounded-full blur-3xl translate-x-48 translate-y-48" />
      
      <Container>
        {/* Header */}
        <div 
          ref={headerRef}
          className={`max-w-4xl text-left mb-16 transition-all duration-1000 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-start gap-3 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-navy text-sm uppercase tracking-widest font-medium">
              What We Offer
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6 leading-tight">
            OUR SERVICES
            <br />
            
          </h2>

          <p className="text-xl text-navy/80 leading-relaxed max-w-3xl">
            We provide end-to-end media production services—helping organizations communicate impact, tell meaningful stories, and engage audiences through powerful visual storytelling.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16"
        >
          {services.map((service, idx) => {
            const Icon = serviceIcons[service.id] || Film;

            return (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={Icon}
                index={idx}
                isInView={gridInView}
              />
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div 
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy/98 to-brown/90 p-10 md:p-14">
            {/* Decorative pattern */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(189, 128, 24, 0.4) 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}
            />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-gold/15 to-transparent" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="text-left max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-gold mb-4">
                  Not Sure Which Service You Need?
                </h3>
                <p className="text-white  text-lg leading-relaxed">
                  Every project is unique. Let&apos;s discuss your goals and find the perfect solution for your story.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={openContactModal}
                  className="whitespace-nowrap hover:scale-105 md:px-8 md:py-4 md:text-lg"
                  rightIcon={
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  }
                >
                  Start Project 
                </Button>
              </div>
            </div>
          </div>
        </div>

        
      </Container>
    </Section>
  );
}
