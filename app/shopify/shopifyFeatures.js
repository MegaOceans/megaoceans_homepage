import React, { useEffect, useState, useRef } from "react";

export default function ShopifyFeatures() {
  const features = [
    { id: "1", title: "Ease of Use", description: "User-friendly and highly intuitive with drag-and-drop" },
    { id: "2", title: "Affordable Pricing", description: "Flexible pricing according to your budgets" },
    { id: "3", title: "Accessible Integrations", description: "Sorted access to App integrations for great functionality" },
    { id: "4", title: "Secure and Reliable", description: "Foolproof security and high reliability for the best results" },
    { id: "5", title: "Fully Customizable", description: "Mobile-responsive professional themes to personalize look and feel" },
    { id: "6", title: "Secure Payment Process", description: "Easy integration with Shopify Payments and third-party payment platforms." },
    { id: "7", title: "Inventory Management", description: "Inventory tracking updates in real-time for easy stock management." },
    { id: "8", title: "Cross-channel Selling", description: "Sell on multiple channels like Facebook & Amazon from a single dashboard." },
    { id: "9", title: "Cart Recovery Features", description: "Automated reminders on customer mail to recover abandoned carts." },
    { id: "10", title: "Analytics and Reporting", description: "Organized dashboards and reports to track behavior and make decisions." },
    { id: "11", title: "Application Integrations", description: "Access third-party tools for accounting, support, and more via Shopify App Store." },
    { id: "12", title: "High Scalability", description: "Adaptable to growth, from small businesses to significant online brands." },
  ];

  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isHoveringFeatures, setIsHoveringFeatures] = useState(false);

  // Detect if section is fully at the top
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setIsFixed(rect.top <= 0 && rect.bottom > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll features only when hovering over features panel
  useEffect(() => {
    const featurePanel = scrollRef.current;
    if (!featurePanel) return;

    const handleWheel = (e) => {
      if (!isFixed || !isHoveringFeatures) return; // only scroll if section is fixed AND hovering features
      const atTop = featurePanel.scrollTop <= 0;
      const atBottom = featurePanel.scrollTop + featurePanel.clientHeight >= featurePanel.scrollHeight;

      // Allow scrolling features panel
      if ((!atTop && e.deltaY < 0) || (!atBottom && e.deltaY > 0)) {
        e.preventDefault();
        featurePanel.scrollTop += e.deltaY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isFixed, isHoveringFeatures]);

  return (
    <section
      id="features-section"
      ref={sectionRef}
      className={`w-full h-screen bg-primary relative`}
    >
      <div className="max-w-7xl mx-auto h-full flex">
        {/* Left Content */}
        <div
          className={`hidden lg:flex flex-col justify-start w-1/2 px-10 ${
            isFixed ? "fixed left-0 top-0 h-screen" : "relative"
          }`}
        >
          <div className="pt-16">
            <h2 className="text-4xl font-bold text-secondary leading-snug">
              Easy and Powerful Features, <br />
              Integrated by the Best Shopify Development Company
            </h2>
            <p className="mt-6 text-lg text-white leading-relaxed">
              There’s more than meets the eye when it comes to Ecommerce websites
              making the right impact and conversions. With{" "}
              <span className="font-semibold text-secondary">Pix Brand’s Shopify development services,</span>{" "}
              you get to make the most of Shopify’s brilliant features with our
              reputation of creative thinkers that amalgamate functionality with
              design like nobody else.
            </p>
            <button
  type="submit"
  className="group  bg-secondary text-black px-6 py-2 mt-8 rounded-full text-lg font-semibold hover:bg-secondaryGreen transition duration-300 flex items-center gap-2
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
        </div>

        {/* Right Scrollable Features */}
        <div
          ref={scrollRef}
          className="w-full lg:w-1/2 h-full overflow-y-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsHoveringFeatures(true)}
          onMouseLeave={() => setIsHoveringFeatures(false)}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-terinary rounded-xl p-6 shadow-sm border border-gray-200"
            >
              <span className="text-secondary font-semibold">{feature.id}.</span>
              <h3 className="mt-2 text-lg text-secondary font-bold">{feature.title}</h3>
              <p className="mt-2 text-white text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
