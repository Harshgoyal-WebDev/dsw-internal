"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Animations/Copy";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
import { is } from "zod/v4/locales";

const POINTS = [
  {
    id: "01",
    text: "Consulting and aligning on open-source adoption strategies for global banks.",
    width: "w-full",
  },
  {
    id: "02",
    text: "Co-deploying, managing, and maintaining open-source stacks for Finacle implementations across regions.",
    width: "w-full",
  },
  {
    id: "03",
    text: "Running continuous workshops, enablement sessions, and certifications for Finacle and bank technology teams.",
    width: "w-full",
  },
  {
    id: "04",
    text: "Researching open-source evolution to embed the latest, stable, and most efficient frameworks into Finacle’s roadmap.",
    width: "w-full",
  },
  {
    id: "05",
    text: "Acting as an extended open-source competency arm for Finacle, amplifying its value proposition for global banking clients.",
    width: "w-full",
  },
];

export default function Outcomes({ aboutData }) {
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

  useEffect(() => {
    const EntryChange = gsap.timeline({
      scrollTrigger: {
        trigger: "#finacle-expertise",
        start: "top center",
        end: "50% center",
        markers: false,
        scrub: 1.05,
      },
    });
    // gsap.set("#finacle-outcomes", {
    //   backgroundColor: "#03091D",
    // });
   
    EntryChange.fromTo(
      "#finacle-outcomes",
      {
        backgroundColor: "#030815",
      },
      {
        backgroundColor: "#ffffff",
      }
    );
    EntryChange.fromTo(
      "#finacle-expertise",
      {
        backgroundColor: "#030815",
      },
      {
        backgroundColor: "#ffffff",
      },
      "<"
    );
  }, []);

  useEffect(() => {
    const ExitAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#engagement-model",
        start: "0% center",
        end: "50% center",
        markers: false,
        scrub: 1.05,
      },
    });
    ExitAnimation.fromTo(
      "#finacle-expertise",
      {
        backgroundColor: "#ffffff",
      },
      {
        backgroundColor: "#030815",
      }
    );
    ExitAnimation.fromTo(
      "#engagement-model",
      {
        backgroundColor: "#ffffff",
      },
      {
        backgroundColor: "#030815",
      },
      "<"
    );
  }, []);

  return (
    <section className="w-screen container" id="finacle-outcomes">
      <div className="w-full flex flex-col items-center justify-center gap-y-[5vw] max-sm:gap-y-[15vw]">
        <h2 className="text-60 headingAnim text-[#E8E8E8] max-md:text-center">
          Delivering Finacle Success Through Open-Source Expertise 
        </h2>

        <p className="w-[50%] max-md:w-[90%] text-center">
          As a strategic open-source consulting partner to Infosys Finacle,  DSW
          helps global banks modernize, optimize, and scale Finacle
          deployments through enterprise-grade open-source adoption. 
        </p>

        <div className="w-[55%] flex flex-col gap-[3vw] max-md:w-full max-md:gap-[7vw] max-sm:gap-[10vw]">
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
