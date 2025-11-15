import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Send,
  Clock,
  Award,
  Users,
  ArrowRight,
  CheckCircle2,
  Code,
  Smartphone,
  ShoppingCart,
  Palette,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import "./Footer.css";
import React from "react";
import { toast } from "sonner";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const [inView, setInView] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hoveredService, setHoveredService] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

const handleContactSubmit = async (e) => {
  e.preventDefault();
  
  if (!phone) {
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

  const toastId = toast.loading('Submitting your request...', {
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
    const response = await fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Footer Contact',
        email: email || '',
        contact: phone,
        service: 'Footer Inquiry',
        message: 'Contact request from footer form'
      })
    });

    if (response.ok) {
      toast.success('Thank you for contacting us! We will get back to you soon.', {
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
      setEmail('');
      setPhone('');
    } else {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    toast.error('There was an error submitting your request. Please try again.', {
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
  }
};

  const services = [
    {
      icon: Code,
      name: "Web Development",
      link: "/services/web-development",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: ShoppingCart,
      name: "E-Commerce Solutions",
      link: "/services/ecommerce",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Smartphone,
      name: "Mobile App Development",
      link: "/services/mobile-apps",
      color: "from-green-500 to-teal-400",
    },
    {
      icon: Palette,
      name: "UI/UX Design",
      link: "/services/ui-ux-design",
      color: "from-orange-500 to-red-400",
    },
  ];

  const quickLinks = [
    { name: "About Us", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const resourceLinks = [
    { name: "FAQ", link: "/faq" },
    { name: "Free Consultation", link: "/consultation" },
  ];

  const trustSignals = [
    { icon: Award, text: "50+ Projects Delivered", color: "text-blue-600" },
    { icon: Users, text: "200+ Happy Clients", color: "text-purple-600" },
    { icon: Clock, text: "24/7 Support Available", color: "text-green-600" },
  ];

  return (
    <>
      <footer
        id="contact"
        className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden pt-20 transition-colors duration-300"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* Wave SVG Divider */}
        <div className="absolute top-0 left-0 w-full h-20 -mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full "
            style={{ transform: "scaleY(-1)", position: "absolute", top: "7px" }} // Flip the wave vertically
          >

            <path
              fill="#bed3ff"
              className="dark:opacity-20"
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            />
          </svg>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10 animate-pulse"></div>
          <div className="absolute top-40 right-1/3 w-80 h-80 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-10 animate-pulse"></div>
        </div>

        <div className="relative z-10 bg-[#bed3ff] dark:bg-[#3d485d] transition-colors duration-300">
          {/* Trust Signals Bar */}

          {/* Main Footer Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div
              ref={ref}
              className={`grid lg:grid-cols-12 gap-12 mb-16 transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Company Info & Newsletter - 4 cols */}
              <div className="lg:col-span-4">
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span
                      className="text-white font-bold text-lg"
                      itemProp="name"
                    >
                      TRM
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      TRM Consultancy
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Web Development Experts
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Premier web development agency in Delhi specializing in custom
                  websites, e-commerce solutions, and mobile applications.
                  Transform your digital presence with our expert team.
                </p>

                {/* Newsletter Signup */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Contact Us
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    We'll get back to you soon
                  </p>

                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    <div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your contact number *"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email (optional)"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:opacity-90"
                      style={{backgroundColor: "#16a34a"}}
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Submit</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Company & Resources in one column */}
              <div className="lg:col-span-2">
                {/* Company */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                </h4>
                  <ul className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.link}
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 transition-colors duration-200 group"
                        >
                          <ArrowRight className="w-4 h-4 text-blue-500 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-green-600 to-teal-400 rounded-full"></div>
                    Resources
                  </h4>
                  <ul className="space-y-3">
                    {resourceLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.link}
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 transition-colors duration-200 group"
                        >
                          <ArrowRight className="w-4 h-4 text-blue-500 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Services */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Our Services</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li 
                      key={index} 
                      className="flex items-center gap-2 group"
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <div
                        className={`w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 ${
                          hoveredService === index
                            ? service.color.replace(
                                "from-",
                                "bg-gradient-to-br from-",
                              ) + " text-white"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        <service.icon className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {service.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect With Us - Vertical Icons */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Connect With Us
                </h3>
                <div className="space-y-4 my-icon">
                  {[
                    {
                      icon: FaLinkedinIn,
                      label: "LinkedIn",
                      url: "https://linkedin.com/company/trmconsultancy",
                      bg: "bg-[#0A66C2] hover:bg-[#0A5AAD]",
                    },
                    {
                      icon: FaXTwitter,
                      label: "X",
                      url: "https://x.com/trmconsultancy",
                      bg: "bg-black hover:bg-gray-800",
                    },
                    {
                      icon: FaFacebookF,
                      label: "Facebook",
                      url: "https://facebook.com/trmconsultancy",
                      bg: "bg-[#1877F2] hover:bg-[#166FE5]",
                    },
                    {
                      icon: FaInstagram,
                      label: "Instagram",
                      url: "https://instagram.com/trmconsultancy",
                      bg: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90",
                    },
                    {
                      icon: FaYoutube,
                      label: "YouTube",
                      url: "https://youtube.com/@trmconsultancy",
                      bg: "bg-[#FF0000] hover:bg-[#E60000]",
                    },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 px-4 py-2 ${social.bg} rounded-lg text-white hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]`}
                        aria-label={`Visit our ${social.label} page`}
                      >
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Contact Info - 2 cols */}
              <div className="lg:col-span-2">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-orange-600 to-red-600 rounded-full"></div>
                  Get in Touch
                </h4>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@trmconsultancy.com"
                    className="flex items-start gap-3 group p-3 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                    itemProp="email"
                    aria-label="Email TRM Consultancy"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <p className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          hello@trmconsultancy.com
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+918512345678"
                    className="flex items-start gap-3 group p-3 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                    itemProp="telephone"
                    aria-label="Call TRM Consultancy"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                        <p className="text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                          +91 8512 345 678
                        </p>
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 group p-3 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md border border-gray-200">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="#FF3E30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                          fill="#FF3E30"
                        />
                      </svg>
                    </div>
                    <div
                      itemProp="address"
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                    >
                      <p className="text-sm text-gray-500 dark:text-gray-400">Office</p>
                      <p className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span itemProp="streetAddress">123 Tech Street</span>,{" "}
                        <span itemProp="addressLocality">Delhi</span>{" "}
                        <span itemProp="postalCode">110001</span>,{" "}
                        <span itemProp="addressCountry">India</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} TRM Consultancy. All rights reserved.
              </p>
              </div>

              <nav className="flex flex-wrap items-center justify-center gap-6">
                <a
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-of-service"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  Terms of Service
                </a>
                <a
                  href="/sitemap.xml"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  Sitemap
                </a>
                <a
                  href="/cookie-policy"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  Cookie Policy
                </a>
              </nav>
            </div>

            {/* SEO Keywords Footer Text */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Professional web development agency India. Specializing in
                responsive website design, e-commerce platforms, WordPress
                development, React applications, and custom web solutions for
                businesses of all sizes.
              </p>
            </div>
          </div>
        </div>

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TRM Consultancy Services",
              description:
                "Premier web development agency in Delhi specializing in custom websites, e-commerce solutions, and mobile applications",
              url: "https://www.trmconsultancy.com",
              logo: "https://www.trmconsultancy.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Street",
                addressLocality: "Delhi",
                postalCode: "110001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8512-345-678",
                email: "hello@trmconsultancy.com",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://linkedin.com/company/trmconsultancy",
                "https://x.com/trmconsultancy",
                "https://facebook.com/trmconsultancy",
                "https://instagram.com/trmconsultancy",
                "https://github.com/trmconsultancy",
                "https://youtube.com/@trmconsultancy",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                bestRating: "5",
                ratingCount: "200",
              },
              priceRange: "$$",
            }),
          }}
        />
      </footer>
    </>
  );
}
