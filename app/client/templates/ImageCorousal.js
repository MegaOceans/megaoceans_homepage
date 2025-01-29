"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
      {/* Image Container */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute -left-16 md:-left-20 top-1/2 transform -translate-y-1/2 
                     bg-gray-800 text-white p-3 rounded-full shadow-lg 
                     transition-all duration-300 ease-in-out 
                     hover:bg-secondary hover:text-black hover:scale-110 z-10"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Images */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full flex justify-center">
                <Image
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  width={1100}
                  height={800}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute -right-16 md:-right-20 top-1/2 transform -translate-y-1/2 
                     bg-gray-800 text-white p-3 rounded-full shadow-lg 
                     transition-all duration-300 ease-in-out 
                     hover:bg-secondary hover:text-black hover:scale-110"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 
                      ${
                        index === currentIndex
                          ? "bg-secondary scale-110"
                          : "bg-gray-400 hover:bg-gray-500"
                      }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
