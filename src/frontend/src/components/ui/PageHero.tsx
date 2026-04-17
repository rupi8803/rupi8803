import { AnimatedSection } from "./AnimatedSection";
import { CTAButton } from "./CTAButton";

interface HeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  ctas?: HeroCTA[];
  compact?: boolean;
  bgImage?: string;
}

export function PageHero({
  label,
  title,
  subtitle,
  ctas = [],
  compact = false,
  bgImage,
}: PageHeroProps) {
  return (
    <section
      className={`relative ${compact ? "py-14 md:py-20" : "py-20 md:py-28"} bg-primary overflow-hidden`}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
      data-ocid="page.hero"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/85 mix-blend-multiply" />
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, oklch(0.8 0.1 60) 0%, transparent 50%), radial-gradient(circle at 75% 20%, oklch(0.9 0.05 200) 0%, transparent 40%)",
        }}
      />

      <div className="container relative z-10">
        <AnimatedSection>
          {label && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold tracking-wide uppercase mb-4">
              {label}
            </div>
          )}
          <h1
            className={`font-display font-bold text-primary-foreground tracking-tight ${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl lg:text-6xl"} max-w-3xl leading-tight mb-4`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              {subtitle}
            </p>
          )}
          {ctas.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {ctas.map((cta, i) => (
                <CTAButton
                  key={cta.href}
                  label={cta.label}
                  href={cta.href}
                  variant={cta.variant || (i === 0 ? "primary" : "outline")}
                  showArrow={i === 0}
                  data-ocid={`hero.cta_${i + 1}`}
                />
              ))}
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
