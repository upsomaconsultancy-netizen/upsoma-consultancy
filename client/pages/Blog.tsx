import { Calendar, Clock, ArrowRight, Tag, User, TrendingUp, Search } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import SEOHead from "@/components/SEOHead";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Sample blogPosts as before
const blogPosts = [
  {
    id: "1",
    slug: "10-essential-web-development-trends-2025",
    title: "10 Essential Web Development Trends for 2025",
    excerpt:
      "Discover the top web development trends that will shape the digital landscape in 2025, from AI‑powered interfaces to progressive web apps.",
    content:
      "<p>In 2025, web development is going to be more dynamic and intelligent. Developers will rely heavily on AI to create personalized UIs, while Progressive Web Apps (PWAs) will continue to grow…</p>",
    author: "Rahul Sharma",
    datePublished: "2025-04-10T10:00:00Z",
    dateModified: "2025-04-11T12:00:00Z",
    imageUrl: "https://upsoma.in/assets/blog/web-dev-trends-2025.jpg",
    tags: ["Web Development", "Trends", "AI", "PWA"],
    readTime: 6, // minutes
    canonicalUrl: "https://upsoma.in/blog/10-essential-web-development-trends-2025",
    metaTitle: "Web Development Trends 2025 | Upsoma",
    metaDescription:
      "Upsoma explores the 10 most important web development trends for 2025, including AI, PWA, and more.",
    url: "https://upsoma.in/blog/10-essential-web-development-trends-2025",
    trending: true,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: "2",
    slug: "boost-your-ecommerce-conversion-rate",
    title: "How to Boost Your E‑Commerce Conversion Rate",
    excerpt:
      "Learn proven strategies to increase your e‑commerce store’s conversion rate using optimization techniques, analytics and A/B testing.",
    content:
      "<p>Improving conversion rate is key to growing your online store. Here are proven strategies including A/B testing, UI optimization, and analytics to skyrocket your sales.</p>",
    author: "Priya Malhotra",
    datePublished: "2025-03-25T08:30:00Z",
    dateModified: "2025-03-25T08:30:00Z",
    imageUrl: "https://upsoma.in/assets/blog/ecommerce-conversion.jpg",
    tags: ["E‑Commerce", "Conversion", "Analytics"],
    readTime: 7,
    canonicalUrl: "https://upsoma.in/blog/boost-your-ecommerce-conversion-rate",
    metaTitle: "Boost E‑Commerce Conversion Rate | Upsoma Tips",
    metaDescription:
      "Expert tips from Upsoma on how to boost your e‑commerce conversion through A/B testing, analytics, and UI improvements.",
    url: "https://upsoma.in/blog/boost-your-ecommerce-conversion-rate",
    trending: true,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    id: "3",
    slug: "native-vs-react-native-for-mobile-apps",
    title: "Mobile App Development: Native vs React Native",
    excerpt:
      "Compare native and cross-platform development to choose the best tech stack for your mobile app project.",
    content:
      "<p>When building mobile apps, choosing between native development (iOS/Android) or React Native can significantly impact your budget, speed, and maintainability…</p>",
    author: "Amit Verma",
    datePublished: "2025-02-15T09:00:00Z",
    dateModified: "2025-02-20T10:00:00Z",
    imageUrl: "https://upsoma.in/assets/blog/native-vs-react-native.jpg",
    tags: ["Mobile Apps", "React Native", "iOS", "Android"],
    readTime: 8,
    canonicalUrl: "https://upsoma.in/blog/native-vs-react-native-for-mobile-apps",
    metaTitle: "Native vs React Native for Mobile App Development | Upsoma",
    metaDescription:
      "Upsoma explains the pros and cons of native vs React Native for mobile app development — cost, performance, and long-term maintenance.",
    url: "https://upsoma.in/blog/native-vs-react-native-for-mobile-apps",
    trending: false,
    gradient: "from-green-500 to-teal-400",
  },
  {
    id: "4",
    slug: "seo-best-practices-for-modern-websites",
    title: "SEO Best Practices for Modern Websites",
    excerpt:
      "Master the art of search engine optimization with our comprehensive guide to ranking higher in search results in 2025.",
    content:
      "<p>SEO isn't just about keywords anymore. Modern SEO involves Core Web Vitals, mobile-first indexing, structured data, and smart content strategies...</p>",
    author: "Sneha Kapoor",
    datePublished: "2025-01-10T07:45:00Z",
    dateModified: "2025-01-12T08:00:00Z",
    imageUrl: "https://upsoma.in/assets/blog/seo-best-practices.jpg",
    tags: ["SEO", "Web Development", "Performance"],
    readTime: 9,
    canonicalUrl: "https://upsoma.in/blog/seo-best-practices-for-modern-websites",
    metaTitle: "SEO Best Practices 2025 | Upsoma Web Agency",
    metaDescription:
      "Check out Upsoma's expert SEO best practices for modern websites — covering performance, mobile-optimization, and structured data.",
    url: "https://upsoma.in/blog/seo-best-practices-for-modern-websites",
    trending: false,
    gradient: "from-orange-500 to-red-400",
  },
  {
    id: "5",
    slug: "creating-stunning-ui-ux-designs-that-convert",
    title: "Creating Stunning UI/UX Designs That Convert",
    excerpt:
      "Explore how good design principles can lead to higher conversions and better user engagement.",
    content:
      "<p>Conversion-friendly UI/UX design is not just about beauty. It’s about reducing friction, improving usability, and guiding users to take action…</p>",
    author: "Vikram Singh",
    datePublished: "2025-01-05T11:00:00Z",
    dateModified: "2025-01-06T12:00:00Z",
    imageUrl: "https://upsoma.in/assets/blog/ui-ux-design-conversion.jpg",
    tags: ["UI/UX Design", "Conversion", "UX Principles"],
    readTime: 7,
    canonicalUrl: "https://upsoma.in/blog/creating-stunning-ui-ux-designs-that-convert",
    metaTitle: "UI/UX Design Principles for Conversions | Upsoma",
    metaDescription:
      "Upsoma shares proven UI/UX design principles that help convert visitors into customers — from usability to persuasive design.",
    url: "https://upsoma.in/blog/creating-stunning-ui-ux-designs-that-convert",
    trending: false,
    gradient: "from-indigo-500 to-purple-400",
  },
];


export default function Blog() {
  const [inView, setInView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.tags.includes(selectedCategory);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Generate comprehensive JSON-LD structured data for the blog listing page
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Upsoma Web Development Blog",
    "description": "Expert insights, tips, and trends in web development, e-commerce, mobile apps, and digital marketing",
    "url": "https://upsoma.in/blog",
    "numberOfItems": filteredPosts.length,
    "itemListElement": filteredPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": post.url,
      "item": {
        "@type": "Article",
        "@id": post.url,
        "headline": post.title,
        "author": { 
          "@type": "Person", 
          "name": post.author,
          "url": `https://upsoma.in/author/${post.author.toLowerCase().replace(/\s+/g, '-')}`
        },
        "publisher": {
          "@type": "Organization",
          "name": "Upsoma",
          "url": "https://upsoma.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://upsoma.in/logo.png",
            "width": 512,
            "height": 512
          }
        },
        "datePublished": post.datePublished,
        "dateModified": post.dateModified,
        "description": post.excerpt,
        "mainEntityOfPage": post.url,
        "image": post.imageUrl,
        "thumbnailUrl": post.imageUrl,
        "wordCount": Math.floor(post.excerpt.length / 5), // Estimated word count
        "keywords": post.tags ? post.tags.join(", ") : post.tags[0] || "web development",
        "articleSection": post.tags ? post.tags[0] : "Web Development",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Upsoma",
          "url": "https://upsoma.in"
        }
      }
    }))
  };

  // Generate BreadcrumbList structured data
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
        "name": "Blog",
        "item": "https://upsoma.in/blog"
      }
    ]
  };

  // Generate Organization structured data
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
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressCountry": "IN"
    }
  };

  // Generate Website structured data
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

  useEffect(() => {
    // Comprehensive SEO Meta updates
    const baseTitle = "Blog – Upsoma Web Services";
    const titleWithCategory = selectedCategory !== "All" 
      ? `${selectedCategory} Articles – Upsoma Blog` 
      : baseTitle;
    const titleWithSearch = searchQuery 
      ? `Search Results for "${searchQuery}" – Upsoma Blog`
      : titleWithCategory;
    
    document.title = titleWithSearch;

    // Remove existing meta tags to avoid duplicates
    const removeMeta = (name: string) => {
      const el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (el) el.remove();
    };

    // Remove old meta tags
    ["description", "robots", "keywords", "author", "og:title", "og:description", 
     "og:image", "og:url", "og:type", "og:site_name", "twitter:card", 
     "twitter:title", "twitter:description", "twitter:image", "twitter:site",
     "article:author", "article:publisher", "article:section"].forEach(removeMeta);

    // Create meta tag helper function
    const setMeta = (property: string, content: string, isProperty = false) => {
      const tag = document.createElement("meta");
      tag.setAttribute(isProperty ? "property" : "name", property);
      tag.content = content;
      document.head.appendChild(tag);
    };

    // Basic SEO Meta Tags
    const description = searchQuery 
      ? `Search results for "${searchQuery}" in Upsoma's web development blog. Find articles on web development, e-commerce, mobile apps, SEO, and UI/UX design.`
      : selectedCategory !== "All"
      ? `Browse ${selectedCategory.toLowerCase()} articles on Upsoma's blog. Expert insights on ${selectedCategory.toLowerCase()}, web development, and digital marketing.`
      : "Read the latest articles on web development, e-commerce, UI/UX, SEO, and mobile apps by Upsoma Web Services. Expert insights, tips, and trends for modern web development.";

    setMeta("description", description);
    setMeta("keywords", "web development blog, e-commerce articles, SEO tips, UI/UX design, mobile app development, React, Node.js, WordPress, digital marketing, Upsoma blog, web design trends");
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
    setMeta("og:title", titleWithSearch, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", `https://upsoma.in/blog${selectedCategory !== "All" ? `?category=${selectedCategory.toLowerCase().replace(/\s+/g, '-')}` : ""}${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ""}`, true);
    setMeta("og:site_name", "Upsoma Web Services", true);
    setMeta("og:image", "https://upsoma.in/assets/blog/blog-og-image.jpg", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", "Upsoma Web Development Blog - Expert Articles on Web Development, E-commerce, and Digital Marketing", true);
    setMeta("og:locale", "en_US", true);

    // Twitter Card Meta Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", titleWithSearch);
    setMeta("twitter:description", description);
    setMeta("twitter:image", "https://upsoma.in/assets/blog/blog-twitter-image.jpg");
    setMeta("twitter:image:alt", "Upsoma Web Development Blog - Expert Articles");
    setMeta("twitter:site", "@upsoma");
    setMeta("twitter:creator", "@upsoma");

    // Article-specific Meta Tags (for blog listing)
    setMeta("article:author", "Upsoma Web Services", true);
    setMeta("article:publisher", "Upsoma Web Services", true);
    setMeta("article:section", selectedCategory === "All" ? "Web Development" : selectedCategory, true);
    setMeta("article:tag", "web development, e-commerce, SEO, UI/UX design, mobile apps", true);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://upsoma.in/blog${selectedCategory !== "All" ? `?category=${selectedCategory.toLowerCase().replace(/\s+/g, '-')}` : ""}${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ""}`;

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
    alternate.href = canonical.href;
    document.head.appendChild(alternate);

    // Add structured data scripts
    const scripts = [
      { id: "blog-ld-json", data: ldJson },
      { id: "breadcrumb-ld-json", data: breadcrumbData },
      { id: "organization-ld-json", data: organizationData },
      { id: "website-ld-json", data: websiteData }
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

    // DNS prefetch and preconnect for performance
    const prefetchDomains = [
      "https://upsoma.in",
      "https://www.google-analytics.com",
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com"
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

  }, [filteredPosts, selectedCategory, searchQuery, ldJson, breadcrumbData, organizationData, websiteData]);

  return (
    <>
      <SEOHead 
        title="Web Development Blog - Latest Trends & Tips | Upsoma Dwarka"
        description="Stay updated with the latest web development trends, React tips, SEO strategies, and digital marketing insights from Upsoma's expert team in Dwarka, Delhi. Best web agency blog."
        keywords="web development blog Dwarka, web development blog Delhi, React tutorials Dwarka, React tutorials Delhi, SEO tips Dwarka, SEO tips Delhi, web design trends Dwarka, web design trends Delhi, e-commerce guide Dwarka, e-commerce guide Delhi, WordPress development Dwarka, WordPress development Delhi, digital marketing blog Dwarka, digital marketing blog Delhi, Upsoma blog Dwarka, Upsoma blog Delhi, web agency blog Delhi"
        canonicalUrl="https://upsoma.in/blog"
      />
      <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col transition-colors duration-300">
        <div className="sticky top-0 z-50 w-full"><Header /></div>

      <main className="flex-grow bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        {/* Blog Hero Section */}
        <section 
          ref={ref} 
          itemScope
          itemType="https://schema.org/WebPage"
          className="relative py-20 container mx-auto px-4 sm:px-6 lg:px-8"
          aria-labelledby="blog-heading"
        >
          <div className={`text-center mb-16 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <h1 
              id="blog-heading"
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              itemProp="name"
            >
              Web Development Blog
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" itemProp="description">
              Expert insights, tips, and trends in web development, e-commerce, mobile apps, and digital marketing.
            </p>
          </div>

          {/* Breadcrumb Navigation */}
          <nav 
            aria-label="Breadcrumb navigation"
            className="mb-8"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <ol className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="https://upsoma.in" itemProp="item" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name" className="text-gray-900 dark:text-gray-100 font-medium">Blog</span>
                <meta itemProp="item" content="https://upsoma.in/blog" />
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

          {/* Search and Filter Section */}
          <section 
            aria-labelledby="search-filter-heading"
            className={`mb-12 transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 id="search-filter-heading" className="sr-only">Search and Filter Articles</h2>
            <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-600">
              {/* Search Bar */}
              <div className="mb-6">
                <label htmlFor="blog-search" className="sr-only">Search articles</label>
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                  <input
                    id="blog-search"
                    type="search"
                    placeholder="Search articles…"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    aria-describedby="search-help"
                    autoComplete="off"
                  />
                  <span id="search-help" className="sr-only">Type to search through blog articles</span>
                </div>
              </div>

              {/* Category Filters */}
              <div role="group" aria-labelledby="category-filter-heading">
                <h3 id="category-filter-heading" className="sr-only">Filter by category</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["All", "Web Development", "E-Commerce", "Mobile Apps", "SEO", "UI/UX Design"].map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-500"
                      }`}
                      aria-pressed={selectedCategory === category}
                      aria-label={`Filter by ${category} category`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Trending Posts Section */}
          <section 
            aria-labelledby="trending-heading"
            className={`mb-12 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 id="trending-heading" className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              <TrendingUp className="w-6 h-6 text-orange-600" aria-hidden="true" />
              Trending Now
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.filter(p => p.trending).map(post => (
                <article 
                  key={post.id} 
                  className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-600 hover:shadow-2xl transition-all transform hover:-translate-y-2"
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block relative overflow-hidden h-64"
                    itemProp="url"
                  >
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      loading="lazy"
                      itemProp="image"
                    />
                    <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${post.gradient} rounded-lg`} aria-hidden="true">
                      <span className="text-white font-semibold text-sm flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Trending
                      </span>
                    </div>
                    <meta itemProp="thumbnailUrl" content={post.imageUrl} />
                  </a>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-white/80">
                      <span className="flex items-center gap-1" itemProp="author" itemScope itemType="https://schema.org/Person">
                        <User className="w-4 h-4" aria-hidden="true" />
                        <span itemProp="name">{post.author}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <time dateTime={post.datePublished} itemProp="datePublished">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          {new Date(post.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </time>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${post.gradient} rounded-lg mb-3`} aria-hidden="true">
                      <span className="text-white text-xs font-semibold flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {post.tags[0] || 'Web Development'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors" itemProp="headline">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 dark:text-white/90 mb-4 leading-relaxed" itemProp="description">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500" itemProp="articleSection">
                        {post.tags[0] || 'Web Development'}
                      </span>
                      <a 
                        href={post.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
                        aria-label={`Read full article: ${post.title}`}
                      >
                        Read Article 
                        <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredCard === post.id ? "translate-x-1" : ""}`} aria-hidden="true" />
                      </a>
                    </div>
                    <meta itemProp="dateModified" content={post.dateModified} />
                    <meta itemProp="keywords" content={post.tags ? post.tags.join(", ") : 'web development'} />
                    <meta itemProp="wordCount" content={String(Math.floor(post.excerpt.length / 5))} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* All Posts Section */}
          <section 
            aria-labelledby="all-articles-heading"
            className={`transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 id="all-articles-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              All Articles
              <span className="ml-3 text-sm font-normal text-gray-600">
                ({filteredPosts.filter(p => !p.trending).length} articles)
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(p => !p.trending).map(post => (
                <article 
                  key={post.id} 
                  className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-600 hover:shadow-2xl transition-all transform hover:-translate-y-2"
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block relative overflow-hidden h-48"
                    itemProp="url"
                  >
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      loading="lazy"
                      itemProp="image"
                    />
                    <div className={`absolute top-3 right-3 px-3 py-1 bg-gradient-to-r ${post.gradient} rounded-lg`} aria-hidden="true">
                      <span className="text-white text-xs font-semibold flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {post.tags[0] || 'Web Development'}
                      </span>
                    </div>
                    <meta itemProp="thumbnailUrl" content={post.imageUrl} />
                  </a>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-600 dark:text-white/80">
                      <time dateTime={post.datePublished} itemProp="datePublished">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {new Date(post.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </time>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" itemProp="headline">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 dark:text-white/90 text-sm mb-4 leading-relaxed" itemProp="description">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-white/80" itemProp="author" itemScope itemType="https://schema.org/Person">
                        <User className="w-4 h-4" aria-hidden="true" />
                        <span itemProp="name">{post.author}</span>
                      </span>
                      <a 
                        href={post.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all duration-300"
                        aria-label={`Read more about: ${post.title}`}
                      >
                        Read More 
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hoveredCard === post.id ? "translate-x-1" : ""}`} aria-hidden="true" />
                      </a>
                    </div>
                    <meta itemProp="dateModified" content={post.dateModified} />
                    <meta itemProp="keywords" content={post.tags ? post.tags.join(", ") : 'web development'} />
                    <meta itemProp="articleSection" content={post.tags[0] || 'Web Development'} />
                  </div>
                </article>
              ))}
            </div>

            {/* No Results Message */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16" role="status" aria-live="polite">
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                  No articles found matching your criteria.
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Try adjusting your search terms or browse different categories.
                </p>
              </div>
            )}
          </section>

          {/* Load More Section */}
          <section className="text-center mt-12">
            <button 
              className="px-8 py-4 text-white font-bold rounded-xl bg-green-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto focus:outline-none focus:ring-4 focus:ring-green-200"
              aria-label="Load more blog articles"
            >
              Load More Articles 
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </section>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
