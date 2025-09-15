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
            <p className='text-white-300'>
                {content}
            </p>
        </div>
        </div>
    </div>
    )
}



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
                x:'-15vw',
                ease:'none',
                scrollTrigger: {
                    trigger:featuresRef.current,
                    start:'-30% top',
                    end: 'bottom top',
                    scrub:true,
                    markers:false,
                }
            })
        }, featuresRef);

        return () => ctx.revert();
    }, [])


    return (
        <section ref={featuresRef} id='features-section' className='bg-primary h-fit flex flex-col  relative container !px-0'>
            <div className='w-[47%] pl-[5vw] space-y-[1vw]'>
               <h2 className='title-2 w-[100%] text-white-200'>
                    The Unified AI Platform Built for Insurance Enterprises
                </h2>

                 <p className='text-white-300 w-[80%]'>
                    insurAInce brings together everything insurers need to rapidly operationalize AI and GenAI — all on one secure, enterprise-grade platform. 
                 </p>
            </div>
            
            <div className='w-full overflow-x-hidden pt-[2vw]'>
                <div
  ref={cardsContainerRef}
  className="flex gap-[2vw] translate-x-[60vw] min-w-max"
>
  {cardsData.map((card, index) => (
    <Card key={index} srcc={card.src} content={card.content} />
  ))}
</div>

            </div>
        </section>
    )
}

export default Features


const cardsData = [
  {
    src: "/assets/icons/insuraince/brain-setting.svg",
    content:
      "25+ pre-built AI/ML use cases purpose-built for underwriting, claims, and fraud detection ",
  },
  {
    src: "/assets/icons/insuraince/genAI-agents.svg",
    content:
      "300+ GenAI agents with agentic orchestration. Built, deployed, and managed using RAG, MCP, and A2A protocols. ",
  },
  {
    src: "/assets/icons/insuraince/code-setting.svg",
    content:
      "Modular, low-code AI Studio for building, deploying, and monitoring models at scale ",
  },
  {
    src: "/assets/icons/insuraince/AI.svg",
    content:
      "GenAI Studio for creating compliant, enterprise-ready GenAI agents in hours ",
  },
  {
    src: "/assets/icons/insuraince/deployment.svg",
    content:
      "Deployment options that suit your enterprise: on-prem, cloud, or hybrid infrastructure ",
  },
];
