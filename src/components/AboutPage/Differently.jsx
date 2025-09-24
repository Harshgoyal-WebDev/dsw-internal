import React from 'react'
import Copy from '../Animations/Copy'

const Differently = () => {
  return (
   <section className='h-full w-screen ' id='differently'>
    <div className='h-full w-full container flex flex-col items-center justify-center space-y-[5vw]'>
      <div className=' space-y-[3vw] w-1/2 text-center'>
        <h2 className='text-90 headingAnim'>Do Differently : An Ode to Builders </h2>
        <Copy>
          <p className='text-white-300'>Do Differently. is our commitment to the people who bring AI to life, those who tackle complexity and build systems that matter. </p>
        </Copy>

      </div>
      <div className='flex items-center justify-center gap-[3vw]'>
        <div className='h-[25vw] w-[35vw] rounded-[1.5vw] border border-white/20 py-[6vw] px-[3vw]  background-glass relative group  fadeup'>
        <div
              className="absolute inset-0 h-full w-full rounded-[1.5vw] 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out"
            />
            <div className='relative z-[10] space-y-[3vw]'>
          <p className='text-white-200 font-medium'>To the data scientists, data engineers, AI engineers, and business leaders who:</p>
          <ul className='list-disc space-y-[0.5vw] ml-[2vw]'>
            <li className='text-white-200 font-medium'> See patterns where others see chaos.</li>
            <li className='text-white-200 font-medium'> Turn ideas into enterprise-grade systems.</li>
            <li className='text-white-200 font-medium'> Push AI from experimentation to production.</li>
          </ul>
          </div>

        </div>
        <div className='h-[25vw] w-[35vw] rounded-[1.5vw] border border-white/20 py-[6vw] px-[3vw] space-y-[3vw] background-glass relative group fadeup' >
        <div
              className="absolute inset-0 h-full w-full rounded-[1.5vw] 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out"
            />
            <div className='relative z-[10] space-y-[3vw]'>
          <p className='text-white-200 font-medium'>AI doesn’t fail because of technology; it fails when it’s disconnected from the business.</p>
         <p>Do Differently. celebrates those solving the hardest challenge in AI adoption: moving from isolated use cases to scalable, governed, enterprise-grade solutions.</p>
         </div>
</div>
        </div>

      </div>
    </section>
  )
}

export default Differently