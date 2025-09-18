"use client";
import Image from "next/image";
import React from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

export default function Clients() {
  useGSAP(() => {
    gsap.from(".clients-logo", {
      yPercent: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".clients-logo",
        start: "top 80%",
      },
    });
  });
  return (
    <section id="clients" className="container h-fit space-y-[5vw] w-full">
      <p className="w-full text-center headingAnim title-2">
        Memberships & Community Partners
      </p>
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-between">
          {clientData.map((client, index) => (
            <div key={index} className="relative w-[16.5%] clients-logo">
              <Image
                src={client.src}
                width={100}
                height={100}
                className="h-full w-full object-contain"
                alt={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const clientData = [
  { src: "/assets/icons/about/ciek.svg", name: "Boxprix" },
  { src: "/assets/icons/about/boxprix.svg", name: "Techstar" },
  { src: "/assets/icons/about/edge.svg", name: "AI Alliance" },
  { src: "/assets/icons/about/manipal.svg", name: "Cloud Partner" },
  { src: "/assets/icons/about/sodexo.svg", name: "Innovate" },
];
