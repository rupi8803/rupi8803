import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "outline-white";
  showArrow?: boolean;
  className?: string;
  "data-ocid"?: string;
}

export function CTAButton({
  label,
  href,
  variant = "primary",
  showArrow = false,
  className = "",
  "data-ocid": ocid,
}: CTAButtonProps) {
  const variantClasses = {
    primary:
      "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm font-semibold",
    secondary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm font-semibold",
    outline:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground font-semibold",
    "outline-white":
      "border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary font-semibold",
  };

  return (
    <Button
      asChild
      className={`${variantClasses[variant]} ${className}`}
      data-ocid={ocid}
    >
      <Link to={href} className="flex items-center gap-2">
        {label}
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </Link>
    </Button>
  );
}
