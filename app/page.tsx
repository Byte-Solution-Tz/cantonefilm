'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

import Container from '@/components/layout/Container';
import PartnersSection from '@/components/ui/PartnersSection';
import ServiceCard from '@/components/ui/ServiceCard';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

import { services } from '@/data/services';
import { portfolio } from '@/data/portfolio';

const heroImages = [
  "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=1600&h=900&fit=crop"
];



// Intersection Observer Hook
function useInView(options = {}): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.1, ...options });

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isInView];
}

export default function CantoneFimsLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [servicesRef, servicesInView] = useInView();
  const [portfolioRef, portfolioInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  // Hero slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-cream text-navy min-h-screen">
      {/* HERO SECTION WITH SLIDESHOW */}
      <section className="relative h-screen overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === idx ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transform: `translateY(${scrollY * 0.5}px)`
              }}
            >
              {/* <Image
                src={img}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover"
              /> */}
              <div className="absolute inset-0 bg-linear-to-b from-navy/60 via-navy/40 to-navy/80" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <Container>
          <div className="relative h-screen flex items-center">
            <div className="max-w-3xl animate-fadeIn">
              <div className="overflow-hidden mb-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-cream animate-slideUp">
                  Creating Stories <br />That Last
                </h1>
              </div>
              <div className="overflow-hidden">
                <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl animate-slideUp" style={{ animationDelay: '0.2s' }}>
                  Cantone Films is a story-driven production company creating
                  meaningful visual narratives for impact, education, and social change.
                </p>
              </div>
              <div className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
                <Button href="#contact">Work With Us</Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-12 h-1 transition-all duration-300 ${
                currentSlide === idx ? 'bg-gold' : 'bg-cream/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <Section className="bg-cream">
      <Container>
        <div
          ref={servicesRef}
          className={`transition-all duration-1000 ${
            servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brown">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-gold mb-3" />
            <p className="text-brown/70 max-w-2xl">
              We offer comprehensive video production services tailored to bring your story to life with creativity and impact.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                index={idx}
                isInView={servicesInView}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>

      {/* PORTFOLIO SECTION */}
      <Section className="bg-white/30">
        <Container>
          <div
            ref={portfolioRef}
            className={`transition-all duration-1000 ${
              portfolioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brown">Selected Work</h2>
            <div className="w-20 h-1 bg-gold mb-12" />

            <div className="grid md:grid-cols-3 gap-6">
              {portfolio.slice(0, 3).map((item, idx) => (
                <div
                  key={item.title}
                  className={`group cursor-pointer transition-all duration-700 ${
                    portfolioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${idx * 0.15}s` }}
                >
                  <div className="relative aspect-video mb-4 overflow-hidden bg-navy">
                    {/* <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    /> */}
                    <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/60 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-2 border-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                        <Play className="w-6 h-6 text-cream fill-cream ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-navy group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brown/70">{item.category}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button href="#portfolio">View Full Portfolio</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* PARTNERS SECTION - ADD HERE */}
      <PartnersSection />

      {/* CTA SECTION */}
      <Section className="bg-cream">
        <Container>
          <div
            ref={ctaRef}
            className={`bg-gradient-to-br from-gold to-gold/80 p-12 md:p-16 max-w-4xl mx-auto text-center shadow-2xl transition-all duration-1000 ${
              ctaInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
              Ready to communicate your story?
            </h2>
            <p className="text-lg mb-8 text-navy/80 max-w-2xl mx-auto">
              Let's work together to create meaningful visual impact that resonates with your audience and drives real change.
            </p>
            <Button href="#contact">Contact Us</Button>
          </div>
        </Container>
      </Section>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}