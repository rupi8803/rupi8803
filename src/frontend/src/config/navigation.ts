import type { NavItem } from "../types";

export const navigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Design & Development", href: "/services/web-design" },
      { label: "Website Maintenance", href: "/services/website-maintenance" },
      { label: "IT Support", href: "/services/it-support" },
      { label: "Managed IT Services", href: "/services/managed-it" },
      { label: "POS Solutions", href: "/services/pos-solutions" },
      { label: "Backup & Recovery", href: "/services/backup-recovery" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Tradies & Construction", href: "/industries/tradies" },
      { label: "Retail & E-commerce", href: "/industries/retail" },
      { label: "Medical & Healthcare", href: "/industries/medical" },
      { label: "Hospitality & Tourism", href: "/industries/hospitality" },
    ],
  },
  { label: "Business IT", href: "/business-it-solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Web Design & Development", href: "/services/web-design" },
      { label: "Website Maintenance", href: "/services/website-maintenance" },
      { label: "IT Support", href: "/services/it-support" },
      { label: "Managed IT Services", href: "/services/managed-it" },
      { label: "POS Solutions", href: "/services/pos-solutions" },
      { label: "Backup & Recovery", href: "/services/backup-recovery" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Tradies & Construction", href: "/industries/tradies" },
      { label: "Retail & E-commerce", href: "/industries/retail" },
      { label: "Medical & Healthcare", href: "/industries/medical" },
      { label: "Hospitality & Tourism", href: "/industries/hospitality" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog & Resources", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];
