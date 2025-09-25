'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Copy from '../Animations/Copy'

gsap.registerPlugin(ScrollTrigger);

const results = [
  {
    id: "01",
    src: "/assets/icons/insuraince/underwriting.svg",
    title: 'Underwriting',
    description: "Predict risk, segment customers, and reduce manual decisioning ",
  },
  {
    id: "02",
    src: "/assets/icons/insuraince/claims.svg",
    title: 'Claims',
    description: "Classify documents, assess claim legitimacy, and optimize settlement cycles ",
  },
  {
    id: "03",
    src: "/assets/icons/insuraince/fraud.svg",
    title: 'Fraud',
    description: "Detect early signs of fraud with real-time pattern recognition ",
  },
]

const Results = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      yPercent: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0]?.parentNode, 
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className='h-fit w-screen container space-y-[7vw]'>

      <div className='flex justify-center items-center  max-md:w-[100%] w-[82%] mx-auto max-sm:space-y-0 max-md:space-y-[7vw] flex-col gap-[2vw] max-sm:gap-[12vw]'>
        <h2 className='text-90  text-center headingAnim w-[95%]'>
           AI That Drives Results in Underwriting, Claims, Fraud, and CX        
        </h2>
        <Copy>
        <p className='text-white-300 text-center w-[92%] max-md:w-[100%]'>
          Go live in 30 days with enterprise-grade models that work from day one. 
          insurAInce brings a library of ready-to-deploy AI/ML models designed 
          specifically for insurers to solve core challenges across the policy lifecycle. 
        </p>
        </Copy>
      </div>

      <div className='flex justify-between max-md:flex-wrap max-sm:flex-col max-sm:gap-[24vw] max-md:space-y-[10vw] max-sm:space-y-0 w-full items-center mx-auto pt-[4vw] max-sm:pt-[10vw]'>
        {results.map((result, i) => (
          <div
            key={result.id}
            ref={el => cardsRef.current[i] = el}
            className='flex flex-col pl-[1.5vw] gap-[1vw] justify-start max-sm:justify-center max-sm:mx-auto max-sm:items-center w-[30%] max-sm:w-[90%] max-md:w-[45%] opacity-100'
          >
            <div className='w-[5vw] h-[5vw] mb-[1vw] max-sm:h-[24vw] max-md:h-[15vw] max-md:w-[15vw] max-sm:w-[24vw]'>
              <Image
                src={result.src}
                width={400}
                height={400}
                alt='results-logo'
                className='h-full w-full object-cover'
              />
            </div>

            <h4 className='text-50 font-head max-sm:py-[2vw] max-md:py-[5vw] text-white-200'>
              {result.title}
            </h4>

            <p className='text-white-300 max-sm:text-center'>
              {result.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Results
