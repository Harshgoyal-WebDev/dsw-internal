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
  // existing modals
  const [open, setOpen] = useState(false);
  const [openWalkThrough, setOpenWalkThrough] = useState(false);

  // 👉 NEW: walkthrough iframe modal
  const [openWalkthroughIframe, setOpenWalkthroughIframe] = useState(false);

  // shared payload
  const [payload, setPayload] = useState(null);

  // -------------------------
  // Existing helpers
  // -------------------------
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

  // -------------------------
  // 👉 NEW helpers (iframe)
  // -------------------------
  const openWalkthroughIframeModal = useCallback((p) => {
    setPayload(p || null);
    setOpenWalkthroughIframe(true);
  }, []);

  // -------------------------
  // Key based opener (extended)
  // -------------------------
  const openByKey = useCallback((key, p) => {
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

      default:
        // no-op
        break;
    }
  }, []);

  // -------------------------
  // Context value
  // -------------------------
  const value = useMemo(
    () => ({
      // demo modal
      open,
      setOpen,
      openModal,
      openWith,

      // walkthrough form modal
      openWalkThrough,
      setOpenWalkThrough,
      openWalkThroughModal,
      openWithWalkthrough,

      // 👉 walkthrough iframe modal
      openWalkthroughIframe,
      setOpenWalkthroughIframe,
      openWalkthroughIframeModal,

      // shared
      payload,
      setPayload,
      openByKey,
    }),
    [
      open,
      openModal,
      openWith,

      openWalkThrough,
      openWalkThroughModal,
      openWithWalkthrough,

      openWalkthroughIframe,
      openWalkthroughIframeModal,

      payload,
      setPayload,
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
