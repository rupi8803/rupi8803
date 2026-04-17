import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CreditCard,
  DollarSign,
  Globe,
  HardDrive,
  HelpCircle,
  Phone,
  Search,
  Shield,
  X,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { CTAButton } from "../components/ui/CTAButton";
import { PageHero } from "../components/ui/PageHero";
import { pageContent } from "../config/siteContent";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  General: <HelpCircle className="w-5 h-5" />,
  "Web Design & Development": <Globe className="w-5 h-5" />,
  "IT Support & Managed Services": <Shield className="w-5 h-5" />,
  "Pricing & Payments": <DollarSign className="w-5 h-5" />,
  "POS Solutions": <CreditCard className="w-5 h-5" />,
  "Backup & Recovery": <HardDrive className="w-5 h-5" />,
};

export function FAQPage() {
  const { faq } = pageContent;
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});

  const filteredCategories = useMemo(() => {
    const query = search.toLowerCase().trim();
    if (!query) {
      if (activeCategory) {
        return faq.categories.filter((c) => c.name === activeCategory);
      }
      return faq.categories;
    }
    return faq.categories
      .map((cat) => ({
        ...cat,
        questions: cat.questions.filter(
          (item) =>
            item.q.toLowerCase().includes(query) ||
            item.a.toLowerCase().includes(query),
        ),
      }))
      .filter((cat) => cat.questions.length > 0);
  }, [search, activeCategory, faq.categories]);

  const totalResults = filteredCategories.reduce(
    (sum, cat) => sum + cat.questions.length,
    0,
  );

  function scrollToCategory(name: string) {
    setActiveCategory(name === activeCategory ? null : name);
    setSearch("");
    setTimeout(() => {
      const el = categoryRefs.current[name];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
  }

  function clearSearch() {
    setSearch("");
    setActiveCategory(null);
    searchInputRef.current?.focus();
  }

  return (
    <>
      <PageHero
        label="Frequently Asked Questions"
        title="Find the Answers You Need"
        subtitle="Everything you need to know about our IT support, web services, pricing, and how we work with Australian businesses."
        compact
      />

      {/* Search bar */}
      <section className="bg-card border-b border-border sticky top-[64px] z-10 shadow-sm">
        <div className="container max-w-3xl py-4">
          <div className="relative flex items-center gap-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              ref={searchInputRef}
              placeholder="Search questions… e.g. 'backup', 'pricing', 'response time'"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setActiveCategory(null);
              }}
              className="pl-9 pr-10 h-11 text-sm bg-background"
              data-ocid="faq.search_input"
            />
            {search && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Clear search"
                data-ocid="faq.search_clear"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {search && (
            <p className="text-xs text-muted-foreground mt-2 ml-1">
              {totalResults > 0
                ? `${totalResults} result${totalResults !== 1 ? "s" : ""} found`
                : "No results found — try a different keyword"}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 bg-background" data-ocid="faq.page">
        <div className="container max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar category nav */}
            <aside className="lg:w-56 shrink-0">
              <div className="sticky top-36">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Categories
                </p>
                <nav className="space-y-1" data-ocid="faq.category_nav">
                  {faq.categories.map((cat, i) => {
                    const isActive = activeCategory === cat.name;
                    return (
                      <button
                        key={cat.name}
                        type="button"
                        onClick={() => scrollToCategory(cat.name)}
                        className={`w-full flex items-center gap-2.5 text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                        }`}
                        data-ocid={`faq.category_nav.${i + 1}`}
                      >
                        <span
                          className={isActive ? "text-primary" : "opacity-60"}
                        >
                          {CATEGORY_ICONS[cat.name] ?? (
                            <BookOpen className="w-5 h-5" />
                          )}
                        </span>
                        <span className="leading-tight">{cat.name}</span>
                        <Badge
                          variant="secondary"
                          className="ml-auto text-xs px-1.5 py-0 h-5"
                        >
                          {cat.questions.length}
                        </Badge>
                      </button>
                    );
                  })}
                </nav>

                <div className="mt-6 p-4 bg-muted/40 rounded-xl border border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Can't find your answer? Speak with our team.
                  </p>
                  <Link
                    to="/contact"
                    className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                    data-ocid="faq.sidebar_contact_link"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Contact us
                  </Link>
                </div>
              </div>
            </aside>

            {/* FAQ accordion content */}
            <div className="flex-1 min-w-0">
              {filteredCategories.length === 0 ? (
                <div className="text-center py-20" data-ocid="faq.empty_state">
                  <Search className="w-10 h-10 text-muted-foreground/40 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground mb-2">
                    No results for "{search}"
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Try a different keyword, or browse categories from the
                    sidebar.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearSearch}
                    data-ocid="faq.empty_state_clear"
                  >
                    Clear search
                  </Button>
                </div>
              ) : (
                <div className="space-y-10" data-ocid="faq.categories_section">
                  {filteredCategories.map((category, ci) => (
                    <AnimatedSection
                      key={category.name}
                      delay={ci * 60}
                      className="scroll-mt-36"
                    >
                      <div
                        ref={(el) => {
                          categoryRefs.current[category.name] = el;
                        }}
                      >
                        {/* Category header */}
                        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary">
                            {CATEGORY_ICONS[category.name] ?? (
                              <BookOpen className="w-5 h-5" />
                            )}
                          </span>
                          <div>
                            <h2
                              className="font-display font-bold text-foreground text-lg leading-tight"
                              data-ocid={`faq.category.${ci + 1}`}
                            >
                              {category.name}
                            </h2>
                            <p className="text-xs text-muted-foreground">
                              {category.questions.length} question
                              {category.questions.length !== 1 ? "s" : ""}
                            </p>
                          </div>
                        </div>

                        {/* Accordion */}
                        <Accordion
                          type="single"
                          collapsible
                          className="space-y-2"
                          data-ocid={`faq.accordion.${ci + 1}`}
                        >
                          {category.questions.map((item, qi) => (
                            <AccordionItem
                              key={item.q}
                              value={`item-${ci}-${qi}`}
                              className="bg-card border border-border rounded-xl overflow-hidden px-0 data-[state=open]:shadow-sm transition-shadow"
                              data-ocid={`faq.item.${ci + 1}.${qi + 1}`}
                            >
                              <AccordionTrigger
                                className="px-5 py-4 text-sm font-medium text-foreground hover:bg-muted/30 hover:no-underline transition-colors text-left [&>svg]:shrink-0"
                                data-ocid={`faq.toggle.${ci + 1}.${qi + 1}`}
                              >
                                <span className="pr-4 leading-snug">
                                  {highlightMatch(item.q, search)}
                                </span>
                              </AccordionTrigger>
                              <AccordionContent className="px-5 pb-5 pt-0">
                                <div className="border-t border-border pt-4 text-sm text-muted-foreground leading-relaxed">
                                  {highlightMatch(item.a, search)}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-20" data-ocid="faq.cta_banner">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <Badge
                variant="secondary"
                className="mb-5 bg-primary-foreground/15 text-primary-foreground border-primary-foreground/20"
              >
                Still have questions?
              </Badge>
              <h2 className="font-display font-bold text-primary-foreground text-3xl md:text-4xl mb-4">
                Contact Our Team or Book a Consultation
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
                Our team is happy to answer any questions specific to your
                business. No sales pressure — just honest advice.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <CTAButton
                  label="Contact Our Team"
                  href="/contact"
                  variant="primary"
                  showArrow
                  data-ocid="faq.contact_cta"
                />
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
                  data-ocid="faq.consultation_cta"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

/** Highlights matching text in a string when searching */
function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${escapeRegex(query)})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) => {
        const stableKey = `${i}-${part.slice(0, 8)}`;
        return regex.test(part) ? (
          <mark
            key={stableKey}
            className="bg-accent/30 text-foreground rounded px-0.5"
          >
            {part}
          </mark>
        ) : (
          <span key={stableKey}>{part}</span>
        );
      })}
    </>
  );
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
