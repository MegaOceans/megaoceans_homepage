"use client";

import { useRef } from "react";
import Navbar from "./navbar/navbar";
import Heading from "./heading/heading";
import Services from "./services/services";
import WhyUs from "./whyUs/whyUs";
import PricingPlan from "./pricingPlan/pricingPlan";
import Templates from "./templates/templates";
import MainTestimonial from "./Testimonials/NewTestimonial/MainTestimonial";
import Faq from "./F&Q/fq";
import ContactUs from "./contactUs/contactUs";
import Footer from "./footer/footer";

export default function HomePage() {
  const contactUsRef = useRef(null);

  return (
    <div className="flex items-center flex-col overflow-x-hidden">
      <Navbar contactUsRef={contactUsRef} />
      <main className="w-full">
        <Heading contactUsRef={contactUsRef} />
        <Services />
        <WhyUs />
        <div className="w-full bg-terinary flex justify-center py-12">
          <PricingPlan />
        </div>
        <Templates />
        <MainTestimonial />
        <Faq />
        <div
          id="contact"
          ref={contactUsRef}
          className="w-full flex justify-center bg-primary py-12"
        >
          <ContactUs />
        </div>
      </main>
      <Footer />
    </div>
  );
}
