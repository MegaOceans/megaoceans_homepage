import Form from "./form";
import Social from "../../client/contactUs/socialContact";

export default function ContactUs() {
  return (
    <div className="w-contactMain flex flex-col items-center gap-12 text-white">
      <p className="text-5xl font-extrabold">Contact Us</p>
      <div className="w-full flex items-start gap-4">
        <Social />
        <Form />
      </div>
    </div>
  );
}
