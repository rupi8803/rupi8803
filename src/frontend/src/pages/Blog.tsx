import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, Copy, Link2, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { CTAButton } from "../components/ui/CTAButton";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeading } from "../components/ui/SectionHeading";

type BlogCategory =
  | "All"
  | "IT Tips"
  | "Web Design"
  | "Industry Insights"
  | "Company News";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: BlogCategory;
  readTime: string;
  body: string[];
  relatedIds: number[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "professional-website-2025",
    title: "Why Your Small Business Needs a Professional Website in 2025",
    excerpt:
      "In 2025, your website is often the first impression a potential customer has of your business. A professional, fast-loading site builds trust and drives sales — a DIY template often does the opposite.",
    date: "14 April 2026",
    category: "Web Design",
    readTime: "5 min read",
    relatedIds: [3, 8, 2],
    body: [
      "Think about the last time you searched for a local business. You probably Googled it, clicked on the first or second result, and made a snap judgement within seconds. That's exactly what your potential customers do when they find your business online.",
      "A professional website in 2025 isn't just a digital brochure — it's your hardest-working salesperson. It's available 24/7, answers common questions, builds trust through social proof, and converts visitors into leads. A slow, outdated, or hard-to-navigate site actively costs you business every single day.",
      "Beyond first impressions, a professionally built website is optimised for search engines, loads quickly on mobile devices, and integrates with your other tools like booking systems, CRMs, and Google Analytics. These aren't optional extras — they're table stakes for any Australian business competing online in 2025.",
      "The good news? A professional website doesn't have to be expensive or complicated. Platforms like WordPress and Shopify mean that a high-quality, conversion-focused site can be built in weeks, not months. The question isn't whether your business can afford a professional website — it's whether you can afford not to have one.",
    ],
  },
  {
    id: 2,
    slug: "it-infrastructure-upgrade-signs",
    title: "5 Signs Your Business IT Infrastructure Is Overdue for an Upgrade",
    excerpt:
      "Slow computers, frequent crashes, security vulnerabilities — these aren't just annoyances. They're warning signs that your IT infrastructure is holding your business back and putting your data at risk.",
    date: "1 April 2026",
    category: "IT Tips",
    readTime: "6 min read",
    relatedIds: [5, 9, 6],
    body: [
      "Most small business owners are so focused on running their business that IT infrastructure gets ignored until something breaks. But by the time a critical failure occurs, the damage — in downtime, lost data, and lost productivity — can be significant.",
      "Sign 1: Your hardware is more than 5 years old. Ageing computers are not only slower, they're increasingly vulnerable to security exploits. Sign 2: You're running unsupported software. Windows 10 reached end of life in 2025 — if you're still on it, you're exposed. Sign 3: Staff are complaining about speed. Productivity loss from slow systems is hard to quantify, but it's real and cumulative.",
      "Sign 4: You have no centralised backup strategy. If your data only exists on local hard drives, you're one hardware failure or ransomware attack away from losing everything. Sign 5: You've had a security incident. Even a minor one is a signal that your defences aren't adequate.",
      "The good news is that upgrading your IT infrastructure doesn't mean replacing everything at once. A managed IT provider can audit your current setup, prioritise the most critical risks, and build a staged upgrade plan that fits your budget and business needs.",
    ],
  },
  {
    id: 3,
    slug: "shopify-vs-wordpress-australia",
    title: "Shopify vs WordPress: Which Is Right for Your Australian Business?",
    excerpt:
      "Choosing the wrong platform for your website can cost you time and money down the track. We break down the key differences between Shopify and WordPress to help you make the right call for your business.",
    date: "20 March 2026",
    category: "Web Design",
    readTime: "7 min read",
    relatedIds: [1, 8, 7],
    body: [
      "Shopify and WordPress are the two most popular website platforms for Australian businesses — and for good reason. Both are powerful, well-supported, and capable of building a professional online presence. But they're designed for different use cases, and picking the wrong one can create headaches later.",
      "Shopify is purpose-built for e-commerce. If your primary goal is selling products online, Shopify's built-in payment processing, inventory management, and shipping integrations make it the faster, simpler choice. It's hosted and managed for you, so you don't need to worry about server maintenance or security patches.",
      "WordPress is a content management system first, with e-commerce capabilities added through plugins like WooCommerce. It's more flexible and customisable than Shopify, making it ideal for businesses that need a content-heavy site, a blog, or complex custom functionality. It does require more technical maintenance.",
      "Our recommendation for most Australian small businesses: choose Shopify if you're primarily selling products, and WordPress if you need a versatile website with rich content capabilities. In either case, partnering with an experienced developer ensures you get the most out of whichever platform you choose.",
    ],
  },
  {
    id: 4,
    slug: "tradies-technology-win-jobs",
    title: "How Tradies Are Using Technology to Win More Jobs",
    excerpt:
      "Plumbers, electricians, and builders who embrace simple digital tools — a good website, online booking, and job management software — are winning more work and running more efficient businesses.",
    date: "8 March 2026",
    category: "Industry Insights",
    readTime: "5 min read",
    relatedIds: [1, 2, 9],
    body: [
      "The trades industry has traditionally been slow to adopt technology, but that's changing fast. Tradies who are embracing digital tools are finding themselves with full diaries, better reviews, and more efficient operations — often with minimal effort or cost.",
      "A mobile-friendly website with a clear call to action is the single biggest differentiator for most tradies. When a homeowner has a burst pipe at 7pm, they're not calling around — they're Googling and calling the first plumber with a professional-looking site and a phone number that's easy to find. First impressions online are everything.",
      "Beyond the website, job management apps like Tradify or ServiceM8 let tradies quote, invoice, and schedule from their phones. When these tools are integrated with your website's contact form, every enquiry becomes a lead in your system automatically — no manual data entry, no missed follow-ups.",
      "The technology bar for tradies is actually quite low. A well-built website, a Google Business Profile, and one job management tool is enough to out-compete the majority of the market. TechPro helps tradies get set up quickly, so they can focus on the work rather than the admin.",
    ],
  },
  {
    id: 5,
    slug: "what-is-managed-it",
    title: "What Is Managed IT and Do You Need It?",
    excerpt:
      "Managed IT services replace the break-fix model with proactive, ongoing support for a fixed monthly fee. For most small businesses, it's a smarter and more cost-effective approach to technology management.",
    date: "22 February 2026",
    category: "IT Tips",
    readTime: "6 min read",
    relatedIds: [2, 9, 6],
    body: [
      "Traditionally, small businesses dealt with IT on a break-fix basis: something goes wrong, you call an IT person, they fix it, you pay. It's reactive, unpredictable, and often more expensive than it needs to be — especially if the issue causes significant downtime.",
      "Managed IT Services turns this model on its head. Instead of waiting for something to break, a managed IT provider monitors your systems 24/7, applies patches and updates proactively, backs up your data automatically, and resolves issues before they become outages. All for a predictable monthly fee.",
      "The business case is straightforward. Downtime is expensive — even a half-day outage can cost a small business thousands in lost productivity and revenue. Managed IT dramatically reduces the frequency and severity of incidents. It also means your team isn't spending time troubleshooting IT problems instead of doing their actual jobs.",
      "Managed IT isn't just for large organisations. Modern managed IT providers like TechPro offer scalable plans starting from a handful of users, making it accessible for sole traders and small teams. If your business relies on computers and the internet to function — which is almost every business — managed IT is worth serious consideration.",
    ],
  },
  {
    id: 6,
    slug: "true-cost-of-data-loss",
    title: "The True Cost of Data Loss for Small Businesses",
    excerpt:
      "A single data loss event — whether from ransomware, hardware failure, or human error — can cost a small business tens of thousands of dollars and weeks of recovery time. Most businesses are far less protected than they think.",
    date: "10 February 2026",
    category: "IT Tips",
    readTime: "7 min read",
    relatedIds: [2, 5, 9],
    body: [
      "When most business owners think about data loss, they picture a dramatic ransomware attack. But the reality is that most data loss events are far more mundane — a hard drive failure, an accidentally deleted file, or a laptop left on a train. All of them can be equally devastating.",
      "The visible costs of data loss are significant: IT recovery services, recreating lost work, and potential regulatory fines for data breaches. But the hidden costs are often worse — the hours of staff time spent recovering, the missed deadlines, the damaged client relationships, and the reputational harm.",
      "Australian cyber security data shows that 60% of small businesses that suffer a significant data loss event close within 6 months. The reason isn't just financial — it's that rebuilding years of customer data, accounting records, and operational information from scratch is often simply not viable.",
      "The solution is a properly implemented 3-2-1 backup strategy: 3 copies of your data, 2 different media types, 1 offsite copy. Automated, tested, and monitored. TechPro's Backup & Recovery service implements exactly this for Australian businesses at a fraction of the cost of a single recovery event.",
    ],
  },
  {
    id: 7,
    slug: "pos-systems-guide-retailers",
    title: "POS Systems Explained: A Guide for Australian Retailers",
    excerpt:
      "Modern POS systems do far more than process payments. From inventory management to customer loyalty programs, choosing the right POS can transform how your retail or hospitality business operates.",
    date: "28 January 2026",
    category: "Industry Insights",
    readTime: "8 min read",
    relatedIds: [4, 3, 8],
    body: [
      "A point-of-sale system is no longer just a cash register. Modern POS platforms like Square, Lightspeed, and Kounta are cloud-based business management tools that integrate sales, inventory, reporting, and customer management in one place.",
      "For Australian retailers, the right POS system can eliminate hours of manual stocktaking, automatically reorder products when inventory runs low, and provide real-time reports on your best-selling products and peak trading hours — all from your phone.",
      "Hospitality businesses benefit even more from modern POS. Table management, kitchen display integration, split billing, and online ordering integrations can significantly increase throughput and reduce order errors during busy service periods.",
      "Choosing the right system depends on your business type, size, and budget. Key considerations include integration with your accounting software (Xero is the most common for Australian SMBs), hardware requirements, transaction fees, and support quality. TechPro specialises in POS selection, setup, and ongoing support — taking the guesswork out of what can be a complex decision.",
    ],
  },
  {
    id: 8,
    slug: "choosing-website-platform",
    title: "Choosing the Right Website Platform: A Simple Guide",
    excerpt:
      "With dozens of website platforms available — WordPress, Shopify, Wix, Squarespace, and more — it can be hard to know where to start. This guide cuts through the noise to help you make the right choice for your business.",
    date: "15 January 2026",
    category: "Web Design",
    readTime: "6 min read",
    relatedIds: [3, 1, 4],
    body: [
      "The first question to ask when choosing a website platform is: what does my website need to do? A platform that's perfect for a photographer is likely wrong for a retailer, and vice versa. Getting clear on your goals before you choose a platform will save you significant time and money.",
      "For most Australian service businesses — tradies, consultants, healthcare providers, professional services — WordPress is the go-to choice. It's flexible, well-supported, and has a huge ecosystem of plugins for bookings, forms, SEO, and more. It requires more ongoing maintenance than some alternatives, but that's easily handled with a maintenance plan.",
      "For product-based businesses with e-commerce as the primary goal, Shopify is hard to beat. It's purpose-built for selling, handles payment processing securely, and has excellent integrations with Australian shipping carriers and tax systems. Wix and Squarespace sit in the middle — easier to use than WordPress, but less powerful and harder to customise.",
      "Our advice: don't choose a platform based on what you've heard — choose based on what your business actually needs. A 30-minute consultation with our web team can save you months of frustration by helping you start on the right platform from day one.",
    ],
  },
  {
    id: 9,
    slug: "it-security-small-business",
    title: "IT Security Tips Every Small Business Owner Should Know",
    excerpt:
      "Cyber attacks on small Australian businesses are increasing every year. These practical, affordable security steps can dramatically reduce your risk — without needing a dedicated IT security team.",
    date: "3 January 2026",
    category: "IT Tips",
    readTime: "7 min read",
    relatedIds: [2, 6, 5],
    body: [
      "Cybercriminals increasingly target small businesses because they're perceived as easier targets than large corporations. The Australian Cyber Security Centre (ACSC) reported that small businesses accounted for 43% of all cybercrime reports in 2024. The good news is that most of these attacks exploit easily preventable vulnerabilities.",
      "Step 1: Enable multi-factor authentication (MFA) on every account that offers it — especially email, accounting software, and banking. This single step prevents the vast majority of account takeover attacks. Step 2: Keep all software updated. Most ransomware attacks exploit known vulnerabilities in unpatched software.",
      "Step 3: Train your staff. Phishing emails — messages designed to trick staff into clicking malicious links or revealing credentials — are responsible for the majority of security breaches. Regular, simple security awareness training is highly effective. Step 4: Implement a proper backup strategy. Even if the worst happens, a recent clean backup means you can recover without paying a ransom.",
      "Step 5: Use a business-grade email security solution. Basic email filters miss a significant proportion of sophisticated phishing attempts — a dedicated security layer dramatically improves detection rates. These steps aren't expensive or technically complex, but they require consistent implementation and monitoring. TechPro's managed IT security services handle all of this automatically for our clients.",
    ],
  },
];

const CATEGORY_TABS: BlogCategory[] = [
  "All",
  "IT Tips",
  "Web Design",
  "Industry Insights",
  "Company News",
];

function BlogCard({
  post,
  onOpen,
  index,
}: {
  post: BlogPost;
  onOpen: (p: BlogPost) => void;
  index: number;
}) {
  return (
    <AnimatedSection delay={index * 70} direction="up">
      <div
        className="bg-card rounded-2xl border border-border overflow-hidden shadow-card hover-lift group flex flex-col h-full"
        data-ocid={`blog.post.${post.id}`}
      >
        <div className="h-1.5 bg-primary" />
        <div className="p-6 flex flex-col flex-1">
          <Badge className="bg-accent/15 text-accent border-0 text-xs w-fit mb-3">
            {post.category}
          </Badge>
          <h3 className="font-display font-bold text-foreground text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary hover:bg-primary/8 font-medium gap-1.5 px-0 mt-3 w-fit"
            onClick={() => onOpen(post)}
            data-ocid={`blog.read_more.${post.id}`}
          >
            Read Article <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}

function BlogModal({
  post,
  allPosts,
  onClose,
  onOpen,
}: {
  post: BlogPost | null;
  allPosts: BlogPost[];
  onClose: () => void;
  onOpen: (p: BlogPost) => void;
}) {
  if (!post) return null;

  const related = post.relatedIds
    .map((id) => allPosts.find((p) => p.id === id))
    .filter((p): p is BlogPost => Boolean(p))
    .slice(0, 3);

  function copyLink() {
    const url = `${window.location.origin}/blog#${post?.slug}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Link copied to clipboard!");
    });
  }

  return (
    <Dialog open={!!post} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-2xl max-h-[90vh] overflow-y-auto"
        data-ocid="blog.post_modal"
      >
        <DialogHeader>
          <Badge className="bg-accent/15 text-accent border-0 text-xs w-fit mb-2">
            {post.category}
          </Badge>
          <DialogTitle className="font-display text-xl text-foreground leading-snug">
            {post.title}
          </DialogTitle>
          <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </DialogHeader>

        <Separator />

        {/* Article body */}
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <Separator />

        {/* Share */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-muted-foreground">
            Share this article
          </span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={copyLink}
            data-ocid="blog.copy_link_button"
          >
            <Copy className="w-3.5 h-3.5" />
            Copy Link
          </Button>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <>
            <Separator />
            <div>
              <h4 className="font-display font-semibold text-foreground mb-3 text-sm">
                Related Articles
              </h4>
              <div className="space-y-2">
                {related.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => onOpen(r)}
                    className="w-full text-left flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-muted/40 transition-smooth group"
                    data-ocid={`blog.related_post.${r.id}`}
                  >
                    <Badge className="bg-accent/10 text-accent border-0 text-xs shrink-0 mt-0.5">
                      {r.category}
                    </Badge>
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors font-medium leading-snug">
                      {r.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <Separator />

        {/* CTA */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-foreground">Need Help?</p>
            <p className="text-xs text-muted-foreground">
              Talk to our experts about your IT or web needs.
            </p>
          </div>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
            data-ocid="blog.post_modal_cta"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filtered = useMemo(() => {
    let posts = BLOG_POSTS;
    if (activeCategory !== "All") {
      posts = posts.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q),
      );
    }
    return posts;
  }, [activeCategory, searchQuery]);

  return (
    <>
      <PageHero
        label="Blog & Resources"
        title="IT and Web Tips for Australian Businesses"
        subtitle="Practical guides, expert insights, and industry news to help your business stay ahead with technology."
        compact
        ctas={[
          { label: "Get IT Support", href: "/contact", variant: "primary" },
          {
            label: "Free IT Audit",
            href: "/free-it-audit",
            variant: "outline",
          },
        ]}
      />

      <section className="py-20 bg-background" data-ocid="blog.posts_section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Latest Articles"
              title="IT & Web Insights for Australian SMBs"
              className="mb-8"
            />
          </AnimatedSection>

          {/* Search + filters row */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
                data-ocid="blog.search_input"
              />
            </div>

            {/* Category tabs */}
            <div
              className="flex flex-wrap gap-2"
              data-ocid="blog.category_tabs"
            >
              {CATEGORY_TABS.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  data-ocid={`blog.filter.${cat.toLowerCase().replace(/\s+/g, "_")}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth border ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card text-foreground border-border hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onOpen={setSelectedPost}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <div
              className="text-center py-20 text-muted-foreground"
              data-ocid="blog.empty_state"
            >
              <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-lg font-medium">No articles found</p>
              <p className="text-sm mt-1">
                Try a different search term or category.
              </p>
              <Button
                type="button"
                variant="ghost"
                className="mt-4 text-primary"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA sidebar-style bottom section */}
      <section
        className="py-16 bg-muted/30 border-t border-border"
        data-ocid="blog.cta_section"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <AnimatedSection>
              <span className="text-label text-primary block mb-3">
                Need Expert Help?
              </span>
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-3">
                Don't Just Read About It — Get Personalised Advice
              </h2>
              <p className="text-muted-foreground mb-6">
                Our IT and web experts are ready to help you take action on what
                you've learned.
              </p>
              <CTAButton
                label="Contact Our Team"
                href="/contact"
                variant="primary"
                showArrow
                data-ocid="blog.contact_cta"
              />
            </AnimatedSection>
            <AnimatedSection delay={100} direction="right">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Related Services
                </h3>
                <ul className="space-y-2">
                  {[
                    {
                      label: "Web Design & Development",
                      href: "/services/web-design",
                    },
                    {
                      label: "Managed IT Services",
                      href: "/services/managed-it",
                    },
                    {
                      label: "IT Support (Small Business)",
                      href: "/services/it-support",
                    },
                    {
                      label: "Backup & Recovery",
                      href: "/services/backup-recovery",
                    },
                    { label: "POS Solutions", href: "/services/pos-solutions" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors group"
                        data-ocid={`blog.service_link.${link.href.split("/").pop()}`}
                      >
                        <Link2 className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-primary py-16" data-ocid="blog.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl mb-4">
              Need Expert IT Advice for Your Business?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Don't just read about it — get personalised IT guidance from our
              certified experts.
            </p>
            <CTAButton
              label="Book Free Consultation"
              href="/contact"
              variant="primary"
              showArrow
              data-ocid="blog.bottom_cta"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Post detail modal */}
      <BlogModal
        post={selectedPost}
        allPosts={BLOG_POSTS}
        onClose={() => setSelectedPost(null)}
        onOpen={setSelectedPost}
      />
    </>
  );
}
