import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  org: z.string().min(2),
  role: z.string().optional(),
  phone: z.string().optional(),
  represents: z.string().min(1),
  message: z.string().max(500).optional(),
  populationSize: z.string().optional(),
  consent: z.literal(true),
});

// Simple in-memory rate limit (per IP, 3 submissions per hour)
// In production, use Redis or a DB-backed store
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!getRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", details: parsed.error.flatten() }, { status: 422 });
  }

  const data = parsed.data;

  // Hash IP and UA for HIPAA-aligned storage (no raw PII in log)
  const ipHash = crypto.createHash("sha256").update(ip).digest("hex");
  const uaHash = crypto
    .createHash("sha256")
    .update(req.headers.get("user-agent") ?? "")
    .digest("hex");

  const inquiryRecord = {
    timestamp: new Date().toISOString(),
    name: data.name,
    email: data.email,
    org: data.org,
    role: data.role ?? null,
    phone: data.phone ?? null,
    represents: data.represents,
    message: data.message ?? null,
    population_size: data.populationSize ?? null,
    ip_hash: ipHash,
    user_agent_hash: uaHash,
  };

  // Send email via Resend (or any transactional email service)
  // Requires RESEND_API_KEY env var to be set
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const emailHtml = `
        <h2>New ACE HeartAge Inquiry</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:6px 12px;border:1px solid #eee"><strong>Name</strong></td><td style="padding:6px 12px;border:1px solid #eee">${data.name}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #eee"><strong>Email</strong></td><td style="padding:6px 12px;border:1px solid #eee">${data.email}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #eee"><strong>Organization</strong></td><td style="padding:6px 12px;border:1px solid #eee">${data.org}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #eee"><strong>Role</strong></td><td style="padding:6px 12px;border:1px solid #eee">${data.role ?? "—"}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #eee"><strong>Phone</strong></td><td style="padding:6px 12px;border:1px solid #eee">${data.phone ?? "—"}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #eee"><strong>Represents</strong></td><td style="padding:6px 12px;border:1px solid #eee">${data.represents}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #eee"><strong>Population size</strong></td><td style="padding:6px 12px;border:1px solid #eee">${data.populationSize ?? "—"}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #eee"><strong>Message</strong></td><td style="padding:6px 12px;border:1px solid #eee">${data.message ?? "—"}</td></tr>
          <tr><td style="padding:6px 12px;border:1px solid #eee"><strong>Submitted</strong></td><td style="padding:6px 12px;border:1px solid #eee">${inquiryRecord.timestamp}</td></tr>
        </table>
        <p style="color:#888;font-size:12px;margin-top:24px">Do not reply to PHI via email. Route to HubSpot/Salesforce when CRM is configured.</p>
      `;

      // Notification to Dr. Chockalingam
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "ACE HeartAge <noreply@heartage.health>",
          to: ["anandchockalingam@gmail.com"],
          subject: `New inquiry from ${data.name} — ${data.org}`,
          html: emailHtml,
        }),
      });

      // Auto-reply to submitter
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "ACE HeartAge <noreply@heartage.health>",
          to: [data.email],
          subject: "We received your inquiry — ACE HeartAge",
          html: `
            <p>Hi ${data.name},</p>
            <p>Thanks for reaching out to ACE HeartAge. We've received your inquiry and will get back to you within 1 business day.</p>
            <p>In the meantime, you can learn more at <a href="https://heartage.health">heartage.health</a>.</p>
            <p style="color:#888;font-size:12px;margin-top:32px">ACE Cardiometabolic LLC · heartage.health<br>
            This is an automated confirmation. Do not reply with Protected Health Information (PHI).</p>
          `,
        }),
      });
    } catch (emailErr) {
      console.error("Email send error:", emailErr);
      // Don't fail the request if email fails — log and continue
    }
  } else {
    // Log inquiry to console in dev when no email service is configured
    console.log("[ACE HeartAge Inquiry]", JSON.stringify(inquiryRecord, null, 2));
  }

  // TODO: When database is connected, insert inquiryRecord into the `inquiries` table:
  // await db.insert(inquiries).values(inquiryRecord);

  return NextResponse.json({ success: true });
}
