"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";

/** ---------- MovingGradientShader (throttled, demand-render) ---------- */
const MovingGradientShader = ({
  // Lower wave
  lowerWaveFreq = 2.8,
  lowerWaveAmp = 0.07,
  lowerWaveSpeed = 0.2,
  lowerBoundaryBase = 0.25,
  lowerFadeSoftness = 0.25,
  // Upper wave
  upperWaveFreq = 10.0,
  upperWaveAmp = 0.05,
  upperWaveSpeed = -0.15,
  topBoundaryBase = 0.75,
  topFadeSoftness = 0.3,
  // Color
  color = "#1726FD",
  // Target FPS (reduce to further save power)
  fps = 30,
}) => {
  const materialRef = useRef();
  const geoRef = useRef();
  const { viewport, invalidate, gl } = useThree();

  // Use mediump for slightly lower precision = less bandwidth on some GPUs
  const vertexShader = useMemo(
    () => `
      precision mediump float;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    []
  );

  const fragmentShader = useMemo(
    () => `
      precision mediump float;
      varying vec2 vUv;
      uniform float u_time;
      uniform vec3  u_color;

      uniform float u_lowerWaveFreq;
      uniform float u_lowerWaveAmp;
      uniform float u_lowerWaveSpeed;
      uniform float u_lowerBoundaryBase;
      uniform float u_lowerFadeSoftness;

      uniform float u_upperWaveFreq;
      uniform float u_upperWaveAmp;
      uniform float u_upperWaveSpeed;
      uniform float u_topBoundaryBase;
      uniform float u_topFadeSoftness;

      float smoothstep_custom(float e0, float e1, float x) {
        float t = clamp((x - e0) / (e1 - e0), 0.0, 1.0);
        return t * t * (3.0 - 2.0 * t);
      }

      void main() {
        vec2 uv = vUv;

        float lowerWave = sin(uv.x * u_lowerWaveFreq - u_time * u_lowerWaveSpeed) * u_lowerWaveAmp;
        float lowerBoundaryWavy = u_lowerBoundaryBase + lowerWave;

        float upperWave = sin(uv.x * u_upperWaveFreq + u_time * u_upperWaveSpeed) * u_upperWaveAmp;
        float topBoundaryWavy = u_topBoundaryBase + upperWave;

        float waveHeight = topBoundaryWavy - lowerBoundaryWavy;
        float extendedLowerFade = u_lowerFadeSoftness + (waveHeight * 0.4);
        float extendedTopFade   = u_topFadeSoftness   + (waveHeight * 0.4);

        float fromBottom = smoothstep_custom(
          lowerBoundaryWavy - extendedLowerFade * 0.5,
          lowerBoundaryWavy + extendedLowerFade * 0.5,
          uv.y
        );

        float fromTop = 1.0 - smoothstep_custom(
          topBoundaryWavy - extendedTopFade * 0.5,
          topBoundaryWavy + extendedTopFade * 0.5,
          uv.y
        );

        float finalAlpha = clamp(fromBottom * fromTop, 0.0, 1.0);
        gl_FragColor = vec4(u_color, finalAlpha);
      }
    `,
    []
  );

  // Create uniforms once
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_color: { value: new THREE.Color(color) },
      u_lowerWaveFreq: { value: lowerWaveFreq },
      u_lowerWaveAmp: { value: lowerWaveAmp },
      u_lowerWaveSpeed: { value: lowerWaveSpeed },
      u_lowerBoundaryBase: { value: lowerBoundaryBase },
      u_lowerFadeSoftness: { value: lowerFadeSoftness },
      u_upperWaveFreq: { value: upperWaveFreq },
      u_upperWaveAmp: { value: upperWaveAmp },
      u_upperWaveSpeed: { value: upperWaveSpeed },
      u_topBoundaryBase: { value: topBoundaryBase },
      u_topFadeSoftness: { value: topFadeSoftness },
    }),
    [
      color,
      lowerWaveFreq,
      lowerWaveAmp,
      lowerWaveSpeed,
      lowerBoundaryBase,
      lowerFadeSoftness,
      upperWaveFreq,
      upperWaveAmp,
      upperWaveSpeed,
      topBoundaryBase,
      topFadeSoftness,
    ]
  );

  // Apply prop changes without recreating material
  useEffect(() => {
    const u = materialRef.current?.uniforms;
    if (!u) return;
    u.u_color.value.set(color);
    u.u_lowerWaveFreq.value = lowerWaveFreq;
    u.u_lowerWaveAmp.value = lowerWaveAmp;
    u.u_lowerWaveSpeed.value = lowerWaveSpeed;
    u.u_lowerBoundaryBase.value = lowerBoundaryBase;
    u.u_lowerFadeSoftness.value = lowerFadeSoftness;
    u.u_upperWaveFreq.value = upperWaveFreq;
    u.u_upperWaveAmp.value = upperWaveAmp;
    u.u_upperWaveSpeed.value = upperWaveSpeed;
    u.u_topBoundaryBase.value = topBoundaryBase;
    u.u_topFadeSoftness.value = topFadeSoftness;

    // Render once when uniforms change
    invalidate();
  }, [
    color,
    lowerWaveFreq,
    lowerWaveAmp,
    lowerWaveSpeed,
    lowerBoundaryBase,
    lowerFadeSoftness,
    upperWaveFreq,
    upperWaveAmp,
    upperWaveSpeed,
    topBoundaryBase,
    topFadeSoftness,
    invalidate,
  ]);

  // Throttled animation loop (frameloop="demand" on <Canvas/>)
  useEffect(() => {
    let rafId = 0;
    let running = true;
    const u = materialRef.current?.uniforms;
    if (!u) return;

    const interval = 1000 / Math.max(1, fps);
    let last = performance.now();

    const loop = (now) => {
      if (!running) return;
      if (now - last >= interval) {
        last = now;
        u.u_time.value += interval / 500; // ~2x original speed (1000/500 = 2)
        invalidate(); // ask R3F to render this frame only
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [fps, invalidate]);

  // Scale plane to viewport; single segment (no vertex deformation needed)
  const planeArgs = useMemo(
    () => [viewport.width * 1.3, viewport.height * 0.9, 1, 1],
    [viewport.width, viewport.height]
  );

  // Cleanup (defensive; R3F auto-disposes on unmount)
  useEffect(() => {
    return () => {
      materialRef.current?.dispose?.();
      geoRef.current?.dispose?.();
      // Also ensure no lingering render target memory:
      gl?.renderLists?.dispose?.();
    };
  }, [gl]);

  return (
    <mesh position={[0, 0.5, 0]}>
      <planeGeometry ref={geoRef} args={planeArgs} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        toneMapped={false}
      />
    </mesh>
  );
};

/** ----------------------------- Canvas Shell ----------------------------- */
const ShaderComp = () => {
  return (
    <Canvas
      className="w-full h-full"
      // Render only when we explicitly call `invalidate()` (saves a ton of CPU/GPU)
      frameloop="demand"
      // Cap device pixel ratio (lower = less VRAM & bandwidth)
      dpr={[1, 1.25]}
      // Use a very cheap WebGL context
      gl={{
        antialias: false,        // big win for memory/bandwidth
        alpha: true,
        depth: false,            // single mesh; no depth needed
        stencil: false,
        powerPreference: "low-power",
        preserveDrawingBuffer: false,
        failIfMajorPerformanceCaveat: true,
      }}
      // Orthographic can be slightly cheaper for 2D planes; comment out if you prefer perspective
      orthographic
      camera={{ position: [0, 0, 5], zoom: 100 }}
    >
      <MovingGradientShader
        lowerWaveFreq={9}
        lowerWaveAmp={0.05}
        lowerWaveSpeed={0.3}
        lowerBoundaryBase={0.2}
        lowerFadeSoftness={0.1}
        upperWaveFreq={9.0}
        upperWaveAmp={0.1}
        upperWaveSpeed={0.7}
        topBoundaryBase={0.7}
        topFadeSoftness={0.1}
        color="#1726FD"
        fps={30}   // try 24 or 20 for even lower usage
      />
    </Canvas>
  );
};

export default ShaderComp;
