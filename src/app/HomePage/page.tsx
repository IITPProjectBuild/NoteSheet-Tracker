"use client"
import { Tabs } from '@mui/base'
import React from 'react'
import { useState } from 'react'
import UnstyledTabsIntroduction from '../Components/Tabs'
import { Sidebar } from '../Components/Sidebar'
import { Navbar } from '../Components/Navbar'
import { Paginatedlist } from '../Components/Paginatedlist'
export default function page() {
  const [id,setId]=useState(0)
  return (
<div className='flex flex-col lg:flex-row bg-gray-100 overflow-hidden'>
      {/* Sidebar */}
      <div className='lg:w-1/4 sm:w-full lg:h-screen h-auto '>
        <Sidebar />
      </div>
  
      {/* Main content area */}
      <div className='flex flex-col w-full lg:w-3/4'>
        {/* Navbar */}
        <div className='w-full p-4 h-1/10 border-2 bg-white mb-4 shadow-2xl rounded-xl'>
          <div><Navbar/></div>
        </div>
  
        {/* Tabstyle */}
        <div className='flex-1 sm:w-full lg:w-full z-10  lg:h-3/4 overflow-y-auto'>
          <UnstyledTabsIntroduction onTabChange={setId}/>
        </div>
        <Paginatedlist/>
        
      </div>
    </div>
  )
}
