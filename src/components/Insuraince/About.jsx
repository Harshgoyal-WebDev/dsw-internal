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
        <div ref={containerRef} className="flex items-center  justify-between h-[80vh] max-md:h-full w-screen overflow-hidden max-md:flex-col  max-sm:h-full container relative z-[20] max-sm:mt-[-30vh]" id="footer-cta">
            <div className="relative w-1/2 max-md:w-full h-[50vw] max-sm:w-full  max-md:h-[50vh] max-sm:h-[110vw] max-md:mt-[20vh] max-sm:mt-[20vh]">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 -z-10">

                </div>
                <motion.div
                    style={{ x: image1X, y: image1Y }}
                    className="absolute w-[42%] max-md:w-[35%] top-[20%] left-[15%] rounded-2xl border border-white/15 overflow-hidden max-sm:w-[60%] max-sm:top-[5%] max-sm:left-[10%]  max-md:left-[10%] fadeup max-md:top-[10%]"
                >
                    <Image src={"/assets/images/footer/cta-2.png"} alt="Image1" width={348} height={312} loading="lazy" className="w-full h-full object-cover" />
                </motion.div>

                <motion.div
                    style={{ x: image1X, y: image1Y }}
                    className="absolute  w-[40%] bottom-[18%] left-[45%] rounded-2xl  border border-white/15  overflow-hidden max-sm:w-[60%] max-sm:left-[35%] max-md:left-[52%] fadeup max-sm:bottom-[5%]"
                >
                    <Image src={"/assets/images/footer/cta-4.png"} alt="Image2" width={313} height={272} loading="lazy" className="w-full h-full object-cover" />
                </motion.div>
            </div>
            <div className="w-[60%] max-md:w-full max-sm:!w-[100%] max-sm:text-center max-md:space-y-[4vw]  space-y-[2vw]">
                <h2 className="text-60  max-sm:text-wrap font-head  headingAnim text-white-200 max-sm:mb-[7vw] max-sm:!text-[11.5vw]">Built with Insurance DNA. Unified AI & Agentic AI.</h2>
                <div className="space-y-[0.5vw] max-md:space-y-[3vw]">
                    <Copy>
                        <p className="text-white-300 w-[90%] max-sm:w-[100%] max-sm:py-0">Built to overcome the real barriers insurers face: legacy systems, fragmented rollouts, and compliance risks. Designed with insurance DNA, it offers enterprise-grade governance and flexible deployment across cloud, on-prem, or hybrid environments.</p>
                    </Copy>
                    <Copy>
                        <p className="text-white-300 w-[93%] max-sm:w-[100%]">Move from pilot to production with speed, security, and confidence on a unified platform that operationalizes AI and Agentic AI at scale. No complexity. Just real outcomes.</p>
                    </Copy>
                </div>
            </div>
        </div>
    )
}
