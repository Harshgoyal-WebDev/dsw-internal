import LenisSmoothScroll from "@/Components/LenisSmoothScroll";
import "./globals.css";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  fallback: ["sans-serif"],
});
const neumontreal = localFont({
  src: [
    {
      path: "./fonts/ppneuemontreal-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ppneuemontreal-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata = {
  title: "Data Science Wizards",
  description: "Data Science Wizards",
};

export default function RootLayout({ children }) {
  return (
    <LenisSmoothScroll>
      <html lang="en">
        <body
          className={`${manrope.variable} ${neumontreal.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </LenisSmoothScroll>
  );
}
