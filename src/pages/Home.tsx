import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, Star, Globe, Shield, Users, Clock,
  Plane, FileText, Headphones, GraduationCap, MapPin,
  ChevronRight, Phone, Quote, Sparkles, CircleCheck
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/2348181964656?text=Hello%20Avis%20Prime%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20consultancy%20services.";

const services = [
  {
    icon: Globe,
    title: "Visa Processing",
    desc: "End-to-end application support for tourist, business, student, and transit visas to UK, Canada, US, Schengen, and more.",
    gradient: "from-navy to-navy-light",
  },
  {
    icon: Plane,
    title: "Vacation Planning",
    desc: "Curated holiday packages, hotel bookings, and itinerary design for individuals, families, and groups.",
    gradient: "from-sky to-sky-light",
  },
  {
    icon: MapPin,
    title: "Hajj & Umrah",
    desc: "Complete pilgrimage packages with visa processing, flights, accommodation, and ground transportation in Saudi Arabia.",
    gradient: "from-gold to-gold-light",
  },
  {
    icon: GraduationCap,
    title: "Student Travel",
    desc: "Study abroad guidance, school applications, accommodation arrangements, and student visa support.",
    gradient: "from-navy to-navy-light",
  },
  {
    icon: FileText,
    title: "Travel Insurance",
    desc: "Comprehensive travel insurance plans covering medical emergencies, trip cancellations, and lost baggage.",
    gradient: "from-sky to-sky-light",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Round-the-clock customer support via phone, WhatsApp, and email. We're here when you need us.",
    gradient: "from-gold to-gold-light",
  },
];

const destinations = [
  { name: "London, UK", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d802427c-e921-4525-a9ed-73f4302768db/destination-london-81d9b5b5-1784114891247.webp", flag: "🇬🇧" },
  { name: "Toronto, Canada", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d802427c-e921-4525-a9ed-73f4302768db/destination-toronto-dc421e0b-1784114891299.webp", flag: "🇨🇦" },
  { name: "New York, USA", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d802427c-e921-4525-a9ed-73f4302768db/destination-newyork-78424b7c-1784114894490.webp", flag: "🇺🇸" },
  { name: "Dubai, UAE", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d802427c-e921-4525-a9ed-73f4302768db/destination-dubai-9a55e9c0-1784114894221.webp", flag: "🇦🇪" },
  { name: "Saudi Arabia", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d802427c-e921-4525-a9ed-73f4302768db/destination-saudi-89c7679f-1784114895026.webp", flag: "🇸🇦" },
];

const stats = [
  { value: "500+", label: "Visa Success Stories" },
  { value: "50+", label: "Global Destinations" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "7+", label: "Years Expertise" },
];

const testimonials = [
  {
    name: "Chioma O.",
    location: "Lagos — UK Student Visa",
    text: "Avis Prime handled my UK student visa application from start to finish. I was nervous about the process, but their team made everything clear and stress-free. I got my visa in 3 weeks!",
    rating: 5,
  },
  {
    name: "Emeka N.",
    location: "Abuja — Canada PR",
    text: "Professional, transparent, and incredibly knowledgeable. They guided me through the Canada visa process with patience and expertise. Highly recommended for anyone serious about traveling.",
    rating: 5,
  },
  {
    name: "Aisha B.",
    location: "Kano — Umrah Package",
    text: "My Umrah experience with Avis Prime was seamless. From visa to accommodation in Mecca, everything was organized perfectly. I felt supported throughout my spiritual journey.",
    rating: 5,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d802427c-e921-4525-a9ed-73f4302768db/avis-prime-hero-72314735-1784114890657.webp"
            alt="Premium travel experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-white/80 text-xs font-medium tracking-wide">
                Trusted by 500+ Nigerian Travelers
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Your Journey Begins{" "}
              <span className="text-gold">With Confidence</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
              Premium travel consultancy for Nigerian international travelers. 
              We make visas, flights, and global travel simple, transparent, and stress-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-gold/20 text-base"
              >
                <Phone className="w-5 h-5" />
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-full transition-all text-base"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-12">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white text-[10px] font-bold">
                      {["CO", "EN", "AB"][i - 1]}
                    </div>
                  ))}
                </div>
                <span className="text-white/60 text-xs">Happy Clients</span>
              </div>
              <div className="flex items-center gap-1 text-gold">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-white/60 text-xs ml-2">4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative -mt-16 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl shadow-navy/5 border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 lg:p-8 text-center"
            >
              <p className="text-2xl lg:text-3xl font-bold text-navy">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 lg:py-28 bg-gray-50/50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Comprehensive Travel Solutions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From visa applications to complete travel packages, we handle every detail so you can travel with peace of mind.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-navy/10 transition-all hover:shadow-xl hover:shadow-navy/5"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors"
            >
              <span>View all services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== DESTINATIONS ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Where We Take You
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              We connect Nigerian travelers to the world's most sought-after destinations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
              >
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-2xl mb-1">{dest.flag}</p>
                  <p className="text-white font-semibold text-sm">{dest.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 lg:py-28 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Why Avis Prime
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Built for Nigerian Travelers, By Experts
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We understand the unique challenges Nigerian travelers face — from visa interviews to document preparation. 
                Our team brings years of experience and a personal touch to every application.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: "100% Transparent Process" },
                  { icon: Clock, text: "Fast Turnaround Times" },
                  { icon: Users, text: "Personal Consultant" },
                  { icon: Globe, text: "Global Coverage" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-sm text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-full mt-8 transition-all"
              >
                <span>Talk to a Consultant</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d802427c-e921-4525-a9ed-73f4302768db/avis-prime-consultant-d2d106e6-1784114890819.webp"
                  alt="Professional travel consultant"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white text-navy rounded-xl p-4 shadow-xl max-w-[200px]">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-xs text-gray-500">Client Satisfaction Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 lg:py-28 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Real stories from Nigerian travelers who trusted us with their journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 relative"
              >
                <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Ready to Travel the World?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg mb-8">
              Take the first step toward your international journey. Our team is ready to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-navy/20 text-base"
              >
                <Phone className="w-5 h-5" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-navy/30 text-navy px-8 py-4 rounded-full font-medium transition-all text-base"
              >
                <span>Send an Enquiry</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}