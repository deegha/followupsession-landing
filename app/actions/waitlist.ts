"use server";

import { Resend } from "resend";
import { waitlistSchema } from "@/lib/types/waitlist";
import { WaitlistNotificationEmail } from "@/lib/emails/waitlist-notification";

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

  try {
    await resend.emails.send({
      from: "FollowUpSession Waitlist <waitlist@followupsession.com>",
      to: process.env.NOTIFICATION_EMAIL ?? "deegha@codewavelabs.io",
      subject: `New waitlist signup: ${email}`,
      react: WaitlistNotificationEmail({ email, signedUpAt }),
    });
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
