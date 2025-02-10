import React from "react";
import ReviewCarousel from "./ReviewCarousel";
const MainTestimonial = () => {
  const reviews = [
    {
      company: "Quick Fix",
      title: "Effortless Service Booking at Our Fingertips",
      desc: "We needed an intuitive app that could seamlessly connect users with service providers, and they nailed it. The team was responsive, skilled, and truly understood our vision. Our app is fast, reliable, and has significantly boosted our user engagement!",
      name: "Michael Carter",
      image: "/assets/templates/mob-app-single.png",
    },
    {
      company: "Lotto Power",
      title: "A Smooth and Secure Lottery Experience",
      desc: "Our users demanded a secure, user-friendly way to play Powerball, and this team delivered exactly that. The app is sleek, efficient, and built with top-tier security features. We've seen a surge in engagement thanks to their expertise!",
      name: "Amit Patel",
      image: "/assets/templates/mob-app-single1.png",
    },
    {
      company: "Fate n Fortune",
      title: "Bringing Astrology to the Digital Age",
      desc: "They transformed our astrology service into a beautifully designed, feature-rich app that customers love. The user experience is flawless, and the real-time predictions are seamless. Their team made the entire process smooth and stress-free!",
      name: "Tanya Sharma",
      image: "/assets/templates/mob-app-single2.png",
    },
    {
      company: "Easy Formations",
      title: "Hassle-Free Company Registration Made Simple",
      desc: "We wanted an app that made company formation quick and effortless, and they delivered exactly that. The platform is intuitive, fast, and has automated many of our processes. Our clients love the convenience it offers!",
      name: "Keshav",
      image: "/assets/templates/mob-app-single3.png",
    },
    {
      company: "Easy Planners",
      title: "Revolutionizing Event Planning with Seamless Tech",
      desc: "Planning weddings and events has never been easier! Their team built an outstanding app that helps users plan every detail effortlessly. The UI is stunning, the performance is smooth, and our users keep raving about it!",
      name: "Isabella Martinez",
      image: "/assets/templates/mob-app-single4.png",
    },
  ];
  return (
    <div className="w-full relative flex flex-col items-center gap-36 overflow-visible bg-primary">
      <p className="text-5xl text-white font-extrabold">Testimonial</p>
      <ReviewCarousel reviews={reviews} />
    </div>
  );
};

export default MainTestimonial;
