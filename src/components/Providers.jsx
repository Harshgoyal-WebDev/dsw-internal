"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ModalProvider, useModal } from "@/components/Common/ModalProvider";
import LenisSmoothScroll from "./LenisSmoothScroll";
// import { fadeUp, headingAnim } from "./Animations/gsapAnimations";

import {
  ImageObjectJsonLd,
  LocalBusiness,
  OrganizationJsonLd,
  WebsiteJsonLd,
} from "@/lib/json-ld";
import { useGsapScrollAnims } from "./Animations/useGsapAnim";

// Lazy UI (not needed for LCP)
const KeepScrolling = dynamic(() => import("@/components/KeepScrolling"), {
  ssr: false,
  loading: () => null,
});
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false,
  loading: () => null,
});
const Loader = dynamic(() => import("@/components/Loader"), {
  ssr: false,
  loading: () => null,
});

// Lazy modals
const PopupModal = dynamic(() => import("@/components/Common/PopupModal"), {
  ssr: false,
  loading: () => null,
});
const WalkthroughPopup = dynamic(
  () => import("@/components/Common/WalkthorughPopup"),
  { ssr: false, loading: () => null },
);
const WalkthroughIframePopup = dynamic(
  () => import("@/components/Common/WalkthroughIframe"),
  { ssr: false, loading: () => null },
);

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

function defer(cb) {
  if (typeof window === "undefined") return;
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(() => cb(), { timeout: 2000 });
    return () => window.cancelIdleCallback(id);
  }
  const id = setTimeout(cb, 0);
  return () => clearTimeout(id);
}

export default function Providers({ children }) {
  // ✅ enable heavy wrappers after first paint/idle
  const [enableRuntime, setEnableRuntime] = useState(false);

  useEffect(() => {
    const cleanup = defer(() => setEnableRuntime(true));
    return () => cleanup?.();
  }, []);

  const rootRef = useRef(null);

  // run GSAP scroll anims lazily, scoped to this subtree
  useGsapScrollAnims({ root: rootRef, enabled: true });

  // ✅ run GSAP init once (not per render)

  // headingAnim();
  // fadeUp();

  // ✅ keep SEO JSON-LD (if these are pure script tags, ideally make them server components later)
  const SEO = (
    <>
      <OrganizationJsonLd />
      <LocalBusiness />
      <ImageObjectJsonLd />
      <WebsiteJsonLd />
    </>
  );

  if (!enableRuntime) {
    // Fast path: no lenis, no loader, no scroll widgets, no modals
    return (
      <ModalProvider>
        {SEO}
        {children}
      </ModalProvider>
    );
  }

  return (
    <LenisSmoothScroll>
      <ModalProvider>
        {SEO}
        <Loader />
        <div ref={rootRef}>{children}</div>
        <KeepScrolling />
        <GlobalPopup />
        <GlobalWalkthroughPopup />
        <GlobalWalkthroughIframe />
        <ScrollToTop />
      </ModalProvider>
    </LenisSmoothScroll>
  );
}
