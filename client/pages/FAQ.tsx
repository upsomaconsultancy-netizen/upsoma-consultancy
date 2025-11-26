import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "./FAQSection";
import { useTheme } from "@/contexts/ThemeContext";
import SEOHead from "@/components/SEOHead";

export default function FAQ() {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Enhanced SEO for FAQ Page
    document.title = "FAQ - Web Development Services Delhi | Upsoma";
    
    // Remove existing meta tags to avoid duplicates
    const removeMeta = (name: string) => {
      const el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (el) el.remove();
    };

    // Remove old meta tags
    ["description", "keywords", "author", "robots", "og:title", "og:description", 
     "og:image", "og:url", "og:type", "og:site_name", "twitter:card", 
     "twitter:title", "twitter:description", "twitter:image", "twitter:site",
     "geo.region", "geo.placename", "ICBM"].forEach(removeMeta);

    // Create meta tag helper function
    const setMeta = (property: string, content: string, isProperty = false) => {
      const tag = document.createElement("meta");
      tag.setAttribute(isProperty ? "property" : "name", property);
      tag.content = content;
      document.head.appendChild(tag);
    };

    // Basic SEO Meta Tags
    setMeta("description", "Frequently asked questions about web development services in Delhi. Get answers about custom website design, e-commerce solutions, pricing, timelines, and more from Upsoma - your trusted web development partner.");
    setMeta("keywords", "web development FAQ Delhi, website design questions, e-commerce development FAQ, custom website cost Delhi, web development timeline, SEO services FAQ, WordPress development questions, React development FAQ");
    setMeta("author", "Upsoma Web Services");
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large");
    setMeta("language", "en-US");
    setMeta("geo.region", "IN");
    setMeta("geo.placename", "Delhi");
    setMeta("ICBM", "28.6139, 77.2090"); // Delhi coordinates
    setMeta("distribution", "global");
    setMeta("rating", "general");

    // Open Graph Meta Tags
    setMeta("og:title", "FAQ - Web Development Services Delhi | Upsoma", true);
    setMeta("og:description", "Frequently asked questions about web development services in Delhi. Get answers about custom website design, e-commerce solutions, pricing, timelines, and more from Upsoma.", true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://upsoma.in/faq", true);
    setMeta("og:site_name", "Upsoma Web Services", true);
    setMeta("og:image", "https://upsoma.in/assets/faq-og-image.jpg", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", "FAQ - Upsoma Web Development Agency Delhi", true);
    setMeta("og:locale", "en_US", true);

    // Twitter Card Meta Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "FAQ - Web Development Services Delhi | Upsoma");
    setMeta("twitter:description", "Frequently asked questions about web development services in Delhi. Get answers about custom website design, e-commerce solutions, pricing, timelines, and more from Upsoma.");
    setMeta("twitter:image", "https://upsoma.in/assets/faq-twitter-image.jpg");
    setMeta("twitter:image:alt", "FAQ - Upsoma Web Development Agency Delhi");
    setMeta("twitter:site", "@upsoma");
    setMeta("twitter:creator", "@upsoma");

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://upsoma.in/faq";

    // Alternative language links (hreflang)
    const removeLink = (rel: string) => {
      const el = document.querySelector(`link[rel="${rel}"]`);
      if (el) el.remove();
    };
    removeLink("alternate");
    
    // Add hreflang for English
    const alternate = document.createElement("link");
    alternate.rel = "alternate";
    alternate.hreflang = "en";
    alternate.href = "https://upsoma.in/faq";
    document.head.appendChild(alternate);

    // Generate structured data for FAQ page
    const faqPageData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": "Frequently Asked Questions - Upsoma Web Development Services",
      "description": "Get answers to common questions about web development, e-commerce, SEO, and digital marketing services in Delhi",
      "url": "https://upsoma.in/faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes Upsoma the best web design and development agency in Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upsoma combines 8+ years of experience, 50+ completed projects, and a deep technical skill‑set in React, Node.js, e‑commerce, and SEO. We focus on delivering performance-driven, conversion-optimized websites tailored to your business goals."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a custom website cost with Upsoma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on features, design complexity, and platform choice. A basic responsive website may start at a moderate price, while a custom e‑commerce or web application can cost more. We offer transparent, project-based pricing and free consultations to refine your budget."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a website with Upsoma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It typically takes 2–4 weeks for a simple site, and 6–12 weeks for more complex projects like e‑commerce or web apps. We provide a detailed project timeline during the consultation so you know what to expect."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer SEO services along with web design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every site we build is SEO-optimized by default: we handle meta tags, content structure, semantic HTML, performance, and mobile responsiveness to help your site rank higher in Google."
          }
        },
        {
          "@type": "Question",
          "name": "Are your websites mobile‑friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Upsoma builds fully responsive websites that adapt smoothly to mobile, tablet, and desktop devices. We prioritize mobile‑first design and performance for better SEO and user experience."
          }
        }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "Upsoma",
        "url": "https://upsoma.in",
        "logo": "https://upsoma.in/logo.png"
      }
    };

    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://upsoma.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "FAQ",
          "item": "https://upsoma.in/faq"
        }
      ]
    };

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
      }
    };

    // Add structured data scripts
    const scripts = [
      { id: "faq-page-ld-json", data: faqPageData },
      { id: "faq-breadcrumb-ld-json", data: breadcrumbData },
      { id: "faq-organization-ld-json", data: organizationData }
    ];

    scripts.forEach(({ id, data }) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(data);
    });

  }, []);

  return (
    <>
      <SEOHead 
        title="FAQ - Web Development Services Dwarka Delhi | Upsoma"
        description="Get answers to frequently asked questions about web development, e-commerce, SEO, and digital marketing services in Dwarka, Delhi. Expert solutions for your business from top web agency in Dwarka."
        keywords="FAQ web development Dwarka, FAQ web development Delhi, web development FAQ Dwarka, web development FAQ Delhi, e-commerce questions Dwarka Delhi, e-commerce questions Delhi, SEO services FAQ Dwarka, SEO services FAQ Delhi, website design FAQ Dwarka, website design FAQ Delhi, Upsoma FAQ Dwarka, Upsoma FAQ Delhi, web development costs Dwarka, web development costs Delhi, best web agency in Dwarka FAQ, best web agency in Delhi FAQ"
        canonicalUrl="https://upsoma.in/faq"
      />
      <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`} itemScope itemType="https://schema.org/WebPage">
        <Header />
        <main className="flex-grow" itemProp="mainContentOfPage">
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
