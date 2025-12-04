import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowRight, Award, ShieldCheck } from "lucide-react";

const certifications = [
  {
    id: "fssai",
    name: "FSSAI",
    fullName: "Food Safety and Standards Authority of India",
    number: "12345678901234",
    description: "Licensed food safety operation ensuring compliance with national standards",
    icon: Award,
  },
  {
    id: "isi",
    name: "ISI",
    fullName: "Indian Standards Institution",
    number: "IS 14543:2016",
    description: "Certified under Bureau of Indian Standards for packaged drinking water",
    icon: ShieldCheck,
  },
];

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-16 md:py-24 bg-background"
      data-testid="section-certifications"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm tracking-wide uppercase">
            Quality Assurance
          </span>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4"
            data-testid="text-certifications-title"
          >
            Our Certifications
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Mum water is certified by leading regulatory bodies, ensuring every
            bottle meets the highest quality and safety standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="bg-card border-card-border"
              data-testid={`card-certification-${cert.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
                      <cert.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.fullName}
                    </p>
                    <p className="text-sm font-mono text-primary mb-3">
                      {cert.number}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      data-testid={`button-download-${cert.id}`}
                    >
                      <Download className="h-4 w-4" />
                      Download Certificate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/certifications">
            <Button variant="outline" className="group" data-testid="button-view-certifications">
              View All Certifications
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
