import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/ContactUs";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import ContactLayout from "./components/ContactLayout";
import About from "./pages/About";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

// Global SEO Component
const GlobalSEO = () => {
  useEffect(() => {
    // Set global SEO meta tags that apply to all pages
    const removeMeta = (name: string) => {
      const el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (el) el.remove();
    };

    // Global meta tags
    const setMeta = (property: string, content: string, isProperty = false) => {
      const tag = document.createElement("meta");
      tag.setAttribute(isProperty ? "property" : "name", property);
      tag.content = content;
      document.head.appendChild(tag);
    };

    // Set global viewport and charset
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement("meta");
      viewport.name = "viewport";
      viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=5.0";
      document.head.appendChild(viewport);
    }

    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement("meta");
      charset.setAttribute("charset", "UTF-8");
      document.head.appendChild(charset);
    }

    // Set theme color
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColor = document.createElement("meta");
      themeColor.name = "theme-color";
      themeColor.content = "#16a34a";
      document.head.appendChild(themeColor);
    }

    // Set MS application meta
    if (!document.querySelector('meta[name="msapplication-TileColor"]')) {
      const msTileColor = document.createElement("meta");
      msTileColor.name = "msapplication-TileColor";
      msTileColor.content = "#16a34a";
      document.head.appendChild(msTileColor);
    }

    // Set Apple touch icon meta
    if (!document.querySelector('meta[name="apple-mobile-web-app-capable"]')) {
      const appleCapable = document.createElement("meta");
      appleCapable.name = "apple-mobile-web-app-capable";
      appleCapable.content = "yes";
      document.head.appendChild(appleCapable);
    }

    if (!document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')) {
      const appleStatusBar = document.createElement("meta");
      appleStatusBar.name = "apple-mobile-web-app-status-bar-style";
      appleStatusBar.content = "default";
      document.head.appendChild(appleStatusBar);
    }

    // Set format detection
    if (!document.querySelector('meta[name="format-detection"]')) {
      const formatDetection = document.createElement("meta");
      formatDetection.name = "format-detection";
      formatDetection.content = "telephone=no";
      document.head.appendChild(formatDetection);
    }

    // Global DNS prefetch
    const prefetchDomains = [
      "https://upsoma.in",
      "https://www.google-analytics.com",
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://images.unsplash.com"
    ];

    prefetchDomains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"][rel="dns-prefetch"]`)) {
        const link = document.createElement("link");
        link.rel = "dns-prefetch";
        link.href = domain;
        document.head.appendChild(link);
      }
    });

    // Global preconnect
    if (!document.querySelector('link[rel="preconnect"][href="https://upsoma.in"]')) {
      const preconnect = document.createElement("link");
      preconnect.rel = "preconnect";
      preconnect.href = "https://upsoma.in";
      preconnect.crossOrigin = "anonymous";
      document.head.appendChild(preconnect);
    }

    // Global structured data for organization
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Upsoma",
      "url": "https://upsoma.in",
      "logo": "https://upsoma.in/logo.png",
      "description": "Leading web development and design agency in Delhi specializing in custom websites, e-commerce solutions, and digital marketing",
      "sameAs": [
        "https://linkedin.com/company/upsoma",
        "https://twitter.com/upsoma",
        "https://facebook.com/upsoma",
        "https://instagram.com/upsoma",
        "https://youtube.com/@upsoma"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 8178353728",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "email": "upsomaconsultancy@gmail.com"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Delhi",
        "addressCountry": "IN"
      },
      "areaServed": "Delhi"
    };

    // Add global structured data
    let script = document.getElementById("global-organization-ld-json") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "global-organization-ld-json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(organizationData);

  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GlobalSEO />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiesPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route 
              path="/contact" 
              element={
                <ContactLayout>
                  <Contact />
                </ContactLayout>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
