'use client'
import Image from "next/image";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Copy from "../Animations/Copy";

export default function About() {
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
                    scrub: true
                }
            })
        })
        return () => ctx.revert()
    }, [])

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
        <div ref={containerRef} className="flex items-center  justify-between h-[80vh] w-screen overflow-hidden max-sm:flex-col  max-sm:h-full container " id="footer-cta">
            <div className="relative w-1/2 h-[50vw] max-sm:w-full max-sm:h-[110vw] max-sm:mt-[20vh]">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 -z-10">
                    {/* <svg className="w-[95%] ml-auto" width="778" height="778" viewBox="0 0 778 778" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="389.094" cy="388.916" r="388.781" stroke="url(#paint0_linear_232_8167)" strokeOpacity="0.5" strokeWidth="0.25" className="circle-1" />
                        <circle cx="389.094" cy="388.915" r="302.668" stroke="url(#paint1_linear_232_8167)" strokeOpacity="0.5" strokeWidth="0.25" className="circle-2" />
                        <circle cx="389.095" cy="389.237" r="210.959" stroke="url(#paint2_linear_232_8167)" strokeOpacity="0.5" strokeWidth="0.25" className="circle-3" />
                        <defs>
                            <linearGradient id="paint0_linear_232_8167" x1="0.188477" y1="27.2433" x2="781.305" y2="30.8303" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#999999" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_232_8167" x1="86.3008" y1="107.325" x2="694.461" y2="110.118" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#999999" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_232_8167" x1="178.011" y1="192.935" x2="601.973" y2="194.882" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#999999" />
                            </linearGradient>
                        </defs>
                    </svg> */}
                </div>
                 <motion.div
                    style={{ x: image1X, y: image1Y }}
                    className="absolute w-[40%] top-[20%] left-[20%] rounded-2xl border border-white/30 overflow-hidden max-sm:w-[50%] max-sm:top-[5%] max-sm:left-[10%] fadeup "
                >
                    <Image src={"/assets/images/footer/image-1.png"} alt="Image1"  width={348} height={312} loading="lazy"  className="w-full h-full object-cover" />
                </motion.div>

                <motion.div
                    style={{ x: image1X, y: image1Y }}
                    className="absolute  w-[35%] bottom-[18%] left-[45%] rounded-2xl  border border-white/30 overflow-hidden max-sm:w-[50%] max-sm:left-[35%] fadeup"
             >
                    <Image src={"/assets/images/footer/image-2.png"} alt="Image2"  width={313} height={272} loading="lazy"  className="w-full h-full object-cover" />
                </motion.div>
            </div>
              <div className="w-[60%] max-sm:!w-[100%] max-sm:text-center  space-y-[2vw]">
                <h2 className="title-2  max-sm:text-wrap leading-[1.2] font-head  headingAnim text-white-200 max-sm:!text-[10vw] max-sm:mb-[7vw]">One Platform. Built with Insurance
                     DNA. Unified AI and GenAI.</h2>
                <div className="space-y-[0.5vw]">
                <Copy>
                <p className="text-white-300 w-[90%] max-sm:w-[100%] max-sm:py-[2vh]">The pressure to modernize is high, but most insurers still struggle to move from pilot projects to production-ready AI. Long development cycles, fragmented tools, and rising compliance risks make AI adoption complex, expensive, and slow. </p>
                </Copy>
                <Copy>
                <p className="text-white-300 w-[93%] max-sm:w-[100%]">insurAInce solves this. Built from the ground up for insurance, it lets you deploy real-world AI and GenAI use cases faster, securely, and at scale. All on a unified platform. No more fragmented AI, just fast and real outcomes.  </p>
               </Copy>
               </div>
            </div>
        </div>
    )
}
