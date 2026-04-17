import { Link } from "@tanstack/react-router";
import {
  Clock,
  Cpu,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { footerColumns } from "../config/navigation";
import { siteConfig } from "../config/siteContent";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2 font-display font-bold text-lg text-foreground mb-4"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Cpu className="w-4 h-4 text-primary-foreground" />
              </div>
              {siteConfig.company.name}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              Helping Australian small businesses grow with professional IT
              support and web solutions since 2012.
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary shrink-0" />
                {siteConfig.company.phone}
              </a>
              <a
                href={`mailto:${siteConfig.company.email}`}
                className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                {siteConfig.company.email}
              </a>
              <div className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{siteConfig.company.address}</span>
              </div>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                {siteConfig.company.businessHours}
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-muted-foreground"
                  aria-label="Facebook"
                  data-ocid="footer.facebook_link"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-muted-foreground"
                  aria-label="Twitter"
                  data-ocid="footer.twitter_link"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-muted-foreground"
                  aria-label="LinkedIn"
                  data-ocid="footer.linkedin_link"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-muted-foreground"
                  aria-label="Instagram"
                  data-ocid="footer.instagram_link"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-ocid={`footer.${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "_")
                        .replace(/[^a-z0-9_]/g, "")}_link`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 py-5 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>
              © {year} {siteConfig.company.name}. All rights reserved.
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">{siteConfig.company.abn}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <span>·</span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Built with caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
