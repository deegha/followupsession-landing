"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { joinWaitlist } from "@/app/actions/waitlist";
import { waitlistSchema, type WaitlistFormData } from "@/lib/types/waitlist";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { useRef } from "react";

interface WaitlistFormProps {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export function WaitlistForm({ className, inputClassName, buttonClassName }: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const emailFocusTracked = useRef(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = (data: WaitlistFormData) => {
    setServerError(null);
    const fd = new FormData();
    fd.append("email", data.email);
    startTransition(async () => {
      const result = await joinWaitlist(fd);
      if (result.success) {
        setSubmitted(true);
      } else {
        setServerError(result.error ?? "Something went wrong. Please try again.");
      }
    });
  };

  if (submitted) {
    return (
      <p role="status" aria-live="polite" className="text-teal-700 font-medium text-sm">
        You&apos;re on the list. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={cn("flex flex-col sm:flex-row gap-3", className)}
      >
        <div className="flex-1">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            {...register("email")}
            onFocus={() => {
              if (!emailFocusTracked.current) {
                emailFocusTracked.current = true;
                trackEvent("email_input_focused", { form: "waitlist" });
              }
            }}
            aria-describedby={errors.email ? "waitlist-email-error" : undefined}
            className={cn(
              "w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400",
              "focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent",
              inputClassName
            )}
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          onClick={() => trackEvent("waitlist_join_clicked", { location: "hero_form" })}
          className={cn(
            "inline-flex items-center justify-center rounded-md bg-slate-900 text-white text-sm font-medium px-6 py-2.5",
            "hover:bg-slate-800 transition-colors disabled:opacity-60 whitespace-nowrap",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
            buttonClassName
          )}
        >
          {isPending ? "Joining…" : "Join the waitlist"}
        </button>
      </form>
      {errors.email && (
        <p id="waitlist-email-error" role="alert" className="mt-1.5 text-xs text-red-600">
          {errors.email.message}
        </p>
      )}
      {serverError && (
        <p role="alert" className="mt-1.5 text-xs text-red-600">
          {serverError}
        </p>
      )}
    </div>
  );
}
