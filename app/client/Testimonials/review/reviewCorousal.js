"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Review from "./review";
const ReviewCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out relative gap-8"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {reviews.map((review, index) => (
          <Review
            company={review.company}
            title={review.title}
            desc={review.desc}
            name={review.name}
            key={index}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ReviewCarousel;
