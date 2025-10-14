"use client";

import PrimaryButton from "../Button/PrimaryButton";
import { useEffect, useRef, useState } from "react";
import NavigationLink from "../ui/NavigationLink";
import Logo from "../ui/Logo";
import { NAVIGATION, CTA_BUTTONS } from "@/constants/siteConfig";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import Image from "next/image";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: true });

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null); // inner container ref (you already had)
  const headerWrapRef = useRef(null); // NEW: wraps the whole <header> for GSAP
  const lenis = useLenis();
  const pathname = usePathname();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isHoveringHeader, setIsHoveringHeader] = useState(false);
  const [mob, setMob] = useState(false);

  useEffect(() => {
    if (globalThis.innerWidth <= 1024) {
      setMob(true);
    } else {
      setMob(false);
    }
  }, [mob]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis, pathname]);

  // Show/hide header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If mouse is over the header, don't hide it.
      if (isHoveringHeader) {
        setIsHidden(false);
        setLastScrollY(currentScrollY); // keep baseline fresh to avoid jump after leaving
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHoveringHeader]);

  const [hasVisited, setHasVisited] = useState(() => {
    if (typeof window !== "undefined") {
      return !!sessionStorage.getItem("hasVisited");
    }
    return false;
  });

  // ✅ GSAP replacement for motion.header initial/animate/transition
  useEffect(() => {
    if (!headerWrapRef.current) return;
    gsap.set(headerWrapRef.current, {
      opacity: 1,
    });
    gsap.fromTo(
      headerWrapRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        delay: hasVisited ? 2 : 6.1,
      }
    );
  }, [pathname]);

  return (
    <>
      <div className="w-screen overflow-hidden h-screen fixed top-0 z-[900] pointer-events-none ">
        {/* 🔁 Replaced motion.header with a plain header + GSAP */}
        <header
          ref={headerWrapRef}
          onMouseEnter={() => setIsHoveringHeader(true)}
          onMouseLeave={() => setIsHoveringHeader(false)}
          className="text-white w-screen fixed top-0 left-0 z-[900] pointer-events-none opacity-0 "
        >
          <div
            className={`flex items-center justify-between px-[4vw] py-6 w-full transition-transform duration-500 pointer-events-auto max-sm:px-[7vw] max-md:bg-black/20 max-sm:py-[3vw] max-sm:pt-[5vw] max-md:backdrop-blur-md ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
            ref={headerRef}
          >
            <Logo variant="header" className="dsw-logo" />

            {/* Desktop navigation */}
            {!mob ? (
              <div className="border rounded-full border-white/20 ml-[4vw] max-md:hidden relative">
                <div className="w-full h-full absolute top-0 left-0 rounded-full bg-black/40 backdrop-blur-md" />

                <ul className="flex items-center justify-between px-[2.5vw] py-[1.5vw] gap-[3vw] text-[1vw]">
                  {NAVIGATION.map((link) => {
                    const hasChildren =
                      Array.isArray(link.children) && link.children.length > 0;

                    return (
                      <li
                        key={link.id}
                        className="relative text-[#E8E8E8] dropdown-links"
                        onMouseEnter={() => {
                          setOpenDropdown(link.id);
                        }}
                        onMouseLeave={() => {
                          setOpenDropdown(null);
                        }}
                      >
                        {/* Top-level link */}
                        <div className="flex items-center gap-[0.5vw] relative z-[10] navlinks">
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
                            className={
                              hasChildren ? "cursor-pointer" : undefined
                            }
                            onClick={(e) => {
                              if (hasChildren) e.preventDefault();
                            }}
                          />
                          {hasChildren && (
                            <div className="w-fit">
                              <div
                                className={` text-[#CACACA] flex items-center justify-center gap-0 w-[0.8vw] mt-[-0.1vw] h-full max-sm:w-[3vw] transition-transform duration-300 ${
                                  openDropdown === link.id
                                    ? "translate-y-[25%] scale-[1.05]"
                                    : ""
                                }`}
                              >
                                <div className="w-[1.5vw] h-auto">
                                  <Image
                                    src={"/assets/icons/chevron-down.svg"}
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              </div>

                              <span
                                className={`block w-full  absolute left-0 z-[-1] ${
                                  openDropdown === link.id ? "h-[3vw]" : "h-0"
                                } `}
                              />
                            </div>
                          )}
                        </div>

                        {/* Submenu */}
                        {hasChildren && (
                          <div
                            className={`absolute top-[270%] left-[-5%] w-fit h-fit bg-black/40 backdrop-blur-sm rounded-[1.2vw] border border-white/20 transition-opacity duration-300 ${
                              openDropdown === link.id
                                ? "opacity-100"
                                : "opacity-0 pointer-events-none"
                            }`}
                            onMouseEnter={() => {
                              setOpenDropdown(link.id);
                            }}
                            onMouseLeave={() => {
                              setOpenDropdown(null);
                            }}
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
            ) : (
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
            )}
            {!mob && (
              <div className="max-md:hidden">
                <PrimaryButton
                  text={CTA_BUTTONS.primary.text}
                  href={CTA_BUTTONS.primary.href}
                  className="primary-button"
                />
              </div>
            )}
          </div>
        </header>

        {mob&&<MobileMenu
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
          lenis={lenis}
          pathname={pathname}
        />}
      </div>
    </>
  );
};

export default Header;
