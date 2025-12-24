"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowButton from "../Button/ArrowButton";
import { NextButton, PreviousButton } from "../Button/SliderButtons";
import { formatDate } from "../../lib/datetime"
const BlogCard = ({ title, date ,slug,featuredImage}) => {
  return (
    <>
      <Link href={slug}>
        <div className="rounded-[1.8vw] fadeup relative group border-[0.25px] border-white/20 h-[33vw]  background-glass space-y-[2vw] max-sm:space-y-[8vw] overflow-hidden group cursor-pointer max-sm:pb-0 max-sm:h-[110vw] max-md:h-[80vw] max-md:rounded-[4vw] max-sm:rounded-[6vw] max-md:space-y-[5vw]">
          <div className="w-full h-[64%] max-sm:h-[60%] overflow-hidden max-sm:rounded-3xl rounded-[1.8vw] ">
            <Image
              src={featuredImage.sourceUrl}
              width={531}
              height={510}
              alt={title}
              className="object-cover h-full w-full group-hover:scale-[1.1] duration-700 ease-in-out transition-all max-sm:w-full max-sm:h-full "
            />
          </div>
          <div className="space-y-[1vw] max-sm:space-y-[4vw] px-5 max-md:w-full w-[90%] max-sm:w-[100%] max-md:px-[2.5vw] max-md:space-y-[2vw]">
            <p className=" font-medium text-[#E8E8E8] leading-[1.5] max-md:w-[80%] max-sm:w-full max-md:text-[3vw] max-sm:text-[4.5vw]">
              <span className=" pb-0.5">{title}</span>
            </p>
            <p className="text-[1.145vw] font-medium text-white/40 max-md:text-[2vw] max-sm:text-[3.5vw] ">
             {formatDate(date)}
            </p>
          </div>
          <div className="h-[3.5vw] w-[3.5vw] absolute top-6 right-6 bg-white/20 rounded-full group-hover:!bg-white group-hover:text-[#111111] transition-all duration-500 ease-out max-md:h-[8vw] max-md:w-[8vw] max-sm:h-[15vw] max-sm:w-[15vw]">
            <ArrowButton />
          </div>
        </div>
      </Link>
    </>
  );
};

// const blogData = [
//   {
//     id: 1,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/ai-blog.png",
//   },
//   {
//     id: 2,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/code.png",
//   },
//   {
//     id: 3,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/smart-watch.png",
//   },
//   {
//     id: 4,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/mac.png",
//   },
//   {
//     id: 5,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/lights.png",
//   },
//   {
//     id: 6,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/laptop.png",
//   },
//   {
//     id: 7,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/smartphone.png",
//   },
//   {
//     id: 8,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/chip.png",
//   },
//   {
//     id: 9,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/vr.png",
//   },
//   {
//     id: 10,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/ribbon.png",
//   },
//   {
//     id: 11,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/work.png",
//   },
//   {
//     id: 12,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/keyboard.png",
//   },
//   {
//     id: 13,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/code.png",
//   },
//   {
//     id: 14,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/ai-blog.png",
//   },
//   {
//     id: 15,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/ribbon.png",
//   },
//   {
//     id: 16,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/smart-watch.png",
//   },
//   {
//     id: 17,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/mac.png",
//   },
//   {
//     id: 18,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/vr.png",
//   },
//   {
//     id: 19,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/work.png",
//   },
//   {
//     id: 20,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/smartphone.png",
//   },
//   {
//     id: 21,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/keyboard.png",
//   },
//   {
//     id: 22,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/work.png",
//   },
//   {
//     id: 23,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/vr.png",
//   },
//   {
//     id: 24,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/laptop.png",
//   },
//   {
//     id: 25,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/lights.png",
//   },
//   {
//     id: 26,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/laptop.png",
//   },
//   {
//     id: 27,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/work.png",
//   },
//   {
//     id: 28,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/code.png",
//   },
//   {
//     id: 29,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/chip.png",
//   },
//   {
//     id: 30,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/vr.png",
//   },
//   {
//     id: 31,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/keyboard.png",
//   },
//   {
//     id: 32,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/ribbon.png",
//   },
//   {
//     id: 33,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/chip.png",
//   },
//   {
//     id: 34,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/lights.png",
//   },
//   {
//     id: 35,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/smart-watch.png",
//   },
//   {
//     id: 36,
//     title: "How Generative AI is Revolutionizing Insurance",
//     date: "6 March, 2025",
//     img: "/assets/images/blog/vr.png",
//   },
// ];

const BlogGrid = ({posts = []}) => {
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
    // console.log(posts)
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

      const cardsPerPage = isMobile ? 6 : 12;
      const totalPages = Math.ceil(posts.length / cardsPerPage);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  const startIndex = (page - 1) * cardsPerPage;
  const currentCards = posts.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="container relative !pt-0  space-y-[7vw] h-fit">
      {/* Grid */}
      <div className="grid grid-cols-3 gap-[3vw] max-sm:gap-[9vw] max-md:grid-cols-1">
        {currentCards.map((card, idx) => (
          <BlogCard key={card.id || idx} {...card} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-[2vw] max-sm:mt-[18vw] max-md:w-full max-md:justify-between">
        {/* Left arrow */}
        <PreviousButton onClick={handlePrev} isDisabled={page === 1} />

        <div className="flex max-sm:w-fit   max-sm:justify-center font-head max-md:space-x-[10vw] space-x-[2vw] text-30 text-[#909090]">


        {(() => {
            let pagesToShow = [];
            if (totalPages <= 3) {
              pagesToShow = Array.from({ length: totalPages }, (_, i) => i + 1);
            } else if (page <= 2) {
                pagesToShow = [1, 2, 3];
            } else if (page >= totalPages - 1) {
                pagesToShow = [totalPages - 2, totalPages - 1, totalPages];
            } else {
                pagesToShow = [page - 1, page, page + 1];
            }
            return pagesToShow.map((p) => (
                <button
                key={p}
                onClick={() => setPage(p)}
                className={`${
                    page === p ? "text-white-200" : "text-[#909090]"
                } transition cursor-pointer`}
                >
                {p}
              </button>
            ));
        })()}
        </div>

        {/* Right arrow */}
        <NextButton onClick={handleNext} isDisabled={page === totalPages} />
      </div>
    </section>
  );
};

export default BlogGrid;
