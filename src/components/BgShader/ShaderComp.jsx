"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
// import { ThreeTunnel } from "../Common/tunnel";

const MovingGradientShader = ({
  // Lower wave parameters
  lowerWaveFreq = 2.8,
  lowerWaveAmp = 0.07,
  lowerWaveSpeed = 0.2,
  lowerBoundaryBase = 0.25,
  lowerFadeSoftness = 0.25,

  // Upper wave parameters
  upperWaveFreq = 10.0,
  upperWaveAmp = 0.05,
  upperWaveSpeed = -0.15,
  topBoundaryBase = 0.75,
  topFadeSoftness = 0.3,

  // Color (string like "#1726FD" or "0x1726FD" or number)
  color = "#1726FD",
}) => {
  const materialRef = useRef();
  const { viewport } = useThree();

  // GLSL (memoized so React doesn't recreate strings)
  const vertexShader = useMemo(
    () => `
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
      varying vec2 vUv;
      uniform float u_time;
      uniform vec3  u_color;

      // Lower wave uniforms
      uniform float u_lowerWaveFreq;
      uniform float u_lowerWaveAmp;
      uniform float u_lowerWaveSpeed;
      uniform float u_lowerBoundaryBase;
      uniform float u_lowerFadeSoftness;

      // Upper wave uniforms
      uniform float u_upperWaveFreq;
      uniform float u_upperWaveAmp;
      uniform float u_upperWaveSpeed;
      uniform float u_topBoundaryBase;
      uniform float u_topFadeSoftness;

      float smoothstep_custom(float edge0, float edge1, float x) {
        float t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
        return t * t * (3.0 - 2.0 * t);
      }

      void main() {
        vec2 uv = vUv;

        // Lower
        float lowerWave = sin(uv.x * u_lowerWaveFreq - u_time * u_lowerWaveSpeed) * u_lowerWaveAmp;
        float lowerBoundaryWavy = u_lowerBoundaryBase + lowerWave;

        // Upper
        float upperWave = sin(uv.x * u_upperWaveFreq + u_time * u_upperWaveSpeed) * u_upperWaveAmp;
        float topBoundaryWavy = u_topBoundaryBase + upperWave;

        // Height & extended fade toward the center
        float waveHeight = topBoundaryWavy - lowerBoundaryWavy;
        float extendedLowerFade = u_lowerFadeSoftness + (waveHeight * 0.4);
        float extendedTopFade   = u_topFadeSoftness   + (waveHeight * 0.4);

        float intensityFromBottom = smoothstep_custom(
          lowerBoundaryWavy - extendedLowerFade * 0.5,
          lowerBoundaryWavy + extendedLowerFade * 0.5,
          uv.y
        );

        float visibilityFromTop = 1.0 - smoothstep_custom(
          topBoundaryWavy - extendedTopFade * 0.5,
          topBoundaryWavy + extendedTopFade * 0.5,
          uv.y
        );

        float finalAlpha = clamp(intensityFromBottom * visibilityFromTop, 0.0, 1.0);
        gl_FragColor = vec4(u_color, finalAlpha);
      }
    `,
    []
  );

  // Uniforms (created once)
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_color: { value: new THREE.Color(color) },

      // Lower wave
      u_lowerWaveFreq: { value: lowerWaveFreq },
      u_lowerWaveAmp: { value: lowerWaveAmp },
      u_lowerWaveSpeed: { value: lowerWaveSpeed },
      u_lowerBoundaryBase: { value: lowerBoundaryBase },
      u_lowerFadeSoftness: { value: lowerFadeSoftness },

      // Upper wave
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

  // Drive time via R3F clock (preserves original 2x speed)
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = clock.getElapsedTime() * 2.0;
    }
  });

  // React to prop changes without recreating material
  useEffect(() => {
    const u = materialRef.current?.uniforms;
    if (!u) return;
    // color: accept any valid THREE.Color input
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
  ]);

  const planeArgs = useMemo(
    () => [viewport.width * 1.3, viewport.height * 0.9],
    [viewport.width, viewport.height]
  );

  return (
    <mesh position={[0, 0.5, 0]}>
      <planeGeometry args={planeArgs} />
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

const ShaderComp = () => {
  return (
    <Canvas className="w-full h-full">
    {/* // <ThreeTunnel.In> */}
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
        color={"#1726FD"}
      />
    {/* // </ThreeTunnel.In> */}
     </Canvas>
  );
};

export default ShaderComp;
