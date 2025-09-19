"use client";
import Image from "next/image";
import React from "react";
import { Icon, Linkedin } from "../ui/Icons";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

export default function Guiders() {
  useGSAP(() => {
    gsap.from(".guiders-cards", {
      yPercent: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".guiders-cards",
        start: "top 80%",
      },
    });
  });
  return (
    <section className="container w-[95%] mx-auto space-y-[6.5vw]">
      <h2 className="title-1 w-full text-center headingAnim">
        Guided by Industry Luminaries
      </h2>

      <div className="flex w-[100%] items-start gap-[3vw] justify-between">
        {GuidersData.map((guider, index) => (
          <div key={index} className="w-full guiders-cards">
            <div
              key={index}
              className="relative rounded-[1.5vw] overflow-hidden w-full  h-[19vw]"
            >
              <Image
                src={guider.src}
                width={100}
                height={100}
                className="h-full w-full object-cover"
                alt={guider.name}
              />
              <div
                style={{
                  background: "linear-gradient(to bottom, #F16B0D, #E61216)",
                }}
                className=" absolute right-[4%] top-[4%] z-[5] rounded-full flex items-center justify-center p-[.7vw]"
              >
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  className="w-[.8vw] h-[.8vw] object-contain"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.1283 17.6877C7.1283 13.8681 7.1283 10.0599 7.1283 6.24034C7.1283 6.14994 7.1283 6.05953 7.1283 5.94653C8.29224 5.94653 9.44488 5.94653 10.6314 5.94653C10.6314 6.46635 10.6314 6.98617 10.6314 7.51729C10.88 7.22348 11.0947 6.92967 11.3547 6.68106C11.9988 6.07083 12.7785 5.75442 13.6486 5.67532C14.4058 5.60752 15.1629 5.66402 15.8974 5.89003C17.0953 6.27424 17.8411 7.11047 18.1575 8.29702C18.3157 8.90724 18.3722 9.55136 18.4739 10.1729C18.4965 10.2972 18.5078 10.4215 18.5191 10.5571C18.5191 12.9189 18.5191 15.292 18.5191 17.6538C17.31 17.6538 16.0895 17.6538 14.8578 17.6538C14.8578 17.5521 14.8578 17.4617 14.8578 17.3826C14.8578 15.4389 14.8691 13.5065 14.8465 11.5628C14.8465 11.0882 14.7787 10.6023 14.677 10.139C14.5414 9.50616 14.1685 9.05415 13.5017 8.90724C13.2305 8.85074 12.948 8.83944 12.6655 8.86204C11.7502 8.92984 11.1512 9.41576 10.9478 10.3085C10.8348 10.817 10.7783 11.3594 10.7783 11.8793C10.7557 13.8229 10.767 15.7553 10.767 17.699C9.56919 17.6877 8.34874 17.6877 7.1283 17.6877Z"
                    fill="currentColor"
                  />
                  <path
                    d="M1.1947 17.6864C1.1947 15.2117 1.1947 12.7482 1.1947 10.2734C1.1947 8.91732 1.1947 7.54997 1.1947 6.19392C1.1947 6.11482 1.1947 6.03572 1.1947 5.94531C2.41515 5.94531 3.61299 5.94531 4.84474 5.94531C4.84474 6.03572 4.84474 6.12612 4.84474 6.21652C4.84474 10.0022 4.84474 13.7991 4.84474 17.5847C4.84474 17.6186 4.84474 17.6525 4.84474 17.6864C3.63559 17.6864 2.41515 17.6864 1.1947 17.6864Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.12653 2.20454C5.10393 3.40238 4.1321 4.34032 2.95685 4.30642C1.82681 4.28382 0.877575 3.28938 0.900176 2.13674C0.922777 0.984093 1.90591 0.0461586 3.05856 0.0687594C4.2225 0.102661 5.14913 1.0519 5.12653 2.20454Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className=" space-y-[1vw] w-full mt-[1vw]">
              <p className="text-[1.4vw] ">{guider.name}</p>
              <p className="w-[85%]">{guider.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const GuidersData = [
  {
    src: "/assets/images/guiders/javed.png",
    name: "Javed Tapia",
    role: "Founder, Chairman Clover InfoTech,Clover Realty,Ex-CEO RedHat India",
  },
  {
    src: "/assets/images/guiders/hemant.png",
    name: "Hemant Kenia",
    role: "Founder and CEO,SK International",
  },
  {
    src: "/assets/images/guiders/sharad.png",
    name: "Sharad Sanghi",
    role: "Chairman NTT, Global Data India,Ex-CEO and Managing Director of Netmagic",
  },
  {
    src: "/assets/images/guiders/upendra.png",
    name: "Dr. Upendra Rao",
    role: "Independent Director,IDBI-Intech,Ex-CTO State Bank of India",
  },
];
