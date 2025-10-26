import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO = process.env.CONTACT_TO || 'smoverslogistics@gmail.com';
// Use Resend onboarding sender by default so sending works before domain verification
const CONTACT_FROM = process.env.CONTACT_FROM || 'Acme <onboarding@resend.dev>';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailSubject = `New contact from ${name}`;
    const emailText = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\nTimestamp: ${new Date().toISOString()}`;
    const emailHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 12px">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0">${message}</pre>
        <p style="margin-top:16px;color:#64748b">Timestamp: ${new Date().toISOString()}</p>
      </div>
    `;

    // Attempt to send via Resend if configured
    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY);
      try {
        const result = await resend.emails.send({
          from: CONTACT_FROM,
          to: CONTACT_TO,
          replyTo: email, // route replies to the sender
          subject: emailSubject,
          text: emailText,
          html: emailHtml,
        });

        if (result && 'error' in result && result.error) {
          throw new Error(result.error.message || 'Unknown email send error');
        }

        return NextResponse.json(
          { message: 'Thank you! Your message has been sent successfully.' },
          { status: 200 }
        );
      } catch (sendErr) {
        console.error('Resend send error:', sendErr);
        return NextResponse.json(
          { error: 'Unable to send email. Please verify email settings or try again later.' },
          { status: 502 }
        );
      }
    }

    // Fallback: log the email content and return success
    console.log('Contact form submission (no email provider configured):', { name, email, message });
    console.log(`[Email Fallback] To: ${CONTACT_TO}\nFrom: ${CONTACT_FROM}\nReply-To: ${email}\nSubject: ${emailSubject}\n\n${emailText}`);

    return NextResponse.json(
      { message: 'Message received successfully. We will contact you soon!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}