import React from 'react';

export const Notesdisplay = ({ prop }) => {
    // Ensure that `prop` is an object with the necessary data
    if (!prop) {
        return <div>No data available</div>;
    }

    return (
        <>
            <div className="w-full flex items-center justify-between rounded-lg border-2 p-4 my-4 hover:bg-gray-200">
                <h2 className="text-lg ">{prop.Title}</h2>
                <p className="text-lg ">{prop.date}</p>
                <p className="text-lg ">{prop.club}</p>
            </div>
        </>
    );
};
