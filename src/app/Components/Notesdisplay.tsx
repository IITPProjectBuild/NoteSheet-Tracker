'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Notesdisplay = ({ prop }) => {
    const router = useRouter();

    const handleNavigation = () => {
        const query = new URLSearchParams(prop).toString();
        window.open(`/Pdfdisplay?${query}`, '_blank');
    };

    // Ensure that `prop` is an object with the necessary data
    if (!prop) {
        return <div>No data available</div>;
    }

    return (
        <>
            <div className="w-full flex items-center justify-between rounded-lg border-2 p-4 my-4 hover:bg-gray-200" onClick={handleNavigation}>
                {/* <Link href={{pathname: "Pdfdisplay", query: prop}} target='_blank'> */}
                    <h2 className="text-lg ">{prop.title}</h2>
                    <p className="text-lg ">{prop.timestamp}</p>
                    <p className="text-lg ">{prop.club}</p>
                {/* </Link> */}
            </div>
        </>
    );
};
