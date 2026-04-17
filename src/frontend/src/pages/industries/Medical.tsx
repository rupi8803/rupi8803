import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe,
  HardDrive,
  Headphones,
  Lock,
  MonitorCheck,
  Shield,
  UserCheck,
} from "lucide-react";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { CTAButton } from "../../components/ui/CTAButton";
import { PageHero } from "../../components/ui/PageHero";
import { SectionHeading } from "../../components/ui/SectionHeading";

const challenges = [
  {
    icon: Lock,
    title: "Patient Data Security & Privacy",
    desc: "Healthcare holds the most sensitive personal data. A breach doesn't just damage your practice — it harms your patients and can violate Australian law.",
  },
  {
    icon: MonitorCheck,
    title: "Zero Downtime Tolerance",
    desc: "When systems fail in a medical practice, patient care is directly impacted. Downtime is not an option — reliability is non-negotiable.",
  },
  {
    icon: FileText,
    title: "Managing Clinical Software",
    desc: "Best Practice, Medical Director, Cliniko, and other clinical platforms require specialist IT support to keep running smoothly.",
  },
  {
    icon: AlertTriangle,
    title: "Ageing Hardware",
    desc: "Outdated computers and servers running critical clinical software create security vulnerabilities and performance bottlenecks.",
  },
  {
    icon: Headphones,
    title: "No Dedicated IT Support",
    desc: "Most small and medium practices don't have in-house IT — when something breaks, there's no one to call. Until now.",
  },
];

const services = [
  {
    icon: Shield,
    title: "Managed IT with Healthcare Focus",
    desc: "24/7 proactive monitoring, maintenance, and support — with healthcare-specific expertise in clinical software environments.",
    href: "/services/managed-it",
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery — Australian Data",
    desc: "Medical-grade backup with Australian data residency, meeting Privacy Act and My Health Record obligations.",
    href: "/services/backup-recovery",
  },
  {
    icon: Headphones,
    title: "Dedicated IT Support",
    desc: "Fast, responsive support for hardware, software, and network issues — remote and on-site. Staff focus on patients, not tech.",
    href: "/services/it-support",
  },
  {
    icon: Globe,
    title: "Website with Booking Integration",
    desc: "Professional practice websites with appointment booking placeholders, patient information, and after-hours guidance.",
    href: "/services/web-design",
  },
];

const complianceItems = [
  "Australian Privacy Act compliance guidance",
  "My Health Record integration support",
  "HIPAA-aligned security practices",
  "Encrypted data storage and transmission",
  "Secure email and data handling best practices",
  "Regular security audits and compliance reporting",
  "Staff cybersecurity awareness training",
  "Network segmentation to isolate clinical systems",
];

export function MedicalPage() {
  return (
    <>
      <PageHero
        label="Medical & Healthcare"
        title="Technology Solutions for Medical Practices — Secure, Compliant, Reliable IT"
        subtitle="Protecting patient data and keeping your practice running — TechPro delivers compliant, security-first IT for GP clinics, specialists, and allied health providers."
        ctas={[
          {
            label: "Get Free IT Audit",
            href: "/free-it-audit",
            variant: "primary",
          },
          { label: "Book Consultation", href: "/contact", variant: "outline" },
        ]}
      />

      {/* Challenges */}
      <section
        className="py-20 bg-background"
        data-ocid="medical.challenges_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Healthcare Challenges"
              title="The IT Challenges Medical Practices Face"
              subtitle="Healthcare IT is uniquely demanding — high-stakes data, compliance obligations, and zero tolerance for downtime."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 80} direction="up">
                <div
                  className="bg-card rounded-xl p-6 border border-border h-full shadow-card"
                  data-ocid={`medical.challenge.${i + 1}`}
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
        data-ocid="medical.solutions_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="How We Help"
              title="Healthcare IT That Puts Patients First"
              subtitle="Security-first solutions designed for the unique demands of Australian medical practices."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 80} direction="up">
                <Link
                  to={s.href}
                  className="block group h-full"
                  data-ocid={`medical.solution.${i + 1}`}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div
                className="bg-card rounded-xl p-6 border border-border shadow-card"
                data-ocid="medical.staff_training"
              >
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Staff IT Training & Support
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Onboarding, training, and ongoing support for clinical and
                      admin staff — so your team can use technology confidently
                      and securely.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-card rounded-xl p-6 border border-border shadow-card"
                data-ocid="medical.security_infra"
              >
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      Security-First IT Infrastructure
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Firewalls, VPNs, network segmentation, and endpoint
                      protection — built to meet Australian healthcare data
                      security standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compliance Section */}
      <section
        className="py-20 bg-background"
        data-ocid="medical.compliance_section"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <SectionHeading
                label="Compliance"
                title="We Help Practices Meet Their Legal Obligations"
                align="left"
                className="mb-6"
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Australian medical practices must meet strict data privacy and
                security obligations under the Privacy Act 1988, the My Health
                Records Act, and RACGP security standards. Non-compliance is not
                just a legal risk — it erodes patient trust.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TechPro doesn't just manage your IT — we actively help you
                understand and maintain your compliance posture. Our team
                provides guidance, documentation, and technical controls aligned
                to Australian healthcare requirements.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Privacy Act 1988",
                  "My Health Record",
                  "RACGP Security",
                  "HIPAA-Aligned",
                ].map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-display font-bold text-foreground">
                    Compliance & Security Checklist
                  </div>
                </div>
                <div className="space-y-3">
                  {complianceItems.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <CTAButton
                  label="Book a Free Security Audit"
                  href="/free-it-audit"
                  variant="secondary"
                  showArrow
                  className="mt-6 w-full justify-center"
                  data-ocid="medical.compliance_cta"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="medical.security_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Security Approach"
              title="Three Pillars of Healthcare IT Security"
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Lock,
                title: "Zero-Trust Security",
                desc: "Every device, user, and connection is verified before accessing patient data — no implicit trust, no exceptions.",
              },
              {
                icon: Shield,
                title: "24/7 Threat Monitoring",
                desc: "Continuous monitoring detects and responds to security threats before they become breaches or incidents.",
              },
              {
                icon: FileText,
                title: "Compliance Reporting",
                desc: "Regular reports demonstrating your compliance posture — ready for audits, accreditation, and practice reviews.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100} direction="up">
                <div
                  className="flex gap-4 bg-card rounded-xl p-5 border border-border shadow-card h-full"
                  data-ocid={`medical.security.${i + 1}`}
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

      {/* Success Story */}
      <section
        className="py-20 bg-background"
        data-ocid="medical.success_story_section"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-card rounded-2xl border border-border p-10 shadow-card text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-sm font-semibold tracking-wide uppercase mb-6">
                  Success Story
                </div>
                <blockquote className="font-display text-2xl font-bold text-foreground leading-snug mb-6">
                  "GP practice reduced IT incidents by 70% after moving to
                  TechPro Managed IT — staff can focus on patients, not tech
                  problems."
                </blockquote>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                  A busy GP clinic was experiencing frequent system outages,
                  security concerns about their ageing hardware, and no IT plan
                  for their growing patient database. TechPro migrated them to a
                  fully managed IT environment, replaced critical hardware, and
                  implemented a compliance-aligned backup strategy. IT incidents
                  dropped by 70% in the first year.
                </p>
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  {[
                    { val: "70%", label: "Fewer IT incidents" },
                    { val: "100%", label: "Compliance met" },
                    { val: "Zero", label: "Data breaches" },
                  ].map((stat, i) => (
                    <div
                      key={stat.label}
                      className="text-center bg-muted/50 rounded-xl p-4"
                      data-ocid={`medical.stat.${i + 1}`}
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
      <section className="bg-primary py-16" data-ocid="medical.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl mb-4">
              Protect Your Practice and Your Patients
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Book a free IT security audit and compliance review for your
              healthcare practice — no obligation, just clarity.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton
                label="Get Free IT Audit"
                href="/free-it-audit"
                variant="primary"
                showArrow
                data-ocid="medical.bottom_cta_audit"
              />
              <CTAButton
                label="Book Consultation"
                href="/contact"
                variant="outline"
                data-ocid="medical.bottom_cta_consult"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
