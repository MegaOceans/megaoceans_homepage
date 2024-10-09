import Input from "./input";

export default function Form() {
  return (
    <div className="w-form rounded-3xl h-contactUs bg-terinary flex p-8 flex-col items-start gap-6">
      <p className="text-text text-xl font-medium">Got a project in Mind?</p>
      <p className="text-text text-6xl font-bold">Let’s Discuss The details</p>
      <div className="w-full  flex flex-col items-center flex-1  gap-6  flex-wrap">
        <div className="w-full flex items-start justify-between ">
          <Input label="Name" placeholder="Enter Name" />
          <Input label="Company Name" placeholder="Enter Company Name" />
        </div>
        <div className="w-full flex items-start justify-between ">
          <Input label="Email" placeholder="Enter Email Id" />
          <Input label="Company Email" placeholder="Enter Company Email ID" />
        </div>
        <div className="w-full flex flex-1 flex-col gap-2  items-start justify-between ">
          <p className="text-base font-semibold text-white">Description</p>
          <input className="w-full flex-1 rounded-xl" />
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="px-8 py-2 bg-secondary rounded-full text-lg font-semibold text-black">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
