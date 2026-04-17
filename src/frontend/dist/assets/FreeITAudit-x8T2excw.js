import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, C as Clock, B as Button, L as Link } from "./index-C_4JYRI7.js";
import { B as Badge } from "./badge-CNP9DWOx.js";
import { C as Card, a as CardContent } from "./card-CX3JSG1C.js";
import { I as Input } from "./input--gcXmeYy.js";
import { u as useActor, L as Label, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, T as Textarea, e as createActor } from "./backend-D-1A2tK6.js";
import { S as Separator } from "./separator-4ycmBCmN.js";
import { u as ue } from "./index-DhEDnxwQ.js";
import { a as AnimatedSection, A as ArrowRight } from "./CTAButton-Bel-hiN6.js";
import { P as PageHero } from "./PageHero-CMMmYxvV.js";
import { S as SectionHeading } from "./SectionHeading-sSRQvpa5.js";
import { C as CircleCheck } from "./circle-check-C_vgD0-t.js";
import { N as Network } from "./network-BwEtEMnc.js";
import { H as HardDrive } from "./hard-drive-DGnWFQfh.js";
import { C as ChartColumn } from "./chart-column-D_m62Z9s.js";
import { m as motion } from "./proxy-n-Hon7jR.js";
import { S as Shield } from "./shield-CPnuuYmH.js";
import { F as FileText } from "./file-text-Ch6hBD2l.js";
import { S as Star } from "./star-ClAdH3UP.js";
import "./index-BnXQfpIr.js";
import "./index-DvZw9zcF.js";
import "./index-BwSjJFUb.js";
import "./chevron-up-D3jqohJj.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const ClipboardList = createLucideIcon("clipboard-list", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
const emptyForm = {
  contactName: "",
  companyName: "",
  email: "",
  phone: "",
  industry: "",
  itChallenges: "",
  preferredAuditDate: ""
};
const auditCategories = [
  {
    icon: Network,
    title: "Network Security Assessment",
    description: "We examine your firewall configuration, network segmentation, Wi-Fi security, and access controls to identify vulnerabilities before attackers do.",
    items: [
      "Firewall & router audit",
      "Wi-Fi security check",
      "Network access controls",
      "VPN & remote access review"
    ]
  },
  {
    icon: ClipboardList,
    title: "Device & Software Audit",
    description: "Full inventory of all hardware and software across your organisation — including unlicensed software, end-of-life devices, and outdated operating systems.",
    items: [
      "Hardware inventory & health",
      "Software licensing check",
      "OS & patch status",
      "End-of-life device flagging"
    ]
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery Review",
    description: "We test your backup processes and verify recovery procedures to ensure your data is truly protected in the event of hardware failure, ransomware, or accidental deletion.",
    items: [
      "Backup frequency & integrity",
      "Recovery time objectives",
      "Offsite & cloud backup check",
      "Disaster recovery readiness"
    ]
  },
  {
    icon: ChartColumn,
    title: "Performance & Efficiency Report",
    description: "Identify bottlenecks, inefficient workflows, and opportunities to reduce costs — from internet speeds to cloud usage and software duplication.",
    items: [
      "Internet & bandwidth analysis",
      "Cloud cost optimisation",
      "Workflow efficiency review",
      "Upgrade recommendations"
    ]
  }
];
const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Book Your Audit",
    description: "Fill out the form below. We'll confirm your preferred date within 24 hours and agree on the scope of the assessment."
  },
  {
    number: "02",
    icon: Shield,
    title: "We Assess Your Systems",
    description: "Our certified technicians conduct a thorough on-site or remote audit — typically 1–2 hours depending on your business size."
  },
  {
    number: "03",
    icon: FileText,
    title: "Receive Your Report",
    description: "Within 3 business days, you'll receive a detailed written report with prioritised findings, risk ratings, and actionable recommendations."
  }
];
const testimonials = [
  {
    quote: "The free IT audit from TechPro was eye-opening. We discovered two critical security gaps we had no idea about. Their report was clear and their recommendations were practical. We've since moved to their Managed IT plan.",
    author: "Dr. Elizabeth Chen",
    role: "Principal, Seaside Medical Practice",
    rating: 5
  },
  {
    quote: "As a retail business, I was sceptical about how useful an IT audit would be. TechPro identified outdated POS software and a major backup gap within the first hour. Completely worth it — and it was free!",
    author: "Marcus Webb",
    role: "Owner, Bloom Boutique Retail",
    rating: 5
  },
  {
    quote: "We've been running on patched-together IT for years. The audit gave us a clear picture of where we stood and a realistic roadmap. TechPro didn't oversell anything — they just told us the truth.",
    author: "Lian Phan",
    role: "Operations Manager, The Grand Hotel Melbourne",
    rating: 5
  }
];
const industryOptions = [
  { value: "retail", label: "Retail & E-commerce" },
  { value: "medical", label: "Medical & Healthcare" },
  { value: "hospitality", label: "Hospitality & Tourism" },
  { value: "tradies", label: "Tradies & Construction" },
  { value: "professional", label: "Professional Services" },
  { value: "education", label: "Education" },
  { value: "other", label: "Other" }
];
function FreeITAuditPage() {
  const [form, setForm] = reactExports.useState(emptyForm);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const { actor } = useActor(createActor);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.contactName || !form.email || !form.companyName) {
      ue.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      if (actor) {
        await actor.submitITAuditRequest({
          contactName: form.contactName,
          companyName: form.companyName,
          email: form.email,
          phone: form.phone,
          industry: form.industry,
          itChallenges: form.itChallenges,
          preferredAuditDate: form.preferredAuditDate
        });
      }
      setSubmitted(true);
      setForm(emptyForm);
      ue.success(
        "IT audit request submitted! We'll contact you within 1 business day to schedule."
      );
    } catch {
      ue.error(
        "Something went wrong. Please try again or call us directly."
      );
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Free IT Audit",
        title: "Discover Hidden Risks in Your Business Technology",
        subtitle: "Our comprehensive free IT audit uncovers security vulnerabilities, performance bottlenecks, and compliance gaps — at absolutely no cost or obligation to you.",
        compact: true,
        ctas: [
          {
            label: "Book Your Free Audit",
            href: "#audit-form",
            variant: "primary"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/5 border-b border-border py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-6", children: [
      "100% Free — No hidden fees",
      "No obligation to purchase",
      "NDA signed before every audit",
      "Written report within 3 days"
    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2 text-sm text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item })
        ]
      },
      item
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "audit.included_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "What's Included",
              title: "A Comprehensive 4-Area IT Review",
              subtitle: "Our audit covers every critical aspect of your business technology — from network security to backup integrity.",
              className: "mb-14"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: auditCategories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Card,
                {
                  className: "h-full shadow-card hover-lift",
                  "data-ocid": `audit.category.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-7", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(cat.icon, { className: "w-6 h-6 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg leading-tight", children: cat.title }) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4", children: cat.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: cat.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-center gap-2 text-sm text-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-primary shrink-0" }),
                          item
                        ]
                      },
                      item
                    )) })
                  ] })
                }
              )
            },
            cat.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "audit.how_it_works_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "How It Works",
              title: "3 Simple Steps to Your Free IT Audit",
              subtitle: "The process is straightforward and designed around your schedule.",
              className: "mb-14"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-0.5 bg-border z-0" }),
            steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.15 },
                className: "relative z-10",
                "data-ocid": `audit.step.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "text-center shadow-card h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center mx-auto mb-5 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(step.icon, { className: "w-7 h-7" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      variant: "outline",
                      className: "mb-3 text-xs font-mono border-primary/30 text-primary",
                      children: [
                        "Step ",
                        step.number
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-3", children: step.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: step.description })
                ] }) })
              },
              step.number
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10", children: [
            { icon: Clock, label: "Duration", value: "1–2 Hours" },
            { icon: Shield, label: "Confidentiality", value: "NDA Signed" },
            {
              icon: FileText,
              label: "Report Delivered",
              value: "Within 3 Days"
            }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-primary/5 border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wider", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground", children: item.value })
            ] })
          ] }) }, item.label)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "audit.testimonials_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "What Businesses Say",
              title: "Real Results from Real Audits",
              subtitle: "Businesses across Australia have used our free IT audit to uncover risks they never knew existed.",
              className: "mb-14"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.1 },
              "data-ocid": `audit.testimonial.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-7 flex flex-col h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex mb-4", children: Array.from({ length: t.rating }, (__, starIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    className: "w-4 h-4 text-accent fill-accent"
                  },
                  `star-${t.author}-${starIdx}`
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-7 h-7 text-primary/30 mb-3 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1 italic", children: [
                  '"',
                  t.quote,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-5 border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-sm", children: t.author }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: t.role })
                ] })
              ] }) })
            },
            t.author
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "audit-form",
        className: "py-20 bg-muted/30",
        "data-ocid": "audit.form_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Book Your Audit",
              title: "Request Your Free IT Audit",
              subtitle: "Fill in the form below and we'll contact you within 1 business day to schedule your free audit at a time that works for you.",
              className: "mb-10"
            }
          ),
          submitted ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: "border-primary/20 bg-primary/5",
              "data-ocid": "audit.success_state",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-10 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-8 h-8 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-xl mb-2", children: "Audit Request Submitted!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-sm mx-auto", children: "Our team will reach out within 1 business day to schedule your free IT audit. Check your email for confirmation." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => setSubmitted(false),
                    "data-ocid": "audit.new_request_button",
                    children: "Submit Another Request"
                  }
                )
              ] })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              className: "space-y-5",
              "data-ocid": "audit.form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "audit-company", children: "Company Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "audit-company",
                        value: form.companyName,
                        onChange: (e) => setForm({ ...form, companyName: e.target.value }),
                        placeholder: "Your Business Pty Ltd",
                        required: true,
                        "data-ocid": "audit.company_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "audit-contact", children: "Contact Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "audit-contact",
                        value: form.contactName,
                        onChange: (e) => setForm({ ...form, contactName: e.target.value }),
                        placeholder: "Jane Smith",
                        required: true,
                        "data-ocid": "audit.name_input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "audit-email", children: "Email Address *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "audit-email",
                        type: "email",
                        value: form.email,
                        onChange: (e) => setForm({ ...form, email: e.target.value }),
                        placeholder: "jane@business.com.au",
                        required: true,
                        "data-ocid": "audit.email_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "audit-phone", children: "Phone Number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "audit-phone",
                        value: form.phone,
                        onChange: (e) => setForm({ ...form, phone: e.target.value }),
                        placeholder: "(03) 9000 1234",
                        "data-ocid": "audit.phone_input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Industry" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: form.industry,
                        onValueChange: (v) => setForm({ ...form, industry: v }),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "audit.industry_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select industry" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: industryOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: opt.value, children: opt.label }, opt.value)) })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "audit-date", children: "Preferred Audit Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "audit-date",
                        type: "date",
                        value: form.preferredAuditDate,
                        onChange: (e) => setForm({
                          ...form,
                          preferredAuditDate: e.target.value
                        }),
                        "data-ocid": "audit.date_input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "audit-challenges", children: [
                    "Current IT Challenges",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      id: "audit-challenges",
                      value: form.itChallenges,
                      onChange: (e) => setForm({ ...form, itChallenges: e.target.value }),
                      placeholder: "Describe any current IT issues, concerns, or things you'd like us to focus on during the audit...",
                      rows: 4,
                      "data-ocid": "audit.challenges_textarea"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    disabled: submitting,
                    className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base py-5",
                    "data-ocid": "audit.submit_button",
                    children: submitting ? "Submitting..." : "Request Free IT Audit"
                  }
                ),
                submitting && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-center text-sm text-muted-foreground",
                    "data-ocid": "audit.loading_state",
                    children: "Submitting your request..."
                  }
                )
              ]
            }
          ) }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-primary text-primary-foreground",
        "data-ocid": "audit.managed_it_cta",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container text-center max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "mb-5 border-primary-foreground/30 text-primary-foreground/80",
                  children: "After Your Audit"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl mb-4", children: "Take the Next Step with Managed IT Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg mb-8 leading-relaxed", children: "Once you know the state of your IT, our Managed IT Services plan ensures every recommendation is actioned and your business stays protected, performant, and future-ready — for a fixed monthly fee." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services/managed-it", "data-ocid": "audit.managed_it_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold",
                    "data-ocid": "audit.managed_it_button",
                    children: [
                      "Explore Managed IT Services",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", "data-ocid": "audit.pricing_link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
                    "data-ocid": "audit.pricing_button",
                    children: "View Pricing Plans"
                  }
                ) })
              ] })
            ]
          }
        ) })
      }
    )
  ] });
}
export {
  FreeITAuditPage
};
