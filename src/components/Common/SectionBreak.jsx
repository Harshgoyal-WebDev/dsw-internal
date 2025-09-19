"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const SectionBreak = ({text, span}) => {
      const sectionRef = useRef(null);
      const textRef = useRef(null);
    
      useEffect(() => {
        const ctx = gsap.context(() => {
          const sectionBreakSplit = SplitText.create(textRef.current, {
            type: "words chars",
            aria: false,
            tag: 'span',
            charsClass: 'split-chars'
          });
          const t = Array.from(textRef.current.querySelectorAll(".split-chars"));
    
          if (globalThis.innerWidth > 1024) {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top center",
                  end: "center center",
                  scrub: 0.25,
                  // markers:true
                },
              })
              .to(t, {
                className: "split-chars show",
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.inOut"
              }, 0)
          }
          if (globalThis.innerWidth > 541 && globalThis.innerWidth < 1024) {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top center",
                  end: "center center",
                  scrub: 0.25,
                },
              })
              .to(t, {
                className: "split-chars show",
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.inOut"
              }, 0)
          }
          if (globalThis.innerWidth < 541) {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top center",
                  end: "bottom center",
                  scrub: 0.15,
                },
              })
              .to(t, {
                className: "split-chars show",
                duration: 0.4,
                stagger: 0.05,
                ease: "power2.inOut"
              }, 0)
          }
        })
        return () => ctx.revert();
      }, []);
    
  return (
<>
 <section className="w-full" id="section-break"  ref={sectionRef}>
      <div className="w-full flex flex-col items-center justify-center gap-y-[10vw] max-sm:gap-y-[15vw]">
        <div className="split__wrapper  space-y-[2vw] max-sm:space-y-[5vw]">
         
            <div className={`text-white-200 text-break font-head text-[2.8vw] ${!span ? "text-center " : "text-left"} max-sm:text-[8vw] font-normal leading-[1.4]`} ref={textRef}>
            {span ?  <span className="w-[20vw] inline-block h-[2px] max-sm:hidden" /> : <></>}
             
             {text}
            </div>
         
        </div>
        </div>
</section>
</>
  )
}

export default SectionBreak