import Image from "next/legacy/image";
// import newImage from "@/app/assets/img1.png";
// import easyformationsImage from "@/app/assets/easyformations.jpeg";
// import easyformationsImage2 from "@/app/assets/easyformations2.jpeg";
import Carousel from "./ImageCorousal";
export default function Templates() {
  const images = [
    "/assets/templates/img1.png",
    "/assets/templates/easyformations.png",
    "/assets/templates/easyformations2.jpeg",
    "/assets/templates/mob-app.png",
  ];
  return (
    <section className="w-full bg-primary py-16 flex flex-col items-center gap-12 text-white" aria-labelledby="work-heading">
      <h2 id="work-heading" className="text-5xl font-extrabold">Recent Software Projects</h2>
      <div className="flex items-center gap-6 flex-wrap h-[auto] w-[auto] relative">
        <Carousel images={images} />
      </div>
    </section>
  );
}
