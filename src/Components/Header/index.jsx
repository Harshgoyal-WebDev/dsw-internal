'use client'
import PrimaryButton from "../Button/PrimaryButton";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import NavigationLink from "../UI/NavigationLink";
import Logo from "../UI/Logo";
import { NAVIGATION, CTA_BUTTONS } from "@/constants/siteConfig";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import MobileMenu from "./MobileMenu";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [unify, setUnify] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef();
  const lenis = useLenis();
  const pathname = usePathname();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis, pathname]);

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
      onLeaveBack: () => setUnify(false)
    });
    const unifyLeave = ScrollTrigger.create({
      trigger: "#WhyUnify",
      start: "top bottom",
      end: "+3500 top",
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
        className={`text-white w-screen fixed top-0 left-0 z-[999] pointer-events-none`} >
        <div className={`flex items-center justify-between px-[4vw] py-6 w-full transition-transform duration-500 pointer-events-auto max-sm:px-[7vw] max-sm:bg-stone-900/30 max-sm:backdrop-blur-sm ${isHidden ? "-translate-y-full" : "translate-y-0"}`} ref={headerRef}>
          <Logo variant="header" className="dsw-logo" />
          <div className="border rounded-full bg-stone-900/30 backdrop-blur-sm border-white/20 ml-[4vw] max-sm:hidden">
            <ul className="flex items-center justify-between px-[2.5vw] py-[1.5vw] gap-[2.5vw] text-[1.145vw]">
              {NAVIGATION.map((link) => (
                <li key={link.id} className="text-[#E8E8E8]">
                  <NavigationLink
                    text={link.text}
                    href={link.href}
                    variant="default"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={`flex items-center justify-between transition-transform duration-500 pointer-events-auto`}>
            <div className="hidden max-sm:flex max-sm:flex-col gap-[1.5vw] w-[8vw] relative z-[150] max-md:flex max-md:flex-col max-md:w-[4.5vw] max-md:gap-[1vw] max-sm:w-[7vw]" onClick={() => {
              setOpenMobileMenu((prev) => !prev);
            }}>
              <div className={`w-full h-[2.5px] rounded-full line-1 transition-all duration-500 origin-center ham-mobile bg-gradient-to-r from-[#F16B0D] to-[#E61216] ${openMobileMenu
                  ? "rotate-45 max-sm:translate-y-[7px] max-md:translate-y-[10px] !bg-primary"
                  : "bg-primary"
                }`} />
              <div className={`w-full h-[2.5px] bg-primary rounded-full line-2 transition-all duration-500 ham-mobile bg-gradient-to-r from-[#F16B0D] to-[#E61216] ${openMobileMenu ? "opacity-0 bg-white" : "bg-primary"}`} />
              <div className={`w-full h-[2.5px] bg-primary rounded-full line-3 transition-all duration-500 origin-center ham-mobile bg-gradient-to-r from-[#F16B0D] to-[#E61216] ${openMobileMenu
                  ? "-rotate-45 max-sm:-translate-y-[6px] max-md:-translate-y-[10px] !bg-primary"
                  : "bg-primary"
                }`} />
            </div>
            <MobileMenu
              openMobileMenu={openMobileMenu}
              setOpenMobileMenu={setOpenMobileMenu}
              lenis={lenis}
              pathname={pathname}
            />
          </div>
          <div className="max-sm:hidden">
            <PrimaryButton
              text={CTA_BUTTONS.primary.text}
              href={CTA_BUTTONS.primary.href}
              className="primary-button "
            />
          </div>
        </div>
      </motion.header>
    </>
  );
};
export default Header;
