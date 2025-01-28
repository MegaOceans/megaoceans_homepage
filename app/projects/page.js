"use client";
import React, { useRef } from "react";
import Navbar from "../client/navbar/navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
const ProjectSection = ({ project, isEven }) => {
  const sectionRef = useRef(null);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen w-full flex items-center border-b border-terinary"
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col gap-12 ${
            isEven ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: isEven ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={project.image || "/api/placeholder/1200/800"}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                layout="fit"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center"
            initial={{ x: isEven ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={`space-y-6 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-text">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-terinary text-secondary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-reviewLogo text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text">
                  Key Features
                </h3>
                <ul className="space-y-2 text-reviewLogo">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-secondary text-primary rounded-full font-semibold hover:bg-secondaryGreen transition-colors duration-300"
                >
                  View Live Project
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      description:
        "A complete overhaul of an existing e-commerce platform, focusing on user experience and conversion optimization. The project involved rebuilding the entire frontend architecture and implementing a new design system.",
      image: "/api/placeholder/1200/800",
      tags: ["React", "Node.js", "MongoDB", "AWS", "Redux"],
      features: [
        "Custom-built shopping cart with real-time updates",
        "Advanced product filtering and search functionality",
        "Integrated payment gateway with multiple payment options",
        "Responsive design with mobile-first approach",
        "Admin dashboard for inventory management",
      ],
      link: "#",
    },
    {
      title: "Financial Analytics Dashboard",
      description:
        "A sophisticated financial dashboard designed for investment professionals, providing real-time market data analysis and portfolio management tools. The platform processes millions of data points to deliver actionable insights.",
      image: "/api/placeholder/1200/800",
      tags: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "WebSocket"],
      features: [
        "Real-time data visualization with interactive charts",
        "Custom analytics tools for market analysis",
        "Automated report generation system",
        "Multi-factor authentication system",
        "Real-time alerts and notifications",
      ],
      link: "#",
    },
  ];

  return (
    <div className="relative bg-primary w-screen flex items-center flex-col gap-8 overflow-scroll">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen w-full flex flex-col items-center justify-center"
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 text-center"
        >
          Our <span className="text-secondary">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-reviewLogo text-lg md:text-xl max-w-3xl mx-auto px-4 text-center"
        >
          Discover our portfolio of innovative web solutions that have helped
          businesses transform their digital presence
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 animate-bounce"
        >
          <div className="text-secondary text-sm">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-secondary rounded-full mx-auto mt-2 relative">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full absolute left-1/2 top-2 transform -translate-x-1/2" />
          </div>
        </motion.div>
      </motion.div>

      {/* Projects Container */}
      <div className="w-full">
        {projects.map((project, index) => (
          <ProjectSection
            key={index}
            project={project}
            isEven={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
