'use client'
import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
gsap.registerPlugin(ScrollTrigger);

  const cardsData = [
  {
    id: 1,
    icon: "/assets/icons/insuraince/code-setting.svg",
    text: "No-code model training and deployment",
    zIndex: "z-[4]",
  },
  {
    id: 2,
    icon: "/assets/icons/insuraince/monitor.svg",
    text: "Integrated monitoring for drift, accuracy, and performance",
    zIndex: "z-[2]",
  },
  {
    id: 3,
    icon: "/assets/icons/insuraince/one-click-deploy.svg",
    text: "Feature stores, model comparison, and one-click deployment",
    zIndex: "z-[1]",
  },
];

const PlatformCapabilities = () => {
  const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
  
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
  
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);

  useEffect(() => {
  if (!cardsRef.current || !sectionRef.current) return;

  const cards = cardsRef.current.querySelectorAll('.cap-cards');
  const totalCards = cards.length;

  if(!isMobile)
  {

  gsap.set(cards, {
    yPercent: (i) => -100 * (i + 1),
    scale: (i) => 1 - (i + 1) * 0.05,
    opacity: 0,
    zIndex: (i) => totalCards - i, 
  });

  const tl = gsap.timeline({
    defaults: { ease: 'power2.out' },
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "20% 60%",
      end: "80% 60%",
      scrub: true,
      // markers: true,
    },
  });

  tl.fromTo('.card-1',
    { opacity: 0, zIndex: totalCards + 2 }, 
    { opacity: 1, duration: 1, zIndex: totalCards + 2 },
    0
  );

 
  cards.forEach((card, i) => {
    const timePosition = i * 0.5 + 1;

    
    tl.to(card, {
      yPercent: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      
    }, timePosition);

  
    for (let j = i + 1; j < totalCards; j++) {
      tl.to(cards[j], {
        yPercent: -100 * (j - i),
        scale: 1 - (j - i) * 0.05,
        duration: 0.5,
      }, timePosition);
    }
  });

  return () => {
    if (tl.scrollTrigger) tl.scrollTrigger.kill();
    tl.kill();
  };
}

  
}, []);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };



  return (
    <section id='plat-cap-container' ref={sectionRef} className='w-screen h-fit container '>
      <h2 className='text-[2.8vw] max-sm:text-[8vw] font-head  text-center headingAnim'>
        Platform Capabilities
      </h2>

      <div className='flex justify-center items-center flex-col  w-full gap-[1vw] pt-[2vw] max-sm:hidden' ref={cardsRef}>

     
        <div className='w-[34vw] h-[11vw] border card-1 z-[4] bg-white/5 background-glass backdrop-blur-sm border-white/15 rounded-[2vw] flex justify-center gap-[2.5vw] items-center'>
          <div className='h-[5.5vw] w-[5.5vw]'>
            <Image src='/assets/icons/insuraince/code-setting.svg' width={300} height={300} className='h-full w-full' alt='cap-logo' />
          </div>
          <p className='text-white-300 w-[20vw]'>
            No-code model training and deployment
          </p>
        </div>
       
        <div className='w-[34vw] h-[11vw] relative z-[2] cap-cards border background-glass backdrop-blur-sm border-white/15 rounded-[2vw] flex justify-center gap-[2.5vw] items-center'>
          <div className='h-[5.5vw] w-[5.5vw]'>
            <Image src='/assets/icons/insuraince/monitor.svg' width={300} height={300} className='h-full w-full' alt='cap-logo' />
          </div>
          <p className='text-white-300 w-[20vw]'>
            Integrated monitoring for drift, accuracy, and performance
          </p>
        </div>

        <div className='w-[34vw] h-[11vw] border z-[1] cap-cards background-glass backdrop-blur-sm border-white/15 rounded-[2vw] flex justify-center gap-[2.5vw] items-center'>
          <div className='h-[5.5vw] w-[5.5vw]'>
            <Image src='/assets/icons/insuraince/one-click-deploy.svg' width={300} height={300} className='h-full w-full' alt='cap-logo' />
          </div>
          <p className='text-white-300 w-[20vw]'>
            Feature stores, model comparison, and one-click deployment
          </p>
        </div>

      </div>

      <div className='hidden max-sm:block max-sm:pt-[8vw]'>
           <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full"
          >

            {cardsData.map((card,index) => (
                 <SwiperSlide key={index}>
                    <div className='w-full h-[28vh] border  card-1 z-[4] bg-white/5 background-glass backdrop-blur-sm border-white/15 rounded-[2vw] max-sm:rounded-[7vw] flex max-sm:flex-col max-sm:justify-between max-sm:gap-[5vw] max-sm:py-[8vw] justify-center gap-[2.5vw] items-center'>
          <div className='h-[5.5vw] w-[5.5vw] max-sm:h-[24vw] max-sm:w-auto'>
            <Image src={card.icon} width={300} height={300} className='h-full w-full object-cover' alt='cap-logo' />
          </div>
          <p className='text-white-300 w-[20vw] max-sm:w-[80%] max-sm:text-center'>
            {card.text}
          </p>
        </div>
                 </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Nav Buttons */}
          <div className="w-full hidden max-sm:flex h-full mt-[15vw]  gap-[4vw] items-center justify-center">
            <div
              className={`w-[15vw] p-[5vw] btns flex items-center justify-center rounded-full h-[15vw]  rotate-180 bg-black/10 border border-white/50 ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={activeIndex !== 0 ? handlePrev : undefined}
            >
             <Image src='/assets/icons/slider-left.svg' width={200} height={200} className='w-[10vw] h-[10vw] text-white' alt='left-button' />
            </div>
            <div
              className={`w-[15vw] cursor-pointer p-[5vw] btns flex items-center justify-center rounded-full h-[15vw] bg-black/10 border border-white/50 ${activeIndex === 2 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={activeIndex !== 2 ? handleNext : undefined}
            >
              <Image src='/assets/icons/slider-right.svg' width={200} height={200} className='w-[10vw] h-[10vw] text-white' alt='right-button' />
            </div>
          </div>
      </div>
    </section>
  )
}

export default PlatformCapabilities
