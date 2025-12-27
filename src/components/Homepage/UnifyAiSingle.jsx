"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModal } from "../Common/ModalProvider";

gsap.registerPlugin(ScrollTrigger);

const UnifyAiSingle = () => {
  const {openModal} = useModal()
  useGSAP(() => {
    if(globalThis.innerWidth>1024){
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#unifyAi",
          start: "top 40%",
          end: "90% 40%",
          scrub: true,
          // markers:true
          
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
          yPercent: -40,
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
    }
    else{
       const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#unifyAi",
          start: "10% 50%",
          end: "80% 50%",
          scrub: true,
          // markers:true
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
          yPercent: -40,
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
        delay: -4,
        // "--c3": "#030815",
      });
  
      // Stage 2 -> Stage 3 (final white-out)
      tl.to(".unifyblock", {
        "--c3": "#f8f8f8",
        delay: -4
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
    }
  });

  return (
    <section
      className="w-screen h-[250vh] relative  unifyContainer header-dark max-sm:h-[150vh]"
      id="unifyAi"
    >
      {/* remove Tailwind gradient utilities here; keep only layout classes */}
      <div className="w-full h-screen sticky top-0 flex justify-center items-center unifyblock max-md:overflow-hidden">
        <h2 className="text-[6vw] unify-title text-[#f8f8f8] max-md:text-[8vw]">
          Two Powerful Platforms
        </h2>
      </div>
    </section>
  );
};

export default UnifyAiSingle;
