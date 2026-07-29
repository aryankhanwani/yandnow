"use client";

import { useState } from "react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/* ============================================================
   ContactForm — client-side enquiry form.
   No backend is wired yet, so on submit it composes a routed
   mailto: to info@broadarks.com (subject line matches the
   doc's enquiry-routing scheme) and shows a confirmation.
   Swap `handleSubmit` for a POST to your API when ready.
   ============================================================ */

const ENQUIRY_TYPES = [
  { value: "Corporate", subject: "Corporate Training Enquiry" },
  { value: "CSR", subject: "CSR Programme Enquiry" },
  { value: "Platform", subject: "Platform Demo Request" },
  { value: "Industrial", subject: "Industrial Training Enquiry" },
  { value: "Schools", subject: "School Programme Enquiry" },
  { value: "Defence", subject: "CSR Programme Enquiry" },
  { value: "Learner", subject: "Corporate Training Enquiry" },
  { value: "Other", subject: "General Enquiry" },
];

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const type = String(data.get("type") || "Other");
    const subject = ENQUIRY_TYPES.find((t) => t.value === type)?.subject ?? "General Enquiry";

    const body = [
      `Name: ${data.get("name")}`,
      `Organisation: ${data.get("org")}`,
      `Designation: ${data.get("designation") || "—"}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "—"}`,
      `Enquiry type: ${type}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");

    const mailto = `mailto:info@broadarks.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
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
        <h3 className="mb-2 font-heading text-xl font-700 text-ink">Your email client is opening…</h3>
        <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
          We&apos;ve pre-filled a routed message to <span className="font-semibold text-ink">info@broadarks.com</span>. If nothing opened, email us directly — we respond to all commercial enquiries within 2 working days.
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
          <select name="type" required defaultValue="Corporate" className={cn(inputBase, "appearance-none")}>
            {ENQUIRY_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.value}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" required>
          <textarea name="message" required rows={5} placeholder="Tell us about your workforce and the outcomes you're targeting…" className={cn(inputBase, "resize-none")} />
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

      <button
        type="submit"
        disabled={!agree}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        Send Enquiry
        <Send size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
