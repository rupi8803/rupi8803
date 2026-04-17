import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  HardDrive,
  Network,
  Quote,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { createActor } from "../backend";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeading } from "../components/ui/SectionHeading";

interface AuditForm {
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  itChallenges: string;
  preferredAuditDate: string;
}

const emptyForm: AuditForm = {
  contactName: "",
  companyName: "",
  email: "",
  phone: "",
  industry: "",
  itChallenges: "",
  preferredAuditDate: "",
};

const auditCategories = [
  {
    icon: Network,
    title: "Network Security Assessment",
    description:
      "We examine your firewall configuration, network segmentation, Wi-Fi security, and access controls to identify vulnerabilities before attackers do.",
    items: [
      "Firewall & router audit",
      "Wi-Fi security check",
      "Network access controls",
      "VPN & remote access review",
    ],
  },
  {
    icon: ClipboardList,
    title: "Device & Software Audit",
    description:
      "Full inventory of all hardware and software across your organisation — including unlicensed software, end-of-life devices, and outdated operating systems.",
    items: [
      "Hardware inventory & health",
      "Software licensing check",
      "OS & patch status",
      "End-of-life device flagging",
    ],
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery Review",
    description:
      "We test your backup processes and verify recovery procedures to ensure your data is truly protected in the event of hardware failure, ransomware, or accidental deletion.",
    items: [
      "Backup frequency & integrity",
      "Recovery time objectives",
      "Offsite & cloud backup check",
      "Disaster recovery readiness",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance & Efficiency Report",
    description:
      "Identify bottlenecks, inefficient workflows, and opportunities to reduce costs — from internet speeds to cloud usage and software duplication.",
    items: [
      "Internet & bandwidth analysis",
      "Cloud cost optimisation",
      "Workflow efficiency review",
      "Upgrade recommendations",
    ],
  },
];

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Book Your Audit",
    description:
      "Fill out the form below. We'll confirm your preferred date within 24 hours and agree on the scope of the assessment.",
  },
  {
    number: "02",
    icon: Shield,
    title: "We Assess Your Systems",
    description:
      "Our certified technicians conduct a thorough on-site or remote audit — typically 1–2 hours depending on your business size.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Receive Your Report",
    description:
      "Within 3 business days, you'll receive a detailed written report with prioritised findings, risk ratings, and actionable recommendations.",
  },
];

const testimonials = [
  {
    quote:
      "The free IT audit from TechPro was eye-opening. We discovered two critical security gaps we had no idea about. Their report was clear and their recommendations were practical. We've since moved to their Managed IT plan.",
    author: "Dr. Elizabeth Chen",
    role: "Principal, Seaside Medical Practice",
    rating: 5,
  },
  {
    quote:
      "As a retail business, I was sceptical about how useful an IT audit would be. TechPro identified outdated POS software and a major backup gap within the first hour. Completely worth it — and it was free!",
    author: "Marcus Webb",
    role: "Owner, Bloom Boutique Retail",
    rating: 5,
  },
  {
    quote:
      "We've been running on patched-together IT for years. The audit gave us a clear picture of where we stood and a realistic roadmap. TechPro didn't oversell anything — they just told us the truth.",
    author: "Lian Phan",
    role: "Operations Manager, The Grand Hotel Melbourne",
    rating: 5,
  },
];

const industryOptions = [
  { value: "retail", label: "Retail & E-commerce" },
  { value: "medical", label: "Medical & Healthcare" },
  { value: "hospitality", label: "Hospitality & Tourism" },
  { value: "tradies", label: "Tradies & Construction" },
  { value: "professional", label: "Professional Services" },
  { value: "education", label: "Education" },
  { value: "other", label: "Other" },
];

export function FreeITAuditPage() {
  const [form, setForm] = useState<AuditForm>(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { actor } = useActor(createActor);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.contactName || !form.email || !form.companyName) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      if (actor) {
        await actor.submitITAuditRequest({
          contactName: form.contactName,
          companyName: form.companyName,
          email: form.email,
          phone: form.phone,
          industry: form.industry,
          itChallenges: form.itChallenges,
          preferredAuditDate: form.preferredAuditDate,
        });
      }
      setSubmitted(true);
      setForm(emptyForm);
      toast.success(
        "IT audit request submitted! We'll contact you within 1 business day to schedule.",
      );
    } catch {
      toast.error(
        "Something went wrong. Please try again or call us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        label="Free IT Audit"
        title="Discover Hidden Risks in Your Business Technology"
        subtitle="Our comprehensive free IT audit uncovers security vulnerabilities, performance bottlenecks, and compliance gaps — at absolutely no cost or obligation to you."
        compact
        ctas={[
          {
            label: "Book Your Free Audit",
            href: "#audit-form",
            variant: "primary",
          },
        ]}
      />

      {/* Trust bar */}
      <div className="bg-primary/5 border-b border-border py-4">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              "100% Free — No hidden fees",
              "No obligation to purchase",
              "NDA signed before every audit",
              "Written report within 3 days",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's Included */}
      <section
        className="py-20 bg-background"
        data-ocid="audit.included_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="What's Included"
              title="A Comprehensive 4-Area IT Review"
              subtitle="Our audit covers every critical aspect of your business technology — from network security to backup integrity."
              className="mb-14"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {auditCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className="h-full shadow-card hover-lift"
                  data-ocid={`audit.category.${i + 1}`}
                >
                  <CardContent className="p-7">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <cat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground text-lg leading-tight">
                          {cat.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {cat.description}
                    </p>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="audit.how_it_works_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="How It Works"
              title="3 Simple Steps to Your Free IT Audit"
              subtitle="The process is straightforward and designed around your schedule."
              className="mb-14"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-0.5 bg-border z-0" />

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10"
                data-ocid={`audit.step.${i + 1}`}
              >
                <Card className="text-center shadow-card h-full">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center mx-auto mb-5 shadow-elevated">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <Badge
                      variant="outline"
                      className="mb-3 text-xs font-mono border-primary/30 text-primary"
                    >
                      Step {step.number}
                    </Badge>
                    <h3 className="font-display font-bold text-foreground text-lg mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Clock, label: "Duration", value: "1–2 Hours" },
              { icon: Shield, label: "Confidentiality", value: "NDA Signed" },
              {
                icon: FileText,
                label: "Report Delivered",
                value: "Within 3 Days",
              },
            ].map((item) => (
              <Card key={item.label} className="bg-primary/5 border-primary/20">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="font-display font-bold text-foreground">
                      {item.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 bg-background"
        data-ocid="audit.testimonials_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="What Businesses Say"
              title="Real Results from Real Audits"
              subtitle="Businesses across Australia have used our free IT audit to uncover risks they never knew existed."
              className="mb-14"
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`audit.testimonial.${i + 1}`}
              >
                <Card className="h-full shadow-card">
                  <CardContent className="p-7 flex flex-col h-full">
                    <div className="flex mb-4">
                      {Array.from({ length: t.rating }, (__, starIdx) => (
                        <Star
                          key={`star-${t.author}-${starIdx}`}
                          className="w-4 h-4 text-accent fill-accent"
                        />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-primary/30 mb-3 shrink-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                      "{t.quote}"
                    </p>
                    <div className="mt-5 pt-5 border-t border-border">
                      <p className="font-display font-bold text-foreground text-sm">
                        {t.author}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Request Form */}
      <section
        id="audit-form"
        className="py-20 bg-muted/30"
        data-ocid="audit.form_section"
      >
        <div className="container max-w-2xl">
          <AnimatedSection>
            <SectionHeading
              label="Book Your Audit"
              title="Request Your Free IT Audit"
              subtitle="Fill in the form below and we'll contact you within 1 business day to schedule your free audit at a time that works for you."
              className="mb-10"
            />

            {submitted ? (
              <Card
                className="border-primary/20 bg-primary/5"
                data-ocid="audit.success_state"
              >
                <CardContent className="p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-2">
                    Audit Request Submitted!
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                    Our team will reach out within 1 business day to schedule
                    your free IT audit. Check your email for confirmation.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    data-ocid="audit.new_request_button"
                  >
                    Submit Another Request
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    data-ocid="audit.form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="audit-company">Company Name *</Label>
                        <Input
                          id="audit-company"
                          value={form.companyName}
                          onChange={(e) =>
                            setForm({ ...form, companyName: e.target.value })
                          }
                          placeholder="Your Business Pty Ltd"
                          required
                          data-ocid="audit.company_input"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="audit-contact">Contact Name *</Label>
                        <Input
                          id="audit-contact"
                          value={form.contactName}
                          onChange={(e) =>
                            setForm({ ...form, contactName: e.target.value })
                          }
                          placeholder="Jane Smith"
                          required
                          data-ocid="audit.name_input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="audit-email">Email Address *</Label>
                        <Input
                          id="audit-email"
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="jane@business.com.au"
                          required
                          data-ocid="audit.email_input"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="audit-phone">Phone Number</Label>
                        <Input
                          id="audit-phone"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          placeholder="(03) 9000 1234"
                          data-ocid="audit.phone_input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label>Industry</Label>
                        <Select
                          value={form.industry}
                          onValueChange={(v) =>
                            setForm({ ...form, industry: v })
                          }
                        >
                          <SelectTrigger data-ocid="audit.industry_select">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industryOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="audit-date">Preferred Audit Date</Label>
                        <Input
                          id="audit-date"
                          type="date"
                          value={form.preferredAuditDate}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              preferredAuditDate: e.target.value,
                            })
                          }
                          data-ocid="audit.date_input"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="audit-challenges">
                        Current IT Challenges{" "}
                        <span className="text-muted-foreground font-normal">
                          (optional)
                        </span>
                      </Label>
                      <Textarea
                        id="audit-challenges"
                        value={form.itChallenges}
                        onChange={(e) =>
                          setForm({ ...form, itChallenges: e.target.value })
                        }
                        placeholder="Describe any current IT issues, concerns, or things you'd like us to focus on during the audit..."
                        rows={4}
                        data-ocid="audit.challenges_textarea"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base py-5"
                      data-ocid="audit.submit_button"
                    >
                      {submitting ? "Submitting..." : "Request Free IT Audit"}
                    </Button>

                    {submitting && (
                      <p
                        className="text-center text-sm text-muted-foreground"
                        data-ocid="audit.loading_state"
                      >
                        Submitting your request...
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            )}
          </AnimatedSection>
        </div>
      </section>

      <Separator />

      {/* Bottom CTA — Managed IT */}
      <section
        className="py-16 bg-primary text-primary-foreground"
        data-ocid="audit.managed_it_cta"
      >
        <div className="container text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-5 border-primary-foreground/30 text-primary-foreground/80"
            >
              After Your Audit
            </Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Take the Next Step with Managed IT Services
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Once you know the state of your IT, our Managed IT Services plan
              ensures every recommendation is actioned and your business stays
              protected, performant, and future-ready — for a fixed monthly fee.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services/managed-it" data-ocid="audit.managed_it_link">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  data-ocid="audit.managed_it_button"
                >
                  Explore Managed IT Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/pricing" data-ocid="audit.pricing_link">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  data-ocid="audit.pricing_button"
                >
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
