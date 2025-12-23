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
            <div className='relative z-[10] space-y-[3vw] max-md:space-y-[7vw]'>
              <Copy>
          <p className='text-white-300 '>AI reaches its full potential when woven into the enterprise fabric with the <span className='font-semibold'>scale, governance, and predictability </span> that regulated industries demand. We turn the complexity of AI into the certainty of production,moving beyond innovation to true integration.</p>
          </Copy>
              <Copy>
          <p className='text-white-300'>
            <span className='font-semibold'>Do Differently.</span> is our tribute to the builders-the data scientists, engineers, and leaders turning chaos into predictable systems. We empower those who see patterns where others see chaos, forging raw ideas into systems that drive the front line.</p>
        </Copy>
          <Copy>
          <p className='text-white-300'>In regulated sectors, the gap between "prototype" and "production" is everything. We don’t just celebrate the idea; we celebrate the hard work of making it real; bridging the gap between isolated experiments and <span className='font-semibold'>scalable, enterprise-grade reality. </span></p>
          </Copy>
          </div>

        </div>
       
        </div>

      </div>
    </section>
  )
}

export default Differently