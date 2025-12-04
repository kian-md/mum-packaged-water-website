import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopBar } from "./TopBar";
import mumLogo from "@assets/mum-logo-transparent_1764879258461.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/products", label: "Products" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location === "/";
  const headerBg = isScrolled || !isHomePage
    ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
    : "bg-transparent";

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <TopBar />
      </div>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${headerBg} ${isScrolled ? 'top-0' : 'top-10'}`}
        data-testid="header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" data-testid="link-home-logo">
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src={mumLogo}
                  alt="Mum Packaged Drinking Water"
                  className="h-12 md:h-14 w-auto"
                />
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`font-medium transition-colors ${
                      location === link.href
                        ? "text-primary"
                        : isScrolled || !isHomePage
                        ? "text-foreground"
                        : "text-white"
                    }`}
                    data-testid={`link-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled || !isHomePage ? "text-foreground" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled || !isHomePage ? "text-foreground" : "text-white"}`} />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden bg-background/98 backdrop-blur-lg border-b border-border"
            data-testid="nav-mobile"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start font-medium ${
                      location === link.href ? "text-primary bg-primary/5" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
