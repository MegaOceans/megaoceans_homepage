export default function WhyUsBar({ Icon, heading, desc }) {
  return (
    <div className="w-whyUs h-whyUs rounded-3xl bg-terinary flex flex-col items-start justify-between text-white px-10 py-8  ">
      <Icon style={{ height: "50px", width: "50px", fill: "#2CEE91" }} />
      <p className="text-2xl font-bold mt-2">{heading}</p>
      <p className="text-lg font-medium mt-2">{desc}</p>
    </div>
  );
}
