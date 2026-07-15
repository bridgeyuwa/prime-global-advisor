import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const WHATSAPP_LINK = "https://wa.me/2348181964656?text=Hello%20Avis%20Prime%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20consultancy%20services.";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-gray-100/80" />
      <nav className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
            <span className="text-gold font-bold text-lg">AP</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-navy font-bold text-lg leading-tight">Avis Prime</p>
            <p className="text-[11px] text-navy-light tracking-widest uppercase -mt-0.5">Consultancy</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-navy bg-navy/5"
                      : "text-gray-600 hover:text-navy hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-navy/20"
        >
          <Phone className="w-4 h-4" />
          <span>WhatsApp Consultation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-navy hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 lg:hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "text-navy bg-navy/5"
                        : "text-gray-600 hover:text-navy hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-5 py-3 rounded-full text-sm font-semibold transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}