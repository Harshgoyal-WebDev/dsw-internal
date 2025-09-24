"use client";
import React from "react";
import Image from "next/image";
import WhiteButton from "../Button/WhiteButton";
import { headingAnim } from "../Animations/gsapAnimations";
import Copy from "../Animations/Copy";
import { LinkButton } from "../Button/LinkButton";

const mainAnnouncement = {
  image: "/assets/images/news/dsw-launches.png",
  alt: "dsw-launches",
  title: "Deploying GenAI for Claims Automation",
  description:
    "Data Science Wizards (DSW) has unveiled a groundbreaking capability that allows insurance providers to deploy Generative AI solutions in just 2–4 hours, transforming traditional workflows such as claims processing, fraud detection, customer support, and document intelligence.",
  format: "Live Demo + Q&A",
  date: "July 4, 2025",
  author: "Jane Smith",
  href: "#",
};

const secondaryAnnouncements = [
  {
    image: "/assets/images/news/unifyai-achieves.png",
    alt: "unifyai-achieves",
    title: "Compliance-First AI: SOC 2, ISO & Beyond",
    type: "Expert Panel",
    date: "July 18, 2025",
    href: "/",
  },
  {
    image: "/assets/images/news/unifyai-achieves.png",
    alt: "unifyai-achieves",
    title: "AI in Insurance: Roadmap to Production in 30 Days",
    type: "Workshop",
    date: "August 2, 2025",
    href: "/",
  },
  {
    image: "/assets/images/news/unifyai-achieves.png",
    alt: "unifyai-achieves",
    title: "UnifyAI Showcase: What's New This Quarter",
    type: "Product Walkthrough",
    date: "August 16, 2025",
    href: "/",
  },
];

const UpcomingWebinars = () => {
  return (
    <section className="container" id="announcement">
      <div className="space-y-[7vw]">
        <div className="w-1/2 space-y-[1vw] max-md:w-full max-sm:text-center max-sm:space-y-[7vw] max-md:space-y-[5vw] ">
          <h2 className=" text-90  headingAnim">Upcoming Webinars & Events</h2>
          <Copy>
            <p>
              See how DSW is making waves across global tech and AI
              publications. Explore press features, interviews with our
              leadership, and industry mentions.
            </p>
          </Copy>
        </div>
        <div className="w-full space-y-[3vw] max-sm:mt-[20vw]">
          {/* Main Announcement */}
          <div className="w-full space-y-[4vw] max-sm:space-y-[7vw]">
            <div className="w-full h-fit flex gap-[4.5vw] max-md:flex-col max-md:gap-y-[7vw]">
              <div className="w-[30vw] h-[23vw] rounded-[1.2vw] overflow-hidden fadeup max-md:w-full max-md:h-[35vh] max-md:border max-md:border-white/10 max-md:rounded-[7vw]">
                <Image
                  src={mainAnnouncement.image}
                  alt={mainAnnouncement.alt}
                  className="w-full h-full"
                  width={400}
                  height={300}
                />
              </div>
              <div className="w-[60%] flex flex-col gap-[2vw] mt-[1vw] max-md:w-full max-sm:gap-[7vw] max-md:gap-[5vw]">
                <Copy>
                  <h3 className="text-30">{mainAnnouncement.title}</h3>
                </Copy>
                <Copy>
                  <p>{mainAnnouncement.description}</p>
                </Copy>

                <div className="flex gap-[4vw] fadeup max-md:flex-wrap max-md:justify-between max-md:gap-[7vw]">
                  <div className="flex flex-col gap-[0.5vw]">
                    <p className="text-white/40">Format</p>
                    <p>{mainAnnouncement.format}</p>
                  </div>
                  <div className="flex flex-col gap-[0.5vw]">
                    <p className="text-white/40">Webinar Date</p>
                    <p>{mainAnnouncement.date}</p>
                  </div>
                  <div className="flex flex-col gap-[0.5vw]">
                    <p className="text-white/40">Author</p>
                    <p>{mainAnnouncement.author}</p>
                  </div>
                </div>

                <div className="w-fit fadeup max-md:my-[10vw]">
                  <WhiteButton
                    background="border-primary-2 border bg-transparent hover:bg-transparent"
                    circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
                    text="Register Now"
                    href={mainAnnouncement.href}
                    className="hover:text-primary-2 text-primary-2"
                  />
                </div>
              </div>
            </div>
            <span className="w-full h-[1px] block bg-white/20 lineDraw" />
          </div>

          {/* Secondary Announcements */}
          <div className="max-md:w-screen max-md:overflow-x-scroll max-md:ml-[-7vw] max-md:mt-[7vw]">
            <div className="w-full flex justify-between fadeup pt-[3vw] max-md:w-[270vw] max-md:px-[7vw] max-md:pb-[10vw] ">
              {secondaryAnnouncements.map((item, index) => (
                <div
                  key={index}
                  className="w-[32%] h-fit flex flex-col gap-[1.5vw] max-md:gap-[7vw]"
                >
                  <div className="w-full h-[15vw] rounded-[1.2vw] overflow-hidden max-sm:h-[25vh] max-md:h-[35vh] max-md:rounded-[4.5vw] max-md:border max-md:border-white/20">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full"
                      width={400}
                      height={300}
                    />
                  </div>
                  <h3 className="text-30">{item.title}</h3>
                  <div className="w-full flex justify-between">
                    <p>{item.type}</p>
                    <p>{item.date}</p>
                  </div>
                  <LinkButton text={"Read More"} href={item.href} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;
