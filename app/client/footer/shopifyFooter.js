import Link from "./link.js/link";

export default function ShopifyFooter() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-terinary">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* Logo */}
          <p className="text-white text-2xl  font-medium w-full lg:min-w-48 text-center lg:text-left lg:mr-12">
            Mega Oceans
          </p>

          {/* Footer Links Container */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            {/* Products Column */}
            <div className="flex flex-col items-center sm:items-start text-white gap-4 sm:gap-6">
              <p className="text-xl sm:text-2xl font-bold">Products</p>
              <div className="flex flex-col items-center sm:items-start gap-2 text-base font-medium">
                <Link title="Figma Devchecklist" />
                <Link title="ZeroCostLogo" />
                <Link title="Webflow Checklist" />
                <Link title="Webflow Templates" />
              </div>
            </div>

            {/* Links Column */}
            <div className="flex flex-col items-center sm:items-start text-white gap-4 sm:gap-6">
              <p className="text-xl sm:text-2xl font-bold">Links</p>
              <div className="flex flex-col items-center sm:items-start gap-2 text-base font-medium">
                <Link title="About" link="" />
                <Link title="Showcase" link="" />
                <Link title="Contact" link="" />
                <Link title="Privacy Policies" link="/privacy" />
              </div>
            </div>

            {/* Social Column */}
            <div className="flex flex-col items-center sm:items-start text-white gap-4 sm:gap-6">
              <p className="text-xl sm:text-2xl font-bold">Social</p>
              <div className="flex flex-col items-center sm:items-start gap-2 text-base font-medium">
                <Link title="Facebook" />
                <Link title="Twitter" />
                <Link title="Linkedin" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-4 w-full mt-12 pt-8 border-t border-gray-700">
          <p className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-footer  font-bold text-center">
            Mega Oceans
          </p>
          <p className="text-white text-sm lg:text-xl font-semibold text-center">
            © 2025 All rights reserved | Mega Oceans
          </p>
        </div>
      </div>
    </div>
  );
}
