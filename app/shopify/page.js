"use client";
import { useState } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { StarIcon } from '@heroicons/react/24/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { MdGppGood } from "react-icons/md";

import { Autoplay } from 'swiper/modules';
import TestimonialsSection from "./testimonial";
import { SiCodeigniter } from "react-icons/si";
import WhyMegaoceans from "./pros";
import Footer from "../client/footer/footer";
import SvgBG from "../client/heading/SvgBG";
import { FaArrowRight, FaCode, FaRegCheckCircle, FaShopify } from "react-icons/fa";
import ShopifyFeatures from "./shopifyFeatures";
import ShopifyFooter from "../client/footer/shopifyFooter";
export default function ShopifyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white ">
      {/* Navigation */}
      <nav className="bg-primary shadow-lg fixed w-full z-50">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-lg lg:text-2xl font-bold text-white">MegaOceans</div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#about"
                  className="text-white hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="text-white hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-secondary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
                <button className="bg-secondary  px-6 py-2 rounded-md text-sm font-medium hover:bg-secondaryGreen">
                  Start a Project
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-4 lg:pt-16 bg-terinary h-full  flex flex-col items-center w-full ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-[50px] font-semibold text-white mb-6 text-center lg:text-left">
                The Best <span className="text-secondary lg:text-[50px] text-4xl  ">Shopify Development</span> Company
              
              </h1>
              <p className="text-sm lg:text-lg text-white mb-8 text-center lg:text-left">
                Partner with us to develop your e-commerce Store With the Best
                Shopify Development Company while maintaining 100% ownership and
                control.
              </p>

             <div className="space-y-4 mb-8">
  <div className="flex items-center text-sm lg:text-lg">
    <FaRegCheckCircle className={`text-secondary`} />
    <span className="text-white ml-4">
      Highly Experienced Developer
    </span>
  </div>
  <div className="flex items-center">
    <FaRegCheckCircle className={`text-secondary`} />
    <span className="text-white ml-4">
      3+ Years of Industry Expertise
    </span>
  </div>
  <div className="flex items-center">
    <FaRegCheckCircle className={`text-secondary`} />
    <span className="text-white ml-4">
      500+ Online Stores Delivered
    </span>
  </div>
  <div className="flex items-center">
   <FaRegCheckCircle className={`text-secondary`} />
    <span className="text-white ml-4">
      Affordable Costing but Quality Never Compromised
    </span>
  </div>
</div>
<button
  type="submit"
  className="group  bg-secondary text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-secondaryGreen transition duration-300 flex items-center gap-2
"
>
  Book a Free Consultation
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-black transform transition-transform duration-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    style={{
      transition: 'transform 0.3s',
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>

  <style jsx>{`
    button.group:hover svg {
      transform: rotate(-30deg);
    }
  `}</style>
</button>
            
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
  <h3 className="text-3xl font-bold text-black mb-2">
    Looking for Shopify Website?
  </h3>
  <p className="text-gray-600 mb-6">
    Send us your info — we’ll be in touch soon.
  </p>

  <form className="space-y-4">
    <input
      type="text"
      placeholder="Name *"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
    />
    <input
      type="text"
      placeholder="Business Name"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
    />
    <input
      type="text"
      placeholder="WhatApp Number/Contact Number *"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
    />
    <input
      type="email"
      placeholder="E-mail Address"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
    />

   <button
  type="submit"
  className="group w-full bg-secondary hover:bg-secondaryGreen text-black py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2"
>
  Book a Free Consultation
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-black transform transition-transform duration-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    style={{
      transition: 'transform 0.3s',
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>

  <style jsx>{`
    button.group:hover svg {
      transform: rotate(-30deg);
    }
  `}</style>
</button>


  </form>
            </div>
          </div>
        </div>       
      </section>
      
      


      {/* Why Choose Us Section */}
      <section id="services" className="py-16  bg-primary">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-2xl lg:text-4xl font-bold text-secondary mb-4">
        Why Choose MegaOceans as Your Shopify Partner?
      </h2>
      <p className="text-sm lg:text-lg text-white max-w-3xl mx-auto">
        Our in-house experts help you avoid costly errors and offer it all: setup, customization, and app development. We are a complete <strong>Shopify development company</strong> for a reason.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Custom & Responsive Development",
          desc: "Make the most of Shopify’s flexibility with a design that works flawlessly across multiple devices efficiently.",
          icon: (
           <FaCode className="w-10 h-10" style={{ color: "white" }} />
          ),
        },
        {
          title: "Shopify Module Development",
          desc: "Get customized Shopify modules according to your business requirements with added functionality.",
          icon: (
            <FaShopify className="w-10 h-10" style={{ color: "white" }} />
          ),
        },
        {
          title: "Site Migration & Theme Development",
          desc: "Shift your existing Ecommerce store to Shopify with us, and have a tailored theme that aligns with your business vision.",
          icon: (
           
<SiCodeigniter className="w-10 h-10" style={{ color: "white" }}  />
          ),
        },
        {
          title: "Quality Assurance",
          desc: "Stay at peace with comprehensive stress testing that is as intense as testing gets!",
          icon: (
            <MdGppGood className="w-10 h-10" style={{ color: "white" }}  />
          ),
        },
      ].map((feature, idx) => (
        <div key={idx} className="bg-terinary p-8 rounded-xl shadow-md text-center">
          <div className="flex justify-center mb-4">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-secondary mb-2 ">
            {feature.title}
          </h3>
          <p className="text-white text-sm">{feature.desc}</p>
        </div>
      ))}
    </div>
                 </div>
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Text Content */}
    <div className="space-y-8 py-16 max-w-7xl">
      {[
        {
          title: "Minimal & Clean Code",
          desc: "Powered with SaaS, you get a clean, clutter-free code.",
        },
        {
          title: "White Label, Always",
          desc: "A <strong>Shopify website design company</strong> with default white-labeling.",
        },
        {
          title: "Four Testing Layers",
          desc: "Unparalleled quality assurance with four-tiered stress testing.",
        },
        {
          title: "24×7 Team Support",
          desc: "Our team is available round-the-clock to ensure excellence, always!",
        },
      ].map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="group inline-block">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white transform transition-transform duration-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    style={{
      transition: 'transform 0.3s',
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>

  <style jsx>{`
    button.group:hover svg {
      transform: rotate(-30deg);
    }
  `}</style>
</div>

          <div>
            <h3 className="text-base lg:text-lg font-bold text-secondary mb-1  transition duration-300">{item.title}</h3>
            <p
              className="text-white text-xs lg:text-sm"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Side Image */}
    <div className="flex justify-center lg:mt-4">
      <img
        src="https://ik.imagekit.io/e5d019f0b85d/Megaoceans.com/shopify_image?updatedAt=1754670427821"
        alt="Shopify Example"
        className="rounded-xl h-72 lg:h-96  shadow-lg"
      />
    </div>
  </div>
      </section>


      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-terinary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-secondary mb-6">
              Experts with Experience
            </h2>
            <p className="text-sm lg:text-lg text-white max-w-4xl mx-auto">
              As a leading Shopify development company, our Shopify experience
              too breaks barriers when it comes to delivering designs that
              balance trends and functionality to increase profits like never
              before!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Kola Goodies - UI Design & Development"},
              {
                name: "Biotin Xtreme Hair Care - UI Design & Development",
                
              },
              { name: "Caffe Birraio - UI Design & Development"},
              { name: "The Tenth House - UI Design & Development" },
              { name: "Vikarus - UI Design & Development"},
              {
                name: "Gills Building Supplies - UI Design & Development",
               
              },
            ].map((project, index) => (
              <div
                key={index}
                className=" rounded-xl p-8  "
              >
               <img src="https://cdn.sanity.io/images/w8f1ak3c/production/95ee0f12f954c" className="w-full md:w-80 h-60 rounded-lg" />
                <p className="text-base font-semibold text-secondary mt-2">
                  {project.name}
                </p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
     

      {/* Testimonials Section */}
     <TestimonialsSection />
      {/* Why MegaOceans Section */}
    <WhyMegaoceans />
      {/* Footer */}
      <ShopifyFeatures />
      <ShopifyFooter />
           
    </div>
  );
}
