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