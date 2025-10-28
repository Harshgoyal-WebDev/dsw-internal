"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "../Button/PrimaryButton";
import Copy from "../Animations/Copy";

gsap.registerPlugin(ScrollTrigger);

const UnifyAiSingle = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#unifyAi",
        start: "top 40%",
        end: "90% 40%",
        scrub: true,
      },
    });
    // existing title animations
    tl.fromTo(
      ".unify-title",
      {
        yPercent: 350,
      },
      {
        duration: 1.5,
        yPercent: 0,
        ease: "power4.out",
      }
    );
    tl.fromTo(
      ".unify-title",
      {
        scale: 0.2,
      },
      {
        duration: 6,
        scale: 55,
        translateX: "-150%",
        ease: "power2.inOut",
      },
      "<"
    );

    // gradient transition timeline (3 stages)
    tl.to(".unifyblock", {
      "--c1": "#f8f8f8",
      "--c2": "#f8f8f8",
      delay: -3,
      // "--c3": "#030815",
    });

    // Stage 2 -> Stage 3 (final white-out)
    tl.to(".unifyblock", {
      "--c3": "#f8f8f8",
      delay: -3,
    });

    const bl = gsap.timeline({
      scrollTrigger: {
        trigger: "#unifyAi",
        start: "55% 50%",
        end: "75% 50%",
        scrub: true,
      },
    });
    // Radius expansion (can overlap above)
    bl.to(".unifyblock", {
      "--rx": "90%",
      "--ry": "120%",
    });

    bl.to(".unifyContainer", { backgroundColor: "#f8f8f8" }, "<");
  });

  return (
    <section
      className="w-screen h-[250vh] relative unifyContainer"
      id="unifyAi"
    >
      {/* remove Tailwind gradient utilities here; keep only layout classes */}
      <div className="w-full h-screen sticky top-0 flex justify-center items-center unifyblock max-md:overflow-hidden">
        <h2 className="text-[6vw] unify-title text-[#f8f8f8] max-md:text-[8vw]">
          Powered by DSW UnifyAI
        </h2>
      </div>

      <div className="w-screen h-fit absolute bottom-0 flex flex-col py-[15%] items-center gap-[3.5vw] max-md:px-[7vw] max-md:gap-[8vw]">
        <h2 className="text-90 text-primary-1 headingAnim max-md:text-center">
          One Platform. Infinite Possibilities.
        </h2>
        <Copy>
          <p className="text-center w-[43%] text-[#111111] max-md:w-full">
            AI is everywhere. But it&apos;s not working everywhere. Why?​
            <br />
            Because AI and business still operate in silos. DSW UnifyAI changes
            that. ​The intelligent layer between your data, teams, and
            production — turning isolated models into living business processes.
          </p>
        </Copy>
        <div className="fadeup">
          <PrimaryButton background="" href={"/"} text={"Book a Demo"} />
        </div>
      </div>
    </section>
  );
};

export default UnifyAiSingle;
