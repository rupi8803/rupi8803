import { c as createLucideIcon, j as jsxRuntimeExports, L as Link } from "./index-j41ECiun.js";
import { B as Badge } from "./badge-COdL3ccf.js";
import { a as AnimatedSection, A as ArrowRight, C as CTAButton } from "./CTAButton-DHNNlx56.js";
import { P as PageHero } from "./PageHero-BgH_GaHd.js";
import { S as SectionHeading } from "./SectionHeading-DtkVSTKL.js";
import { L as Lock } from "./lock-Ck6eApE0.js";
import { F as FileText } from "./file-text-BiAioUgk.js";
import { T as TriangleAlert } from "./triangle-alert-B3hauBUJ.js";
import { H as Headphones } from "./headphones-ChuZkNLJ.js";
import { S as Shield } from "./shield-Cp6MBouf.js";
import { H as HardDrive } from "./hard-drive-BTahsT5G.js";
import { G as Globe } from "./globe-BcGvwf_Y.js";
import { C as CircleCheck } from "./circle-check-BvhOiaW2.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
];
const MonitorCheck = createLucideIcon("monitor-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCheck = createLucideIcon("user-check", __iconNode);
const challenges = [
  {
    icon: Lock,
    title: "Patient Data Security & Privacy",
    desc: "Healthcare holds the most sensitive personal data. A breach doesn't just damage your practice — it harms your patients and can violate Australian law."
  },
  {
    icon: MonitorCheck,
    title: "Zero Downtime Tolerance",
    desc: "When systems fail in a medical practice, patient care is directly impacted. Downtime is not an option — reliability is non-negotiable."
  },
  {
    icon: FileText,
    title: "Managing Clinical Software",
    desc: "Best Practice, Medical Director, Cliniko, and other clinical platforms require specialist IT support to keep running smoothly."
  },
  {
    icon: TriangleAlert,
    title: "Ageing Hardware",
    desc: "Outdated computers and servers running critical clinical software create security vulnerabilities and performance bottlenecks."
  },
  {
    icon: Headphones,
    title: "No Dedicated IT Support",
    desc: "Most small and medium practices don't have in-house IT — when something breaks, there's no one to call. Until now."
  }
];
const services = [
  {
    icon: Shield,
    title: "Managed IT with Healthcare Focus",
    desc: "24/7 proactive monitoring, maintenance, and support — with healthcare-specific expertise in clinical software environments.",
    href: "/services/managed-it"
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery — Australian Data",
    desc: "Medical-grade backup with Australian data residency, meeting Privacy Act and My Health Record obligations.",
    href: "/services/backup-recovery"
  },
  {
    icon: Headphones,
    title: "Dedicated IT Support",
    desc: "Fast, responsive support for hardware, software, and network issues — remote and on-site. Staff focus on patients, not tech.",
    href: "/services/it-support"
  },
  {
    icon: Globe,
    title: "Website with Booking Integration",
    desc: "Professional practice websites with appointment booking placeholders, patient information, and after-hours guidance.",
    href: "/services/web-design"
  }
];
const complianceItems = [
  "Australian Privacy Act compliance guidance",
  "My Health Record integration support",
  "HIPAA-aligned security practices",
  "Encrypted data storage and transmission",
  "Secure email and data handling best practices",
  "Regular security audits and compliance reporting",
  "Staff cybersecurity awareness training",
  "Network segmentation to isolate clinical systems"
];
function MedicalPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Medical & Healthcare",
        title: "Technology Solutions for Medical Practices — Secure, Compliant, Reliable IT",
        subtitle: "Protecting patient data and keeping your practice running — TechPro delivers compliant, security-first IT for GP clinics, specialists, and allied health providers.",
        ctas: [
          {
            label: "Get Free IT Audit",
            href: "/free-it-audit",
            variant: "primary"
          },
          { label: "Book Consultation", href: "/contact", variant: "outline" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "medical.challenges_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Healthcare Challenges",
              title: "The IT Challenges Medical Practices Face",
              subtitle: "Healthcare IT is uniquely demanding — high-stakes data, compliance obligations, and zero tolerance for downtime.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: challenges.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl p-6 border border-border h-full shadow-card",
              "data-ocid": `medical.challenge.${i + 1}`,
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
        "data-ocid": "medical.solutions_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "How We Help",
              title: "Healthcare IT That Puts Patients First",
              subtitle: "Security-first solutions designed for the unique demands of Australian medical practices.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 mb-6", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: s.href,
              className: "block group h-full",
              "data-ocid": `medical.solution.${i + 1}`,
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
                "data-ocid": "medical.staff_training",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1", children: "Staff IT Training & Support" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Onboarding, training, and ongoing support for clinical and admin staff — so your team can use technology confidently and securely." })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "bg-card rounded-xl p-6 border border-border shadow-card",
                "data-ocid": "medical.security_infra",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1", children: "Security-First IT Infrastructure" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Firewalls, VPNs, network segmentation, and endpoint protection — built to meet Australian healthcare data security standards." })
                  ] })
                ] })
              }
            )
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "medical.compliance_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                label: "Compliance",
                title: "We Help Practices Meet Their Legal Obligations",
                align: "left",
                className: "mb-6"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Australian medical practices must meet strict data privacy and security obligations under the Privacy Act 1988, the My Health Records Act, and RACGP security standards. Non-compliance is not just a legal risk — it erodes patient trust." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "TechPro doesn't just manage your IT — we actively help you understand and maintain your compliance posture. Our team provides guidance, documentation, and technical controls aligned to Australian healthcare requirements." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
              "Privacy Act 1988",
              "My Health Record",
              "RACGP Security",
              "HIPAA-Aligned"
            ].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, tag)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-8 shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground", children: "Compliance & Security Checklist" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: complianceItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: item })
            ] }, item)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CTAButton,
              {
                label: "Book a Free Security Audit",
                href: "/free-it-audit",
                variant: "secondary",
                showArrow: true,
                className: "mt-6 w-full justify-center",
                "data-ocid": "medical.compliance_cta"
              }
            )
          ] }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "medical.security_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Security Approach",
              title: "Three Pillars of Healthcare IT Security",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: [
            {
              icon: Lock,
              title: "Zero-Trust Security",
              desc: "Every device, user, and connection is verified before accessing patient data — no implicit trust, no exceptions."
            },
            {
              icon: Shield,
              title: "24/7 Threat Monitoring",
              desc: "Continuous monitoring detects and responds to security threats before they become breaches or incidents."
            },
            {
              icon: FileText,
              title: "Compliance Reporting",
              desc: "Regular reports demonstrating your compliance posture — ready for audits, accreditation, and practice reviews."
            }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 100, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex gap-4 bg-card rounded-xl p-5 border border-border shadow-card h-full",
              "data-ocid": `medical.security.${i + 1}`,
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "medical.success_story_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-10 shadow-card text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-semibold tracking-wide uppercase mb-6", children: "Success Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-display text-2xl font-bold text-foreground leading-snug mb-6", children: '"GP practice reduced IT incidents by 70% after moving to TechPro Managed IT — staff can focus on patients, not tech problems."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto", children: "A busy GP clinic was experiencing frequent system outages, security concerns about their ageing hardware, and no IT plan for their growing patient database. TechPro migrated them to a fully managed IT environment, replaced critical hardware, and implemented a compliance-aligned backup strategy. IT incidents dropped by 70% in the first year." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 max-w-md mx-auto", children: [
            { val: "70%", label: "Fewer IT incidents" },
            { val: "100%", label: "Compliance met" },
            { val: "Zero", label: "Data breaches" }
          ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center bg-muted/50 rounded-xl p-4",
              "data-ocid": `medical.stat.${i + 1}`,
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16", "data-ocid": "medical.cta_banner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl mb-4", children: "Protect Your Practice and Your Patients" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8", children: "Book a free IT security audit and compliance review for your healthcare practice — no obligation, just clarity." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Get Free IT Audit",
            href: "/free-it-audit",
            variant: "primary",
            showArrow: true,
            "data-ocid": "medical.bottom_cta_audit"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Book Consultation",
            href: "/contact",
            variant: "outline",
            "data-ocid": "medical.bottom_cta_consult"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  MedicalPage
};
