// app/login/page.tsx

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        // Perform the login request
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (data.success) {
            localStorage.setItem('email', email); // Store the email in local storage
            redirect('/verify'); // Redirect to the OTP verification page
        } else {
            setError(data.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex items-center justify-between mb-6">
                    <div className="text-left">
                        <h1 className="text-2xl font-semibold mb-2">Sign In</h1>
                        <p className="text-gray-600">Use your Outlook account.</p>
                    </div>
                    <div className="ml-4">
                        <Image src="/iitp logo.png" alt="IIT Logo" width={60} height={60} />
                    </div>
                </div>
                <form onSubmit={handleLogin} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                    <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        <Link href="verify">Submit</Link>
                    </button>
                </form>
                {error && <p className="text-red-600 mt-4">{error}</p>}
                <div className="mt-4 text-center">
                    <p className="text-gray-600">
                        No account?{' '}
                        <a href="https://signup.live.com/" className="text-blue-600 hover:underline">
                            Create one!
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
