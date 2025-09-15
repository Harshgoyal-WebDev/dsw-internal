'use client';
import Image from 'next/image'
import React, {useEffect, useRef} from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Card = ({srcc, content}) => {
    return (
     <div className='h-[45vh] backdrop-blur-lg cursor-pointer group transition-all duration-500 bg-white/10 hover:bg-gradient-to-r
      hover:from-light-blue 
      hover:to-dark-blue w-[20vw] rounded-[2vw] py-[2vw] px-[2vw] flex-shrink-0'>
        <div className='h-full w-full'>
        <div className='w-[5.2vw] h-[5.2vw] '>
            <Image src={srcc} height={300} width={300} alt='card-svg' className='w-full group-hover:brightness-0 h-full object-cover' />
        </div>
        <div className='pt-[3vw]'>
            <p className='font-display pfont'>
                {content}
            </p>
        </div>
        </div>
    </div>
    )
}

const cardsData = [
  {
    src: "/assets/icons/insurAlnce/brain-setting.svg",
    content:
      "25+ pre-built AI/ML use cases purpose-built for underwriting, claims, and fraud detection ",
  },
  {
    src: "/assets/icons/insurAlnce/genAI-agents.svg",
    content:
      "300+ GenAI agents with agentic orchestration. Built, deployed, and managed using RAG, MCP, and A2A protocols. ",
  },
  {
    src: "/assets/icons/insurAlnce/code-setting.svg",
    content:
      "Modular, low-code AI Studio for building, deploying, and monitoring models at scale ",
  },
  {
    src: "/assets/icons/insurAlnce/AI.svg",
    content:
      "GenAI Studio for creating compliant, enterprise-ready GenAI agents in hours ",
  },
  {
    src: "/assets/icons/insurAlnce/deployment.svg",
    content:
      "Deployment options that suit your enterprise: on-prem, cloud, or hybrid infrastructure ",
  },
];


const Features = () => {
    const featuresRef = useRef(null);
    const cardsContainerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

           
            ScrollTrigger.create({
            trigger: featuresRef.current,
  start: 'top top',
  end: 'bottom top',
  pin: true,
//   markers: true,
});
            
            gsap.to(cardsContainerRef.current, {
                x:'-65vw',
                ease:'none',
                scrollTrigger: {
                    trigger:featuresRef.current,
                    start:'-30% top',
                    end: 'bottom top',
                    scrub:1,
                    markers:false,
                }
            })
        }, featuresRef);

        return () => ctx.revert();
    }, [])


    return (
        <div ref={featuresRef} id='features-section' className='bg-primary h-fit flex flex-col py-[6vw]  relative'>
            <div className='pl-[4vw] w-[47%] '>
               <h2 className='text-[#F1F1F1] w-[100%] py-[1vw]  small-heading'>
                    The Unified AI Platform Built for Insurance Enterprises
                </h2>

                 <p className='content tracking-wider py-[2vw] leading-[1.5] w-[80%]'>
                    insurAInce brings together everything insurers need to rapidly operationalize AI and GenAI — all on one secure, enterprise-grade platform. 
                 </p>
            </div>
            
            <div className='w-full overflow-x-hidden '>
                <div
  ref={cardsContainerRef}
  className="flex gap-[2vw] pl-[48vw] min-w-max"
>
  {cardsData.map((card, index) => (
    <Card key={index} srcc={card.src} content={card.content} />
  ))}
</div>

            </div>
        </div>
    )
}

export default Features