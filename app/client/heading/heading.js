"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Heading() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-view flex items-start justify-between">
      <div className="flex flex-col items-start gap-6 w-1/2">
        <p className="text-4xl text-white font-bold leading-normal">
          <span className="text-secondary italic text-5xl mr-4">Bold</span>
          Designs for Brands That Don’t Do
          <span className="text-secondary italic text-5xl ml-4">Boring</span>
        </p>
        <p className="text-lg font-medium text-white">
          From innovative designs that captivate to seamless functionality that
          performs, experience the Bold Designs difference and elevate your
          brand’s presence
        </p>
        <button
          className="flex mt-12 items-center gap-12 px-4 py-2 rounded-full bg-secondary transition duration-300 hover:bg-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Contact Us"
        >
          <p className="text-lg font-bold hover:text-terinary">Contact Us</p>
          <FaArrowRight
            style={{
              fill: isHovered ? "#343651" : "black",
              transition: "transform 0.3s, fill 0.3s",
              transform: isHovered ? "rotate(-45deg)" : "rotate(0deg)",
            }}
          />
        </button>
      </div>
    </div>
  );
}
