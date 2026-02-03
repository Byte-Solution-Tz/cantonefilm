import type { Metadata } from 'next';
import PortfolioPageClient from '@/components/ui/PortfolioPageClient';

export const metadata: Metadata = {
  title: 'Portfolio | Cantone Films',
  description:
    'Explore documentaries, impact stories, and visual narratives crafted by Cantone Films.',
  openGraph: {
    title: 'Portfolio | Cantone Films',
    description:
      'A curated selection of documentaries, campaigns, and impact-driven films.',
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
