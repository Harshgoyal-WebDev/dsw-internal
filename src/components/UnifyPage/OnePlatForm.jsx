'use client'
import Image from "next/image";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Copy from "../Animations/Copy";

export default function OnePlatform() {
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
        <div ref={containerRef} className="flex items-center justify-between h-[80vh] w-screen overflow-hidden max-md:flex-col  max-md:h-full container " id="footer-cta">
            <div className="relative w-1/2 h-[50vw] max-md:w-full max-sm:h-[110vw]">
                
                 <motion.div
                    style={{ x: image1X, y: image1Y }}
                    className="absolute w-[40%] top-[20%] left-[20%] rounded-2xl border border-white/20 max-sm:border-white/10 overflow-hidden max-sm:w-[50%] max-sm:top-[5%] max-md:w-[35%] max-sm:left-[10%] max-md:left-[13.5%]
                    max-md:top-[-18%] fadeup "
                >
                    <Image src={"/assets/images/footer/image-1.png"} alt="Image1"  width={348} height={312} loading="lazy"  className="w-full h-full object-cover" />
                </motion.div>

                <motion.div
                    style={{ x: image1X, y: image1Y }}
                    className="absolute  w-[35%] bottom-[18%] left-[45%] rounded-2xl  border border-white/20 max-sm:border-white/10 overflow-hidden max-sm:w-[50%] max-sm:left-[35%] max-md:left-[54%] fadeup"
             >
                    <Image src={"/assets/images/footer/image-2.png"} alt="Image2"  width={313} height={272} loading="lazy"  className="w-full h-full object-cover" />
                </motion.div>
            </div>
              <div className="w-[60%] max-md:!w-[90%] max-md:text-center max-md:mt-[5vw] space-y-[4vw]">
                <h2 className="text-60 max-md:w-full font-head  headingAnim text-white-200 max-md:mb-[7vw]">One Platform. Many Possibilities.  </h2>
                <div className="w-[85%] max-md:w-full">
                <Copy>
                <p className="text-white-300">From GenAI agents that automate knowledge work, to AI models that power predictions, decisions, and actions — UnifyAI gives enterprises the infrastructure to lead with AI. </p>
                </Copy>
                <Copy>
                <p className="text-white-300">This is not another tool. This is your operating system for enterprise AI. </p>
               </Copy>
               </div>
            </div>
        </div>
    )
}
