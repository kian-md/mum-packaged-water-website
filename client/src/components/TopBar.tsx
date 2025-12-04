import { Phone, Mail, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function TopBar() {
  return (
    <div
      className="bg-gradient-to-r from-secondary via-secondary to-primary text-white py-2 text-sm"
      data-testid="top-bar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-white/80" />
              <span className="text-white/90 text-xs md:text-sm">Mon-Sat: 8AM - 8PM</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-white/80" />
              <a
                href="mailto:wecare@mumdrinks.com"
                className="text-white/90 text-xs md:text-sm hover:text-white transition-colors"
                data-testid="link-email"
              >
                wecare@mumdrinks.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-white/20 transition-colors"
              data-testid="link-phone"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="text-xs md:text-sm font-medium">+91 98765 43210</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500/90 px-3 py-1 rounded-full hover:bg-green-500 transition-colors"
              data-testid="link-whatsapp"
            >
              <SiWhatsapp className="h-3.5 w-3.5" />
              <span className="hidden md:inline text-xs md:text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
