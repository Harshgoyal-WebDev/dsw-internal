"use client";
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
const Header = dynamic(() => import("../Header/index"), {
  ssr: true,
});
const Footer = dynamic(() => import("../Footer"), {
  ssr: true,
});

function GlobalPopup() {
  const { open, setOpen } = useModal();
  return <PopupModal modalOpen={open} setModalOpen={setOpen} />;
}

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
      <GlobalPopup/>
      <Footer />
    </ModalProvider>
    </>
  );
};

export default Layout;
