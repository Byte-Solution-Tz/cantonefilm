import HeroSection from '@/components/ui/HeroSection';
import ServicesSection from '@/components/ui/ServicesSection';
import PortfolioSection from '@/components/ui/PortfolioSection';
import PartnersSection from '@/components/ui/PartnersSection';
import CTASection from '@/components/ui/CTASection';
import WhyChooseUsSection from '@/components/ui/WhyChooseUsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <CTASection />
    </>
  );
}
