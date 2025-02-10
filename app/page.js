"use client";
import { useRef } from "react";
import Navbar from "./client/navbar/navbar";
import Heading from "./client/heading/heading";
import Services from "./client/services/services";
import WhyUs from "./client/whyUs/whyUs";
import PricingPlan from "./client/pricingPlan/pricingPlan";
import Templates from "./client/templates/templates";
import MainTestimonial from "./client/Testimonials/NewTestimonial/MainTestimonial";
import Faq from "./client/F&Q/fq";
import ContactUs from "./client/contactUs/contactUs";
import Footer from "./client/footer/footer";

export default function Home() {
  const contactUsRef = useRef(null); // Create a reference for ContactUs

  return (
    <div className="w-screen  flex items-center flex-col   overflow-scroll overflow-x-hidden">
      <Navbar contactUsRef={contactUsRef} /> {/* Pass ref to Navbar */}
      <Heading contactUsRef={contactUsRef} />
      <Services />
      <WhyUs />
      <div className="w-full bg-terinary flex justify-center py-12">
        <PricingPlan />
      </div>
      <Templates />
      <MainTestimonial />
      <Faq />
      {/* Contact Us Section */}
      <div
        ref={contactUsRef}
        className="w-full flex justify-center bg-primary py-12"
      >
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
