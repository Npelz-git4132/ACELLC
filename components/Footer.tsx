"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-[#0B3D5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top row */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-7 h-7 text-[#E63946] fill-[#E63946]" aria-hidden="true" />
              <span className="font-bold text-xl">ACE HeartAge</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
              A clinician-led cardiometabolic reversal program health systems, payers, and
              employers can deploy at scale.
            </p>
            <p className="italic text-white/50 text-sm">Fuel the Heart, Heal the Mind</p>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-sm font-semibold mb-2">Stay informed</p>
              {subscribed ? (
                <p className="text-[#2A9D8F] text-sm">✓ You&apos;re subscribed.</p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubscribed(true);
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                  <button
                    type="submit"
                    className="bg-[#E63946] hover:bg-[#c52e3a] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Company links */}
          <div className="space-y-3">
            <p className="font-semibold text-white/80 uppercase text-xs tracking-widest">Company</p>
            {["About", "Mission", "Contact", "Media"].map((l) => (
              <a key={l} href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                {l}
              </a>
            ))}
          </div>

          {/* Partner links */}
          <div className="space-y-3">
            <p className="font-semibold text-white/80 uppercase text-xs tracking-widest">For Partners</p>
            {["Health Systems", "Health Plans", "Employers", "Clinician Referrals"].map((l) => (
              <a key={l} href="#partner" className="block text-white/60 hover:text-white text-sm transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Compliance row */}
        <div className="border-t border-white/10 py-6 flex flex-wrap gap-x-8 gap-y-2">
          {[
            "HIPAA-aligned",
            "SOC 2 in progress",
            "FHIR/HL7 interoperable",
          ].map((item) => (
            <span key={item} className="text-white/50 text-xs flex items-center gap-1.5">
              <span className="text-[#2A9D8F]">✓</span>
              {item}
            </span>
          ))}
        </div>

        {/* Legal links */}
        <div className="border-t border-white/10 py-6 flex flex-wrap gap-x-6 gap-y-2">
          {["Privacy Policy", "Terms of Service", "Data Protection", "Accessibility Statement"].map((l) => (
            <a key={l} href="#" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              {l}
            </a>
          ))}
          <span className="text-white/30 text-xs ml-auto">
            © 2026 ACE Cardiometabolic LLC
          </span>
        </div>

        {/* Medical disclaimer */}
        <div
          id="preprint-disclaimer"
          className="border-t border-white/10 pt-6 space-y-3"
        >
          <p className="text-white/50 text-xs leading-relaxed">
            <strong className="text-white/70">Medical disclaimer:</strong> ACE HeartAge is a
            clinical lifestyle and care-coordination program. It does not replace emergency
            medical care. If you are experiencing chest pain, shortness of breath, or other
            cardiac emergency symptoms,{" "}
            <strong className="text-[#E63946]">call 911</strong>.
          </p>
          <p className="text-white/30 text-xs italic leading-relaxed">
            *Outcome figures shown on this site are derived from a peer-review-pending preprint
            study of a Stage B/C heart failure cohort. Individual results vary.
          </p>
        </div>
      </div>
    </footer>
  );
}
