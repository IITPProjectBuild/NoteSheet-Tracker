import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',  // or another email service provider
  auth: {
    user: process.env.EMAIL_USER,  // Your email address
    pass: process.env.EMAIL_PASS,  // Your email password or app password
  },
});

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();  // Generate a 6-digit OTP

const sendOtpToEmail = async (email: string, otp: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  });
};

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Perform your authentication logic here
  if (email === 'user@example.com' && password === 'password') {
    const otp = generateOtp();
    await sendOtpToEmail(email, otp);  // Send OTP to the user's email

    // Store OTP in memory or use a database for production
    // Ideally, use a database for production environments
    (globalThis as any).otpStore = { [email]: otp };  // Simple in-memory storage

    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, message: 'Invalid email or password' });
  }
}
