import LenisSmoothScroll from "@/Components/LenisSmoothScroll";
import "./globals.css";
import { fontVariables } from "@/styles/fonts";

export const metadata = {
  title: "DSW UnifyAI – Enterprise AI Platform for Insurance",
  description: "Launch AI use cases in days and GenAI in hours with DSW UnifyAI - insurance-domain trained, compliant, scalable, and vendor-lock-in free.",
};

export default function RootLayout({ children }) {
  return (
    <LenisSmoothScroll>
      <html lang="en">
        <body
          className={`${fontVariables.combined} antialiased`}
        >
          {children}
        </body>
      </html>
    </LenisSmoothScroll>
  );
}
