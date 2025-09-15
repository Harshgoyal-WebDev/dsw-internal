"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Animations/Copy";
gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  { id: "01", text: "Cut time to market by 50%", width: "w-full" },
  { id: "02", text: "Slash TCO by up to 60%", width: "w-full" },
  { id: "03", text: "Unified platform, no vendor lock-in", width: "w-full" },
  {
    id: "04",
    text: "Predictable scaling with lower cost per use case",
    width: "w-[60%] max-sm:w-full",
  },
];

export default function About() {
  useEffect(() => {

    document.querySelectorAll(".about-item").forEach((row) => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "10% 100%",
          end:'150%',
          scrub:true,
        },
      });

      tl.to('.about-item',
      
        {
          scale: 1,
          y:0,
          x:0,
          opacity: 1,
          duration: 1,
          stagger: .2,
        }
      )     
    });
  }, []);

  return (
    <section className="w-screen px-[5vw] py-[7%] max-sm:px-[7vw]" id="about">
      <div className="w-full flex flex-col items-center justify-center gap-y-[5vw] max-sm:gap-y-[15vw]">
        <div className="w-full h-fit flex items-center justify-center flex-col space-y-[2vw]">
          <h2 className="title-2 headingAnim text-[#E8E8E8] max-sm:text-center">
            From Idea to Impact  
          </h2>
          <Copy>
            <p className="text-white-300">
              Here’s how UnifyAI gets you from build to business outcomes
            </p>
          </Copy>
        </div>

        <div className="w-[37%] flex flex-col gap-[2.2vw] max-sm:w-full max-sm:gap-[7vw]">
          {POINTS.map(({ id, text, width }) => (
            <div
              key={id}
              className="w-full flex gap-[3.2vw] items-center translate-y-[5%] translate-x-[5%] scale-80 opacity-0 about-item"
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

              <p className={`text-[1.5vw] ${width} max-sm:text-[4.2vw] `}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
