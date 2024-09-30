import React from 'react';

const Approved = ({ prop }) => {
  return (
    <div
      className={`w-48 h-24 m-12 flex justify-center items-center font-bold text-white rounded-lg cursor-pointer hover:font-black ${
        prop === 'Approved' ? 'bg-green-500' : 'bg-red-500'
      }   ${
        prop === 'Approved' ? 'hover:bg-green-700' : 'hover:bg-red-700'
      }`}
    >
      {prop}
    </div>
  );
};

export default Approved;