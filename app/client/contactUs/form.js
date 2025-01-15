"use client";
import { useState } from "react";
import Input from "./input";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    companyEmail: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Your message has been sent!");
        setFormData({
          name: "",
          companyName: "",
          email: "",
          companyEmail: "",
          description: "",
        });
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="w-full lg:w-form rounded-3xl h-auto bg-terinary flex p-8 flex-col items-start gap-6"
      onSubmit={handleSubmit}
    >
      <p className="text-text text-xl font-medium">Got a project in Mind?</p>
      <p className="text-text text-4xl lg:text-6xl font-bold">
        Let’s Discuss The Details
      </p>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col sm:flex-row sm:gap-4">
          <Input
            label="Name"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label="Company Name"
            placeholder="Enter Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:gap-4">
          <Input
            label="Email"
            placeholder="Enter Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Company Email"
            placeholder="Enter Company Email ID"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-base font-semibold text-white">Description</p>
          <textarea
            name="description"
            className="w-full rounded-xl h-24 p-4 text-black"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="px-8 py-2 bg-secondary rounded-full text-lg font-semibold text-black"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
        {message && <p className="text-white text-center mt-4">{message}</p>}
      </div>
    </form>
  );
}
