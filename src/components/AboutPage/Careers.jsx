import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import Copy from '../Animations/Copy'
import Image from 'next/image'

const Careers = () => {
  return (
   <section className='h-full w-screen background-radial' id='careers'>
    <div className='h-full w-full container'>
        <div className=' w-full  h-full space-y-[5vw] max-sm:space-y-[8vw]'>
        <div className=' flex flex-col items-center justify-center space-y-[3vw] max-sm:w-full max-sm:space-y-[5vw] max-md:items-start'>
        <h3 className='text-90  text-white-200'>
            Careers
        </h3>
        <div className='w-[75%] space-y-[1.5vw]  max-sm:space-y-[6vw] max-md:w-full'>
          <Copy>
        <p className='text-white-300 text-center max-md:text-left'>At DSW, we believe technology is at its best when it’s purposeful, ethical, and built on a foundation of deep research and innovation. We are a community of curious minds, committed to solving real-world challenges and improving lives through thoughtful, responsible AI. </p>
        </Copy>
        <Copy>
        <p className='text-white-300 text-center max-md:text-left'>Build what matters. Learn together. Shape the future of AI with purpose.</p>
        </Copy>
        </div>
        </div>

        <div className='w-full h-auto max-sm:w-full rounded-[2vw] border border-white/20 overflow-hidden max-sm:h-[60vw] max-sm:rounded-[6vw] max-md:h-[50vw]'>
        <Image src={"/assets/images/about/careers-final.png"} height={501} width={543} alt='Careers' className='h-full w-full object-cover'/>
        </div>
        <div className='w-[65%] mx-auto max-md:w-full'>
          <Copy>
            <p className='text-white-300 text-center max-md:text-left'>If you want your work to matter, be part of groundbreaking solutions, and grow in an environment where ideas are nurtured and expertise is shared, you’ll find your place here.</p>
          </Copy>
        </div>

        </div>

    </div>

   </section>
  )
}

export default Careers