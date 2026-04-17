import { j as jsxRuntimeExports, L as Link } from "./index-C_4JYRI7.js";
import { B as Badge } from "./badge-CNP9DWOx.js";
import { a as AnimatedSection, A as ArrowRight, C as CTAButton } from "./CTAButton-Bel-hiN6.js";
import { P as PageHero } from "./PageHero-CMMmYxvV.js";
import { S as SectionHeading } from "./SectionHeading-sSRQvpa5.js";
import { G as Globe } from "./globe-DDYx5g5-.js";
import { S as ShoppingCart } from "./shopping-cart-sjjwRQXL.js";
import { S as Smartphone } from "./smartphone-L8e-bTBh.js";
import { S as Star } from "./star-ClAdH3UP.js";
import { C as CircleCheck } from "./circle-check-C_vgD0-t.js";
import { S as Search } from "./search-CIAomGtu.js";
import { T as TrendingUp } from "./trending-up-Bk1M9kxI.js";
const platforms = [
  {
    name: "WordPress",
    icon: Globe,
    badge: "Most Popular",
    tagline: "Flexible, SEO-optimized, widely supported",
    desc: "The world's most powerful CMS powering 40% of all websites. Ideal for content-rich sites, blogs, and service businesses.",
    bestFor: ["Service businesses", "Blogs & content sites", "Local SEO focus"]
  },
  {
    name: "Shopify",
    icon: ShoppingCart,
    badge: "Best for E-commerce",
    tagline: "E-commerce powerhouse, easy product management",
    desc: "Australia's leading e-commerce platform. Built for product-based businesses ready to sell online at scale.",
    bestFor: ["Online stores", "Product catalogues", "Omnichannel retail"]
  },
  {
    name: "Wix",
    icon: Smartphone,
    badge: "",
    tagline: "Beginner-friendly, quick launch",
    desc: "Drag-and-drop simplicity with professional results. Great for small businesses wanting to launch quickly.",
    bestFor: ["Quick launches", "Small service sites", "Budget-conscious"]
  },
  {
    name: "Squarespace",
    icon: Star,
    badge: "",
    tagline: "Design-focused, great for portfolios",
    desc: "Award-winning design templates that look stunning out of the box. Perfect for creatives and portfolio sites.",
    bestFor: ["Portfolios & creatives", "Restaurants & venues", "Brand-first"]
  }
];
const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We learn your business goals, target audience, competitors, and brand vision through a focused consultation.",
    duration: "1–2 days"
  },
  {
    step: "02",
    title: "Design",
    desc: "Our designers create wireframes and high-fidelity mockups tailored to your brand — you approve before we build.",
    duration: "3–5 days"
  },
  {
    step: "03",
    title: "Development",
    desc: "We build the full site with all pages, content, integrations, and functionality to your approved specifications.",
    duration: "1–3 weeks"
  },
  {
    step: "04",
    title: "Testing",
    desc: "Thorough QA across all major browsers, devices, and screen sizes. Performance and accessibility checked.",
    duration: "2–3 days"
  },
  {
    step: "05",
    title: "Launch",
    desc: "We go live, hand over full ownership, and provide training so you can manage your site with confidence.",
    duration: "1 day"
  }
];
const featuresIncluded = [
  "Fully responsive design (mobile-first)",
  "SEO basics & meta setup",
  "Contact forms & lead capture",
  "Image optimisation",
  "SSL security certificate",
  "Google Analytics setup",
  "Cross-browser compatibility",
  "Social media integration",
  "Speed performance tuning",
  "Content management training"
];
const caseStudies = [
  {
    client: "Webb Electrical Services",
    industry: "Tradies",
    platform: "WordPress",
    challenge: "Local electrician had no web presence and was losing leads to competitors found online.",
    result: "Mobile-first WordPress site with online quoting form. Ranked page 1 for local search terms within 8 weeks.",
    outcomes: [
      "180% more enquiries",
      "Page 1 Google ranking",
      "Online quoting"
    ],
    tag: "Tradie Website"
  },
  {
    client: "Bloom Boutique Retail",
    industry: "Retail",
    platform: "Shopify",
    challenge: "Established boutique needed an online store synced with their in-store inventory.",
    result: "Full Shopify e-commerce store integrated with POS. Launched within 3 weeks, first sale within 48 hours.",
    outcomes: ["Sales up 45%", "Shopify + POS sync", "3-week build"],
    tag: "Retail E-commerce"
  }
];
const highlights = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Over 60% of Australian web traffic is mobile. Every site we build looks and performs perfectly on all screen sizes."
  },
  {
    icon: Search,
    title: "SEO Ready from Day One",
    desc: "Clean code, fast load times, structured data, and proper meta setup give your site the best start in search rankings."
  },
  {
    icon: TrendingUp,
    title: "Built to Convert",
    desc: "Strategic calls-to-action, trust signals, and lead capture forms designed to turn visitors into paying customers."
  }
];
function WebDesignPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Web Design & Development",
        title: "Beautiful Websites That Drive Results",
        subtitle: "Professional websites for Australian businesses that attract customers, generate leads, and build brand credibility — on the platforms you know and trust.",
        ctas: [
          { label: "Book Consultation", href: "/contact", variant: "primary" },
          { label: "Get a Quote", href: "/contact", variant: "outline" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-background",
        "data-ocid": "web_design.overview_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Your website is your most powerful sales tool — and often the first impression your business makes. We design and develop professional websites for Australian businesses across every major platform, combining stunning design with solid technical foundations to help you attract customers, generate leads, and build lasting brand credibility." }) }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "web_design.platforms_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Platforms We Build On",
              title: "The Right Platform for Your Business",
              subtitle: "We're platform-agnostic — we recommend what's right for your goals, budget, and technical needs.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", children: platforms.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl p-6 border border-border h-full shadow-card relative flex flex-col",
              "data-ocid": `web_design.platform.${i + 1}`,
              children: [
                p.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-4 right-4 bg-accent/20 text-accent border-0 text-xs font-medium", children: p.badge }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-1", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-accent font-medium mb-3", children: p.tagline }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4 flex-1", children: p.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-2 uppercase tracking-wide", children: "Best for" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: p.bestFor.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-center gap-1.5 text-xs text-muted-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 text-primary shrink-0" }),
                        item
                      ]
                    },
                    item
                  )) })
                ] })
              ]
            }
          ) }, p.name)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "web_design.process_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Our Process",
              title: "From Brief to Launch in 5 Steps",
              subtitle: "A structured, transparent process that keeps you informed at every stage — no surprises.",
              className: "mb-14"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-6", children: processSteps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 100, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center relative",
                "data-ocid": `web_design.process_step.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 relative z-10 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary text-lg", children: step.step }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: step.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-2", children: step.desc }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "text-xs text-muted-foreground",
                      children: step.duration
                    }
                  )
                ]
              }
            ) }, step.step)) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "web_design.features_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                label: "What's Included",
                title: "Every Website Comes with the Essentials",
                align: "left",
                className: "mb-8"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8", children: featuresIncluded.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: f })
            ] }, f)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl p-5 border border-border flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Websites starting from AUD $1,200" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "One-time cost, you own everything" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/pricing",
                  className: "text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 shrink-0 transition-colors",
                  "data-ocid": "web_design.pricing_link",
                  children: [
                    "See full pricing ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: highlights.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex gap-4 bg-card rounded-xl p-5 border border-border",
              "data-ocid": `web_design.feature_highlight.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
                ] })
              ]
            },
            item.title
          )) }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "web_design.case_studies_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Case Studies",
              title: "Real Websites. Real Results.",
              subtitle: "See how we've helped Australian businesses build their online presence.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: caseStudies.map((cs, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 100, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-2xl border border-border p-7 h-full flex flex-col shadow-card",
              "data-ocid": `web_design.case_study.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-3 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs mb-2", children: cs.tag }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg", children: cs.client }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                    cs.industry,
                    " · ",
                    cs.platform
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-5 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1", children: "Challenge" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: cs.challenge })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1", children: "Result" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: cs.result })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-4 border-t border-border", children: cs.outcomes.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                      o
                    ]
                  },
                  o
                )) })
              ]
            }
          ) }, cs.client)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/portfolio",
              className: "text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 justify-center transition-colors",
              "data-ocid": "web_design.portfolio_link",
              children: [
                "View all case studies ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16", "data-ocid": "web_design.cta_banner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl mb-4", children: "Ready to Build Your Dream Website?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8", children: "Get a free quote within 24 hours. No obligation, no pressure — just expert advice on the best solution for your business." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Book Consultation",
            href: "/contact",
            variant: "primary",
            showArrow: true,
            "data-ocid": "web_design.bottom_cta_primary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Get a Quote",
            href: "/contact",
            variant: "outline",
            "data-ocid": "web_design.bottom_cta_secondary"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  WebDesignPage
};
