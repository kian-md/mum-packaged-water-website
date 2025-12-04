import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Shield, Award } from "lucide-react";
import bottleImage from "@assets/bottle1_1764879240478.jpg";

const highlights = [
  {
    icon: Droplets,
    title: "6-Stage Purification",
    description: "Advanced filtration process",
  },
  {
    icon: Shield,
    title: "100% Safe",
    description: "Lab-tested quality",
  },
  {
    icon: Award,
    title: "Certified",
    description: "FSSAI & ISI approved",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-background"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-primary font-medium text-sm tracking-wide uppercase">
              About Mum Water
            </span>
            <h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6"
              data-testid="text-about-title"
            >
              Pure Water, Pure Care
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Mum is a new-generation packaged drinking water brand built on a simple 
              promise: every family deserves access to clean, safe, and affordable drinking water. 
              We're launching with a commitment to serve tier 2 and tier 3 cities across India, 
              bringing quality hydration to growing communities.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Using state-of-the-art RO, UV, and ozone treatment technology, we ensure 
              that every bottle of Mum water meets the highest standards of purity while 
              retaining essential minerals for optimal health. This is water you can trust for 
              your family, your business, and your community.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="text-center p-4 rounded-md bg-muted/50"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button className="group" data-testid="button-learn-more">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-md overflow-hidden shadow-xl">
              <img
                src={bottleImage}
                alt="Mum Water Bottle"
                loading="lazy"
                className="w-full h-auto object-cover"
                data-testid="img-about-bottle"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
