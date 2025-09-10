import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'

const Tour = () => {
  return (
  <section className='w-screen h-fit px-[5vw] py-[7%]' id='tour'>
    <div className='w-full flex flex-col gap-[2vw] items-center'>
        <h2 className='title-2 headingAnim'>Take a Lightning Tour</h2>
        <p className='text-[#CACACA]'>Your OS for AI- not just for today's use cases, but for tomorrow's vision.</p>
        <button className='w-fit flex rounded-full border-blue-1 border p-[0.2vw] !text-[1.15vw] fadeup '>
            <div className='w-[12vw] px-[1.5vw] py-[1vw] flex items-center justify-center bg-blue-1 rounded-full'>
                <p>AI Studio</p>
            </div>
            <div className='w-[12vw] px-[1.5vw] py-[1vw] flex items-center justify-center'>
                <p>GenAI Studio</p>
            </div>
        </button>
        <div className='w-[80%] h-[40vh] relative mt-[5vw] fadeup'>
            <Image src={"/assets/images/homepage/tour-img.png"} alt='tour-img' className='w-full h-full object-cover' width={900} height={400}/>

             <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
                <PrimaryButton text={"See it, to believe it! ​"} className='' href={"/"}/>

             </div>
        </div>

    </div>

  </section>
  )
}

export default Tour