import React from 'react';
import { MdHome } from 'react-icons/md';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaBookOpen } from 'react-icons/fa6';
import Link from 'next/link';

export const Sidebar = () => {
    return (
        <>
            <div className="w-48 h-screen bg-blue-900 pt-5 flex flex-col items-center justify-center">
                <ul className="text-white font-bold text-lg cursor-pointer">
                    <li className="mt-2 flex items-center hover:bg-sky-950">
                        <span className="mr-2">
                            <MdHome />
                        </span>
                        HOME
                    </li>
                    <Link href="Notetemplate">
                        {' '}
                        <li className="mt-2 flex items-center hover:bg-sky-950">
                            <span className="mr-2">
                                <FaCirclePlus />
                            </span>
                            NEW
                        </li>
                    </Link>
                    <li className="mt-2 flex items-center hover:bg-sky-950">
                        <span className="mr-2">
                            <FaBookOpen />
                        </span>
                        OPEN
                    </li>
                </ul>
            </div>
        </>
    );
};
