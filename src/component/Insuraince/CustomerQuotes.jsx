'use client'
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';


const panelsData = [
    {
      title: "Mr. Ritesh Rathod",
      name: "Mr. Ritesh Rathod",
      position: "Senior Data Analyst",
      company: "Tech Solutions",
      description: "Expert in data visualization and business intelligence with extensive experience in transforming complex datasets into actionable insights.",
      logo: "/assets/icons/insuraince/customer-logo-1.svg"
    },
    {
      title: "Mr. Stefano Bonfa",
      name: "Mr. Stefano Bonfa",
      position: "Lead Data Engineer", 
      company: "Data Corp",
      description: "Specialized in building robust data pipelines and implementing machine learning solutions for enterprise-level applications.",
      logo: "/assets/icons/insuraince/customer-logo-1.svg"
    },
    {
      title: "Mr. Neeraj Kulkarni",
      name: "Mr. Neeraj Kulkarni",
      position: "President / Chief Data Scientist",
      company: "CIEK Solutions",
      description: "Great expertise and analytical diligence by DSW UnifyAI in developing an end-to-end data pipeline - making analytical insights available in the form of interactive, advanced dashboards",
      logo: "/assets/icons/insuraince/customer-logo-1.svg"
    },
    {
      title: "Mr. Ritesh Tiwari",
      name: "Mr. Ritesh Tiwari",
      position: "AI Solutions Architect",
      company: "AI Innovations",
      description: "Pioneer in artificial intelligence and machine learning implementations, focusing on scalable AI solutions for modern businesses.",
      logo: "/assets/icons/insuraince/customer-logo-1.svg"
    }
  ];

const ExpandablePanels = () => {
  const [activePanel, setActivePanel] = useState(2); 
  const panelsRef = useRef([]);
  const contentRef = useRef([]);

  useEffect(() => {
    panelsRef.current.forEach((panel, index) => {
      if (index === activePanel) {
        gsap.set(contentRef.current[index], { opacity: 1, x: 0 });
      } else {
        gsap.set(contentRef.current[index], { opacity: 0, x: 0 });
      }
    });
  }, []);

  const handlePanelHover = (index) => {

    if (index === activePanel) return;

    // Animate out current active content
    gsap.to(contentRef.current[activePanel], {
      opacity: 0,
      x: 0,
      duration: 1,
      ease: "power2.inOut"
    });

    // Animate in new active content
    gsap.to(contentRef.current[index], {
      opacity: 1,
      x: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "power2.out"
    });
    setActivePanel(index);
  };

  return (
    <section className="container h-fit background-radial space-y-[8vw]">
         <h2 className='title-2 text-white-200 text-center headingAnim'>
            Real Customer Quotes
        </h2>
        <div className='flex items-center justify-center'>

      <div className="flex w-full px-[10vw] h-[65vh] overflow-hidden ">
        {panelsData.map((panel, index) => (
          <div
            key={index}
            ref={el => panelsRef.current[index] = el}
            className={`relative cursor-pointer transition-all duration-700 ease-out border-r border-white/30  overflow-hidden group ${
              activePanel === index 
                ? 'flex-[3] ' 
                : 'flex-[0.8]'
            } ${(index === 0) ? 'border-l ' : ''}`}
            onMouseEnter={() => handlePanelHover(index)}
          >

            {/* Vertical title for inactive panels */}
            <div className={`absolute inset-0 flex flex-col py-[1vw] items-center justify-between ease-out  transition-opacity duration-300 ${
              activePanel === index ? 'opacity-0 pointer-events-none' : 'opacity-90'
            }`}>
                <Image src='/assets/icons/insuraince/plus.svg' width={200} height={200} className='w-[2vw] h-[2vw]' alt='plus-icon' />
              <h3 className="text-white text-[2vw] font-display pl-[15vw] transform -rotate-90 whitespace-nowrap">
                {panel.title}
              </h3>
            </div>

            {/* Content for active panel */}
            <div
              ref={el => contentRef.current[index] = el}
              className={`absolute inset-0 flex flex-col justify-center items-start px-[4vw] text-center text-white ${
                activePanel === index ? 'block' : 'hidden'
              }`}
            >
              <div className="flex flex-col gap-[8vw] pt-[2vw] justify-center items-start">
                 <p className="text-[1.1vw] leading-relaxed font-display text-start text-white-300  w-[30vw]">
                  {panel.description}
                </p>
                <div>
                <h2 className="title-3 font-display text-start text-primary-2 py-[0.8vw] leading-tight">
                  {panel.name}
                </h2>
                <p className=" text-start text-white-300 ">
                  {panel.position}
                </p>
                <p className=" text-start text-white-300 ">
                  {panel.company}
                </p>
               
                </div>
              </div>
              
              {/* Company logo */}
              <div className="py-[2vw] items-start">
               <Image src={panel.logo} height={200} width={200} alt='company-logo' className='h-[3vw] w-auto' />
              </div>
            </div>
          </div>
        ))}
      </div>
         </div>
    </section>
  );
};

export default ExpandablePanels;



// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import Image from 'next/image';

// const panelsData = [
//   {
//     title: "Mr. Ritesh Rathod",
//     name: "Mr. Ritesh Rathod",
//     position: "Senior Data Analyst",
//     company: "Tech Solutions",
//     description: "Expert in data visualization and business intelligence with extensive experience in transforming complex datasets into actionable insights.",
//     logo: "/assets/icons/insuraince/customer-logo-1.svg"
//   },
//   {
//     title: "Mr. Stefano Bonfa",
//     name: "Mr. Stefano Bonfa",
//     position: "Lead Data Engineer", 
//     company: "Data Corp",
//     description: "Specialized in building robust data pipelines and implementing machine learning solutions for enterprise-level applications.",
//     logo: "/assets/icons/insuraince/customer-logo-1.svg"
//   },
//   {
//     title: "Mr. Neeraj Kulkarni",
//     name: "Mr. Neeraj Kulkarni",
//     position: "President / Chief Data Scientist",
//     company: "CIEK Solutions",
//     description: "Great expertise and analytical diligence by DSW UnifyAI in developing an end-to-end data pipeline - making analytical insights available in the form of interactive, advanced dashboards",
//     logo: "/assets/icons/insuraince/customer-logo-1.svg"
//   },
//   {
//     title: "Mr. Ritesh Tiwari",
//     name: "Mr. Ritesh Tiwari",
//     position: "AI Solutions Architect",
//     company: "AI Innovations",
//     description: "Pioneer in artificial intelligence and machine learning implementations, focusing on scalable AI solutions for modern businesses.",
//     logo: "/assets/icons/insuraince/customer-logo-1.svg"
//   }
// ];

// const ExpandablePanels = () => {
//   const [activePanel, setActivePanel] = useState(2); 
//   const panelsRef = useRef([]);
//   const contentRef = useRef([]);

//   useEffect(() => {
//     // Initial setup
//     panelsRef.current.forEach((panel, index) => {
//       gsap.set(panel, { width: index === activePanel ? "60%" : "13%" });
//     });

//     contentRef.current.forEach((el, index) => {
//       gsap.set(el, {
//         opacity: index === activePanel ? 1 : 0,
//         x: index === activePanel ? 0 : -100,
//         pointerEvents: index === activePanel ? 'auto' : 'none',
//         visibility: index === activePanel ? 'visible' : 'hidden'
//       });
//     });
//   }, []);

//   const handlePanelHover = (index) => {
//     if (index === activePanel) return;

//     const oldIndex = activePanel;
//     setActivePanel(index);

//     const tl = gsap.timeline();

//     // Step 1: animate widths
//     tl.to(panelsRef.current, {
//       width: (i) => (i === index ? "60%" : "13%"),
//       duration: 0.8,
//       ease: "power1.out"
//     });

//     // Step 2: fade out old content
//     tl.to(contentRef.current[oldIndex], {
//       opacity: 0,
//       x: -100,
//       duration: 0.4,
//       ease: "power2.out",
//       pointerEvents: 'none',
//       onComplete: () => {
//         gsap.set(contentRef.current[oldIndex], { visibility: 'hidden' });
//       }
//     }, "<"); 

    
//     tl.add(() => {
//       gsap.set(contentRef.current[index], { visibility: 'visible' });
//     });
//     tl.to(contentRef.current[index], {
//       opacity: 1,
//       x: 0,
//       duration: 0.6,
//       ease: "power2.out",
//       pointerEvents: 'auto'
//     }, "-=0.2"); // start slightly before width ends for smoothness
//   };

//   return (
//     <section className="container h-fit background-radial space-y-[8vw]">
//       <h2 className='title-2 text-white-200 text-center headingAnim'>
//         Real Customer Quotes
//       </h2>
//       <div className='flex items-center justify-center'>
//         <div className="flex w-full h-[65vh] px-[10vw] overflow-hidden">
//           {panelsData.map((panel, index) => (
//             <div
//               key={index}
//               ref={el => panelsRef.current[index] = el}
//               className={`relative cursor-pointer border-r border-[#EEEEEE80]/50 overflow-hidden group
//                 ${index === 0 ? 'border-l' : ''}`}
//               onMouseEnter={() => handlePanelHover(index)}
//             >
//               {/* Vertical title for inactive panels */}
//               <div className={`absolute inset-0 flex flex-col py-[1vw] items-center justify-between transition-opacity duration-500 
//                 ${activePanel === index ? 'opacity-0 pointer-events-none' : 'opacity-90'}`}>
//                 <Image src='/assets/icons/insuraince/plus.svg' width={200} height={200} className='w-[2vw] h-[2vw]' alt='plus-icon' />
//                 <h3 className="text-white text-[2vw] font-display pl-[15vw] transform -rotate-90 whitespace-nowrap">
//                   {panel.title}
//                 </h3>
//               </div>

//               {/* Content for active panel */}
//               <div
//                 ref={el => contentRef.current[index] = el}
//                 className="absolute inset-0 flex flex-col justify-center items-start px-[4vw] text-center text-white"
//               >
//                 <div className="flex flex-col gap-[8vw] pt-[2vw] justify-center items-start">
//                   <p className="text-[1.1vw] leading-relaxed font-display text-start text-white-300 w-[30vw]">
//                     {panel.description}
//                   </p>
//                   <div>
//                     <h2 className="title-3 font-display text-start text-primary-2 leading-tight">
//                       {panel.name}
//                     </h2>
//                     <p className=" text-start text-white-300 ">
//                       {panel.position}
//                     </p>
//                     <p className=" text-start text-white-300 ">
//                       {panel.company}
//                     </p>
//                   </div>
//                 </div>
//                 {/* Company logo */}
//                 <div className="py-[2vw] items-start">
//                   <Image src={panel.logo} height={200} width={200} alt='company-logo' className='h-[3vw] w-auto' />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExpandablePanels;


