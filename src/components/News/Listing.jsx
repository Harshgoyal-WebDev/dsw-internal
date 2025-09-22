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
    imgSrc: "/assets/images/news/enterprise-ai.png",
    link: "/",
  },
  {
    date: "October 15, 2023",
    title: "DSW Featured in TechCrunch as a GenAI Deployment Pioneer",
    description:
      "TechCrunch spotlighted Data Science Wizards as a pioneer in rapid GenAI deployment across traditional enterprises, especially in sectors where compliance and infrastructure constraints often slow innovation.",
    imgSrc: "/assets/images/news/dsw-featured.png",
    link: "/",
  },
  {
    date: "October 15, 2023",
    title: "CEO Talks AI Governance at World AI Summit",
    description:
      "At the prestigious World AI Summit, DSW’s CEO took the stage to address one of the most urgent topics in the AI space: governance, transparency, and accountability in enterprise AI systems.",
    imgSrc: "/assets/images/news/ceo-talks.png",
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
            delay: id == 0 ? 2 : 0,
            ease: "power3.out",
            duration: 2,
          });
        });
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="container relative z-[10] mt-[-60vh] max-sm:mt-[-40vh]" id="news-listing">
      <div className="w-full space-y-[4.5vw] max-sm:space-y-[15vw]">
        {listingData.map((data, id) => (
          <div
            key={id}
            className="w-full space-y-[4vw] fadeupListing max-sm:space-y-[10vw]"
          >
            <div className="w-full h-fit flex gap-[2.5vw] max-sm:flex-col max-sm:gap-[5vw]">
              <div className="w-[30vw] h-[20vw] rounded-[1.2vw] overflow-hidden max-sm:w-full max-sm:h-[25vh] max-sm:rounded-[4vw]">
                <Image
                  src={data.imgSrc}
                  alt="listing images"
                  className="w-full h-full"
                  width={400}
                  height={300}
                />
              </div>
              <div className="w-[60%] flex flex-col gap-[1.5vw] mt-[2vw] max-sm:w-full max-sm:gap-[7vw]">
                <p className="max-sm:order-3">{data.date}</p>
                <h3 className="text-30 ordder-2">{data.title}</h3>
                <p className="max-sm:order-1 text-white-300">{data.description}</p>
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
