import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Target, Heart, Users, Award, Leaf, MapPin, Zap } from "lucide-react";
import bottleImage from "@assets/bottle1_1764879240478.jpg";
import heroLogo from "@assets/hero-logo_1764879253961.png";

const values = [
  {
    icon: Heart,
    title: "Quality First",
    description: "We never compromise on quality. Every bottle undergoes rigorous testing to ensure it meets our high standards.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our customers are at the heart of everything we do. We strive to exceed expectations in every interaction.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are committed to sustainable practices, from sourcing to packaging, minimizing our environmental impact.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue excellence in every aspect of our operations, continuously improving our processes and products.",
  },
];

const whyUs = [
  {
    icon: Zap,
    title: "Modern Technology",
    description: "State-of-the-art 6-stage purification with RO, UV, and ozone treatment",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description: "Dedicated to serving tier 2 and tier 3 cities across India",
  },
  {
    icon: Target,
    title: "Affordable Quality",
    description: "Premium water at prices that make sense for every family",
  },
];

export default function About() {
  return (
    <div className="min-h-screen" data-testid="page-about">
      <Header />
      <main>
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-secondary to-secondary/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <img
                src={heroLogo}
                alt="Mum Water Logo"
                className="h-20 w-auto mx-auto mb-6 brightness-0 invert"
              />
              <h1
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                data-testid="text-about-page-title"
              >
                About Mum Water
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                A new beginning in pure, safe, and refreshing drinking water
                for families across India
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium text-sm tracking-wide uppercase">
                  Our Story
                </span>
                <h2
                  className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6"
                  data-testid="text-our-story"
                >
                  A Fresh Start
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Mum Packaged Drinking Water is born from a simple yet powerful 
                    vision: to ensure every Indian family has access to clean, safe, 
                    and affordable drinking water.
                  </p>
                  <p>
                    As a new entrant in the market, we bring fresh perspectives and 
                    modern technology to water purification. We're not just starting 
                    a business; we're starting a movement to bring premium quality 
                    drinking water to tier 2 and tier 3 cities that deserve the same 
                    quality as metro areas.
                  </p>
                  <p>
                    Every bottle of Mum water represents our promise of purity and care.
                    We're building this brand on trust, one customer at a time.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-md overflow-hidden shadow-xl">
                  <img
                    src={bottleImage}
                    alt="Mum Water Bottle"
                    loading="lazy"
                    className="w-full h-auto object-cover"
                    data-testid="img-about-page-bottle"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm tracking-wide uppercase">
                Our Mission
              </span>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
                data-testid="text-mission"
              >
                Pure Water for Every Home
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border-card-border">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To provide the highest quality packaged drinking water that
                    meets the hydration needs of every family, delivered with
                    integrity and commitment to health and safety.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-card-border">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                    <Droplets className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To become India's most trusted packaged drinking water brand,
                    known for bringing premium quality water to every corner of
                    the country, especially growing cities and towns.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm tracking-wide uppercase">
                Why Choose Us
              </span>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
                data-testid="text-why-us"
              >
                What Makes Us Different
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyUs.map((item) => (
                <Card
                  key={item.title}
                  className="text-center bg-card border-card-border"
                  data-testid={`card-why-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-medium text-sm tracking-wide uppercase">
                What We Stand For
              </span>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
                data-testid="text-values"
              >
                Our Core Values
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="text-center bg-card border-card-border"
                  data-testid={`card-value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
