import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import WhiteButton from '../Button/WhiteButton'
import Image from 'next/image'

const Proof = () => {
  return (
   <section className='h-full w-full ' id='proof'>
    <div className='w-full h-[135vh] container space-y-[5vw]'>
        <div className='space-y-[1.5vw] w-[40%]'>
            <h2 className='text-90'>Proof and Recognition</h2>
            <div className='flex gap-6'>
            <PrimaryButton text={"Read News & Press"} href={"/"}/>
            <WhiteButton text={"View Case Studies"} href={"/"}/>
            </div>
        </div>
<div className="future-card max-sm:hidden grid grid-cols-3 grid-rows-6 gap-x-[1.5vw] ">
  <div className="col-start-1 row-start-1">
    <Card para={"Recognized among the leading AI startups in India and Ireland from 2022–2025 by industry bodies and research firms "}/>
  </div>
  <div className="col-start-2 row-start-2 -mt-[35%]">
    <Card para={"Ranked among Ireland’s top 12 AI companies by F6S in 2025 "}/>
  </div>
  <div className="col-start-3 row-start-3 -mt-[70%]">
    <Card para={"Trusted by leading enterprises, fully compliant and proven across complex, regulated environments "}/>
  </div>
</div>

    </div>

   </section>
  )
}

export default Proof

const Card=({img,para})=>{
    return(
        <>
        <div className="flex w-full justify-start">
          <div
            className="relative w-[30vw] rounded-[1.5vw] group cursor-pointer
    overflow-hidden flex flex-col items-center border transition-opacity border-[#59595980] 
    justify-between p-[2.5vw] px-[1vw] h-[22vw] background-glass backdrop-blur-[1vw]"
          >
            <div
              className="absolute inset-0 rounded-[2.5vw] 
      bg-gradient-to-r from-light-blue to-dark-blue 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-500 ease-in-out"
            />

            <div className="relative z-10 flex flex-col items-center justify-between h-full">
                <div className='h-[8vw] w-[8vw] '>
              <Image src={"/assets/images/homepage/recognized/top-10.png"} height={192} width={153} alt='award'/>
              </div>

              <p
                className="text-white-300 w-[90%] pb-[1vw] 
        transition-colors duration-500 ease-in-out text-center"
              >
               {para}
              </p>
            </div>
          </div>
        </div>
        </>
    )
}