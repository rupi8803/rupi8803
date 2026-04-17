import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CreditCard,
  Globe,
  HardDrive,
  Headphones,
  Package,
  Shield,
  ShoppingBag,
  TrendingUp,
  Wifi,
} from "lucide-react";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { CTAButton } from "../../components/ui/CTAButton";
import { PageHero } from "../../components/ui/PageHero";
import { SectionHeading } from "../../components/ui/SectionHeading";

const challenges = [
  {
    icon: Globe,
    title: "No Online Presence",
    desc: "Customers expect to find and buy from you online — a physical store alone is no longer enough to grow.",
  },
  {
    icon: Package,
    title: "Disconnected Inventory",
    desc: "Managing stock across multiple locations or channels manually leads to overselling, errors, and frustrated customers.",
  },
  {
    icon: CreditCard,
    title: "Outdated POS System",
    desc: "A slow checkout experience, cash-only setup, or unreliable hardware costs you sales and frustrates staff during busy periods.",
  },
  {
    icon: TrendingUp,
    title: "Website Not Converting",
    desc: "Traffic arrives but leaves without buying — poor UX, slow load times, or an outdated design is costing you revenue.",
  },
  {
    icon: HardDrive,
    title: "No Backup When Systems Crash",
    desc: "A single system failure during a peak sales period — like Christmas or EOFY — can cause significant data loss and revenue damage.",
  },
];

const services = [
  {
    icon: Globe,
    title: "E-Commerce Website (Shopify or WooCommerce)",
    desc: "High-converting online stores built on the platforms that power Australian retail — with payment gateways, SEO, and a mobile-first design.",
    href: "/services/web-design",
  },
  {
    icon: CreditCard,
    title: "Modern POS with Inventory Sync",
    desc: "Lightspeed, Square, or Shopify POS systems with real-time inventory sync between your physical store and online shop.",
    href: "/services/pos-solutions",
  },
  {
    icon: Shield,
    title: "Managed IT During Peak Periods",
    desc: "Proactive IT monitoring to keep your systems live during Christmas, EOFY, and other peak retail periods when downtime costs the most.",
    href: "/services/managed-it",
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery for Sales Data",
    desc: "Protect your sales history, customer data, and inventory records with automated daily backups and fast recovery.",
    href: "/services/backup-recovery",
  },
];

export function RetailPage() {
  return (
    <>
      <PageHero
        label="Retail & E-Commerce"
        title="Technology Solutions for Retail — Sell More, Work Smarter, Grow Faster"
        subtitle="From your first online store to managing multiple retail locations — we give Australian retailers the IT and web infrastructure to compete and grow."
        ctas={[
          {
            label: "Get Free Consultation",
            href: "/contact",
            variant: "primary",
          },
          {
            label: "See POS Solutions",
            href: "/services/pos-solutions",
            variant: "outline",
          },
        ]}
      />

      {/* Retail Challenges */}
      <section
        className="py-20 bg-background"
        data-ocid="retail.challenges_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Retail Challenges"
              title="The Problems Holding Retailers Back"
              subtitle="These are the technology challenges we hear from retail businesses every day — and we know exactly how to solve them."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 80} direction="up">
                <div
                  className="bg-card rounded-xl p-6 border border-border h-full shadow-card"
                  data-ocid={`retail.challenge.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                    <c.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="retail.solutions_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="How We Help"
              title="Everything a Modern Retailer Needs"
              subtitle="Whether you're bricks-and-mortar, online-only, or both — TechPro delivers solutions that scale with your growth."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 80} direction="up">
                <Link
                  to={s.href}
                  className="block group h-full"
                  data-ocid={`retail.solution.${i + 1}`}
                >
                  <div className="bg-card rounded-xl p-6 border border-border h-full shadow-card hover-lift">
                    <div className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <s.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-semibold text-foreground mb-2">
                          {s.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {s.desc}
                        </p>
                        <div className="flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          {/* Additional support card */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div
                className="bg-card rounded-xl p-6 border border-border shadow-card"
                data-ocid="retail.support_it"
              >
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      IT Support for POS & Network Issues
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      When your POS freezes during a queue or your network
                      drops, we're on call — remote or on-site, fast.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-card rounded-xl p-6 border border-border shadow-card"
                data-ocid="retail.wifi"
              >
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Wifi className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Store Networking & Customer WiFi
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Reliable in-store networking for POS, EFTPOS, and staff
                      devices — plus optional guest WiFi to improve customer
                      dwell time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-background" data-ocid="retail.story_section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                label="Success Story"
                title="Boutique Store Doubles Online Sales"
                align="left"
                className="mb-6"
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                A boutique clothing store came to TechPro with a basic website
                and no way to sell online. They were losing customers to larger
                retailers with polished online stores.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TechPro launched their Shopify e-commerce store and connected it
                directly to their in-store POS — giving them real-time inventory
                sync, a seamless checkout, and a mobile-first shopping
                experience. Within 6 months, online sales had doubled.
              </p>
              <div className="space-y-2.5 mb-8">
                {[
                  "Online sales doubled within 6 months",
                  "Inventory sync eliminated manual stock updates",
                  "Customer accounts increased repeat purchases",
                  "Abandoned cart recovery added an extra 12% revenue",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "2×", label: "Online sales" },
                  { val: "100%", label: "Inventory sync" },
                  { val: "6 months", label: "To double sales" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="text-center bg-card rounded-xl p-4 border border-border"
                    data-ocid={`retail.stat.${i + 1}`}
                  >
                    <div className="font-display font-bold text-2xl text-primary">
                      {stat.val}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection
              direction="right"
              className="bg-card rounded-2xl border border-border p-8 shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">
                    Retail IT Checklist
                  </div>
                  <div className="text-xs text-muted-foreground">
                    What every modern retailer needs
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Mobile-friendly e-commerce website",
                  "Modern POS with contactless payments",
                  "Real-time inventory sync across channels",
                  "Automated daily data backup",
                  "Managed IT for peak trading periods",
                  "IT support for POS and network issues",
                  "Analytics dashboard connected to Xero",
                  "Customer loyalty and email marketing integration",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <CTAButton
                label="Get Your Retail IT Assessment"
                href="/contact"
                variant="secondary"
                showArrow
                className="mt-6 w-full justify-center"
                data-ocid="retail.checklist_cta"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16" data-ocid="retail.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl mb-4">
              Ready to Grow Your Retail Business?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Book a free consultation and discover how the right technology can
              transform your retail operations — online and in-store.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton
                label="Get Free Consultation"
                href="/contact"
                variant="primary"
                showArrow
                data-ocid="retail.bottom_cta_consult"
              />
              <CTAButton
                label="See POS Solutions"
                href="/services/pos-solutions"
                variant="outline"
                data-ocid="retail.bottom_cta_pos"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
