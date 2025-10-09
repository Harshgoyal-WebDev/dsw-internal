"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { NextButton, PreviousButton } from "../Button/SliderButtons";
import ArrowButton from "../Button/ArrowButton";
import Copy from "../Animations/Copy";
import Link from "next/link";
import { formatDate } from "@/lib/datetime";

gsap.registerPlugin(ScrollTrigger);

const BlogCard = ({ title, date, img ,slug}) => {
  return (
    <>
      <Link href={`/resources/${slug}`}>
        <div className="rounded-[2vw] group border-[0.25px] border-white/30 pb-4 bg-white/5 space-y-8 overflow-hidden group cursor-pointer max-sm:pb-0 h-[33vw] max-sm:rounded-[6vw] max-sm:h-[110vw] max-md:h-[70vw] max-md:rounded-[4vw]">
          <div className="w-full h-[65%]  overflow-hidden rounded-3xl max-sm:h-[60%] ">
            <Image
              src={img}
              width={531}
              height={510}
              alt={title}
              className="object-cover h-full w-[31vw] group-hover:scale-[1.05] transition-all duration-500 ease-out max-sm:w-full max-md:w-full max-md:min-h-[30vh] max-sm:h-[60vw]"
            />
          </div>
          <div className="space-y-5 px-5">
            <p className=" font-medium text-[#E8E8E8] leading-[1.5]">
              <span className=" pb-0.5">{title}</span>
            </p>
            <p className="text-[1.145vw] font-medium text-[#909090] max-sm:text-[3.5vw] max-md:text-[2.2vw]">
              {formatDate(date)}
            </p>
          </div>
          <div className="h-[3vw] w-[3vw] absolute top-6 right-6 bg-white/20 rounded-full group-hover:!bg-white group-hover:text-[#111111] transition-all duration-500 ease-out max-md:h-[8vw] max-md:w-[8vw] max-sm:h-[15vw] max-sm:w-[15vw] ">
            <ArrowButton />
          </div>
        </div>
      </Link>
    </>
  );
};
const Blogs = ({posts}) => {
  const swiperRef = useRef(null);
  const blogsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(posts)
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
    <section
      ref={blogsRef}
      className="h-full w-screen  relative  overflow-hidden max-sm:my-0 !pr-0 container  max-sm:!pr-[7vw]"
    >
      <div className="h-full w-full flex items-start justify-between  max-md:flex-col max-sm:pl-0">
        <div className="w-1/2 space-y-10 max-md:w-full">
          <h2 className="text-90 leading-[1.2] w-[65%] headingAnim font-head text-white-200 max-md:w-[90%]">
            Stay Ahead with AI Insights
          </h2>
          <Copy>
            <p className="text-[#CACACA] w-[83%] leading-[1.4] max-md:w-[92%] max-sm:w-full">
              stay informed with expert insights, industry updates, and
              real-world use cases from UnifyAI. Whether you&apos;re looking for
              the latest in Generative AI, AI governance, or enterprise AI
              adoption, we&apos;ve got you covered.
            </p>
          </Copy>
          <div className="fadeup">
            <PrimaryButton text={"Know More"} href={"#"} />
          </div>
        </div>
        <div className="w-[50%] text-white max-sm:w-full max-md:w-[93%] max-md:mt-[10vw] fadeup ">
          <Swiper
            slidesPerView={2}
            className="mySwiper swiper-container"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            freeMode={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            spaceBetween={50}
            speed={1000}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.6,
                spaceBetween: 30,
              },
              1025: {
                slidesPerView: 1.8,
                spaceBetween: 15,
              },
              1440: {
                slidesPerView: 1.8,
                spaceBetween: 15,
              },
            }}
          >
            {posts.map((blog) => (
              <SwiperSlide className="w-[28vw] max-md:w-[50vw] h-full pr-1 max-sm:w-full">
                <BlogCard

                  key={blog.id}
                  title={blog.title}
                  img={blog.featuredImage.sourceUrl}
                  date={blog.date}
                  slug={blog.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-6 mt-12 max-sm:mt-10 max-md:items-center max-md:justify-center">
            <PreviousButton onClick={handlePrev}  isDisabled={activeIndex === 0} />
            <NextButton onClick={handleNext} isDisabled={BlogsData.length-1 === activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

const BlogsData = [
  {
    id: 1,
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
    img: "/assets/images/homepage/blogs/blog-1.png",
  },
  {
    id: 2,
    title: "Best Practices for AI Deployment in Regulated Industries",
    date: "6 March, 2025",
    img: "/assets/images/homepage/blogs/blog-2.png",
  },
  {
    id: 3,
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
    img: "/assets/images/homepage/blogs/blog-1.png",
  },
  {
    id: 4,
    title: "Best Practices for AI Deployment in Regulated Industries",
    date: "6 March, 2025",
    img: "/assets/images/homepage/blogs/blog-2.png",
  },
  {
    id: 5,
    title: "How Generative AI is Revolutionizing Insurance",
    date: "6 March, 2025",
    img: "/assets/images/homepage/blogs/blog-1.png",
  },
  {
    id: 6,
    title: "Best Practices for AI Deployment in Regulated Industries",
    date: "6 March, 2025",
    img: "/assets/images/homepage/blogs/blog-2.png",
  },
];
