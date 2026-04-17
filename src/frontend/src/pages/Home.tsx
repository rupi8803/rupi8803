import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { CTAButton } from "../components/ui/CTAButton";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ServiceCard } from "../components/ui/ServiceCard";
import { pageContent, siteConfig } from "../config/siteContent";

const { home } = pageContent;

const whyStats = [
  {
    icon: Award,
    value: "12+",
    label: "Years Experience",
    sublabel: "Serving Australian SMBs since 2012",
  },
  {
    icon: Users,
    value: "500+",
    label: "Businesses Helped",
    sublabel: "Across all major Australian cities",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Uptime Guarantee",
    sublabel: "Industry-leading reliability SLA",
  },
  {
    icon: Clock,
    value: "<1hr",
    label: "Response Time",
    sublabel: "For all critical IT issues",
  },
];

const whyPoints = [
  "No lock-in contracts — earn your business every month",
  "Certified across Windows, macOS, iOS, and Android",
  "Transparent pricing — no hidden fees or surprise bills",
  "Australian-owned and locally operated since 2012",
  "Dedicated account manager for every client",
];

const industryEmoji: Record<string, string> = {
  tradies: "🔧",
  retail: "🛍️",
  medical: "🏥",
  hospitality: "🍽️",
};

export function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative bg-primary overflow-hidden min-h-[600px] flex items-center"
        data-ocid="home.hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-it-services.dim_1400x700.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-primary/82" />
        {/* Warm amber glow left */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 10% 70%, oklch(0.75 0.18 60) 0%, transparent 40%), radial-gradient(ellipse at 80% 20%, oklch(0.55 0.12 200) 0%, transparent 40%)",
          }}
        />
        <div className="container relative z-10 py-24 md:py-32">
          <AnimatedSection>
            <Badge className="bg-accent/20 text-accent border-0 text-sm font-semibold tracking-wide mb-5">
              {home.hero.label}
            </Badge>
            <h1 className="font-display font-bold text-primary-foreground text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-3xl mb-6">
              Professional IT and Web Solutions for Australian Businesses
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Helping small and medium Australian businesses thrive online and
              with technology — from custom websites to fully managed IT
              infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton
                label="Get Free Consultation"
                href="/contact"
                variant="primary"
                showArrow
                data-ocid="home.hero_primary_cta"
              />
              <CTAButton
                label="Explore Services"
                href="/services"
                variant="outline"
                data-ocid="home.hero_secondary_cta"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Trust bar ─────────────────────────────────────────────── */}
      <section
        className="bg-card border-y border-border"
        data-ocid="home.trust_bar"
      >
        <div className="container py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
            {[
              "✅ Australian-Owned Business",
              "⚡ <1-Hour Critical Response",
              "🔒 99.9% Uptime SLA",
              "🚫 No Lock-In Contracts",
              "🎓 Certified Technicians",
            ].map((item) => (
              <span key={item} className="font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section
        className="py-20 bg-background"
        data-ocid="home.services_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="What We Do"
              title="Comprehensive IT & Web Services"
              subtitle="Everything your Australian business needs to stay connected, secure, and growing online."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 80} direction="up">
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  href={service.href}
                  index={i}
                />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <CTAButton
              label="View All Services"
              href="/services"
              variant="secondary"
              showArrow
              data-ocid="home.view_all_services_button"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30" data-ocid="home.why_section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Why TechPro Services"
              title="Local Experts Who Actually Show Up"
              subtitle="We're not a call centre. We're a Melbourne-based team that knows Australian businesses — from the NBN to the GST."
              className="mb-12"
            />
          </AnimatedSection>

          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {whyStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 80} direction="up">
                <Card
                  className="text-center border-border bg-card hover-lift"
                  data-ocid={`home.stat_card.${i + 1}`}
                >
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-display font-bold text-3xl md:text-4xl text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-sm text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground leading-snug">
                      {stat.sublabel}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Points + industry grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <h3 className="font-display font-semibold text-foreground text-xl mb-5">
                What makes us different
              </h3>
              <ul className="space-y-3">
                {whyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 mt-8">
                <CTAButton
                  label="About Us"
                  href="/about"
                  variant="secondary"
                  showArrow
                  data-ocid="home.about_cta"
                />
                <CTAButton
                  label="Free IT Audit"
                  href="/free-it-audit"
                  variant="outline"
                  data-ocid="home.free_audit_cta"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection
              direction="right"
              className="grid grid-cols-2 gap-4"
            >
              {siteConfig.industries.map((industry, i) => (
                <Link
                  key={industry.slug}
                  to={industry.href}
                  className="bg-card rounded-xl p-5 border border-border hover-lift text-center group"
                  data-ocid={`home.industry_mini.${i + 1}`}
                >
                  <div className="text-3xl mb-3">
                    {industryEmoji[industry.slug] ?? "💼"}
                  </div>
                  <div className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {industry.title}
                  </div>
                </Link>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────────── */}
      <section
        className="py-20 bg-background"
        data-ocid="home.industries_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Industry Verticals"
              title="Tailored for Your Industry"
              subtitle="We understand the unique challenges of Australian businesses across key sectors."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.industries.map((industry, i) => (
              <AnimatedSection
                key={industry.slug}
                delay={i * 80}
                direction="up"
              >
                <Link
                  to={industry.href}
                  className="bg-card rounded-xl p-6 border border-border hover-lift group block h-full"
                  data-ocid={`home.industry_link.${i + 1}`}
                >
                  <div className="text-4xl mb-4">
                    {industryEmoji[industry.slug] ?? "💼"}
                  </div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-primary font-medium">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="home.testimonials_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Client Stories"
              title="Trusted by Australian Businesses"
              subtitle="See how we've helped businesses like yours transform their technology."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {home.testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 100} direction="up">
                <div
                  className="bg-card rounded-xl p-6 border border-border h-full flex flex-col shadow-card"
                  data-ocid={`home.testimonial.${i + 1}`}
                >
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t.role}
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs shrink-0">
                      {t.industry}
                    </Badge>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ─────────────────────────────────────────── */}
      <section className="py-20 bg-background" data-ocid="home.blog_section">
        <div className="container">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <SectionHeading
                label="Resources & Insights"
                title="Latest from Our Blog"
                subtitle="Practical IT and web tips for Australian businesses."
                align="left"
                className="mb-0"
              />
              <CTAButton
                label="View All Posts"
                href="/blog"
                variant="outline"
                showArrow
                data-ocid="home.blog_view_all"
              />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pageContent.blog.posts.slice(0, 3).map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 80} direction="up">
                <Link
                  to="/blog"
                  className="bg-card rounded-xl border border-border hover-lift group block h-full overflow-hidden"
                  data-ocid={`home.blog_post.${i + 1}`}
                >
                  <div className="bg-muted/40 h-40 flex items-center justify-center text-4xl border-b border-border">
                    <BookOpen className="w-10 h-10 text-primary/30" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CalendarDays className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors text-base leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-primary font-medium">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Banner ─────────────────────────────────────── */}
      <section
        className="relative bg-primary py-20 overflow-hidden"
        data-ocid="home.cta_banner"
      >
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 50%, oklch(0.75 0.18 60) 0%, transparent 45%), radial-gradient(ellipse at 75% 60%, oklch(0.6 0.12 200) 0%, transparent 40%)",
          }}
        />
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold tracking-wide uppercase mb-5">
              <TrendingUp className="w-4 h-4" /> Let's Get Started
            </div>
            <h2 className="font-display font-bold text-primary-foreground text-3xl md:text-4xl lg:text-5xl tracking-tight mb-5">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
              Book a free IT audit or 30-minute consultation and discover how
              TechPro Services can take your business to the next level.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton
                label="Free IT Audit"
                href="/free-it-audit"
                variant="primary"
                showArrow
                data-ocid="home.bottom_cta_audit"
              />
              <CTAButton
                label="Book Consultation"
                href="/contact"
                variant="outline"
                data-ocid="home.bottom_cta_contact"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
