export default function WhyUsBar({ Icon, heading, desc }) {
  return (
    <div className="w-whyUs h-whyUs rounded-3xl bg-terinary flex flex-col items-start text-white px-10 py-8 group hover:scale-105 duration-300">
      <Icon
        style={{ height: "75px", width: "75px", fill: "#2CEE91" }}
        className="group-hover:scale-110 duration-500"
      />
      <p className="text-2xl font-bold mt-2">{heading}</p>
      <p className="text-lg font-poiret text-blue-100 mt-2">{desc}</p>
    </div>
  );
}
