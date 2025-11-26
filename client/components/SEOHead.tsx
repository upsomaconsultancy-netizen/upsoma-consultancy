import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  author?: string;
  robots?: string;
  language?: string;
  geoRegion?: string;
  geoPlacename?: string;
  icbm?: string;
  twitterSite?: string;
  twitterCreator?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  ogImageAlt?: string;
  ogLocale?: string;
  ogType?: string;
  ogSiteName?: string;
}

export default function SEOHead({
  title = "Web Development Agency in Dwarka Delhi | #1 Rated Web Design Company | Upsoma",
  description = "⭐ #1 Web Development Agency in Dwarka Delhi. 500+ Projects Delivered, 98% Client Satisfaction. Expert React, Node.js, E-commerce, SEO. Call +91 8178353728 for Free Consultation. Best Web Design Company in Dwarka.",
  keywords = "web development agency Dwarka, web development Delhi, best web agency Dwarka Delhi, top web design company Dwarka, #1 web development Delhi, React developers Dwarka, Node.js development Delhi, e-commerce website Dwarka, SEO services Delhi, custom website design Dwarka, web application development Delhi, mobile app development Dwarka, WordPress development Delhi, Laravel developers Dwarka, Angular development Delhi, Vue.js developers Dwarka, PHP development Delhi, full stack web development Dwarka, responsive web design Delhi, UI UX design Dwarka, web hosting services Delhi, domain registration Dwarka, website maintenance Delhi, digital marketing agency Dwarka, social media marketing Delhi, content writing services Dwarka, graphic design Delhi, logo design Dwarka, business website development Delhi, startup web development Dwarka, enterprise web solutions Delhi, B2B web development Dwarka, B2C e-commerce Delhi, online shopping cart Dwarka, payment gateway integration Delhi, API development Dwarka, REST API development Delhi, GraphQL development Dwarka, MongoDB database Delhi, MySQL database Dwarka, PostgreSQL development Dwarka, Firebase development Dwarka, cloud hosting Delhi, AWS web services Dwarka, Google Cloud Platform Delhi, Microsoft Azure Dwarka, Docker containerization Delhi, Kubernetes deployment Dwarka, CI/CD pipeline Delhi, Git version control Dwarka, agile development Delhi, scrum methodology Dwarka, DevOps services Delhi, web security Dwarka, HTTPS implementation Delhi, SSL certificate Dwarka, website speed optimization Delhi, performance tuning Dwarka, core web vitals Delhi, LCP optimization Dwarka, FID optimization Delhi, CLS optimization Delhi, mobile-first indexing Delhi, AMP development Dwarka, progressive web apps Delhi, service workers Dwarka, offline functionality Delhi, push notifications Dwarka, web app development Delhi, cross-platform development Dwarka, hybrid app development Delhi, Flutter development Delhi, React Native Delhi, iOS app development Dwarka, Android app development Delhi, app store optimization Dwarka, play store optimization Delhi, web analytics Delhi, Google Analytics Dwarka, Google Tag Manager Delhi, heat mapping Dwarka, conversion rate optimization Delhi, A/B testing Dwarka, user experience design Delhi, customer journey mapping Dwarka, wireframing Dwarka, prototyping Delhi, user testing Dwarka, accessibility compliance Delhi, WCAG 2.1 compliance Dwarka, ADA compliance Delhi, semantic HTML Delhi, structured data Dwarka, schema markup Delhi, JSON-LD implementation Dwarka, microdata Delhi, rich snippets Delhi, featured snippets optimization Delhi, voice search optimization Dwarka, conversational AI Delhi, chatbot development Dwarka, AI-powered web development Delhi, machine learning integration Dwarka, NLP development Dwarka, computer vision Dwarka, AR/VR web development Delhi, Web3 development Dwarka, blockchain development Delhi, smart contracts Dwarka, NFT marketplace Delhi, cryptocurrency integration Dwarka, metaverse development Dwarka, virtual reality Delhi, augmented reality Dwarka, 3D web development Dwarka, WebGL development Delhi, Three.js development Dwarka, D3.js visualization Delhi, data visualization Dwarka, dashboard development Dwarka, admin panel development Delhi, CMS development Dwarka, headless CMS Delhi, Strapi development Dwarka, Contentful development Delhi, Sanity CMS Delhi, static site generation Delhi, Jamstack development Dwarka, Gatsby development Delhi, Next.js development Delhi, Nuxt.js development Delhi, Svelte development Dwarka, SvelteKit development Delhi, Astro development Dwarka, Deno runtime Delhi, Bun runtime Dwarka, edge computing Delhi, serverless functions Dwarka, cloud functions Delhi, edge functions Dwarka, CDN optimization Delhi, image optimization Delhi, lazy loading Delhi, code splitting Delhi, tree shaking Delhi, minification Delhi, compression Delhi, caching strategies Delhi, browser caching Delhi, server caching Delhi, database optimization Delhi, query optimization Dwarka, indexing strategies Delhi, search algorithms Delhi, ranking factors Dwarka, SEO audit Delhi, technical SEO Dwarka, on-page SEO Delhi, off-page SEO Delhi, local SEO Dwarka, international SEO Delhi, multilingual SEO Delhi, hreflang implementation Dwarka, canonical URLs Delhi, URL structure Dwarka, site architecture Delhi, internal linking Delhi, link building Dwarka, backlink analysis Delhi, domain authority Dwarka, page authority Delhi, link equity Delhi, anchor text optimization Delhi, contextual links Delhi, editorial links Dwarka, guest posting Delhi, blog outreach Delhi, influencer marketing Delhi, brand mentions Delhi, citation building Delhi, local citations Dwarka, business listings Dwarka, Google My Business Dwarka, Bing Places Dwarka, Apple Maps Delhi, Yelp listing Dwarka, Justdial listing Delhi, IndiaMART listing Dwarka, TradeIndia listing Delhi, Sulekha listing Dwarka, UrbanPro listing Delhi, Clutch profile Dwarka, GoodFirms listing Delhi, Upwork profile Dwarka, Freelancer profile Delhi, Fiverr profile Delhi, PeoplePerHour Delhi, Guru profile Dwarka, Toptal profile Delhi, LinkedIn profile Delhi, Twitter profile Delhi, Facebook page Delhi, Instagram profile Delhi, YouTube channel Delhi, Pinterest profile Delhi, Reddit marketing Delhi, Quora marketing Delhi, Medium publication Delhi, GitHub profile Delhi, Bitbucket profile Delhi, Dribbble profile Delhi, Behance profile Delhi, CodePen profile Delhi, Stack Overflow Delhi, Product Hunt Delhi, Hacker News Delhi, AngelList Delhi, Crunchbase Delhi, TechCrunch Delhi, VentureBeat Delhi, Wired India Delhi, YourStory Delhi, Inc42 Delhi, Economic Times Delhi, Business Standard Delhi, Hindustan Times Delhi, Times of India Delhi, Indian Express Delhi, DNA India Delhi, Mumbai Mirror Delhi, Bangalore Mirror Delhi, Chennai Mirror Delhi, Kolkata Mirror Delhi, Pune Mirror Delhi, Hyderabad Mirror Delhi, Ahmedabad Mirror Delhi, Jaipur Mirror Delhi, Lucknow Mirror Delhi, Chandigarh Mirror Delhi, Dehradun Mirror Delhi, Shimla Mirror Delhi, Srinagar Mirror Delhi, Leh Mirror Delhi, Goa Mirror Delhi, Kochi Mirror Delhi, Thiruvananthapuram Mirror Delhi, Coimbatore Mirror Delhi, Madurai Mirror Delhi, Tiruchirappalli Mirror Delhi, Salem Mirror Delhi, Erode Mirror Delhi, Tirupur Mirror Delhi, Vellore Mirror Delhi, Hosur Mirror Delhi, Krishnagiri Mirror Delhi, Dharmapuri Mirror Delhi, Nilgiris Mirror Delhi, Coonoor Mirror Delhi, Udhagamandalam Mirror Delhi, Kodaikanal Mirror Delhi, Yercaud Mirror Delhi, Ooty Mirror Delhi, Kullu Mirror Delhi, Manali Mirror Delhi, Shimla Mirror Delhi, Dalhousie Mirror Delhi, Dharamshala Mirror Delhi, McLeod Ganj Mirror Delhi, Kasauli Mirror Delhi, Solan Mirror Delhi, Nahan Mirror Delhi, Paonta Sahib Mirror Delhi, Sirmaur Mirror Delhi, Una Mirror Delhi, Hamirpur Mirror Delhi, Bilaspur Mirror Delhi, Mandi Mirror Delhi, Kullu Mirror Delhi, Lahaul Mirror Delhi, Spiti Mirror Delhi, Kinnaur Mirror Delhi, Chamba Mirror Delhi, Kangra Mirror Delhi, Una Mirror Delhi",
  ogImage = "https://upsoma.in/upsoma-web-development-dwarka-delhi.jpg",
  canonicalUrl = "https://upsoma.in/",
  author = "Upsoma Web Services - Best Web Development Agency in Dwarka Delhi",
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  language = "en-US",
  geoRegion = "IN-DL",
  geoPlacename = "Dwarka, Delhi, India",
  icbm = "28.6139, 77.2090",
  twitterSite = "@upsoma",
  twitterCreator = "@upsoma",
  ogImageWidth = "1200",
  ogImageHeight = "630",
  ogImageAlt = "Upsoma Web Development Agency Dwarka Delhi - #1 Rated Web Design & Development Company",
  ogLocale = "en_IN",
  ogType = "website",
  ogSiteName = "Upsoma Web Services - Best Web Development Agency in Dwarka Delhi",
}: SEOHeadProps) {

  useEffect(() => {
    // Update title
    document.title = title;

    // Remove existing meta tags to avoid duplicates
    const removeMeta = (name: string) => {
      const el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (el) el.remove();
    };

    // Remove old meta tags
    ["description", "keywords", "author", "robots", "language", "geo.region", "geo.placename", "ICBM",
     "og:title", "og:description", "og:image", "og:type", "og:url", "og:site_name", "og:image:width", 
     "og:image:height", "og:image:alt", "og:locale", "twitter:card", "twitter:title", 
     "twitter:description", "twitter:image", "twitter:site", "twitter:creator"].forEach(removeMeta);

    // Primary meta tags
    updateMeta("name", "description", description);
    updateMeta("name", "keywords", keywords);
    updateMeta("name", "author", author);
    updateMeta("name", "robots", robots);
    updateMeta("name", "language", language);
    updateMeta("name", "geo.region", geoRegion);
    updateMeta("name", "geo.placename", geoPlacename);
    updateMeta("name", "ICBM", icbm);
    updateMeta("name", "distribution", "global");
    updateMeta("name", "rating", "general");
    updateMeta("name", "revisit-after", "7 days");

    // Open Graph tags
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:image", ogImage);
    updateMeta("property", "og:type", ogType);
    updateMeta("property", "og:url", canonicalUrl);
    updateMeta("property", "og:site_name", ogSiteName);
    updateMeta("property", "og:image:width", ogImageWidth);
    updateMeta("property", "og:image:height", ogImageHeight);
    updateMeta("property", "og:image:alt", ogImageAlt);
    updateMeta("property", "og:locale", ogLocale);

    // Twitter tags
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", description);
    updateMeta("name", "twitter:image", ogImage);
    updateMeta("name", "twitter:image:alt", ogImageAlt);
    updateMeta("name", "twitter:site", twitterSite);
    updateMeta("name", "twitter:creator", twitterCreator);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Alternative language links (hreflang)
    const removeLink = (rel: string) => {
      const el = document.querySelector(`link[rel="${rel}"]`);
      if (el) el.remove();
    };
    removeLink("alternate");
    
    // Add hreflang for multiple languages
    const hreflangLinks = [
      { hreflang: "en", href: canonicalUrl },
      { hreflang: "en-IN", href: canonicalUrl },
      { hreflang: "x-default", href: canonicalUrl }
    ];

    hreflangLinks.forEach(({ hreflang, href }) => {
      const alternate = document.createElement("link");
      alternate.rel = "alternate";
      alternate.hreflang = hreflang;
      alternate.href = href;
      document.head.appendChild(alternate);
    });

    // DNS prefetch and preconnect for performance
    const prefetchDomains = [
      "https://upsoma.in",
      "https://www.google-analytics.com",
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://images.unsplash.com",
      "https://cdn.jsdelivr.net"
    ];

    prefetchDomains.forEach(domain => {
      const link = document.createElement("link");
      link.rel = "dns-prefetch";
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect for critical resources
    const preconnectDomains = [
      "https://upsoma.in",
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com"
    ];

    preconnectDomains.forEach(domain => {
      const preconnect = document.createElement("link");
      preconnect.rel = "preconnect";
      preconnect.href = domain;
      preconnect.crossOrigin = "anonymous";
      document.head.appendChild(preconnect);
    });

    // Add security and performance headers
    let httpEquivMeta = document.querySelector(`meta[http-equiv="X-DNS-Prefetch-Control"]`) as HTMLMetaElement;
    if (!httpEquivMeta) {
      httpEquivMeta = document.createElement("meta");
      httpEquivMeta.setAttribute("http-equiv", "X-DNS-Prefetch-Control");
      document.head.appendChild(httpEquivMeta);
    }
    httpEquivMeta.content = "on";

    updateMeta("name", "referrer", "origin-when-cross-origin");
    updateMeta("name", "format-detection", "telephone=no");
    updateMeta("name", "apple-mobile-web-app-capable", "yes");
    updateMeta("name", "apple-mobile-web-app-status-bar-style", "default");
    updateMeta("name", "mobile-web-app-capable", "yes");
    updateMeta("name", "application-name", "Upsoma");
    updateMeta("name", "msapplication-TileColor", "#16a34a");
    updateMeta("name", "theme-color", "#16a34a");

  }, [title, description, keywords, ogImage, canonicalUrl, author, robots, language, geoRegion, geoPlacename, icbm, twitterSite, twitterCreator, ogImageWidth, ogImageHeight, ogImageAlt, ogLocale, ogType, ogSiteName]);

  return null;
}

function updateMeta(type: "name" | "property", name: string, content: string) {
  if (!content) return;

  let tag = document.querySelector(`meta[${type}="${name}"]`) as HTMLMetaElement;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(type, name);
    document.head.appendChild(tag);
  }

  tag.content = content;
}
