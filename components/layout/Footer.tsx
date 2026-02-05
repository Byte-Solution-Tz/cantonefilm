'use client';

import { site } from '@/data/site';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { openContactModal } from '@/components/modals/contactModalEvents';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUp,
  Film,
  Send,
} from 'lucide-react';

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  { label: 'Documentary Production', href: '/services/documentary' },
  { label: 'Commercial Films', href: '/services/commercial' },
  { label: 'Educational Content', href: '/services/educational' },
  { label: 'Event Coverage', href: '/services/events' },
];

const socialLinks = [
  { icon: Instagram, href: site.social?.instagram || '#', label: 'Instagram' },
  { icon: Facebook, href: site.social?.facebook || '#', label: 'Facebook' },
  { icon: Twitter, href: site.social?.twitter || '#', label: 'Twitter' },
  { icon: Linkedin, href: site.social?.linkedin || '#', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brown-dark text-cyan-100">
      {/* Top accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Main grid */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-bold">{site.name}</span>
            </Link>

            <p className="text-cream/80 max-w-md leading-relaxed">
              {site.tagline}
            </p>

            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-cream/80 hover:text-gold transition"
              >
                <Mail className="w-4 h-4" />
                {site.email}
              </a>

              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-3 text-cream/80 hover:text-gold transition"
              >
                <Phone className="w-4 h-4" />
                {site.phone}
              </a>

              <div className="flex items-center gap-3 text-cream/70">
                <MapPin className="w-4 h-4" />
                Dar es Salaam, Tanzania
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border border-cream/20 hover:border-gold hover:text-gold transition"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-gold text-xs tracking-widest uppercase font-semibold">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.label === 'Contact' ? (
                    <button
                      type="button"
                      onClick={openContactModal}
                      className="text-cream/80 hover:text-gold transition text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-cream/80 hover:text-gold transition"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-gold text-xs tracking-widest uppercase font-semibold">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-cream/80 hover:text-gold transition"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-cream/20" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-cream/60">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>

          
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="icon"
            className="h-11 w-11 border border-cream/30 text-cream hover:border-gold hover:text-gold"
            ariaLabel="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
    </footer>
  );
}
