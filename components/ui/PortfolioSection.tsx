'use client';

import Image from 'next/image';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { portfolio } from '@/data/portfolio';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, Play, ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative bg-cream py-24 md:py-32 overflow-hidden"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute top-24 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 right-0 w-96 h-96 bg-brown/5 rounded-full blur-3xl" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">

          {/* LEFT — INTRO */}
          <div
            className={`
              lg:col-span-4
              transition-all duration-1000 ease-out
              ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
            `}
          >
            <div className="lg:sticky lg:top-32 space-y-8 max-w-md">
              <div className="flex items-center gap-3">
                <span className="w-10 h-px bg-gold" />
                <span className="text-navy tracking-widest text-xs uppercase font-medium">
                  Featured Work
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold leading-tight">
                Selected <br />
                <span className="text-brown">Projects</span>
              </h2>

             



              <p className="text-base md:text-lg text-navy/80 leading-relaxed">
                Our portfolio reflects our commitment to
                documenting meaningful change. We work closely
                with organizations and communities to capture real
                stories from the field, translating development
                programs, research initiatives, and social
                interventions into accessible visual narratives.
              </p>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 gap-6 py-6 border-y border-brown/20">
                <Stat value="50+" label="Projects" />
                <Stat value="15+" label="Countries" />
              </div> */}

              <Button
                href="/portfolio"
                rightIcon={
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                }
              >
                View All Works
              </Button>

              <p className="text-xs text-navy/60 italic">
                Hover a project to explore
              </p>
            </div>
          </div>

          {/* RIGHT — GRID */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 ">
              {portfolio.map((item, index) => {
                const isLarge = index % 5 === 0;

                return (
                  <a
                    key={item.title}
                    href={`/portfolio/${item.slug}`}
                    className={`
                      group relative overflow-hidden bg-navy
                      will-change-transform
                      transition-all duration-700 ease-out
                      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                      ${isLarge ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'} 
                    `}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {/* Image */}
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="
                        object-cover
                        transition-transform duration-700 ease-out
                        group-hover:scale-[1.08]
                      "
                    />

                    {/* Depth overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

                    {/* Hover tint */}
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-colors duration-500" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-14 h-14 rounded-full border border-cream/70 bg-cream/10 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-6 h-6 text-cream fill-cream ml-0.5" />
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <h3 className="text-gold font-medium text-sm md:text-base leading-tight">
                            {item.title}
                          </h3>
                          <span className="text-cream/70 text-xs">
                            {item.category}
                          </span>
                        </div>

                        <span className="w-7 h-7 rounded-full bg-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 text-navy" />
                        </span>
                      </div>

                      <div className="mt-3 h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />
                    </div>

                    {/* Index */}
                    <span className="absolute bottom-4 right-4 text-cream/50 text-[10px] font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Footer line */}
            <div
              className={`
                mt-12 flex items-center gap-4
                transition-all duration-1000
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: '600ms' }}
            >
              <span className="h-px flex-1 bg-gradient-to-r from-brown/30 to-transparent" />
              <span className="text-brown/60 text-sm">
                {portfolio.length} Featured Projects
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-brown/30 to-transparent" />
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
