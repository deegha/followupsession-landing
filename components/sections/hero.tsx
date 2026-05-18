import { WaitlistForm } from "@/components/waitlist-form";

function TodayViewMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 w-full max-w-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-0.5">
            Today
          </p>
          <p className="text-base font-semibold text-slate-900">Monday, 19 May</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center">
          {/* calendar icon */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="1" y="3" width="13" height="11" rx="1.5" stroke="#0d9488" strokeWidth="1.2" />
            <path d="M1 6h13" stroke="#0d9488" strokeWidth="1.2" />
            <path d="M5 1v3M10 1v3" stroke="#0d9488" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Follow-ups due */}
      <div className="mb-4">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
          Follow-ups due · 2
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-red-50 border border-red-100">
            <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900">S.K.</p>
              <p className="text-xs text-red-500">Overdue · 3 days</p>
            </div>
            <span className="text-[10px] font-medium text-red-400 bg-red-100 rounded px-1.5 py-0.5">
              urgent
            </span>
          </div>
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-amber-50 border border-amber-100">
            <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900">M.T.</p>
              <p className="text-xs text-amber-600">Due today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming sessions */}
      <div className="mb-4">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
          Session today · 1
        </p>
        <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
          <div className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0" aria-hidden="true" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900">J.L.</p>
            <p className="text-xs text-slate-500">2:00 PM · 50 min</p>
          </div>
          <button className="text-[11px] text-teal-700 font-medium hover:text-teal-900 transition-colors focus-visible:outline-none focus-visible:underline">
            Log →
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-100">
        <p className="text-xs text-slate-400">3 clients quiet for 14+ days</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 bg-stone-50 overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 60% 40%, oklch(0.94 0.04 185 / 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy + form */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-3 py-1 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500" aria-hidden="true" />
              <span className="text-xs font-medium text-teal-700">Now taking waitlist signups</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-5">
              Your session notes are everywhere.{" "}
              <span className="text-slate-500">Your follow-ups keep slipping.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              FollowUpSession is a secure session notebook built for solo therapists — without the
              billing bloat of an EHR.
            </p>

            <WaitlistForm />

            <p className="mt-3 text-xs text-slate-400">
              No credit card required · No setup fee · 30-day free trial
            </p>
          </div>

          {/* Right: Today view mockup */}
          <div className="flex justify-center lg:justify-end" aria-hidden="true">
            <TodayViewMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
