import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import bottleImage from "@assets/bottle1_1764879240478.jpg";

const products = [
  {
    id: "500ml",
    name: "500 ml",
    size: "500 ml",
    description: "Perfect for personal use and on-the-go hydration",
    idealFor: "Travel, gym, and daily carry",
    popular: false,
  },
  {
    id: "1l",
    name: "1 Litre",
    size: "1 L",
    description: "Ideal balance of portability and capacity",
    idealFor: "Office, school, and outdoor activities",
    popular: true,
  },
  {
    id: "2l",
    name: "2 Litre",
    size: "2 L",
    description: "Great for families and small gatherings",
    idealFor: "Home use and small events",
    popular: false,
  },
  {
    id: "20l",
    name: "20 Litre Jar",
    size: "20 L",
    description: "Bulk packaging for offices and households",
    idealFor: "Offices, restaurants, and bulk requirements",
    popular: false,
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      className="py-16 md:py-24 bg-background"
      data-testid="section-products"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Our Products
          </span>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4"
            data-testid="text-products-title"
          >
            Available Sizes
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Choose the perfect size for your hydration needs. From personal bottles
            to bulk jars, we have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="relative overflow-hidden bg-card border-card-border group"
              data-testid={`card-product-${product.id}`}
            >
              {product.popular && (
                <Badge
                  className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground"
                  data-testid={`badge-popular-${product.id}`}
                >
                  Popular
                </Badge>
              )}
              <div className="relative h-48 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
                <img
                  src={bottleImage}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <span className="text-sm font-medium text-primary">
                    {product.size}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {product.description}
                </p>
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Ideal for:</span>{" "}
                    {product.idealFor}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products">
            <Button variant="outline" className="group" data-testid="button-view-products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
