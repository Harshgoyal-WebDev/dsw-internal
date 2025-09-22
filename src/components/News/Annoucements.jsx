"use client";
import React from "react";
import Image from "next/image";
import WhiteButton from "../Button/WhiteButton";
import { headingAnim } from "../Animations/gsapAnimations";
import Copy from "../Animations/Copy";
import { LinkButton } from "../Button/LinkButton";

const Annoucements = () => {
  headingAnim();

  // Announcement data
  const mainAnnouncement = {
    image: "/assets/images/news/dsw-launches.png",
    alt: "dsw-launches",
    title:
      "DSW Launches Rapid GenAI Deployment Capability for Insurance Providers",
    description:
      "Data Science Wizards (DSW) has unveiled a groundbreaking capability that allows insurance providers to deploy Generative AI solutions in just 2–4 hours, transforming traditional workflows such as claims processing, fraud detection, customer support, and document intelligence.",
    category: "All",
    date: "October 10, 2024",
    author: "Jane Smith",
    href: "#",
  };

  const secondaryAnnouncements = [
    {
      image: "/assets/images/news/unifyai-achieves.png",
      alt: "unifyai-achieves",
      title:
        "UnifyAI Achieves SOC 2 & ISO 27001 Certification for Secure AI Infrastructure",
      date: "October 10, 2023",
      href: "/",
    },
    {
      image: "/assets/images/news/unifyai-achieves-2.png",
      alt: "unifyai-achieves-2",
      title:
        "UnifyAI Achieves SOC 2 & ISO 27001 Certification for Secure AI Infrastructure",
      date: "October 10, 2023",
      href: "/",
    },
    {
      image: "/assets/images/news/unifyai-achieves-3.png",
      alt: "unifyai-achieves-3",
      title:
        "UnifyAI Achieves SOC 2 & ISO 27001 Certification for Secure AI Infrastructure",
      date: "October 10, 2023",
      href: "/",
    },
  ];

  return (
    <section className="container" id="announcement">
      <h2 className="text-center text-100 mb-[7vw] headingAnim">
        Last Announcements
      </h2>
      <div className="w-full space-y-[3vw]">
        {/* Main Announcement */}
        <div className="w-full space-y-[4vw]">
          <div className="w-full h-fit flex gap-[4.5vw]">
            <div className="w-[30vw] h-[23vw] rounded-[1.2vw] overflow-hidden fadeup">
              <Image
                src={mainAnnouncement.image}
                alt={mainAnnouncement.alt}
                className="w-full h-full"
                width={400}
                height={300}
              />
            </div>
            <div className="w-[60%] flex flex-col gap-[2.5vw] mt-[1vw]">
              <Copy>
                <h3 className="text-30">{mainAnnouncement.title}</h3>
              </Copy>
              <Copy>
                <p>{mainAnnouncement.description}</p>
              </Copy>

              <div className="flex gap-[4vw] fadeup">
                <div className="flex flex-col gap-[0.5vw]">
                  <p className="text-white/40">Category</p>
                  <p>{mainAnnouncement.category}</p>
                </div>
                <div className="flex flex-col gap-[0.5vw]">
                  <p className="text-white/40">Publication Date</p>
                  <p>{mainAnnouncement.date}</p>
                </div>
                <div className="flex flex-col gap-[0.5vw]">
                  <p className="text-white/40">Author</p>
                  <p>{mainAnnouncement.author}</p>
                </div>
              </div>

              <div className="w-fit fadeup">
                <WhiteButton
                  background="border-primary-2 border bg-transparent hover:bg-transparent"
                  circleColor={"bg-primary-2 group-hover:!bg-primary-2"}
                  text="Read More"
                  href={mainAnnouncement.href}
                  className="hover:text-primary-2 text-primary-2"
                />
              </div>
            </div>
          </div>
          <span className="w-full h-[1px] block bg-white/20" />
        </div>

        {/* Secondary Announcements */}
        <div className="w-full flex justify-between fadeup pt-[3vw]">
          {secondaryAnnouncements.map((item, index) => (
            <div
              key={index}
              className="w-[32%] h-fit flex flex-col gap-[1.5vw]"
            >
              <div className="w-full h-[15vw] rounded-[1.2vw] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full"
                  width={400}
                  height={300}
                />
              </div>
              <h3 className="text-30">{item.title}</h3>
              <p>{item.date}</p>
              <LinkButton text={"Read More"} href={item.href} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Annoucements;
