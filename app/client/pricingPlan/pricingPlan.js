import Price from "./price";
import { FaUser, FaBusinessTime, FaGift } from "react-icons/fa";

export default function PricingPlan() {
  return (
    <div className="w-view flex flex-col items-center gap-12 text-white">
      {/* Title */}
      <p className="text-5xl font-extrabold">Pricing Plan</p>

      {/* Responsive grid for pricing cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <Price
          text="black"
          bg="secondaryGreen"
          type="Starter"
          price="$30"
          icon={<FaGift className="text-primary" size={30} />}
          description="Perfect for small and simple app of any type."
          features={[
            "Simple UI/UX Design",
            "Basic Functionality",
            "Responsive App Design",
          ]}
          services={[
            "1 year maintainance",
            "Frontend & Backend",
            "Basic API Integration",
            "Bug Fixes & Testing",
          ]}
          iconColor="primary"
        />
        <Price
          text="white"
          bg="primary"
          type="Business"
          price="$90"
          icon={<FaBusinessTime className="text-white" size={30} />}
          description="Best for businesses needing full support."
          features={[
            "All features of Professional",
            "Scalable Architecture",
            "Cloud Integration",
            "High-Security Standards",
            "24/7 priority support",
            "Dedicated account manager",
          ]}
          services={[
            "Enterprise-Grade Development",
            "DevOps & Deployment Support",
            "Continuous Maintenance",
          ]}
          iconColor="secondary"
        />
        <Price
          text="black"
          bg="secondary"
          type="Professional"
          price="$60"
          icon={<FaUser className="text-black" size={30} />}
          description="Ideal for freelancers and small projects."
          features={[
            "All Feature of Starter",
            "Advanced UI/UX Design",
            "Custom Animations",
            "Database Integration",
            "Email support",
            "24/7 priority support",
          ]}
          services={[
            "Full-Stack Development",
            "API & Third-Party Integrations",
            "Performance Optimization",
          ]}
          iconColor="primary"
        />
      </div>
      <div className="w-full bg-gray-200 text-black py-4 px-6 flex flex-col md:flex-row items-center justify-between rounded-lg">
        <p className="text-lg font-medium">Get started today!</p>
        <button className="bg-secondary font-semibold px-6 py-2 rounded-lg mt-3 md:mt-0 hover:bg-primary-dark transition">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
