import { NextRequest, NextResponse } from 'next/server';

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

    // For now, we'll return success and log the data
    // You can integrate with email services like SendGrid, Mailgun, or Resend later
    console.log('Contact form submission:', { name, email, message });

    // Create a simple email body for manual sending
    const emailBody = `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Message: ${message}

Timestamp: ${new Date().toISOString()}
    `;

    console.log('Email content for smoverslogistics@gmail.com:', emailBody);

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