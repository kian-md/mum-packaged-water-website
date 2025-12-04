import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Store, PartyPopper } from "lucide-react";

const serveCategories = [
  {
    icon: Home,
    title: "Homes & Families",
    description: "Perfect launch packs for families who want safe daily drinking water",
  },
  {
    icon: Building2,
    title: "Offices & Corporates",
    description: "Reliable hydration plans for new and growing teams across India",
  },
  {
    icon: Store,
    title: "Retail & Shops",
    description: "Attractive margins and support for early retail partners",
  },
  {
    icon: PartyPopper,
    title: "Events & Functions",
    description: "Fresh, clearly branded water for your celebrations and events",
  },
];

export function WhoWeServeSection() {
  return (
    <section
      id="who-we-serve"
      className="py-16 md:py-24 bg-gradient-to-b from-secondary via-secondary/95 to-primary/90"
      data-testid="section-who-we-serve"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 font-medium text-sm tracking-wide uppercase mb-4">
            Perfect For
          </span>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-testid="text-who-we-serve-title"
          >
            Who We Serve
          </h2>
          <p className="text-white/80 text-base md:text-lg">
            From homes to offices and shops, Mum Water is here to earn your trust as
            we begin our journey across India's growing cities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serveCategories.map((category) => (
            <Card
              key={category.title}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-center"
              data-testid={`card-serve-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-md bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
