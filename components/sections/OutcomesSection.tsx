"use client";

import { useEffect, useRef, useState } from "react";

const outcomes = [
  { value: "−17.3%", label: "Average weight reduction at 12 weeks", detail: "Weight" },
  { value: "−35%", label: "Systolic blood pressure reduction", detail: "Systolic BP" },
  { value: "−50%", label: "HbA1c reduction (diabetes marker)", detail: "HbA1c" },
  { value: "−25%", label: "Lipid panel reduction", detail: "Lipids" },
];

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="text-5xl lg:text-6xl font-bold text-[#E63946] mb-2">
        {value}
        <sup className="text-2xl ml-1 text-[#E63946]/70 cursor-pointer hover:text-white" onClick={() => {
          document.getElementById("preprint-disclaimer")?.scrollIntoView({ behavior: "smooth" });
        }}>*</sup>
      </div>
      <p className="text-white/80 text-sm leading-tight max-w-[160px] mx-auto">{label}</p>
    </div>
  );
}

export default function OutcomesSection() {
  const [ckmOpen, setCkmOpen] = useState(false);

  return (
    <section id="outcomes" className="bg-[#0B3D5C]">
      {/* Outcomes grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-3">
            Clinical outcomes
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
            Peer-reviewed results at population scale.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {outcomes.map((o) => (
            <AnimatedStat key={o.detail} value={o.value} label={o.label} />
          ))}
        </div>

        <p className="text-center text-white/40 text-xs mt-8 italic max-w-2xl mx-auto">
          *Preprint. Published results from a 90-patient Stage B/C heart failure cohort at 12 weeks.
          Awaiting peer review. Individual results will vary.{" "}
          <a
            href="https://www.medrxiv.org/content/10.1101/2025.05.20.25327930v1.full"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/70 transition-colors"
          >
            View preprint →
          </a>
        </p>
      </div>

      {/* What is HeartAge */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
                The number your members&apos; cardiologists wish they knew.
              </h2>
              <div className="space-y-4 text-white/80 text-lg leading-relaxed">
                <p>
                  <strong className="text-white">HeartAge</strong> is the biological age of the
                  cardiovascular system — not the date on the driver&apos;s license. It&apos;s calculated
                  from blood pressure, weight, metabolic markers, lifestyle signals, and stress load.
                </p>
                <p>
                  A 55-year-old with untreated hypertension and chronic stress may have a HeartAge
                  of 72. The good news: unlike the calendar, HeartAge runs both directions.{" "}
                  <strong className="text-[#F4A261]">ACE HeartAge is designed to reverse it.</strong>
                </p>
              </div>

              {/* CKM expand */}
              <div className="bg-white/5 rounded-xl overflow-hidden">
                <button
                  onClick={() => setCkmOpen(!ckmOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-white hover:bg-white/5 transition-colors"
                  aria-expanded={ckmOpen}
                >
                  <span className="font-semibold">Learn the science: The 4-Stage CKM Model</span>
                  <span className="text-white/60 text-xl">{ckmOpen ? "−" : "+"}</span>
                </button>
                {ckmOpen && (
                  <div className="px-6 pb-6 text-white/70 text-sm leading-relaxed space-y-3">
                    <p>
                      The AHA&apos;s Cardiovascular-Kidney-Metabolic (CKM) framework defines four
                      progressive stages of cardiometabolic disease:
                    </p>
                    <ul className="space-y-2">
                      {[
                        ["Stage 0", "No risk factors — preserve and protect"],
                        ["Stage 1", "Excess weight, dysglycemia — intervene early"],
                        ["Stage 2", "Metabolic syndrome, CKD, early CVD — reverse trajectory"],
                        ["Stage 3–4", "Established CVD/HF — stabilize and reverse where possible"],
                      ].map(([stage, desc]) => (
                        <li key={stage} className="flex gap-3">
                          <span className="font-bold text-[#F4A261] shrink-0">{stage}</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-white/60 mt-2">
                      ACE HeartAge intervenes across all stages, with particular emphasis on
                      reversing Stage 2–4 progression.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* HeartAge illustration */}
            <div className="flex justify-center">
              <div className="bg-white/10 rounded-2xl p-8 w-full max-w-sm">
                <p className="text-center text-white/60 text-xs uppercase tracking-widest mb-8">
                  Biological HeartAge is Overweight + Stress
                </p>
                <div className="flex justify-around items-end gap-4">
                  {[
                    { age: "35", heartAge: "70", label: "Managed risk", color: "#E9C46A" },
                    { age: "55", heartAge: "100", label: "Unmanaged stress", color: "#F4A261" },
                    { age: "65", heartAge: "120", label: "Multiple conditions", color: "#E63946" },
                  ].map((p) => (
                    <div key={p.age} className="flex flex-col items-center gap-3">
                      {/* Avatar */}
                      <div
                        className="rounded-full flex items-center justify-center font-bold text-white text-sm"
                        style={{
                          backgroundColor: p.color,
                          width: p.heartAge === "70" ? "56px" : p.heartAge === "100" ? "72px" : "88px",
                          height: p.heartAge === "70" ? "56px" : p.heartAge === "100" ? "72px" : "88px",
                        }}
                      >
                        <div className="text-center">
                          <div className="text-lg font-bold leading-none">{p.heartAge}</div>
                          <div className="text-[10px] opacity-80">HeartAge</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-white font-semibold text-sm">Age {p.age}</p>
                        <p className="text-white/50 text-xs mt-0.5 max-w-[80px] text-center">{p.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-2 bg-[#2A9D8F]/20 text-[#2A9D8F] px-4 py-2 rounded-full text-sm font-semibold">
                    ↓ ACE HeartAge reverses the number
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
