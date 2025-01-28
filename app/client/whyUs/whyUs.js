import WhyUsBar from "./whyUsBar/whyUsBar";
import { FaRegHandshake } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { AiOutlineSolution } from "react-icons/ai";
import { GiRibbonShield } from "react-icons/gi";
import { GiTechnoHeart } from "react-icons/gi";
import { FaPeopleArrows } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
export default function WhyUs() {
  return (
    <div className="w-view flex flex-col items-center gap-12 text-white">
      <p className="text-5xl font-extrabold">Why Us</p>
      <div className="w-full flex items-center gap-4 flex-wrap justify-center">
        <WhyUsBar
          heading="Expert Team"
          desc="A highly skilled team of developers, designers, and project managers with expertise across multiple technologies and industries, ensuring top-notch quality and innovative solutions."
          Icon={RiTeamFill}
        />
        <WhyUsBar
          heading="Custom-Tailored Solutions"
          desc="We prioritize understanding your unique business needs, delivering bespoke software that aligns perfectly with your goals and objectives."
          Icon={AiOutlineSolution}
        />
        <WhyUsBar
          heading="Proven Track Record"
          desc="A portfolio of successfully delivered projects with measurable results, demonstrating our ability to meet deadlines, budgets, and expectations consistently."
          Icon={GiRibbonShield}
        />
        <WhyUsBar
          heading="Cutting-Edge Technology"
          desc="Leveraging the latest tools, frameworks, and best practices to create scalable, secure, and future-proof solutions."
          Icon={GiTechnoHeart}
        />
        <WhyUsBar
          heading="Transparent Communication"
          desc="Open and consistent communication throughout the project lifecycle, keeping you updated and engaged at every step."
          Icon={FaPeopleArrows}
        />
        <WhyUsBar
          heading="Cost-Effective Solutions"
          desc="Delivering high-quality work at competitive prices, ensuring you get the best value for your investment."
          Icon={GiTakeMyMoney}
        />
      </div>
      <div></div>
    </div>
  );
}
