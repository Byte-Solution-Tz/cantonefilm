// /data/services.ts

export const services = [
  {
    id: 'film-video-production',
    title: 'Film, TV & Video Production',
    backgroundTitle: 'FILM & VIDEO',
    description:
      'We produce documentaries, corporate films, commercials, social media content, and narrative films using professional crews and cinematic techniques to deliver visually powerful stories.',
    image: '/img/portfolio/documentary-banner.png',
    features: [
      'Documentary & Corporate Films',
      'Commercials & Social Media Content',
      'Narrative & TV Productions',
      'Professional Crews & Equipment',
    ],
    cta: {
      label: 'View Film Projects',
      href: '/services/film-video',
    },
  },

  {
    id: 'story-creative-development',
    title: 'Story & Creative Development',
    backgroundTitle: 'STORY',
    description:
      'Our team supports research, concept creation, scriptwriting, storyboarding, and production planning to ensure each project begins with a clear and compelling narrative.',
    image: '/img/portfolio/left-documentary-banner.png',
    features: [
      'Research & Concept Development',
      'Scriptwriting',
      'Storyboarding',
      'Production Planning',
    ],
    cta: {
      label: 'Explore Our Process',
      href: '/services/creative-development',
    },
  },

  {
    id: 'post-production',
    title: 'Post-Production & Visual Enhancement',
    backgroundTitle: 'POST',
    description:
      'We provide professional editing, sound design, color grading, subtitles, and motion graphics to deliver polished content ready for broadcast, events, and digital platforms.',
    image: '/img/portfolio/documentary-banner.png',
    features: [
      'Editing & Sound Design',
      'Color Grading',
      'Subtitles & Accessibility',
      'Motion Graphics',
    ],
    cta: {
      label: 'See Post-Production Work',
      href: '/services/post-production',
    },
  },

  {
    id: 'photography-multimedia',
    title: 'Photography & Multimedia',
    backgroundTitle: 'PHOTOGRAPHY',
    description:
      'We capture high-quality photography and multimedia assets for reports, campaigns, and digital communication, ensuring visual consistency and storytelling impact.',
    image: '/img/portfolio/left-documentary-banner.png',
    features: [
      'Professional Photography',
      'Campaign & Report Assets',
      'Digital & Print Use',
      'Visual Consistency',
    ],
    cta: {
      label: 'View Photography',
      href: '/services/photography',
    },
  },

  {
    id: 'event-community-coverage',
    title: 'Event & Community Coverage',
    backgroundTitle: 'EVENTS',
    description:
      'We provide professional coverage of conferences, community programs, launches, and public events using multi-camera setups and high-quality audio.',
    image: '/img/portfolio/documentary-banner.png',
    features: [
      'Conferences & Launches',
      'Community Programs',
      'Multi-Camera Coverage',
      'Professional Audio Capture',
    ],
    cta: {
      label: 'View Event Coverage',
      href: '/services/events',
    },
  },
] as const;

export type ServiceId = typeof services[number]['id'];
