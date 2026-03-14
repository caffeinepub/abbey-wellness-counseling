import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/", ocid: "nav.home.link" },
  { label: "About", to: "/about", ocid: "nav.about.link" },
  { label: "Services", to: "/services", ocid: "nav.services.link" },
  { label: "Resources", to: "/resources", ocid: "nav.resources.link" },
  { label: "Contact", to: "/contact", ocid: "nav.contact.link" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-sand-50/90 backdrop-blur-md border-b border-border shadow-xs">
      <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-xl font-semibold text-foreground tracking-tight">
            Abbey Wellness
          </span>
          <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
            &amp; Counseling
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className={`font-body text-sm transition-colors duration-200 ${
                pathname === link.to
                  ? "text-primary font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone */}
        <a
          href="tel:8177248161"
          className="hidden md:flex items-center gap-2 text-primary font-body text-sm font-semibold hover:text-sage-600 transition-colors"
        >
          <span className="bg-primary/10 rounded-full p-2">
            <Phone size={14} className="text-primary" />
          </span>
          817-724-8161
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-sand-50 border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className={`font-body text-base py-1 ${
                pathname === link.to
                  ? "text-primary font-semibold"
                  : "text-foreground"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:8177248161"
            className="flex items-center gap-2 text-primary font-semibold mt-2"
          >
            <Phone size={16} />
            817-724-8161
          </a>
        </div>
      )}
    </header>
  );
}
