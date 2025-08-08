import { FaUsersSlash } from "react-icons/fa6";

export default function WhyMegaoceans() {
  const features = [
    "Audience-Centric Custom Design",
    "Enhanced UX/UI Design",
    "Custom Features and Integrations",
    "Advanced SEO and Performance Optimization",
    "Comprehensive Post-Launch Support",
    "Transparent and Regular Communication",
    "Professional Project Management",
  ];

  return (
    <section className="bg-terinary py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-secondary mb-4">Why MegaOceans?</h2>
        <p className="text-white max-w-2xl mx-auto">
          For you as a brand, we are a <strong className="text-secondary">Shopify website design company</strong> that excels in
          creating digital shopping experiences tailored as per your requirements.
        </p>
      </div>

      <div className="">
        <div className="max-w-7xl mx-auto w-full">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left text-gray-800 text-sm sm:text-base">
                <th className="w-1/2 p-4"></th>
                <th className="text-center w-1/4 p-4">
                  <div className="flex flex-col items-center">
                    <img src="" alt="MegaOceans" className="h-10 mb-2" />
                    <span className="font-semibold text-white">MegaOceans</span>
                  </div>
                </th>
                <th className="text-center w-1/4 p-4">
                  <div className="flex flex-col items-center">
                    <FaUsersSlash className="w-10 h-10 mb-4" style={{ color: "white" }} />
                    <span className="font-semibold text-white">Others</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-primary" : "bg-transparent"
                  } `}
                >
                  <td className="p-5 font-medium text-white text-sm lg:text-lg align-middle min-h-[64px]">{feature}</td>
                  <td className="text-center p-5 align-middle">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="green" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </td>
                  <td className="text-center p-5 align-middle">
                    <span className="inline-flex items-center justify-center w-8 h-8">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="red" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
