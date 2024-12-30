'use client'
import React, { useState } from 'react';
import Image from 'next/image';  
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 flex justify-center w-full z-50 py-3 '>
      <div className="flex justify-between items-center bg-[#E39855] w-[90%] py-3 rounded-2xl px-4 sm:px-8 md:px-12 shadow-lg gap-4 sm:gap-10">
        <Link href="/">
          <Image 
            src="/logo.jpg" 
            alt="logo" 
            width={50} 
            height={50} 
            className='rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300' 
          />
        </Link>
        
        <div className='hidden sm:flex justify-center items-center text-white text-sm sm:text-lg gap-8 sm:gap-16'>
          <Link href="/">
            <span className='hover:text-gray-200 transition-colors duration-200 cursor-pointer font-inter font-normal'>About</span>
          </Link>
          <Link href="/portfolio">
            <span className='hover:text-gray-200 transition-colors duration-200 cursor-pointer font-inter font-normal'>Portfolio</span>
          </Link>
          <Link href="/stocks">
            <span className='hover:text-gray-200 transition-colors duration-200 cursor-pointer font-inter font-normal'>Stocks</span>
          </Link>
        </div>

        <div className='hidden sm:flex justify-center items-center gap-4 sm:gap-8'>
          <Link href="/signin">
            <button className='bg-white text-indigo-600 px-4 sm:px-5 py-2 rounded-full hover:bg-gray-100 shadow-md font-ibm-plex-serif text-sm sm:text-base'>Sign In</button>
          </Link>
          <Link href="/signup">
            <button className='bg-indigo-600 text-white px-4 sm:px-5 py-2 rounded-full hover:bg-indigo-700 shadow-md font-ibm-plex-serif text-sm sm:text-base'>Sign Up</button>
          </Link>
        </div>

        <div className='sm:hidden flex items-center'>
          <FaBars className='text-white text-2xl cursor-pointer' onClick={toggleMenu} />
        </div>
      </div>

      {menuOpen && (
        <div className='absolute top-0 right-0 h-auto w-3/5 max-w-xs bg-[#E39855] flex flex-col items-start py-6 shadow-lg rounded-bl-2xl mt-3 mr-6 rounded-2xl'>
          <div className='w-full flex justify-end pr-6'>
            <FaTimes className='text-white text-2xl cursor-pointer' onClick={toggleMenu} />
          </div>
          <Link href="/" className='py-4 pl-6 text-white hover:text-gray-200 transition-colors duration-200 w-full font-monserrat text-xl'>About</Link>
          <Link href="/portfolio" className='py-4 pl-6 text-white hover:text-gray-200 transition-colors duration-200 w-full font-monserrat  text-xl'>Portfolio</Link>
          <Link href="/stocks" className='py-4 pl-6 text-white hover:text-gray-200 transition-colors duration-200 w-full font-monserrat  text-xl'>Stocks</Link>

          <Link
            href={`/signin`}
          >
                <button className='text-indigo-600 bg-white ml-3 px-4 sm:px-5 py-2 pl-6 rounded-full hover:bg-indigo-700 shadow-md font-monserrat text-lg'>Sign In</button>
          </Link>
          <Link href={`/signup`}>
              <button className='mt-4 ml-3 bg-indigo-600 text-white px-4 sm:px-5 py-2 pl-6 rounded-full hover:bg-indigo-700 shadow-md font-monserrat  text-lg'>Sign Up</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
