import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Enhanced SEO for Header - add structured data for navigation
  useEffect(() => {
    // Generate structured data for website navigation
    const navigationData = {
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
          "name": "About",
          "item": "https://upsoma.in/#about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Services",
          "item": "https://upsoma.in/#services"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Portfolio",
          "item": "https://upsoma.in/#works"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Blog",
          "item": "https://upsoma.in/blog"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Contact",
          "item": "https://upsoma.in/contact"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "FAQ",
          "item": "https://upsoma.in/faq"
        }
      ]
    };

    // Add structured data script
    let script = document.getElementById("header-navigation-ld-json") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "header-navigation-ld-json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(navigationData);

  }, []);

  const handleNavigation = (id: string) => {
    const currentPath = window.location.pathname;
    
    if (currentPath !== '/') {
      // If not on home page, navigate to home with hash
      navigate(`/#${id}`, { replace: true });
      // The actual scrolling will be handled by the useEffect in the Index component
    } else {
      // On home page, just scroll to section
      const element = document.getElementById(id === 'works' ? 'testimonials' : id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navItems = [
    { 
      label: "Home", 
      id: "home",
      onClick: () => navigate('/'),
      ariaLabel: "Go to Upsoma homepage"
    },
    { 
      label: "About", 
      id: "about",
      onClick: () => handleNavigation('about'),
      ariaLabel: "Learn about Upsoma web development agency"
    },
    { 
      label: "Our Works", 
      id: "works",
      onClick: () => handleNavigation('works'),
      ariaLabel: "View our web development portfolio and projects"
    },
    { 
      label: "Blog", 
      id: "blog",
      onClick: () => {
        navigate('/blog');
        // Scroll to top when navigating to blog
        window.scrollTo(0, 0);
      },
      ariaLabel: "Read our web development blog and insights"
    },
    { 
      label: "Contact", 
      id: "contact",
      onClick: () => {
        navigate('/contact');
        // Scroll to top when navigating to contact
        window.scrollTo(0, 0);
      },
      ariaLabel: "Contact Upsoma for web development services"
    }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-100 dark:border-gray-700 shadow-sm bg-[#d9f8ea] dark:bg-gray-900 transition-colors duration-300" style={{borderBottom:"2px solid #a1dea1"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with semantic markup */}
          <button
            onClick={() => navigate('/')}
            className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Upsoma - Web Development Agency Delhi"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Upsoma</h1>
                <p className="text-xs text-gray-600 dark:text-gray-300">Web Development</p>
              </div>
            </div>
          </button>

          {/* Desktop Navigation with semantic nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={item.onClick}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-200 relative group"
                aria-label={item.ariaLabel || `Navigate to ${item.label}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/918178353728"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium bg-white text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all duration-200 transform hover:scale-105"
                aria-label="Contact us on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => navigate('/contact')}
                className="text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-green-500/30 transition-all duration-200 transform hover:scale-105 inline-block"
                style={{backgroundColor: "#16a34a"}}
                aria-label="Contact Us - Get in touch with us"
              >
                Contact Us
              </button>
              <ThemeToggle className="hidden md:block" />
            </div>
          </nav>
          

          {/* Mobile menu button */}
          <div className="flex items-center gap-1 md:hidden">
            <a
              href="https://wa.me/918178353728"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg font-medium bg-white text-green-500 border border-green-500 hover:bg-green-500 hover:text-white transition-all duration-200 text-xs"
              aria-label="Contact us on WhatsApp"
            >
              <FaWhatsapp className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
            <ThemeToggle className="md:hidden scale-75" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100/30 dark:hover:bg-gray-800/50 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav
            className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 bg-[#d9f8ea] dark:bg-gray-900"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-3 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    item.onClick();
                    setIsOpen(false);
                  }}
                  className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-base transition-colors py-3 px-4 hover:bg-gray-100/30 dark:hover:bg-gray-800/50 rounded-lg"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://wa.me/918178353728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg font-medium bg-white text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all duration-200 transform hover:scale-105"
                  aria-label="Contact us on WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    navigate('/contact');
                    setIsOpen(false);
                  }}
                  className="flex-1 text-white px-4 py-3 rounded-lg font-medium text-center"
                  style={{backgroundColor: "#16a34a"}}
                  aria-label="Contact Us - Get in touch with us"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
