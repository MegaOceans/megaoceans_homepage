"use client";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Heading({ contactUsRef }) {
  const [isHoveredContact, setIsHoveredContact] = useState(false);
  const [isHoveredPortfolio, setIsHoveredPortfolio] = useState(false);
  //const [scrollY, setScrollY] = useState(0);
  var y_parameter = 0;
  const router = useRouter();
  const header = "/waves.svg";

  const handleScrollToContact = () => {
    if (contactUsRef?.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const scrolleffect = document.querySelector(".wave");
    scrolleffect.style.transform = "scale(1+y_parameter, 1+y_parameter)";
  }, [y_parameter]);

  useEffect(() => {
    function animateWaves() {
      document.querySelectorAll(".wave").forEach((wave, index) => {
        let speed = 5000 + index * 1000;
        let move = () => {
          wave.animate(
            [
              { transform: "translateX(-50px)" },
              { transform: "translateX(50px)" },
            ],
            {
              duration: speed,
              iterations: Infinity,
              direction: "alternate",
              easing: "ease-in-out",
            }
          );
        };
        move();
      });
    }
    animateWaves();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      y_parameter = window.scrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate scale based on scroll position
  //const scale = Math.min(1.1, 1 + scrollY * 0.0005);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-36 mt-16 lg:mt-2 py-12 overflow-hidden">
      {/* Background Image Container */}

      <svg id="visual" viewBox="0 0 900 600" width="900" height="600">
        <rect x="0" y="0" width="900" height="600" fill="#001220"></rect>

        <g class="wave" style={{ transform: "translateX(0)" }}>
          <path
            d="M0 362L18.8 358C37.7 354 75.3 346 112.8 341C150.3 336 187.7 334 225.2 344.5C262.7 355 300.3 378 337.8 366.8C375.3 355.7 412.7 310.3 450.2 308.7C487.7 307 525.3 349 562.8 369C600.3 389 637.7 387 675.2 371.2C712.7 355.3 750.3 325.7 787.8 319.7C825.3 313.7 862.7 331.3 881.3 340.2L1300 349L1300 601L0 601Z"
            fill="#151c65"
            transform="translate(-200,0)"
          ></path>
        </g>

        <g class="wave" style={{ transform: "translateX(0)" }}>
          <path
            d="M0 366L18.8 375.7C37.7 385.3 75.3 404.7 112.8 398.3C150.3 392 187.7 360 225.2 358.3C262.7 356.7 300.3 385.3 337.8 395.5C375.3 405.7 412.7 397.3 450.2 393.3C487.7 389.3 525.3 389.7 562.8 394.8C600.3 400 637.7 410 675.2 413.8C712.7 417.7 750.3 415.3 787.8 414.2C825.3 413 862.7 413 881.3 413L1300 413L1300 601L0 601Z"
            fill="#0f1957"
            transform="translate(-200,0)"
          ></path>
        </g>

        <g class="wave" style={{ transform: "translateX(0)" }}>
          <path
            d="M0 458L18.8 454C37.7 450 75.3 442 112.8 430.5C150.3 419 187.7 404 225.2 408.7C262.7 413.3 300.3 437.7 337.8 445.5C375.3 453.3 412.7 444.7 450.2 446.5C487.7 448.3 525.3 460.7 562.8 463.3C600.3 466 637.7 459 675.2 410.8C712.7 365.7 750.3 375.3 787.8 398.8C825.3 425.3 862.7 430.7 881.3 436.8L1300 447L1300 471L0 601Z"
            fill="#0b1649"
            transform="translate(-200,0)"
          ></path>
        </g>

        <g class="wave" style={{ transform: "translateX(0)" }}>
          <path
            d="M0 504L18.8 500.7C37.7 497.3 75.3 490.7 112.8 488.3C150.3 486 187.7 488 225.2 492.3C262.7 496.7 300.3 503.3 337.8 495.3C375.3 487.3 412.7 464.7 450.2 466.2C487.7 467.7 525.3 493.3 562.8 500.8C600.3 508.3 637.7 497.7 675.2 490.2C712.7 482.7 750.3 478.3 787.8 480.2C825.3 482 862.7 490 881.3 494L1300 498L1300 601L0 601Z"
            fill="#09133b"
            transform="translate(-200,0)"
          ></path>
        </g>
        <path
          d="M0 532L18.8 531.7C37.7 531.3 75.3 530.7 112.8 528.3C150.3 526 187.7 522 225.2 523.5C262.7 525 300.3 532 337.8 528.5C375.3 525 412.7 511 450.2 511.7C487.7 512.3 525.3 527.7 562.8 536.8C600.3 546 637.7 549 675.2 548.3C712.7 547.7 750.3 543.3 787.8 535.5C825.3 527.7 862.7 516.3 881.3 510.7L900 505L900 601L881.3 601C862.7 601 825.3 601 787.8 601C750.3 601 712.7 601 675.2 601C637.7 601 600.3 601 562.8 601C525.3 601 487.7 601 450.2 601C412.7 601 375.3 601 337.8 601C300.3 601 262.7 601 225.2 601C187.7 601 150.3 601 112.8 601C75.3 601 37.7 601 18.8 601L0 601Z"
          fill="#0a0d2d"
        ></path>
      </svg>

      {/* Heading Content */}
      <div className="flex flex-col items-center gap-6 py-8">
        <p className="text-4xl text-white font-bold leading-normal">
          <span className="text-secondary italic text-5xl mr-4">Bold</span>
          Designs for Brands That Don&rsquo;t Do
          <span className="text-secondary italic text-5xl ml-4">Boring</span>
        </p>
        <p className="text-lg font-medium text-white max-w-3xl">
          From innovative designs that captivate to seamless functionality that
          performs, experience the Bold Designs difference and elevate your
          brand's presence.
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-6 items-center justify-center mt-8 z-10">
        {/* Contact Us Button */}
        <button
          className="flex items-center gap-6 px-6 py-3 rounded-full bg-secondary text-primary font-bold transition duration-300 hover:bg-white"
          onMouseEnter={() => setIsHoveredContact(true)}
          onMouseLeave={() => setIsHoveredContact(false)}
          onClick={handleScrollToContact}
          aria-label="Contact Us"
        >
          <p className="text-lg hover:text-terinary">Contact Us</p>
          <FaArrowRight
            style={{
              fill: isHoveredContact ? "#343651" : "black",
              transition: "transform 0.3s, fill 0.3s",
              transform: isHoveredContact ? "rotate(-45deg)" : "rotate(0deg)",
            }}
          />
        </button>

        {/* See Portfolio Button */}
        <button
          className="flex items-center gap-6 px-6 py-3 rounded-full bg-white text-primary font-bold transition duration-300 hover:bg-white"
          onMouseEnter={() => setIsHoveredPortfolio(true)}
          onMouseLeave={() => setIsHoveredPortfolio(false)}
          onClick={() => router.push("/projects")}
          aria-label="See Portfolio"
        >
          <p className="text-lg hover:text-terinary">See Portfolio</p>
          <FaArrowRight
            style={{
              fill: isHoveredPortfolio ? "#343651" : "black",
              transition: "transform 0.3s, fill 0.3s",
              transform: isHoveredPortfolio ? "rotate(-45deg)" : "rotate(0deg)",
            }}
          />
        </button>
      </div>
    </div>
  );
}
