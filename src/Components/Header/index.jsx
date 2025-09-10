import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Links, NavLink } from "./NavLink";
import WhiteButton from "../Button/WhiteButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [unify , setUnify] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const unifyEnter = ScrollTrigger.create({
      trigger: "#unifyAi",
      start: "top top",
    
      onEnter: () => setUnify(true),
      onEnterBack: () => setUnify(true),
      onLeaveBack:()=>setUnify(false)
    });
  
    const unifyLeave = ScrollTrigger.create({
      trigger: "#WhyUnify",
      start: "top bottom",
      end:"+3500 top",
      // onEnter:()=>setUnify(true),
      // onEnterBack: () => setUnify(true),
      // onLeave:()=>setUnify(false)
    });
  
    return () => {
      unifyEnter.kill();
      unifyLeave.kill();
    };
  }, []);
 

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 6 }}
        className={`text-white px-4 fixed top-0 left-0 z-[999] pointer-events-none`} >
        <div className={`flex items-center justify-between py-6 px-12 w-screen transition-transform duration-500 pointer-events-auto ${isHidden ? "-translate-y-full" : "translate-y-0"}`} ref={headerRef} >
          <Link href={"/"}>
            <Image
              src={"/dsw-logo.svg"}
              height={67}
              width={132}
              alt="dsw-logo"
              className="w-[7vw] h-[5vw] object-contain dsw-logo"
            />
          </Link>
          <div className="border rounded-4xl bg-stone-900/30 backdrop-blur-sm border-white/20 ml-[4vw]">
            <ul className="flex items-center justify-between px-12 py-4.5 gap-12 text-[1.145vw] ">
              {Links.map((link, index) => (
                <li key={index} className="text-[#E8E8E8]">
                  <NavLink text={link.text} href={link.href} />
                </li>
              ))}
            </ul>
          </div>
          <div>
           
            <PrimaryButton text={"Book a Demo"} href={"#"} className="primary-button" />
            
          </div>
        </div>
      </motion.header>
    </>
  );
};
export default Header;
