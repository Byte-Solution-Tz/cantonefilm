'use client';

import Image from 'next/image';
import Container from '@/components/layout/Container';
import { useInView } from '@/hooks/useInView';

export default function WhyChooseUsSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-cream py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-brown/5" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT COLUMN */}
          <div
            className={`
              lg:col-span-6
              transition-all duration-1000
              ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
            `}
          >
            {/* Image block */}
            <div className="relative mb-10 ">
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-gold z-0 rounded-2xl" />
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/img/about/whychooseus.webp"
                  alt="Cantone Films impact storytelling"
                  width={800}
                  height={520}
                  className="object-cover"
                />
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div
            className={`
              lg:col-span-6
              transition-all duration-1000 delay-200
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold" />
              <span className="text-navy text-xs tracking-widest uppercase font-medium">
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6 leading-tight">
              We understand you
            </h2>

            {/* Description */}
            <p className="text-navy/80 max-w-xl leading-relaxed text-base md:text-lg">
              We understand the communication needs of NGOs and institutions, including reporting, advocacy, and
              stakeholder engagement. Our productions are designed to meet professional standards while remaining
              accessible to diverse audiences. By combining research-informed storytelling with high-quality
              production, we help organizations communicate their work with clarity and credibility.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
