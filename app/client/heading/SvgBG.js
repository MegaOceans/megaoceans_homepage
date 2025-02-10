import React, { useEffect, useState } from "react";

const SvgBG = () => {
  const [scrollYa, setScrollYa] = useState(0);

  useEffect(() => {
    function animateWaves() {
      document.querySelectorAll(".wave").forEach((wave, index) => {
        let speed = 5000 + index * 1000;

        let move = () => {
          wave.animate(
            [
              { transform: `translateX(-50px) scale(${1 + scrollYa / 100})` },
              { transform: `translateX(50px) scale(${1 + scrollYa / 100})` },
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

    const handleScroll = () => {
      setScrollYa(window.scrollY);
    };

    animateWaves();
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYa]);

  return (
    <div className=" absolute left-0 top-0 w-full h-full -z-10">
      <svg id="visual" viewBox="0 0 800 500" className="w-full h-full">
        <rect x="0" y="0" width="900" height="600" fill="#001220"></rect>

        <g
          className="wave"
          style={{
            transform: "translateX(0)",
            transformOrigin: "bottom center",
          }}
        >
          <path
            d="M0 362L18.8 358C37.7 354 75.3 346 112.8 341C150.3 336 187.7 334 225.2 344.5C262.7 355 300.3 378 337.8 366.8C375.3 355.7 412.7 310.3 450.2 308.7C487.7 307 525.3 349 562.8 369C600.3 389 637.7 387 675.2 371.2C712.7 355.3 750.3 325.7 787.8 319.7C825.3 313.7 862.7 331.3 881.3 340.2L1300 349L1300 601L0 601Z"
            fill="#151c65"
            transform="translate(-200,0)"
          ></path>
        </g>

        <g
          className="wave"
          style={{
            transform: "translateX(0)",
            transformOrigin: "bottom center",
          }}
        >
          <path
            d="M0 366L18.8 375.7C37.7 385.3 75.3 404.7 112.8 398.3C150.3 392 187.7 360 225.2 358.3C262.7 356.7 300.3 385.3 337.8 395.5C375.3 405.7 412.7 397.3 450.2 393.3C487.7 389.3 525.3 389.7 562.8 394.8C600.3 400 637.7 410 675.2 413.8C712.7 417.7 750.3 415.3 787.8 414.2C825.3 413 862.7 413 881.3 413L1300 413L1300 601L0 601Z"
            fill="#0f1957"
            transform="translate(-200,0)"
          ></path>
        </g>

        <g
          className="wave"
          style={{
            transform: "translateX(0)",
            transformOrigin: "bottom center",
          }}
        >
          <path
            d="M0 458L18.8 454C37.7 450 75.3 442 112.8 430.5C150.3 419 187.7 404 225.2 408.7C262.7 413.3 300.3 437.7 337.8 445.5C375.3 453.3 412.7 444.7 450.2 446.5C487.7 448.3 525.3 460.7 562.8 463.3C600.3 466 637.7 459 675.2 410.8C712.7 365.7 750.3 375.3 787.8 398.8C825.3 425.3 862.7 430.7 881.3 436.8L1300 447L1300 471L0 601Z"
            fill="#0b1649"
            transform="translate(-200,0)"
          ></path>
        </g>

        <g
          className="wave"
          style={{
            transform: "translateX(0)",
            transformOrigin: "bottom center",
          }}
        >
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
    </div>
  );
};

export default SvgBG;
