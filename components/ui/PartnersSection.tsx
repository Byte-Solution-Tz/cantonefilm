'use client';

import Image from 'next/image';
import Section from '@/components/ui/Section';
import Container from '@/components/layout/Container';
import { partners } from '@/data/partners';
import { useInView } from '@/hooks/useInView';

export default function PartnersSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <Section className="relative bg-cream py-24 md:py-32 overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brown/5 rounded-full blur-3xl" />

      <Container>
        <div
          ref={ref}
          className={`relative z-10 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Header */}
          <div className="text-left max-w-3xl mb-16">
            <div className="flex items-center justify-start gap-4 mb-6">
              <span className="w-10 h-px bg-gold" />
              <span className="text-navy text-xs tracking-widest uppercase font-medium">
                Trusted By
              </span>
              <span className="w-10 h-px bg-gold" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
              Our Partners
            </h2>

            <p className="text-navy/70 text-lg">
              We collaborate with organizations shaping communities, policy,
              and positive change across the world.
            </p>
          </div>

          {/* Logos grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center">
            {partners.map((partner, index) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className="relative w-full max-w-[140px] h-[60px] flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    height={150}
                    width={500}
                    className="
                      object-contain
                      grayscale
                      opacity-70
                      transition-all duration-500
                      group-hover:grayscale-0
                      group-hover:opacity-100
                      group-hover:scale-105
                    "
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-brown/20 to-transparent" />

          {/* Stats */}
          {/* <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { value: '50+', label: 'Partner Organizations' },
              { value: '200+', label: 'Projects Delivered' },
              { value: '15+', label: 'Countries Reached' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`transition-all duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${0.6 + i * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-brown/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </Container>
    </Section>
  );
}
