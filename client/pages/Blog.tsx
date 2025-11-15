import { Calendar, Clock, ArrowRight, Tag, User, TrendingUp, Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header"; 

export default function Blog() {
  const [inView, setInView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Set active state for blog in header when component mounts
  useEffect(() => {
    // This will ensure the blog link is highlighted when on the blog page
    const blogLink = document.querySelector('a[href="/blog"]');
    if (blogLink) {
      blogLink.classList.add('active');
      return () => {
        blogLink.classList.remove('active');
      };
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    "All",
    "Web Development",
    "E-Commerce",
    "Mobile Apps",
    "SEO",
    "UI/UX Design"
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Web Development Trends for 2024",
      excerpt: "Discover the latest web development trends that are shaping the digital landscape and how they can benefit your business.",
      category: "Web Development",
      author: "Rahul Sharma",
      date: "Nov 5, 2024",
      readTime: "5 min read",
      image: "data:image/svg+xml,%3Csvg width='800' height='450' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233b82f6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2306b6d4;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23grad1)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' fill='white' font-weight='bold'%3EWeb Dev Trends%3C/text%3E%3C/svg%3E",
      url: "https://www.smashingmagazine.com/2024/01/web-development-trends-2024/",
      trending: true,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "How to Boost Your E-Commerce Conversion Rate",
      excerpt: "Learn proven strategies to increase your online store's conversion rate and maximize revenue with expert optimization techniques.",
      category: "E-Commerce",
      author: "Priya Malhotra",
      date: "Nov 3, 2024",
      readTime: "7 min read",
      image: "data:image/svg+xml,%3Csvg width='800' height='450' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23grad2)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' fill='white' font-weight='bold'%3EE-Commerce Tips%3C/text%3E%3C/svg%3E",
      url: "https://www.shopify.com/blog/ecommerce-conversion-rate-optimization",
      trending: true,
      gradient: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "Mobile App Development: Native vs React Native",
      excerpt: "Compare native and cross-platform development approaches to choose the best solution for your mobile app project.",
      category: "Mobile Apps",
      author: "Amit Verma",
      date: "Nov 1, 2024",
      readTime: "6 min read",
      image: "data:image/svg+xml,%3Csvg width='800' height='450' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310b981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2314b8a6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23grad3)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' fill='white' font-weight='bold'%3EMobile Apps%3C/text%3E%3C/svg%3E",
      url: "https://reactnative.dev/docs/getting-started",
      trending: false,
      gradient: "from-green-500 to-teal-400"
    },
    {
      id: 4,
      title: "SEO Best Practices for Modern Websites",
      excerpt: "Master the art of search engine optimization with our comprehensive guide to ranking higher in search results.",
      category: "SEO",
      author: "Sneha Kapoor",
      date: "Oct 28, 2024",
      readTime: "8 min read",
      image: "data:image/svg+xml,%3Csvg width='800' height='450' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f97316;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ef4444;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23grad4)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' fill='white' font-weight='bold'%3ESEO Guide%3C/text%3E%3C/svg%3E",
      url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      trending: false,
      gradient: "from-orange-500 to-red-400"
    },
    {
      id: 5,
      title: "Creating Stunning UI/UX Designs That Convert",
      excerpt: "Explore the principles of effective UI/UX design and how to create interfaces that delight users and drive conversions.",
      category: "UI/UX Design",
      author: "Vikram Singh",
      date: "Oct 25, 2024",
      readTime: "5 min read",
      image: "data:image/svg+xml,%3Csvg width='800' height='450' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23grad5)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' fill='white' font-weight='bold'%3EUI/UX Design%3C/text%3E%3C/svg%3E",
      url: "https://www.nngroup.com/articles/ten-usability-heuristics/",
      trending: false,
      gradient: "from-indigo-500 to-purple-400"
    },
    {
      id: 6,
      title: "Building Scalable Web Applications with React",
      excerpt: "Learn how to build high-performance, scalable web applications using React and modern development practices.",
      category: "Web Development",
      author: "Neha Gupta",
      date: "Oct 22, 2024",
      readTime: "9 min read",
      image: "data:image/svg+xml,%3Csvg width='800' height='450' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233b82f6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2306b6d4;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23grad6)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='48' fill='white' font-weight='bold'%3EReact Apps%3C/text%3E%3C/svg%3E",
      url: "https://react.dev/learn",
      trending: false,
      gradient: "from-blue-500 to-cyan-400"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col transition-colors duration-300">
      <div ref={headerRef} className="sticky top-0 z-50 w-full">
        <Header />
      </div>
      <main className="flex-grow bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden transition-colors duration-300" style={{backgroundColor: "rgb(236 253 245 / var(--tw-bg-opacity, 1))"}}>
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10 animate-pulse"></div>
            <div className="absolute top-40 right-1/3 w-80 h-80 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10 animate-pulse"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 dark:bg-transparent">
            
            {/* Header Section */}
            <div 
              ref={ref}
              className={`text-center mb-16 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent" style={{height:"84px"}}>
                Web Development Blog
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Expert insights, tips, and trends in web development, e-commerce, mobile apps, and digital marketing
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className={`mb-12 transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-600">
                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative max-w-2xl mx-auto">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                    />
                  </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500 border border-gray-300 dark:border-gray-500"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured/Trending Posts */}
            <div className={`mb-12 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Trending Now</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.filter(post => post.trending).map((post, index) => (
                  <article
                    key={post.id}
                    className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    onMouseEnter={() => setHoveredCard(post.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden h-64">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${post.gradient} rounded-lg shadow-lg`}>
                        <span className="text-white font-semibold text-sm flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Trending
                        </span>
                      </div>
                    </a>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-white/80">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${post.gradient} rounded-lg mb-3`}>
                        <span className="text-white text-xs font-semibold flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-700 dark:text-white/90 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
                      >
                        Read Article
                        <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                          hoveredCard === post.id ? "translate-x-1" : ""
                        }`} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* All Posts Grid */}
            <div className={`transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">All Articles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(post => !post.trending).map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    onMouseEnter={() => setHoveredCard(post.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className={`absolute top-3 right-3 px-3 py-1 bg-gradient-to-r ${post.gradient} rounded-lg shadow-lg`}>
                        <span className="text-white text-xs font-semibold flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                      </div>
                    </a>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-xs text-gray-600 dark:text-white/80">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-700 dark:text-white/90 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-white/80">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all duration-300"
                        >
                          Read More
                          <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                            hoveredCard === post.id ? "translate-x-1" : ""
                          }`} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-600 dark:text-gray-300 text-lg">No articles found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Load More CTA */}
            <div className="text-center mt-12">
              <button className="px-8 py-4   text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto" style={{backgroundColor: "rgb(22 163 74)"}}>
                Load More Articles
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}