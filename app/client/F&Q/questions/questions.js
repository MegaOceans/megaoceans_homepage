"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function Questions({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="w-full p-4 rounded-3xl bg-terinary flex flex-col gap-4">
      {/* Question and Toggle Icon */}
      <div
        className="w-full flex items-center justify-between px-2 cursor-pointer"
        onClick={toggleAnswer}
      >
        <p className="text-white text-2xl font-bold">{question}</p>
        <div
          className={`text-white text-3xl transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <FaPlus />
        </div>
      </div>

      {/* Answer with Smooth Transition */}
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="p-4 text-black text-sm w-full bg-white rounded-xl mt-2">
          {answer}
        </p>
      </div>
    </div>
  );
}
