import { Link } from "@tanstack/react-router";
import { Heart, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Abbey Wellness & Counseling
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              A compassionate space to heal, grow, and discover your path
              forward.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-base font-semibold text-foreground mb-4">
              Pages
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Patient Resources", to: "/resources" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-foreground mb-4">
              Contact
            </h4>
            <a
              href="tel:8177248161"
              className="flex items-center gap-3 text-primary font-semibold hover:text-sage-600 transition-colors mb-3"
            >
              <span className="bg-primary/10 rounded-full p-2">
                <Phone size={16} className="text-primary" />
              </span>
              817-724-8161
            </a>
            <p className="font-body text-sm text-muted-foreground">
              Located in the greater Dallas–Fort Worth area.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-body">
          <span>
            © {year} Abbey Wellness &amp; Counseling. All rights reserved.
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            Built with <Heart size={12} className="text-primary" /> using
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
