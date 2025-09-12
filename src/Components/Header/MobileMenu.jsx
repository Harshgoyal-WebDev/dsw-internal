"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <div
            className={`w-screen h-screen fixed top-0 left-0 bg-black/50 backdrop-blur-md transition-all duration-500  ${openMobileMenu
                    ? "opacity-100 backdrop-blur-sm"
                    : "opacity-0 pointer-events-none"
                }`}
        >
            <div
                className={`max-sm:w-screen max-sm:h-dvh overflow-hidden !opacity-100 bg-transparent flex flex-col max-sm:justify-between px-[7vw] text-[#CACACA] !font-display  max-sm:text-[6vw] absolute top-0 z-[160] right-0 max-sm:space-y-[5vw] max-md:py-[8vw] transition-all duration-500 origin-top-right max-md:w-[60vw] max-md:h-screen max-md:text-[4vw] max-md:space-y-[7vw]   ${openMobileMenu ? "translate-x-0" : "translate-x-[100%]"
                    }`}
            >
                <div className="h-full w-full relative z-[30]  border rounded-[8vw] bg-white/10 flex flex-col justify-center px-[7vw]">
                <div className="flex flex-col max-sm:gap-[4vw] items-start max-md:gap-[3vw]">
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
                    <span className="bg-[#E8E8E8] h-[0.5px] w-full"></span>
{/* 
                    <div className="w-full">
                        {[
                            {
                                title: "Personal",
                                link: "/personal",
                                links: [
                                    { href: "/personal/banking", text: "Banking" },
                                    { href: "/personal/payments", text: "Payments" },
                                    { href: "/personal/finance", text: "Finance" },
                                    { href: "/personal/chat", text: "Chat" },
                                    { href: "/personal/shop", text: "Shop" },
                                ],
                            },
                            {
                                title: "Business",
                                link: "/business",
                                links: [
                                    { href: "/business/banking", text: "Banking" },
                                    { href: "/business/payments", text: "Payments" },
                                    { href: "/business/agency-banking", text: "Agency Banking" },
                                    {
                                        href: "/business/inventory-management",
                                        text: "Inventory Management",
                                    },
                                    { href: "/business/montra-store", text: "Montra Store" },
                                    { href: "/business/payment-gateway", text: "Payment Gateway" },
                                    { href: "/business/tap-and-pay", text: "Tap & Pay" },
                                ],
                            },
                        ].map((section, index) => (
                            <div
                                key={index}
                                className={`flex w-full flex-col ${index % 3 >= 1 ? "mt-[4vw]" : "mt-[0.5vw]"
                                    }`}
                            >
                                <div
                                    className="flex justify-between w-full list-title cursor-pointer items-center"
                                    onClick={() => toggleSection(section.title)}
                                >
                                    <a
                                        href={section.link}
                                        className=""
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigateTo(section.link);
                                            setOpenMobileMenu(false);
                                            setOpenSection(null);
                                        }}
                                    >
                                        {section.title}
                                    </a>
                                    <div
                                        className={`w-fit h-fit transition-transform duration-300 ${openSection === section.title ? "-rotate-90" : "rotate-0"
                                            }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="max-sm:h-[5vw] max-sm:w-[5vw] text-primary max-md:w-[3vw] max-md:h-[3vw] group-hover:rotate-[-180deg] ease-in-out transition-all duration-700"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all ease-none ${section.title === "Personal"
                                            ? "duration-700 mb-[4vw]"
                                            : "duration-700 mb-[1vw]"
                                        } ${openSection === section.title
                                            ? "max-h-[80vw] opacity-100"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <ul className="max-sm:text-[4.5vw] max-md:text-[3.5vw] py-[5vw] pl-4 flex flex-col items-start justify-center max-sm:gap-[1.5vw] max-md:gap-[1vw]">
                                        {section.links.map((link, idx) => (
                                            <li key={idx}>
                                                <Link
                                                    href={link.href}
                                                    className="link-line"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        navigateTo(link.href);
                                                        setOpenMobileMenu(false);
                                                        setOpenSection(null);
                                                    }}
                                                >
                                                    {link.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div
                                    className={`w-full h-[1px] bg-white ${section.title === "Business" ? "hidden" : ""
                                        }`}
                                ></div>
                            </div>
                        ))}
                    </div> */}


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
                   <span className="bg-[#E8E8E8] h-[0.5px] w-full"></span>
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
                    <span className="bg-[#E8E8E8] h-[0.5px] w-full"></span>
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
                    <span className="bg-[#E8E8E8] h-[0.5px] w-full"></span>

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
                </div>
                </div>
                {/* <div className="w-screen h-screen absolute top-[30%] z-[10] left-0 hidden max-sm:block">
                    <Image src={"/assets/images/homepage/gradient-mobile.png"} alt="shader-gradient-mobile" className="w-full h-full object-cover" width={600} height={1080}/>
                  </div> */}
            </div>
             
        </div>
    );
}