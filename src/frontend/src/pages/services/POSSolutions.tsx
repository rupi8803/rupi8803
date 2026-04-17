import {
  BarChart3,
  Building2,
  CheckCircle2,
  Coffee,
  CreditCard,
  HardHat,
  Layers,
  Package,
  Printer,
  Smartphone,
  Store,
  Users,
  Wifi,
} from "lucide-react";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { CTAButton } from "../../components/ui/CTAButton";
import { PageHero } from "../../components/ui/PageHero";
import { SectionHeading } from "../../components/ui/SectionHeading";

const keyFeatures = [
  {
    icon: CreditCard,
    title: "Payment Processing",
    desc: "Accept EFTPOS, contactless tap-and-go, Apple Pay, Google Pay, and all major digital wallets with fast settlement.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    desc: "Real-time stock tracking across all locations. Low-stock alerts, purchase orders, and supplier management built in.",
  },
  {
    icon: BarChart3,
    title: "Sales Reporting",
    desc: "Daily, weekly, and monthly analytics at your fingertips. Identify top products, peak hours, and staff performance.",
  },
  {
    icon: Users,
    title: "Customer Management",
    desc: "Built-in loyalty programs, purchase history, and customer profiles to drive repeat business.",
  },
  {
    icon: Layers,
    title: "Multi-Location Support",
    desc: "Manage multiple venues from a single dashboard. Unified reporting, inventory, and staff management.",
  },
  {
    icon: Smartphone,
    title: "Staff Management",
    desc: "Role-based permissions, shift scheduling, and sales performance tracking per employee.",
  },
];

const industries = [
  {
    icon: Store,
    title: "Retail",
    subtitle: "Clothing, hardware, general retail",
    desc: "From boutique fashion to hardware stores, we configure POS systems that handle complex product catalogues, size/colour variants, and omnichannel inventory synced with your online store.",
    features: [
      "Barcode scanning & label printing",
      "Online/in-store inventory sync",
      "Gift cards and store credit",
      "Customer loyalty programs",
    ],
  },
  {
    icon: Coffee,
    title: "Hospitality",
    subtitle: "Cafés, restaurants, pubs & clubs",
    desc: "Purpose-built hospitality POS with table management, kitchen display systems, split bills, and seamless integration with delivery platforms and bookings.",
    features: [
      "Table management & floor plans",
      "Kitchen display systems",
      "Split bills & tabs",
      "Integration with Uber Eats, DoorDash",
    ],
  },
  {
    icon: HardHat,
    title: "Tradies",
    subtitle: "Invoicing on-the-go",
    desc: "Mobile POS and invoicing solutions for tradespeople — create quotes, accept payments, and manage jobs from any device in the field.",
    features: [
      "Mobile invoicing on iPad/phone",
      "On-site EFTPOS payments",
      "Job and quote management",
      "Xero/MYOB sync for accounting",
    ],
  },
];

const integrations = [
  { name: "Xero", category: "Accounting" },
  { name: "MYOB", category: "Accounting" },
  { name: "WooCommerce", category: "E-commerce" },
  { name: "Shopify", category: "E-commerce" },
  { name: "PayPal", category: "Payments" },
  { name: "Square", category: "Payments" },
  { name: "Uber Eats", category: "Delivery" },
  { name: "Deputy", category: "Workforce" },
];

const hardware = [
  {
    icon: Smartphone,
    name: "iPad Stands & Mounts",
    desc: "Heavy-duty adjustable stands for counter and table-top use.",
  },
  {
    icon: Printer,
    name: "Receipt Printers",
    desc: "Thermal receipt printers — wired, wireless, and kitchen-grade.",
  },
  {
    icon: Wifi,
    name: "Barcode Scanners",
    desc: "Handheld and fixed scanners for fast product lookup.",
  },
  {
    icon: Building2,
    name: "Cash Drawers",
    desc: "Secure, durable cash drawers with automatic open integration.",
  },
];

export function POSSolutionsPage() {
  return (
    <>
      <PageHero
        label="POS Solutions"
        title="Smart Point of Sale Systems for Australian Businesses"
        subtitle="Modern cloud-based POS that handles sales, inventory, and reporting in one place — set up and supported by our team end-to-end."
        ctas={[
          { label: "Get POS Demo", href: "/contact", variant: "primary" },
          { label: "Get a Quote", href: "/contact", variant: "outline" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 bg-background" data-ocid="pos.overview_section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Modern POS Technology
              </span>
              <h2 className="font-display font-bold text-foreground text-3xl lg:text-4xl mb-5 leading-tight">
                One Platform for Sales, Inventory & Reporting
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today's best POS systems are cloud-based, mobile-friendly, and
                deeply integrated with your accounting, e-commerce, and loyalty
                platforms. No more end-of-day data entry — everything syncs
                automatically.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We supply, configure, integrate, and support your POS system
                from day one. Whether you're opening a new business or replacing
                an outdated system, we make the transition seamless.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "POS systems deployed" },
                  { value: "4", label: "Major platforms supported" },
                  { value: "99.9%", label: "System uptime SLA" },
                  { value: "24/7", label: "Support availability" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="bg-card rounded-xl p-6 border border-border text-center shadow-card"
                    data-ocid={`pos.stat.${i + 1}`}
                  >
                    <p className="font-display font-bold text-3xl text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-muted/30" data-ocid="pos.features_section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Key Features"
              title="Everything You Need in One POS System"
              subtitle="From payments to inventory to staff management — a modern POS handles your entire retail or hospitality operation."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 70} direction="up">
                <div
                  className="bg-card rounded-xl p-7 border border-border h-full shadow-card"
                  data-ocid={`pos.feature.${i + 1}`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        className="py-20 bg-background"
        data-ocid="pos.industries_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="By Industry"
              title="POS Solutions for Your Business Type"
              subtitle="We configure and support POS systems tailored to the specific needs of retail, hospitality, and trade businesses."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.title} delay={i * 100} direction="up">
                <div
                  className="bg-card rounded-xl border border-border p-7 h-full shadow-card"
                  data-ocid={`pos.industry.${i + 1}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <ind.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">
                        {ind.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {ind.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                  <ul className="space-y-2">
                    {ind.features.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span className="text-xs text-muted-foreground">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="pos.integrations_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Popular Integrations"
              title="Connects With the Tools You Already Use"
              subtitle="Sync your POS with accounting software, e-commerce platforms, and payment providers for a fully connected business."
              className="mb-10"
            />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {integrations.map((int, i) => (
                <div
                  key={int.name}
                  className="bg-card border border-border rounded-lg px-5 py-3 flex items-center gap-2 shadow-card"
                  data-ocid={`pos.integration.${i + 1}`}
                >
                  <span className="font-display font-semibold text-foreground text-sm">
                    {int.name}
                  </span>
                  <span className="text-xs text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full">
                    {int.category}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Hardware */}
          <AnimatedSection>
            <SectionHeading
              label="Hardware Supply"
              title="We Supply & Set Up All Hardware"
              subtitle="No sourcing headaches — we procure, configure, and install all POS hardware so everything works out of the box."
              className="mb-8"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hardware.map((hw, i) => (
              <AnimatedSection key={hw.name} delay={i * 80} direction="up">
                <div
                  className="bg-card rounded-xl p-6 border border-border h-full text-center shadow-card"
                  data-ocid={`pos.hardware.${i + 1}`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <hw.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1.5 text-sm">
                    {hw.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {hw.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16" data-ocid="pos.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl mb-4">
              See Our POS Systems in Action
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Book a free demo tailored to your business type. We'll show you
              exactly how a modern POS can simplify your operations and boost
              sales.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton
                label="Get POS Demo"
                href="/contact"
                variant="primary"
                showArrow
                data-ocid="pos.bottom_demo_cta"
              />
              <CTAButton
                label="Get a Quote"
                href="/contact"
                variant="outline"
                data-ocid="pos.bottom_quote_cta"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
