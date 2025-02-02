import Image from "next/image";
import React from "react";

const Review = ({ review }) => {
  const defaultImage = "/assets/user-icon.png";
  return (
    <div className="relative w-full lg:w-[1024px] flex flex-col lg:flex-row rounded-xl lg:rounded-3xl bg-terinary overflow-visible">
      <div className="w-full lg:w-1/2 relative overflow-visible lg:max-h-[400px]">
        <div className="relative w-1/2 min-w-[300px] max-w-[300px] min-h-[490px] lg:absolute lg:left-24 lg:right-24 lg:-top-24 lg:-bottom-24 z-50 mx-auto py-10">
          <Image
            src={review.image}
            alt="phone image"
            layout="fill"
            className="z-50"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-10 lg:p-4 z-20 relative flex gap-10 flex-col">
        <p className="text-reviewLogo text-lg font-medium ">{review.company}</p>
        <p className="text-white text-2xl font-semibold ">{review.title}</p>
        <p className="text-white text-sm font-medium text-justify">
          {review.desc}
        </p>
        <div className="flex items-center gap-6 w-full h-12 ">
          <Image
            src={review.profile || defaultImage}
            alt={"Client Image"}
            className="w-12 h-12 rounded-full"
            width={48}
            height={48}
          />
          <div className="flex items-start flex-col justify-between">
            <p className="text-white text-base font-semibold text-justify">
              {review.name}
            </p>
            <p className="text-white text-lg font-light text-justify">
              {review.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
