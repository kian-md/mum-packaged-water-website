import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Filter, 
  Layers, 
  Droplets, 
  Sun, 
  Zap, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import heroLogo from "@assets/hero-logo_1764879253961.png";

const processSteps = [
  {
    id: 1,
    title: "Raw Water Filtration",
    description: "The purification journey begins with the removal of large particles, sediments, and suspended impurities from the source water using multi-layer sand filters.",
    details: [
      "Removes particles larger than 50 microns",
      "Multi-stage sediment filtration",
      "Pre-treatment for optimal RO performance",
      "Regular filter maintenance schedule",
    ],
    icon: Filter,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 2,
    title: "Activated Carbon Filter",
    description: "Activated carbon treatment removes chlorine, organic compounds, and unpleasant odors, improving taste and preparing water for membrane filtration.",
    details: [
      "Removes chlorine and chloramines",
      "Eliminates organic compounds",
      "Improves taste and odor",
      "High-grade coconut shell carbon",
    ],
    icon: Layers,
    color: "text-gray-600 dark:text-gray-400",
    bgColor: "bg-gray-100 dark:bg-gray-900/30",
  },
  {
    id: 3,
    title: "Reverse Osmosis (RO)",
    description: "Our advanced RO membranes remove up to 99.9% of dissolved solids, heavy metals, and contaminants while maintaining optimal mineral balance.",
    details: [
      "Removes up to 99.9% of TDS",
      "Eliminates heavy metals and arsenic",
      "Multi-stage membrane system",
      "Maintains essential mineral content",
    ],
    icon: Droplets,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 4,
    title: "UV Sterilization",
    description: "Ultraviolet light treatment destroys harmful microorganisms including bacteria, viruses, and parasites without adding chemicals.",
    details: [
      "Destroys 99.99% of bacteria",
      "Eliminates viruses and parasites",
      "No chemical additives required",
      "Continuous monitoring system",
    ],
    icon: Sun,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    id: 5,
    title: "Ozone Treatment",
    description: "Ozone disinfection provides an additional layer of protection, ensuring water remains pure during storage and distribution.",
    details: [
      "Powerful oxidizing agent",
      "Extended shelf life protection",
      "Breaks down naturally to oxygen",
      "Prevents recontamination",
    ],
    icon: Zap,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: 6,
    title: "Mineral Enrichment",
    description: "Essential minerals are carefully balanced to provide optimal taste and health benefits, ensuring every bottle is refreshing and nutritious.",
    details: [
      "Calcium for bone health",
      "Magnesium for metabolism",
      "Optimal pH balance (6.5-8.5)",
      "Controlled mineral dosing",
    ],
    icon: Sparkles,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export default function Process() {
  return (
    <div className="min-h-screen" data-testid="page-process">
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
                data-testid="text-process-page-title"
              >
                Our Purification Process
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                A detailed look at our 6-stage water treatment process that ensures
                every drop of Mum water is pure, safe, and refreshing
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-wide uppercase">
                Step by Step
              </span>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
                data-testid="text-treatment-steps"
              >
                Advanced 6-Stage Treatment
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Each stage is carefully designed to remove specific contaminants
                while preserving the natural goodness of water.
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step) => (
                <Card
                  key={step.id}
                  className="bg-card border-card-border overflow-hidden"
                  data-testid={`card-process-detail-${step.id}`}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className={`${step.bgColor} p-6 md:p-8 md:w-1/3 flex flex-col items-center justify-center text-center`}>
                        <div className="mb-3">
                          <span className="text-xs font-bold tracking-wider uppercase opacity-60">
                            Step {step.id}
                          </span>
                        </div>
                        <div className={`w-20 h-20 rounded-full bg-background/50 flex items-center justify-center mb-4`}>
                          <step.icon className={`h-10 w-10 ${step.color}`} />
                        </div>
                        <h3 className="font-serif text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <div className="p-6 md:p-8 md:w-2/3">
                        <p className="text-muted-foreground mb-6">
                          {step.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
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
                Quality You Can Trust
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8">
                Our water undergoes rigorous testing at every stage of the purification
                process. We maintain detailed records and conduct regular audits to
                ensure consistent quality.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Purity Level</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Filtration Stages</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Quality Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Quality Tests</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
