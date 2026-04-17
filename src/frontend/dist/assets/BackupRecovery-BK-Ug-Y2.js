import { c as createLucideIcon, j as jsxRuntimeExports, C as Clock } from "./index-C_4JYRI7.js";
import { a as AnimatedSection, C as CTAButton } from "./CTAButton-Bel-hiN6.js";
import { P as PageHero } from "./PageHero-CMMmYxvV.js";
import { S as SectionHeading } from "./SectionHeading-sSRQvpa5.js";
import { T as TriangleAlert } from "./triangle-alert-Bk_y2MOw.js";
import { S as Shield } from "./shield-CPnuuYmH.js";
import { C as CircleCheck } from "./circle-check-C_vgD0-t.js";
import { H as HardDrive } from "./hard-drive-DGnWFQfh.js";
import { R as RefreshCw } from "./refresh-cw-D4_RJ4_-.js";
import { S as ShieldCheck } from "./shield-check-ClDGAjZ1.js";
import { S as Server } from "./server-nhcL4Bf6.js";
import { L as Lock } from "./lock-D-y9d9qq.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
];
const Cloud = createLucideIcon("cloud", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
];
const FileCheck = createLucideIcon("file-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode);
const backupTypes = [
  {
    icon: Cloud,
    title: "Cloud Backup",
    badge: "Offsite Protection",
    desc: "Automated, encrypted backups stored in Australian data centres. Runs silently in the background — no human intervention required.",
    points: [
      "AES-256 encryption in transit and at rest",
      "Australian data residency options",
      "Hourly, daily, or weekly schedules",
      "Accessible from anywhere for fast recovery"
    ]
  },
  {
    icon: HardDrive,
    title: "On-Site Backup",
    badge: "Fast Local Restore",
    desc: "NAS (Network Attached Storage) devices on your premises for lightning-fast file and system restores without internet dependency.",
    points: [
      "Sub-hour recovery for critical systems",
      "No data egress or transfer fees",
      "Full server image backups",
      "Ideal for large datasets and databases"
    ]
  },
  {
    icon: RefreshCw,
    title: "Hybrid Backup",
    badge: "Best of Both Worlds",
    desc: "Combine on-site speed with off-site security. The recommended approach for businesses that cannot afford extended downtime.",
    points: [
      "Fastest local restore capability",
      "Off-site protection against site disasters",
      "Automated sync between local and cloud",
      "Recommended for most Australian SMBs"
    ]
  }
];
const recoveryCapabilities = [
  {
    icon: Clock,
    title: "Point-in-Time Restore",
    desc: "Recover data to any point in time — hourly snapshots mean minimal data loss even if disaster strikes mid-day."
  },
  {
    icon: ShieldCheck,
    title: "Ransomware Recovery",
    desc: "Clean, uninfected backup copies allow full recovery without paying ransom. Immutable backups can't be encrypted by ransomware."
  },
  {
    icon: FileCheck,
    title: "File & Folder Recovery",
    desc: "Recover individual files and folders without a full system restore — fast and targeted for day-to-day incidents."
  },
  {
    icon: Server,
    title: "Full System Restore",
    desc: "Bare-metal restore of entire servers to the same or different hardware. Get systems back online in hours, not days."
  },
  {
    icon: RotateCcw,
    title: "RTO & RPO Commitments",
    desc: "We define clear Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) with your plan — so you know exactly what to expect."
  }
];
const securityPoints = [
  {
    label: "AES-256 encryption",
    detail: "Military-grade encryption for all backup data at rest and in transit."
  },
  {
    label: "Australian data residency",
    detail: "Data stored in Australian data centres — no overseas jurisdiction risk."
  },
  {
    label: "Compliance documentation",
    detail: "Backup logs, retention records, and audit trails for regulatory compliance."
  },
  {
    label: "Access controls",
    detail: "Role-based access and MFA ensure only authorised staff can restore or manage backups."
  },
  {
    label: "Immutable backups",
    detail: "Backup copies that cannot be modified or deleted — critical for ransomware defence."
  },
  {
    label: "Retention policies",
    detail: "Configurable retention from 30 days to 7 years depending on regulatory requirements."
  }
];
function BackupRecoveryPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Backup & Recovery",
        title: "Protect Your Business Data from Loss, Ransomware, and Disaster",
        subtitle: "Enterprise-grade backup and disaster recovery solutions that keep your business protected, compliant, and resilient — whatever happens.",
        ctas: [
          { label: "Get Backup Plan", href: "/contact", variant: "primary" },
          {
            label: "Free IT Audit",
            href: "/free-it-audit",
            variant: "outline"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", "data-ocid": "backup.why_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3", children: "The Reality of Data Loss" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-3xl lg:text-4xl mb-5 leading-tight", children: "Why Every Business Needs a Tested Backup Strategy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Data loss isn't just an inconvenience — it can end a business. Hardware failures, ransomware attacks, accidental deletion, and natural disasters are all real and common threats." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed mb-4", children: [
          "Having a backup isn't enough —",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "a backup that hasn't been tested isn't a backup." }),
          " ",
          "We set up your solution and test it regularly to ensure restores actually work when you need them."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Our backup solutions are designed around your business — your data volume, your recovery time requirements, and your compliance obligations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
        {
          icon: TriangleAlert,
          stat: "60%",
          label: "of SMBs close within 6 months of losing critical data",
          color: "text-destructive",
          bg: "bg-destructive/10"
        },
        {
          icon: Shield,
          stat: "62%",
          label: "increase in ransomware attacks against Australian businesses in 2024",
          color: "text-orange-600",
          bg: "bg-orange-100/60"
        },
        {
          icon: Clock,
          stat: "AUD $275K",
          label: "average cost of a data breach for an Australian SMB",
          color: "text-primary",
          bg: "bg-primary/10"
        },
        {
          icon: CircleCheck,
          stat: "< 4 hrs",
          label: "typical full system recovery time with our hybrid backup solution",
          color: "text-green-600",
          bg: "bg-green-100/60"
        }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-5 bg-card rounded-xl p-5 border border-border shadow-card",
          "data-ocid": `backup.stat.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-12 h-12 rounded-full ${item.bg} flex items-center justify-center shrink-0`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: `w-6 h-6 ${item.color}` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `font-display font-bold text-2xl ${item.color}`,
                  children: item.stat
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-snug mt-0.5", children: item.label })
            ] })
          ]
        },
        item.stat
      )) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", "data-ocid": "backup.types_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          label: "Backup Solutions",
          title: "Three Approaches to Data Protection",
          subtitle: "We design the right combination of cloud, on-site, and hybrid backup for your business needs and budget.",
          className: "mb-12"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: backupTypes.map((bt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 100, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card rounded-xl border border-border p-7 h-full shadow-card",
          "data-ocid": `backup.type.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(bt.icon, { className: "w-6 h-6 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full", children: bt.badge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg mb-2", children: bt.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: bt.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: bt.points.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: pt })
            ] }, pt)) })
          ]
        }
      ) }, bt.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "backup.recovery_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Recovery Capabilities",
              title: "Recover Fast — Whatever the Scenario",
              subtitle: "From a single accidentally deleted file to a full ransomware incident — we have the right recovery process ready.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: recoveryCapabilities.map((cap, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl p-6 border border-border h-full shadow-card",
              "data-ocid": `backup.recovery.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(cap.icon, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-2 text-sm", children: cap.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: cap.desc })
              ]
            }
          ) }, cap.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "backup.security_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: "Security & Compliance" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-2xl mb-5", children: "Enterprise Security, SMB Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6", children: "Our backup solutions meet the security and compliance requirements of Australian healthcare, legal, and financial services businesses — not just broad-brush SMB needs." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: securityPoints.map((pt, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-3 bg-card rounded-lg p-4 border border-border",
                "data-ocid": `backup.security.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: pt.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: pt.detail })
                  ] })
                ]
              },
              pt.label
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "right", className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-7 shadow-elevated", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg", children: "We Test Your Backups" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: "Most businesses believe they're protected — until disaster strikes and they discover their backups haven't been working for months." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "A backup that hasn't been tested isn't a backup." }),
                " ",
                "We perform regular restore tests so you have documented proof that your data can actually be recovered."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5 mb-6", children: [
                "Quarterly restore tests included",
                "Written test reports provided",
                "Alert you to any backup failures immediately",
                "Monthly backup health summary"
              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: item })
              ] }, item)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CTAButton,
                {
                  label: "Check My Current Backups",
                  href: "/free-it-audit",
                  variant: "secondary",
                  showArrow: true,
                  "data-ocid": "backup.test_cta"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground mb-1", children: "Not sure if your current backup is working?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Book a free IT audit and we'll review your current backup setup and identify any gaps or risks — no obligation." })
            ] })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16", "data-ocid": "backup.cta_banner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl mb-4", children: "Don't Wait for Disaster to Strike" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8", children: "Get a free backup assessment and discover exactly how protected your business data is — and what gaps need to be closed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Get Backup Plan",
            href: "/contact",
            variant: "primary",
            showArrow: true,
            "data-ocid": "backup.bottom_cta"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Free IT Audit",
            href: "/free-it-audit",
            variant: "outline",
            "data-ocid": "backup.bottom_audit_cta"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  BackupRecoveryPage
};
