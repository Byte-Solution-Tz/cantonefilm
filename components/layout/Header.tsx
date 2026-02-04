'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ContactModal from "../modals/ContactModal";
import ContactButton from "../ui/ContactButton";
import Button from "../ui/Button";

const navItems = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Services", href: "/#services", id: "services" },
  { label: "Portfolio", href: "/#portfolio", id: "portfolio" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const id = visibleEntries[0].target.getAttribute("id");
          if (id) setActiveLink(id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl md:text-2xl font-bold group"
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
              onClick={() => setActiveLink(item.id)}
              className={`relative text-sm font-medium transition-colors duration-300 group ${
                activeLink === item.id ? "text-gold" : "text-navy hover:text-gold"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                  activeLink === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          
          {/* CTA Button */}
          <ContactButton
            variant="primary"
            size="sm"
            onClick={() => setIsModalOpen(true)}
          />
        </nav>

        {/* Mobile Menu Button */}
        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          variant="ghost"
          size="icon"
          className="md:hidden h-11 w-11 text-navy border border-brown/20 bg-cream/80 hover:text-gold hover:border-gold"
          ariaLabel="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-navy bg-opacity-95 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="absolute top-4 right-4">
          <Button
            onClick={() => setIsMobileMenuOpen(false)}
            variant="ghost"
            size="icon"
            className="h-11 w-11 text-cream border border-cream/20 hover:border-gold hover:text-gold"
            ariaLabel="Close menu"
          >
            <X className="w-7 h-7" />
          </Button>
        </div>

        <nav className="relative flex flex-col items-center justify-start h-full gap-7 px-6 pt-24 pb-10 overflow-y-auto">
          <div className="absolute inset-x-4 top-20 bottom-6 rounded-3xl bg-cream/5 border border-cream/10 backdrop-blur-sm" />
          <div className="relative w-full max-w-sm mx-auto flex flex-col items-center gap-7 py-8">
          {navItems.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setActiveLink(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-2xl font-semibold transition-all duration-300 transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } ${activeLink === item.id ? "text-gold" : "text-cream hover:text-gold"}`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${idx * 50}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile CTA */}
          <ContactButton
            variant="primary"
            size="md"
            fullWidth
            className={`mt-4 transition-all duration-300 transform ${
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
          </div>
        </nav>
      </div>
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  );
}
