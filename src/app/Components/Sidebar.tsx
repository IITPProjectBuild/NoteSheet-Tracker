'use client';
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { FaGear } from 'react-icons/fa6';
import { FileUpload } from './Upload';
import { FaHome } from 'react-icons/fa';
import { FaSheetPlastic } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { FaUpload } from 'react-icons/fa';

export const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <div className="w-96 h-screen pt-5 flex flex-col bg-white items-center justify-start border-2 ">
                <div className="w-full flex justify-center mb-4">
                    <img src="/iitp logo.png" alt="Sidebar Logo" className="w-28 h-28 " />
                </div>

                {/* Sidebar content */}
                <ul className="font-bold text-lg cursor-pointer h-3/4 flex flex-col text-gray-500 items-center justify-evenly w-full">
                    <Link
                        href="HomePage"
                        className="hover:border-l-4 w-full border-blue-600 flex items-center justify-center h-12 radius-lg hover:shadow-xl"
                    >
                        <li
                            className="mt-2 flex items-center justify-center hover:shadow-xl hover:text-blue-700  w-full h-12 radius-lg border-blue-600"
                            onClick={handleOpen}
                        >
                            <span className="mr-2">
                                <FaHome />
                            </span>
                            DASHBOARD
                        </li>
                    </Link>

                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <li
                        className="mt-2 flex justify-center items-center hover:shadow-xl hover:text-blue-700 hover:border-l-4 w-full  h-12 radius-lg border-blue-600"
                        onClick={handleOpen}
                    >
                        <span className="mr-2">
                            <FaSheetPlastic />
                        </span>
                        MY NOTESHEET
                    </li>
                    <Link
                        className="hover:border-l-4 w-full border-blue-600 flex items-center justify-center h-12 radius-lg hover:shadow-xl"
                        href="Template"
                    >
                        <li className="mt-2 flex items-center  hover:text-blue-700 " onClick={handleOpen}>
                            <span className="mr-2">
                                <FaPlus />
                            </span>
                            NEW NOTESHEET
                        </li>
                    </Link>
<Link href="Upload"><li className="mt-2 flex items-center hover:shadow-xl hover:text-blue-700 hover:border-l-4 w-full justify-center radius-lg border-blue-600">
                        <span className="mr-2" onClick={handleOpen}>
                            <FaUpload />
                        </span>
                        UPLOAD NOTESHEET
                    </li></Link>
                    
                    <li className="mt-2 flex items-center hover:shadow-xl hover:text-blue-700 hover:border-l-4 w-full justify-center h-12 radius-lg border-blue-600">
                        <span className="mr-2" onClick={handleOpen}>
                            <FaGear />
                        </span>
                        SETTINGS
                    </li>
                </ul>
            </div>
        </>
    );
};
