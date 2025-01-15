import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

export default function Price({
  bg,
  text,
  type,
  price,
  icon,
  description,
  features,
  services,
  iconColor,
}) {
  return (
    <div
      className={`w-full max-w-lg h-auto bg-${bg} rounded-3xl p-8 flex flex-col items-center text-${text} justify-between`}
    >
      {/* Top icon, type, and price section */}
      <div className="flex flex-col items-center mb-6 gap-2">
        <div className="mb-4">{icon}</div>
        <p className="text-3xl font-bold">{type}</p>
        <p className="text-4xl font-bold">
          {price}
          <span className="text-2xl font-semibold">/month</span>
        </p>
      </div>

      {/* Heading */}
      <div className="w-full text-left mb-6">
        <p className="text-lg font-light">{description}</p>
      </div>

      {/* Features list */}
      <div className="w-full text-left flex flex-col items-start gap-2 mb-6">
        <p className="text-xl font-bold mb-2">Features:</p>
        <div className="flex flex-col gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaRegCheckCircle className={`text-${iconColor}`} />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services list */}
      <div className="w-full text-left mb-6">
        <p className="text-lg font-semibold mb-2">Services:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaCheckCircle className={`text-${iconColor}`} />
              <p>{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Get Started button */}
      <button
        className="bg-white text-primary font-semibold py-3 px-6 rounded-lg mt-auto 
                   hover:bg-terinary hover:text-white 
                   transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
}
