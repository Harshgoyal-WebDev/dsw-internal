"use client";

import Image from "next/image";
import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const btnRef = useRef(null);

  const showBtn = useCallback(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inout",
      onStart: () => (btnRef.current.style.pointerEvents = "auto"),
    });
  }, []);

  const hideBtn = useCallback(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inout",
      onComplete: () => (btnRef.current.style.pointerEvents = "none"),
    });
  }, []);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    gsap.set(btn, { opacity: 0, scale: 0.9, pointerEvents: "none" });
    gsap.set(".topbtn",{opacity:1})

    const st = ScrollTrigger.create({
      trigger: "#footer",
      start: "top bottom",
      end: "bottom bottom",
      onEnter: showBtn,
      onLeaveBack: hideBtn,
    });

    return () => {
      st.kill();
      gsap.killTweensOf(btn);
    };
  }, [showBtn, hideBtn]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      ref={btnRef}
      id="scrollToTop"
      role="button"
      aria-label="Scroll to top"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="w-fit h-fit fixed bottom-[5%] right-[2%] group cursor-pointer z-[888] max-sm:bottom-[2%] "
    >
      <div className="w-[3vw] h-[3vw] min-w-10 min-h-10 rounded-full max-md:w-[8vw] max-md:h-[8vw] bg-white/70 backdrop-blur flex justify-center items-center  p-[1vw] cursor-pointer shadow-lg group-hover:bg-white duration-300  max-md:p-[3vw] opacity-0 topbtn ">
        <Image
          src="/assets/icons/arrow-left.svg"
          alt=""
          className="w-full h-full object-contain invert rotate-90"
          width={50}
          height={50}
          priority
        />
      </div>
    </div>
  );
}

export default ScrollToTop;
