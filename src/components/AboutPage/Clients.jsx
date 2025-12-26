"use client";
import Image from "next/image";
import React from "react";


export default function Clients({showHeading = true}) {
  return (
    <section id="clients" className={`container ${showHeading ? 'mt-[0vw]' : 'mt-[-8vw]'} h-fit space-y-[5vw] w-full overflow-hidden`}>
      {showHeading && (
        <h2 className="w-full text-center headingAnim text-60">
          Memberships & Community Partners
        </h2>
      )}
      <div className="flex items-start fadeup justify-start clients-marquee  gap-[3vw]">
        <div className="flex items-center justify-start gap-[5vw] clients-marquee__track">
          {clientData.map((client, index) => (
            <div key={index} className="relative w-[15vw] clients-logo max-sm:w-[45vw] max-md:w-[35vw]">
              <Image
                src={client.src}
                width={100}
                height={100}
                quality={50}
                className="h-full w-full object-contain"
                alt={client.name}
                loading="lazy"
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
  { src: "/assets/icons/canara-hsbc.svg", name: "HSBC" },
  { src: "/assets/icons/about/sodexo.svg", name: "Innovate" },
  { src: "/assets/icons/about/ciek.svg", name: "Boxprix" },
  { src: "/assets/icons/about/boxprix.svg", name: "Techstar" },
  { src: "/assets/icons/about/edge.svg", name: "AI Alliance" },
  { src: "/assets/icons/about/manipal.svg", name: "Cloud Partner" },
  { src: "/assets/icons/canara-hsbc.svg", name: "HSBC" },
  { src: "/assets/icons/about/sodexo.svg", name: "Innovate" },
  { src: "/assets/icons/about/ciek.svg", name: "Boxprix" },
  { src: "/assets/icons/about/boxprix.svg", name: "Techstar" },
  { src: "/assets/icons/about/edge.svg", name: "AI Alliance" },
  { src: "/assets/icons/about/manipal.svg", name: "Cloud Partner" },
  { src: "/assets/icons/canara-hsbc.svg", name: "HSBC" },
  { src: "/assets/icons/about/sodexo.svg", name: "Innovate" },
];
