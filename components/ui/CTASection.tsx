'use client';

import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react';

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
          <div className="relative max-w-6xl mx-auto">
            
            {/* Background pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(5, 10, 48, 0.5) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />

            {/* Content wrapper with gradient background */}
            <div className="relative bg-gradient-to-br from-navy via-navy/95 to-brown/90 p-10 md:p-16 lg:p-20 overflow-hidden">
              
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold/30 to-transparent" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/30 to-transparent" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold/20 to-transparent" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gold/20 to-transparent" />

              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent animate-shimmer" 
                   style={{ backgroundSize: '200% 100%' }} />

              {/* Content */}
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                
                {/* Small label */}
                <div 
                  className={`flex items-center justify-center gap-3 mb-6 transition-all duration-1000 ${
                    ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '0.2s' }}
                >
                  <div className="w-12 h-px bg-gold/50" />
                  <span className="text-gold font-medium tracking-widest text-sm uppercase">
                    Let's Create Together
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
                  <span className="text-gold">Your Story?</span>
                </h2>

                {/* Description */}
                <p 
                  className={`text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
                    ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '0.4s' }}
                >
                  Let's work together to create meaningful visual impact that resonates with your audience and drives real change.
                </p>

                {/* CTA Buttons */}
                <div 
                  className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 ${
                    ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '0.5s' }}
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-gold text-navy px-8 py-4 text-lg font-medium hover:bg-gold/90 transition-all duration-300 group hover:scale-105"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>

                  <a
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-cream text-cream px-8 py-4 text-lg font-medium hover:bg-cream hover:text-navy transition-all duration-300 group"
                  >
                    View Our Work
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>

                {/* Contact methods - Quick access */}
                
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>

            {/* 3D shadow effect */}
            <div className="absolute inset-0 -z-10 translate-y-2 translate-x-2 bg-gradient-to-br from-navy/40 to-brown/40 blur-xl" />
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