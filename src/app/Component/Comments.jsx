"use client"
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export const Comments = () => {
  const [comment, setComment] = useState('');

  const handleDelete = () => {
    setComment('');
  };

  return (
    <div className="p-6">
      <a href="#">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span><FaArrowRight /></span>
            <span className="hover:font-black text-lg ml-2 text-blue-900 font-bold text-xl">
              MY NOTESHEETS
            </span>
          </div>
        </div>
      </a>
      <div className="comments">
        <p className="text-lg mb-4">Comments</p>
        <input
          type="text"
          placeholder="Write your comments"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full h-20 border-2 border-black p-2"
        />
        {comment && (
          <button
            onClick={handleDelete}
            className="mt-2 mb-5 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded ml-48"
          >
            Delete 
          </button>
        )}
      </div>
    </div>
  );
};
