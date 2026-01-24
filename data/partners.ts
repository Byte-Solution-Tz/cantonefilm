export interface Partner {
  name: string;
  logo: string;  
  url: string;
}

export const partners: Partner[] = [
  {
    name: "UNESCO",
    logo: "/images/partners/unesco.svg",
    url: "https://unesco.org"
  },
  {
    name: "UNICEF",
    logo: "/images/partners/unicef.svg",
    url: "https://unicef.org"
  },
  {
    name: "Red Cross",
    logo: "/images/partners/redcross.svg",
    url: "https://redcross.org"
  },
  {
    name: "World Bank",
    logo: "/images/partners/worldbank.svg",
    url: "https://worldbank.org"
  },
  {
    name: "WHO",
    logo: "/images/partners/who.svg",
    url: "https://who.int"
  },
  {
    name: "Save the Children",
    logo: "/images/partners/savechildren.svg",
    url: "https://savethechildren.org"
  }
];