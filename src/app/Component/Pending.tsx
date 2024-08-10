import React, { use, useEffect, useState } from 'react';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { useContext } from 'react';
import { token } from '../context/context';
import { connect } from 'http2';
import { CgLogIn } from 'react-icons/cg';
import { json } from 'stream/consumers';

export const Pending = () => {
    interface PendingItem {
        _id: string;
        title: string;
        userId: string;
        timespan: string;
    }
    const email = useContext(token);
    const [pendings, setPendings] = useState<PendingItem[]>([]);

    useEffect(() => {
        if (email) {
            getPendingSheets(email);
        }
    }, [email]);

    const getPendingSheets = async (e: any) => {
        console.log(JSON.stringify({ email: e }));
        let response = await fetch('http://localhost:3000/pendingsheets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: e }),
        });
        let result = await response.json();
        console.log(result);
        let arr = Array.isArray(result) ? result : [result];
        console.log(arr);
        setPendings(arr);
    };

    return (
        <>
            {pendings.map((item: PendingItem) => {
                return (
                    <>
                        <div key={item._id} className="bg-blue-100 w-2/3 overflow-y-auto ml-3.5 border border-black">
                            <div className="flex justify-between items-center">
                                {item.title}
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
                        </div>
                    </>
                );
            })}
        </>
    );
};
