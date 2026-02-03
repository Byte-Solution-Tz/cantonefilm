'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import { portfolio } from '@/data/portfolio';
import { PortfolioCategory } from '@/types/interface';
import { Play, ExternalLink, Filter } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const categories: (PortfolioCategory | 'All')[] = [
  'All',
  'Documentary',
  'Cooperate Videos',
  'Impact Stories',
  'Fictional Films',
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | 'All'>('All');
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView({ threshold: 0.1 });

  const filteredProjects = activeCategory === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeCategory);

  const featuredProjects = portfolio.filter(item => item.featured);

  return (
    <div className="bg-cream min-h-screen pt-24">
      {/* Hero Section */}
      <Section className="pt-16 pb-12">
        <Container>
          <div 
            ref={headerRef}
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Label */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold font-medium tracking-widest text-sm uppercase">
                Our Work
              </span>
              <div className="w-12 h-0.5 bg-gold" />
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-tight">
              Stories That
              <br />
              <span className="text-brown">Inspire Change</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-brown/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Explore our portfolio of impactful visual narratives—from documentaries that amplify voices to campaigns that move audiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-brown/20">
              <div>
                <div className="text-4xl font-bold text-gold mb-2">{portfolio.length}+</div>
                <div className="text-sm text-brown/70">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">15+</div>
                <div className="text-sm text-brown/70">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">50+</div>
                <div className="text-sm text-brown/70">Awards</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <Section className="py-16 bg-white/30">
          <Container>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Featured Work</h2>
              <div className="w-20 h-1 bg-gold" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, idx) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group relative aspect-[16/10] overflow-hidden bg-navy"
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                  
                  {/* Gold overlay on hover */}
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-all duration-500" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-20 h-20 rounded-full border-2 border-cream bg-cream/10 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <Play className="w-9 h-9 text-cream fill-cream ml-1" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="inline-block px-3 py-1 bg-gold text-navy text-xs font-bold uppercase tracking-wider mb-3">
                      Featured
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-cream mb-2">
                      {project.title}
                    </h3>
                    <p className="text-cream/80 mb-3">{project.excerpt}</p>
                    <div className="flex items-center gap-2 text-gold text-sm font-medium">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span>Watch Now</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Filter Section */}
      <Section className="py-16">
        <Container>
          <div 
            ref={gridRef}
            className={`transition-all duration-1000 ${
              gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Category Filter */}
            <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-4">
              <Filter className="w-5 h-5 text-brown flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 border-2 ${
                    activeCategory === category
                      ? 'bg-gold text-navy border-gold'
                      : 'bg-transparent text-brown border-brown/20 hover:border-gold hover:text-gold'
                  }`}
                >
                  {category}
                  {category === 'All' && ` (${portfolio.length})`}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className={`group relative aspect-[4/5] overflow-hidden bg-navy transition-all duration-700 hover:shadow-2xl ${
                    gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-all duration-500" />

                  {/* Play/External icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 rounded-full border-2 border-cream bg-cream/10 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      {project.externalLink ? (
                        <ExternalLink className="w-7 h-7 text-cream" />
                      ) : (
                        <Play className="w-7 h-7 text-cream fill-cream ml-0.5" />
                      )}
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-cream/90 text-navy text-xs font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-cream mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-cream/80 text-sm mb-3 line-clamp-2">
                      {project.excerpt}
                    </p>
                    
                    {/* Progress bar */}
                    <div className="h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-700" />
                  </div>
                </Link>
              ))}
            </div>

            {/* No results message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-brown/60 text-lg">
                  No projects found in this category yet.
                </p>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 bg-white/30">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Have a Story to Tell?
            </h2>
            <p className="text-xl text-brown/80 mb-10">
              Let's create something extraordinary together. Get in touch to discuss your next project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 text-lg font-medium hover:bg-gold/90 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}