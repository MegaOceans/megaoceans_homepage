"use client"; // Required for Next.js App Router (if using App directory)

import { useState } from "react";
import { db, collection, addDoc } from "../../../lib/firebase.js"; // Import Firebase
import Input from "./input.js"; // Import the Input component

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",

    description: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      setMessage("Message sent successfully! ✅");
      setFormData({
        name: "",
        companyName: "",
        email: "",

        description: "",
      });
    } catch (error) {
      setMessage("Error sending message ❌");
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="w-full lg:w-form rounded-3xl h-contactUs bg-terinary flex p-8 flex-col items-start justify-between">
      <p className="text-text text-xl font-medium">Got a project in mind?</p>
      <p className="text-text text-4xl lg:text-6xl font-bold">
        Let’s Discuss The Details
      </p>
      <form
        className="w-full flex flex-col gap-6 text-black"
        onSubmit={handleSubmit}
      >
        <Input
          label="Name"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          label="Email"
          name="email"
          placeholder="Enter Email ID"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Company Email"
          name="companyEmail"
          placeholder="Enter Company Email ID"
          value={formData.companyEmail}
          onChange={handleChange}
        />
        <div className="w-full flex flex-col gap-2 items-start">
          <p className="text-base font-semibold text-white">Description:</p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Description"
            className="w-full px-4 py-2 rounded-xl text-lg text-black"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-secondary rounded-lg">
          Submit
        </button>
      </form>
      {message && <p className="text-white font-semibold">{message}</p>}
    </div>
  );
}
