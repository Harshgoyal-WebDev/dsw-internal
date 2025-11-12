"use client";
import Newsletter from "./Newsletter";
import { NAVIGATION, SOCIAL_LINKS, SITE_CONFIG, NAVIGATION_FOOTER } from "@/constants/siteConfig";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import NavigationLink from "../ui/NavigationLink";
import SocialLink from "../ui/SocialLink";
import Logo from "../ui/Logo";
import ContactInfo from "../ui/ContactInfo";

const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
  ssr: false,
});

const Footer = () => {
  const [mob, setMob] = useState(false);

  useEffect(() => {
    if (globalThis.innerWidth <= 1024) {
      setMob(true);
    } else {
      setMob(false);
    }
  }, [mob]);

  return (
    <>
      <footer className="relative overflow-hidden container !pb-0" id="footer">
        {!mob ? (
          <div className="absolute top-[30%] left-0 h-screen w-screen max-md:hidden">
            <Suspense>
              <DynamicShaderComp />
            </Suspense>
          </div>
        ) : (
          <div className="w-screen h-screen absolute top-[30%] z-[10] left-0 hidden max-md:block">
            <Image
              src={"/assets/images/homepage/gradient-mobile.png"}
              alt="bg-gradient"
              className="w-full h-full object-cover"
              width={600}
              height={1080}
            />
          </div>
        )}

        <div className="relative z-[20]">
          <div className="rounded-[2.2vw] background-glass-diff border border-white/30 px-12 py-[5%] flex justify-between max-md:px-[0vw] max-md:py-[15%] max-md:rounded-[5vw] max-sm:rounded-[10vw] max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center">
            {/* Logo and Contact Info */}
            <div className="flex flex-col justify-between items-start gap-24 max-md:gap-18 footer-content max-sm:pb-[15vw] max-md:pb-[10vw] max-md:items-center max-md:justify-center">
              <Logo variant="footer" className="w-fit" />
              <ContactInfo variant="footer" />
            </div>
            <div className="flex justify-between w-[60%] ml-auto gap-10 footer-content max-md:flex-col max-md:w-full">
              {/* Navigation Links */}
              <div>
                {/* <ul className="space-y-3">
                  {NAVIGATION_FOOTER.map((link) => (
                    <li key={link.id} className="text-foreground content-p">
                      <NavigationLink
                        text={link.text}
                        href={link.href}
                        variant="footer"
                        className="hover:!text-[#f16b0d]"
                      />
                    </li>
                  ))}
                </ul> */}
                <div className="grid grid-cols-2 gap-3 max-md:flex max-md:flex-col max-sm:space-y-[15vw] max-md:space-y-[10vw]">
                  <div>
                    <p className="mb-5 text-foreground content-p font-head">NAVIGATION</p>

                    <ul className="space-y-3">
                      {NAVIGATION_FOOTER.slice(0, 5).map((link) => (
                        <li key={link.id} className="text-foreground content-p">
                          <NavigationLink
                            text={link.text}
                            href={link.href}
                            variant="footer"
                            className="hover:!text-[#f16b0d]"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>

                    <p className="mb-5 text-foreground content-p font-head">COMPANY</p>

                    <ul className="space-y-3">
                      {NAVIGATION_FOOTER.slice(5).map((link) => (
                        <li key={link.id} className="text-foreground content-p">
                          <NavigationLink
                            text={link.text}
                            href={link.href}
                            variant="footer"
                            className="hover:!text-[#f16b0d]"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Newsletter Subscription */}
              <div className="flex flex-col justify-between w-[40%] max-md:w-full">
                <Newsletter />
                {/* Social Media Links */}
                <ul className="flex gap-3 max-md:items-center max-md:justify-center max-md:mt-[10vw] max-sm:mt-[15vw]">
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
          <div className="flex justify-between py-8 pt-12  text-[1vw] max-md:text-xl max-sm:text-sm max-md:gap-2 text-foreground max-md:flex-col max-md:text-center max-sm:py-[7%]">
            <p>
              Copyright © {SITE_CONFIG.name} {SITE_CONFIG.copyright.year}
            </p>
            <p className="under-multi-parent">
              {SITE_CONFIG.copyright.credits.text}{" "}
              <a
                target="_blank"
                href={SITE_CONFIG.copyright.credits.link}
                className="hover:text-white transition-colors duration-300 under-multi"
              >
                {SITE_CONFIG.copyright.credits.name}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
