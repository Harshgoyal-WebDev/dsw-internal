import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import Copy from '../Animations/Copy'
import Image from 'next/image'

const Careers = () => {
  return (
   <section className='h-full w-screen background-radial' id='careers'>
    <div className='h-full w-full container'>
        <div className=' w-full border border-white/10 h-full px-[5vw] py-[5vw] max-sm:py-[8vw] max-sm:rounded-3xl rounded-[1.5vw] flex items-center max-sm:flex-col-reverse max-sm:gap-[8vw] justify-between background-glass'>
        <div className='w-2/5 space-y-[3vw] max-sm:w-full max-sm:space-y-[5vw]'>
        <h3 className='text-90 headingAnim text-white-200'>
            Careers
        </h3>
        <div className='space-y-[1.5vw] max-sm:space-y-[6vw]'>
          <Copy>
        <p className='text-white-300'>At DSW, we believe technology is at its best when it’s purposeful, ethical, and built on a foundation of deep research and innovation. We are a community of curious minds, committed to solving real-world challenges and improving lives through thoughtful, responsible AI. </p>
        </Copy>
        <Copy>
        <p className='text-white-300'>Build what matters. Learn together. Shape the future of AI with purpose.</p>
        </Copy>
        </div>
        <div className='max-sm:mt-[6vw]'>
            <PrimaryButton href="/career" text={"See Open Roles"}/>
        </div>

        </div>

        <div className='w-[38%] max-sm:w-full'>
        <div className='h-[28vw] w-[30vw] max-sm:w-full max-sm:h-auto max-sm:rounded-3xl rounded-[1.5vw] overflow-hidden'>
        <Image src={"/assets/images/about/careers.png"} height={501} width={543} alt='Careers' className='h-full w-full'/>
        </div>

        </div>

        </div>

    </div>

   </section>
  )
}

export default Careers