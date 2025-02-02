import Image from "next/image";
import Navbar from "./client/navbar/navbar";
import Heading from "./client/heading/heading";
import Services from "./client/services/services";
import WhyUs from "./client/whyUs/whyUs";
import Testimonials from "./client/Testimonials/testimonial";
import Faq from "./client/F&Q/fq";
import Footer from "./client/footer/footer";
import ContactUs from "./client/contactUs/contactUs";
import PricingPlan from "./client/pricingPlan/pricingPlan";
import Templates from "./client/templates/templates";
import MainTestimonial from "./client/Testimonials/NewTestimonial/MainTestimonial";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-primary flex items-center flex-col gap-28 overflow-scroll overflow-x-hidden">
      <Navbar />
      <Heading />
      <Services />
      <WhyUs />
      <div className="w-full bg-terinary flex justify-center py-12">
        <PricingPlan />
      </div>

      <Templates />
      {/* <Testimonials />
       */}
      <MainTestimonial />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
}
