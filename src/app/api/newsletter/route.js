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

    // Step 3: Add to Resend segment
    const segmentId = process.env.RESEND_NEWSLETTER_SEGMENT_ID;

    if (!segmentId) {
      console.error("RESEND_NEWSLETTER_SEGMENT_ID is not configured");
      return new Response(
        JSON.stringify({ error: "Newsletter service not configured. Please add RESEND_NEWSLETTER_SEGMENT_ID to your .env.local file." }),
        { status: 500 }
      );
    }

    try {
      console.log("Adding contact to Resend segment:", { email, segmentId });

      const { data, error } = await resend.contacts.create({
        email: email,
        unsubscribed: false,
        segmentId: segmentId,
      });

      console.log("Segment add result:", { data, error });

      if (error) {
        console.error("Resend Segment Error:", error);

        // Check if the error is because the contact already exists in segment
        if (error.message?.includes("already exists") ||
          error.message?.includes("Contact already") ||
          error.statusCode === 422) {
          return new Response(
            JSON.stringify({
              error: "This email is already subscribed to our newsletter.",
              code: "ALREADY_SUBSCRIBED"
            }),
            { status: 400 }
          );
        }

        return new Response(
          JSON.stringify({
            error: "Failed to subscribe. Please try again later.",
            code: "SUBSCRIPTION_FAILED",
            details: error.message
          }),
          { status: 500 }
        );
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: "Successfully subscribed to newsletter!",
          contactId: data?.id,
          contact: data
        }),
        { status: 200 }
      );

    } catch (resendError) {
      console.error("Resend Error Details:", {
        message: resendError.message,
        name: resendError.name,
        statusCode: resendError.statusCode,
        error: resendError
      });

      // Check if the error is because the contact already exists
      if (resendError.message?.includes("already exists") ||
        resendError.message?.includes("Contact already") ||
        resendError.statusCode === 422) {
        return new Response(
          JSON.stringify({
            error: "This email is already subscribed to our newsletter.",
            code: "ALREADY_SUBSCRIBED"
          }),
          { status: 400 }
        );
      }

      return new Response(
        JSON.stringify({
          error: "Failed to subscribe. Please try again later.",
          code: "SUBSCRIPTION_FAILED",
          details: resendError.message
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
