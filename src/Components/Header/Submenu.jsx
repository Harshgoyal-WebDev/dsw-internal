import React from 'react';
import Link from 'next/link'; // Adjust import based on your routing library

const SubmenuNavigation = ({ 
    openSection, 
    setOpenSection, 
    setOpenMobileMenu, 
    navigateTo, 
    toggleSection,
    type = "resources" 
}) => {
   
    const submenuData = {
        resources: {
            title: "Resources",
            link: "/resources",
            links: [
                { href: "/", text: "Blogs" },
                { href: "/", text: "News" },
                { href: "/", text: "Articles" },
                // { href: "/", text: "Resources 4" },
                // { href: "/", text: "Resources 5" },
            ],
        },
        products: {
            title: "Products",
            link: "/products",
            links: [
                { href: "/", text: "UnifyAI" },
                { href: "/", text: "InsurAInce" },   
            ],
        },
    };

    // Get the current submenu section based on type
    const submenuSection = submenuData[type];

    // Handle case where type is not found
    if (!submenuSection) {
        console.warn(`SubmenuNavigation: Unknown type "${type}". Available types: ${Object.keys(submenuData).join(', ')}`);
        return null;
    }

    return (
        <div className="w-full ">
            <div className="flex w-full flex-col mt-[0.5vw]">
                <div
                    className="flex justify-between w-full list-title cursor-pointer items-center"
                    onClick={() => toggleSection(submenuSection.title)}
                >
                    <a
                        href={submenuSection.link}
                        className=""
                        onClick={(e) => {
                            e.preventDefault();
                            navigateTo(submenuSection.link);
                            setOpenMobileMenu(false);
                            setOpenSection(null);
                        }}
                    >
                        {submenuSection.title}
                    </a>
                    <div
                        className={`w-fit h-fit transition-transform duration-300 ${
                            openSection === submenuSection.title ? "-rotate-90" : "rotate-0"
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
                    className={`overflow-hidden transition-all ease-none duration-700 mb-[4vw] ${
                        openSection === submenuSection.title
                            ? "max-h-[80vw] h-[30vw] opacity-100"
                            : "max-h-0 h-0 opacity-0"
                    }`}
                >
                    <ul className="max-sm:text-[4.5vw] max-md:text-[3.5vw] py-[5vw] pl-4 flex flex-col items-start justify-center max-sm:gap-[1.5vw] max-md:gap-[1vw] list-disc !font-display">
                        {submenuSection.links.map((link, idx) => (
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
                <div className="w-full bg-[#e8e8e8c5] h-[1px]"></div>
            </div>
        </div>
    );
};

export default SubmenuNavigation;