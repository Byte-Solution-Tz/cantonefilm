'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import { openContactModal } from '@/components/modals/contactModalEvents';

export default function CantoneFilmsHero() {
  const [heroRef] = useInView();
  const [lineAnimation, setLineAnimation] = useState(false);

  // Trigger underline animation
  useEffect(() => {
    const timer = setTimeout(() => setLineAnimation(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-cream"
    >
      {/* Decorative background layers (NO IMAGES) */}
      <div className="absolute inset-0">
        {/* Soft vertical depth */}
        <div className="absolute inset-0 bg-linear-to-b from-cream via-cream to-brown/10" />

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

        {/* Shimmer accent */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 opacity-30 animate-shimmer"
          style={{ backgroundSize: '200% 100%' }}
        />
      </div>

      {/* Main Content */}
      <Container>
        <div className="relative h-screen flex flex-col justify-start md:justify-between py-28 md:py-24">

          {/* Hero Text */}
          <div className="flex-1 flex items-center">
            <div className="w-full lg:w-1/2 xl:w-7/12">

              <div className="mb-8 md:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-gold leading-[0.95] mb-6 animate-slideUp">
                  Impact-Driven Film
                  
                  
                  
                  & Multimedia Production Company in Tanzania
                </h1>
                <span className="relative inline-block">
                    
                    <span
                      className={`absolute -left-6 md:-left-12 lg:-left-24 bottom-2 md:bottom-4 h-1 md:h-2 bg-gold transition-all duration-[1500ms] ease-out ${
                        lineAnimation
                          ? 'w-[calc(100%+6rem)] md:w-[calc(100%+12rem)] lg:w-[calc(100%+12rem)]'
                          : 'w-0'
                      }`}
                    />
                  </span>
              </div>

              <div className="overflow-hidden mb-6 md:mb-12">
                <p
                  className="text-xl md:text-2xl lg:text-3xl text-navy/80 font-light leading-relaxed max-w-3xl animate-slideUp"
                  style={{ animationDelay: '0.3s' }}
                >
                  We create powerful documentaries, corporate films, and creative visual stories that communicate
                  <span className="text-brown font-medium"> impact</span>,
                  <span className="text-brown font-medium"> inspire action</span>, and strengthen 
                  <span className="text-brown font-medium"> community</span> engagement.
                </p>
              </div>

              {/* CTA */}
              <div
                className="hidden md:block animate-slideUp"
                style={{ animationDelay: '0.5s' }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={openContactModal}
                  rightIcon={
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  }
                >
                  Let&apos;s Collaborate
                </Button>
              </div>

              <div
                className="md:hidden mt-4 animate-slideUp"
                style={{ animationDelay: '0.5s' }}
              >
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={openContactModal}
                  rightIcon={
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  }
                >
                  Let&apos;s Collaborate
                </Button>
              </div>
            </div>
          </div>

          {/* Film-style CTA */}
          <div className="mt-8 md:mt-0 md:absolute md:bottom-12 md:bottom-16 md:right-6 md:right-12 lg:right-24 animate-scaleIn">
            <button onClick={scrollToWork} className="group relative overflow-hidden">
              <div className="relative flex flex-col items-center gap-4">

                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-48 lg:h-48">
                  <div className="absolute inset-0 rounded-full border-4 border-gold/30 animate-spin-slow" />
                  <div className="absolute inset-2 rounded-full bg-gold/10 backdrop-blur-sm border-2 border-gold/40 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-500 group-hover:scale-110">
                    <Play className="w-9 h-9 sm:w-10 sm:h-10 md:w-16 md:h-16 text-navy fill-navy group-hover:text-gold group-hover:fill-gold transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-navy font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider group-hover:text-gold transition-colors duration-300">
                    VIEW OUR WORK
                  </div>
                  <div className="w-0 h-0.5 bg-gold mx-auto mt-2 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </button>
          </div>

        </div>
      </Container>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-shimmer {
          animation: shimmer 8s infinite linear;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
