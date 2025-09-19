"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Animations/Copy";
gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  {
    id: "01",
    title: "Connect",
    text: "Integrate data pipelines, APIs, and enterprise systems ",
    width: "w-full",
  },
  {
    id: "02",
    title: "Configure",
    text: "Build or select from pre-designed model/agent blueprints ",
    width: "w-full",
  },
  {
    id: "03",
    title: "Deploy",
    text: "Launch with production-grade infrastructure, fast ",
    width: "w-full",
  },
  {
    id: "04",
    title: "Govern",
    text: "Monitor usage, ensure compliance, and scale on demand ",
    width: "w-[60%] max-sm:w-full",
  },
];

export default function Impact() {
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
        <div className="text-center space-y-[2vw] max-sm:space-y-[5vw]">
          <h2 className="text-60 headingAnim text-white-200 max-sm:text-center">
            From Idea to Impact  
          </h2>
          <Copy>
            <p className="text-white-300">
              Here’s how UnifyAI gets you from build to business outcomes
            </p>
          </Copy>
        </div>

        <div className="flex flex-col gap-[4vw] max-sm:w-full max-sm:gap-[15vw]">
          {POINTS.map(({ id, text, width, title }) => (
            <div
              key={id}
              className="w-full flex gap-[3.2vw] items-center about-item"
            >
              <div className="w-[15%] relative max-sm:w-[30%]">
                <div className="relative w-[6.5vw] h-[6.5vw] border border-primary-1 rounded-full flex items-center justify-center max-sm:w-[20vw] max-sm:h-[20vw]">
                  <p className="about-id text-primary-1 text-[1.5vw] font-head relative z-[1] max-sm:text-[4.2vw]">
                    {id}
                  </p>
                </div>
              </div>
              <div className="space-y-[1.2vw]">
                <p className="text-[1.5vw] max-sm:text-[4.2vw] text-white-200">
                  {title}
                </p>

                <p className="text-white-300">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
