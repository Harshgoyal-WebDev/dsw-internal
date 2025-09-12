"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "../Button/PrimaryButton";
import Copy from "../Animations/Copy";

gsap.registerPlugin(ScrollTrigger);

const UnifyAi = () => {
  useGSAP(() => {
    // existing title animations
    gsap.from(".unify-title", {
      scale: 0.2,
      yPercent: 300,
      ease: "none",
      scrollTrigger: {
        trigger: "#unifyAi",
        start: "top bottom",
        end: "17% 50%",
        scrub: true,
      },
    });

    gsap.fromTo(
      ".unify-title",
      { scale: 1 },
      {
        scale: 80,
        xPercent: -220,
        ease: "power1.in",
        scrollTrigger: {
          trigger: "#unifyAi",
          start: "34% bottom",
          end: "85% 50%",
          scrub: true,
        },
      }
    );

    // gradient transition timeline (3 stages)
    gsap.to(".unifyblock", {
      "--c1": "#f8f8f8",
      "--c2": "#f8f8f8",
      // "--c3": "#030815",
      scrollTrigger: {
        trigger: "#unifyAi",
        start: "55% 50%",
        end: "65% 50%",
        scrub: true,
      },
    });

    // Stage 2 -> Stage 3 (final white-out)
    gsap.to(".unifyblock", {
      "--c3": "#f8f8f8",
      scrollTrigger: {
        trigger: "#unifyAi",
        start: "55% 50%",
        end: "70% 50%",
        scrub: true,
      },
    });

    // Radius expansion (can overlap above)
    gsap.to(".unifyblock", {
      "--rx": "90%",
      "--ry": "120%",
      scrollTrigger: {
        trigger: "#unifyAi",
        start: "55% 50%",
        end: "75% 50%",
        scrub: true,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#unifyAi",
          start: "55% 50%",
          end: "70% 50%",
          scrub: true,
        },
      })
      .to(".unifyContainer", { backgroundColor: "#f8f8f8" }, 0);
  });

  return (
    <section
      className="w-screen h-[300vh] relative unifyContainer"
      id="unifyAi"
    >
      {/* remove Tailwind gradient utilities here; keep only layout classes */}
      <div className="w-full h-screen sticky top-0 flex justify-center items-center unifyblock max-sm:overflow-hidden">
        <h2 className="text-[6vw] unify-title text-[#f8f8f8] max-sm:text-[8vw]">
          Powered by DSW UnifyAI
        </h2>
      </div>

      <div className="w-screen h-fit absolute bottom-0 flex flex-col py-[15%] items-center gap-[3.5vw] max-sm:px-[7vw] max-sm:gap-[8vw]">
        <h2 className="title-1 text-primary-1 headingAnim max-sm:!text-[11vw] max-sm:text-center">
          One Platform. Infinite Possibilities.
        </h2>
        <Copy>
          <p className="text-center w-[40%] text-[#111111] max-sm:w-full">
            AI is everywhere. But it&apos;s not working everywhere. Why?​
            Because AI and business still operate in silos. DSW UnifyAI changes
            that. ​The intelligent layer between your data, teams, and
            production — turning isolated models into living business processes.
          </p>
        </Copy>
        <div className="fadeup">
          <PrimaryButton
            background="!bg-gradient-to-r !from-[#041035] !to-[#1727FF]"
            href={"/"}
            text={"Book a demo"}
          />
        </div>
      </div>
    </section>
  );
};

export default UnifyAi;
