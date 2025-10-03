import React from "react";
import Copy from "../Animations/Copy";
import Image from "next/image";
import { LinkButton } from "../Button/LinkButton";

const secondaryAnnouncements = [
  {
    image: "/assets/images/product-videos/inside-unify.png",
    alt: "inside-unify",
    title: "AI for Insurance Workshop",
    date: "July 18, 2025",
    href: "/",
  },
  {
    image: "/assets/images/product-videos/genai-production.png",
    alt: "gen-ai-production",
    title: "AI & GenAI Masterclass",
    date: "July 18, 2025",
    href: "/",
  },
];

const Workshops = () => {
  return (
    <section
      className="container relative z-[10] max-sm:mt-0 mb-[7vw]"
      id="workshops"
    >
      <div className="space-y-[7vw] max-sm:space-y-[20vw]">
        <div className="w-full space-y-[1vw] max-sm:space-y-[7vw] max-md:!space-y-[2vw]">
          <h2 className="text-90 headingAnim  max-sm:w-full text-center">
            AI workshops
          </h2>
          <Copy>
            <p className="text-white-300 text-center">
              Watch demo walkthroughs, platform explainers, and customer success
              stories.
            </p>
          </Copy>
        </div>

        <div className="w-full flex justify-between  pt-[0.8vw] max-md:flex-col max-md:gap-[10vw] max-sm:gap-[18vw]">
          {secondaryAnnouncements.map((item, index) => (
            <div
              key={index}
              className="w-[47.5%] h-fit flex flex-col gap-[1.3vw] fadeup max-md:w-full max-md:gap-[3vw] max-sm:gap-[7vw] "
            >
              <div className="w-full h-[24vw] rounded-[1.8vw] overflow-hidden group max-md:h-[35vh] max-sm:h-[27vh] max-md:rounded-[4.5vw] max-md:border max-md:border-white/20">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.1] duration-700 ease-in-out "
                  width={400}
                  height={300}
                />
              </div>
              <h3 className="text-30 max-sm:text-[5.5vw]">{item.title}</h3>

              <p className="text-[1.05vw] max-md:text-[2.5vw] max-sm:text-[4vw]">{item.date}</p>

              <LinkButton text={"Learn More"} href={item.href} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
