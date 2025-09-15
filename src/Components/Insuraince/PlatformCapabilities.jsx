'use client'
import Image from 'next/image'
import React, {useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const PlatformCapabilities = () => {

  useEffect(() => {
    const ctx=gsap.context(() => {
        gsap.fromTo('.cap-cards', {
          y:'-12vw',
          opacity:0,
        } , {
          y:0,
          opacity:1,
          ease:'power2.out',
          duration:0.8,
          stagger:0.3,
          scrollTrigger: {
            trigger: '#plat-cap-container',
            start: 'top 60%',
            markers:false,
          }
        })
    })
    return () => ctx.revert();
  },[])

  return (
    <section id='plat-cap-container' className='w-screen h-fit container '>

         <h2 className='text-[2.8vw] font-head  text-center'>
            Platform Capabilities</h2>

        <div className='flex justify-center items-center flex-col  w-full gap-[1vw] pt-[2vw] '>

            <div className='w-[34vw] h-[11vw] border z-[0] bg-white/5 backdrop-blur-[2vw] border-gray-800 rounded-[2vw] flex justify-center gap-[2.5vw] items-center  '>

            <div className='h-[5.5vw] w-[5.5vw]'>
              <Image src='/assets/icons/insuraince/code-setting.svg' width={300} height={300} className='h-full w-full ' alt='cap-logo' />
              </div>
              <p className='text-white-300 w-[20vw] '>
                No-code model training and deployment
              </p>

            </div>

             <div className='w-[34vw] h-[11vw] relative z-[2] cap-cards translate-y-[-12vw] border bg-white/5 backdrop-blur-[2vw] border-gray-800 rounded-[2vw] flex justify-center gap-[2.5vw] items-center  '>

            <div className='h-[5.5vw] w-[5.5vw]'>
              <Image src='/assets/icons/insuraince/monitor.svg' width={300} height={300} className='h-full w-full ' alt='cap-logo' />
              </div>
              <p className='text-white-300 w-[20vw] '>
                Integrated monitoring for drift, accuracy, and performance
              </p>

            </div>

             <div className='w-[34vw] h-[11vw] border z-[4] cap-cards bg-white/5 translate-y-[-12vw] backdrop-blur-[2vw] border-gray-800 rounded-[2vw] flex justify-center gap-[2.5vw] items-center '>

            <div className='h-[5.5vw] w-[5.5vw]'>
              <Image src='/assets/icons/insuraince/one-click-deploy.svg' width={300} height={300} className='h-full w-full ' alt='cap-logo' />
              </div>
              <p className='text-white-300 w-[20vw] '>
                Feature stores, model comparison, and one-click deployment
              </p>

            </div>
          
        </div>

    </section>
  )
}

export default PlatformCapabilities