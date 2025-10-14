import Header from "@/components/Header/index";
import Notfound from "@/components/Notfound";
import {
  ImageObjectJsonLd,
  LocalBusiness,
  OrganizationJsonLd,
  WebpageJsonLd,
  WebsiteJsonLd,
} from "@/lib/json-ld";

export const metadata = {
  title: "DSW UnifyAI – Enterprise AI Platform for Insurance",
  description:
    "Launch AI use cases in days — scale fast, reduce cost, deploy GenAI in hours with DSW UnifyAI’s insurance-focused enterprise AI platform.",
  url: "",
  date_published: "2025-09-30T00:00",
  date_modified: "2025-09-30T00:00",
};

export default function NotFoundPage() {
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <OrganizationJsonLd />
      <LocalBusiness />
      <ImageObjectJsonLd />
      <WebsiteJsonLd />
      <Header />
      <Notfound />
    </>
  );
}
