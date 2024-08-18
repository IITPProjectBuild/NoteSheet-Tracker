import React from 'react';
import { Data } from '../../../public/Data'; // Ensure this path is correct
import { Notesdisplay } from './Notesdisplay';

export const Notesheetscompile1 = () => {
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
                    {Data.map((item, index) => (
                        <Notesdisplay
                            key={index} // Use a unique key for each item
                            prop={item} // Pass the current item as prop
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
