import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, C as Clock } from "./index-C_4JYRI7.js";
import { B as Badge } from "./badge-CNP9DWOx.js";
import { a as AnimatedSection, A as ArrowRight, C as CTAButton } from "./CTAButton-Bel-hiN6.js";
import { P as PageHero } from "./PageHero-CMMmYxvV.js";
import { S as SectionHeading } from "./SectionHeading-sSRQvpa5.js";
import { C as CreditCard } from "./credit-card-BUkbnrzd.js";
import { W as Wifi } from "./wifi-C5AHaNX4.js";
import { G as Globe } from "./globe-DDYx5g5-.js";
import { T as TriangleAlert } from "./triangle-alert-Bk_y2MOw.js";
import { L as Link2 } from "./link-2-B6t13Gzm.js";
import { S as Shield } from "./shield-CPnuuYmH.js";
import { H as Headphones } from "./headphones-CuBIodEC.js";
import { C as CircleCheck } from "./circle-check-C_vgD0-t.js";
import { C as ChartColumn } from "./chart-column-D_m62Z9s.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]
];
const Utensils = createLucideIcon("utensils", __iconNode);
const challenges = [
  {
    icon: CreditCard,
    title: "Busy POS at Peak Times",
    desc: "A slow or crashed POS during a dinner rush costs real money and damages your reputation. Reliability is everything in hospitality."
  },
  {
    icon: Wifi,
    title: "Guest WiFi Demands",
    desc: "Guests expect fast, reliable WiFi — and when they don't get it, it shows up in your reviews and affects repeat business."
  },
  {
    icon: Globe,
    title: "Online Booking & Ordering",
    desc: "Customers want to book tables, order online, and pay digitally. Without the right systems, you're losing business to competitors who offer this."
  },
  {
    icon: TriangleAlert,
    title: "Equipment Failures Hit Revenue Immediately",
    desc: "A POS going down, EFTPOS declining, or kitchen display failing during service creates immediate, measurable revenue loss."
  },
  {
    icon: Link2,
    title: "Multiple Integrations Needed",
    desc: "Managing Uber Eats, DoorDash, Xero, and your POS as separate systems creates errors, wasted time, and data inconsistencies."
  }
];
const services = [
  {
    icon: CreditCard,
    title: "Hospitality POS System",
    desc: "Table management, split bills, kitchen display systems, and Lightspeed Restaurant setup — built for the pace of hospitality.",
    href: "/services/pos-solutions"
  },
  {
    icon: Globe,
    title: "Website with Online Menu & Booking",
    desc: "Beautiful, mobile-first websites with online menus, photo galleries, and booking widget integration to drive covers.",
    href: "/services/web-design"
  },
  {
    icon: Shield,
    title: "Managed IT During Service Hours",
    desc: "Proactive monitoring and fast-response support to keep your systems live during service — because downtime during a dinner rush is not acceptable.",
    href: "/services/managed-it"
  },
  {
    icon: Headphones,
    title: "On-Call IT Support",
    desc: "When something goes wrong during service, we respond fast — remote resolution or on-site dispatch for critical failures.",
    href: "/services/it-support"
  }
];
const integrations = [
  "Uber Eats",
  "DoorDash",
  "Menulog",
  "Xero",
  "MYOB",
  "ResDiary",
  "OpenTable",
  "Deputy (Rostering)"
];
function HospitalityPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Hospitality & Tourism",
        title: "Technology Solutions for Hospitality — Fast Service, Happy Guests, Smooth Operations",
        subtitle: "Cafés, restaurants, hotels, and venues trust TechPro for the integrated systems, reliable IT support, and fast response that keeps guests happy and revenue flowing.",
        ctas: [
          { label: "Get POS Demo", href: "/contact", variant: "primary" },
          { label: "Book Consultation", href: "/contact", variant: "outline" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "hospitality.challenges_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Hospitality Challenges",
              title: "Technology Problems That Cost Hospitality Businesses Every Day",
              subtitle: "We understand the unique pressures of hospitality — every system failure during peak service has a direct impact on revenue and reputation.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: challenges.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl p-6 border border-border h-full shadow-card",
              "data-ocid": `hospitality.challenge.${i + 1}`,
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
        "data-ocid": "hospitality.solutions_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "How We Help",
              title: "Everything the Modern Venue Needs",
              subtitle: "Integrated solutions designed for the pace, pressure, and complexity of hospitality operations.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 mb-6", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: s.href,
              className: "block group h-full",
              "data-ocid": `hospitality.solution.${i + 1}`,
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
              "data-ocid": "hospitality.wifi_solution",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1", children: "Guest WiFi Setup & Management" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "High-speed guest WiFi networks — separated from your business network — that keep your customers connected without compromising your operational security. Managed and monitored by TechPro." })
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
        className: "py-20 bg-background",
        "data-ocid": "hospitality.integrations_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                label: "Integrations",
                title: "Connect All Your Systems in One Place",
                align: "left",
                className: "mb-6"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Stop juggling disconnected platforms. TechPro integrates your POS with delivery platforms, accounting software, and rostering tools — so orders flow automatically, reconciliation is easy, and your staff aren't double-handling data." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "We work with the platforms your hospitality business already uses and build the connections that save you hours of admin every week." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: integrations.map((integration) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "text-xs",
                children: integration
              },
              integration
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            AnimatedSection,
            {
              direction: "right",
              className: "bg-card rounded-2xl border border-border p-8 shadow-card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Utensils, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground", children: "Hospitality IT Checklist" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
                  "Modern POS with table management",
                  "Contactless payments and split bills",
                  "Kitchen display system (KDS)",
                  "Online ordering and delivery integration",
                  "Guest WiFi separated from POS network",
                  "Website with online menu and booking",
                  "Xero / MYOB accounting integration",
                  "Managed IT with fast on-site response"
                ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: item })
                ] }, item)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CTAButton,
                  {
                    label: "Get a Free Venue Assessment",
                    href: "/contact",
                    variant: "secondary",
                    showArrow: true,
                    className: "mt-6 w-full justify-center",
                    "data-ocid": "hospitality.checklist_cta"
                  }
                )
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "hospitality.success_story_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-10 shadow-card text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-semibold tracking-wide uppercase mb-6", children: "Success Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-display text-2xl font-bold text-foreground leading-snug mb-6", children: '"Local café cut transaction time by 30% after upgrading to TechPro POS system with contactless payments and kitchen display."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto", children: "A busy local café was running an outdated POS with no kitchen display — orders were handwritten, queues were long, and peak hours were chaotic. TechPro replaced their system with a cloud-based POS, integrated kitchen display, and contactless payment terminals. Transaction time dropped by 30% and table turnover improved significantly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 max-w-md mx-auto", children: [
            { val: "30%", label: "Faster transactions" },
            { val: "Zero", label: "Manual order errors" },
            { val: "1 day", label: "To go live" }
          ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center bg-muted/50 rounded-xl p-4",
              "data-ocid": `hospitality.stat.${i + 1}`,
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "hospitality.pos_features_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "POS Features",
              title: "A POS Built for Hospitality Speed",
              subtitle: "Every feature of our hospitality POS solution is designed for fast service, accurate orders, and seamless operations.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: [
            {
              icon: CreditCard,
              title: "Table Management",
              desc: "Visual floor plans, table status, covers tracking, and section management — all from one screen."
            },
            {
              icon: ChartColumn,
              title: "Real-Time Reporting",
              desc: "Sales, voids, covers, and category performance updated in real time — accessible from your phone."
            },
            {
              icon: Clock,
              title: "Fast Peak-Period Performance",
              desc: "Engineered for reliability during your busiest service periods — no crashes when it matters most."
            }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 100, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex gap-4 bg-card rounded-xl p-5 border border-border shadow-card h-full",
              "data-ocid": `hospitality.pos_feature.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
                ] })
              ]
            }
          ) }, item.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16", "data-ocid": "hospitality.cta_banner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl mb-4", children: "Ready to Upgrade Your Venue Technology?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8", children: "Book a free POS demo or consultation — we'll design the right technology stack for your hospitality business." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Get POS Demo",
            href: "/contact",
            variant: "primary",
            showArrow: true,
            "data-ocid": "hospitality.bottom_cta_demo"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Book Consultation",
            href: "/contact",
            variant: "outline",
            "data-ocid": "hospitality.bottom_cta_consult"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  HospitalityPage
};
