import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import Image from 'next/image'

const Card = () => {
    return (
        <>
            <div className='h-[20vw] w-[28vw] rounded-[2vw] border-[0.82px] border-[#88888880] background-glass px-[2vw] py-[2vw] '>

            </div>
        </>
    )
}
const SuccessStories = () => {
    return (
        <>

            <section id='success-stories' className='h-full py-[7vw] px-[5vw] w-screen bg-radial from-[#081B57]  to-[#01030F]'>
                <div className='w-full h-full'>
                    <div className='w-full flex items-end justify-between'>
                        <div className="space-y-5 mt-10 w-[35%] ">
                            <h3 className="title-2 w-[85%] leading-[1.2] headingAnim text-[#E8E8E8]">
                                View Our Success Stories
                            </h3>
                            <p className=" text-[#CACACA] w-[99%] leading-[1.5]">
                                Explore how we&apos;ve helped businesses like yours achieve success with innovative technology solutions.
                            </p>
                        </div>
                        <div className=''>
                            <PrimaryButton text={"View All"} href="#" />

                        </div>
                    </div>

                    <div className='w-full h-full grid grid-cols-3 gap-x-[3vw] gap-[1.5vw] mt-[5vw] pr-[5vw]'>

    
    <div className='h-[20vw] w-[28vw] rounded-[2vw] border-[0.82px] border-[#88888880] background-glass px-[2vw] py-[2vw] cursor-pointer'>
<div className="h-full w-full flex">
  
  <div className="w-[70%] flex items-end">
    <p className="text-[1.565vw] text-[#F1F1F1] leading-[1.3]">Streamlining Operations with ERP Integration</p>
  </div>

  {/* right side (icon at top right) */}
  <div className="flex-1 flex items-start justify-end">
    <div className="rounded-full h-[3vw] w-[3vw] border-[0.82px] border-[#88888880] flex items-center justify-center">
      <Image
        src={"/assets/icons/arrow-right.svg"}
        height={20}
        width={20}
        alt="arrow"
        className="-rotate-45"
      />
    </div>
  </div>
</div>

        </div>


 <div className='h-[20vw] w-[28vw] rounded-[2vw] border-[0.82px] border-[#88888880] background-glass overflow-hidden group transition-all duration-300 ease'>
<div className='w-full h-full '>
    <Image src={"/assets/images/homepage/success-img.png"} height={459} width={568} alt='success- stories' className='object-cover h-full w-full scale-[1.05] group-hover:scale-[1] transition-all duration-300 ease'/>

</div>
        </div>

        
<div className='h-[20vw] w-[28vw] rounded-[2vw] border-[0.82px] border-[#88888880] background-glass px-[2vw] py-[2vw] '>
    <div className='w-full h-full flex flex-col justify-between'>
        <div>
            <p className='text-[#E8E8E8]'>With DSW's insurance-specific solutions on top of its robust AI platform, we&apos;ve been able to move use cases into production quickly.​</p>
        </div>
        <div className='flex items-center justify-center gap-[1vw]'>
            <div className='h-[5vw] w-[5vw] rounded-full overflow-hidden relative'>
<Image src={"/assets/images/homepage/ritesh-rathod.png"} fill alt='ritesh rathod' className='h-full w-full object-cover'/>
            </div>
            <div className='w-[90%] space-y-[0.8vw]'>
                <p className='font-display text-[1.565vw] text-[#E8E8E8]'>Ritesh Rathod</p>
                <p className='text-[#CACACA] font-medium'>Chief Strategy and Data Officer, Canara HSBC​</p>
            </div>

        </div>

    </div>

        </div>

        
 <div className='h-[20vw] w-[28vw] rounded-[2vw] border-[0.82px] border-[#88888880] background-glass overflow-hidden group transition-all duration-300 ease'>
<div className='w-full h-full '>
    <Image src={"/assets/images/homepage/success-img.png"} height={459} width={568} alt='success- stories' className='object-cover h-full w-full scale-[1.05] group-hover:scale-[1] transition-all duration-300 ease'/>

</div>
        </div>

        
<div className='h-[20vw] w-[28vw] rounded-[2vw] border-[0.82px] border-[#88888880] background-glass px-[2vw] py-[2vw] '>
    <div className='w-full h-full flex flex-col justify-between'>
        <div>
            <p className='text-[#E8E8E8]'>DSW UnifyAl simplified our data-driven approach, enabling easy development of Al-powered use cases.​​</p>
        </div>
        <div className='flex items-center justify-center gap-[1vw]'>
            <div className='h-[5vw] w-[5vw] rounded-full overflow-hidden relative'>
<Image src={"/assets/images/homepage/ritesh-rathod.png"} fill alt='ritesh rathod' className='h-full w-full object-cover'/>
            </div>
            <div className='w-[90%] space-y-[0.8vw]'>
                <p className='font-display text-[1.565vw] text-[#E8E8E8]'>Stefano Bonfa</p>
                <p className='text-[#CACACA] font-medium'>Director, OxSDE, Europe ​​</p>
            </div>

        </div>

    </div>

        </div>


<div className='h-[20vw] w-[28vw] rounded-[2vw] border-[0.82px] border-[#88888880] background-glass px-[2vw] py-[2vw] cursor-pointer'>
<div className="h-full w-full flex">
  
  <div className="w-[50%] flex items-end">
    <p className="text-[1.565vw] text-[#F1F1F1] leading-[1.3] font-display">90% Drop <br/> in Manual Effort​</p>
  </div>

  {/* right side (icon at top right) */}
  <div className="flex-1 flex items-start justify-end">
    <div className="rounded-full h-[3vw] w-[3vw] border-[0.82px] border-[#88888880] flex items-center justify-center">
      <Image
        src={"/assets/icons/arrow-right.svg"}
        height={20}
        width={20}
        alt="arrow"
        className="-rotate-45"
      />
    </div>
  </div>
</div>

        </div>

        
<div className='h-[20vw] w-[28vw] rounded-[2vw] border-[0.82px] border-[#88888880] background-glass px-[2vw] py-[2vw] '>
    <div className='w-full h-full flex flex-col justify-between'>
        <div>
            <p className='text-[#E8E8E8]'>With advanced capabilities of the platform's GenAI Studio, Castler’s escrow services became smarter, more efficient - enabling faster, secure, scalable solutions for our BFSI clients.​​</p>
        </div>
        <div className='flex items-center justify-center gap-[1vw]'>
            <div className='h-[5vw] w-[5vw] rounded-full overflow-hidden relative'>
<Image src={"/assets/images/homepage/ritesh-rathod.png"} fill alt='ritesh rathod' className='h-full w-full object-cover'/>
            </div>
            <div className='w-[90%] space-y-[0.8vw]'>
                <p className='font-display text-[1.565vw] text-[#E8E8E8]'>Ritesh Tiwari</p>
                <p className='text-[#CACACA] font-medium'>Chief Product Officer, ​Castler​​</p>
            </div>

        </div>

    </div>

        </div>


<div className='h-[20vw] w-[28vw] rounded-[2vw] border-[0.82px] border-[#88888880] background-glass px-[2vw] py-[2vw] cursor-pointer'>
<div className="h-full w-full flex">
  
  <div className="w-760%] flex items-end">
    <p className="text-[1.565vw] text-[#F1F1F1] leading-[1.3] font-display">3x faster <br/> time-to-production</p>
  </div>

  {/* right side (icon at top right) */}
  <div className="flex-1 flex items-start justify-end">
    <div className="rounded-full h-[3vw] w-[3vw] border-[0.82px] border-[#88888880] flex items-center justify-center">
      <Image
        src={"/assets/icons/arrow-right.svg"}
        height={20}
        width={20}
        alt="arrow"
        className="-rotate-45"
      />
    </div>
  </div>
</div>

        </div>

        
 <div className='h-[20vw] w-[28vw] rounded-[2vw] border-[0.82px] border-[#88888880] background-glass overflow-hidden group transition-all duration-300 ease'>
<div className='w-full h-full '>
    <Image src={"/assets/images/homepage/success-img.png"} height={459} width={568} alt='success- stories' className='object-cover h-full w-full scale-[1.05] group-hover:scale-[1] transition-all duration-300 ease'/>

</div>
        </div>

</div>


                </div>
            </section>
        </>
    )
}

export default SuccessStories