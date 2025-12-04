import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Package } from "lucide-react";
import bottleImage from "@assets/bottle1_1764879240478.jpg";
import heroLogo from "@assets/hero-logo_1764879253961.png";

const products = [
  {
    id: "500ml",
    name: "500 ml Bottle",
    size: "500 ml",
    description: "The perfect companion for your active lifestyle. Compact, lightweight, and easy to carry wherever you go.",
    idealFor: "Travel, gym, and daily carry",
    features: [
      "Leak-proof cap design",
      "BPA-free food-grade plastic",
      "Easy grip bottle shape",
      "Individually sealed",
    ],
    popular: false,
    packSize: "24 bottles per case",
  },
  {
    id: "1l",
    name: "1 Litre Bottle",
    size: "1 L",
    description: "Our bestselling size, offering the ideal balance between portability and hydration capacity for everyday use.",
    idealFor: "Office, school, and outdoor activities",
    features: [
      "Ergonomic bottle design",
      "Premium quality cap",
      "Perfect for desk use",
      "Convenient pack sizes",
    ],
    popular: true,
    packSize: "12 bottles per case",
  },
  {
    id: "2l",
    name: "2 Litre Bottle",
    size: "2 L",
    description: "Great for families and small gatherings. Share the purity of Mum water with your loved ones.",
    idealFor: "Home use and small events",
    features: [
      "Family-sized capacity",
      "Easy pour handle",
      "Reusable bottle",
      "Value pack available",
    ],
    popular: false,
    packSize: "6 bottles per case",
  },
  {
    id: "20l",
    name: "20 Litre Jar",
    size: "20 L",
    description: "The economical choice for offices, restaurants, and households. Compatible with standard water dispensers.",
    idealFor: "Offices, restaurants, and bulk requirements",
    features: [
      "Dispenser compatible",
      "Reusable BPA-free jar",
      "Tamper-evident seal",
      "Easy exchange program",
    ],
    popular: false,
    packSize: "Sold individually",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen" data-testid="page-products">
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
                data-testid="text-products-page-title"
              >
                Our Products
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                Choose from our range of sizes to meet your hydration needs.
                From personal bottles to bulk jars, we have you covered.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-wide uppercase">
                Available Sizes
              </span>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
                data-testid="text-product-range"
              >
                Complete Product Range
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Every size delivers the same premium quality water, purified
                through our advanced 6-stage treatment process.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="relative overflow-hidden bg-card border-card-border"
                  data-testid={`card-product-detail-${product.id}`}
                >
                  {product.popular && (
                    <Badge
                      className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground"
                      data-testid={`badge-bestseller-${product.id}`}
                    >
                      Bestseller
                    </Badge>
                  )}
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative md:w-2/5 bg-gradient-to-b from-primary/5 to-transparent p-6 flex items-center justify-center">
                        <img
                          src={bottleImage}
                          alt={product.name}
                          loading="lazy"
                          className="h-48 md:h-64 w-auto object-contain"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                          <h3 className="font-serif text-2xl font-semibold text-foreground">
                            {product.name}
                          </h3>
                          <span className="text-lg font-medium text-primary">
                            {product.size}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {product.description}
                        </p>
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Package className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {product.packSize}
                            </span>
                          </div>
                          <p className="text-sm">
                            <span className="font-medium text-foreground">Ideal for:</span>{" "}
                            <span className="text-muted-foreground">{product.idealFor}</span>
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-foreground">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                        <Link href="/contact">
                          <Button
                            variant="outline"
                            size="sm"
                            data-testid={`button-enquire-${product.id}`}
                          >
                            Enquire Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need Bulk Orders?
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8">
                We offer special pricing for bulk orders. Whether you need water
                for your office, restaurant, or event, our team is ready to help.
              </p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-bulk-enquiry">
                  Contact for Bulk Orders
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
