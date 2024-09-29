'use client'

import React from 'react'
import PdfShow from '../Components/PdfShow'
import { Sidebar } from '../Components/Sidebar'
import { Navbar } from '../Components/Navbar'
import Approved from '../Components/Approved'
import { useSearchParams } from 'next/navigation'

export default function page() {
  const searchParams = useSearchParams();

  const data = {
    title: searchParams.get("title"),
    id: searchParams.get("_id")
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100">
    {/* Sidebar */}
    <div className="lg:w-1/4 sm:w-full lg:h-screen h-auto ">
        <Sidebar />
    </div>

    {/* Main content area */}
    <div className="flex flex-col w-full lg:w-3/4">
        {/* Navbar */}
        <div className="w-full p-4 h-1/10 border-2 bg-white mb-4 shadow-2xl rounded-xl">
            <div>
                <Navbar/>
            </div>
        </div>
        <div className="h-4/5 w-9/10 bg-white my-4 mx-4 flex">
            <PdfShow data={data}/>
          <div className='flex flex-col ml-24 mt-24'> 
            <Approved prop="Approved"/> 
          <Approved prop="Not Approved"/>
          </div>
        </div>
    </div>
</div>
  )
}
