import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiWhatsapp } from "react-icons/si";
import mumLogo from "@assets/mum-logo-transparent_1764879258461.png";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/process", label: "Our Process" },
  { href: "/products", label: "Products" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiWhatsapp, href: "https://wa.me/919876543210", label: "WhatsApp" },
  { icon: SiX, href: "#", label: "X (Twitter)" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <img
                src={mumLogo}
                alt="Mum Packaged Drinking Water"
                className="h-16 w-auto mb-4 brightness-0 invert"
                data-testid="img-footer-logo"
              />
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Bringing pure, safe, and refreshing drinking water to homes and
              businesses across India's growing cities.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4" data-testid="text-quick-links">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer text-sm"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4" data-testid="text-contact-info">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80 text-sm">
                  Mum Water Plant,<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  data-testid="link-footer-phone"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:wecare@mumdrinks.com"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                  data-testid="link-footer-email"
                >
                  wecare@mumdrinks.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4" data-testid="text-follow-us">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-secondary-foreground/60 text-sm">
              Stay connected for updates on our products and special offers.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/60 text-sm" data-testid="text-copyright">
              © {new Date().getFullYear()} Mum Packaged Drinking Water. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-secondary-foreground/60">
              <span>FSSAI Licensed</span>
              <span>•</span>
              <span>ISI Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
