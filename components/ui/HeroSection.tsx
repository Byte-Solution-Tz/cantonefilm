'use client';

import React from 'react';
import Container from '@/components/layout/Container';
import { useInView } from '@/hooks/useInView';

export default function CantoneFilmsHero() {
  const [heroRef] = useInView();

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-cream"
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        {/* Responsive background image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat md:hidden"
          style={{
            backgroundImage:
              "url('/img/hero/cantonefilms-bg-sm.webp')",
          }}
        />
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat hidden md:block"
          style={{
            backgroundImage:
              "url('/img/hero/cantonefilms-bg-lg.webp')",
          }}
        />

        {/* Cream overlay for readability */}
        <div className="absolute inset-0 bg-cream/65" />

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

      {/* Main Content */}
      <Container>
        <div className="relative h-screen flex items-center justify-center">
          <div className="text-center text-navy uppercase tracking-[0.14em] animate-slideUp">
            <p className="text-xl sm:text-2xl md:text-4xl font-medium mb-4 md:mb-6">
              Welcome To
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 md:mb-8">
              Cantone Films
            </h1>
            <p className="text-lg sm:text-xl md:text-4xl font-semibold mb-8 md:mb-10">
              Film &amp; Media Production Company
            </p>
            <div className="w-44 sm:w-56 md:w-72 h-1.5 bg-gold mx-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
}
