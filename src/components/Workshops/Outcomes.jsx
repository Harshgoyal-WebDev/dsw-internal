"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Animations/Copy";
gsap.registerPlugin(ScrollTrigger);



export default function Outcomes({outcomesData}) {
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
    <section className="w-screen container background-radial" id="about">
      <div className="w-full flex flex-col items-center justify-center gap-y-[5vw] max-md:gap-y-[15vw]">
        <div className="mx-auto w-1/2 max-md:w-full space-y-[4vw] max-md:space-y-[5vw]">
          <h2 className="text-60 headingAnim text-white-200 max-md:text-center">
            {outcomesData.heading}
          </h2>
          <div className="space-y-[1vw]">
          <Copy>
            <p className="text-white-300 max-md:text-center">
            {outcomesData.para}
            </p>
          </Copy>
          <Copy>
            <p className="text-white-300 max-md:text-center max-md:w-full">{outcomesData.para2}</p>
          </Copy>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[4vw] max-md:w-full max-md:gap-[15vw]">
          {outcomesData.points.map(({ id, text, width, title }) => (
            <div
              key={id}
              className="w-[60%] max-md:w-[100%] flex gap-[3.2vw] items-center about-item"
            >
              <div className="w-[15%]  relative max-md:w-[30%]">
                <div className="relative w-[6.5vw] h-[6.5vw] border border-primary-1 rounded-full flex items-center justify-center max-md:w-[20vw] max-md:h-[20vw]">
                  <p className="about-id text-primary-1 text-[1.5vw] font-head relative z-[1] max-md:text-[4.2vw]">
                    {id}
                  </p>
                </div>
              </div>
              <div className="space-y-[1.2vw] max-md:space-y-[3vw]">
                <p className="text-30 max-md:text-[4.2vw] text-white-200">
                  {title}
                </p>

                <p className="text-white-300 w-[90%] max-md:w-full">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
