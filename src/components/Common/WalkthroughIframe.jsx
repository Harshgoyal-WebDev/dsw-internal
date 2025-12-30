"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useModal } from "./ModalProvider";

const IFRAME_MAP = {
  "/unifyai": "https://app.supademo.com/embed/cm9sce4s00cy6dtm7vmvy0spa?embed_v=2",
  "/agentic-ai": "https://app.supademo.com/embed/cm9r39rl26y0oljv58dqqn32v?embed_v=2",
};

const WalkthroughIframePopup = () => {
  const pathname = usePathname();
//   const lenis = useLenis();
  const {
    openWalkthroughIframe,
    setOpenWalkthroughIframe,
  } = useModal();

  const iframeSrc = IFRAME_MAP[pathname];

//   useEffect(() => {
//     openWalkthroughIframe ? lenis?.stop() : lenis?.start();
//   }, [openWalkthroughIframe, lenis]);

  if (!iframeSrc) return null;

  return (
    <section
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-lg transition-opacity ${
        openWalkthroughIframe
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        data-lenis-prevent
        className="relative w-[80%] h-[80%] max-sm:w-[90%] max-sm:h-[30%] max-md:h-[40%] bg-black rounded-[1.2vw] max-sm:rounded-[2.5vw] overflow-hidden"
      >
        <iframe
          src={iframeSrc}
          className="w-full h-full"
          allow="camera; microphone; fullscreen"
        />
      </div>
      <div className="formfade absolute top-[3%] right-[3%] max-md:top-[2.5%] max-sm:right-[4%] max-md:right-[2.5%]">

        <div
           onClick={() => setOpenWalkthroughIframe(false)}
          className={` h-auto group  max-sm:w-[12vw] rounded-full   p-[2vw]  transition-all  ease-out max-sm:p-[6vw]  bg-gradient-to-br from-[#F16B0D] to-[#E61216] cursor-pointer max-md:p-[4vw] `}
        >
          <div
            style={{
              transitionTimingFunction: "cubic-bezier(0.625, 0.05, 0, 1)",
            }}
            className="rotate-45 group-hover:rotate-[225deg] duration-700"
          >
            <span
              className={`w-[1.5vw] rounded-full h-[2px] bg-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 transform-origin-center max-sm:w-[5vw] max-sm:h-[1.5px] rotate-90 max-md:w-[3vw]`}
            ></span>

            <span
              className={`w-[1.5vw] rounded-full h-[2px] bg-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 transform-origin-center max-sm:w-[5vw] max-sm:h-[1.5px] max-md:w-[3vw]`}
            ></span>
          </div>
        </div>
        </div>
    </section>
  );
};

export default WalkthroughIframePopup;
