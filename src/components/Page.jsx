import React from "react";
import Box from "./Box";

const Page = ({ bgcolor, styling, boxref }) => {
  return (
    <div
      className="flex justify-center  items-center h-screen w-full "
      style={{ backgroundColor: bgcolor }}
    >
      <Box boxref={boxref} styling={styling} />
    </div>
  );
};

export default Page;
