import { j as jsxRuntimeExports, a as cn, L as Link, B as Button } from "./index-j41ECiun.js";
import { B as Badge } from "./badge-COdL3ccf.js";
import { C as Card, a as CardContent } from "./card-CWAgV5D5.js";
import { a as AnimatedSection, A as ArrowRight, C as CTAButton } from "./CTAButton-DHNNlx56.js";
import { P as PageHero } from "./PageHero-BgH_GaHd.js";
import { S as SectionHeading } from "./SectionHeading-DtkVSTKL.js";
import { H as HardDrive } from "./hard-drive-BTahsT5G.js";
import { C as CreditCard } from "./credit-card-CtMGbNqi.js";
import { S as Shield } from "./shield-Cp6MBouf.js";
import { H as Headphones } from "./headphones-ChuZkNLJ.js";
import { W as Wrench } from "./wrench-CQeHpUvs.js";
import { G as Globe } from "./globe-BcGvwf_Y.js";
import { m as motion } from "./proxy-D_U5xTY3.js";
import { C as CircleCheck } from "./circle-check-BvhOiaW2.js";
import { C as CircleHelp } from "./circle-help-BMi9hrrU.js";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
const iconMap = {
  Globe,
  Wrench,
  Headphones,
  Shield,
  CreditCard,
  HardDrive
};
const servicesData = [
  {
    slug: "web-design",
    title: "Web Design & Development",
    icon: "Globe",
    badge: "Most Popular",
    description: "We build high-performing, visually striking websites on the platforms your business needs — WordPress, Shopify, Wix, and Squarespace. Every site is mobile-first, SEO-ready, and designed to convert visitors into paying customers. Whether you're starting fresh or need a full redesign, we handle everything from strategy through to launch.",
    features: [
      "Custom responsive design",
      "WordPress, Shopify, Wix & Squarespace",
      "SEO foundation & speed optimisation",
      "E-commerce & booking integration"
    ],
    href: "/services/web-design"
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    icon: "Wrench",
    description: "Your website needs ongoing care to stay secure, fast, and effective. Our maintenance plans cover regular plugin and CMS updates, security patches, performance monitoring, and monthly backups — so you never have to worry. We proactively catch issues before they affect your visitors or your ranking.",
    features: [
      "Regular CMS & plugin updates",
      "Security patches & malware scans",
      "Performance & uptime monitoring",
      "Monthly backups & reporting"
    ],
    href: "/services/website-maintenance"
  },
  {
    slug: "it-support",
    title: "IT Support for Small Business",
    icon: "Headphones",
    description: "Fast, friendly IT support for Australian small businesses — available remotely or on-site. We resolve computer issues, network problems, email setup, and device configuration so your team stays productive. No jargon, no long wait times, just practical help from experienced technicians who understand your business.",
    features: [
      "Remote & on-site support",
      "Help desk (business hours)",
      "Device setup & troubleshooting",
      "Network & email configuration"
    ],
    href: "/services/it-support"
  },
  {
    slug: "managed-it",
    title: "Managed IT Services",
    icon: "Shield",
    description: "Outsource your entire IT environment to TechPro for a predictable monthly fee. We proactively monitor, maintain, and manage your infrastructure — servers, workstations, cloud services, and security — so issues are prevented before they cause disruption. You get enterprise-grade IT without the cost of an in-house team.",
    features: [
      "24/7 infrastructure monitoring",
      "Proactive maintenance & patching",
      "Cybersecurity & compliance",
      "Dedicated account manager"
    ],
    href: "/services/managed-it"
  },
  {
    slug: "pos-solutions",
    title: "POS Solutions",
    icon: "CreditCard",
    description: "We design, deploy, and support point-of-sale systems tailored to retail, hospitality, and service businesses. From single-terminal setups to multi-venue operations, we integrate your POS with inventory, accounting, and reporting tools to streamline operations and reduce admin overhead.",
    features: [
      "POS setup & configuration",
      "Inventory & accounting integration",
      "Staff training & ongoing support",
      "Multi-venue & omnichannel ready"
    ],
    href: "/services/pos-solutions"
  },
  {
    slug: "backup-recovery",
    title: "Backup & Recovery",
    icon: "HardDrive",
    description: "Data loss can be catastrophic for any business. Our backup and disaster recovery solutions ensure your critical data is automatically backed up, encrypted, and recoverable — whether it's accidental deletion, ransomware, or hardware failure. We test recovery processes regularly so you know your safety net actually works.",
    features: [
      "Automated daily backups",
      "Encrypted off-site storage",
      "Ransomware & disaster recovery",
      "Regular recovery testing"
    ],
    href: "/services/backup-recovery"
  }
];
const comparisonData = [
  {
    need: "Launch or redesign a website",
    service: "Web Design & Development",
    idealFor: "New businesses, rebrands, e-commerce"
  },
  {
    need: "Keep an existing website healthy",
    service: "Website Maintenance",
    idealFor: "Any business with a live website"
  },
  {
    need: "Fix IT problems as they occur",
    service: "IT Support (Small Business)",
    idealFor: "Small teams under 20 staff"
  },
  {
    need: "Fully managed IT with no surprises",
    service: "Managed IT Services",
    idealFor: "Growing businesses, 5–200 staff"
  },
  {
    need: "Accept payments in-store or at venue",
    service: "POS Solutions",
    idealFor: "Retail, hospitality, service businesses"
  },
  {
    need: "Protect business data & ensure recovery",
    service: "Backup & Recovery",
    idealFor: "All businesses with critical data"
  }
];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Our Services",
        title: "Complete IT and Web Solutions for Your Business",
        subtitle: "TechPro provides end-to-end technology solutions. Whether you need a new website or full IT infrastructure management, we've got you covered.",
        ctas: [
          {
            label: "Get Free Consultation",
            href: "/contact",
            variant: "primary"
          },
          { label: "View Pricing", href: "/pricing", variant: "outline" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "services.list_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "What We Offer",
              title: "Six Specialist Services, One Trusted Partner",
              subtitle: "Choose one service or combine them for a complete technology partnership tailored to your business.",
              className: "mb-14"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: servicesData.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.4, delay: i * 0.08 },
                "data-ocid": `services.card.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border bg-card hover:shadow-md transition-shadow duration-300 group flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-7 flex flex-col flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
                    service.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent/15 text-accent border-accent/30 text-xs font-semibold shrink-0", children: service.badge })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg leading-snug mb-3", children: service.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-5 flex-1", children: service.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 mb-6", children: service.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-center gap-2 text-sm text-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary shrink-0" }),
                        feature
                      ]
                    },
                    feature
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: service.href,
                      "data-ocid": `services.learn_more.${i + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          variant: "outline",
                          className: "w-full group/btn border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors",
                          children: [
                            "Learn More",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform" })
                          ]
                        }
                      )
                    }
                  )
                ] }) })
              },
              service.slug
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-muted/40 border-y border-border",
        "data-ocid": "services.not_sure_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center gap-8 bg-card rounded-2xl border border-border p-8 md:p-10 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "w-8 h-8 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center md:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-2xl md:text-3xl mb-2", children: "Not Sure Where to Start?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base leading-relaxed max-w-xl", children: "Our Business IT Solutions page is designed for exactly this situation. Browse a combined overview of our services, see how they work together, and let us recommend what fits your business." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CTAButton,
            {
              label: "Explore Business IT Solutions",
              href: "/business-it-solutions",
              variant: "secondary",
              showArrow: true,
              "data-ocid": "services.business_it_cta"
            }
          ) })
        ] }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "services.comparison_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Quick Reference",
              title: "Which Service Fits Your Business Need?",
              subtitle: "Use this table to quickly match your challenge with the right service.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-muted/50 hover:bg-muted/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-display font-semibold text-foreground w-2/5 py-4 pl-6", children: "Business Need" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-display font-semibold text-foreground w-1/3 py-4", children: "Recommended Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-display font-semibold text-foreground py-4 pr-6", children: "Ideal For" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: comparisonData.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                className: "border-border hover:bg-muted/20 transition-colors",
                "data-ocid": `services.comparison.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-4 pl-6 text-foreground font-medium text-sm", children: row.need }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "secondary",
                      className: "bg-primary/10 text-primary border-0 font-medium text-xs",
                      children: row.service
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-4 pr-6 text-muted-foreground text-sm", children: row.idealFor })
                ]
              },
              row.service
            )) })
          ] }) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20", "data-ocid": "services.cta_banner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold uppercase tracking-wide mb-5", children: "Free Consultation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl md:text-4xl leading-tight mb-4", children: "Ready to Transform Your Business Technology?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg leading-relaxed mb-8", children: "Book a free 30-minute consultation and we'll recommend the right solution — no obligation, no tech jargon, just honest advice tailored to your business." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Book Free Consultation",
            href: "/contact",
            variant: "primary",
            showArrow: true,
            "data-ocid": "services.bottom_cta_primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "View Pricing Plans",
            href: "/pricing",
            variant: "outline",
            "data-ocid": "services.bottom_cta_secondary"
          }
        )
      ] })
    ] }) }) }) })
  ] });
}
export {
  ServicesPage
};
