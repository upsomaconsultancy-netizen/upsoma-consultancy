import { useEffect, useRef, useState } from "react";
import {
  Globe,
  ShoppingCart,
  BookOpen,
  Smartphone,
  Zap,
  Database,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description:
      "Bespoke responsive websites built with React, Next.js, and modern technologies. Expert web development in Dwarka, Delhi. SEO-optimized for Google rankings and high conversion rates.",
    features: [
      "Fully responsive design",
      "SEO optimization",
      "Fast performance",
      "Secure & scalable",
    ],
    status: "available",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Complete e-commerce platforms with payment gateway integration (Razorpay, PayPal), inventory management, and analytics dashboard. Leading e-commerce development in Dwarka, Delhi for online selling.",
    features: [
      "Payment integration",
      "Inventory management",
      "Order tracking",
      "Analytics dashboard",
    ],
    status: "available",
  },
  {
    icon: Zap,
    title: "Website Performance",
    description:
      "Website optimization, speed enhancement, and SEO improvements to boost your Google rankings. Expert performance optimization services in Dwarka, Delhi for better user experience metrics.",
    features: [
      "Performance audit",
      "Speed optimization",
      "SEO enhancement",
      "User experience",
    ],
    status: "available",
  },
  {
    icon: BookOpen,
    title: "WordPress Development",
    description:
      "Professional WordPress website development, custom themes, plugin development, and migration services. Perfect for content-driven websites and blogs.",
    features: [
      "Custom themes",
      "Plugin development",
      "SEO plugins",
      "Easy management",
    ],
    status: "available",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using React Native. Coming soon with iOS and Android native development services.",
    features: [
      "React Native apps",
      "Cross-platform",
      "Native performance",
      "App store ready",
    ],
    status: "coming-soon",
  },
  {
    icon: Database,
    title: "SaaS Development",
    description:
      "Scalable SaaS platforms with advanced features, multi-tenant architecture, and subscription management. Coming soon with full SaaS support.",
    features: [
      "Multi-tenant architecture",
      "Subscription billing",
      "Analytics",
      "API integration",
    ],
    status: "coming-soon",
  },
];

export default function ServicesSection() {
  // This ID will be used for navigation
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Web Development &amp; Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive web development services for businesses in Delhi and
            across India. From website design to e-commerce platforms and mobile
            apps.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className={`relative group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  service.status === "coming-soon" ? "opacity-75" : ""
                } ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: inView ? `${200 + index * 100}ms` : "0ms",
                  boxShadow: "6px 9px 18px rgb(45 58 106 / 28%)",
                  borderRadius: "34px 80px",
                  backgroundColor: "rgb(241 247 239)",
                }}
              >
                {/* Coming Soon Badge */}
                {service.status === "coming-soon" && (
                  <div
                    className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-xs font-bold rounded-bl-lg"
                    style={{
                      position: "absolute",
                      right: "18px",
                      width: "140px",
                    }}
                  >
                    Coming Soon
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-black mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-800 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-700 dark:text-gray-800"
                      >
                        <svg
                          className="h-5 w-5 text-green-500 dark:text-green-600 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {service.status === "available" ? (
                    <NavLink
                      to="/contact"
                      className="inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm hover:text-blue-700 transition-colors group-hover:underline"
                    >
                      Get Started →
                    </NavLink>
                  ) : (
                    <p
                      className="text-amber-600 dark:text-amber-400 font-semibold text-sm"
                      style={{ marginLeft: "10px" }}
                    >
                      Launching soon
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Looking for Something Specific?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
            Our expert team can discuss your unique requirements and create a
            custom solution for your web development needs in Delhi.
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: "#16a34a" }}
            style={{backgroundColor:"#16a34a"}}
            aria-label="Schedule free consultation for web services"
          >
            Schedule Free Consultation
          </NavLink>
        </div>
      </div>
    </section>
  );
}
