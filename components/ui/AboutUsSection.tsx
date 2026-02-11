'use client';

import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import { useInView } from '@/hooks/useInView';


export default function AboutUsSection() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [contentRef, contentInView] = useInView({ threshold: 0.2 });

  return (
    <Section id="about" className="bg-cream py-24 md:py-32 relative overflow-hidden">
      {/* Background image + overlays (match hero style) */}
      <div className="absolute inset-0">
        {/* Responsive background image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat md:hidden"
          style={{ backgroundImage: "url('/img/about/cantonefilms-aboutbg-sm.webp')" }}
        />
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat hidden md:block"
          style={{ backgroundImage: "url('/img/about/cantonefilms-aboutbg-lg.webp')" }}
        />

        {/* Cream overlay for readability */}
        <div className="absolute inset-0 bg-cream/75" />

        {/* Soft radial depth (non-linear) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, rgba(255, 248, 240, 0.15) 0%, rgba(255, 248, 240, 0.35) 60%, rgba(255, 248, 240, 0.5) 100%)',
          }}
        />

        {/* Warm gold accent */}
        <div className="absolute inset-0 bg-linear-to-br from-gold/10 via-transparent to-gold/5" />

        {/* Subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, transparent 0%, transparent 55%, rgba(5, 10, 48, 0.15) 100%)',
          }}
        />

        
      </div>
      
      <Container>
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-4xl text-left mb-16 transition-all duration-1000 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Label */}
          <div className="flex items-center justify-start gap-3 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-navy text-sm uppercase tracking-widest font-medium">
              About Cantone Films
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6 leading-tight">
            Stories That Drive
            <br />
            <span className="text-brown">Real Change</span>
          </h2>

          {/* <p className="text-xl text-brown/80 leading-relaxed">
            We are visual storytellers, documentarians, and change-makers committed to amplifying voices that matter.
          </p> */}
        </div>

        {/* Main Content Grid */}
        <div
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 transition-all duration-1000 ${
            contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Content (left column) */}
          <div className="relative lg:max-w-2xl">
            <div className="absolute -left-6 -bottom-6 w-full h-full bg-gold/80 rounded-3xl" />
            <div className="relative z-10 bg-cream/90 rounded-3xl p-8 md:p-10 lg:p-12 space-y-8 text-navy shadow-sm">
              {/* Main narrative */}
              <div className="space-y-6 text-lg leading-relaxed font-normal">
                <p className="text-xl text-navy">
                  Cantone Films provides professional film and media
                    production services for NGOs, institutions,
                    development organizations, and brands. We
                    specialize in documentary filmmaking, impact
                    storytelling, and strategic visual communication
                    that supports reporting, advocacy, and
                    engagement.
                </p>

                {/* <p>
                  We work with organizations, institutions, and brands to document programs, share success stories, and communicate meaningful change through visual storytelling.
                </p>

                <p className="text-navy">
                  Every project we undertake is grounded in purpose-designed not just to look beautiful, but to inform, inspire, and leave a lasting impact on communities.
                </p> */}
              </div>

              <p className="text-xl text-navy">
                Our approach combines strong research, cultural
                sensitivity, and reliable production standards to
                ensure every story is accurate, respectful, and
                effective.
              </p>
            </div>
          </div>

          {/* Right column spacer to keep content left on large screens */}
          <div className="hidden lg:block" />
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
