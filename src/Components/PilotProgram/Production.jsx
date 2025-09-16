'use client'
import React, { useEffect, useRef } from 'react'
import Copy from '../Animations/Copy'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';



const ProductionCard=({className, title, para})=>{
    const cardRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const heading = headingRef.current;
    const para = paraRef.current;

    const handleMouseEnter = () => {
      gsap.to(heading, { y: -80, duration: 0.6, ease: 'power3.out', delay: 0.2 });
      gsap.to(para, { autoAlpha: 1, duration: 0.6, ease: 'power3.out', delay: 0.4 });
      gsap.to(card, { background: 'linear-gradient(to right, #041035, #1727FF)', duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(heading, { y: 0, duration: 0.5, ease: 'power3.out' });
      gsap.to(para, { autoAlpha: 0, duration: 0.5, ease: 'power3.out' });
      gsap.to(card, { background: 'rgba(255, 255, 255, 0.05)', duration: 0.6 });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative rounded-[2vw] h-[22vw] w-[35vw] p-[4vw] border border-[#59595980] overflow-hidden background-glass cursor-pointer ${className}`}
      style={{ background: 'rgba(255, 255, 255, 0.05)' }}
    >
      <div
        ref={headingRef}
        className="absolute left-[3vw] bottom-[4vw] text-white text-[2.8vw] font-head w-[80%]"
      >
        {title}
      </div>
      <p
        ref={paraRef}
        className="absolute left-[3vw] right-[3vw] bottom-[4vw] text-white text-[1.2vw] opacity-0"
      >
       {para}
      </p>
    </div>
  );
}
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
        })

  return (
    <>
    <section className=''>
        <div className='container h-full w-full'>
            <div className='w-full space-y-[5vw] flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center text-center  gap-[2vw] w-[70%] mx-auto'>
                    <h2 className='title-1 headingAnim text-white-200'>Production Pilot: Experience the AI Platform. See Results. Commit with Certainty. </h2>
                    <Copy>
                        <h3 className='text-[2.5vw] text-white-200 w-[80%]'>Accelerate AI and GenAI deployment in record time, swiftly and at scale. </h3>
                    </Copy>
                    <Copy>
                        <p className='text-white-300 w-[90%]'>Sign up for the UnifyAI Production Pilot — your low-risk, structured path to validating and deploying AI and GenAI use cases across core business functions, no matter the industry sector.  </p>
                    </Copy>

                </div>

                <div ref={containerRef} className=' flex gap-[2vw]'>
                    <div className='space-y-[2vw]'>
                    <ProductionCard className={"production-card-left"} title={"Accelerated Deployment "} para={"Move from concept to production in weeks for AI and in hours for GenAI — with enterprise-grade readiness from day one. "}/>
                    <ProductionCard className={"production-card-left"} title={"Scalable, Unified Platform"} para={"Move from concept to production in weeks for AI and in hours for GenAI — with enterprise-grade readiness from day one. "}/>
                    </div>
                    <div className='space-y-[2vw] mt-[5vw]'>
                        <ProductionCard className={"production-card-right"} title={"Built-in Trust and Compliance "} para={"Move from concept to production in weeks for AI and in hours for GenAI — with enterprise-grade readiness from day one. "}/>
                        <ProductionCard className={"production-card-right"} title={"Deploy Easily"} para={"Move from concept to production in weeks for AI and in hours for GenAI — with enterprise-grade readiness from day one. "}/>
                    </div>
                </div>
            </div>

        </div>

    </section>
    </>
  )
}

export default Production