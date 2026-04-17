import type { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  company: {
    name: "TechPro Services",
    tagline: "Scalable IT & Web Solutions for Australian SMBs",
    phone: "(03) 9000 1234",
    email: "hello@techproservices.com.au",
    address: "Level 5, 123 Collins Street, Melbourne VIC 3000",
    abn: "ABN 12 345 678 901",
    businessHours: "Mon–Fri: 8am–6pm AEST",
  },
  social: {
    facebook: "https://facebook.com/techproservices",
    twitter: "https://twitter.com/techproservices",
    linkedin: "https://linkedin.com/company/techproservices",
    instagram: "https://instagram.com/techproservices",
  },
  services: [
    {
      slug: "web-design",
      title: "Web Design & Development",
      shortDescription:
        "Custom websites built on WordPress, Shopify, Wix, and Squarespace — designed to convert visitors into customers.",
      icon: "Globe",
      href: "/services/web-design",
    },
    {
      slug: "website-maintenance",
      title: "Website Maintenance",
      shortDescription:
        "Ongoing updates, security patches, backups, and performance monitoring to keep your site running at its best.",
      icon: "Wrench",
      href: "/services/website-maintenance",
    },
    {
      slug: "it-support",
      title: "IT Support (Small Business)",
      shortDescription:
        "Fast, reliable on-site and remote IT support for Australian small businesses — when you need it most.",
      icon: "Headphones",
      href: "/services/it-support",
    },
    {
      slug: "managed-it",
      title: "Managed IT Services",
      shortDescription:
        "Proactive monitoring, maintenance, and management of your entire IT infrastructure for a fixed monthly fee.",
      icon: "Shield",
      href: "/services/managed-it",
    },
    {
      slug: "pos-solutions",
      title: "POS Solutions",
      shortDescription:
        "End-to-end point of sale setup, integration, and support tailored for retail, hospitality, and service businesses.",
      icon: "CreditCard",
      href: "/services/pos-solutions",
    },
    {
      slug: "backup-recovery",
      title: "Backup & Recovery",
      shortDescription:
        "Enterprise-grade data backup and disaster recovery solutions to keep your business protected and resilient.",
      icon: "HardDrive",
      href: "/services/backup-recovery",
    },
  ],
  industries: [
    {
      slug: "tradies",
      title: "Tradies & Construction",
      description:
        "Field-friendly IT and web solutions for plumbers, electricians, builders, and tradespeople on the go.",
      icon: "HardHat",
      href: "/industries/tradies",
    },
    {
      slug: "retail",
      title: "Retail & E-commerce",
      description:
        "POS systems, e-commerce stores, and IT infrastructure built specifically for modern retail businesses.",
      icon: "ShoppingBag",
      href: "/industries/retail",
    },
    {
      slug: "medical",
      title: "Medical & Healthcare",
      description:
        "HIPAA-compliant IT support and secure web solutions for GP clinics, specialists, and allied health providers.",
      icon: "Stethoscope",
      href: "/industries/medical",
    },
    {
      slug: "hospitality",
      title: "Hospitality & Tourism",
      description:
        "Integrated POS, booking systems, and reliable IT support for cafés, restaurants, hotels, and venues.",
      icon: "UtensilsCrossed",
      href: "/industries/hospitality",
    },
  ],
};

export const pageContent = {
  home: {
    hero: {
      label: "Australian IT & Web Experts",
      title: "Scalable IT & Web Solutions for Australian SMBs",
      subtitle:
        "TechPro Services delivers reliable IT support, managed services, and professional web development to help Australian businesses grow with confidence.",
      primaryCTA: "Get Free Consultation",
      secondaryCTA: "Explore Services",
    },
    stats: [
      { value: "500+", label: "Businesses Supported" },
      { value: "12+", label: "Years Experience" },
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "24/7", label: "Monitoring" },
    ],
    testimonials: [
      {
        name: "Dr. Elizabeth Chen",
        role: "Principal, Seaside Medical",
        industry: "Medical",
        quote:
          "TechPro Services transformed our practice's IT infrastructure, making everything run smoothly and securely. Their proactive approach gives us complete peace of mind.",
      },
      {
        name: "Marcus Webb",
        role: "Owner, Webb Electrical",
        industry: "Tradies",
        quote:
          "As a tradie, I needed someone who understood my business. TechPro set up our website and keeps our systems running — I can focus on the job, not the tech.",
      },
      {
        name: "Lian Phan",
        role: "Manager, The Grand Hotel",
        industry: "Hospitality",
        quote:
          "Our POS integration and IT support from TechPro has been flawless. They're responsive, professional, and genuinely care about our success.",
      },
    ],
  },
  about: {
    hero: {
      label: "Who We Are",
      title: "Australia's Trusted IT & Web Partner",
      subtitle:
        "Over 12 years of helping Australian small and medium businesses navigate technology with confidence.",
    },
    story:
      "TechPro Services was founded in Melbourne in 2012 with a simple mission: make enterprise-grade IT accessible to every Australian business. We've since grown into a full-service technology partner, combining deep IT expertise with modern web development capabilities.",
    values: [
      {
        title: "Reliability",
        description:
          "We show up when it matters most — fast response times and 99.9% uptime guarantees.",
      },
      {
        title: "Transparency",
        description:
          "No hidden fees, no tech jargon. Clear communication and honest pricing, always.",
      },
      {
        title: "Local Knowledge",
        description:
          "We understand the Australian business landscape — compliance, connectivity, and costs.",
      },
      {
        title: "Proactive Care",
        description:
          "We prevent problems before they happen through continuous monitoring and maintenance.",
      },
    ],
  },
  services: {
    hero: {
      label: "What We Offer",
      title: "Comprehensive IT & Web Services",
      subtitle:
        "From your first website to full managed IT infrastructure — we have the expertise to support every stage of your business.",
    },
  },
  businessIT: {
    hero: {
      label: "All-in-One IT Solutions",
      title: "Everything Your Business Needs in One Place",
      subtitle:
        "Not sure where to start? Our Business IT Solutions package brings together web, IT support, and managed services into a single streamlined partnership.",
    },
  },
  pricing: {
    hero: {
      label: "Simple, Transparent Pricing",
      title: "Plans That Grow With Your Business",
      subtitle:
        "No lock-in contracts, no surprise bills. Choose the plan that fits your business and upgrade anytime.",
    },
    websitePackages: [
      {
        name: "Starter",
        price: "AUD 1,200",
        period: "one-time",
        description: "Perfect for small businesses getting online",
        features: [
          "5-page responsive website",
          "WordPress or Wix platform",
          "Basic SEO setup",
          "Contact form",
          "1 month free support",
          "Mobile optimised",
        ],
        cta: "Get Started",
        highlighted: false,
      },
      {
        name: "Growth",
        price: "AUD 2,800",
        period: "one-time",
        description: "Ideal for growing businesses",
        features: [
          "Up to 15 pages",
          "WordPress or Shopify",
          "Advanced SEO + blog",
          "E-commerce ready",
          "3 months free support",
          "Google Analytics setup",
          "Speed optimisation",
        ],
        cta: "Get Started",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Tailored for complex requirements",
        features: [
          "Unlimited pages",
          "Custom design & development",
          "Full e-commerce suite",
          "CRM integration",
          "6 months dedicated support",
          "Priority response SLA",
          "Training included",
        ],
        cta: "Contact Us",
        highlighted: false,
      },
    ],
    itPlans: [
      {
        name: "Essential",
        price: "AUD 50",
        period: "/mo per user",
        description: "Core IT support for small teams",
        features: [
          "Remote IT support",
          "Help desk (business hours)",
          "Basic security monitoring",
          "Software updates",
          "Email support",
        ],
        cta: "Select Plan",
        highlighted: false,
      },
      {
        name: "Professional",
        price: "AUD 115",
        period: "/mo per user",
        description: "Comprehensive managed IT",
        features: [
          "24/7 remote support",
          "On-site visits (2/month)",
          "Advanced security suite",
          "Backup & recovery",
          "Microsoft 365 management",
          "Monthly IT report",
        ],
        cta: "Select Plan",
        highlighted: true,
      },
      {
        name: "Enterprise",
        price: "AUD 290",
        period: "/mo per user",
        description: "Full managed IT partnership",
        features: [
          "Unlimited on-site support",
          "Dedicated account manager",
          "Complete IT management",
          "Disaster recovery",
          "Compliance management",
          "Strategic IT planning",
          "Priority SLA",
        ],
        cta: "Select Plan",
        highlighted: false,
      },
    ],
  },
  portfolio: {
    hero: {
      label: "Our Work",
      title: "Proven Results for Australian Businesses",
      subtitle:
        "Real projects, real outcomes. See how we've helped businesses across Australia transform their technology.",
    },
    cases: [
      {
        client: "Seaside Medical Practice",
        industry: "Medical",
        title: "Complete IT Infrastructure Overhaul",
        description:
          "Migrated 3 clinic locations to a unified managed IT environment, reducing downtime by 95% and achieving full compliance with Australian healthcare data standards.",
        outcomes: [
          "95% reduction in downtime",
          "Full HIPAA compliance",
          "3 locations unified",
        ],
        tag: "Managed IT",
      },
      {
        client: "Webb Electrical Services",
        industry: "Tradies",
        title: "Mobile-First Website & Job Management",
        description:
          "Built a lead-generating WordPress website with online booking integration, resulting in a 180% increase in online enquiries within 3 months.",
        outcomes: [
          "180% more enquiries",
          "Online booking system",
          "Mobile-optimised",
        ],
        tag: "Web Design",
      },
      {
        client: "The Grand Hotel Melbourne",
        industry: "Hospitality",
        title: "POS & IT Infrastructure Integration",
        description:
          "Deployed a unified POS solution across 4 venues, integrated with accounting software and staff management — cutting admin time by 60%.",
        outcomes: [
          "4 venues unified",
          "60% less admin time",
          "Real-time reporting",
        ],
        tag: "POS Solutions",
      },
      {
        client: "Bloom Boutique Retail",
        industry: "Retail",
        title: "Shopify Store & In-Store POS Sync",
        description:
          "Launched a Shopify e-commerce store fully synced with in-store POS inventory, enabling seamless omnichannel retail operations.",
        outcomes: [
          "Omnichannel inventory",
          "Shopify integration",
          "Sales up 45%",
        ],
        tag: "E-commerce",
      },
    ],
  },
  blog: {
    hero: {
      label: "Resources & Insights",
      title: "IT & Web Tips for Australian Businesses",
      subtitle:
        "Practical guides, industry news, and expert advice to help your business stay ahead with technology.",
    },
    posts: [
      {
        title: "5 Signs Your Small Business Needs Managed IT Services",
        excerpt:
          "Is your team wasting time on IT issues? Learn the warning signs that it's time to switch to a managed IT provider.",
        category: "IT Support",
        date: "12 March 2026",
        readTime: "5 min read",
        slug: "signs-you-need-managed-it",
      },
      {
        title:
          "WordPress vs Shopify: Which Platform Is Right for Your Business?",
        excerpt:
          "A practical comparison of Australia's two most popular website platforms — and how to choose the right one.",
        category: "Web Design",
        date: "28 February 2026",
        readTime: "7 min read",
        slug: "wordpress-vs-shopify",
      },
      {
        title: "The Complete Guide to Data Backup for Australian SMBs",
        excerpt:
          "How to protect your business data with a robust backup strategy — without breaking the budget.",
        category: "Backup & Recovery",
        date: "14 February 2026",
        readTime: "6 min read",
        slug: "data-backup-guide-smbs",
      },
      {
        title: "How to Choose the Right POS System for Your Retail Business",
        excerpt:
          "POS systems have evolved dramatically. Here's what to look for when selecting a solution for your retail or hospitality business.",
        category: "POS Solutions",
        date: "3 February 2026",
        readTime: "8 min read",
        slug: "choosing-pos-system-retail",
      },
      {
        title:
          "Cybersecurity Basics Every Australian Business Owner Should Know",
        excerpt:
          "Don't wait for a breach. Simple, practical steps to protect your business from the most common cyber threats.",
        category: "Security",
        date: "20 January 2026",
        readTime: "6 min read",
        slug: "cybersecurity-basics-business",
      },
      {
        title:
          "Website Maintenance: Why It's Not Optional for Australian Businesses",
        excerpt:
          "A neglected website is a security risk, a performance problem, and a brand liability. Here's why maintenance matters.",
        category: "Website Maintenance",
        date: "8 January 2026",
        readTime: "5 min read",
        slug: "why-website-maintenance-matters",
      },
    ],
  },
  faq: {
    hero: {
      label: "Frequently Asked Questions",
      title: "Find the Answers You Need",
      subtitle:
        "Everything you need to know about our IT support, web services, pricing, and how we work with Australian businesses.",
    },
    categories: [
      {
        name: "General",
        icon: "HelpCircle",
        questions: [
          {
            q: "What areas do you service?",
            a: "TechPro Services is headquartered in Melbourne, VIC, and provides services across all major Australian cities including Sydney, Brisbane, Perth, and Adelaide. Many of our services are delivered remotely, and we have partner technicians in most states for on-site requirements.",
          },
          {
            q: "What size businesses do you work with?",
            a: "We primarily work with small to medium businesses (1–200 employees). We have packages suitable for sole traders and startups right through to larger organisations with multiple locations. If you're unsure if we're the right fit, contact us for a free consultation.",
          },
          {
            q: "How do I get started?",
            a: "The easiest way to get started is to book a free consultation. We'll spend 30–60 minutes understanding your business, identify any gaps or risks, and recommend the most suitable services. There's no obligation and no cost.",
          },
          {
            q: "Do you offer ongoing support or just one-time services?",
            a: "Both. We offer one-time projects (like website builds or hardware setups) as well as ongoing monthly support plans for IT managed services, website maintenance, and more. Many clients start with a one-time project and move to ongoing support.",
          },
        ],
      },
      {
        name: "Web Design & Development",
        icon: "Globe",
        questions: [
          {
            q: "How long does it take to build a website?",
            a: "Timelines depend on the package and complexity. Starter websites are typically completed in 2–3 weeks. Growth packages take 4–6 weeks. Enterprise and custom projects vary — we'll provide a clear timeline in your proposal before work begins.",
          },
          {
            q: "Do I own my website after it's built?",
            a: "Yes, absolutely. You own 100% of your website, content, domain, and design assets. We will transfer everything to your accounts and provide training on how to update and manage it independently.",
          },
          {
            q: "Can you work with my existing website?",
            a: "Yes. We can redesign, update, or migrate your existing website regardless of the platform. We handle full migrations including content, images, SEO data, and domain/hosting transfers with minimal downtime.",
          },
          {
            q: "Which platform is right for my business — WordPress vs Shopify vs Wix?",
            a: "It depends on your goals. WordPress is best for content-rich or highly customised sites. Shopify is the top choice for e-commerce businesses needing a reliable store. Wix and Squarespace suit simple, fast-to-launch sites for service businesses. We'll recommend the right platform during your free consultation.",
          },
        ],
      },
      {
        name: "IT Support & Managed Services",
        icon: "Shield",
        questions: [
          {
            q: "What's the difference between IT support and managed IT?",
            a: "IT support is reactive — you call us when something breaks and we fix it. Managed IT is proactive — we monitor your systems 24/7, apply updates, handle security, and prevent problems before they occur. Managed IT is typically more cost-effective for businesses with 5+ users.",
          },
          {
            q: "What response times can I expect?",
            a: "For critical issues, we aim to respond within 1 hour. High-priority issues are addressed within 4 business hours. Standard requests within 1 business day. Our Professional and Enterprise plans include faster SLAs and after-hours coverage.",
          },
          {
            q: "Do you offer 24/7 support?",
            a: "Our Professional and Enterprise managed IT plans include 24/7 monitoring and after-hours support for critical issues. The Essential plan covers standard business hours (Mon–Fri, 8am–6pm AEST). We can discuss custom coverage schedules for businesses with unique requirements.",
          },
          {
            q: "Can you support remote workers?",
            a: "Absolutely. We specialise in supporting distributed and hybrid teams. This includes setting up secure VPN access, cloud-based tools (Microsoft 365, Google Workspace), endpoint security for home devices, and remote desktop support — wherever your team is located.",
          },
        ],
      },
      {
        name: "Pricing & Payments",
        icon: "DollarSign",
        questions: [
          {
            q: "Do you offer payment plans?",
            a: "Yes. For website projects, we typically structure payments as 50% upfront and 50% on completion. For larger projects, milestone-based payment schedules are available. Managed IT services are billed monthly with no large upfront costs.",
          },
          {
            q: "Are there lock-in contracts?",
            a: "No lock-in contracts. Our managed IT plans are month-to-month with 30 days' notice to cancel. Website maintenance plans can also be cancelled with 30 days' notice. We prefer to earn your business every month through quality service.",
          },
          {
            q: "What's included in a free IT audit?",
            a: "Our free IT audit covers a review of your current hardware and software, network security assessment, backup status check, software licensing review, and a written report with prioritised recommendations. It's a 60-minute session with no sales pressure.",
          },
          {
            q: "How do I get a custom quote?",
            a: "You can request a custom quote by submitting our online contact form, calling us on (03) 9000 1234, or booking a free consultation. We'll review your requirements and provide a detailed, itemised proposal within 2 business days.",
          },
        ],
      },
      {
        name: "POS Solutions",
        icon: "CreditCard",
        questions: [
          {
            q: "What POS hardware do you supply?",
            a: "We supply and configure a range of POS hardware including touchscreen terminals, receipt printers, barcode scanners, cash drawers, EFTPOS terminals, and customer display screens. We work with leading brands suited to retail, hospitality, and service businesses.",
          },
          {
            q: "Can you integrate my POS with my accounting software?",
            a: "Yes. We integrate POS systems with popular accounting platforms including Xero, MYOB, and QuickBooks. This eliminates manual data entry, reduces errors, and gives you real-time visibility of sales and inventory in your accounting software.",
          },
          {
            q: "What happens if my POS breaks down?",
            a: "For clients on a support plan, we provide priority response for POS failures — typically within 1–2 hours. We keep common spare parts on hand and can often resolve issues remotely. If hardware replacement is needed, we'll arrange a loan unit to keep your business running.",
          },
        ],
      },
      {
        name: "Backup & Recovery",
        icon: "HardDrive",
        questions: [
          {
            q: "How often are backups taken?",
            a: "Backup frequency depends on your plan and data criticality. Most business clients have daily automated backups. Higher-tier plans include hourly incremental backups. We'll configure backup schedules based on your Recovery Time Objective (RTO) and Recovery Point Objective (RPO) requirements.",
          },
          {
            q: "Where is my data stored?",
            a: "Your data is stored in Australian data centres that meet Australian Privacy Act and ISO 27001 security standards. We do not store business data offshore unless specifically requested. You can request details on the data centre location and certifications at any time.",
          },
          {
            q: "How quickly can you restore from a backup?",
            a: "For most clients, we can restore individual files within minutes and full system restores within a few hours, depending on data volume. We conduct regular restore tests to verify backup integrity and ensure recovery objectives are consistently met.",
          },
          {
            q: "Is my data stored in Australia?",
            a: "Yes. All backup data for Australian clients is stored within Australian borders by default. We use Australian-based cloud infrastructure providers to ensure your data remains subject to Australian law and compliance requirements.",
          },
        ],
      },
    ],
  },
};
