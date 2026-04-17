import { c as createLucideIcon, j as jsxRuntimeExports, L as Link } from "./index-j41ECiun.js";
import { a as AnimatedSection, A as ArrowRight, C as CTAButton } from "./CTAButton-DHNNlx56.js";
import { P as PageHero } from "./PageHero-BgH_GaHd.js";
import { S as SectionHeading } from "./SectionHeading-DtkVSTKL.js";
import { G as Globe } from "./globe-BcGvwf_Y.js";
import { P as Package } from "./package-CCufspeI.js";
import { C as CreditCard } from "./credit-card-CtMGbNqi.js";
import { T as TrendingUp } from "./trending-up-BMZ1rDUb.js";
import { H as HardDrive } from "./hard-drive-BTahsT5G.js";
import { S as Shield } from "./shield-Cp6MBouf.js";
import { H as Headphones } from "./headphones-ChuZkNLJ.js";
import { W as Wifi } from "./wifi-CcoETHXo.js";
import { C as CircleCheck } from "./circle-check-BvhOiaW2.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode);
const challenges = [
  {
    icon: Globe,
    title: "No Online Presence",
    desc: "Customers expect to find and buy from you online — a physical store alone is no longer enough to grow."
  },
  {
    icon: Package,
    title: "Disconnected Inventory",
    desc: "Managing stock across multiple locations or channels manually leads to overselling, errors, and frustrated customers."
  },
  {
    icon: CreditCard,
    title: "Outdated POS System",
    desc: "A slow checkout experience, cash-only setup, or unreliable hardware costs you sales and frustrates staff during busy periods."
  },
  {
    icon: TrendingUp,
    title: "Website Not Converting",
    desc: "Traffic arrives but leaves without buying — poor UX, slow load times, or an outdated design is costing you revenue."
  },
  {
    icon: HardDrive,
    title: "No Backup When Systems Crash",
    desc: "A single system failure during a peak sales period — like Christmas or EOFY — can cause significant data loss and revenue damage."
  }
];
const services = [
  {
    icon: Globe,
    title: "E-Commerce Website (Shopify or WooCommerce)",
    desc: "High-converting online stores built on the platforms that power Australian retail — with payment gateways, SEO, and a mobile-first design.",
    href: "/services/web-design"
  },
  {
    icon: CreditCard,
    title: "Modern POS with Inventory Sync",
    desc: "Lightspeed, Square, or Shopify POS systems with real-time inventory sync between your physical store and online shop.",
    href: "/services/pos-solutions"
  },
  {
    icon: Shield,
    title: "Managed IT During Peak Periods",
    desc: "Proactive IT monitoring to keep your systems live during Christmas, EOFY, and other peak retail periods when downtime costs the most.",
    href: "/services/managed-it"
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery for Sales Data",
    desc: "Protect your sales history, customer data, and inventory records with automated daily backups and fast recovery.",
    href: "/services/backup-recovery"
  }
];
function RetailPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Retail & E-Commerce",
        title: "Technology Solutions for Retail — Sell More, Work Smarter, Grow Faster",
        subtitle: "From your first online store to managing multiple retail locations — we give Australian retailers the IT and web infrastructure to compete and grow.",
        ctas: [
          {
            label: "Get Free Consultation",
            href: "/contact",
            variant: "primary"
          },
          {
            label: "See POS Solutions",
            href: "/services/pos-solutions",
            variant: "outline"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "retail.challenges_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Retail Challenges",
              title: "The Problems Holding Retailers Back",
              subtitle: "These are the technology challenges we hear from retail businesses every day — and we know exactly how to solve them.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: challenges.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl p-6 border border-border h-full shadow-card",
              "data-ocid": `retail.challenge.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-5 h-5 text-destructive" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: c.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: c.desc })
              ]
            }
          ) }, c.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "retail.solutions_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "How We Help",
              title: "Everything a Modern Retailer Needs",
              subtitle: "Whether you're bricks-and-mortar, online-only, or both — TechPro delivers solutions that scale with your growth.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 mb-6", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: s.href,
              className: "block group h-full",
              "data-ocid": `retail.solution.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-xl p-6 border border-border h-full shadow-card hover-lift", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: s.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-3", children: s.desc }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity", children: [
                    "Learn More ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                  ] })
                ] })
              ] }) })
            }
          ) }, s.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "bg-card rounded-xl p-6 border border-border shadow-card",
                "data-ocid": "retail.support_it",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Headphones, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1", children: "IT Support for POS & Network Issues" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "When your POS freezes during a queue or your network drops, we're on call — remote or on-site, fast." })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "bg-card rounded-xl p-6 border border-border shadow-card",
                "data-ocid": "retail.wifi",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1", children: "Store Networking & Customer WiFi" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Reliable in-store networking for POS, EFTPOS, and staff devices — plus optional guest WiFi to improve customer dwell time." })
                  ] })
                ] })
              }
            )
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", "data-ocid": "retail.story_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            label: "Success Story",
            title: "Boutique Store Doubles Online Sales",
            align: "left",
            className: "mb-6"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "A boutique clothing store came to TechPro with a basic website and no way to sell online. They were losing customers to larger retailers with polished online stores." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "TechPro launched their Shopify e-commerce store and connected it directly to their in-store POS — giving them real-time inventory sync, a seamless checkout, and a mobile-first shopping experience. Within 6 months, online sales had doubled." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 mb-8", children: [
          "Online sales doubled within 6 months",
          "Inventory sync eliminated manual stock updates",
          "Customer accounts increased repeat purchases",
          "Abandoned cart recovery added an extra 12% revenue"
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: item })
        ] }, item)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4", children: [
          { val: "2×", label: "Online sales" },
          { val: "100%", label: "Inventory sync" },
          { val: "6 months", label: "To double sales" }
        ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center bg-card rounded-xl p-4 border border-border",
            "data-ocid": `retail.stat.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl text-primary", children: stat.val }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: stat.label })
            ]
          },
          stat.label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        AnimatedSection,
        {
          direction: "right",
          className: "bg-card rounded-2xl border border-border p-8 shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground", children: "Retail IT Checklist" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "What every modern retailer needs" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
              "Mobile-friendly e-commerce website",
              "Modern POS with contactless payments",
              "Real-time inventory sync across channels",
              "Automated daily data backup",
              "Managed IT for peak trading periods",
              "IT support for POS and network issues",
              "Analytics dashboard connected to Xero",
              "Customer loyalty and email marketing integration"
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: item })
            ] }, item)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CTAButton,
              {
                label: "Get Your Retail IT Assessment",
                href: "/contact",
                variant: "secondary",
                showArrow: true,
                className: "mt-6 w-full justify-center",
                "data-ocid": "retail.checklist_cta"
              }
            )
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16", "data-ocid": "retail.cta_banner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl mb-4", children: "Ready to Grow Your Retail Business?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8", children: "Book a free consultation and discover how the right technology can transform your retail operations — online and in-store." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Get Free Consultation",
            href: "/contact",
            variant: "primary",
            showArrow: true,
            "data-ocid": "retail.bottom_cta_consult"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "See POS Solutions",
            href: "/services/pos-solutions",
            variant: "outline",
            "data-ocid": "retail.bottom_cta_pos"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  RetailPage
};
