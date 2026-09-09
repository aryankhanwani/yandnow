"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

/* ============================================================
   ContactForm - client-side enquiry form.
   Submissions are written straight to the `enquiries` table in
   Supabase (anon insert-only RLS policy - see the yandnow-backend
   supabase/schema.sql) using the public anon key, and show up in
   the yandnow-backend admin panel under Enquiries. No mail client
   popup - the form just submits.
   ============================================================ */

/* The stored `value` is what lands in the Supabase `enquiries`
   table and must keep matching what the admin panel expects; only
   the label is the reader-facing wording from the copy deck. */
const ENQUIRY_TYPES = [
  { value: "Corporate", label: "Corporate workforce training" },
  { value: "CSR", label: "Corporate Social Responsibility programme" },
  { value: "Industrial", label: "Industry training" },
  { value: "Defence", label: "Defence and veteran programmes" },
  { value: "Schools", label: "School programmes" },
  { value: "Platform", label: "Platform demonstration" },
  { value: "Learner", label: "Learner enquiry" },
  { value: "Other", label: "General enquiry" },
];

/* Every solution page links here with ?type=… so the visitor
   lands on the form already pointed at the right team. Livelihood
   enquiries are handled by the CSR team. */
const TYPE_FROM_QUERY: Record<string, string> = {
  corporate: "Corporate",
  csr: "CSR",
  livelihood: "CSR",
  industry: "Industrial",
  defence: "Defence",
  schools: "Schools",
  platform: "Platform",
  learner: "Learner",
  government: "Other",
};

/* 16px on mobile is not a preference: below it, iOS Safari zooms the
   whole page the moment the field takes focus. 48px height matches the
   button height, and the radius is the site's single radius. */
const inputBase =
  "block h-12 w-full rounded-lg border border-hairline bg-surface px-4 text-body text-ink transition-colors transition-house placeholder:text-ink-muted focus:border-brand";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      {/* Labels are always visible - a placeholder disappears the
          moment someone starts typing, taking the question with it. */}
      <span className="mb-2 block text-body-sm font-700 text-ink">
        {label}
        {required && <span aria-hidden> *</span>}
        {required && <span className="sr-only"> (required)</span>}
      </span>
      {children}
    </label>
  );
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [agree, setAgree] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const typeRef = useRef<HTMLSelectElement>(null);

  /* Read the ?type= hint from the URL after mount rather than via
     useSearchParams, which would opt the whole page out of static
     rendering for what is only a nicety. The select stays uncontrolled
     and we set its value on the node, so the server-rendered default
     and the first client render still agree. */
  useEffect(() => {
    const hint = new URLSearchParams(window.location.search).get("type");
    const matched = hint ? TYPE_FROM_QUERY[hint.toLowerCase()] : undefined;
    if (matched && typeRef.current) typeRef.current.value = matched;
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      organisation: String(data.get("org") || "").trim(),
      designation: String(data.get("designation") || "").trim() || null,
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim() || null,
      enquiry_type: String(data.get("type") || "Other"),
      message: String(data.get("message") || "").trim(),
    };

    if (!supabase) {
      setError("Enquiries aren't set up yet. Please email us directly at info@broadarks.com.");
      return;
    }

    setSending(true);
    const { error: insertError } = await supabase.from("enquiries").insert(payload);
    setSending(false);
    if (insertError) {
      setError("Something went wrong sending your enquiry. Please email us directly at info@broadarks.com.");
      return;
    }
    form.reset();
    setAgree(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-lg border border-hairline bg-surface-alt p-8 sm:p-10"
      >
        <h3 className="text-h3 text-ink">Thanks — we&apos;ve got your enquiry.</h3>
        <p className="mt-4 measure text-body text-ink-muted">
          It has been routed to the right team. We will reply to the email address
          you gave us.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="hover-underline mt-6 inline-flex min-h-11 items-center text-body-sm font-700 text-brand"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-hairline bg-surface p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" required>
          <input name="name" required autoComplete="name" placeholder="Your full name" className={inputBase} />
        </Field>
        <Field label="Organisation / Company" required>
          <input name="org" required autoComplete="organization" placeholder="Company name" className={inputBase} />
        </Field>
        <Field label="Designation">
          <input name="designation" autoComplete="organization-title" placeholder="Your role" className={inputBase} />
        </Field>
        <Field label="Email" required>
          <input name="email" type="email" required autoComplete="email" inputMode="email" placeholder="you@company.com" className={inputBase} />
        </Field>
        <Field label="Phone">
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 …" className={inputBase} />
        </Field>
        <Field label="Enquiry type" required>
          <select
            ref={typeRef}
            name="type"
            required
            defaultValue="Corporate"
            className={cn(inputBase, "appearance-none")}
          >
            {ENQUIRY_TYPES.map((type) => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" required>
          <textarea name="message" required rows={5} placeholder="What are you trying to improve?" className={cn(inputBase, "h-auto resize-none py-3")} />
        </Field>
      </div>

      <label className="mt-6 flex min-h-11 items-start gap-3">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          required
          className="mt-1 h-5 w-5 flex-shrink-0 accent-brand"
        />
        <span className="text-body-sm text-ink-muted">
          Your information will be used only to respond to your enquiry and will not be shared with third parties. For full details, see our{" "}
          <a href="/privacy-policy" className="hover-underline text-brand">Privacy Policy</a>.
        </span>
      </label>

      {error && (
        <p role="alert" className="mt-4 text-body-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!agree || sending}
        /* Matches CtaButton's primary variant - a form submit cannot be
           a <Link>, so the styling is mirrored rather than shared. */
        className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-lg bg-brand px-6 text-body-sm font-700 text-white transition-colors transition-house hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {sending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
