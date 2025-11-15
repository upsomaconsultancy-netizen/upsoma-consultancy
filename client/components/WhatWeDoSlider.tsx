import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const slides = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1558944351-44f5f9f2e6b5?auto=format&fit=crop&w=800&q=80",
    title: "Website for your Petshop",
    desc: "Engaging online store with pet care tips and booking options.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=800&q=80",
    title: "Website for your Gym",
    desc: "Dynamic fitness website with membership plans and class schedules.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    title: "Website for your Restaurant",
    desc: "Delicious digital menus and smooth table reservation experience.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=800&q=80",
    title: "Website for your Portfolio",
    desc: "Showcase your creativity and achievements with a modern portfolio.",
  },
];

const WhatWeDoSlider = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({ x: "-50%", transition: { duration: 20, ease: "linear" } });
        controls.set({ x: 0 });
      }
    };
    animate();
  }, [controls]);

  return (
    <section className="w-full py-24 overflow-hidden relative select-none bg-emerald-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-pink-50/30 dark:from-blue-900/20 dark:to-pink-900/20 blur-3xl opacity-40 -z-10" />

      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          What We Do
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We create stunning, high-performance websites that drive results and
          help your business grow in the digital world.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-x-auto pb-12 cursor-grab active:cursor-grabbing scroll-smooth no-scrollbar"
      >
        <motion.div
          className="flex gap-8 py-4 w-max"
          animate={controls}
        >
          {[...slides, ...slides].map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="w-80 flex-shrink-0 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-800/50 group hover:shadow-xl transition-all duration-500"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {slide.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{slide.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default WhatWeDoSlider;
