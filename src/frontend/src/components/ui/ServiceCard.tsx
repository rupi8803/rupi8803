import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CreditCard,
  Globe,
  HardDrive,
  Headphones,
  Shield,
  Wrench,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Wrench,
  Headphones,
  Shield,
  CreditCard,
  HardDrive,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href?: string;
  badge?: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  badge,
  index = 0,
}: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Globe;

  const content = (
    <Card
      className="h-full hover-lift border-border bg-card group cursor-pointer"
      data-ocid={`service.card.${index + 1}`}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-display font-semibold text-foreground text-base leading-tight">
                {title}
              </h3>
              {badge && (
                <Badge variant="secondary" className="text-xs shrink-0">
                  {badge}
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
            {href && (
              <div className="flex items-center gap-1 mt-3 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  }
  return content;
}
