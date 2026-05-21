"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="font-semibold text-slate-900 text-lg tracking-tight"
            aria-label="FollowUpSession home"
          >
            FollowUpSession
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <a
              href="#features"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#security"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Security
            </a>
            <a
              href="#pricing"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Pricing
            </a>
          </nav>

          <a
            href="#waitlist"
            onClick={() => trackEvent("nav_cta_clicked", { location: "top_nav" })}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
