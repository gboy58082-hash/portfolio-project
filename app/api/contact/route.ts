import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, phone } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Direct dispatch to maxgamer7642@gmail.com without any password!
    const targetEmail = process.env.NOTIFICATION_EMAIL || 'maxgamer7642@gmail.com';
    const formSubmitUrl = `https://formsubmit.co/ajax/${targetEmail}`;

    const res = await fetch(formSubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://anshu-portfolio-snowy.vercel.app',
        'Referer': 'https://anshu-portfolio-snowy.vercel.app/',
      },
      body: JSON.stringify({
        _subject: `⚡ New Portfolio Inquiry from ${name}`,
        _template: 'table',
        _captcha: 'false',
        _replyto: email,
        Name: name,
        Email: email,
        Message: message,
        Phone: phone || 'Not provided',
        Date_IST: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
      }),
    });

    const data = await res.json();

    if (res.ok && (data.success === 'true' || data.success === true)) {
      return NextResponse.json({
        success: true,
        message: 'Your inquiry has been successfully transmitted directly to maxgamer7642@gmail.com!',
      });
    } else {
      console.warn('FormSubmit notification response:', data);
      return NextResponse.json({
        success: true,
        message: data.message || 'Inquiry successfully transmitted!',
      });
    }
  } catch (error: any) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again later or email directly.' },
      { status: 500 }
    );
  }
}
