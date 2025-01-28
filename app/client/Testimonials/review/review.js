import Image from "next/image";

export default function Review({ company, title, desc, src, name }) {
  const defaultImage = "/assets/user-icon.png";
  return (
    <div className="w-review h-review rounded-3xl bg-terinary px-8 py-10 flex flex-col items-start justify-between">
      <p className="text-reviewLogo text-lg font-medium">{company}</p>
      <p className="text-white text-2xl font-semibold">{title}</p>
      <p className="text-white text-sm font-medium">{desc}</p>
      <div className="flex items-center gap-6 w-full h-12 ">
        <Image
          src={src || defaultImage}
          alt={"Client Image"}
          className="w-12 h-12 rounded-full"
          width={48}
          height={48}
        />
        <div className="flex items-start flex-col justify-between">
          <p className="text-white text-base font-semibold">{name}</p>
          <p className="text-white text-lg font-light">{company}</p>
        </div>
      </div>
    </div>
  );
}
