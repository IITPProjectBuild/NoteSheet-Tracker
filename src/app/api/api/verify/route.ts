import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { otp, email } = await request.json();

  // Retrieve OTP from in-memory store
  const storedOtp = (globalThis as any).otpStore?.[email];

  if (storedOtp && storedOtp === otp) {
    // Clear OTP after verification
    delete (globalThis as any).otpStore[email];
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, message: 'Invalid OTP' });
  }
}
