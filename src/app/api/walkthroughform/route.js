// app/api/demoform/route.js
import { Resend } from "resend";
import WalkthroughAutoResponse from "@/components/emailTemplate/WalkthroughAutoResponse";
import WalkthroughDetails from "@/components/emailTemplate/WalkthorughDetails";

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
      downloaded,
      downloadedPdfName,
      downloadedPdfUrl,
    } = body;

    if (!name || !email || !company || !designation || !number) {
      return new Response(JSON.stringify({ error: "Required fields missing" }), { status: 400 });
    }
      const subject ="Demo Walkthrough"

      

    // Send notification email to your team
    const { error: teamEmailError } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["vidushi@weareenigma.com"],
      // from:"DSW Team<contact@datasciencewizards.ai>",
      // to:"contact@datasciencewizards.ai",
      subject,
      react: WalkthroughDetails({
        userName: name,
        userEmail: email,
        userDesignation: designation,
        userCompany: company,
        userNumber: number,
        downloadedPdfName: downloaded ? downloadedPdfName : undefined,
      }),
    });

    if (teamEmailError) {
      console.error("Team Email Error:", teamEmailError);
      return new Response(JSON.stringify({ error: teamEmailError }), { status: 400 });
    }



      const autoResponseSubject="Thank you for taking the UnifyAI Product Walkthrough!"

    const { error: autoResponseError } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: autoResponseSubject,
      react: WalkthroughAutoResponse({
        userName: name,
        downloadedPdfName: downloaded ? downloadedPdfName : undefined,
      }),
    });

    if (autoResponseError) {
      console.error("Auto-response Email Error:", autoResponseError);
      // Don't fail the request if auto-response fails, but log it
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("API Error:", err?.message || err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}