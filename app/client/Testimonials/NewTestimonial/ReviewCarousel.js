"use client";
import React, { useState, useEffect } from "react";
import Review from "./Review";
const ReviewCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-[1024px] mx-auto">
      {/* Carousel Container */}
      <div className="overflow-visible relative max-w-[1024px]">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 ${
                index != currentIndex ? "opacity-0" : "opacity-100"
              }`}
            >
              <Review review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-secondary" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
