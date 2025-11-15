import { useEffect, useRef, useState } from "react";
import {  Zap, Target, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Code2, Palette, Globe2, Rocket, Layers, Smartphone, Database, Cloud } from "lucide-react";

  const services = [
    { title: "Web Development", description: "Custom, scalable, and fast web applications built with modern frameworks.", icon: Code2 },
    { title: "UI/UX Design", description: "Engaging and user-centered designs that drive better conversions.", icon: Palette },
    { title: "Advertisement & SEO", description: "Boost your visibility and attract organic traffic with effective strategies.", icon: Globe2 },
    { title: "App Development", description: "High-performance mobile apps for Android and iOS platforms.", icon: Smartphone },
   
  ];

export default function AboutSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section id="about" className="py-20 sm:py-32 bg-emerald-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with semantic h2 */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            About TRM Consultancy
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose TRM for Web Development?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're India's trusted web development agency with proven expertise in building high-performing websites and web applications for businesses of all sizes.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Our team of experts works tirelessly to bring your vision to life, ensuring every project we undertake not only meets but exceeds expectations. We are dedicated to transforming your ideas into impactful digital experiences that resonate with your audience and drive success.
            </p>
            <ul className="space-y-3 text-gray-800 dark:text-gray-300 text-base">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> Expert team of web developers and designers</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> Specialized in e-commerce and custom web development</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> 100% client satisfaction with responsive web design</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> 24/7 support and maintenance for your website</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> SEO-friendly web development for better Google rankings</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> Cutting-edge technologies and frameworks for modern solutions</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> User-focused design that enhances engagement and conversions</li>
            </ul>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Design abstract"
              className="rounded-xl shadow-md w-full max-w-md object-cover" style={{height:"120px"}}
            />
            <button className="mt-4 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-400 dark:border-gray-600 px-6 py-2 rounded-full font-medium shadow hover:shadow-lg transition w-fit">
              More About Us
            </button>
          </div>

          {/* Right Section with Darker Background Image */}
          <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden h-[450px] mt-8 md:mt-0 bg-black">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
              alt="Team working background"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20" style={{backdropFilter:" blur(3px)"}}></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-center text-white dark:text-gray-100">
              <h3 className="text-lg font-semibold mb-3">ABOUT US</h3>
              <p className="text-sm leading-relaxed">
                We believe in the power of collaboration and creativity. By partnering closely with our clients, we gain a deep understanding of their unique needs and goals, allowing us to deliver customized solutions that truly make a difference.
                <br /><br />
                Our holistic approach integrates design, technology, and strategy to create seamless and engaging digital experiences.
                <br /><br />
                By staying ahead of the curve and embracing the latest technologies, we ensure our clients receive cutting-edge solutions that drive measurable success.
              </p>
            </div>
          </div>
        </div>

        {/* Services grid */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 px-6 md:px-16">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-white via-blue-50 to-cyan-50 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent group overflow-hidden"
          >
            {/* Decorative glow ring */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-200/30 to-cyan-300/30 blur-2xl"></div>

            {/* Icon Container */}
            <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-8 h-8 text-white" aria-hidden="true" />
            </div>

            {/* Title */}
            <h3 className="relative text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="relative text-gray-600 text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Learn More Button */}
            <button className="relative text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn More <span className="text-lg">→</span>
            </button>
          </motion.article>
        );
      })}
    </div>

      </div>
    </section>
  );
}
