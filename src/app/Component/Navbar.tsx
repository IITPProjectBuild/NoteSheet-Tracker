import Link from 'next/link';
import React from 'react';
import { FaAddressBook } from "react-icons/fa";
import {FaRegUser} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-blue-950 w-full text-lg mb-3.5">
    <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-4">
      {/* Top Left: IITP Logo */}
      <a href="#" className="flex items-center space-x-3 order-1 md:order-none">
        <img src="/iitp logo.png" alt="IITP Logo" className="h-12 w-auto" />
      </a>
      
      {/* Center: Nav Links */}
      <div className="flex-grow flex justify-center order-3 md:order-none mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-center font-medium">
          <li>
            <a href="#" className="block py-2 px-3 text-white bg-blue-950 rounded md:bg-transparent md:text-white hover:font-bold" aria-current="page">Home</a>
          </li>
          <li>
            <Link href="Template" className="block py-2 px-3 text-white rounded hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:font-bold">My Notesheet</Link>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-white rounded hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:font-bold">Pending</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-white rounded hover:bg-blue-950 md:hover:bg-transparent md:border-0 md:hover:font-bold">Link</a>
          </li>
        </ul>
      </div>

      {/* Top Right: FaAddressBook Icon */}
      <div className="flex items-center space-x-4 order-2 md:order-none mt-4 md:mt-0">
        <FaRegUser className="text-white text-3xl cursor-pointer" />
      </div>
    </div>
  </nav>

  );
}

export default Navbar;
