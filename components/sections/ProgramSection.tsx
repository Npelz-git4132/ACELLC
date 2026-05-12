import { Heart, TrendingDown, Droplets, Brain } from "lucide-react";

const pillars = [
  {
    id: "pillar-heart",
    icon: Heart,
    iconColor: "#E63946",
    headline: "Heart Health & Heart Failure Reversal",
    body: "Comprehensive program for hypertension, high cholesterol, and — our specialty — diastolic heart failure (HFpEF) reversal. Published outcomes show patients transitioning from multiple hospitalizations per year to stable, medication-reduced lives.",
    step: "step-1-assessment",
  },
  {
    id: "pillar-weight",
    icon: TrendingDown,
    iconColor: "#F4A261",
    headline: "Weight & Metabolic Reset",
    body: "Sustainable weight reduction through structured lifestyle intervention, optional metabolic support (fasting-mimicking diets, medical-grade ketones), and — when clinically appropriate — medication coordination. Cohort reduction: >15% body weight*.",
    step: "step-2-course",
  },
  {
    id: "pillar-diabetes",
    icon: Droplets,
    iconColor: "#2A9D8F",
    headline: "Diabetes & Pre-Diabetes",
    body: "Everything needed to prevent, manage, or reverse Type 2 diabetes — continuous glucose tracking, nutrition coaching, and medication optimization coordinated with the member's primary care physician or endocrinologist.",
    step: "step-3-rpm",
  },
  {
    id: "pillar-stress",
    icon: Brain,
    iconColor: "#0B3D5C",
    headline: "Stress, Sleep & the Mind–Heart Connection",
    body: "The most under-treated driver of heart disease. Our Heartful Living framework uses HUGE / EASE / ABCT / SOS behavioral tools to reduce chronic stress load — a validated path to lower blood pressure and a younger HeartAge.",
    step: "step-4-coaching",
  },
];

export default function ProgramSection() {
  return (
    <section id="program" className="bg-[#FAFAF7] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#0B3D5C]/50">
            What we treat
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B3D5C]" style={{ fontFamily: "Georgia, serif" }}>
            One program. Four connected drivers of cardiometabolic health.
          </h2>
          <p className="text-lg text-[#264653]/70 leading-relaxed">
            We don&apos;t treat symptoms in isolation. ACE HeartAge addresses the biology, behavior,
            and environment that push heart age up — and systematically pulls each one back down.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                id={p.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 focus-within:ring-2 focus-within:ring-[#0B3D5C] group"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: p.iconColor + "15" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: p.iconColor }} aria-hidden="true" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#0B3D5C]" style={{ fontFamily: "Georgia, serif" }}>
                      {p.headline}
                    </h3>
                    <p className="text-[#264653]/70 leading-relaxed">{p.body}</p>
                    <a
                      href={`#${p.step}`}
                      className="inline-flex items-center text-sm font-semibold text-[#E63946] hover:text-[#c52e3a] transition-colors focus:outline-none focus:underline"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ideal candidate band */}
        <div className="bg-[#0B3D5C] rounded-2xl px-8 py-6 text-white">
          <p className="font-semibold text-white/70 text-sm mb-3 uppercase tracking-wider">
            Best fit for members with:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Hypertension",
              "High cholesterol",
              "Pre-diabetes",
              "Type 2 diabetes",
              "Obesity",
              "Heart failure (especially HFpEF)",
              "Chronic stress",
              "Family history of cardiovascular disease",
              "Any at-risk population where measurable outcomes matter",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full text-sm text-white/90 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
