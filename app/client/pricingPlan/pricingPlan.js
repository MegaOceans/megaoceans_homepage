import Price from "./price";
import { FaUser, FaBusinessTime, FaGift } from "react-icons/fa";

export default function PricingPlan() {
  return (
    <div className="w-view flex flex-col items-center gap-12 text-white">
      <p className="text-5xl font-extrabold">Pricing Plan</p>
      <div className="w-full flex items-start gap-8 justify-between">
        <Price
          text="black"
          bg="secondaryGreen"
          type="Free"
          price="$0"
          icon={<FaGift className="text-primary" size={30} />}
          description="Perfect for individuals trying out our services."
          features={["Basic design tools", "1 project", "Community support"]}
          services={["Standard templates", "Basic analytics"]}
          iconColor="primary"
        />
        <Price
          text="white"
          bg="primary"
          type="Business"
          price="$29.99"
          icon={<FaBusinessTime className="text-white" size={30} />}
          description="Best for businesses needing full support."
          features={[
            "All design tools",
            "Unlimited projects and teams",
            "24/7 priority support",
            "Dedicated account manager",
          ]}
          services={[
            "Custom branding",
            "Advanced analytics",
            "API integration",
            "Custom solutions",
          ]}
          iconColor="secondary"
        />
        <Price
          text="black"
          bg="secondary"
          type="Individual"
          price="$9.99"
          icon={<FaUser className="text-black" size={30} />}
          description="Ideal for freelancers and small projects."
          features={[
            "Advanced design tools",
            "Unlimited projects",
            "Email support",
            "24/7 priority support",
          ]}
          services={["Custom templates", "In-depth analytics"]}
          iconColor="primary"
        />
      </div>
    </div>
  );
}
