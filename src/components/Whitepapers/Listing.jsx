"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { LinkButton } from "../Button/LinkButton";
import gsap from "gsap";
import Copy from "../Animations/Copy";

const listingData = [
  {
    date: "October 15, 2023",
    title:
      "From Pilot to Production: Scaling AI in Regulated Industries",
    description:
      "Learn how enterprises can move from experimentation to full-scale deployment of AI/ML and GenAI—while meeting compliance and governance standards.",
    imgSrc: "/assets/images/whitepapers/from-pilot-to-production.png",
    link: "/",
    btnText:"Download Now"
  },
  {
    date: "October 15, 2023",
    title: "Deploying GenAI Responsibly: A Strategy for Regulated Enterprises",
    description:
      "Explore GenAI architecture, risk mitigation techniques, and deployment best practices across industries like insurance and healthcare.",
    imgSrc: "/assets/images/whitepapers/deploying-genai.png",
    link: "/",
    btnText:"Get the Whitepaper"

  },
  {
    date: "October 15, 2023",
    title: "Security by Design: Building AI with SOC 2, ISO 27001, and GDPR in Mind",
    description:
      "Understand the technical and procedural safeguards needed to deploy AI solutions that are audit-ready and enterprise-secure.",
    imgSrc: "/assets/images/whitepapers/security-by-design.png",
    link: "/",
    btnText:"Download Now"

  },
  {
    date: "October 15, 2023",
    title:
      "AI in Insurance: 2025 Outlook & Innovation Roadmap",
    description:
      "Future-proof your strategy with predictions, investment trends, and use cases transforming the insurance sector.",
    imgSrc: "/assets/images/whitepapers/ai-in-insurance.png",
    link: "/",
    btnText:"Download Now"

  },
  {
    date: "October 15, 2023",
    title: "Security by Design: Building AI with SOC 2, ISO 27001, and GDPR in Mind",
    description:
      "Understand the technical and procedural safeguards needed to deploy AI solutions that are audit-ready and enterprise-secure.",
    imgSrc: "/assets/images/whitepapers/building-ai.png",
    link: "/",
    btnText:"Download Now"

  },
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
            // delay: id == 0 ? 2 : 0,
            ease: "power3.out",
            duration: 2,
          });
        });
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="container relative z-[10] mt-[-20vh] max-sm:mt-0" id="news-listing">
        <div className="space-y-[7vw] max-sm:space-y-[20vw] max-md:space-y-[12vw]">
        <div className="w-full space-y-[1.5vw] max-sm:space-y-[7vw]">
         <h2 className="text-90 headingAnim  max-sm:w-full text-center">Featured Whitepapers</h2>
                <Copy>
                  <p className="text-[#CACACA] text-center">
                    Watch demo walkthroughs, platform explainers, and customer success stories.
                  </p>
                </Copy>
                </div>
      <div className="w-full space-y-[4.5vw] max-sm:space-y-[15vw] max-md:space-y-[10vw]">
        {listingData.map((data, id) => (
          <div key={id} className="w-full space-y-[4vw] fadeupListing max-sm:space-y-[10vw] max-md:space-y-[8vw]">
            <div className="w-full h-fit flex gap-[2.5vw] max-md:flex-col max-sm:gap-[5vw] max-md:gap-[3vw] ">
              <div className="w-[30vw] h-[20vw] rounded-[1.8vw] overflow-hidden max-md:w-full max-sm:h-[25vh] max-sm:rounded-[4vw] max-md:h-[35vh]">
                <Image
                  src={data.imgSrc}
                  alt="listing images"
                  className="w-full h-full"
                  width={400}
                  height={300}
                />
              </div>
              <div className="w-[60%] flex flex-col gap-[1.5vw] mt-[2vw] max-md:w-full max-sm:gap-[7vw] max-md:gap-[3vw]">
                <p className="max-sm:order-3 text-[1.05vw] max-md:text-[2.5vw] max-sm:text-[4vw] text-white-200">{data.date}</p>
                <h3 className="text-30  text-white-200 max-sm:text-[5.5vw]">{data.title}</h3>
                <p className="max-sm:order-1 text-white-300">{data.description}</p>
                <LinkButton href={data.link} text={data.btnText} className="order-4" />
              </div>
            </div>
            <span className="w-full h-[1px] block bg-white/20 lineDraw" />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Listing;
