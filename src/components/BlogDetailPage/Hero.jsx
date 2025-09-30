"use client";
import React, { useEffect } from "react";
import {
  fadeIn,
  fadeUp,
  headingAnim,
  lineAnim,
  paraAnim,
} from "../Animations/gsapAnimations";
import { initSplit } from "../splitTextUtils";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Hero({ breadcrumbs }) {
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();
  useEffect(() => {
    initSplit();
    gsap.to(".hero-img",{
      opacity:1,
      duration:0.8,
      ease:"power2.out"
    })
    gsap.set(".hero-head, .hero-crumb",{
      opacity:1,
    })
    gsap.fromTo(
      ".breadcrumbsContainer",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1,
      }
    );
  }, []);

  const pathname = usePathname();
  const pathArray = pathname.split("/").filter(Boolean);
  const createBreadcrumbName = (segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  return (
    <section
      id="blogDetail"
      className="h-screen max-md:h-screen container flex items-center justify-center w-full relative bg-[#FEFEFE] max-md:items-start max-md:!pt-[40vh]"
    >
      <div className="absolute inset-0 h-full w-full z-0 hero-img opacity-0 max-md:h-[35vh]">
        <Image
          width={1920}
          height={1080}
          src="/assets/images/blog-detail/heroBlogDetail.png"
          alt="Blog hero background"
          
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b to-black/20 from-black/90 max-md:from-black/20"></div>
      </div>
      <h1 className="text-100 headingAnim relative z-10 text-white-200 text-center opacity-0 hero-head w-[85%] max-md:text-background max-md:text-left max-md:w-full">
        How Generative AI is Transforming the Insurance Industry
      </h1>

      {breadcrumbs && (
        <div className="breadcrumbs overflow-hidden w-full flex items-start justify-start text-[1vw] text-[#CACACA] max-md:text-[2.7vw] max-sm:text-[4vw] max-md:h-fit absolute left-[5%] bottom-[8%] max-sm:top-[90%] max-md:top-[85%] z-[999] opacity-0 hero-crumb max-md:text-background">
          <div className="flex gap-3 breadcrumbsContainer">
            {pathArray
              .filter((segment) => segment && segment.toLowerCase() !== "home") // skip empty & "home"
              .map((segment, index, arr) => {
                const href = "/" + arr.slice(0, index + 1).join("/");
                const isLast = index === arr.length - 1;

                return (
                  <div key={index} className="flex items-center gap-2">
                    {/* only render '>' if not the first item */}
                    {index > 0 && <span>&gt;</span>}

                    {isLast ? (
                      <span>{createBreadcrumbName(segment)}</span>
                    ) : (
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(href);
                        }}
                        href={href}
                      >
                        {createBreadcrumbName(segment)}
                      </a>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </section>
  );
}
