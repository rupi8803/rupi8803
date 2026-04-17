import { c as createLucideIcon, j as jsxRuntimeExports } from "./index-C_4JYRI7.js";
import { a as AnimatedSection, C as CTAButton } from "./CTAButton-Bel-hiN6.js";
import { P as PageHero } from "./PageHero-CMMmYxvV.js";
import { S as SectionHeading } from "./SectionHeading-sSRQvpa5.js";
import { C as CircleCheck } from "./circle-check-C_vgD0-t.js";
import { N as Network } from "./network-BwEtEMnc.js";
import { S as Server } from "./server-nhcL4Bf6.js";
import { L as Lock } from "./lock-D-y9d9qq.js";
import { S as Shield } from "./shield-CPnuuYmH.js";
import { R as RefreshCw } from "./refresh-cw-D4_RJ4_-.js";
import { M as Monitor } from "./monitor-C1vyodxZ.js";
import { W as Wrench } from "./wrench-D2XoZoHd.js";
import { D as DollarSign } from "./dollar-sign-BNe6lI8p.js";
import { Z as Zap } from "./zap-B4TSkOxy.js";
import { T as TrendingUp } from "./trending-up-Bk1M9kxI.js";
import { C as ChartColumn } from "./chart-column-D_m62Z9s.js";
import { B as Building2 } from "./building-2-BZb6Yt0L.js";
import { H as HardHat } from "./hard-hat-C741ziHk.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M11 2v2", key: "1539x4" }],
  ["path", { d: "M5 2v2", key: "1yf1q8" }],
  ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1", key: "rb5t3r" }],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]
];
const Stethoscope = createLucideIcon("stethoscope", __iconNode);
const managedItems = [
  {
    icon: Network,
    label: "Network Monitoring",
    desc: "Continuous monitoring of routers, switches, firewalls, and Wi-Fi access points."
  },
  {
    icon: Server,
    label: "Server Health",
    desc: "CPU, memory, disk, and performance alerts before failures occur."
  },
  {
    icon: Lock,
    label: "Security Patches",
    desc: "Automated OS and application patching across all endpoints — no delays."
  },
  {
    icon: Shield,
    label: "Endpoint Protection",
    desc: "Antivirus, anti-malware, and EDR deployed across every device."
  },
  {
    icon: RefreshCw,
    label: "Backup Verification",
    desc: "We test your backups regularly so restores work when you need them most."
  },
  {
    icon: Monitor,
    label: "Software Licensing",
    desc: "Track and manage all software licences, renewals, and compliance."
  },
  {
    icon: Wrench,
    label: "Vendor Management",
    desc: "We liaise with ISPs, hardware suppliers, and cloud vendors on your behalf."
  }
];
const benefits = [
  {
    icon: DollarSign,
    title: "Predictable Monthly Costs",
    desc: "One flat fee covers monitoring, patching, support, and management. No surprise invoices, no per-incident billing."
  },
  {
    icon: Zap,
    title: "Reduced Downtime",
    desc: "Proactive monitoring catches issues before they cause outages. Most problems are resolved before you even notice."
  },
  {
    icon: Shield,
    title: "Always Up-to-Date Security",
    desc: "Patches deployed within 24–48 hours of release. Your systems stay protected against emerging threats."
  },
  {
    icon: TrendingUp,
    title: "Strategic IT Planning",
    desc: "Quarterly IT reviews, roadmaps, and budget planning — so technology grows alongside your business."
  },
  {
    icon: ChartColumn,
    title: "Enterprise-Level Expertise",
    desc: "Access a full team of certified engineers for the cost of a single part-time IT hire."
  }
];
const industryExamples = [
  {
    icon: Building2,
    industry: "Retail",
    title: "Inventory & POS Systems",
    desc: "We keep your POS, inventory management, and EFTPOS systems connected and running during peak trade periods.",
    points: [
      "Zero-downtime POS updates",
      "Multi-location network management",
      "EFTPOS integration monitoring"
    ]
  },
  {
    icon: Stethoscope,
    industry: "Medical",
    title: "Compliance & Patient Data",
    desc: "Healthcare-grade security, compliance documentation, and strict data governance for GP clinics and specialists.",
    points: [
      "MY Health Record compliance",
      "Clinical software management",
      "Encrypted patient data handling"
    ]
  },
  {
    icon: HardHat,
    industry: "Tradies",
    title: "Mobile Workforce Management",
    desc: "Keep field crews connected with reliable mobile device management, job software support, and remote access.",
    points: [
      "Mobile device management",
      "Job management app support",
      "Secure remote access for field staff"
    ]
  }
];
function ManagedITPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Managed IT Services",
        title: "Proactive IT Management So You Can Focus on Business",
        subtitle: "We monitor and manage your IT infrastructure 24/7 so issues are caught before they become problems — all for a fixed monthly fee.",
        ctas: [
          { label: "Get a Proposal", href: "/contact", variant: "primary" },
          { label: "Book Consultation", href: "/contact", variant: "outline" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "managed_it.explainer_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-14 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3", children: "Proactive vs Reactive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-3xl lg:text-4xl mb-5 leading-tight", children: "What Is Managed IT — and Why Does It Matter?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed mb-4", children: [
              "Traditional IT support is",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "reactive" }),
              ": something breaks, you call someone, you wait, you pay. Every outage costs time and money."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Managed IT is proactive." }),
              " ",
              "We continuously monitor every part of your IT environment — servers, desktops, network, security — and resolve issues before they ever impact your team."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "The result? Less downtime, more predictable costs, and an IT environment that's always secure, updated, and performing at its best." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
            {
              label: "Reactive Support",
              items: [
                "Wait for things to break",
                "Unpredictable bills",
                "Disruption to your team",
                "Security gaps between fixes"
              ],
              negative: true
            },
            {
              label: "Managed IT (Us)",
              items: [
                "Issues fixed before you notice",
                "Fixed monthly fee",
                "Seamless background management",
                "Continuous security monitoring"
              ],
              negative: false
            }
          ].map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-xl border p-5 ${col.negative ? "bg-muted/30 border-border" : "bg-primary/5 border-primary/20"}`,
              "data-ocid": `managed_it.compare.${col.negative ? "reactive" : "proactive"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: `font-display font-semibold text-sm mb-4 ${col.negative ? "text-muted-foreground" : "text-primary"}`,
                    children: col.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: col.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  col.negative ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3.5 h-3.5 rounded-full border-2 border-muted-foreground/40 mt-0.5 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-primary mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground leading-snug", children: item })
                ] }, item)) })
              ]
            },
            col.label
          )) }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "managed_it.scope_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "What We Manage",
              title: "Your Entire IT Environment — Covered",
              subtitle: "From the network edge to every endpoint, we monitor and manage every layer of your IT infrastructure.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: managedItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 70, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl p-6 border border-border h-full shadow-card",
              "data-ocid": `managed_it.scope.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1.5 text-sm", children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: item.desc })
              ]
            }
          ) }, item.label)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "managed_it.benefits_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Business Benefits",
              title: "Why Businesses Choose Managed IT",
              subtitle: "The right managed IT partner doesn't just keep the lights on — they actively make your business more efficient and resilient.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: benefits.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl p-7 border border-border h-full shadow-card",
              "data-ocid": `managed_it.benefit.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "w-6 h-6 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg mb-2", children: b.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: b.desc })
              ]
            }
          ) }, b.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "managed_it.industries_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Industry Examples",
              title: "Managed IT for Your Industry",
              subtitle: "We tailor our managed IT services to the unique demands of your sector.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: industryExamples.map((ex, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 100, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl border border-border p-7 h-full shadow-card",
              "data-ocid": `managed_it.industry.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ex.icon, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: ex.industry })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg mb-2", children: ex.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: ex.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: ex.points.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-primary mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: pt })
                ] }, pt)) })
              ]
            }
          ) }, ex.industry)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "managed_it.pricing_teaser",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                label: "Simple Pricing",
                title: "Flat Monthly Fee — No Surprises",
                subtitle: "Our managed IT plans start from AUD $50/user/month. Choose the level of coverage that suits your team size and requirements.",
                align: "left",
                className: "mb-8"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
              {
                plan: "Essential",
                desc: "Remote support + monitoring for small teams",
                price: "From AUD $50/mo per user"
              },
              {
                plan: "Professional",
                desc: "24/7 support + on-site visits + full security suite",
                price: "From AUD $115/mo per user"
              },
              {
                plan: "Enterprise",
                desc: "Unlimited support + dedicated account manager + compliance",
                price: "From AUD $290/mo per user"
              }
            ].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-4 bg-card rounded-xl p-5 border border-border shadow-card",
                "data-ocid": `managed_it.plan_teaser.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: p.plan }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: p.desc }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-primary mt-1", children: p.price })
                  ] })
                ]
              },
              p.plan
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CTAButton,
              {
                label: "View Full Pricing",
                href: "/pricing",
                variant: "secondary",
                showArrow: true,
                "data-ocid": "managed_it.pricing_link"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-2xl p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-xl mb-2", children: "Not sure which plan is right for you?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6 leading-relaxed", children: "Tell us about your team size, existing infrastructure, and key pain points — we'll design a custom managed IT proposal at no cost or obligation." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
              "Free infrastructure assessment",
              "Custom proposal within 48 hours",
              "No lock-in contracts",
              "Month-to-month billing"
            ].map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: pt })
            ] }, pt)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CTAButton,
              {
                label: "Get a Free Proposal",
                href: "/contact",
                variant: "primary",
                showArrow: true,
                className: "mt-7 w-full justify-center",
                "data-ocid": "managed_it.get_proposal_cta"
              }
            )
          ] }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16", "data-ocid": "managed_it.cta_banner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl mb-4", children: "Ready to Stop Firefighting IT Issues?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8", children: "Let us take IT off your plate. Book a free consultation and get a custom managed IT proposal for your business." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Get a Proposal",
            href: "/contact",
            variant: "primary",
            showArrow: true,
            "data-ocid": "managed_it.bottom_cta"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Book Consultation",
            href: "/contact",
            variant: "outline",
            "data-ocid": "managed_it.bottom_consult_cta"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  ManagedITPage
};
