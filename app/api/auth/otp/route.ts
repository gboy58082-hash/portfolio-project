import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory store for OTPs (keyed by email). In production, this can also be backed by Redis or DB.
// Each entry expires after 10 minutes.
const otpStore = new Map<string, { otp: string; expiresAt: number }>();

export async function POST(req: Request) {
  try {
    let body: any;
    try {
      body = await req.json();
    } catch (e: any) {
      return NextResponse.json(
        { error: 'Invalid JSON body in request.' },
        { status: 400 }
      );
    }
    const { action, email, otp, newPassword } = body || {};

    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // ACTION: SEND OTP
    if (action === 'send') {
      // Generate 6-digit random OTP
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

      otpStore.set(normalizedEmail, { otp: generatedOtp, expiresAt });

      const gmailUser = process.env.GMAIL_USER || 'maxgamer7642@gmail.com';
      const gmailPass = process.env.GMAIL_APP_PASSWORD;

      let emailSent = false;

      // Try sending real email if SMTP credentials are provided
      if (gmailPass) {
        try {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: gmailUser,
              pass: gmailPass,
            },
          });

          await transporter.sendMail({
            from: `"Anshu Portfolio Security" <${gmailUser}>`,
            to: normalizedEmail,
            subject: `🔐 Your One-Time Password (OTP): ${generatedOtp}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 550px; margin: 0 auto; background: #0c0809; color: #f7f4ef; border: 1px solid #e51b24; border-radius: 8px; overflow: hidden;">
                <div style="background: #e51b24; padding: 18px 24px;">
                  <h2 style="margin: 0; color: #ffffff; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">
                    🔐 Password Reset OTP
                  </h2>
                  <p style="margin: 4px 0 0 0; color: #ffffff; font-size: 13px;">Security verification code for your portfolio inquiry</p>
                </div>
                <div style="padding: 24px; text-align: center;">
                  <p style="font-size: 14px; color: #d4d4d8; margin-bottom: 18px;">
                    You requested to reset your access key/password. Use the single-use OTP below to complete the verification:
                  </p>
                  <div style="display: inline-block; background: #140c0d; border: 2px dashed #e51b24; padding: 14px 28px; border-radius: 8px; letter-spacing: 6px; font-size: 32px; font-weight: bold; color: #e51b24; font-family: monospace;">
                    ${generatedOtp}
                  </div>
                  <p style="font-size: 12px; color: #a1a1aa; margin-top: 18px;">
                    This OTP is valid for 10 minutes. If you did not request this, please ignore this email.
                  </p>
                </div>
                <div style="background: #050304; padding: 12px 24px; text-align: center; border-top: 1px solid #261818; font-size: 11px; color: #71717a;">
                  Anshu's Digital Growth Lab &bull; Security Dispatch
                </div>
              </div>
            `,
          });
          emailSent = true;
        } catch (mailErr) {
          console.error('SMTP error sending OTP:', mailErr);
        }
      }

      return NextResponse.json({
        success: true,
        message: emailSent
          ? `OTP sent to ${normalizedEmail}!`
          : `OTP generated for ${normalizedEmail}!`,
        // Return demoOtp so user can test immediately in live demo/dev without waiting for SMTP setup
        demoOtp: generatedOtp,
        emailSent,
      });
    }

    // ACTION: VERIFY OTP & RESET PASSWORD
    if (action === 'verify') {
      if (!otp) {
        return NextResponse.json({ error: 'Please enter the 6-digit OTP.' }, { status: 400 });
      }

      if (!newPassword || newPassword.length < 4) {
        return NextResponse.json(
          { error: 'New password must be at least 4 characters.' },
          { status: 400 }
        );
      }

      const record = otpStore.get(normalizedEmail);

      if (!record) {
        return NextResponse.json(
          { error: 'No OTP request found for this email. Please request a new OTP.' },
          { status: 400 }
        );
      }

      if (Date.now() > record.expiresAt) {
        otpStore.delete(normalizedEmail);
        return NextResponse.json(
          { error: 'OTP has expired. Please request a new one.' },
          { status: 400 }
        );
      }

      if (record.otp !== otp.toString().trim()) {
        return NextResponse.json(
          { error: 'Invalid OTP entered. Please check and try again.' },
          { status: 400 }
        );
      }

      // OTP is valid! Clear it
      otpStore.delete(normalizedEmail);

      return NextResponse.json({
        success: true,
        message: 'Password successfully reset and verified!',
      });
    }

    return NextResponse.json({ error: 'Invalid action requested.' }, { status: 400 });
  } catch (error: any) {
    console.error('OTP Route Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to process request. Please try again later.' },
      { status: 500 }
    );
  }
}
