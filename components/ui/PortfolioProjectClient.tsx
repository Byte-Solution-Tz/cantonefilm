'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import Section from '@/components/ui/Section';
import { portfolio } from '@/data/portfolio';
import {
  Play,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Share2,
  Calendar,
  Tag,
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function PortfolioProjectClient({ slug }: { slug: string }) {
  const project = portfolio.find(p => p.slug === slug);

  const [showVideo, setShowVideo] = useState(false);
  const [heroRef, heroInView] = useInView();
  const [detailsRef, detailsInView] = useInView();

  const currentIndex = useMemo(
    () => portfolio.findIndex(p => p.slug === slug),
    [slug]
  );

  const previousProject =
    currentIndex > 0 ? portfolio[currentIndex - 1] : null;

  const nextProject =
    currentIndex < portfolio.length - 1
      ? portfolio[currentIndex + 1]
      : null;

  const relatedProjects = useMemo(
    () =>
      portfolio
        .filter(p => p.category === project?.category && p.slug !== slug)
        .slice(0, 3),
    [project, slug]
  );

  useEffect(() => {
    if (!showVideo) return;

    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowVideo(false);
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [showVideo]);

  if (!project) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <Link href="/portfolio" className="text-gold hover:underline">
          ← Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/65 via-navy/40 to-cream" />

        <Container>
          <div
            ref={heroRef}
            className={`relative h-screen flex flex-col justify-end pb-20 transition-all duration-1000 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-cream/80 hover:text-gold mb-6 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <span className="inline-block px-4 py-2 bg-gold text-navy text-sm font-bold uppercase mb-4 w-fit">
              {project.category}
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 max-w-5xl leading-tight">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-cream/90 max-w-3xl mb-8">
              {project.excerpt}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.vimeoId && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="flex items-center gap-3 bg-gold text-navy px-8 py-4 font-semibold hover:bg-gold/90 transition"
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
                  className="flex items-center gap-3 border-2 border-cream text-cream px-8 py-4 font-semibold hover:bg-cream hover:text-navy transition"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Campaign
                </a>
              )}

              <button className="border-2 border-cream text-cream px-6 py-4 hover:bg-cream/10 transition">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= VIDEO MODAL ================= */}
      {showVideo && project.vimeoId && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-6xl aspect-video"
            onClick={e => e.stopPropagation()}
          >
            <iframe
              src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ================= DETAILS ================= */}
      <Section className="py-24">
        <Container>
          <div
            ref={detailsRef}
            className={`grid lg:grid-cols-3 gap-16 transition-all duration-1000 ${
              detailsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                  About This Project
                </h2>
                <p className="text-brown/80 leading-relaxed mb-4">
                  {project.excerpt}
                </p>
                <p className="text-brown/80 leading-relaxed">
                  Crafted with intention, this project reflects our belief in
                  storytelling that informs, inspires, and drives impact.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">
                  Behind the Scenes
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="relative aspect-[4/3] bg-navy overflow-hidden">
                      <Image
                        src={project.coverImage}
                        alt={`Behind the scenes ${i}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/50 p-8 border border-brown/10">
                <h3 className="text-xl font-bold text-navy mb-6">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Tag className="w-5 h-5 text-gold" />
                    <div>
                      <div className="text-sm text-brown/60">Category</div>
                      <div className="font-medium">{project.category}</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-gold" />
                    <div>
                      <div className="text-sm text-brown/60">Year</div>
                      <div className="font-medium">2024</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy text-cream p-8">
                <h3 className="font-bold text-xl mb-4">
                  Interested in Similar Work?
                </h3>
                <p className="text-cream/80 mb-6">
                  Let’s bring your vision to life.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-6 py-3 font-medium w-full"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ================= RELATED ================= */}
      {relatedProjects.length > 0 && (
        <Section className="py-24 bg-white/30">
          <Container>
            <h2 className="text-3xl font-bold text-navy mb-12">
              Related Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map(p => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`}>
                  <div className="relative aspect-[4/5] bg-navy overflow-hidden mb-4">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover hover:scale-110 transition"
                    />
                  </div>
                  <h3 className="font-bold text-navy">{p.title}</h3>
                  <p className="text-brown/70 text-sm">{p.category}</p>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ================= NAVIGATION ================= */}
      <Section className="py-16 border-t border-brown/20">
        <Container>
          <div className="flex justify-between items-center">
            {previousProject ? (
              <Link
                href={`/portfolio/${previousProject.slug}`}
                className="flex items-center gap-3 text-brown hover:text-gold"
              >
                <ArrowLeft className="w-5 h-5" />
                {previousProject.title}
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="flex items-center gap-3 text-brown hover:text-gold"
              >
                {nextProject.title}
                <ArrowRight className="w-5 h-5" />
              </Link>
            ) : <div />}
          </div>
        </Container>
      </Section>
    </div>
  );
}
