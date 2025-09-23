"use client";

import PrimaryButton from "../Button/PrimaryButton";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import NavigationLink from "../ui/NavigationLink";
import Logo from "../ui/Logo";
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
  const [openDropdown, setOpenDropdown] = useState(null); // Track active dropdown
  const headerRef = useRef(null);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const unifyEnter = ScrollTrigger.create({
      trigger: "#unifyAi",
      start: "top top",
      onEnter: () => setUnify(true),
      onEnterBack: () => setUnify(true),
      onLeaveBack: () => setUnify(false),
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
      <div className="w-screen overflow-hidden h-screen fixed top-0 z-[900] pointer-events-none">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: pathname === "/" ? 1 : 1,
          }}
          className="text-white w-screen fixed top-0 left-0 z-[900] pointer-events-none"
        >
          <div
            className={`flex items-center justify-between px-[4vw] py-6 w-full transition-transform duration-500 pointer-events-auto max-sm:px-[7vw] max-sm:bg-transparent max-sm:py-[3vw] max-sm:pt-[5vw] max-sm:backdrop-blur-sm ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
            ref={headerRef}
          >
            <Logo variant="header" className="dsw-logo" />

            {/* Desktop navigation */}
            <div className="border rounded-full border-white/20 ml-[4vw] max-md:hidden relative">
              <div className="w-full h-full absolute top-0 left-0 rounded-full bg-black/40 backdrop-blur-md" />

              <ul className="flex items-center justify-between px-[2.5vw] py-[1.5vw] gap-[3vw] text-[1.145vw]">
                {NAVIGATION.map((link) => {
                  const hasChildren =
                    Array.isArray(link.children) && link.children.length > 0;

                  return (
                    <li
                      key={link.id}
                      className="relative text-[#E8E8E8] dropdown-links"
                      onMouseEnter={() => setOpenDropdown(link.id)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {/* Top-level link */}
                      <div className="flex items-center gap-3">
                        <NavigationLink
                          text={link.text}
                          href={link.href}
                          variant="default"
                          aria-haspopup={hasChildren ? "menu" : undefined}
                          aria-expanded={
                            hasChildren
                              ? String(openDropdown === link.id)
                              : undefined
                          }
                          className={hasChildren ? "cursor-pointer" : undefined}
                          onClick={(e) => {
                            if (hasChildren) e.preventDefault();
                          }}
                        />
                        {hasChildren && (
                          <div>
                          <div
                            className={`transition-transform duration-300 ${
                              openDropdown === link.id ? "rotate-180" : ""
                            }`}
                          >
                            <div className="-rotate-90 text-[#CACACA] flex items-center justify-center gap-0 w-[0.6vw] pt-[0.2vw] h-full max-sm:w-[3vw]">
                              <svg
                                className="arrow primera next"
                                width="8"
                                height="15"
                                viewBox="0 0 8 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.50293 14.46L2.50293 7.45996L7.50293 0.459961H5.05293L0.0529289 7.45996L5.05293 14.46H7.50293Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>

                          </div>
                          <span className={`block w-full  absolute left-0 ${
                              openDropdown === link.id ? "h-[3vw]" : "h-0"
                            } `}/>


                            </div>
                        )}
                      </div>

                      {/* Submenu */}
                      {hasChildren && (
                        <div
                          className={`absolute top-[250%] left-[-5%] w-fit h-fit bg-black/40 backdrop-blur-sm rounded-[1.2vw] border border-white/20 transition-opacity duration-300 ${
                            openDropdown === link.id
                              ? "opacity-100"
                              : "opacity-0 pointer-events-none"
                          }`}
                          onMouseEnter={() => setOpenDropdown(link.id)} // keep open while hovering submenu
                          onMouseLeave={() => setOpenDropdown(null)}    // close when leaving submenu
                        >
                          <ul className="p-[1.5vw]">
                            {link.children.map((child) => (
                              <li key={child.href}>
                                <NavigationLink
                                  text={child.text}
                                  href={child.href}
                                  variant="default"
                                  className="block py-2 transition-colors whitespace-nowrap"
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right section */}
            <div className="flex items-center justify-between transition-transform duration-500 pointer-events-auto">
              <div
                className="hidden max-sm:flex max-sm:flex-col gap-[1.5vw] w-[8vw] relative z-[150] max-md:flex max-md:flex-col max-md:w-[4.5vw] max-md:gap-[1vw] max-sm:w-[7vw]"
                onClick={() => setOpenMobileMenu((prev) => !prev)}
              >
                <div
                  className={`w-full h-[2.5px] rounded-full line-1 transition-all duration-500 origin-center ham-mobile bg-gradient-to-r from-[#F16B0D] to-[#E61216] ${
                    openMobileMenu ? " !bg-primary" : "bg-primary"
                  }`}
                />
                <div
                  className={`w-full h-[2.5px] bg-primary rounded-full line-2 transition-all duration-500 ham-mobile bg-gradient-to-r from-[#F16B0D] to-[#E61216] ${
                    openMobileMenu ? "" : "bg-primary"
                  }`}
                />
                <div
                  className={`w-full h-[2.5px] bg-primary rounded-full line-3 transition-all duration-500 origin-center ham-mobile bg-gradient-to-r from-[#F16B0D] to-[#E61216] ${
                    openMobileMenu ? " !bg-primary" : "bg-primary"
                  }`}
                />
              </div>
            </div>

            <div className="max-md:hidden">
              <PrimaryButton
                text={CTA_BUTTONS.primary.text}
                href={CTA_BUTTONS.primary.href}
                className="primary-button"
              />
            </div>
          </div>
        </motion.header>

        <MobileMenu
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
          lenis={lenis}
          pathname={pathname}
        />
      </div>
    </>
  );
};

export default Header;
