import ServiceBar from "./servicesBar/servicesBar";

export default function Services() {
  return (
    <div className="w-view text-white flex flex-col items-center gap-12">
      <p className="text-5xl font-extrabold">Our Services</p>

      <div className="w-full flex items-start gap-4 flex-wrap justify-center">
        <ServiceBar
          number={"01"}
          heading={"Webflow Development"}
          array={[
            "Webflow Site",
            "Webflow CMS Integration",
            "Webflow Migration",
            "Webflow Membership Site",
          ]}
        />
        <ServiceBar
          number={"02"}
          heading={"UI/UX Design"}
          array={[
            "Webflow Site",
            "Webflow CMS Integration",
            "Webflow Migration",
            "Webflow Membership Site",
          ]}
        />
        <ServiceBar
          number={"01"}
          heading={"Webflow Development"}
          array={[
            "Webflow Site",
            "Webflow CMS Integration",
            "Webflow Migration",
            "Webflow Membership Site",
          ]}
        />
        <ServiceBar
          number={"02"}
          heading={"UI/UX Design"}
          array={[
            "Webflow Site",
            "Webflow CMS Integration",
            "Webflow Migration",
            "Webflow Membership Site",
          ]}
        />
        <ServiceBar
          number={"02"}
          heading={"UI/UX Design"}
          array={[
            "Webflow Site",
            "Webflow CMS Integration",
            "Webflow Migration",
            "Webflow Membership Site",
          ]}
        />
        <ServiceBar
          number={"01"}
          heading={"Webflow Development"}
          array={[
            "Webflow Site",
            "Webflow CMS Integration",
            "Webflow Migration",
            "Webflow Membership Site",
          ]}
        />
      </div>
    </div>
  );
}
