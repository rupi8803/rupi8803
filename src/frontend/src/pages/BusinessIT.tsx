import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Globe,
  HardDrive,
  Headphones,
  Search,
  Shield,
  ShoppingCart,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { CTAButton } from "../components/ui/CTAButton";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeading } from "../components/ui/SectionHeading";

// ─── Quiz data ───────────────────────────────────────────────────────────────

const quizSteps = [
  {
    id: "size",
    question: "How many people work in your business?",
    options: ["1–5 people", "6–20 people", "21–50 people", "50+ people"],
  },
  {
    id: "challenge",
    question: "What's your main technology challenge?",
    options: [
      "Need a website",
      "IT support problems",
      "Data security concerns",
      "POS / Sales systems",
      "All of the above",
    ],
  },
  {
    id: "setup",
    question: "How would you describe your current IT setup?",
    options: [
      "No IT in place",
      "Basic (laptop + internet)",
      "Established IT environment",
      "Existing setup, looking to upgrade",
    ],
  },
  {
    id: "budget",
    question: "What budget model suits you best?",
    options: [
      "Pay as I go (ad-hoc)",
      "Fixed monthly plan",
      "Annual contract for best value",
      "Not sure yet",
    ],
  },
];

type Answers = Record<string, string>;

function getRecommendations(answers: Answers) {
  const challenge = answers.challenge ?? "";
  const setup = answers.setup ?? "";
  const budget = answers.budget ?? "";
  const recs: { title: string; reason: string; href: string }[] = [];

  const needsWeb =
    challenge.includes("website") || challenge.includes("All of the above");
  const needsIT =
    challenge.includes("IT support") || challenge.includes("All of the above");
  const needsSecurity =
    challenge.includes("security") || challenge.includes("All of the above");
  const needsPOS =
    challenge.includes("POS") || challenge.includes("All of the above");
  const isNewToIT = setup.includes("No IT") || setup.includes("Basic");
  const wantsManaged = budget.includes("Monthly") || budget.includes("Annual");

  if (needsWeb) {
    recs.push({
      title: "Web Design & Development",
      reason:
        "A professional website is your digital shopfront. We build on WordPress, Shopify, Wix, or Squarespace to suit your goals.",
      href: "/services/web-design",
    });
  }
  if (needsPOS) {
    recs.push({
      title: "POS Solutions",
      reason:
        "We'll set up, integrate, and train your team on a POS system that fits your workflow — retail, hospitality, or service businesses.",
      href: "/services/pos-solutions",
    });
  }
  if (wantsManaged || needsSecurity) {
    recs.push({
      title: "Managed IT Services",
      reason:
        "Proactive 24/7 monitoring and management means problems get caught before they become crises. Ideal for businesses that want predictable IT costs.",
      href: "/services/managed-it",
    });
  }
  if (needsIT && !wantsManaged) {
    recs.push({
      title: "IT Support (Small Business)",
      reason:
        "Fast remote and on-site IT support when you need it. No contract required — we're here when something goes wrong.",
      href: "/services/it-support",
    });
  }
  if (isNewToIT) {
    recs.push({
      title: "Backup & Recovery",
      reason:
        "Most businesses don't have a backup strategy until it's too late. We protect your critical data from day one.",
      href: "/services/backup-recovery",
    });
  }

  // Always offer at least 2–3 recs
  if (recs.length < 2) {
    recs.push({
      title: "IT Support (Small Business)",
      reason:
        "Reliable on-site and remote IT support for the moments your technology lets you down.",
      href: "/services/it-support",
    });
  }

  return recs.slice(0, 3);
}

// ─── Service overview cards ───────────────────────────────────────────────────

const allServices = [
  {
    icon: Globe,
    title: "Web Design & Development",
    desc: "Custom websites on WordPress, Shopify, Wix, and Squarespace.",
    benefit: "Converts visitors into customers",
    href: "/services/web-design",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Ongoing updates, backups, and security patching.",
    benefit: "Always online, always secure",
    href: "/services/website-maintenance",
  },
  {
    icon: Headphones,
    title: "IT Support",
    desc: "Fast remote and on-site support for small businesses.",
    benefit: "Fix issues within hours, not days",
    href: "/services/it-support",
  },
  {
    icon: Shield,
    title: "Managed IT Services",
    desc: "Proactive monitoring and full infrastructure management.",
    benefit: "Prevent problems before they happen",
    href: "/services/managed-it",
  },
  {
    icon: CreditCard,
    title: "POS Solutions",
    desc: "End-to-end POS setup for retail, hospitality, and services.",
    benefit: "Seamless sales and inventory",
    href: "/services/pos-solutions",
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery",
    desc: "Enterprise-grade data protection and disaster recovery.",
    benefit: "Never lose critical business data",
    href: "/services/backup-recovery",
  },
];

// ─── How we work ─────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Assessment",
    desc: "We take the time to understand your business — your team size, current tech, pain points, and goals. No assumptions, just honest discovery.",
  },
  {
    number: "02",
    icon: Users,
    title: "Solution Design",
    desc: "We combine only the services you actually need into a coherent plan — IT, web, and support that work together seamlessly.",
  },
  {
    number: "03",
    icon: Headphones,
    title: "Ongoing Support",
    desc: "One point of contact for everything. Whether it's your website, a crashed laptop, or a POS query — we handle it.",
  },
];

// ─── Case study ──────────────────────────────────────────────────────────────

const caseStudy = {
  client: "Bloom Boutique Retail",
  industry: "Retail",
  challenge:
    "Bloom Boutique was operating a dated website, managing inventory by hand, and had no IT support when hardware failed. Staff were spending 10+ hours a week on admin that technology should have been handling.",
  solution:
    "We deployed a Shopify e-commerce site synced with an in-store POS system, migrated their data to cloud backup, and enrolled them in our Managed IT Services plan. One partner, one invoice.",
  outcomes: [
    "Online sales up 45% in 3 months",
    "10 hrs/week saved on manual admin",
    "Zero data loss since migration",
    "Single point of contact for all IT and web",
  ],
  tags: ["Web Design", "POS Solutions", "Managed IT"],
};

// ─── Component ───────────────────────────────────────────────────────────────

export function BusinessITPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [quizDone, setQuizDone] = useState(false);

  function handleAnswer(value: string) {
    const key = quizSteps[step].id;
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    if (step < quizSteps.length - 1) {
      setStep(step + 1);
    } else {
      setQuizDone(true);
    }
  }

  function resetQuiz() {
    setStep(0);
    setAnswers({});
    setQuizDone(false);
  }

  const recommendations = quizDone ? getRecommendations(answers) : [];

  return (
    <>
      <PageHero
        label="Business IT Solutions"
        title="Everything Your Business Needs Under One Roof"
        subtitle="Not sure where to start with IT or web? We assess your situation and recommend only what you need — then deliver it all under one partnership."
        ctas={[
          {
            label: "Book Free Consultation",
            href: "/contact",
            variant: "primary",
          },
          { label: "Take Service Quiz", href: "#quiz", variant: "outline" },
        ]}
      />

      {/* Intro strip */}
      <section
        className="py-12 bg-card border-b border-border"
        data-ocid="business_it.intro_section"
      >
        <div className="container">
          <AnimatedSection direction="fade">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Many businesses come to us unsure whether they need a new
                website, IT support, or both. That's exactly why we built this
                service — a single assessment, a tailored plan, and one team to
                deliver and maintain it all.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Service Selector Quiz */}
      <section
        id="quiz"
        className="py-20 bg-background scroll-mt-20"
        data-ocid="business_it.quiz_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Find Your Fit"
              title="Which Services Do You Actually Need?"
              subtitle="Answer 4 quick questions and we'll recommend the right services for your business. Takes under a minute."
              className="mb-12"
            />
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            {!quizDone ? (
              <AnimatedSection key={step} direction="up">
                {/* Progress bar */}
                <div className="flex gap-1.5 mb-6" aria-label="Quiz progress">
                  {quizSteps.map((qs, i) => (
                    <div
                      key={qs.id}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= step ? "bg-primary" : "bg-border"}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mb-6 font-medium tracking-wide uppercase">
                  Question {step + 1} of {quizSteps.length}
                </p>
                <div
                  className="bg-card border border-border rounded-2xl p-8 shadow-card"
                  data-ocid="business_it.quiz_card"
                >
                  <h3 className="font-display font-bold text-foreground text-xl mb-6">
                    {quizSteps[step].question}
                  </h3>
                  <div className="grid gap-3">
                    {quizSteps[step].options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleAnswer(option)}
                        className="w-full text-left px-5 py-4 rounded-xl border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all duration-200 text-sm font-medium text-foreground flex items-center justify-between group"
                        data-ocid="business_it.quiz_option"
                      >
                        <span>{option}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection direction="up">
                <div
                  className="bg-card border border-border rounded-2xl p-8 shadow-card"
                  data-ocid="business_it.quiz_results"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-primary text-sm uppercase tracking-wide">
                      Your Personalised Recommendation
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-2xl mb-6">
                    Based on your answers, we recommend:
                  </h3>
                  <div className="space-y-4 mb-8">
                    {recommendations.map((rec, i) => (
                      <div
                        key={rec.title}
                        className="flex gap-4 p-4 rounded-xl bg-muted/40 border border-border"
                        data-ocid={`business_it.recommendation.${i + 1}`}
                      >
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-display font-semibold text-foreground mb-1">
                            {rec.title}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {rec.reason}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <CTAButton
                      label="Book Free Consultation"
                      href="/contact"
                      variant="primary"
                      showArrow
                      data-ocid="business_it.quiz_cta"
                    />
                    <Button
                      variant="outline"
                      onClick={resetQuiz}
                      data-ocid="business_it.quiz_reset"
                    >
                      Retake Quiz
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* All Services Overview */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="business_it.all_services_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="All Services"
              title="One Partner for Every Technology Need"
              subtitle="Stop juggling multiple vendors. All our services are designed to work together so you get seamless support under one roof."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allServices.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 70} direction="up">
                <a
                  href={svc.href}
                  className="group block bg-card rounded-xl p-6 border border-border h-full shadow-card hover:border-primary/50 hover:shadow-elevated transition-all duration-200"
                  data-ocid={`business_it.service_card.${i + 1}`}
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <svc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1.5">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {svc.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {svc.benefit}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section
        className="py-20 bg-background"
        data-ocid="business_it.how_we_work_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Our Process"
              title="How We Work Together"
              subtitle="We don't sell products — we build partnerships. Here's how we get started."
              className="mb-14"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-border" />
            {steps.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 120} direction="up">
                <div
                  className="relative text-center"
                  data-ocid={`business_it.step.${i + 1}`}
                >
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-5 relative z-10">
                    <s.icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="business_it.case_study_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Client Story"
              title="Combined IT + Web in Action"
              subtitle="See how we delivered a complete technology transformation for one retail business."
              className="mb-12"
            />
          </AnimatedSection>
          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border shadow-elevated overflow-hidden">
              <div className="bg-primary px-8 py-6 flex flex-wrap gap-3 items-center justify-between">
                <div>
                  <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wide">
                    Case Study
                  </p>
                  <h3 className="font-display font-bold text-primary-foreground text-2xl">
                    {caseStudy.client}
                  </h3>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {caseStudy.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-accent text-accent-foreground border-0 font-semibold"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-destructive rounded-full inline-block" />
                    The Challenge
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {caseStudy.challenge}
                  </p>
                  <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-primary rounded-full inline-block" />
                    Our Solution
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-primary rounded-full inline-block" />
                    The Outcomes
                  </h4>
                  <div className="space-y-3">
                    {caseStudy.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/15"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm font-medium text-foreground">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <CTAButton
                      label="See All Case Studies"
                      href="/portfolio"
                      variant="outline"
                      showArrow
                      data-ocid="business_it.case_study_link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-16" data-ocid="business_it.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl md:text-4xl mb-4">
              Let's Build Your Technology Foundation
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Book a free 30-minute consultation. We'll assess your current
              setup and recommend a tailored technology roadmap — no commitment
              required.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <CTAButton
                label="Book Free Consultation"
                href="/contact"
                variant="primary"
                showArrow
                data-ocid="business_it.bottom_cta"
              />
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("quiz")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
                data-ocid="business_it.take_quiz_cta"
              >
                Take Service Quiz
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
