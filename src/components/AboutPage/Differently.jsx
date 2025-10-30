import React from 'react'
import Copy from '../Animations/Copy'

const Differently = () => {
  return (
   <section className='h-full w-screen ' id='differently'>
    <div className='h-full w-full container flex flex-col space-y-[5vw] max-sm:space-y-[9vw]'>
      <div className=' space-y-[3vw] max-sm:space-y-[8vw] max-sm:w-full'>
        <h2 className='text-90 headingAnim'>Do Differently : An Ode to Builders </h2>
        

      </div>
      <div className=''>
        <div className=' relative group '>
            <div className='relative z-[10] space-y-[3vw]'>
              <Copy>
          <p className='text-white-300'>
            <span className='font-medium'>Do Differently.</span> is our commitment to the people who bring AI to life, those who tackle complexity and build systems that matter. </p>
        </Copy>
              <Copy>
          <p className='text-white-200 '>To the data scientists, data engineers, AI engineers, and business leaders who:</p>
          </Copy>
          
          <ul className='list-disc space-y-[0.5vw] ml-[2vw]'>
            <Copy>
            <li className='text-white-200 '> See patterns where others see chaos.</li>
            </Copy>
            <Copy>
            <li className='text-white-200 '> Turn ideas into enterprise-grade systems.</li>
            </Copy>
            <Copy>
            <li className='text-white-200 '> Push AI from experimentation to production.</li>
            </Copy>
          </ul>
          
          <Copy>
          <p className='text-white-200'>AI doesn’t fail because of technology; it fails when it’s disconnected from the business. Do Differently. celebrates those solving the hardest challenge in AI adoption: moving from isolated use cases to scalable, governed, enterprise-grade solutions.</p>
          </Copy>
          </div>

        </div>
       
        </div>

      </div>
    </section>
  )
}

export default Differently