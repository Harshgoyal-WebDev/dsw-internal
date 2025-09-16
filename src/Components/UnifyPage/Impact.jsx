"use client";
import { useEffect } from "react";
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
          start: "10% 115%",
          end: "150%",
          scrub: true,
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
        <div className="text-center space-y-[2vw]">
          <h2 className="title-2 headingAnim text-white-200 max-sm:text-center">
            From Idea to Impact  
          </h2>
          <Copy>
            <p className="text-white-300">
              Here’s how UnifyAI gets you from build to business outcomes
            </p>
          </Copy>
        </div>

        <div className="flex flex-col gap-[4vw] max-sm:w-full max-sm:gap-[7vw]">
          {POINTS.map(({ id, text, width, title }) => (
            <div
              key={id}
              className="w-full flex gap-[3.2vw] items-center about-item"
            >
              <div className="w-[15%] relative max-sm:w-[30%]">
                <div className="relative w-[7vw] h-[7vw] flex items-center justify-center max-sm:w-[20vw] max-sm:h-[20vw]">
                  <svg
                    viewBox="0 0 120 120"
                    className="absolute inset-0 h-full w-full"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      fill="none"
                      stroke="rgba(139,92,246,.025)"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      fill="none"
                      stroke="currentColor"
                      className="ring text-primary-1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                    />
                  </svg>

                  <p className="about-id text-primary-1 text-[1.5vw] font-head relative z-[1] max-sm:text-[4.2vw]">
                    {id}
                  </p>
                </div>
              </div>
              <div className="space-y-[1.2vw]">
                <Copy>
                  <p className="text-[1.5vw] max-sm:text-[4.2vw] text-white-200">
                    {title}
                  </p>
                </Copy>
                <Copy>
                  <p className="text-white-300">{text}</p>
                </Copy>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
