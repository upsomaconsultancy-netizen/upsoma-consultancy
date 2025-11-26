import React from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Palette, Globe2, Rocket, Layers, Smartphone, Database, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import SEOHead from "@/components/SEOHead";


// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: 0.12 * i, 
      duration: 0.5, 
      ease: [0.16, 1, 0.3, 1] 
    },
  }),
};

const floaty = {
  hover: { y: -6, transition: { type: "spring", stiffness: 300 } },
};

export default function About() {
  const { theme } = useTheme();
  
  return (
    <>
      <SEOHead 
        title="About Upsoma - Leading Web Development Agency in Dwarka Delhi"
        description="Learn about Upsoma - Dwarka's trusted web development agency. 8+ years experience, 50+ projects delivered in Dwarka area. Expert team in React, Node.js, e-commerce, and SEO solutions."
        keywords="about Upsoma, web development agency Dwarka, web development Delhi, about Upsoma web services Dwarka, about Upsoma web services Delhi, web design company Dwarka Delhi, web design company Delhi, Upsoma team Dwarka, Upsoma team Delhi, React developers Dwarka, React developers Delhi, SEO experts Dwarka, SEO experts Delhi, best web agency in Dwarka, best web agency Delhi"
        canonicalUrl="https://upsoma.in/about"
      />
      <Header />
      <div className={`min-h-screen pt-20 pb-16 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-[#ecfdf5] text-gray-900'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header / Hero */}
          <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              About Upsoma — India's Trusted Web Development Agency
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`mt-4 text-lg md:text-xl max-w-3xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
            >
              We transform ideas into high-performing, SEO-friendly websites and web apps.
              From custom web development to e-commerce and app solutions — we focus on
              performance, conversion, and measurable growth.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-3">
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-sm text-sm ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white/80'}`}>
                <strong>Expert team</strong> — Web devs & designers
              </span>
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-sm text-sm ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white/80'}`}>
                <strong>24/7 Support</strong>
              </span>
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-sm text-sm ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white/80'}`}>
                <strong>SEO-First</strong>
              </span>
            </motion.div>
          </motion.header>

          {/* Services grid */}
          <section className="mb-14">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-6"
            >
              What we do
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Code2 className="w-6 h-6" />,
                  title: "Custom Web Development",
                  desc: "React, Next.js — scalable, maintainable, SEO-optimized sites.",
                },
                {
                  icon: <Palette className="w-6 h-6" />,
                  title: "UI / UX Design",
                  desc: "Conversion-focused interfaces and delightful interactions.",
                },
                {
                  icon: <Globe2 className="w-6 h-6" />,
                  title: "Advertisement & SEO",
                  desc: "Organic growth strategies and paid campaigns tuned to ROI.",
                },
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  title: "App Development",
                  desc: "Cross-platform React Native apps with native performance (coming soon).",
                },
                {
                  icon: <Rocket className="w-6 h-6" />,
                  title: "E‑Commerce Solutions",
                  desc: "Payment integrations, inventory sync, analytics, and conversion funnels.",
                },
                {
                  icon: <Database className="w-6 h-6" />,
                  title: "SaaS Development",
                  desc: "Multi-tenant platforms, subscription billing & analytics (coming soon).",
                },
                {
                  icon: <Cloud className="w-6 h-6" />,
                  title: "Website Performance",
                  desc: "Audits, speed optimizations and Core Web Vitals tuning.",
                },
                {
                  icon: <Layers className="w-6 h-6" />,
                  title: "WordPress",
                  desc: "Custom themes, plugins and migration for content-first sites.",
                },
              ].map((s, i) => (
                <motion.article
                  key={s.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative p-6 rounded-2xl shadow-md border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-white/60'}`}
                >
                  <motion.div whileHover={{ scale: 1.03 }} className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg inline-flex items-center justify-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-[#f8fff9]'}`}>
                      {s.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">{s.title}</h3>
                      <p className={`mt-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{s.desc}</p>
                    </div>
                  </motion.div>

                  <div className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full font-medium ${theme === 'dark' ? 'bg-green-900 text-green-300' : 'bg-[#f0fff5] text-green-700'}`}>
                    SEO-First
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* About / team */}
          <section className={`mb-14 p-8 rounded-2xl shadow-sm ${theme === 'dark' ? 'bg-gray-800' : 'bg-white/80'}`}>
            <motion.h3
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold"
            >
              Team & Approach
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
            >
              We believe in collaboration, creativity and measurable results. Our engineers,
              designers and SEO specialists work together from project initiation through
              launch and post-launch maintenance to ensure your product continuously
              improves — technically and commercially.
            </motion.p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}
              >
                <p className="text-sm font-medium">SEO & Growth</p>
                <p className={`mt-2 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Technical SEO, content strategy, and analytics.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}
              >
                <p className="text-sm font-medium">Engineering</p>
                <p className={`mt-2 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Performance-first development with modern frameworks.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}
              >
                <p className="text-sm font-medium">Design</p>
                <p className={`mt-2 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>User-centred design focused on conversion and accessibility.</p>
              </motion.div>
            </div>
          </section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-white to-white/60'}`}
          >
            <div>
              <h4 className="text-lg font-semibold">Looking for something specific?</h4>
              <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Tell us your requirements and we'll propose a tailored solution.</p>
            </div>

            <div className="flex gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium bg-[#0f766e] text-white shadow-sm hover:bg-[#0d6c65] transition-colors"
              >
                Get Started
              </Link>

              <Link
                to="/#services"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </motion.section>

          <footer className={`mt-10 text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>© {new Date().getFullYear()} Upsoma — Built for performance & discoverability.</footer>
        </div>
      </div>
      <Footer />
    </>
  );
}
