import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@tanstack/react-router";
import { ChevronDown, Cpu, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "../config/navigation";
import { siteConfig } from "../config/siteContent";
import type { NavItem } from "../types";

function DropdownMenu({
  items,
  isOpen,
}: { items: NavItem[]; isOpen: boolean }) {
  return (
    <div
      className={`absolute top-full left-0 mt-2 w-60 bg-card border border-border rounded-lg shadow-elevated overflow-hidden transition-all duration-200 z-50 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/8 hover:text-primary transition-colors duration-150"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = router.subscribe("onBeforeLoad", () => {
      setMobileOpen(false);
      setOpenDropdown(null);
    });
    return unsub;
  }, [router]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-card border-b border-border shadow-subtle">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-3 py-2 rounded-md text-sm font-medium z-50"
      >
        Skip to content
      </a>
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-display font-bold text-xl text-foreground hover:text-primary transition-colors"
          data-ocid="header.logo_link"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Cpu className="w-4 h-4 text-primary-foreground" />
          </div>
          <span>{siteConfig.company.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
          {navigation.slice(0, 6).map((item) => (
            <div key={item.href} className="relative">
              {item.children ? (
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/60"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label,
                    )
                  }
                  data-ocid={`header.${item.label.toLowerCase()}_dropdown`}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/60 block"
                  activeProps={{ className: "text-primary font-semibold" }}
                  data-ocid={`header.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                >
                  {item.label}
                </Link>
              )}
              {item.children && (
                <DropdownMenu
                  items={item.children}
                  isOpen={openDropdown === item.label}
                />
              )}
            </div>
          ))}
          {navigation.slice(6).map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/60"
              activeProps={{ className: "text-primary font-semibold" }}
              data-ocid={`header.${item.label.toLowerCase()}_link`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.company.phone}`}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.company.phone}
          </a>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-sm"
            data-ocid="header.free_consultation_button"
          >
            <Link to="/contact">Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="header.mobile_menu_toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-screen border-t border-border" : "max-h-0"}`}
      >
        <nav className="container py-4 space-y-1">
          {navigation.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-foreground rounded-md hover:bg-muted/60"
                    onClick={() =>
                      setExpandedMobile(
                        expandedMobile === item.label ? null : item.label,
                      )
                    }
                    data-ocid={`mobile.${item.label.toLowerCase()}_toggle`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${expandedMobile === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${expandedMobile === item.label ? "max-h-96" : "max-h-0"}`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block pl-6 pr-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        data-ocid={`mobile.${child.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.href}
                  className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted/60 rounded-md transition-colors"
                  activeProps={{
                    className: "text-primary font-semibold bg-primary/8",
                  }}
                  data-ocid={`mobile.${item.label.toLowerCase()}_link`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-border">
            <Button
              asChild
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              data-ocid="mobile.free_consultation_button"
            >
              <Link to="/contact">Free Consultation</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
