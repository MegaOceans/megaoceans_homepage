import { GoArrowUpRight } from "react-icons/go";

export default function ServiceBar({ number, heading, array }) {
  return (
    <div className="w-full max-w-lg h-auto rounded-3xl bg-terinary p-6 flex flex-col items-start justify-between group   hover:cursor-pointer transition-colors duration-500">
      <p className="text-2xl font-semibold mb-2 group-hover:text-secondary">
        {number}
      </p>
      <p className="text-3xl font-bold leading-tight group-hover:text-secondary">
        {heading}
      </p>
      <div className="flex flex-col items-start gap-2 mt-4">
        {array.map((item, index) => (
          <p
            key={index}
            className="text-lg font-poiret text-blue-100 group-hover:text-secondary"
          >
            {item}
          </p>
        ))}
      </div>
      <div className="w-full flex flex-row-reverse mt-4">
        <GoArrowUpRight
          size={40} // Adjusted icon size
          style={{
            strokeWidth: "1", // Icon stroke width
            fill: "white", // Icon color
            stroke: "white", // Ensure stroke matches fill
          }}
        />
      </div>
    </div>
  );
}
