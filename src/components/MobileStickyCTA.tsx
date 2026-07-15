import { MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/2348181964656?text=Hello%20Avis%20Prime%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20consultancy%20services.";

export default function MobileStickyCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="absolute -top-12 right-4 w-10 h-10 bg-navy text-white rounded-full shadow-lg flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Bottom bar */}
      <div className="bg-white/90 backdrop-blur-lg border-t border-gray-100 px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href="tel:+2348181964656"
          className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-navy px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Call Us</span>
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-navy/20"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}