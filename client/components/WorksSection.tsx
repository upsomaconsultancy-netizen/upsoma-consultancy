import { useEffect, useRef, useState } from "react";
import "./Worksection.css";

export default function TestimonialsSection() {
  const testimonials = [
    {
      img: "https://i.pravatar.cc/500?img=5",
      title: "Best Developers",
      text: "TRM Consultancy delivered exceptional full-stack web solutions for our company. Their Azure deployment support was top-notch.",
      name: "Robert Johnson",
      role: "Marketing Director",
    },
    {
      img: "https://i.pravatar.cc/500?img=5",
      title: "Best Developers",
      text: "TRM Consultancy delivered exceptional full-stack web solutions for our company. Their Azure deployment support was top-notch.",
      name: "Robert Johnson",
      role: "Marketing Director",
    },
    {
      img: "https://i.pravatar.cc/500?img=5",
      title: "Best Developers",
      text: "TRM Consultancy delivered exceptional full-stack web solutions for our company. Their Azure deployment support was top-notch.",
      name: "Robert Johnson",
      role: "Marketing Director",
    }
  ];

  // ✅ Clone first slide for infinite loop
  const slides = [...testimonials, testimonials[0]];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000); // 2 seconds delay

    return () => clearInterval(interval);
  }, []);

  // ✅ Handle infinite scroll (reset when reaching clone)
  useEffect(() => {
    if (index === slides.length - 1) {
      const timer = setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, 700); // Wait for slide transition to complete
      return () => clearTimeout(timer);
    } else {
      setTransition(true);
    }
  }, [index]);

  return (
    <section
      id="testimonials"
      className="w-full py-20 overflow-hidden bg-emerald-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            What <span className="text-blue-600 dark:text-blue-400">Clients</span> Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Don't just take our word for it. Here's what our valued clients have to say about their experience working with us. We take pride in delivering exceptional results and building lasting relationships.
          </p>
        </div>

        <div className="relative w-full flex justify-center">
          <div className="overflow-hidden w-full max-w-6xl"> {/* 💻 Larger width for desktop */}
            <div
              ref={sliderRef}
              className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""}`}
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {slides.map((t, idx) => (
                <div
                  key={idx}
                  className="w-full flex-shrink-0 flex flex-col sm:flex-row items-center bg-white dark:bg-gray-800 rounded-3xl p-10 sm:p-14 mx-auto transition-colors duration-300" style={{justifyContent:"center"}}
                >
                  {/* 🖼️ Large Image for Desktop */}
                  <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-700/50 card-style-img">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-8 sm:mt-0 sm:ml-10 text-center sm:text-left max-w-xl card-style-text">
                    <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                      {t.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base mb-4 leading-relaxed">
                      {t.text}
                    </p>
                    <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
                    <div className="mt-6">
                      <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
