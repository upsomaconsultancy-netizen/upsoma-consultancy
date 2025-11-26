import React, { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Upsoma.in — Cookies Policy",
  description:
    "SEO-optimized Cookies Policy for Upsoma.in covering cookie types, usage, consent, GDPR, CCPA, analytics, advertising cookies, and user controls.",
  publisher: {
    "@type": "Organization",
    name: "Upsoma.in",
    url: "https://upsoma.in",
    telephone: "+91 8178353728",
    email: "upsomaconsultancy@gmail.com",
  },
};

export default function CookiesPolicy() {
  const { theme } = useTheme();
  
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
      if (typeof console !== "undefined") console.warn("Failed to inject JSON-LD", e);
    }
  }, []);

  return (
    <>
      <SEOHead 
        title="Cookies Policy - Privacy & Data Protection | Upsoma Dwarka"
        description="Learn about Upsoma's cookies policy, how we use cookies, your privacy rights, and GDPR compliance. Essential, functional, analytics, and advertising cookies explained for our Dwarka clients."
        keywords="cookies policy Dwarka, cookies policy Delhi, privacy policy Dwarka, privacy policy Delhi, GDPR compliance Dwarka, GDPR compliance Delhi, cookie consent Dwarka, cookie consent Delhi, web analytics cookies Dwarka, web analytics cookies Delhi, advertising cookies Dwarka, advertising cookies Delhi, data protection Dwarka, data protection Delhi, Upsoma privacy Dwarka, Upsoma privacy Delhi"
        canonicalUrl="https://upsoma.in/cookie-policy"
      />
      <Header />
      <div className={`min-h-screen py-12 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-[#ecfdf5] text-gray-900'}`}>
        <main className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Cookies Policy</h1>
          <p className={`mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>Last updated: November 2025</p>

          {/* INTRO */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-2">What Are Cookies?</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              Cookies are small text files stored on your device when you visit a website.
              They help websites function properly, improve user experience, and provide
              analytics or advertising insights.
            </p>
          </section>

          {/* TYPES OF COOKIES */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-3">Types of Cookies We Use</h2>

            <h3 className="text-lg font-medium mt-3">1. Essential Cookies</h3>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              These cookies are necessary for Upsoma.in to function. They enable core
              features like website security, navigation, and basic accessibility.
            </p>

            <h3 className="text-lg font-medium mt-3">2. Functional Cookies</h3>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              These cookies help remember your preferences, such as language, region, and UI
              settings, improving your overall experience.
            </p>

            <h3 className="text-lg font-medium mt-3">3. Analytics Cookies</h3>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              We use analytics cookies (including Google Analytics) to understand how users
              interact with our website. These cookies collect information such as page
              visits, session duration, and device type.
            </p>

            <h3 className="text-lg font-medium mt-3">4. Advertising & Marketing Cookies</h3>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              These cookies track user behaviour to display relevant ads. Third-party ad
              networks like Google Ads may use them to measure campaign performance.
            </p>
          </section>

          {/* HOW WE USE */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-3">How Upsoma.in Uses Cookies</h2>
            <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>To ensure proper website functionality and security.</li>
              <li>To understand user behaviour and improve website performance.</li>
              <li>To personalize user experience using functional settings.</li>
              <li>To run analytics and performance tracking tools.</li>
              <li>To deliver relevant ads and measure marketing effectiveness.</li>
            </ul>
          </section>

          {/* THIRD PARTY */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-3">Third-Party Cookies</h2>
            <p className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Upsoma.in uses third-party tools that may place cookies on your device. These
              include:
            </p>
            <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Google Analytics</li>
              <li>Google Ads / Remarketing tags</li>
              <li>Social media pixels (Meta, Instagram, etc.)</li>
              <li>Payment gateway cookies (if applicable)</li>
            </ul>
            <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              These providers have their own privacy and cookie policies.
            </p>
          </section>

          {/* CONTROL */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-3">How You Can Control or Disable Cookies</h2>
            <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>You can disable cookies directly from your browser settings.</li>
              <li>You may delete existing cookies stored on your device.</li>
              <li>Most browsers allow blocking third-party cookies.</li>
              <li>
                Disabling essential cookies may affect website functionality on Upsoma.in.
              </li>
            </ul>
          </section>

          {/* CONSENT */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-3">Cookie Consent</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              By continuing to use Upsoma.in, you consent to our use of cookies in accordance
              with this policy. You can change or withdraw your consent at any time using
              your browser settings or cookie management tools.
            </p>
          </section>

          {/* GDPR & CCPA */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-3">GDPR & CCPA Compliance</h2>
            <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>We only collect necessary data and respect all user rights.</li>
              <li>Users can request data access, correction, or deletion.</li>
              <li>We do not sell personal data as defined under CCPA.</li>
              <li>Analytics data is anonymized wherever possible.</li>
            </ul>
          </section>

          {/* CONTACT */}
          <section className={`p-6 rounded-2xl shadow-sm mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
              For questions about this Cookies Policy, email us at:
              <br />
              <strong>upsomaconsultancy@gmail.com</strong>
            </p>
          </section>

          <footer className={`text-xs mt-6 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} Upsoma.in. All rights reserved.
          </footer>
        </main>
      </div>
      <Footer />
    </>
  );
}
