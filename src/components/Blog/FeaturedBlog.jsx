'use client'
import Image from "next/image";
import React, {useEffect} from "react";
import WhiteButton from "../Button/WhiteButton";
import Link from "next/link";
import ArrowButton from "../Button/ArrowButton";
import Copy from "../Animations/Copy";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FeaturedBlog = () => {

  useEffect(() => {
    const ctx= gsap.context(() => {
        gsap.fromTo('#featured-blog-container', {
          opacity:0,
          y: 30,
        }, {
          opacity:1,
          y:0,
          delay:2,
          duration:1.5,
          // scrollTrigger: {
          //   trigger:'#featured-blog-container',
          //   start: 'top 50%',
          //   markers:true,
          // }
        })
    })
    return () => ctx.revert();
  },[])

  return (
    <section id='featured-blog-container' className="container opacity-0 featured-blog-img w-full !pb-[0.5vw] gap-[1.5vw] flex justify-between max-md:gap-[3vh] mt-[-10vh] max-md:mt-0 max-md:flex-col relative z-[20]">
      <div className="w-[45%] max-md:w-[85%] max-md:px-0 max-md:px-p2   rounded-3xl h-[30vw] max-md:h-[40vh] max-md:border max-md:border-white/30  relative group overflow-hidden">
        <Link href={"#"}>
          <div className="w-full h-full   max-md:h-full max-md:w-full overflow-hidden rounded-3xl">
            <Image
              src="/assets/images/blog/ai-blog.png"
              width={800}
              height={800}
              alt="ai-img"
              className="w-full h-full object-cover max-md:h-full  group-hover:scale-[1.05] transition-all duration-500 ease-out max-md:w-auto"
            />
          </div>

          <div className="h-[3vw] max-md:hidden w-[3vw] featured-blog-img  absolute top-6 right-6 bg-white/20 rounded-full group-hover:!bg-white group-hover:text-[#111111] transition-all duration-500 ease-out max-md:h-[15vw] max-md:w-[15vw]">
            <ArrowButton />
          </div>
        </Link>
      </div>

      <div className="w-[55%]  p-[2.5vw] max-md:w-full  space-y-[3vw] max-md:space-y-[5vw]">
        <div className="space-y-[1.8vw] max-md:space-y-[5vw]">
     

          <p className="text-30">
            DSW Launches Rapid GenAI Deployment Capability for Insurance
            Providers
          </p>
     

        


          <p className="text-white-300">
            Data Science Wizards (DSW) has unveiled a groundbreaking capability
            that allows insurance providers to deploy Generative AI solutions in
            just 2–4 hours, transforming traditional workflows such as claims
            processing, fraud detection, customer support, and document
            intelligence.
          </p>
          
        </div>

        <div className="flex max-md:flex-wrap max-md:justify-between  gap-[3.5vw]">
          <div className="space-y-[0.5vw] fadeup max-md:space-y-[1.5vw]">
            <p className="text-[#909090]">Category</p>
            <p className="text-white-200">AI</p>
          </div>

          <div className="space-y-[0.5vw] fadeup max-md:space-y-[1.5vw]">
            <p className="text-[#909090]">Date</p>
            <p className="text-white-200">October 10, 2024</p>
          </div>

          <div className="space-y-[0.5vw] fadeup max-md:space-y-[1.5vw]">
            <p className="text-[#909090]">Author</p>
            <p className="text-white-200">Jane Smith</p>
          </div>
        </div>

        <div className="max-md:py-[2.5vw] py-[0.7vw] fadeup">
          <WhiteButton
            background="border-primary-2 border bg-transparent hover:bg-transparent"
            circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
            text="Read More"
            href="#"
            className="hover:text-primary-2 text-primary-2"
          />
        </div>

        <div className="hidden max-md:mt-[4vh] max-md:mb-[20vw] max-md:block max-md:w-full max-md:h-[1px] bg-[#434343]" />
      </div>
    </section>
  );
};

export default FeaturedBlog;
