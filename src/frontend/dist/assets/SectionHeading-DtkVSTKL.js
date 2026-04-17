import { j as jsxRuntimeExports } from "./index-j41ECiun.js";
function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className = ""
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-2xl ${alignClass} ${className}`, children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-label text-accent mb-2 block", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-3xl md:text-4xl tracking-tight leading-tight mb-3", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base md:text-lg leading-relaxed", children: subtitle })
  ] });
}
export {
  SectionHeading as S
};
