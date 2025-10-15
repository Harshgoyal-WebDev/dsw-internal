"use client";
import React, { Suspense, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
import { useLenis } from "lenis/react";
import dynamic from "next/dynamic";
const DynamicShaderComp = dynamic(() => import("./BgShader/ShaderComp"), {
  ssr: false,
});

const Loader = () => {

  const [hidden, setIsHidden] = useState(false);
  const [mob, setMob] = useState(false);
   const [showLoader, setShowLoader] = useState(false);

  const lenis = useLenis();
  // console.log(lenis&&lenis._isStopped)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowLoader(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
  if(showLoader){
    const alreadyShown = sessionStorage.getItem("loaderShown");

    if (alreadyShown) {
      setShowLoader(false); 
      if (lenis) lenis.start();
      return;
    }

    if (lenis) {
      
      lenis.stop()
      console.log(lenis)

      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        const steps = 5; 
        if (globalThis.innerWidth > 1024) {
          for (let i = 1; i <= steps; i++) {
            tl.to(".sequence-container", {
              xPercent: i * 100,
              ease: "power3.inOut",
              duration: 1,
            }).to(
              ".number-container",
              {
                xPercent: i * 19.9,
                duration: 1,
                ease: "power3.inOut",
              },
              "<"
            );
          }
        } else if (globalThis.innerWidth > 768) {
          for (let i = 1; i <= steps; i++) {
            tl.to(".sequence-container", {
              xPercent: i * 100,
              ease: "power3.inOut",
              duration: 1,
            }).to(
              ".number-container",
              {
                xPercent: i * 19.9,
                duration: 1,
                ease: "power3.inOut",
              },
              "<"
            );
          }
        } else {
          for (let i = 1; i <= steps; i++) {
            tl.to(".sequence-container", {
              xPercent: i * 60,
              ease: "power3.inOut",
              duration: 1,
            }).to(
              ".number-container",
              {
                xPercent: i * 19.9,
                duration: 1,
                ease: "power3.inOut",
              },
              "<"
            );
          }
        }
        tl.to("#loader", {
          opacity: 0,
          filter: "blur(20px)",
          // duration:4,
          onComplete: () => {
            setIsHidden(true);
            lenis.start();
          },
        });
      });
      return () => ctx.revert();
    }
  }
  }, [lenis,showLoader]);
  useEffect(() => {
    if (!showLoader) return;
    if (globalThis.innerWidth > 1024) {
      const ctx = gsap.context(() => {
        gsap.to(".loader-gradient", {
          yPercent: -10,
          duration: 2,
          delay: 0.2,
          opacity: 1,
        });
      });
      return () => ctx.revert();
    } else {
      const ctx = gsap.context(() => {
        gsap.to(".loader-gradient", {
          yPercent: -28,
          duration: 2,
          delay: 0.2,
          opacity: 1,
        });
      });
      return () => ctx.revert();
    }
  });
  useEffect(() => {
    if (globalThis.innerWidth <= 1024) {
      setMob(true);
    } else {
      setMob(false);
    }
  }, [mob]);

  if (!showLoader) return null;

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 z-[9999] bg-background text-[17vw] overflow-hidden max-sm:text-[25vw] ${hidden ? "hidden" : ""}`}
      id="loader"
    >
      <div className="w-fit h-fit flex sequence-container relative z-[2] font-head font-medium">
        <div className="flex w-[10vw] overflow-hidden max-sm:w-[14.5vw]">
          <div className="flex w-fit translate-x-[-79%] number-container gap-[0.2vw]">
            <span>9</span>
            <span>7</span>
            <span>5</span>
            <span>2</span>
            <span>0</span>
          </div>
        </div>

        <div className="flex w-[10vw] overflow-hidden max-sm:w-[14.5vw]">
          <div className="flex w-fit translate-x-[-79%] number-container gap-[0.2vw]">
            <span>9</span>
            <span>7</span>
            <span>9</span>
            <span>7</span>
            <span>0</span>
          </div>
        </div>
      </div>
      <div className="loader-gradient opacity-0 relative z-[1] h-screen translate-y-[10%]">
        {!mob ? (
          // <div className="absolute top-[-5%] left-0 h-screen w-screen max-sm:hidden">
          //   <Suspense>
          //     <DynamicShaderComp color={"0x1726FD"} />
          //   </Suspense>
          // </div>
           <div className="w-screen h-screen absolute top-[-5%] left-0">
            <video
            src={"/assets/videos/shader-video.mp4"}
            playsInline
            autoPlay
            muted
            loop
            />

          </div>
        ) : (
          <div className="w-screen h-screen absolute top-[30%] z-[10] left-0 hidden max-sm:block">
            {/* <Image
              src={"/assets/images/homepage/gradient-mobile.png"}
              alt="bg-gradient"
              fetchPriority="high"
              className="w-full h-full object-cover"
              width={300}
              height={680}
            /> */}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Loader;
