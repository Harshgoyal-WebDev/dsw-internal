"use client";
import React, { useEffect } from "react";
import DemoForm from "./DemoForm";
import {useLenis} from "lenis/react";
const PopupModal = ({ modalOpen, setModalOpen }) => {
  const lenis = useLenis();
  useEffect(() => {
    if (modalOpen) {
      lenis&&lenis.stop();
    } else {
      lenis&&lenis.start();
    }
  }, [modalOpen]);
  return (
    <section
      className={`w-full h-full fixed inset-0 z-[800] flex justify-center  items-center backdrop-blur-lg duration-500 pt-[2%]  ${modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      id="popup"
    >
      <div className="relative rounded-[2vw] border border-white/20 bg-black/40  p-[4vw] pt-[6vw] w-[78%] h-[78%] flex justify-between overflow-hidden max-sm:rounded-[6vw] max-sm:w-[90%] max-sm:h-[80%] max-sm:px-[7vw] max-sm:py-[20vw] max-sm:flex-col">
        <div className="w-[30%] h-full space-y-[2vw] max-sm:w-full">
          <h2 className="text-90">Get a Full Demo</h2>
          <p className="text-white-200">Fill out the form</p>
        </div>
        <div className="w-[60%] max-sm:w-full">
          <DemoForm />
        </div>
        <button
          className="absolute top-[5%] right-[5%] px-[1.5vw] py-[0.5vw] border border-white/30 bg-black/10 rounded-full flex justify-center items-center text-[0.9vw] cursor-pointer hover:scale-[0.95] duration-300 max-sm:text-[3.5vw] max-sm:px-[5vw] max-sm:py-[2vw] max-sm:top-[2%] max-sm:right-[4%]"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default PopupModal;
