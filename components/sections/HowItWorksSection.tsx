const steps = [
  {
    id: "step-1-assessment",
    num: 1,
    headline: "Personalized HeartAge Assessment",
    body: "The member completes a short intake: demographics, medical history, current medications, lifestyle, and baseline measurements (blood pressure, weight, recent labs). ACE calculates their first HeartAge score and identifies specific reversal opportunities.",
    memberExp: "Completes digital intake, receives first HeartAge score",
    careExp: "Reviews baseline, identifies risk tier and reversal targets",
    visual: (
      <div className="bg-[#FAFAF7] rounded-xl p-5 space-y-3 border border-gray-100">
        <p className="text-xs font-bold text-[#264653]/50 uppercase tracking-wider">HeartAge Assessment</p>
        {["Blood Pressure: 148/92", "Weight: 224 lbs", "HbA1c: 7.4%", "Stress Score: 8/10"].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#E63946]" />
            <span className="text-sm text-[#264653]">{item}</span>
          </div>
        ))}
        <div className="mt-4 bg-[#E63946] text-white text-center rounded-lg py-3">
          <div className="text-2xl font-bold">HeartAge: 72</div>
          <div className="text-xs opacity-80">Chronological age: 55</div>
        </div>
      </div>
    ),
  },
  {
    id: "step-2-course",
    num: 2,
    headline: "Eight-Week Heartful Living Course",
    body: "A structured online course built on the ACE 7-Step Clinical Logic — HUGE, EASE, ABCT, and SOS frameworks. Video lessons, guided reflection exercises, and weekly goals members can actually keep.",
    memberExp: "Completes weekly video lessons, reflection exercises, and goals",
    careExp: "Reviews progress, adjusts coaching intensity by week",
    visual: (
      <div className="bg-[#FAFAF7] rounded-xl p-5 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-bold text-[#264653]/50 uppercase tracking-wider">Heartful Living Course</p>
          <span className="text-xs bg-[#0B3D5C] text-white px-2 py-1 rounded-full">Week 3 of 8</span>
        </div>
        <div className="space-y-2">
          {["HUGE: Habits & Understanding", "EASE: Emotional Awareness", "ABCT: Behavior Change", "SOS: Stress Override"].map((m, i) => (
            <div key={m} className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i < 2 ? "bg-[#2A9D8F] text-white" : i === 2 ? "bg-[#0B3D5C] text-white" : "bg-gray-200 text-gray-400"}`}>
                {i < 3 ? "✓" : "4"}
              </div>
              <span className={`text-sm ${i < 2 ? "text-[#264653]" : i === 2 ? "font-semibold text-[#0B3D5C]" : "text-gray-400"}`}>{m}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "step-3-rpm",
    num: 3,
    headline: "Remote Patient Monitoring (RPM)",
    body: "Members track daily: blood pressure, weight, glucose (where relevant), heart rate, and a short reflection via our Daily Tracker — energy, stress, sleep, hunger, hydration, movement. Data flows directly to the coach and caregiver.",
    memberExp: "Logs daily vitals and lifestyle metrics via the Daily Tracker",
    careExp: "Receives real-time data streams, flags anomalies automatically",
    visual: (
      <div className="bg-[#FAFAF7] rounded-xl p-5 border border-gray-100">
        <p className="text-xs font-bold text-[#264653]/50 uppercase tracking-wider mb-4">Daily Tracker</p>
        <div className="space-y-3">
          {[
            { label: "Energy", val: 7, color: "#F4A261" },
            { label: "Stress", val: 4, color: "#E63946" },
            { label: "Sleep Quality", val: 6, color: "#0B3D5C" },
            { label: "Movement", val: 8, color: "#2A9D8F" },
            { label: "Hydration", val: 7, color: "#2A9D8F" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="text-xs text-[#264653]/70 w-24 shrink-0">{s.label}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${s.val * 10}%`, backgroundColor: s.color }} />
              </div>
              <span className="text-xs font-bold text-[#264653] w-6 text-right">{s.val}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "step-4-coaching",
    num: 4,
    headline: "Frequent Virtual Visits + Coach Support",
    body: "Every member is assigned a lifestyle coach and a clinical caregiver. Virtual check-ins happen regularly — sometimes multiple times per week when needed. Our AI-assisted system flags Green / Yellow / Red signals so the coach reaches out before things slip.",
    memberExp: "Attends scheduled virtual visits, receives personalized coaching",
    careExp: "AI-flagged dashboard shows priority outreach queue by status",
    visual: (
      <div className="bg-[#FAFAF7] rounded-xl p-5 border border-gray-100">
        <p className="text-xs font-bold text-[#264653]/50 uppercase tracking-wider mb-4">Coach Dashboard</p>
        <div className="space-y-2">
          {[
            { name: "M. Johnson", age: 62, status: "Green", note: "On track — week 5" },
            { name: "R. Patel", age: 58, status: "Yellow", note: "Missed 2 check-ins" },
            { name: "L. Williams", age: 71, status: "Red", note: "BP spike flagged" },
            { name: "T. Garcia", age: 45, status: "Green", note: "HeartAge −8 pts" },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-3 bg-white rounded-lg px-3 py-2">
              <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${p.status === "Green" ? "bg-[#2A9D8F]" : p.status === "Yellow" ? "bg-[#E9C46A]" : "bg-[#E63946]"}`} />
              <span className="text-sm font-semibold text-[#264653]">{p.name}</span>
              <span className="text-xs text-[#264653]/50">age {p.age}</span>
              <span className="text-xs text-[#264653]/50 ml-auto">{p.note}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "step-5-reversal",
    num: 5,
    headline: "Lifestyle Micro-Interventions & HeartAge Reversal",
    body: "Small, targeted changes layered on the course — a breathing protocol, a specific walk cadence, a stress-response script, a meal rotation. Every 8–12 weeks the platform reassesses HeartAge and shows the number moving.",
    memberExp: "Sees HeartAge dropping on their dashboard every 8–12 weeks",
    careExp: "Reviews cohort-level reversals, reports outcomes to partners",
    visual: (
      <div className="bg-[#FAFAF7] rounded-xl p-5 border border-gray-100">
        <p className="text-xs font-bold text-[#264653]/50 uppercase tracking-wider mb-4">HeartAge Trendline</p>
        <div className="relative h-20 flex items-end gap-2 mb-2">
          {[74, 71, 68, 65, 62].map((ha, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-xs font-bold text-[#E63946]">{ha}</span>
              <div
                className="w-full rounded-t-sm bg-gradient-to-t from-[#E63946] to-[#F4A261] transition-all"
                style={{ height: `${((ha - 58) / (74 - 58)) * 64 + 10}px`, opacity: 0.3 + i * 0.14 }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-[#264653]/40">
          <span>Baseline</span><span>Wk 8</span><span>Wk 16</span><span>Wk 24</span><span>Wk 32</span>
        </div>
        <div className="mt-4 text-center">
          <span className="text-2xl font-bold text-[#2A9D8F]">−12 HeartAge years</span>
          <p className="text-xs text-[#264653]/50 mt-1">over 32 weeks</p>
        </div>
      </div>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0B3D5C]/50">
            How it works
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B3D5C]" style={{ fontFamily: "Georgia, serif" }}>
            A guided 12-month journey — built to reverse, not manage.
          </h2>
        </div>

        {/* Workflow diagram */}
        <div className="mb-20 overflow-x-auto">
          <div className="min-w-[700px] bg-[#FAFAF7] rounded-2xl p-8 border border-gray-100">
            <p className="text-xs font-bold text-[#264653]/40 uppercase tracking-wider text-center mb-6">
              Patient Journey
            </p>
            <div className="flex items-center gap-1 flex-wrap justify-center">
              {[
                "Patient Identified",
                "Digital Enrollment",
                "Baseline HeartAge",
                "Care Team Assigned",
                "8-Week Course",
                "Daily Tracking + RPM",
                "AI-Guided Coaching",
                "Reassess HeartAge",
                "Sustained Wellness",
              ].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-1">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#0B3D5C] text-white text-xs font-semibold px-3 py-2 rounded-lg text-center whitespace-nowrap max-w-[110px] leading-tight">
                      {step}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <svg width="20" height="12" viewBox="0 0 20 12" aria-hidden="true" className="shrink-0">
                      <path d="M0 6 L14 6 M10 2 L16 6 L10 10" stroke="#E63946" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#264653]/50">
              <span className="text-[#E63946] font-semibold">↻</span>
              Progressing members loop back through Daily Tracking until Reversal is Achieved
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, i) => (
            <div
              key={step.id}
              id={step.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`space-y-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E63946] text-white font-bold text-lg flex items-center justify-center shrink-0">
                    {step.num}
                  </div>
                  <p className="text-xs font-semibold text-[#E63946] uppercase tracking-widest">
                    Step {step.num}
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-[#0B3D5C]" style={{ fontFamily: "Georgia, serif" }}>
                  {step.headline}
                </h3>
                <p className="text-[#264653]/70 leading-relaxed text-lg">{step.body}</p>
                <div className="bg-[#FAFAF7] rounded-xl p-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs font-bold text-[#264653]/40 uppercase tracking-wider mb-1">Member Experience</p>
                    <p className="text-[#264653]/80">{step.memberExp}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#264653]/40 uppercase tracking-wider mb-1">Care Team</p>
                    <p className="text-[#264653]/80">{step.careExp}</p>
                  </div>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>{step.visual}</div>
            </div>
          ))}
        </div>

        {/* Care team roles */}
        <div className="mt-24 border-t border-gray-100 pt-16">
          <h3 className="text-xl font-bold text-[#0B3D5C] text-center mb-10" style={{ fontFamily: "Georgia, serif" }}>
            Who supports each member
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Caregiver", desc: "Medical oversight & escalation", color: "#E63946", icon: "🩺" },
              { role: "Lifestyle Coach", desc: "Weekly coaching, goals, behavior change", color: "#F4A261", icon: "🎯" },
              { role: "Program Admin", desc: "Enrollment & continuity", color: "#0B3D5C", icon: "📋" },
              { role: "Member", desc: "Daily inputs, course participation", color: "#2A9D8F", icon: "💚" },
            ].map((r) => (
              <div key={r.role} className="text-center space-y-3">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl"
                  style={{ backgroundColor: r.color + "20" }}
                >
                  {r.icon}
                </div>
                <p className="font-bold text-[#0B3D5C]">{r.role}</p>
                <p className="text-sm text-[#264653]/60">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
