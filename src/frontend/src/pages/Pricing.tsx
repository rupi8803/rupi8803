import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HardDrive,
  Monitor,
  Phone,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { CTAButton } from "../components/ui/CTAButton";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeading } from "../components/ui/SectionHeading";

// ─── Website Packages ─────────────────────────────────────────────────────────

const websitePackages = [
  {
    name: "Starter",
    price: "From $1,500",
    period: "one-time",
    description:
      "Get your business online with a clean, professional 5-page website.",
    features: [
      "5-page responsive website",
      "WordPress, Wix, or Squarespace",
      "Mobile-optimised design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month post-launch support",
    ],
    cta: "Get Quote",
    highlighted: false,
  },
  {
    name: "Business",
    price: "From $2,500",
    period: "one-time",
    description:
      "Up to 10 pages with SEO, analytics, and social integration for growing businesses.",
    features: [
      "Up to 10 pages",
      "WordPress or Shopify",
      "Advanced SEO foundations",
      "Google Analytics setup",
      "Social media integration",
      "Blog / news section",
      "3 months post-launch support",
    ],
    cta: "Get Quote",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "From $4,500",
    period: "one-time",
    description:
      "Custom design, unlimited pages, e-commerce, and ongoing strategic support.",
    features: [
      "Unlimited pages",
      "100% custom design",
      "Full e-commerce capability",
      "CRM integration",
      "Performance optimisation",
      "Training included",
      "6 months dedicated support",
    ],
    cta: "Get Quote",
    highlighted: false,
  },
];

// ─── Website Maintenance Plans ────────────────────────────────────────────────

const maintenancePlans = [
  {
    name: "Basic",
    price: "$50",
    period: "/month",
    description: "Essential maintenance to keep your site safe and up-to-date.",
    features: [
      "Monthly CMS & plugin updates",
      "Security scans",
      "Automated backups",
      "Uptime monitoring",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$120",
    period: "/month",
    description:
      "Everything in Basic plus performance tuning and 30 min/mo content updates.",
    features: [
      "Everything in Basic",
      "Performance optimisation",
      "30 min/mo content updates",
      "Monthly health report",
      "Priority email support",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$250",
    period: "/month",
    description:
      "Full-service maintenance with priority support and monthly strategy calls.",
    features: [
      "Everything in Standard",
      "2 hrs/mo content updates",
      "Priority phone support",
      "Monthly strategy call",
      "Emergency response",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

// ─── IT Support Plans ─────────────────────────────────────────────────────────

const itPlans = [
  {
    name: "Pay As You Go",
    price: "$150",
    period: "/hr",
    description:
      "No commitment. Pay only when you need help — billed in 30-min increments.",
    features: [
      "Remote & on-site support",
      "No lock-in contract",
      "Business hours",
      "Billed in 30-min increments",
    ],
    cta: "Get Support",
    highlighted: false,
  },
  {
    name: "Business Support",
    price: "$200",
    period: "/month",
    description:
      "2 included hours per month, priority response, and remote support included.",
    features: [
      "2 hours included/month",
      "Priority response time",
      "Remote support",
      "Help desk access",
      "Unused hours roll over (1 month)",
    ],
    cta: "Select Plan",
    highlighted: true,
  },
  {
    name: "Managed IT",
    price: "From $350",
    period: "/mo per user",
    description:
      "Fully proactive IT management — all support included, unlimited remote.",
    features: [
      "Unlimited remote support",
      "Proactive monitoring",
      "On-site visits included",
      "All IT management",
      "Strategic guidance",
      "Compliance management",
    ],
    cta: "Get Quote",
    highlighted: false,
  },
];

// ─── Add-on Pricing ───────────────────────────────────────────────────────────

const addOns = [
  {
    icon: ShoppingCart,
    title: "POS Solutions",
    items: [
      { label: "Hardware setup (basic)", price: "From $800" },
      { label: "Monthly software licence", price: "From $50/mo" },
      { label: "Setup, config & training", price: "From $300" },
    ],
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery",
    items: [
      { label: "Cloud backup (50 GB)", price: "From $30/mo" },
      { label: "Business backup (500 GB + monitoring)", price: "From $80/mo" },
      {
        label: "Enterprise (2 TB + compliance reporting)",
        price: "From $150/mo",
      },
    ],
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What are your payment terms?",
    a: "Website projects are structured as 50% upfront and 50% on completion. Monthly plans are billed monthly in advance via bank transfer or card. Invoices are issued on the 1st of each month.",
  },
  {
    q: "What's included in the website packages?",
    a: "All website packages include mobile-responsive design, basic on-page SEO, a contact form, and post-launch support. Higher tiers include additional pages, e-commerce capability, Google Analytics, and longer support periods.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can upgrade your website maintenance or IT support plan at any time. Upgrades take effect from the next billing cycle with no penalty or lock-in.",
  },
  {
    q: "Are there any lock-in contracts?",
    a: "No. All monthly plans are month-to-month with 30 days notice to cancel. We earn your business every month — we don't hold you to long-term contracts.",
  },
  {
    q: "Do you offer discounts for bundled services?",
    a: "Yes. Businesses that combine website, IT support, and maintenance services typically receive 10–15% off individual service pricing. Contact us to discuss a bundled quote.",
  },
];

// ─── Price Card Component ─────────────────────────────────────────────────────

interface PriceCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badgeLabel?: string;
  ocid: string;
  ctaOcid: string;
}

function PriceCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted,
  badgeLabel,
  ocid,
  ctaOcid,
}: PriceCardProps) {
  return (
    <div
      className={`rounded-2xl p-7 h-full flex flex-col relative border ${
        highlighted
          ? "bg-primary text-primary-foreground border-primary shadow-elevated"
          : "bg-card border-border"
      }`}
      data-ocid={ocid}
    >
      {highlighted && badgeLabel && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground border-0 px-3 py-1 whitespace-nowrap">
          {badgeLabel}
        </Badge>
      )}
      <div
        className={`font-display font-bold text-2xl mb-1 ${highlighted ? "text-primary-foreground" : "text-foreground"}`}
      >
        {name}
      </div>
      <p
        className={`text-sm mb-5 ${highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}
      >
        {description}
      </p>
      <div className="mb-6">
        <span
          className={`font-display font-bold text-3xl ${highlighted ? "text-primary-foreground" : "text-foreground"}`}
        >
          {price}
        </span>
        {period && (
          <span
            className={`text-sm ml-1 ${highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}
          >
            {period}
          </span>
        )}
      </div>
      <ul className="space-y-2.5 flex-1 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <CheckCircle2
              className={`w-4 h-4 mt-0.5 shrink-0 ${highlighted ? "text-accent" : "text-primary"}`}
            />
            <span
              className={
                highlighted
                  ? "text-primary-foreground/90"
                  : "text-muted-foreground"
              }
            >
              {f}
            </span>
          </li>
        ))}
      </ul>
      <CTAButton
        label={cta}
        href="/contact"
        variant={highlighted ? "primary" : "outline"}
        data-ocid={ctaOcid}
      />
    </div>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border rounded-xl overflow-hidden"
      data-ocid={`pricing.faq.${index + 1}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between bg-card hover:bg-muted/30 transition-colors"
        aria-expanded={open}
        data-ocid={`pricing.faq_toggle.${index + 1}`}
      >
        <span className="font-display font-semibold text-foreground text-sm md:text-base pr-4">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-card border-t border-border">
          <p className="text-sm text-muted-foreground leading-relaxed pt-4">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing & Packages"
        title="Transparent Pricing — No Surprises, Just Value"
        subtitle="Flat-rate packages and flexible monthly plans for every stage of business growth. No hidden fees, no lock-in contracts."
        ctas={[
          { label: "Get Free Quote", href: "/contact", variant: "primary" },
          { label: "Book Consultation", href: "/contact", variant: "outline" },
        ]}
      />

      {/* Website Packages */}
      <section
        className="py-20 bg-background"
        data-ocid="pricing.website_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Website Packages"
              title="Professional Websites for Every Budget"
              subtitle="One-time investment, lasting results. All packages include mobile-responsive design and basic on-page SEO."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {websitePackages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 80} direction="up">
                <PriceCard
                  {...pkg}
                  badgeLabel="Most Popular"
                  ocid={`pricing.website_plan.${i + 1}`}
                  ctaOcid={`pricing.website_cta.${i + 1}`}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Website Maintenance */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="pricing.maintenance_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Website Maintenance"
              title="Keep Your Site Secure & Up-to-Date"
              subtitle="Your website needs ongoing care. Our maintenance plans cover updates, backups, security, and content edits."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {maintenancePlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 80} direction="up">
                <PriceCard
                  {...plan}
                  badgeLabel="Best Value"
                  ocid={`pricing.maintenance_plan.${i + 1}`}
                  ctaOcid={`pricing.maintenance_cta.${i + 1}`}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* IT Support Plans */}
      <section
        className="py-20 bg-background"
        data-ocid="pricing.it_plans_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="IT Support Plans"
              title="Managed IT for Australian Businesses"
              subtitle="Month-to-month plans. No lock-in contracts. Cancel anytime with 30 days notice."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {itPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 80} direction="up">
                <PriceCard
                  {...plan}
                  badgeLabel="Best Value"
                  ocid={`pricing.it_plan.${i + 1}`}
                  ctaOcid={`pricing.it_plan_cta.${i + 1}`}
                />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Managed IT pricing is per user. Volume discounts available for 10+
              users.{" "}
              <a
                href="/contact"
                className="text-primary hover:underline font-medium"
              >
                Contact us for a custom quote.
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-muted/30" data-ocid="pricing.addons_section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Add-on Services"
              title="POS Solutions & Backup & Recovery"
              subtitle="Transparent pricing for our specialist add-on services. All quotes are obligation-free."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, ai) => (
              <AnimatedSection
                key={addon.title}
                delay={ai * 100}
                direction="up"
              >
                <div
                  className="bg-card rounded-2xl border border-border p-8 shadow-card"
                  data-ocid={`pricing.addon_card.${ai + 1}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <addon.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-5">
                    {addon.title}
                  </h3>
                  <div className="space-y-3">
                    {addon.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between py-3 border-b border-border last:border-0"
                      >
                        <span className="text-sm text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="font-display font-semibold text-foreground text-sm whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <CTAButton
                      label="Get Quote"
                      href="/contact"
                      variant="outline"
                      data-ocid={`pricing.addon_cta.${ai + 1}`}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Callout */}
      <section
        className="py-14 bg-background"
        data-ocid="pricing.custom_quote_section"
      >
        <div className="container">
          <AnimatedSection direction="fade">
            <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center shadow-card">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Monitor className="w-7 h-7 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground text-xl mb-2">
                  Large or Complex Project?
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Enterprise and large-scale projects always receive a fully
                  custom quote. We don't apply pricing tiers to complex
                  requirements — we scope the work properly and price it fairly.
                  Contact us to start the conversation.
                </p>
              </div>
              <div className="shrink-0">
                <CTAButton
                  label="Request Custom Quote"
                  href="/contact"
                  variant="secondary"
                  showArrow
                  data-ocid="pricing.custom_quote_cta"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30" data-ocid="pricing.faq_section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Common Questions"
              title="Pricing FAQ"
              subtitle="Answers to the questions we hear most from prospective clients."
              className="mb-10"
            />
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 60} direction="up">
                <FaqItem q={faq.q} a={faq.a} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-16" data-ocid="pricing.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl md:text-4xl mb-4">
              Not Sure Which Plan?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Book a free consultation and we'll recommend the right package for
              your business size and budget — with no obligation.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <CTAButton
                label="Get a Quote"
                href="/contact"
                variant="primary"
                showArrow
                data-ocid="pricing.bottom_cta_quote"
              />
              <CTAButton
                label="Book Consultation"
                href="/contact"
                variant="outline"
                data-ocid="pricing.bottom_cta_consult"
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 text-primary-foreground/70 text-sm">
              <Phone className="w-4 h-4" />
              <span>
                Or call us:{" "}
                <a
                  href="tel:0390001234"
                  className="text-primary-foreground font-semibold hover:underline"
                >
                  (03) 9000 1234
                </a>
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
