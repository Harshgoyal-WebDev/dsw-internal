'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Copy from '../Animations/Copy'


 const results = [
  {
    id: "01",
    description:
      "Consulting and aligning on open-source adoption strategies for global banks. .",
  },
  {
    id: "02",
    description:
      "Co-deploying, managing, and maintaining open-source stacks for Finacle implementations across regions. ",
  },
  {
    id: "03",
    description:
      "Running continuous workshops, enablement sessions, and certifications for Finacle and bank technology teams. ",
  },
  {
    id: "04",
    description:
      "Researching open-source evolution to embed the latest, stable, and most efficient frameworks into Finacle’s roadmap. ",
  },
  {
    id: "05",
    description:
      "Acting as an extended open-source competency arm for Finacle, amplifying its value proposition for global banking clients. ",
  },
];

const DeliveringSuccess = () => {

  return (
    <section className='h-fit w-screen container space-y-[7vw]' id='results'>

      <div className='flex justify-center items-center  max-md:w-[100%] mx-auto max-sm:space-y-0 max-md:space-y-[7vw] flex-col gap-[2vw] max-sm:gap-[12vw]'>
        <h2 className='text-60  text-center headingAnim ]'>
         Delivering Finacle Success Through Open-Source Expertise 
        </h2>
       
        <Copy>
        <p className='text-white-300 text-center w-[55%] max-md:w-[100%]'>
          As a strategic open-source consulting partner to Infosys Finacle,  DSW helps global banks modernize, optimize, and scale Finacle deployments through enterprise-grade open-source adoption. 
        </p>
        </Copy>
       
      </div>

       <div className="flex flex-col items-center gap-[4vw] max-md:w-full max-md:gap-[15vw]">
          {results.map(({ id,description }) => (
            <div
              key={id}
              className="w-[50%] max-md:w-[100%] flex gap-[3.2vw] items-center about-item"
            >
              <div className="w-[15%]  relative max-md:w-[30%]">
                <div className="relative w-[6.5vw] h-[6.5vw] border border-primary-1 rounded-full flex items-center justify-center max-md:w-[18vw] max-md:h-[18vw]">
                  <p className="about-id text-primary-1 text-[1.5vw] font-head relative z-[1] max-md:text-[4.2vw]">
                    {id}
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-white-300 w-[95%] max-md:w-full text-30">{description}</p>
              </div>
            </div>
          ))}
        </div>

    </section>
  )
}

export default DeliveringSuccess
