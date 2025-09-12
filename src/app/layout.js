import LenisSmoothScroll from "@/Components/LenisSmoothScroll";
import "./globals.css";
import { fontVariables } from "@/styles/fonts";
import { siteMetadata } from "@/config/metadata";
import { siteViewport } from "@/config/viewport";

// Use external metadata configuration like working project
export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({ children }) {
  return (
    <>
      <LenisSmoothScroll />
      <html lang="en">
        <body className={`${fontVariables.combined} antialiased`}>
          {children}
        </body>
      </html>
    </>
  );
}