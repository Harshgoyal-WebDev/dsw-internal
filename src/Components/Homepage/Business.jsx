import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const businessData = [
  {
    title: "Insurance",
    link: "#",
    list: [
      "Sales Attrition",
      "Persistency",
      "Early Claim Prediction",
      "Customer Unification",
    ],
  },
  {
    title: "Banking",
    link: "#",
    list: [
      "Sales Attrition",
      "Persistency",
      "Early Claim Prediction",
      "Customer Unification",
    ],
  },
  {
    title: "Retail",
    link: "#",
    list: [
      "Sales Attrition",
      "Persistency",
      "Early Claim Prediction",
      "Customer Unification",
    ],
  },
  {
    title: "Healthcare",
    link: "#",
    list: [
      "Sales Attrition",
      "Persistency",
      "Early Claim Prediction",
      "Customer Unification",
    ],
  },
  {
    title: "Gaming",
    link: "#",
    list: [
      "Sales Attrition",
      "Persistency",
      "Early Claim Prediction",
      "Customer Unification",
    ],
  },
];

const Card = ({ data, index, activeCard, setActiveCard }) => {
  const isActive = activeCard === index;

  return (
    <Link href={data.link}>
      <div
        className="relative w-[27vw] rounded-4xl overflow-hidden border border-gray-800"
        onMouseEnter={() => setActiveCard(index)}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[#F16B0D] to-[#E61216] transition-opacity duration-300 ease-in-out z-0 pointer-events-none ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="relative z-10 bg-white/5 rounded-4xl py-14 px-8 space-y-20">
          <div
            className={`h-13 w-13 absolute top-8 right-8 rounded-full flex items-center justify-center transition-all duration-500 border ${
              isActive
                ? "bg-white text-black border-white"
                : "bg-white/5 text-white border-stone-600/80"
            }`}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.2587 1.45718C6.2587 2.15617 6.82039 2.70537 7.5069 2.70537H14.4843L0.891464 16.2982C0.404668 16.785 0.404668 17.5714 0.891464 18.0582C1.37826 18.545 2.16462 18.545 2.65142 18.0582L16.2443 4.46533V11.4427C16.2443 12.1292 16.806 12.6909 17.4925 12.6909C18.179 12.6909 18.7407 12.1292 18.7407 11.4427V1.45718C18.7407 0.770672 18.179 0.208984 17.4925 0.208984H7.5069C6.82039 0.208984 6.2587 0.770672 6.2587 1.45718Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="space-y-5 mt-40">
            <p data-para-anim className="text-[2.6vw] text-foreground">{data.title}</p>

            <ul className="list-disc text-[1.145vw] font-medium space-y-0.5 ml-[1vw]">
              {data.list.map((listData) => (
                <li key={listData}>
                 <p
  className={`flex items-center gap-1 group transition-all duration-500 ease ${
    isActive ? 'text-foreground' : 'text-white-200'
  }`}
>
                    {listData}
                    <span className="block">
                      <Image
                        src="/assets/icons/top-right-white.svg"
                        height={10}
                        width={10}
                        alt="top-right"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease"
                      />
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Business = () => {
  const cardsRef = useRef(null);
  const [activeCard, setActiveCard] = useState(1); // ✅ Make first card active initially

  useEffect(() => {
    const cards = cardsRef.current;

    const tl = gsap.timeline();
    tl.to(".card-container", {
      ease: "none",
      scrollTrigger: {
        trigger: ".card-container",
        start: "top 20%",
        end: "+1500 bottom",
        scrub: 1,
        pin: true,
      },
    });

    gsap.to(cards, {
      x: "-140vw",
      ease: "none",
      scrollTrigger: {
        trigger: ".card-container",
        start: "top bottom",
        end: "130% top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="h-full w-screen py-10 ">
      <div className="py-10 w-full">
        <div className="w-[52%] space-y-8 px-15">
          <h2 className="text-[5.2vw] font-head leading-[1.2] headingAnim text-white-200">
            AI That Works for Your Business
          </h2>
          <p data-para-anim className="content-p text-[#CACACA]">
            UnifyAI is designed to solve real-world business challenges with
            cutting-edge AI capabilities. Whether you need to enhance fraud
            prevention, automate workflows, or improve customer interactions,
            our AI solutions provide scalability, efficiency, and intelligence
            for enterprises across industries.
          </p>
        </div>

        <div className=" w-screen mt-[10vw] card-container overflow-x-hidden">
          <div
            className="ml-[90vw] overflow-x-auto w-fit flex gap-10 py-10 mr-[10vw]"
            ref={cardsRef}
          >
            {businessData.map((data, index) => (
              <Card
                key={index}
                data={data}
                index={index + 1}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Business;
