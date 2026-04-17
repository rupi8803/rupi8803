import { j as jsxRuntimeExports, d as MapPin, C as Clock, L as Link } from "./index-j41ECiun.js";
import { B as Badge } from "./badge-COdL3ccf.js";
import { a as AnimatedSection, A as ArrowRight, C as CTAButton } from "./CTAButton-DHNNlx56.js";
import { P as PageHero } from "./PageHero-BgH_GaHd.js";
import { S as SectionHeading } from "./SectionHeading-DtkVSTKL.js";
import { S as Smartphone } from "./smartphone-CjVEc0mO.js";
import { T as TrendingUp } from "./trending-up-BMZ1rDUb.js";
import { G as Globe } from "./globe-BcGvwf_Y.js";
import { T as TriangleAlert } from "./triangle-alert-B3hauBUJ.js";
import { W as Wrench } from "./wrench-CQeHpUvs.js";
import { H as HardDrive } from "./hard-drive-BTahsT5G.js";
import { C as CreditCard } from "./credit-card-CtMGbNqi.js";
import { H as Headphones } from "./headphones-ChuZkNLJ.js";
const painPoints = [
  {
    icon: Globe,
    title: "No Professional Website",
    desc: "Losing jobs to competitors because potential customers can't find you on Google or your site looks outdated on mobile."
  },
  {
    icon: TriangleAlert,
    title: "Manual Quotes & Invoices",
    desc: "Wasting hours on paper-based quotes and chasing unpaid invoices — time better spent on the tools."
  },
  {
    icon: Wrench,
    title: "No Job or Equipment Tracking",
    desc: "No centralised system to track jobs, schedule crews, or know where your equipment is at any time."
  },
  {
    icon: Smartphone,
    title: "Mobile & NBN Connectivity Issues",
    desc: "Struggling with unreliable mobile data on-site or poor NBN speeds at the office holding your business back."
  },
  {
    icon: HardDrive,
    title: "Data Loss Risk",
    desc: "Quotes, contacts, and job photos sitting on one device — if it breaks or gets stolen, it's all gone."
  }
];
const solutions = [
  {
    icon: Globe,
    title: "Website That Gets You Found",
    desc: "Mobile-friendly websites with local SEO so you rank on Google when customers search for your trade in your area.",
    href: "/services/web-design"
  },
  {
    icon: CreditCard,
    title: "Digital Invoicing & Job Management",
    desc: "POS and tablet solutions for on-site quoting, digital signatures, and instant payment collection in the field.",
    href: "/services/pos-solutions"
  },
  {
    icon: HardDrive,
    title: "Reliable Business Backup",
    desc: "Automated cloud backup so your quotes, photos, and customer data are never lost if a device breaks or is stolen.",
    href: "/services/backup-recovery"
  },
  {
    icon: Headphones,
    title: "IT Support When You Need It",
    desc: "Remote and on-site IT support for when tech fails — fast response times because we know every hour of downtime costs you money.",
    href: "/services/it-support"
  }
];
function TradiesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Tradies & Construction",
        title: "Technology Solutions for Tradies — Stay Connected, Get Paid Faster, Win More Jobs",
        subtitle: "You're on the road, on-site, and always busy. We know the challenges — and we build technology that works as hard as you do.",
        ctas: [
          {
            label: "Get Free Consultation",
            href: "/contact",
            variant: "primary"
          },
          { label: "See Pricing", href: "/pricing", variant: "outline" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "tradies.understanding_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                label: "We Get It",
                title: "We Know the Challenges You Face Every Day",
                align: "left",
                className: "mb-6"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Most IT companies are built for office workers — they don't understand what it's like to be on the tools at 6am, driving between jobs, and trying to run a business at the same time. At TechPro Services, we specialise in technology solutions designed specifically for Australian tradespeople." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "Whether you're a solo electrician, a plumbing crew of five, or a building company with 20+ staff — technology should work for you, not against you. We handle the tech so you can focus on the job." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: [
              "Electricians",
              "Plumbers",
              "Builders",
              "HVAC",
              "Landscapers",
              "Painters"
            ].map((trade) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: trade }, trade)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-8 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-6", children: "Why Tradies Choose TechPro" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: [
              {
                icon: Smartphone,
                title: "Mobile-First Solutions",
                desc: "Everything works on your phone or tablet — no desk required."
              },
              {
                icon: MapPin,
                title: "On-Site & Remote Support",
                desc: "We come to you, or fix it remotely — whichever is faster."
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                desc: "Minimal setup disruption — we get you up and running quickly."
              },
              {
                icon: TrendingUp,
                title: "Grows With Your Business",
                desc: "Solutions that scale from solo tradie to large team."
              }
            ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex gap-4",
                "data-ocid": `tradies.highlight.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-4 h-4 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-foreground text-sm mb-0.5", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground leading-relaxed", children: item.desc })
                  ] })
                ]
              },
              item.title
            )) })
          ] }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "tradies.pain_points_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Common Challenges",
              title: "Pain Points Tradies Face Every Day",
              subtitle: "Sound familiar? These are the technology problems we hear from tradies all across Australia.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: painPoints.map((point, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl p-6 border border-border h-full shadow-card",
              "data-ocid": `tradies.pain_point.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(point.icon, { className: "w-5 h-5 text-destructive" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2", children: point.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: point.desc })
              ]
            }
          ) }, point.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "tradies.solutions_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "How We Help",
              title: "Technology Built for Tradies",
              subtitle: "From your first website to full digital transformation — we have the right solution for where you're at.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 mb-10", children: solutions.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: s.href,
              className: "block group h-full",
              "data-ocid": `tradies.solution.${i + 1}`,
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "bg-card rounded-xl p-6 border border-border shadow-card",
              "data-ocid": "tradies.mobile_setup",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1", children: "Mobile Device Setup & Management" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "We set up and manage your phones, tablets, and laptops — with remote wipe capability if a device is lost or stolen. Perfect for teams working across multiple sites." })
                ] })
              ] })
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "tradies.success_story_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-10 shadow-card text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-semibold tracking-wide uppercase mb-6", children: "Success Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-display text-2xl font-bold text-foreground leading-snug mb-6", children: '"Local plumber increased call inquiries by 40% after TechPro built their website and set up a job management app."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto", children: "Before TechPro, this plumbing business had no website and relied on word-of-mouth alone. We built a mobile-friendly site with local SEO, set up a digital job management system, and connected their invoicing to their bank account. Within 90 days, inbound enquiries had grown by 40% and they cut invoice processing time by half." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 max-w-md mx-auto", children: [
            { val: "40%", label: "More enquiries" },
            { val: "50%", label: "Faster invoicing" },
            { val: "90 days", label: "To see results" }
          ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center bg-muted/50 rounded-xl p-4",
              "data-ocid": `tradies.stat.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl text-primary", children: stat.val }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: stat.label })
              ]
            },
            stat.label
          )) })
        ] }) }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16", "data-ocid": "tradies.cta_banner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl mb-4", children: "Ready to Work Smarter, Not Harder?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8", children: "Get a free technology assessment tailored to your trade business — no jargon, no lock-in contracts." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Get Free Consultation",
            href: "/contact",
            variant: "primary",
            showArrow: true,
            "data-ocid": "tradies.bottom_cta_consult"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "See Pricing",
            href: "/pricing",
            variant: "outline",
            "data-ocid": "tradies.bottom_cta_pricing"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  TradiesPage
};
