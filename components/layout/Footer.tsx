'use client';
import { site } from "@/data/site";
import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, Twitter, Linkedin, ArrowUp, Film } from "lucide-react";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: site.social?.instagram || "#", label: "Instagram" },
  { icon: Facebook, href: site.social?.facebook || "#", label: "Facebook" },
  { icon: Twitter, href: site.social?.twitter || "#", label: "Twitter" },
  { icon: Linkedin, href: site.social?.linkedin || "#", label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy text-cream mt-24 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gold to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              {/* <Film className="w-8 h-8 text-gold group-hover:rotate-12 transition-transform duration-300" /> */}
              <h3 className="text-2xl font-bold group-hover:text-gold transition-colors duration-300">
                {site.name}
              </h3>
            </Link>
            <p className="text-cream/80 mb-6 max-w-sm leading-relaxed">
              {site.tagline}
            </p>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-gold">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors duration-300"
                />
                <button className="px-6 py-2.5 bg-gold text-navy font-medium hover:bg-gold/90 transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gold group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-cream/80 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-3 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="text-cream/80 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-3 group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  {site.phone}
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-gold">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-cream/10 border border-cream/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:scale-110 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-cream group-hover:text-navy transition-colors duration-300" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-cream/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-cream/60">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm text-cream/60">
            <Link href="/privacy" className="hover:text-gold transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors duration-300">
              Terms of Service
            </Link>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gold text-navy flex items-center justify-center hover:bg-gold/90 hover:scale-110 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Decorative background pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
    </footer>
  );
}