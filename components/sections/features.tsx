import { Users, FileText, Bell, CalendarDays, Search, Download } from "lucide-react";

const features = [
  {
    Icon: Users,
    title: "Client list, simply",
    body: "Active, waiting, paused, or discharged. Know who's on your caseload at a glance — no spreadsheet required.",
  },
  {
    Icon: FileText,
    title: "Session logs",
    body: "Write free-text notes the way you think. Add date, duration, and optional structured fields when you want them.",
  },
  {
    Icon: Bell,
    title: "One-click follow-up reminders",
    body: "Set a follow-up date from any session in a single click. No juggling a separate reminders app.",
  },
  {
    Icon: CalendarDays,
    title: "Today view",
    body: "Start every morning knowing exactly who's overdue for a check-in and who's been quiet for too long.",
  },
  {
    Icon: Search,
    title: "Full-text search",
    body: "Find any note, any client, any session — instantly. Your records always at your fingertips.",
  },
  {
    Icon: Download,
    title: "Your data, always yours",
    body: "Export everything as a ZIP file whenever you want. You are never locked in.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-stone-50 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
            What it does
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-snug mb-4">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-lg text-slate-600">
            FollowUpSession is a notebook, not an EHR. Here&apos;s exactly what it does.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-xl border border-slate-100 p-6 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-teal-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1.5">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
