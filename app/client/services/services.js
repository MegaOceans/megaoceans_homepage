import ServiceBar from "./servicesBar/servicesBar";

export default function Services() {
  return (
    <div className="w-view text-white flex flex-col items-center gap-12">
      <p className="text-5xl font-extrabold text-center">Our Services</p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <ServiceBar
          number={"01"}
          heading={"Webflow Development"}
          array={[
            "Webflow Site",
            "Webflow CMS Integration",
            "Webflow Migration",
            "Webflow Membership Site",
          ]}
        />
        <ServiceBar
          number={"02"}
          heading={"UI/UX Design"}
          array={[
            "UI Wireframes",
            "Prototyping",
            "User Research",
            "Interaction Design",
          ]}
        />
        <ServiceBar
          number={"03"}
          heading={"Custom Development"}
          array={[
            "Custom Websites",
            "Mobile Applications",
            "API Integration",
            "E-commerce Solutions",
          ]}
        />
        <ServiceBar
          number={"04"}
          heading={"SEO & Marketing"}
          array={[
            "SEO Optimization",
            "Content Marketing",
            "Social Media Management",
            "Pay-Per-Click Campaigns",
          ]}
        />
        <ServiceBar
          number={"05"}
          heading={"Consulting Services"}
          array={[
            "Business Strategy",
            "Technology Consulting",
            "Performance Analysis",
            "Workshops",
          ]}
        />
      </div>
    </div>
  );
}
