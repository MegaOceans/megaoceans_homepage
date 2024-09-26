import Review from "./review/review";

export default function Testimonials() {
  return (
    <div className="w-testimonial flex flex-col items-center gap-12 text-white">
      <p className="text-5xl font-extrabold">Testimonial</p>
      <div className="w-full flex flex-wrap items-center gap-8 ">
        <Review
          company={"Easy Formations"}
          title={"Presicion & Quality"}
          desc={
            "Choosing ideapeel meant a professionally crafted digital presence, clear communication, and Webflow insights, all matched to our budget."
          }
          name={"Lars van der Wal"}
        />
        <Review
          company={"Easy Formations"}
          title={"Presicion & Quality"}
          desc={
            "Choosing ideapeel meant a professionally crafted digital presence, clear communication, and Webflow insights, all matched to our budget."
          }
          name={"Lars van der Wal"}
        />
        <Review
          company={"Easy Formations"}
          title={"Presicion & Quality"}
          desc={
            "Choosing ideapeel meant a professionally crafted digital presence, clear communication, and Webflow insights, all matched to our budget."
          }
          name={"Lars van der Wal"}
        />
      </div>
    </div>
  );
}
