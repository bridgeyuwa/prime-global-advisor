import { motion } from "framer-motion";
import { Phone, FileText, Check, Plane, ArrowRight, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/2348181964656?text=Hello%20Avis%20Prime%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20consultancy%20services.";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Reach Out",
    desc: "Contact us via WhatsApp, phone call, or our enquiry form. Tell us about your travel goals and we'll schedule a free consultation.",
    color: "bg-navy",
    textColor: "text-navy",
  },
  {
    step: "02",
    icon: FileText,
    title: "Consultation & Assessment",
    desc: "We review your profile, discuss your options, and outline the best path forward. You'll receive a clear plan with timelines and pricing.",
    color: "bg-sky",
    textColor: "text-sky",
  },
  {
    step: "03",
    icon: Check,
    title: "Document Preparation",
    desc: "Our team guides you through every document requirement. We review, verify, and prepare your application package for submission.",
    color: "bg-gold",
    textColor: "text-gold",
  },
  {
    step: "04",
    icon: Plane,
    title: "Submission & Follow-Up",
    desc: "We submit your application and track it every step of the way. You'll receive regular updates until a decision is made.",
    color: "bg-navy",
    textColor: "text-navy",
  },
  {
    step: "05",
    icon: Star,
    title: "You Travel with Confidence",
    desc: "Once approved, we help with final preparations — flights, accommodation, insurance, and travel tips. You're ready to go!",
    color: "bg-gold",
    textColor: "text-gold",
  },
];

const reasons = [
  "No hidden fees — transparent pricing from day one",
  "Dedicated consultant assigned to your case",
  "Real-time updates via WhatsApp",
  "Proven success rate with Nigerian applicants",
  "Post-approval travel support included",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function HowItWorks() {
  return (
    <main className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#0A3D7A_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              How It Works
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple Process,{" "}
              <span className="text-gold">Big Results</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              We've streamlined the travel consultancy process to make it easy, transparent, and stress-free. 
              Here's how we help you get from dream to destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    i % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-gray-100 items-center justify-center z-10">
                    <span className="text-navy font-bold text-sm">{step.step}</span>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : ""}`}>
                    <div className={`inline-flex items-center gap-3 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center lg:hidden`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                          Step {step.step}
                        </span>
                        <h3 className={`text-xl font-bold text-navy mt-1`}>{step.title}</h3>
                      </div>
                    </div>
                    <p className={`text-gray-500 mt-3 leading-relaxed max-w-md ${
                      i % 2 === 0 ? "lg:ml-auto" : ""
                    }`}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Icon (desktop) */}
                  <div className="hidden lg:block flex-1">
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center ${
                      i % 2 === 0 ? "ml-auto" : ""
                    }`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Why This Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                Process with Purpose
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Every step of our process is designed to maximize your chances of success while 
                minimizing stress and confusion. We don't just process applications — we build 
                relationships and guide you personally.
              </p>
              <ul className="space-y-4">
                {reasons.map((r) => (
                  <li key={r} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-gray-600 text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy">Ready to Start?</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Your first consultation is free. No commitment required.
                </p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-4 rounded-full font-semibold transition-all w-full"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-gray-400 mt-4">
                Typically replies within 5 minutes
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              One message is all it takes. Let's make your travel dreams a reality.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-navy/20"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Message Us on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}