import { j as jsxRuntimeExports } from "./index-C_4JYRI7.js";
import { a as AnimatedSection, C as CTAButton } from "./CTAButton-Bel-hiN6.js";
function PageHero({
  label,
  title,
  subtitle,
  ctas = [],
  compact = false,
  bgImage
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: `relative ${compact ? "py-14 md:py-20" : "py-20 md:py-28"} bg-primary overflow-hidden`,
      style: bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      } : {},
      "data-ocid": "page.hero",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/85 mix-blend-multiply" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-10",
            style: {
              backgroundImage: "radial-gradient(circle at 25% 50%, oklch(0.8 0.1 60) 0%, transparent 50%), radial-gradient(circle at 75% 20%, oklch(0.9 0.05 200) 0%, transparent 40%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
          label && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold tracking-wide uppercase mb-4", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: `font-display font-bold text-primary-foreground tracking-tight ${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl lg:text-6xl"} max-w-3xl leading-tight mb-4`,
              children: title
            }
          ),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8", children: subtitle }),
          ctas.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: ctas.map((cta, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CTAButton,
            {
              label: cta.label,
              href: cta.href,
              variant: cta.variant || (i === 0 ? "primary" : "outline"),
              showArrow: i === 0,
              "data-ocid": `hero.cta_${i + 1}`
            },
            cta.href
          )) })
        ] }) })
      ]
    }
  );
}
export {
  PageHero as P
};
