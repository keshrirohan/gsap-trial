import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const String = () => {
  const stringRef = useRef(null);
  const initial = "M 10 250 Q 600 250 1190 250";

  useGSAP(() => {
    const svg = stringRef.current;
    const path = svg.querySelector("path");

    const handleMouseMove = (e) => {
      const x = e.offsetX;
      const y = e.offsetY;

      const newPath = `M 10 250 Q ${x} ${y} 1190 250`;

      gsap.to(path, {
        attr: { d: newPath },
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: initial },

        duration: 2.5,
        ease: "elastic.out(1,0.1)",
      });
    };

    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-black h-screen w-full flex items-center justify-center">
      <svg
        width={1200}
        height={500}
        ref={stringRef}
        style={{
          border: "2px solid red",
        }}
      >
        <path
          d="M 10 250 Q 600 250 1190 250"
          stroke="white"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default String;
