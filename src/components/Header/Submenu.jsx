"use client";
import React from "react";
import Link from "next/link";

const SubmenuNavigation = ({
  section,              // { id, text, href, children? } from NAVIGATION
  openSection,
  setOpenSection,
  setOpenMobileMenu,
  navigateTo,
  toggleSection,
}) => {
  if (!section) return null;

  const { id: sectionId, text: title, href: link, children = [] } = section;
  const isOpen = openSection === title;

  const handleHeaderClick = () => {
    toggleSection(title);
  };

  const handleParentLinkClick = () => {
    // If you prefer the parent title to only toggle (and NOT navigate), you can preventDefault here:
    // e.preventDefault();
    setOpenMobileMenu(false);
    setOpenSection(null);
  };

  return (
    <div className="w-full">
      <div className="flex w-full flex-col mt-[0.5vw]">
        {/* Header row */}
        <div
          className="flex justify-between w-full list-title cursor-pointer items-center"
          onClick={handleHeaderClick}
        >
          <Link href={link || "#"} onClick={handleParentLinkClick}>
            {title}
          </Link>

          <div
            className={`w-fit h-fit transition-transform duration-300 ${
              isOpen ? "-rotate-90" : "rotate-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="max-sm:h-[5vw] max-sm:w-[5vw] text-primary max-md:w-[3vw] max-md:h-[3vw] ease-in-out transition-all duration-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Collapsible list */}
        <div
          className={`overflow-hidden transition-all ease-in-out duration-700 mb-[4vw] 
${
            isOpen ? "max-h-[80vw] max-sm:h-[25vw] opacity-100 max-md:h-[18vw]" : "max-h-0 h-0 opacity-0"
          } ${
            isOpen&&title==="Resources" ? "max-h-[80vw] max-sm:h-[65vw] opacity-100 max-md:h-[48vw]" : "max-h-0 h-0 opacity-0"
          }`}
        >
          <ul className="max-sm:text-[4vw] max-md:text-[3vw] max-sm:py-[5vw]  pl-4 max-md:pl-[4vw] max-md:pt-[3vw] flex flex-col items-start justify-center max-sm:gap-[1.5vw] max-md:gap-[1vw] list-disc !font-display">
            {children.map((child, idx) => {
              // Build a collision-resistant key using multiple stable fields
              const safeKey = [sectionId, child.id, child.href, child.text, idx].filter(Boolean).join("__");
              return (
                <li key={safeKey}>
                  <Link
                    href={child.href}
                    className="link-line"
                    onClick={() => {
                      setOpenMobileMenu(false);
                      setOpenSection(null);
                      // If you have a custom router helper:
                      // navigateTo?.(child.href);
                    }}
                  >
                    {child.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-full bg-[#e8e8e8c5] h-[1px]" />
      </div>
    </div>
  );
};

export default SubmenuNavigation;

