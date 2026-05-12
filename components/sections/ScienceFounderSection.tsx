"use client";

import Image from "next/image";
import { useState } from "react";

const engineCards = [
  {
    name: "7-Step Clinical Logic",
    short: "Rules-based workflow codifying HUGE, EASE, ABCT, and SOS behavioral frameworks",
    detail:
      "A proprietary clinical decision tree developed over 10+ years. Covers habit formation (HUGE), emotional awareness and stress engagement (EASE), behavioral activation and cognitive techniques (ABCT), and acute stress override protocols (SOS). Every coaching interaction maps to a logic step.",
  },
  {
    name: "RPI — Reversal Potential Index",
    short: "Calculates how much cardiometabolic reversal is physiologically possible for a given member",
    detail:
      "Computes a personalized reversal ceiling from baseline biomarkers, CKM stage, comorbidities, and response patterns. Sets realistic targets for each member and benchmarks program progress against that ceiling rather than population averages.",
  },
  {
    name: "RRI — Reversal Readiness Index",
    short: "Predicts engagement likelihood so the coaching team knows when and how hard to intervene",
    detail:
      "Behavioral engagement model trained on daily tracking patterns, course completion rates, and response-to-coaching signals. Assigns a readiness score (0–100) that determines coaching intensity tier and outreach cadence.",
  },
  {
    name: "Dynamic HeartAge Score",
    short: "A composite, continuously updated biological heart age",
    detail:
      "Aggregates blood pressure, weight, metabolic markers, stress load, sleep quality, and movement data into a single rolling biological age estimate. Reassessed every 8–12 weeks with a full clinical review; interim signals update the score in near-real time.",
  },
];

export default function ScienceFounderSection() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <section id="science" className="bg-[#FAFAF7] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0B3D5C]/50">
            The team and the technology
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B3D5C]" style={{ fontFamily: "Georgia, serif" }}>
            Built by clinicians. Powered by a proprietary intelligence engine.
          </h2>
        </div>

        {/* Founder spotlight */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Photo */}
            <div className="lg:col-span-2 relative min-h-[400px] lg:min-h-0 bg-[#0B3D5C]/5">
              <Image
                src="/dr_chockalingam_headshot.png"
                alt="Prof. Anand Chockalingam, MD, FACC, FAHA, FASE"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 p-10 lg:p-14 space-y-6 flex flex-col justify-center">
              <div>
                <h3
                  className="text-2xl lg:text-3xl font-bold text-[#0B3D5C] mb-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Prof. Anand Chockalingam
                </h3>
                <p className="text-[#E63946] font-semibold text-lg">MD, FACC, FAHA, FASE</p>
              </div>

              <div className="space-y-1.5 text-sm text-[#264653]/80">
                {[
                  "Founder & Director, ACE Cardiometabolic Program",
                  "Director, Diastolic Heart Failure Clinic",
                  "Director, Cardiac Rehabilitation",
                  "Vandalia Health · CAMC Institute for Academic Medicine",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <span className="text-[#2A9D8F] mt-0.5">▸</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#264653]/80 leading-relaxed text-lg">
                Dr. Chockalingam has spent more than a decade building the clinical and behavioral
                frameworks that make cardiometabolic reversal possible at scale. His work has been
                featured for &ldquo;turning back the heart clock&rdquo; and has informed
                preventive-cardiology practice regionally and nationally.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {["FACC", "FAHA", "FASE", "10+ Years Research", "1,000+ Patients"].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#0B3D5C]/8 text-[#0B3D5C]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Intelligence Engine */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h3
              className="text-2xl lg:text-3xl font-bold text-[#0B3D5C]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The engine behind every care decision.
            </h3>
            <p className="text-[#264653]/70 text-lg max-w-3xl mx-auto">
              Unlike generic telehealth platforms, ACE HeartAge is built on a proprietary clinical
              intelligence engine developed over more than a decade of published research and patient
              care. Four ACE-owned systems work together:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineCards.map((card, i) => (
              <div key={card.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="p-6 space-y-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: ["#E63946", "#F4A261", "#0B3D5C", "#2A9D8F"][i] }}
                  >
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-[#0B3D5C] text-sm leading-tight">{card.name}</h4>
                  <p className="text-[#264653]/70 text-sm leading-relaxed">{card.short}</p>
                </div>
                <button
                  onClick={() => setOpenCard(openCard === i ? null : i)}
                  className="w-full text-left px-6 pb-4 text-xs font-semibold text-[#E63946] hover:text-[#c52e3a] transition-colors"
                  aria-expanded={openCard === i}
                >
                  {openCard === i ? "Show less ↑" : "Learn more ↓"}
                </button>
                {openCard === i && (
                  <div className="px-6 pb-6 text-sm text-[#264653]/70 leading-relaxed border-t border-gray-100 pt-4">
                    {card.detail}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Trust microcopy */}
          <div className="bg-[#0B3D5C] rounded-xl px-8 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              "HIPAA-aligned infrastructure",
              "FHIR/HL7-compliant",
              "SOC 2 roadmap",
              "Data sovereignty protected — partner data is never sold or used to train third-party models",
            ].map((item) => (
              <span key={item} className="text-white/80 text-sm flex items-center gap-2">
                <span className="text-[#2A9D8F]">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* TODO: When partner logo permissions are secured, populate with:
           Fourth Frontier · Prolon · deltaG · Cordella
           Show as horizontal logo row with one-line descriptors. */}
      {/* <section id="ecosystem-partners" className="hidden"></section> */}
    </section>
  );
}
