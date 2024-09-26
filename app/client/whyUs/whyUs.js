import WhyUsBar from "./whyUsBar/whyUsBar";

export default function WhyUs() {
  return (
    <div className="w-testimonial flex flex-col items-center gap-12 text-white">
      <p className="text-5xl font-extrabold">Why Us</p>
      <div className="w-full flex items-center gap-8 flex-wrap">
        <WhyUsBar />
      </div>
      <div></div>
    </div>
  );
}
