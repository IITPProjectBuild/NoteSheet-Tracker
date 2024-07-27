import React from 'react';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { useContext } from 'react';
import { token } from '../context/context';

export const Pending = () => {
    const email = useContext(token);
    return (
        <>
            <div className="bg-blue-100 w-2/3 h-[80vh] overflow-y-auto ml-3.5 border border-black">
                <ul className="flex flex-col h-full">
                    <li className="py-2 px-4 border-b border-black bg-blue-100 hover:bg-gray-200">
                        <div className="flex justify-between items-center">
                            <span>111111111111111111111111111111111</span>
                            <div className="flex space-x-2 ml-auto">
                                <span>
                                    <IoCloudDownloadOutline className="cursor-pointer hover:font-bold text-lg" />
                                </span>
                                <span className="hover:font-bold text-lg">
                                    <FaRegTrashAlt className="cursor-pointer hover:font-bold text-lg" />
                                </span>
                                <span className="hover:font-bold text-lg">
                                    <TiTick className="cursor-pointer hover:font-bold text-lg" />
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};
