import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  CreditCard,
  Globe,
  Headphones,
  Link2,
  Shield,
  Utensils,
  Wifi,
} from "lucide-react";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { CTAButton } from "../../components/ui/CTAButton";
import { PageHero } from "../../components/ui/PageHero";
import { SectionHeading } from "../../components/ui/SectionHeading";

const challenges = [
  {
    icon: CreditCard,
    title: "Busy POS at Peak Times",
    desc: "A slow or crashed POS during a dinner rush costs real money and damages your reputation. Reliability is everything in hospitality.",
  },
  {
    icon: Wifi,
    title: "Guest WiFi Demands",
    desc: "Guests expect fast, reliable WiFi — and when they don't get it, it shows up in your reviews and affects repeat business.",
  },
  {
    icon: Globe,
    title: "Online Booking & Ordering",
    desc: "Customers want to book tables, order online, and pay digitally. Without the right systems, you're losing business to competitors who offer this.",
  },
  {
    icon: AlertTriangle,
    title: "Equipment Failures Hit Revenue Immediately",
    desc: "A POS going down, EFTPOS declining, or kitchen display failing during service creates immediate, measurable revenue loss.",
  },
  {
    icon: Link2,
    title: "Multiple Integrations Needed",
    desc: "Managing Uber Eats, DoorDash, Xero, and your POS as separate systems creates errors, wasted time, and data inconsistencies.",
  },
];

const services = [
  {
    icon: CreditCard,
    title: "Hospitality POS System",
    desc: "Table management, split bills, kitchen display systems, and Lightspeed Restaurant setup — built for the pace of hospitality.",
    href: "/services/pos-solutions",
  },
  {
    icon: Globe,
    title: "Website with Online Menu & Booking",
    desc: "Beautiful, mobile-first websites with online menus, photo galleries, and booking widget integration to drive covers.",
    href: "/services/web-design",
  },
  {
    icon: Shield,
    title: "Managed IT During Service Hours",
    desc: "Proactive monitoring and fast-response support to keep your systems live during service — because downtime during a dinner rush is not acceptable.",
    href: "/services/managed-it",
  },
  {
    icon: Headphones,
    title: "On-Call IT Support",
    desc: "When something goes wrong during service, we respond fast — remote resolution or on-site dispatch for critical failures.",
    href: "/services/it-support",
  },
];

const integrations = [
  "Uber Eats",
  "DoorDash",
  "Menulog",
  "Xero",
  "MYOB",
  "ResDiary",
  "OpenTable",
  "Deputy (Rostering)",
];

export function HospitalityPage() {
  return (
    <>
      <PageHero
        label="Hospitality & Tourism"
        title="Technology Solutions for Hospitality — Fast Service, Happy Guests, Smooth Operations"
        subtitle="Cafés, restaurants, hotels, and venues trust TechPro for the integrated systems, reliable IT support, and fast response that keeps guests happy and revenue flowing."
        ctas={[
          { label: "Get POS Demo", href: "/contact", variant: "primary" },
          { label: "Book Consultation", href: "/contact", variant: "outline" },
        ]}
      />

      {/* Challenges */}
      <section
        className="py-20 bg-background"
        data-ocid="hospitality.challenges_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Hospitality Challenges"
              title="Technology Problems That Cost Hospitality Businesses Every Day"
              subtitle="We understand the unique pressures of hospitality — every system failure during peak service has a direct impact on revenue and reputation."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 80} direction="up">
                <div
                  className="bg-card rounded-xl p-6 border border-border h-full shadow-card"
                  data-ocid={`hospitality.challenge.${i + 1}`}
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
        data-ocid="hospitality.solutions_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="How We Help"
              title="Everything the Modern Venue Needs"
              subtitle="Integrated solutions designed for the pace, pressure, and complexity of hospitality operations."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 80} direction="up">
                <Link
                  to={s.href}
                  className="block group h-full"
                  data-ocid={`hospitality.solution.${i + 1}`}
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
          {/* WiFi card */}
          <AnimatedSection>
            <div
              className="bg-card rounded-xl p-6 border border-border shadow-card"
              data-ocid="hospitality.wifi_solution"
            >
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Wifi className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Guest WiFi Setup & Management
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    High-speed guest WiFi networks — separated from your
                    business network — that keep your customers connected
                    without compromising your operational security. Managed and
                    monitored by TechPro.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Integrations */}
      <section
        className="py-20 bg-background"
        data-ocid="hospitality.integrations_section"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                label="Integrations"
                title="Connect All Your Systems in One Place"
                align="left"
                className="mb-6"
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Stop juggling disconnected platforms. TechPro integrates your
                POS with delivery platforms, accounting software, and rostering
                tools — so orders flow automatically, reconciliation is easy,
                and your staff aren't double-handling data.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We work with the platforms your hospitality business already
                uses and build the connections that save you hours of admin
                every week.
              </p>
              <div className="flex flex-wrap gap-2">
                {integrations.map((integration) => (
                  <Badge
                    key={integration}
                    variant="secondary"
                    className="text-xs"
                  >
                    {integration}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection
              direction="right"
              className="bg-card rounded-2xl border border-border p-8 shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-primary" />
                </div>
                <div className="font-display font-bold text-foreground">
                  Hospitality IT Checklist
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Modern POS with table management",
                  "Contactless payments and split bills",
                  "Kitchen display system (KDS)",
                  "Online ordering and delivery integration",
                  "Guest WiFi separated from POS network",
                  "Website with online menu and booking",
                  "Xero / MYOB accounting integration",
                  "Managed IT with fast on-site response",
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
                label="Get a Free Venue Assessment"
                href="/contact"
                variant="secondary"
                showArrow
                className="mt-6 w-full justify-center"
                data-ocid="hospitality.checklist_cta"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="hospitality.success_story_section"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-card rounded-2xl border border-border p-10 shadow-card text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-semibold tracking-wide uppercase mb-6">
                  Success Story
                </div>
                <blockquote className="font-display text-2xl font-bold text-foreground leading-snug mb-6">
                  "Local café cut transaction time by 30% after upgrading to
                  TechPro POS system with contactless payments and kitchen
                  display."
                </blockquote>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                  A busy local café was running an outdated POS with no kitchen
                  display — orders were handwritten, queues were long, and peak
                  hours were chaotic. TechPro replaced their system with a
                  cloud-based POS, integrated kitchen display, and contactless
                  payment terminals. Transaction time dropped by 30% and table
                  turnover improved significantly.
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  {[
                    { val: "30%", label: "Faster transactions" },
                    { val: "Zero", label: "Manual order errors" },
                    { val: "1 day", label: "To go live" },
                  ].map((stat, i) => (
                    <div
                      key={stat.label}
                      className="text-center bg-muted/50 rounded-xl p-4"
                      data-ocid={`hospitality.stat.${i + 1}`}
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
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* POS Feature Highlights */}
      <section
        className="py-20 bg-background"
        data-ocid="hospitality.pos_features_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="POS Features"
              title="A POS Built for Hospitality Speed"
              subtitle="Every feature of our hospitality POS solution is designed for fast service, accurate orders, and seamless operations."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: CreditCard,
                title: "Table Management",
                desc: "Visual floor plans, table status, covers tracking, and section management — all from one screen.",
              },
              {
                icon: BarChart3,
                title: "Real-Time Reporting",
                desc: "Sales, voids, covers, and category performance updated in real time — accessible from your phone.",
              },
              {
                icon: Clock,
                title: "Fast Peak-Period Performance",
                desc: "Engineered for reliability during your busiest service periods — no crashes when it matters most.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100} direction="up">
                <div
                  className="flex gap-4 bg-card rounded-xl p-5 border border-border shadow-card h-full"
                  data-ocid={`hospitality.pos_feature.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16" data-ocid="hospitality.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl mb-4">
              Ready to Upgrade Your Venue Technology?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Book a free POS demo or consultation — we'll design the right
              technology stack for your hospitality business.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton
                label="Get POS Demo"
                href="/contact"
                variant="primary"
                showArrow
                data-ocid="hospitality.bottom_cta_demo"
              />
              <CTAButton
                label="Book Consultation"
                href="/contact"
                variant="outline"
                data-ocid="hospitality.bottom_cta_consult"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
