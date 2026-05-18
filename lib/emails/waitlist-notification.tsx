interface WaitlistNotificationEmailProps {
  email: string;
  signedUpAt: string;
}

export function WaitlistNotificationEmail({ email, signedUpAt }: WaitlistNotificationEmailProps) {
  return (
    <div>
      <h2>New FollowUpSession waitlist signup</h2>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Signed up at:</strong> {signedUpAt}
      </p>
    </div>
  );
}
