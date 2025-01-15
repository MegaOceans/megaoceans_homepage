"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleScrollToContact = () => {
    router.push("/#contact-us"); // Navigate to the contact-us section on the home page
  };

  return (
    <div className="w-view py-4 flex items-center justify-between text-white">
      <div
        className="flex items-center gap-2 hover:cursor-pointer"
        onClick={() => router.push("/")}
      >
        <p className="text-3xl font-semibold">Mega Oceans</p>
      </div>
      <div className="flex items-center gap-8">
        <p
          className="text-base font-medium hover:cursor-pointer hover:text-green"
          onClick={handleScrollToContact} // Scroll to ContactUs
        >
          Contact Us
        </p>
        <button
          className="text-base text-black font-medium px-4 py-2 rounded-full bg-secondary"
          onClick={handleScrollToContact} // Scroll to ContactUs
        >
          Book a Call
        </button>
      </div>
    </div>
  );
}
