import { WaitlistForm } from "@/components/waitlist-form";

export function Waitlist() {
  return (
    <section id="waitlist" className="relative bg-slate-900 py-20 sm:py-28 overflow-hidden">
      {/* Subtle teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.6 0.14 185 / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-4">
          Early access
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-5">
          Get early access to FollowUpSession
        </h2>

        <p className="text-lg text-slate-300 leading-relaxed mb-10">
          We&apos;re in private development. Drop your email and we&apos;ll let you know when
          it&apos;s ready — and give you 30 days free.
        </p>

        <WaitlistForm
          className="max-w-md mx-auto"
          inputClassName="bg-white/10 border-white/20 text-white placeholder-white/40 focus:ring-white"
          buttonClassName="bg-white text-slate-900 hover:bg-slate-50"
        />

        <p className="mt-5 text-sm text-slate-400">
          We&apos;ll only email you when it matters. No newsletters. No spam.
        </p>
      </div>
    </section>
  );
}
