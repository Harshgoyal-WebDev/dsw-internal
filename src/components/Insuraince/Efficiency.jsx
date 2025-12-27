"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Copy from "../Animations/Copy";

const Efficiency = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#efficiency-container",
          start: "top 30%",
          markers: false,
        },
      });

      tl.to(".left-timer", {
        yPercent: -75,
        duration: isMobile ? 2 : 1.2,
      }).to(
        ".right-timer",
        {
          yPercent: -75,
          duration: isMobile ? 2 : 1.2,
          delay: 0.2,
        },
        "<"
      );
    });

    return () => ctx.revert();
  }, [isMobile]);

  // ---- Stat Configs ----
  const stats = [
    {
      left: ["0", "2", "4", "5"],
      right: ["0", "5", "0", "0"],
      suffix: "%",
      text: "faster time to market for AI and Agentic AI use cases",
    },
    {
      left: ["0", "2", "4", "6"],
      right: ["0", "7", "5", "0"],
      suffix: "%",
      text: "reduction in TCO",
    },
    {
      left: ["0", "3", "6", "8"],
      right: ["0", "0", "3", "0"],
      suffix: "%",
      text: "drop in manual tasks across claims and servicing",
    },
    {
      left: ["0", "1", "2", "3"],
      right: ["0", "4", "7", "0"],
      suffix: "",
      text: "days or less to go live with AI use cases and Agentic AI in hours.",
    },
  ];

  return (
    <section
      id="efficiency-container"
      className="container h-fit space-y-[8vw] max-md:!px-0 max-sm:!px-[7vw]"
    >
      <div className="space-y-[2vw] max-sm:space-y-[8vw] max-md:space-y-[5vw]">
        <h2 className="text-90 text-white-200 text-center headingAnim">
          Built for the Complexity
          <br />
          of the Insurance Industry 
        </h2>

        <Copy>
          <p className="text-center text-white-300">
            This purpose-built solution is proven across diverse insurance environments to
            <br />
            drive speed, efficiency, and accuracy where it counts the most. 
          </p>
        </Copy>
      </div>

      <div className="w-full flex justify-between items-start max-md:flex-wrap max-sm:flex-col max-md:px-[7vw] max-md:gap-y-[7vw] max-sm:gap-y-[15vw] max-sm:mt-[20vw]">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start gap-[1vw] w-[22%] max-md:w-[45%] max-md:items-center max-sm:w-full max-sm:gap-[5vw]"
          >
            <div className="overflow-hidden h-[10vh] w-fit items-center flex justify-start">
              {/* Left Digits */}
              <div className="w-fit flex flex-col items-center justify-center left-timer translate-y-[38%]">
                {stat.left.map((digit, i) => (
                  <p
                    key={i}
                    className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] max-md:text-[10vw] max-sm:text-[20vw] font-head"
                  >
                    {digit}
                  </p>
                ))}
              </div>

              {/* Right Digits */}
              <div className="w-fit flex flex-col items-center right-timer justify-center translate-y-[38%]">
                {stat.right.map((digit, i) => (
                  <p
                    key={i}
                    className="bg-gradient-to-r from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] max-md:text-[10vw] max-sm:text-[20vw] font-head"
                  >
                    {digit}
                  </p>
                ))}
              </div>

              {/* Suffix if any */}
              {stat.suffix && (
                <div>
                  <p className="bg-gradient-to-r font-head from-primary-2 to-primary-3 bg-clip-text text-transparent text-[4.4vw] max-md:text-[10vw] max-sm:text-[20vw]">
                    {stat.suffix}
                  </p>
                </div>
              )}
            </div>

            <Copy>
              <p className="tracking-wider text-white-300 leading-[1.4] max-md:text-center">
                {stat.text}
              </p>
            </Copy>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Efficiency;
