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
  const [open, setOpen] = useState(false);
  const [payload, setPayload] = useState(null);
  const [openWalkThrough, setOpenWalkThrough] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const openWith = useCallback((p) => {
    setPayload(p || null);
    setOpen(true);
  }, []);
  const openWalkThroughModal = useCallback(() => setOpenWalkThrough(true), []);
  const openWithWalkthrough = useCallback((p) => {
    setPayload(p || null);
     setOpenWalkThrough(true);
  }, []);

  const openByKey = useCallback((key, p) => {
    if (p !== undefined) setPayload(p || null);

    switch (key) {
      case "demo":
        setOpen(true);
        break;
      case "walkthrough":
        setOpenWalkThrough(true);
        break;
      default:
        // no-op
        break;
    }
  }, []);

  const value = useMemo(
    () => ({ open, setOpen, openModal, openByKey, payload, setPayload, openWith, openWalkThrough, setOpenWalkThrough, openWalkThroughModal, openWithWalkthrough }),
    [open, openModal, payload, setPayload,openByKey, openWith, openWalkThrough, setOpenWalkThrough,openWalkThroughModal, openWithWalkthrough ]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within <ModalProvider>");
  }
  return ctx;
}
