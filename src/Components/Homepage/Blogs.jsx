import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import PrimaryButton from '../Button/PrimaryButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { NextButton, PreviousButton } from '../Button/SliderButtons';
import ArrowButton from '../Button/ArrowButton';
import Copy from '../Animations/Copy';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const BlogCard = ({ title, date, img }) => {
  return (
    <>
    <Link href={"#"}>
      <div className='rounded-3xl group border-[0.25px] border-stone-600 pb-4 bg-white/5 space-y-8 overflow-hidden group cursor-pointer under-multi-parent'>
        <div className='w-full h-full overflow-hidden rounded-3xl '>
          <Image src={img} width={531} height={510} alt='blog-1' className='object-cover h-[20vw] w-[31vw] group-hover:scale-[1.1] transition-all duration-500 ease-out' />
        </div>
        <div className='space-y-5 px-5'>
          <p className=' font-medium text-[#E8E8E8] leading-[1.5]'>
            <span className='under-multi pb-0.5'>{title}</span></p>
          <p className='text-[1.145vw] font-medium text-[#909090]'>{date}</p>
        </div>
         <div className="h-[3vw] w-[3vw] absolute top-6 right-6 bg-white/20 rounded-full group-hover:!bg-white group-hover:text-[#111111] transition-all duration-500 ease-out">
                                   <ArrowButton/>
                                   </div>
      </div>
      </Link>
    </>
  )
}
const Blogs = () => {
  const swiperRef = useRef(null);
  const blogsRef = useRef(null);

  useEffect(() => {
    if (blogsRef.current) {
      gsap.from(".swiper-container", {
        x: 50,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: blogsRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <section ref={blogsRef} className='h-full w-screen py-20 my-30 relative'>
      <div className='h-full w-full flex items-start justify-between pl-15'>
        <div className='w-1/2 space-y-10'>
          <h2 className='text-[5.2vw] leading-[1.2] w-[90%] headingAnim font-head text-white-200'>Stay Ahead with AI Insights</h2>
          <Copy>
          <p className='text-[#CACACA] w-[72%] leading-[1.4]'>stay informed with expert insights, industry updates, and real-world use cases from UnifyAI. Whether you&apos;re looking for the latest in Generative AI, AI governance, or enterprise AI adoption, we&apos;ve got you covered.</p>
          </Copy>
          <div className='fadeup'>
            <PrimaryButton text={"Know More"} href={"#"} />
          </div>
        </div>
        <div className='w-[50%] text-white'>
          <Swiper
            slidesPerView={1.8}
            className="mySwiper swiper-container"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={50}
            speed={1000}
          >
            {BlogsData.map((blog) => (
              <SwiperSlide className='w-[26vw] h-full pr-1'>
                <BlogCard
                  key={blog.id}
                  title={blog.title}
                  img={blog.img}
                  date={blog.date}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className='flex gap-6 mt-6'>
            <PreviousButton onClick={handlePrev} />
            <NextButton onClick={handleNext} />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Blogs;

const BlogsData = [
  {
    id: 1,
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
    img: "/assets/images/blog-1.png",
  },
  {
    id: 2,
    title: "Best Practices for AI Deployment in Regulated Industries",
    date: "6 March, 2025",
    img: "/assets/images/blog-2.png",
  },
  {
    id: 3,
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
    img: "/assets/images/blog-1.png",
  },
  {
    id: 4,
    title: "Best Practices for AI Deployment in Regulated Industries",
    date: "6 March, 2025",
    img: "/assets/images/blog-2.png",
  },
  {
    id: 5,
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
    img: "/assets/images/blog-1.png",
  },
  {
    id: 6,
    title: "Best Practices for AI Deployment in Regulated Industries",
    date: "6 March, 2025",
    img: "/assets/images/blog-2.png",
  }
]