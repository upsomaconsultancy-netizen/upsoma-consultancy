import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorksSection from "@/components/WorksSection";
import Footer from "@/components/Footer";

export default function Index() {
  const location = useLocation();
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Handle scroll to services section if hash is present in URL
    if (location.hash === '#services' && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  useEffect(() => {
    // Enhanced SEO Meta for homepage
    document.title = "Web Development & Design Agency in Delhi | Upsoma";
    
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
    setMeta("description", "Award-winning web development agency in Delhi offering custom website design, e-commerce solutions, WordPress development, and mobile app services. 50+ projects delivered to happy clients across India.");
    setMeta("keywords", "web development Delhi, website design company India, custom web development, e-commerce website development, responsive web design, web developer India, digital agency Delhi, React development, Node.js development, WordPress development, SEO services Delhi");
    setMeta("author", "Upsoma Web Services");
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta("language", "en-US");
    setMeta("geo.region", "IN");
    setMeta("geo.placename", "Delhi");
    setMeta("ICBM", "28.6139, 77.2090"); // Delhi coordinates
    setMeta("distribution", "global");
    setMeta("rating", "general");
    setMeta("revisit-after", "7 days");

    // Open Graph Meta Tags
    setMeta("og:title", "Web Development & Design Agency in Delhi | Upsoma", true);
    setMeta("og:description", "Award-winning web development agency in Delhi offering custom website design, e-commerce solutions, WordPress development, and mobile app services. 50+ projects delivered to happy clients across India.", true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://upsoma.in", true);
    setMeta("og:site_name", "Upsoma Web Services", true);
    setMeta("og:image", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", "Upsoma Web Development Agency Delhi - Custom Website Design & Development Services", true);
    setMeta("og:locale", "en_US", true);

    // Twitter Card Meta Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Web Development & Design Agency in Delhi | Upsoma");
    setMeta("twitter:description", "Award-winning web development agency in Delhi offering custom website design, e-commerce solutions, WordPress development, and mobile app services.");
    setMeta("twitter:image", "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop");
    setMeta("twitter:image:alt", "Upsoma Web Development Agency Delhi - Custom Website Design & Development Services");
    setMeta("twitter:site", "@upsoma");
    setMeta("twitter:creator", "@upsoma");

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://upsoma.in";

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
    alternate.href = "https://upsoma.in";
    document.head.appendChild(alternate);

    // DNS prefetch and preconnect for performance
    const prefetchDomains = [
      "https://upsoma.in",
      "https://www.google-analytics.com",
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://images.unsplash.com"
    ];

    prefetchDomains.forEach(domain => {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect for critical resources
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = "https://upsoma.in";
    preconnect.crossOrigin = "anonymous";
    document.head.appendChild(preconnect);

    // Generate structured data for homepage
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Upsoma",
      "url": "https://upsoma.in",
      "logo": "https://upsoma.in/logo.png",
      "description": "Leading web development and design agency in Dwarka, Delhi specializing in custom websites, e-commerce solutions, and digital marketing",
      "foundingDate": "2016",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "10-50"
      },
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
        "email": "upsomaconsultancy@gmail.com",
        "areaServed": "Dwarka, Delhi"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 21, Dwarka",
        "addressLocality": "Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110075",
        "addressCountry": "IN"
      },
      "areaServed": "Dwarka, Delhi",
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Website Development",
              "description": "Tailored web development solutions using modern technologies"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Development",
              "description": "Complete e-commerce solutions with payment gateway integration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "SEO Services",
              "description": "Search engine optimization to improve online visibility"
            }
          }
        ]
      }
    };

    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Upsoma",
      "url": "https://upsoma.in",
      "description": "Leading web development and design agency in Delhi offering custom website design, e-commerce solutions, and digital marketing services",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://upsoma.in/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Upsoma",
        "url": "https://upsoma.in"
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
        }
      ]
    };

    // Add service structured data
    const serviceData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development Services in Dwarka",
      "description": "Professional web development, design, and digital marketing services in Dwarka, Delhi",
      "provider": {
        "@type": "Organization",
        "name": "Upsoma",
        "url": "https://upsoma.in"
      },
      "serviceType": "Web Development",
      "areaServed": "Dwarka, Delhi",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services in Dwarka",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Website Development in Dwarka",
              "description": "Tailored web development solutions using modern technologies in Dwarka area"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Development in Dwarka",
              "description": "Complete e-commerce solutions with payment gateway integration in Dwarka"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Services in Dwarka",
              "description": "Search engine optimization to improve online visibility for Dwarka businesses"
            }
          }
        ]
      }
    };

    // Add review structured data
    const reviewData = {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      "itemReviewed": {
        "@type": "Organization",
        "name": "Upsoma",
        "url": "https://upsoma.in"
      },
      "ratingValue": "4.9",
      "reviewCount": "52",
      "bestRating": "5",
      "worstRating": "1"
    };

    // Add local business structured data
    const localBusinessData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "description": "Best web development and design agency in Dwarka, Delhi specializing in custom websites, e-commerce solutions, and digital marketing",
      "url": "https://upsoma.in",
      "telephone": "+91 8178353728",
      "email": "upsomaconsultancy@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 21, Dwarka",
        "addressLocality": "Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110075",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6139",
        "longitude": "77.2090"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "UPI"],
      "currenciesAccepted": "INR",
      "areaServed": {
        "@type": "Place",
        "name": "Dwarka, Delhi NCR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "52"
      },
      "keywords": "web development agency Dwarka, web design company Dwarka, best web agency in Dwarka, website development Dwarka, e-commerce solutions Dwarka, SEO services Dwarka"
    };

    // Add structured data scripts
    const scripts = [
      { id: "homepage-organization-ld-json", data: organizationData },
      { id: "homepage-website-ld-json", data: websiteData },
      { id: "homepage-breadcrumb-ld-json", data: breadcrumbData },
      { id: "homepage-service-ld-json", data: serviceData },
      { id: "homepage-review-ld-json", data: reviewData },
      { id: "homepage-localbusiness-ld-json", data: localBusinessData }
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
        title="Web Development Agency in Dwarka Delhi | Best Web Design Services"
        description="Top web development agency in Dwarka, Delhi. Expert web design, e-commerce, React, Node.js development. 8+ years experience, 50+ projects delivered in Dwarka area. Call +91 8178353728."
        keywords="web development agency Dwarka, web development Delhi, web design company Dwarka Delhi, web design company Delhi, best web agency in Dwarka, best web agency Delhi, website development Dwarka, website development Delhi, e-commerce solutions Dwarka, e-commerce solutions Delhi, SEO services Dwarka, SEO services Delhi, React developers Dwarka, React developers Delhi, custom website design Dwarka, custom website design Delhi, web development near me, top web agency in Delhi, web developers in Dwarka sector 21, web development Dwarka sector 12"
        canonicalUrl="https://upsoma.in/"
      />
      <div className="bg-white" itemScope itemType="https://schema.org/WebPage">
        <Header />
        <main itemProp="mainContentOfPage">
          <HeroSection />
          <AboutSection />
          <section id="services" ref={servicesRef} className="scroll-mt-20">
            <ServicesSection />
          </section>
          <WorksSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
