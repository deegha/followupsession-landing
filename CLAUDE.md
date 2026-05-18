# FollowUpSession — Landing Page Project

## What this project is

This is the marketing landing page for FollowUpSession (domain: followupsession.com), a clinical notebook app for solo therapists, counsellors, and psychotherapists in private practice. The goal of this landing page is **validation only** — to test whether our target audience will sign up to a waitlist when shown our positioning and proposed features. The product itself does not exist yet.

## Target audience (read this before writing copy)

- Solo and small-practice therapists, counsellors, psychotherapists, and psychologists
- Practicing in private practice, often part-time or as a side career
- Currently using a mix of: paper notebooks, Notion, Google Calendar, Apple Reminders, or oversized EHRs like SimplePractice/Jane/TherapyNotes
- Highly sceptical buyers — they care deeply about data security, professional ethics, and respect for their clinical workflow
- Discover tools via peer recommendations, professional Facebook groups, and Reddit (r/therapists, r/psychotherapy)
- Hate "corporate SaaS" tone, hate being marketed at, respond to clear, honest, warm copy

## Positioning

**One-line pitch**: The simple, secure session notebook for solo therapists — without the bloat of an EHR.

**Core problems we solve**:

1. Session notes scattered across paper, Notion, and Google Docs
2. Follow-ups slip through the cracks because reminders live in a different app
3. Existing tools (SimplePractice, Jane, TherapyNotes) cost $69–$149/month and are built for billing-heavy practices, not solo notebook-and-nudge use cases
4. Generic productivity tools (Notion, Apple Notes) have no compliance story and no clinical workflow

**What makes us different**:

- Built for solo practitioners, not insurance billing
- Encrypted at rest and in transit — your notes are yours
- Dead-simple workflow: log a session, set a follow-up reminder, get nudged when it's time
- No setup fee, 30-day free trial, $15/month per practitioner

## MVP features to showcase on the page

1. **Client list with simple status** — active, waiting, paused, discharged
2. **Session logs** — free-text notes with date, duration, and optional structured fields
3. **One-click follow-up reminders** — set a follow-up date in a single click from any session
4. **Today view** — daily home screen showing follow-ups due, overdue, and clients gone quiet
5. **Full-text search** across all your notes
6. **Encrypted by default** — column-level encryption via Supabase Vault, TLS in transit, two-factor authentication
7. **Your data, exportable anytime** — one-click ZIP export of all clients and sessions

## Pricing (display this clearly)

- $15/month per practitioner
- 30-day free trial
- No credit card required to start the trial
- No setup fee
- Cancel anytime

## Trust and security messaging (do not skip)

The audience will scrutinise this. The landing page must include:

- Encryption at rest (column-level via Supabase Vault) and in transit (TLS 1.3)
- Two-factor authentication available
- Automatic session timeout after inactivity
- Row Level Security — your data is isolated from every other practitioner's
- Audit logging — every note view and edit is logged
- One-click data export — you are never locked in
- Privacy-first analytics (we use Plausible, not Google Analytics)
- GDPR and HIPAA-aligned design (note: we cannot claim HIPAA compliance until we've signed a BAA with Supabase; phrase as "designed to align with HIPAA principles")

## Tech stack

- **Framework**: Next.js 15 (App Router), TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI components**: shadcn/ui (install as needed, don't pre-install everything)
- **Email capture**: Resend, sending to deegha@codewavelabs.io on every waitlist signup
- **Hosting target**: Vercel (don't worry about deployment in code, just keep it Vercel-compatible)
- **Form validation**: Zod + react-hook-form
- **Package manager**: pnpm
- **Git hooks**: Husky + lint-staged for pre-commit lint and typecheck

## File and folder conventions

- App Router structure under `/app`
- Components in `/components` — UI primitives in `/components/ui`, page sections in `/components/sections`
- Server actions in `/app/actions`
- Email templates in `/lib/emails`
- Types in `/lib/types`
- Use kebab-case for filenames, PascalCase for component names

## Code style rules

- TypeScript strict mode, no `any` unless explicitly justified in a comment
- All forms use react-hook-form + Zod schemas
- Server actions for form submissions, not API routes
- All copy lives in components — don't externalise to a CMS, this is a single landing page
- Tailwind classes inline, no separate CSS files
- Accessible by default — semantic HTML, proper ARIA labels, keyboard navigation, focus states
- Responsive mobile-first

## Copy and tone rules

- Warm, plain, direct. No marketing jargon. No "revolutionise your practice."
- Use language therapists actually use — "session," "follow-up," "client" (not "customer" or "user")
- Lead with the problem, then the solution
- Specific over vague — "log a session in 30 seconds" beats "save time on notes"
- Honest about what we are — a notebook, not an EHR. Don't oversell.
- Never claim full HIPAA compliance until legally backed. Use "designed with clinical privacy in mind" or similar.

## Working preferences (read this for every task)

1. **Plan before coding.** For any non-trivial task, write a short plan to `docs/plans/[task-name].md` and wait for my approval before implementing.
2. **One section at a time.** Build sections in the order I specify. Don't jump ahead.
3. **Run typecheck and lint after every change.** `pnpm typecheck && pnpm lint`. Do not say "done" until both pass.
4. **Commit per section.** Use conventional commits (`feat:`, `fix:`, `chore:`).
5. **Ask before adding dependencies.** If you want to install a new package, ask first with a one-line justification.
6. **No placeholder lorem ipsum.** Use real copy that fits the audience. If unsure, ask.
7. **No stock photo URLs.** Use illustrations, abstract gradients, or leave a clearly-marked placeholder (`/* TODO: image */`) for me to fill.

## What this landing page must achieve

A solo therapist landing on this page from a Reddit recommendation should within 30 seconds:

1. Understand exactly what FollowUpSession is
2. Feel that the team understands their workflow and concerns
3. Trust us with the seed of an idea that they'd put client data into our app
4. Be willing to drop their email to get early access

The single metric we are optimising for is: **email signup conversion rate from a Reddit/Facebook-referred therapist**.
