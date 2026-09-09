"use client";

import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "motion/react";
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

const inputBase =
  "w-full rounded-xl border border-[#e8ecf2] bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-neutral-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-neutral-700">
        {label} {required && <span className="text-secondary-600">*</span>}
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
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center rounded-3xl border border-[#e8ecf2] bg-white p-10 text-center shadow-[0_18px_50px_rgba(20,21,46,0.06)]"
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-50 text-secondary-600">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="mb-2 font-heading text-xl font-700 text-ink">Thanks — we&apos;ve got your enquiry.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
          Your enquiry has been routed to the right team. We will get back to you at the email address you provided.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
        >
          Send another enquiry
          <ArrowRight size={15} />
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#e8ecf2] bg-white p-6 shadow-[0_18px_50px_rgba(20,21,46,0.06)] sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" required>
          <input name="name" required placeholder="Your full name" className={inputBase} />
        </Field>
        <Field label="Organisation / Company" required>
          <input name="org" required placeholder="Company name" className={inputBase} />
        </Field>
        <Field label="Designation">
          <input name="designation" placeholder="Your role" className={inputBase} />
        </Field>
        <Field label="Email" required>
          <input name="email" type="email" required placeholder="you@company.com" className={inputBase} />
        </Field>
        <Field label="Phone">
          <input name="phone" type="tel" placeholder="+91 …" className={inputBase} />
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
          <textarea name="message" required rows={5} placeholder="What are you trying to improve, who is the programme for, and what do you need the learning to achieve?" className={cn(inputBase, "resize-none")} />
        </Field>
      </div>

      <label className="mt-5 flex items-start gap-3">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-neutral-300 text-primary-600 accent-primary-500"
        />
        <span className="text-xs leading-relaxed text-neutral-500">
          Your information will be used only to respond to your enquiry and will not be shared with third parties. For full details, see our{" "}
          <a href="/privacy-policy" className="font-medium text-primary-600 hover:underline">Privacy Policy</a>.
        </span>
      </label>

      {error && <p className="mt-4 text-xs font-semibold text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={!agree || sending}
        /* Matches CtaButton's primary variant - a form submit cannot be
           a <Link>, so the styling is mirrored rather than shared. */
        className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary-500 px-7 py-3.5 text-sm font-semibold text-white shadow-md outline-none transition-all duration-300 hover:bg-primary-600 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {sending ? "Sending…" : "Send Enquiry"}
        {sending ? (
          <Loader2 size={15} className="animate-spin" />
        ) : (
          <Send size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        )}
      </button>
    </form>
  );
}
