'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import Copy from '../Animations/Copy'

const images = [
  '/assets/icons/bon-prix.svg',
  '/assets/icons/canara-hsbc.svg',
  '/assets/icons/edge-verve.svg',
  '/assets/icons/manipal-signa-big.svg',
  '/assets/icons/sodexo.svg',
  '/assets/icons/ciek.svg',
]

// random direction (x or y, ±200)
const randomDirection = () => {
  if (Math.random() < 0.5) {
    return { x: Math.random() < 0.5 ? -250 : 250, y: 0 }
  } else {
    return { y: Math.random() < 0.5 ? -200 : 200, x: 0 }
  }
}


const getRandomIndex = (exclude, length) => {
  let idx
  do {
    idx = Math.floor(Math.random() * length)
  } while (idx === exclude) 
  return idx
}

const Card = () => {
  const imgRefs = useRef([])
  const currentIndex = useRef(Math.floor(Math.random() * images.length)) // random start
  const nextIndex = useRef(getRandomIndex(currentIndex.current, images.length))

  useEffect(() => {
    const imgs = imgRefs.current   
    gsap.set(imgs[currentIndex.current], { 
        x: 0, 
        y: 0, 
        opacity: 1 
    })

    // place all others offscreen
    imgs.forEach((img, i) => {
      if (i !== currentIndex.current) {
        gsap.set(img, { ...randomDirection(), opacity: 0 })
      }
    })

    const tl = gsap.timeline({ 
        repeat: -1, 
        repeatDelay: 1.5 
    })

    const animateNext = () => {
      const curr = imgs[currentIndex.current]
      const next = imgs[nextIndex.current]

      // animate current out 
      tl.to(curr, {
        ...randomDirection(),
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        delay: 1.5,
      })
        // animate next in
        .fromTo(
          next,
          { ...randomDirection(), opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
          '<'
        )

      // update indices
      currentIndex.current = nextIndex.current
      nextIndex.current = getRandomIndex(currentIndex.current, images.length)
    }

    tl.eventCallback('onRepeat', animateNext)
    animateNext()
  }, [])

  return (
    <div className="w-[17vw] relative bg-[#081B57] h-[22vh] flex justify-center items-center border border-white/10 rounded-[2vw] overflow-hidden max-sm:h-[15vh] max-sm:w-[40vw] max-sm:rounded-[4vw]">
      {images.map((src, i) => (
        <div key={i} className="absolute" ref={(el) => (imgRefs.current[i] = el)}>
          <Image
            src={src}
            width={200}
            height={200}
            alt={`logo-${i}`}
            className="h-[3.2vw] w-auto max-sm:h-[8vw]"
          />
        </div>
      ))}
    </div>
  )
}

const TechPartners = () => {

    const shuffled = [...images].sort(() => Math.random() - 0.5)

  return (

    <div className='flex justify-start items-start container max-sm:flex-col'>
        <div className='w-[40%] space-y-[2vw] max-sm:w-full max-sm:space-y-[10vw] max-sm:pb-[10vw]'>

           <h2 className="text-60 text-white-200  headingAnim w-[80%]">
        Technology Partners
      </h2>

        <Copy>
                  <p className="text-white-300 w-[80%] max-sm:w-[100%]">
                   
        At Data Science Wizards, we believe that building world-class AI solutions requires more than just great ideas—it takes a powerful ecosystem. That’s why we partner with industry-leading technology providers, cloud platforms, and AI innovators to deliver secure, scalable, and future-proof solutions for our clients
      </p>
                </Copy>

        </div>

    <div className="h-full w-[60%] grid grid-cols-3 fadeup space-x-[1vw] space-y-[1vw] max-sm:w-full max-sm:grid-cols-2 max-sm:space-y-[3vw] ">
       {shuffled.map((src, i) => (
           <Card key={i} startIndex={i} images={images} />
        ))}
    </div>
        </div>
  )
}

export default TechPartners
