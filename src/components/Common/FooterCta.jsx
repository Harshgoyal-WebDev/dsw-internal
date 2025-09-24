"use client";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Copy from "../Animations/Copy";

const FooterCTA = ({ footerCTAData }) => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".scrolling", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#footer",
          start: "top 70%",
          end: "5% 70%",
          // markers:true,
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  const image1X = useTransform(smoothX, (v) => v * 20);
  const image1Y = useTransform(smoothY, (v) => v * 20);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-between h-[80vh] w-screen overflow-hidden max-md:flex-col-reverse  max-md:h-full container "
      id="footer-cta"
    >
      <div className="w-[45%] max-md:!w-full max-md:text-center max-sm:mt-[5vw]">
        <h2 className="text-90 font-head mb-[2vw] headingAnim text-white-200 max-sm:mb-[7vw]">
          {footerCTAData.heading}
        </h2>
        <Copy>
          <p data-para-anim className="text-[#CACACA]  mb-12">
            {footerCTAData.para}
          </p>
        </Copy>
        <div className="flex gap-6 max-md:items-center max-md:justify-center max-sm:flex-col">
          <div className="fadeup">
            <PrimaryButton
              text={footerCTAData.btnText1}
              href={footerCTAData.btnLink1}
            />
          </div>
          {footerCTAData.btnText2 && (
            <div className="fadeup">
              <WhiteButton
                text={footerCTAData.btnText2}
                href={footerCTAData.btnLink2}
              />
            </div>
          )}
        </div>
      </div>
      <div className="relative w-1/2 h-[50vw] max-md:w-full max-sm:h-[110vw]">
        <div className="absolute top-1/2 -translate-y-1/2 right-0 -z-10">
          <svg
            className="w-[95%] ml-auto"
            width="778"
            height="778"
            viewBox="0 0 778 778"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="389.094"
              cy="388.916"
              r="388.781"
              stroke="url(#paint0_linear_232_8167)"
              strokeOpacity="0.5"
              strokeWidth="0.25"
              className="circle-1"
            />
            <circle
              cx="389.094"
              cy="388.915"
              r="302.668"
              stroke="url(#paint1_linear_232_8167)"
              strokeOpacity="0.5"
              strokeWidth="0.25"
              className="circle-2"
            />
            <circle
              cx="389.095"
              cy="389.237"
              r="210.959"
              stroke="url(#paint2_linear_232_8167)"
              strokeOpacity="0.5"
              strokeWidth="0.25"
              className="circle-3"
            />
            <defs>
              <linearGradient
                id="paint0_linear_232_8167"
                x1="0.188477"
                y1="27.2433"
                x2="781.305"
                y2="30.8303"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#999999" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_232_8167"
                x1="86.3008"
                y1="107.325"
                x2="694.461"
                y2="110.118"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#999999" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_232_8167"
                x1="178.011"
                y1="192.935"
                x2="601.973"
                y2="194.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#999999" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <motion.div
          style={{ x: image1X, y: image1Y }}
          className="absolute w-[40%] top-[20%] left-[20%] rounded-2xl border border-white/30 overflow-hidden max-sm:w-[50%] max-sm:top-[5%] max-md:w-[35%] max-sm:left-[10%] max-md:left-[13.5%]
                    max-md:top-[-18%] fadeup "
        >
          <Image
            src={footerCTAData.img1}
            alt="CTA-Image1"
            width={348}
            height={312}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          style={{ x: image1X, y: image1Y }}
          className="absolute  w-[35%] bottom-[18%] left-[45%] rounded-2xl  border border-white/30 overflow-hidden max-sm:w-[50%] max-sm:left-[35%] max-md:left-[54%] fadeup"
        >
          <Image
            src={footerCTAData.img2}
            alt="CTA-Image2"
            width={313}
            height={272}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FooterCTA;
