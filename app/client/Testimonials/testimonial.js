import Review from "./review/review";

export default function Testimonials() {
  return (
    <div className="w-testimonial flex flex-col items-center gap-12 text-white">
      <p className="text-5xl font-extrabold">Testimonial</p>
      <div className="w-full flex flex-wrap items-center gap-8 ">
        <Review
          company={"SmartGrowth Solutions"}
          title={"Streamlined Mobile App Development Delivered On Time"}
          desc={
            "We needed a sleek, user-friendly mobile app for our client base, and they delivered beyond our expectations. The team was professional, innovative, and made the entire process seamless. The app is fast, visually appealing, and a hit with our users!"
          }
          name={"Eva de Vries"}
        />
        <Review
          company={"BrightWave Digital"}
          title={"Transforming Our Website Experience"}
          desc={
            "Our outdated website was holding us back, but this team turned it into a modern, responsive platform. The site now loads faster, looks amazing, and has improved user retention by 40%. Their expertise in website development is top-notch!"
          }
          name={"James Peterson"}
        />
        <Review
          company={"LoopAI Connect"}
          title={"AI Chat Integration That’s Changing the Game"}
          desc={
            "Integrating AI into our web-based chat was a daunting task, but this team made it look easy. The chatbot is intelligent, responsive, and significantly improved customer satisfaction. It's like having an extra team member working 24/7!"
          }
          name={"Sarah Collins"}
        />
        <Review
          company={"AgileHub Systems"}
          title={"Reliable Server Management and Backend Development"}
          desc={
            "As our business scaled, our backend infrastructure couldn’t keep up. They restructured everything, ensuring smooth operations and zero downtime. Their server management services are outstanding, and now our system is more robust than ever."
          }
          name={"Liam Carter"}
        />
        <Review
          company={"PixelEdge Creations"}
          title={"Custom Web and Mobile App Solutions Done Right"}
          desc={
            "We had complex requirements for a web and mobile app ecosystem, and they executed it flawlessly. The integration between both platforms is seamless, and the design perfectly reflects our brand. We couldn’t be happier!"
          }
          name={"Olivia Turner"}
        />
      </div>
    </div>
  );
}
