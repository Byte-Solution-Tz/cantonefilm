'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import { portfolio } from '@/data/portfolio';
import { Play, ExternalLink, ArrowLeft, ArrowRight, Share2, Calendar, Tag } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function PortfolioProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [showVideo, setShowVideo] = useState(false);
  const [heroRef, heroInView] = useInView();
  const [detailsRef, detailsInView] = useInView();

  // Find current project
  const project = portfolio.find(p => p.slug === slug);
  
  // Get related projects (same category, excluding current)
  const relatedProjects = portfolio
    .filter(p => p.category === project?.category && p.slug !== slug)
    .slice(0, 3);

  // Get next/previous projects
  const currentIndex = portfolio.findIndex(p => p.slug === slug);
  const previousProject = currentIndex > 0 ? portfolio[currentIndex - 1] : null;
  const nextProject = currentIndex < portfolio.length - 1 ? portfolio[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-gold hover:underline">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-cream" />
        </div>

        {/* Content */}
        <Container>
          <div 
            ref={heroRef}
            className={`relative h-screen flex flex-col justify-end pb-20 transition-all duration-1000 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-cream/80 hover:text-gold transition-colors duration-300 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
            </div>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gold text-navy text-sm font-bold uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight max-w-4xl">
              {project.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-3xl leading-relaxed">
              {project.excerpt}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.vimeoId && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="group flex items-center gap-3 bg-gold text-navy px-8 py-4 font-semibold hover:bg-gold/90 transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-5 h-5 fill-navy" />
                  Watch Film
                </button>
              )}

              {project.externalLink && (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-transparent border-2 border-cream text-cream px-8 py-4 font-semibold hover:bg-cream hover:text-navy transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Campaign
                </a>
              )}

              <button className="group flex items-center gap-3 bg-transparent border-2 border-cream text-cream px-6 py-4 hover:bg-cream/10 transition-all duration-300">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60 animate-bounce">
          <div className="text-xs tracking-widest">SCROLL</div>
          <div className="w-px h-12 bg-gradient-to-b from-cream/60 to-transparent" />
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && project.vimeoId && (
        <div 
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-cream hover:text-gold transition-colors text-sm"
            >
              Close ✕
            </button>
            <iframe
              src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Project Details */}
      <Section className="py-24">
        <Container>
          <div 
            ref={detailsRef}
            className={`grid lg:grid-cols-3 gap-16 transition-all duration-1000 ${
              detailsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">About This Project</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-brown/80 leading-relaxed">
                    {project.excerpt}
                  </p>
                  <p className="text-brown/80 leading-relaxed">
                    This project showcases our commitment to creating meaningful visual narratives that resonate with audiences and drive real impact. Through careful storytelling and cinematic production, we brought this vision to life.
                  </p>
                  <p className="text-brown/80 leading-relaxed">
                    Every frame was crafted with intention, every scene designed to move and inspire. The result is a powerful piece of visual storytelling that continues to make waves.
                  </p>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-navy">Behind the Scenes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative aspect-[4/3] bg-navy overflow-hidden group">
                      <Image
                        src={project.coverImage}
                        alt={`Behind the scenes ${i}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-white/50 p-8 border-2 border-brown/10">
                <h3 className="text-xl font-bold text-navy mb-6">Project Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Tag className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-brown/60 mb-1">Category</div>
                      <div className="font-medium text-navy">{project.category}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-brown/60 mb-1">Year</div>
                      <div className="font-medium text-navy">2024</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Play className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-brown/60 mb-1">Format</div>
                      <div className="font-medium text-navy">Documentary Film</div>
                    </div>
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-8 border-t border-brown/10">
                  <div className="text-sm text-brown/60 mb-3">Share this project</div>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-brown/10 hover:bg-gold hover:text-navy transition-all duration-300 flex items-center justify-center">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-navy to-navy/95 p-8 text-cream">
                <h3 className="text-xl font-bold mb-4">Interested in Similar Work?</h3>
                <p className="text-cream/80 mb-6">
                  Let's discuss how we can bring your vision to life.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 font-medium hover:bg-gold/90 transition-all duration-300 w-full justify-center"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section className="py-24 bg-white/30">
          <Container>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Related Projects</h2>
              <div className="w-20 h-1 bg-gold" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/portfolio/${relatedProject.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/5] bg-navy overflow-hidden mb-4">
                    <Image
                      src={relatedProject.coverImage}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                    <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                    {relatedProject.title}
                  </h3>
                  <p className="text-brown/70 text-sm">{relatedProject.category}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Navigation */}
      <Section className="py-16 border-t border-brown/20">
        <Container>
          <div className="flex justify-between items-center">
            {previousProject ? (
              <Link
                href={`/portfolio/${previousProject.slug}`}
                className="group flex items-center gap-3 text-brown hover:text-gold transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-brown/60 mb-1">Previous</div>
                  <div className="font-medium">{previousProject.title}</div>
                </div>
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="group flex items-center gap-3 text-brown hover:text-gold transition-colors"
              >
                <div className="text-right">
                  <div className="text-xs text-brown/60 mb-1">Next</div>
                  <div className="font-medium">{nextProject.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </Container>
      </Section>
    </div>
  );
}