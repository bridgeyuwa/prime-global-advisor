import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, LoaderCircle, Check, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/2348181964656?text=Hello%20Avis%20Prime%2C%20I%20would%20like%20to%20inquire%20about%20your%20travel%20consultancy%20services.";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+234 818 196 4656",
    href: "tel:+2348181964656",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@avisprime.com",
    href: "mailto:info@avisprime.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Lagos, Nigeria",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 8AM – 6PM (WAT)",
    href: null,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#0A3D7A_0%,_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Start Your{" "}
              <span className="text-gold">Travel Journey</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a question or ready to get started? Reach out to us and our team will respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-10 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-xl p-4 lg:p-6 border border-gray-100 shadow-sm text-center"
            >
              <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-3">
                <info.icon className="w-5 h-5 text-navy" />
              </div>
              <p className="text-xs text-gray-400 mb-1">{info.label}</p>
              {info.href ? (
                <a href={info.href} className="text-sm font-semibold text-navy hover:text-navy-light transition-colors">
                  {info.value}
                </a>
              ) : (
                <p className="text-sm font-semibold text-navy">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + WhatsApp */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">Thank you for reaching out. We'll respond within 24 hours. In the meantime, feel free to chat with us on WhatsApp for faster responses.</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-full font-semibold text-sm mt-6 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:border-navy outline-none transition-colors placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:border-navy outline-none transition-colors placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:border-navy outline-none transition-colors placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:border-navy outline-none transition-colors text-gray-500"
                      >
                        <option value="">Select a service</option>
                        <option value="visa">Visa Processing</option>
                        <option value="vacation">Vacation Planning</option>
                        <option value="hajj">Hajj & Umrah</option>
                        <option value="student">Student Travel</option>
                        <option value="flight">Flight Booking</option>
                        <option value="insurance">Travel Insurance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your travel plans or questions..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:border-navy outline-none transition-colors placeholder:text-gray-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-4 rounded-xl font-semibold transition-all disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <LoaderCircle className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* WhatsApp card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-navy text-white rounded-2xl p-8 lg:p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Prefer Instant Messaging?</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Our WhatsApp response time is typically under 5 minutes during business hours. 
                    It's the fastest way to get your questions answered.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Free initial consultation",
                      "Share documents instantly",
                      "Get real-time updates",
                      "Talk directly to your consultant",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-gold shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy px-6 py-4 rounded-xl font-semibold transition-all w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}