import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Award, ShieldCheck, FileCheck, Beaker, CheckCircle2 } from "lucide-react";
import heroLogo from "@assets/hero-logo_1764879253961.png";

const certifications = [
  {
    id: "fssai",
    name: "FSSAI License",
    fullName: "Food Safety and Standards Authority of India",
    number: "12345678901234",
    description: "Our FSSAI license ensures that Mum water meets all food safety regulations and standards set by the Government of India. This certification covers our entire production process, from sourcing to packaging.",
    validUntil: "December 2025",
    icon: Award,
    details: [
      "Regular compliance audits",
      "Strict hygiene standards",
      "Quality control protocols",
      "Traceability systems",
    ],
  },
  {
    id: "isi",
    name: "ISI Certification",
    fullName: "Bureau of Indian Standards (BIS)",
    number: "IS 14543:2016",
    description: "ISI certification confirms that our packaged drinking water meets the Indian Standard IS 14543:2016 for packaged drinking water. This ensures consistent quality across all production batches.",
    validUntil: "March 2026",
    icon: ShieldCheck,
    details: [
      "Product quality verification",
      "Manufacturing process audits",
      "Regular sampling and testing",
      "Consumer protection",
    ],
  },
];

const qualityTests = [
  {
    category: "Physical Tests",
    tests: ["Color", "Odor", "Taste", "Turbidity", "pH Level", "Total Dissolved Solids"],
  },
  {
    category: "Chemical Tests",
    tests: ["Chlorine Residual", "Fluoride", "Nitrate", "Sulfate", "Iron", "Heavy Metals"],
  },
  {
    category: "Microbiological Tests",
    tests: ["Total Coliform", "E. coli", "Salmonella", "Pseudomonas", "Total Plate Count"],
  },
];

export default function Certifications() {
  return (
    <div className="min-h-screen" data-testid="page-certifications">
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
                data-testid="text-certifications-page-title"
              >
                Certifications & Quality
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
                Our commitment to quality is backed by certifications from
                India's leading regulatory authorities
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-wide uppercase">
                Official Certifications
              </span>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
                data-testid="text-our-certifications"
              >
                Regulatory Compliance
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Mum Packaged Drinking Water is certified by the following
                regulatory bodies, ensuring the highest standards of quality and safety.
              </p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {certifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="bg-card border-card-border overflow-hidden"
                  data-testid={`card-certification-detail-${cert.id}`}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-primary/5 p-8 md:w-1/3 flex flex-col items-center justify-center text-center">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <cert.icon className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {cert.fullName}
                        </p>
                        <div className="font-mono text-primary font-medium">
                          {cert.number}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Valid until: {cert.validUntil}
                        </p>
                      </div>
                      <div className="p-8 md:w-2/3">
                        <p className="text-muted-foreground mb-6">
                          {cert.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {cert.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-foreground">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          className="gap-2"
                          data-testid={`button-download-cert-${cert.id}`}
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
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm tracking-wide uppercase">
                Quality Assurance
              </span>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4"
                data-testid="text-lab-testing"
              >
                Laboratory Testing
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Every batch of Mum water undergoes comprehensive laboratory
                testing to ensure it meets all quality parameters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {qualityTests.map((category) => (
                <Card
                  key={category.category}
                  className="bg-card border-card-border"
                  data-testid={`card-test-${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {category.category === "Physical Tests" && (
                        <FileCheck className="h-6 w-6 text-primary" />
                      )}
                      {category.category === "Chemical Tests" && (
                        <Beaker className="h-6 w-6 text-accent" />
                      )}
                      {category.category === "Microbiological Tests" && (
                        <ShieldCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                      )}
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {category.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {category.tests.map((test, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">
                            {test}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Request Lab Reports
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8">
                Want to see our detailed lab test results? Contact us to request
                the latest quality reports for any of our products.
              </p>
              <Button
                variant="outline"
                className="gap-2"
                data-testid="button-request-reports"
              >
                <Download className="h-4 w-4" />
                Download Sample Lab Report
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
