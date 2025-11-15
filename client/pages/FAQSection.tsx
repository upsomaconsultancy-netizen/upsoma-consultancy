import { useState, useEffect, useRef } from "react";
import { ChevronDown, HelpCircle, MessageSquare, PhoneCall } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What is the best website design company in Delhi?",
    answer:
      "TRM Consultancy Services is a leading web development and design agency in Delhi with 8+ years of experience, 50+ completed projects, and a 4.8/5 rating. We specialize in custom website design, e-commerce solutions, and web applications for businesses across India.",
  },
  {
    question: "How much does a custom website cost in India?",
    answer:
      "Website costs vary based on complexity and features. A basic responsive website starts from budget-friendly rates, while e-commerce platforms with advanced features cost more. We offer transparent pricing and free consultations to discuss your specific needs and budget.",
  },
  {
    question: "Do you provide e-commerce website development services?",
    answer:
      "Yes, we specialize in custom e-commerce website development with features like payment gateway integration (Razorpay, PayPal), inventory management, product catalogs, shopping cart, and analytics dashboard. We create fully responsive, SEO-optimized e-commerce platforms.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "We use modern technologies including React, Node.js, Python, Next.js, Express, MongoDB, PostgreSQL, WordPress, and more. We choose the best tech stack based on your project requirements to ensure scalability, security, and performance.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Timeline depends on project complexity. A basic website takes 2-4 weeks, while a custom e-commerce platform or web application may take 6-12 weeks. We provide detailed project timelines during the consultation phase.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes, we offer 24/7 support and maintenance services including regular updates, security patches, backups, and performance optimization. Our dedicated support team ensures your website runs smoothly at all times.",
  },
  {
    question: "Are your websites SEO-friendly and mobile-responsive?",
    answer:
      "Absolutely! All our websites are built with SEO best practices and are fully responsive on mobile, tablet, and desktop devices. We focus on Google rankings and user experience to drive real business results.",
  },
  {
    question: "Do you offer WordPress website development?",
    answer:
      "Yes, we provide WordPress development services including custom theme development, plugin customization, and WordPress migration. WordPress is perfect for blogs, business websites, and content management platforms.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Of course! We offer website redesign services to modernize your site, improve user experience, boost SEO, and implement new features. We ensure a smooth transition without losing your existing traffic and rankings.",
  },
  {
    question: "What is your process for web development projects?",
    answer:
      "Our process includes: 1) Discovery & Consultation, 2) Proposal & Planning, 3) Design & Mockups, 4) Development, 5) Testing & QA, 6) Launch, 7) Support & Maintenance. We keep you involved at every step.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section
          ref={ref}
          id="faq"
          className={`py-16 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
                FAQs
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our web development services, pricing, and process for building websites in India.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <article
                  key={index}
                  className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-500 ${
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
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className={`w-full px-6 py-4 flex items-center justify-between text-left font-semibold transition-all duration-300 ${
                      openIndex === index
                        ? "bg-blue-50 text-blue-600 border-b border-gray-200"
                        : "bg-white text-gray-900 hover:bg-gray-50"
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
                      className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 leading-relaxed"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">{faq.answer}</div>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Have More Questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Our expert web development team in Delhi is ready to discuss your project and answer any questions you have.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                aria-label="Contact us for free consultation"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
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
                  href="tel:+918512345678"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call +91 85123 45678
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
