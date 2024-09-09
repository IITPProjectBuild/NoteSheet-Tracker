import React, { useEffect } from 'react';
import { useState } from 'react';
import { Data } from '../../../public/Data'; // Ensure this path is correct
import { Notesdisplay } from './Notesdisplay';
import { Calistoga } from 'next/font/google';

export const Notesheetscompile1 = () => {
    const [email, setEmail] = useState(() => {
        const storedUserInfo = localStorage.getItem('userInfo');
        return storedUserInfo ? JSON.parse(storedUserInfo).email : '';
    });

    interface PendingItem {
        _id: string;
        title: string;
        userId: string;
        timespan: string;
    }
    const [pendings, setPendings] = useState<PendingItem[]>([]);

    useEffect(() => {
        if (email) {
            console.log(email);
            getPendingSheets(email);
        }
    }, [email]);

    const getPendingSheets = async (e: any) => {
        // console.log(JSON.stringify({ email: e }));
        let response = await fetch('http://localhost:3000/pendingsheets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: e }),
        });
        let result = await response.json();
        let arr = Array.isArray(result) ? result : [result];
        setPendings(arr);
        console.log(pendings);
    };

    return (
        <>
            <div className="w-full h-full border-2 p-4">
                {/* Header or any fixed content */}
                <div className="w-full flex items-center justify-between rounded-lg border-2 p-4 my-4 hover:bg-gray-200">
                    <h2 className="text-lg font-bold cursor-pointer">Title</h2>
                    <p className="text-lg font-bold cursor-pointer">Date</p>
                    <p className="text-lg font-bold cursor-pointer">Club</p>
                </div>

                {/* Scrollable container */}
                <div className="h-[400px] overflow-y-auto">
                    {pendings.map((item: PendingItem) => (
                        <Notesdisplay
                            key={item._id} // Use a unique key for each item
                            prop={item} // Pass the current item as prop
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
