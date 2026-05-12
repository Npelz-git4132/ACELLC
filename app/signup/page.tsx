"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Suspense } from "react";

function SignupContent() {
  const params = useSearchParams();
  const token = params.get("token");
  const hasToken = Boolean(token && token.length > 8);

  if (!hasToken) {
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-3xl">
          🔒
        </div>
        <div className="space-y-2">
          <h2
            className="text-2xl font-bold text-[#0B3D5C]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Invitation required
          </h2>
          <p className="text-[#264653]/70 leading-relaxed max-w-sm mx-auto">
            ACE HeartAge is a clinician-referred program. An invitation is required to create
            an account. Please contact your care team or submit an inquiry below.
          </p>
        </div>
        <div className="space-y-3">
          <a
            href="/#partner"
            className="block bg-[#E63946] hover:bg-[#c52e3a] text-white font-bold px-6 py-3 rounded-xl transition-colors"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "signup_token_invalid");
              }
            }}
          >
            Submit an Inquiry →
          </a>
          <Link
            href="/login"
            className="block text-[#0B3D5C] font-semibold text-sm hover:underline"
          >
            Already have an account? Log In
          </Link>
        </div>
      </div>
    );
  }

  // Valid token — show account creation form
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-[#2A9D8F]/10 rounded-full flex items-center justify-center mx-auto text-2xl">✓</div>
        <h2
          className="text-2xl font-bold text-[#0B3D5C]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Create your account
        </h2>
        <p className="text-[#264653]/60 text-sm">Invitation verified. Set up your account below.</p>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "signup_token_valid");
          }
          // TODO: Connect to Clerk/Auth0 signup with invitation token
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#264653] mb-1.5">First name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#264653] mb-1.5">Last name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C]"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#264653] mb-1.5">Email address</label>
          <input
            type="email"
            required
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#264653] mb-1.5">Password</label>
          <input
            type="password"
            required
            minLength={8}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C]"
          />
        </div>
        <input type="hidden" name="token" value={token ?? ""} />
        <button
          type="submit"
          className="w-full bg-[#2A9D8F] hover:bg-[#238a7d] text-white font-bold py-3 rounded-xl transition-colors"
        >
          Create My Account →
        </button>
      </form>
    </div>
  );
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <Heart className="w-8 h-8 text-[#E63946] fill-[#E63946]" aria-hidden="true" />
            <span className="font-bold text-[#0B3D5C] text-xl">ACE HeartAge</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <Suspense fallback={<div className="text-center text-[#264653]/50">Loading…</div>}>
            <SignupContent />
          </Suspense>
        </div>

        <div className="text-center">
          <Link href="/" className="text-xs text-[#264653]/40 hover:text-[#264653]/70">
            ← Back to heartage.health
          </Link>
        </div>
      </div>
    </div>
  );
}
