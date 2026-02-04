import type { PortfolioItem } from '@/types/interface';

export const portfolio: PortfolioItem[] = [
  {
    title: 'Asia–Africa BlueTech Superhighway (AABS)',
    slug: 'aabs-bluetech-superhighway',
    category: 'Documentary',
    coverImage: '/img/portfolio/aabs-cover.jpg',
    excerpt:
      'A multi-country documentary video series highlighting how AABS is strengthening small-scale fisheries and aquaculture systems across Africa and Asia.',
    featured: true,

    description:
      'This project documents the early progress of the Asia–Africa BlueTech Superhighway (AABS) across five countries in Africa and Asia, led by WorldFish. Through a series of country-focused videos, the project highlights how small-scale fishing and aquaculture communities are being supported through improved data systems, climate-smart technologies, value addition, and inclusive fisheries management.',

    goal:
      'To showcase how AABS is strengthening aquatic food systems across diverse contexts by improving productivity, resilience, and gender-inclusive participation within small-scale fisheries and aquaculture.',

    approach:
      'We adopted a documentary-style approach, working closely with WorldFish and in-country partners to capture real activities, voices, and experiences on the ground. Interviews, field footage, and contextual visuals were combined to translate complex research and development initiatives into clear, accessible stories.',

    results:
      'The project delivered a coordinated series of five country-level videos that now serve as communication and knowledge-sharing tools for partners, donors, and wider audiences.',

    links: [
      { label: 'Bangladesh', url: '#' },
      { label: 'Nigeria', url: '#' },
      { label: 'Tanzania', url: '#' },
      { label: 'Kenya', url: '#' },
      { label: 'Mozambique', url: '#' },
    ],
  },

  {
    title: 'Tenda Teachers',
    slug: 'tenda-teachers',
    category: 'Impact Stories',
    coverImage: '/img/portfolio/tenda-teachers-cover.jpg',
    excerpt:
      'A documentary highlighting how the Tenda Teachers program is strengthening teaching practices in Tanzanian primary schools.',
    vimeoId: 'XXXXXXXXX',

    description:
      'This project was commissioned by Project Zawadi to document the Tenda Teachers program, which supports primary school teachers in Tanzania to adopt improved teaching techniques through demonstration videos and targeted training.',

    goal:
      'To showcase how the Tenda Teachers program strengthens teaching practices and improves learning outcomes for pupils in primary schools.',

    approach:
      'Using a documentary-style approach, we captured classroom demonstrations, training sessions, and teacher perspectives. The focus was on real classroom experiences to clearly communicate the program’s methods and impact.',

    results:
      'The final video serves as a concise communication and advocacy tool for partners and donors supporting education initiatives in Tanzania.',

    links: [
      {
        label: 'Watch Video',
        url: '#',
      },
    ],
  },
];
