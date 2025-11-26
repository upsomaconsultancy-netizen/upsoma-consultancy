import { useState, useEffect, useRef } from "react";
import { ChevronDown, MessageSquare, PhoneCall } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

// आपके FAQ डेटा
const faqs = [
  {
    question: "What makes Upsoma the best web design and development agency in Delhi?",
    answer:
      "Upsoma combines 8+ years of experience, 50+ completed projects, and a deep technical skill‑set in React, Node.js, e‑commerce, and SEO. We focus on delivering performance-driven, conversion-optimized websites tailored to your business goals.",
  },
  {
    question: "How much does a custom website cost with Upsoma?",
    answer:
      "The cost depends on features, design complexity, and platform choice. A basic responsive website may start at a moderate price, while a custom e‑commerce or web application can cost more. We offer transparent, project-based pricing and free consultations to refine your budget.",
  },
  {
    question: "How long does it take to build a website with Upsoma?",
    answer:
      "It typically takes 2–4 weeks for a simple site, and 6–12 weeks for more complex projects like e‑commerce or web apps. We provide a detailed project timeline during the consultation so you know what to expect.",
  },
  {
    question: "Do you offer SEO services along with web design?",
    answer:
      "Yes. Every site we build is SEO-optimized by default: we handle meta tags, content structure, semantic HTML, performance, and mobile responsiveness to help your site rank higher in Google.",
  },
  {
    question: "Are your websites mobile‑friendly?",
    answer:
      "Absolutely. Upsoma builds fully responsive websites that adapt smoothly to mobile, tablet, and desktop devices. We prioritize mobile‑first design and performance for better SEO and user experience.",
  },
  {
    question: "Which technologies do you use for building websites?",
    answer:
      "We use modern and scalable tech stacks including React, Vite, Node.js, Express, Next.js, MongoDB, and more. For CMS-based projects, we also work with WordPress to deliver highly customized and flexible solutions.",
  },
  {
    question: "Can you develop an e‑commerce website?",
    answer:
      "Yes, we specialize in building custom e‑commerce platforms with payment gateway integration (e.g., Razorpay, PayPal), inventory management, product catalogs, and analytics dashboards — all SEO‑optimized and performance‑tuned.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We can redesign your site to improve its look, UX, SEO, and performance — without losing your current traffic or search ranking. Our redesign process ensures a seamless migration and quality improvements.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes. We provide ongoing maintenance, security updates, backup, and performance optimization. Our support team is dedicated to keeping your website secure, fast, and up‑to‑date.",
  },
  {
    question: "Do you offer WordPress development?",
    answer:
      "Yes. We build custom WordPress websites, tailor themes, plugins, and also handle migrations. WordPress is ideal for content‑heavy or blog‑based businesses and gives you full control over your content.",
  },
  {
    question: "How do you ensure website performance and speed?",
    answer:
      "We optimize websites using modern techniques: lazy loading, code splitting, minification, optimized images, and preloading critical assets. We also monitor Core Web Vitals to ensure speed and stability.",
  },
  {
    question: "What is your process for a new web development project?",
    answer:
      "Our process: 1) Discovery & Consultation; 2) Wireframes & Design; 3) Development; 4) Testing & QA; 5) Launch; 6) Ongoing Support & SEO Maintenance.",
  },
  {
    question: "Can you help me rank on Google after building my website?",
    answer:
      "Yes. Apart from building a technically optimized site, we help with on‑page SEO, content strategy, keyword research, and structured data like schema to help you improve your Google rankings.",
  },
  {
    question: "How do you price ongoing SEO or web marketing?",
    answer:
      "We offer monthly SEO retainers based on deliverables (like content, backlinks, optimizations). Pricing depends on your goals (local SEO, national SEO, e‑commerce), keyword difficulty, and content needs.",
  },
  {
    question: "How do I get started with Upsoma?",
    answer:
      "Simply contact us for a free consultation — we’ll understand your business goals, project scope, timeline, and then provide you a detailed proposal and estimate.",
  },
];

// JSON‑LD schema object
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export function FAQSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

export default function FAQSection() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* JSON-LD schema 插入 */}
      <FAQSchema />

      <section
        ref={ref}
        id="faq"
        className={`py-16 transition-all duration-700 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-gray-50 to-blue-50'
        } ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block font-semibold text-sm uppercase tracking-wider mb-4 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}>
              FAQs
            </span>
            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
            }`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get answers to common questions about our web services, pricing, and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <article
                key={index}
                className={`border rounded-lg overflow-hidden transition-all duration-500 ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                } ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: inView ? `${100 + index * 50}ms` : "0ms",
                }}
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full px-6 py-4 flex items-center justify-between text-left font-semibold transition-all duration-300 ${
                    openIndex === index
                      ? theme === 'dark'
                        ? 'bg-blue-900 text-blue-300 border-b border-gray-700'
                        : 'bg-blue-50 text-blue-600 border-b border-gray-200'
                      : theme === 'dark'
                        ? 'bg-gray-800 text-gray-100 hover:bg-gray-700'
                        : 'bg-white text-gray-900 hover:bg-gray-50'
                  }`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span itemProp="name">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className={`px-6 py-4 border-t leading-relaxed ${
                      theme === 'dark' 
                        ? 'bg-gray-800 border-gray-700 text-gray-300'
                        : 'bg-gray-50 border-gray-200 text-gray-700'
                    }`}
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">{faq.answer}</div>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
            }`}>Have More Questions?</h3>
            <p className={`mb-6 max-w-xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our expert web development team is ready to discuss your project and answer any questions you have.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
              aria-label="Contact us for free consultation"
            >
              <MessageSquare className="w-5 h-5" />
              Get Free Consultation
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-bold text-white mb-6">Still have questions?</h3>
                <p className="text-xl text-blue-100 mb-8">
                  Can't find the answer you're looking for? Our team is here to help you 24/7.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Send us a Message
                  </a>
                  <a
                    href="tel:+918178353728"
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-5 h-5" />
                    Call +91 8178353728
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
