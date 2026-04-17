import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  Globe,
  HardDrive,
  Headphones,
  MapPin,
  Smartphone,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { CTAButton } from "../../components/ui/CTAButton";
import { PageHero } from "../../components/ui/PageHero";
import { SectionHeading } from "../../components/ui/SectionHeading";

const painPoints = [
  {
    icon: Globe,
    title: "No Professional Website",
    desc: "Losing jobs to competitors because potential customers can't find you on Google or your site looks outdated on mobile.",
  },
  {
    icon: AlertTriangle,
    title: "Manual Quotes & Invoices",
    desc: "Wasting hours on paper-based quotes and chasing unpaid invoices — time better spent on the tools.",
  },
  {
    icon: Wrench,
    title: "No Job or Equipment Tracking",
    desc: "No centralised system to track jobs, schedule crews, or know where your equipment is at any time.",
  },
  {
    icon: Smartphone,
    title: "Mobile & NBN Connectivity Issues",
    desc: "Struggling with unreliable mobile data on-site or poor NBN speeds at the office holding your business back.",
  },
  {
    icon: HardDrive,
    title: "Data Loss Risk",
    desc: "Quotes, contacts, and job photos sitting on one device — if it breaks or gets stolen, it's all gone.",
  },
];

const solutions = [
  {
    icon: Globe,
    title: "Website That Gets You Found",
    desc: "Mobile-friendly websites with local SEO so you rank on Google when customers search for your trade in your area.",
    href: "/services/web-design",
  },
  {
    icon: CreditCard,
    title: "Digital Invoicing & Job Management",
    desc: "POS and tablet solutions for on-site quoting, digital signatures, and instant payment collection in the field.",
    href: "/services/pos-solutions",
  },
  {
    icon: HardDrive,
    title: "Reliable Business Backup",
    desc: "Automated cloud backup so your quotes, photos, and customer data are never lost if a device breaks or is stolen.",
    href: "/services/backup-recovery",
  },
  {
    icon: Headphones,
    title: "IT Support When You Need It",
    desc: "Remote and on-site IT support for when tech fails — fast response times because we know every hour of downtime costs you money.",
    href: "/services/it-support",
  },
];

export function TradiesPage() {
  return (
    <>
      <PageHero
        label="Tradies & Construction"
        title="Technology Solutions for Tradies — Stay Connected, Get Paid Faster, Win More Jobs"
        subtitle="You're on the road, on-site, and always busy. We know the challenges — and we build technology that works as hard as you do."
        ctas={[
          {
            label: "Get Free Consultation",
            href: "/contact",
            variant: "primary",
          },
          { label: "See Pricing", href: "/pricing", variant: "outline" },
        ]}
      />

      {/* Understanding Tradies */}
      <section
        className="py-20 bg-background"
        data-ocid="tradies.understanding_section"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <SectionHeading
                label="We Get It"
                title="We Know the Challenges You Face Every Day"
                align="left"
                className="mb-6"
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most IT companies are built for office workers — they don't
                understand what it's like to be on the tools at 6am, driving
                between jobs, and trying to run a business at the same time. At
                TechPro Services, we specialise in technology solutions designed
                specifically for Australian tradespeople.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're a solo electrician, a plumbing crew of five, or a
                building company with 20+ staff — technology should work for
                you, not against you. We handle the tech so you can focus on the
                job.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Electricians",
                  "Plumbers",
                  "Builders",
                  "HVAC",
                  "Landscapers",
                  "Painters",
                ].map((trade) => (
                  <Badge key={trade} variant="secondary" className="text-xs">
                    {trade}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
                <h3 className="font-display font-bold text-foreground text-lg mb-6">
                  Why Tradies Choose TechPro
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: Smartphone,
                      title: "Mobile-First Solutions",
                      desc: "Everything works on your phone or tablet — no desk required.",
                    },
                    {
                      icon: MapPin,
                      title: "On-Site & Remote Support",
                      desc: "We come to you, or fix it remotely — whichever is faster.",
                    },
                    {
                      icon: Clock,
                      title: "Fast Turnaround",
                      desc: "Minimal setup disruption — we get you up and running quickly.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Grows With Your Business",
                      desc: "Solutions that scale from solo tradie to large team.",
                    },
                  ].map((item, i) => (
                    <div
                      key={item.title}
                      className="flex gap-4"
                      data-ocid={`tradies.highlight.${i + 1}`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-display font-semibold text-foreground text-sm mb-0.5">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted-foreground leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="tradies.pain_points_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Common Challenges"
              title="Pain Points Tradies Face Every Day"
              subtitle="Sound familiar? These are the technology problems we hear from tradies all across Australia."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {painPoints.map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 80} direction="up">
                <div
                  className="bg-card rounded-xl p-6 border border-border h-full shadow-card"
                  data-ocid={`tradies.pain_point.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                    <point.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section
        className="py-20 bg-background"
        data-ocid="tradies.solutions_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="How We Help"
              title="Technology Built for Tradies"
              subtitle="From your first website to full digital transformation — we have the right solution for where you're at."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {solutions.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 80} direction="up">
                <Link
                  to={s.href}
                  className="block group h-full"
                  data-ocid={`tradies.solution.${i + 1}`}
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
          <AnimatedSection>
            <div
              className="bg-card rounded-xl p-6 border border-border shadow-card"
              data-ocid="tradies.mobile_setup"
            >
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    Mobile Device Setup & Management
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We set up and manage your phones, tablets, and laptops —
                    with remote wipe capability if a device is lost or stolen.
                    Perfect for teams working across multiple sites.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Success Story */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="tradies.success_story_section"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-card rounded-2xl border border-border p-10 shadow-card text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-semibold tracking-wide uppercase mb-6">
                  Success Story
                </div>
                <blockquote className="font-display text-2xl font-bold text-foreground leading-snug mb-6">
                  "Local plumber increased call inquiries by 40% after TechPro
                  built their website and set up a job management app."
                </blockquote>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                  Before TechPro, this plumbing business had no website and
                  relied on word-of-mouth alone. We built a mobile-friendly site
                  with local SEO, set up a digital job management system, and
                  connected their invoicing to their bank account. Within 90
                  days, inbound enquiries had grown by 40% and they cut invoice
                  processing time by half.
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  {[
                    { val: "40%", label: "More enquiries" },
                    { val: "50%", label: "Faster invoicing" },
                    { val: "90 days", label: "To see results" },
                  ].map((stat, i) => (
                    <div
                      key={stat.label}
                      className="text-center bg-muted/50 rounded-xl p-4"
                      data-ocid={`tradies.stat.${i + 1}`}
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

      {/* CTA Banner */}
      <section className="bg-primary py-16" data-ocid="tradies.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl mb-4">
              Ready to Work Smarter, Not Harder?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Get a free technology assessment tailored to your trade business —
              no jargon, no lock-in contracts.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton
                label="Get Free Consultation"
                href="/contact"
                variant="primary"
                showArrow
                data-ocid="tradies.bottom_cta_consult"
              />
              <CTAButton
                label="See Pricing"
                href="/pricing"
                variant="outline"
                data-ocid="tradies.bottom_cta_pricing"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
