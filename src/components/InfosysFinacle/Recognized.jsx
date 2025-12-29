import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import Copy from '../Animations/Copy'
import Image from 'next/image'

const Recognized = () => {
  return (
   <section className='h-full w-screen background-radial py-[7%]' id='careers'>
    <div className='h-full w-full container'>
        <div className=' w-full  h-full space-y-[5vw] max-sm:space-y-[8vw] flex items-start max-md:flex-col justify-between rounded-[2vw] border border-white/20 overflow-hidden p-5'>
        <div className='w-[60%]  max-md:w-full max-sm:space-y-[5vw] max-md:items-start pt-[5%] px-[2%]'>
          <Copy>
        <p className='text-white-300 max-md:text-left text-50 leading-[1.25]'>Recognized Excellence: Infosys Finacle Open-Source Services Partner 2025  </p>
        </Copy>
        </div>
       

        <div className='w-[45%] h-[35vw] max-md:w-full rounded-[2vw] overflow-hidden max-sm:h-[60vw] max-sm:rounded-[6vw] max-md:h-[50vw]  fadeup'>
        <Image src={"/assets/images/infosys-finacle/recognized.png"} quality={50} height={501} width={543} alt='Careers' className='h-full w-full object-cover'/>
        </div>
        </div>

    </div>

   </section>
  )
}

export default Recognized