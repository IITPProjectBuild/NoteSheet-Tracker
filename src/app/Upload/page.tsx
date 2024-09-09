import React from 'react';
import { FileUpload } from '../Components/Upload';
import { Sidebar } from '../Components/Sidebar';
import { Navbar } from '../Components/Navbar';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
export default function page() {
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-gray-100 overflow-hidden">
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

                    {/* Tabstyle */}
                    <div className="flex flex-col justify-center items-center sm:w-full lg:w-full z-10  lg:h-3/4 overflow-y-auto">
                        <span>
                            <FileUpload />
                        </span>
                        <span className="my-8 text-gray-500 font-bold">Enter Comments if any</span>
                        <span>
                            <TextareaAutosize />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
