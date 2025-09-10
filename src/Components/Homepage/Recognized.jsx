import Image from 'next/image'
import React from 'react'


const AwardItem=({img, title , year})=>{
    return (
        <>
        <div
        className="flex-shrink-0 flex items-center justify-center gap-[1vw] w-[30vw]" 
      >
        <div className='w-[7vw] h-auto'>
          <Image
            src={img}
            height={146}
            width={128}
            alt={title} 
            className='h-full w-full'
          />
        </div>
        <div className="space-y-[1vw]">
          <p className="font-display text-[1.565vw] text-[#E8E8E8]">{title}</p>
          <p className="text-[#CACACA]">{year}</p>
        </div>
      </div>
        </>
    )
}
const Recognized = () => {
    return (
        <section
            id='recognized'
            className="h-full w-screen py-[7vw] px-[5vw] relative overflow-hidden"
        >
            <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[3vw]">
                <div className="text-center  space-y-5 mt-10">
                    <h3 className="title-2 !leading-[1.35] headingAnim text-[#E8E8E8]">
                        Recognized for real-world AI enterprise impact
                    </h3>
                    <p className=" text-[#CACACA] w-[60%] mx-auto leading-[1.5]">
                        Trusted by enterprises. Validated by the world&apos;s leading benchmarks
                    </p>
                </div>

                <div className='w-full flex items-center justify-between px-[5vw] mt-[3vw]'>
                    <div className='h-[10vw] w-[10vw]'>
                        <Image src={"/assets/images/homepage/security-1.png"} height={178} width={178} alt='soc' className='h-full w-full object-contain' />
                    </div>
                    <div className='h-[10vw] w-[10vw]'>
                        <Image src={"/assets/images/homepage/security-2.png"} height={178} width={178} alt='iso' className='h-full w-full object-contain'/>
                    </div>
                    <div className='h-[10vw] w-[10vw]'>
                        <Image src={"/assets/images/homepage/security-3.png"} height={178} width={178} alt='hipaa' className='h-full w-full object-contain'/>
                    </div>
                    <div className='h-[10vw] w-[35vw]'>
                        <Image src={"/assets/images/homepage/security-4.png"} height={178} width={681} alt='hipaa' className='h-full w-full object-contain'/>
                    </div>

                </div>

                {/* <div className='w-fit flex items-center justify-between mt-[3vw] overflow-hidden'>
                    {awards.map((item, index) => (
                        <div className='flex items-center justify-center gap-[1vw] w-[30vw]' key={index}>
                            <div>
                                <Image src={item.img} height={146} width={128} alt='top-10-ai-startup' />
                            </div>
                            <div className='space-y-[1vw]'>
                                <p className='font-diaplay text-[1.565vw] text-[#E8E8E8]'>{item.title}</p>
                                <p className='text-[#CACACA]'>{item.year}</p>
                            </div>
                        </div>
                    ))}


                </div> */}

             <div className="relative w-screen overflow-hidden ">
  {/* <div className="marquee flex items-center will-change-transform">
    {[...awards, ...awards].map((item, index) => (
      
    ))}
  </div> */}
</div>

<div className="marquee">
  <div className="marquee__track">
    {awards.map((item, index) => <AwardItem key={index} img={item.img} title={item.title} year={item.year} />)}
    {awards.map((item, index) => <AwardItem key={index} img={item.img} title={item.title} year={item.year}/>)}
  </div>
</div>



            </div>
        </section>
    )
}

export default Recognized


const awards = [
    {
        img: "/assets/images/homepage/top-10.png",
        title: "Top 10 AI Startups",
        year: "Ireland 2024"
    },
    {
        img: "/assets/images/homepage/top-10.png",
        title: "Top 10 AI Startups",
        year: "Ireland 2024"
    },
    {
        img: "/assets/images/homepage/top-10.png",
        title: "Top 10 AI Startups",
        year: "Ireland 2024"
    },
    {
        img: "/assets/images/homepage/top-10.png",
        title: "Top 10 AI Startups",
        year: "Ireland 2024"
    },
    // {
    //     img: "/assets/images/homepage/top-10.png",
    //     title: "Top 10 AI Startups",
    //     year: "Ireland 2024"
    // },
]