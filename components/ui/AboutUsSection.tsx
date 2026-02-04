'use client';

import Image from 'next/image';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import { useInView } from '@/hooks/useInView';
import { Target } from 'lucide-react';


export default function AboutUsSection() {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [contentRef, contentInView] = useInView({ threshold: 0.2 });

  return (
    <Section id="about" className="bg-cream py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brown/5 rounded-full blur-3xl" />
      
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
            <span className="text-gold text-sm uppercase tracking-widest font-medium">
              About Cantone Films
            </span>
            <div className="w-12 h-px bg-gold" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
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
          {/* Left – Image/Visual */}
          <div className="relative">
            {/* Main image */}
            <div className="relative aspect-[4/5] bg-navy overflow-hidden group">
              <Image
                src="/img/about-team.jpg" 
                alt="Cantone Films Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              
            </div>
          </div>

          {/* Right – Content */}
          <div className="space-y-8">
            {/* Main narrative */}
            <div className="space-y-6 text-navy/90 text-lg leading-relaxed">
              <p className="text-xl font-medium text-navy">
                <strong className="text-gold">Cantone Films</strong> is a creative media production company providing professional film, video, and multimedia services across Tanzania and beyond.
              </p>

              <p>
                We work with organizations, institutions, and brands to document programs, share success stories, and communicate meaningful change through visual storytelling.
              </p>

              <p>
                Every project we undertake is grounded in <span className="font-semibold text-gold">purpose</span>-designed not just to look beautiful, but to inform, inspire, and leave a lasting impact on communities.
              </p>
            </div>

            {/* Approach callout */}
            <div className="relative bg-gradient-to-br from-navy to-brown p-8 text-cream">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/20 to-transparent" />
              
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-gold" />
                </div>
                Our Approach
              </h3>

              <p className="text-cream/90 leading-relaxed mb-4">
                We believe that powerful stories can educate, mobilize communities, and influence positive development outcomes.
              </p>

              <p className="text-cream/90 leading-relaxed">
                Our work is driven by <span className="text-gold font-medium">cultural sensitivity</span>, strong research, and cinematic craftsmanship—ensuring every story is told with authenticity, respect, and depth.
              </p>

              {/* Decorative line */}
              <div className="mt-6 h-px bg-gradient-to-r from-gold/50 to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
