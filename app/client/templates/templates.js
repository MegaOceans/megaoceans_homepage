import Image from "next/image";
import newImage from "@/app/assets/img1.png";

export default function Templates() {
  return (
    <div className="w-full flex flex-col items-center gap-12 text-white">
      <p className="text-5xl font-extrabold">Recent Works</p>
      <div className="flex items-center gap-6 flex-wrap h-[800px] w-[800px] relative">
        <Image
          src={newImage}
          alt="Description of img"
          objectFit="cover"
          layout="intrinsic"
        />
      </div>
    </div>
  );
}
