import React, { Suspense, useEffect, useState } from "react";
// import Gradient from "./Homepage/Gradient";
// import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ShaderComp from "./BgShader/ShaderComp";
gsap.registerPlugin(ScrollTrigger);

const Loader = () => {
  const [hidden, setIsHidden] = useState(false)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const steps = 5; // Number of animation steps (and iterations)

      for (let i = 1; i <= steps; i++) {
        tl.to(".sequence-container", {
          xPercent: i * 100,
          ease: "power3.inOut",
          duration: 1,
        }).to(
          ".number-container",
          {
            xPercent: i * 20,
            duration: 1,
            ease: "power3.inOut",
          },
          "<"
        );
      }
      tl.to("#loader", {
        opacity: 0,

        filter: "blur(20px)",
        // duration:4,

        onComplete: () => {
          setIsHidden(true)
        }
      })

    });

    return () => ctx.revert();
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".loader-gradient", {
        yPercent: -10,
        duration: 2,
        delay:0.2,
        opacity: 1
      })
    })
    return () => ctx.revert()
  })
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 z-[9999] bg-black text-[17vw] overflow-hidden ${hidden ? "hidden" : ""}`}
      id="loader"
    >

      <div className="w-fit h-fit flex sequence-container relative z-[2] font-head font-medium">
        <div className="flex w-[9.5vw] overflow-hidden">
          <div className="flex w-fit translate-x-[-80%] number-container">
            <span>9</span>
            <span>7</span>
            <span>5</span>
            <span>2</span>
            <span>0</span>
          </div>
        </div>

        <div className="flex w-[9.5vw] overflow-hidden">
          <div className="flex w-fit translate-x-[-80%] number-container">
            <span>9</span>
            <span>7</span>
            <span>9</span>
            <span>7</span>
            <span>0</span>
          </div>
        </div>
      </div>
      <div className="loader-gradient opacity-0 relative z-[1] h-screen translate-y-[10%]">
        {/* <div
          className="w-screen h-[120vh] absolute bottom-[23%] left-0 right-0 z-[-2]"
        >
          <Gradient />
        </div> */}
        <div className="absolute top-[-5%] left-0 h-screen w-screen">
        <Suspense>
          <ShaderComp color={"0x1726FD"} />
        </Suspense>
      </div>

      </div>
    </div>
  );
};

export default Loader;
