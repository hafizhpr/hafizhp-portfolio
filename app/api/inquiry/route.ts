import { NextResponse } from "next/server";
import db from "@/lib/db";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, project_type, timeline, description } = body;

    if (!name || !email || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    db.prepare(`
      INSERT INTO inquiries (name, company, email, phone, project_type, timeline, description)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      name,
      company || null,
      email,
      phone || null,
      project_type || null,
      timeline || null,
      description
    );

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Portfolio Inquiry <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL ?? "hafizhp@icloud.com",
      subject: `New Project Inquiry — ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1e293b;">
          <h2 style="color: #0891b2; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
            New Project Inquiry
          </h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding:6px 0; color:#64748b; width:140px;">Name</td><td style="padding:6px 0; font-weight:600;">${name}</td></tr>
            <tr><td style="padding:6px 0; color:#64748b;">Company</td><td style="padding:6px 0;">${company || "—"}</td></tr>
            <tr><td style="padding:6px 0; color:#64748b;">Email</td><td style="padding:6px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:6px 0; color:#64748b;">Phone</td><td style="padding:6px 0;">${phone || "—"}</td></tr>
            <tr><td style="padding:6px 0; color:#64748b;">Project Type</td><td style="padding:6px 0;">${project_type || "—"}</td></tr>
            <tr><td style="padding:6px 0; color:#64748b;">Timeline</td><td style="padding:6px 0;">${timeline || "—"}</td></tr>
          </table>
          <h3 style="margin-top: 20px; color: #334155;">Project Requirements</h3>
          <p style="background:#f8fafc; padding:16px; border-left:3px solid #0891b2; margin:0; white-space:pre-wrap;">${description}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Inquiry error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
