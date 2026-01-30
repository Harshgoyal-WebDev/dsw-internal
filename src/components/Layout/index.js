// "use client";
import React from "react";
import KeepScrolling from "../KeepScrolling";
import {
  ImageObjectJsonLd,
  LocalBusiness,
  OrganizationJsonLd,
  WebsiteJsonLd,
} from "@/lib/json-ld";
import Loader from "../Loader";
import dynamic from "next/dynamic";
import PopupModal from "../Common/PopupModal";
import { ModalProvider, useModal } from "../Common/ModalProvider";
import ScrollToTop from "../ScrollToTop";
import WalkthroughPopup from "../Common/WalkthorughPopup";
import WalkthroughIframePopup from "../Common/WalkthroughIframe";
const Header = dynamic(() => import("../Header/index"), {
  ssr: true,
});
const Footer = dynamic(() => import("../Footer"), {
  ssr: true,
});

// function GlobalPopup() {
//   const { open, setOpen } = useModal();
//   return <PopupModal modalOpen={open} setModalOpen={setOpen} />;
// }

// function GlobalWalkthroughPopup(){
//   const{openWalkThrough , setOpenWalkThrough}=useModal();
//   return <WalkthroughPopup modalOpen={openWalkThrough} setModalOpen={setOpenWalkThrough} />
// }

// function GlobalWalkthroughIframe() {
//   return <WalkthroughIframePopup />;
// }
const Layout = ({ children }) => {
  return (
    <>
    <ModalProvider>
      <OrganizationJsonLd />
      <LocalBusiness />
      <ImageObjectJsonLd />
      <WebsiteJsonLd />
      <Loader />
      <Header />
      {children}
      <KeepScrolling />
      {/* <GlobalPopup/> */}
      {/* <GlobalWalkthroughPopup/> */}
      {/* <GlobalWalkthroughIframe /> */}
      <Footer />
      <ScrollToTop/>
    </ModalProvider>
    </>
  );
};

export default Layout;
