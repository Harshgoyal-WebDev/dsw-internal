"use client";
import React, { useEffect, useRef } from "react";
import Copy from "../Animations/Copy";
import {
  fadeIn,
  fadeUp,
  headingAnim,
  lineAnim,
  paraAnim,
} from "../Animations/gsapAnimations";
import { initSplit } from "../splitTextUtils";

export default function Hero() {
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();
  useEffect(() => {
    initSplit();
  }, []);

  return (
    <section
      id="blogDetail"
      className="h-screen max-sm:h-[40vh] container flex items-center justify-center w-full relative"
    >
      <div className="absolute inset-0 h-full w-full z-0">
        <img
          src="/assets/images/blog-detail/heroBlogDetail.png"
          alt="Blog hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b to-black/20 from-black/90"></div>
      </div>
      <h1 className="text-100 headingAnim max-sm:hidden relative z-10 text-white text-center">
        How Generative AI is Transforming the Insurance Industry
      </h1>
    </section>
  );
}
