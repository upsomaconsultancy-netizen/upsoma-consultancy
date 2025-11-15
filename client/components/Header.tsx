import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
 

  const navigate = useNavigate();

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
      label: "About", 
      id: "about",
      onClick: () => handleNavigation('about')
    },
    { 
      label: "Our Works", 
      id: "works",
      onClick: () => handleNavigation('works')
    },
    { 
      label: "What We Do", 
      id: "services",
      onClick: () => handleNavigation('services')
    },
    { 
      label: "Blog", 
      id: "blog",
      onClick: () => {
        navigate('/blog');
        // Scroll to top when navigating to blog
        window.scrollTo(0, 0);
      }
    },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-100 dark:border-gray-700 shadow-sm bg-[#d9f8ea] dark:bg-gray-900 transition-colors duration-300" style={{borderBottom:"2px solid #a1dea1"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with semantic markup */}
          <button
            onClick={() => navigate('/')}
            className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="TRM Consultancy Services - Web Development Agency Delhi"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">TRM</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">TRM</h1>
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
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <div className="flex items-center gap-4">
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
            <ThemeToggle className="md:hidden scale-75 -mr-2" />
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
              <button
                onClick={() => {
                  navigate('/contact');
                  setIsOpen(false);
                }}
                className="w-full text-white px-4 py-3 rounded-lg font-medium mt-2 text-center"
                style={{backgroundColor: "#16a34a"}}
                aria-label="Contact Us - Get in touch with us"
              >
                Contact Us
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
