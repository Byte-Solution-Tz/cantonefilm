export type Service = {
  title: string;
  backgroundTitle: string;
  description: string;
  image: string;
  features: string[];
  cta: {
    label: string;
    href: string;
  };
};

export type ServiceSplitProps = {
  service: Service;
  index: number;
  reverse?: boolean;
};

export type PortfolioCategory =
  | 'Documentary'
  | 'Cooperate Videos'
  | 'Impact Stories'
  | 'Fictional Films';

export type PortfolioItem = {
  title: string;
  slug: string;
  image: string;

  category: PortfolioCategory;

  coverImage: string;

  excerpt: string;

  /** Vimeo video ID (for modal + hero video) */
  vimeoId?: string;

  /** Optional external campaign link */
  externalLink?: string;

  /** Marks item as featured */
  featured?: boolean;
};
