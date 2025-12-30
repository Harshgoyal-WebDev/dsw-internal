"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from 'gsap/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const SectionBreak = ({text, span,textAlign,width}) => {
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
                  start: "top 90%",
                  end: "center 30%",
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
          if (globalThis.innerWidth > 541 && globalThis.innerWidth <= 1024) {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 70%",
                  end: "center 30%",
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
 <section className="w-full h-fit flex justify-center" id="section-break"  ref={sectionRef}>
      <div className={` flex flex-col items-start justify-start gap-y-[10vw] max-sm:gap-y-[15vw] ${width?width:"w-full"}`}>
        <div className="split__wrapper  space-y-[2vw] max-sm:space-y-[5vw]">
            <div className={`text-white-200 text-break font-head max-md:text-center text-50 ${!span ? "text-left max-sm:text-center" : "text-left"} font-normal leading-[1.4] ${textAlign}`} ref={textRef}>
            {span ?  <span className="w-[20vw] inline-block h-[2px] max-md:hidden" /> : <></>}
             {text}
            </div>
         
        </div>
        </div>
</section>
</>
  )
}

export default SectionBreak