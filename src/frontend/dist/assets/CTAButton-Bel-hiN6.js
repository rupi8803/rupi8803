import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, L as Link } from "./index-C_4JYRI7.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode);
function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up"
}) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  const initialStyles = {
    up: "opacity-0 translate-y-6",
    left: "opacity-0 -translate-x-6",
    right: "opacity-0 translate-x-6",
    fade: "opacity-0"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0 translate-y-0" : initialStyles[direction]} ${className}`,
      children
    }
  );
}
function CTAButton({
  label,
  href,
  variant = "primary",
  showArrow = false,
  className = "",
  "data-ocid": ocid
}) {
  const variantClasses = {
    primary: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm font-semibold",
    secondary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm font-semibold",
    outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground font-semibold",
    "outline-white": "border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary font-semibold"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Button,
    {
      asChild: true,
      className: `${variantClasses[variant]} ${className}`,
      "data-ocid": ocid,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: href, className: "flex items-center gap-2", children: [
        label,
        showArrow && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    }
  );
}
export {
  ArrowRight as A,
  CTAButton as C,
  AnimatedSection as a
};
