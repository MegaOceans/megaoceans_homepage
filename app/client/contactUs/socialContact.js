import { MdAddCall } from "react-icons/md";
import Image from "next/image";
export default function Social() {
  return (
    <div className="w-full lg:w-contact h-contactUs flex flex-col p-8 items-start justify-between rounded-3xl bg-secondaryGreen">
      <Image
        src={"/aa.png"}
        className="w-24 h-24 rounded-full mb-4"
        alt="Profile"
        width={96}
        height={96}
      />
      <p className="text-black text-4xl font-bold">
        Let&rsquo;s hop on a free call
      </p>
      <p className="text-black text-xl font-normal my-4">
        Your business deserves the very best, and we understand the importance
        of making the right choice. We approach every decision with the same
        care and precision, ensuring you receive the quality and service your
        business truly deserves.
      </p>
      <div className="w-full sm:w-1/2 p-4 flex items-center gap-6 rounded-full bg-primary group cursor-pointer">
        <div className="p-2 bg-white rounded-full group-hover:translate-x-40 duration-500">
          <MdAddCall style={{ fill: "black", width: "15px", height: "15px" }} />
        </div>
        <p className="text-base font-bold text-white">Make a call</p>
      </div>
    </div>
  );
}
