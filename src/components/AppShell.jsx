import dynamic from "next/dynamic";
import Providers from "./Providers";
const Header = dynamic(() => import("@/components/Header/index"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function AppShell({ children }) {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
  );
}