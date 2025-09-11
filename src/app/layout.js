import LenisSmoothScroll from "@/Components/LenisSmoothScroll";
import "./globals.css";
import { fontVariables } from "@/styles/fonts";

export const metadata = {
  title: "Data Science Wizards",
  description: "Data Science Wizards",
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
