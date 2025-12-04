import { Card, CardContent } from "@/components/ui/card";
import { Droplets, ShieldCheck, BadgeCheck, Sparkles } from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Pure",
    description: "6-stage RO purification removes 99.9% of impurities and contaminants",
    icon: Droplets,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 2,
    title: "Safe",
    description: "UV and ozone treatment eliminates harmful bacteria and viruses",
    icon: ShieldCheck,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
  },
  {
    id: 3,
    title: "Certified",
    description: "FSSAI licensed and ISI certified for quality assurance",
    icon: BadgeCheck,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 4,
    title: "Hygienic",
    description: "Bottled in sterile conditions with tamper-proof sealing",
    icon: Sparkles,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
];

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-16 md:py-24 bg-muted/30"
      data-testid="section-benefits"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Why Choose Us
          </span>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4"
            data-testid="text-benefits-title"
          >
            Why Choose Mum Water
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Experience the difference of premium packaged drinking water that
            prioritizes your health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <Card
              key={benefit.id}
              className="text-center bg-card border-card-border"
              data-testid={`card-benefit-${benefit.id}`}
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 rounded-full ${benefit.bgColor} flex items-center justify-center mx-auto mb-4`}
                >
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
