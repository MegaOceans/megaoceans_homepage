import WhyUsBar from "./whyUsBar/whyUsBar";
import { FaRegHandshake } from "react-icons/fa";
export default function WhyUs() {
  return (
    <div className="w-view flex flex-col items-center gap-12 text-white">
      <p className="text-5xl font-extrabold">Why Us</p>
      <div className="w-full flex items-center gap-4 flex-wrap justify-center">
        <WhyUsBar
          heading="Your Webflow Partner"
          desc="Beyond mere developers, we stand as your growth partners. Our relentless drive stems from your objectives, propelling us to achieve collective greatness."
          Icon={FaRegHandshake}
        />
        <WhyUsBar
          heading="Your Webflow Partner"
          desc="Beyond mere developers, we stand as your growth partners. Our relentless drive stems from your objectives, propelling us to achieve collective greatness."
          Icon={FaRegHandshake}
        />
        <WhyUsBar
          heading="Your Webflow Partner"
          desc="Beyond mere developers, we stand as your growth partners. Our relentless drive stems from your objectives, propelling us to achieve collective greatness."
          Icon={FaRegHandshake}
        />
        <WhyUsBar
          heading="Your Webflow Partner"
          desc="Beyond mere developers, we stand as your growth partners. Our relentless drive stems from your objectives, propelling us to achieve collective greatness."
          Icon={FaRegHandshake}
        />
        <WhyUsBar
          heading="Your Webflow Partner"
          desc="Beyond mere developers, we stand as your growth partners. Our relentless drive stems from your objectives, propelling us to achieve collective greatness."
          Icon={FaRegHandshake}
        />
      </div>
      <div></div>
    </div>
  );
}
