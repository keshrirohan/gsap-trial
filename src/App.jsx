import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Page from "./components/Page";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page1 from "./components/Page1";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const box1ref = useRef(null);

  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const page1styling = () =>
    gsap.from(box1ref.current, {
      scale: 0,
      opacity: 0,
      duration: 2,
      rotate: 360,
    });
  const page2styling = () => {
    gsap.from(box2Ref.current, {
      x: -500,
      rotate: 360,
      duration: 2,
      opacity: 0,
      scrollTrigger: { trigger: box2Ref.current, markers: false },
    });
  };
  const page3styling = () => {
    gsap.from(box3Ref.current, {
      scale: 0,
      
      x: 500,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: box3Ref.current,
        scroller: "body",
        start: "top 50%",
        end: "top 20%",
        markers: false,
        scrub: true,
      },
    });
  };
  return (
    <>
      <Page styling={page1styling} boxref={box1ref} bgcolor="#ADD8E6" />
      <Page styling={page2styling} boxref={box2Ref} bgcolor="#90EE90" />
      <Page styling={page3styling} boxref={box3Ref} bgcolor="#F08080" />

      <Page1 bgcolor="#FFE4E1" />
      <Page bgcolor="#FAEBD7" />
    </>
  );
}

export default App;
