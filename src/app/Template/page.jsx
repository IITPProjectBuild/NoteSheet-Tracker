'use client';
import { Sidebar } from '../Component/Sidebar';
import Navbar from '../Component/Navbar';
import { Templategrid } from '../Component/Templategrid';
import { token } from '../context/context';
import { useState, useContext } from 'react';

export default function Home() {
    const [email, setEmail] = useState('arpitraj@gmail.com');
    return (
        <>
            <token.Provider value={email}>
                <Navbar />
                <div className="flex">
                    <Sidebar />
                    <Templategrid />
                </div>
            </token.Provider>
        </>
    );
}
