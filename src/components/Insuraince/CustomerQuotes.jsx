'use client'
import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const panelsData = [
  {
    title: 'Mr. Ritesh Rathod',
    name: 'Mr. Ritesh Rathod',
    position: 'Senior Data Analyst',
    company: 'Tech Solutions',
    description:
      'Expert in data visualization and business intelligence with extensive experience in transforming complex datasets into actionable insights.',
    logo: '/assets/icons/insuraince/customer-logo-1.svg',
  },
  {
    title: 'Mr. Stefano Bonfa',
    name: 'Mr. Stefano Bonfa',
    position: 'Lead Data Engineer',
    company: 'Data Corp',
    description:
      'Specialized in building robust data pipelines and implementing machine learning solutions for enterprise-level applications.',
    logo: '/assets/icons/insuraince/customer-logo-1.svg',
  },
  {
    title: 'Mr. Neeraj Kulkarni',
    name: 'Mr. Neeraj Kulkarni',
    position: 'President / Chief Data Scientist',
    company: 'CIEK Solutions',
    description:
      'Great expertise and analytical diligence by DSW UnifyAI in developing an end-to-end data pipeline - making analytical insights available in the form of interactive, advanced dashboards',
    logo: '/assets/icons/insuraince/customer-logo-1.svg',
  },
  {
    title: 'Mr. Ritesh Tiwari',
    name: 'Mr. Ritesh Tiwari',
    position: 'AI Solutions Architect',
    company: 'AI Innovations',
    description:
      'Pioneer in artificial intelligence and machine learning implementations, focusing on scalable AI solutions for modern businesses.',
    logo: '/assets/icons/insuraince/customer-logo-1.svg',
  },
]

const ExpandablePanels = () => {
  const [activePanel, setActivePanel] = useState(2) 
  const [activeMobilePanel, setActiveMobilePanel] = useState(2)

  const panelsRef = useRef([])
  const contentRef = useRef([])

  useEffect(() => {
    panelsRef.current.forEach((panel, index) => {
      if (index === activePanel) {
        gsap.set(contentRef.current[index], { opacity: 1, x: 0 })
      } else {
        gsap.set(contentRef.current[index], { opacity: 0, x: 0 })
      }
    })
  }, [])

  const handlePanelHover = (index) => {
    if (index === activePanel) return

    // Animate out current active content
    gsap.to(contentRef.current[activePanel], {
      opacity: 0,
      x: 0,
      duration: 1,
      ease: 'power2.inOut',
    })

    // Animate in new active content
    gsap.to(contentRef.current[index], {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 0.5,
      ease: 'power2.out',
    })
    setActivePanel(index)
  }

  const handlePanelClick = (index) => {
    setActiveMobilePanel(activeMobilePanel === index ? null : index)
  }

  return (
    <section className="container h-fit background-radial space-y-[8vw]">
      <h2 className="title-2 text-white-200 text-center headingAnim">
        Real Customer Quotes
      </h2>

      {/* Desktop Version  */}
      <div className=" items-center justify-center max-sm:hidden">
        <div className="flex w-full px-[10vw] h-[65vh] overflow-hidden ">
          {panelsData.map((panel, index) => (
            <div
              key={index}
              ref={(el) => (panelsRef.current[index] = el)}
              className={`relative cursor-pointer transition-all duration-700 ease-out border-r border-white/30 overflow-hidden group ${
                activePanel === index ? 'flex-[3]' : 'flex-[0.8]'
              } ${index === 0 ? 'border-l' : ''}`}
              onMouseEnter={() => handlePanelHover(index)}
            >
              {/* Vertical title for inactive panels */}
              <div
                className={`absolute inset-0 flex flex-col py-[1vw] items-center justify-between transition-opacity duration-300 ${
                  activePanel === index
                    ? 'opacity-0 pointer-events-none'
                    : 'opacity-90'
                }`}
              >
                <Image
                  src="/assets/icons/insuraince/plus.svg"
                  width={200}
                  height={200}
                  className="w-[2vw] h-[2vw]"
                  alt="plus-icon"
                />
                <h3 className="text-white text-[2vw] font-display pl-[15vw] transform -rotate-90 whitespace-nowrap">
                  {panel.title}
                </h3>
              </div>

              {/* Content for active panel */}
              <div
                ref={(el) => (contentRef.current[index] = el)}
                className={`absolute inset-0 flex flex-col justify-center items-start px-[4vw] text-center text-white ${
                  activePanel === index ? 'block' : 'hidden'
                }`}
              >
                <div className="flex flex-col gap-[8vw] pt-[2vw] justify-center items-start">
                  <p className="text-[1.1vw] leading-relaxed font-display text-start text-white-300 w-[30vw]">
                    {panel.description}
                  </p>
                  <div>
                    <h2 className="title-3 font-display text-start text-primary-2 py-[0.8vw] leading-tight">
                      {panel.name}
                    </h2>
                    <p className="text-start text-white-300">{panel.position}</p>
                    <p className="text-start text-white-300">{panel.company}</p>
                  </div>
                </div>
                {/* Company logo */}
                <div className="py-[2vw] items-start">
                  <Image
                    src={panel.logo}
                    height={200}
                    width={200}
                    alt="company-logo"
                    className="h-[3vw] w-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Accordion  */}
      <div className="flex flex-col w-full px-[2vw] max-sm:block hidden">
        {panelsData.map((panel, index) => (
          <div
            key={index}
            className="border-b border-white/30 duration-500 ease-in-out overflow-hidden group"
          >
            <div
              className="flex justify-between items-center py-[5vw] cursor-pointer"
              onClick={() => handlePanelClick(index)}
            >
              <h3 className={` text-[7vw] font-display duration-500  ease-in-out ${activeMobilePanel ===index ? 'text-primary-2' : 'text-white-200'}`}>
                {panel.title}
              </h3>
              <Image
                src="/assets/icons/insuraince/plus.svg"
                width={200}
                height={200}
                className={`w-auto h-[5vw] transition-transform duration-300 ${
                  activeMobilePanel === index ? 'hidden' : ''
                }`}
                alt="toggle-icon"
              />
            </div>

           
            <div
              className={`transition-all duration-700 ease-in-out ${
                activeMobilePanel === index
                  ? 'max-h-[100vh] h-[40vh] opacity-100 '
                  : 'max-h-0 h-0 opacity-0'
              } overflow-hidden`}
            >

               <div>
               
                <p className="text-start text-white-300">{panel.position}</p>
                <p className="text-start text-white-300">{panel.company}</p>
              </div>

              
              <div className="py-[4vw] items-start">
                <Image
                  src={panel.logo}
                  height={200}
                  width={200}
                  alt="company-logo"
                  className="h-[10vw] w-auto"
                />
              </div>

              <p className="text-[3.7vw] mt-[4vw] leading-relaxed font-display text-start text-white-300 w-full mb-[4vw]">
                {panel.description}
              </p>
             

              
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExpandablePanels
