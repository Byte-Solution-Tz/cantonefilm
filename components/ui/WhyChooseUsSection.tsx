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
            <div className="relative mb-10">
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-gold z-0" />
              <div className="relative z-10 overflow-hidden">
                <Image
                  src="/img/commercial-docu.png"
                  alt="Cantone Films impact storytelling"
                  width={800}
                  height={520}
                  className="object-cover"
                />
              </div>
            </div>

            {/* UNDER IMAGE — Results Driven */}
            <WhyItem
              title="Results-Driven Content"
              text="Our productions support reporting, advocacy, fundraising, and public engagement by delivering content aligned with program objectives and communication strategies."
            />
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
              <span className="text-gold text-xs tracking-widest uppercase font-medium">
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-10 leading-tight">
              Why <br />
              <span className="text-brown">Choose Us?</span>
            </h2>

            {/* Right-side points */}
            <div className="space-y-10 max-w-xl">
              <WhyItem
                title="Storytelling for Impact"
                text="We focus on stories that inspire action, raise awareness, and support development goals. Our films communicate results clearly and emotionally to stakeholders and beneficiaries."
              />

              <WhyItem
                title="Community-Centered Approach"
                text="We work respectfully within communities, ensuring participants feel safe, represented, and valued throughout the filmmaking process."
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

function WhyItem({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="text-lg md:text-xl font-semibold text-navy mb-2">
        {title}
      </h3>
      <p className="text-brown/80 leading-relaxed text-base md:text-lg">
        {text}
      </p>
    </div>
  );
}
