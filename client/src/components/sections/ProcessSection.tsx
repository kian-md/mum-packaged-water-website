import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Filter, 
  Layers, 
  Droplets, 
  Sun, 
  Zap, 
  Sparkles,
  ArrowRight 
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Raw Filtration",
    description: "Initial removal of large impurities and sediments",
    icon: Filter,
  },
  {
    id: 2,
    title: "Carbon Filter",
    description: "Activated carbon removes chlorine and organic compounds",
    icon: Layers,
  },
  {
    id: 3,
    title: "RO Membrane",
    description: "Reverse osmosis eliminates dissolved solids and contaminants",
    icon: Droplets,
  },
  {
    id: 4,
    title: "UV Treatment",
    description: "Ultraviolet light destroys harmful bacteria and viruses",
    icon: Sun,
  },
  {
    id: 5,
    title: "Ozone Treatment",
    description: "Ozone disinfection ensures water remains pure during storage",
    icon: Zap,
  },
  {
    id: 6,
    title: "Mineral Balance",
    description: "Essential minerals are added for taste and health benefits",
    icon: Sparkles,
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-16 md:py-24 bg-muted/30"
      data-testid="section-process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Our Process
          </span>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4"
            data-testid="text-process-title"
          >
            6-Stage Purification
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Every drop of Mum water goes through our rigorous 6-stage purification
            process to ensure the highest quality and safety standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <Card
              key={step.id}
              className="relative overflow-visible bg-card border-card-border"
              data-testid={`card-process-step-${step.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-xs font-bold text-accent">
                        STEP {step.id}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/process">
            <Button variant="outline" className="group" data-testid="button-view-process">
              View Detailed Process
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
