
"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ThreeTunnel } from "./tunnel";

export default function CanvasTunnel() {
  return (
    <Canvas
      className="pointer-events-none z-0"
      style={{ position: "absolute", inset: 0, width: "100vw", height: "100vh" }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        <ThreeTunnel.Out /> {/* ← renders all registered 3D/HTML nodes */}
      </Suspense>
    </Canvas>
  );
}
