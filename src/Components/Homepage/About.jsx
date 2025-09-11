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
  { id: '04', text: 'Predictable scaling with lower cost per use case', width:"w-[60%]" },
];

export default function About() {
  useEffect(() => {
    const CIRC = 351.59; 

    gsap.set('.ring', { strokeDasharray: CIRC, strokeDashoffset: CIRC });

    document.querySelectorAll('.about-item').forEach((row) => {
      const ring = row.querySelector('.ring');
      if (!ring) return;
      gsap.to(ring, {
        strokeDashoffset: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 80%',
        },
      });
    });
  }, []);

  return (
    <section className="w-screen px-[5vw] py-[7%]" id="about">
      <div className="w-full flex flex-col items-center justify-center gap-y-[5vw]">
        <h2 className="title-2 headingAnim text-[#E8E8E8]">
          Make AI Operational, Not Experimental
        </h2>

        <div className="w-[37%] flex flex-col gap-[2.2vw]">
          {POINTS.map(({ id, text,width }) => (
            <div key={id} className="w-full flex gap-[3.2vw] items-center about-item">
              <div className="w-[15%] relative">
                <div className="relative w-[7vw] h-[7vw] flex items-center justify-center">
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
                  <Copy delay={0.5}>
                  <p className="text-primary-1 text-[1.5vw] font-head relative z-[1]">{id}</p>
                  </Copy>
                </div>
              </div>

              <p className={`text-[1.5vw] ${width}`}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
