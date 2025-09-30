import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure Nodemailer with cPanel SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.CPANEL_SMTP_HOST || 'mail.fivewellafrica.org', // Your cPanel mail server
  port: parseInt(process.env.CPANEL_SMTP_PORT || '465'), // 465 for SSL, 587 for TLS
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.CPANEL_EMAIL || 'noreply@fivewellafrica.org',
    pass: process.env.CPANEL_EMAIL_PASSWORD,
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
});

interface PartnerFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

// Email template for the confirmation email to the user
const createUserEmailTemplate = (data: PartnerFormData) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; border: 1px solid #e2e8f0; border-radius: 8px;">
    <div style="background-color: #10b981; padding: 20px; border-radius: 8px 8px 0 0; color: white;">
      <h1 style="margin: 0; font-size: 24px;">Thank You for Your Interest in Partnering with FiveWell Africa</h1>
    </div>
    <div style="padding: 20px; background-color: #f8fafc;">
      <p>Dear ${data.name},</p>
      <p>Thank you for your interest in partnering with FiveWell Africa. We have received your request and will review it shortly. We will get back to you as soon as possible.</p>
      
      <div style="background-color: white; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #10b981;">
        <p><strong>Organization:</strong> ${data.organization}</p>
        <p style="margin: 0; font-style: italic;">"${data.message}"</p>
      </div>
      
      <p>If you have any further questions, feel free to reply to this email or contact us at info@fivewellafrica.org.</p>
      
      <p>Best regards,<br>The FiveWell Africa Team</p>
    </div>
    <div style="text-align: center; padding: 15px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
      <p>© ${new Date().getFullYear()} FiveWell Africa. All rights reserved.</p>
    </div>
  </div>
`;

// Email template for the notification email to the admin
const createAdminEmailTemplate = (data: PartnerFormData) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <h2 style="color: #10b981;">New Partnership Request</h2>
    
    <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin: 15px 0; border-left: 4px solid #10b981;">
      <p><strong>From:</strong> ${data.name} &lt;${data.email}&gt;</p>
      <p><strong>Organization:</strong> ${data.organization}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line; background: white; padding: 10px; border-radius: 4px; border: 1px solid #e2e8f0;">${data.message}</p>
    </div>
    
    <p>This message was sent via the FiveWell Africa partnership request form.</p>
    <p>Time: ${new Date().toLocaleString()}</p>
  </div>
`;

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.organization || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to user
    await transporter.sendMail({
      from: `"FiveWell Africa" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: 'Thank You for Your Interest in Partnering with FiveWell Africa',
      html: createUserEmailTemplate(data),
    });

    // Send notification to admin
    await transporter.sendMail({
      from: `"FiveWell Africa Partnership Form" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || 'info@fivewellafrica.org',
      subject: `New Partnership Request from ${data.organization}`,
      html: createAdminEmailTemplate(data),
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
