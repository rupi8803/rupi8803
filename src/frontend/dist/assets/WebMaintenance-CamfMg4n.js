import { j as jsxRuntimeExports, C as Clock } from "./index-C_4JYRI7.js";
import { B as Badge } from "./badge-CNP9DWOx.js";
import { a as AnimatedSection, C as CTAButton } from "./CTAButton-Bel-hiN6.js";
import { P as PageHero } from "./PageHero-CMMmYxvV.js";
import { S as SectionHeading } from "./SectionHeading-sSRQvpa5.js";
import { T as TriangleAlert } from "./triangle-alert-Bk_y2MOw.js";
import { Z as Zap } from "./zap-B4TSkOxy.js";
import { C as ChartColumn } from "./chart-column-D_m62Z9s.js";
import { S as Shield } from "./shield-CPnuuYmH.js";
import { R as RefreshCw } from "./refresh-cw-D4_RJ4_-.js";
import { S as Server } from "./server-nhcL4Bf6.js";
import { L as Lock } from "./lock-D-y9d9qq.js";
import { F as FileText } from "./file-text-Ch6hBD2l.js";
import { C as CircleCheck } from "./circle-check-C_vgD0-t.js";
const whyStats = [
  {
    icon: TriangleAlert,
    stat: "39%",
    label: "of sites hacked",
    detail: "due to outdated plugins, themes, or CMS software that was never patched",
    color: "text-destructive",
    bg: "bg-destructive/10"
  },
  {
    icon: Zap,
    stat: "40%",
    label: "of visitors lost",
    detail: "to slow-loading pages — Google also penalises slow sites in search rankings",
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    icon: ChartColumn,
    stat: "3×",
    label: "SEO improvement",
    detail: "from regular updates, security patches, and performance tuning over 6 months",
    color: "text-primary",
    bg: "bg-primary/10"
  }
];
const featureGrid = [
  {
    icon: Shield,
    title: "Security updates",
    desc: "CMS core, plugins, and themes patched as soon as updates release"
  },
  {
    icon: RefreshCw,
    title: "Plugin & theme updates",
    desc: "Compatibility-checked updates applied on a tested schedule"
  },
  {
    icon: Zap,
    title: "Performance monitoring",
    desc: "Page speed and Core Web Vitals tracked with monthly reports"
  },
  {
    icon: Server,
    title: "Regular backups",
    desc: "Automated off-site backups so your site can be restored in minutes"
  },
  {
    icon: Lock,
    title: "Uptime monitoring",
    desc: "24/7 uptime checks with instant alerts if your site goes down"
  },
  {
    icon: FileText,
    title: "Monthly reports",
    desc: "Clear, plain-English reports on updates, security, and performance"
  },
  {
    icon: CircleCheck,
    title: "Content updates",
    desc: "Minor text, image, and layout changes included on higher tiers"
  },
  {
    icon: Clock,
    title: "Priority support",
    desc: "Dedicated support channel with faster response times for urgent issues"
  }
];
const plans = [
  {
    name: "Basic",
    price: "AUD 49",
    period: "/month",
    description: "Essential coverage for small websites",
    features: [
      "Monthly CMS & plugin updates",
      "Weekly automated backups",
      "Uptime monitoring",
      "Security scanning",
      "Email support",
      "Monthly report"
    ],
    highlight: false,
    cta: "Get Basic Plan",
    response: "48hr support response"
  },
  {
    name: "Standard",
    price: "AUD 99",
    period: "/month",
    description: "The most popular choice for growing businesses",
    features: [
      "Weekly updates",
      "Daily backups",
      "Priority support",
      "Performance reports",
      "1hr content updates/mo",
      "Malware removal",
      "Speed optimisation"
    ],
    highlight: true,
    cta: "Get Standard Plan",
    response: "24hr support response"
  },
  {
    name: "Premium",
    price: "AUD 179",
    period: "/month",
    description: "Maximum protection with hands-on care",
    features: [
      "Daily updates",
      "Hourly backups",
      "24/7 monitoring",
      "Dedicated support manager",
      "3hrs content updates/mo",
      "Speed optimisation",
      "Quarterly SEO audit",
      "Monthly strategy call"
    ],
    highlight: false,
    cta: "Get Premium Plan",
    response: "4hr support response"
  }
];
const responseCommitments = [
  {
    severity: "Security breach / site down",
    time: "2 hours",
    color: "text-destructive"
  },
  {
    severity: "Critical functionality broken",
    time: "4 hours",
    color: "text-accent"
  },
  {
    severity: "Standard maintenance request",
    time: "Next business day",
    color: "text-primary"
  },
  {
    severity: "Content update request",
    time: "2 business days",
    color: "text-muted-foreground"
  }
];
function WebMaintenancePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Website Maintenance",
        title: "Keep Your Site Secure, Fast, and Up to Date",
        subtitle: "A neglected website is a security risk, a performance problem, and a brand liability. Our maintenance plans ensure your site stays updated, backed up, and performing at its best — every single day.",
        ctas: [
          {
            label: "View Maintenance Plans",
            href: "#plans",
            variant: "primary"
          },
          {
            label: "Get Maintenance Plan",
            href: "/contact",
            variant: "outline"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "web_maintenance.why_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Why Maintenance Matters",
              title: "The Real Cost of a Neglected Website",
              subtitle: "Most website security issues and performance problems are entirely preventable with regular maintenance.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: whyStats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 100, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl p-7 border border-border text-center h-full shadow-card",
              "data-ocid": `web_maintenance.why_stat.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-14 h-14 rounded-full ${stat.bg} flex items-center justify-center mx-auto mb-4`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: `w-6 h-6 ${stat.color}` })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `font-display font-bold text-4xl ${stat.color} mb-1`,
                    children: stat.stat
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-foreground mb-3", children: stat.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: stat.detail })
              ]
            }
          ) }, stat.stat)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "web_maintenance.included_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "What's Covered",
              title: "Comprehensive Website Care",
              subtitle: "Every plan includes our full suite of maintenance services — with more frequency and features as you move up.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: featureGrid.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnimatedSection,
            {
              delay: i * 60,
              direction: "up",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-card rounded-xl p-5 border border-border h-full shadow-card",
                  "data-ocid": `web_maintenance.feature.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "w-5 h-5 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1.5 text-sm", children: feature.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: feature.desc })
                  ]
                }
              )
            },
            feature.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "plans",
        className: "py-20 bg-background",
        "data-ocid": "web_maintenance.plans_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Maintenance Plans",
              title: "Choose Your Level of Cover",
              subtitle: "All plans include our core maintenance services. Upgrade for more frequent updates and priority support.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: plans.map((plan, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-2xl p-7 h-full flex flex-col border relative ${plan.highlight ? "bg-primary text-primary-foreground border-primary shadow-elevated" : "bg-card border-border shadow-card"}`,
              "data-ocid": `web_maintenance.plan.${i + 1}`,
              children: [
                plan.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground border-0 text-xs font-semibold px-3", children: "Most Popular" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-xl mb-1", children: plan.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: `text-xs mb-4 ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`,
                    children: plan.description
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-display font-bold", children: plan.price }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-sm ml-1 ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`,
                      children: plan.period
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: `text-xs mb-5 font-medium ${plan.highlight ? "text-accent" : "text-primary"}`,
                    children: plan.response
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 flex-1 mb-6", children: plan.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CircleCheck,
                    {
                      className: `w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-accent" : "text-primary"}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground",
                      children: f
                    }
                  )
                ] }, f)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CTAButton,
                  {
                    label: plan.cta,
                    href: "/contact",
                    variant: plan.highlight ? "primary" : "outline",
                    "data-ocid": `web_maintenance.plan_cta.${i + 1}`
                  }
                )
              ]
            }
          ) }, plan.name)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-muted/30",
        "data-ocid": "web_maintenance.response_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Our Commitment",
              title: "Response Time Guarantee",
              subtitle: "When something goes wrong, you need fast answers. Here's what you can expect from us.",
              className: "mb-8"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border overflow-hidden shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 bg-muted/40 px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Issue Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Response Time" })
            ] }),
            responseCommitments.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "grid grid-cols-2 px-6 py-4 border-t border-border items-center",
                "data-ocid": `web_maintenance.response.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: item.severity }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `text-sm font-bold font-display ${item.color}`,
                      children: item.time
                    }
                  )
                ]
              },
              item.severity
            ))
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-primary py-16",
        "data-ocid": "web_maintenance.cta_banner",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl mb-4", children: "Protect Your Website Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8", children: "Don't wait for your site to get hacked or break. Start a maintenance plan and get complete peace of mind." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CTAButton,
              {
                label: "View Pricing Plans",
                href: "/pricing",
                variant: "primary",
                showArrow: true,
                "data-ocid": "web_maintenance.bottom_cta_primary"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CTAButton,
              {
                label: "Get Maintenance Plan",
                href: "/contact",
                variant: "outline",
                "data-ocid": "web_maintenance.bottom_cta_secondary"
              }
            )
          ] })
        ] }) })
      }
    )
  ] });
}
export {
  WebMaintenancePage
};
