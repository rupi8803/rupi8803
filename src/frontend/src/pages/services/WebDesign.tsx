import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Search,
  ShoppingCart,
  Smartphone,
  Star,
  TrendingUp,
} from "lucide-react";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { CTAButton } from "../../components/ui/CTAButton";
import { PageHero } from "../../components/ui/PageHero";
import { SectionHeading } from "../../components/ui/SectionHeading";

const platforms = [
  {
    name: "WordPress",
    icon: Globe,
    badge: "Most Popular",
    tagline: "Flexible, SEO-optimized, widely supported",
    desc: "The world's most powerful CMS powering 40% of all websites. Ideal for content-rich sites, blogs, and service businesses.",
    bestFor: ["Service businesses", "Blogs & content sites", "Local SEO focus"],
  },
  {
    name: "Shopify",
    icon: ShoppingCart,
    badge: "Best for E-commerce",
    tagline: "E-commerce powerhouse, easy product management",
    desc: "Australia's leading e-commerce platform. Built for product-based businesses ready to sell online at scale.",
    bestFor: ["Online stores", "Product catalogues", "Omnichannel retail"],
  },
  {
    name: "Wix",
    icon: Smartphone,
    badge: "",
    tagline: "Beginner-friendly, quick launch",
    desc: "Drag-and-drop simplicity with professional results. Great for small businesses wanting to launch quickly.",
    bestFor: ["Quick launches", "Small service sites", "Budget-conscious"],
  },
  {
    name: "Squarespace",
    icon: Star,
    badge: "",
    tagline: "Design-focused, great for portfolios",
    desc: "Award-winning design templates that look stunning out of the box. Perfect for creatives and portfolio sites.",
    bestFor: ["Portfolios & creatives", "Restaurants & venues", "Brand-first"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We learn your business goals, target audience, competitors, and brand vision through a focused consultation.",
    duration: "1–2 days",
  },
  {
    step: "02",
    title: "Design",
    desc: "Our designers create wireframes and high-fidelity mockups tailored to your brand — you approve before we build.",
    duration: "3–5 days",
  },
  {
    step: "03",
    title: "Development",
    desc: "We build the full site with all pages, content, integrations, and functionality to your approved specifications.",
    duration: "1–3 weeks",
  },
  {
    step: "04",
    title: "Testing",
    desc: "Thorough QA across all major browsers, devices, and screen sizes. Performance and accessibility checked.",
    duration: "2–3 days",
  },
  {
    step: "05",
    title: "Launch",
    desc: "We go live, hand over full ownership, and provide training so you can manage your site with confidence.",
    duration: "1 day",
  },
];

const featuresIncluded = [
  "Fully responsive design (mobile-first)",
  "SEO basics & meta setup",
  "Contact forms & lead capture",
  "Image optimisation",
  "SSL security certificate",
  "Google Analytics setup",
  "Cross-browser compatibility",
  "Social media integration",
  "Speed performance tuning",
  "Content management training",
];

const caseStudies = [
  {
    client: "Webb Electrical Services",
    industry: "Tradies",
    platform: "WordPress",
    challenge:
      "Local electrician had no web presence and was losing leads to competitors found online.",
    result:
      "Mobile-first WordPress site with online quoting form. Ranked page 1 for local search terms within 8 weeks.",
    outcomes: [
      "180% more enquiries",
      "Page 1 Google ranking",
      "Online quoting",
    ],
    tag: "Tradie Website",
  },
  {
    client: "Bloom Boutique Retail",
    industry: "Retail",
    platform: "Shopify",
    challenge:
      "Established boutique needed an online store synced with their in-store inventory.",
    result:
      "Full Shopify e-commerce store integrated with POS. Launched within 3 weeks, first sale within 48 hours.",
    outcomes: ["Sales up 45%", "Shopify + POS sync", "3-week build"],
    tag: "Retail E-commerce",
  },
];

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Over 60% of Australian web traffic is mobile. Every site we build looks and performs perfectly on all screen sizes.",
  },
  {
    icon: Search,
    title: "SEO Ready from Day One",
    desc: "Clean code, fast load times, structured data, and proper meta setup give your site the best start in search rankings.",
  },
  {
    icon: TrendingUp,
    title: "Built to Convert",
    desc: "Strategic calls-to-action, trust signals, and lead capture forms designed to turn visitors into paying customers.",
  },
];

export function WebDesignPage() {
  return (
    <>
      <PageHero
        label="Web Design & Development"
        title="Beautiful Websites That Drive Results"
        subtitle="Professional websites for Australian businesses that attract customers, generate leads, and build brand credibility — on the platforms you know and trust."
        ctas={[
          { label: "Book Consultation", href: "/contact", variant: "primary" },
          { label: "Get a Quote", href: "/contact", variant: "outline" },
        ]}
      />

      {/* Service Overview */}
      <section
        className="py-16 bg-background"
        data-ocid="web_design.overview_section"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your website is your most powerful sales tool — and often the
                first impression your business makes. We design and develop
                professional websites for Australian businesses across every
                major platform, combining stunning design with solid technical
                foundations to help you attract customers, generate leads, and
                build lasting brand credibility.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Platform Cards */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="web_design.platforms_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Platforms We Build On"
              title="The Right Platform for Your Business"
              subtitle="We're platform-agnostic — we recommend what's right for your goals, budget, and technical needs."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {platforms.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 80} direction="up">
                <div
                  className="bg-card rounded-xl p-6 border border-border h-full shadow-card relative flex flex-col"
                  data-ocid={`web_design.platform.${i + 1}`}
                >
                  {p.badge && (
                    <Badge className="absolute top-4 right-4 bg-accent/20 text-accent border-0 text-xs font-medium">
                      {p.badge}
                    </Badge>
                  )}
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-accent font-medium mb-3">
                    {p.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {p.desc}
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Best for
                    </p>
                    <ul className="space-y-1">
                      {p.bestFor.map((item) => (
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
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section
        className="py-20 bg-background"
        data-ocid="web_design.process_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Our Process"
              title="From Brief to Launch in 5 Steps"
              subtitle="A structured, transparent process that keeps you informed at every stage — no surprises."
              className="mb-14"
            />
          </AnimatedSection>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <AnimatedSection key={step.step} delay={i * 100} direction="up">
                  <div
                    className="text-center relative"
                    data-ocid={`web_design.process_step.${i + 1}`}
                  >
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 relative z-10 shadow-card">
                      <span className="font-display font-bold text-primary text-lg">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      {step.desc}
                    </p>
                    <Badge
                      variant="outline"
                      className="text-xs text-muted-foreground"
                    >
                      {step.duration}
                    </Badge>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Included */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="web_design.features_section"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <SectionHeading
                label="What's Included"
                title="Every Website Comes with the Essentials"
                align="left"
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {featuresIncluded.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <div className="bg-card rounded-xl p-5 border border-border flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Websites starting from AUD $1,200
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    One-time cost, you own everything
                  </p>
                </div>
                <Link
                  to="/pricing"
                  className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 shrink-0 transition-colors"
                  data-ocid="web_design.pricing_link"
                >
                  See full pricing <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="space-y-4">
                {highlights.map((item, i) => (
                  <div
                    key={item.title}
                    className="flex gap-4 bg-card rounded-xl p-5 border border-border"
                    data-ocid={`web_design.feature_highlight.${i + 1}`}
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
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Case Study Previews */}
      <section
        className="py-20 bg-background"
        data-ocid="web_design.case_studies_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Case Studies"
              title="Real Websites. Real Results."
              subtitle="See how we've helped Australian businesses build their online presence."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.client} delay={i * 100} direction="up">
                <div
                  className="bg-card rounded-2xl border border-border p-7 h-full flex flex-col shadow-card"
                  data-ocid={`web_design.case_study.${i + 1}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <Badge variant="outline" className="text-xs mb-2">
                        {cs.tag}
                      </Badge>
                      <h3 className="font-display font-bold text-foreground text-lg">
                        {cs.client}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cs.industry} · {cs.platform}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-5 flex-1">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Challenge
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Result
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cs.result}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {cs.outcomes.map((o) => (
                      <div
                        key={o}
                        className="flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {o}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-8 text-center">
            <Link
              to="/portfolio"
              className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 justify-center transition-colors"
              data-ocid="web_design.portfolio_link"
            >
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16" data-ocid="web_design.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl mb-4">
              Ready to Build Your Dream Website?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Get a free quote within 24 hours. No obligation, no pressure —
              just expert advice on the best solution for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton
                label="Book Consultation"
                href="/contact"
                variant="primary"
                showArrow
                data-ocid="web_design.bottom_cta_primary"
              />
              <CTAButton
                label="Get a Quote"
                href="/contact"
                variant="outline"
                data-ocid="web_design.bottom_cta_secondary"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
