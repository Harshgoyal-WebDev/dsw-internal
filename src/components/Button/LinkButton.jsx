"use client"
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { useModal } from "../Common/ModalProvider";

export const LinkButton = ({
  text,
  href,
  className = "",
  hover,
  invert,
  modalPayload,
  openModalKey,
  ...props
}) => {
  const containerRef = useRef(null);
  const baseRef = useRef(null);
  const topRef = useRef(null);
  const characters = useMemo(
    () => text.split("").map((char) => (char === " " ? "\u00A0" : char)),
    [text]
  );

  const staggerValue = useMemo(() => {
    return Math.max(0.01, 0.018 * (10 / characters.length));
  }, [characters]);

  useEffect(() => {
    gsap.set(baseRef.current.querySelectorAll(".char"), {
      y: 15,
      rotateX: 90,
    });
    gsap.set(topRef.current.querySelectorAll(".char"), { y: 0, rotateX: 0 });
  }, []);

  const animateChars = (baseY, topY, rotateX, rotateX2) => {
    const baseChars = baseRef.current.querySelectorAll(".char");
    const topChars = topRef.current.querySelectorAll(".char");

    gsap.to(baseChars, {
      y: baseY,
      rotateX: rotateX,
      duration: 0.6,
      stagger: staggerValue,
      ease: "power2.out",
    });

    gsap.to(topChars, {
      y: topY,
      rotateX: rotateX2,
      duration: 0.6,
      stagger: staggerValue,
      ease: "power2.out",
    });
  };

    const { openByKey } = useModal();
    const handleClick = (e) => {
       if (href?.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
      onClick?.(e);
      if (e?.defaultPrevented) return;
      if (openModalKey) {
        e.preventDefault();
        openByKey(openModalKey, modalPayload);
        return;
      }
    };

  const handleMouseEnter = () => {
    animateChars(0, -15, 0, -90);
  };

  const handleMouseLeave = () => {
    animateChars(15, 0, 90, 0);
  };

  return (
    <>
      <Link
       onClick={handleClick}
        scroll={false}
        href={href}
        {...props}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
       
        className={`relative  h-fit w-fit  group cursor-pointer text-primary-2 flex items-center gap-[0.7vw] max-sm:gap-[3vw] max-md:gap-[2vw] ${className}`}
      >
        <span className="w-[0.5vw] h-[0.5vw] rounded-full bg-primary-2 block duration-500 ease-in-out max-sm:h-[2vw] max-sm:w-[2vw] max-md:w-[1.2vw] max-md:h-[1.2vw]"/>
        <div
          ref={containerRef}
          style={{ perspective: "800px" }}
          className="relative flex flex-col items-start transform-origin-center mt-[0.2vw] max-md:mt-0"
        >
          {/* Bottom (Gray) Layer */}
          <div
            ref={baseRef}
            className="flex w-fit justify-between gap-[0.5vw] max-sm:gap-[2vw] max-sm:items-center  "
          >
            <div className="w-fit flex flex-col gap-[0.3vw]">
              <div className="w-fit flex h-fit overflow-hidden">
                {characters.map((char, i) => (
                  <span key={i} className="flex items-center justify-center">
                    <span className={`inline-block  char leading-[1.05] overflow-hidden  font-sans font-normal transform-3d`}>
                      {char}
                    </span>
                  </span>
                ))}
              </div>
              <div className="!h-[1.2px]  group-hover:w-full duration-500 ease-[cubic-bezier(0.62,0.05,0.01,0.99)] origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform w-full bg-current rounded-full"></div>
            </div>
            
          </div>

          {/* Top (Red) Layer */}
          <div
            ref={topRef}
            className="absolute top-0 left-0 flex pointer-events-none"
          >
            {characters.map((char, i) => (
              <span key={i} className="">
                <span className="inline-block char overflow-hidden  font-sans leading-[1.05] font-normal transform-3d">
                  {char}
                </span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};
