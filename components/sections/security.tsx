import {
  Lock,
  ShieldCheck,
  KeyRound,
  Timer,
  Database,
  ScrollText,
  HardDriveDownload,
  BarChart3,
  BadgeCheck,
} from "lucide-react";

const trustItems = [
  {
    Icon: Lock,
    title: "Encrypted at rest",
    body: "Column-level encryption via Supabase Vault. Your notes aren't readable — even by us.",
  },
  {
    Icon: ShieldCheck,
    title: "Encrypted in transit",
    body: "TLS 1.3 on every connection. Your data is protected from the moment it leaves your device.",
  },
  {
    Icon: KeyRound,
    title: "Two-factor authentication",
    body: "Optional but strongly recommended. Enable it in one click from your account settings.",
  },
  {
    Icon: Timer,
    title: "Automatic session timeout",
    body: "You're logged out after inactivity — even if you step away and forget.",
  },
  {
    Icon: Database,
    title: "Row Level Security",
    body: "Your data is isolated from every other practitioner's at the database level. Not just in the UI — in the database itself.",
  },
  {
    Icon: ScrollText,
    title: "Audit logging",
    body: "Every note view and edit is recorded. You can see exactly who accessed what and when.",
  },
  {
    Icon: HardDriveDownload,
    title: "One-click data export",
    body: "Download a full ZIP of all your clients and sessions any time. You are never locked in.",
  },
  {
    Icon: BarChart3,
    title: "Privacy-first analytics",
    body: "We use Plausible Analytics, not Google Analytics. We do not sell your data or track your clients.",
  },
  {
    Icon: BadgeCheck,
    title: "Designed with HIPAA and GDPR in mind",
    body: "We can't claim certified HIPAA compliance until we've signed a BAA with our infrastructure providers — so we say that honestly. Our design aligns with both frameworks.",
  },
];

export function Security() {
  return (
    <section id="security" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
            Security & privacy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-snug mb-4">
            Your clients&apos; notes are private. We&apos;ve built it that way from the start.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We know you can&apos;t put client data somewhere you don&apos;t fully trust. Here&apos;s
            exactly how we protect it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {trustItems.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-100 bg-slate-50 p-5 flex gap-4"
            >
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-teal-600" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-teal-50 border border-teal-100 px-6 py-4">
          <p className="text-sm text-slate-700">
            Questions about our security practices?{" "}
            <a
              href="mailto:hello@followupsession.com"
              className="font-medium text-teal-700 hover:text-teal-900 underline underline-offset-2 transition-colors"
            >
              Email us at hello@followupsession.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
