"use server";

import { Resend } from "resend";
import { waitlistSchema } from "@/lib/types/waitlist";
import {
  waitlistConfirmationHtml,
  waitlistConfirmationText,
} from "@/lib/emails/waitlist-confirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinWaitlist(formData: FormData): Promise<{
  success: boolean;
  error?: string;
}> {
  const result = waitlistSchema.safeParse({
    email: formData.get("email"),
  });

  if (!result.success) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const { email } = result.data;
  const signedUpAt = new Date().toUTCString();

  const FROM = "FollowUpSession <hello@followupsession.com>";

  const [notificationResult, confirmationResult] = await Promise.all([
    resend.emails.send({
      from: FROM,
      to: process.env.NOTIFICATION_EMAIL ?? "deegha@codewavelabs.io",
      subject: `New waitlist signup: ${email}`,
      html: `
        <h2>New FollowUpSession waitlist signup</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Signed up at:</strong> ${signedUpAt}</p>
      `,
      text: `New FollowUpSession waitlist signup\n\nEmail: ${email}\nSigned up at: ${signedUpAt}`,
    }),
    resend.emails.send({
      from: FROM,
      to: email,
      subject: "You're on the list — FollowUpSession",
      html: waitlistConfirmationHtml(),
      text: waitlistConfirmationText(),
    }),
  ]);

  if (notificationResult.error || confirmationResult.error) {
    console.error("[waitlist] Resend error:", notificationResult.error ?? confirmationResult.error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
