import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Upsoma.in — Privacy Policy",
  description:
    "Fully SEO‑optimized Privacy Policy for Upsoma.in describing data collection, usage, cookies, third‑party services, GDPR, CCPA, user rights, and contact information.",
  publisher: {
    "@type": "Organization",
    name: "Upsoma.in",
    url: "https://upsoma.in",
  },
};

export default function PrivacyPolicy() {
  useEffect(() => {
    try {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head && document.head.appendChild(script);

      return () => {
        try {
          document.head && script.parentNode && script.parentNode.removeChild(script);
        } catch (e) {}
      };
    } catch (e) {
      console.warn("Failed to inject JSON-LD", e);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: November 2025</p>

        {/* INTRO */}
        <section className="bg-card p-6 rounded-2xl shadow-sm mb-6 border">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="text-muted-foreground">
            This Privacy Policy explains how Upsoma.in collects, uses, stores, and protects your personal
            information. By using our website, services, or contacting us, you agree to the practices described
            in this policy.
          </p>
        </section>

        {/* DATA WE COLLECT */}
        <section className="bg-card p-6 rounded-2xl shadow-sm mb-6 border">
          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>

          <h3 className="text-lg font-medium mt-3">1. Personal Information</h3>
          <p className="text-muted-foreground mb-2">
            We may collect personal details you voluntarily provide, such as:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>Name and email address</li>
            <li>Phone number</li>
            <li>Business or project details</li>
            <li>Contact form submissions</li>
          </ul>

          <h3 className="text-lg font-medium mt-3">2. Automatic Data</h3>
          <p className="text-muted-foreground mb-2">
            When you visit our site, we automatically collect:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>IP address</li>
            <li>Browser type and device information</li>
            <li>Pages viewed and time spent</li>
            <li>Cookies and tracking data</li>
          </ul>
        </section>

        {/* HOW WE USE */}
        <section className="bg-card p-6 rounded-2xl shadow-sm mb-6 border">
          <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>To improve website functionality and security.</li>
            <li>To communicate with you regarding services.</li>
            <li>To process inquiries, quotes, and project discussions.</li>
            <li>To analyze traffic using analytics tools.</li>
            <li>To provide SEO, design, and development services.</li>
            <li>To comply with legal and regulatory obligations.</li>
          </ul>
        </section>

        {/* COOKIES */}
        <section className="bg-card p-6 rounded-2xl shadow-sm mb-6 border">
          <h2 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h2>
          <p className="text-muted-foreground mb-2">
            Upsoma.in uses cookies to enhance user experience, improve website performance, and enable analytics
            and advertising functions. For a detailed explanation, please refer to our Cookies Policy.
          </p>
        </section>

        {/* THIRD PARTY */}
        <section className="bg-card p-6 rounded-2xl shadow-sm mb-6 border">
          <h2 className="text-xl font-semibold mb-3">Third‑Party Services</h2>
          <p className="text-muted-foreground mb-2">We may use third‑party tools, including:</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>Google Analytics</li>
            <li>Google Ads / Remarketing</li>
            <li>Social media integrations (Meta, Instagram, etc.)</li>
            <li>Email & contact management tools</li>
          </ul>
          <p className="text-muted-foreground mt-2">These services may collect anonymous or aggregated data.</p>
        </section>

        {/* GDPR/CCPA */}
        <section className="bg-card p-6 rounded-2xl shadow-sm mb-6 border">
          <h2 className="text-xl font-semibold mb-3">GDPR & CCPA Compliance</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>You can request access to your personal data.</li>
            <li>You can correct or update your information.</li>
            <li>You may request deletion of your data.</li>
            <li>You may opt‑out of tracking or marketing cookies.</li>
            <li>We do not sell personal information as defined under CCPA.</li>
          </ul>
        </section>

        {/* DATA PROTECTION */}
        <section className="bg-card p-6 rounded-2xl shadow-sm mb-6 border">
          <h2 className="text-xl font-semibold mb-3">How We Protect Your Data</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>Secure servers and encrypted connections</li>
            <li>Strict access control</li>
            <li>Regular security audits</li>
            <li>Data minimization and limited retention</li>
          </ul>
        </section>

        {/* CHILDREN */}
        <section className="bg-card p-6 rounded-2xl shadow-sm mb-6 border">
          <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
          <p className="text-muted-foreground">
            Upsoma.in is not intended for children under 13. We do not knowingly collect personal information
            from minors.
          </p>
        </section>

        {/* CONTACT */}
        <section className="bg-card p-6 rounded-2xl shadow-sm mb-6 border">
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, contact us at:
            <br />
            <strong>upsomaconsultancy@gmail.com</strong>
          </p>
        </section>

        <footer className="text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} Upsoma.in. All rights reserved.
        </footer>
      </main>
      <Footer />
    </div>
  );
}
