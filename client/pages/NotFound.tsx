import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    // Enhanced SEO Meta for 404 Page
    document.title = "404 — Page Not Found | Upsoma Web Services";

    // Remove old meta if exists
    const removeMeta = (name: string) => {
      const el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (el) el.remove();
    };

    // Remove old meta tags
    ["description", "robots", "og:title", "og:description", "og:url", "og:type", 
     "og:site_name", "twitter:card", "twitter:title", "twitter:description"].forEach(removeMeta);

    // Create meta tag helper function
    const setMeta = (property: string, content: string, isProperty = false) => {
      const tag = document.createElement("meta");
      tag.setAttribute(isProperty ? "property" : "name", property);
      tag.content = content;
      document.head.appendChild(tag);
    };

    // Add new meta tags
    setMeta("description", "Oops! The page you're looking for doesn't exist. Visit Upsoma homepage for web development, design and SEO services. We offer custom website design, e-commerce solutions, and digital marketing in Delhi.");
    setMeta("robots", "noindex, follow");
    setMeta("author", "Upsoma Web Services");
    setMeta("language", "en-US");

    // Open Graph Meta Tags
    setMeta("og:title", "404 — Page Not Found | Upsoma", true);
    setMeta("og:description", "Oops! The page you're looking for doesn't exist. Visit Upsoma homepage for web development, design and SEO services.", true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://upsoma.in/404", true);
    setMeta("og:site_name", "Upsoma Web Services", true);
    setMeta("og:image", "https://upsoma.in/assets/404-og-image.jpg", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", "404 Page Not Found - Upsoma Web Development Agency", true);

    // Twitter Card Meta Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "404 — Page Not Found | Upsoma");
    setMeta("twitter:description", "Oops! The page you're looking for doesn't exist. Visit Upsoma homepage for web development, design and SEO services.");
    setMeta("twitter:image", "https://upsoma.in/assets/404-twitter-image.jpg");
    setMeta("twitter:image:alt", "404 Page Not Found - Upsoma Web Development Agency");
    setMeta("twitter:site", "@upsoma");

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://upsoma.in/";

    // Generate structured data for 404 page
    const webPageData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "404 — Page Not Found",
      "description": "Oops! The page you're looking for doesn't exist. Visit Upsoma homepage for web development, design and SEO services.",
      "url": "https://upsoma.in/404",
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Upsoma",
        "url": "https://upsoma.in"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Upsoma",
        "url": "https://upsoma.in",
        "logo": "https://upsoma.in/logo.png"
      }
    };

    // Add structured data script
    let script = document.getElementById("404-webpage-ld-json") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "404-webpage-ld-json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(webPageData);

  }, [location.pathname]);

  return (
    <>
      <SEOHead 
        title="404 - Page Not Found | Upsoma Web Services Dwarka"
        description="Oops! The page you're looking for doesn't exist. Visit Upsoma homepage for expert web development, design and SEO services in Dwarka, Delhi."
        keywords="404 error Dwarka, 404 error Delhi, page not found Dwarka, page not found Delhi, Upsoma 404, web development Dwarka, web development Delhi, website design Dwarka Delhi, website design Delhi, SEO services Dwarka, SEO services Delhi, best web agency in Dwarka, best web agency in Delhi"
        canonicalUrl="https://upsoma.in/"
        robots="noindex, follow"
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4" itemScope itemType="https://schema.org/WebPage">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 mb-4" itemProp="name">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page <span className="font-mono text-gray-700">{location.pathname}</span> doesn't exist.
        </p>
        <p className="text-gray-600 mb-8" itemProp="description">
          The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <nav aria-label="Navigation options">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200"
            aria-label="Go to Upsoma homepage"
          >
            Go to Homepage
          </a>
          <p className="mt-4 text-gray-500 text-sm">
            Or <a href="/contact" className="text-blue-500 underline hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200">contact us</a> if you need help navigating.
          </p>
        </nav>

        {/* Helpful links section */}
        <section className="mt-12 p-6 bg-white rounded-lg shadow-sm" aria-labelledby="helpful-links-heading">
          <h2 id="helpful-links-heading" className="text-lg font-semibold text-gray-800 mb-4">You might be looking for:</h2>
          <ul className="space-y-2 text-left">
            <li>
              <a href="/" className="text-blue-600 hover:text-blue-800 underline">Home - Web Development Services</a>
            </li>
            <li>
              <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">Contact Us - Get in Touch</a>
            </li>
            <li>
              <a href="/faq" className="text-blue-600 hover:text-blue-800 underline">FAQ - Common Questions</a>
            </li>
            <li>
              <a href="/blog" className="text-blue-600 hover:text-blue-800 underline">Blog - Web Development Insights</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
};

export default NotFound;
