export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-semibold text-white tracking-tight mb-2">FollowUpSession</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Built for therapists, by people who care about clinical privacy.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-col sm:items-end gap-2">
            <a
              href="/privacy"
              className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="mailto:hello@followupsession.com"
              className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
            >
              hello@followupsession.com
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-xs text-slate-600">
            &copy; 2025 FollowUpSession. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
