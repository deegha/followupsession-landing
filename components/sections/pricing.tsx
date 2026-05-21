"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const included = [
  "Unlimited clients and session logs",
  "One-click follow-up reminders",
  "Today view — daily dashboard",
  "Full-text search across all notes",
  "Column-level encryption and TLS 1.3",
  "Two-factor authentication",
  "Audit logging",
  "One-click ZIP export — your data, always",
];

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          trackEvent("pricing_section_viewed");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="bg-stone-50 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Simple pricing. No surprises.
          </h2>
          <p className="text-lg text-slate-600">One plan. Everything included. Cancel any time.</p>
        </div>

        {/* Pricing card */}
        <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
          {/* Price */}
          <div className="text-center mb-8">
            <div className="flex items-end justify-center gap-1 mb-1">
              <span className="text-5xl font-bold text-slate-900 leading-none">$15</span>
              <span className="text-slate-500 text-sm mb-1.5">/ month</span>
            </div>
            <p className="text-sm text-slate-500">per practitioner</p>
          </div>

          {/* Trial callout */}
          <div className="rounded-lg bg-teal-50 border border-teal-100 px-4 py-3 mb-6 text-center">
            <p className="text-sm font-medium text-teal-800">30-day free trial</p>
            <p className="text-xs text-teal-600 mt-0.5">No credit card required to start</p>
          </div>

          {/* What's included */}
          <ul className="space-y-2.5 mb-8" aria-label="What's included">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#waitlist"
            className="block w-full text-center rounded-md bg-slate-900 text-white text-sm font-medium px-6 py-3 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Start your free 30-day trial
          </a>
          <p className="text-xs text-slate-400 text-center mt-2">
            No card needed · No setup fee · Cancel anytime
          </p>
        </div>

        {/* Comparison line */}
        <p className="text-sm text-center text-slate-500 max-w-lg mx-auto">
          SimplePractice starts at <span className="font-medium text-slate-700">$69/month</span>.
          Jane is <span className="font-medium text-slate-700">$74/month</span>. FollowUpSession is{" "}
          <span className="font-medium text-slate-900">$15</span> — because you don&apos;t need
          billing software.
        </p>
      </div>
    </section>
  );
}
