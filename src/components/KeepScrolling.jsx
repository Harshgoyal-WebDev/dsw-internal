'use client'
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const KeepScrolling = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".scrolling", {
        opacity: 0,
        delay: 14,
        duration: 1,
      })
    })
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrolling(false);
      }, 7000);

      const footerCta = document.getElementById('footer-cta');
      if (footerCta) {
        const rect = footerCta.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        setIsFooterVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);
  if (isFooterVisible || scrolling) {
    return null;
  }

  return (
    <div className="fixed bottom-[5.5%] right-10 z-[99] pointer-events-none max-sm:right-5 max-sm:bottom-[5%] max-md:bottom-[7%]">
      <div className="text-[1vw] h-fit relative overflow-hidden flex gap-[1vw] scrolling max-sm:text-[3.5vw] max-md:text-[2.2vw]">
        <div className="scroll-content flex gap-[1vw] max-sm:gap-[2vw]">
          <span className={`inline-block shimmer`}>
            Keep scrolling to discover more
          </span>
          <div className="flex flex-col gap-[0.5vw] w-fit h-[1vw] arrow-container max-sm:h-[3.5vw] overflow-hidden translate-y-[15%] max-sm:translate-y-[25%] max-md:translate-y-[20%] max-md:h-[2.5vw] ">
            <div className="w-fit h-fit space-y-[0.5vw] keepScrolling-arrow max-sm:space-y-[1.5vw] max-md:space-y-[1vw] ">
            <Image src="/assets/icons/arrow-left.svg" width={20} height={20} className={`h-[1vw] w-[1vw] -rotate-90 opacity-80 relative z-10 max-sm:h-[3.5vw] max-sm:w-[3.5vw] max-md:w-[2vw] max-md:h-[2vw]  ${scrolling ? "hidden" : "translate-y-0 max-sm:translate-y-0"}`} alt="Previous" />
            <Image src="/assets/icons/arrow-left.svg" width={20} height={20} className={`h-[1vw] w-[1vw] -rotate-90 opacity-80 relative z-10 max-sm:h-[3.5vw] max-sm:w-[3.5vw] max-md:w-[2vw] max-md:h-[2vw]`} alt="Previous" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeepScrolling;