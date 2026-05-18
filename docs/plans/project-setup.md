# Project Setup Plan — FollowUpSession

## Overview

Scaffold a Next.js 15 (App Router) project with TypeScript strict mode, Tailwind CSS v4, shadcn/ui, Husky + lint-staged, and Resend for waitlist email capture.

---

## 1. Initialisation command

```bash
pnpm create next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=no \
  --import-alias="@/*"
```

This gives us: Next.js 15, TypeScript, Tailwind (v4 via the latest create-next-app), ESLint, App Router, and the `@/*` alias.

---

## 2. Dependencies to add after init

### Production dependencies

| Package               | Version | Justification                                       |
| --------------------- | ------- | --------------------------------------------------- |
| `resend`              | latest  | Email delivery for waitlist signups                 |
| `react-hook-form`     | latest  | Form state management (required by CLAUDE.md)       |
| `zod`                 | latest  | Schema validation for forms (required by CLAUDE.md) |
| `@hookform/resolvers` | latest  | Connects Zod schemas to react-hook-form             |

### Dev dependencies

| Package       | Version | Justification                           |
| ------------- | ------- | --------------------------------------- |
| `husky`       | latest  | Git hooks (required by CLAUDE.md)       |
| `lint-staged` | latest  | Run lint/typecheck only on staged files |

### shadcn/ui

Initialised via CLI, not as a bulk package install. We install individual components as needed during section builds. The init command:

```bash
pnpm dlx shadcn@latest init
```

Config choices for `components.json`:

- Style: Default
- Base color: Slate
- CSS variables: yes
- TypeScript: yes
- Components path: `@/components/ui`
- Utils path: `@/lib/utils`

Components we know we'll need (install during Phase B as each section is built):

- `button` — Nav, Hero, Pricing CTAs
- `input` — Waitlist form
- `label` — Waitlist form
- `badge` — Feature tags (optional)
- `separator` — Footer (optional)

---

## 3. Folder structure

```
/
├── app/
│   ├── actions/
│   │   └── waitlist.ts          # Server action: validate email, send via Resend
│   ├── privacy/
│   │   └── page.tsx             # Stub privacy policy page
│   ├── terms/
│   │   └── page.tsx             # Stub terms of service page
│   ├── globals.css              # Tailwind directives only
│   ├── layout.tsx               # Root layout: fonts, metadata, Plausible script
│   └── page.tsx                 # Home: imports all sections in order
├── components/
│   ├── sections/
│   │   ├── nav.tsx
│   │   ├── hero.tsx
│   │   ├── problem.tsx
│   │   ├── features.tsx
│   │   ├── security.tsx
│   │   ├── pricing.tsx
│   │   ├── waitlist.tsx
│   │   └── footer.tsx
│   └── ui/                      # shadcn/ui primitives (added by shadcn CLI)
├── lib/
│   ├── emails/
│   │   └── waitlist-notification.tsx   # Resend React email template
│   ├── types/
│   │   └── waitlist.ts          # Zod schema + inferred TS type for the waitlist form
│   └── utils.ts                 # shadcn cn() utility (created by shadcn init)
├── docs/
│   └── plans/                   # This file and landing-page-structure.md live here
├── public/                      # Static assets only — no remote image URLs
├── .husky/
│   └── pre-commit               # Runs lint-staged
├── .env.local                   # RESEND_API_KEY (not committed)
├── .env.example                 # Committed — shows required vars without values
├── .eslintrc.json               # ESLint config (from create-next-app)
├── components.json              # shadcn config
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tailwind.config.ts           # Tailwind v4 config
└── tsconfig.json                # strict: true confirmed
```

---

## 4. TypeScript config

Confirm `tsconfig.json` has:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

`noUncheckedIndexedAccess` is not added by default but catches a class of runtime errors cheaply. Happy to omit if you prefer to keep the default.

---

## 5. package.json scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "format": "prettier --write ."
  }
}
```

---

## 6. Husky + lint-staged config

### Husky setup

```bash
pnpm exec husky init
```

`.husky/pre-commit`:

```bash
pnpm exec lint-staged
```

### lint-staged config (in `package.json`)

```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "tsc --noEmit"],
    "*.{ts,tsx,css,md,json}": "prettier --write"
  }
}
```

Note: `tsc --noEmit` in lint-staged runs against the whole project (not just staged files) — this is standard for TS projects and is unavoidable. It will be fast on a small codebase like this.

---

## 7. Resend integration

### Environment variables

`.env.example` (committed):

```
RESEND_API_KEY=
NOTIFICATION_EMAIL=deegha@codewavelabs.io
```

`.env.local` (not committed, gitignored):

```
RESEND_API_KEY=re_...your_key_here...
NOTIFICATION_EMAIL=deegha@codewavelabs.io
```

### Server action — `app/actions/waitlist.ts`

Flow:

1. Client submits email via react-hook-form
2. Form calls the server action (no fetch, no API route)
3. Server action validates with Zod (`z.string().email()`)
4. If valid: calls `resend.emails.send()` to notify `deegha@codewavelabs.io`
5. Returns `{ success: true }` or `{ success: false, error: string }`
6. Client shows inline success/error message — no page reload

```typescript
// Skeleton (not final code — for plan review only)
"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({ email: z.string().email() });

export async function joinWaitlist(formData: FormData) {
  const result = schema.safeParse({ email: formData.get("email") });
  if (!result.success) return { success: false, error: "Invalid email address." };

  await resend.emails.send({
    from: "FollowUpSession Waitlist <waitlist@followupsession.com>",
    to: process.env.NOTIFICATION_EMAIL!,
    subject: `New waitlist signup: ${result.data.email}`,
    react: WaitlistNotificationEmail({ email: result.data.email }),
  });

  return { success: true };
}
```

### Email template — `lib/emails/waitlist-notification.tsx`

Simple React Email template:

- Subject: `New waitlist signup: [email]`
- Body: timestamp, email address, plain text (no HTML complexity needed for an internal notification)

### Resend sender domain

The `from` address uses `waitlist@followupsession.com`. This requires the domain to be verified in the Resend dashboard. If the domain isn't verified yet at setup time, we can temporarily use `onboarding@resend.dev` (Resend's shared domain) for local testing — just swap the `from` before going live.

---

## 8. ESLint config

Start with Next.js defaults (`next/core-web-vitals`). Add `@typescript-eslint/no-explicit-any` as an error (enforces the no-`any` rule from CLAUDE.md):

```json
{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

---

## 9. Prettier (optional but recommended for lint-staged)

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

Prettier is not listed in CLAUDE.md but is needed by lint-staged's `--write` step. Please confirm if you want it included or omitted.

---

## 10. Plausible Analytics

Script added in `app/layout.tsx` as a `<Script>` tag (Next.js `next/script`, `strategy="afterInteractive"`):

```tsx
<Script
  defer
  data-domain="followupsession.com"
  src="https://plausible.io/js/script.js"
  strategy="afterInteractive"
/>
```

No additional package needed. The domain must be registered in the Plausible dashboard.

---

## 11. Scaffolding order

1. `pnpm create next-app@latest`
2. Install production deps (`resend`, `react-hook-form`, `zod`, `@hookform/resolvers`)
3. Install dev deps (`husky`, `lint-staged`)
4. `pnpm dlx shadcn@latest init`
5. Configure Husky + lint-staged
6. Configure ESLint (add `no-explicit-any` rule)
7. Add `.env.example` and `.gitignore` entry for `.env.local`
8. Create folder structure stubs (`app/actions/`, `lib/emails/`, `lib/types/`)
9. Run `pnpm typecheck && pnpm lint` — both must pass on an empty scaffold before Phase B begins
10. Commit: `chore: scaffold project`

---

## Open questions for approval

1. **`noUncheckedIndexedAccess`** in tsconfig: include it (stricter, catches bugs) or omit (default, less noise)?
2. **Prettier**: include in lint-staged or lint only (no auto-format)?
3. **Resend sender domain**: use `waitlist@followupsession.com` (requires DNS verification) or `onboarding@resend.dev` as a placeholder until the domain is set up?
4. **Stub pages** for Privacy Policy and Terms: empty shell with "coming soon" text, or skip entirely for now?
