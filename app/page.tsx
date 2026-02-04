import HeroSection from '@/components/ui/HeroSection';
import AboutUsSection from '@/components/ui/AboutUsSection';
import ServicesOverviewSection from '@/components/ui/ServicesOverviewSection';
// import ServicesSection from '@/components/ui/ServicesSection';
import PortfolioSection from '@/components/ui/PortfolioSection';
import CTASection from '@/components/ui/CTASection';
import WhyChooseUsSection from '@/components/ui/WhyChooseUsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesOverviewSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <CTASection />
    </>
  );
}
