import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, p as pageContent, s as siteConfig, C as Clock } from "./index-C_4JYRI7.js";
import { B as Badge } from "./badge-CNP9DWOx.js";
import { C as Card, a as CardContent } from "./card-CX3JSG1C.js";
import { A as ArrowRight, a as AnimatedSection, C as CTAButton } from "./CTAButton-Bel-hiN6.js";
import { S as SectionHeading } from "./SectionHeading-sSRQvpa5.js";
import { H as HardDrive } from "./hard-drive-DGnWFQfh.js";
import { C as CreditCard } from "./credit-card-BUkbnrzd.js";
import { S as Shield } from "./shield-CPnuuYmH.js";
import { H as Headphones } from "./headphones-CuBIodEC.js";
import { W as Wrench } from "./wrench-D2XoZoHd.js";
import { G as Globe } from "./globe-DDYx5g5-.js";
import { A as Award } from "./award-DIYHmrOz.js";
import { U as Users } from "./users-CcCtmHAD.js";
import { S as ShieldCheck } from "./shield-check-ClDGAjZ1.js";
import { C as CircleCheck } from "./circle-check-C_vgD0-t.js";
import { S as Star } from "./star-ClAdH3UP.js";
import { B as BookOpen } from "./book-open-DQeIHAqp.js";
import { T as TrendingUp } from "./trending-up-Bk1M9kxI.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode);
const iconMap = {
  Globe,
  Wrench,
  Headphones,
  Shield,
  CreditCard,
  HardDrive
};
function ServiceCard({
  title,
  description,
  icon,
  href,
  badge,
  index = 0
}) {
  const Icon = iconMap[icon] ?? Globe;
  const content = /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: "h-full hover-lift border-border bg-card group cursor-pointer",
      "data-ocid": `service.card.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-base leading-tight", children: title }),
            badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs shrink-0", children: badge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: description }),
          href && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-3 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity", children: [
            "Learn More ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] })
        ] })
      ] }) })
    }
  );
  if (href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: href, children: content });
  }
  return content;
}
const { home } = pageContent;
const whyStats = [
  {
    icon: Award,
    value: "12+",
    label: "Years Experience",
    sublabel: "Serving Australian SMBs since 2012"
  },
  {
    icon: Users,
    value: "500+",
    label: "Businesses Helped",
    sublabel: "Across all major Australian cities"
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Uptime Guarantee",
    sublabel: "Industry-leading reliability SLA"
  },
  {
    icon: Clock,
    value: "<1hr",
    label: "Response Time",
    sublabel: "For all critical IT issues"
  }
];
const whyPoints = [
  "No lock-in contracts — earn your business every month",
  "Certified across Windows, macOS, iOS, and Android",
  "Transparent pricing — no hidden fees or surprise bills",
  "Australian-owned and locally operated since 2012",
  "Dedicated account manager for every client"
];
const industryEmoji = {
  tradies: "🔧",
  retail: "🛍️",
  medical: "🏥",
  hospitality: "🍽️"
};
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative bg-primary overflow-hidden min-h-[600px] flex items-center",
        "data-ocid": "home.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center",
              style: {
                backgroundImage: "url(/assets/generated/hero-it-services.dim_1400x700.jpg)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(to right, oklch(0.18 0.015 230 / 0.92) 0%, oklch(0.18 0.015 230 / 0.75) 40%, oklch(0.18 0.015 230 / 0.3) 65%, transparent 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                backgroundImage: "radial-gradient(ellipse at 10% 70%, oklch(0.75 0.18 60 / 0.15) 0%, transparent 40%), radial-gradient(ellipse at 80% 20%, oklch(0.55 0.12 200 / 0.15) 0%, transparent 40%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative z-10 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent/20 text-accent border-0 text-sm font-semibold tracking-wide mb-5", children: home.hero.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-primary-foreground text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-3xl mb-6", children: "Professional IT and Web Solutions for Australian Businesses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-10", children: "Helping small and medium Australian businesses thrive online and with technology — from custom websites to fully managed IT infrastructure." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CTAButton,
                {
                  label: "Get Free Consultation",
                  href: "/contact",
                  variant: "primary",
                  showArrow: true,
                  "data-ocid": "home.hero_primary_cta"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CTAButton,
                {
                  label: "Explore Services",
                  href: "/services",
                  variant: "outline",
                  "data-ocid": "home.hero_secondary_cta"
                }
              )
            ] })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-card border-y border-border",
        "data-ocid": "home.trust_bar",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground", children: [
          "✅ Australian-Owned Business",
          "⚡ <1-Hour Critical Response",
          "🔒 99.9% Uptime SLA",
          "🚫 No Lock-In Contracts",
          "🎓 Certified Technicians"
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: item }, item)) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "home.services_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "What We Do",
              title: "Comprehensive IT & Web Services",
              subtitle: "Everything your Australian business needs to stay connected, secure, and growing online.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: siteConfig.services.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ServiceCard,
            {
              title: service.title,
              description: service.shortDescription,
              icon: service.icon,
              href: service.href,
              index: i
            }
          ) }, service.slug)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            CTAButton,
            {
              label: "View All Services",
              href: "/services",
              variant: "secondary",
              showArrow: true,
              "data-ocid": "home.view_all_services_button"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", "data-ocid": "home.why_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          label: "Why TechPro Services",
          title: "Local Experts Who Actually Show Up",
          subtitle: "We're not a call centre. We're a Melbourne-based team that knows Australian businesses — from the NBN to the GST.",
          className: "mb-12"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14", children: whyStats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "text-center border-border bg-card hover-lift",
          "data-ocid": `home.stat_card.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-3xl md:text-4xl text-primary mb-1", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-foreground mb-1", children: stat.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground leading-snug", children: stat.sublabel })
          ] })
        }
      ) }, stat.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-xl mb-5", children: "What makes us different" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: whyPoints.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-3 text-sm text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
                point
              ]
            },
            point
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CTAButton,
              {
                label: "About Us",
                href: "/about",
                variant: "secondary",
                showArrow: true,
                "data-ocid": "home.about_cta"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CTAButton,
              {
                label: "Free IT Audit",
                href: "/free-it-audit",
                variant: "outline",
                "data-ocid": "home.free_audit_cta"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AnimatedSection,
          {
            direction: "right",
            className: "grid grid-cols-2 gap-4",
            children: siteConfig.industries.map((industry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: industry.href,
                className: "bg-card rounded-xl p-5 border border-border hover-lift text-center group",
                "data-ocid": `home.industry_mini.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", children: industryEmoji[industry.slug] ?? "💼" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors", children: industry.title })
                ]
              },
              industry.slug
            ))
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "home.industries_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Industry Verticals",
              title: "Tailored for Your Industry",
              subtitle: "We understand the unique challenges of Australian businesses across key sectors.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", children: siteConfig.industries.map((industry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnimatedSection,
            {
              delay: i * 80,
              direction: "up",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: industry.href,
                  className: "bg-card rounded-xl p-6 border border-border hover-lift group block h-full",
                  "data-ocid": `home.industry_link.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: industryEmoji[industry.slug] ?? "💼" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2", children: industry.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: industry.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-primary font-medium", children: [
                      "Learn More ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                    ] })
                  ]
                }
              )
            },
            industry.slug
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "home.testimonials_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Client Stories",
              title: "Trusted by Australian Businesses",
              subtitle: "See how we've helped businesses like yours transform their technology.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: home.testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 100, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl p-6 border border-border h-full flex flex-col shadow-card",
              "data-ocid": `home.testimonial.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-4", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    className: "w-4 h-4 fill-accent text-accent"
                  },
                  s
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1 mb-5 italic", children: [
                  '"',
                  t.quote,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-foreground", children: t.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs shrink-0", children: t.industry })
                ] })
              ]
            }
          ) }, t.name)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", "data-ocid": "home.blog_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            label: "Resources & Insights",
            title: "Latest from Our Blog",
            subtitle: "Practical IT and web tips for Australian businesses.",
            align: "left",
            className: "mb-0"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "View All Posts",
            href: "/blog",
            variant: "outline",
            showArrow: true,
            "data-ocid": "home.blog_view_all"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: pageContent.blog.posts.slice(0, 3).map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 80, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/blog",
          className: "bg-card rounded-xl border border-border hover-lift group block h-full overflow-hidden",
          "data-ocid": `home.blog_post.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 h-40 flex items-center justify-center text-4xl border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-10 h-10 text-primary/30" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: post.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3 h-3" }),
                  post.date
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground group-hover:text-primary transition-colors text-base leading-snug mb-2", children: post.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4", children: post.excerpt }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-primary font-medium", children: [
                "Read More ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ] })
            ] })
          ]
        }
      ) }, post.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative bg-primary py-20 overflow-hidden",
        "data-ocid": "home.cta_banner",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-15 pointer-events-none",
              style: {
                backgroundImage: "radial-gradient(ellipse at 30% 50%, oklch(0.75 0.18 60) 0%, transparent 45%), radial-gradient(ellipse at 75% 60%, oklch(0.6 0.12 200) 0%, transparent 40%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative z-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold tracking-wide uppercase mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
              " Let's Get Started"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl md:text-4xl lg:text-5xl tracking-tight mb-5", children: "Ready to Transform Your Business?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10", children: "Book a free IT audit or 30-minute consultation and discover how TechPro Services can take your business to the next level." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CTAButton,
                {
                  label: "Free IT Audit",
                  href: "/free-it-audit",
                  variant: "primary",
                  showArrow: true,
                  "data-ocid": "home.bottom_cta_audit"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CTAButton,
                {
                  label: "Book Consultation",
                  href: "/contact",
                  variant: "outline",
                  "data-ocid": "home.bottom_cta_contact"
                }
              )
            ] })
          ] }) })
        ]
      }
    )
  ] });
}
export {
  HomePage
};
