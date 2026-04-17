import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Cloud,
  FileCheck,
  HardDrive,
  Lock,
  RefreshCw,
  RotateCcw,
  Server,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { CTAButton } from "../../components/ui/CTAButton";
import { PageHero } from "../../components/ui/PageHero";
import { SectionHeading } from "../../components/ui/SectionHeading";

const backupTypes = [
  {
    icon: Cloud,
    title: "Cloud Backup",
    badge: "Offsite Protection",
    desc: "Automated, encrypted backups stored in Australian data centres. Runs silently in the background — no human intervention required.",
    points: [
      "AES-256 encryption in transit and at rest",
      "Australian data residency options",
      "Hourly, daily, or weekly schedules",
      "Accessible from anywhere for fast recovery",
    ],
  },
  {
    icon: HardDrive,
    title: "On-Site Backup",
    badge: "Fast Local Restore",
    desc: "NAS (Network Attached Storage) devices on your premises for lightning-fast file and system restores without internet dependency.",
    points: [
      "Sub-hour recovery for critical systems",
      "No data egress or transfer fees",
      "Full server image backups",
      "Ideal for large datasets and databases",
    ],
  },
  {
    icon: RefreshCw,
    title: "Hybrid Backup",
    badge: "Best of Both Worlds",
    desc: "Combine on-site speed with off-site security. The recommended approach for businesses that cannot afford extended downtime.",
    points: [
      "Fastest local restore capability",
      "Off-site protection against site disasters",
      "Automated sync between local and cloud",
      "Recommended for most Australian SMBs",
    ],
  },
];

const recoveryCapabilities = [
  {
    icon: Clock,
    title: "Point-in-Time Restore",
    desc: "Recover data to any point in time — hourly snapshots mean minimal data loss even if disaster strikes mid-day.",
  },
  {
    icon: ShieldCheck,
    title: "Ransomware Recovery",
    desc: "Clean, uninfected backup copies allow full recovery without paying ransom. Immutable backups can't be encrypted by ransomware.",
  },
  {
    icon: FileCheck,
    title: "File & Folder Recovery",
    desc: "Recover individual files and folders without a full system restore — fast and targeted for day-to-day incidents.",
  },
  {
    icon: Server,
    title: "Full System Restore",
    desc: "Bare-metal restore of entire servers to the same or different hardware. Get systems back online in hours, not days.",
  },
  {
    icon: RotateCcw,
    title: "RTO & RPO Commitments",
    desc: "We define clear Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) with your plan — so you know exactly what to expect.",
  },
];

const securityPoints = [
  {
    label: "AES-256 encryption",
    detail:
      "Military-grade encryption for all backup data at rest and in transit.",
  },
  {
    label: "Australian data residency",
    detail:
      "Data stored in Australian data centres — no overseas jurisdiction risk.",
  },
  {
    label: "Compliance documentation",
    detail:
      "Backup logs, retention records, and audit trails for regulatory compliance.",
  },
  {
    label: "Access controls",
    detail:
      "Role-based access and MFA ensure only authorised staff can restore or manage backups.",
  },
  {
    label: "Immutable backups",
    detail:
      "Backup copies that cannot be modified or deleted — critical for ransomware defence.",
  },
  {
    label: "Retention policies",
    detail:
      "Configurable retention from 30 days to 7 years depending on regulatory requirements.",
  },
];

export function BackupRecoveryPage() {
  return (
    <>
      <PageHero
        label="Backup & Recovery"
        title="Protect Your Business Data from Loss, Ransomware, and Disaster"
        subtitle="Enterprise-grade backup and disaster recovery solutions that keep your business protected, compliant, and resilient — whatever happens."
        ctas={[
          { label: "Get Backup Plan", href: "/contact", variant: "primary" },
          {
            label: "Free IT Audit",
            href: "/free-it-audit",
            variant: "outline",
          },
        ]}
      />

      {/* Why Backups Matter */}
      <section className="py-20 bg-background" data-ocid="backup.why_section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                The Reality of Data Loss
              </span>
              <h2 className="font-display font-bold text-foreground text-3xl lg:text-4xl mb-5 leading-tight">
                Why Every Business Needs a Tested Backup Strategy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Data loss isn't just an inconvenience — it can end a business.
                Hardware failures, ransomware attacks, accidental deletion, and
                natural disasters are all real and common threats.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Having a backup isn't enough —{" "}
                <strong className="text-foreground">
                  a backup that hasn't been tested isn't a backup.
                </strong>{" "}
                We set up your solution and test it regularly to ensure restores
                actually work when you need them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our backup solutions are designed around your business — your
                data volume, your recovery time requirements, and your
                compliance obligations.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="space-y-4">
                {[
                  {
                    icon: AlertTriangle,
                    stat: "60%",
                    label:
                      "of SMBs close within 6 months of losing critical data",
                    color: "text-destructive",
                    bg: "bg-destructive/10",
                  },
                  {
                    icon: Shield,
                    stat: "62%",
                    label:
                      "increase in ransomware attacks against Australian businesses in 2024",
                    color: "text-orange-600",
                    bg: "bg-orange-100/60",
                  },
                  {
                    icon: Clock,
                    stat: "AUD $275K",
                    label:
                      "average cost of a data breach for an Australian SMB",
                    color: "text-primary",
                    bg: "bg-primary/10",
                  },
                  {
                    icon: CheckCircle2,
                    stat: "< 4 hrs",
                    label:
                      "typical full system recovery time with our hybrid backup solution",
                    color: "text-green-600",
                    bg: "bg-green-100/60",
                  },
                ].map((item, i) => (
                  <div
                    key={item.stat}
                    className="flex items-center gap-5 bg-card rounded-xl p-5 border border-border shadow-card"
                    data-ocid={`backup.stat.${i + 1}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center shrink-0`}
                    >
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <p
                        className={`font-display font-bold text-2xl ${item.color}`}
                      >
                        {item.stat}
                      </p>
                      <p className="text-xs text-muted-foreground leading-snug mt-0.5">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Backup Types */}
      <section className="py-20 bg-muted/30" data-ocid="backup.types_section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Backup Solutions"
              title="Three Approaches to Data Protection"
              subtitle="We design the right combination of cloud, on-site, and hybrid backup for your business needs and budget."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {backupTypes.map((bt, i) => (
              <AnimatedSection key={bt.title} delay={i * 100} direction="up">
                <div
                  className="bg-card rounded-xl border border-border p-7 h-full shadow-card"
                  data-ocid={`backup.type.${i + 1}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <bt.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                      {bt.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                    {bt.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {bt.desc}
                  </p>
                  <ul className="space-y-2">
                    {bt.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span className="text-xs text-muted-foreground">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Capabilities */}
      <section
        className="py-20 bg-background"
        data-ocid="backup.recovery_section"
      >
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Recovery Capabilities"
              title="Recover Fast — Whatever the Scenario"
              subtitle="From a single accidentally deleted file to a full ransomware incident — we have the right recovery process ready."
              className="mb-12"
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recoveryCapabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 80} direction="up">
                <div
                  className="bg-card rounded-xl p-6 border border-border h-full shadow-card"
                  data-ocid={`backup.recovery.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <cap.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2 text-sm">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance + Testing */}
      <section
        className="py-20 bg-muted/30"
        data-ocid="backup.security_section"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Security & Compliance
                </span>
              </div>
              <h2 className="font-display font-bold text-foreground text-2xl mb-5">
                Enterprise Security, SMB Price
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Our backup solutions meet the security and compliance
                requirements of Australian healthcare, legal, and financial
                services businesses — not just broad-brush SMB needs.
              </p>
              <div className="space-y-3">
                {securityPoints.map((pt, i) => (
                  <div
                    key={pt.label}
                    className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border"
                    data-ocid={`backup.security.${i + 1}`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {pt.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {pt.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="space-y-5">
              <div className="bg-card rounded-2xl border border-border p-7 shadow-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg">
                    We Test Your Backups
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Most businesses believe they're protected — until disaster
                  strikes and they discover their backups haven't been working
                  for months.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">
                    A backup that hasn't been tested isn't a backup.
                  </strong>{" "}
                  We perform regular restore tests so you have documented proof
                  that your data can actually be recovered.
                </p>
                <div className="space-y-2.5 mb-6">
                  {[
                    "Quarterly restore tests included",
                    "Written test reports provided",
                    "Alert you to any backup failures immediately",
                    "Monthly backup health summary",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <CTAButton
                  label="Check My Current Backups"
                  href="/free-it-audit"
                  variant="secondary"
                  showArrow
                  data-ocid="backup.test_cta"
                />
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <p className="text-sm font-medium text-foreground mb-1">
                  Not sure if your current backup is working?
                </p>
                <p className="text-xs text-muted-foreground">
                  Book a free IT audit and we'll review your current backup
                  setup and identify any gaps or risks — no obligation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16" data-ocid="backup.cta_banner">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-display font-bold text-primary-foreground text-3xl mb-4">
              Don't Wait for Disaster to Strike
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Get a free backup assessment and discover exactly how protected
              your business data is — and what gaps need to be closed.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton
                label="Get Backup Plan"
                href="/contact"
                variant="primary"
                showArrow
                data-ocid="backup.bottom_cta"
              />
              <CTAButton
                label="Free IT Audit"
                href="/free-it-audit"
                variant="outline"
                data-ocid="backup.bottom_audit_cta"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
