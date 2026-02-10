// /data/services.ts

export const services = [
  {
    id: 'film-documentary-media-production',
    title: 'Film, Documentary, and Media Production',
    backgroundTitle: 'PRODUCTION',
    description:
      'We produce high-quality documentaries and films that capture real stories, programs, and experiences. From planning and filming to final delivery, we create clear, engaging visual content that communicates purpose and impact.',
    image: '/img/portfolio/documentary-banner.png',
    features: [
      'Documentary & Corporate Films',
      'Field & Studio Production',
      'Professional Crews & Equipment',
      'End-to-End Delivery',
    ],
    cta: {
      label: 'View Film Projects',
      href: '/services/film-video',
    },
  },

  {
    id: 'story-development-visual-strategy',
    title: 'Story Development & Visual Strategy',
    backgroundTitle: 'STORY',
    description:
      'Strong stories begin with clarity. We support projects through research, concept development, scripting, and visual planning to align each film with communication goals, audience needs, and real-world context.',
    image: '/img/portfolio/left-documentary-banner.png',
    features: [
      'Research & Concept Development',
      'Scripting & Storyboarding',
      'Visual Planning',
      'Production Strategy',
    ],
    cta: {
      label: 'Explore Our Process',
      href: '/services/creative-development',
    },
  },

  {
    id: 'post-production-content-delivery',
    title: 'Post-Production & Content Delivery',
    backgroundTitle: 'POST',
    description:
      'We transform raw footage into polished, professional films through editing, sound design, color grading, and formatting for digital platforms, presentations, reporting, and broadcast use.',
    image: '/img/portfolio/documentary-banner.png',
    features: [
      'Editing & Sound Design',
      'Color Grading',
      'Subtitles & Accessibility',
      'Delivery for Web & Broadcast',
    ],
    cta: {
      label: 'See Post-Production Work',
      href: '/services/post-production',
    },
  },
] as const;

export type ServiceId = typeof services[number]['id'];
