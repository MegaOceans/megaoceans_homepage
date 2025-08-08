import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "I can highly recommend MegaOceans for web development work and template builds. With a very specific design to work with, they were highly professional and completed the work with little intervention or guidance, besides the source files. Excellent work.",
    author: "Benedict Francis",
    company: "Techniciti",
  },
  {
    text: "To be honest, the project with MegaOceans was very easy going. They quickly understood the requirement and were able to finish the work without many revisions, but still with the right result.",
    author: "Robin Bagchi",
    company: "Spixnet GMBH",
  },
  {
    text: "MegaOceans transformed our vision into a stunning digital product. Their team was proactive, responsive, and skilled at every step of the development process.",
    author: "Nikita Sharma",
    company: "Startify India",
  },
  {
    text: "Working with MegaOceans has been a refreshing experience. Their dedication and attention to detail is something every company wishes for in a tech partner.",
    author: "David L.",
    company: "BuildWise Inc",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-secondary">
            Trusted and Loved by Customers and Brands
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700"
          style={{ transition: "transform 0.7s ease-in-out" }}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-terinary p-8 rounded-xl relative flex flex-col h-full"
              style={{ minHeight: "320px" }} // 👈 uniform height
            >
              <span className="absolute top-6 left-6 text-red-500 text-5xl font-bold leading-none">
                &ldquo;
              </span>
              <p className="text-white mt-10 mb-6 leading-relaxed text-sm lg:text-lg flex-grow">
                {testimonial.text}
              </p>
              <div>
                <p className="font-semibold text-sm lg:text-lg  text-secondary">{testimonial.author}</p>
                <p className="text-xs lg:text-sm italic text-white">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-4">
          {[0, 2].map((index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-red-500 scale-110" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index / 2 + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
