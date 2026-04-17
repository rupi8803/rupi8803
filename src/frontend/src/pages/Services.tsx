import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Globe,
  HardDrive,
  Headphones,
  HelpCircle,
  Shield,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { CTAButton } from "../components/ui/CTAButton";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeading } from "../components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Wrench,
  Headphones,
  Shield,
  CreditCard,
  HardDrive,
};

interface ServiceDetail {
  slug: string;
  title: string;
  icon: string;
  badge?: string;
  description: string;
  features: string[];
  href: string;
}

const servicesData: ServiceDetail[] = [
  {
    slug: "web-design",
    title: "Web Design & Development",
    icon: "Globe",
    badge: "Most Popular",
    description:
      "We build high-performing, visually striking websites on the platforms your business needs — WordPress, Shopify, Wix, and Squarespace. Every site is mobile-first, SEO-ready, and designed to convert visitors into paying customers. Whether you're starting fresh or need a full redesign, we handle everything from strategy through to launch.",
    features: [
      "Custom responsive design",
      "WordPress, Shopify, Wix & Squarespace",
      "SEO foundation & speed optimisation",
      "E-commerce & booking integration",
    ],
    href: "/services/web-design",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    icon: "Wrench",
    description:
      "Your website needs ongoing care to stay secure, fast, and effective. Our maintenance plans cover regular plugin and CMS updates, security patches, performance monitoring, and monthly backups — so you never have to worry. We proactively catch issues before they affect your visitors or your ranking.",
    features: [
      "Regular CMS & plugin updates",
      "Security patches & malware scans",
      "Performance & uptime monitoring",
      "Monthly backups & reporting",
    ],
    href: "/services/website-maintenance",
  },
  {
    slug: "it-support",
    title: "IT Support for Small Business",
    icon: "Headphones",
    description:
      "Fast, friendly IT support for Australian small businesses — available remotely or on-site. We resolve computer issues, network problems, email setup, and device configuration so your team stays productive. No jargon, no long wait times, just practical help from experienced technicians who understand your business.",
    features: [
      "Remote & on-site support",
      "Help desk (business hours)",
      "Device setup & troubleshooting",
      "Network & email configuration",
    ],
    href: "/services/it-support",
  },
  {
    slug: "managed-it",
    title: "Managed IT Services",
    icon: "Shield",
    description:
      "Outsource your entire IT environment to TechPro for a predictable monthly fee. We proactively monitor, maintain, and manage your infrastructure — servers, workstations, cloud services, and security — so issues are prevented before they cause disruption. You get enterprise-grade IT without the cost of an in-house team.",
    features: [
      "24/7 infrastructure monitoring",
      "Proactive maintenance & patching",
      "Cybersecurity & compliance",
      "Dedicated account manager",
    ],
    href: "/services/managed-it",
  },
  {
    slug: "pos-solutions",
    title: "POS Solutions",
    icon: "CreditCard",
    description:
      "We design, deploy, and support point-of-sale systems tailored to retail, hospitality, and service businesses. From single-terminal setups to multi-venue operations, we integrate your POS with inventory, accounting, and reporting tools to streamline operations and reduce admin overhead.",
    features: [
      "POS setup & configuration",
      "Inventory & accounting integration",
      "Staff training & ongoing support",
      "Multi-venue & omnichannel ready",
    ],
    href: "/services/pos-solutions",
  },
  {
    slug: "backup-recovery",
    title: "Backup & Recovery",
    icon: "HardDrive",
    description:
      "Data loss can be catastrophic for any business. Our backup and disaster recovery solutions ensure your critical data is automatically backed up, encrypted, and recoverable — whether it's accidental deletion, ransomware, or hardware failure. We test recovery processes regularly so you know your safety net actually works.",
    features: [
      "Automated daily backups",
      "Encrypted off-site storage",
      "Ransomware & disaster recovery",
      "Regular recovery testing",
    ],
    href: "/services/backup-recovery",
  },
];

const comparisonData = [
  {
    need: "Launch or redesign a website",
    service: "Web Design & Development",
    idealFor: "New businesses, rebrands, e-commerce",
  },
  {
    need: "Keep an existing website healthy",
    service: "Website Maintenance",
    idealFor: "Any business with a live website",
  },
  {
    need: "Fix IT problems as they occur",
    service: "IT Support (Small Business)",
    idealFor: "Small teams under 20 staff",
  },
  {
    need: "Fully managed IT with no surprises",
    service: "Managed IT Services",
    idealFor: "Growing businesses, 5–200 staff",
  },
  {
    need: "Accept payments in-store or at venue",
    service: "POS Solutions",
    idealFor: "Retail, hospitality, service businesses",
  },
  {
    need: "Protect business data & ensure recovery",
    service: "Backup & Recovery",
    idealFor: "All businesses with critical data",
  },
];

export function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Complete IT and Web Solutions for Your Business"
        subtitle="TechPro provides end-to-end technology solutions. Whether you need a new website or full IT infrastructure management, we've got you covered."
        ctas={[
          {
            label: "Get Free Consultation",
            href: "/contact",
            variant: "primary",
          },
          { label: "View Pricing", href: "/pricing", variant: "outline" },
        ]}
      />

      {/* Services Grid */}
      <section
        className="py-20 bg-background"
        data-ocid="services.list_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="What We Offer"
              title="Six Specialist Services, One Trusted Partner"
              subtitle="Choose one service or combine them for a complete technology partnership tailored to your business."
              className="mb-14"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Globe;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  data-ocid={`services.card.${i + 1}`}
                >
                  <Card className="h-full border-border bg-card hover:shadow-md transition-shadow duration-300 group flex flex-col">
                    <CardContent className="p-7 flex flex-col flex-1">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        {service.badge && (
                          <Badge className="bg-accent/15 text-accent border-accent/30 text-xs font-semibold shrink-0">
                            {service.badge}
                          </Badge>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-foreground text-lg leading-snug mb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        to={service.href}
                        data-ocid={`services.learn_more.${i + 1}`}
                      >
                        <Button
                          variant="outline"
                          className="w-full group/btn border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Not Sure Banner */}
      <section
        className="py-16 bg-muted/40 border-y border-border"
        data-ocid="services.not_sure_section"
      >
        <div className="container">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center gap-8 bg-card rounded-2xl border border-border p-8 md:p-10 shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 shrink-0">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-2">
                  Not Sure Where to Start?
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
                  Our Business IT Solutions page is designed for exactly this
                  situation. Browse a combined overview of our services, see how
                  they work together, and let us recommend what fits your
                  business.
                </p>
              </div>
              <div className="shrink-0">
                <CTAButton
                  label="Explore Business IT Solutions"
                  href="/business-it-solutions"
                  variant="secondary"
                  showArrow
                  data-ocid="services.business_it_cta"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison Table */}
      <section
        className="py-20 bg-background"
        data-ocid="services.comparison_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Quick Reference"
              title="Which Service Fits Your Business Need?"
              subtitle="Use this table to quickly match your challenge with the right service."
              className="mb-12"
            />
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="rounded-xl border border-border overflow-hidden shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50">
                    <TableHead className="font-display font-semibold text-foreground w-2/5 py-4 pl-6">
                      Business Need
                    </TableHead>
                    <TableHead className="font-display font-semibold text-foreground w-1/3 py-4">
                      Recommended Service
                    </TableHead>
                    <TableHead className="font-display font-semibold text-foreground py-4 pr-6">
                      Ideal For
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, i) => (
                    <TableRow
                      key={row.service}
                      className="border-border hover:bg-muted/20 transition-colors"
                      data-ocid={`services.comparison.item.${i + 1}`}
                    >
                      <TableCell className="py-4 pl-6 text-foreground font-medium text-sm">
                        {row.need}
                      </TableCell>
                      <TableCell className="py-4">
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary border-0 font-medium text-xs"
                        >
                          {row.service}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-4 pr-6 text-muted-foreground text-sm">
                        {row.idealFor}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-20" data-ocid="services.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold uppercase tracking-wide mb-5">
                Free Consultation
              </div>
              <h2 className="font-display font-bold text-primary-foreground text-3xl md:text-4xl leading-tight mb-4">
                Ready to Transform Your Business Technology?
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Book a free 30-minute consultation and we'll recommend the right
                solution — no obligation, no tech jargon, just honest advice
                tailored to your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <CTAButton
                  label="Book Free Consultation"
                  href="/contact"
                  variant="primary"
                  showArrow
                  data-ocid="services.bottom_cta_primary"
                />
                <CTAButton
                  label="View Pricing Plans"
                  href="/pricing"
                  variant="outline"
                  data-ocid="services.bottom_cta_secondary"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
