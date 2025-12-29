// app/api/newsletter/route.js
import { Resend } from "resend";
import { isEmailDomainBlocked } from "@/lib/blockedEmailDomains";
import { verifyEmailWithZeroBounce } from "@/lib/emailVerification";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400 }
      );
    }

    // Step 1: Check if email domain is blocked (free email providers)
    if (isEmailDomainBlocked(email)) {
      return new Response(
        JSON.stringify({
          error: "Please use your business email address to subscribe.",
          code: "BLOCKED_DOMAIN"
        }),
        { status: 400 }
      );
    }

    // Step 2: Validate email using shared ZeroBounce verification
    const verifyData = await verifyEmailWithZeroBounce(email);

    if (!verifyData.valid) {
      let errorMessage = "Please enter a valid business email address.";

      if (verifyData.didYouMean) {
        errorMessage = `Did you mean ${verifyData.didYouMean}?`;
      } else if (verifyData.status === "invalid") {
        errorMessage = "This email address is invalid.";
      } else if (verifyData.status === "spamtrap" || verifyData.status === "abuse") {
        errorMessage = "This email address cannot be used.";
      } else if (verifyData.freeEmail) {
        errorMessage = "Please use your business email address.";
      }

      return new Response(
        JSON.stringify({
          error: errorMessage,
          code: "INVALID_EMAIL",
          suggestion: verifyData.didYouMean || null
        }),
        { status: 400 }
      );
    }

    // Step 3: Add to Resend contact list
    const contactListId = process.env.RESEND_CONTACT_LIST_ID;

    if (!contactListId) {
      console.error("RESEND_CONTACT_LIST_ID is not configured");
      return new Response(
        JSON.stringify({ error: "Newsletter service not configured" }),
        { status: 500 }
      );
    }

    try {
      // Add contact to the audience
      const contact = await resend.contacts.create({
        email: email,
        audienceId: contactListId,
      });

      return new Response(
        JSON.stringify({
          success: true,
          message: "Successfully subscribed to newsletter!",
          contactId: contact.data?.id
        }),
        { status: 200 }
      );

    } catch (resendError) {
      // Check if the error is because the contact already exists
      if (resendError.message?.includes("already exists") || resendError.message?.includes("Contact already")) {
        return new Response(
          JSON.stringify({
            error: "This email is already subscribed to our newsletter.",
            code: "ALREADY_SUBSCRIBED"
          }),
          { status: 400 }
        );
      }

      console.error("Resend Error:", resendError);
      return new Response(
        JSON.stringify({
          error: "Failed to subscribe. Please try again later.",
          code: "SUBSCRIPTION_FAILED"
        }),
        { status: 500 }
      );
    }

  } catch (err) {
    console.error("Newsletter Subscription Error:", err?.message || err);
    return new Response(
      JSON.stringify({
        error: "An error occurred. Please try again later.",
        code: "INTERNAL_ERROR"
      }),
      { status: 500 }
    );
  }
}
