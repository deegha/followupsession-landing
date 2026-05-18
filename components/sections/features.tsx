import { Search, ChevronRight, Download, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// ------------------------------------------------------------------
// Shared app window chrome
// ------------------------------------------------------------------
function AppWindow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 shadow-2xl overflow-hidden bg-white select-none",
        className
      )}
    >
      <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-50 border-b border-slate-100">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}

// ------------------------------------------------------------------
// Mockup 1: Client list
// ------------------------------------------------------------------
const clients = [
  { initials: "SK", name: "S. Kim", status: "Active" as const, sessions: 4, last: "Today" },
  { initials: "MT", name: "M. Thompson", status: "Paused" as const, sessions: 5, last: "Apr 28" },
  { initials: "JL", name: "J. Lewis", status: "Active" as const, sessions: 1, last: "Yesterday" },
  { initials: "AR", name: "A. Reyes", status: "Waiting" as const, sessions: 0, last: null },
];

const statusStyle: Record<string, string> = {
  Active: "bg-emerald-50 text-emerald-700",
  Paused: "bg-amber-50 text-amber-700",
  Waiting: "bg-slate-100 text-slate-500",
  Discharged: "bg-slate-100 text-slate-400",
};

function ClientListMockup() {
  return (
    <AppWindow>
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
        <span className="text-sm font-semibold text-slate-900">Clients</span>
        <span className="text-[11px] font-semibold text-teal-600 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-md">
          + New
        </span>
      </div>
      <div className="flex gap-0 border-b border-slate-100 px-4">
        {["All", "Active", "Paused", "Waiting"].map((tab) => (
          <span
            key={tab}
            className={cn(
              "py-2 px-3 text-[11px] font-semibold border-b-2 -mb-px",
              tab === "All" ? "border-teal-500 text-teal-700" : "border-transparent text-slate-400"
            )}
          >
            {tab}
          </span>
        ))}
      </div>
      <ul className="divide-y divide-slate-50">
        {clients.map((c) => (
          <li key={c.name} className="flex items-center gap-3 px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-teal-700">{c.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-sm font-medium text-slate-900">{c.name}</span>
                <span
                  className={cn(
                    "text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
                    statusStyle[c.status]
                  )}
                >
                  {c.status}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {c.sessions > 0
                  ? `${c.sessions} sessions · Last: ${c.last}`
                  : "Awaiting first session"}
              </p>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-200 flex-shrink-0" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </AppWindow>
  );
}

// ------------------------------------------------------------------
// Mockup 2: Session log — rich text editor
// ------------------------------------------------------------------
const toolbarButtons = [
  { label: "B", className: "font-bold", title: "Bold" },
  { label: "I", className: "italic", title: "Italic" },
  { label: "H1", className: "font-bold text-[9px]", title: "Heading 1" },
  { label: "H2", className: "font-bold text-[9px]", title: "Heading 2" },
];

function CheckItem({ done, children }: { done: boolean; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <div
        className={cn(
          "mt-0.5 w-3.5 h-3.5 rounded flex-shrink-0 border-2 flex items-center justify-center",
          done ? "bg-teal-500 border-teal-500" : "border-slate-300"
        )}
      >
        {done && (
          <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
            <path
              d="M1.5 4L3 5.5L6.5 2"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span
        className={cn(
          "text-[12px] leading-relaxed",
          done ? "line-through text-slate-400" : "text-slate-700"
        )}
      >
        {children}
      </span>
    </div>
  );
}

function SessionLogMockup() {
  return (
    <AppWindow>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100">
        <span className="text-slate-300 text-sm">←</span>
        <span className="text-sm font-semibold text-slate-900">S. Kim — Session 4</span>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex gap-4">
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">
              Date
            </p>
            <p className="text-sm font-medium text-slate-800">May 18, 2026</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">
              Duration
            </p>
            <p className="text-sm font-medium text-slate-800">50 min</p>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
            Session notes
          </p>

          {/* Rich text editor */}
          <div className="rounded-lg border border-slate-200 overflow-hidden">
            {/* Formatting toolbar */}
            <div className="flex items-center gap-0.5 px-2 py-1.5 bg-slate-50 border-b border-slate-100">
              {toolbarButtons.map(({ label, className, title }) => (
                <div
                  key={title}
                  title={title}
                  aria-label={title}
                  className={cn(
                    "w-6 h-6 rounded flex items-center justify-center text-[11px] text-slate-600 cursor-default hover:bg-slate-200",
                    className
                  )}
                >
                  {label}
                </div>
              ))}
              <div className="w-px h-4 bg-slate-200 mx-1.5" aria-hidden="true" />
              {/* Unordered list */}
              <div
                title="Bullet list"
                className="w-6 h-6 rounded flex items-center justify-center cursor-default hover:bg-slate-200"
                aria-label="Bullet list"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="1.5" cy="3" r="1" fill="#64748b" />
                  <circle cx="1.5" cy="6" r="1" fill="#64748b" />
                  <circle cx="1.5" cy="9" r="1" fill="#64748b" />
                  <rect x="4" y="2.5" width="7" height="1" rx="0.5" fill="#64748b" />
                  <rect x="4" y="5.5" width="7" height="1" rx="0.5" fill="#64748b" />
                  <rect x="4" y="8.5" width="7" height="1" rx="0.5" fill="#64748b" />
                </svg>
              </div>
              {/* Checklist */}
              <div
                title="Checklist"
                className="w-6 h-6 rounded flex items-center justify-center cursor-default hover:bg-slate-200 bg-slate-200"
                aria-label="Checklist"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="5"
                    height="5"
                    rx="1"
                    stroke="#0f766e"
                    strokeWidth="1"
                  />
                  <path
                    d="M1.5 3L2.8 4.2L4.5 1.8"
                    stroke="#0f766e"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="0.5"
                    y="6.5"
                    width="5"
                    height="5"
                    rx="1"
                    stroke="#64748b"
                    strokeWidth="1"
                  />
                  <rect x="7.5" y="1.5" width="4" height="1" rx="0.5" fill="#64748b" />
                  <rect x="7.5" y="7.5" width="4" height="1" rx="0.5" fill="#64748b" />
                </svg>
              </div>
              <div className="w-px h-4 bg-slate-200 mx-1.5" aria-hidden="true" />
              {/* Emoji */}
              <div
                title="Emoji"
                className="w-6 h-6 rounded flex items-center justify-center text-[12px] cursor-default hover:bg-slate-200"
                aria-label="Emoji"
              >
                🙂
              </div>
            </div>

            {/* Editor body */}
            <div className="px-3 pt-3 pb-2 space-y-2 bg-white min-h-[140px]">
              {/* H1 heading */}
              <p className="text-[13px] font-bold text-slate-900">Session themes 🧠</p>

              {/* Paragraph with bold */}
              <p className="text-[12px] text-slate-700 leading-relaxed">
                Client exploring <strong className="text-slate-900">boundary setting</strong> with
                family. Identified link to early caretaker role. CBT reframing well received. 😔
              </p>

              {/* Checklist label */}
              <p className="text-[11px] font-semibold text-slate-500 pt-1">Goals this session</p>

              {/* Checklist */}
              <div className="space-y-1.5">
                <CheckItem done>Review CBT homework from last week</CheckItem>
                <CheckItem done>Reframing exercise — completed in session</CheckItem>
                <CheckItem done={false}>Practice assertive communication script</CheckItem>
                <CheckItem done={false}>Set boundary log reminder</CheckItem>
              </div>

              {/* Cursor */}
              <span
                className="inline-block w-0.5 h-3.5 bg-slate-800 align-middle animate-pulse"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 text-[12px] font-semibold bg-slate-900 text-white rounded-lg py-2.5">
            Save note
          </button>
          <button className="text-[12px] font-medium border border-slate-200 text-slate-600 rounded-lg px-3 py-2.5">
            Set follow-up
          </button>
        </div>
      </div>
    </AppWindow>
  );
}

// ------------------------------------------------------------------
// Mockup 3: One-click follow-up reminder
// ------------------------------------------------------------------
function FollowUpMockup() {
  return (
    <AppWindow>
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">
              Last session
            </p>
            <p className="text-sm font-semibold text-slate-900">S. Kim — May 18</p>
          </div>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md">
            Active
          </span>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-700 mb-2">Set a follow-up reminder</p>
          <div className="grid grid-cols-2 gap-2">
            {["1 week", "2 weeks", "1 month", "Custom…"].map((option, i) => (
              <div
                key={option}
                className={cn(
                  "text-[12px] font-semibold rounded-xl border py-3 text-center cursor-default",
                  i === 1
                    ? "bg-teal-600 border-teal-600 text-white"
                    : "bg-white border-slate-200 text-slate-700"
                )}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-teal-50 border border-teal-100 rounded-xl px-4 py-3 flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
            <Check className="w-3.5 h-3.5 text-white" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-teal-900">Follow-up set</p>
            <p className="text-[11px] text-teal-600">You&apos;ll be reminded on Jun 1, 2026</p>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

// ------------------------------------------------------------------
// Mockup 4: Today view
// ------------------------------------------------------------------
function TodayViewMockup() {
  return (
    <AppWindow>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
              Today
            </p>
            <p className="text-sm font-bold text-slate-900">Monday, 19 May</p>
          </div>
          <span className="text-[11px] text-slate-400">4 need attention</span>
        </div>

        <div>
          <p className="text-[10px] font-semibold text-red-500 uppercase tracking-widest mb-2">
            Overdue · 2
          </p>
          <div className="space-y-1.5">
            {[
              { initials: "SK", name: "S. Kim", detail: "3 days overdue" },
              { initials: "MT", name: "M. Thompson", detail: "1 day overdue" },
            ].map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2.5 bg-red-50 border border-red-100 rounded-xl px-3 py-2.5"
              >
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[9px] font-bold text-red-600 flex-shrink-0">
                  {c.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-semibold text-slate-900">{c.name}</p>
                  <p className="text-[11px] text-red-500">{c.detail}</p>
                </div>
                <button className="text-[11px] font-semibold text-teal-700 bg-white border border-teal-100 px-2 py-0.5 rounded-md flex-shrink-0">
                  Follow up
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-semibold text-amber-500 uppercase tracking-widest mb-2">
            Due today · 1
          </p>
          <div className="flex items-center gap-2.5 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5">
            <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-[9px] font-bold text-amber-700 flex-shrink-0">
              JL
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-semibold text-slate-900">J. Lewis</p>
              <p className="text-[11px] text-amber-600">Follow-up due today</p>
            </div>
            <button className="text-[11px] font-semibold text-teal-700 bg-white border border-teal-100 px-2 py-0.5 rounded-md flex-shrink-0">
              Follow up
            </button>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-semibold text-teal-600 uppercase tracking-widest mb-2">
            Session today · 1
          </p>
          <div className="flex items-center gap-2.5 bg-teal-50 border border-teal-100 rounded-xl px-3 py-2.5">
            <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-[9px] font-bold text-teal-700 flex-shrink-0">
              AR
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-semibold text-slate-900">A. Reyes</p>
              <p className="text-[11px] text-teal-600">2:00 PM · 50 min</p>
            </div>
            <button className="text-[11px] font-semibold text-teal-700 bg-white border border-teal-100 px-2 py-0.5 rounded-md flex-shrink-0">
              Log →
            </button>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

// ------------------------------------------------------------------
// Mockup 5: Full-text search
// ------------------------------------------------------------------
const searchResults = [
  {
    initials: "SK",
    name: "S. Kim",
    session: "Session 4",
    date: "May 18",
    excerpt:
      '…difficulty saying no to family requests. Explored link to early family role as a "fixer." CBT reframing applied…',
  },
  {
    initials: "MT",
    name: "M. Thompson",
    session: "Session 2",
    date: "Apr 28",
    excerpt:
      "…boundary setting within his relationship at work. Work stress continuing to escalate despite previous coping strategies…",
  },
  {
    initials: "JL",
    name: "J. Lewis",
    session: "Session 1",
    date: "Apr 14",
    excerpt:
      "…First session. Initial assessment complete. Presenting concerns: anxiety and difficulty establishing limits with family…",
  },
];

function SearchMockup() {
  return (
    <AppWindow>
      <div className="px-4 py-3 border-b border-slate-100">
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
          <Search className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" aria-hidden="true" />
          <span className="text-sm text-slate-800 flex-1">boundary setting</span>
          <span className="text-[10px] text-slate-400 font-medium">⏎</span>
        </div>
      </div>
      <div className="px-4 py-2 bg-slate-50 border-b border-slate-100">
        <p className="text-[11px] text-slate-400">3 results across 3 clients</p>
      </div>
      <ul className="divide-y divide-slate-50">
        {searchResults.map((r) => (
          <li key={r.name + r.session} className="px-4 py-3 hover:bg-slate-50 cursor-default">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <span className="text-[9px] font-bold text-teal-700">{r.initials}</span>
              </div>
              <span className="text-[12px] font-semibold text-slate-900">{r.name}</span>
              <span className="text-[11px] text-slate-300">·</span>
              <span className="text-[11px] text-slate-500">{r.session}</span>
              <span className="text-[11px] text-slate-400 ml-auto">{r.date}</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed pl-7 line-clamp-2">
              {r.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </AppWindow>
  );
}

// ------------------------------------------------------------------
// Mockup 6: Data export
// ------------------------------------------------------------------
const exportFiles = [
  { icon: "📋", name: "clients.csv", detail: "4 clients" },
  { icon: "📝", name: "sessions.csv", detail: "18 sessions" },
  { icon: "💬", name: "notes.csv", detail: "18 notes, all text" },
];

function ExportMockup() {
  return (
    <AppWindow>
      <div className="p-5 space-y-4">
        <div>
          <p className="text-sm font-semibold text-slate-900 mb-1">Export your data</p>
          <p className="text-[12px] text-slate-400">
            Your complete records, downloaded as a ZIP archive. No lock-in.
          </p>
        </div>

        <ul className="space-y-2">
          {exportFiles.map((f) => (
            <li
              key={f.name}
              className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-3 py-3"
            >
              <span className="text-base" aria-hidden="true">
                {f.icon}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-slate-800">{f.name}</p>
                <p className="text-[11px] text-slate-400">{f.detail}</p>
              </div>
              <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" aria-hidden="true" />
            </li>
          ))}
        </ul>

        <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white text-[13px] font-semibold py-3 rounded-xl">
          <Download className="w-4 h-4" aria-hidden="true" />
          Download ZIP
        </button>

        <p className="text-center text-[11px] text-slate-400">
          followupsession-export-2026-05-18.zip
        </p>
      </div>
    </AppWindow>
  );
}

// ------------------------------------------------------------------
// Feature rows — alternating layout
// ------------------------------------------------------------------
interface FeatureRowProps {
  label: string;
  title: string;
  body: string;
  bullets: string[];
  mockup: React.ReactNode;
  reverse?: boolean;
}

function FeatureRow({ label, title, body, bullets, mockup, reverse }: FeatureRowProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 border-b border-slate-100 last:border-0">
      <div className={cn("order-2", reverse ? "lg:order-2" : "lg:order-1")}>
        <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-3">
          {label}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug mb-4">{title}</h3>
        <p className="text-base text-slate-600 leading-relaxed mb-6">{body}</p>
        <ul className="space-y-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-sm text-slate-600">{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={cn("order-1", reverse ? "lg:order-1" : "lg:order-2")}>{mockup}</div>
    </div>
  );
}

// ------------------------------------------------------------------
// Section
// ------------------------------------------------------------------
export function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-4">
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

        <FeatureRow
          label="Client list"
          title="Your whole caseload, at a glance"
          body="Active, waiting, paused, or discharged — every client's status visible the moment you open the app. No spreadsheet, no searching through paper notes."
          bullets={[
            "Filter by status in one click",
            "See session count and last contact date",
            "Add a new client in under 30 seconds",
          ]}
          mockup={<ClientListMockup />}
        />

        <FeatureRow
          label="Session logs"
          title="Write notes the way you think"
          body="Rich text from the start — headings, bold, emojis, and checklists you can tick off mid-session. No mandatory fields. Just open a session and write."
          bullets={[
            "Bold, headings, bullet lists, and checklists — not just a textarea",
            "Tick off goals mid-session with a checklist that saves with the note",
            "Every save is encrypted, timestamped, and full-text searchable",
          ]}
          mockup={<SessionLogMockup />}
          reverse
        />

        <FeatureRow
          label="Follow-up reminders"
          title="One click from any session"
          body="At the end of every session, set a follow-up in a single click. No switching to Apple Reminders or your calendar. FollowUpSession nudges you when it's time."
          bullets={[
            "1 week, 2 weeks, 1 month — or a custom date",
            "Reminders surface in your Today view, not your inbox",
            "Never leave a client wondering why they haven't heard from you",
          ]}
          mockup={<FollowUpMockup />}
        />

        <FeatureRow
          label="Today view"
          title="Start every morning knowing exactly where you are"
          body="One screen shows you who's overdue, who's due today, and which sessions are coming up. No hunting across three apps to figure out your day."
          bullets={[
            "Overdue follow-ups highlighted in red — can't be missed",
            "Clients who've gone quiet surface automatically",
            "Log a session or set a follow-up directly from the dashboard",
          ]}
          mockup={<TodayViewMockup />}
          reverse
        />

        <FeatureRow
          label="Search"
          title="Find anything, instantly"
          body="Full-text search across every note, every session, every client. Type a word a client mentioned six months ago and find the session in seconds."
          bullets={[
            "Searches note content, not just client names",
            "Results show a contextual excerpt so you know it's the right one",
            "Useful the day you use it — indispensable after a year",
          ]}
          mockup={<SearchMockup />}
        />

        <FeatureRow
          label="Data export"
          title="Your data is yours — always"
          body="One click downloads a ZIP of every client and session you've ever logged. CSV files you can open in Excel, Numbers, or import anywhere. We never hold your records hostage."
          bullets={[
            "Full export in seconds — clients, sessions, notes",
            "Standard CSV format, readable anywhere",
            "No need to contact support or wait for an account closure",
          ]}
          mockup={<ExportMockup />}
          reverse
        />
      </div>
    </section>
  );
}
