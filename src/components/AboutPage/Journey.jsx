"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import Copy from "../Animations/Copy";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Journey() {
  const wholeSliderRef = useRef(null);
  
  useEffect(() => {

    const years = [
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
      "2025",
    ];

    // Set initial states for all years
    years.forEach((year) => {
      gsap.set(`.jl-${year}`, { scaleY: 0 });
      gsap.set(`.jd-${year}`, { scale: 0 });

      // Set initial state for split text animations
      gsap.set(`.title${year}Years`, { opacity: 1 });
      gsap.set(`.description${year}Years`, { opacity: 1 });
    });

    const titleSplits = {};
    const descriptionSplits = {};
    
    years.forEach((year) => {
      titleSplits[year] = new SplitText(`.title${year}Years`, {
        type: "chars, words, lines",
        mask: "lines",
      });
      
      descriptionSplits[year] = new SplitText(`.description${year}Years`, {
        type: "chars, words, lines",
        mask: "lines",
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wholeSliderRef.current,
        start: "top 23%",
        end: "+500%",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      wholeSliderRef.current,
      {
        xPercent: 0,
      },
      {
        xPercent: -75,
        ease: 'none'
      }
    );

    // Create a function to generate timeline for each year
    const createYearTimeline = (year, startPos, endPos, markerOptions = true, triggerPosStart, triggerPosEnd) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.jcontainer-${year}`,
          start: `${startPos}% ${triggerPosStart}%`,
          end: `${endPos}% ${triggerPosEnd}%`,
          scrub: true,
          markers: markerOptions,
        },
      });

      timeline
        .to(`.jl-${year}`, {
          scaleY: 1,
          duration: 0.5,
        })
        .to(`.jd-${year}`, {
          scale: 1,
          duration: 0.5,
        })
        .fromTo(
          titleSplits[year].lines,
          { y: 100 },
          {
            y: -5,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.inOut",
          },
          "<"
        )
        .fromTo(
          descriptionSplits[year].lines,
          { y: 100 },
          {
            y: -0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.inOut",
          }
        );

      return timeline;
    };

    // Create timelines for all years
    createYearTimeline("2018", 50, 100, false, 50, 50);
    createYearTimeline("2019", 80, 180, false, 50, 50);
    createYearTimeline("2020", 280, 380, false, 50, 50);
    createYearTimeline("2021", 300, 400, false, 50, 50);
    createYearTimeline("2022", 520, 620, false, 50, 50);
    createYearTimeline("2023", 600, 700, false, 50, 50);
    createYearTimeline("2024", 820, 920, false, 50, 50);
    createYearTimeline("2025", 820, 920, false, 50, 50);
    
    // Handle resize events to update animations
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
   
  }, []);

  return (
    <section
      id="journey"
      className="h-[400vh] max-md:h-[470vh] max-sm:h-[400vh] w-full  overflow-x-hidden relative background-radial container"
    >
      <div className="h-screen w-full sticky top-0">
        <div
          ref={wholeSliderRef}
          className="h-[60vh] max-md:w-[700vw]  max-sm:h-[60vh] max-md:h-[70vh]  flex gap-[5vw] mr-[2vw] items-center max-md:items-start max-sm:w-[700vw] max-md:flex-col w-[300vw]"
        >
          <div className="h-[100%] max-sm:h-[50vw] max-sm:w-[70vw] max-md:h-[60vh] max-md:w-[12.2%]  journey-img w-[25vw] overflow-hidden rounded-[2vw]">
            <Image
              src={"/assets/images/about/journey.jpg"}
              alt="journey"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[100%] relative h-full ">
            {/* LINE */}
            <div className="w-full absolute left-0 top-[49%] tranlate-y-[-50%] flex items-center h-fit">
              <div className="h-[.8vw] max-sm:h-[2vw] max-sm:w-[2vw] w-[.8vw] rounded-full bg-[#59595990]"></div>
              <div className="h-[1.5px] w-[95%] rounded-full bg-[#59595980]"></div>
              <div className="h-[.8vw] max-sm:h-[2vw] max-sm:w-[2vw] w-[.8vw] rounded-full bg-[#59595990]"></div>
            </div>

            <div className="h-1/2 flex items-center gap-[.5vw]  justify-start w-full ">
              <div className="w-[20%] max-sm:pt-[5vw] h-full ">
                <p className="title-1 headings w-[60%] headingAnim">
                  Foundations Of DSW
                </p>
              </div>

              <div className="w-full flex h-full gap-x-[8vw]">
                {/* TOP JOURNEY ITEMS */}
                {topJourneyData.map((item, index) => (
                  <div
                    key={`top-${index}`}
                    className={`w-[18%]  max-sm:flex max-sm:flex-col max-sm:justify-center journey-container px-[5vw] h-full relative ${item.containerClass}`}
                  >
                    {/* STOPS */}
                    <div className="w-full absolute left-0 bottom-0 top-0 h-full">
                      <div
                        className={`h-[12%] translate-x-[-50%] relative w-auto aspect-square rounded-full bg-primary-1 ${item.dotClass}`}
                      ></div>
                      <div
                        className={`h-[88%] w-[1.5px]  origin-bottom rounded-full bg-[#59595980] ${item.lineClass}`}
                      ></div>
                    </div>
                    <div className={`space-y-[2vw] ${item.contentClass}`}>
                      <p className={`title-3 leading-[2] ${item.titleClass}`}>
                        {item.year} – {item.title}
                      </p>
                      <p className={`text-white-300 ${item.descriptionClass}`}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-1/2 flex items-center justify-start w-full">
              <div className="w-[34%] pt-[2vw] max-sm:pt-[5vw] h-full">
                <Copy>
                  <p className="title-2 headings w-[100%]">2018-2025</p>
                </Copy>
              </div>
              <div className="w-full flex h-full gap-x-[12vw]">
                {/* BOTTOM JOURNEY ITEMS */}
                {bottomJourneyData.map((item, index) => (
                  <div
                    key={`bottom-${index}`}
                    className={`w-[18%] max-md:w-[20%]  max-md:flex max-md:flex-col max-md:justify-center  journey-container px-[5vw] h-full relative ${item.containerClass}`}
                  >
                    {/* STOPS */}
                    <div className="w-full absolute left-0 bottom-0 top-0 h-full">
                      <div
                        className={`h-[88%] origin-top w-[1.5px] rounded-full bg-[#59595980] ${item.lineClass}`}
                      ></div>
                      <div
                        className={`h-[12%] translate-x-[-50%] relative w-auto aspect-square rounded-full  bg-primary-1 ${item.dotClass}`}
                      ></div>
                    </div>
                    <div
                      className={`space-y-[2vw] pt-[2vw] max-md:pt-[7vw] ${item.contentClass}`}
                    >
                      <p className={`title-3 leading-[2] ${item.titleClass}`}>
                        {item.year} – {item.title}
                      </p>
                      <p className={`text-white-300 ${item.descriptionClass}`}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const topJourneyData = [
  {
    year: "2018",
    title: "The Beginning",
    content:
      "DSW was founded with a mission to make AI accessible, practical, and impactful for enterprises across industries.",
    lineClass: "jl-2018",
    dotClass: "jd-2018",
    contentClass: "jc-2018",
    containerClass: "jcontainer-2018",
    titleClass: "title2018Years",
    descriptionClass: "description2018Years",
  },
  {
    year: "2020",
    title: "The Beginning",
    content:
      "DSW was founded with a mission to make AI accessible, practical, and impactful for enterprises across industries.",
    lineClass: "jl-2020",
    dotClass: "jd-2020",
    contentClass: "jc-2020",
    containerClass: "jcontainer-2020",
    titleClass: "title2020Years",
    descriptionClass: "description2020Years",
  },
  {
    year: "2022",
    title: "The Beginning",
    content:
      "DSW was founded with a mission to make AI accessible, practical, and impactful for enterprises across industries.",
    lineClass: "jl-2022",
    dotClass: "jd-2022",
    contentClass: "jc-2022",
    containerClass: "jcontainer-2022",
    titleClass: "title2022Years",
    descriptionClass: "description2022Years",
  },
  {
    year: "2024",
    title: "The Beginning",
    content:
      "DSW was founded with a mission to make AI accessible, practical, and impactful for enterprises across industries.",
    lineClass: "jl-2024",
    dotClass: "jd-2024",
    contentClass: "jc-2024",
    containerClass: "jcontainer-2024",
    titleClass: "title2024Years",
    descriptionClass: "description2024Years",
  },
];

const bottomJourneyData = [
  {
    year: "2019",
    title: "The Beginning",
    content:
      "DSW was founded with a mission to make AI accessible, practical, and impactful for enterprises across industries.",
    lineClass: "jl-2019",
    dotClass: "jd-2019",
    contentClass: "jc-2019",
    containerClass: "jcontainer-2019",
    titleClass: "title2019Years",
    descriptionClass: "description2019Years",
  },
  {
    year: "2021",
    title: "The Beginning",
    content:
      "DSW was founded with a mission to make AI accessible, practical, and impactful for enterprises across industries.",
    lineClass: "jl-2021",
    dotClass: "jd-2021",
    contentClass: "jc-2021",
    containerClass: "jcontainer-2021",
    titleClass: "title2021Years",
    descriptionClass: "description2021Years",
  },
  {
    year: "2023",
    title: "The Beginning",
    content:
      "DSW was founded with a mission to make AI accessible, practical, and impactful for enterprises across industries.",
    lineClass: "jl-2023",
    dotClass: "jd-2023",
    contentClass: "jc-2023",
    containerClass: "jcontainer-2023",
    titleClass: "title2023Years",
    descriptionClass: "description2023Years",
  },
  {
    year: "2025",
    title: "The Beginning",
    content:
      "DSW was founded with a mission to make AI accessible, practical, and impactful for enterprises across industries.",
    lineClass: "jl-2025",
    dotClass: "jd-2025",
    contentClass: "jc-2025",
    containerClass: "jcontainer-2025",
    titleClass: "title2025Years",
    descriptionClass: "description2025Years",
  },
];
