import { useRef, useState, useEffect } from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/layout/Container';
import { partners } from '@/data/partners';

// Partner logos data - replace with your actual partners
// const partners = [
//   {
//     name: "UNESCO",
//     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop", // Replace with actual logo
//     url: "https://unesco.org"
//   },
//   {
//     name: "UNICEF",
//     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
//     url: "https://unicef.org"
//   },
//   {
//     name: "Red Cross",
//     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
//     url: "https://redcross.org"
//   },
//   {
//     name: "World Bank",
//     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
//     url: "https://worldbank.org"
//   },
//   {
//     name: "WHO",
//     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
//     url: "https://who.int"
//   },
//   {
//     name: "Save the Children",
//     logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
//     url: "https://savethechildren.org"
//   }
// ];

// Intersection Observer Hook
function useInView(options = {}): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
}

export default function PartnersSection() {
  const [partnersRef, partnersInView] = useInView();

  return (
    <Section className="bg-white/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown/5 rounded-full blur-3xl translate-x-32 translate-y-32" />
      
      <Container>
        <div
          ref={partnersRef}
          className={`relative z-10 transition-all duration-1000 ${
            partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brown">
              Trusted Partners
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mb-6" />
            <p className="text-brown/70 max-w-2xl mx-auto">
              We're proud to collaborate with leading organizations worldwide to create impactful visual stories that drive change.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center">
            {partners.map((partner, idx) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center transition-all duration-700 ${
                  partnersInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="relative w-full aspect-[2/1] flex items-center justify-center p-4 bg-white border-2 border-brown/10 group-hover:border-gold transition-all duration-300 group-hover:shadow-lg">
                  {/* Logo placeholder - replace with actual images */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-brown/60 group-hover:text-gold transition-colors duration-300 font-semibold text-xs md:text-sm text-center">
                      {partner.name}
                    </span>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-gold/10 transition-all duration-300" />
                </div>
              </a>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
            <div
              className={`transition-all duration-1000 ${
                partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">50+</div>
              <div className="text-brown/70">Global Partners</div>
            </div>
            <div
              className={`transition-all duration-1000 ${
                partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0.9s' }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">200+</div>
              <div className="text-brown/70">Projects Delivered</div>
            </div>
            <div
              className={`transition-all duration-1000 ${
                partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">15+</div>
              <div className="text-brown/70">Countries Reached</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}