import type { PortfolioItem } from '@/types/interface';

export const portfolio: PortfolioItem[] = [
  {
    title: 'Voices of Change',
    slug: 'voices-of-change',
    category: 'Documentary',
    coverImage: '/img/portfolio/commercial-docu.png',
    excerpt:
      'A powerful documentary amplifying grassroots voices and community-led impact.',
    vimeoId: '912345678',
    featured: true,
  },

  {
    title: 'Future of Learning',
    slug: 'future-of-learning',
    category: 'Impact Stories',
    coverImage: '/img/portfolio/future-of-learning.jpg',
    excerpt:
      'An educational film series transforming complex topics into accessible stories.',
    vimeoId: '923456789',
  },

  {
    title: 'Brand Horizons',
    slug: 'brand-horizons',
    category: 'Cooperate Videos',
    coverImage: '/img/portfolio/brand-horizons.jpg',
    excerpt:
      'A cinematic commercial campaign crafted to elevate brand storytelling.',
    vimeoId: '934567890',
  },

  {
    title: 'Community Impact Summit',
    slug: 'community-impact-summit',
    category: 'Cooperate Videos',
    coverImage: '/img/portfolio/commercial-docu.png',
    excerpt:
      'Event coverage capturing moments of collaboration, dialogue, and action.',
    externalLink: 'https://vimeo.com/945678901',
  },
];
