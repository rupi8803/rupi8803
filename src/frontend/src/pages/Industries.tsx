import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { CTAButton } from "../components/ui/CTAButton";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeading } from "../components/ui/SectionHeading";
import { siteConfig } from "../config/siteContent";

export function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industry Solutions"
        title="IT & Web Solutions Built for Your Industry"
        subtitle="We understand that every industry has unique challenges. Our tailored solutions address the specific needs of Australian businesses across key sectors."
        ctas={[
          {
            label: "Get Industry-Specific Advice",
            href: "/contact",
            variant: "primary",
          },
          { label: "Free Consultation", href: "/contact", variant: "outline" },
        ]}
      />

      <section
        className="py-20 bg-background"
        data-ocid="industries.list_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Industries We Serve"
              title="Specialised Expertise Across Key Sectors"
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.industries.map((industry, i) => (
              <AnimatedSection
                key={industry.slug}
                delay={i * 80}
                direction="up"
              >
                <Link
                  to={industry.href}
                  className="bg-card rounded-2xl p-8 border border-border hover-lift group block"
                  data-ocid={`industries.card.${i + 1}`}
                >
                  <div className="flex items-start gap-5">
                    <div className="text-4xl">
                      {industry.slug === "tradies"
                        ? "🔧"
                        : industry.slug === "retail"
                          ? "🛍️"
                          : industry.slug === "medical"
                            ? "🏥"
                            : "🍽️"}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-foreground text-xl group-hover:text-primary transition-colors mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {industry.description}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-primary font-semibold">
                        Explore Solutions <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16" data-ocid="industries.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              We work with businesses across all sectors. Contact us to discuss
              your specific requirements.
            </p>
            <CTAButton
              label="Talk to an Expert"
              href="/contact"
              variant="primary"
              showArrow
              data-ocid="industries.bottom_cta"
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
