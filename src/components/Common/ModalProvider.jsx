"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  /* -------------------------
   * Existing modals
   * ------------------------- */
  const [open, setOpen] = useState(false); // demo / generic modal
  const [openWalkThrough, setOpenWalkThrough] = useState(false); // form
  const [openWalkthroughIframe, setOpenWalkthroughIframe] =
    useState(false); // iframe

  /* 🔑 Walkthrough completion state */
  const [walkthroughCompleted, setWalkthroughCompleted] = useState(false);

  /* Shared payload */
  const [payload, setPayload] = useState(null);

  /* -------------------------
   * Existing helpers
   * ------------------------- */
  const openModal = useCallback(() => setOpen(true), []);

  const openWith = useCallback((p) => {
    setPayload(p || null);
    setOpen(true);
  }, []);

  const openWalkThroughModal = useCallback(() => {
    setOpenWalkThrough(true);
  }, []);

  const openWithWalkthrough = useCallback((p) => {
    setPayload(p || null);
    setOpenWalkThrough(true);
  }, []);

  const openWalkthroughIframeModal = useCallback((p) => {
    setPayload(p || null);
    setOpenWalkthroughIframe(true);
  }, []);

  /* -------------------------
   * 🔑 SMART WALKTHROUGH OPENER
   * ------------------------- */
  const openWalkthroughSmart = useCallback(() => {
    if (walkthroughCompleted) {
      setOpenWalkthroughIframe(true);
    } else {
      setOpenWalkThrough(true);
    }
  }, [walkthroughCompleted]);

  /* -------------------------
   * 🔑 openByKey (EXTENDED, NOT BROKEN)
   * ------------------------- */
  const openByKey = useCallback(
    (key, p) => {
      if (p !== undefined) setPayload(p || null);

      switch (key) {
        case "demo":
          setOpen(true);
          break;

        case "walkthrough":
          setOpenWalkThrough(true);
          break;

        case "walkthrough-iframe":
          setOpenWalkthroughIframe(true);
          break;

        /* ✅ NEW: SAFE SMART KEY */
        case "walkthrough-smart":
          if (walkthroughCompleted) {
            setOpenWalkthroughIframe(true);
          } else {
            setOpenWalkThrough(true);
          }
          break;

        default:
          break;
      }
    },
    [walkthroughCompleted]
  );

  /* -------------------------
   * Context value
   * ------------------------- */
  const value = useMemo(
    () => ({
      /* demo modal */
      open,
      setOpen,
      openModal,
      openWith,

      /* walkthrough form */
      openWalkThrough,
      setOpenWalkThrough,
      openWalkThroughModal,
      openWithWalkthrough,

      /* walkthrough iframe */
      openWalkthroughIframe,
      setOpenWalkthroughIframe,
      openWalkthroughIframeModal,

      /* walkthrough state */
      walkthroughCompleted,
      setWalkthroughCompleted,
      openWalkthroughSmart,

      /* shared */
      payload,
      setPayload,
      openByKey,
    }),
    [
      open,
      openWalkThrough,
      openWalkthroughIframe,
      walkthroughCompleted,
      payload,
      openModal,
      openWith,
      openWalkThroughModal,
      openWithWalkthrough,
      openWalkthroughIframeModal,
      openWalkthroughSmart,
      openByKey,
    ]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within <ModalProvider>");
  }
  return ctx;
}
