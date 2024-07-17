// app/verify/page.tsx

'use client';
import Link from 'next/link';
import { useState } from 'react';
import { redirect } from 'next/navigation';

export default function Verify() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleVerify = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const email = localStorage.getItem('email');  // Retrieve the email from local storage

    if (!email) {
      setError('No email found. Please log in again.');
      return;
    }

    const res = await fetch('/api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ otp, email }),  // Include the email in the request
    });

    const data = await res.json();

    if (data.success) {
      redirect('/home');  // Redirect to the home page
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4 text-center">Verify Your OTP</h1>
        <form onSubmit={handleVerify} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter the OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
           <Link href="homepage">Verify OTP</Link> 
          </button>
        </form>
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
}
