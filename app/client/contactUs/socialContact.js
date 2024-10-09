import { MdAddCall } from "react-icons/md";
export default function Social() {
  return (
    <div className="w-contact h-contactUs flex flex-col p-8 items-start justify-between rounded-3xl bg-secondaryGreen ">
      <img src="" className="w-24 h-24 rounded-full" />
      <p className="text-black text-4xl font-bold">Let's hop on a free call</p>
      <p className="text-black text-xl font-normal">
        We understand your business deserves the best, so you're cautious about
        your choice. We would be too.
      </p>
      <div className="w-2/3 p-4 flex items-center gap-6 rounded-full bg-primary">
        <div className="p-2 bg-white rounded-full">
          {" "}
          <MdAddCall style={{ fill: "black", width: "15px", height: "15px" }} />
        </div>

        <p className="text-base font-bold text-white">080-00000000</p>
      </div>
    </div>
  );
}
