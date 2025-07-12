import { useGSAP } from "@gsap/react";
import React from "react";

const Box = ({ styling, boxref }) => {
  useGSAP(() => {
    if (boxref?.current && styling) {
      styling();
      console.log(boxref.current,styling);
    }
  }, []);

  return <div ref={boxref} className="w-[200px] h-[200px] bg-blue-500"></div>;
};

export default Box;
