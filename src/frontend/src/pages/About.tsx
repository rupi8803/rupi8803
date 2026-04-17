import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Globe,
  Heart,
  Lightbulb,
  Monitor,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { CTAButton } from "../components/ui/CTAButton";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeading } from "../components/ui/SectionHeading";

// ─── Static Data ───────────────────────────────────────────────────────────────

const stats = [
  { value: "10+", label: "Years IT Experience" },
  { value: "5+", label: "Years Web Development" },
  { value: "200+", label: "Businesses Served" },
  { value: "99.9%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve so your business always has access to modern, effective technology — without the guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "When you need us, we're there. Fast response times, 99.9% uptime guarantees, and proactive support you can count on.",
  },
  {
    icon: Heart,
    title: "Personal Service",
    description:
      "You're never just a ticket number. We take time to understand your business and deliver solutions that fit how you actually work.",
  },
];

const itExpertise = {
  heading: "IT Expertise",
  icon: Server,
  items: [
    "Microsoft Certified Solutions Expert (MCSE)",
    "CompTIA Network+ & Security+ Certified",
    "Cisco Partner — networking & infrastructure",
    "Microsoft 365 & Azure administration",
    "Hardware procurement & lifecycle management",
    "Cybersecurity frameworks & compliance",
    "On-site & remote support across Australia",
    "Disaster recovery & business continuity planning",
  ],
};

const webExpertise = {
  heading: "Web Expertise",
  icon: Globe,
  platforms: ["WordPress", "Shopify", "Wix", "Squarespace"],
  items: [
    "Custom responsive design & development",
    "SEO strategy & technical optimisation",
    "E-commerce store setup & integration",
    "Performance auditing & Core Web Vitals",
    "Website migrations & platform transfers",
    "Google Analytics & conversion tracking",
    "Accessibility & mobile-first development",
    "Ongoing maintenance & security updates",
  ],
};

const approach = [
  {
    step: "01",
    title: "Understand",
    icon: Search,
    description:
      "We take time to deeply understand your business — your goals, pain points, team, and technical environment — before recommending anything.",
  },
  {
    step: "02",
    title: "Recommend",
    icon: Sparkles,
    description:
      "Based on our discovery, we craft tailored solutions that match your budget, scale, and strategic direction. No generic packages.",
  },
  {
    step: "03",
    title: "Support",
    icon: Wrench,
    description:
      "Delivery is just the beginning. We stay with you as an ongoing technology partner — proactively monitoring, adapting, and growing alongside your business.",
  },
];

const credentials = [
  "Microsoft Certified Solutions Expert (MCSE)",
  "CompTIA A+, Network+, Security+",
  "Cisco Certified Network Associate (CCNA)",
  "Google Workspace Administrator",
  "ITIL v4 Foundation Certified",
  "WordPress Certified Developer",
];

// ─── Component ─────────────────────────────────────────────────────────────────

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        label="About TechPro Services"
        title="Your Local Technology Partner"
        subtitle="We're an Australian-owned IT and web services company dedicated to helping small and medium businesses grow confidently with technology — from your first website to a fully managed IT environment."
        ctas={[
          { label: "Book Consultation", href: "/contact", variant: "primary" },
          { label: "Our Services", href: "/services", variant: "outline" },
        ]}
      />

      {/* Company Story */}
      <section className="py-20 bg-background" data-ocid="about.story_section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left: Story text */}
            <AnimatedSection direction="left">
              <SectionHeading
                label="Our Story"
                title="Built to Support Australian Businesses"
                align="left"
                className="mb-6"
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                TechPro Services was founded with a straightforward mission:
                make enterprise-grade technology accessible and affordable for
                every Australian small business. We saw too many SMBs struggling
                with slow computers, unreliable websites, and tech providers who
                didn't understand the unique challenges of running a business in
                Australia.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We started by helping local businesses with their day-to-day IT
                headaches — and quickly realised our clients also needed great
                websites. So we built that capability too, becoming a one-stop
                technology partner for businesses that need both sides of the
                coin.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today we serve businesses across retail, healthcare,
                hospitality, construction, and professional services — always
                with the same commitment to quality, transparency, and genuine
                care for our clients' success.
              </p>
              <div className="flex flex-wrap gap-3">
                <CTAButton
                  label="Explore Services"
                  href="/services"
                  variant="secondary"
                  showArrow
                  data-ocid="about.story_services_cta"
                />
                <CTAButton
                  label="Free IT Audit"
                  href="/free-it-audit"
                  variant="outline"
                  data-ocid="about.story_audit_cta"
                />
              </div>
            </AnimatedSection>

            {/* Right: 3 values cards */}
            <AnimatedSection direction="right">
              <div className="space-y-4">
                {values.map((v, i) => (
                  <AnimatedSection key={v.title} delay={i * 100} direction="up">
                    <Card
                      className="border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
                      data-ocid={`about.value_card.${i + 1}`}
                    >
                      <CardContent className="flex gap-4 p-5 items-start">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <v.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-foreground mb-1">
                            {v.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {v.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-14 bg-primary" data-ocid="about.stats_section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 80} direction="up">
                <div className="text-center" data-ocid={`about.stat.${i + 1}`}>
                  <div className="font-display font-bold text-primary-foreground text-4xl md:text-5xl leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Expertise */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="about.expertise_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Skills & Expertise"
              title="Deep Knowledge Across IT & Web"
              subtitle="Our team holds certifications and real-world experience across the full stack of technology services Australian businesses need."
              className="mb-12"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* IT Expertise */}
            <AnimatedSection direction="left" delay={80}>
              <Card
                className="h-full border border-border shadow-sm"
                data-ocid="about.it_expertise_card"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <itExpertise.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-xl">
                      {itExpertise.heading}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {itExpertise.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Web Expertise */}
            <AnimatedSection direction="right" delay={80}>
              <Card
                className="h-full border border-border shadow-sm"
                data-ocid="about.web_expertise_card"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                      <webExpertise.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-xl">
                      {webExpertise.heading}
                    </h3>
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {webExpertise.platforms.map((p) => (
                      <Badge
                        key={p}
                        variant="secondary"
                        className="text-xs font-semibold px-3 py-1"
                        data-ocid={`about.platform_badge.${p.toLowerCase()}`}
                      >
                        {p}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {webExpertise.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company / Principal Profile */}
      <section
        className="py-20 bg-background"
        data-ocid="about.profile_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Who We Are"
              title="Experienced, Certified, Local"
              subtitle="Get to know the principal consultant and the values behind TechPro Services."
              className="mb-12"
            />
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Principal bio */}
            <AnimatedSection direction="left" delay={80}>
              <Card
                className="border border-border shadow-sm overflow-hidden"
                data-ocid="about.principal_card"
              >
                <CardContent className="p-0">
                  {/* Accent header */}
                  <div className="bg-primary/5 border-b border-border px-8 py-6 flex items-center gap-5">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-display font-bold text-primary-foreground shrink-0">
                      JP
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-lg">
                        James Patterson
                      </div>
                      <div className="text-accent font-semibold text-sm">
                        Founder & Principal Consultant
                      </div>
                      <div className="text-muted-foreground text-xs mt-0.5">
                        Melbourne, Australia
                      </div>
                    </div>
                  </div>
                  <div className="px-8 py-6 space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      With over 10 years in enterprise IT support and 5+ years
                      building websites for Australian businesses, James founded
                      TechPro Services to bridge the gap between complex
                      technology and the real-world needs of SMBs.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Before starting TechPro, James worked as a senior IT
                      engineer supporting multi-site enterprise environments,
                      gaining deep expertise in networking, security, and
                      infrastructure. He recognised that small businesses
                      deserved the same quality of IT thinking — just at a scale
                      and price that made sense.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      James is personally involved in every client engagement,
                      ensuring consistent, high-quality outcomes that align with
                      your business goals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Credentials */}
            <AnimatedSection direction="right" delay={80}>
              <Card
                className="border border-border shadow-sm h-full"
                data-ocid="about.credentials_card"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-xl">
                      Certifications & Credentials
                    </h3>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {credentials.map((cred, i) => (
                      <li
                        key={cred}
                        className="flex items-start gap-2.5"
                        data-ocid={`about.credential.${i + 1}`}
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {cred}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Separator className="mb-6" />

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Monitor, label: "Windows & Mac Expert" },
                      { icon: BookOpen, label: "Continuous Learning" },
                      { icon: Zap, label: "Fast Response" },
                      { icon: Globe, label: "National Coverage" },
                    ].map((item, i) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2.5 text-sm text-muted-foreground"
                        data-ocid={`about.credential_badge.${i + 1}`}
                      >
                        <item.icon className="w-4 h-4 text-primary shrink-0" />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/30" data-ocid="about.approach_section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="How We Work"
              title="Our Approach to Every Engagement"
              subtitle="Whether it's a website project or a full IT overhaul, we follow a clear, client-first process."
              className="mb-12"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {approach.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 100} direction="up">
                <Card
                  className="border border-border shadow-sm h-full group hover:shadow-md transition-shadow duration-200"
                  data-ocid={`about.approach_step.${i + 1}`}
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-200">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-display font-bold text-4xl text-muted/60 leading-none select-none">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-foreground text-xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary" data-ocid="about.cta_section">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display font-bold text-primary-foreground text-3xl md:text-4xl mb-4 leading-tight">
                Ready to Work With Us?
              </h2>
              <p className="text-primary-foreground/75 text-lg leading-relaxed mb-8">
                Let's talk about your business and how we can help you get more
                from your technology. Your first consultation is completely
                free.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <CTAButton
                  label="Book Consultation"
                  href="/contact"
                  variant="primary"
                  showArrow
                  data-ocid="about.cta_book_button"
                />
                <CTAButton
                  label="Contact Us"
                  href="/contact"
                  variant="outline"
                  data-ocid="about.cta_contact_button"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
