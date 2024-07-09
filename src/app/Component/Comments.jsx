import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export const Comments = () => {
  return (
    <div className="p-6">
      <a href="#"> <div className="flex justify-between items-center">
               
      <div className="flex items-center">
  <span><FaArrowRight/></span>
  <span className="hover:font-bold text-lg ml-2 hover:font-black text-blue-900 ">MY NOTESHEETS</span>
</div>
            </div></a>
      <div className="comments">
        <p className="text-lg mb-2">Comments</p>
        <input 
          type="text" 
          placeholder="Write your comments" 
          className="w-full h-24 border-2 border-black p-2"
        />
      </div>
    </div>


  )
}
