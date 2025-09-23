"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SubmenuNavigation from "./Submenu";
import { SOCIAL_LINKS, NAVIGATION } from "@/constants/siteConfig";
import SocialLink from "../ui/SocialLink";

export default function MobileMenu({
  openMobileMenu,
  setOpenMobileMenu,
  navigateTo,
  lenis,
  pathname,
}) {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (sectionTitle) => {
    setOpenSection((prev) => (prev === sectionTitle ? null : sectionTitle));
  };

  // Extract items from NAVIGATION
  const {
    homeItem,
    aboutItem,
    pilotItem,
    contactItem,
    productSection,
    solutionsSection,
    resourcesSection,
  } = useMemo(() => {
    const findById = (id) => NAVIGATION.find((i) => i.id === id) || null;

    return {
      homeItem: findById("home"),
      aboutItem: findById("about"),
      pilotItem: findById("pilot"),
      contactItem: findById("contact"),
      productSection: findById("product"),
      solutionsSection: findById("solutions"),
      resourcesSection: findById("resources"),
    };
  }, []);

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

  const handleDirectLinkClick = () => {
    setOpenMobileMenu(false);
    setOpenSection(null);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`w-screen h-screen overflow-hidden fixed top-0 left-0 transition-all duration-500 z-[910] ${
          openMobileMenu
            ? "opacity-100 bg-black/40 backdrop-blur-lg pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`max-sm:w-screen max-sm:h-screen overflow-hidden opacity-100 flex flex-col max-sm:justify-between px-[7vw] text-[#CACACA] !font-display max-sm:text-[5vw] absolute top-0 z-[911] right-0 max-sm:space-y-[5vw] max-md:py-[8vw] transition-all duration-500 origin-top-right max-md:w-[80vw] max-md:h-screen max-md:text-[4vw] max-md:space-y-[7vw] ${
          openMobileMenu
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-[100%] pointer-events-none"
        }`}
      >
        <div className="h-full w-full relative z-[30] border border-white/40 rounded-[10vw] bg-white/5 flex flex-col justify-between py-[10vw] px-[7vw]">
          <div className="w-full h-[80vh] overflow-x-hidden flex items-center mt-[7vh] ">
            <div className="flex w-full flex-col max-sm:gap-[4vw] items-start max-md:gap-[3vw] h-fit justify-center">
              {/* Home */}
              {homeItem && (
                <>
                  <Link href={homeItem.href} className="link-text" onClick={handleDirectLinkClick}>
                    {homeItem.text}
                  </Link>
                  <span className="bg-[#e8e8e8c5] h-[1px] w-full" />
                </>
              )}

              {/* Product (submenu) */}
              {productSection && productSection.children?.length > 0 && (
                <SubmenuNavigation
                  section={productSection}
                  openSection={openSection}
                  setOpenSection={setOpenSection}
                  setOpenMobileMenu={setOpenMobileMenu}
                  navigateTo={navigateTo}
                  toggleSection={toggleSection}
                />
              )}

              {/* Solutions (submenu) */}
              {solutionsSection && solutionsSection.children?.length > 0 && (
                <SubmenuNavigation
                  section={solutionsSection}
                  openSection={openSection}
                  setOpenSection={setOpenSection}
                  setOpenMobileMenu={setOpenMobileMenu}
                  navigateTo={navigateTo}
                  toggleSection={toggleSection}
                />
              )}

              {/* About */}
              {aboutItem && (
                <>
                  <Link href={aboutItem.href} className="link-text" onClick={handleDirectLinkClick}>
                    {aboutItem.text}
                  </Link>
                  <span className="bg-[#e8e8e8c5] h-[1px] w-full" />
                </>
              )}

              {/* Resources (submenu) */}
              {resourcesSection && resourcesSection.children?.length > 0 && (
                <SubmenuNavigation
                  section={resourcesSection}
                  openSection={openSection}
                  setOpenSection={setOpenSection}
                  setOpenMobileMenu={setOpenMobileMenu}
                  navigateTo={navigateTo}
                  toggleSection={toggleSection}
                />
              )}

              {/* Pilot Program */}
              {pilotItem && (
                <>
                  <Link href={pilotItem.href} className="link-text" onClick={handleDirectLinkClick}>
                    {pilotItem.text}
                  </Link>
                  <span className="bg-[#e8e8e8c5] h-[1px] w-full" />
                </>
              )}

              {/* Contact */}
              {contactItem && (
                <>
                  <Link href={contactItem.href} className="link-text" onClick={handleDirectLinkClick}>
                    {contactItem.text}
                  </Link>
                  <span className="bg-[#e8e8e8c5] h-[1px] w-full" />
                </>
              )}
            </div>
          </div>

          {/* Socials */}
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

          {/* Close pill */}
          <div
            className="w-fit px-[6vw] py-[3.2vw] flex items-center justify-center rounded-full bg-gradient-to-r from-primary-2 to-primary-3 gap-[3.5vw] absolute top-[3%] right-[5%] text-[4.2vw] font-semibold"
            onClick={() => {
              setOpenMobileMenu(false);
            }}
          >
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
