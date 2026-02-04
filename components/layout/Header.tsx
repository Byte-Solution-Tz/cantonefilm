'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ContactModal from "../modals/ContactModal";
import ContactButton from "../ui/ContactButton";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen, isModalOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-lg border-b border-brown/20"
          : "bg-cream/95 backdrop-blur-md border-b border-brown/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl md:text-2xl font-bold group"
          onClick={() => setActiveLink("/")}
        >
          <div className="relative">
            {/* <Film
              className={`w-6 h-6 md:w-7 md:h-7 transition-all duration-300 ${
                isScrolled ? "text-gold" : "text-cream"
              } group-hover:text-gold group-hover:rotate-12`}
            /> */}
            <div className="absolute inset-0 bg-gold/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span
            className="transition-colors duration-300 text-navy group-hover:text-gold"
          >
            Cantone Films
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className="relative text-sm font-medium transition-colors duration-300 group text-navy hover:text-gold"
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                  activeLink === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          
          {/* CTA Button */}
          <ContactButton
            className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 border-2 ${
              isScrolled
                ? "bg-gold text-navy border-gold hover:bg-transparent hover:text-gold"
                : "bg-navy text-cream border-navy hover:bg-transparent hover:text-navy"
            }`}
            onClick={() => setIsModalOpen(true)}
          />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 transition-colors duration-300 text-navy hover:text-gold focus-visible:outline-gold"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-18.25 bg-navy/98 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navItems.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setActiveLink(item.href);
                setIsMobileMenuOpen(false);
              }}
              className={`text-2xl font-semibold text-cream hover:text-gold transition-all duration-300 transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${idx * 50}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile CTA */}
          <ContactButton
            className={`mt-4 px-8 py-4 bg-gold text-navy text-lg font-medium hover:bg-gold/90 transition-all duration-300 transform ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsModalOpen(true);
            }}
            label="Let's Talk"
          />
        </nav>
      </div>
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  );
}
