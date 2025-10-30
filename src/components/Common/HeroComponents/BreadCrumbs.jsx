"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useMemo, useRef } from "react";
import Image from "next/image";

const BreadCrumbs = () => {
  const crumbsRef = useRef(null);
  const pathname = usePathname();

  const toTitle = (segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const truncate = (str, max = 20) =>
    str.length > max ? `${str.slice(0, max)}...` : str;

  const pathArray = useMemo(
    () =>
      pathname
        .split("/")
        .filter(Boolean)
        .filter((s) => s.toLowerCase() !== "home"),
    [pathname]
  );

  // Build cumulative hrefs for each segment
  const items = useMemo(
    () =>
      pathArray.map((seg, i) => ({
        seg,
        href: "/" + pathArray.slice(0, i + 1).join("/"),
        label: toTitle(seg),
      })),
    [pathArray]
  );

  return (
    <div className="breadcrumbs overflow-hidden w-fit flex items-start justify-start text-[1vw] text-[#CACACA] max-md:text-[2.5vw] max-sm:text-[3.5vw] max-md:h-fit absolute left-[5%] top-[74.7%] max-md:top-[90%] z-[800] opacity-0">
      <div ref={crumbsRef} className="flex gap-3 items-center">
        {/* Static 'resources' (not a link) */}
        <span className="opacity-60">Resources</span>

        {/* Dynamic segments as links */}
        {items.map(({ href, label }, index) => (
          <div key={href} className="flex items-center gap-3">
            <span className=" w-3 h-3">
              <Image src={"/assets/icons/breadcrumbs.svg"} alt="braedcrumb icon" width={20} height={20} className="w-full h-full object-contain"/>
            </span>
            <Link href={href} title={label} className="">
              {truncate(label)}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumbs;
