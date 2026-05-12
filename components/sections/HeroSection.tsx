"use client";

export default function HeroSection() {
  const scrollToOutcomes = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("outcomes")?.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "hero_outcomes_scroll");
    }
  };

  const scrollToPartner = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("partner")?.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "hero_cta_click");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FAFAF7 0%, #EAF4FB 50%, #e0eef8 100%)",
      }}
    >
      {/* Background heartbeat SVG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <svg
          viewBox="0 0 1440 200"
          className="absolute bottom-32 w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            className="heartbeat-line"
            points="0,100 200,100 240,100 260,40 280,160 300,100 340,100 380,100 420,20 460,180 500,100 560,100 1440,100"
            fill="none"
            stroke="#0B3D5C"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content — 60% */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0B3D5C]/70">
              A clinical program from Vandalia Health / CAMC Institute for Academic Medicine
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#0B3D5C] leading-[1.1] tracking-tight"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Turn back your<br />
              <span className="text-[#E63946]">population&apos;s</span><br />
              heart clock.
            </h1>

            <p className="text-xl text-[#264653]/80 leading-relaxed max-w-xl">
              ACE HeartAge is a clinician-led cardiometabolic reversal program that lowers blood
              pressure, weight, A1C, and lipid burden in the members and patients you already
              cover — at measurable, peer-reviewed scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#partner"
                onClick={scrollToPartner}
                className="inline-flex items-center justify-center bg-[#E63946] hover:bg-[#c52e3a] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-red-200"
              >
                Request a Partner Briefing →
              </a>
              <a
                href="#outcomes"
                onClick={scrollToOutcomes}
                className="inline-flex items-center justify-center text-[#0B3D5C] font-medium text-lg px-4 py-4 hover:text-[#E63946] transition-colors"
              >
                See our outcomes ↓
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-[#264653]/60 border-t border-[#0B3D5C]/10 pt-4">
              <span>✓ Built on 10+ years of clinical experience</span>
              <span>✓ 1,000+ heart-failure patients cared for</span>
              <span>✓ Outcomes featured in peer-reviewed medical literature*</span>
            </div>
          </div>

          {/* Right visual — 40% */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl shadow-blue-100/50 p-6 space-y-5 border border-[#0B3D5C]/5">
              {/* HeartAge drop */}
              <div className="text-center space-y-1">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#264653]/50">
                  Population HeartAge
                </p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-5xl font-bold text-[#264653]/40 line-through decoration-[#E63946]">74</span>
                  <div className="flex flex-col items-center">
                    <svg width="40" height="20" viewBox="0 0 40 20" aria-hidden="true">
                      <path d="M0 10 L32 10 M28 4 L36 10 L28 16" stroke="#2A9D8F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs text-[#2A9D8F] font-semibold mt-1">reversed</span>
                  </div>
                  <span className="text-5xl font-bold text-[#E63946]">62</span>
                </div>
                <p className="text-xs text-[#264653]/50">Biological heart age, 12-week cohort avg.*</p>
              </div>

              {/* Sparklines */}
              <div className="space-y-3 bg-[#FAFAF7] rounded-xl p-4">
                <p className="text-xs font-semibold text-[#264653]/50 uppercase tracking-wider">Population Trends</p>
                {[
                  { label: "Blood Pressure", value: "−35%", color: "#2A9D8F", pct: 65 },
                  { label: "Body Weight", value: "−17%", color: "#F4A261", pct: 83 },
                  { label: "HbA1c", value: "−50%", color: "#E63946", pct: 50 },
                ].map((m) => (
                  <div key={m.label} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#264653]/70">{m.label}</span>
                      <span className="font-bold" style={{ color: m.color }}>{m.value}</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${m.pct}%`, backgroundColor: m.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Status badges */}
              <div className="flex gap-2 flex-wrap">
                {[
                  { label: "847 On Track", color: "#2A9D8F", bg: "#f0faf9" },
                  { label: "63 Needs Check-in", color: "#E9C46A", bg: "#fefaef" },
                  { label: "12 Escalated", color: "#E63946", bg: "#fef2f2" },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ color: b.color, backgroundColor: b.bg }}
                  >
                    ● {b.label}
                  </span>
                ))}
              </div>

              {/* Course progress */}
              <div className="flex items-center justify-between bg-[#0B3D5C]/5 rounded-xl px-4 py-3">
                <div>
                  <p className="text-xs text-[#264653]/60">Current cohort progress</p>
                  <p className="font-semibold text-[#0B3D5C] text-sm">Week 6 of 8</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: i < 6 ? "#0B3D5C" : "#0B3D5C22" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
