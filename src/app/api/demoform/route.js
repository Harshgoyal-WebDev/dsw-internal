// app/api/demoform/route.js (or /pages/api/demoform.js if using pages)
import DemoDetails from "@/components/emailTemplate/DemoDetails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      designation,
      company,
      number,
      downloaded,            // 👈 optional boolean
      downloadedPdfName,     // 👈 optional string
      downloadedPdfUrl,      // 👈 optional (unused in email, but you may store/log)
    } = body;

    if (!name || !email || !company || !designation || !number) {
      return new Response(JSON.stringify({ error: "Required fields missing" }), { status: 400 });
    }

    const subject = downloaded && downloadedPdfName
      ? `New Demo Form Submission — downloaded ${downloadedPdfName}`
      : "New Demo Form Submission";

    const { error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["vidushi@weareenigma.com"],
      subject,
      react: DemoDetails({
        userName: name,
        userEmail: email,
        userDesignation: designation,
        userCompany: company,
        userNumber: number,
        downloadedPdfName: downloaded ? downloadedPdfName : undefined, // 👈 pass to template
      }),
    });

    if (error) {
      console.error("Resend Error:", error);
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("API Error:", err?.message || err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
