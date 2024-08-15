"use client"
import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaRegUser } from "react-icons/fa";
import UseAutocomplete from './Autocomplete';
import UnstyledTabsIntroduction from './Tabs';
import Link from 'next/link';
import { FaGear } from 'react-icons/fa6';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { List } from './List';

export const Navbar = () => {
  const [showList, setShowList] = useState(false);

  const handleAvatarClick = () => {
    setShowList((prev) => !prev);
  };
  return (
    <div className='w-full h-2/5 flex flex-col md:flex-row justify-around items-center text-gray-600 text-2xl font-black font-serif'>
      <span className='hover:text-blue-800 hover:shadow-xl border-2 border-inherit mb-4 md:mb-0'>
        <Link href="#">DASHBOARD</Link>
      </span>
      
      <div className='flex w-full md:w-2/3 flex-col md:flex-row justify-between items-center z-20'>
        <div className='w-full md:w-auto mb-4 md:mb-0'>
          <UseAutocomplete />
        </div>
        
        <div className='flex items-center justify-evenly md:mr-4 relative'>
          <span className='mr-6 md:mr-12 cursor-pointer'>
            <FaGear />
          </span>
          <div className='relative'>
            <Stack direction="row" spacing={2}>
              <span className='mx-4 md:mx-8 cursor-pointer'  onClick={handleAvatarClick}>
                <Avatar alt="Remy Sharp" src="/vercel.svg" />
              </span>
            </Stack>

            {/* List component with absolute positioning */}
            {showList && (
              <div className='absolute top-12 left-0 w-48 bg-white shadow-lg border rounded-md '>
                <List /> 
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  
  )
}
