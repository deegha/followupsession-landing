# Landing Page Structure — FollowUpSession

## Design principles

- Mobile-first, single scrolling page
- Colour palette: calm, clinical but not sterile — think warm off-white background, slate/charcoal text, one muted teal/sage accent
- No photography. Use simple UI mockup illustrations (SVG/CSS) or abstract gradients as placeholder art
- CTAs are consistent throughout: "Join the waitlist" → anchor-scrolls to the email capture form
- Copy leads with the problem every time before mentioning the solution

---

## Section 1 — Nav

**Purpose**: Minimal top bar. Anchors to key sections. Single primary CTA.

**Key copy points**:

- Logo / wordmark: "FollowUpSession"
- Links: Features · Security · Pricing
- CTA button: "Join the waitlist"

**Visual/UX notes**:

- Sticky on scroll (transparent → solid background after ~60px)
- No hamburger complexity on mobile — collapse links, keep CTA visible
- No login link (product doesn't exist yet)

---

## Section 2 — Hero

**Purpose**: Land the value proposition in under 10 seconds. Make the Reddit-referred therapist nod and keep scrolling.

**Key copy points**:

- Headline: Lead with the problem — e.g., "Your session notes are everywhere. Your follow-ups keep slipping. There's a simpler way."
- Sub-headline: One-line pitch — "FollowUpSession is a secure session notebook built for solo therapists, without the billing bloat of an EHR."
- Primary CTA: "Join the waitlist — free for 30 days"
- Secondary reassurance: "No credit card required. No setup fee. Cancel anytime."
- Social proof seed: optional line like "Join [X] therapists on the waitlist" — leave as placeholder, only add real number once we have signups

**Visual/UX notes**:

- Full-width section, vertically centred on mobile
- Right side (desktop): abstract UI sketch of the "Today view" — follow-ups due, a session card — drawn in CSS or SVG, not a screenshot (product doesn't exist)
- Prominent waitlist form inline OR a single button that scrolls to the form at bottom — decide: **inline form preferred** (reduces friction)

---

## Section 3 — Problem

**Purpose**: Show we understand the therapist's current pain before pitching anything. Build empathy and credibility.

**Key copy points**:

- Lead: "If you're like most solo therapists, your workflow looks something like this:"
- Pain points (short, honest, recognisable):
  - "Session notes in a paper notebook, or a Notion page, or a locked Google Doc — you're not sure which is most up to date"
  - "A follow-up reminder in Apple Reminders, another in your calendar, one you forgot to set"
  - "You looked at SimplePractice. $99/month. Built for a billing team. Not for you."
  - "You've thought about using a general app. Then wondered what happens if your data gets breached."
- Close: "We built FollowUpSession because we couldn't find a tool that solved exactly this."

**Visual/UX notes**:

- Three-column card layout (or single column on mobile) — each pain point as a small card with a simple icon
- Subtle, muted background — not alarming, empathetic
- No feature selling in this section at all

---

## Section 4 — Solution / Features

**Purpose**: Show the product clearly. Feature by feature, in the therapist's language.

**Key copy points**:

- Section header: "Everything you need. Nothing you don't."
- Sub-header: "FollowUpSession is a notebook, not an EHR. Here's exactly what it does."
- Feature list (one short statement + one line description each):
  1. **Client list, simply** — Active, waiting, paused, or discharged. Know who's on your caseload at a glance.
  2. **Session logs** — Write free-text notes the way you think. Add date, duration, and optional structured fields when you want them.
  3. **One-click follow-up reminders** — Set a follow-up date from any session in a single click. No separate reminders app.
  4. **Today view** — Start every morning knowing who's overdue for a check-in and who's gone quiet.
  5. **Full-text search** — Find any note, any client, any session instantly.
  6. **Your data, always yours** — Export everything as a ZIP file whenever you want. No lock-in.

**Visual/UX notes**:

- Alternating left/right layout on desktop (image + text), single column on mobile
- "Images" are abstract CSS/SVG UI sketches — leave `{/* TODO: feature illustration */}` comments
- Each feature block is a `<section>` with proper heading hierarchy

---

## Section 5 — Security & Trust

**Purpose**: This is the make-or-break section for the audience. It must be thorough and specific — no vague "we take security seriously" language.

**Key copy points**:

- Section header: "Your clients' notes are private. We've built it that way from the start."
- Sub-header: "We know you can't put client data somewhere you don't fully trust. Here's exactly how we protect it."
- Trust items (specific, not marketing-speak):
  - **Encrypted at rest** — Column-level encryption via Supabase Vault. Your notes aren't readable even to us.
  - **Encrypted in transit** — TLS 1.3 on every connection.
  - **Two-factor authentication** — Optional but strongly recommended. Turn it on in one click.
  - **Automatic session timeout** — You're logged out after inactivity, even if you forget.
  - **Row Level Security** — Your data is completely isolated from every other practitioner's account at the database level.
  - **Audit logging** — Every note view and edit is recorded. You can see who accessed what.
  - **One-click data export** — Your data is yours. Download a full ZIP of all clients and sessions any time.
  - **Privacy-first analytics** — We use Plausible Analytics, not Google Analytics. We don't sell your data or track your clients.
  - **Designed to align with HIPAA principles and GDPR** — We cannot claim certified HIPAA compliance yet, so we say this honestly.

**Visual/UX notes**:

- Grid of trust badges/icons (lock icon, shield, etc.) — all SVG inline, no external images
- Muted teal/sage accent on icons
- Short closing line: "Questions about our security practices? Email us at [hello@followupsession.com]."

---

## Section 6 — Pricing

**Purpose**: Remove price anxiety. Make the value obvious. Make the trial feel risk-free.

**Key copy points**:

- Section header: "Simple pricing. No surprises."
- Single pricing tier (no comparison tables needed yet):
  - **$15/month per practitioner**
  - 30-day free trial
  - No credit card required to start
  - No setup fee
  - Cancel anytime, no questions asked
- Comparison line: "SimplePractice starts at $69/month. Jane is $74/month. FollowUpSession is $15 — because you don't need billing software."

**Visual/UX notes**:

- Single centred pricing card — clean, generous whitespace
- Primary CTA inside the card: "Start your free 30-day trial"
- Small print: "No card needed. Cancel anytime." directly under the button

---

## Section 7 — Waitlist CTA (primary conversion point)

**Purpose**: The page's single most important section. Maximum focus, minimum friction.

**Key copy points**:

- Header: "Get early access"
- Sub-header: "FollowUpSession is in private development. Drop your email and we'll let you know when it's ready — and give you 30 days free."
- Form fields: email address only (single field — no name, no practice size, no fluff)
- Button: "Join the waitlist"
- Below the button: "We'll only email you when it matters. No newsletters. No spam."
- On success: inline confirmation — "You're on the list. We'll be in touch." (no page redirect)

**Visual/UX notes**:

- Full-width section, high contrast background (dark or accent) to signal "this is the action"
- Email input + button side by side on desktop, stacked on mobile
- Uses the server action + Resend integration to notify deegha@codewavelabs.io on every signup
- Accessible: label on input, aria-describedby for confirmation message, loading state on button

---

## Section 8 — Footer

**Purpose**: Minimal close. Legal compliance. Contact.

**Key copy points**:

- Logo / wordmark
- Links: Privacy Policy · Terms of Service (placeholder pages for now)
- Contact: hello@followupsession.com
- "Built for therapists, by people who care about clinical privacy."
- Copyright line: © 2025 FollowUpSession

**Visual/UX notes**:

- Simple two-column layout (brand left, links right) on desktop
- Dark or very dark background to close the page cleanly
- Privacy Policy and Terms pages: stub pages only, clearly marked as drafts

---

## Section order summary

| #   | Section          | Component file                     |
| --- | ---------------- | ---------------------------------- |
| 1   | Nav              | `components/sections/nav.tsx`      |
| 2   | Hero             | `components/sections/hero.tsx`     |
| 3   | Problem          | `components/sections/problem.tsx`  |
| 4   | Features         | `components/sections/features.tsx` |
| 5   | Security & Trust | `components/sections/security.tsx` |
| 6   | Pricing          | `components/sections/pricing.tsx`  |
| 7   | Waitlist CTA     | `components/sections/waitlist.tsx` |
| 8   | Footer           | `components/sections/footer.tsx`   |

---

## Open questions for approval

- **Hero form**: Inline email capture in the hero, or a single button that scrolls to the waitlist section? (I've defaulted to inline in the hero AND a standalone waitlist section — both point to the same server action. Happy to simplify.)
- **Colour palette**: Any specific brand colours already decided, or should I propose a palette (warm off-white + slate + muted teal)?
- **"Today view" illustration**: Should I build a CSS/SVG UI mock of the today view for the hero, or keep it abstract gradient for now?
