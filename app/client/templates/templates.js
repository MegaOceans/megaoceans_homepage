import Image from "next/image";
// import newImage from "@/app/assets/img1.png";
// import easyformationsImage from "@/app/assets/easyformations.jpeg";
// import easyformationsImage2 from "@/app/assets/easyformations2.jpeg";
import Carousel from "./ImageCorousal";
export default function Templates() {
  const images = [
    "/assets/templates/img1.png",
    "/assets/templates/easyformations.jpeg",
    "/assets/templates/easyformations2.jpeg",
    "/assets/templates/mob-app.png",
  ];
  return (
    <div className="w-full flex flex-col items-center gap-12 text-white">
      <p className="text-5xl font-extrabold">Recent Works</p>
      <div className="flex items-center gap-6 flex-wrap h-[auto] w-[auto] relative">
        <Carousel images={images} />
      </div>
    </div>
  );
}
