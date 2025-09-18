"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../Animations/Copy";
gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  {
    id: "01",
    title: "About",
    text: "We are a deep-tech AI company on a mission to empower enterprises to transform their operations, products, and customer experiences through intelligent automation, secure data science practices, and domain-specific solutions.From traditional machine learning to Generative AI and large language models (LLMs), we help organizations go from proof of concept to production in record time—with confidence, clarity, and control.",
    width: "w-full",
  },
  {
    id: "02",
    title: "Vision",
    text: "To make AI adoption frictionless and impactful for every enterprise in the world.",
    width: "w-full",
  },
  {
    id: "03",
    title: "Mission",
    text: "To enable businesses to unlock the full potential of their data through secure, scalable, and ethical AI solutions tailored to real-world use cases.",
    width: "w-full",
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
        <div className="title-3 space-y-[2vw] max-sm:space-y-[5vw]">
          <Copy>
            <p className="text-white-300">
            <span className="w-[10vw] inline-block h-[2px]" />At Data Science Wizards (DSW), we believe that AI should be
              accessible, scalable, and enterprise-ready—not locked behind
              complexity. That’s why we built UnifyAI, a next-generation
              platform that simplifies the entire AI lifecycle for businesses
              across industries.
            </p>
          </Copy>
        </div>

        <div className="flex flex-col gap-[4vw] max-sm:w-full max-sm:gap-[12vw]">
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
                      className="ring text-white-200/20"
                      strokeWidth="1"
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                    />
                  </svg>

                  <p className="about-id text-white-200 text-[1.5vw] font-head relative z-[1] max-sm:text-[4.2vw]">
                    {id}
                  </p>
                </div>
              </div>
              <div className="space-y-[1.2vw]">
                <p className="text-[1.5vw] uppercase max-sm:text-[4.2vw] text-white-200">
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
