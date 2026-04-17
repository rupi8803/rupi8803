export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  href: string;
}

export interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    abn: string;
    businessHours: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  services: Service[];
  industries: Industry[];
}
