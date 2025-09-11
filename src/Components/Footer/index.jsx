import Image from "next/image"
import Link from "next/link"
import Newsletter from "./Newsletter";
import FooterCTA from "./FooterCta";
import { Links, NavLink, SocialLinks } from "../Header/NavLink";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Suspense, useEffect, useRef } from "react";
import ShaderComp from "../BgShader/ShaderComp";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const footerGlassRef = useRef(null);
    useEffect(()=>{
        gsap.from(footerGlassRef.current,{
            // scale:1.1,
            opacity:0,
            yPercent:40,
            ease:"power3.out",
            scrollTrigger:{
                trigger: footerRef.current,
                start: "top 60%",
                end:"bottom 60%",
                scrub: 0.25,
            }
        })
    })

    return (
        <>
            <FooterCTA />
            <footer className="relative overflow-hidden px-20 pt-[15vw]" id="footer" ref={footerRef}>
                {/* <Image src="/assets/images/footer-bg.svg" width={1920} height={900} alt="Footer Background" loading="lazy" className="absolute -bottom-20 left-0 right-0 w-full" /> */}
                 <div className="absolute top-[30%] left-0 h-screen w-screen">
        <Suspense>
          <ShaderComp color={"0x1726FD"} />
        </Suspense>
      </div>
                <div className="relative z-[1]">
                    <div className="rounded-[2.2vw] background-glass-diff border border-white/30 px-12 py-[5%] flex justify-between" ref={footerGlassRef}>
                        {/* Logo and Contact Info */}
                       
                        <div className="flex flex-col justify-between items-start gap-24 footer-content">
                            <Image src="/dsw-logo.svg" width={338} height={172} alt="Logo" loading="lazy" className="w-2/3" />
                            <div className=" text-foreground">
                                <h6 className="font-medium mb-5 content-p">CONTACT US</h6>
                                <ul className="space-y-2">
                                    <li className="under-multi-parent">
                                        <a href="tel:+91 96640 56847" className="under-multi content-p">+91 96640 56847</a>
                                    </li>
                                    <li className="under-multi-parent">
                                        <a href="tel:+353 894015233" className="under-multi content-p">+353 894015233</a>
                                    </li>
                                    <li className="under-multi-parent">
                                        <a href="mailto:contact@datasciencewizards.ai" className="under-multi content-p">contact@datasciencewizards.ai</a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="flex justify-between w-1/2 ml-auto gap-10 footer-content">
                            {/* Navigation Links */}
                            <div>
                                <h6 className="mb-5 text-foreground content-p">NAVIGATION</h6>
                                <ul className="space-y-3">
                                    {Links.map((link, index) => (
                                        <li key={index} className="text-foreground content-p">
                                            <NavLink text={link.text} href={link.href} />
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Newsletter Subscription */}
                            <div className="flex flex-col justify-between w-3/5">
                                <Newsletter />

                                {/* Social Media Links */}
                                <ul className="flex gap-4">
                                    {SocialLinks.map((link, index) => (
                                        <li key={index} className="group">
                                            <Link href={link.href} aria-label={link.label} className="rounded-full  block p-2.5 border overflow-hidden bg-white/10  group-hover:bg-white transition-all duration-500 ease group-hover:scale-[0.95]">
                                                <div className="w-5 h-5 flex items-center justify-center text-white group-hover:text-black transition-all duration-500 ease " dangerouslySetInnerHTML={{__html: link.icon}}/>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between py-8 pt-12 text-lg text-foreground">
                        <p>Copyright © Data Science Wizards 2025</p>
                        <p>By: <a href="https://weareenigma.com/">Enigma Digital</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;