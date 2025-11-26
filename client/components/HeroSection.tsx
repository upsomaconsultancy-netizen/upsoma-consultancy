import React from "react";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center text-center px-6 md:px-20 py-20 bg-emerald-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Background interactive elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 dark:bg-green-900 opacity-40 dark:opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-300 dark:bg-lime-900 opacity-40 dark:opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* Header Section */}
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-sm uppercase tracking-wide bg-lime-200 dark:bg-lime-800 text-green-900 dark:text-white font-semibold px-3 py-1 rounded-full mb-4 z-10"
      >
        #1 Web Development Agency in Dwarka Delhi
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 z-10 flex flex-col items-center"
      >
        Transforming Ideas into
        <span className="text-green-700 dark:text-white mt-2">
          <Typewriter
            options={{
              strings: ["Digital Reality"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-gray-700 dark:text-white max-w-2xl mb-8 z-10 text-lg"
      >
        At <strong>Upsoma</strong>, Dwarka's #1 Web Development Agency, we help startups and enterprises in Delhi NCR craft stunning websites and scalable digital products. 500+ projects delivered, 98% client satisfaction. Our mission is to make technology beautiful, functional, and growth-driven.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 hover:shadow-2xl transition duration-300 z-10"
        onClick={() => {
          const element = document.getElementById('services');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Explore Our Work →
      </motion.button>

      {/* Central Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 mt-20 z-10">
        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-gray-600 dark:text-gray-200 text-sm mb-3 max-w-xs">
            We’ve been helping brands grow with innovative, design-first web solutions that drive engagement and deliver measurable results.
          </p>
            <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80"
            alt="Upsoma Web Development Team Dwarka Delhi"
            className="w-32 h-32 object-cover rounded-full mb-4 shadow-md border-4 border-white"
          />
          <p className="text-gray-700 dark:text-white font-semibold">Trusted Since 2016</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 px-6 py-2 rounded-full font-medium shadow hover:shadow-md transition"
            onClick={() => {
              const footer = document.getElementById('contact');
              if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            More About Us
          </motion.button>
        </motion.div>

        {/* Main Person */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex items-center gap-2 text-white dark:text-gray-100 group-hover:text-white transition-colors duration-300"
        >
          <div className="absolute -inset-4 bg-green-200 rounded-2xl blur-2xl opacity-40 animate-pulse"></div>
            <img
            src="/Hero-sec-img.png"
            alt="Upsoma Web Development Agency Dwarka Delhi - Best Web Design Services"
            className="rounded-2xl w-[32rem] h-auto object-cover relative z-10"
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center bg-yellow-100 p-6 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500 to-lime-500 dark:from-green-600 dark:to-lime-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <Rocket className="text-yellow-600 w-8 h-8 mb-2 animate-bounce" />
              <p className="text-2xl font-bold text-gray-900">3k+</p>
              <p className="text-gray-600 text-sm">Projects Delivered</p>
            </div>
          </div>
          <div className="flex items-center mt-4 -space-x-2">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Upsoma Web Developer Team Member" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Upsoma Web Designer Team Member" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/men/56.jpg" alt="Upsoma SEO Expert Team Member" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Upsoma Digital Marketing Specialist" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <p className="text-gray-600 text-sm mt-2">A team of passionate creators</p>
        </motion.div>
      </div>

      {/* Tech stack with infinite auto-scroll */}
      <div className="relative w-full overflow-x-hidden mt-20">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-12 items-center justify-center py-6 bg-white/70 rounded-3xl shadow-inner min-w-max px-10 backdrop-blur-sm"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Web Development Dwarka Delhi" className="w-16 h-16" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Development Dwarka Delhi" className="w-16 h-16" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js Development Dwarka" className="w-16 h-16 bg-white p-1 rounded" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB Database Development Dwarka" className="w-16 h-16" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Database Development Dwarka Delhi" className="w-16 h-16" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Development Dwarka Delhi" className="w-16 h-16" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 Web Development Dwarka" className="w-16 h-16" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 Web Design Dwarka Delhi" className="w-16 h-16" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Version Control Dwarka" className="w-16 h-16" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript Development Dwarka Delhi" className="w-16 h-16" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
