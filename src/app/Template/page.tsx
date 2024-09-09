'use client';
import React from 'react';
import { Sidebar } from '../Components/Sidebar';
import { Navbar } from '../Components/Navbar';
import { Templatechoose } from '../Components/Templatechoose';

export default function page() {
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-gray-100">
                {/* Sidebar */}
                <div className="lg:w-1/4 sm:w-full lg:h-screen h-auto ">
                    <Sidebar />
                </div>

                {/* Main content area */}
                <div className="flex flex-col w-full lg:w-3/4">
                    {/* Navbar */}
                    <div className="w-full p-4 h-1/10 border-2 bg-white mb-4 shadow-2xl rounded-xl">
                        <div>
                            <Navbar />
                        </div>
                    </div>
                    <div className="h-4/5 w-9/10 bg-white my-4 mx-4">
                        <Templatechoose />
                    </div>
                </div>
            </div>
        </>
    );
}
