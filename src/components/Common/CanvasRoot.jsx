"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ThreeTunnelTrial } from "./ThreeTunnelTrial";

export default function CanvasRoot() {
  return (
    <Canvas
      className="pointer-events-none z-[100]"  // don't block UI clicks
      style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh" }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        {/* This is where all .In children are rendered, safely inside Canvas */}
        <ThreeTunnelTrial.Out />
      </Suspense>
    </Canvas>
  );
}
