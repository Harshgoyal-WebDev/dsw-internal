"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// helper: get the last non-empty segment as "slug"
const getSlug = (path) =>
  (path || "/")
    .split("?")[0]
    .replace(/\/+$/, "")
    .split("/")
    .filter(Boolean)
    .pop() || "";

const SubmenuNavigation = ({
  section,              // { id, text, href, children? } from NAVIGATION
  openSection,
  setOpenSection,
  setOpenMobileMenu,
  navigateTo,
  toggleSection,
}) => {
  if (!section) return null;

  const pathname = usePathname();
  const currentSlug = getSlug(pathname || "/");

  const { id: sectionId, text: title, href: link, children = [] } = section;
  const isOpen = openSection === title;

  // Active-state checks
  const parentSlug = getSlug(link || "");
  const childActiveIndex = children.findIndex(
    (c) =>
      getSlug(c.href) === currentSlug ||
      (!!c.href && c.href !== "/" && (pathname || "").startsWith(c.href))
  );
  const anyChildActive = childActiveIndex !== -1;
  const isParentActive =
    parentSlug === currentSlug ||
    (!!link && link !== "/" && (pathname || "").startsWith(link));
  const isActive = isParentActive || anyChildActive;

  const handleHeaderClick = () => {
    toggleSection(title);
  };

  const handleParentLinkClick = () => {
    // If you want the parent title to only toggle, prevent default here.
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
          <Link
            href={link || "#"}
            onClick={handleParentLinkClick}
            aria-current={isParentActive ? "page" : undefined}
            className={isActive ? "!text-[#f16b0d]" : ""}
          >
            {title}
          </Link>

          <div
            className={`w-fit h-fit transition-transform duration-300 ${
              isOpen ? "-rotate-180" : "rotate-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="max-sm:h-[5vw] max-sm:w-[5vw] text-primary max-md:w-[3vw] max-md:h-[3vw] ease-in-out transition-all duration-700"
              fill="none"

              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" className={`${isActive ? "stroke-[#f16b0d]" : ""}`} />
            </svg>
          </div>
        </div>

        {/* Collapsible list */}
        <div
          className={`overflow-hidden transition-all ease-in-out duration-700 mb-[4vw] 
            ${isOpen ? "max-h-[80vw] max-sm:h-[25vw] opacity-100 max-md:h-[18vw]" : "max-h-0 h-0 opacity-0"}
             ${isOpen && title === "Resources" ? "max-h-[80vw] max-sm:h-[65vw] opacity-100 max-md:h-[48vw]" : ""}
             ${isOpen && title === "Solutions" ? "max-h-[80vw] max-sm:!h-[16vw] opacity-100 max-md:!h-[10vw]" : ""}

          `}
        >
          <ul className="max-sm:text-[4vw] max-md:text-[3vw] max-sm:py-[5vw]  pl-4 max-md:pl-[4vw] max-md:pt-[3vw] flex flex-col items-start justify-center max-sm:gap-[1.5vw] max-md:gap-[1vw] list-disc !font-display ">
            {children.map((child, idx) => {
              const safeKey = [sectionId, child.id, child.href, child.text, idx]
                .filter(Boolean)
                .join("__");

              const childSlug = getSlug(child.href);
              const childActive =
                childSlug === currentSlug ||
                (!!child.href && child.href !== "/" && (pathname || "").startsWith(child.href));

              return (
                <li key={safeKey} className={`${childActive ? "marker:!text-[#f16b0d]" : ""}`}>
                  <Link
                    href={child.href}
                    onClick={() => {
                      setOpenMobileMenu(false);
                      setOpenSection(null);
                      navigateTo?.(child.href);
                    }}
                    aria-current={childActive ? "page" : undefined}
                    className={childActive ? "text-[#f16b0d]" : ""}
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
