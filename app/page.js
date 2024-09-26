import Image from "next/image";
import Navbar from "./client/navbar/navbar";
import Testimonials from "./client/Testimonials/testimonial";
import Faq from "./client/F&Q/fq";
import Footer from "./client/footer/footer";
import PricingPlan from "./client/pricingPlan/pricingPlan";
import Heading from "./client/heading/heading";
import Services from "./client/services/services";
import WhyUs from "./client/whyUs/whyUs";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-primary flex items-center flex-col gap-28 overflow-scroll">
      <Navbar />
      <Heading />
      <Services />
      <WhyUs />
      <Testimonials />
      <Faq />

      <Footer />
    </div>
  );
}
