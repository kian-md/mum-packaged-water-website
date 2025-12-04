import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="page-home">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <WhoWeServeSection />
        <ProcessSection />
        <BenefitsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
