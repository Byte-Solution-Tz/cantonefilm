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
                  src="/img/about/why-choose-us.webp"
                  alt="Cantone Films impact storytelling"
                  width={800}
                  height={520}
                  className="object-cover"
                />
              </div>
            </div>

            {/* UNDER IMAGE — Results Driven */}
            <WhyItem
                title="Development & NGO Experience"
                text="We understand reporting requirements, donor communication needs, and impact documentation, enabling us to translate complex programs into compelling visual narratives."
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
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Why <br />
              <span className="text-brown">Choose Cantone Films</span>
            </h2>

            {/* Intro sentence */}
            <p className="text-brown/80 max-w-xl mb-10 leading-relaxed">
              We work at the intersection of storytelling, development communication,
              and community engagement—helping organizations communicate impact
              clearly, ethically, and effectively.
            </p>

            {/* Right-side points */}
            <div className="space-y-10 max-w-xl">
              <WhyItem
                title="Impact-Focused Storytelling"
                text="We design stories that raise awareness, communicate measurable outcomes, and inspire positive action—supporting advocacy, education, and development goals."
              />

              <WhyItem
                title="Ethical Community Engagement"
                text="Our work prioritizes informed consent, respectful representation, and cultural sensitivity, ensuring communities are portrayed with dignity and accuracy."
              />

              <WhyItem
                title="Professional Production Standards"
                text="We deliver broadcast-ready content with reliable timelines, clear communication, and high technical quality—meeting institutional and donor expectations."
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
