"use client";

import React from "react";
import KeepScrolling from "@/components/KeepScrolling";
import Loader from "@/components/Loader";
import ScrollToTop from "@/components/ScrollToTop";

import PopupModal from "@/components/Common/PopupModal";
import WalkthroughPopup from "@/components/Common/WalkthorughPopup";
import WalkthroughIframePopup from "@/components/Common/WalkthroughIframe";

import { ModalProvider, useModal } from "@/components/Common/ModalProvider";

import {
  ImageObjectJsonLd,
  LocalBusiness,
  OrganizationJsonLd,
  WebsiteJsonLd,
} from "@/lib/json-ld";
import LenisSmoothScroll from "./LenisSmoothScroll";

function GlobalPopup() {
  const { open, setOpen } = useModal();
  return <PopupModal modalOpen={open} setModalOpen={setOpen} />;
}

function GlobalWalkthroughPopup() {
  const { openWalkThrough, setOpenWalkThrough } = useModal();
  return (
    <WalkthroughPopup
      modalOpen={openWalkThrough}
      setModalOpen={setOpenWalkThrough}
    />
  );
}

function GlobalWalkthroughIframe() {
  return <WalkthroughIframePopup />;
}

export default function Providers({ children }) {
  return (
    <LenisSmoothScroll>

    <ModalProvider>

      {/* If these JSON-LD components do NOT require client hooks,
         you can move them to a Server Component for cleaner SEO.
         But leaving them here is fine if that’s how your lib is built. */}
      <OrganizationJsonLd />
      <LocalBusiness />
      <ImageObjectJsonLd />
      <WebsiteJsonLd />

      <Loader />

      {children}

      <KeepScrolling />
      <GlobalPopup />
      <GlobalWalkthroughPopup />
      <GlobalWalkthroughIframe />
      <ScrollToTop />
    </ModalProvider>

    </LenisSmoothScroll>
  );
}