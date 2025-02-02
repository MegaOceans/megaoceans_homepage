"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Review from "./review";

const ReviewCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 items per slide

  // Update items per page based on screen width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1674) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 1274) {
        setItemsPerPage(3); // Desktop: Show 3 items per slide
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2); // Tablet: Show 2 items per slide
      } else {
        setItemsPerPage(1); // Mobile: Show 1 item per slide
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);
  console.log(itemsPerPage);
  console.log(window.innerWidth);
  const totalSlides = Math.ceil(reviews.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative flex items-center justify-center w-full mx-auto">
      {/* Left Arrow (Outside) */}
      <button
        onClick={handlePrev}
        className=" hidden lg:block relative left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 z-10 hover:text-secondary"
        style={{ top: "50%" }}
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Review Container */}
      <div className=" overflow-x-scroll lg:overflow-hidden w-full flex ">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4 px-auto"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${totalSlides * 100}%`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex min-w-full gap-4">
              {reviews
                .slice(
                  slideIndex * itemsPerPage,
                  slideIndex * itemsPerPage + itemsPerPage
                )
                .map((review, index) => (
                  <Review
                    key={index}
                    company={review.company}
                    title={review.title}
                    desc={review.desc}
                    name={review.name}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow (Outside) */}
      <button
        onClick={handleNext}
        className="hidden lg:block relative right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 z-10 hover:text-secondary"
        style={{ top: "50%" }}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default ReviewCarousel;
