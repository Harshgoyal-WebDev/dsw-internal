'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryButton from "../Button/PrimaryButton";
import Copy from "../Animations/Copy";

const Tour = ({heading,para}) => {
  const [activeTab, setActiveTab] = useState("unifyAI");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    const checkTablet = () => setIsTablet(window.innerWidth < 1025);
    
    checkMobile();
    checkTablet();
    
    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', checkTablet);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', checkTablet);
    };
  }, []);

  return (
    <section className="w-screen h-fit container" id="tour">
      <div className="w-full flex flex-col gap-[2vw] items-center max-md:gap-[4vw]">
        <h2 className="text-60 headingAnim w-[40%] max-md:w-full text-center">{heading}</h2>
        <Copy>
          <p className="text-[#CACACA] text-center">
            {para}
          </p>
        </Copy>

        {/* Tab Switcher */}
        <div className="w-fit flex rounded-full border-blue-1 border p-[0.2vw] !text-[1.15vw] fadeup relative max-sm:mt-[10vw] max-md:mt-[5vw]  max-sm:!text-[4.2vw] max-md:!text-[2.5vw] max-md:p-[0.5vw] ">
          {/* Thumb Track */}
          <div className="w-full h-[90%] absolute thumb-track max-md:h-[92%]">
            <motion.div
              className="w-[13vw] h-full rounded-full bg-blue-1 thumb-button max-sm:w-[40vw] max-md:w-[30vw]"
              animate={{
                x: activeTab === "unifyAI" ? 0 : (isMobile ? "40vw" : isTablet ? "30vw" : "13vw"),
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          </div>

          {/* AI Studio Tab */}
          <motion.div
            className="w-[13vw] px-[1.5vw] py-[1vw] flex items-center justify-center relative z-[2] cursor-pointer max-sm:w-[40vw] max-md:w-[30vw] max-md:py-[3vw]"
            id="unifyAI"
            onClick={() => handleTabClick("unifyAI")}
          >
            <motion.p
              animate={{
                color: activeTab === "unifyAI" ? "#ffffff" : "#CACACA",
              }}
              transition={{ duration: 0.3 }}
            >
             UnifyAI 
            </motion.p>
          </motion.div>

          {/* GenAI Studio Tab */}
          <motion.div
            className="w-[13vw] px-[1.5vw] py-[1vw] flex items-center justify-center relative z-[2] cursor-pointer max-md:w-[30vw] max-sm:w-[40vw] max-md:py-[3vw]"
            id="agenticAI"
            onClick={() => handleTabClick("agenticAI")}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            <motion.p
              animate={{
                color: activeTab === "agenticAI" ? "#f1f1f1" : "#CACACA",
              }}
              transition={{ duration: 0.3 }}
            >
              AgenticAI
            </motion.p>
          </motion.div>
        </div>

        {/* Content Containers */}
        <div className="w-[80%] h-[35vw] relative fadeup mt-[5vw] max-sm:w-full max-sm:h-[60vw] max-md:h-[40vw] max-md:w-full max-sm:mt-[12vw] rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
           
            {activeTab === "unifyAI" && (
              <motion.div
                key="unifyAI"
                className="w-full h-full absolute top-0 left-0 unifyAI-container"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  zIndex: 1,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  zIndex: 10,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  zIndex: 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                  <Image
                    src={'/assets/images/homepage/tour-img.png'}
                    alt="AI Studio tour image"
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                    width={900}
                    height={400}
                  />
                

                <motion.div
                  className="w-full h-full absolute top-0 left-0 flex justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <PrimaryButton
                    text={"See it, to believe it! "}
                    className=""
                    href={"/unify"}
                  />
                </motion.div>
              </motion.div>
            )}

           
            {activeTab === "agenticAI" && (
              <motion.div
                key="agenticAI"
                className="w-full h-full absolute top-0 left-0 agenticAI-container"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  zIndex: 1,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  zIndex: 10,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  zIndex: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                  <Image
                    src={'/assets/images/homepage/tour-img.png'}
                    alt="GenAI Studio tour image"
                    className="w-full h-full object-cover "
                    width={900}
                    height={400}
                  />
                

                <motion.div
                  className="w-full h-full absolute top-0 left-0 flex justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <PrimaryButton
                    text={"See it, to believe it!"}
                    className=""
                    href={"/agenticai"}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Tour;
