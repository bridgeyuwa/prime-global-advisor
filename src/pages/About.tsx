import { motion } from "framer-motion";
import { Award, Users, Heart, Target, Globe, Shield, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/2348181964656?text=Hello%20Avis%20Prime%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20consultancy%20services.";

const values = [
  {
    icon: Shield,
    title: "Integrity & Transparency",
    desc: "We believe in honest communication. No hidden fees, no false promises — just clear, upfront guidance you can trust.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    desc: "Every traveler is unique. We take the time to understand your goals and tailor our services to your specific needs.",
  },
  {
    icon: Target,
    title: "Expert Knowledge",
    desc: "Our team stays current with the latest visa policies, travel regulations, and destination requirements across the globe.",
  },
  {
    icon: Globe,
    title: "Global Network",
    desc: "We maintain strong relationships with embassies, airlines, and travel partners worldwide to serve you better.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <main className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0A3D7A_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Trusted Partner in{" "}
              <span className="text-gold">Global Travel</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Avis Prime Consultancy is a premier travel advisory firm based in Lagos, Nigeria, 
              dedicated to helping Nigerian citizens achieve their international travel goals with confidence and ease.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Founded in Lagos, Avis Prime Consultancy was born from a simple observation: 
                  Nigerian travelers deserved better. Too many were falling victim to unreliable agents, 
                  incomplete applications, and wasted time and money.
                </p>
                <p>
                  Our founder, a seasoned travel professional with years of experience navigating 
                  international visa systems, set out to change that. We built a consultancy that 
                  puts the traveler first — with transparency, expertise, and genuine care.
                </p>
                <p>
                  Today, we've helped hundreds of Nigerians travel to the UK, Canada, the United States, 
                  Europe, Saudi Arabia, the UAE, and beyond. Every success story drives us to do more.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-full font-semibold transition-all text-sm"
                >
                  <span>Talk to Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-gray-200 hover:border-navy/30 text-navy px-6 py-3 rounded-full font-medium transition-all text-sm"
                >
                  <span>Our Services</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d802427c-e921-4525-a9ed-73f4302768db/avis-prime-passport-49503bc9-1784114891112.webp"
                  alt="Travel documents"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold text-navy rounded-xl p-4 shadow-xl max-w-[180px]">
                <p className="text-2xl font-bold">7+</p>
                <p className="text-xs font-medium">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              These core principles guide every decision we make and every client we serve.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              Let's discuss your travel goals and create a plan that works for you.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-navy/20"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}