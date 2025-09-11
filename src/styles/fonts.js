import { Manrope } from "next/font/google";
import localFont from "next/font/local";

// Google Font - Body text (optimized)
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"], // Only weights you actually use
  display: "swap", // Prevents invisible text during font swap
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "arial", "sans-serif"],
  preload: true, // Critical for performance
  adjustFontFallback: false, // Can help reduce CLS
});

// Local Font - Display/Heading text (optimized)
export const neumontreal = localFont({
  src: [
    {
      path: "../app/fonts/ppneuemontreal-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/ppneuemontreal-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: [
    "system-ui", 
    "-apple-system", 
    "BlinkMacSystemFont", 
    "georgia", 
    "Times New Roman", 
    "serif"
  ],
  preload: true,
  // OpenType feature settings for better typography
  declarations: [
    {
      prop: 'font-feature-settings',
      value: '"kern" 1, "liga" 1, "calt" 1, "case" 1', 
    },
    {
      prop: 'font-variant-numeric',
      value: 'lining-nums proportional-nums',
    },
  ],
});

// Font class names for direct usage
export const fontClassNames = {
  body: manrope.className,
  display: neumontreal.className,
  variables: `${manrope.variable} ${neumontreal.variable}`,
};

// CSS custom properties (for Tailwind/CSS usage)
export const fontVariables = {
  body: manrope.variable,
  display: neumontreal.variable,
  combined: `${manrope.variable} ${neumontreal.variable}`,
};