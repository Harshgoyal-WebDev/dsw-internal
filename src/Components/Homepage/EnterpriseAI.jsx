import Image from 'next/image'
import React from 'react'

const EnterpriseAI = () => {
  return (
    <section
    id='enterpriseAI'
      className="h-full w-screen py-[7vw] px-[5vw] relative overflow-hidden bg-radial from-[#081B57]  to-[#01030F]"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative z-[2] space-y-[5vw]">
        <div className="text-center  space-y-5 mt-10">
          <h3 className="title-1 leading-[1.2] headingAnim text-[#E8E8E8]">
           Built to Orchestrate Enterprise AI
          </h3>
          <p  className=" text-[#CACACA] w-[60%] mx-auto leading-[1.5]">
           From insurance to banking, retail, and more — UnifyAI is the backbone for enterprises that want to build, deploy, and scale AI with speed and confidence. ​
          </p>
        </div>

      <div className='w-full h-full flex items-stretch justify-between relative'>
  <div className='h-full w-[18vw] border border-[#59595980] background-glass rounded-[2vw] px-[3vw] py-[2.5vw]'>
    <p className='text-[#CACACA] leading-[1.5]'>
      Your All-in-One Playground to Simplify and Accelerate End-to-End AI/ML Use Cases
    </p>
  </div>
  <div className='h-[50vw] flex-1'>
    <Image src={"/assets/images/homepage/enterprise-ai-shape.png"} height={920} width={767} alt='enterprise-ai'/>
  </div>
  <div className='h-full w-[19vw] border border-[#59595980] background-glass rounded-[2vw] px-[3vw] py-[2.5vw] self-end ml-auto'>
    <p className='text-[#CACACA] leading-[1.5]'>
      An In-built Playground for Rapid and Efficient GenAI Use Case Development
    </p>
  </div>

<div>
  <div className='absolute top-[25%] left-[73%]'>
    <p className='text-[#E8E8E8]'>Presentation Layer</p>
  </div>
  <div className='absolute top-[40%] left-[73%]'>
    <p className='text-[#E8E8E8]'>Use Cases</p>
  </div>
  <div className='absolute top-[53%] left-[73%]'>
    <p className='text-[#E8E8E8]'>Gen AI Studio</p>
  </div>
  <div className='absolute top-[53%] left-[22%] text-right'>
    <p className='text-[#E8E8E8]'>AI Studio</p>
  </div>
  <div className='absolute top-[63%] left-[21%] text-right'>
    <p className='text-[#E8E8E8]'>InsurAInce</p>
  </div>
  <div className='absolute top-[73%] left-[23%] text-right'>
    <p className='text-[#E8E8E8]'>UnifyAI</p>
  </div>
  <div className='absolute top-[83%] left-[13%] text-right'>
    <p className='text-[#E8E8E8]'>Infra: On-Premise/Cloud</p>
  </div>
  </div>
</div>

        </div>
        </section>

  )
}

export default EnterpriseAI



