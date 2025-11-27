import { 
  Mail, Phone, MapPin, Send, Clock, MessageSquare, 
  CheckCircle2, User, Building, Briefcase, Globe,
  Linkedin, Twitter, Facebook, Instagram, ArrowRight
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";
import { toast } from "sonner";

export default function Contact() {
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    message: ""
  });
  const [focusedField, setFocusedField] = useState(null);
  const ref = useRef(null);

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

  // Enhanced SEO for Contact Page
  useEffect(() => {
    document.title = "Contact Us - Web Development Agency Delhi | Upsoma";
    
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
    setMeta("description", "Contact Upsoma - Leading web development agency in Delhi. Get in touch for custom website design, e-commerce solutions, and digital marketing services. Call +91 8178353728 or email upsomaconsultancy@gmail.com.");
    setMeta("keywords", "contact web developer Delhi, web design agency contact, website development company Delhi, e-commerce development contact, SEO services Delhi, custom website design contact, Upsoma contact details");
    setMeta("author", "Upsoma Web Services");
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large");
    setMeta("language", "en-US");
    setMeta("geo.region", "IN");
    setMeta("geo.placename", "Delhi");
    setMeta("ICBM", "28.6139, 77.2090"); // Delhi coordinates
    setMeta("distribution", "global");
    setMeta("rating", "general");

    // Open Graph Meta Tags
    setMeta("og:title", "Contact Us - Web Development Agency Delhi | Upsoma", true);
    setMeta("og:description", "Contact Upsoma - Leading web development agency in Delhi. Get in touch for custom website design, e-commerce solutions, and digital marketing services.", true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://upsoma.in/contact", true);
    setMeta("og:site_name", "Upsoma Web Services", true);
    setMeta("og:image", "https://upsoma.in/assets/contact-og-image.jpg", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", "Contact Upsoma Web Development Agency Delhi", true);
    setMeta("og:locale", "en_US", true);

    // Twitter Card Meta Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Contact Us - Web Development Agency Delhi | Upsoma");
    setMeta("twitter:description", "Contact Upsoma - Leading web development agency in Delhi. Get in touch for custom website design, e-commerce solutions, and digital marketing services.");
    setMeta("twitter:image", "https://upsoma.in/assets/contact-twitter-image.jpg");
    setMeta("twitter:image:alt", "Contact Upsoma Web Development Agency Delhi");
    setMeta("twitter:site", "@upsoma");
    setMeta("twitter:creator", "@upsoma");

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://upsoma.in/contact";

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
    alternate.href = "https://upsoma.in/contact";
    document.head.appendChild(alternate);

    // Generate structured data for contact page
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
        "email": "upsomaconsultancy@gmail.com",
        "contactOption": "TollFree",
        "areaServed": "Delhi",
        "serviceType": "Web Development Services"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Delhi",
        "addressCountry": "IN",
        "postalCode": "110001",
        "streetAddress": "Delhi, India"
      },
      "areaServed": "Delhi",
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
          "name": "Contact",
          "item": "https://upsoma.in/contact"
        }
      ]
    };

    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Upsoma",
      "url": "https://upsoma.in",
      "description": "Leading web development and design agency in Delhi offering custom website design, e-commerce solutions, and digital marketing services",
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://upsoma.in/contact",
        "name": "Contact Upsoma"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Upsoma",
        "url": "https://upsoma.in"
      }
    };

    // Add structured data scripts
    const scripts = [
      { id: "contact-organization-ld-json", data: organizationData },
      { id: "contact-breadcrumb-ld-json", data: breadcrumbData },
      { id: "contact-website-ld-json", data: websiteData }
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

  // Removed the auto-submit effect

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation - only name, contact, and service are required
    if (!formData.name) {
      toast.error('Please enter your name', {
        position: 'top-center',
        style: {
          background: '#FEE2E2',
          color: '#B91C1C',
          border: '1px solid #FCA5A5',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }
      });
      return;
    }
    
    if (!formData.contact) {
      toast.error('Please enter your contact number', {
        position: 'top-center',
        style: {
          background: '#FEE2E2',
          color: '#B91C1C',
          border: '1px solid #FCA5A5',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }
      });
      return;
    }
    
    if (!formData.service) {
      toast.error('Please select a service', {
        position: 'top-center',
        style: {
          background: '#FEE2E2',
          color: '#B91C1C',
          border: '1px solid #FCA5A5',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }
      });
      return;
    }
    
    // Email validation if provided
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error('Please enter a valid email address or leave it empty', {
        position: 'top-center',
        style: {
          background: '#FEE2E2',
          color: '#B91C1C',
          border: '1px solid #FCA5A5',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }
      });
      return;
    }
    
    const toastId = toast.loading('Submitting your inquiry...', {
      position: 'top-center',
      style: {
        background: '#FEE2E2',
        color: '#B91C1C',
        border: '1px solid #FCA5A5',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }
    });
    
    try {
      const response = await axios.post('https://upsoma-consultancy.onrender.com/submit', formData);
      console.log('Form submitted successfully:', response.data);
      
      toast.success('Thank you for your inquiry! We will get back to you soon.', {
        id: toastId,
        position: 'top-center',
        style: {
          background: '#FEE2E2',
          color: '#B91C1C',
          border: '1px solid #FCA5A5',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        contact: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error submitting your form. Please try again.', {
        id: toastId,
        position: 'top-center',
        style: {
          background: '#FFC080',
          color: '#FF9900',
          border: '1px solid #FFA07A',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Web Development",
    "E-Commerce Solutions",
    "Mobile App Development",
    "UI/UX Design",
    "SEO Services",
    "Digital Marketing",
    "Other"
  ];



  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "upsomaconsultancy@gmail.com",
      subtext: "We reply within 24 hours",
      link: "mailto:upsomaconsultancy@gmail.com",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 8178353728",
      subtext: "Mon-Sat, 9AM-7PM IST",
      link: "tel:+918178353728",
      gradient: "from-green-500 to-teal-400"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Street, Delhi 110001",
      subtext: "Delhi NCR, India",
      link: "https://maps.google.com",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Sat: 9AM - 7PM",
      subtext: "Sunday: Closed",
      link: null,
      gradient: "from-orange-500 to-red-400"
    }
  ];

  const benefits = [
    { icon: CheckCircle2, text: "Free Initial Consultation" },
    { icon: CheckCircle2, text: "Custom Solutions for Your Business" },
    { icon: CheckCircle2, text: "Transparent Pricing & Timeline" },
    { icon: CheckCircle2, text: "Dedicated Project Manager" }
  ];

  return (
    <>
      <SEOHead 
        title="Contact Upsoma - Web Development Agency in Dwarka Delhi"
        description="Contact Upsoma for expert web development, e-commerce, and SEO services in Dwarka, Delhi. Call +91 8178353728 or email upsomaconsultancy@gmail.com for free consultation. Office in Sector 21, Dwarka."
        keywords="contact web developer Dwarka, contact web developer Delhi, web design agency contact Dwarka, web design agency contact Delhi, website development company Dwarka, website development company Delhi, e-commerce development contact Dwarka, e-commerce development contact Delhi, SEO services Dwarka, SEO services Delhi, custom website design contact Dwarka, custom website design contact Delhi, Upsoma contact details Dwarka, Upsoma contact details Delhi, web agency near me Dwarka, web agency near me Delhi"
        canonicalUrl="https://upsoma.in/contact"
      />
      <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden transition-colors duration-300">
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
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
            <span className="text-white font-semibold text-sm">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Contact our expert team for a free consultation and custom quote
          </p>
        </div>

        {/* Benefits Bar */}
        <div className={`mb-12 transition-all duration-700 delay-100 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-600 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-white/90 text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid  gap-8">
          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-600 transition-colors duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                  <MessageSquare className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  Send Us a Message
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white/90 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-600 border rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all ${
                        focusedField === "name" 
                          ? "border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800 bg-white dark:bg-gray-600" 
                          : "border-gray-300 dark:border-gray-500"
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="contact" className="block text-sm font-semibold text-gray-900 dark:text-white/90 mb-2">
                      Contact Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("contact")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-600 border rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all ${
                          focusedField === "contact" 
                            ? "border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800 bg-white dark:bg-gray-600" 
                            : "border-gray-300 dark:border-gray-500"
                        }`}
                        placeholder="9876543210"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white/90 mb-2">
                      Email Address (optional)
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-600 border rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all ${
                          focusedField === "email" 
                            ? "border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800 bg-white dark:bg-gray-600" 
                            : "border-gray-300 dark:border-gray-500"
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-900 dark:text-white/90 mb-2">
                      Service Needed *
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("service")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-600 border rounded-xl text-gray-900 dark:text-white focus:outline-none transition-all appearance-none ${
                          focusedField === "service" 
                            ? "border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800 bg-white dark:bg-gray-600" 
                            : "border-gray-300 dark:border-gray-500"
                        }`}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>


                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white/90 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className={`w-full px-4 py-4 bg-gray-50 dark:bg-gray-600 border rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all resize-none ${
                      focusedField === "message" 
                        ? "border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800 bg-white dark:bg-gray-600" 
                        : "border-gray-300 dark:border-gray-500"
                    }`}
                    placeholder="Your message (optional)"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4   via-purple-600  text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 group" style={{backgroundColor:"#16a34a"}}
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
      <div style={{marginTop:"20px"}}><Footer/></div>
    </section>
    </>
  );
}