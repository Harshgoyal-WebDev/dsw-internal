import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
    const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tlZ = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+90% top',
          scrub: true,
          pin:true,
          // markers:true
        },
      });

   const tmove = gsap.timeline({
    scrollTrigger:{
      trigger:sectionRef.current,
      // markers:true,
      start:"top bottom",
      end:"+150% top",
      scrub:true
    }
   })
      tmove.fromTo(
        imageRefs.current,
        {
          transform: 'translateZ(-1000px)',
          delay: -0.8,
         
        },
        {
          transform: 'translateZ(500px)',
          // scale:0.4,
          stagger:0.03,
          ease: 'none',
        }
      );
      const tlBlur = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: '+90% top',
          scrub: true,
          // markers:true,
       
        },
      });
  
      tlBlur.from(
        imageRefs.current,
        {
          delay:-0.5,
          stagger: { each: 0.1, from: 'random' },
          filter: 'blur(15px)',
          opacity:0,
        }
        
      )
      .to(imageRefs.current,{
        // delay: -0.5,
        stagger: { each: 0.1, from: 'random' },
        filter: 'blur(15px)',
        opacity:0,

      })
    
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);
  
  

  return (
    <section ref={sectionRef} className='py-20 w-screen h-screen relative overflow-hidden'>
        <div className='w-full h-full flex items-center justify-center' style={{ perspective: '1000px', transformStyle: 'preserve-3d', }}>
            <div className='w-[60%] py-10'>
            <h2 className='font-head text-[5.2vw] leading-[1.2] text-center headingAnim text-white-200'>Trusted by Innovators, <br/>
            Built for Industry Disruptors.</h2>
            </div>
            {imageData.map((img, index) => (
      <div
        key={index}
        ref={el => imageRefs.current[index] = el}
        className={`absolute ${img.style} !scale-[0.9]`}
      >
        <Image
          quality={100}
          src={img.src}
          height={img.height}
          width={img.width}
          alt={img.alt}
        />
      </div>
    ))}
            

        </div>

    </section>
  )
}

export default Clients

const imageData = [
  {
    src: "/assets/images/manipal.png",
    alt: "manipal",
    height: 145,
    width: 276,
    style: "top-5 left-10 " ,
  },
  {
    src: "/assets/images/edgeverve.png",
    alt: "edgeverve",
    height: 150,
    width: 290,
    style: "top-2 left-[40vw] ",
  },
  {
    src: "/assets/images/sodexo.png",
    alt: "sodexo",
    height: 89,
    width: 277,
    style: "top-5 right-30 ",
  },
  {
    src: "/assets/images/canara.png",
    alt: "canara",
    height: 65,
    width: 218,
    style: "bottom-0 -right-20 ",
  },
  {
    src: "/assets/images/bon-prix.png",
    alt: "bon-prix",
    height: 102,
    width: 111,
    style: "bottom-[-5vw] right-[43vw] ", 
  },
  {
    src: "/assets/images/ciek.png",
    alt: "ciek",
    height: 68,
    width: 216,
    style: "bottom-4 left-20 ",
  },
  {
    src: "/assets/images/manipal.png",
    alt: "manipal",
    height: 145,
    width: 276,
    style: "bottom-[-10vw] right-[15vw]  ",

  },
  {
    src: "/assets/images/edgeverve.png",
    alt: "edgeverve",
    height: 150,
    width: 290,
    style: "bottom-[-10vw] left-[25vw] ", 

  },
  {
    src: "/assets/images/sodexo.png",
    alt: "sodexo",
    height: 89,
    width: 277,
    style: "bottom-[10vw] left-[-20vw] ",

  },
  {
    src: "/assets/images/canara.png",
    alt: "canara",
    height: 65,
    width: 218,
    style: "top-[-10vw] left-[20vw] ",
  },
  {
    src: "/assets/images/bon-prix.png",
    alt: "bon-prix",
    height: 102,
    width: 111,
    style: "top-0 right-[15vw] ",

  },
  {
    src: "/assets/images/ciek.png",
    alt: "ciek",
    height: 68,
    width: 216,
    style: "bottom-[20vw] right-[-30vw] ",

  },
];
