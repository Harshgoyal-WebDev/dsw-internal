"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { LinkButton } from "../Button/LinkButton";
import gsap from "gsap";

const listingData = [
  {
    date: "October 15, 2023",
    title:
      "“Enterprise AI Without Complexity” — Interview with DSW’s CTO in Forbes Tech",
    description:
      "In a recent feature published by Forbes Technology, DSW’s Chief Technology Officer (CTO), shared powerful insights on how enterprises can embrace AI and GenAI at scale—without the usual roadblocks of complexity, integration delays, or compliance risk.",
    imgSrc: "/assets/images/news/enterprise-ai-new.png",
    link: "/",
  },
  {
    date: "October 15, 2023",
    title: "DSW Featured in TechCrunch as a GenAI Deployment Pioneer",
    description:
      "TechCrunch spotlighted Data Science Wizards as a pioneer in rapid GenAI deployment across traditional enterprises, especially in sectors where compliance and infrastructure constraints often slow innovation.",
    imgSrc: "/assets/images/news/dsw-featured-new.png",
    link: "/",
  },
  {
    date: "October 15, 2023",
    title: "CEO Talks AI Governance at World AI Summit",
    description:
      "At the prestigious World AI Summit, DSW’s CEO took the stage to address one of the most urgent topics in the AI space: governance, transparency, and accountability in enterprise AI systems.",
    imgSrc: "/assets/images/news/ceo-talks-new.png",
    link: "/",
  },
  //   {},
];
const Listing = () => {
  useEffect(() => {
    if (globalThis.innerWidth > 0) {
      const ctx = gsap.context(() => {
        const content = document.querySelectorAll(".fadeupListing");
        content.forEach((content, id) => {
          gsap.from(content, {
            scrollTrigger: {
              trigger: content,
              start: "top 90%",
              //   markers: true,
            },
            opacity: 0,
            y: 50,
            // delay: id : 0,
            ease: "power3.out",
            duration: 2,
          });
        });
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="container relative z-[10] max-md:mt-0 mt-[-20vh]" id="news-listing">
      <div className="w-full space-y-[4.5vw] max-md:space-y-[15vw]">
        {listingData.map((data, id) => (
          <div
            key={id}
            className="w-full space-y-[4vw] fadeupListing max-md:space-y-[10vw]"
          >
            <div className="w-full h-fit flex gap-[2.5vw] max-md:flex-col max-md:gap-[5vw]">
              <div className="w-[30vw] h-[20vw] rounded-[2vw] overflow-hidden max-md:w-full max-sm:h-[25vh] max-md:h-[55vw] max-md:rounded-[3vw] max-sm:rounded-[4vw]">
                <Image
                  src={data.imgSrc}
                  alt="listing images"
                  className="w-full h-full"
                  width={400}
                  height={300}
                />
              </div>
              <div className="w-[60%] flex flex-col gap-[1.5vw] mt-[2vw] max-md:w-full max-md:gap-[7vw]">
                <p className="max-md:order-3 text-white-200 text-[1.05vw] max-md:text-[2.5vw] max-sm:text-[4vw]">{data.date}</p>
                <h3 className="text-30 ordder-2 text-white-200 max-sm:text-[5.5vw]">{data.title}</h3>
                <p className="max-md:order-1 text-white-300">{data.description}</p>
                <LinkButton
                  href={data.link}
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
