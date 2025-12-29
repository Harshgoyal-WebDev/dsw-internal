/* eslint-disable no-unused-vars */
"use client";

import React, { useState, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import {
  Form, FormControl, FormField, FormItem, FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { PhoneInput } from "../ui/phone-input";
import { Button } from "../ui/button";
import { useModal } from "../Common/ModalProvider";
import { isEmailDomainBlocked } from "@/lib/blockedEmailDomains";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  number: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  designation: z.string().min(2, { message: "Designation is required." }),
  company: z.string().min(2, { message: "Company name is required." }),
});

export default function WalkthroughForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", number: "", designation: "", company: "" },
  });

  const { control, handleSubmit, setError, clearErrors, getValues } = form;
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setIsSubmitted] = useState(false);
  const [notsubmitted, setIsNotSubmitted] = useState(false);
  const [emailVerifying, setEmailVerifying] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const { payload /* { pdfUrl, fileName } */, closeModal } = useModal();

  // Email verification function - only called on blur or submit
  const verifyEmail = useCallback(async (email) => {
    // Basic email format check first
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailVerified(false);
      return false;
    }

    // Check if email domain is blocked (free email providers)
    if (isEmailDomainBlocked(email)) {
      setEmailVerified(false);
      setError("email", {
        type: "manual",
        message: "Please use your business email address to continue.",
      });
      return false;
    }

    setEmailVerifying(true);
    clearErrors("email");

    try {
      const response = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.valid) {
        setEmailVerified(true);
        clearErrors("email");
        return true;
      } else {
        setEmailVerified(false);
        let errorMessage = "Please enter a valid business email address.";

        if (data.didYouMean) {
          errorMessage = `Did you mean ${data.didYouMean}?`;
        } else if (data.status === "invalid") {
          errorMessage = "This email address is invalid.";
        } else if (data.status === "spamtrap" || data.status === "abuse") {
          errorMessage = "This email address cannot be used.";
        } else if (data.freeEmail) {
          errorMessage = "Please use your business email address.";
        }

        setError("email", {
          type: "manual",
          message: errorMessage,
        });
        return false;
      }
    } catch (error) {
      console.error("Email verification error:", error);
      // On error, don't block the form but log the error
      setEmailVerified(true);
      clearErrors("email");
      return true;
    } finally {
      setEmailVerifying(false);
    }
  }, [setError, clearErrors]);

  // Handle email blur event
  const handleEmailBlur = useCallback(async (email) => {
    await verifyEmail(email);
  }, [verifyEmail]);

  const downloadPdf = async (url, fileName) => {
  // Always normalize to an absolute same-origin URL.
  const absoluteUrl = new URL(url, window.location.origin).href;
  const name = fileName || absoluteUrl.split("/").pop() || "download.pdf";

  // 1) Best path: rely on browser to download static asset.
  try {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = absoluteUrl;
    a.setAttribute("download", name); // same-origin works well
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    return; // success (or at least we asked nicely)
  } catch (e) {
    // continue to next fallback
    console.warn("Direct anchor download failed, trying blob:", e);
  }

  // 2) Fallback: blob download (some Safari versions don’t fully support)
  try {
    const res = await fetch(absoluteUrl, { credentials: "same-origin" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const blob = await res.blob();
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = href;
    a.setAttribute("download", name);
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(href);
    return;
  } catch (e) {
    console.warn("Blob download failed, opening in new tab:", e);
  }

  // 3) Last resort (iOS/Safari etc.): open the PDF; user can save/share.
  window.open(absoluteUrl, "_blank", "noopener");
};

  const onSubmit = async (data) => {
    // If email hasn't been verified yet, verify it now
    if (!emailVerified && !emailVerifying) {
      const isValid = await verifyEmail(data.email);
      if (!isValid) {
        return; // Stop submission if email is invalid
      }
    }

    // Check if email verification is still pending
    if (emailVerifying) {
      setError("email", {
        type: "manual",
        message: "Please wait for email verification to complete.",
      });
      return;
    }

    // Check if email is verified
    if (!emailVerified) {
      setError("email", {
        type: "manual",
        message: "Please enter a valid business email address.",
      });
      return;
    }

    setIsLoading(true);

    // compute optional pdf info
    const pdfUrl = payload?.pdfUrl || null;
    const pdfName =
      payload?.fileName ||
      (pdfUrl ? pdfUrl.split("/").pop() : null);

    // include extra fields ONLY if a pdf payload exists
    const formattedData = {
      ...data,
      ...(pdfUrl && {
        downloaded: true,
        downloadedPdfName: pdfName,
        downloadedPdfUrl: pdfUrl,
      }),
    };

    try {
      const res = await fetch("/api/walkthroughform", {
        method: "POST",
        body: JSON.stringify(formattedData),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to send message");

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      form.reset();
      setEmailVerified(false);
      setEmailVerifying(false);

      // Download the PDF after successful submit
      if (pdfUrl) {
        try {
          await downloadPdf(pdfUrl, pdfName || undefined);
        } catch (e) {
          console.error("PDF download failed:", e);
        }
      }

      // optionally close the modal
      // closeModal();
    } catch (error) {
      setIsNotSubmitted(true);
      setTimeout(() => setIsNotSubmitted(false), 5000);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="overflow-hidden h-fit max-md:pb-[4%] max-sm:pb-0" id="formoem">
        <div className="w-full h-full">
          <div className="w-full flex flex-col gap-[2vw]">
            <Form {...form}>
              <form
                autoComplete="off"
                className="space-y-[1vw] max-sm:space-y-[4vw] max-md:space-y-[3vw]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="formfade">
                <FormField name="name" control={control}  render={({ field }) => (
                  <FormItem><FormControl>
                    <Input placeholder="Name*" autoComplete="off" {...field}
                      className="placeholder:text-[1.05vw] pl-[2vw] bg-black/5 border border-white/30 rounded-full placeholder:text-[#e8e8e8] max-sm:placeholder:text-[3.5vw] max-md:placeholder:text-[2.7vw] max-md:pl-[4vw] max-sm:pl-[5vw]" />
                  </FormControl><FormMessage /></FormItem>
                )} />

                </div>
                <div className="formfade">

                <FormField name="email" control={control}  render={({ field }) => (
                  <FormItem><FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Business Email*"
                        autoComplete="off"
                        {...field}
                        onBlur={(e) => {
                          field.onBlur();
                          handleEmailBlur(e.target.value);
                        }}
                        className="placeholder:text-[1.05vw] pl-[2vw] bg-black/5 border border-white/30 rounded-full placeholder:text-[#e8e8e8] max-sm:placeholder:text-[3.5vw] max-md:placeholder:text-[2.7vw] max-md:pl-[4vw] max-sm:pl-[5vw]"
                      />
                      {emailVerifying && (
                        <span className="absolute right-[2vw] top-1/2 transform -translate-y-1/2 text-[#e8e8e8] text-[0.9vw] max-sm:text-[3vw] max-md:text-[2vw] max-md:right-[4vw]">
                          Verifying...
                        </span>
                      )}
                    </div>
                  </FormControl><FormMessage /></FormItem>
                )} />
                </div>

                <div className="formfade">

                <FormField name="designation" control={control}  render={({ field }) => (
                  <FormItem><FormControl>
                    <Input placeholder="Designation*" autoComplete="off" {...field}
                      className="placeholder:text-[1.05vw] pl-[2vw] bg-black/5 border border-white/30 rounded-full placeholder:text-[#e8e8e8] max-sm:placeholder:text-[3.5vw] max-md:placeholder:text-[2.7vw] max-md:pl-[4vw] max-sm:pl-[5vw]" />
                  </FormControl><FormMessage /></FormItem>
                )} />
                </div>

                <div className="formfade">

                <FormField name="company" control={control}  render={({ field }) => (
                  <FormItem><FormControl>
                    <Input placeholder="Company Name*" autoComplete="off" {...field}
                      className="placeholder:text-[1.05vw] pl-[2vw] bg-black/5 border border-white/30 rounded-full placeholder:text-[#e8e8e8] max-sm:placeholder:text-[3.5vw] max-md:placeholder:text-[2.7vw] max-md:pl-[4vw] max-sm:pl-[5vw]" />
                  </FormControl><FormMessage /></FormItem>
                )} />
                </div>

                <div className="formfade">

                <FormField name="number" control={control}  render={({ field }) => (
                  <FormItem><FormControl>
                    <PhoneInput placeholder="Phone Number*" autoComplete="off" defaultCountry="IN" international {...field}
                      className="placeholder:text-[1.05vw] placeholder:text-[#e8e8e8] max-sm:placeholder:text-[3.5vw] max-md:placeholder:text-[2.7vw] demophone" />
                  </FormControl><FormMessage /></FormItem>
                )} />
                </div>
               <div className="formfade">
                <Button type="submit" aria-label="submit form" 
                  className="cursor-pointer mt-[3vw] max-md:mt-[5vw] pb-[3vw] max-sm:mt-[10vw] max-sm:pb-[8vw] px-0 ">
                  <div className="relative inline-flex items-center h-[4vw] min-w-[10vw] px-[2vw] gap-3 rounded-full overflow-hidden text-white-200 group max-sm:h-fit max-sm:py-[4vw] max-sm:px-[6vw] max-sm:min-w-[30vw] max-md:px-[4.5vw] max-md:py-[3vw] max-md:h-fit max-sm:gap-[4vw]">
                    <span className="bg-foreground rounded-full h-2 w-2 max-sm:w-[2.5vw] max-sm:h-[2.5vw] z-[1] max-md:w-[1.2vw] max-md:h-[1.2vw]" />
                    <div className="overflow-clip leading-[1.4] mt-[-4px] max-sm:mt-0 z-[1]">
                      <p className="text-[1.145vw] leading-[1.4] buttonTextShadow max-sm:text-[4vw] max-md:text-[2.7vw]">
                        {isLoading ? "Sending..." : "Submit"}
                      </p>
                    </div>
                    <span className="absolute inset-0 group-hover:scale-95 transition-transform duration-500 bg-gradient-to-r from-primary-2 to-primary-3 rounded-full" />
                  </div>
                </Button>

               </div>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {submitted && (
        <p className="text-white text-sm p-2 px-7 bg-green-500 fixed z-[999] top-[20%] rounded-[0.7vw] left-[50%] translate-x-[-50%] max-sm:rounded-[2vw]">
          Form submitted successfully!
        </p>
      )}

      {notsubmitted && (
        <p className="text-white text-sm p-2 px-7 bg-red-500 fixed z-[999] top-[20%] rounded-[0.7vw] left-[50%] translate-x-[-50%]">
          ❌ Error sending message. Please try again.
        </p>
      )}
    </>
  );
}
