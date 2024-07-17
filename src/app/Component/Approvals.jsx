"use client"
import React, { useState } from 'react';

export const Approvals = () => {
  const [approval, setApproval] = useState('');

  const handleApproval = (value) => {
    setApproval(value);
    console.log(value); // This will log the value to the console
  };

  return (
    <div className="p-6">
      <div className="Approved">
        <p className="text-lg mb-2">Approved</p>
        <div className='flex w-full justify-around'>
          <button 
            className='bg-green-600 hover:bg-green-800 w-48 text-white' 
            onClick={() => handleApproval('Yes')}
          >
            Yes
          </button>
          <button 
            className='bg-red-500 hover:bg-red-700 w-48 text-white' 
            onClick={() => handleApproval('No')}
          >
            No
          </button>
        </div>
        
      </div>
    </div>
  );
};
