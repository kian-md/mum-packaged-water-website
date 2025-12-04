import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-not-found">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <div className="text-8xl font-serif font-bold text-primary mb-4">404</div>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button className="gap-2" data-testid="button-go-home">
                <Home className="h-4 w-4" />
                Go to Home
              </Button>
            </Link>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => window.history.back()}
              data-testid="button-go-back"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
