import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/2348181964656?text=Hello%20Avis%20Prime%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20consultancy%20services.";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "How It Works", path: "/how-it-works" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Visa Processing", path: "/services" },
      { label: "Vacation Planning", path: "/services" },
      { label: "Hajj & Umrah", path: "/services" },
      { label: "Student Travel", path: "/services" },
      { label: "Flight Booking", path: "/services" },
      { label: "Travel Insurance", path: "/services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-gold font-bold text-xl">AP</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Avis Prime</p>
                <p className="text-[11px] text-gold tracking-widest uppercase -mt-0.5">Consultancy</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Premium travel consultancy dedicated to helping Nigerian international travelers navigate their journey with confidence, transparency, and excellence.
            </p>
            <div className="flex items-center gap-2 text-gold text-xs">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>CAC Registered: RC 1234567</span>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+2348181964656" className="flex items-start gap-3 text-gray-300 hover:text-white text-sm transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                  <span>+234 818 196 4656</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@avisprime.com" className="flex items-start gap-3 text-gray-300 hover:text-white text-sm transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                  <span>info@avisprime.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                  <span>Lagos, Nigeria</span>
                </div>
              </li>
            </ul>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-5 py-2.5 rounded-full text-sm font-semibold mt-6 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Avis Prime Consultancy. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Disclaimer: Visa approvals are determined solely by the respective embassies. We facilitate the process but do not guarantee outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}