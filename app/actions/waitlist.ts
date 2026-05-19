"use server";

import { Resend } from "resend";
import { waitlistSchema } from "@/lib/types/waitlist";

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

  // Use onboarding@resend.dev until followupsession.com is verified in Resend dashboard.
  // After DNS verification, change to: FollowUpSession Waitlist <waitlist@followupsession.com>
  const { error } = await resend.emails.send({
    from: "FollowUpSession Waitlist <onboarding@resend.dev>",
    to: process.env.NOTIFICATION_EMAIL ?? "deegha@codewavelabs.io",
    subject: `New waitlist signup: ${email}`,
    html: `
      <h2>New FollowUpSession waitlist signup</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Signed up at:</strong> ${signedUpAt}</p>
    `,
    text: `New FollowUpSession waitlist signup\n\nEmail: ${email}\nSigned up at: ${signedUpAt}`,
  });

  if (error) {
    console.error("[waitlist] Resend error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
