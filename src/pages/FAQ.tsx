import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, ArrowRight, Search, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/2348181964656?text=Hello%20Avis%20Prime%2C%20I%20have%20a%20question%20about%20your%20travel%20services.";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is Avis Prime Consultancy?",
        a: "Avis Prime Consultancy is a premium travel advisory firm based in Lagos, Nigeria. We specialize in visa processing, travel planning, Hajj & Umrah packages, student travel, and flight bookings for Nigerian international travelers.",
      },
      {
        q: "Is Avis Prime Consultancy a registered company?",
        a: "Yes, we are fully registered with the Corporate Affairs Commission (CAC) in Nigeria. We are also partnered with recognized travel and tourism bodies to ensure the highest standards of service.",
      },
      {
        q: "How long has Avis Prime been in business?",
        a: "We have been serving Nigerian travelers for over 7 years, helping hundreds of clients successfully travel to destinations across the globe.",
      },
    ],
  },
  {
    category: "Visa Processing",
    questions: [
      {
        q: "Which countries can you help me travel to?",
        a: "We specialize in visas for the UK, Canada, the United States, Schengen countries (Europe), Saudi Arabia (Hajj & Umrah), UAE, Australia, and New Zealand. If you have a specific destination in mind, reach out and we'll let you know if we can help.",
      },
      {
        q: "How long does the visa process take?",
        a: "Processing times vary by country and visa type. UK visas typically take 3-6 weeks, Canada visas 4-8 weeks, US visas 2-6 weeks (depending on interview availability), and Schengen visas 2-4 weeks. We provide a clear timeline during your consultation.",
      },
      {
        q: "Do you guarantee visa approval?",
        a: "No, we cannot guarantee visa approval — no legitimate consultancy can. Visa decisions are made solely by the embassy or consulate. However, we maximize your chances by ensuring your application is complete, accurate, and professionally prepared.",
      },
      {
        q: "What documents do I need for a visa application?",
        a: "Requirements vary by destination and visa type. Common documents include a valid passport, completed application forms, passport photos, proof of funds, travel itinerary, accommodation booking, and in some cases, an invitation letter. We'll provide a personalized checklist during your consultation.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        q: "How much do your services cost?",
        a: "Our fees vary depending on the service and destination. We offer transparent pricing with no hidden charges. Contact us for a free, no-obligation quote tailored to your specific needs.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, POS payments, and cash deposits. All payments are receipted and documented for transparency.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes, we offer flexible payment plans for certain services, especially for comprehensive packages like student travel or Hajj/Umrah. Speak with our team to discuss options.",
      },
    ],
  },
  {
    category: "Services & Process",
    questions: [
      {
        q: "Do I need to come to your office?",
        a: "Not necessarily. Most of our services can be handled remotely via WhatsApp, phone, and email. We'll only ask you to visit our office if physical documents need to be signed or collected.",
      },
      {
        q: "Can you help if my visa was previously denied?",
        a: "Absolutely. We have experience handling re-applications for previously denied visas. We'll review your previous application, identify issues, and strengthen your new application accordingly.",
      },
      {
        q: "Do you handle flight bookings separately from visas?",
        a: "Yes, we offer flight booking services independently. You don't need to use our visa services to book flights through us.",
      },
      {
        q: "How do I track my application status?",
        a: "We provide regular updates via WhatsApp and email throughout the process. You can also reach out to your dedicated consultant anytime for a status update.",
      },
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allFaqs = faqs.flatMap((cat) =>
    cat.questions.map((q) => ({ ...q, category: cat.category }))
  );

  const filtered = searchQuery
    ? allFaqs.filter(
        (f) =>
          f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allFaqs;

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
              FAQ
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Got Questions?{" "}
              <span className="text-gold">We've Got Answers</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our services, process, and how we help Nigerian travelers 
              reach their destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="relative -mt-8 z-10 max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400 py-3"
          />
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchQuery ? (
            <div className="space-y-3">
              {filtered.length === 0 ? (
                <p className="text-center text-gray-500 py-12">No matching questions found. Try a different search term or <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-navy underline">ask us directly</a>.</p>
              ) : (
                filtered.map((faq) => (
                  <FaqItem
                    key={faq.q}
                    id={faq.q}
                    question={faq.q}
                    answer={faq.a}
                    category={faq.category}
                    isOpen={openItems.has(faq.q)}
                    onToggle={toggleItem}
                  />
                ))
              )}
            </div>
          ) : (
            faqs.map((cat) => (
              <div key={cat.category} className="mb-12">
                <h2 className="text-lg font-bold text-navy mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center text-xs font-bold text-navy">
                    {cat.category.charAt(0)}
                  </span>
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.questions.map((faq) => (
                    <FaqItem
                      key={faq.q}
                      id={faq.q}
                      question={faq.q}
                      answer={faq.a}
                      category={cat.category}
                      isOpen={openItems.has(faq.q)}
                      onToggle={toggleItem}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              Can't find what you're looking for? Reach out to us directly and we'll get back to you promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-navy/20"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Ask on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-navy/30 text-navy px-8 py-4 rounded-full font-medium transition-all"
              >
                <span>Contact Form</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function FaqItem({
  id,
  question,
  answer,
  category,
  isOpen,
  onToggle,
}: {
  id: string;
  question: string;
  answer: string;
  category: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all hover:border-gray-200">
      <button
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between gap-4 p-4 lg:p-5 text-left"
      >
        <span className="text-sm font-medium text-gray-800">{question}</span>
        <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-navy" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-gray-400" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 lg:px-5 pb-4 lg:pb-5">
          <p className="text-sm text-gray-500 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}