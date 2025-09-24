'use client'
import React, { Suspense } from "react";
import Image from "next/image";
import { useEffect, useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import dynamic from "next/dynamic";

const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
    ssr: false,
});

gsap.registerPlugin(ScrollTrigger)


const useStackedCardsAnimation = (triggerRef, cardsRef, options = {}) => {
  const { 
    startTrigger = '20% center',
    endTrigger = '150% center',
    initialScaleReduction = 0.05,
    animationScaleReduction = 0.05,
    markers = true 
  } = options;

  useEffect(() => {
    if (!cardsRef.current || !triggerRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.stacked-card');
    const totalCards = cards.length;

    if (totalCards === 0) return;

   
    gsap.set(cards, {
      zIndex: (i) => totalCards - i,
      yPercent: (i) => -i * 99, 
      scale: (i) => 1 - i * initialScaleReduction,
      opacity: (i) => i === 0 ? 0 : 0 // First card visible, rest hidden
    });

    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.out',
      },
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "20% center",   
        end: "80% center", 
        scrub: true,
        // markers: true
      },
    });

    // Create animation sequence for each card (starting from the second card)
    for (let i = 0; i < totalCards; i++) {
      const timePosition = (i - 1) * 0.5; // Stagger the animations
      
      // Animate current card to full visibility and position
      tl.to(cards[i], {
        yPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 1
      }, timePosition);

      // Animate previous cards to make room
      for (let j = i + 1; j < totalCards; j++) {
        tl.to(cards[j], {
          yPercent: -100 * (j - i),
          scale: 1 - (j - i) * animationScaleReduction,
          duration: 0.5
        }, timePosition);
      }
    }

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [triggerRef, cardsRef, startTrigger, endTrigger, initialScaleReduction, animationScaleReduction, markers]);
};

const Difference = () => {
  const sectionRef = useRef(null);
  const cardsRef1 = useRef(null);
  const cardsRef2 = useRef(null);


  // Use the reusable hook
  useStackedCardsAnimation(sectionRef, cardsRef1, {
    startTrigger: '20% center',
    endTrigger: 'bottom bottom',
    initialScaleReduction: 0,
    animationScaleReduction: 0.05,
    markers: false
  });
  useStackedCardsAnimation(sectionRef, cardsRef2, {
    startTrigger: '20% center',
    endTrigger: 'bottom bottom',
    initialScaleReduction: 0,
    animationScaleReduction: 0.05,
    markers:false
  });

  return (
    <section
      className="w-screen h-fit  relative max-md:!px-0 container max-md:overflow-hidden "
      id="difference" 
      ref={sectionRef}
    >
      <h2 className="text-60 headingAnim max-md:!text-[11.5vw] max-md:pl-[7vw] max-md:w-[90%]  text-center mb-[7vw] max-md:text-left max-md:justify-start max-md:mb-[20vw]">
        Why insurAInce is Different? 
      </h2>
      <div className="w-full max-md:w-screen max-md:overflow-hidden max-md:overflow-x-scroll max-md:pb-[10%] relative z-[20] ">
        <div className="w-full flex flex-col justify-center items-center gap-[4.5vw] relative z-[2] max-md:items-start max-md:w-[170vw] max-md:px-[7vw]">
          <div className="w-full flex justify-center max-md:gap-[4vw] gap-[1vw] max-md:justify-between max-sm:gap-[10vw]">
            <div className="w-[40%] max-sm:w-[50%] max-md:w-full space-y-[2.5vw] max-md:space-y-[12vw]">
              <h3 className="text-center text-40 headingAnim text-[#f1f1f1] max-sm:w-[70%] max-md:w-full max-sm:text-left max-md:justify-start">
                Traditional AI Platforms
              </h3>
              <div className="w-full flex-col flex gap-[0.5vw] max-md:gap-[3vw]" ref={cardsRef1}>
                <div className="stacked-card w-full text-[#cacaca] text-center h-[10.5vh]  max-sm:py-[2.5vw] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center  background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start backdrop-blur-[5px] ">
                  Generic, one-size-fits-all 
                </div>
                <div className="stacked-card w-full text-[#cacaca] text-center h-[10.5vh]  max-sm:py-[2.5vw] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center  background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start backdrop-blur-[5px]">
                  Long time to deploy 
                </div>
                <div className="stacked-card w-full text-[#cacaca] text-center h-[10.5vh]  max-sm:py-[2.5vw] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center  background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start backdrop-blur-[5px]">
                  Retrofitted Compliance 
                </div>
                <div className="stacked-card w-full text-[#cacaca] text-center h-[10.5vh]  max-sm:py-[2.5vw] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center  background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start backdrop-blur-[5px]">
                  Scattered stack
                </div>
                <div className="stacked-card w-full text-[#cacaca] text-center h-[10.5vh]  max-sm:py-[2.5vw] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center  background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start backdrop-blur-[5px]">
                  High cost - every use case starts from scratch
                </div>
              </div>
            </div>
            <div className="w-[40%] max-md:w-full max-sm:w-[50%] space-y-[2.5vw] max-sm:space-y-[21vw] max-md:space-y-[12vw]" ref={cardsRef2}>
              <h3 className="text-center text-40 headingAnim text-[#f1f1f1] max-sm:text-left">
                InsurAInce
              </h3>
              <div className="w-full flex-col flex max-md:mt-[9.2vw] max-sm:mt-0 gap-[0.5vw]  max-md:gap-[3vw]">
                <div className="stacked-card w-full text-[#cacaca] text-center h-[10.5vh]  max-sm:py-[2.5vw] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center  background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start backdrop-blur-[5px]  ">
                  Insurance-first, domain-trained 
                </div>
                <div className=" stacked-card w-full text-[#cacaca] text-center  max-md:py-[5vw] max-sm:py-[2.5vw]h-[10.5vh] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center  background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start backdrop-blur-[5px]">
                  30 days or less for AI, hours for GenAI 
                </div>
                <div className="stacked-card w-full text-[#cacaca] text-center h-[10.5vh]  max-sm:py-[2.5vw] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center  background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start backdrop-blur-[5px]">
                  Built-in Compliance (SOC 2, ISO, HIPAA, GDPR compliant) ​
                </div>
                <div className="stacked-card w-full text-[#cacaca] text-center h-[10.5vh]  max-sm:py-[2.5vw] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center  background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start backdrop-blur-[5px]">
                  Unified AI platform, no vendor lock-in  
                </div>
                <div className="stacked-card w-full text-[#cacaca] text-center h-[10.5vh]  max-sm:py-[2.5vw] max-sm:h-[8vh] max-sm:rounded-[4vw]  border border-white/20 rounded-[1.6vw] px-[2vw] py-[2.5vw] flex items-center justify-center  background-glass-diff max-sm:text-[3vw] max-sm:px-[7vw] max-sm:text-left max-sm:justify-start backdrop-blur-[5px]">
                  Pipelines, features, and models are reused intelligently –
                  reducing cost with every use case 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[30%] left-0 h-screen w-screen max-sm:hidden">
        <Suspense>
          <DynamicShaderComp/>
        </Suspense>
      </div>
      <div className="w-screen h-screen absolute top-0 z-[10] left-0 hidden max-sm:block">
        <Image src={"/assets/images/homepage/gradient-mobile.png"} alt="shader-bg-mobile" className="w-full h-full object-cover" width={600} height={1080}/>
      </div>
    </section>
  );
};

export default Difference;