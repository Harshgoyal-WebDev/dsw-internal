'use client'
import React, { useEffect, useRef } from 'react'
import Copy from '../Animations/Copy'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);


// const ProductionCard = ({ className, title, para }) => {
//   return (
//     <div
//       className={`group relative rounded-[2vw] h-[22vw] w-[35vw] p-[4vw] border border-[#59595980] overflow-hidden cursor-pointer ${className} `}
//     >
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#041035] to-[#1727FF] rounded-[2vw] opacity-0 group-hover:opacity-100 transition-opacity duration-500 " />
      
//       {/* Overlay */}
//       <div className="absolute inset-0 background-glass rounded-[2vw] backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-0 z-[5]" />
      
//       {/* Content */}
//       <div className="relative z-10 h-full">
//         <div className="absolute left-0 bottom-0 !leading-[1.2] text-white text-[2.8vw] font-head w-[80%] transition-transform duration-500 ease-out group-hover:-translate-y-[120px] group-hover:delay-100">
//           {title}
//         </div>
//         <p className="absolute left-0 right-[1vw] bottom-0 text-white text-[1.2vw] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:delay-500">
//           {para}
//         </p>
//       </div>
//     </div>
//   );
// };


const ProductionCard = ({ className, title, para }) => {
  const cardRef = useRef(null);
  const paraRef = useRef(null);
  const titleRef = useRef(null);
  const gradientRef = useRef(null);
  const overlayRef = useRef(null);
  const splitTextRef = useRef(null);
  const isMobile = useRef(false);

  useEffect(() => {
    // Check if we're on mobile
    isMobile.current = window.innerWidth <= 1025;
    
    const card = cardRef.current;
    const paraElement = paraRef.current;
    const titleElement = titleRef.current;
    const gradient = gradientRef.current;
    const overlay = overlayRef.current;
  
    if (isMobile.current) {
      gsap.set(paraElement, { y: 0, opacity: 1 });
      gsap.set(gradient, { opacity: 1 });
      gsap.set(overlay, { opacity: 0 });
      gsap.set(titleElement, { y: 0 });
      return; 
    }
    
    // Desktop behavior
    gsap.set(paraElement, { y: 30, opacity: 0 });
    gsap.set(gradient, { opacity: 0 });

    let isHovered = false;
    let timeoutId = null;

    const handleMouseEnter = () => {
      isHovered = true;
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

  
      gsap.killTweensOf([gradient, overlay, titleElement, paraElement]);
     
      gsap.to(gradient, { opacity: 1, duration: 0.5, ease: "power3.out" });
      gsap.to(overlay, { opacity: 0, duration: 0.5, ease: "power3.out" });
    
      gsap.to(titleElement, { 
        y: -120, 
        duration: 0.8, 
        ease: "power3.out", 
        delay: 0.1 
      });
      
      
      gsap.to(paraElement, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.3
      });
    };

    const handleMouseLeave = () => {
      isHovered = false;
      
      // Small delay to prevent flickering on fast mouse movements
      timeoutId = setTimeout(() => {
        if (!isHovered) {
          // Kill any existing animations
          gsap.killTweensOf([gradient, overlay, titleElement, paraElement]);
          
          // Reverse animations
          gsap.to(gradient, { opacity: 0, duration: 0.4, ease: "power3.out" });
          gsap.to(overlay, { opacity: 1, duration: 0.4, ease: "power3.out" });
          
          gsap.to(titleElement, { 
            y: 0, 
            duration: 0.8, 
            ease: "power3.out" 
          });
          
          gsap.to(paraElement, {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.05 
          });
        }
      }, 50); // 50ms delay
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf([gradient, overlay, titleElement, paraElement]);
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
    };
  }, [para]); 

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-[2vw] h-[22vw]  w-[35vw] p-[4vw] border border-[#59595980] overflow-hidden max-md:p-[8vw] cursor-pointer ${className} max-md:w-[85vw] max-md:h-[30vh] max-md:rounded-[5vw]`}
    >
      {/* Gradient Background */}
      <div 
        ref={gradientRef}
        className="absolute inset-0 bg-gradient-to-r from-[#041035] to-[#1727FF] rounded-[2vw] max-md:opacity-0  " 
      />
      
      {/* Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 background-glass rounded-[2vw] backdrop-blur-sm z-[5]" 
      />
      
      {/* Content */}
      <div className="relative max-md:flex max-md:items-start max-md:justify-between max-md:flex-col z-10 h-full">
        <h4
          ref={titleRef}
          className="absolute left-0 max-md:w-full max-md:relative  bottom-0  text-white text-50 font-head w-[80%] max-md:-translate-y-[120px]"
        >
          {title}
        </h4>
        <div className="absolute max-md:relative left-0 right-[1vw] bottom-0 overflow-hidden">
          <p 
            ref={paraRef}
            className="text-white text-[1.2vw] leading-[1.4] max-md:text-[4.2vw] max-md:opacity-100"
          >
            {para}
          </p>
        </div>
      </div>
    </div>
  );
};


const Production = () => {
    const containerRef = useRef(null);

    
useGSAP(()=>{

      const div1 = containerRef.current.querySelectorAll(".production-card-left");
      const div2 = containerRef.current.querySelectorAll(".production-card-right");
      const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
                end: "bottom 90%",
                markers: false,
                scrub: true,
            },
        });
if(globalThis.innerWidth>1025){
        tl.from(div1, {
            xPercent: -100,
            yPercent: 50,
            rotateZ: "-30deg",
            duration: 1,
            stagger: 0.5,
        });
        tl.from(div2, {
            xPercent: 100,
            yPercent: 50,
            rotateZ: "30deg",
            duration: 1,
            stagger: 0.5,
        }, "-=1");
      }
      else{
         tl.from(div1, {
            xPercent: -100,
            yPercent: 50,
            rotateZ: "-60deg",
            duration: 1,
            stagger: 0.5,
        });
        tl.from(div2, {
            xPercent: 100,
            yPercent: 50,
            rotateZ: "60deg",
            duration: 1,
            stagger: 0.5,
        }, "-=1");
      }
        })
      
  return (
    <>
    <section className='h-full w-full relative z-[20]'>
        <div className='container h-full w-full'>
            <div className='w-full space-y-[5vw] flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center text-center  gap-[2vw] w-[70%] mx-auto max-md:w-full max-md:mx-0 max-md:gap-[10vw]'>
                    <h2 className='text-90 headingAnim text-white-200'>Production Pilot: Experience the AI Platform. See Results. Commit with Certainty.</h2>
                    <Copy>
                        <h3 className='text-50 text-white-200 w-[80%] max-md:w-full'>Accelerate AI and GenAI deployment in record time, swiftly and at scale.</h3>
                    </Copy>
                    <Copy>
                        <p className='text-white-300 w-[90%]'>Sign up for the UnifyAI Production Pilot — your low-risk, structured path to validating and deploying AI and GenAI use cases across core business functions, no matter the industry sector.</p>
                    </Copy>

                </div>

                <div ref={containerRef} className='w-screen flex justify-center max-md:mt-[15vw] gap-[2.5vw] max-md:flex-col overflow-hidden max-md:items-center max-md:gap-[7vw]'>
                    <div className='space-y-[2.5vw] max-md:space-y-[7vw] w-fit'>
                    <ProductionCard className={"production-card-left"} title={"Accelerated Deployment"} para={"Move from concept to production in weeks for AI and in hours for GenAI — with enterprise-grade readiness from day one."}/>
                    <ProductionCard className={"production-card-left"} title={"Scalable, Unified Platform"} para={"Simplify adoption with an end-to-end platform that brings data, models, and governance together in one place."}/>
                    </div>
                    <div className='space-y-[2.5vw] max-md:space-y-[7vw] mt-[5vw] max-md:mt-0 w-fit'>
                        <ProductionCard className={"production-card-right"} title={"Built-in Trust and Compliance"} para={"Ensure every deployment meets stringent enterprise standards with certifications including SOC II, ISO 27001, HIPAA, and GDPR."}/>
                        <ProductionCard className={"production-card-right"} title={"Deploy Easily"} para={"Easy integration into legacy systems, deploy on cloud, on-prem or hybrid."}/>
                    </div>
                </div>
            </div>

        </div>

    </section>
    </>
  )
}

export default Production