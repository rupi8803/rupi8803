import {
  BarChart3,
  Building2,
  CheckCircle2,
  DollarSign,
  HardHat,
  Lock,
  Monitor,
  Network,
  RefreshCw,
  Server,
  Shield,
  Stethoscope,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { CTAButton } from "../../components/ui/CTAButton";
import { PageHero } from "../../components/ui/PageHero";
import { SectionHeading } from "../../components/ui/SectionHeading";

const managedItems = [
  {
    icon: Network,
    label: "Network Monitoring",
    desc: "Continuous monitoring of routers, switches, firewalls, and Wi-Fi access points.",
  },
  {
    icon: Server,
    label: "Server Health",
    desc: "CPU, memory, disk, and performance alerts before failures occur.",
  },
  {
    icon: Lock,
    label: "Security Patches",
    desc: "Automated OS and application patching across all endpoints — no delays.",
  },
  {
    icon: Shield,
    label: "Endpoint Protection",
    desc: "Antivirus, anti-malware, and EDR deployed across every device.",
  },
  {
    icon: RefreshCw,
    label: "Backup Verification",
    desc: "We test your backups regularly so restores work when you need them most.",
  },
  {
    icon: Monitor,
    label: "Software Licensing",
    desc: "Track and manage all software licences, renewals, and compliance.",
  },
  {
    icon: Wrench,
    label: "Vendor Management",
    desc: "We liaise with ISPs, hardware suppliers, and cloud vendors on your behalf.",
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Predictable Monthly Costs",
    desc: "One flat fee covers monitoring, patching, support, and management. No surprise invoices, no per-incident billing.",
  },
  {
    icon: Zap,
    title: "Reduced Downtime",
    desc: "Proactive monitoring catches issues before they cause outages. Most problems are resolved before you even notice.",
  },
  {
    icon: Shield,
    title: "Always Up-to-Date Security",
    desc: "Patches deployed within 24–48 hours of release. Your systems stay protected against emerging threats.",
  },
  {
    icon: TrendingUp,
    title: "Strategic IT Planning",
    desc: "Quarterly IT reviews, roadmaps, and budget planning — so technology grows alongside your business.",
  },
  {
    icon: BarChart3,
    title: "Enterprise-Level Expertise",
    desc: "Access a full team of certified engineers for the cost of a single part-time IT hire.",
  },
];

const industryExamples = [
  {
    icon: Building2,
    industry: "Retail",
    title: "Inventory & POS Systems",
    desc: "We keep your POS, inventory management, and EFTPOS systems connected and running during peak trade periods.",
    points: [
      "Zero-downtime POS updates",
      "Multi-location network management",
      "EFTPOS integration monitoring",
    ],
  },
  {
    icon: Stethoscope,
    industry: "Medical",
    title: "Compliance & Patient Data",
    desc: "Healthcare-grade security, compliance documentation, and strict data governance for GP clinics and specialists.",
    points: [
      "MY Health Record compliance",
      "Clinical software management",
      "Encrypted patient data handling",
    ],
  },
  {
    icon: HardHat,
    industry: "Tradies",
    title: "Mobile Workforce Management",
    desc: "Keep field crews connected with reliable mobile device management, job software support, and remote access.",
    points: [
      "Mobile device management",
      "Job management app support",
      "Secure remote access for field staff",
    ],
  },
];

export function ManagedITPage() {
  return (
    <>
      <PageHero
        label="Managed IT Services"
        title="Proactive IT Management So You Can Focus on Business"
        subtitle="We monitor and manage your IT infrastructure 24/7 so issues are caught before they become problems — all for a fixed monthly fee."
        ctas={[
          { label: "Get a Proposal", href: "/contact", variant: "primary" },
          { label: "Book Consultation", href: "/contact", variant: "outline" },
        ]}
      />

      {/* What is Managed IT */}
      <section
        className="py-20 bg-background"
        data-ocid="managed_it.explainer_section"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Proactive vs Reactive
              </span>
              <h2 className="font-display font-bold text-foreground text-3xl lg:text-4xl mb-5 leading-tight">
                What Is Managed IT — and Why Does It Matter?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Traditional IT support is{" "}
                <strong className="text-foreground">reactive</strong>: something
                breaks, you call someone, you wait, you pay. Every outage costs
                time and money.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">
                  Managed IT is proactive.
                </strong>{" "}
                We continuously monitor every part of your IT environment —
                servers, desktops, network, security — and resolve issues before
                they ever impact your team.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The result? Less downtime, more predictable costs, and an IT
                environment that's always secure, updated, and performing at its
                best.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Reactive Support",
                    items: [
                      "Wait for things to break",
                      "Unpredictable bills",
                      "Disruption to your team",
                      "Security gaps between fixes",
                    ],
                    negative: true,
                  },
                  {
                    label: "Managed IT (Us)",
                    items: [
                      "Issues fixed before you notice",
                      "Fixed monthly fee",
                      "Seamless background management",
                      "Continuous security monitoring",
                    ],
                    negative: false,
                  },
                ].map((col) => (
                  <div
                    key={col.label}
                    className={`rounded-xl border p-5 ${col.negative ? "bg-muted/30 border-border" : "bg-primary/5 border-primary/20"}`}
                    data-ocid={`managed_it.compare.${col.negative ? "reactive" : "proactive"}`}
                  >
                    <p
                      className={`font-display font-semibold text-sm mb-4 ${col.negative ? "text-muted-foreground" : "text-primary"}`}
                    >
                      {col.label}
                    </p>
                    <ul className="space-y-2.5">
                      {col.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          {col.negative ? (
                            <span className="w-3.5 h-3.5 rounded-full border-2 border-muted-foreground/40 mt-0.5 shrink-0" />
                          ) : (
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                          )}
                          <span className="text-xs text-muted-foreground leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's Managed */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="managed_it.scope_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="What We Manage"
              title="Your Entire IT Environment — Covered"
              subtitle="From the network edge to every endpoint, we monitor and manage every layer of your IT infrastructure."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {managedItems.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 70} direction="up">
                <div
                  className="bg-card rounded-xl p-6 border border-border h-full shadow-card"
                  data-ocid={`managed_it.scope.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1.5 text-sm">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="py-20 bg-background"
        data-ocid="managed_it.benefits_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Business Benefits"
              title="Why Businesses Choose Managed IT"
              subtitle="The right managed IT partner doesn't just keep the lights on — they actively make your business more efficient and resilient."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 80} direction="up">
                <div
                  className="bg-card rounded-xl p-7 border border-border h-full shadow-card"
                  data-ocid={`managed_it.benefit.${i + 1}`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="managed_it.industries_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Industry Examples"
              title="Managed IT for Your Industry"
              subtitle="We tailor our managed IT services to the unique demands of your sector."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryExamples.map((ex, i) => (
              <AnimatedSection key={ex.industry} delay={i * 100} direction="up">
                <div
                  className="bg-card rounded-xl border border-border p-7 h-full shadow-card"
                  data-ocid={`managed_it.industry.${i + 1}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <ex.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {ex.industry}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                    {ex.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {ex.desc}
                  </p>
                  <ul className="space-y-2">
                    {ex.points.map((pt) => (
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

      {/* Pricing Teaser */}
      <section
        className="py-20 bg-background"
        data-ocid="managed_it.pricing_teaser"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                label="Simple Pricing"
                title="Flat Monthly Fee — No Surprises"
                subtitle="Our managed IT plans start from AUD $50/user/month. Choose the level of coverage that suits your team size and requirements."
                align="left"
                className="mb-8"
              />
              <div className="space-y-3">
                {[
                  {
                    plan: "Essential",
                    desc: "Remote support + monitoring for small teams",
                    price: "From AUD $50/mo per user",
                  },
                  {
                    plan: "Professional",
                    desc: "24/7 support + on-site visits + full security suite",
                    price: "From AUD $115/mo per user",
                  },
                  {
                    plan: "Enterprise",
                    desc: "Unlimited support + dedicated account manager + compliance",
                    price: "From AUD $290/mo per user",
                  },
                ].map((p, i) => (
                  <div
                    key={p.plan}
                    className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border shadow-card"
                    data-ocid={`managed_it.plan_teaser.${i + 1}`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display font-semibold text-foreground text-sm">
                        {p.plan}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {p.desc}
                      </p>
                      <p className="text-xs font-medium text-primary mt-1">
                        {p.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <CTAButton
                  label="View Full Pricing"
                  href="/pricing"
                  variant="secondary"
                  showArrow
                  data-ocid="managed_it.pricing_link"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <h3 className="font-display font-bold text-foreground text-xl mb-2">
                  Not sure which plan is right for you?
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Tell us about your team size, existing infrastructure, and key
                  pain points — we'll design a custom managed IT proposal at no
                  cost or obligation.
                </p>
                <div className="space-y-3">
                  {[
                    "Free infrastructure assessment",
                    "Custom proposal within 48 hours",
                    "No lock-in contracts",
                    "Month-to-month billing",
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
                <CTAButton
                  label="Get a Free Proposal"
                  href="/contact"
                  variant="primary"
                  showArrow
                  className="mt-7 w-full justify-center"
                  data-ocid="managed_it.get_proposal_cta"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16" data-ocid="managed_it.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl mb-4">
              Ready to Stop Firefighting IT Issues?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Let us take IT off your plate. Book a free consultation and get a
              custom managed IT proposal for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton
                label="Get a Proposal"
                href="/contact"
                variant="primary"
                showArrow
                data-ocid="managed_it.bottom_cta"
              />
              <CTAButton
                label="Book Consultation"
                href="/contact"
                variant="outline"
                data-ocid="managed_it.bottom_consult_cta"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
