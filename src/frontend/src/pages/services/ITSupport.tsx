import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Clock,
  HardDrive,
  Headphones,
  Mail,
  Monitor,
  Network,
  Phone,
  Shield,
  Wifi,
  Wrench,
} from "lucide-react";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { CTAButton } from "../../components/ui/CTAButton";
import { PageHero } from "../../components/ui/PageHero";
import { SectionHeading } from "../../components/ui/SectionHeading";

const supportCategories = [
  {
    icon: Monitor,
    title: "Hardware",
    desc: "Computers, laptops, printers, scanners, and other peripherals — setup, repair, and replacement advice.",
    items: [
      "Computer setup & repair",
      "Printer troubleshooting",
      "Networking hardware",
      "New device procurement",
    ],
  },
  {
    icon: Wrench,
    title: "Software",
    desc: "Installation, licensing, updates, and troubleshooting for all major business software packages.",
    items: [
      "Software installation",
      "Microsoft 365",
      "Antivirus & security tools",
      "License management",
    ],
  },
  {
    icon: Wifi,
    title: "Networks",
    desc: "Business WiFi, NBN setup, firewall configuration, and connectivity troubleshooting.",
    items: [
      "WiFi setup & optimisation",
      "NBN & business internet",
      "Firewall configuration",
      "VPN setup",
    ],
  },
  {
    icon: Shield,
    title: "Security",
    desc: "Antivirus deployment, firewall monitoring, phishing protection, and security awareness.",
    items: [
      "Antivirus management",
      "Firewall monitoring",
      "Phishing protection",
      "Security audits",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    desc: "Email account setup, migration to Microsoft 365 or Google Workspace, and ongoing troubleshooting.",
    items: [
      "Email setup & migration",
      "Microsoft 365 support",
      "Spam filtering",
      "Email signatures",
    ],
  },
];

const supportOptions = [
  {
    icon: Monitor,
    title: "Remote Support",
    subtitle: "Fastest resolution",
    desc: "We connect to your computer via secure remote access and fix the problem in real time — often within minutes. No wait for a technician to arrive.",
    badge: "Most Used",
    highlight: true,
  },
  {
    icon: Phone,
    title: "Phone Support",
    subtitle: "Talk to a real person",
    desc: "Call our helpdesk and speak directly with a certified technician. We'll walk you through the issue step by step or escalate if hands-on support is needed.",
    badge: "",
    highlight: false,
  },
  {
    icon: Headphones,
    title: "On-site Support",
    subtitle: "We come to you",
    desc: "When remote support isn't enough, our Melbourne-based technicians come to your premises. Covering Metro Melbourne and surrounding areas.",
    badge: "",
    highlight: false,
  },
];

const responseTimes = [
  {
    level: "Critical",
    scenario: "System down, complete outage",
    time: "2 hours",
    badge: "bg-destructive/10 text-destructive",
  },
  {
    level: "High",
    scenario: "Business-impacting issue, key staff affected",
    time: "4 hours",
    badge: "bg-accent/10 text-accent",
  },
  {
    level: "Standard",
    scenario: "Non-urgent technical issue",
    time: "Next business day",
    badge: "bg-primary/10 text-primary",
  },
  {
    level: "Low",
    scenario: "How-to questions, general advice",
    time: "2 business days",
    badge: "bg-muted text-muted-foreground",
  },
];

const issuesList = [
  "Slow or frozen computers",
  "Network & internet connectivity",
  "Printer & peripheral setup",
  "Email configuration (Outlook, Gmail)",
  "Software installation & licensing",
  "Data recovery & file restoration",
  "New device setup & migration",
  "Password resets & account access",
  "Virus & malware removal",
  "Microsoft 365 support",
  "Cloud storage setup",
  "Hardware troubleshooting",
];

const stats = [
  { value: "2 hrs", label: "Critical response time" },
  { value: "98%", label: "First-call resolution rate" },
  { value: "500+", label: "Businesses supported" },
  { value: "12+", label: "Years in business" },
];

export function ITSupportPage() {
  return (
    <>
      <PageHero
        label="IT Support for Small Business"
        title="Fast, Friendly, Affordable Tech Help"
        subtitle="Stop losing money to IT downtime. Our certified technicians fix problems fast — remotely or on-site — so your team can get back to work without the tech stress."
        ctas={[
          { label: "Get IT Support", href: "/contact", variant: "primary" },
          {
            label: "Free IT Audit",
            href: "/free-it-audit",
            variant: "outline",
          },
        ]}
      />

      {/* Stats bar */}
      <section
        className="py-12 bg-muted/30 border-y border-border"
        data-ocid="it_support.stats_bar"
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 80} direction="up">
                <div
                  className="text-center"
                  data-ocid={`it_support.stat.${i + 1}`}
                >
                  <div className="font-display font-bold text-3xl text-primary mb-1">
                    {s.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Support */}
      <section
        className="py-20 bg-background"
        data-ocid="it_support.categories_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="What We Support"
              title="Full-Spectrum IT Help for Your Business"
              subtitle="From hardware and software to networks and security — we cover everything your business depends on."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {supportCategories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 80} direction="up">
                <div
                  className="bg-card rounded-xl p-5 border border-border h-full shadow-card flex flex-col"
                  data-ocid={`it_support.category.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 shrink-0">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">
                    {cat.desc}
                  </p>
                  <ul className="space-y-1">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="it_support.options_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="How We Help"
              title="Support Delivered Your Way"
              subtitle="Remote, phone, or on-site — we work the way that suits your business and urgency level."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOptions.map((option, i) => (
              <AnimatedSection
                key={option.title}
                delay={i * 100}
                direction="up"
              >
                <div
                  className={`rounded-xl p-7 border h-full flex flex-col shadow-card ${
                    option.highlight
                      ? "bg-primary/5 border-primary/30"
                      : "bg-card border-border"
                  }`}
                  data-ocid={`it_support.option.${i + 1}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    {option.badge && (
                      <Badge className="bg-accent/20 text-accent border-0 text-xs font-medium">
                        {option.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-0.5">
                    {option.title}
                  </h3>
                  <p className="text-xs text-primary font-medium mb-3">
                    {option.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {option.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues + Response Times */}
      <section
        className="py-20 bg-background"
        data-ocid="it_support.issues_section"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <SectionHeading
                label="Common Issues We Fix"
                title="No Problem Too Big or Small"
                align="left"
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {issuesList.map((issue) => (
                  <div key={issue} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {issue}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <SectionHeading
                label="Response Times"
                title="When You Need Us, We're There"
                align="left"
                className="mb-6"
              />
              <div className="space-y-3 mb-6">
                {responseTimes.map((rt, i) => (
                  <div
                    key={rt.level}
                    className="bg-card rounded-xl p-4 border border-border flex items-center gap-4 shadow-card"
                    data-ocid={`it_support.response.${i + 1}`}
                  >
                    <div className="shrink-0">
                      <Badge
                        className={`text-xs font-semibold border-0 ${rt.badge}`}
                      >
                        {rt.level}
                      </Badge>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground truncate">
                        {rt.scenario}
                      </p>
                    </div>
                    <div className="font-display font-bold text-foreground text-sm shrink-0 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {rt.time}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-muted/50 rounded-xl p-5 border border-border">
                <div className="flex items-start gap-3">
                  <HardDrive className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">
                      No lock-in contracts
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Need ad-hoc support? No problem — pay as you go with no
                      commitment. Or choose a monthly plan for priority service
                      and lower hourly rates.
                    </p>
                    <Link
                      to="/pricing"
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-2 inline-flex items-center gap-1"
                      data-ocid="it_support.pricing_link"
                    >
                      View IT support plans →
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Network icon visual aside */}
      <section
        className="py-12 bg-muted/30"
        data-ocid="it_support.network_section"
      >
        <div className="container">
          <div className="bg-card rounded-2xl border border-border p-8 flex flex-col md:flex-row items-center gap-8 shadow-card">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Network className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display font-bold text-foreground text-xl mb-2">
                Serving Melbourne & Australia-Wide
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Headquartered in Melbourne with remote support capability
                nationwide. On-site visits available across Metro Melbourne and
                surrounding suburbs. Partner technicians available in Sydney,
                Brisbane, Perth, and Adelaide.
              </p>
            </div>
            <CTAButton
              label="Check Coverage"
              href="/contact"
              variant="secondary"
              showArrow
              data-ocid="it_support.coverage_cta"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16" data-ocid="it_support.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl mb-4">
              Having an IT Issue Right Now?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Call us now or submit a support request — we'll be in touch within
              the hour. Or claim your free IT audit to identify risks before
              they become problems.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton
                label="Get IT Support"
                href="/contact"
                variant="primary"
                showArrow
                data-ocid="it_support.bottom_cta_primary"
              />
              <CTAButton
                label="Free IT Audit"
                href="/free-it-audit"
                variant="outline"
                data-ocid="it_support.bottom_cta_secondary"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
