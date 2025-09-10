"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "../Button/PrimaryButton";

const UnifyAi = () => {
  useGSAP(() => {
    gsap.from(".unify-title", {
      scale: 0.2,
      yPercent: 300,
      ease: "none",
      scrollTrigger: {
        trigger: "#unifyAi",
        start: "top 50%",
        end: "15% 50%",
        scrub: true,
        // markers:true,
      },
    });
    gsap.fromTo(
      ".unify-title",
      {
        scale: 1,
      },
      {
        scale: 50,
        // yPercent:-100,
        xPercent: -140,
        // yPercent:300,
        ease: "none",
        scrollTrigger: {
          trigger: "#unifyAi",
          start: "15% 50%",
          end: "85% 50%",
          scrub: true,
          // markers: true,
        },
      }
    );
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#unifyAi",
          start: "55% 50%",
          end: "75% 50%",
          scrub: true,
          // markers: true,
        },
      })
      .to(".unifyContainer", { backgroundColor: "#f8f8f8" }, 0)
      .to(".unifyblock", { "--grad-o": 0, backgroundColor: "#f8f8f8" }, 0);
  });
  return (
    <section
      className="w-screen h-[350vh] relative unifyContainer"
      id="unifyAi"
    >
      <div className="w-full h-screen sticky top-0 flex justify-center items-center bg-radial from-[#081B57] via-[#030815]  to-[#030815] unifyblock">
        <h2 className="text-[6vw] unify-title text-[#f8f8f8]">
          Powered by DSW UnifyAI
        </h2>
      </div>
      <div className="w-screen h-fit absolute bottom-0 flex flex-col py-[7%] items-center gap-[3.5vw]">
        <h2 className="title-1 text-primary-1 headingAnim">
          One Platform. Infinite Possibilities.{" "}
        </h2>
        <p className="text-center w-[40%] text-[#111111]">
          AI is everywhere. But it’s not working everywhere. Why?  ​ Because AI
          and business still operate in silos.​ DSW UnifyAI changes that. ​The
          intelligent layer between your data, teams, and production — turning
          isolated models into living business processes. ​
        </p>
        <PrimaryButton className="!bg-gradient-to-r !from-[#041035] !to-[#1727FF]" href={"/"} text={"Book a demo"}/>
      </div>
    </section>
  );
};

export default UnifyAi;
