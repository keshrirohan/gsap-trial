import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page1 = () => {
  const container = useRef(null);
  const title = useRef(null);

  useGSAP(() => {
    gsap.to(title.current, {
      //   transform: "translateX(-100%)",
      xPercent: -80,
      scale: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        // markers: true,
        delay: 2,
        start: "top 0%",
        end: "top -120%",
        scrub: 1.5,
        pin: true,
      },
    });
  }, []);

  return (
    <div
      ref={container}
      className="w-full overflow-hidden    h-screen flex items-center  bg-[#FFE4E1]"
    >
      <h1
        ref={title}
        className="uppercase  translate-x-5 font-medium text-[35rem] w-auto"
      >
        rohan&nbsp;keshri
      </h1>
    </div>
  );
};

export default Page1;
