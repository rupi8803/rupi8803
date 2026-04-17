import { j as jsxRuntimeExports, s as siteConfig, L as Link } from "./index-j41ECiun.js";
import { a as AnimatedSection, A as ArrowRight, C as CTAButton } from "./CTAButton-DHNNlx56.js";
import { P as PageHero } from "./PageHero-BgH_GaHd.js";
import { S as SectionHeading } from "./SectionHeading-DtkVSTKL.js";
function IndustriesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Industry Solutions",
        title: "IT & Web Solutions Built for Your Industry",
        subtitle: "We understand that every industry has unique challenges. Our tailored solutions address the specific needs of Australian businesses across key sectors.",
        ctas: [
          {
            label: "Get Industry-Specific Advice",
            href: "/contact",
            variant: "primary"
          },
          { label: "Free Consultation", href: "/contact", variant: "outline" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "industries.list_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Industries We Serve",
              title: "Specialised Expertise Across Key Sectors",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: siteConfig.industries.map((industry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnimatedSection,
            {
              delay: i * 80,
              direction: "up",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: industry.href,
                  className: "bg-card rounded-2xl p-8 border border-border hover-lift group block",
                  "data-ocid": `industries.card.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: industry.slug === "tradies" ? "🔧" : industry.slug === "retail" ? "🛍️" : industry.slug === "medical" ? "🏥" : "🍽️" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-xl group-hover:text-primary transition-colors mb-2", children: industry.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-4", children: industry.description }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-primary font-semibold", children: [
                        "Explore Solutions ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                      ] })
                    ] })
                  ] })
                }
              )
            },
            industry.slug
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16", "data-ocid": "industries.cta_banner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl mb-4", children: "Don't See Your Industry?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8", children: "We work with businesses across all sectors. Contact us to discuss your specific requirements." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CTAButton,
        {
          label: "Talk to an Expert",
          href: "/contact",
          variant: "primary",
          showArrow: true,
          "data-ocid": "industries.bottom_cta"
        }
      )
    ] }) }) })
  ] });
}
export {
  IndustriesPage
};
