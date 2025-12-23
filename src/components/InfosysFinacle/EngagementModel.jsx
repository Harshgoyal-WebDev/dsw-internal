"use client";
import Image from "next/image";
import React, {  useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Copy from "../Animations/Copy";
gsap.registerPlugin(ScrollTrigger);

const Card = ({ srcc, content, isActive, onHover }) => {
  return (
    <div
      onMouseEnter={onHover}
      className="card relative border border-[#88888880] h-[36vh] cursor-pointer w-[21vw] rounded-[2vw] py-[2vw] px-[2vw] overflow-hidden group"
    >
      <div className="absolute inset-0 background-glass transition-opacity duration-500" />

      <div
        className={`absolute inset-0 bg-gradient-to-r from-light-blue to-dark-blue transition-opacity ease-in-out duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative h-full w-full ">
        <div className="w-[5.2vw]">
          <Image
            src={srcc}
            height={300}
            width={300}
            alt="card-svg"
            className={`w-full h-full object-cover transition duration-500 ${
              isActive ? "brightness-0 invert" : ""
            }`}
          />
        </div>
        <div className="pt-[3.5vw]">
          <p className="text-white-300">{content}</p>
        </div>
      </div>
    </div>
  );
};

const EngagementModel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const cards = gsap.utils.toArray(".card");

//       if (!isMobile) {
//         const horizAnim = gsap.to(cardsContainerRef.current, {
//           x: "0",
//           ease: "none",
//           scrollTrigger: {
//             trigger: featuresRef.current,
//             start: "top 50%",
//             end: "70% 40%",
//             scrub: true,
//             // markers: true,
//           },
//         });
//         cards.forEach((card, i) => {
//           gsap.fromTo(
//             card,
//             { rotateY: 65, opacity: 0, scale: 0.8, transformPerspective: 900 },
//             {
//               rotateY: 0,
//               opacity: 1,
//               scale: 1,
//               duration: 1.5,
//               ease: "none",
//               scrollTrigger: {
//                 containerAnimation: horizAnim, // <-- tie to horizontal scroll
//                 trigger: card,
//                 scrub: true,
//                 start: "-100% 100%",
//                 end: "190% 90%",
//                 toggleActions: "play none none reverse",
//                 // markers: true,
//               },
//             }
//           );
//         });
//       }
//     }, featuresRef);

//     return () => ctx.revert();
//   }, []);

  return (
    <section
      className="h-full w-full relative"
    >
      <div className="bg-primary  max-sm:relative top-0 h-fit flex flex-col container !px-0">
        <div className=" max-md:w-[90%] pl-[5vw] max-sm:pl-0  max-sm:mx-auto max-md:space-y-[7vw] space-y-[1.5vw] max-sm:space-y-[6vw] max-md:pl-[7vw]">
          <h2 className="text-90 headingAnim w-[100%] text-center text-white-200 max-md:!text-[9vw]">
            Engagement Model  
          </h2>
        </div>

        <div className="w-full  block  pb-[1.2vw] pt-[4vw]">
          <div className="flex gap-[2vw]"
          >
            {cardsData.map((card, index) => (
              <Card
                key={index}
                srcc={card.src}
                content={card.content}
                isActive={activeIndex === index}
                onHover={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;

const cardsData = [
  {
    src: "/assets/icons/rollouts.svg",
    content:
      "Predictable and accelerated Finacle rollouts at scale. ",
  },
  {
    src: "/assets/icons/reduced.svg",
    content:
      "Reduced total cost of ownership (TCO) for core banking stacks. ",
  },
  {
    src: "/assets/icons/enterprise-grade.svg",
    content:
      "Enterprise-grade reliability with modernized, open architectures. ",
  },
  {
    src: "/assets/icons/skilled-team.svg",
    content:
      "Skilled teams ready to operate, extend, and innovate with Finacle. ",
  },
  
];
