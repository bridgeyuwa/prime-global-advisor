import { motion } from "framer-motion";
import {
  Globe, Plane, MapPin, GraduationCap, FileText, Headphones,
  Umbrella, ArrowRight, Check, Phone, Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/2348181964656?text=Hello%20Avis%20Prime%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20consultancy%20services.";

const serviceCategories = [
  {
    title: "Visa Processing",
    desc: "Comprehensive visa application support for all major destinations.",
    icon: Globe,
    gradient: "from-navy to-navy-light",
    items: [
      "UK Visa (Tourist, Student, Business, Transit)",
      "Canada Visa (Visitor, Study, Work, PR)",
      "US Visa (B1/B2, F1, J1, H1B)",
      "Schengen Visa (Tourist, Business)",
      "Saudi Arabia Visa (Hajj, Umrah, Business)",
      "UAE Visa (Tourist, Visit, Transit)",
      "Australia & New Zealand Visas",
      "Document verification & translation",
    ],
  },
  {
    title: "Vacation & Travel Planning",
    desc: "End-to-end holiday packages designed for your dream getaway.",
    icon: Umbrella,
    gradient: "from-sky to-sky-light",
    items: [
      "Customized itinerary planning",
      "Hotel & resort bookings worldwide",
      "All-inclusive vacation packages",
      "Group & family travel arrangements",
      "Honeymoon & special occasion trips",
      "Corporate travel management",
      "Airport transfers & local transport",
      "Travel insurance recommendations",
    ],
  },
  {
    title: "Hajj & Umrah Packages",
    desc: "Complete pilgrimage packages with spiritual and logistical support.",
    icon: MapPin,
    gradient: "from-gold to-gold-light",
    items: [
      "Full Umrah package (Visa + Flight + Hotel)",
      "Hajj registration & quota management",
      "Mecca & Medina accommodation",
      "Ground transportation in Saudi Arabia",
      "Guidance & orientation sessions",
      "Group & individual packages",
      "VIP & economy options",
      "Post-pilgrimage support",
    ],
  },
  {
    title: "Student Travel Services",
    desc: "Study abroad support from application to arrival.",
    icon: GraduationCap,
    gradient: "from-navy to-navy-light",
    items: [
      "University & college applications",
      "Student visa processing (UK, Canada, US, Australia)",
      "Scholarship guidance & information",
      "Pre-departure orientation",
      "Accommodation arrangements",
      "Guardianship services (for minors)",
      "Student travel insurance",
      "Post-arrival support",
    ],
  },
  {
    title: "Flight & Transportation",
    desc: "Competitive flight bookings and ground transport solutions.",
    icon: Plane,
    gradient: "from-sky to-sky-light",
    items: [
      "International & domestic flight bookings",
      "Group & bulk ticket discounts",
      "Airline loyalty program guidance",
      "Flight itinerary planning",
      "Airport lounge access arrangements",
      "Train & ferry bookings (Europe)",
      "Bus & coach travel arrangements",
      "24/7 flight support",
    ],
  },
  {
    title: "Travel Insurance & Protection",
    desc: "Comprehensive coverage for worry-free travel.",
    icon: Shield,
    gradient: "from-gold to-gold-light",
    items: [
      "Medical & health insurance abroad",
      "Trip cancellation coverage",
      "Lost baggage protection",
      "Emergency evacuation cover",
      "Multi-trip annual policies",
      "Student health insurance plans",
      "Senior traveler coverage",
      "Claims support & assistance",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function Services() {
  return (
    <main className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#0A3D7A_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Everything You Need for{" "}
              <span className="text-gold">Stress-Free Travel</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              From visa applications to vacation packages, we offer comprehensive travel solutions 
              tailored to Nigerian international travelers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          {serviceCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-5`}>
                  <cat.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-navy mb-3">{cat.title}</h2>
                <p className="text-gray-500 mb-6 leading-relaxed">{cat.desc}</p>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
                  <h3 className="font-bold text-navy text-lg mb-4">Why Choose Our {cat.title}?</h3>
                  <ul className="space-y-4">
                    {[
                      "Personal consultant assigned to your case",
                      "Transparent pricing — no hidden fees",
                      "Regular updates throughout the process",
                      "Dedicated WhatsApp support line",
                      "Proven track record of success",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-navy/5 flex items-center justify-center shrink-0 mt-0.5">
                          <ArrowRight className="w-3.5 h-3.5 text-navy" />
                        </div>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-full font-semibold text-sm mt-6 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Inquire About This Service</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Send us a message and we'll help you figure out the best path forward. Free consultation, no obligations.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-gold/20"
            >
              <Phone className="w-5 h-5" />
              <span>Chat with Us on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}