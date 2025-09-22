import Image from "next/image";
import React from "react";
import WhiteButton from "../Button/WhiteButton";
import Link from "next/link";
import ArrowButton from "../Button/ArrowButton";
import Copy from "../Animations/Copy";

const FeaturedBlog = () => {
  return (
    <section className="container w-full  flex justify-between max-sm:gap-[3vh] mt-[-75vh] max-sm:flex-col relative z-[20] max-sm:mt-[-25vh]">
      <div className="w-[45%] fadeup max-sm:w-full border-[0.25px] border-stone-700 rounded-3xl h-[60vh] max-sm:h-[40vh] relative group overflow-hidden">
        <Link href={"#"}>
          <div className="w-full h-full max-sm:h-full max-sm:w-full overflow-hidden rounded-3xl">
            <Image
              src="/assets/images/blog/ai-blog.png"
              width={800}
              height={800}
              alt="ai-img"
              className="w-full h-full object-cover max-sm:h-full  group-hover:scale-[1.05] transition-all duration-500 ease-out max-sm:w-auto"
            />
          </div>

          <div className="h-[3vw] max-sm:hidden w-[3vw] absolute top-6 right-6 bg-white/20 rounded-full group-hover:!bg-white group-hover:text-[#111111] transition-all duration-500 ease-out max-sm:h-[15vw] max-sm:w-[15vw]">
            <ArrowButton />
          </div>
        </Link>
      </div>

      <div className="w-[55%] p-[2.5vw] max-sm:w-full  space-y-[3vw] max-sm:space-y-[5vw]">
        <div className="space-y-[1.8vw] max-sm:space-y-[5vw]">
          <Copy>

          <p className="text-30">
            DSW Launches Rapid GenAI Deployment Capability for Insurance
            Providers
          </p>
          </Copy>

          <Copy>


          <p className="text-white-300">
            Data Science Wizards (DSW) has unveiled a groundbreaking capability
            that allows insurance providers to deploy Generative AI solutions in
            just 2–4 hours, transforming traditional workflows such as claims
            processing, fraud detection, customer support, and document
            intelligence.
          </p>
          </Copy>
        </div>

        <div className="flex max-sm:flex-wrap max-sm:justify-between  gap-[3.5vw]">
          <div className="space-y-[0.5vw] fadeup max-sm:space-y-[1.5vw]">
            <p className="text-[#909090]">Category</p>
            <p className="text-white-200">AI</p>
          </div>

          <div className="space-y-[0.5vw] fadeup max-sm:space-y-[1.5vw]">
            <p className="text-[#909090]">Date</p>
            <p className="text-white-200">October 10, 2024</p>
          </div>

          <div className="space-y-[0.5vw] fadeup max-sm:space-y-[1.5vw]">
            <p className="text-[#909090]">Author</p>
            <p className="text-white-200">Jane Smith</p>
          </div>
        </div>

        <div className="max-sm:py-[2.5vw] py-[0.7vw] fadeup">
          <WhiteButton
            background="border-primary-2 border bg-transparent hover:bg-transparent"
            circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
            text="Read More"
            href="#"
            className="hover:text-primary-2 text-primary-2"
          />
        </div>

        <div className="hidden max-sm:mt-[4vh] max-sm:block max-sm:w-full max-sm:h-[1px] bg-[#434343]" />
      </div>
    </section>
  );
};

export default FeaturedBlog;
