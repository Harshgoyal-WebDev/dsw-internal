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
        <div className='h-full w-full rounded-[1.5vw]'>

        </div>

      </div>

    </div>
    </section>
  )
}

export default Differently