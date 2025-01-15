"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { FaArrowRight } from "react-icons/fa";

export default function Heading() {
  const [isHoveredContact, setIsHoveredContact] = useState(false);
  const [isHoveredPortfolio, setIsHoveredPortfolio] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleScrollToContact = () => {
    router.push("/#contact-us"); // Navigate to the contact-us section on the home page
  };
  return (
    <div className="w-view flex flex-col items-center justify-center text-center gap-8">
      {/* Heading */}
      <div className="flex flex-col items-center gap-6">
        <p className="text-4xl text-white font-bold leading-normal">
          <span className="text-secondary italic text-5xl mr-4">Bold</span>
          Designs for Brands That Don’t Do
          <span className="text-secondary italic text-5xl ml-4">Boring</span>
        </p>
        <p className="text-lg font-medium text-white max-w-3xl">
          From innovative designs that captivate to seamless functionality that
          performs, experience the Bold Designs difference and elevate your
          brand’s presence.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-8">
        {/* Contact Us Button */}
        <button
          className="flex items-center gap-6 px-6 py-3 rounded-full bg-secondary text-primary font-bold transition duration-300 hover:bg-white"
          onMouseEnter={() => setIsHoveredContact(true)}
          onMouseLeave={() => setIsHoveredContact(false)}
          onClick={handleScrollToContact}
          aria-label="Contact Us"
        >
          <p className="text-lg hover:text-terinary">Contact Us</p>
          <FaArrowRight
            style={{
              fill: isHoveredContact ? "#343651" : "black",
              transition: "transform 0.3s, fill 0.3s",
              transform: isHoveredContact ? "rotate(-45deg)" : "rotate(0deg)",
            }}
          />
        </button>

        {/* See Portfolio Button */}
        <button
          className="flex items-center gap-6 px-6 py-3 rounded-full bg-white text-primary font-bold transition duration-300 hover:bg-white"
          onMouseEnter={() => setIsHoveredPortfolio(true)}
          onMouseLeave={() => setIsHoveredPortfolio(false)}
          onClick={() => router.push("/projects")} // Navigate to /projects
          aria-label="See Portfolio"
        >
          <p className="text-lg hover:text-terinary">See Portfolio</p>
          <FaArrowRight
            style={{
              fill: isHoveredPortfolio ? "#343651" : "black",
              transition: "transform 0.3s, fill 0.3s",
              transform: isHoveredPortfolio ? "rotate(-45deg)" : "rotate(0deg)",
            }}
          />
        </button>
      </div>
    </div>
  );
}
