import React, { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

/**
 * SEO-Optimized Terms of Service Page for Upsoma — Robust Version
 * Fixes runtime errors by avoiding server-only assumptions when injecting JSON-LD.
 * - No next/head import (keeps component runnable in varied test environments)
 * - Injects JSON-LD safely on client-side using useEffect
 * - Retains Tailwind-friendly classes and all legal content
 *
 * If you run this inside a Next.js page and prefer <Head>, tell me and I will
 * provide a Next.js-specific version that uses `next/head`.
 */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Upsoma — Terms of Service",
  description:
    "SEO-optimized Terms of Service for Upsoma: payment policies, scope, revisions, IP ownership, confidentiality, cancellations, liability limits, and support terms.",
  publisher: {
    "@type": "Organization",
    name: "Upsoma",
    url: "https://upsoma.in",
    telephone: "+91 8178353728",
    email: "upsomaconsultancy@gmail.com",
  },
};

export default function TermsOfService() {
  const { theme } = useTheme();
  
  // Inject JSON-LD only on the client to avoid SSR/runtime errors in test environments
  useEffect(() => {
    try {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head && document.head.appendChild(script);

      return () => {
        try {
          document.head && script.parentNode && script.parentNode.removeChild(script);
        } catch (e) {
          /* ignore cleanup errors */
        }
      };
    } catch (e) {
      // If document is not available or append fails, fail silently to avoid runtime crash
      // Log to console for debugging in development
      if (typeof console !== "undefined") console.warn("Failed to inject JSON-LD", e);
    }
  }, []);

  return (
    <>
      <SEOHead 
        title="Terms of Service - Web Development Services | Upsoma Dwarka"
        description="Read Upsoma's comprehensive terms of service covering payment terms, project scope, intellectual property rights, confidentiality, and liability for web development services in Dwarka, Delhi."
        keywords="terms of service Dwarka, terms of service Delhi, web development terms Dwarka, web development terms Delhi, website design terms Dwarka, website design terms Delhi, Upsoma terms Dwarka, Upsoma terms Delhi, service agreement Dwarka, service agreement Delhi, web development contract Dwarka, web development contract Delhi, India web services terms, web agency terms Dwarka, web agency terms Delhi"
        canonicalUrl="https://upsoma.in/terms-of-service"
      />
      <Header />
      <div className={`min-h-screen py-12 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-[#ecfdf5] text-gray-900'}`}>
        <main className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Terms of Service</h1>
          <p className={`mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>Last updated: November 2025</p>

          {/* SECTION 1 */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">1. Agreement Overview</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              These Terms of Service ("Terms") outline the rules, policies, and obligations
              governing the services provided by Upsoma ("we", "our", "agency") to the
              Client ("you"). By starting a project with us, you agree to follow the
              guidelines mentioned below.
            </p>
          </section>

          {/* PAYMENT TERMS */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">2. Payment Terms</h2>
            <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>
                <strong>50% Advance:</strong> A non-refundable <strong>50% payment</strong> is
                mandatory <strong>before project initiation</strong>. Work begins only after
                receiving the advance.
              </li>
              <li>
                <strong>Remaining 50%:</strong> Payable on milestone completion or before final
                delivery (as per the SOW or proposal).
              </li>
              <li>
                <strong>Late Fees:</strong> Delayed payments may incur a 1.5% monthly interest.
              </li>
              <li>Third‑party expenses (hosting, paid APIs, assets) are charged separately.</li>
            </ul>
          </section>

          {/* SCOPE */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">3. Project Scope & Revisions</h2>
            <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>All project requirements must be clearly defined in the SOW/proposal.</li>
              <li>Standard packages include <strong>2–3 revision rounds</strong>.</li>
              <li>Additional major revisions or scope changes are billed separately.</li>
              <li>Timeline changes may occur if required materials or feedback are delayed.</li>
            </ul>
          </section>

          {/* DELIVERY */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">4. Timelines & Delivery</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              Timelines depend on client responsiveness, availability of required content,
              and technical complexity. Any delays caused by the client may extend the
              delivery schedule.
            </p>
          </section>

          {/* IP RIGHTS */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">5. Intellectual Property Rights</h2>
            <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Full ownership of final deliverables transfers after complete payment.</li>
              <li>
                Upsoma retains rights to prebuilt components, internal tools, and reusable
                frameworks.
              </li>
              <li>
                Client-provided content must be legal, licensed, and non-infringing.
              </li>
            </ul>
          </section>

          {/* CONFIDENTIALITY */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">6. Confidentiality & Data Security</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              Both parties agree to keep all shared information confidential. Personal data
              will be handled responsibly following applicable regulations.
            </p>
          </section>

          {/* CANCELLATION */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">7. Cancellation & Refund Policy</h2>
            <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li><strong>50% advance is non-refundable.</strong></li>
              <li>
                If the project is cancelled after initiation, the client must pay for all work
                completed up to that point.
              </li>
              <li>No refunds are issued for digital work already delivered.</li>
            </ul>
          </section>

          {/* LIABILITY */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              Upsoma is not responsible for indirect, incidental, or consequential damages,
              including data loss, revenue loss, or downtime caused by hosting providers or
              third-party tools.
            </p>
          </section>

          {/* THIRD PARTY */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">9. Third‑Party Services</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              Integrations (payment gateways, Google APIs, hosting, plugins) follow their own
              terms. The client is responsible for managing related accounts unless agreed
              otherwise.
            </p>
          </section>

          {/* TAXES */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">10. Taxes & Legal Compliance</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>All prices are exclusive of GST or applicable taxes.</p>
          </section>

          {/* JURISDICTION */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">11. Governing Law</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              These terms are governed under the laws of India. Any dispute will be handled
              in the jurisdiction specified in the client agreement.
            </p>
          </section>

          <footer className={`text-xs mt-6 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} Upsoma. All rights reserved.
          </footer>
        </main>
      </div>
      <Footer />
    </>
  );
}
