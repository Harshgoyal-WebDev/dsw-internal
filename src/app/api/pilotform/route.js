

import PilotDetails from "@/components/emailTemplate/PilotDetails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, designation, company, number,terms, message, } = body;

    if (!name || !email || !company || !terms || !designation || !number ) {
      return new Response(JSON.stringify({ error: "Required fields missing" }), { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["vidushi@weareenigma.com"],
      subject: "New Pilot Form Submission",
      react: PilotDetails({
        userName: name,
        userEmail: email,
        userDesignation: designation,
        userCompany:company,
        userNumber: number,
        userTerms:terms,
        userMessage: message || "No message provided",
      }),
    });

    if (error) {
      console.error("Resend Error:", error);
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("API Error:", err.message);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
