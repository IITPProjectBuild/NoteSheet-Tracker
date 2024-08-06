import React, { useEffect, useState } from 'react';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { useContext } from 'react';
import { token } from '../context/context';
import { connect } from 'http2';

export const Pending = () => {
    const email = useContext(token);

    const [pendings, setPendings] = useState({});

    const getPendingSheets = async (e: any) => {
        let response = await fetch('http://localhost:3000/pendingsheets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e),
        });
        let result = await response.text();
        console.log(result);
        setPendings(result);
    };

    return (
        <>
            {/* Fix this */}
            {Object.entries(pendings).map((item) => {
                return (
                    <div key={item} className="bg-blue-100 w-2/3 h-[80vh] overflow-y-auto ml-3.5 border border-black">
                        <ul className="flex flex-col h-full">
                            <li className="py-2 px-4 border-b border-black bg-blue-100 hover:bg-gray-200">
                                <div className="flex justify-between items-center">
                                    <span>{item}</span>
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
                );
            })}

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
