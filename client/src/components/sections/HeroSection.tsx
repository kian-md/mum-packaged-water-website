import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@assets/hero-background_1764884714555.jpg";

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20">
        <div className="animate-fade-in">
          <p
            className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-shadow"
            data-testid="text-tagline-top"
          >
            Packaged Drinking Water
          </p>
          
          <h1
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 text-shadow"
            data-testid="text-brand-name"
          >
            Mum
          </h1>
          
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-8">
            <span className="text-white/90 text-lg md:text-xl font-medium tracking-wide text-shadow">
              PURE
            </span>
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-white/90 text-lg md:text-xl font-medium tracking-wide text-shadow">
              SAFE
            </span>
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-white/90 text-lg md:text-xl font-medium tracking-wide text-shadow">
              REFRESHING
            </span>
          </div>
          
          <p
            className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-shadow"
            data-testid="text-hero-description"
          >
            Bringing pure, safe drinking water to homes and businesses across India.
            Every drop is filtered through a 6-stage purification process
            to deliver clean, mineral-balanced hydration you can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white min-w-[180px] font-medium"
              onClick={scrollToAbout}
              data-testid="button-know-more"
            >
              Know More
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="default"
                className="min-w-[180px] font-medium"
                data-testid="button-bulk-orders"
              >
                Contact for Bulk Orders
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-pulse-gentle"
        aria-label="Scroll down"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
