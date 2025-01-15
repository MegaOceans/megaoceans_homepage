import Input from "./input";

export default function Form() {
  return (
    <div className="w-full lg:w-form rounded-3xl h-auto bg-terinary flex p-8 flex-col items-start gap-6">
      <p className="text-text text-xl font-medium">Got a project in Mind?</p>
      <p className="text-text text-4xl lg:text-6xl font-bold">
        Let’s Discuss The Details
      </p>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-col sm:flex-row sm:gap-4">
          <Input label="Name" placeholder="Enter Name" />
          <Input label="Company Name" placeholder="Enter Company Name" />
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:gap-4">
          <Input label="Email" placeholder="Enter Email ID" />
          <Input label="Company Email" placeholder="Enter Company Email ID" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-base font-semibold text-white">Description</p>
          <textarea className="w-full rounded-xl h-24 p-4"></textarea>
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
