'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Copy from '../Animations/Copy';
gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  { id: '01', text: 'Cut time to market by 50%',width:"w-full" },
  { id: '02', text: 'Slash TCO by up to 60%',width:"w-full" },
  { id: '03', text: 'Unified platform, no vendor lock-in',width:"w-full" },
  { id: '04', text: 'Predictable scaling with lower cost per use case', width:"w-[60%] max-sm:w-full" },
];

export default function About() {
  useEffect(() => {
    const CIRC = 351.59; 

    gsap.set('.ring', { strokeDasharray: CIRC, strokeDashoffset: CIRC });
    gsap.set('.about-id', { opacity: 0, y: 20 });

    document.querySelectorAll('.about-item').forEach((row) => {
      const ring = row.querySelector('.ring');
      const idElement = row.querySelector('.about-id');
      if (!ring || !idElement) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: '10% 80%',
        },
      });

      // Animate the border (slower)
      tl.to(ring, {
        strokeDashoffset: 0,
        duration: 3, 
        ease: 'power2.out',
      })
      
      .to(idElement, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
      }, 0.3); 
    });
  }, []);

  return (
    <section className="w-screen container" id="about">
      <div className="w-full flex flex-col items-center justify-center gap-y-[5vw] max-sm:gap-y-[15vw]">
        <h2 className="title-2 headingAnim text-[#E8E8E8] max-sm:text-center">
          Make AI Operational, Not Experimental
        </h2>

        <div className="w-[37%] flex flex-col gap-[2.2vw] max-sm:w-full max-sm:gap-[7vw]">
          {POINTS.map(({ id, text,width }) => (
            <div key={id} className="w-full flex gap-[3.2vw] items-center about-item">
              <div className="w-[15%] relative max-sm:w-[30%]">
                <div className="relative w-[7vw] h-[7vw] flex items-center justify-center max-sm:w-[20vw] max-sm:h-[20vw]">
                  <svg  viewBox="0 0 120 120" className="absolute inset-0 h-full w-full">
                    <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(139,92,246,.025)" strokeWidth="1.5" />
                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      fill="none"
                      stroke="currentColor"
                      className="ring text-primary-1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                    />
                  </svg>
                  
                  <p className="about-id text-primary-1 text-[1.5vw] font-head relative z-[1] max-sm:text-[4.2vw]">{id}</p>
                
                </div>
              </div>

             <Copy>
              <p className={`text-[1.5vw] ${width} max-sm:text-[4.2vw] `}>{text}</p>
             </Copy>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}