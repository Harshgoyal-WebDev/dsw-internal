'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Copy from '../Animations/Copy'


const Results = ({ heading, description, results }) => {
  const cardsRef = useRef([]);

  return (
    <section className='h-fit w-screen container space-y-[7vw]' id='results'>

      <div className='flex justify-center items-center  max-md:w-[100%] w-[82%] mx-auto max-sm:space-y-0 max-md:space-y-[7vw] flex-col gap-[2vw] max-sm:gap-[12vw]'>
        <h2 className='text-90  text-center headingAnim w-[95%]'>
           {heading}      
        </h2>
        {description && (
        <Copy>
        <p className='text-white-300 text-center w-[92%] max-md:w-[100%]'>
           {description}
          
        </p>
        </Copy>
        )}
      </div>

      <div className='flex justify-between max-md:flex-wrap max-sm:flex-col max-sm:gap-[24vw] max-md:space-y-[10vw] max-sm:space-y-0 w-full items-center mx-auto pt-[4vw] max-sm:pt-[10vw]'>
        {results.map((result, i) => (
          <div
            key={result.id}
            ref={el => cardsRef.current[i] = el}
            className='flex flex-col  min-h-[20vw] pl-[1.5vw] gap-[1vw] justify-start max-sm:justify-center max-sm:mx-auto max-sm:items-center w-[30%] max-sm:w-[90%] max-md:w-[45%] fadeup'
          >
            <div className='!w-[5vw] !h-[5vw] mb-[1vw] max-sm:!h-[24vw] max-md:h-[15vw] max-md:w-[15vw] max-sm:!w-[24vw]'>
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
