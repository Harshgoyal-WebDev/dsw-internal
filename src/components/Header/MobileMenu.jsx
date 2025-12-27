"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SubmenuNavigation from "./Submenu";
import { SOCIAL_LINKS,  NAVIGATION_FOOTER } from "@/constants/siteConfig";
import SocialLink from "../ui/SocialLink";

// helper: normalize to last non-empty segment ("slug")
const getSlug = (path) =>
  (path || "/")
    .split("?")[0]
    .replace(/\/+$/, "")
    .split("/")
    .filter(Boolean)
    .pop() || "";

// checks if an href should be considered active given the pathname
const makeIsActiveHref = (pathname) => {
  const currentSlug = getSlug(pathname || "/");
  const safePath = pathname || "/";

  return (href) => {
    if (!href) return false;
    if (href === "/") return safePath === "/"; // exact match for home
    const hrefSlug = getSlug(href);
    return hrefSlug === currentSlug || safePath.startsWith(href);
  };
};

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

  const isActiveHref = useMemo(() => makeIsActiveHref(pathname), [pathname]);

  // Extract items from NAVIGATION
  const {
    homeItem,
    aboutItem,
    pilotItem,
    contactItem,
    insurainceItem,
    careerItem,
     termsAndConditionsItem,
     privacyPolicyItem,
    productSection,
    solutionsSection,
    resourcesSection,
    
  } = useMemo(() => {
    const findById = (id) => NAVIGATION_FOOTER.find((i) => i.id === id) || null;

    return {
      // homeItem: findById("home"),
      productSection: findById("product"),
      pilotItem: findById("pilot"),
      contactItem: findById("contact"),
      aboutItem: findById("about"),
      // careerItem:findById("careers"),
     termsAndConditionsItem:findById("terms-and-conditions"),
     privacyPolicyItem:findById("privacy-policy"),
      insurainceItem: findById("insuraince"),
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

  // small helper to apply active orange & aria-current
  const linkProps = (href) => ({
    className: `link-text ${isActiveHref(href) ? "text-[#F16B0D]" : ""}`,
    "aria-current": isActiveHref(href) ? "page" : undefined,
  });

  return (
    <>
      {/* Backdrop */}
      <div
        className={`w-screen h-screen overflow-hidden fixed top-0 left-0 transition-all duration-500 z-[910] ${
          openMobileMenu
            ? "opacity-100 bg-black/40 backdrop-blur-lg pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpenMobileMenu(false)}
        aria-hidden
      />

      {/* Drawer */}
      <div
        className={`max-sm:w-screen max-sm:h-screen overflow-hidden opacity-100 flex flex-col max-sm:justify-between px-[7vw] text-[#CACACA] !font-display max-sm:text-[5vw] absolute top-0 z-[911] right-0 max-sm:space-y-[5vw] max-md:py-[8vw] transition-all duration-500 origin-top-right max-md:w-[100vw] max-md:h-screen max-md:text-[3.5vw] max-md:space-y-[7vw] ${
          openMobileMenu
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-[100%] pointer-events-none"
        }`}
      >
        <div
          data-lenis-prevent
          className="h-full w-full relative z-[30] border border-white/40 max-sm:rounded-[10vw] bg-black/30 flex flex-col justify-between py-[10vw] px-[7vw] max-md:rounded-[7vw]"
        >
          <div className="w-full h-[80vh] overflow-x-hidden mt-[7vh]  max-md:pr-[2vw] max-md:h-fit">
            <div className="flex w-full flex-col max-sm:gap-[4vw] items-start max-md:gap-[3vw] h-fit justify-center max-md:justify-start">
              {/* Home */}
              {homeItem && (
                <>
                  <Link
                    href={homeItem.href}
                    {...linkProps(homeItem.href)}
                    onClick={handleDirectLinkClick}
                  >
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

              
              {insurainceItem && (
                <>
                  <Link
                    href={insurainceItem.href}
                    {...linkProps(insurainceItem.href)}
                    onClick={handleDirectLinkClick}
                    className="max-sm:text-[4.5vw]"
                  >
                    {insurainceItem.text}
                  </Link>
                  <span className="bg-[#e8e8e8c5] h-[1px] w-full" />
                </>
              )}


            
                 {/* Pilot Program */}
              {pilotItem && (
                <>
                  <Link
                    href={pilotItem.href}
                    {...linkProps(pilotItem.href)}
                    onClick={handleDirectLinkClick}
                    className="max-sm:text-[4.5vw]"
                  >
                    {pilotItem.text}
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

           
              {aboutItem && (
                <>
                  <Link
                    href={aboutItem.href}
                    {...linkProps(aboutItem.href)}
                    onClick={handleDirectLinkClick}
                    className="max-sm:text-[4.5vw]"
                  >
                    {aboutItem.text}
                  </Link>
                  <span className="bg-[#e8e8e8c5] h-[1px] w-full" />
                </>
              )}

              {/* Contact */}
              {contactItem && (
                <>
                  <Link
                    href={contactItem.href}
                    {...linkProps(contactItem.href)}
                    onClick={handleDirectLinkClick}
                    className="max-sm:text-[4.5vw]"
                  >
                    {contactItem.text}
                  </Link>
                  <span className="bg-[#e8e8e8c5] h-[1px] w-full" />
                </>
              )}
              {privacyPolicyItem && (
                <>
                  <Link
                    href={privacyPolicyItem.href}
                    {...linkProps(privacyPolicyItem.href)}
                    onClick={handleDirectLinkClick}
                    className="max-sm:text-[4.5vw]"
                  >
                    {privacyPolicyItem.text}
                  </Link>
                  <span className="bg-[#e8e8e8c5] h-[1px] w-full" />
                </>
              )}
              {termsAndConditionsItem && (
                <>
                  <Link
                    href={termsAndConditionsItem.href}
                    {...linkProps(termsAndConditionsItem.href)}
                    onClick={handleDirectLinkClick}
                    className="max-sm:text-[4.5vw]"
                  >
                    {termsAndConditionsItem.text}
                  </Link>
                  <span className="bg-[#e8e8e8c5] h-[1px] w-full" />
                </>
              )}
              
            </div>
          </div>

          {/* Socials */}
          <div>
            <ul className="flex gap-4 max-md:items-center max-md:justify-center max-md:mt-[15vw]">
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
            className="w-fit max-sm:px-[6vw] max-sm:py-[3.2vw] max-md:px-[4vw] max-md:py-[2.5vw] flex items-center justify-center rounded-full bg-gradient-to-r from-primary-2 to-primary-3 max-sm:gap-[3.5vw] max-md:gap-[2vw] absolute top-[3%] right-[5%] max-md:text-[3vw] max-sm:text-[4.2vw] text-[4.2vw]"
            onClick={() => setOpenMobileMenu(false)}
          >
            <span>Close</span>
            <div className="relative w-[4.5vw] max-md:w-[3vw] max-sm:w-[4.2vw] h-auto flex justify-center items-center rotate-45">
              <span className="w-full h-[2px] bg-white rounded-full" />
              <span className="w-full h-[2px] bg-white rounded-full absolute rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
