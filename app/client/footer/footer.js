import Link from "./link.js/link";

export default function Footer() {
  return (
    <div className="w-view flex flex-col items-center gap-12">
      <div className="flex w-full items-start justify-between">
        <p className="text-white text-2xl font-medium">Mega Oceans</p>
        <div className="flex items-start gap-16">
          <div className="flex flex-col items-start text-white gap-6">
            <p className="text-2xl font-bold">Products</p>
            <div className="flex flex-col items-start gap-2 text-base font-medium">
              <Link link={"Figma Devchecklist"} />
              <Link link={"ZeroCostLogo"} />
              <Link link={"Webflow Checklist"} />
              <Link link={"Webflow Templates"} />
            </div>
          </div>
          <div className="flex flex-col items-start text-white gap-6">
            <p className="text-2xl font-bold">Links</p>
            <div className="flex flex-col items-start gap-2 text-base font-medium">
              <Link link={"About"} />
              <Link link={"Showcase"} />
              <Link link={"Contact"} />
            </div>
          </div>
          <div className="flex flex-col items-start text-white gap-6">
            <p className="text-2xl font-bold">Social</p>
            <div className="flex flex-col items-start gap-2 text-base font-medium">
              <Link link={"Facebook"} />
              <Link link={"Twitter"} />
              <Link link={"Linkdin"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-white text-footer font-bold">Mega Oceans</p>
        <p className="text-white text-lg font-semibold mb-12">
          © 2024 All rights reserved | Mega Oceans
        </p>
      </div>
    </div>
  );
}
