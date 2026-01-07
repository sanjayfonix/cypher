export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'
import { recepientEmailForBookingSession } from "../../../../global_cyphr_config";

const RECIPIENT_EMAIL = recepientEmailForBookingSession;
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      countryCode,
      organizationName,
      professionalRole,
      sessionType,
      preferredDateTime,
      message,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email subject
    const emailSubject = `New CE/CLE Booking Request from ${firstName} ${lastName}`;

    // Email body
    const emailBody = `
New Booking Request Received

Personal Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phoneNumber || "Not provided"}

Professional Information:
- Organization: ${organizationName || "Not provided"}
- Role: ${professionalRole || "Not provided"}

Session Details:
- Session Type: ${sessionType || "Not specified"}
- Preferred Date & Time: ${preferredDateTime || "Not specified"}

Message:
${message}

---
This email was sent from the Cyphr booking form.
`.trim();

    // SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_EMAIL_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Cyphr Booking" <${process.env.SMTP_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
      html: `<pre style="font-family: Arial, sans-serif">${emailBody}</pre>`,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking request submitted successfully! We'll contact you soon.",
        sendTo: RECIPIENT_EMAIL,
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("SMTP Email Error:", error);

    return NextResponse.json(
      {
        error: "Failed to submit booking request. Please try again later.",
        details:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,
      },
      { status: 500 }
    );
  }
}
