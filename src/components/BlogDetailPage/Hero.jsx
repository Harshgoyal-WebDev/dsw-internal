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
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero({ breadcrumbs, post }) {
  const router = useRouter();

  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();

  useEffect(() => {
    initSplit();
    gsap.to(".hero-img", {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });
    gsap.set(".hero-head, .hero-crumb", {
      opacity: 1,
    });
    gsap.fromTo(
      ".breadcrumbsContainer",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1 }
    );
  }, []);

  const pathname = usePathname();
  const pathArray = pathname.split("/").filter(Boolean);

  const createBreadcrumbName = (segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  // Truncate to at most 4 words, append ellipsis if longer
  const truncateWords = (str, maxWords = 4) => {
    const words = (str || "").trim().split(/\s+/);
    if (words.length <= maxWords) return str;
    return words.slice(0, maxWords).join(" ") + "…";
  };

  return (
    <section
      id="blogDetail"
      className="h-screen max-md:h-[100vh] container flex items-center justify-center w-full relative bg-[#FEFEFE] max-md:items-start max-md:!pt-[40vh]"
    >
      <div className="absolute inset-0 h-full w-full z-0 hero-img opacity-0 max-md:h-[35vh]">
        <Image
          width={1920}
          height={1080}
          src={post?.featuredImage?.sourceUrl}
          alt="Blog hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b to-black/20 from-black/90 max-md:from-black/20"></div>
      </div>

      <h1 className="text-100 headingAnim relative z-10 text-white-200 text-center opacity-0 hero-head w-[85%] max-md:text-background max-md:text-left max-md:w-full">
        {post?.title}
      </h1>

      {breadcrumbs && (
        <div className="breadcrumbs overflow-hidden w-full flex items-start justify-start text-[1vw] text-[#CACACA] max-md:text-[2.7vw] max-sm:text-[4vw] max-md:h-fit absolute left-[5%] bottom-[8%] max-sm:top-[90%] max-md:top-[85%] z-[999] opacity-0 hero-crumb max-md:text-background">
          <div className="flex gap-3 breadcrumbsContainer">
            {pathArray
              .filter((segment) => segment && segment.toLowerCase() !== "home")
              .map((segment, index, arr) => {
                const href = "/" + arr.slice(0, index + 1).join("/");
                const isLast = index === arr.length - 1;

                const fullLabel = createBreadcrumbName(segment);
                const shortLabel = truncateWords(fullLabel, 4);

                return (
                  <div key={href} className="flex items-center gap-2">
                    {index > 0 && <span>&gt;</span>}

                    {isLast ? (
                      <span title={fullLabel}>{shortLabel}</span>
                    ) : (
                      <a
                        href={href}
                        title={fullLabel}
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(href);
                        }}
                      >
                        {shortLabel}
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
