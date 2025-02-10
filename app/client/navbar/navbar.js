"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa"; // Import phone icon

export default function Navbar({ contactUsRef }) {
  const [isMobile, setIsMobile] = useState(false);

  // Track screen size for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // `md` breakpoint in Tailwind
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToContact = () => {
    if (contactUsRef?.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-4 flex items-center justify-between text-white fixed top-0 z-50 bg-primary px-12">
      <div className="flex items-center gap-2">
        {/* Navigate to home */}
        <Link
          href="/"
          className="text-lg lg:text-2xl font-semibold hover:cursor-pointer"
        >
          Mega Oceans
        </Link>
      </div>
      <div className="flex items-center gap-8">
        {/* Show button on larger screens, icon on mobile */}
        {isMobile ? (
          <FaPhone
            className="text-2xl text-secondary cursor-pointer"
            onClick={handleScrollToContact}
          />
        ) : (
          <button
            className="text-base text-black font-medium px-4 py-2 rounded-full bg-secondary"
            onClick={handleScrollToContact}
          >
            Contact Us
          </button>
        )}
      </div>
    </div>
  );
}
