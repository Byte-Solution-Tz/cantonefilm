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

export interface PortfolioLink {
  label: string;
  url: string;
}

export interface PortfolioItem {
  title: string;
  slug: string;
  category: string;
  coverImage: string;
  image?: string;
  excerpt: string;

  // Media
  vimeoId?: string;
  externalLink?: string;

  // Flags
  featured?: boolean;

  // Long-form content (NEW – optional)
  description?: string;
  goal?: string;
  approach?: string;
  results?: string;
  links?: PortfolioLink[];
}