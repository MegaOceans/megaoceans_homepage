"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Navbar from "../client/navbar/navbar";

const images = [
  "/assets/templates/img1.png",
  "/assets/templates/easyformations.jpeg",
  "/assets/templates/easyformations2.jpeg",
  "/assets/templates/mob-app.png",
];

const ProjectSection = ({ project, isEven }) => {
  const sectionRef = useRef(null);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col gap-12 ${
            isEven ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Auto Scrolling Image Section */}
          <motion.div
            className="w-full md:w-1/2 relative  overflow-hidden rounded-xl"
            initial={{ x: isEven ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute w-full flex flex-col gap-4"
              animate={{ y: ["0%", "-100%"] }}
              transition={{
                duration: 100,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {project.image.map((img, index) => (
                <div
                  key={index}
                  className="relative min-h-[500px] aspect-auto mx-10"
                >
                  <Image
                    src={img}
                    alt={`Project Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              ))}
            </motion.div>
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

              <p className="text-reviewLogo text-lg leading-relaxed text-justify">
                {project.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text">
                  Key Features
                </h3>
                <ul className="space-y-2 text-reviewLogo text-justify">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
      title: "Clio AI",
      description:
        "Elevate your financial journey with our intelligent chat app. Get instant insights into your portfolio's performance with simple questions. Effortlessly track asset allocation, analyze trends, and make informed decisions. This intuitive tool empowers you to manage your investments directly, offering a seamless and secure experience. Stay connected to your financial health anytime, anywhere. Experience the power of AI-driven portfolio management at your fingertips.",
      image: [
        "/assets/templates/clioAI.png",
        "/assets/templates/clio-ai-1.png",
        "/assets/templates/clioAI.png",
        "/assets/templates/clio-ai-1.png",
        "/assets/templates/clioAI.png",
        "/assets/templates/clio-ai-1.png",
      ],
      tags: [
        "React",
        "Python",
        "Django",
        "OpenAI",
        "FinanceAPI",
        "Postgres",
        "AWS",
        "Redux",
      ],
      features: [
        "Intelligent Chat Interface: Get instant answers to your financial queries and real-time portfolio updates through a simple, conversational chat.",
        "Comprehensive Portfolio Overview: Access a clear and detailed breakdown of your holdings, asset allocation, and overall performance at a glance.",
        "Direct Portfolio Management: Execute trades, rebalance your portfolio, and manage your investments directly within the secure app environment.",
        "Personalized Financial Insights: Receive AI-powered analysis and tailored insights to help you understand market trends and optimize your investment strategy.",
        "Secure and Accessible Anytime: Your financial data is protected with robust security measures, allowing you to monitor and manage your portfolio conveniently, 24/7.",
      ],
      link: "#",
    },

    {
      title: "Easyformations",
      description:
        "Launching your dream? EasyFormations streamlines the daunting task of company setup. Our app simplifies document formalities, company registration, and all those crucial initial requirements. But we're more than just startups! We expertly handle GST and income tax filings, plus other essential legal compliance for both new and established businesses. Navigate the complexities with ease, ensuring you're always on track. Let EasyFormations handle the paperwork, so you can focus on building your success.",
      image: [
        "/assets/templates/img1.png",
        "/assets/templates/easyformations.jpeg",
        "/assets/templates/easyformations2.jpeg",
        "/assets/templates/img1.png",
        "/assets/templates/easyformations.jpeg",
        "/assets/templates/easyformations2.jpeg",
        "/assets/templates/img1.png",
        "/assets/templates/easyformations.jpeg",
        "/assets/templates/easyformations2.jpeg",
      ],
      tags: [
        "React",
        "Node.js",
        "Express",
        "Postgres",
        "WebSockets",
        "WhatsappAPI",
        "Payment Gateway",
        "AWS",
        "Redux",
      ],
      features: [
        "Simplified Company Registration: Effortlessly navigate the complexities of new company setup, from document preparation to final registration.",
        "Seamless GST & Tax Filing: Easily manage your GST and income tax obligations, ensuring timely and accurate submissions for new and existing businesses.",
        "Expert Legal Compliance: Stay on top of essential legal requirements and filings beyond taxes, all within a user-friendly interface.",
        "Document Management Hub: Securely store and access all your crucial company documents in one centralized location.",
        "Dedicated Support & Guidance: Receive helpful resources and guidance throughout the formation and compliance processes, ensuring a smooth experience.",
      ],
      link: "#",
    },
    {
      title: "E-Commerce Platform Redesign",
      description:
        "A complete overhaul of an existing e-commerce platform, focusing on user experience and conversion optimization. The project involved rebuilding the entire frontend architecture and implementing a new design system.",
      image: [
        "/assets/templates/img1.png",
        "/assets/templates/easyformations.jpeg",
        "/assets/templates/easyformations2.jpeg",
        "/assets/templates/mob-app.png",
      ],
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
      image: [
        "/assets/templates/img1.png",
        "/assets/templates/easyformations.jpeg",
        "/assets/templates/easyformations2.jpeg",
        "/assets/templates/mob-app.png",
      ],
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
