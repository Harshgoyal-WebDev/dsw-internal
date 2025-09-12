import Newsletter from "./Newsletter";
import FooterCTA from "./FooterCta";
import NavigationLink from "../UI/NavigationLink";
import SocialLink from "../UI/SocialLink";
import ContactInfo from "../UI/ContactInfo";
import Logo from "../UI/Logo";
import { NAVIGATION, SOCIAL_LINKS, SITE_CONFIG } from "@/constants/siteConfig";
import { Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
    ssr: true,
});

const Footer = () => {

    return (
        <>
            <FooterCTA />
            <footer className="relative overflow-hidden px-20 pt-[15vw] max-sm:px-[7vw]" id="footer">
                <div className="absolute top-[30%] left-0 h-screen w-screen max-sm:hidden">
                    <Suspense>
                        <DynamicShaderComp color={"0x1726FD"} />
                    </Suspense>
                </div>
                <div className="w-screen h-screen absolute top-[30%] z-[10] left-0 hidden max-sm:block">
                    <Image src={"/assets/images/homepage/gradient-mobile.png"} alt="bg-gradient" className="w-full h-full object-cover" width={600} height={1080} />
                </div>
                <div className="relative z-[20]">
                    <div className="rounded-[2.2vw] background-glass-diff border border-white/30 px-12 py-[5%] flex justify-between max-sm:px-[0vw] max-sm:py-[15%] max-sm:rounded-[5vw] max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center">
                        {/* Logo and Contact Info */}
                        <div className="flex flex-col justify-between items-start gap-24 max-sm:gap-18 footer-content max-sm:pb-[15vw] max-sm:items-center max-sm:justify-center">
                            <Logo variant="footer" className="w-fit" />
                            <ContactInfo variant="footer" />
                        </div>
                        <div className="flex justify-between w-1/2 ml-auto gap-10 footer-content max-sm:flex-col max-sm:w-full">
                            {/* Navigation Links */}
                            <div>
                                <h6 className="mb-5 text-foreground content-p">NAVIGATION</h6>
                                <ul className="space-y-3">
                                    {NAVIGATION.map((link) => (
                                        <li key={link.id} className="text-foreground content-p">
                                            <NavigationLink
                                                text={link.text}
                                                href={link.href}
                                                variant="footer"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter Subscription */}
                            <div className="flex flex-col justify-between w-3/5 max-sm:w-full">
                                <Newsletter />
                                {/* Social Media Links */}
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
                    <div className="flex justify-between py-8 pt-12 text-[1vw] max-sm:text-sm max-sm:gap-2 text-foreground max-sm:flex-col max-sm:text-center">
                        <p>Copyright © {SITE_CONFIG.name} {SITE_CONFIG.copyright.year}</p>
                        <p>
                            {SITE_CONFIG.copyright.credits.text}{" "}
                            <a
                                href={SITE_CONFIG.copyright.credits.link}
                                className="hover:text-white transition-colors duration-300"
                            >
                                {SITE_CONFIG.copyright.credits.name}
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;