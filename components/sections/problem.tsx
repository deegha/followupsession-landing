import { Bell, FileText, CircleDollarSign, ShieldAlert } from "lucide-react";

const painPoints = [
  {
    Icon: FileText,
    title: "Notes scattered everywhere",
    body: "Paper notebook, Notion page, locked Google Doc. You're not sure which one is current.",
  },
  {
    Icon: Bell,
    title: "Follow-ups falling through the cracks",
    body: "A reminder in Apple Reminders, another in your calendar, one you forgot to set entirely.",
  },
  {
    Icon: CircleDollarSign,
    title: "EHRs built for billing teams, not you",
    body: "You looked at SimplePractice. $99/month. Built for a practice manager processing insurance claims. Not for a solo clinician with a notebook.",
  },
  {
    Icon: ShieldAlert,
    title: "General apps with no compliance story",
    body: "You tried Notion or Apple Notes. Then wondered what would happen if your clients' notes were ever breached.",
  },
];

export function Problem() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
            Sound familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-snug">
            If you&apos;re like most solo therapists, your workflow looks something like this.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {painPoints.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-slate-100 bg-slate-50 p-6">
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-4">
                <Icon className="w-4.5 h-4.5 text-slate-500" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1.5">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-teal-400 pl-5">
          <p className="text-base text-slate-700 leading-relaxed">
            We built FollowUpSession because we couldn&apos;t find a tool that solved exactly this —
            a simple, secure notebook built around the way a solo therapist actually works.
          </p>
        </div>
      </div>
    </section>
  );
}
