import React from 'react'
import Copy from '../Animations/Copy'

const Differently = () => {
  return (
   <section className='h-full w-screen ' id='differently'>
    <div className='h-full w-full container flex flex-col items-center justify-center space-y-[5vw] max-sm:space-y-[9vw]'>
      <div className='flex items-center max-sm:flex-col justify-between max-sm:w-[90%] max-sm:gap-[8vw]'>
        <div className='h-[60vh] w-[49%]  max-sm:w-full rounded-[1.5vw] max-sm:rounded-3xl border border-white/20 py-[3vw] max-sm:py-[8vw] max-sm:px-[6vw] px-[3vw]  background-glass relative group  fadeup flex flex-col items-start overflow-hidden'>
        <div
              className="absolute inset-0 h-full w-full 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out"
            />
            <div className='relative z-[10] space-y-[2vw]'>
                <div className='rounded-full border border-white/20  h-[4.5vw] w-[4.5vw] flex items-center justify-center text-30'>
                    01
                </div>
                <h3 className='text-50 font-head'> Mission</h3>
          <p className='text-white-200 font-medium'>Enable enterprises to harness AI responsibly and at scale, transforming operations, improving lives, and solving real-world challenges, while fostering a collaborative AI community that drives innovation forward. </p>
         
          </div>

        </div>
         <div className='h-[60vh] w-[49%]  max-sm:w-full rounded-[1.5vw] max-sm:rounded-3xl border border-white/20 py-[3vw] max-sm:py-[8vw] max-sm:px-[6vw] px-[3vw]  background-glass relative group  fadeup flex flex-col items-start'>
        <div
              className="absolute inset-0 h-full w-full rounded-[1.5vw] 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out"
            />
            <div className='relative z-[10] space-y-[2vw]'>
                <div className='rounded-full border border-white/20  h-[4.5vw] w-[4.5vw] flex items-center justify-center text-30'>
                    02
                </div>
                <h3 className='text-50 font-head'> Vision</h3>
                <div className='space-y-[1.5vw]'>
          <p className='text-white-200 font-medium'>Become the backbone of enterprise AI. Just as Linux became the foundation of modern computing, DSW UnifyAI is emerging as the OS for AI - a platform that brings together open innovation, governance, and scale. We are building the next-generation AI infrastructure enterprises can trust, enabling them to adapt, evolve, and serve their customers with confidence and speed.   </p>
          <p>Our vision extends beyond technology, it’s about cultivating a thriving ecosystem where enterprises, developers, and partners co-create the future of AI. </p>
          </div>
         
          </div>

        </div>
        </div>

      </div>
    </section>
  )
}

export default Differently