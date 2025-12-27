"use client";
import Image from "next/image";
import React from "react";
import { LinkButton } from "../Button/LinkButton";
import { formatDate } from "@/lib/datetime";

const Listing = ({news}) => {
  // console.log(news)
  return (
    <section className="container relative z-[10] max-md:mt-0 mt-[-20vh]" id="news-listing">
      <div className="w-full space-y-[4.5vw] max-md:space-y-[15vw] fadeupDelay">
        {news.map((news,id) => (
          <div
            key={id}
            className="w-full space-y-[4vw] fadeup max-md:space-y-[10vw]"
          >
            <div className="w-full h-fit flex gap-[2.5vw] max-md:flex-col max-md:gap-[5vw]">
              <div className="w-[30vw] h-[20vw] rounded-[2vw] overflow-hidden max-md:w-full max-sm:h-[30vh] max-md:h-[55vw] max-md:rounded-[3vw] max-sm:rounded-[5vw]">
                <Image
                  src={news.featuredImage.sourceUrl}
                  alt="listing images"
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="w-[60%] flex flex-col gap-[1.5vw] mt-[2vw] max-md:w-full max-md:gap-[7vw]">
                <p className="max-md:order-3 text-white-200 text-[1.05vw] max-md:text-[2.5vw] max-sm:text-[4vw]">{formatDate(news.newsDate.newsDate)}</p>
                <h3 className="text-30 ordder-2 text-white-200 max-sm:text-[5.5vw] max-sm:w-[90%]">{news.title}</h3>
                {/* <p className="max-md:order-1 text-white-300">{news.excerpt}</p> */}
                <div className="max-md:order-1 text-white-300" dangerouslySetInnerHTML={{__html:news.excerpt}}/>
                <LinkButton
                  href={`news/${news.slug}`}
                  text={"Read More"}
                  className="order-4"
                />
              </div>
            </div>
            <span className="w-full h-[1px] block bg-white/20 lineDraw" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Listing;
