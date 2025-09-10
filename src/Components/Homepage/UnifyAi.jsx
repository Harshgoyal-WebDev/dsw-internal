import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import WhiteButton from "../Button/WhiteButton";
import PrimaryButton from "../Button/PrimaryButton";
gsap.registerPlugin(ScrollTrigger);

const UnifyAi = () => {

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#unifyAi",
          start: "top 50%",
          end: "top top",
          scrub: 0.5,
        },
      });

      tl.to("#turbo", {
        opacity: 0,
        duration: 1,
      })
      tl.fromTo("#logo-container", {
        opacity: 0,
        scale: 0.5,
      }, {
        opacity: 1,
        scale: 1,
        duration: 1,
      }, "<");
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#unifyAi",
          start: "top top",
          end: "bottom top",
          scrub: 0.25,
          pin: true,
        },
      });
      ScrollTrigger.create({
        trigger: "#unifyAi",
        start: "top top",
        end: "+4200 top",
        // markers:true,
        // onEnter: () => {
        //   gsap.to(".dsw-logo", { filter: "brightness(6)", duration: 0 });
        // },
        // onLeave: () => {
        //   gsap.to(".dsw-logo", { filter: "brightness(1)", duration: 0 });
        // },
        // onEnterBack: () => {
        //   gsap.to(".dsw-logo", { filter: "brightness(6)", duration: 0});
        // },
        // onLeaveBack: () => {
        //   gsap.to(".dsw-logo", { filter: "brightness(1)", duration: 0 });
        // }
      });

      tl.to(".logo-wrapper", {
        y: 2540,
        x:-250,
        scale: 130,
        duration: 3,
        ease: "power3.out"
      })
      .from(".logo-background-content", {
        opacity: 0,
        duration: 1,
        delay: -1.5,
        ease: "none",
      });
    });
    return () => ctx.revert();
  });

  return (
    <section className="w-screen h-full relative mt-[-10vh] z-[1] pointer-events-none" id="unifyAi">
      <div className="w-full flex items-center justify-center overflow-hidden h-screen" id="logo-container">
        <div className="logo-wrapper">
          <svg width="310" height="91" viewBox="0 0 310 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3242 74.3109C8.72422 74.3109 0.424219 64.0109 0.424219 48.6109V1.41089H11.4242V48.6109C11.4242 59.7109 17.0242 64.8109 28.3242 64.8109C39.7242 64.8109 45.2242 59.7109 45.2242 48.6109V1.41089H56.3242V48.6109C56.3242 64.0109 48.0242 74.3109 28.3242 74.3109ZM95.8977 20.4109C105.298 20.4109 112.898 25.8109 112.898 37.5109V72.9109H103.098V40.2109C103.098 33.4109 100.098 28.8109 92.6977 28.8109C84.2977 28.8109 78.8977 33.9109 78.8977 41.6109V72.9109H69.0977V21.9109H78.8977V28.3109H79.0977C81.7977 24.4109 87.0977 20.4109 95.8977 20.4109ZM135.992 12.8109H124.892V2.21089H135.992V12.8109ZM135.292 72.9109H125.492V21.9109H135.292V72.9109ZM167.093 8.91088C162.993 8.91088 161.793 10.1109 161.793 15.5109V21.9109H171.293V30.0109H161.793V72.9109H151.893V30.0109H144.893V21.9109H151.893V15.7109C151.893 3.91088 156.793 0.710882 165.093 0.710882C166.993 0.710882 168.493 0.910886 171.293 1.31089V9.21089C169.293 9.01088 168.493 8.91088 167.093 8.91088ZM186.678 90.8109C184.478 90.8109 182.978 90.6109 180.378 90.1109V82.1109C182.078 82.3109 182.978 82.4109 184.578 82.4109C188.478 82.4109 193.078 80.4109 195.078 72.4109L174.478 21.9109H185.178L200.078 60.9109H200.278L214.278 21.9109H224.578L204.378 74.1109C199.478 86.7109 194.578 90.8109 186.678 90.8109ZM234.965 72.9109H223.365L249.965 1.41089H261.865L288.665 72.9109H276.665L270.765 55.7109H240.865L234.965 72.9109ZM255.765 11.6109L244.165 46.4109H267.665L255.965 11.6109H255.765ZM309.08 72.9109H298.08V1.41089H309.08V72.9109Z" fill="url(#paint0_linear_232_7574)" />
            <defs>
              <linearGradient id="paint0_linear_232_7574" x1="19.6938" y1="-23.0891" x2="298.707" y2="72.3515" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="logo-background-content mt-[-100vh] relative z-10 bg-white text-black w-full h-screen flex items-center justify-center pointer-events-auto">
        <div className="w-[58%] text-center space-y-10">
          <p className="content-p font-light">
            UnifyAI is a cutting-edge AI/ML platform that empowers businesses to
            develop, test, and deploy AI solutions with ease. Built for both
            traditional AI and Generative AI, it provides a unified ecosystem to
            accelerate AI adoption in industries like insurance, finance,
            healthcare, and retail.
          </p>
          <PrimaryButton text={"Book a Demo"} href={"#"}/>
        </div>
      </div>
    </section>
  );
};

export default UnifyAi;
