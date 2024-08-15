"use client"
import Link from 'next/link'
import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
export const Templatechoose = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className='flex flex-wrap justify-around p-5 h-full w-full border-2'>
      <Link href="Notesheet"><div className='w-40 h-52 bg-white m-2.5 flex items-center justify-center border-2 cursor-pointer hover:shadow-2xl hover:border-b-2 hover:text-blue-700 hover:font-bold' onClick={handleOpen}>Template 1</div></Link> 
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    
    <Link href="Notesheet"><div className='w-40 h-52 bg-white m-2.5 flex items-center justify-center border-2 cursor-pointer hover:shadow-2xl hover:border-b-2 hover:text-blue-700 hover:font-bold' onClick={handleOpen}>Template 2</div></Link>
   
   <Link href="Notesheet"><div className='w-40 h-52 bg-white m-2.5 flex items-center justify-center border-2 cursor-pointer hover:shadow-2xl hover:border-b-2 hover:text-blue-700 hover:font-bold' onClick={handleOpen}>Template 3</div></Link>
   
   <Link href="Notesheet"><div className='w-40 h-52 bg-white m-2.5 flex items-center justify-center border-2 cursor-pointer hover:shadow-2xl hover:border-b-2 hover:text-blue-700 hover:font-bold' onClick={handleOpen}>Template 4</div></Link>
   
   <Link href="Notesheet"><div className='w-40 h-52 bg-white m-2.5 flex items-center justify-center border-2 cursor-pointer hover:shadow-2xl hover:border-b-2 hover:text-blue-700 hover:font-bold' onClick={handleOpen}>Template 5</div>
   </Link>
   </div>
  );
}
