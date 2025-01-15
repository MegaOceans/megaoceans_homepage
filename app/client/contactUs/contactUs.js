import Form from "./form";
import Social from "./socialContact";

export default function ContactUs() {
  return (
    <div className="w-contactMain flex flex-col items-center gap-12 text-white">
      {/* Title */}
      <p className="text-5xl font-extrabold text-center">Contact Us</p>

      {/* Responsive layout for Social and Form */}
      <div className="w-full flex flex-col lg:flex-row items-start gap-8">
        <Social />
        <Form />
      </div>
    </div>
  );
}
