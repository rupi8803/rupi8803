import { r as reactExports, j as jsxRuntimeExports, B as Button, L as Link } from "./index-C_4JYRI7.js";
import { B as Badge } from "./badge-CNP9DWOx.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle } from "./dialog-DFIjvE-M.js";
import { S as Separator } from "./separator-4ycmBCmN.js";
import { a as AnimatedSection, C as CTAButton, A as ArrowRight } from "./CTAButton-Bel-hiN6.js";
import { P as PageHero } from "./PageHero-CMMmYxvV.js";
import { S as SectionHeading } from "./SectionHeading-sSRQvpa5.js";
import { G as Globe } from "./globe-DDYx5g5-.js";
import { S as Shield } from "./shield-CPnuuYmH.js";
import { C as CreditCard } from "./credit-card-BUkbnrzd.js";
import { H as HardDrive } from "./hard-drive-DGnWFQfh.js";
import { W as Wrench } from "./wrench-D2XoZoHd.js";
import { H as Headphones } from "./headphones-CuBIodEC.js";
import { B as Building2 } from "./building-2-BZb6Yt0L.js";
import "./index-BnXQfpIr.js";
import "./index-BwSjJFUb.js";
import "./index-Bl4w-WfN.js";
const FILTER_TABS = [
  "All",
  "Web Design",
  "IT Support",
  "Managed IT",
  "POS Solutions"
];
const CASE_STUDIES = [
  {
    id: 1,
    clientType: "Local Plumber",
    headline: "Tradie website drives +40% increase in calls",
    services: ["Web Design", "WordPress"],
    filter: "Web Design",
    metrics: [
      { label: "More Calls", value: "+40%" },
      { label: "Time to Launch", value: "2 wks" },
      { label: "Mobile Traffic", value: "78%" }
    ],
    gradient: "linear-gradient(135deg, oklch(0.48 0.18 240) 0%, oklch(0.60 0.14 200) 100%)",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-10 h-10 text-white" }),
    fullDescription: "A local plumbing business in Melbourne was relying entirely on word-of-mouth and an outdated website from 2015. Potential customers couldn't find them on Google, and the site wasn't mobile-friendly.",
    challenge: "The business had no digital presence worth speaking of. Their existing site scored 32/100 on Google PageSpeed and had zero local SEO optimisation.",
    solution: "We built a modern, mobile-first WordPress website with local SEO setup, Google Business Profile integration, a clear call-to-action on every page, and a click-to-call button. The site was live in under two weeks.",
    results: [
      "+40% increase in inbound calls within 60 days",
      "First-page Google ranking for 'plumber Melbourne'",
      "78% of traffic now from mobile devices",
      "Online quote request form generating 15+ leads/month"
    ]
  },
  {
    id: 2,
    clientType: "Boutique Retailer",
    headline: "Shopify store doubles online sales in 90 days",
    services: ["Web Design", "Shopify", "E-commerce"],
    filter: "Web Design",
    metrics: [
      { label: "Sales Growth", value: "2×" },
      { label: "Avg Order Value", value: "+28%" },
      { label: "Cart Recovery", value: "22%" }
    ],
    gradient: "linear-gradient(135deg, oklch(0.52 0.22 310) 0%, oklch(0.62 0.18 285) 100%)",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-10 h-10 text-white" }),
    fullDescription: "A boutique clothing store in Sydney had been selling exclusively in-store. With foot traffic declining, the owner wanted to expand online but wasn't sure where to start.",
    challenge: "No existing e-commerce infrastructure, limited digital marketing experience, and a need to maintain brand aesthetics online.",
    solution: "We designed and launched a fully branded Shopify store, integrated with their existing POS system for real-time inventory sync. We added abandoned cart recovery, product recommendations, and Instagram Shop integration.",
    results: [
      "Online revenue doubled within 90 days of launch",
      "Average order value increased by 28%",
      "22% cart abandonment recovery rate",
      "Instagram Shopping driving 35% of new customer acquisitions"
    ]
  },
  {
    id: 3,
    clientType: "GP Medical Practice",
    headline: "Managed IT cuts IT incidents by 70% at busy clinic",
    services: ["Managed IT", "Security", "Compliance"],
    filter: "Managed IT",
    metrics: [
      { label: "Fewer Incidents", value: "−70%" },
      { label: "Response Time", value: "<1 hr" },
      { label: "Uptime", value: "99.9%" }
    ],
    gradient: "linear-gradient(135deg, oklch(0.50 0.14 162) 0%, oklch(0.62 0.12 185) 100%)",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-10 h-10 text-white" }),
    fullDescription: "A busy GP practice with 8 doctors and 15 staff was spending hours every week dealing with IT problems — slow computers, printer failures, and software crashes during patient appointments.",
    challenge: "Constant reactive IT problems were disrupting patient care. The practice had no formal IT management, relied on a single part-time IT person, and had critical compliance gaps.",
    solution: "We onboarded the practice onto our Managed IT Professional plan. This included 24/7 monitoring, automated patching, endpoint security, secure backup, and a dedicated support line for staff.",
    results: [
      "70% reduction in IT support incidents within 3 months",
      "Critical issues now resolved in under 1 hour on average",
      "Full compliance with Australian healthcare data standards",
      "Staff satisfaction with IT improved from 4.1 to 8.7/10"
    ]
  },
  {
    id: 4,
    clientType: "Café Owner",
    headline: "New POS system speeds up service by 30%",
    services: ["POS Solutions", "Staff Training", "Integration"],
    filter: "POS Solutions",
    metrics: [
      { label: "Faster Service", value: "+30%" },
      { label: "Setup Time", value: "2 hrs" },
      { label: "Order Errors", value: "−85%" }
    ],
    gradient: "linear-gradient(135deg, oklch(0.64 0.17 55) 0%, oklch(0.70 0.15 35) 100%)",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-10 h-10 text-white" }),
    fullDescription: "A popular café in Brisbane was running on an outdated cash register system that couldn't handle split bills, table management, or kitchen display orders — causing queues and errors during peak hours.",
    challenge: "The existing system couldn't integrate with their accounting software, had no reporting capability, and required manual end-of-day reconciliation taking 45 minutes per night.",
    solution: "We deployed a modern cloud-based POS system with kitchen display screens, table management, split-billing, and direct Xero integration. Full setup and staff training completed in a single day.",
    results: [
      "30% improvement in average service speed during peak hours",
      "85% reduction in order errors",
      "End-of-day reconciliation reduced from 45 minutes to 5 minutes",
      "Real-time sales reporting accessible on owner's phone"
    ]
  },
  {
    id: 5,
    clientType: "Hardware Store",
    headline: "Zero data loss after ransomware attack",
    services: ["Backup & Recovery", "Security"],
    filter: "IT Support",
    metrics: [
      { label: "Data Lost", value: "0 GB" },
      { label: "Recovery Time", value: "4 hrs" },
      { label: "Downtime", value: "<1 day" }
    ],
    gradient: "linear-gradient(135deg, oklch(0.52 0.20 25) 0%, oklch(0.60 0.17 10) 100%)",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HardDrive, { className: "w-10 h-10 text-white" }),
    fullDescription: "A family-owned hardware store in Adelaide was hit by a ransomware attack on a Tuesday morning. Their entire system — accounting, inventory, and supplier database — was encrypted.",
    challenge: "The attack threatened to destroy 12 years of business data. Without backups, they faced weeks of reconstruction and potentially tens of thousands of dollars in recovery costs.",
    solution: "Fortunately, we had implemented a 3-2-1 backup strategy for this client 8 months prior. We restored all systems from the most recent clean backup, quarantined the infected devices, and had them operational the same day.",
    results: [
      "Zero data loss — full recovery to 11pm the previous night",
      "Business operations restored within 4 hours",
      "Less than 1 business day of total downtime",
      "Security hardening prevents recurrence — no incidents in 18 months since"
    ]
  },
  {
    id: 6,
    clientType: "Dental Clinic",
    headline: "100% website uptime maintained for 12 consecutive months",
    services: ["Website Maintenance", "Security Monitoring"],
    filter: "Web Design",
    metrics: [
      { label: "Uptime", value: "100%" },
      { label: "Speed Gain", value: "+62%" },
      { label: "Security Alerts", value: "0" }
    ],
    gradient: "linear-gradient(135deg, oklch(0.46 0.18 230) 0%, oklch(0.58 0.15 250) 100%)",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-10 h-10 text-white" }),
    fullDescription: "A dental practice in Melbourne had experienced two website outages in one year, causing patient booking disruptions. They needed reliable ongoing maintenance to keep their online presence working.",
    challenge: "Their WordPress site was running outdated plugins, had no security monitoring, and regular updates were being skipped. A plugin conflict had taken the site down for 6 hours in November.",
    solution: "We moved the clinic onto our Website Maintenance plan — monthly updates, daily backups, security scanning, uptime monitoring, and a 4-hour response SLA for any issues.",
    results: [
      "100% uptime across 12 consecutive months",
      "Page load speed improved by 62% after performance optimisation",
      "Zero security incidents detected",
      "Owner now spends 0 hours/month on website management"
    ]
  },
  {
    id: 7,
    clientType: "Law Firm",
    headline: "95% same-day IT resolution rate for busy legal team",
    services: ["IT Support", "Managed IT", "Microsoft 365"],
    filter: "IT Support",
    metrics: [
      { label: "Same-Day Fix", value: "95%" },
      { label: "Avg Resolution", value: "2.4 hrs" },
      { label: "Staff Rating", value: "9.2/10" }
    ],
    gradient: "linear-gradient(135deg, oklch(0.42 0.19 270) 0%, oklch(0.52 0.17 250) 100%)",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Headphones, { className: "w-10 h-10 text-white" }),
    fullDescription: "A 12-person law firm in Sydney was frustrated with slow IT support responses from their previous provider. Billing deadlines and court dates meant they couldn't afford tech downtime.",
    challenge: "Their previous IT provider had average response times of 6+ hours, and resolution often spilled into the next business day. Staff morale was low and productivity was suffering.",
    solution: "We transitioned the firm to our Professional Managed IT plan, assigned a dedicated account manager familiar with legal software requirements, and set up priority escalation protocols for deadline-critical issues.",
    results: [
      "95% of IT issues resolved on the same business day",
      "Average resolution time reduced from 6+ hours to 2.4 hours",
      "Staff satisfaction with IT support rated 9.2/10",
      "Zero missed deadlines due to IT issues in 12 months"
    ]
  },
  {
    id: 8,
    clientType: "Restaurant Group",
    headline: "Unified POS, website & IT across 3 venues in one solution",
    services: ["POS Solutions", "Managed IT", "Web Design"],
    filter: "Managed IT",
    metrics: [
      { label: "Venues Unified", value: "3" },
      { label: "Admin Time", value: "−60%" },
      { label: "Revenue Visibility", value: "Real-time" }
    ],
    gradient: "linear-gradient(135deg, oklch(0.50 0.22 320) 0%, oklch(0.60 0.18 345) 100%)",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-10 h-10 text-white" }),
    fullDescription: "A growing restaurant group with 3 venues in Melbourne was running different POS systems at each location, had a dated website that didn't reflect their brand, and managed IT reactively.",
    challenge: "Inconsistent systems across venues made reporting impossible, inter-venue inventory transfers were manual, and owners had no single view of business performance.",
    solution: "We delivered a full Business IT Solutions package: unified cloud POS across all 3 venues, a redesigned website with online reservations, and Managed IT Professional across all locations under one contract.",
    results: [
      "All 3 venues operating on one unified POS and IT platform",
      "60% reduction in weekly admin and reporting time",
      "Real-time consolidated revenue reporting across all venues",
      "Online reservation bookings up 88% in first quarter"
    ]
  }
];
function CaseStudyCard({
  study,
  onOpen,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: index * 70, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card rounded-2xl border border-border overflow-hidden shadow-card hover-lift group flex flex-col h-full",
      "data-ocid": `portfolio.case.${study.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative h-36 flex items-center justify-center overflow-hidden",
            style: { background: study.gradient },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,white,transparent_60%)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 z-10", children: [
                study.icon,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90 text-xs font-semibold tracking-wide uppercase", children: study.clientType })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-3", children: study.services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              className: "bg-primary/10 text-primary border-0 text-xs font-medium",
              children: s
            },
            s
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg leading-snug mb-4 group-hover:text-primary transition-colors", children: study.headline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-5", children: study.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-muted/60 rounded-lg p-2 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-primary text-sm", children: m.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs leading-tight mt-0.5", children: m.label })
              ]
            },
            m.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "text-primary hover:text-primary hover:bg-primary/8 font-medium gap-1.5 px-0",
              onClick: () => onOpen(study),
              "data-ocid": `portfolio.view_case.${study.id}`,
              children: [
                "View Case Study ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ) })
        ] })
      ]
    }
  ) });
}
function CaseStudyModal({
  study,
  onClose
}) {
  if (!study) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!study, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-2xl max-h-[90vh] overflow-y-auto",
      "data-ocid": "portfolio.case_modal",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-2", children: study.services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              className: "bg-primary/10 text-primary border-0 text-xs",
              children: s
            },
            s
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-xl text-foreground leading-snug", children: study.headline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: study.clientType })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 my-2", children: study.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-muted/50 rounded-xl p-3 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-primary text-xl", children: m.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs mt-0.5", children: m.label })
            ]
          },
          m.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground mb-1", children: "Overview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: study.fullDescription })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground mb-1", children: "The Challenge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: study.challenge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground mb-1", children: "Our Solution" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: study.solution })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground mb-2", children: "Key Results" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: study.results.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-0.5 shrink-0", children: "✓" }),
              r
            ] }, r)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Ready to achieve similar results?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              className: "bg-primary text-primary-foreground hover:bg-primary/90",
              "data-ocid": "portfolio.case_modal_cta",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Book Free Consultation" })
            }
          )
        ] })
      ]
    }
  ) });
}
function PortfolioPage() {
  const [activeFilter, setActiveFilter] = reactExports.useState("All");
  const [selectedCase, setSelectedCase] = reactExports.useState(null);
  const filtered = activeFilter === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.filter === activeFilter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Portfolio & Case Studies",
        title: "Real Results for Real Businesses",
        subtitle: "Explore how we've helped Australian businesses transform their technology — from tradie websites to full managed IT rollouts.",
        ctas: [
          {
            label: "Book Free Consultation",
            href: "/contact",
            variant: "primary"
          },
          { label: "View Services", href: "/services", variant: "outline" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-12 bg-muted/30 border-y border-border",
        "data-ocid": "portfolio.stats_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [
          { val: "500+", label: "Businesses Helped" },
          { val: "200+", label: "Websites Launched" },
          { val: "8", label: "Industries Served" },
          { val: "12+", label: "Years of Results" }
        ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          AnimatedSection,
          {
            delay: i * 80,
            className: "text-center",
            "data-ocid": `portfolio.stat.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-3xl text-primary mb-1", children: stat.val }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: stat.label })
            ]
          },
          stat.label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "portfolio.cases_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Case Studies",
              title: "Real Projects, Real Results",
              subtitle: "Filter by service to find relevant case studies for your business type.",
              className: "mb-10"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex flex-wrap gap-2 mb-10",
              "data-ocid": "portfolio.filter_tabs",
              children: FILTER_TABS.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActiveFilter(tab),
                  "data-ocid": `portfolio.filter.${tab.toLowerCase().replace(/\s+/g, "_")}`,
                  className: `px-4 py-2 rounded-full text-sm font-medium transition-smooth border ${activeFilter === tab ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-card text-foreground border-border hover:border-primary/40 hover:text-primary"}`,
                  children: tab
                },
                tab
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filtered.map((study, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CaseStudyCard,
            {
              study,
              onOpen: setSelectedCase,
              index: i
            },
            study.id
          )) }),
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-center py-16 text-muted-foreground",
              "data-ocid": "portfolio.empty_state",
              children: "No case studies found for this filter."
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", "data-ocid": "portfolio.cta_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-label text-primary block mb-3", children: "Your Turn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-3xl md:text-4xl mb-4", children: "Want Results Like These?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-8 leading-relaxed", children: "Book your free consultation today and let's talk about what's possible for your business." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CTAButton,
        {
          label: "Book Your Free Consultation",
          href: "/contact",
          variant: "primary",
          showArrow: true,
          "data-ocid": "portfolio.bottom_cta"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CaseStudyModal,
      {
        study: selectedCase,
        onClose: () => setSelectedCase(null)
      }
    )
  ] });
}
export {
  PortfolioPage
};
