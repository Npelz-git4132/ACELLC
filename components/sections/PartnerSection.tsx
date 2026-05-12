"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Link from "next/link";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid work email required"),
  org: z.string().min(2, "Organization is required"),
  role: z.string().optional(),
  phone: z.string().optional(),
  represents: z.string().min(1, "Please select who you represent"),
  message: z.string().max(500, "500 characters max").optional(),
  populationSize: z.string().optional(),
  consent: z.literal(true, { error: "You must accept to continue" }),
});

type FormData = z.infer<typeof schema>;

export default function PartnerSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [selectedPath, setSelectedPath] = useState<"partner" | "clinician" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "inquiry_submitted");
      }
    } catch {
      setServerError("Something went wrong. Please try again or email us directly.");
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "inquiry_validation_error");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="partner" className="bg-[#EAF4FB] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0B3D5C]/50">
            Take the first step
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#0B3D5C]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Deploy cardiometabolic reversal at scale.
          </h2>
        </div>

        {/* Two path cards */}
        <div className="grid md:grid-cols-2 gap-5">
          <div
            className={`bg-white rounded-2xl p-8 border-2 cursor-pointer transition-all ${selectedPath === "partner" ? "border-[#E63946] shadow-lg" : "border-transparent shadow-sm hover:shadow-md"}`}
            onClick={() => {
              setSelectedPath("partner");
              setValue("represents", "Health System or Hospital");
              document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "path_card_click_A");
              }
            }}
          >
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#E63946]/10 rounded-xl flex items-center justify-center text-2xl">🏥</div>
              <h3 className="text-xl font-bold text-[#0B3D5C]" style={{ fontFamily: "Georgia, serif" }}>
                Health Systems, Payers & Employers
              </h3>
              <p className="text-[#264653]/70 leading-relaxed">
                Learn how ACE HeartAge partners with hospitals, health plans, PBMs, and
                self-insured employers to deliver measurable cardiometabolic outcomes across
                member populations.
              </p>
              <button className="mt-2 bg-[#E63946] hover:bg-[#c52e3a] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors w-full">
                Request a Partner Briefing →
              </button>
            </div>
          </div>

          <div
            className={`bg-white rounded-2xl p-8 border-2 cursor-pointer transition-all ${selectedPath === "clinician" ? "border-[#0B3D5C] shadow-lg" : "border-transparent shadow-sm hover:shadow-md"}`}
            onClick={() => {
              setSelectedPath("clinician");
              setValue("represents", "Clinician or Referring Provider");
              document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "path_card_click_B");
              }
            }}
          >
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#0B3D5C]/10 rounded-xl flex items-center justify-center text-2xl">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-[#0B3D5C]" style={{ fontFamily: "Georgia, serif" }}>
                Clinicians & Referring Providers
              </h3>
              <p className="text-[#264653]/70 leading-relaxed">
                Referral pathways, coach certification, and continuing-education opportunities
                for clinicians who want to connect patients to the program.
              </p>
              <button className="mt-2 border-2 border-[#0B3D5C] text-[#0B3D5C] hover:bg-[#0B3D5C] hover:text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors w-full">
                Clinician resources →
              </button>
            </div>
          </div>
        </div>

        {/* Inquiry form */}
        <div id="inquiry-form" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-[#2A9D8F]/10 rounded-full flex items-center justify-center mx-auto text-3xl">✓</div>
              <h3 className="text-2xl font-bold text-[#0B3D5C]" style={{ fontFamily: "Georgia, serif" }}>
                Message received!
              </h3>
              <p className="text-[#264653]/70 text-lg">
                Thanks — we&apos;ve received your message and will reply within 1 business day.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-[#0B3D5C] mb-2" style={{ fontFamily: "Georgia, serif" }}>
                Questions? We&apos;ll get back to you within 1 business day.
              </h3>

              {serverError && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm mb-6">
                  {serverError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 mt-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#264653] mb-1.5">
                      Full name <span className="text-[#E63946]">*</span>
                    </label>
                    <input
                      {...register("name")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C] transition-shadow"
                      placeholder="Jane Smith"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#264653] mb-1.5">
                      Work email <span className="text-[#E63946]">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C] transition-shadow"
                      placeholder="jane@healthsystem.org"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#264653] mb-1.5">
                      Organization <span className="text-[#E63946]">*</span>
                    </label>
                    <input
                      {...register("org")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C] transition-shadow"
                      placeholder="Vandalia Health"
                    />
                    {errors.org && <p className="text-red-500 text-xs mt-1">{errors.org.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#264653] mb-1.5">
                      Role / Title
                    </label>
                    <input
                      {...register("role")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C] transition-shadow"
                      placeholder="VP of Population Health"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#264653] mb-1.5">Phone</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C] transition-shadow"
                      placeholder="+1 (304) 555-0100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#264653] mb-1.5">
                      I represent… <span className="text-[#E63946]">*</span>
                    </label>
                    <select
                      {...register("represents")}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C] transition-shadow bg-white"
                    >
                      <option value="">Select one…</option>
                      <option>Health System or Hospital</option>
                      <option>Health Plan or Payer</option>
                      <option>Self-Insured Employer</option>
                      <option>PBM</option>
                      <option>Clinician or Referring Provider</option>
                      <option>Patient or Family Member</option>
                      <option>Researcher</option>
                      <option>Media</option>
                      <option>Other</option>
                    </select>
                    {errors.represents && <p className="text-red-500 text-xs mt-1">{errors.represents.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#264653] mb-1.5">
                    What can we help with?{" "}
                    <span className="text-[#264653]/40 font-normal">(500 chars max)</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C] transition-shadow resize-none"
                    placeholder="Tell us about your population, goals, or questions…"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#264653] mb-1.5">
                    Approximate population size you&apos;d be covering{" "}
                    <span className="text-[#264653]/40 font-normal">(optional — helps us route)</span>
                  </label>
                  <input
                    {...register("populationSize")}
                    type="number"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C] transition-shadow"
                    placeholder="e.g. 50000"
                  />
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      {...register("consent")}
                      type="checkbox"
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#0B3D5C] focus:ring-[#0B3D5C] shrink-0"
                    />
                    <span className="text-sm text-[#264653]/80 leading-relaxed">
                      I agree to be contacted about the ACE HeartAge program. I understand this
                      form is{" "}
                      <strong className="text-[#E63946]">
                        not a secure channel for Protected Health Information (PHI)
                      </strong>
                      . Please do not include personal health details in this form.{" "}
                      <span className="text-[#E63946]">*</span>
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-500 text-xs mt-2 ml-7">{errors.consent.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#E63946] hover:bg-[#c52e3a] disabled:bg-gray-300 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg shadow-red-100"
                >
                  {submitting ? "Sending…" : "Send my inquiry →"}
                </button>
              </form>
            </>
          )}
        </div>

        {/* Sign-in block */}
        <div id="faq" className="bg-white rounded-2xl border border-gray-100 p-8 text-center space-y-6">
          <h3 className="text-xl font-bold text-[#0B3D5C]" style={{ fontFamily: "Georgia, serif" }}>
            Already part of the program?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="space-y-3 p-5 bg-[#FAFAF7] rounded-xl">
              <p className="font-semibold text-[#0B3D5C]">Existing members &amp; care teams</p>
              <p className="text-sm text-[#264653]/60">Log in to your dashboard.</p>
              <Link
                href="/login"
                className="block bg-[#0B3D5C] hover:bg-[#0a3250] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    (window as any).gtag("event", "login_click");
                  }
                }}
              >
                Log In →
              </Link>
            </div>
            <div className="space-y-3 p-5 bg-[#FAFAF7] rounded-xl">
              <p className="font-semibold text-[#0B3D5C]">Invited new members</p>
              <p className="text-sm text-[#264653]/60">
                If your care team sent you an invitation, create your account to begin.
              </p>
              <Link
                href="/signup"
                className="block border-2 border-[#0B3D5C] text-[#0B3D5C] hover:bg-[#0B3D5C] hover:text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                Create My Account →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
