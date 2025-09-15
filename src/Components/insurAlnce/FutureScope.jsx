'use client'
import React, {useEffect, useState} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


const scope = [
    {
        id:'01',
        content: `Industry's first verticalized SLM (Small Language Model) for insurance `,
    },
    {
        id:'02',
        content: `Continuous learning from operational feedback  `,
    },
    {
        id:'03',
        content: `Modular expansion into newer lines of business and territories `,
    }
]

const FutureScope = () => {

    useEffect(() => {
        const ctx= gsap.context(() => {
            const tl= gsap.timeline({
                scrollTrigger: {
                    trigger: '.future-section',
                    pin:true,
                    start:'top top',
                    end: '+=1000',
                    scrub: true,
                    markers:false,
            }
        })

            tl.fromTo('.future-card', {
            y:'100vh',
            } ,{
                y:'-50vh',
                stagger:0.5,  
                duration:2,
                ease:'power1.out'    
            })
        })
        return () => ctx.revert();
    })

  return (
    <div className='container overflow-hidden future-section h-[100vh] relative flex flex-col gap-[4vw] justify-center items-center'>
        <h2 className='title-1 text-center'>
                Ready for the Future 
                <br />
                of Insurance AI 
        </h2>

        <p className='content w-[55%] text-center leading-[1.4]'>
            insurAInce isn’t just built for today’s problems. It’s built for tomorrow’s scale. AI in insurance is moving beyond pilots and isolated use cases. insurAInce is building what’s next — an integrated operating system with domain-specific capabilities like:
        </p>

        <div className='absolute future-card inset-0'>


        <div className='absolute left-20 top-0'>
              <div className='w-[27vw] rounded-[2.5vw] flex flex-col justify-between p-[2vw] h-[22vw] bg-white/5 backdrop-blur-[1vw]'>
            <p className='p-[1.5vw] text-[1.5vw] border border-[#175CFE] text-[#175CFE] tracking-wider h-[5.2vw] w-[5.2vw] rounded-full'>01</p>
            <p className='text-[1.3vw] w-[90%] pb-[1vw]'>
                Industry's first verticalized SLM (Small Language Model) for insurance 
            </p>
        </div>
        </div>


         <div className='absolute left-[37%] top-[45%]'>
              <div className='w-[27vw] rounded-[2.5vw] flex  flex-col justify-between p-[2vw] h-[22vw] bg-gradient-to-r from-light-blue to-dark-blue '>
            <p className='p-[1.5vw] text-[1.5vw] border border-[#175CFE] text-[#175CFE] tracking-wider h-[5.2vw] w-[5.2vw] rounded-full'>02</p>
            <p className='text-[1.3vw] w-[90%] pb-[1vw]'>
                Continuous learning from operational feedback  
            </p>
        </div>
        </div>

        <div className='absolute bottom-[-37%] right-[5%]'>
              <div className='w-[27vw] rounded-[2.5vw] flex flex-col justify-between p-[2vw] h-[22vw] bg-white/5 backdrop-blur-[1vw]'>
            <p className='p-[1.5vw] text-[1.5vw] border border-[#175CFE] text-[#175CFE] tracking-wider h-[5.2vw] w-[5.2vw] rounded-full'>03</p>
            <p className='text-[1.3vw] w-[90%] pb-[1vw]'>
               Modular expansion into newer lines of business and territories 
            </p>
        </div>
        </div>

        </div>

    </div>
  )
}

export default FutureScope