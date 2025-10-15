
import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    {
      path: "../app/fonts/manrope-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/manrope-medium.woff",
      weight: "500",
      style: "normal",
    },
    
  ],
  variable: "--font-body",
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