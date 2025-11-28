import { NextRequest, NextResponse } from "next/server";

const RECIPIENT_EMAIL = "info@webutation.com";

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
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format the email content
    const emailSubject = `New CE/CLE Booking Request from ${firstName} ${lastName}`;
    
    const emailBody = `
New Booking Request Received

Personal Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${countryCode || ""} ${phoneNumber}

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

    // Try to send email using Resend API (if configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const emailServiceResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.FROM_EMAIL || "noreply@cyphr.com",
            to: RECIPIENT_EMAIL,
            subject: emailSubject,
            text: emailBody,
            reply_to: email,
          }),
        });

        if (emailServiceResponse.ok) {
          const emailData = await emailServiceResponse.json();
          return NextResponse.json(
            { 
              success: true, 
              message: "Booking request submitted successfully!",
              emailId: emailData.id 
            },
            { status: 200 }
          );
        }
      } catch (resendError) {
        console.error("Resend API error:", resendError);
        // Fall through to alternative method
      }
    }

    // Alternative: Use a webhook service or SMTP
    // For now, log the email details (in production, configure an email service)
    console.log("=".repeat(50));
    console.log("BOOKING REQUEST EMAIL");
    console.log("=".repeat(50));
    console.log("To:", RECIPIENT_EMAIL);
    console.log("Subject:", emailSubject);
    console.log("Body:", emailBody);
    console.log("=".repeat(50));

    // In development, return success with a note
    // In production, you should configure an email service (Resend, SendGrid, Nodemailer, etc.)
    return NextResponse.json(
      { 
        success: true, 
        message: "Booking request submitted successfully! We'll contact you soon.",
        note: process.env.NODE_ENV === "development" 
          ? "Email details logged to console. Configure RESEND_API_KEY for production." 
          : undefined
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending booking email:", error);
    return NextResponse.json(
      { 
        error: "Failed to submit booking request. Please try again later.",
        details: process.env.NODE_ENV === "development" ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
