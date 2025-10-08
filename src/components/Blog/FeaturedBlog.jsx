"use client";
import Image from "next/image";
import WhiteButton from "../Button/WhiteButton";
import Link from "next/link";
import ArrowButton from "../Button/ArrowButton";
import Copy from "../Animations/Copy";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { formatDate } from "@/lib/datetime";
gsap.registerPlugin(ScrollTrigger);

const FeaturedBlog = ({ posts }) => {
  const featuredPost = posts.find((post) => post.isSticky === true) || null;
  console.log(featuredPost);
  return (
    <section
      id="featured-blog-container"
      className=" w-screen h-full max-md:gap-[3vh] mt-[-20vh] max-md:mt-0 max-md:flex-col relative z-[20]"
    >
      <div className="w-full h-full flex fadeup justify-between container !pb-[0.5vw] max-md:flex-col  ">
        <div className="w-[45%] max-md:w-[85%] max-md:px-0  max-sm:w-full   rounded-3xl h-[30vw] max-md:h-[40vh] max-md:border max-md:border-white/30  relative group overflow-hidden">
          <Link href={featuredPost.slug}>
            <div className="w-full h-full   max-md:h-full max-md:w-full overflow-hidden rounded-3xl">
              <Image
                src={featuredPost.featuredImage.sourceUrl}
                width={800}
                height={800}
                alt="ai-img"
                className="w-full h-full object-cover max-md:h-full  group-hover:scale-[1.1] duration-700 ease-in-out transition-all"
              />
            </div>

            <div className="h-[3vw] max-md:hidden w-[3vw] featured-blog-img  absolute top-6 right-6 bg-white/20 rounded-full group-hover:!bg-white group-hover:text-[#111111] transition-all duration-500 ease-out max-md:h-[15vw] max-md:w-[15vw]">
              <ArrowButton />
            </div>
          </Link>
        </div>

        <div className="w-[55%]  p-[2.5vw] max-md:w-full  space-y-[3vw] max-md:space-y-[5vw] max-md:p-0 max-md:pt-[5vw] max-sm:pt-[7vw]">
          <div className="space-y-[1.8vw] max-md:space-y-[5vw]">
            <Copy>
              <h3 className="text-30 max-sm:text-[6vw] max-md:text-[4.5vw]">
                {featuredPost.title}
              </h3>
            </Copy>
            <Copy>
              <div
                className="text-white-300"
                dangerouslySetInnerHTML={{ __html: featuredPost?.excerpt }}
              />
            </Copy>
          </div>

          <div className="flex max-md:flex-wrap max-md:justify-between  gap-[3.5vw] max-sm:gap-[10vw]">
            <div className="space-y-[0.5vw] fadeup max-md:space-y-[1.5vw]">
              <p className="text-white/40 text-[1.05vw] max-md:text-[2.5vw] max-sm:text-[4vw]">
                Category
              </p>
              <p className="text-white-200 text-[1.05vw] max-md:text-[2.5vw] max-sm:text-[4vw]">
                AI
              </p>
            </div>

            <div className="space-y-[0.5vw] fadeup max-md:space-y-[1.5vw]">
              <p className="text-white/40 text-[1.05vw] max-md:text-[2.5vw] max-sm:text-[4vw]">
                Date
              </p>
              <p className="text-white-200 text-[1.05vw] max-md:text-[2.5vw] max-sm:text-[4vw]">
                {formatDate(featuredPost.date)}
              </p>
            </div>

            <div className="space-y-[0.5vw] fadeup max-md:space-y-[1.5vw]">
              <p className="text-white/40 text-[1.05vw] max-md:text-[2.5vw] max-sm:text-[4vw]">
                Author
              </p>
              <p className="text-white-200 text-[1.05vw] max-md:text-[2.5vw] max-sm:text-[4vw]">
                Jane Smith
              </p>
            </div>
          </div>

          <div className="max-md:py-[2.5vw] py-[0.7vw] fadeup">
            <WhiteButton
              background="border-primary-2 border bg-transparent hover:bg-transparent"
              circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
              text="Read More"
              href={featuredPost.slug}
              className="hover:text-primary-2 text-primary-2"
            />
          </div>

          <div className="hidden max-md:mt-[4vh] max-md:mb-[20vw] max-md:block max-md:w-full max-md:h-[1px] bg-[#434343]" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
