'use client'
import Image from 'next/image'
import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const PlatformCapabilities = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  // useEffect(() => {
  //   if (!cardsRef.current || !sectionRef.current) return;

  //   const cards = cardsRef.current.querySelectorAll('.cap-cards');
  //   const totalCards = cards.length;

  //   gsap.set(cards, {
  //     yPercent: (i) => -100 * (i + 1), 
  //     scale: (i) => 1 - (i + 1) * 0.05,
  //     opacity: 0,
  //     zIndex:0,
  //   });

  //   const tl = gsap.timeline({
  //     defaults: { ease: 'power2.out' },
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "20% 60%",
  //       end: "80% 60%",
  //       scrub: true,
  //       // markers: true,
  //     },
  //   });

  //   tl.fromTo('.card-1', {
  //     opacity: 0,
  //   }, {
  //     opacity: 1,
  //     duration: 1
  //   }, 0);

  //   cards.forEach((card, i) => {
  //     const timePosition = i * 0.5 + 1;

  //     tl.to(card, {
  //       yPercent: 0,
  //       scale: 1,
  //       opacity: 1,
  //       duration: 1
  //     }, timePosition);

  //     for (let j = i + 1; j < totalCards; j++) {
  //       tl.to(cards[j], {
  //         yPercent: -100 * (j - i),
  //         scale: 1 - (j - i) * 0.05,
  //         duration: 0.5
  //       }, timePosition);
  //     }
  //   });

  //   return () => {
  //     if (tl.scrollTrigger) tl.scrollTrigger.kill();
  //     tl.kill();
  //   };
  // }, []);

  useEffect(() => {
  if (!cardsRef.current || !sectionRef.current) return;

  const cards = cardsRef.current.querySelectorAll('.cap-cards');
  const totalCards = cards.length;

  
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
}, []);


  return (
    <section id='plat-cap-container' ref={sectionRef} className='w-screen h-fit container '>
      <h2 className='text-[2.8vw] font-head  text-center headingAnim'>
        Platform Capabilities
      </h2>

      <div className='flex justify-center items-center flex-col  w-full gap-[1vw] pt-[2vw]' ref={cardsRef}>

     
        <div className='w-[34vw] h-[11vw] border card-1 z-[4] bg-white/5 background-glass border-gray-800 rounded-[2vw] flex justify-center gap-[2.5vw] items-center'>
          <div className='h-[5.5vw] w-[5.5vw]'>
            <Image src='/assets/icons/insuraince/code-setting.svg' width={300} height={300} className='h-full w-full' alt='cap-logo' />
          </div>
          <p className='text-white-300 w-[20vw]'>
            No-code model training and deployment
          </p>
        </div>

       
        <div className='w-[34vw] h-[11vw] relative z-[2] cap-cards border background-glass backdrop-blur-[2vw] border-gray-800 rounded-[2vw] flex justify-center gap-[2.5vw] items-center'>
          <div className='h-[5.5vw] w-[5.5vw]'>
            <Image src='/assets/icons/insuraince/monitor.svg' width={300} height={300} className='h-full w-full' alt='cap-logo' />
          </div>
          <p className='text-white-300 w-[20vw]'>
            Integrated monitoring for drift, accuracy, and performance
          </p>
        </div>

        <div className='w-[34vw] h-[11vw] border z-[1] cap-cards background-glass backdrop-blur-[2vw] border-gray-800 rounded-[2vw] flex justify-center gap-[2.5vw] items-center'>
          <div className='h-[5.5vw] w-[5.5vw]'>
            <Image src='/assets/icons/insuraince/one-click-deploy.svg' width={300} height={300} className='h-full w-full' alt='cap-logo' />
          </div>
          <p className='text-white-300 w-[20vw]'>
            Feature stores, model comparison, and one-click deployment
          </p>
        </div>

      </div>
    </section>
  )
}

export default PlatformCapabilities
