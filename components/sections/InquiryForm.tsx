"use client";
import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const PROJECT_TYPES = [
  "SCADA Integration",
  "IIoT Implementation",
  "DCS / SIS Engineering",
  "Control System Modernization",
  "Network Infrastructure",
  "Data Analytics & Reporting",
  "Other",
];

const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Not sure yet"];

type Status = "idle" | "loading" | "success" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="inquiry" className="section-pad bg-background">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-cyan-400 text-xs tracking-[0.25em] uppercase mb-2">
          03. Start a Project
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
          Have a Project in Mind?
        </h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          Describe your automation requirements and I&apos;ll get back to you
          within 24 hours.
        </p>

        {status === "success" ? (
          <div className="flex items-start gap-4 bg-emerald-400/5 border border-emerald-400/30 p-6">
            <CheckCircle size={22} className="text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-slate-100 font-semibold mb-1">Inquiry received!</p>
              <p className="text-slate-400 text-sm">
                Thanks for reaching out. I&apos;ll review your requirements and get
                back to you at the email provided.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required placeholder="John Smith" />
              <Field label="Company / Organization" name="company" placeholder="PT. Example Indonesia" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
              <Field label="Phone" name="phone" type="tel" placeholder="+62-xxx-xxxx-xxxx" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <SelectField label="Project Type" name="project_type" options={PROJECT_TYPES} />
              <SelectField label="Estimated Timeline" name="timeline" options={TIMELINES} />
            </div>
            <div>
              <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
                Project Requirements <span className="text-cyan-400">*</span>
              </label>
              <textarea
                name="description"
                required
                rows={5}
                placeholder="Describe your system, current challenges, and what you need..."
                className="w-full bg-card border border-slate-700 text-slate-100 placeholder-slate-600 px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/60 transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-3 text-red-400 text-sm bg-red-400/5 border border-red-400/20 px-4 py-3">
                <AlertCircle size={16} className="flex-shrink-0" />
                Something went wrong. Please try again or email directly at hafizhp@icloud.com
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center gap-2 bg-cyan-400 text-background px-7 py-3 font-semibold hover:bg-cyan-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={17} />
              {status === "loading" ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-card border border-slate-700 text-slate-100 placeholder-slate-600 px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/60 transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-card border border-slate-700 text-slate-400 px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/60 transition-colors appearance-none"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-card text-slate-100">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
