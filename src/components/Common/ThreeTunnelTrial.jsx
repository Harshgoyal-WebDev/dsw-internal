// ~/components/ThreeTunnel.js
"use client";
import React, { createContext, useContext, useMemo, useEffect, useRef } from "react";
import { useSyncExternalStore } from "react";

// External store to collect nodes registered by <In/> and render via <Out/>
function createTunnelStore() {
  const map = new Map();          // key -> ReactNode
  const subs = new Set();         // ✅ empty Set (no arg)

  return {
    subscribe: (fn) => {
      subs.add(fn);
      return () => subs.delete(fn);
    },
    set: (key, node) => {
      map.set(key, node);
      subs.forEach((fn) => fn());
    },
    remove: (key) => {
      map.delete(key);
      subs.forEach((fn) => fn());
    },
    getSnapshot: () => Array.from(map.values()),
  };
}

const TunnelCtx = createContext(null);

export function ThreeTunnelProvider({ children }) {
  const store = useMemo(() => createTunnelStore(), []);
  return <TunnelCtx.Provider value={store}>{children}</TunnelCtx.Provider>;
}

// Use a ref to avoid SSR/StrictMode id churn
let idCounter = 0;

export function In({ children, id }) {
  const store = useContext(TunnelCtx);
  if (!store) throw new Error("ThreeTunnelProvider missing");

  // Stable key (doesn't change across renders)
  const keyRef = useRef(id ?? `tunnel-${++idCounter}`);

  // Register / unregister; In itself must NOT use r3f hooks
  useEffect(() => {
    store.set(keyRef.current, children);
    return () => store.remove(keyRef.current);
  }, [children, store]);

  return null;
}

export function Out() {
  const store = useContext(TunnelCtx);
  if (!store) throw new Error("ThreeTunnelProvider missing");

  const nodes = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getSnapshot // server fallback (not used since Canvas is client-only)
  );

  return <>{nodes}</>;
}

export const ThreeTunnelTrial = { Provider: ThreeTunnelProvider, In, Out };
