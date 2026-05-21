export function waitlistConfirmationHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You're on the list — FollowUpSession</title>
</head>
<body style="margin:0;padding:0;background-color:#f8f7f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2d2d2d;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f7f4;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#1a4d3a;border-radius:12px 12px 0 0;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">FollowUpSession</p>
              <p style="margin:8px 0 0;font-size:13px;color:#a8c5b8;">The simple, secure session notebook for solo therapists</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 32px;border-left:1px solid #e8e4de;border-right:1px solid #e8e4de;">
              <h1 style="margin:0 0 16px;font-size:24px;font-weight:700;color:#1a1a1a;letter-spacing:-0.5px;">You're on the list.</h1>
              <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4a4a4a;">
                Thank you for signing up — we're really glad you're here. We built FollowUpSession because we kept hearing the same thing from solo practitioners: notes in one place, reminders in another, and clients slipping through the cracks in between.
              </p>
              <p style="margin:0 0 32px;font-size:16px;line-height:1.6;color:#4a4a4a;">
                We're building something small and focused — a secure session notebook that makes it easy to log notes, set follow-up reminders, and stay on top of your caseload. No billing modules, no insurance integrations, no learning curve.
              </p>

              <!-- Feature list -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f7f4;border-radius:10px;padding:0;margin-bottom:32px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 16px;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;color:#1a4d3a;">What we're building</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:15px;color:#2d2d2d;line-height:1.5;">
                          <span style="color:#1a4d3a;margin-right:10px;">&#10003;</span> Session logs with free-text notes and optional structured fields
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:15px;color:#2d2d2d;line-height:1.5;">
                          <span style="color:#1a4d3a;margin-right:10px;">&#10003;</span> One-click follow-up reminders from any session
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:15px;color:#2d2d2d;line-height:1.5;">
                          <span style="color:#1a4d3a;margin-right:10px;">&#10003;</span> A Today view showing who needs attention today
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:15px;color:#2d2d2d;line-height:1.5;">
                          <span style="color:#1a4d3a;margin-right:10px;">&#10003;</span> Encrypted notes — column-level at rest, TLS in transit
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:15px;color:#2d2d2d;line-height:1.5;">
                          <span style="color:#1a4d3a;margin-right:10px;">&#10003;</span> Your data, exportable anytime — no lock-in
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px;font-size:16px;line-height:1.6;color:#4a4a4a;">
                We'll be in touch when we're ready for early access. You'll be among the first to know — and we'd love to hear what matters most to you as we build.
              </p>
              <p style="margin:0 0 32px;font-size:16px;line-height:1.6;color:#4a4a4a;">
                Until then, feel free to reply to this email with any questions or thoughts. We read everything.
              </p>

              <p style="margin:0;font-size:15px;color:#4a4a4a;line-height:1.6;">Warm regards,<br/><strong style="color:#1a1a1a;">The FollowUpSession team</strong></p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f0ede8;border-radius:0 0 12px 12px;border:1px solid #e8e4de;border-top:none;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:#8a8680;">
                You're receiving this because you signed up at followupsession.com
              </p>
              <p style="margin:0;font-size:12px;color:#8a8680;">
                $15/month &middot; 30-day free trial &middot; No credit card required
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function waitlistConfirmationText(): string {
  return `You're on the list — FollowUpSession

Thank you for signing up. We're really glad you're here.

We built FollowUpSession because solo practitioners kept telling us the same thing: notes in one place, reminders in another, and clients slipping through the cracks in between.

We're building a secure session notebook that makes it easy to log notes, set follow-up reminders, and stay on top of your caseload — without the bloat of an EHR.

What we're building:
- Session logs with free-text notes and optional structured fields
- One-click follow-up reminders from any session
- A Today view showing who needs attention today
- Encrypted notes — column-level at rest, TLS in transit
- Your data, exportable anytime — no lock-in

We'll be in touch when we're ready for early access. You'll be among the first to know.

Feel free to reply to this email with any questions or thoughts. We read everything.

Warm regards,
The FollowUpSession team

---
$15/month · 30-day free trial · No credit card required
followupsession.com`;
}
