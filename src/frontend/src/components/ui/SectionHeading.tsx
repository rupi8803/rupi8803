interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {label && (
        <span className="text-label text-accent mb-2 block">{label}</span>
      )}
      <h2 className="font-display font-bold text-foreground text-3xl md:text-4xl tracking-tight leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
