"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
// const images = [
//   "https://via.placeholder.com/800x400?text=Image+1",
//   "https://via.placeholder.com/800x400?text=Image+2",
//   "https://via.placeholder.com/800x400?text=Image+3",
//   "https://via.placeholder.com/800x400?text=Image+4",
//   "https://via.placeholder.com/800x400?text=Image+5",
//   "https://via.placeholder.com/800x400?text=Image+6",
//   "https://via.placeholder.com/800x400?text=Image+7",
//   "https://via.placeholder.com/800x400?text=Image+8",
//   "https://via.placeholder.com/800x400?text=Image+9",
//   "https://via.placeholder.com/800x400?text=Image+10",
// ];

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

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out relative w-[1100px] h-[800px]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            // className="w-full"
            width={1100}
            height={800}
            // objectFit="fill"
            // layout="fill"
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

export default Carousel;
