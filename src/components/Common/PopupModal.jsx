"use client";
import React, { useEffect, useRef } from "react";
import DemoForm from "./DemoForm";
import { useLenis } from "lenis/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { useModal } from "./ModalProvider";

const PopupModal = ({ modalOpen, setModalOpen }) => {
  const lenis = useLenis();
  const { payload, setPayload } = useModal();
  const clearPayloadTimeoutRef = useRef(null);

  // Animations + Lenis control
  useEffect(() => {
    if (!modalOpen) {
      lenis?.start();
      return;
    }

    lenis?.stop();

    const formHead = document.querySelector(".formhead");
    const formPara = document.querySelector(".formpara");
    if (!formHead || !formPara) return;

    const headEl = new SplitText(formHead, { type: "lines", mask: "lines" });
    const paraEl = new SplitText(formPara, { type: "lines", mask: "lines" });

    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });
    tl.from(headEl.lines, { yPercent: 100, stagger: 0.1, delay: 0.3 })
      .from(paraEl.lines, { yPercent: 100, stagger: 0.1 }, "-=0.7")
      .from(".formfade", { yPercent: 30, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=1");

    return () => tl.kill();
  }, [modalOpen, lenis]);

  // When modal closes => clear payload after 1s
  useEffect(() => {
    if (!modalOpen) {
      // schedule clear
      clearTimeout(clearPayloadTimeoutRef.current);
      clearPayloadTimeoutRef.current = setTimeout(() => {
        setPayload(null);
      }, 400);
    } else {
      // modal reopened -> cancel pending clear
      clearTimeout(clearPayloadTimeoutRef.current);
    }

    return () => clearTimeout(clearPayloadTimeoutRef.current);
  }, [modalOpen, setPayload]);

  const handleClose = () => {
    setModalOpen(false);
    // don't clear payload here; the effect above will handle it after 1s
  };

  return (
    <section
      id="popup"
      className={`w-full h-full fixed inset-0 z-[999] flex justify-center items-center backdrop-blur-lg duration-500 pt-[2%] bg-black/30 ${
        modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative rounded-[2vw] border border-white/20 bg-black/40 p-[4vw] pt-[6vw] w-[78%] h-[78%] flex justify-between overflow-hidden max-sm:rounded-[6vw] max-md:w-[90%] max-md:h-[80%] max-sm:h-fit max-sm:px-[7vw] max-sm:pt-[20%] max-sm:pb-[15%] max-md:flex-col max-md:rounded-[4vw] max-sm:gap-[10vw]">
        <div className="w-[30%] h-full space-y-[2vw] max-md:w-full max-md:space-y-[1vw] max-sm:space-y-[2vw]">
          {payload ? (
            <h2 className="text-90 formhead">Download Pdf</h2>
          ) : (
            <h2 className="text-90 formhead">Get a Full Demo</h2>
          )}
          <p className="text-white-200 formpara max-md:pl-[1vw]">Fill out the form</p>
        </div>

        <div className="w-[60%] max-md:w-full">
          <DemoForm />
        </div>

        <div className="formfade absolute top-[5%] right-[5%] max-md:top-[2.5%] max-sm:right-[4%] max-md:right-[2.5%]">
          <button
            onClick={handleClose}
            className="px-[1.5vw] py-[0.5vw] border border-white/30 bg-black/10 rounded-full text-[0.9vw] cursor-pointer hover:scale-[0.95] duration-300 max-sm:text-[3.5vw] max-sm:px-[5vw] max-sm:py-[2vw] max-md:text-[2.2vw] max-md:px-[3vw] max-md:py-[1vw]"
          >
            Close
          </button>
        </div>
      </div>

      {/* Background click closes modal */}
      <div className="w-screen h-screen fixed inset-0 z-[-1]" onClick={handleClose} />
    </section>
  );
};

export default PopupModal;
