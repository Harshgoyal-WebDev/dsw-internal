"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";


const POINTS = [
  { id: "01", text: "Cut time to market by 50%", width: "w-full" },
  { id: "02", text: "Slash TCO by up to 60%", width: "w-full" },
  { id: "03", text: "Unified platform, no vendor lock-in", width: "w-full" },
  {
    id: "04",
    text: "Predictable scaling with lower cost per use case",
    width: "w-[60%] max-md:w-full",
  },
];

export default function About() {
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
    gsap.set(".about-item", {
      scale: 0.7,
      transformOrigin: "center",
      y: 60,
      x: 25,
      opacity: 0.45,
    });

    document.querySelectorAll(".about-item").forEach((item, index) => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: isMobile ? "20% 180%" : "10% bottom",
          end: "bottom 40%",
          scrub: true,
          // markers:true,
        },
      });

      masterTl.to(
        item,
        {
          scale: 1,
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.8,
        },
        "<-.8"
      );
    });
  }, []);

  return (
    <section className="w-screen container" id="about">
      <div className="w-full flex flex-col items-center justify-center gap-y-[5vw] max-sm:gap-y-[15vw]">
        <h2 className="text-60 headingAnim text-[#E8E8E8] max-md:text-center">
          Make AI Operational, Not Experimental
        </h2>

        <div className="w-[38%] flex flex-col gap-[2.2vw] max-md:w-full max-md:gap-[7vw] max-sm:gap-[10vw]">
          {POINTS.map(({ id, text, width }) => (
            <div
              key={id}
              className="w-full flex gap-[3.2vw] items-center about-item"
            >
              <div className="w-[15%] relative max-md:w-[30%]">
                <div className="relative  w-[6.5vw] h-[6.5vw] border border-primary-1 rounded-full flex items-center justify-center max-sm:w-[18vw] max-sm:h-[18vw] max-md:w-[15vw] max-md:h-[15vw]">
                  <p className="about-id text-primary-1  font-head relative z-[1] text-30">
                    {id}
                  </p>
                </div>
              </div>

              {/* <Copy> */}
              <p className={`text-30 ${width} `}>{text}</p>
              {/* </Copy> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
