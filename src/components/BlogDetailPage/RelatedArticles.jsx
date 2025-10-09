"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { NextButton, PreviousButton } from "../Button/SliderButtons";
import ArrowButton from "../Button/ArrowButton";
// import Copy from "../Animations/Copy";
import Link from "next/link";
import { formatDate } from "@/lib/datetime";

gsap.registerPlugin(ScrollTrigger);

const BlogCard = ({ title, date, img,slug }) => {
  return (
    <>
      <Link href={slug}>
        <div className="rounded-3xl group border-[0.25px] border-stone-600 pb-4 bg-white/5 space-y-8 overflow-hidden group cursor-pointer max-sm:pb-0 h-[33vw] max-sm:h-[110vw] max-md:h-[70vw] max-md:rounded-[4vw] max-sm:rounded-[6vw]">
          <div className="w-full h-[65%] overflow-hidden rounded-3xl max-sm:h-[60%]">
            <Image
              src={img}
              width={531}
              height={510}
              alt={title}
              className="object-cover h-full w-[31vw] group-hover:scale-[1.05] transition-all duration-500 ease-out max-md:w-full max-md:h-full"
            />
          </div>
          <div className="space-y-5 px-5">
            <p className=" font-medium text-[#E8E8E8] leading-[1.5] max-md:w-[80%] max-sm:w-full">
              <span className=" pb-0.5">{title}</span>
            </p>
            <p className="text-[1.145vw] font-medium text-[#909090] max-md:text-[3vw] max-sm:text-[3.5vw]">
              {formatDate(date)}
            </p>
          </div>
          <div className="h-[3vw] w-[3vw] absolute top-6 right-6 bg-white/20 rounded-full group-hover:!bg-white group-hover:text-[#111111] transition-all duration-500 ease-out max-sm:h-[15vw] max-md:h-[8vw] max-md:w-[8vw] max-sm:w-[15vw]">
            <ArrowButton />
          </div>
        </div>
      </Link>
    </>
  );
};
const RelatedArticles = ({post}) => {
  const swiperRef = useRef(null);
  const relatedArticlesRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const relatedBlogs = post.blogFields.relatedBlogs.edges

 

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
      id="relatedArticles"
      ref={relatedArticlesRef}
      className={`h-full w-screen  relative  overflow-hidden container flex-col flex `}
    >
      <div className="h-full w-full  gap-y-[4vw] flex flex-col items-start justify-between  max-sm:flex-col ">
        <div className="w-full   items-center justify-between flex max-sm:w-full">
          <h2 className="text-90 max-sm:w-full leading-[1.2] w-[65%] headingAnim font-head text-white-200 max-sm:text-center">
            Related Articles
          </h2>

          <div className="flex gap-6 max-sm:absolute max-sm:left-1/2 max-sm:translate-x-[-50%] max-sm:bottom-0 mt-12 max-sm:mt-10 max-sm:items-center max-sm:justify-center">
            <PreviousButton onClick={handlePrev} isDisabled={activeIndex === 0} />
            <NextButton onClick={handleNext} isDisabled={RelatedArticlesData.length-1 === activeIndex} />
          </div>
        </div>
        <div className="w-[100%] max-sm:py-[15vw] text-white fadeup ">
          <Swiper
            slidesPerView={3}
            className="mySwiper swiper-container max-md:!overflow-visible"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={50}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            speed={1000}
            breakpoints={{
               320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.4,
                spaceBetween: 30,
              },
              1025: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
          >
            {relatedBlogs.map((blog) => (
              <SwiperSlide className="w-[26vw] h-full pr-1 max-sm:w-full">
                <BlogCard
                  key={blog.node.id}
                  title={blog.node.title}
                  img={blog.node.featuredImage.node.sourceUrl}
                  date={blog.node.date}
                  slug={blog.node.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;

const RelatedArticlesData = [
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
