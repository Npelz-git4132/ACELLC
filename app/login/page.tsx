"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // TODO: Connect to Clerk or Auth0 authentication provider
    // For now, show a placeholder message
    setError("Login is not yet active. Please contact your care team or submit an inquiry.");
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <Heart className="w-8 h-8 text-[#E63946] fill-[#E63946]" aria-hidden="true" />
            <span className="font-bold text-[#0B3D5C] text-xl">ACE HeartAge</span>
          </Link>
          <h1
            className="text-2xl font-bold text-[#0B3D5C]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Sign in to your account
          </h1>
          <p className="text-[#264653]/60 text-sm">
            For members and care team members only.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
          {error && (
            <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#264653] mb-1.5"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C] transition-shadow"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm font-semibold text-[#264653]">
                  Password
                </label>
                <a href="#" className="text-xs text-[#E63946] hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D5C] transition-shadow"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0B3D5C] hover:bg-[#0a3250] text-white font-bold py-3 rounded-xl transition-colors"
            >
              Log In →
            </button>
          </form>

          {/* SSO placeholder */}
          <div className="border-t border-gray-100 pt-4 text-center">
            <p className="text-xs text-[#264653]/40">
              SSO / SAML available for health system partners.{" "}
              <a href="/#partner" className="underline hover:text-[#0B3D5C]">
                Contact us to configure.
              </a>
            </p>
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-[#264653]/50">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#E63946] font-semibold hover:underline">
              Create My Account
            </Link>{" "}
            (invitation required)
          </p>
          <Link href="/" className="block text-xs text-[#264653]/40 hover:text-[#264653]/70">
            ← Back to heartage.health
          </Link>
        </div>
      </div>
    </div>
  );
}
