"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import SubmenuNavigation from "./Submenu";
import { SOCIAL_LINKS } from "@/constants/siteConfig";
import SocialLink from "../UI/SocialLink";

export default function MobileMenu({
  openMobileMenu,
  setOpenMobileMenu,
  navigateTo,
  lenis,
  pathname,
}) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    if (openMobileMenu) {
      lenis && lenis.stop();
    } else {
      lenis && lenis.start();
      setOpenSection(null);
    }
  }, [openMobileMenu, lenis]);

  useEffect(() => {
    setOpenSection(null);
  }, [pathname]);

  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0  transition-all duration-500 z-[910]  ${
          openMobileMenu
            ? "opacity-100 bg-black/40 backdrop-blur-lg pointer-events-auto "
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`max-sm:w-screen max-sm:h-dvh overflow-hidden opacity-100 flex flex-col max-sm:justify-between px-[7vw] text-[#CACACA] !font-display  max-sm:text-[5vw] absolute top-0 z-[911] right-0 max-sm:space-y-[5vw] max-md:py-[8vw] transition-all duration-500 origin-top-right max-md:w-[60vw] max-md:h-screen max-md:text-[4vw] max-md:space-y-[7vw]   ${
          openMobileMenu
            ? "translate-x-0 pointer-events-auto "
            : "translate-x-[100%] pointer-events-none"
        }`}
      >
        <div  className="h-full w-full relative z-[30]  border border-white/40 rounded-[10vw] bg-white/5 flex flex-col justify-between py-[10vw] px-[7vw]">
        <div className="w-full h-[80vh] overflow-x-hidden">
          <div className="flex flex-col max-sm:gap-[4vw] items-start max-md:gap-[3vw] h-full justify-center  ">
            <Link
              href={"/"}
              className="link-text"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
                setOpenMobileMenu(false);
                setOpenSection(null);
              }}
            >
              Home
            </Link>
            <span className="bg-[#e8e8e8c5] h-[1px] w-full"></span>

            <SubmenuNavigation
              openSection={openSection}
              setOpenSection={setOpenSection}
              setOpenMobileMenu={setOpenMobileMenu}
              navigateTo={navigateTo}
              toggleSection={toggleSection}
              type="products"
            />

            <Link
              href={"/"}
              className="link-text"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
                setOpenMobileMenu(false);
                setOpenSection(null);
              }}
            >
              About Us
            </Link>
            <span className="bg-[#e8e8e8c5] h-[1px] w-full"></span>
            <SubmenuNavigation
              openSection={openSection}
              setOpenSection={setOpenSection}
              setOpenMobileMenu={setOpenMobileMenu}
              navigateTo={navigateTo}
              toggleSection={toggleSection}
              type="resources"
            />
            <Link
              href={"/"}
              className="link-text"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
                setOpenMobileMenu(false);
                setOpenSection(null);
              }}
            >
              Pilot Program
            </Link>
            <span className="bg-[#e8e8e8c5] h-[1px] w-full"></span>
            <Link
              href={"/"}
              className="link-text"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
                setOpenMobileMenu(false);
                setOpenSection(null);
              }}
            >
              Contact
            </Link>
            <span className="bg-[#e8e8e8c5] h-[1px] w-full"></span>
          </div>

        </div>
          <div>
            <ul className="flex gap-4 max-sm:items-center max-sm:justify-center max-sm:mt-[15vw]">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.id} className="group">
                  <SocialLink
                    href={link.href}
                    label={link.label}
                    icon={link.icon}
                    variant="footer"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="w-fit px-[6vw] py-[3.2vw] flex items-center justify-center rounded-full bg-gradient-to-r from-primary-2 to-primary-3 gap-[3.5vw] absolute top-[3%] right-[5%] text-[4.2vw] font-semibold " onClick={()=>{setOpenMobileMenu(false)}}>
            <span>Close</span>
            <div className="relative w-[4.5vw] h-auto flex justify-center items-center rotate-45">
              <span className="w-full h-[2px] bg-white rounded-full" />
              <span className="w-full h-[2px] bg-white rounded-full absolute rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
