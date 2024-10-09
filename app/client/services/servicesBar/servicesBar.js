import { GoArrowUpRight } from "react-icons/go";
export default function ServiceBar({ number, heading, array }) {
  return (
    <div className="w-servicesBar h-servicesBar rounded-3xl bg-terinary p-10 flex flex-col items-start justify-between text-white  hover:text-secondary hover:cursor-pointer transition-colors duration-500">
      <p className="text-2xl font-semibold">{number}</p>
      <p className="text-5xl font-bold leading-tight">{heading}</p>
      <div className="flex flex-col items-start gap-4">
        {array.map((item, index) => (
          <p key={index} className="text-2xl font-semibold">
            {item}
          </p>
        ))}
      </div>
      <div className="w-full flex flex-row-reverse">
        <GoArrowUpRight
          size={50} // Set the icon size using the `size` prop
          style={{
            strokeWidth: "1", // Adjust stroke width to make it appear bolder
            fill: "white", // Color the icon white
            stroke: "white", // Ensure the stroke is white as well
          }}
        />
      </div>
    </div>
  );
}
