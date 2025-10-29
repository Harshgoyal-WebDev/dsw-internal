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
  const openModal = useCallback(() => setOpen(true), []);
  const openWith = useCallback((p) => {
    setPayload(p || null);
    setOpen(true);
  }, []);
  const value = useMemo(
    () => ({ open, setOpen, openModal, payload, setPayload, openWith }),
    [open, openModal, payload, setPayload, openWith]
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
