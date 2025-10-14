import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testEmail() {
  // Create a test account (only needed for testing with ethereal.email)
  // let testAccount = await nodemailer.createTestAccount();

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.CPANEL_SMTP_HOST,
    port: parseInt(process.env.CPANEL_SMTP_PORT || '465'),
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.CPANEL_EMAIL,
      pass: process.env.CPANEL_EMAIL_PASSWORD,
    },
    tls: {
      // Do not fail on invalid certs
      rejectUnauthorized: false
    }
  });

  // Send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Test Sender" <${process.env.CPANEL_EMAIL}>`,
    to: process.env.ADMIN_EMAIL, // Send to admin email from .env
    subject: 'SMTP Test Email',
    text: 'This is a test email to verify SMTP configuration',
    html: '<b>This is a test email to verify SMTP configuration</b>',
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

testEmail().catch(console.error);
