'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import type { ServiceSplitProps } from '@/types/interface';

/* ---------------- Parallax Hook ---------------- */
function useParallax(ref: React.RefObject<HTMLElement>, speed = 0.12) {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      const rect = ref.current!.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom > 0 && rect.top < windowHeight) {
        const progress =
          (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffset((progress - 0.5) * speed * 200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);

  return offset;
}

/* ---------------- Component ---------------- */
export default function ServiceSplit({
  service,
  index,
  reverse = false,
}: ServiceSplitProps) {
  const { title, backgroundTitle, description, image, features, cta } = service;

  const [ref, isInView] = useInView({ threshold: 0.25 });
  const bgOffset = useParallax(ref, 0.18);
  const textOffset = useParallax(ref, 0.08);

  return (
    <section
      ref={ref}
      className="
        relative overflow-hidden
        h-[85vh] md:h-[75vh]
        
      "
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${bgOffset}px) scale(${isInView ? 1 : 1.08})`,
            transition: 'transform 1.2s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-linear-to-b from-navy/55 via-navy/40 to-navy/70" />
          <div className="absolute inset-0 bg-linear-to-br from-gold/10 via-transparent to-transparent" />
        </div>
      </div>

      {/* Background Word */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <h2
            className={`
              select-none font-bold tracking-tight leading-none whitespace-nowrap
              text-[2rem] sm:text-[4rem] md:text-[7rem] lg:text-[8rem]
              text-cream/5
              transition-opacity duration-1000
              ${reverse ? 'ml-auto text-right' : 'text-left'}
              ${isInView ? 'opacity-20' : 'opacity-0'}
            `}
            style={{
              transform: `translateY(${bgOffset * 0.6}px)`,
              transitionDelay: `${index * 0.12}s`,
            }}
          >
            {backgroundTitle}
          </h2>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          <div
            className={`
              max-w-xl lg:max-w-2xl
              ${reverse ? 'ml-auto text-right' : 'mr-auto text-left'}
              transition-all duration-1000
              ${isInView ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              transform: `translateY(${-textOffset}px)`,
              transitionDelay: `${index * 0.12 + 0.2}s`,
            }}
          >
            <h3 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-cream">
              {title}
            </h3>

            <p className="mb-8 text-base md:text-lg lg:text-xl text-cream/85 leading-relaxed">
              {description}
            </p>

            <ul className="mb-10 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-cream/80 text-sm md:text-base"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </div>
      </div>

      {/* Section Rhythm Accent */}
      <div
        className={`absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent`}
      />
    </section>
  );
}
