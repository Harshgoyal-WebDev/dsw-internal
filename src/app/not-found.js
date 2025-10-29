// app/not-found.jsx

import dynamic from "next/dynamic";

// Keep SEO JSON-LD server-side (should render to head as plain script tags)
import {
  ImageObjectJsonLd,
  LocalBusiness,
  OrganizationJsonLd,
  WebpageJsonLd,
  WebsiteJsonLd,
} from "@/lib/json-ld";
import { ModalProvider } from "@/components/Common/ModalProvider";

// Lazy load heavy UI only if someone actually hits 404
const Header = dynamic(() => import("@/components/Header/index"), {
  ssr: true,
  loading: () => null,
});
const FancyNotFound = dynamic(() => import("@/components/Notfound"), {
  ssr: true,
  loading: () => null,
});

export const metadata = {
  title: "DSW UnifyAI – Enterprise AI Platform for Insurance",
  description:
    "Launch AI use cases in days — scale fast, reduce cost, deploy GenAI in hours with DSW UnifyAI’s insurance-focused enterprise AI platform.",
  openGraph: { type: "website" },
  // add canonical/url if available
};
// function GlobalPopup() {
//   const { open, setOpen } = useModal();
//   return <PopupModal modalOpen={open} setModalOpen={setOpen} />;
// }

export default function NotFoundPage() {
  return (
    <>
      {/* Server-only JSON-LD keeps the 404 HTML tiny */}
      <ModalProvider>

      <WebpageJsonLd metadata={metadata} />
      <OrganizationJsonLd />
      <LocalBusiness />
      <ImageObjectJsonLd />
      <WebsiteJsonLd />
      {/* Minimal server fallback so page is fast even if JS fails */}
      <Header />
      <FancyNotFound />
      {/* <GlobalPopup/> */}
      </ModalProvider>
    </>
  );
}
