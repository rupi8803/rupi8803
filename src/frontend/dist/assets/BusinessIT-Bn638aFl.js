import { r as reactExports, j as jsxRuntimeExports, B as Button } from "./index-j41ECiun.js";
import { B as Badge } from "./badge-COdL3ccf.js";
import { a as AnimatedSection, A as ArrowRight, C as CTAButton } from "./CTAButton-DHNNlx56.js";
import { P as PageHero } from "./PageHero-BgH_GaHd.js";
import { S as SectionHeading } from "./SectionHeading-DtkVSTKL.js";
import { C as CircleCheck } from "./circle-check-BvhOiaW2.js";
import { G as Globe } from "./globe-BcGvwf_Y.js";
import { W as Wrench } from "./wrench-CQeHpUvs.js";
import { H as Headphones } from "./headphones-ChuZkNLJ.js";
import { S as Shield } from "./shield-Cp6MBouf.js";
import { C as CreditCard } from "./credit-card-CtMGbNqi.js";
import { H as HardDrive } from "./hard-drive-BTahsT5G.js";
import { S as Search } from "./search-C_ju7FbJ.js";
import { U as Users } from "./users-C_VM2SdV.js";
const quizSteps = [
  {
    id: "size",
    question: "How many people work in your business?",
    options: ["1–5 people", "6–20 people", "21–50 people", "50+ people"]
  },
  {
    id: "challenge",
    question: "What's your main technology challenge?",
    options: [
      "Need a website",
      "IT support problems",
      "Data security concerns",
      "POS / Sales systems",
      "All of the above"
    ]
  },
  {
    id: "setup",
    question: "How would you describe your current IT setup?",
    options: [
      "No IT in place",
      "Basic (laptop + internet)",
      "Established IT environment",
      "Existing setup, looking to upgrade"
    ]
  },
  {
    id: "budget",
    question: "What budget model suits you best?",
    options: [
      "Pay as I go (ad-hoc)",
      "Fixed monthly plan",
      "Annual contract for best value",
      "Not sure yet"
    ]
  }
];
function getRecommendations(answers) {
  const challenge = answers.challenge ?? "";
  const setup = answers.setup ?? "";
  const budget = answers.budget ?? "";
  const recs = [];
  const needsWeb = challenge.includes("website") || challenge.includes("All of the above");
  const needsIT = challenge.includes("IT support") || challenge.includes("All of the above");
  const needsSecurity = challenge.includes("security") || challenge.includes("All of the above");
  const needsPOS = challenge.includes("POS") || challenge.includes("All of the above");
  const isNewToIT = setup.includes("No IT") || setup.includes("Basic");
  const wantsManaged = budget.includes("Monthly") || budget.includes("Annual");
  if (needsWeb) {
    recs.push({
      title: "Web Design & Development",
      reason: "A professional website is your digital shopfront. We build on WordPress, Shopify, Wix, or Squarespace to suit your goals.",
      href: "/services/web-design"
    });
  }
  if (needsPOS) {
    recs.push({
      title: "POS Solutions",
      reason: "We'll set up, integrate, and train your team on a POS system that fits your workflow — retail, hospitality, or service businesses.",
      href: "/services/pos-solutions"
    });
  }
  if (wantsManaged || needsSecurity) {
    recs.push({
      title: "Managed IT Services",
      reason: "Proactive 24/7 monitoring and management means problems get caught before they become crises. Ideal for businesses that want predictable IT costs.",
      href: "/services/managed-it"
    });
  }
  if (needsIT && !wantsManaged) {
    recs.push({
      title: "IT Support (Small Business)",
      reason: "Fast remote and on-site IT support when you need it. No contract required — we're here when something goes wrong.",
      href: "/services/it-support"
    });
  }
  if (isNewToIT) {
    recs.push({
      title: "Backup & Recovery",
      reason: "Most businesses don't have a backup strategy until it's too late. We protect your critical data from day one.",
      href: "/services/backup-recovery"
    });
  }
  if (recs.length < 2) {
    recs.push({
      title: "IT Support (Small Business)",
      reason: "Reliable on-site and remote IT support for the moments your technology lets you down.",
      href: "/services/it-support"
    });
  }
  return recs.slice(0, 3);
}
const allServices = [
  {
    icon: Globe,
    title: "Web Design & Development",
    desc: "Custom websites on WordPress, Shopify, Wix, and Squarespace.",
    benefit: "Converts visitors into customers",
    href: "/services/web-design"
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Ongoing updates, backups, and security patching.",
    benefit: "Always online, always secure",
    href: "/services/website-maintenance"
  },
  {
    icon: Headphones,
    title: "IT Support",
    desc: "Fast remote and on-site support for small businesses.",
    benefit: "Fix issues within hours, not days",
    href: "/services/it-support"
  },
  {
    icon: Shield,
    title: "Managed IT Services",
    desc: "Proactive monitoring and full infrastructure management.",
    benefit: "Prevent problems before they happen",
    href: "/services/managed-it"
  },
  {
    icon: CreditCard,
    title: "POS Solutions",
    desc: "End-to-end POS setup for retail, hospitality, and services.",
    benefit: "Seamless sales and inventory",
    href: "/services/pos-solutions"
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery",
    desc: "Enterprise-grade data protection and disaster recovery.",
    benefit: "Never lose critical business data",
    href: "/services/backup-recovery"
  }
];
const steps = [
  {
    number: "01",
    icon: Search,
    title: "Assessment",
    desc: "We take the time to understand your business — your team size, current tech, pain points, and goals. No assumptions, just honest discovery."
  },
  {
    number: "02",
    icon: Users,
    title: "Solution Design",
    desc: "We combine only the services you actually need into a coherent plan — IT, web, and support that work together seamlessly."
  },
  {
    number: "03",
    icon: Headphones,
    title: "Ongoing Support",
    desc: "One point of contact for everything. Whether it's your website, a crashed laptop, or a POS query — we handle it."
  }
];
const caseStudy = {
  client: "Bloom Boutique Retail",
  challenge: "Bloom Boutique was operating a dated website, managing inventory by hand, and had no IT support when hardware failed. Staff were spending 10+ hours a week on admin that technology should have been handling.",
  solution: "We deployed a Shopify e-commerce site synced with an in-store POS system, migrated their data to cloud backup, and enrolled them in our Managed IT Services plan. One partner, one invoice.",
  outcomes: [
    "Online sales up 45% in 3 months",
    "10 hrs/week saved on manual admin",
    "Zero data loss since migration",
    "Single point of contact for all IT and web"
  ],
  tags: ["Web Design", "POS Solutions", "Managed IT"]
};
function BusinessITPage() {
  const [step, setStep] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState({});
  const [quizDone, setQuizDone] = reactExports.useState(false);
  function handleAnswer(value) {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        label: "Business IT Solutions",
        title: "Everything Your Business Needs Under One Roof",
        subtitle: "Not sure where to start with IT or web? We assess your situation and recommend only what you need — then deliver it all under one partnership.",
        ctas: [
          {
            label: "Book Free Consultation",
            href: "/contact",
            variant: "primary"
          },
          { label: "Take Service Quiz", href: "#quiz", variant: "outline" }
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-12 bg-card border-b border-border",
        "data-ocid": "business_it.intro_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "fade", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Many businesses come to us unsure whether they need a new website, IT support, or both. That's exactly why we built this service — a single assessment, a tailored plan, and one team to deliver and maintain it all." }) }) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "quiz",
        className: "py-20 bg-background scroll-mt-20",
        "data-ocid": "business_it.quiz_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Find Your Fit",
              title: "Which Services Do You Actually Need?",
              subtitle: "Answer 4 quick questions and we'll recommend the right services for your business. Takes under a minute.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto", children: !quizDone ? /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 mb-6", "aria-label": "Quiz progress", children: quizSteps.map((qs, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= step ? "bg-primary" : "bg-border"}`
              },
              qs.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-6 font-medium tracking-wide uppercase", children: [
              "Question ",
              step + 1,
              " of ",
              quizSteps.length
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-card border border-border rounded-2xl p-8 shadow-card",
                "data-ocid": "business_it.quiz_card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-xl mb-6", children: quizSteps[step].question }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: quizSteps[step].options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleAnswer(option),
                      className: "w-full text-left px-5 py-4 rounded-xl border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all duration-200 text-sm font-medium text-foreground flex items-center justify-between group",
                      "data-ocid": "business_it.quiz_option",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: option }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" })
                      ]
                    },
                    option
                  )) })
                ]
              }
            )
          ] }, step) : /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-2xl p-8 shadow-card",
              "data-ocid": "business_it.quiz_results",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary text-sm uppercase tracking-wide", children: "Your Personalised Recommendation" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-2xl mb-6", children: "Based on your answers, we recommend:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-8", children: recommendations.map((rec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex gap-4 p-4 rounded-xl bg-muted/40 border border-border",
                    "data-ocid": `business_it.recommendation.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs", children: i + 1 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-foreground mb-1", children: rec.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: rec.reason })
                      ] })
                    ]
                  },
                  rec.title
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CTAButton,
                    {
                      label: "Book Free Consultation",
                      href: "/contact",
                      variant: "primary",
                      showArrow: true,
                      "data-ocid": "business_it.quiz_cta"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      onClick: resetQuiz,
                      "data-ocid": "business_it.quiz_reset",
                      children: "Retake Quiz"
                    }
                  )
                ] })
              ]
            }
          ) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "business_it.all_services_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "All Services",
              title: "One Partner for Every Technology Need",
              subtitle: "Stop juggling multiple vendors. All our services are designed to work together so you get seamless support under one roof.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: allServices.map((svc, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 70, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: svc.href,
              className: "group block bg-card rounded-xl p-6 border border-border h-full shadow-card hover:border-primary/50 hover:shadow-elevated transition-all duration-200",
              "data-ocid": `business_it.service_card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(svc.icon, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-1.5", children: svc.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-3", children: svc.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs font-semibold text-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                  svc.benefit
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all", children: [
                  "Learn more ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                ] })
              ]
            }
          ) }, svc.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-background",
        "data-ocid": "business_it.how_we_work_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Our Process",
              title: "How We Work Together",
              subtitle: "We don't sell products — we build partnerships. Here's how we get started.",
              className: "mb-14"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-border" }),
            steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { delay: i * 120, direction: "up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative text-center",
                "data-ocid": `business_it.step.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-5 relative z-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-8 h-8 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center", children: i + 1 })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-xl mb-3", children: s.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
                ]
              }
            ) }, s.title))
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 bg-muted/30",
        "data-ocid": "business_it.case_study_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              label: "Client Story",
              title: "Combined IT + Web in Action",
              subtitle: "See how we delivered a complete technology transformation for one retail business.",
              className: "mb-12"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "up", delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto bg-card rounded-2xl border border-border shadow-elevated overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary px-8 py-6 flex flex-wrap gap-3 items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm font-medium uppercase tracking-wide", children: "Case Study" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-primary-foreground text-2xl", children: caseStudy.client })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: caseStudy.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "bg-accent text-accent-foreground border-0 font-semibold",
                  children: tag
                },
                tag
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display font-semibold text-foreground mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-4 bg-destructive rounded-full inline-block" }),
                  "The Challenge"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6", children: caseStudy.challenge }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display font-semibold text-foreground mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-4 bg-primary rounded-full inline-block" }),
                  "Our Solution"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: caseStudy.solution })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display font-semibold text-foreground mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-4 bg-primary rounded-full inline-block" }),
                  "The Outcomes"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: caseStudy.outcomes.map((outcome) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/15",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: outcome })
                    ]
                  },
                  outcome
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CTAButton,
                  {
                    label: "See All Case Studies",
                    href: "/portfolio",
                    variant: "outline",
                    showArrow: true,
                    "data-ocid": "business_it.case_study_link"
                  }
                ) })
              ] })
            ] })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-16", "data-ocid": "business_it.cta_banner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-primary-foreground text-3xl md:text-4xl mb-4", children: "Let's Build Your Technology Foundation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8", children: "Book a free 30-minute consultation. We'll assess your current setup and recommend a tailored technology roadmap — no commitment required." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CTAButton,
          {
            label: "Book Free Consultation",
            href: "/contact",
            variant: "primary",
            showArrow: true,
            "data-ocid": "business_it.bottom_cta"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var _a;
              (_a = document.getElementById("quiz")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            },
            className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-md border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors",
            "data-ocid": "business_it.take_quiz_cta",
            children: "Take Service Quiz"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  BusinessITPage
};
