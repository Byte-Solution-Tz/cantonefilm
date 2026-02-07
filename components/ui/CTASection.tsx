'use client';

import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react';
import { openContactModal } from '@/components/modals/contactModalEvents';

export default function CTASection() {
  const [ctaRef, ctaInView] = useInView();

  return (
    <Section className="relative bg-cream overflow-hidden">
      {/* Large decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brown/10 rounded-full blur-3xl translate-x-48 translate-y-48" />
      
      <Container>
        <div
          ref={ctaRef}
          className={`relative transition-all duration-1000 ${
            ctaInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Main CTA Container */}
          <div className="relative max-w-6xl mx-auto rounded-3xl shadow-xl overflow-hidden">
            
            {/* Background pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(5, 10, 48, 0.5) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />

            {/* Content wrapper with gradient background */}
            <div className="relative bg-gradient-to-br from-brown to-gold p-10 md:p-16 lg:p-20 overflow-hidden">
              
            

              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-shimmer" 
                   style={{ backgroundSize: '200% 100%' }} />

              {/* Content */}
              <div className="relative z-10 text-left max-w-4xl">
                
                {/* Small label */}
                <div 
                  className={`flex items-center justify-start gap-3 mb-6 transition-all duration-1000 ${
                    ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '0.2s' }}
                >
                  <div className="w-12 h-px bg-gold/50" />
                  <span className="text-cream font-medium tracking-widest text-sm uppercase">
                    Let&apos;s Create Together
                  </span>
                  <div className="w-12 h-px bg-gold/50" />
                </div>

                {/* Main heading */}
                <h2 
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream leading-tight transition-all duration-1000 ${
                    ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '0.3s' }}
                >
                  Ready to Communicate
                  <br />
                  <span className="text-gold">Your Project?</span>
                </h2>

                {/* Description */}
                <p 
                  className={`text-lg md:text-xl text-cream mb-10 max-w-2xl leading-relaxed transition-all duration-1000 ${
                    ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '0.4s' }}
                >
                  Let's work together to create meaningful visual impact that resonates with your audience and drives real change.
                </p>

                {/* CTA Buttons */}
                <div 
                  className={`flex flex-col sm:flex-row gap-4 justify-start mb-12 transition-all duration-1000 ${
                    ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '0.5s' }}
                >
                  <Button
                    variant="primary"
                    size="md"
                    onClick={openContactModal}
                    className="hover:scale-105 md:px-8 md:py-4 md:text-lg"
                    rightIcon={
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    }
                  >
                    Start Your Project
                  </Button>

                  <Button
                    href="/portfolio"
                    variant="outline-light"
                    size="md"
                    className="md:px-8 md:py-4 md:text-lg"
                    rightIcon={
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    }
                  >
                    View Our Work
                  </Button>
                </div>

                {/* Contact methods - Quick access */}
                
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>

            {/* 3D shadow effect */}
            <div className="absolute inset-0 -z-10 translate-y-2 translate-x-2 bg-gradient-to-br from-brown/40 to-gold/40 blur-xl" />
          </div>

          {/* Testimonial or trust indicator (optional) */}
          
        </div>
      </Container>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-shimmer {
          animation: shimmer 8s infinite linear;
        }
      `}</style>
    </Section>
  );
}
