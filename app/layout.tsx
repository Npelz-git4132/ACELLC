import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ACE HeartAge — Reverse Your Population's Heart Age | Cardiometabolic Program for Health Systems & Payers",
  description:
    "Clinician-led program that lowers blood pressure, weight, A1C, and lipids across member populations. For health systems, health plans, employers, and referring clinicians. Founded at Vandalia Health / CAMC.",
  metadataBase: new URL("https://heartage.health"),
  openGraph: {
    title: "ACE HeartAge — Reverse Your Population's Heart Age",
    description:
      "A clinician-led cardiometabolic reversal program health systems, payers, and employers can deploy at scale.",
    url: "https://heartage.health",
    siteName: "ACE HeartAge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACE HeartAge — Reverse Your Population's Heart Age",
    description:
      "A clinician-led cardiometabolic reversal program health systems, payers, and employers can deploy at scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF7] text-[#264653]">
        {children}
      </body>
    </html>
  );
}
